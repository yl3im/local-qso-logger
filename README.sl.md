# Local QSO Logger

## Beri v svojem jeziku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 Slovenščina · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Dnevnik QSO za radioamaterje, ki spoštuje zasebnost in deluje povsem v vašem brskalniku. Brez računa, brez strežnika, brez sledenja, brez analitike — vaši dnevniki živijo le v `localStorage` vašega brskalnika in nikoli ne zapustijo vaše naprave.

Avtor: [YL3IM](https://www.qrz.com/db/YL3IM). Spletna stran projekta: [qso.lv](https://qso.lv).

![Local QSO Logger na iPadu](media/iPad.png)

## Vsebina

- [Beri v svojem jeziku](#beri-v-svojem-jeziku)
- [Funkcije](#funkcije)
- [Začetek](#začetek)
- [Namestitev kot PWA na mobilni napravi](#namestitev-kot-pwa-na-mobilni-napravi)
  - [iOS (samo Safari)](#ios-samo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dnevniki](#dnevniki)
- [QSO-ji](#qso-ji)
- [Tekmovanja](#tekmovanja)
- [Uvoz in izvoz](#uvoz-in-izvoz)
- [Zasebnost in podatki](#zasebnost-in-podatki)
- [Jezik vmesnika](#jezik-vmesnika)
- [Teme](#teme)
- [Tehnične opombe](#tehnične-opombe)
- [Zahvale](#zahvale)

## Funkcije

- Več dnevnikov; vsak z lastnim seznamom QSO-jev.
- **Tekmovalni dnevniki** so izbirni — pri ustvarjanju dnevnika izberi iz kataloga 68 vgrajenih tekmovanj. Obrazec QSO pridobi tekmovanju specifičen blok *Izmenjava tekmovanja*, zaznavanje podvojenih spoštuje pravilo tekmovanja, *Izvozi .cbr* pa ustvari datoteko za oddajo Cabrillo v3 poleg običajnega izvoza ADIF.
- Dejanja z dnevnikom: ustvarjanje, preimenovanje, brisanje, uvoz datoteke dnevnika (ADIF ali Cabrillo — format se zazna samodejno), izvoz v ADIF (`.adi`) ter *Izvozi .cbr* (Cabrillo v3) za tekmovalne dnevnike. Ponovni uvoz datoteke `.cbr`, ki jo je aplikacija predhodno izvozila, jo obnovi kot isti tekmovalni dnevnik.
- Obrazec QSO razdeljen v tri bloke: **Podatki postaje** (klicni znak postaje, klicni znak operaterja, lastna mreža) ostane lepljiv med QSO-ji; **Način delovanja** (način razširjanja, satelit, način, satelitni način, pas, RX pas) s satelitskimi polji, ki se razkrijejo le pri načinu razširjanja *Satelit*; in **Podatki QSO** (klicni znak klicane postaje, mreža klicane postaje, datum/čas UTC pri urejanju, komentar, RST poslan, RST sprejet).
- Polna taksonomija ADIF `MODE` → `SUBMODE` v spustnem meniju — izberite nadrejeni način (`SSB`, `MFSK`, …) ali se spustite neposredno do specifičnega podnačina (`USB`, `FT4`, …); aplikacija shrani obe polji po ADIF in tabela prikaže specifični podnačin, kadar obstaja.
- Polno naštevanje načinov razširjanja ADIF (SAT, RPT, EME, ES, MS, Aurora itd.) kot spustni meni.
- Polni katalog satelitov AMSAT (~110 naprav) in dvonivojski spustni meni **Sat mode**: prednostni dvočrkovni kodi uplink/downlink na vrhu (LU, LV, SX, UU, UV, VA, VU, VV) in zastarele enočrkovne oznake (A/B/J/K/L/R/S/T/U/V/W/X) skupaj kot *zastarele* spodaj. Izbira satelitnega načina samodejno nastavi uplink `BAND` in downlink `RX band`.
- Urejanje in brisanje katerega koli QSO-ja (s potrditvijo pri brisanju).
- Razumne privzete vrednosti: današnji datum/čas UTC pred-izpolnjen, privzeti RST glede na način (59 za glasovne načine, 599 za CW/digitalne), lepljivi Podatki postaje + pas + način + način razširjanja med zaporednimi QSO-ji (le polja per-kontakt — klicni znak, mreža, komentar, RST — se počistijo po vsakem *Zabeleži QSO*).
- Živi indikator podvojenega klicnega znaka (informativno — podvojene QSO so dovoljene).
- Stolpec z zastavico države, izpeljan iz predpone klicnega znaka (pokriva ≥99 % pogostih radioamaterskih predpon, vključno s prenosnimi klici kot `9A/M0NCG`).
- Samodejno zaznavanje **Moje mreže** z enim dotikom: gumb 🌐 ob polju vpraša brskalnik za tvoje trenutne koordinate in izpolni 6-mestno Maidenhead mrežo (uporablja Geolocation API brskalnika — zahteva dovoljenje uporabnika).
- Prikaz datuma glede na lokalne nastavitve v tabeli QSO; shranjevanje in ADIF izhod ostaneta v ISO.
- Vmesnik v **28 jezikih** (angleščina plus 22 latiničnih, 5 cirilskih in grščina); selektor z zastavičnimi emojiji v glavi.
- Dnevna / nočna tema (dan je privzeta; stikalo je v glavi).
- Mobilno odzivna postavitev z gumbi, primernimi za dotik.
- Deluje popolnoma brez povezave — brez omrežnih zahtev kadarkoli.
- Namestljivo kot PWA (Dodaj na začetni zaslon / Namesti aplikacijo) pri gostovanju prek HTTPS.

## Začetek

Preprosto odprite `index.html` v sodobnem brskalniku. Brez koraka gradnje, brez namestitve, brez strežnika.

Če ga želite gostovati, preprosto spustite statične datoteke (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, edini sveženj `i18n.js`, ki nosi vseh 28 jezikovnih slovarjev, in edini sveženj `contests.js`, ki nosi vseh 68 konfiguracij tekmovanj) na katerikoli statični gostovalnik (GitHub Pages, Netlify, vaš spletni strežnik). Deluje tudi prek `file://` — registracija storitvenega delavca se na protokolu `file:` preskoči samodejno, tako da neposredno odpiranje `index.html` z diska deluje čisto.

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

![iOS namestitveni vodič](media/iOS_add_to_home_screen.gif)

Vir višje kakovosti: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Odprite spletno mesto v brskalniku. Poziv *Namesti aplikacijo* se morda prikaže samodejno.
2. Sicer odprite **meni ⋮** → **Namesti aplikacijo** (ali **Dodaj na začetni zaslon** pri starejših različicah).

Vodič:

![Android namestitveni vodič](media/Android_add_to_home_screen.gif)

Vir višje kakovosti: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dnevniki

- **Ustvari:** vnesite ime v polje *Ime dnevnika* in oddajte. Če pustite ime prazno, se privzeto nastavi na `Log YYYY-MM-DD HH:MM UTC`.
- **Preklopi:** kliknite katerikoli dnevnik v stranski vrstici.
- **Preimenuj:** kliknite *Preimenuj* v glavi dnevnika. Pritisnite Enter za shranjevanje, Escape za preklic.
- **Izbriši:** kliknite *Izbriši dnevnik*. Pozvani boste k potrditvi. Če izbrišete zadnji dnevnik, se samodejno ustvari nov.

## QSO-ji

- Izpolnite obrazec in pritisnite **Zabeleži QSO**.
- Obrazec je razdeljen v tri bloke:
  - **Podatki postaje** — *Klicni znak postaje* (vaš oddajni klicni znak, ADIF `STATION_CALLSIGN`), *Operater* (klicni znak posameznega operaterja — ločen od *Klicnega znaka postaje*, ko je gostujoči operater pri mikrofonu klubske postaje; ADIF `OPERATOR`) in *Moja mreža* (ADIF `MY_GRIDSQUARE`) z gumbom 🌐, ki izpolni mrežo iz trenutne lokacije vašega brskalnika (Geolocation API — brskalnik bo prvič vprašal za dovoljenje). Ti ostanejo lepljivi med QSO-ji v isti seji — nastavite jih enkrat in se prenesejo.
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

## Tekmovanja

Dnevnik je lahko izbirno **tekmovalni dnevnik** — izberi tekmovanje iz spustnega menija *Tekmovanje* v obrazcu za ustvarjanje dnevnika. Prazen spustni meni = običajen dnevnik (privzeto, obstoječe vedenje nespremenjeno).

Tekmovalni dnevniki dobijo:

- **Blok izmenjave tekmovanja** v obrazcu QSO, dinamično prikazan glede na shemo izbranega tekmovanja. Vrste polj so `text`, `number` in `serial` (samodejno naraščajoč, samo za branje). Polja, označena kot *sticky* (vaša lastna cona / okrožje / okraj / moč / starost / …), se pred-izpolnijo z vrednostjo prejšnjega QSO-ja; polja na posamezen QSO (njihova cona, njihova serijska številka, …) se počistijo po vsakem *Zabeleži QSO*.
- **Značka tekmovanja** poleg imena dnevnika v glavi podrobnosti.
- **Zaznavanje podvojenih**, ki spoštuje `duplicateRule` tekmovanja (`per-band-mode`, `per-band`, `per-day` ali `off`). Žeton ostaja le informativen — nikoli ne blokira oddaje.
- **Opozorilni žeton**, kadar trenutni UTC pade zunaj katerega koli od datumskih oken, ki jih je deklariralo tekmovanje (12 let vnaprej naloženih, 2026–2037), ali kadar izbrani pas / način ni v dovoljenem naboru tekmovanja. Nikoli ne blokira.
- **Podatkovna plošča o oddaji** v glavi podrobnosti: vgrajen obrazec za polja glave Cabrillo, ki jih tekmovanje deklarira (kategorija, moč, ime, klub, naslov, soapbox, …). Vrednosti se ohranijo na dnevniku, ne za vsak QSO.
- **Gumb Izvozi .cbr** v glavi podrobnosti, poleg *Izvozi .adi*. Ustvari datoteko Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` pred-izpolnjeni iz podatkov postaje prvega QSO-ja, preostalo iz podatkovne plošče o oddaji, nato ena vrstica `QSO:` na kontakt v kronološkem vrstnem redu z uporabo stolpcev `sentTemplate` / `rcvdTemplate` tekmovanja.
- **Ponovni uvoz Cabrillo** prek standardnega gumba *Uvozi datoteko dnevnika* — datoteka `.cbr`, ki jo je aplikacija predhodno izvozila (ali kateri koli drug dnevnik, ki ustvari standardni Cabrillo v3), se vrne nazaj v svež tekmovalni dnevnik pravega tipa. Glava `CONTEST:` se primerja z vgrajenim katalogom; ko si več konfiguracij deli isto oznako (npr. `ARRL-10` ustreza tako `arrl-10m-dx` kot `arrl-10m-w`), aplikacija razreši dvoumnost s primerjavo črke načina vrstice QSO in števila stolpcev s predlogo vsakega kandidata, nato pa daje prednost različici `-dx`. Polja glave (kategorija, ime, klub, soapbox, …) obnovijo podatkovno ploščo o oddaji; vrednosti izmenjave QSO obnovijo `q.contestExchange` po predlogi tekmovanja.

### Vgrajen katalog tekmovanj (68 konfiguracij)

Razvrščeno po družinah:

- **Družina CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Družina ARRL** (9): ARRL DX SSB/CW (stran DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (vsak dobavljen z *obeh* perspektiv, DX in W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE in druga evropska** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Srednje-/vzhodnoevropska asimetrična — obe perspektivi** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Ruski klub / RadioSport** (12): Russian DX (obe strani), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Belorusija + Italija + Hrvaška + Španija + ukrajinski RTTY** (12): Belarus BFRR CW+SSB (obe strani), ARI DX (obe strani), Croatian 9A CW (obe strani), Spanish CNCW (obe strani), Ukrainian RTTY (obe strani).
- **Globalno** (2): All Asian DX CW+SSB.

Asimetrična tekmovanja (kjer gostiteljska država in stran DX pošiljata različne izmenjave) so dobavljena z **dvema konfiguracijama** — eno za perspektivo gostiteljske države (lepljiva regijska koda) in eno za perspektivo DX (lepljiva serijska številka). Polje prejete strani je eno samo prosto besedilno polje, tako da lahko operater vnese kateri koli format, odvisno od kontakta.

Vsaka konfiguracija nosi:

- Vrednosti izmenjave tekmovanja se ponovno oddajo v izvozu ADIF prek polj imenskega prostora `APP_LQ_*`; žig glave `APP_LQ_CONTEST_ID` omogoča poznejšemu ponovnemu uvozu, da obnovi dnevnik kot isto tekmovanje z vsemi nedotaknjenimi polji.
- 12 let datumskih oken (2026–2037), tako da žeton *zunaj okna tekmovanja* ostane koristen desetletje brez nove izdaje.
- Predlogo Cabrillo, ki preslika vsako polje izmenjave v pravilni stolpec vrstice `QSO:`.

Dodajanje novega tekmovanja = prilepite nov blok IIFE v [`contests.js`](contests.js) na abecedno mesto (vsako obstoječe tekmovanje je omejeno s komentarjem glave `// ==== <id> ====`, zato je lahko najti, kam vstaviti). Ni potrebna nobena sprememba v `index.html`, nobena sprememba v `service-worker.js`, nobena sprememba v `app.js` — izrisovalnik, upravljalec oddaje, detektor podvojenih, ADIF povratni krog in oddajnik Cabrillo absorbirajo vsako konfiguracijo kot čiste podatke.

## Uvoz in izvoz

- **Uvozi** katero koli datoteko dnevnika — kliknite *Uvozi datoteko dnevnika* pod obrazcem za ustvarjanje dnevnika in izberite datoteko `.adi` / `.adif` (ADIF) ali `.cbr` / `.cab` (Cabrillo v3). Format se samodejno zazna iz prve vrstice datoteke (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → opozorilo »EDI še ni podprt«). Vedno se ustvari nov dnevnik — uvoz se nikoli ne združi z obstoječim. Uvozi ADIF pridejo kot običajni dnevniki, razen če glava nosi `APP_LQ_CONTEST_ID`, ki ga je zapisal naš lastni izvoz tekmovanja (v tem primeru se dnevnik obnovi kot tekmovalni dnevnik tega tekmovanja). Uvozi Cabrillo vedno pridejo kot tekmovalni dnevniki — glejte razdelek *Tekmovanja* za način, kako se oznaka `CONTEST:` primerja z vgrajenim katalogom.
- **Izvoz ADIF**: kliknite *Izvozi .adi* v glavi dnevnika. Prenese se datoteka v skladu z **ADIF 3.1.7**. Glava deklarira `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` in `CREATED_TIMESTAMP` (UTC). Oddana polja QSO (kadar niso prazna): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — čemur sledijo vsa dodatna polja ADIF, ohranjena pri uvozu (glejte spodaj).
- **Izvoz Cabrillo** je opisan zgoraj v razdelku *Tekmovanja* — na voljo je le za tekmovalne dnevnike (gumb *Izvozi .cbr* se prikaže v glavi dnevnika, ko ima dnevnik tekmovanje).
- **Brezizgubni round-trip**: pri uvozu ADIF se vsako polje, ki ga aplikacija ne modelira v UI (npr. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, polja `APP_*`), ohrani na QSO-ju in se pri naslednjem izvozu ADIF re-emitira verbatim. Izvoz datoteke, ki je bila sama uvožena, torej ohrani vse.
- Dolžina polja se v ADIF obravnava kot število UTF-8 bajtov po specifikaciji, tako da se večbajtno besedilo (npr. naglašeni klicni znaki v `COMMENT`) razčleni pravilno.

## Zasebnost in podatki

- Vsi podatki so shranjeni v `localStorage` vašega brskalnika pod ključem `local-qso:v1`.
- Nič se nikamor ne pošilja. Brez zaledja, brez klica API, brez telemetrije, brez analitike.
- Brisanje podatkov spletnega mesta brskalnika, uporaba zasebnega/inkognito načina ali drugega brskalnika/naprave pomeni svež prazen dnevnik — za varnostno kopiranje uporabite *Izvozi .adi*.

## Jezik vmesnika

Selektor jezika v glavi pokriva **28 jezikov**. Izberite enega in preostalo UI se takoj ponovno izriše; vaša izbira je shranjena skupaj z dnevniki in se upošteva ob naslednjem obisku. Privzeta je angleščina.

Razpoložljivi jeziki (zastavica emoji + domače ime; razvrščeni po abecedi znotraj vsakega pisma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Splošne tehnične oznake ostajajo v kanonični obliki v vseh jezikih: imena pasov (`20m`, `70cm`, …), kode načinov ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` in ISO kode držav.

Manjka niz v vašem jeziku? Vsak jezikovni slovar živi v enem samem svežnju [`i18n.js`](i18n.js), razdeljenem v 28 razdelkov s komentarji glave `// ==== <lang> ====`. Poiščite (grep) glavo svojega jezika, da preskočite na njegov razdelek, nato dodajte/uredite ključ. Dodajanje popolnoma novega jezika = prilepite nov blok IIFE v `i18n.js` na abecedno mesto, dodajte kodo jezika v `SUPPORTED_LANGS` v `app.js`, in dodajte možnost `<select>` v `index.html`.

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
  - `i18n.js` — en ročno vzdrževan sveženj, ki nosi vseh 28 jezikovnih slovarjev. Vsak jezik je samostojen IIFE, ki dodeli `window.I18N[<lang>]` plosko preslikavo ključ→niz. Bloki so omejeni s komentarji glave `// ==== <lang> ====` — poiščite (grep) enega, da skočite na ta jezik. Združeno v eno datoteko namesto 28 posameznih, ker so prevodne datoteke zelo ponavljajoče se (ista imena ključev, ista sintaksa nadomestnih znakov) in gzip stisne celoten nabor veliko bolje kot 28 ločenih tokov — prihrani ~23 KB pri prvem nalaganju in odreže 27 HTTP zahtev. `t()` in `applyLanguage()` v `app.js` upravljata iskanja (z angleškim nadomestnim) in hodita po DOM-u posodabljajočem vsak element `[data-i18n*]`.
  - `contests.js` — en ročno vzdrževan sveženj, ki nosi vseh 68 konfiguracij tekmovanj. Vsako tekmovanje je samostojen IIFE, ki dodeli `window.CONTESTS[<id>]` konfiguracijski objekt, skladen s shemo (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Bloki so omejeni s komentarji glave `// ==== <id> ====` — poiščite (grep) enega, da skočite na to tekmovanje. Združeno v eno datoteko namesto 68 posameznih, ker so konfiguracije tekmovanj zelo ponavljajoče se (ista shema, isti predpona `APP_LQ_*`, ista imena polj glave Cabrillo) in gzip stisne celoten nabor veliko bolje kot 68 ločenih tokov — prihrani ~42 KB pri prvem nalaganju in odreže 67 HTTP zahtev. Naložen z eno samo oznako `<script>` v `index.html` pred `app.js`, tako da je register napolnjen, ko se zgradi spustni meni Tekmovanje.
- Testirano na aktualnem Chromium, Firefox in Safari (namizje + iOS).

## Zahvale

Razvil [YL3IM](https://www.qrz.com/db/YL3IM).

Zahvala [A65BR](https://www.qrz.com/db/A65BR) Olegu za neprecenljive namige, ki so naredili del satelitskega QSO resnično uporaben — moderne dvočrkovne oznake Sat-mode, katalog AMSAT in samodejno nastavitev uplink/downlink gre vse zahvaliti njegovi povratni informaciji.

Zastavice držav se opirajo na sekvence regionalnih kazalnikov Unicode. Pravilno se prikazujejo na macOS, iOS, Linux (z emojijsko pisavo, ki podpira zastavice) in Android. Windows ne vključuje sistemske pisave zastavic, zato se emojiji zastavic tam morda prikažejo kot pari črk.
