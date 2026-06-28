# Local QSO Logger

## Lue omalla kielelläsi

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 Suomi · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Yksityisyyttä kunnioittava amatööriradion QSO-loki, joka toimii kokonaan selaimessasi. Ei tiliä, ei palvelinta, ei seurantaa, ei analytiikkaa — lokikirjasi pysyvät vain selaimesi `localStorage`-muistissa eivätkä koskaan poistu laitteeltasi.

Tekijä: [YL3IM](https://www.qrz.com/db/YL3IM). Projektin sivusto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger iPadilla](media/iPad.png)

## Sisällys

- [Lue omalla kielelläsi](#lue-omalla-kielelläsi)
- [Ominaisuudet](#ominaisuudet)
- [Aloittaminen](#aloittaminen)
- [Asennus PWA-sovelluksena mobiililaitteelle](#asennus-pwa-sovelluksena-mobiililaitteelle)
  - [iOS (vain Safari)](#ios-vain-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Lokikirjat](#lokikirjat)
- [QSO](#qso)
- [ADIF-tuonti ja -vienti](#adif-tuonti-ja-vienti)
- [Yksityisyys ja tiedot](#yksityisyys-ja-tiedot)
- [Käyttöliittymän kieli](#käyttöliittymän-kieli)
- [Teemat](#teemat)
- [Tekniset huomiot](#tekniset-huomiot)
- [Kiitokset](#kiitokset)

## Ominaisuudet

- Useita lokikirjoja, jokaisella oma QSO-lista.
- Lokikirjan toiminnot: luo, nimeä uudelleen, poista, tuo ADIF:sta, vie ADIF:iin (`.adi`).
- QSO-kentät: kutsumerkki, UTC-päivä, UTC-aika, taajuusalue, tila, RST lähetetty, RST vastaanotettu.
- Muokkaa ja poista mikä tahansa QSO (vahvistus poistossa).
- Järkevät oletukset: tämän päivän UTC-päivä/-aika esitäytetty, tilakohtaiset RST-oletukset (59 äänitiloille, 599 CW/digitaalitiloille), tarttuva taajuusalue ja tila peräkkäisten QSO:iden välillä.
- Reaaliaikainen kaksoiskappale-kutsumerkki-osoitin (informatiivinen — duplikaatit on sallittu).
- Maan lippu -sarake johdettu kutsumerkin etuliitteestä (kattaa ≥99 % yleisistä amatööriradion etuliitteistä, mukaan lukien siirrettävät kutsumerkit kuten `9A/M0NCG`).
- Lokaalitietoinen päivänäkymä QSO-taulukossa; ISO-tallennus ja ADIF-tuloste pysyvät ennallaan.
- Päivä-/yöteemat (päivä oletuksena; vaihtokytkin otsakkeessa).
- Mobiiliystävällinen responsiivinen ulkoasu kosketukseen sopivilla painikkeilla.
- Toimii täysin offline-tilassa — ei verkkopyyntöjä missään vaiheessa.
- Asennettavissa PWA-sovelluksena (Lisää aloitusnäyttöön / Asenna sovellus), kun isännöidään HTTPS:n kautta.
- Käyttöliittymä saatavilla **28 kielellä** (englanti plus 22 latinalaista, 5 kyrillistä ja kreikka); lipuemoji-prefiksinen valitsin otsakkeessa.

## Aloittaminen

Avaa vain `index.html` modernissa selaimessa. Ei käännöstä, ei asennusta, ei palvelinta.

Jos haluat isännöidä sitä, sijoita staattiset tiedostot (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ja `i18n/`-hakemisto 28 käännöstiedostolla) mille tahansa staattiselle isäntäpalvelimelle (GitHub Pages, Netlify, oma verkkopalvelin). Toimii myös `file://`-kautta — service workerin rekisteröinti ohitetaan automaattisesti `file:`-protokollalla, joten `index.html`-tiedoston avaaminen suoraan levyltä toimii puhtaasti.

Kun palvellaan HTTPS:n kautta, sovellus on asennettavissa PWA-sovelluksena (selaimen *Asenna sovellus* / *Lisää aloitusnäyttöön* -valikon kautta) ja toimii offline-tilassa ensimmäisen vierailun jälkeen kiitos cache-first service workerin, joka esicachettaa kaikki staattiset tiedostot (UI + kaikki käännökset).

Oletuslokikirja luodaan automaattisesti ensimmäisellä vierailulla, joten voit aloittaa lokin pidon välittömästi.

## Asennus PWA-sovelluksena mobiililaitteelle

Kun sovellusta palvellaan HTTPS:n kautta (esim. GitHub Pages), voit asentaa sen puhelimesi aloitusnäyttöön, jotta se toimii koko ruudulla ilman selaimen kehystä. Ensimmäisen käynnistyksen jälkeen service worker välimuistittaa kaiken, joten myöhemmät käynnistykset toimivat täysin offline-tilassa.

### iOS (vain Safari)

iOS:llä vain Safari voi asentaa PWA-sovelluksia — kolmannen osapuolen selaimet eivät voi.

1. Avaa sivusto **Safarissa**.
2. Napauta **Jaa**-painiketta.
3. Valitse **Lisää aloitusnäyttöön**, sitten **Lisää**.

Opastus:

![iOS-asennusopastus](media/iOS_add_to_home_screen.gif)

Korkealaatuisempi lähde: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Avaa sivusto selaimessasi. *Asenna sovellus* -kehote saattaa ilmestyä automaattisesti.
2. Muuten avaa **⋮-valikko** → **Asenna sovellus** (tai **Lisää aloitusnäyttöön** vanhemmissa versioissa).

Opastus:

![Android-asennusopastus](media/Android_add_to_home_screen.gif)

Korkealaatuisempi lähde: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Lokikirjat

- **Luo:** kirjoita nimi kenttään *Lokikirjan nimi* ja lähetä. Jos jätät nimen tyhjäksi, oletus on `Log YYYY-MM-DD HH:MM UTC`.
- **Vaihda:** napsauta mitä tahansa lokikirjaa sivupalkissa.
- **Nimeä uudelleen:** napsauta *Nimeä uudelleen* lokikirjan otsakkeessa. Enter tallentaa, Escape peruuttaa.
- **Poista:** napsauta *Poista lokikirja*. Sinua pyydetään vahvistamaan. Jos poistat viimeisen lokikirjan, uusi luodaan automaattisesti.

## QSO

- Täytä lomake ja paina **Tallenna QSO**.
- Kutsumerkki muunnetaan automaattisesti isoiksi kirjaimiksi kirjoittaessasi.
- Päivä ja aika esitäytetään *nyt* UTC:ssä ja palautetaan jokaisen tallennetun QSO:n jälkeen; voit silti syöttää minkä tahansa arvon.
- Taajuusalue ja tila pysyvät saman session QSO:iden välillä, joten sinun ei tarvitse valita niitä uudelleen jokaista kontaktia varten.
- RST lähetetty / RST vastaanotettu, jos jätetään tyhjäksi, palautuvat arvoon **59** äänitiloissa (SSB/FM/AM/DIGITALVOICE) ja **599** CW:lle ja digitaalitiloille (CW/FT8/FT4/RTTY/PSK31/JT65).
- Kutsumerkkikentän alle ilmestyy *Kaksoiskappale tässä lokissa* -merkintä, jos kutsumerkki on jo olemassa nykyisessä lokikirjassa. Kaksoiskappaleita *ei* estetä.
- **Muokkaa QSO** rivin *Muokkaa*-painikkeella. Lomake vaihtuu *Päivitä QSO* -tilaan, rivi korostetaan, ja *Peruuta*-painike ilmestyy. Lokikirjan vaihtaminen tai sen poistaminen peruuttaa muokkauksen automaattisesti.
- **Poista QSO** rivin *Poista*-painikkeella (kysyy vahvistuksen).

## ADIF-tuonti ja -vienti

- **Vienti**: napsauta lokikirjan otsakkeessa *Vie .adi*. Tiedosto ladataan jossa on `ADIF_VER 3.1.4` ja `PROGRAMID local-qso` otsakkeessa. Jokainen tietue kartoittaa `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Tuonti**: napsauta luo-lokikirja-lomakkeen alla *Tuo .adi-tiedosto* ja valitse `.adi`/`.adif`-tiedosto. Uusi lokikirja luodaan nimellä `Tuotu YYYY-MM-DD HH:MM UTC`. Tuonti ei koskaan yhdisty olemassa olevaan lokikirjaan.
- Kentän pituuslaskenta käsitellään merkkien lukumääränä, mikä toimii ASCII ADIF:lle (kaikille standardeille QSO-kentille). Monitavuinen sisältö epäolennaisissa tekstikentissä saattaa parsia oudosti.

## Yksityisyys ja tiedot

- Kaikki tiedot tallennetaan selaimen `localStorage`-muistiin avaimen `local-qso:v1` alle.
- Mitään ei lähetetä mihinkään. Ei backendiä, ei API-kutsuja, ei telemetriaa, ei analytiikkaa.
- Sivuston tietojen tyhjentäminen, yksityisen/incognito-tilan käyttö tai eri selaimen/laitteen käyttö tarkoittaa tyhjää lokikirjaa — käytä *Vie .adi* varmuuskopiointiin.

## Käyttöliittymän kieli

Otsakkeessa oleva kielivalitsin kattaa **28 kieltä**. Valitse yksi ja loput käyttöliittymästä renderöidään välittömästi uudelleen; valintasi tallennetaan lokiesi mukana ja huomioidaan seuraavalla käynnillä. Englanti on oletuskieli.

Käytettävissä olevat kielet (lipuemoji + alkuperäinen nimi; aakkosjärjestyksessä kunkin kirjoituksen sisällä):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Yleismaailmalliset tekniset nimikkeet pysyvät kanonisessa muodossaan kaikilla kielillä: taajuusalueiden nimet (`20m`, `70cm`, …), ADIF-tilakoodit (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ja ISO-maakoodit.

Puuttuuko merkkijono kielelläsi? Jokainen kieli on yksi pieni tiedosto kohdassa [`i18n/`](i18n/) — kopioi `i18n/en.js`, käännä arvot, tallenna nimellä `i18n/<koodi>.js`, lisää sitten `<script>`-tagi plus `<select>`-vaihtoehto `index.html`-tiedostoon ja koodi `SUPPORTED_LANGS`-muuttujaan `app.js`-tiedostossa.

## Teemat

Otsakkeessa oleva teemavalitsin vaihtaa päivän (oletus) ja yön välillä. Asetus tallennetaan lokiesi mukana ja huomioidaan seuraavalla käynnillä. Natiiviset päivän/ajan valitsijat seuraavat teemaa `color-scheme`:n kautta.

## Tekniset huomiot

- Yhden sivun sovellus, puhdas HTML + CSS + JavaScript. Ei kehyksiä, ei käännöstä, ei riippuvuuksia.
- Lähdetiedostot:
  - `index.html` — merkintä ja meta-tagit.
  - `style.css` — teemat ja asettelu (päivä/yö-muuttujat, mobile media queries).
  - `app.js` — tila, pysyvyys, renderöinti, ADIF-jäsentäjä/sarjallistin, kutsumerkin etuliitteen → maa-haku.
  - `favicon.svg` — sisäänrakennettu SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (nimi, teeman väri, scope, kuvake), jotta sovellus on asennettavissa PWA-sovelluksena mobiilissa ja työpöydällä.
  - `service-worker.js` — cache-first service worker, joka asennuksessa esicachettaa jokaisen staattisen tiedoston, aktivoinnissa poistaa vanhat välimuistit ja pitää sovelluksen täysin offline-tilassa ensimmäisen vierailun jälkeen. Rekisteröinti ohitetaan automaattisesti `file://`-protokollalla, joten `index.html`-tiedoston avaaminen suoraan levyltä pysyy puhtaana.
  - `i18n/<lang>.js` — yksi käännöstiedosto kutakin tuettua kieltä kohden (28 yhteensä). Kukin on pieni IIFE, joka antaa `window.I18N[<lang>]`-muuttujalle litteän avain→merkkijono-kartan. `app.js`-tiedoston `t()` ja `applyLanguage()` käsittelevät hakuja (englannin varakäännöksellä) ja kulkevat DOM:n läpi päivittäen jokaisen `[data-i18n*]`-elementin.
- Testattu uusimmilla Chromium-, Firefox- ja Safari-versioilla (työpöytä + iOS).

## Kiitokset

Rakentanut [YL3IM](https://www.qrz.com/db/YL3IM).

Maan liput perustuvat Unicode regional indicator -jaksoihin. Ne renderöityvät oikein macOS:llä, iOS:llä, Linuxilla (lipuemojeja tukevalla emojikirjasimella) ja Androidilla. Windows ei sisällä järjestelmälipukirjasinta, joten lipuemojit saattavat näkyä siellä kirjaiminparina.
