# Local QSO Logger

## Pročitajte na svom jeziku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 Hrvatski · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

QSO dnevnik za radioamatere koji poštuje privatnost i radi u potpunosti u vašem pregledniku. Bez računa, bez poslužitelja, bez praćenja, bez analitike — vaši dnevnici postoje samo u `localStorage` preglednika i nikada ne napuštaju vaš uređaj.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Web stranica projekta: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger na iPadu](media/iPad.png)

## Sadržaj

- [Pročitajte na svom jeziku](#pročitajte-na-svom-jeziku)
- [Značajke](#značajke)
- [Početak](#početak)
- [Instalacija kao PWA na mobilnom uređaju](#instalacija-kao-pwa-na-mobilnom-uređaju)
  - [iOS (samo Safari)](#ios-samo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dnevnici](#dnevnici)
- [QSO](#qso)
- [ADIF uvoz i izvoz](#adif-uvoz-i-izvoz)
- [Privatnost i podaci](#privatnost-i-podaci)
- [Jezik sučelja](#jezik-sučelja)
- [Teme](#teme)
- [Tehničke napomene](#tehničke-napomene)
- [Zahvale](#zahvale)

## Značajke

- Više dnevnika, svaki sa svojim popisom QSO.
- Radnje dnevnika: stvaranje, preimenovanje, brisanje, uvoz iz ADIF, izvoz u ADIF (`.adi`).
- QSO polja: pozivni znak, UTC datum, UTC vrijeme, pojas, vrsta rada, RST poslan, RST primljen.
- Uređivanje i brisanje bilo kojeg QSO (s potvrdom pri brisanju).
- Razumni zadani podaci: današnji UTC datum/vrijeme unaprijed ispunjeni, zadani RST ovisno o vrsti rada (59 za govorne, 599 za CW/digitalne), ljepljiv pojas i vrsta rada između uzastopnih QSO.
- Indikator duplikata pozivnog znaka u stvarnom vremenu (informativan — duplikati su dozvoljeni).
- Stupac zastave države izveden iz prefiksa pozivnog znaka (pokriva ≥99 % uobičajenih radioamaterskih prefiksa, uključujući prijenosne pozivne znakove poput `9A/M0NCG`).
- Prikaz datuma u QSO tablici prema lokalu; ISO pohrana i ADIF izlaz ostaju nepromijenjeni.
- Dnevne/noćne teme (dan zadani; prebacivač je u zaglavlju).
- Mobilno prilagođen responzivan raspored s tipkama prilagođenim za dodir.
- Radi potpuno izvanmrežno — nikakvih mrežnih zahtjeva u bilo kojem trenutku.
- Instalabilan kao PWA (Dodaj na početni zaslon / Instaliraj aplikaciju) kada se hostira preko HTTPS.
- Sučelje dostupno na **28 jezika** (engleski plus 22 latinična, 5 ćiriličnih i grčki); izbornik s emoji zastava u zaglavlju.

## Početak

Jednostavno otvorite `index.html` u modernom pregledniku. Bez build-a, bez instalacije, bez poslužitelja.

Za hostanje, postavite statičke datoteke (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` i direktorij `i18n/` s 28 prijevodnih datoteka) na bilo koji statički host (GitHub Pages, Netlify, vlastiti web poslužitelj). Radit će i preko `file://` — registracija service workera se automatski preskače za protokol `file:`, pa otvaranje `index.html` izravno s diska radi čisto.

Kada se poslužuje preko HTTPS, aplikacija postaje instalabilna kao PWA (preko izbornika preglednika *Instaliraj aplikaciju* / *Dodaj na početni zaslon*) i radi izvanmrežno nakon prvog posjeta zahvaljujući cache-first service workeru koji prethodno cachira svaku statičku datoteku (UI + svi prijevodi).

Zadani dnevnik se automatski stvara pri prvom posjetu, tako da možete odmah početi bilježiti.

## Instalacija kao PWA na mobilnom uređaju

Kada se aplikacija poslužuje preko HTTPS (npr. GitHub Pages), možete je instalirati na početni zaslon telefona tako da radi preko cijelog zaslona bez okvira preglednika. Nakon prvog pokretanja, service worker cachira sve, pa naredna pokretanja rade potpuno izvanmrežno.

### iOS (samo Safari)

Na iOS-u samo Safari može instalirati PWA — preglednici trećih strana ne mogu.

1. Otvorite stranicu u **Safari**.
2. Dodirnite gumb **Podijeli**.
3. Odaberite **Dodaj na Početni zaslon**, zatim **Dodaj**.

Vodič:

![iOS vodič za instalaciju](media/iOS_add_to_home_screen.gif)

Izvor više kvalitete: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otvorite stranicu u svom pregledniku. Može se automatski pojaviti poziv *Instaliraj aplikaciju*.
2. U suprotnom otvorite **⋮ izbornik** → **Instaliraj aplikaciju** (ili **Dodaj na početni zaslon** u starijim verzijama).

Vodič:

![Android vodič za instalaciju](media/Android_add_to_home_screen.gif)

Izvor više kvalitete: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dnevnici

- **Stvori:** upišite naziv u *Naziv dnevnika* i pošaljite. Ako ostavite naziv prazan, zadano je `Log YYYY-MM-DD HH:MM UTC`.
- **Prebaci:** kliknite na bilo koji dnevnik u bočnoj traci.
- **Preimenuj:** kliknite *Preimenuj* u zaglavlju dnevnika. Enter sprema, Escape odustaje.
- **Obriši:** kliknite *Obriši dnevnik*. Bit ćete pitani za potvrdu. Ako obrišete posljednji dnevnik, novi se automatski stvara.

## QSO

- Ispunite obrazac i pritisnite **Zabilježi QSO**.
- Pozivni znak se automatski pretvara u velika slova dok tipkate.
- Datum i vrijeme se unaprijed ispunjavaju s *trenutnim* UTC i resetiraju nakon svakog zabilježenog QSO; još uvijek možete unijeti bilo koju vrijednost.
- Pojas i vrsta rada ostaju između QSO u istoj sesiji, tako da ih ne morate ponovno birati za svaki kontakt.
- RST poslan / RST primljen, ako su ostavljeni prazni, vraćaju se na **59** za govorne vrste (SSB/FM/AM/DIGITALVOICE) i na **599** za CW i digitalne vrste (CW/FT8/FT4/RTTY/PSK31/JT65).
- Ispod polja pozivnog znaka pojavljuje se čip *Duplikat u ovom dnevniku* ako pozivni znak već postoji u trenutnom dnevniku. Duplikati *nisu* blokirani.
- **Uredi QSO** pomoću gumba *Uredi* u retku. Obrazac se prebacuje u način *Ažuriraj QSO*, redak je istaknut, i pojavljuje se gumb *Odustani*. Prebacivanje dnevnika ili brisanje dnevnika automatski poništava uređivanje.
- **Obriši QSO** pomoću gumba *Obriši* u retku (traži potvrdu).

## ADIF uvoz i izvoz

- **Izvoz**: kliknite *Izvezi .adi* u zaglavlju dnevnika. Preuzima se datoteka s `ADIF_VER 3.1.4` i `PROGRAMID local-qso` u zaglavlju. Svaki zapis mapira `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Uvoz**: kliknite *Uvezi .adi datoteku* ispod obrasca za stvaranje dnevnika i odaberite datoteku `.adi`/`.adif`. Novi dnevnik se stvara s nazivom `Uvezeno YYYY-MM-DD HH:MM UTC`. Uvoz se nikada ne spaja u postojeći dnevnik.
- Broj duljine polja tretira se kao broj znakova, što radi za ASCII ADIF (sva standardna QSO polja). Višebajtni sadržaj u nebitnim tekstualnim poljima može se parsati čudno.

## Privatnost i podaci

- Svi podaci pohranjeni su u `localStorage` preglednika pod ključem `local-qso:v1`.
- Ništa se nikamo ne prenosi. Nema backenda, nema API poziva, nema telemetrije, nema analitike.
- Brisanje podataka stranice, korištenje privatnog/inkognito načina ili korištenje drugog preglednika/uređaja znači prazan dnevnik — koristite *Izvezi .adi* za sigurnosnu kopiju.

## Jezik sučelja

Izbornik jezika u zaglavlju pokriva **28 jezika**. Odaberite jedan i ostatak sučelja se odmah ponovno renderira; vaš izbor je spremljen zajedno s vašim dnevnicima i poštovan pri sljedećem posjetu. Engleski je zadani.

Dostupni jezici (emoji zastave + izvorni naziv; abecednim redom unutar svake pisma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzalne tehničke oznake ostaju u svom kanoničnom obliku na svim jezicima: nazivi pojaseva (`20m`, `70cm`, …), kodovi ADIF vrsta (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` i ISO kodovi zemalja.

Nedostaje niz na vašem jeziku? Svaki jezik je jedna mala datoteka u [`i18n/`](i18n/) — kopirajte `i18n/en.js`, prevedite vrijednosti, spremite kao `i18n/<kod>.js`, zatim dodajte `<script>` oznaku plus `<select>` opciju u `index.html` i kod u `SUPPORTED_LANGS` u `app.js`.

## Teme

Prebacivač tema u zaglavlju prebacuje između dana (zadano) i noći. Postavka je spremljena zajedno s vašim dnevnicima i poštovana pri sljedećem posjetu. Izvorni odabiri datuma/vremena slijede temu putem `color-scheme`.

## Tehničke napomene

- Jednostranična aplikacija, čisti HTML + CSS + JavaScript. Bez frameworka, bez build-a, bez ovisnosti.
- Izvorne datoteke:
  - `index.html` — markup i meta oznake.
  - `style.css` — teme i raspored (varijable dan/noć, mobilne media queries).
  - `app.js` — stanje, perzistencija, renderiranje, ADIF parser/serializer, pretraga prefiksa pozivnog znaka → zemlja.
  - `favicon.svg` — ugrađeni SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (naziv, boja teme, scope, ikona) tako da je aplikacija instalabilna kao PWA na mobilnim i stolnim uređajima.
  - `service-worker.js` — cache-first service worker koji pri instalaciji prethodno cachira svaku statičku datoteku, pri aktivaciji uklanja stare cacheve i nakon prvog posjeta drži aplikaciju potpuno izvanmrežnom. Registracija se automatski preskače za protokol `file://`, tako da otvaranje `index.html` izravno s diska ostaje čisto.
  - `i18n/<lang>.js` — jedna prijevodna datoteka po podržanom jeziku (28 ukupno). Svaka je mali IIFE koji dodjeljuje `window.I18N[<lang>]` ravnu mapu ključ→niz. `t()` i `applyLanguage()` u `app.js` rukuju pretragama (s engleskim fallbackom) i hodaju kroz DOM ažurirajući svaki `[data-i18n*]` element.
- Testirano u nedavnim verzijama Chromium, Firefox i Safari (desktop + iOS).

## Zahvale

Izgradio [YL3IM](https://www.qrz.com/db/YL3IM).

Zastave zemalja oslanjaju se na Unicode sekvence regionalnih indikatora. Pravilno se renderiraju na macOS, iOS, Linux (s emoji fontom koji podržava zastave) i Android. Windows ne uključuje sistemski font zastava, pa se emoji zastave tamo mogu prikazati kao parovi slova.
