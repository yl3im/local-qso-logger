# Local QSO Logger

## Lire dans votre langue

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 Français · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un carnet de liaison radioamateur respectueux de la vie privée, qui fonctionne entièrement dans votre navigateur. Pas de compte, pas de serveur, pas de traçage, pas d'analytique — vos carnets de liaison ne vivent que dans le `localStorage` de votre navigateur et ne quittent jamais votre appareil.

Par [YL3IM](https://www.qrz.com/db/YL3IM). Site du projet : [qso.lv](https://qso.lv).

![Local QSO Logger sur iPad](media/iPad.png)

## Sommaire

- [Lire dans votre langue](#lire-dans-votre-langue)
- [Fonctionnalités](#fonctionnalités)
- [Pour commencer](#pour-commencer)
- [Installer comme PWA sur mobile](#installer-comme-pwa-sur-mobile)
  - [iOS (Safari uniquement)](#ios-safari-uniquement)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Carnets de liaison](#carnets-de-liaison)
- [QSO](#qso)
- [Import et export ADIF](#import-et-export-adif)
- [Vie privée et données](#vie-privée-et-données)
- [Langue de l'interface](#langue-de-linterface)
- [Thèmes](#thèmes)
- [Notes techniques](#notes-techniques)
- [Remerciements](#remerciements)

## Fonctionnalités

- Plusieurs carnets de liaison ; chacun avec sa propre liste de QSO.
- Actions sur le carnet : créer, renommer, supprimer, importer depuis ADIF, exporter en ADIF (`.adi`).
- Formulaire QSO réparti en trois blocs : **Données station** (indicatif de la station, indicatif de l'opérateur, locator propre) qui restent mémorisés entre les QSO ; **Mode opératoire** (mode de propagation, satellite, mode, mode sat, bande, bande RX) avec les champs satellite affichés uniquement quand le mode de propagation est *Satellite* ; et **Données QSO** (indicatif contacté, locator contacté, date/heure UTC lors de l'édition, commentaire, RST envoyé, RST reçu).
- Taxonomie complète ADIF `MODE` → `SUBMODE` dans la liste déroulante des modes — choisissez un mode parent (`SSB`, `MFSK`, …) ou descendez directement jusqu'à un sous-mode précis (`USB`, `FT4`, …) ; l'application enregistre les deux champs conformément à l'ADIF et le tableau affiche le sous-mode spécifique quand il existe.
- Énumération complète des modes de propagation ADIF (SAT, RPT, EME, ES, MS, Aurora, etc.) en liste déroulante.
- Catalogue complet de satellites AMSAT (~110 satellites) et une liste déroulante **Mode sat** à deux niveaux : codes préférés à deux lettres uplink/downlink en tête (LU, LV, SX, UU, UV, VA, VU, VV) et les désignations héritées à une lettre (A/B/J/K/L/R/S/T/U/V/W/X) regroupées comme *obsolètes* en bas. Le choix d'un mode sat ajuste automatiquement `BAND` (uplink) et `RX band` (downlink).
- Modification et suppression de tout QSO (avec confirmation à la suppression).
- Valeurs par défaut sensées : date/heure UTC pré-remplie à *maintenant*, RST par défaut selon le mode (59 pour les modes voix, 599 pour CW/numérique), données station + bande + mode + mode de propagation mémorisés entre QSO consécutifs (seuls les champs par contact — indicatif, leur locator, commentaire, RST — sont effacés après chaque *Enregistrer QSO*).
- Indicateur en temps réel d'indicatif doublon (informatif — les doublons sont autorisés).
- Colonne drapeau pays déduite du préfixe de l'indicatif (couvre ≥99 % des préfixes radioamateurs courants, y compris les indicatifs portables comme `9A/M0NCG`).
- Affichage de la date adapté à la locale dans le tableau QSO ; le stockage ISO et la sortie ADIF restent inchangés.
- Interface disponible en **28 langues** (anglais plus 22 en écriture latine, 5 en cyrillique et grec) ; sélecteur à emoji drapeau dans l'en-tête.
- Thèmes jour / nuit (jour par défaut ; le bouton est dans l'en-tête).
- Mise en page adaptée aux mobiles avec des boutons de taille tactile.
- Fonctionne entièrement hors ligne — aucune requête réseau à aucun moment.
- Installable comme PWA (Ajouter à l'écran d'accueil / Installer l'app) lorsqu'il est hébergé en HTTPS.

## Pour commencer

Ouvrez simplement `index.html` dans un navigateur moderne. Pas d'étape de compilation, pas d'installation, pas de serveur.

Si vous souhaitez l'héberger, déposez les fichiers statiques (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` et le répertoire `i18n/` avec les 28 fichiers de traduction) sur n'importe quel hébergeur statique (GitHub Pages, Netlify, votre propre serveur web). Cela fonctionne aussi via `file://` — l'enregistrement du service worker est automatiquement ignoré sur le protocole `file:`, de sorte qu'ouvrir `index.html` directement depuis le disque fonctionne proprement.

Hébergé en HTTPS, l'application devient installable comme PWA (menu *Installer l'app* / *Ajouter à l'écran d'accueil* du navigateur) et fonctionne hors ligne dès la première visite grâce à un service worker cache-first qui pré-cache tous les fichiers statiques (UI + toutes les traductions).

Un carnet de liaison par défaut est créé automatiquement à la première visite, pour que vous puissiez commencer à enregistrer immédiatement.

## Installer comme PWA sur mobile

Quand l'app est hébergée en HTTPS (p. ex. GitHub Pages), vous pouvez l'installer sur l'écran d'accueil de votre téléphone pour qu'elle s'exécute en plein écran sans l'interface du navigateur. Après le premier lancement, le service worker met tout en cache, de sorte que les lancements suivants fonctionnent entièrement hors ligne.

### iOS (Safari uniquement)

Sur iOS, seul Safari peut installer des PWA — les navigateurs tiers ne le peuvent pas.

1. Ouvrez le site dans **Safari**.
2. Appuyez sur le bouton **Partager**.
3. Choisissez **Sur l'écran d'accueil**, puis **Ajouter**.

Présentation :

![Présentation de l'installation sur iOS](media/iOS_add_to_home_screen.gif)

Source en meilleure qualité : [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Ouvrez le site dans votre navigateur. Une invite *Installer l'app* peut apparaître automatiquement.
2. Sinon, ouvrez le **menu ⋮** → **Installer l'app** (ou **Ajouter à l'écran d'accueil** sur les versions plus anciennes).

Présentation :

![Présentation de l'installation sur Android](media/Android_add_to_home_screen.gif)

Source en meilleure qualité : [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Carnets de liaison

- **Créer :** saisissez un nom dans *Nom du log* et validez. Si vous laissez le nom vide, il vaut par défaut `Log YYYY-MM-DD HH:MM UTC`.
- **Changer :** cliquez sur un carnet dans la barre latérale.
- **Renommer :** cliquez sur *Renommer* dans l'en-tête du carnet. Appuyez sur Entrée pour sauvegarder, sur Échap pour annuler.
- **Supprimer :** cliquez sur *Supprimer le log*. Une confirmation vous sera demandée. Si vous supprimez le dernier carnet, un nouveau est créé automatiquement.

## QSO

- Remplissez le formulaire et appuyez sur **Enregistrer QSO**.
- Le formulaire est organisé en trois blocs :
  - **Données station** — *Indicatif de la station* (votre indicatif émetteur, ADIF `STATION_CALLSIGN`), *Opérateur* (l'indicatif de l'opérateur individuel — distinct de l'*indicatif de la station* quand un opérateur invité est au micro d'une station de club ; ADIF `OPERATOR`) et *Mon locator* (ADIF `MY_GRIDSQUARE`). Ces champs restent mémorisés entre les QSO de la même session — renseignez-les une fois et ils se reportent.
  - **Mode opératoire** — *Mode prop.*, *Mode*, *Bande*, plus les champs satellite *Satellite* / *Mode sat* / *Bande RX* quand le mode de propagation est *Satellite*. La bande, le mode et le mode de propagation sont mémorisés comme les données station.
  - **Données QSO** — champs par contact : *Indicatif*, *Locator* (Maidenhead de l'autre station), *Commentaire* (ADIF `COMMENT`), *RST envoyé*, *RST reçu*. Lors de l'édition d'un QSO existant, *Date (UTC)* et *Heure (UTC)* apparaissent aussi dans ce bloc. Ces champs sont effacés après chaque *Enregistrer QSO*.
- Tous les indicatifs (contacté, station, opérateur) passent automatiquement en majuscules à la frappe ; les deux champs locator font de même.
- La date et l'heure sont pré-remplies à *maintenant* en UTC lors de la validation ; en mode édition, vous pouvez saisir n'importe quelle valeur.
- RST envoyé / RST reçu, si laissés vides, valent par défaut **59** pour les modes voix (SSB/FM/DIGITALVOICE) et **599** pour CW et les modes numériques (CW/FT8/FT4/RTTY/PSK31/JT65). La valeur par défaut suit le MODE parent, si bien que choisir un sous-mode précis comme *USB* ou *FT4* donne toujours la bonne valeur.
- Une puce *Doublon dans ce log* s'affiche sous le champ indicatif si l'indicatif existe déjà dans le carnet courant. Les doublons ne sont *pas* bloqués.
- **Mode de propagation** — liste déroulante facultative des modes de propagation ADIF (SAT, RPT, EME, F2, Es, MS, LOS, etc.). Laissez vide pour les QSO HF terrestres ordinaires.
- **QSO satellite** — sélectionner le mode de propagation *Satellite* révèle trois champs satellite : **Satellite** (liste déroulante de ~110 satellites enregistrés AMSAT), **Mode sat** (désignations AMSAT, regroupées comme codes *modernes* à deux lettres uplink/downlink en haut et codes *obsolètes* à une lettre en bas) et **Bande RX** (bande downlink). Satellite, mode sat et bande RX sont obligatoires — le navigateur refusera la validation sans eux. Le choix d'un **Mode sat** remplit automatiquement la **Bande** principale avec la bande uplink et la **Bande RX** avec la bande downlink (p. ex. mode J → uplink 2m, downlink 70cm). Revenir à *satellite* depuis un autre mode de propagation réinitialise le mode sat pour inviter à en choisir un nouveau. Les QSO non satellite ne portent jamais les champs satellite ; basculer un QSO existant de satellite vers un autre mode de propagation les supprime proprement. **Locator** et **Mon locator** sont des champs généraux (utiles aussi pour les concours de locator VHF/UHF) et restent visibles pour tous les QSO.
- **Modifier un QSO** avec le bouton *Modifier* sur la ligne. Le formulaire passe en mode *Mettre à jour QSO*, la ligne est mise en évidence et un bouton *Annuler* apparaît. Changer de carnet ou supprimer le log annule l'édition automatiquement.
- **Supprimer un QSO** avec le bouton *Supprimer* sur la ligne (demande confirmation).

## Import et export ADIF

- **Export** : cliquez sur *Exporter .adi* dans l'en-tête du carnet. Un fichier conforme à **ADIF 3.1.7** est téléchargé. L'en-tête déclare `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` et `CREATED_TIMESTAMP` (UTC). Champs par QSO émis (s'ils ne sont pas vides) : `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — suivi de chaque champ ADIF supplémentaire préservé à l'import (voir ci-dessous).
- **Import** : cliquez sur *Importer un fichier .adi* sous le formulaire de création de carnet et sélectionnez un fichier `.adi` / `.adif`. Un nouveau carnet est créé à partir de lui, nommé `Imported YYYY-MM-DD HH:MM UTC`. L'import ne fusionne jamais avec un carnet existant.
- **Circuit sans perte** : à l'import, tout champ ADIF que l'application ne modélise pas dans son interface (p. ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, champs `APP_*`) est conservé sur le QSO et réémis mot pour mot au prochain export. Exporter un fichier lui-même importé préserve donc tout.
- La longueur de champ est traitée comme un nombre d'octets UTF-8 comme l'exige la spécification, si bien que le texte multi-octet (p. ex. indicatifs accentués dans `COMMENT`) est analysé correctement.

## Vie privée et données

- Toutes les données sont stockées dans le `localStorage` de votre navigateur sous la clé `local-qso:v1`.
- Rien n'est transmis nulle part. Il n'y a pas de backend, pas d'appel API, pas de télémétrie, pas d'analytique.
- Effacer les données du site dans le navigateur, utiliser le mode privé/incognito ou utiliser un autre navigateur/appareil signifie un nouveau carnet vide — utilisez *Exporter .adi* pour sauvegarder.

## Langue de l'interface

Un sélecteur de langue dans l'en-tête couvre **28 langues**. Choisissez-en une et le reste de l'interface se redessine immédiatement ; votre choix est sauvegardé avec vos logs et respecté à la prochaine visite. L'anglais est la langue par défaut.

Langues disponibles (emoji drapeau + nom natif ; ordre alphabétique par système d'écriture) :

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Les étiquettes techniques universelles restent dans leur forme canonique dans toutes les langues : noms de bandes (`20m`, `70cm`, …), codes de mode ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` et codes pays ISO.

Il manque une chaîne dans votre langue ? Chaque langue est un unique petit fichier sous [`i18n/`](i18n/) — copiez `i18n/en.js`, traduisez les valeurs, enregistrez sous `i18n/<code>.js`, puis ajoutez une balise `<script>` et une option dans `<select>` dans `index.html` et le code dans `SUPPORTED_LANGS` dans `app.js`.

## Thèmes

Le bouton de thème dans l'en-tête bascule entre le jour (par défaut) et la nuit. La préférence est sauvegardée avec vos logs et respectée à la prochaine visite. Les sélecteurs natifs de date/heure suivent le thème via `color-scheme`.

## Notes techniques

- Application monopage, HTML + CSS + JavaScript vanilla. Aucun framework, aucune étape de compilation, aucune dépendance.
- Fichiers sources :
  - `index.html` — balisage et balises meta.
  - `style.css` — thèmes et mise en page (variables jour/nuit, media queries mobiles).
  - `app.js` — état, persistance, rendu, analyseur/sérialiseur ADIF, correspondance préfixe indicatif → pays.
  - `favicon.svg` — favicon SVG inline.
  - `manifest.webmanifest` — Web App Manifest (nom, couleur de thème, portée, icône) pour que l'app soit installable comme PWA sur mobile et bureau.
  - `service-worker.js` — service worker cache-first qui pré-cache tous les fichiers statiques à l'installation, évince les anciens caches à l'activation et maintient l'app entièrement hors ligne après la première visite. L'enregistrement est automatiquement ignoré sur le protocole `file://`, de sorte qu'ouvrir `index.html` directement depuis le disque reste propre.
  - `i18n/<lang>.js` — un fichier de traduction par langue supportée (28 au total). Chacun est un petit IIFE qui assigne à `window.I18N[<lang>]` un dictionnaire plat clé→chaîne. `t()` et `applyLanguage()` dans `app.js` gèrent les lookups (avec repli sur l'anglais) et parcourent le DOM en mettant à jour chaque élément `[data-i18n*]`.
- Testé sur les versions récentes de Chromium, Firefox et Safari (bureau + iOS).

## Remerciements

Créé par [YL3IM](https://www.qrz.com/db/YL3IM).

Merci à [A65BR](https://www.qrz.com/db/A65BR) Oleg pour les précieux conseils qui ont rendu la partie QSO satellite réellement utilisable — les désignations modernes à deux lettres du mode sat, le catalogue AMSAT et l'ajustement automatique uplink/downlink sont tous issus de ses retours.

Les drapeaux de pays reposent sur les séquences d'indicateurs régionaux Unicode. Ils s'affichent correctement sur macOS, iOS, Linux (avec une police emoji compatible drapeaux) et Android. Windows n'inclut pas de police drapeau système, les emoji drapeau peuvent donc y apparaître sous forme de paires de lettres.
