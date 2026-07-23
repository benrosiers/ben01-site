# ben01 — Néons cheap

Site officiel de l'album **Néons cheap** de ben01, chanteur virtuel IA.

Cabaret rock montréalais. Bars cheap. Ruelles. Neige sale. Amour maladroit.

---

## Structure des fichiers

```
ben01-site/
├── index.html               Site one-page principal
├── styles.css               Styles (dark, gritty, Montréal)
├── script.js                Comportements légers (fade-in, nav)
├── README.md                Ce fichier
└── assets/
    ├── cover/
    │   ├── front-official.png    Pochette officielle (hero)
    │   ├── front-no-text.png     Pochette sans texte
    │   └── back-tracklist.png    Verso avec tracklist (section album)
    ├── profile/
    │   └── ben01-profile.png     Portrait ben01 (section transparence IA)
    └── banners/
        └── facebook-cover.png    Bannière Facebook
```

---

## Lancer localement

Ouvre `index.html` directement dans un navigateur.

Aucun build, aucun serveur, aucune dépendance externe.

Le site fonctionne même si les assets ne sont pas encore copiés — les images manquantes sont ignorées gracieusement.

---

## Assets à copier

| Image | Chemin attendu |
|-------|----------------|
| Pochette officielle | `assets/cover/front-official.png` |
| Pochette sans texte | `assets/cover/front-no-text.png` |
| Verso tracklist | `assets/cover/back-tracklist.png` |
| Portrait ben01 | `assets/profile/ben01-profile.png` |
| Bannière Facebook | `assets/banners/facebook-cover.png` |

---

## Avant de publier

Cherche et remplace dans `index.html` :

| Placeholder | Remplacer par |
|-------------|---------------|
| `Benoit` | Ton vrai nom (3 occurrences) |
| `contact@ben01.ca` | Ton adresse email de contact |
| `href="#"` (liens streaming) | URLs Spotify, Apple Music, YouTube |
| `href="#"` (réseaux sociaux) | URLs Instagram, Facebook, TikTok, YouTube, Spotify, Apple Music |

---

## Liens officiels

| Lien | URL |
|------|-----|
| HyperFollow / pre-save | https://distrokid.com/hyperfollow/ben01/nons-cheap |
| Bandcamp | https://ben01.bandcamp.com/album/n-ons-cheap |
| GitHub Pages | https://benrosiers.github.io/ben01-site/ |
| Site officiel (à venir) | https://ben01.ca |

---

## Pixels de suivi

| Service | État | Où |
|---|---|---|
| Meta Pixel (Facebook/Instagram) | ✅ Actif — ID `1619702942220389` | `index.html` `<head>` |
| TikTok Pixel | ✅ Actif — ID `D9AMFCBC77UFCF7APCPG` | `index.html` `<head>` |
| GA4 (Google Analytics) | ✅ Actif — ID de mesure `G-3J3DELN4H8` | `index.html` `<head>` |
| Google Ads (conversions pub) | ⏳ Pas encore configuré — optionnel, seulement si des pubs Google/YouTube sont lancées | Ajouter l'ID de conversion (`AW-XXXXXXXXX`) dans `index.html` `<head>`, à côté du tag GA4 |

Le suivi des clics de conversion (pré-save, Bandcamp) est déjà branché dans `script.js` via
l'attribut `data-pixel-event` sur les liens concernés — il envoie l'événement à chaque pixel
réellement présent (Meta actif dès maintenant; Google/TikTok s'activeront automatiquement dès
que leurs scripts seront ajoutés, sans autre changement de code).

### Suivi des conversions musicales

Objectif : distinguer la visite du site, le clic vers une plateforme d'écoute et la
plateforme réellement choisie, pour mesurer le tunnel Pub Meta → visite ben01.ca → clic
plateforme.

**Pixel Meta actif :** `1619702942220389` (inchangé, un seul chargement dans `index.html` `<head>`).

**Événements envoyés :**

| Événement | Déclencheur | Où |
|---|---|---|
| `PageView` (Meta), page view GA4 automatique | Chargement de la page | `index.html` `<head>`, automatique |
| `MusicPlatformClick` (Meta `trackCustom`), `music_platform_click` (GA4 `gtag`), `ClickButton` (TikTok `ttq.track`) | Clic sur un lien de plateforme musicale réelle (`[data-music-platform]`) | `script.js`, un seul gestionnaire centralisé |
| `PreSave`, `Bandcamp` (événements historiques `trackCustom`/`gtag`/`ttq.track`) | Clic sur les liens `[data-pixel-event]` existants, conservés pour compatibilité | `script.js` |

**Paramètres envoyés avec `MusicPlatformClick` / `music_platform_click` :**

- `platform` — nom de la plateforme (ex. `Bandcamp`)
- `destination_url` — URL de destination du lien cliqué (URL inchangée)
- `location` — emplacement du lien sur la page (ex. `hero`, `liens-cta`, `streaming-grid`)

**Plateformes actuellement détectées sur le site (liens réels avec `href`) :**

| Plateforme | Emplacements (`data-tracking-location`) |
|---|---|
| Bandcamp | `hero`, `liens-cta`, `streaming-grid` |

Spotify, Apple Music et YouTube Music sont affichés en « à venir » dans le HTML actuel
(pas de `href`, ce sont des `<div>`/`<span>` désactivés) — ils ne reçoivent donc pas encore
d'attributs `data-music-platform`. Dès qu'un vrai lien `<a href="...">` sera ajouté pour une
de ces plateformes, ajouter `data-music-platform="NomDeLaPlateforme"` et
`data-tracking-location="..."` sur le lien : le gestionnaire centralisé dans `script.js` le
prendra en charge automatiquement, sans autre modification de code.

Le lien HyperFollow / pré-save (`data-pixel-event="PreSave"`) reste un événement `PreSave`
simple : c'est une page d'agrégation DistroKid, pas une plateforme d'écoute identifiable,
donc il n'est pas transformé en `MusicPlatformClick`.

**Test dans Meta Events Manager :**

1. Ouvrir Meta Events Manager → le pixel `1619702942220389` → « Tester les événements ».
2. Visiter `ben01.ca` (ou l'URL de test) dans un onglet avec l'ID de test actif.
3. Vérifier qu'un événement `PageView` apparaît dans le flux en temps réel.
4. Cliquer sur un lien Bandcamp (hero, section Écouter, ou grille de streaming).
5. Vérifier qu'un événement personnalisé `MusicPlatformClick` apparaît, avec les
   paramètres `platform`, `destination_url` et `location` visibles dans le détail de
   l'événement.
6. Vérifier que l'événement historique `Bandcamp` apparaît aussi pour ce même clic
   (compatibilité conservée).

**Test équivalent dans GA4 DebugView :**

1. Activer le mode debug (extension "Google Analytics Debugger" ou paramètre d'URL
   `?_dbg=1` selon la configuration du compte) et ouvrir GA4 → Admin → DebugView.
2. Visiter le site et vérifier l'événement `page_view` automatique.
3. Cliquer sur un lien Bandcamp et vérifier l'événement `music_platform_click` avec
   les paramètres `platform`, `destination_url` et `location`.

**Limites / non vérifiable localement :**

- L'envoi réel des événements aux serveurs Meta/GA4/TikTok ne peut être confirmé qu'en
  ligne (Events Manager, GA4 DebugView, TikTok Events Manager) — un test local en ouvrant
  `index.html` peut être bloqué par des bloqueurs de pub/traqueurs ou par CORS selon le
  navigateur.
- Le TikTok Pixel est actif sur toutes les pages, mais `ClickButton` n'a pas été testé
  dans TikTok Events Manager dans le cadre de ce changement.

## Déploiement GitHub Pages

```bash
cd E:\Omni\ben01-site
git init
git add .
git commit -m "Initial ben01 Néons cheap website"
git branch -M main
git remote add origin https://github.com/benrosiers/ben01-site.git
git push -u origin main
```

Dans GitHub :

**Repo → Settings → Pages → Deploy from a branch → main → / (root)**

URL publiée : `https://benrosiers.github.io/ben01-site/`

---

## Crédits

Interprété par ben01, chanteur virtuel IA.

Textes et direction artistique : Benoit
Voix et incarnation : ben01 — IA
Réalisation sonore, mixage et mastering : ben01 + IA
Artwork et design visuel : ben01 + IA

© 2026 ben01 / Benoit

---

*Créé ouvertement avec l'intelligence artificielle.*

