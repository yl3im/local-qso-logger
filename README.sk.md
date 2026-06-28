# Local QSO Logger

## Čítajte vo svojom jazyku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 Slovenčina · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

QSO denník pre rádioamatérov rešpektujúci súkromie, ktorý beží úplne vo vašom prehliadači. Bez účtu, bez servera, bez sledovania, bez analytiky — vaše denníky sú uložené iba v `localStorage` prehliadača a nikdy neopustia vaše zariadenie.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Webová stránka projektu: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger na iPade](media/iPad.png)

## Obsah

- [Čítajte vo svojom jazyku](#čítajte-vo-svojom-jazyku)
- [Funkcie](#funkcie)
- [Začíname](#začíname)
- [Inštalácia ako PWA na mobile](#inštalácia-ako-pwa-na-mobile)
  - [iOS (iba Safari)](#ios-iba-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Denníky](#denníky)
- [QSO](#qso)
- [Import a export ADIF](#import-a-export-adif)
- [Súkromie a údaje](#súkromie-a-údaje)
- [Jazyk rozhrania](#jazyk-rozhrania)
- [Motívy](#motívy)
- [Technické poznámky](#technické-poznámky)
- [Poďakovanie](#poďakovanie)

## Funkcie

- Viaceré denníky, každý so svojím zoznamom QSO.
- Akcie s denníkom: vytvoriť, premenovať, vymazať, importovať z ADIF, exportovať do ADIF (`.adi`).
- Polia QSO: volacia značka, dátum UTC, čas UTC, pásmo, druh prevádzky, RST odoslaný, RST prijatý.
- Úprava a vymazanie ľubovoľného QSO (s potvrdením pri vymazaní).
- Rozumné predvolené hodnoty: dnešný dátum/čas UTC predvyplnený, predvolené RST podľa druhu prevádzky (59 pre hlasové módy, 599 pre CW/digitálne), pásmo a druh prevádzky zostávajú medzi po sebe nasledujúcimi QSO.
- Živý indikátor duplicitnej volacej značky (informačný — duplikáty sú povolené).
- Stĺpec s vlajkou krajiny odvodený z predpony volacej značky (pokrýva ≥99 % bežných rádioamatérskych predpôn vrátane portable značiek ako `9A/M0NCG`).
- Zobrazenie dátumu v tabuľke QSO podľa locale; ISO úložisko a ADIF výstup zostávajú nezmenené.
- Denné/nočné motívy (denný predvolený; prepínač je v záhlaví).
- Responzívne rozloženie vhodné pre mobil s dotykovo priateľskými tlačidlami.
- Funguje úplne offline — žiadne sieťové požiadavky.
- Inštalovateľné ako PWA (Pridať na plochu / Inštalovať aplikáciu) pri hostovaní cez HTTPS.
- Rozhranie dostupné v **28 jazykoch** (angličtina plus 22 latinkových, 5 cyrilských a gréčtina); volič s vlajkami v záhlaví.

## Začíname

Stačí otvoriť `index.html` v modernom prehliadači. Žiadny build, žiadna inštalácia, žiadny server.

Pre hostovanie umiestnite statické súbory (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` a adresár `i18n/` s 28 prekladovými súbormi) na ľubovoľný statický hosting (GitHub Pages, Netlify, vlastný webový server). Funguje aj cez `file://` — registrácia service workera je automaticky vynechaná pre protokol `file:`, takže priame otvorenie `index.html` z disku funguje čisto.

Pri poskytovaní cez HTTPS sa aplikácia stáva inštalovateľnou ako PWA (cez ponuku prehliadača *Inštalovať aplikáciu* / *Pridať na plochu*) a po prvom načítaní funguje offline vďaka cache-first service workerovi, ktorý prednahráva každý statický súbor (UI + všetky preklady).

Pri prvej návšteve sa automaticky vytvorí predvolený denník, takže môžete ihneď začať zaznamenávať.

## Inštalácia ako PWA na mobile

Keď je aplikácia poskytovaná cez HTTPS (napr. GitHub Pages), môžete ju nainštalovať na domovskú obrazovku telefónu, aby bežala na celej obrazovke bez prehliadačového rámu. Po prvom spustení service worker uloží všetko do vyrovnávacej pamäte, takže ďalšie spustenia fungujú úplne offline.

### iOS (iba Safari)

Na iOS môže PWA inštalovať iba Safari — tretie prehliadače nie.

1. Otvorte stránku v **Safari**.
2. Ťuknite na tlačidlo **Zdieľať**.
3. Vyberte **Pridať na plochu**, potom **Pridať**.

Návod:

![Návod na inštaláciu iOS](media/iOS_add_to_home_screen.gif)

Zdroj vo vyššej kvalite: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otvorte stránku vo svojom prehliadači. Môže sa automaticky zobraziť výzva *Inštalovať aplikáciu*.
2. Inak otvorte **⋮ menu** → **Inštalovať aplikáciu** (alebo **Pridať na plochu** v starších verziách).

Návod:

![Návod na inštaláciu Android](media/Android_add_to_home_screen.gif)

Zdroj vo vyššej kvalite: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Denníky

- **Vytvoriť:** zadajte názov v poli *Názov denníka* a odošlite. Ak necháte názov prázdny, predvolený je `Log YYYY-MM-DD HH:MM UTC`.
- **Prepnúť:** kliknite na ľubovoľný denník v bočnom paneli.
- **Premenovať:** kliknite na *Premenovať* v záhlaví denníka. Enter uloží, Escape zruší.
- **Vymazať:** kliknite na *Vymazať denník*. Budete vyzvaní na potvrdenie. Ak vymažete posledný denník, automaticky sa vytvorí nový.

## QSO

- Vyplňte formulár a stlačte **Zapísať QSO**.
- Volacia značka sa pri písaní automaticky prevedie na veľké písmená.
- Dátum a čas sa predvyplnia na *teraz* v UTC a obnovia po každom zapísanom QSO; stále môžete zadať akúkoľvek hodnotu.
- Pásmo a druh prevádzky zostávajú medzi QSO v rovnakej relácii, takže ich nemusíte vyberať pre každý kontakt znova.
- RST odoslaný / RST prijatý, ak sú ponechané prázdne, sa nastavia na **59** pre hlasové módy (SSB/FM/AM/DIGITALVOICE) a na **599** pre CW a digitálne módy (CW/FT8/FT4/RTTY/PSK31/JT65).
- Pod poľom volacej značky sa zobrazí čip *Duplikát v tomto denníku*, ak volacia značka už v aktuálnom denníku existuje. Duplikáty *nie sú* blokované.
- **Upraviť QSO** tlačidlom *Upraviť* v riadku. Formulár sa prepne do režimu *Aktualizovať QSO*, riadok sa zvýrazní a objaví sa tlačidlo *Zrušiť*. Prepnutie denníka alebo jeho vymazanie automaticky zruší úpravu.
- **Vymazať QSO** tlačidlom *Vymazať* v riadku (požiada o potvrdenie).

## Import a export ADIF

- **Export**: kliknite na *Exportovať .adi* v záhlaví denníka. Stiahne sa súbor s `ADIF_VER 3.1.4` a `PROGRAMID local-qso` v hlavičke. Každý záznam mapuje `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: kliknite na *Importovať súbor .adi* pod formulárom na vytvorenie denníka a vyberte súbor `.adi`/`.adif`. Vytvorí sa nový denník s názvom `Importované YYYY-MM-DD HH:MM UTC`. Import sa nikdy nezlučuje do existujúceho denníka.
- Dĺžka poľa sa interpretuje ako počet znakov, čo funguje pre ASCII ADIF (všetky štandardné polia QSO). Viacbajtový obsah v nepodstatných textových poliach môže parsovať čudne.

## Súkromie a údaje

- Všetky údaje sú uložené v `localStorage` prehliadača pod kľúčom `local-qso:v1`.
- Nič sa nikam nepresúva. Žiadny backend, žiadne API volania, žiadna telemetria, žiadna analytika.
- Vymazanie údajov stránky, použitie súkromného/inkognito režimu alebo iného prehliadača/zariadenia znamená prázdny denník — na zálohu použite *Exportovať .adi*.

## Jazyk rozhrania

Volič jazyka v záhlaví pokrýva **28 jazykov**. Vyberte si jeden a zvyšok rozhrania sa okamžite prerenderuje; vaša voľba sa uloží spolu s vašimi denníkmi a bude rešpektovaná pri ďalšej návšteve. Predvolená je angličtina.

Dostupné jazyky (vlajka emoji + natívny názov; abecedne v rámci každého písma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzálne technické menovky zostávajú vo svojej kanonickej forme vo všetkých jazykoch: názvy pásiem (`20m`, `70cm`, …), kódy módov ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` a kódy krajín ISO.

Chýba reťazec vo vašom jazyku? Každý jazyk je jeden malý súbor v [`i18n/`](i18n/) — skopírujte `i18n/en.js`, preložte hodnoty, uložte ako `i18n/<kód>.js`, potom pridajte značku `<script>` plus voľbu `<select>` do `index.html` a kód do `SUPPORTED_LANGS` v `app.js`.

## Motívy

Prepínač motívov v záhlaví prepína medzi denným (predvolený) a nočným. Voľba sa uloží spolu s vašimi denníkmi a bude rešpektovaná pri ďalšej návšteve. Natívne voľby dátumu/času sledujú motív cez `color-scheme`.

## Technické poznámky

- Jednostránková aplikácia, čisté HTML + CSS + JavaScript. Žiadne frameworky, žiadny build, žiadne závislosti.
- Zdrojové súbory:
  - `index.html` — markup a meta tagy.
  - `style.css` — motívy a rozloženie (premenné deň/noc, media queries pre mobil).
  - `app.js` — stav, persistencia, renderovanie, ADIF parser/serializer, vyhľadávanie predpona volacej značky → krajina.
  - `favicon.svg` — vložená SVG ikona.
  - `manifest.webmanifest` — Web App Manifest (názov, farba motívu, scope, ikona), aby aplikácia bola inštalovateľná ako PWA na mobile a desktope.
  - `service-worker.js` — cache-first service worker, ktorý pri inštalácii prednahráva každý statický súbor, pri aktivácii odstráni staré vyrovnávacie pamäte a po prvej návšteve udržiava aplikáciu plne offline. Registrácia je automaticky vynechaná pre protokol `file://`, takže priame otvorenie `index.html` z disku zostáva čisté.
  - `i18n/<lang>.js` — jeden súbor prekladu na podporovaný jazyk (celkom 28). Každý je malý IIFE, ktorý priraďuje `window.I18N[<lang>]` plochú mapu kľúč→reťazec. `t()` a `applyLanguage()` v `app.js` obsluhujú vyhľadávania (s anglickou náhradou) a prechádzajú DOM, aktualizujúc každý prvok `[data-i18n*]`.
- Testované na najnovších verziách Chromium, Firefox a Safari (desktop + iOS).

## Poďakovanie

Vytvoril [YL3IM](https://www.qrz.com/db/YL3IM).

Vlajky krajín sa opierajú o sekvencie regionálneho indikátora Unicode. Vykresľujú sa správne na macOS, iOS, Linuxe (s emoji fontom podporujúcim vlajky) a Androide. Windows neobsahuje systémový font vlajok, takže emoji vlajok sa tam môžu zobrazovať ako dvojice písmen.
