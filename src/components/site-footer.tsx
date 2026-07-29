import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock } from "lucide-react";
import logo from "@/assets/sun-of-may.png";
import { business, telHref, waHref } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-seagrad text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={48} height={48} loading="lazy" className="h-12 w-12" />
            <span className="font-display text-2xl">La Pampa</span>
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Petit déjeuner, crêpes et snacks face à la Méditerranée. Service sur place et à emporter —
            nous ne faisons pas de livraison.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram La Pampa"
              className="rounded-full bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook La Pampa"
              className="rounded-full bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={waHref("Bonjour La Pampa !")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp La Pampa"
              className="rounded-full bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <h2 className="eyebrow opacity-70">Nous trouver</h2>
          <p className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">
              {business.address}
            </a>
          </p>
          <p className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {business.hours}
          </p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <a href={telHref} className="font-semibold hover:underline">
              {business.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h2 className="eyebrow opacity-70">Pages</h2>
          <Link to="/" className="block hover:underline">
            Accueil
          </Link>
          <Link to="/menu" className="block hover:underline">
            Notre carte
          </Link>
          <Link to="/contact" className="block hover:underline">
            Réserver une table
          </Link>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="block hover:underline">
            Itinéraire Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} La Pampa · Beni Khiar, Nabeul · Sur place & à emporter
      </div>
    </footer>
  );
}
