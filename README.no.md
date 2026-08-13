# Local QSO Logger

## Les på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 Norsk · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En personvernvennlig amatørradio-QSO-logger som kjører helt i nettleseren din. Ingen konto, ingen server, ingen sporing, ingen analyse — loggbøkene dine lever bare i nettleserens `localStorage` og forlater aldri enheten din.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Prosjektets nettside: [qso.lv](https://qso.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Innhold

- [Les på ditt språk](#les-på-ditt-språk)
- [Funksjoner](#funksjoner)
- [Kom i gang](#kom-i-gang)
- [Installer som PWA på mobil](#installer-som-pwa-på-mobil)
  - [iOS (kun Safari)](#ios-kun-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggbøker](#loggbøker)
- [QSO-er](#qso-er)
- [Kontester](#kontester)
- [Import og eksport](#import-og-eksport)
- [Personvern og data](#personvern-og-data)
- [Grensesnittsspråk](#grensesnittsspråk)
- [Temaer](#temaer)
- [Tekniske merknader](#tekniske-merknader)
- [Takk til](#takk-til)

## Funksjoner

- Flere loggbøker; hver med sin egen QSO-liste.
- **Kontestlogger** er valgfrie — velg fra en katalog med 68 medfølgende kontester når du oppretter en loggbok. QSO-skjemaet får en kontestspesifikk *Kontestutveksling*-blokk, duplikatdeteksjonen følger kontestens regel, og *Eksporter .cbr* produserer en Cabrillo v3-innsendingsfil ved siden av den vanlige ADIF-eksporten.
- Loggbokhandlinger: opprett, omdøp, slett, importer en loggfil (ADIF eller Cabrillo — formatet oppdages automatisk), eksporter til ADIF (`.adi`), samt *Eksporter .cbr* (Cabrillo v3) for kontestloggbøker. Å reimportere en `.cbr`-fil som tidligere ble eksportert av appen gjenoppretter den som samme kontestloggbok.
- QSO-skjemaet er gruppert i tre blokker: **Stasjonsdata** (stasjonens kallesignal, operatørens kallesignal, eget rutenett) som forblir klistret mellom QSO-er; **Driftsmodus** (utbredelsesmodus, satellitt, modus, satellittmodus, bånd, RX-bånd) med satellittfelt som bare vises når utbredelsesmodusen er *Satellitt*; og **QSO-data** (kontaktet kallesignal, kontaktet rutenett, UTC-dato/-tid ved redigering, kommentar, RST sendt, RST mottatt).
- Komplett ADIF `MODE` → `SUBMODE` taksonomi i modusdropdown — velg en foreldremodus (`SSB`, `MFSK`, …) eller gå direkte til en spesifikk undermodus (`USB`, `FT4`, …); appen lagrer begge felt per ADIF, og tabellen viser den spesifikke undermodusen når den finnes.
- Komplett ADIF-utbredelsesmodusopplisting (SAT, RPT, EME, ES, MS, Aurora osv.) som dropdown.
- Komplett AMSAT-satelittkatalog (~110 satellitter) og en to-nivå **Satellittmodus**-dropdown: foretrukne tobokstavsuplink/downlink-koder øverst (LU, LV, SX, UU, UV, VA, VU, VV) og de eldre enkeltbokstavsbetegnelsene (A/B/J/K/L/R/S/T/U/V/W/X) gruppert som *utdaterte* nedenfor. Valg av satellittmodus justerer automatisk `BAND` (uplink) og `RX band` (downlink).
- Rediger og slett enhver QSO (med bekreftelse ved sletting).
- Fornuftige standarder: UTC-dato/-tid forhåndsutfylt til *nå*, modusbevisste RST-standarder (59 for talemodusar, 599 for CW/digitalt), klistrete stasjonsdata + bånd + modus + utbredelsesmodus over påfølgende QSO-er (bare per-kontaktfeltene — kallesignal, deres rutenett, kommentar, RST — tømmes etter hver *Logg QSO*).
- Live-duplikatkallesignalindikator (informativ — duplikater er tillatt).
- Landflaggkolonne avledet fra kallesignalprefikset (dekker ≥99 % av vanlige amatørradioprefikser, inkludert bærbare anrop som `9A/M0NCG`).
- Ett-trykks **Mitt rutenett** auto-oppdaging: en 🌐-knapp ved siden av feltet spør nettleseren om dine nåværende koordinater og fyller inn 6-tegns Maidenhead-rutenettet (bruker nettleserens Geolocation-API — krever brukers tillatelse).
- Stedsspesifikk datovisning i QSO-tabellen; ISO-lagring og ADIF-utdata forblir uendret.
- Grensesnitt tilgjengelig på **28 språk** (engelsk pluss 22 latinsk skrift, 5 kyrillisk skrift og gresk); flaggemoji-selektor i overskriften.
- Dag-/natttemaer (dag er standard; bryteren er i overskriften).
- Mobilevennlig responsivt oppsett med berøringsstørrelsede knapper.
- Fungerer fullt frakoblet — ingen nettverksforespørsler på noe tidspunkt.
- Kan installeres som PWA (Legg til startskjerm / Installer app) ved hosting over HTTPS.

## Kom i gang

Åpne bare `index.html` i en moderne nettleser. Ingen byggingstrinn, ingen installasjon, ingen server.

Hvis du vil hoste det, legg de statiske filene (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, den enkelte `i18n.js`-bunten som bærer alle 28 språkordbøker, og den enkelte `contests.js`-bunten som bærer alle 68 kontestkonfigurasjoner) på en vilkårlig statisk vert (GitHub Pages, Netlify, din egen webserver). Det fungerer også over `file://` — service worker-registreringen hoppes automatisk over på `file:`-protokollen, slik at åpning av `index.html` direkte fra disk fortsatt fungerer rent.

Når det hostes over HTTPS, blir appen installerbar som PWA (nettleserens *Installer app* / *Legg til startskjerm*-meny) og fungerer frakoblet etter første besøk takket være en cache-first service worker som forhåndsbufrer alle statiske filer (UI + alle oversettelser).

En standard loggbok opprettes automatisk ved første besøk, slik at du kan begynne å logge umiddelbart.

## Installer som PWA på mobil

Når appen hostes over HTTPS (f.eks. GitHub Pages), kan du installere den på telefonens startskjerm slik at den kjører i fullskjerm uten nettleserkrom. Etter første oppstart bufrer service workeren alt, slik at påfølgende oppstarter fungerer fullt frakoblet.

### iOS (kun Safari)

På iOS kan kun Safari installere PWA-er — tredjeparts nettlesere kan ikke.

1. Åpne nettstedet i **Safari**.
2. Trykk på **Del**-knappen.
3. Velg **Legg til på hjem-skjermen**, deretter **Legg til**.

Gjennomgang:

![iOS-installasjonsgjennomgang](media/iOS_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Åpne nettstedet i nettleseren. En *Installer app*-melding kan vises automatisk.
2. Ellers åpne **⋮-menyen** → **Installer app** (eller **Legg til startskjerm** på eldre versjoner).

Gjennomgang:

![Android-installasjonsgjennomgang](media/Android_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggbøker

- **Opprett:** skriv et navn i *Loggnavn* og send inn. Hvis du lar navnet stå tomt, brukes `Log YYYY-MM-DD HH:MM UTC` som standard.
- **Bytt:** klikk på en loggbok i sidefeltet.
- **Omdøp:** klikk på *Omdøp* i loggbokens overskrift. Trykk Enter for å lagre, Escape for å avbryte.
- **Slett:** klikk på *Slett logg*. Du vil bli bedt om å bekrefte. Hvis du sletter den siste loggboken, opprettes en ny automatisk.

## QSO-er

- Fyll ut skjemaet og trykk **Logg QSO**.
- Skjemaet er organisert i tre blokker:
  - **Stasjonsdata** — *Stasjonens kallesignal* (ditt sendingskallesignal, ADIF `STATION_CALLSIGN`), *Operatør* (den individuelle operatørens kallesignal — adskilt fra *stasjonens kallesignal* når en gjesteoperatør er ved mikrofonen til en klubbstasjon; ADIF `OPERATOR`) og *Mitt rutenett* (ADIF `MY_GRIDSQUARE`) med en 🌐-knapp som fyller rutenettet fra nettleserens nåværende posisjon (Geolocation-API — nettleseren vil be om tillatelse første gang). Disse forblir klistret over QSO-er i samme økt — angi dem én gang og de overføres.
  - **Driftsmodus** — *Utbredelseesmodus*, *Modus*, *Bånd*, pluss de satellitteksklusivene *Satellitt* / *Satellittmodus* / *RX-bånd* når utbredelsesmodusen er *Satellitt*. Bånd, modus og utbredelsesmodus er klistrete som stasjonsdata.
  - **QSO-data** — per-kontaktfelt: *Kallesignal*, *Rutenett* (den andre stasjonens Maidenhead), *Kommentar* (ADIF `COMMENT`), *RST sendt*, *RST mottatt*. Ved redigering av eksisterende QSO vises *Dato (UTC)* og *Tid (UTC)* også i denne blokken. Disse feltene tømmes etter hver *Logg QSO*.
- Alle kallesignaler (kontaktet, stasjon, operatør) konverteres automatisk til store bokstaver mens du skriver; begge rutenettfeltene gjør det samme.
- Dato og tid forhåndsutfylles til *nå* i UTC ved innsending; ved redigering kan du skrive inn en hvilken som helst verdi.
- RST sendt / RST mottatt, hvis de er tomme, er standard **59** for talemodusar (SSB/FM/DIGITALVOICE) og **599** for CW og digitale modusar (CW/FT8/FT4/RTTY/PSK31/JT65). Standarden følger den overordnede MODE, slik at valg av en spesifikk undermodus som *USB* eller *FT4* fortsatt gir riktig standard.
- En *Duplikat i denne loggen*-chip vises under kallesignalfeltet hvis kallesignalet allerede finnes i gjeldende loggbok. Duplikater er *ikke* blokkert.
- **Utbredelsesmodus** — valgfri dropdown av ADIF-utbredelsesmodusar (SAT, RPT, EME, F2, Es, MS, LOS osv.). La det stå tomt for normale terrestriske HF-QSO-er.
- **Satellitt-QSO-er** — valg av utbredelsesmodus *Satellitt* avslører tre satellitteksklusivfelt: **Satellitt** (dropdown med ~110 AMSAT-registrerte satellitter), **Satellittmodus** (AMSAT-bokstavbetegnelser, gruppert som *moderne* tobokstavs uplink/downlink-koder øverst og *utdaterte* enkeltbokstavskoder nedenfor) og **RX-bånd** (downlinkbånd). Satellitt, satellittmodus og RX-bånd er obligatoriske — nettleseren nekter å sende inn uten dem. Valg av en **Satellittmodus** fyller automatisk ut hoved-**Bånd** med uplink-båndet og **RX-bånd** med downlink-båndet (f.eks. modus J → 2m uplink, 70cm downlink). Å bytte *tilbake* til satellitt fra en annen utbredelsesmodus tilbakestiller satellittmodusen slik at du velger en ny. Ikke-satellitt-QSO-er bærer aldri satellittfelt; å bytte et eksisterende QSO fra satellitt til en annen utbredelsesmodus fjerner dem rent. **Rutenett** og **Mitt rutenett** er generelle felt (også nyttige for VHF/UHF-rutenettkamper) og forblir synlige for alle QSO-er.
- **Rediger en QSO** med *Rediger*-knappen på raden. Skjemaet bytter til *Oppdater QSO*-modus, raden utheves, og en *Avbryt*-knapp vises. Bytte av loggbøker eller sletting av loggen avbryter redigeringen automatisk.
- **Slett en QSO** med *Slett*-knappen på raden (ber om bekreftelse).

## Kontester

En loggbok kan valgfritt være en **kontestlogg** — velg en kontest fra *Kontest*-dropdown-en i skjemaet for å opprette loggbok. Tom dropdown = vanlig loggbok (standard, eksisterende oppførsel uendret).

Kontestlogger får:

- **Kontestutveksling-blokk** i QSO-skjemaet, gjengitt dynamisk fra den valgte kontestens skjema. Felttyper er `text`, `number` og `serial` (auto-inkrementerende, skrivebeskyttet). Felt merket *sticky* (din egen sone / fylke / distrikt / effekt / alder / …) forhåndsutfylles fra forrige QSO-s verdi; per-QSO-felt (deres sone, deres serienummer, …) tømmes etter hver *Logg QSO*.
- **Kontest-merke** ved siden av loggnavnet i detaljoverskriften.
- **Duplikatdeteksjon** følger kontestens `duplicateRule` (`per-band-mode`, `per-band`, `per-day` eller `off`). Chippen er fortsatt kun informativ — blokkerer aldri innsending.
- **Varsel-chip** når nåværende UTC faller utenfor noen av kontestens deklarerte datovinduer (12 år forhåndslastet, 2026–2037), eller når valgt bånd / modus ikke er i kontestens lovlige sett. Blokkerer aldri.
- **Innsendingsinfo-panel** i detaljoverskriften: et inline-skjema for Cabrillo-overskriftsfeltene som kontesten deklarerer (kategori, effekt, navn, klubb, adresse, soapbox, …). Verdier lagres på loggboken, ikke per QSO.
- **Eksporter .cbr**-knapp i detaljoverskriften, ved siden av *Eksporter .adi*. Sender ut en Cabrillo v3-fil: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` forhåndsutfylt fra første QSO-s stasjonsdata, resten fra innsendingsinfo-panelet, deretter én `QSO:`-linje per kontakt i kronologisk rekkefølge ved bruk av kontestens `sentTemplate` / `rcvdTemplate`-kolonner.
- **Cabrillo-reimport** via standardknappen *Importer loggfil* — en `.cbr`-fil som tidligere ble eksportert av appen (eller av en hvilken som helst annen logger som sender ut standard Cabrillo v3) tur-returer tilbake til en ny kontestloggbok av riktig type. `CONTEST:`-overskriften matches mot den medfølgende katalogen; når flere konfigurasjoner deler samme tag (f.eks. `ARRL-10` matcher både `arrl-10m-dx` og `arrl-10m-w`), disambiguerer appen ved å matche QSO-linjens modusbokstav og kolonnetelling mot hver kandidats mal, og foretrekker deretter `-dx`-varianten. Overskriftsfelt (kategori, navn, klubb, soapbox, …) rehydrerer innsendingsinfo-panelet; QSO-utvekslingsverdier rehydrerer `q.contestExchange` per kontestens mal.

### Medfølgende kontestkatalog (68 konfigurasjoner)

Gruppert etter familie:

- **CQ-familien** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL-familien** (9): ARRL DX SSB/CW (DX-siden), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (hver levert som *både* DX- og W/VE-perspektiver).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE og andre europeiske** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Sentral-/Østeuropeiske asymmetriske — begge perspektiver** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Russisk klubb / RadioSport** (12): Russian DX (begge sider), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Hviterussisk + italiensk + kroatisk + spansk + ukrainsk RTTY** (12): Belarus BFRR CW+SSB (begge sider), ARI DX (begge sider), Croatian 9A CW (begge sider), Spanish CNCW (begge sider), Ukrainian RTTY (begge sider).
- **Globalt** (2): All Asian DX CW+SSB.

Asymmetriske kontester (der vertslandet og DX-siden sender forskjellige utvekslinger) leveres med **to konfigurasjoner** — én for vertslandets perspektiv (klistret regionkode) og én for DX-perspektivet (klistret serienummer). Det mottatte feltet er en enkelt fri-tekst-samlekategori slik at operatøren kan skrive begge formater avhengig av kontakten.

Hver konfigurasjon bærer:

- Kontestutvekslingsverdier gjenutsendes i ADIF-eksport via `APP_LQ_*`-navneområdefelt; overskriftsstempelet `APP_LQ_CONTEST_ID` lar en påfølgende reimport rehydrere loggboken som samme kontest med alle felt intakt.
- 12 år med datovinduer (2026–2037) slik at *utenfor kontestvinduet*-chippen forblir nyttig i et tiår uten ny levering.
- En Cabrillo-mal som mapper hvert utvekslingsfelt til riktig `QSO:`-linjekolonne.

Å legge til en ny kontest = lim inn en ny IIFE-blokk i [`contests.js`](contests.js) på alfabetisk posisjon (hver eksisterende kontest er avgrenset av en `// ==== <id> ====`-overskriftskommentar, så det er lett å finne hvor du skal sette inn). Ingen endring i `index.html`, ingen endring i `service-worker.js`, ingen endring i `app.js` nødvendig — rendereren, innsendingshåndtereren, duplikatdetektoren, ADIF-tur-returen og Cabrillo-emitteren absorberer hver konfigurasjon som rene data.

## Import og eksport

- **Importer** enhver loggfil — klikk på *Importer loggfil* under loggbokopprettingsskjemaet og velg en `.adi` / `.adif` (ADIF)- eller `.cbr` / `.cab` (Cabrillo v3)-fil. Formatet oppdages automatisk fra filens første linje (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → et «EDI ikke støttet ennå»-varsel). En ny loggbok opprettes alltid — import slår aldri sammen med en eksisterende. ADIF-importer kommer inn som vanlige logger med mindre overskriften bærer en `APP_LQ_CONTEST_ID` skrevet av vår egen konteksteksport (i så fall rehydreres loggen som kontestlogg av den kontesten). Cabrillo-importer kommer alltid inn som kontestlogger — se *Kontester*-seksjonen for hvordan `CONTEST:`-taggen matches mot den medfølgende katalogen.
- **ADIF-eksport**: klikk på *Eksporter .adi* i loggbokens overskrift. En fil lastes ned som er i samsvar med **ADIF 3.1.7**. Overskriften erklærer `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` og `CREATED_TIMESTAMP` (UTC). Per-QSO-felt utsendt (når ikke-tomme): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — etterfulgt av hvert ekstra ADIF-felt bevart ved import (se nedenfor).
- **Cabrillo-eksport** er dokumentert i *Kontester*-seksjonen ovenfor — den er kun tilgjengelig for kontestloggbøker (*Eksporter .cbr*-knappen vises i loggbokens overskrift når loggen har en kontest).
- **Tapsfri rundtur**: ved ADIF-import beholdes ethvert felt som appen ikke modellerer i sin UI (f.eks. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-felt) på QSO-en og sendes ut igjen ordrett ved neste ADIF-eksport. Eksport av en fil som selv var importert bevarer dermed alt.
- Feltlengde i ADIF behandles som et UTF-8-byteantall som spesifikasjonen krever, slik at flerbytetekst (f.eks. aksentuerte tegn i `COMMENT`) tolkes korrekt.

## Personvern og data

- Alle data lagres i nettleserens `localStorage` under nøkkelen `local-qso:v1`.
- Ingenting overføres noe sted. Det er ingen backend, ingen API-anrop, ingen telemetri, ingen analyse.
- Sletting av nettstedets nettleserdata, bruk av privat/inkognitomodus eller en annen nettleser/enhet betyr en ny tom loggbok — bruk *Eksporter .adi* for sikkerhetskopiering.

## Grensesnittsspråk

En språkvelger i overskriften dekker **28 språk**. Velg ett og resten av grensesnittet gjengis umiddelbart; valget ditt lagres ved siden av loggene dine og respekteres ved neste besøk. Engelsk er standard.

Tilgjengelige språk (flaggemoji + innfødt navn; alfabetisk ordnet innen hvert skriftsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske etiketter forblir i sin kanoniske form på tvers av alle språk: bandnavn (`20m`, `70cm`, …), ADIF-moduskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO-landkoder.

Mangler det en streng på ditt språk? Hver språkordbok lever i en enkelt [`i18n.js`](i18n.js)-bunt, delt inn i 28 seksjoner av `// ==== <lang> ====`-overskriftskommentarer. Bruk grep på overskriften til ditt språk for å hoppe til dens seksjon, deretter legg til / rediger nøkkelen. Å legge til et helt nytt språk = lim inn en ny IIFE-blokk i `i18n.js` på alfabetisk posisjon, legg til språkkoden i `SUPPORTED_LANGS` i `app.js`, og legg til et `<select>`-alternativ i `index.html`.

## Temaer

Temabryteren i overskriften veksler mellom dag (standard) og natt. Preferansen lagres ved siden av loggene dine og respekteres ved neste besøk. Innebygde dato-/tidvelgere følger temaet via `color-scheme`.

## Tekniske merknader

- Enkeltside-app, vanilla HTML + CSS + JavaScript. Ingen rammeverk, ingen byggingstrinn, ingen avhengigheter.
- Kildefiler:
  - `index.html` — markup og meta-tagger.
  - `style.css` — temaer og oppsett (dag/natt-variabler, mobile mediaspørringer).
  - `app.js` — tilstand, persistens, gjengivelse, ADIF-parser/serializer, kallesignalprefiks → landsoppslag.
  - `favicon.svg` — innebygd SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (navn, temafarge, omfang, ikon) slik at appen er installerbar som PWA på mobil og desktop.
  - `service-worker.js` — cache-first service worker som forhåndsbufrer alle statiske filer ved installasjon, fjerner gamle buffere ved aktivering, og holder appen fullt frakoblet etter første besøk. Registreringen hoppes automatisk over på `file://`-protokollen slik at åpning av `index.html` direkte fra disk forblir rent.
  - `i18n.js` — en enkelt håndvedlikeholdt bunt som bærer alle 28 språkordbøker. Hvert språk er en selvstendig IIFE som tildeler `window.I18N[<lang>]` et flatt nøkkel→streng-kart. Blokker er avgrenset av `// ==== <lang> ====`-overskriftskommentarer — bruk grep på en for å hoppe til det språket. Buntet inn i én fil i stedet for 28 individuelle filer fordi oversettelsesfiler er svært repetitive (samme nøkkelnavn, samme plassholdersyntaks) og gzip komprimerer hele settet langt bedre enn 28 separate strømmer — sparer ~23 KB ved førstegangslasting og kutter 27 HTTP-forespørsler. `t()` og `applyLanguage()` i `app.js` håndterer oppslag (med engelsk reserve) og går gjennom DOM-en og oppdaterer hvert `[data-i18n*]`-element.
  - `contests.js` — en enkelt håndvedlikeholdt bunt som bærer alle 68 kontestkonfigurasjoner. Hver kontest er en selvstendig IIFE som tildeler `window.CONTESTS[<id>]` et skjema-konformt konfigurasjonsobjekt (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blokker er avgrenset av `// ==== <id> ====`-overskriftskommentarer — bruk grep på en for å hoppe til den kontesten. Buntet inn i én fil i stedet for 68 individuelle filer fordi kontestkonfigurasjoner er svært repetitive (samme skjema, samme `APP_LQ_*`-prefiks, samme Cabrillo-overskriftsfeltnavn) og gzip komprimerer hele settet langt bedre enn 68 separate strømmer — sparer ~42 KB ved førstegangslasting og kutter 67 HTTP-forespørsler. Lastet av en enkelt `<script>`-tagg i `index.html` før `app.js` slik at registeret er befolket når kontest-dropdown-en bygges.
- Testet på nylige Chromium, Firefox og Safari (stasjonær + iOS).

## Takk til

Bygget av [YL3IM](https://www.qrz.com/db/YL3IM).

Takk til [A65BR](https://www.qrz.com/db/A65BR) Oleg for de uvurderlige tipsene som gjorde satelittdelen faktisk brukbar — de moderne tobokstavs satellittmodusbetegnelsene, AMSAT-katalogen og den automatiske uplink/downlink-justeringen stammer alle fra hans tilbakemeldinger.

Landsflagg bruker Unicode regionale indikatorsekvenser. De vises riktig på macOS, iOS, Linux (med en flaggkompatibel emoji-font) og Android. Windows inkluderer ikke en systemflaggfont, så flaggemoji kan vises som bokstavpar der.
