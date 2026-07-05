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
| GitHub Pages | https://benrosiers.github.io/ben01-site/ |
| Site officiel (à venir) | https://ben01.ca |

---

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

