export const COMPANY = {
  name: 'JTB Toiture',
  owner: 'Teddy Bracquemart',
  slogan: 'Toiture · Charpente · Zinguerie',
  phone: '06 11 17 64 49',
  phoneLink: 'tel:0611176449',
  phoneLandline: '04 95 50 51 63',
  phoneLandlineLink: 'tel:0495505163',
  email: 'Teddybracquemart06@gmail.com',
  whatsapp: 'https://wa.me/33611176449',
  address: '13 Rue Pasteur, 06800 Cagnes-sur-Mer',
  hours: 'Lundi – Samedi : 7h – 19h',
  zone: 'Toute la Côte d\'Azur',
}

export const TRUST_ITEMS = [
  {
    icon: 'fa-shield-halved',
    title: 'Garantie décennale',
    text: 'Sur tous les travaux',
  },
  {
    icon: 'fa-bolt',
    title: 'Intervention rapide',
    text: 'Sous 48 heures',
  },
  {
    icon: 'fa-file-invoice',
    title: 'Devis gratuit',
    text: 'Sans engagement',
  },
  {
    icon: 'fa-award',
    title: 'Artisan qualifié',
    text: 'Côte d\'Azur',
  },
]

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1759848637971-6d53c994a1f9?w=1920&q=85',
  about: 'https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?w=700&q=80',
}

export const PRESTATIONS = [
  {
    id: 'charpente',
    title: 'Charpente',
    icon: 'fa-hammer',
    description:
      'Construction, rénovation et réparation de charpente bois. Structures traditionnelles et fermettes industrielles, adaptées à votre projet.',
    image: 'https://images.unsplash.com/photo-1676802540678-2dceb1820113?w=600&q=80',
  },
  {
    id: 'toiture',
    title: 'Toiture',
    icon: 'fa-house-chimney',
    description:
      'Pose et réfection complète : tuiles, ardoises, bac acier. Réparation de fuites, nettoyage, hydrofuge et démoussage professionnel.',
    image: 'https://images.unsplash.com/photo-1774538410784-2a2b52fb6999?w=600&q=80',
  },
  {
    id: 'zinguerie',
    title: 'Zinguerie',
    icon: 'fa-droplet',
    description:
      'Gouttières, faîtages, noues et chéneaux. Installation et réparation en zinc, cuivre ou PVC pour une étanchéité parfaite.',
    image: 'https://images.unsplash.com/photo-1518736346281-76873166a64a?w=600&q=80',
  },
  {
    id: 'isolation',
    title: 'Isolation',
    icon: 'fa-temperature-low',
    description:
      'Isolation des combles et sous-toiture, étanchéité à l\'air et protection thermique. Réduisez vos dépenses énergétiques durablement.',
    image: 'https://images.unsplash.com/photo-1600877841955-af3c51dac2fe?w=600&q=80',
  },
]

export const GALLERY_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=1400&q=85',
    caption: 'Réfection complète de toiture',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1774538410784-2a2b52fb6999?w=600&q=80',
    srcFull: 'https://images.unsplash.com/photo-1774538410784-2a2b52fb6999?w=1400&q=85',
    caption: 'Pose de tuiles canal',
  },
  {
    src: 'https://images.unsplash.com/photo-1676802540678-2dceb1820113?w=600&q=80',
    srcFull: 'https://images.unsplash.com/photo-1676802540678-2dceb1820113?w=1400&q=85',
    caption: 'Charpente traditionnelle',
  },
  {
    src: 'https://images.unsplash.com/photo-1580642866497-dde93c97492b?w=600&q=80',
    srcFull: 'https://images.unsplash.com/photo-1580642866497-dde93c97492b?w=1400&q=85',
    caption: 'Fenêtres de toit et velux',
  },
  {
    src: 'https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?w=600&q=80',
    srcFull: 'https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?w=1400&q=85',
    caption: 'Zinguerie et étanchéité',
  },
  {
    src: 'https://images.unsplash.com/photo-1600612707884-c424a2ba812e?w=600&q=80',
    srcFull: 'https://images.unsplash.com/photo-1600612707884-c424a2ba812e?w=1400&q=85',
    caption: 'Rénovation villa',
  },
]

export const STATS = [
  { value: 10, suffix: '+', label: 'Années d\'expérience' },
  { value: 500, suffix: '+', label: 'Chantiers réalisés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 48, suffix: 'h', label: 'Délai d\'intervention' },
]

export const CITIES = [
  'Nice', 'Cagnes-sur-Mer', 'Antibes', 'Cannes',
  'Vence', 'Mougins', 'Grasse', 'Saint-Laurent-du-Var', 'Villeneuve-Loubet',
]

export const PRESTATION_OPTIONS = [
  { value: 'charpente', label: 'Charpente' },
  { value: 'toiture', label: 'Toiture (pose ou réfection)' },
  { value: 'reparation', label: 'Réparation ou dépannage' },
  { value: 'zinguerie', label: 'Zinguerie ou Gouttières' },
  { value: 'isolation', label: 'Isolation des combles' },
  { value: 'nettoyage', label: 'Nettoyage ou Démoussage' },
  { value: 'autre', label: 'Autre' },
]
