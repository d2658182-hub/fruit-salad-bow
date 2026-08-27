# Fruit Salad Bow — Nettoyé

Jeu 2D de tir à l'arc (fruits), 100% Web (HTML5 + Canvas / CreateJS + Howler.js).
Source : Y8 (hébergé sur le CDN addictinggames).

## Moteur détecté
- **CreateJS** (createjs, Tween, LoadQueue) pour le rendu Canvas + scènes
- **Howler.js** (bundle interne, 67× `Howl`) pour l'audio
- Boucle : `requestAnimationFrame`, gestion interne orientationchange + resize

## Architecture générale
- `index.html` — entrée, canvas `#canvas`, écrans splash/orientate/play
- `game.js` — logique du jeu (obfusqué ; version lisible : `game.beautified.js`)
- `game.css` — styles
- `media/` — sprites, fonds, audio (mp3/ogg), polices

### Légende variables (extraite de game.js)
- `ig` — objet global du jeu (config, handlers)
- `ig['game']['director']` — gestionnaire de niveaux/scènes
- `ig['soundHandler']` / `ig['sizeHandler']` — audio et redimensionnement
- `AG` / `SWAGAPI` — API externe (addictinggames/shockwave) **stubbée** dans index.html

## Nettoyage effectué
- Retiré : `swag-api.js`/`swag-api.css`, `gtag`/google-analytics, `cloudflareinsights` beacon,
  `inobounce`, challenge Cloudflare JS, branding shockwave
- Ajouté stubs `AG` et `SWAGAPI` (promesses no-op) pour remplacer l'API externe
- `viewport` corrigé (`viewport-fit=cover`, `background:#000`) — anti-échec mobile
- Copie physique de tous les assets (aucun symlink)

## Test
- Chargement OK, 0 erreur JS, 0 ressource manquante (Xvfb Chromium)
- Desktop 1280×720 et mobile portrait 390×844 : canvas actif, pas de white bar / scroll horizontal
