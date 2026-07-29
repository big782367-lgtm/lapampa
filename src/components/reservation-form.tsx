import { useState, type FormEvent } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { telHref, waHref, business } from "@/lib/business";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      `Bonjour La Pampa, je souhaite réserver une table.`,
      `Nom : ${name || "—"}`,
      `Personnes : ${people}`,
      `Date : ${date || "—"}`,
      `Heure : ${time || "—"}`,
      note ? `Message : ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waHref(message), "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-2xl">Réserver votre table</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Remplissez le formulaire : votre demande part directement sur notre WhatsApp et nous confirmons en
        quelques minutes. Service sur place et à emporter uniquement.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium sm:col-span-2">
          Nom
          <input
            className={`mt-1.5 ${field}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Personnes
          <input
            type="number"
            min={1}
            className={`mt-1.5 ${field}`}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </label>
        <label className="block text-sm font-medium">
          Date
          <input type="date" className={`mt-1.5 ${field}`} value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Heure souhaitée
          <input type="time" className={`mt-1.5 ${field}`} value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Message (optionnel)
          <textarea
            rows={3}
            className={`mt-1.5 ${field}`}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Table en terrasse vue mer, anniversaire, groupe…"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Envoyer sur WhatsApp
        </button>
        <a
          href={telHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Appeler {business.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
