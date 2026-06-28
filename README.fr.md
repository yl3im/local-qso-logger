# Local QSO Logger

## Lire dans votre langue

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 Français · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un journal de QSO radioamateur respectueux de la vie privée qui fonctionne entièrement dans votre navigateur. Pas de compte, pas de serveur, pas de pistage, pas d'analytique — vos carnets ne quittent jamais le `localStorage` de votre navigateur et ne quittent jamais votre appareil.

Par [YL3IM](https://www.qrz.com/db/YL3IM). Site du projet : [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger sur iPad](media/iPad.png)

## Sommaire

- [Lire dans votre langue](#lire-dans-votre-langue)
- [Fonctionnalités](#fonctionnalités)
- [Pour commencer](#pour-commencer)
- [Installer en tant que PWA sur mobile](#installer-en-tant-que-pwa-sur-mobile)
  - [iOS (Safari uniquement)](#ios-safari-uniquement)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Carnets](#carnets)
- [QSO](#qso)
- [Importation et exportation ADIF](#importation-et-exportation-adif)
- [Confidentialité et données](#confidentialité-et-données)
- [Langue de l'interface](#langue-de-linterface)
- [Thèmes](#thèmes)
- [Notes techniques](#notes-techniques)
- [Crédits](#crédits)

## Fonctionnalités

- Plusieurs carnets, chacun avec sa propre liste de QSO.
- Actions sur le carnet : créer, renommer, supprimer, importer depuis ADIF, exporter vers ADIF (`.adi`).
- Champs du QSO : indicatif, date UTC, heure UTC, bande, mode, RST envoyé, RST reçu.
- Modifier et supprimer n'importe quel QSO (avec confirmation à la suppression).
- Valeurs par défaut sensées : date/heure UTC du jour pré-remplies, RST par défaut selon le mode (59 pour les modes voix, 599 pour CW/digital), bande et mode persistants entre QSO consécutifs.
- Indicateur en direct de doublon d'indicatif (informatif — les doublons sont autorisés).
- Colonne drapeau du pays déduite du préfixe de l'indicatif (couvre ≥99 % des préfixes radioamateur courants, y compris les indicatifs portables comme `9A/M0NCG`).
- Affichage de la date sensible à la locale dans le tableau QSO ; le stockage ISO et la sortie ADIF restent inchangés.
- Thèmes jour/nuit (jour par défaut ; le bouton est dans l'en-tête).
- Mise en page réactive adaptée au mobile avec des boutons adaptés au tactile.
- Fonctionne entièrement hors-ligne — aucune requête réseau.
- Installable en tant que PWA (Ajouter à l'écran d'accueil / Installer l'application) lorsque hébergé en HTTPS.
- Interface disponible en **28 langues** (anglais plus 22 d'écriture latine, 5 cyrilliques et grec) ; sélecteur avec emojis de drapeau dans l'en-tête.

## Pour commencer

Ouvrez simplement `index.html` dans un navigateur moderne. Pas de build, pas d'installation, pas de serveur.

Si vous voulez l'héberger, déposez les fichiers statiques (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` et le dossier `i18n/` avec les 28 fichiers de traduction) sur n'importe quel hébergeur statique (GitHub Pages, Netlify, votre propre serveur web). Cela fonctionnera aussi en `file://` — l'enregistrement du service worker est automatiquement ignoré sur le protocole `file:`, donc l'ouverture directe de `index.html` depuis le disque fonctionne proprement.

Lorsqu'elle est servie en HTTPS, l'application devient installable en tant que PWA (via le menu *Installer l'application* / *Ajouter à l'écran d'accueil* du navigateur) et fonctionne hors-ligne après la première visite grâce à un service worker cache-first qui précache chaque fichier statique (UI + toutes les traductions).

Un carnet par défaut est créé automatiquement lors de la première visite, pour que vous puissiez commencer à enregistrer immédiatement.

## Installer en tant que PWA sur mobile

Lorsque l'application est servie en HTTPS (p. ex. GitHub Pages), vous pouvez l'installer sur l'écran d'accueil de votre téléphone pour qu'elle fonctionne en plein écran sans l'interface du navigateur. Après le premier lancement, le service worker met tout en cache, donc les lancements suivants fonctionnent entièrement hors-ligne.

### iOS (Safari uniquement)

Sur iOS, seul Safari peut installer des PWA — les navigateurs tiers ne peuvent pas.

1. Ouvrez le site dans **Safari**.
2. Appuyez sur le bouton **Partager**.
3. Choisissez **Sur l'écran d'accueil**, puis **Ajouter**.

Démonstration :

![Démonstration d'installation iOS](media/iOS_add_to_home_screen.gif)

Source de meilleure qualité : [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Ouvrez le site dans votre navigateur. Une invite *Installer l'application* peut apparaître automatiquement.
2. Sinon, ouvrez le **menu ⋮** → **Installer l'application** (ou **Ajouter à l'écran d'accueil** dans les versions plus anciennes).

Démonstration :

![Démonstration d'installation Android](media/Android_add_to_home_screen.gif)

Source de meilleure qualité : [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Carnets

- **Créer :** tapez un nom dans *Nom du carnet* et soumettez. Si vous laissez le nom vide, il sera par défaut `Log YYYY-MM-DD HH:MM UTC`.
- **Changer :** cliquez sur n'importe quel carnet dans la barre latérale.
- **Renommer :** cliquez sur *Renommer* dans l'en-tête du carnet. Entrée pour sauvegarder, Échap pour annuler.
- **Supprimer :** cliquez sur *Supprimer le carnet*. Vous serez invité à confirmer. Si vous supprimez le dernier carnet, un nouveau est créé automatiquement.

## QSO

- Remplissez le formulaire et appuyez sur **Enregistrer QSO**.
- L'indicatif est automatiquement mis en majuscules pendant que vous tapez.
- La date et l'heure sont pré-remplies à *maintenant* en UTC et réinitialisées après chaque QSO enregistré ; vous pouvez toujours saisir n'importe quelle valeur.
- La bande et le mode persistent entre les QSO d'une même session, donc vous n'avez pas à les re-sélectionner pour chaque contact.
- RST envoyé / RST reçu, s'ils sont laissés vides, reviennent à **59** pour les modes voix (SSB/FM/AM/DIGITALVOICE) et à **599** pour CW et les modes digitaux (CW/FT8/FT4/RTTY/PSK31/JT65).
- Un chip *Doublon dans ce carnet* apparaît sous le champ indicatif si l'indicatif existe déjà dans le carnet actuel. Les doublons ne sont *pas* bloqués.
- **Modifier un QSO** avec le bouton *Éditer* sur la ligne. Le formulaire passe en mode *Mettre à jour QSO*, la ligne est surlignée, et un bouton *Annuler* apparaît. Changer de carnet ou supprimer le log annule la modification automatiquement.
- **Supprimer un QSO** avec le bouton *Supprimer* sur la ligne (demande confirmation).

## Importation et exportation ADIF

- **Exporter** : cliquez sur *Exporter .adi* dans l'en-tête du carnet. Un fichier est téléchargé avec `ADIF_VER 3.1.4` et `PROGRAMID local-qso` dans l'en-tête. Chaque enregistrement mappe `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Importer** : cliquez sur *Importer un fichier .adi* sous le formulaire de création de carnet et choisissez un fichier `.adi` / `.adif`. Un nouveau carnet est créé avec le nom `Importé YYYY-MM-DD HH:MM UTC`. L'importation ne se fond jamais dans un carnet existant.
- Le compte de longueur de champ est traité comme nombre de caractères, ce qui fonctionne pour l'ADIF ASCII (tous les champs QSO standards). Le contenu multi-octet dans des champs de texte non essentiels peut être analysé de manière étrange.

## Confidentialité et données

- Toutes les données sont stockées dans le `localStorage` de votre navigateur sous la clé `local-qso:v1`.
- Rien n'est transmis nulle part. Pas de backend, pas d'appel d'API, pas de télémétrie, pas d'analytique.
- Effacer les données du site, utiliser le mode privé/incognito, ou utiliser un autre navigateur/appareil signifie un carnet vide — utilisez *Exporter .adi* pour sauvegarder.

## Langue de l'interface

Un sélecteur de langue dans l'en-tête couvre **28 langues**. Choisissez-en une et le reste de l'interface est re-rendu immédiatement ; votre choix est sauvegardé avec vos logs et respecté lors de la prochaine visite. L'anglais est la valeur par défaut.

Langues disponibles (emoji drapeau + nom natif ; classées alphabétiquement dans chaque écriture) :

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Les étiquettes techniques universelles restent dans leur forme canonique dans toutes les langues : noms de bande (`20m`, `70cm`, …), codes de mode ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` et codes ISO des pays.

Il manque une chaîne dans votre langue ? Chaque langue est un petit fichier dans [`i18n/`](i18n/) — copiez `i18n/en.js`, traduisez les valeurs, sauvegardez sous `i18n/<code>.js`, puis ajoutez une balise `<script>` plus une option `<select>` dans `index.html` et le code dans `SUPPORTED_LANGS` dans `app.js`.

## Thèmes

Le commutateur de thème dans l'en-tête bascule entre jour (par défaut) et nuit. La préférence est sauvegardée avec vos logs et respectée lors de la prochaine visite. Les sélecteurs natifs de date/heure suivent le thème via `color-scheme`.

## Notes techniques

- Application monopage, HTML + CSS + JavaScript pur. Aucun framework, aucun build, aucune dépendance.
- Fichiers sources :
  - `index.html` — balisage et balises méta.
  - `style.css` — thèmes et mise en page (variables jour/nuit, media queries mobiles).
  - `app.js` — état, persistance, rendu, parser/serializer ADIF, recherche préfixe indicatif → pays.
  - `favicon.svg` — favicon SVG en ligne.
  - `manifest.webmanifest` — Web App Manifest (nom, couleur du thème, scope, icône) pour que l'application soit installable en tant que PWA sur mobile et bureau.
  - `service-worker.js` — service worker cache-first qui à l'installation précache chaque fichier statique, à l'activation purge les anciens caches et garde l'application entièrement hors-ligne après la première visite. L'enregistrement est automatiquement ignoré pour le protocole `file://`, donc l'ouverture directe de `index.html` depuis le disque reste propre.
  - `i18n/<lang>.js` — un fichier de traduction par langue prise en charge (28 au total). Chacun est une petite IIFE qui assigne à `window.I18N[<lang>]` une carte plate clé→chaîne. `t()` et `applyLanguage()` dans `app.js` gèrent les recherches (avec fallback en anglais) et parcourent le DOM en mettant à jour chaque élément `[data-i18n*]`.
- Testé sur Chromium, Firefox et Safari récents (bureau + iOS).

## Crédits

Construit par [YL3IM](https://www.qrz.com/db/YL3IM).

Les drapeaux des pays s'appuient sur les séquences d'indicateur régional Unicode. Ils s'affichent correctement sur macOS, iOS, Linux (avec une fonte emoji compatible avec les drapeaux) et Android. Windows n'inclut pas de fonte de drapeaux système, donc les emojis de drapeau peuvent y apparaître comme des paires de lettres.
