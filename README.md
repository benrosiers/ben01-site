# ben01 â€” NÃ©ons cheap

Site officiel de l'album **NÃ©ons cheap** de ben01, chanteur virtuel IA.

Cabaret rock montrÃ©alais. Bars cheap. Ruelles. Neige sale. Amour maladroit.

---

## Structure des fichiers

```
ben01-site/
â”œâ”€â”€ index.html               Site one-page principal
â”œâ”€â”€ styles.css               Styles (dark, gritty, MontrÃ©al)
â”œâ”€â”€ script.js                Comportements lÃ©gers (fade-in, nav)
â”œâ”€â”€ README.md                Ce fichier
â””â”€â”€ assets/
    â”œâ”€â”€ cover/
    â”‚   â”œâ”€â”€ front-official.png    Pochette officielle (hero)
    â”‚   â”œâ”€â”€ front-no-text.png     Pochette sans texte
    â”‚   â””â”€â”€ back-tracklist.png    Verso avec tracklist (section album)
    â”œâ”€â”€ profile/
    â”‚   â””â”€â”€ ben01-profile.png     Portrait ben01 (section transparence IA)
    â””â”€â”€ banners/
        â””â”€â”€ facebook-cover.png    BanniÃ¨re Facebook
```

---

## Lancer localement

Ouvre `index.html` directement dans un navigateur.

Aucun build, aucun serveur, aucune dÃ©pendance externe.

Le site fonctionne mÃªme si les assets ne sont pas encore copiÃ©s â€” les images manquantes sont ignorÃ©es gracieusement.

---

## Assets Ã  copier

| Image | Chemin attendu |
|-------|----------------|
| Pochette officielle | `assets/cover/front-official.png` |
| Pochette sans texte | `assets/cover/front-no-text.png` |
| Verso tracklist | `assets/cover/back-tracklist.png` |
| Portrait ben01 | `assets/profile/ben01-profile.png` |
| BanniÃ¨re Facebook | `assets/banners/facebook-cover.png` |

---

## Avant de publier

Cherche et remplace dans `index.html` :

| Placeholder | Remplacer par |
|-------------|---------------|
| `Benoit` | Ton vrai nom (3 occurrences) |
| `[EMAIL Ã€ REMPLACER]` | Ton adresse email de contact |
| `href="#"` (liens streaming) | URLs Spotify, Apple Music, YouTube |
| `href="#"` (rÃ©seaux sociaux) | URLs Instagram, Facebook, TikTok, YouTube, Spotify, Apple Music |

---

## Liens officiels

| Lien | URL |
|------|-----|
| HyperFollow / pre-save | https://distrokid.com/hyperfollow/ben01/nons-cheap |
| GitHub Pages | https://benrosiers.github.io/ben01-site/ |
| Site officiel (Ã  venir) | https://ben01.ca |

---

## DÃ©ploiement GitHub Pages

```bash
cd E:\Omni\ben01-site
git init
git add .
git commit -m "Initial ben01 NÃ©ons cheap website"
git branch -M main
git remote add origin https://github.com/benrosiers/ben01-site.git
git push -u origin main
```

Dans GitHub :

**Repo â†’ Settings â†’ Pages â†’ Deploy from a branch â†’ main â†’ / (root)**

URL publiÃ©e : `https://benrosiers.github.io/ben01-site/`

---

## CrÃ©dits

InterprÃ©tÃ© par ben01, chanteur virtuel IA.

Textes et direction artistique : Benoit
Voix et incarnation : ben01 â€” IA
RÃ©alisation sonore, mixage et mastering : ben01 + IA
Artwork et design visuel : ben01 + IA

Â© 2026 ben01 / Benoit

---

*CrÃ©Ã© ouvertement avec l'intelligence artificielle.*

