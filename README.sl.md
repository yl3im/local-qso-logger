# Local QSO Logger

## Berite v svojem jeziku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 Slovenščina · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

QSO dnevnik za radioamaterje, ki spoštuje zasebnost in deluje v celoti v vašem brskalniku. Brez računa, brez strežnika, brez sledenja, brez analitike — vaši dnevniki obstajajo le v `localStorage` brskalnika in nikoli ne zapustijo vaše naprave.

Avtor: [YL3IM](https://www.qrz.com/db/YL3IM). Spletna stran projekta: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger na iPadu](media/iPad.png)

## Vsebina

- [Berite v svojem jeziku](#berite-v-svojem-jeziku)
- [Funkcije](#funkcije)
- [Začnimo](#začnimo)
- [Namestitev kot PWA na mobilni napravi](#namestitev-kot-pwa-na-mobilni-napravi)
  - [iOS (samo Safari)](#ios-samo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dnevniki](#dnevniki)
- [QSO](#qso)
- [ADIF uvoz in izvoz](#adif-uvoz-in-izvoz)
- [Zasebnost in podatki](#zasebnost-in-podatki)
- [Jezik vmesnika](#jezik-vmesnika)
- [Teme](#teme)
- [Tehnične opombe](#tehnične-opombe)
- [Zasluge](#zasluge)

## Funkcije

- Več dnevnikov, vsak s svojim seznamom QSO.
- Dejanja dnevnika: ustvarjanje, preimenovanje, brisanje, uvoz iz ADIF, izvoz v ADIF (`.adi`).
- Polja QSO: klicni znak, datum UTC, čas UTC, pas, vrsta, RST oddan, RST sprejet.
- Urejanje in brisanje katerega koli QSO (s potrditvijo pri brisanju).
- Razumne privzete vrednosti: današnji datum/čas UTC predizpolnjen, privzete RST vrednosti glede na vrsto (59 za glasovne vrste, 599 za CW/digitalne), pas in vrsta sta lepljiva med zaporednimi QSO.
- Realnočasovni indikator dvojnika klicnega znaka (informativen — dvojniki so dovoljeni).
- Stolpec z državno zastavo, izpeljano iz predpone klicnega znaka (pokriva ≥99 % običajnih radioamaterskih predpon, vključno s prenosnimi klicnimi znaki, kot je `9A/M0NCG`).
- Lokalizirano prikazovanje datuma v tabeli QSO; ISO shranjevanje in ADIF izhod ostaneta nespremenjena.
- Dnevne/nočne teme (dan privzeto; stikalo v glavi).
- Mobilno prijazna odzivna postavitev s tipkami, prilagojenimi dotiku.
- Deluje popolnoma brez povezave — brez omrežnih zahtev kadar koli.
- Namestljivo kot PWA (Dodaj na začetni zaslon / Namesti aplikacijo), ko gostuje prek HTTPS.
- Vmesnik na voljo v **28 jezikih** (angleški plus 22 latiničnih, 5 cirilskih in grški); izbirnik z zastavnimi emojiji v glavi.

## Začnimo

Preprosto odprite `index.html` v sodobnem brskalniku. Brez gradnje, brez namestitve, brez strežnika.

Če ga želite gostiti, položite statične datoteke (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` in mapo `i18n/` z 28 prevajalskimi datotekami) na kateri koli statični gostitelj (GitHub Pages, Netlify, lasten spletni strežnik). Deluje tudi prek `file://` — registracija service workerja se samodejno preskoči za protokol `file:`, tako da odpiranje `index.html` neposredno z diska deluje čisto.

Ko je serviran prek HTTPS, aplikacija postane namestljiva kot PWA (prek menija brskalnika *Namesti aplikacijo* / *Dodaj na začetni zaslon*) in deluje brez povezave po prvem obisku zaradi cache-first service workerja, ki vnaprej shrani vsako statično datoteko (UI + vsi prevodi).

Privzeti dnevnik se samodejno ustvari ob prvem obisku, tako da lahko takoj začnete beležiti.

## Namestitev kot PWA na mobilni napravi

Ko je aplikacija servirana prek HTTPS (npr. GitHub Pages), jo lahko namestite na začetni zaslon telefona, tako da deluje na celozaslonskem zaslonu brez okvirja brskalnika. Po prvem zagonu service worker predpomni vse, tako da nadaljnji zagoni delujejo popolnoma brez povezave.

### iOS (samo Safari)

Na iOS lahko le Safari namesti PWA — brskalniki tretjih oseb ne morejo.

1. Odprite stran v **Safari**.
2. Tapnite gumb **Deli**.
3. Izberite **Dodaj na začetni zaslon**, nato **Dodaj**.

Vodnik:

![iOS vodnik za namestitev](media/iOS_add_to_home_screen.gif)

Vir višje kakovosti: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Odprite stran v svojem brskalniku. Lahko se samodejno prikaže poziv *Namesti aplikacijo*.
2. Sicer odprite **meni ⋮** → **Namesti aplikacijo** (ali **Dodaj na začetni zaslon** v starejših različicah).

Vodnik:

![Android vodnik za namestitev](media/Android_add_to_home_screen.gif)

Vir višje kakovosti: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dnevniki

- **Ustvari:** vnesite ime v *Ime dnevnika* in oddajte. Če pustite ime prazno, je privzeto `Log YYYY-MM-DD HH:MM UTC`.
- **Preklopi:** kliknite kateri koli dnevnik v stranski vrstici.
- **Preimenuj:** kliknite *Preimenuj* v glavi dnevnika. Enter shrani, Escape prekliče.
- **Izbriši:** kliknite *Izbriši dnevnik*. Pozvani boste k potrditvi. Če izbrišete zadnji dnevnik, se samodejno ustvari nov.

## QSO

- Izpolnite obrazec in pritisnite **Zabeleži QSO**.
- Klicni znak se med tipkanjem samodejno pretvori v velike črke.
- Datum in čas se predizpolnita s *trenutnim* UTC in se ponastavita po vsakem zabeleženem QSO; še vedno lahko vnesete katero koli vrednost.
- Pas in vrsta se ohranita med QSO v isti seji, tako da vam ni treba znova izbirati za vsak stik.
- RST oddan / RST sprejet, če sta pustila prazna, se vrneta na **59** za glasovne vrste (SSB/FM/AM/DIGITALVOICE) in na **599** za CW in digitalne vrste (CW/FT8/FT4/RTTY/PSK31/JT65).
- Pod poljem klicnega znaka se pojavi čip *Dvojnik v tem dnevniku*, če klicni znak že obstaja v trenutnem dnevniku. Dvojniki *niso* blokirani.
- **Uredi QSO** z gumbom *Uredi* v vrstici. Obrazec preklopi v način *Posodobi QSO*, vrstica je označena, in pojavi se gumb *Prekliči*. Preklop dnevnika ali brisanje dnevnika samodejno prekliče urejanje.
- **Izbriši QSO** z gumbom *Izbriši* v vrstici (zahteva potrditev).

## ADIF uvoz in izvoz

- **Izvoz**: kliknite *Izvozi .adi* v glavi dnevnika. Prenese se datoteka z `ADIF_VER 3.1.4` in `PROGRAMID local-qso` v glavi. Vsak zapis preslika `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Uvoz**: kliknite *Uvozi datoteko .adi* pod obrazcem za ustvarjanje dnevnika in izberite datoteko `.adi`/`.adif`. Ustvari se nov dnevnik z imenom `Uvožen YYYY-MM-DD HH:MM UTC`. Uvoz se nikoli ne združi v obstoječi dnevnik.
- Število dolžine polja se obravnava kot število znakov, kar deluje za ASCII ADIF (vsa standardna polja QSO). Večbajtna vsebina v nebistvenih besedilnih poljih lahko parsa čudno.

## Zasebnost in podatki

- Vsi podatki so shranjeni v `localStorage` brskalnika pod ključem `local-qso:v1`.
- Nič se ne prenaša nikamor. Brez backenda, brez API klicev, brez telemetrije, brez analitike.
- Brisanje podatkov spletnega mesta, uporaba zasebnega/inkognito načina ali uporaba drugega brskalnika/naprave pomeni prazen dnevnik — za varnostno kopiranje uporabite *Izvozi .adi*.

## Jezik vmesnika

Izbirnik jezika v glavi pokriva **28 jezikov**. Izberite enega in preostali vmesnik se takoj ponovno izriše; vaša izbira je shranjena z vašimi dnevniki in upoštevana ob naslednjem obisku. Angleški je privzeti.

Razpoložljivi jeziki (zastavna emojija + samolastno ime; po abecedi znotraj vsake pisave):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzalne tehnične oznake ostajajo v svoji kanonični obliki v vseh jezikih: imena pasov (`20m`, `70cm`, …), kode ADIF vrst (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` in ISO kode držav.

Manjka niz v vašem jeziku? Vsak jezik je ena majhna datoteka v [`i18n/`](i18n/) — kopirajte `i18n/en.js`, prevedite vrednosti, shranite kot `i18n/<koda>.js`, nato dodajte `<script>` značko plus `<select>` možnost v `index.html` in kodo v `SUPPORTED_LANGS` v `app.js`.

## Teme

Stikalo teme v glavi preklaplja med dnevom (privzeto) in nočjo. Nastavitev je shranjena z vašimi dnevniki in upoštevana ob naslednjem obisku. Domorodni izbiralniki datuma/časa sledijo temi prek `color-scheme`.

## Tehnične opombe

- Enostranska aplikacija, čist HTML + CSS + JavaScript. Brez ogrodja, brez gradnje, brez odvisnosti.
- Izvorne datoteke:
  - `index.html` — markup in meta oznake.
  - `style.css` — teme in postavitev (spremenljivke dan/noč, mobilne media queries).
  - `app.js` — stanje, vztrajnost, izris, ADIF parser/serializer, iskanje predpone klicnega znaka → država.
  - `favicon.svg` — vgrajen SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (ime, barva teme, scope, ikona), da je aplikacija namestljiva kot PWA na mobilnih napravah in namizjih.
  - `service-worker.js` — cache-first service worker, ki ob namestitvi predpomni vsako statično datoteko, ob aktivaciji izprazni stare pomnilnike in po prvem obisku ohranja aplikacijo popolnoma brez povezave. Registracija je samodejno preskočena za protokol `file://`, tako da odpiranje `index.html` neposredno z diska ostaja čisto.
  - `i18n/<lang>.js` — ena datoteka prevoda na podprt jezik (skupaj 28). Vsaka je majhen IIFE, ki dodeli `window.I18N[<lang>]` ravno karto ključ→niz. `t()` in `applyLanguage()` v `app.js` upravljata iskanja (z angleškim rezervnim načinom) in se sprehajata po DOM, posodabljajoč vsak element `[data-i18n*]`.
- Preizkušeno na novejših brskalnikih Chromium, Firefox in Safari (namizje + iOS).

## Zasluge

Zgradil [YL3IM](https://www.qrz.com/db/YL3IM).

Državne zastave se opirajo na zaporedja Unicode regionalnih indikatorjev. Pravilno se izrišejo na macOS, iOS, Linux (s pisavo emoji, ki podpira zastave) in Android. Windows ne vsebuje sistemske pisave zastav, zato se zastavne emojije tam lahko prikazujejo kot pari črk.
