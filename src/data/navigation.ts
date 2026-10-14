// Menu principal : même rubriques, même ordre, mêmes destinations que le site officiel.
// Source unique utilisée par l'en-tête (bureau), le menu mobile et le pied de page.
import { off } from './site';

export interface NavItem {
  label: string;
  href?: string;
  newTab?: boolean;
  children?: NavItem[];
}

export const nav: NavItem[] = [
  {
    label: 'L’Événement',
    children: [
      { label: 'Historique', href: off('/evenement/historique-du-rallye/') },
      { label: 'Concept Sportif', href: off('/evenement/le-concept/') },
      { label: 'Valeurs', href: off('/evenement/valeurs/') },
      { label: 'Organisation et Sécurité', href: off('/evenement/organisation-et-securite/') },
      { label: 'Témoignages', href: off('/evenement/temoignages/') },
      { label: 'Rayonnement Médiatique', href: off('/evenement/rayonnement-mediatique/') },
      {
        label: 'Éditions précédentes',
        children: [
          { label: 'Édition 2025', href: 'https://live2025.rallyeaichadesgazelles.com/', newTab: true },
          { label: 'Phototèque 2025', href: off('/phototheque-2025/') },
          { label: 'Édition 2026', href: 'https://live2026.rallyeaichadesgazelles.com/', newTab: true },
          { label: 'Phototèque 2026', href: off('/phototheque-2026/') },
        ],
      },
    ],
  },
  {
    label: 'Édition 2027',
    children: [
      { label: 'Dates 2027', href: off('/edition-2027/dates-2027/') },
      { label: 'Les équipages au départ', href: off('/edition-2027/les-equipages-au-depart/') },
      { label: 'Les partenaires', href: off('/evenement/partenaires/') },
    ],
  },
  {
    label: 'En Images',
    href: 'https://www.youtube.com/watch?v=i4anMXIiVuQ&list=PL30yWTPWVyrNklT40EgEeYdjR_ROZqv-J',
    newTab: true,
  },
  {
    label: 'Édition 2026',
    children: [
      { label: 'Dates 2026', href: off('/edition-2026/dates-2026/') },
      { label: 'Actualités', href: off('/edition-2026/actualites/') },
      { label: 'Les équipages au départ', href: off('/edition-2026/les-equipages-au-depart/') },
      { label: 'Les gazelles solidaires', href: off('/edition-2026/les-gazelles-solidaires/') },
      { label: 'Plan Média RAG26', href: 'https://live2026.rallyeaichadesgazelles.com/plan-media/', newTab: true },
    ],
  },
  {
    label: 'Devenir Gazelle',
    children: [
      { label: 'Les étapes', href: off('/devenir-gazelle/les-etapes/') },
      { label: 'Demande d’infos', href: off('/devenir-gazelle/demande-infos/') },
      { label: 'Réunions d’infos', href: off('/devenir-gazelle/reunions-infos/') },
      { label: 'Préinscription en ligne', href: off('/devenir-gazelle/pre-inscription/') },
      { label: 'Conditions d’inscription', href: off('/devenir-gazelle/conditions-dinscription/') },
      { label: 'Gazelle entreprise', href: off('/devenir-gazelle/pack-entreprise/') },
      { label: 'Espace participantes', href: off('/espace-gazelles/') },
    ],
  },
  { label: 'Boutique', href: 'https://www.maiengastore.com/shop/', newTab: true },
  {
    label: 'Contact',
    children: [
      { label: 'Participantes', href: off('/contact/participantes/') },
      { label: 'Médias / Presse', href: off('/contact/medias-presse/') },
      { label: 'Partenariats', href: off('/contact/partenariat/') },
    ],
  },
];

// Raccourcis vers les sections du prototype (indicateur latéral)
export const sections = [
  { id: 'le-defi', label: 'Le défi sportif' },
  { id: 'chiffres', label: 'Le Rallye en chiffres' },
  { id: 'impossible', label: 'La force des femmes' },
  { id: 'devenir-gazelle', label: 'Devenir Gazelle' },
  { id: 'valeurs', label: 'Valeurs et engagements' },
  { id: 'paroles', label: 'Paroles de gazelles' },
  { id: 'galerie', label: 'Galerie' },
];

export const footerLiens = {
  rallye: [
    { label: 'Concept Sportif', href: off('/evenement/le-concept/') },
    { label: 'Organisation et Sécurité', href: off('/evenement/organisation-et-securite/') },
    { label: 'Valeurs', href: off('/evenement/valeurs/') },
    { label: 'Témoignages', href: off('/evenement/temoignages/') },
    { label: 'Partenaires', href: off('/evenement/partenaires/') },
    { label: 'Presse', href: off('/medias/press-kit/') },
  ],
  devenir: [
    { label: 'Les étapes', href: off('/devenir-gazelle/les-etapes/') },
    { label: 'Demande d’infos', href: off('/devenir-gazelle/demande-infos/') },
    { label: 'Réunions d’infos', href: off('/devenir-gazelle/reunions-infos/') },
    { label: 'Conditions d’inscription', href: off('/devenir-gazelle/conditions-dinscription/') },
    { label: 'Gazelle entreprise', href: off('/devenir-gazelle/pack-entreprise/') },
  ],
  univers: [
    { label: 'Boutique', href: 'https://www.maiengastore.com' },
    { label: 'Maïenga', href: 'https://www.maienga.com' },
    { label: 'Trek’in Gazelles', href: 'https://www.trekingazelles.com/' },
    { label: 'Bab el Raid', href: 'https://www.babelraid.com/' },
    { label: 'Cœur de Gazelles', href: 'https://www.coeurdegazelles.org/' },
  ],
  reseaux: [
    { label: 'Instagram', href: 'https://www.instagram.com/rallyeaichadesgazelles/' },
    { label: 'Facebook', href: 'https://www.facebook.com/rallyeaichadesgazelles/' },
    { label: 'LinkedIn', href: 'https://fr.linkedin.com/showcase/rallye-a%C3%AFcha-des-gazelles-du-maroc' },
    { label: 'YouTube', href: 'https://www.youtube.com/@maiengasportsevents' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@maienga.sports.events' },
  ],
};
