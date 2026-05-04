import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 px-4 py-8">

      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl">
          La planene dine forme fremtiden.
        </h2>
        <p className="text-center text-muted-foreground">
          Ta kontakt i dag — ingen forpliktelser.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline">Kontakt oss</Button>
        <Button>
          Kom i gang <ArrowRightIcon className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
