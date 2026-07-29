export const business = {
  name: "La Pampa",
  tagline: "Petit déjeuner & crêperie face à la mer — Beni Khiar",
  phoneDisplay: "20 003 922",
  phoneIntl: "+21620003922",
  whatsapp: "21620003922",
  address: "FQ3P+FRX, Av. de la Liberté, Beni Khiar, Tunisie",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Pampa+Beni+Khiar",
  instagram: "https://www.instagram.com/la_pampa_bk/",
  facebook: "https://www.facebook.com/profile.php?id=100063523061956&locale=fr_CA",
  rating: 4.5,
  reviewCount: 50,
  priceRange: "TND 1–10",
  hours: "Tous les jours · 17h00 – minuit",
} as const;

export const telHref = `tel:${business.phoneIntl}`;
export const waHref = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const menu = [
  {
    id: "petit-dejeuner",
    title: "Petit déjeuner",
    note: "Servi face à la mer, sur place uniquement",
    items: [
      {
        name: "Menu Express",
        price: "9,0 DT",
        desc: "Café au choix + viennoiserie au choix ou pancakes, jus frais, eau 0,5 L.",
      },
      {
        name: "Menu Détente",
        price: "14,0 DT",
        desc: "Menu Express + beurre, miel, confiture, chocolat, omelette, saucisses, pain à tartiner.",
      },
      {
        name: "Menu Régal",
        price: "19,0 DT",
        desc: "Menu Détente + assiette de fromage et charcuterie + assiette de fruits de saison.",
      },
      {
        name: "Menu La Pampa",
        price: "40,0 DT",
        desc: "Pour 2 : 2 cafés, viennoiserie, cake, 2 jus frais, 1 L d'eau, chocolat, miel, confiture, beurre, pancakes, mini crêpe, fromages variés, nuggets & fingers, saucisses, omelette spéciale, charcuterie, fruits de saison, 2 yaourts brassés, pain à tartiner.",
        featured: true,
      },
    ],
  },
  {
    id: "tanouicha",
    title: "Tanouicha & snacks",
    note: "Chaud, rapide, servi en salle ou en terrasse",
    items: [
      { name: "Panini Thon", price: "8,0 DT", desc: "Pain panini grillé, thon, garniture maison." },
      { name: "Panini Jambon", price: "7,0 DT", desc: "Pain panini grillé, jambon, fromage fondu." },
      { name: "Omelette Fromage", price: "7,5 DT", desc: "Omelette généreuse au fromage." },
      { name: "Omelette Thon", price: "8,5 DT", desc: "Omelette au thon, servie chaude." },
      { name: "Hamburger Ciabatta", price: "—", desc: "Notre burger signature en pain ciabatta." },
    ],
  },
  {
    id: "sucre",
    title: "Sucré & café",
    note: "Les incontournables de la maison",
    items: [
      { name: "Crêpe Fraise Nutella", price: "—", desc: "Crêpe fine, Nutella, fraises fraîches." },
      { name: "Gaufre Nutella & fruits frais", price: "—", desc: "Gaufre croustillante, fruits coupés." },
      { name: "Pancake Nutella", price: "6,5 DT", desc: "Pancakes moelleux au Nutella." },
      { name: "Pancake Chocolat", price: "4,5 DT", desc: "Pancakes moelleux au chocolat." },
      { name: "Cake fait maison", price: "3,0 DT", desc: "Tranche de cake préparée le matin." },
      { name: "Café crème & croissant amandes", price: "—", desc: "Le duo du réveil au bord de l'eau." },
    ],
  },
] as const;

export const reviews = [
  {
    name: "Ra Na",
    meta: "Local Guide · 62 avis",
    text: "Au-delà de la perfection 🤩 On ne peut pas demander mieux : une vue magnifique, un service aimable, une bonne musique et une belle météo. Hygiène impeccable.",
    when: "il y a un an",
  },
  {
    name: "Ibtissem Sadfi",
    meta: "Local Guide · 32 avis",
    text: "Un endroit charmant en bord de plage, un excellent service et une vue imprenable sur la mer.",
    when: "il y a 9 mois",
  },
  {
    name: "Sabrine Boughariou",
    meta: "Local Guide · 115 avis",
    text: "La vue au petit matin est incroyable 🤩 Parfait pour un petit déjeuner tranquille.",
    when: "il y a un an",
  },
] as const;
