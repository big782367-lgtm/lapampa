import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/sun-of-may.png";
import { business, telHref, waHref } from "@/lib/business";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Carte" },
  { to: "/contact", label: "Réserver" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="Logo La Pampa — Soleil de Mai" width={44} height={44} className="h-11 w-11 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-none">La Pampa</span>
            <span className="block truncate text-xs text-muted-foreground">Beni Khiar · Bord de mer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waHref("Bonjour La Pampa, je souhaite réserver une table.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full bg-sunset px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden xs:inline sm:inline">{business.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            className="rounded-full border border-border p-2 md:hidden"
          >
            {open ? <MenuIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-2.5 text-sm font-medium"
            >
              {l.label}
              <X className="h-3.5 w-3.5 rotate-45 text-muted-foreground" aria-hidden />
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
