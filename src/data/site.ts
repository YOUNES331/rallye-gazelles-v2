// Constantes du site. Les liens « officiels » pointent vers le site actuel :
// aucune page autre que l'accueil n'est développée dans ce prototype.
export const OFFICIEL = 'https://www.rallyeaichadesgazelles.com';
export const off = (path: string) => `${OFFICIEL}${path}`;

export const site = {
  nom: 'Rallye Aïcha des Gazelles du Maroc',
  edition: '36ᵉ édition',
  dates: '20 mars – 3 avril 2027',
  patronage: 'Sous le Haut Patronage de Sa Majesté Le Roi Mohammed VI',
  video: 'https://gazelles-b057.kxcdn.com/wp-content/themes/Avada-Child-Theme/2025/assets/video/rallye-aicha-des-gazelles-h264.mp4',
  contact: 'maienga@maienga.com',
};

// Boutons existants du site actuel (libellés et destinations conservés)
export const liens = {
  demandeInfos: off('/devenir-gazelle/demande-infos/'),
  etapes: off('/devenir-gazelle/les-etapes/'),
  reunions: off('/devenir-gazelle/reunions-infos/'),
  conditions: off('/devenir-gazelle/conditions-dinscription/'),
  concept: off('/evenement/le-concept/'),
  valeurs: off('/evenement/valeurs/'),
  organisation: off('/evenement/organisation-et-securite/'),
  temoignages: off('/evenement/temoignages/'),
  coeurDeGazelles: 'https://www.coeurdegazelles.org/',
  en: off('/en/'),
};
