# Local QSO Logger

## Beri v svojem jeziku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 Slovenščina · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Dnevnik QSO za radioamaterje, ki spoštuje zasebnost in deluje povsem v vašem brskalniku. Brez računa, brez strežnika, brez sledenja, brez analitike — vaši dnevniki živijo le v `localStorage` vašega brskalnika in nikoli ne zapustijo vaše naprave.

Avtor: [YL3IM](https://www.qrz.com/db/YL3IM). Spletna stran projekta: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger running on iPad](media/iPad.png)

## Vsebina

- [Beri v svojem jeziku](#beri-v-svojem-jeziku)
- [Funkcije](#funkcije)
- [Začetek](#začetek)
- [Namestitev kot PWA na mobilni napravi](#namestitev-kot-pwa-na-mobilni-napravi)
  - [iOS (samo Safari)](#ios-samo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dnevniki](#dnevniki)
- [QSO-ji](#qso-ji)
- [Uvoz in izvoz ADIF](#uvoz-in-izvoz-adif)
- [Zasebnost in podatki](#zasebnost-in-podatki)
- [Jezik vmesnika](#jezik-vmesnika)
- [Teme](#teme)
- [Tehnične opombe](#tehnične-opombe)
- [Zahvale](#zahvale)

## Funkcije

- Več dnevnikov; vsak z lastnim seznamom QSO-jev.
- Dejanja z dnevnikom: ustvarjanje, preimenovanje, brisanje, uvoz iz ADIF, izvoz v ADIF (`.adi`).
- Obrazec QSO razdeljen v tri bloke: **Podatki postaje** (klicni znak postaje, klicni znak operaterja, lastna mreža) ostane lepljiv med QSO-ji; **Način delovanja** (način razširjanja, satelit, način, satelitni način, pas, RX pas) s satelitskimi polji, ki se razkrijejo le pri načinu razširjanja *Satelit*; in **Podatki QSO** (klicni znak klicane postaje, mreža klicane postaje, datum/čas UTC pri urejanju, komentar, RST poslan, RST sprejet).
- Polna taksonomija ADIF `MODE` → `SUBMODE` v spustnem meniju — izberite nadrejeni način (`SSB`, `MFSK`, …) ali se spustite neposredno do specifičnega podnačina (`USB`, `FT4`, …); aplikacija shrani obe polji po ADIF in tabela prikaže specifični podnačin, kadar obstaja.
- Polno naštevanje načinov razširjanja ADIF (SAT, RPT, EME, ES, MS, Aurora itd.) kot spustni meni.
- Polni katalog satelitov AMSAT (~110 naprav) in dvonivojski spustni meni **Sat mode**: prednostni dvočrkovni kodi uplink/downlink na vrhu (LU, LV, SX, UU, UV, VA, VU, VV) in zastarele enočrkovne oznake (A/B/J/K/L/R/S/T/U/V/W/X) skupaj kot *zastarele* spodaj. Izbira satelitnega načina samodejno nastavi uplink `BAND` in downlink `RX band`.
- Urejanje in brisanje katerega koli QSO-ja (s potrditvijo pri brisanju).
- Razumne privzete vrednosti: današnji datum/čas UTC pred-izpolnjen, privzeti RST glede na način (59 za glasovne načine, 599 za CW/digitalne), lepljivi Podatki postaje + pas + način + način razširjanja med zaporednimi QSO-ji (le polja per-kontakt — klicni znak, mreža, komentar, RST — se počistijo po vsakem *Zabeleži QSO*).
- Živi indikator podvojenega klicnega znaka (informativno — podvojene QSO so dovoljene).
- Stolpec z zastavico države, izpeljan iz predpone klicnega znaka (pokriva ≥99 % pogostih radioamaterskih predpon, vključno s prenosnimi klici kot `9A/M0NCG`).
- Prikaz datuma glede na lokalne nastavitve v tabeli QSO; shranjevanje in ADIF izhod ostaneta v ISO.
- Vmesnik v **28 jezikih** (angleščina plus 22 latiničnih, 5 cirilskih in grščina); selektor z zastavičnimi emojiji v glavi.
- Dnevna / nočna tema (dan je privzeta; stikalo je v glavi).
- Mobilno odzivna postavitev z gumbi, primernimi za dotik.
- Deluje popolnoma brez povezave — brez omrežnih zahtev kadarkoli.
- Namestljivo kot PWA (Dodaj na začetni zaslon / Namesti aplikacijo) pri gostovanju prek HTTPS.

## Začetek

Preprosto odprite `index.html` v sodobnem brskalniku. Brez koraka gradnje, brez namestitve, brez strežnika.

Če ga želite gostovati, preprosto spustite statične datoteke (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` in mapo `i18n/` z 28 prevodnimi datotekami) na katerikoli statični gostovalnik (GitHub Pages, Netlify, vaš spletni strežnik). Deluje tudi prek `file://` — registracija storitvenega delavca se na protokolu `file:` preskoči samodejno, tako da neposredno odpiranje `index.html` z diska deluje čisto.

Ko je gostovano prek HTTPS, postane aplikacija namestljiva kot PWA (meni *Namesti aplikacijo* / *Dodaj na začetni zaslon*) in deluje brez povezave po prvem obisku, zahvaljujoč storitvenemu delavcu najprej iz predpomnilnika, ki vnaprej predpomnilniči vsako statično datoteko (UI + vse prevode).

Privzeti dnevnik je samodejno ustvarjen ob prvem obisku, tako da lahko takoj začnete beležiti.

## Namestitev kot PWA na mobilni napravi

Ko je aplikacija gostovana prek HTTPS (npr. GitHub Pages), jo lahko namestite na začetni zaslon telefona, kjer deluje v celozaslonskem načinu brez brskalniških elementov. Po prvem zagonu storitveni delavec predpomnilniči vse, zato nadaljnji zagoni delujejo popolnoma brez povezave.

### iOS (samo Safari)

V iOS lahko PWA namestijo samo Safari — brskalniki tretjih oseb tega ne morejo.

1. Odprite spletno mesto v **Safari**.
2. Dotaknite se gumba **Skupna raba**.
3. Izberite **Dodaj na začetni zaslon**, nato **Dodaj**.

Vodič:

![iOS install walkthrough](media/iOS_add_to_home_screen.gif)

Vir višje kakovosti: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Odprite spletno mesto v brskalniku. Poziv *Namesti aplikacijo* se morda prikaže samodejno.
2. Sicer odprite **meni ⋮** → **Namesti aplikacijo** (ali **Dodaj na začetni zaslon** pri starejših različicah).

Vodič:

![Android install walkthrough](media/Android_add_to_home_screen.gif)

Vir višje kakovosti: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dnevniki

- **Ustvari:** vnesite ime v polje *Ime dnevnika* in oddajte. Če pustite ime prazno, se privzeto nastavi na `Log YYYY-MM-DD HH:MM UTC`.
- **Preklopi:** kliknite katerikoli dnevnik v stranski vrstici.
- **Preimenuj:** kliknite *Preimenuj* v glavi dnevnika. Pritisnite Enter za shranjevanje, Escape za preklic.
- **Izbriši:** kliknite *Izbriši dnevnik*. Pozvani boste k potrditvi. Če izbrišete zadnji dnevnik, se samodejno ustvari nov.

## QSO-ji

- Izpolnite obrazec in pritisnite **Zabeleži QSO**.
- Obrazec je razdeljen v tri bloke:
  - **Podatki postaje** — *Klicni znak postaje* (vaš oddajni klicni znak, ADIF `STATION_CALLSIGN`), *Operater* (klicni znak posameznega operaterja — ločen od *Klicnega znaka postaje*, ko je gostujoči operater pri mikrofonu klubske postaje; ADIF `OPERATOR`) in *Moja mreža* (ADIF `MY_GRIDSQUARE`). Ti ostanejo lepljivi med QSO-ji v isti seji — nastavite jih enkrat in se prenesejo.
  - **Način delovanja** — *Način razš.*, *Način*, *Pas* in satelitska polja *Satelit* / *Sat mode* / *RX pas*, kadar je način razširjanja *Satelit*. Pas, način in način razširjanja so lepljivi kot Podatki postaje.
  - **Podatki QSO** — polja per-kontakt: *Klicni znak*, *Mreža* (Maidenheadova mreža druge postaje), *Komentar* (ADIF `COMMENT`), *RST poslan*, *RST sprejet*. Pri urejanju obstoječega QSO-ja se v tem bloku prikažeta tudi *Datum (UTC)* in *Čas (UTC)*. Ta polja se počistijo po vsakem *Zabeleži QSO*.
- Vsi klicni znaki (klicana, postaja, operater) se med tipkanjem samodejno pretvorijo v velike črke; obe mrežni polji enako.
- Datum in čas se ob oddaji pred-izpolnita na *zdaj* v UTC; pri urejanju lahko vnesete katero koli vrednost.
- RST poslan / RST sprejet, če sta prazna, se privzameta na **59** za glasovne načine (SSB/FM/DIGITALVOICE) in **599** za CW in digitalne načine (CW/FT8/FT4/RTTY/PSK31/JT65). Privzeta vrednost sledi nadrejenemu MODE, zato izbira specifičnega podnačina kot *USB* ali *FT4* še vedno da pravo privzeto vrednost.
- Pod poljem klicnega znaka se prikaže žeton *Podvojeno v tem dnevniku*, če klicni znak že obstaja v trenutnem dnevniku. Podvojene QSO *niso* blokirane.
- **Način razširjanja** — neobvezni spustni meni načinov razširjanja ADIF (SAT, RPT, EME, F2, Es, MS, LOS itd.). Pustite prazno za navadne HF zemeljske QSO-je.
- **Satelitski QSO-ji** — izbira načina razširjanja *Satelit* razkrije tri satelitska polja: **Satelit** (spustni meni ~110 AMSAT-registriranih naprav), **Sat mode** (črkovne oznake AMSAT, razvrščene kot *moderne* dvočrkovne kode uplink/downlink na vrhu in *zastarele* enočrkovne kode spodaj) in **RX pas** (downlink pas). Satelit, Sat mode in RX pas so obvezni — brskalnik bo zavrnil oddajo brez njih. Izbira **Sat mode** samodejno izpolni glavni **Pas** z uplink pasom in **RX pas** z downlink pasom (npr. način J → 2m uplink, 70cm downlink). Preklop *nazaj* na satelit iz drugega načina razširjanja ponastavi Sat mode, tako da boste pozvani, da izberete novega. Nesatelitski QSO-ji nikoli ne vsebujejo satelitskih polj; preklop obstoječega QSO-ja iz satelita na drug prop-mode jih čisto odstrani. **Mreža** in **Moja mreža** sta splošni polji (prav tako koristni za VHF/UHF mrežna tekmovanja) in ostaneta vidni za vsak QSO.
- **Uredi QSO** z gumbom *Uredi* na vrstici. Obrazec preklopi v način *Posodobi QSO*, vrstica se označi in prikaže se gumb *Prekliči*. Preklop dnevnikov ali brisanje dnevnika samodejno prekliče urejanje.
- **Izbriši QSO** z gumbom *Izbriši* na vrstici (zahteva potrditev).

## Uvoz in izvoz ADIF

- **Izvoz**: kliknite *Izvozi .adi* v glavi dnevnika. Prenese se datoteka v skladu z **ADIF 3.1.7**. Glava deklarira `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` in `CREATED_TIMESTAMP` (UTC). Oddana polja QSO (kadar niso prazna): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — čemur sledijo vsa dodatna polja ADIF, ohranjena pri uvozu (glejte spodaj).
- **Uvoz**: kliknite *Uvozi datoteko .adi* pod obrazcem za ustvarjanje dnevnika in izberite datoteko `.adi` / `.adif`. Ustvari se nov dnevnik, poimenovan `Imported YYYY-MM-DD HH:MM UTC`. Uvoz se nikoli ne zlije z obstoječim dnevnikom.
- **Brezizgubni round-trip**: pri uvozu se vsako polje ADIF, ki ga aplikacija ne modelira v UI (npr. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, polja `APP_*`) ohrani na QSO-ju in se pri naslednjem izvozu re-emitira verbatim. Izvoz datoteke, ki je bila sama uvožena, torej ohrani vse.
- Dolžina polja se obravnava kot število UTF-8 bajtov po specifikaciji, tako da se večbajtno besedilo (npr. naglašeni klicni znaki v `COMMENT`) razčleni pravilno.

## Zasebnost in podatki

- Vsi podatki so shranjeni v `localStorage` vašega brskalnika pod ključem `local-qso:v1`.
- Nič se nikamor ne pošilja. Brez zaledja, brez klica API, brez telemetrije, brez analitike.
- Brisanje podatkov spletnega mesta brskalnika, uporaba zasebnega/inkognito načina ali drugega brskalnika/naprave pomeni svež prazen dnevnik — za varnostno kopiranje uporabite *Izvozi .adi*.

## Jezik vmesnika

Selektor jezika v glavi pokriva **28 jezikov**. Izberite enega in preostalo UI se takoj ponovno izriše; vaša izbira je shranjena skupaj z dnevniki in se upošteva ob naslednjem obisku. Privzeta je angleščina.

Razpoložljivi jeziki (zastavica emoji + domače ime; razvrščeni po abecedi znotraj vsakega pisma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Splošne tehnične oznake ostajajo v kanonični obliki v vseh jezikih: imena pasov (`20m`, `70cm`, …), kode načinov ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` in ISO kode držav.

Manjka niz v vašem jeziku? Vsak jezik je ena majhna datoteka v [`i18n/`](i18n/) — kopirajte `i18n/en.js`, prevedite vrednosti, shranite kot `i18n/<code>.js`, nato dodajte oznako `<script>` in možnost `<select>` v `index.html` ter kodo v `SUPPORTED_LANGS` v `app.js`.

## Teme

Stikalo teme v glavi preklopi med dnevno (privzeto) in nočno. Nastavitev je shranjena skupaj z dnevniki in se upošteva ob naslednjem obisku. Domači izbirniki datuma/časa sledijo temi prek `color-scheme`.

## Tehnične opombe

- Enostranična aplikacija, čist HTML + CSS + JavaScript. Brez ogrodij, brez koraka gradnje, brez odvisnosti.
- Izvorne datoteke:
  - `index.html` — označevanje in meta oznake.
  - `style.css` — teme in postavitev (dnevne/nočne spremenljivke, mobilne medijske poizvedbe).
  - `app.js` — stanje, persistenca, izrisovanje, ADIF razčlenjevalnik/serializator, iskanje predpona klicnega znaka → država.
  - `favicon.svg` — vgrajeni SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (ime, barva teme, obseg, ikona), da je aplikacija namestljiva kot PWA na mobilni napravi in namizju.
  - `service-worker.js` — storitveni delavec najprej iz predpomnilnika, ki vnaprej predpomnilniči vsako statično datoteko pri namestitvi, izprazni stare predpomnilnike pri aktivaciji in ohranja aplikacijo v celoti brez povezave po prvem obisku. Registracija se na protokolu `file://` preskoči samodejno, tako da neposredno odpiranje `index.html` z diska ostane čisto.
  - `i18n/<lang>.js` — ena prevodna datoteka za vsak podprti jezik (skupaj 28). Vsaka je majhen IIFE, ki dodeli `window.I18N[<lang>]` plosko preslikavo ključ→niz. `t()` in `applyLanguage()` v `app.js` upravljata iskanja (z angleškim nadomestnim) in hodita po DOM-u posodabljajočem vsak element `[data-i18n*]`.
- Testirano na aktualnem Chromium, Firefox in Safari (namizje + iOS).

## Zahvale

Razvil [YL3IM](https://www.qrz.com/db/YL3IM).

Zahvala [A65BR](https://www.qrz.com/db/A65BR) Olegu za neprecenljive namige, ki so naredili del satelitskega QSO resnično uporaben — moderne dvočrkovne oznake Sat-mode, katalog AMSAT in samodejno nastavitev uplink/downlink gre vse zahvaliti njegovi povratni informaciji.

Zastavice držav se opirajo na sekvence regionalnih kazalnikov Unicode. Pravilno se prikazujejo na macOS, iOS, Linux (z emojijsko pisavo, ki podpira zastavice) in Android. Windows ne vključuje sistemske pisave zastavic, zato se emojiji zastavic tam morda prikažejo kot pari črk.
