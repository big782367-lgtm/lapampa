import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Star, MapPin, Clock, Sun, Waves, UtensilsCrossed, Store } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CallBar } from "@/components/call-bar";
import { ReservationForm } from "@/components/reservation-form";
import { business, telHref, waHref, menu, reviews } from "@/lib/business";
import heroAsset from "@/assets/la-pampa-terrace.jpg.asset.json";
import breakfast from "@/assets/breakfast-spread.jpg";
import crepe from "@/assets/crepe.jpg";

const title = "La Pampa Beni Khiar | Petit déjeuner & crêpes face à la mer";
const description =
  "Restaurant La Pampa à Beni Khiar : petits déjeuners, crêpes, paninis et café avec vue sur la mer. 4,5★ (50 avis). Réservez au 20 003 922 — sur place et à emporter.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: business.name,
          servesCuisine: ["Petit déjeuner", "Crêperie", "Snack méditerranéen"],
          priceRange: business.priceRange,
          telephone: business.phoneIntl,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. de la Liberté",
            addressLocality: "Beni Khiar",
            addressRegion: "Nabeul",
            addressCountry: "TN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            reviewCount: business.reviewCount,
          },
          sameAs: [business.instagram, business.facebook],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="pb-24 md:pb-0">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative isolate">
          <img
            src={hero}
            alt="Terrasse du restaurant La Pampa au coucher du soleil, vue sur la mer à Beni Khiar"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-sea-deep/65" />
          <div className="mx-auto max-w-6xl px-4 py-20 text-primary-foreground sm:py-28">
            <p className="eyebrow text-accent">Beni Khiar · Bord de mer</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
              Le petit déjeuner face à la Méditerranée
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-90 sm:text-lg">
              Crêpes, gaufres, paninis et cafés servis sur notre terrasse vue mer. Une table vous attend —
              appelez ou écrivez-nous, nous réservons pour vous.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-7 py-4 text-base font-bold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Appeler le {business.phoneDisplay}
              </a>
              <a
                href={waHref("Bonjour La Pampa, je souhaite réserver une table.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
                <strong>{business.rating}</strong> · {business.reviewCount} avis Google
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden /> {business.hours}
              </span>
              <span className="inline-flex items-center gap-2">
                <Store className="h-4 w-4" aria-hidden /> Sur place & à emporter
              </span>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-border bg-sand">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Waves, title: "Vue mer imprenable", text: "Terrasse ouverte sur la plage de Beni Khiar." },
              { icon: Sun, title: "Petit déjeuner généreux", text: "4 formules de 9 DT à 40 DT, dressées à la minute." },
              { icon: UtensilsCrossed, title: "Fait maison", text: "Crêpes, gaufres, cakes et omelettes préparés sur place." },
              { icon: Star, title: "4,5★ sur Google", text: "Accueil, hygiène et ambiance familiale salués par 50 avis." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-5 shadow-soft">
                <f.icon className="h-6 w-6 text-sun-deep" aria-hidden />
                <h2 className="mt-3 font-display text-lg">{f.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu highlights */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="eyebrow text-sun-deep">La carte</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Nos formules les plus demandées</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={breakfast}
                alt="Formule petit déjeuner La Pampa : viennoiseries, pancakes, omelette, fromages et jus frais"
                width={1200}
                height={912}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl">Petit déjeuner</h3>
                <ul className="mt-4 space-y-3">
                  {menu[0].items.map((i) => (
                    <li key={i.name} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0">
                      <span className="text-sm font-medium">{i.name}</span>
                      <span className="shrink-0 text-sm font-bold text-sun-deep">{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={crepe}
                alt="Crêpe fraise Nutella et café crème servis en terrasse vue mer"
                width={1008}
                height={1008}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl">Sucré, paninis & café</h3>
                <ul className="mt-4 space-y-3">
                  {[...menu[2].items.slice(0, 3), ...menu[1].items.slice(0, 2)].map((i) => (
                    <li key={i.name} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0">
                      <span className="text-sm font-medium">{i.name}</span>
                      <span className="shrink-0 text-sm font-bold text-sun-deep">{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-sun-deep px-6 py-3 text-sm font-semibold text-sun-deep transition-colors hover:bg-sun/20"
            >
              Voir toute la carte
            </Link>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-sand py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <p className="eyebrow text-sun-deep">Ils sont venus</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">4,5★ pour la vue, l'accueil et l'hygiène</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-4 text-xs text-muted-foreground">
                    <strong className="text-foreground">{r.name}</strong> · {r.meta} · {r.when}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Location + form */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-sun-deep">Nous rendre visite</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Venez déguster sur place</h2>
              <p className="mt-4 text-muted-foreground">
                Nous ne faisons pas de livraison : tout se savoure chez nous, en salle ou en terrasse, ou à
                emporter en passant au comptoir. C'est aussi ça, l'expérience La Pampa.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden />
                  <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    {business.address}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden />
                  {business.hours}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden />
                  <a href={telHref} className="font-semibold hover:underline">
                    {business.phoneDisplay}
                  </a>
                </li>
              </ul>
              <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title="Carte — La Pampa, Beni Khiar"
                  src="https://www.google.com/maps?q=Beni%20Khiar%20Av.%20de%20la%20Libert%C3%A9&output=embed"
                  loading="lazy"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>
            <ReservationForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <CallBar />
    </div>
  );
}
