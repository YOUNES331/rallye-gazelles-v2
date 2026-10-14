// Contenus de la page d'accueil. Les textes viennent du site officiel, des documents
// de l'équipe (PDF Canva) ou de sources publiques vérifiées ; rien n'est inventé.

// Parcours officiel (page « Les étapes » du site actuel)
export const etapes = [
  { n: 1, titre: 'Demandez des informations', texte: 'Faites une demande d’infos et rejoignez une réunion visio gratuite, ouverte à toutes : une session de présentation du Rallye est organisée chaque mois.' },
  { n: 2, titre: 'Contactez-nous', texte: 'Une équipe à vos côtés, du premier appel à la ligne d’arrivée : constitution du projet, budget, recherche de sponsors, logistique.' },
  { n: 3, titre: 'Créez votre équipage', texte: 'Choisissez votre binôme, votre coéquipière de cœur : celle avec qui vous partagerez l’épreuve.' },
  { n: 4, titre: 'Préinscrivez-vous', texte: 'Accédez à tous les outils pour structurer votre projet : dossier sponsors, visuels, conseils personnalisés, espace dédié.' },
  { n: 5, titre: 'Avancez avec l’aide d’un coach', texte: 'Un coach professionnel vous aide à structurer votre parcours, à faire des points réguliers et à garder le cap.' },
  { n: 6, titre: 'Inscrivez-vous dès que votre budget est prêt', texte: 'Validez votre inscription auprès de votre relation équipage et embarquez officiellement dans l’aventure.' },
];

// Les quatre piliers de la compétition (site officiel, dossier de presse 2024, page Concept)
export const piliers = [
  { id: 'navigation', titre: 'Navigation', texte: 'Une carte, une boussole, une règle. Pas de GPS, pas de téléphone : les équipages n’ont que les coordonnées des points de passage.' },
  { id: 'strategie', titre: 'Stratégie', texte: 'Chaque équipage choisit librement son parcours pour rejoindre les points de passage obligatoires, et assume chacune de ses décisions.' },
  { id: 'precision', titre: 'Précision', texte: 'Le classement ne récompense pas la vitesse : il revient à celles qui valident le plus de balises en parcourant le moins de kilomètres.' },
  { id: 'endurance', titre: 'Endurance', texte: '7 jours de compétition dont 2 marathons : deux nuits à la belle étoile, en totale autonomie, au cœur du désert.' },
];

export const chiffres = [
  { valeur: 36, suffixe: 'ᵉ', label: 'édition du Rallye, en 2027' },
  { valeur: 160, suffixe: '', label: 'équipages au départ en 2026' },
  { valeur: 7, suffixe: '', unite: 'jours', label: 'de compétition, dont 2 marathons' },
  { valeur: 250, suffixe: '+', label: 'professionnels d’encadrement : médecins, mécaniciens, organisation' },
];

export const garanties = [
  'Ouvert à toutes les femmes de plus de 18 ans, novices ou expérimentées',
  'Un week-end de formation pour acquérir les bases : lecture de carte, navigation, stratégie',
  'Un coach professionnel pour vous accompagner jusqu’au départ',
];

// Témoignages : citations reprises à l'identique de la page Témoignages du site officiel
export const temoignages = [
  { texte: 'C’est du dépassement de soi, on nous pousse dans nos retranchements, je suis tellement fière de nous, de toutes les 2, et de toutes les gazelles parce-que c’est incroyable', auteur: 'Juliette Rapaire & Sarah Gharsalli', edition: 'Édition 2025' },
  { texte: 'Je m’attendais à une compétition sportive intense, à l’engagement physique et mental, à la fatigue, au courage et au découragement, aux rires et aux larmes…', auteur: 'Julie Chailloleau Fernandez', edition: 'Édition 2025' },
  { texte: 'Le niveau de déconnexion est incroyable. On ne pense plus à rien, aux problèmes, aux autres… Oui, le rallye est fatiguant mais ça fait un bien fou à la tête', auteur: 'Juliette Labaye', edition: 'Édition 2025' },
];

// Textes alternatifs des photos officielles (provisoires)
export const alt = {
  navigation: 'Une participante casquée étudie une carte topographique avant le départ d’une étape.',
  pelles: 'Un équipage brandit ses pelles dans les dunes après un désensablement.',
  coeur: 'Une Gazelle serre dans ses bras une petite fille lors d’une action de Cœur de Gazelles.',
  helico: 'L’équipe médicale du Rallye devant l’hélicoptère d’intervention.',
  assistance: 'Un mécanicien de l’assistance du Rallye répare un véhicule.',
  flotte: 'Colonne de véhicules du Rallye sur la plage, vue aérienne.',
  dunes: 'Paysage de dunes du sud marocain, un véhicule au loin.',
  sable: 'Un 4x4 projette du sable en abordant une dune.',
  montee: 'Un 4x4 du Rallye gravit une dune.',
  contrejour: 'Un véhicule du Rallye en contre-jour sur une crête de dune.',
  effort: 'Une participante en action à côté de son 4x4, dans la poussière.',
  desensablement: 'Deux participantes poussent un 4x4 ensablé.',
  dons: 'Des Gazelles transportent des cartons de dons destinés aux populations.',
  sourires: 'Deux équipières souriantes dans leur 4x4, casques sur la tête.',
  arche: 'Un équipage célèbre sa ligne d’arrivée sous l’arche.',
  equipe: 'Des Gazelles casquées lèvent les mains ensemble.',
  affiche: 'Visuel de campagne : portrait d’une pilote en surimpression sur un relief de désert, un 4x4 dans la pente.',
};
