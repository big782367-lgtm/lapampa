import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CallBar } from "@/components/call-bar";
import { ReservationForm } from "@/components/reservation-form";
import { business, telHref, waHref } from "@/lib/business";

const title = "Réserver une table | La Pampa Beni Khiar";
const description =
  "Réservez votre table à La Pampa, Av. de la Liberté à Beni Khiar. Appelez le 20 003 922, écrivez-nous sur WhatsApp ou envoyez votre demande en ligne. Sur place et à emporter.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pb-24 md:pb-0">
      <SiteHeader />
      <main>
        <section className="bg-seagrad py-14 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4">
            <p className="eyebrow text-accent">Contact</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Réservez, appelez, passez nous voir</h1>
            <p className="mt-4 max-w-xl opacity-90">
              Nous répondons vite au téléphone et sur WhatsApp. La Pampa ne livre pas : tout se déguste sur
              place ou à emporter.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <div className="grid gap-4">
              <a
                href={telHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:scale-[1.01]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sunset text-accent-foreground">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">Appelez-nous</span>
                  <span className="block truncate font-display text-xl">{business.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={waHref("Bonjour La Pampa, je souhaite réserver une table.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:scale-[1.01]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp text-primary-foreground">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  <span className="block truncate font-display text-xl">+216 20 003 922</span>
                </span>
              </a>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="flex gap-3 text-sm">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden />
                  <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    {business.address}
                  </a>
                </p>
                <p className="mt-3 flex gap-3 text-sm">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden />
                  {business.hours}
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram La Pampa"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook La Pampa"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Carte — La Pampa, Beni Khiar"
                src="https://www.google.com/maps?q=Beni%20Khiar%20Av.%20de%20la%20Libert%C3%A9&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>
          </div>

          <ReservationForm />
        </div>
      </main>
      <SiteFooter />
      <CallBar />
    </div>
  );
}
