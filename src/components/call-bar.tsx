import { Phone, MessageCircle } from "lucide-react";
import { telHref, waHref, business } from "@/lib/business";

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={telHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset py-3.5 text-sm font-bold text-accent-foreground shadow-soft"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Appeler {business.phoneDisplay}
        </a>
        <a
          href={waHref("Bonjour La Pampa, je souhaite réserver une table.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-bold text-primary-foreground shadow-soft"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
