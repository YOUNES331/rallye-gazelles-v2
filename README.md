# Rallye Aïcha des Gazelles du Maroc : prototype UX/UI de la page d'accueil (V2)

Prototype **local** de la page d'accueil, construit avec Astro. Aucun déploiement, aucune écriture sur le site officiel, aucune fonctionnalité d'inscription ou de paiement.

## Lancer le prototype

```bash
cd C:\Users\senuo\OneDrive\Desktop\rallye-gazelles-v2
npm install        # une seule fois
npm run dev        # puis ouvrir http://localhost:4321/
```

`npm run build` vérifie que la version de production se génère (aucune mise en ligne).

## Ce que contient la page

Bandeau du Haut Patronage · en-tête avec le nouveau logo et la navigation officielle (menus déroulants, menu mobile) · hero « Chaque kilomètre compte » · le défi sportif (4 piliers) · le Rallye en chiffres · « Impossible n'est pas Gazelle » (visuel de campagne) · parcours Devenir Gazelle (6 étapes officielles) · valeurs et engagements, sécurité et encadrement · paroles de gazelles · galerie · partenaires · appel final · pied de page.

## Liens et boutons

- Les boutons existants du site (« Demande d'informations », « Découvrez la vidéo », « En savoir plus », « Demande d'infos », « Découvrez nos valeurs », « Lire leurs messages », « Découvrez Cœur de gazelles », Devenir Gazelle) **conservent leur libellé et leur destination officielle**.
- Tout lien qui mène au **site officiel actuel** porte le pictogramme **↗**, s'ouvre dans un nouvel onglet et est annoncé « site officiel » aux lecteurs d'écran.
- Les **ancres** vers les sections du prototype fonctionnent (indicateur latéral, pied de page, flèche du hero, logo).
- La vidéo officielle s'ouvre dans une fenêtre et n'est chargée qu'à l'ouverture.

## Structure

```
src/
  data/        site.ts · navigation.ts (menu officiel) · contenu.ts (textes, étapes, citations)
  styles/      tokens.css (couleurs, polices : un seul endroit) · base.css
  layouts/     BaseLayout.astro
  components/
    layout/    SiteHeader · SiteFooter · SectionDots · ProtoBadge
    ui/        Button · Compass · VideoModal
    sections/  Hero · Defi · Chiffres · Impossible · Parcours · Valeurs · Temoignages · Galerie · Partenaires · CtaFinal
  scripts/     site.js (menu, défilement, vidéo, compteurs)
  assets/      logo/ · photos/ · campagne/ · partners/
tools/capture.py   captures pleine page (outil de revue)
docs/              captures · RESSOURCES-CANVA.md · photos-temporaires.json
```

## Identité appliquée

- **Couleurs** (projet Canva) : violet `#ba71ed`, corail `#ff7d66`, rose `#fb869e`, blanc. Des **déclinaisons plus foncées de la même teinte** servent aux textes et fonds sombres pour garantir la lisibilité (par exemple blanc sur violet foncé `#6b2fa0` : 8,3:1 ; texte foncé sur corail : 6,9:1). Tout est dans `src/styles/tokens.css`.
- **Polices** : Poppins (auto-hébergée). **Ambiguity Inline n'est pas disponible** : Poppins sert de repli provisoire pour les titres. Pour l'activer, déposer les fichiers dans `src/assets/fonts/` et ajouter l'`@font-face` dans `base.css` ; `--font-title` la prend déjà en premier.
- **Logo** : fichier fourni (capture), découpé en disque. **Basse résolution (239 px)** : à remplacer par le SVG validé.

## Contenus provisoires et points à valider

- **Photos** : visuels officiels tirés du site actuel, **temporaires** (liste dans `docs/photos-temporaires.json`).
- **Hero « Chaque kilomètre compte »** : message issu de l'étude, usage définitif en titre principal **soumis à validation de la direction**.
- **Section « Impossible n'est pas Gazelle »** : texte construit à partir du document de l'équipe (histoire, « une gazelle est une athlète d'endurance »). À valider, ainsi que la date de création (1989 sur l'accueil du site officiel, 1990 ailleurs) : le prototype dit seulement « depuis plus de 35 ans ».
- **Chiffres** : 36ᵉ édition, 160 équipages au départ en 2026 (presse), 7 jours de compétition dont 2 marathons, 15 jours d'événement, « plus de 250 professionnels d'encadrement » (page des tarifs ; d'autres pages du site disent 300, 322 ou 360). À faire confirmer par Maïenga.
- **Départ « Marseille »** cité dans le document de l'équipe : non repris, car le site officiel dit « sud de la France ».
- **Témoignages** : citations reprises à l'identique de la page Témoignages du site officiel.
- Aucune fonction d'inscription, de paiement ou de formulaire n'est simulée.
