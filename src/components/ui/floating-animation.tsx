import { useEffect, useRef } from "react";

interface FloatingAnimationProps {
  colorStops?: [string, string, string];
  amplitude?: number;
  blend?: number;
  speed?: number;
  style?: React.CSSProperties;
  className?: string;
  opacity?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
}

const vertexShader = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShader = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m * m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 colorRamp(float t) {
  if (t <= 0.5) {
    return mix(uColorStops[0], uColorStops[1], t * 2.0);
  } else {
    return mix(uColorStops[1], uColorStops[2], (t - 0.5) * 2.0);
  }
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  float scaleFactor = 800.0 / uResolution.y;
  float amp = uAmplitude * scaleFactor;

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * amp;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float alpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 color = colorRamp(uv.x);
  fragColor = vec4(color * alpha, alpha);
}`;

export function FloatingAnimation({
  colorStops = ["#FF2638", "#7cff67", "#5227FF"],
  amplitude = 1,
  blend = 0.5,
  speed = 1,
  style,
  className,
  opacity = 1,
}: FloatingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uAmplitude = gl.getUniformLocation(program, "uAmplitude");
    const uBlend = gl.getUniformLocation(program, "uBlend");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uColorStops = gl.getUniformLocation(program, "uColorStops");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const colors = colorStops.map(hexToRgb).flat();
    gl.uniform3fv(uColorStops, new Float32Array(colors));
    gl.uniform1f(uAmplitude, amplitude);
    gl.uniform1f(uBlend, blend);

    let rafId: number;
    const start = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = (performance.now() - start) * 0.001 * speed;
      gl.uniform1f(uTime, t);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      gl.deleteProgram(program);
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, [colorStops, amplitude, blend, speed]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", opacity, ...style }}
      className={className}
    />
  );
}
