import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-4">
                <ContactCard
                    title="Ta kontakt"
                    description="Har du spørsmål om tjenestene våre eller trenger hjelp? Fyll ut skjemaet så svarer vi innen 1 virkedag."
                    contactInfo={[
                        { icon: MailIcon, label: 'E-post', value: 'hei@leantech.no' },
                        { icon: PhoneIcon, label: 'Telefon', value: '+47 000 00 000' },
                        { icon: MapPinIcon, label: 'Adresse', value: 'Oslo, Norge', className: 'col-span-2' },
                    ]}
                >
                    <form className="w-full space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label>Navn</Label>
                            <Input type="text" placeholder="Ditt navn" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>E-post</Label>
                            <Input type="email" placeholder="din@epost.no" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Telefon</Label>
                            <Input type="tel" placeholder="+47" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Melding</Label>
                            <Textarea placeholder="Hva kan vi hjelpe deg med?" />
                        </div>
                        <Button className="w-full" type="button">Send melding</Button>
                    </form>
                </ContactCard>
            </div>
        </section>
    );
}
