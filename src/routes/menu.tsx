import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CallBar } from "@/components/call-bar";
import { business, menu, telHref, waHref } from "@/lib/business";

const title = "Carte & prix | La Pampa Beni Khiar";
const description =
  "La carte de La Pampa à Beni Khiar : menus petit déjeuner de 9 à 40 DT, paninis, omelettes, crêpes, gaufres et pancakes. Sur place et à emporter, sans livraison.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="pb-24 md:pb-0">
      <SiteHeader />
      <main>
        <section className="bg-seagrad py-14 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4">
            <p className="eyebrow text-accent">Notre carte</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Petit déjeuner, tanouicha & sucré</h1>
            <p className="mt-4 max-w-xl opacity-90">
              Prix en dinars, service sur place ou à emporter. Pour les grandes tablées, prévenez-nous à
              l'avance au {business.phoneDisplay}.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-14">
          {menu.map((section) => (
            <section key={section.id} className="mb-14 last:mb-0">
              <h2 className="font-display text-3xl">{section.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{section.note}</p>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className={`rounded-2xl border p-5 ${
                      "featured" in item && item.featured
                        ? "border-sun bg-sand shadow-soft"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl">{item.name}</h3>
                      <span className="shrink-0 font-bold text-sun-deep">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="rounded-3xl bg-sand p-8 text-center shadow-soft">
            <h2 className="font-display text-2xl">Une envie ? Réservez votre table</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Pas de livraison : on vous garde la meilleure table face à la mer.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-soft"
              >
                <Phone className="h-4 w-4" aria-hidden /> Appeler le {business.phoneDisplay}
              </a>
              <a
                href={waHref("Bonjour La Pampa, j'ai une question sur la carte.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-soft"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CallBar />
    </div>
  );
}
