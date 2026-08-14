# Local QSO Logger

## Čítaj vo svojom jazyku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 Slovenčina · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Amatérsky rádiový denník QSO rešpektujúci súkromie, ktorý beží priamo vo vašom prehliadači. Žiadny účet, žiadny server, žiadne sledovanie, žiadna analytika — vaše denníky žijú iba v `localStorage` vášho prehliadača a nikdy neopustia vaše zariadenie.

Od [YL3IM](https://www.qrz.com/db/YL3IM). Webová stránka projektu: [qso.lv](https://qso.lv).

![Local QSO Logger bežiaci na iPade](media/iPad.png)

## Obsah

- [Čítaj vo svojom jazyku](#čítaj-vo-svojom-jazyku)
- [Funkcie](#funkcie)
- [Začíname](#začíname)
- [Inštalácia ako PWA na mobile](#inštalácia-ako-pwa-na-mobile)
  - [iOS (iba Safari)](#ios-iba-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Denníky](#denníky)
- [QSO záznamy](#qso-záznamy)
- [Preteky](#preteky)
- [Import a export](#import-a-export)
- [Súkromie a dáta](#súkromie-a-dáta)
- [Jazyk rozhrania](#jazyk-rozhrania)
- [Témy](#témy)
- [Technické poznámky](#technické-poznámky)
- [Poďakovanie](#poďakovanie)

## Funkcie

- Viaceré denníky; každý s vlastným zoznamom QSO.
- **Pretekárske denníky** sú voliteľné — vyberte si z katalógu 68 zabudovaných pretekov pri vytváraní denníka. Formulár QSO získa blok *Výmena pretekov* špecifický pre danú pretek, detekcia duplicít rešpektuje pravidlo pretekov a *Exportovať .cbr* vytvorí súbor podania Cabrillo v3 popri bežnom exporte ADIF.
- Akcie s denníkom: vytvorenie, premenovanie, vymazanie, import súboru denníka (ADIF alebo Cabrillo — formát sa rozpozná automaticky), export do ADIF (`.adi`) a *Exportovať .cbr* (Cabrillo v3) pre pretekárske denníky. Opätovný import súboru `.cbr`, ktorý aplikácia predtým exportovala, ho obnoví ako ten istý pretekársky denník.
- Formulár QSO rozdelený do troch blokov: **Údaje stanice** (volací znak stanice, volací znak operátora, vlastná sieť) zostáva nemenný naprieč QSO; **Prevádzkový režim** (šírenie, satelit, režim, satelitný režim, pásmo, RX pásmo) so satelitnými poľami zobrazenými len pri šírení *Satelit*; a **Údaje QSO** (volaný volací znak, sieť volaného, dátum/čas UTC pri editácii, komentár, RST odoslané, RST prijaté).
- Plná taxonómia ADIF `MODE` → `SUBMODE` v rozbaľovacom zozname — zvoľte nadriadený režim (`SSB`, `MFSK`, …) alebo prejdite priamo na konkrétny podrežim (`USB`, `FT4`, …); aplikácia uchováva obe polia podľa ADIF a tabuľka zobrazuje konkrétny podrežim, ak existuje.
- Kompletný výpočet propagačných režimov ADIF (SAT, RPT, EME, ES, MS, Aurora atď.) ako rozbaľovací zoznam.
- Kompletný katalóg satelitov AMSAT (~110 zariadení) a dvojúrovňový rozbaľovací zoznam **Sat mode**: preferované dvojpísmenové kódy uplink/downlink hore (LU, LV, SX, UU, UV, VA, VU, VV) a zastarané jednopísmenové označenia (A/B/J/K/L/R/S/T/U/V/W/X) zoskupené ako *zastarané* nižšie. Výber satelitného režimu automaticky nastaví uplink `BAND` a downlink `RX band`.
- Úprava a vymazanie ľubovoľného QSO (s potvrdením pri vymazaní).
- Rozumné predvolené hodnoty: dnešný dátum/čas UTC vopred vyplnený, predvolené RST závisí od režimu (59 pre hlasové, 599 pre CW/digitálne), trvalé Údaje stanice + pásmo + režim + propagačný režim naprieč po sebe idúcimi QSO (iba polia per-kontakt — volací znak, sieť, komentár, RST — sa vymažú po každom *Zaznamenať QSO*).
- Živý indikátor duplicitného volacieho znaku (informatívny — duplikáty sú povolené).
- Stĺpec vlajky krajiny odvodený z predpony volacieho znaku (pokrýva ≥99 % bežných amatérskych predpôn vrátane prenosných volaní ako `9A/M0NCG`).
- Jednodotykové automatické rozpoznanie poľa **Moja sieť**: tlačidlo 🌐 vedľa poľa požiada prehliadač o vašu aktuálnu polohu a vyplní 6-znakovú sieť Maidenhead (používa Geolocation API prehliadača — vyžaduje povolenie používateľa).
- Zobrazenie dátumu podľa lokálneho nastavenia v tabuľke QSO; ukladanie a výstup ADIF zostávajú v ISO.
- Rozhranie dostupné v **28 jazykoch** (angličtina plus 22 latinkou, 5 cyrilikou a gréčtina); selektor s vlajkovými emotikonmi v záhlaví.
- Denné / nočné témy (deň je predvolený; prepínač je v záhlaví).
- Mobilné responzívne rozloženie s tlačidlami prispôsobenými pre dotyk.
- Plne funkčná offline — žiadne sieťové požiadavky kedykoľvek.
- Inštalovateľná ako PWA (Pridať na domovskú obrazovku / Inštalovať aplikáciu) pri hosťovaní cez HTTPS.

## Začíname

Stačí otvoriť `index.html` v modernom prehliadači. Žiadny krok zostavenia, žiadna inštalácia, žiadny server.

Ak chcete hosťovať, stačí umiestniť statické súbory (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, jediný balík `i18n.js` nesúci všetkých 28 jazykových slovníkov a jediný balík `contests.js` nesúci všetkých 68 konfigurácií pretekov) na ľubovoľný statický hosting (GitHub Pages, Netlify, vlastný webový server). Funguje aj cez `file://` — registrácia service workera sa pri protokole `file:` preskočí automaticky, takže priame otvorenie `index.html` z disku funguje čisto.

Pri hosťovaní cez HTTPS sa aplikácia stane inštalovateľnou ako PWA (ponuka *Inštalovať aplikáciu* / *Pridať na domovskú obrazovku*) a funguje offline po prvej návšteve vďaka service workeru zameranému na cache, ktorý predcachuje každý statický súbor (UI + všetky preklady).

Prvý predvolený denník sa vytvorí automaticky, takže môžete hneď začať zaznamenávať.

## Inštalácia ako PWA na mobile

Keď je aplikácia hosťovaná cez HTTPS (napr. GitHub Pages), môžete ju nainštalovať na domovskú obrazovku telefónu, kde beží na celú obrazovku bez ovládacích prvkov prehliadača. Po prvom spustení service worker cachuje všetko, takže ďalšie spustenia fungujú plne offline.

### iOS (iba Safari)

V iOS môžu PWA inštalovať iba Safari — prehliadače tretích strán to nemôžu.

1. Otvorte stránku v **Safari**.
2. Klepnite na tlačidlo **Zdieľať**.
3. Zvoľte **Pridať na domovskú obrazovku**, potom **Pridať**.

Návod:

![iOS inštalačný návod](media/iOS_add_to_home_screen.gif)

Zdroj vo vyššej kvalite: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otvorte stránku vo vašom prehliadači. Výzva *Inštalovať aplikáciu* sa môže zobraziť automaticky.
2. Inak otvorte **ponuku ⋮** → **Inštalovať aplikáciu** (alebo **Pridať na domovskú obrazovku** na starších verziách).

Návod:

![Android inštalačný návod](media/Android_add_to_home_screen.gif)

Zdroj vo vyššej kvalite: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Denníky

- **Vytvoriť:** zadajte názov do poľa *Názov denníka* a odošlite. Ak necháte názov prázdny, predvolí sa na `Log YYYY-MM-DD HH:MM UTC`.
- **Prepnúť:** kliknite na ľubovoľný denník v bočnom paneli.
- **Premenovať:** kliknite na *Premenovať* v záhlaví denníka. Stlačte Enter na uloženie, Escape na zrušenie.
- **Vymazať:** kliknite na *Vymazať denník*. Budete požiadaní o potvrdenie. Ak vymažete posledný denník, automaticky sa vytvorí nový.

## QSO záznamy

- Vyplňte formulár a stlačte **Zaznamenať QSO**.
- Formulár je organizovaný do troch blokov:
  - **Údaje stanice** — *Volací znak stanice* (váš vysielací volací znak, ADIF `STATION_CALLSIGN`), *Operátor* (volací znak individuálneho operátora — odlišný od *Volacieho znaku stanice*, keď je hosťujúci operátor pri mikrofóne klubovej stanice; ADIF `OPERATOR`) a *Moja sieť* (ADIF `MY_GRIDSQUARE`) s tlačidlom 🌐, ktoré vyplní sieť z aktuálnej polohy vášho prehliadača (Geolocation API — prehliadač si pri prvom použití vyžiada povolenie). Tieto zostávajú nemenné naprieč QSO v rámci rovnakej relácie — nastavte ich raz a prenesú sa.
  - **Prevádzkový režim** — *Prop. režim*, *Režim*, *Pásmo* a satelitné polia *Satelit* / *Sat mode* / *RX pásmo* keď je propagačný režim *Satelit*. Pásmo, režim a propagačný režim sú trvalé ako Údaje stanice.
  - **Údaje QSO** — polia per-kontakt: *Volací znak*, *Sieť* (Maidenheadova sieť druhej stanice), *Komentár* (ADIF `COMMENT`), *RST odoslané*, *RST prijaté*. Pri editácii existujúceho QSO sa v tomto bloku zobrazia aj *Dátum (UTC)* a *Čas (UTC)*. Tieto polia sa vymažú po každom *Zaznamenať QSO*.
- Všetky volacie znaky (volaný, stanica, operátor) sa automaticky prevádzajú na veľké písmená počas písania; obe polia siete fungujú rovnako.
- Dátum a čas sa pri odoslaní predvyplnia na *teraz* v UTC; pri editácii môžete zadať ľubovoľnú hodnotu.
- RST odoslané / RST prijaté, ak sú prázdne, predvolia sa na **59** pre hlasové režimy (SSB/FM/DIGITALVOICE) a **599** pre CW a digitálne režimy (CW/FT8/FT4/RTTY/PSK31/JT65). Predvolená hodnota sa riadi nadriadeným MODE, takže výber konkrétneho podrežimu ako *USB* alebo *FT4* stále dáva správnu predvolenú hodnotu.
- Chip *Duplikát v tomto denníku* sa zobrazí pod poľom volacieho znaku, ak volací znak už existuje v aktuálnom denníku. Duplikáty *nie sú* blokované.
- **Propagačný režim** — voliteľný rozbaľovací zoznam propagačných režimov ADIF (SAT, RPT, EME, F2, Es, MS, LOS atď.). Pre bežné KV pozemné QSO nechajte prázdne.
- **Satelitné QSO** — výber propagačného režimu *Satelit* zobrazí tri satelitné polia: **Satelit** (rozbaľovací zoznam ~110 zariadení registrovaných AMSAT), **Sat mode** (písmenkové označenia AMSAT, zoskupené ako *moderné* dvojpísmenové kódy uplink/downlink hore a *zastarané* jednopísmenové kódy nižšie) a **RX pásmo** (downlink pásmo). Satelit, Sat mode a RX pásmo sú povinné — prehliadač odmietne odoslať bez nich. Výber **Sat mode** automaticky vyplní hlavné **Pásmo** uplink pásmom a **RX pásmo** downlink pásmom (napr. režim J → 2m uplink, 70cm downlink). Prepnutie *späť* na satelit z iného propagačného režimu resetuje Sat mode, takže budete vyzvaní na výber nového. Nesatelitné QSO nikdy nenesú satelitné polia; prepnutie existujúceho QSO zo satelitu na iný prop-mode ich čisto odstráni. **Sieť** a **Moja sieť** sú všeobecné polia (užitočné aj pre VHF/UHF sieťové preteky) a zostávajú viditeľné pre každé QSO.
- **Editovať QSO** tlačidlom *Upraviť* na riadku. Formulár prepne na režim *Aktualizovať QSO*, riadok sa zvýrazní a zobrazí sa tlačidlo *Zrušiť*. Prepnutie denníkov alebo vymazanie denníka zruší editáciu automaticky.
- **Vymazať QSO** tlačidlom *Vymazať* na riadku (vyžaduje potvrdenie).

## Preteky

Denník môže byť voliteľne **pretekárskym denníkom** — vyberte pretek z rozbaľovacieho zoznamu *Pretek* vo formulári na vytvorenie denníka. Prázdny zoznam = obyčajný denník (predvolené, existujúce správanie nezmenené).

Pretekárske denníky získavajú:

- **Blok výmeny pretekov** vo formulári QSO, dynamicky vykreslený podľa schémy vybraných pretekov. Typy polí sú `text`, `number` a `serial` (automaticky sa zvyšujúce, iba na čítanie). Polia označené ako *sticky* (vaša vlastná zóna / okres / distrikt / výkon / vek / …) sa predvyplnia hodnotou predchádzajúceho QSO; polia per-QSO (ich zóna, ich sériové číslo, …) sa vymažú po každom *Zaznamenať QSO*.
- **Odznak pretekov** vedľa názvu denníka v záhlaví detailu.
- **Detekcia duplicít** rešpektuje `duplicateRule` pretekov (`per-band-mode`, `per-band`, `per-day` alebo `off`). Čip zostáva iba informatívny — nikdy neblokuje odoslanie.
- **Varovný čip**, keď aktuálny UTC padne mimo niektorého z deklarovaných dátumových okien pretekov (12 rokov vopred nahraných, 2026–2037), alebo keď vybrané pásmo / režim nie je v povolenej sade pretekov. Nikdy neblokuje.
- **Panel informácií o podaní** v záhlaví detailu: vstavaný formulár pre polia hlavičky Cabrillo, ktoré preteky deklarujú (kategória, výkon, meno, klub, adresa, soapbox, …). Hodnoty sa uchovávajú na denníku, nie per QSO.
- **Tlačidlo Exportovať .cbr** v záhlaví detailu, vedľa *Exportovať .adi*. Vytvorí súbor Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` predvyplnené z údajov stanice prvého QSO, zvyšok z panelu informácií o podaní, potom jeden riadok `QSO:` na kontakt v chronologickom poradí podľa stĺpcov `sentTemplate` / `rcvdTemplate` pretekov.
- **Opätovný import Cabrillo** cez štandardné tlačidlo *Importovať súbor denníka* — súbor `.cbr`, ktorý predtým aplikácia exportovala (alebo ktorýkoľvek iný denník, ktorý vytvára štandardný Cabrillo v3), sa vráti späť ako nový pretekársky denník správneho typu. Hlavička `CONTEST:` sa porovná so zabudovaným katalógom; ak viacero konfigurácií zdieľa rovnakú značku (napr. `ARRL-10` zodpovedá aj `arrl-10m-dx`, aj `arrl-10m-w`), aplikácia určí, o ktorý ide, porovnaním písmena režimu na riadku QSO a počtu stĺpcov so šablónou každého kandidáta, potom uprednostní variant `-dx`. Polia hlavičky (kategória, meno, klub, soapbox, …) obnovia panel informácií o podaní; hodnoty výmeny QSO obnovia `q.contestExchange` podľa šablóny pretekov.

### Zabudovaný katalóg pretekov (68 konfigurácií)

Zoskupené podľa rodín:

- **Rodina CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Rodina ARRL** (9): ARRL DX SSB/CW (strana DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (každá dodaná z oboch pohľadov — DX aj W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE a ďalšie európske** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Stredo-/východoeurópske asymetrické — oba pohľady** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Ruský klub / RadioSport** (12): Russian DX (obe strany), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Bielorusko + Taliansko + Chorvátsko + Španielsko + ukrajinský RTTY** (12): Belarus BFRR CW+SSB (obe strany), ARI DX (obe strany), Croatian 9A CW (obe strany), Spanish CNCW (obe strany), Ukrainian RTTY (obe strany).
- **Globálne** (2): All Asian DX CW+SSB.

Asymetrické preteky (kde hostiteľská krajina a strana DX posielajú odlišné výmeny) sa dodávajú s **dvoma konfiguráciami** — jednou pre perspektívu hostiteľskej krajiny (prilepený regionálny kód) a jednou pre perspektívu DX (prilepené sériové číslo). Pole prijatej strany je jediné voľné textové pole, takže operátor môže zadať ktorýkoľvek formát podľa kontaktu.

Každá konfigurácia nesie:

- Hodnoty výmeny pretekov znovu vysielané pri exporte ADIF cez polia menného priestoru `APP_LQ_*`; hlavičková pečiatka `APP_LQ_CONTEST_ID` umožňuje neskoršiemu opätovnému importu obnoviť denník ako tie isté preteky so všetkými poľami nedotknutými.
- 12 rokov dátumových okien (2026–2037), takže čip *mimo okna pretekov* zostáva užitočný desaťročie bez nového vydania.
- Šablónu Cabrillo mapujúcu každé pole výmeny na správny stĺpec riadka `QSO:`.

Pridanie nových pretekov = vložte nový blok IIFE do [`contests.js`](contests.js) na abecednú pozíciu (každé existujúce preteky sú ohraničené komentárom hlavičky `// ==== <id> ====`, takže je ľahké nájsť, kam vložiť). Nie je potrebná žiadna zmena v `index.html`, žiadna zmena v `service-worker.js`, žiadna zmena v `app.js` — renderer, obslužný program podania, detektor duplicít, obojsmerný ADIF prenos a Cabrillo emitter prijímajú každú konfiguráciu ako čisté dáta.

## Import a export

- **Import** ľubovoľného súboru denníka — kliknite na *Importovať súbor denníka* pod formulárom na vytvorenie denníka a vyberte súbor `.adi` / `.adif` (ADIF) alebo `.cbr` / `.cab` (Cabrillo v3). Formát sa automaticky rozpozná podľa prvého riadka súboru (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → upozornenie „EDI zatiaľ nie je podporované“). Vždy sa vytvorí nový denník — import sa nikdy nezlúči s existujúcim. Importy ADIF prichádzajú ako bežné denníky, pokiaľ hlavička nenesie `APP_LQ_CONTEST_ID` zapísaný naším vlastným exportom pretekov (v takom prípade sa denník obnoví ako pretekársky denník daných pretekov). Importy Cabrillo vždy prichádzajú ako pretekárske denníky — pozrite sekciu *Preteky* pre popis, ako sa značka `CONTEST:` porovnáva so zabudovaným katalógom.
- **Export ADIF**: kliknite na *Exportovať .adi* v záhlaví denníka. Stiahne sa súbor zodpovedajúci **ADIF 3.1.7**. Záhlavie deklaruje `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` a `CREATED_TIMESTAMP` (UTC). Emitované polia QSO (ak nie sú prázdne): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — nasledované každým ďalším poľom ADIF zachovaným pri importe (pozri nižšie).
- **Export Cabrillo** je popísaný vyššie v sekcii *Preteky* — je dostupný iba pre pretekárske denníky (tlačidlo *Exportovať .cbr* sa zobrazí v záhlaví denníka, keď má denník priradené preteky).
- **Bezstratový round-trip**: pri importe ADIF sa zachová každé pole, ktoré aplikácia nemodeluje v UI (napr. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, polia `APP_*`) na QSO a pri ďalšom exporte ADIF sa re-emituje verbatim. Exportovaný súbor, ktorý bol sám importovaný, teda zachováva všetko.
- Dĺžka poľa sa v ADIF považuje za počet UTF-8 bajtov podľa špecifikácie, takže viacbajtový text (napr. akcentované volacie znaky v `COMMENT`) sa parsuje správne.

## Súkromie a dáta

- Všetky dáta sú uložené v `localStorage` vášho prehliadača pod kľúčom `local-qso:v1`.
- Nič sa nikam neodosiela. Žiadny backend, žiadne API volanie, žiadna telemetria, žiadna analytika.
- Vymazanie dát stránky prehliadača, používanie súkromného/inkognito režimu alebo iného prehliadača/zariadenia znamená nový prázdny denník — používajte *Exportovať .adi* na zálohovanie.

## Jazyk rozhrania

Selektor jazyka v záhlaví pokrýva **28 jazykov**. Zvoľte jeden a zvyšok UI sa okamžite prekreslí; vaša voľba sa uloží spolu s dennými a rešpektuje sa pri ďalšej návšteve. Predvolená je angličtina.

Dostupné jazyky (vlajkový emotikon + rodný názov; zoradené abecedne v rámci každého písma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzálne technické označenia zostávajú v kanonickej forme vo všetkých jazykoch: názvy pásiem (`20m`, `70cm`, …), kódy ADIF režimov (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` a ISO kódy krajín.

Chýba vám reťazec vo vašom jazyku? Každý jazykový slovník žije v jedinom balíku [`i18n.js`](i18n.js), rozdelenom do 28 sekcií komentármi hlavičky `// ==== <lang> ====`. Vyhľadajte (grep) hlavičku svojho jazyka, aby ste preskočili na jeho sekciu, potom pridajte/upravte kľúč. Pridanie úplne nového jazyka = vložte nový blok IIFE do `i18n.js` na abecednú pozíciu, pridajte kód jazyka do `SUPPORTED_LANGS` v `app.js`, a pridajte možnosť `<select>` v `index.html`.

## Témy

Prepínač témy v záhlaví prepína medzi dennou (predvolenou) a nočnou. Predvoľba sa uloží spolu s vašimi denníkmi a rešpektuje sa pri ďalšej návšteve. Natívne výbery dátumu/času sa riadia témou cez `color-scheme`.

## Technické poznámky

- Single-page aplikácia, čistý HTML + CSS + JavaScript. Žiadne frameworky, žiadny krok zostavenia, žiadne závislosti.
- Zdrojové súbory:
  - `index.html` — značkovanie a meta značky.
  - `style.css` — témy a rozloženie (denné/nočné premenné, mobilné mediálne dotazy).
  - `app.js` — stav, perzistencia, vykresľovanie, ADIF parser/serializér, vyhľadávanie predpona volacieho znaku → krajina.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (názov, farba témy, rozsah, ikona), aby bola aplikácia inštalovateľná ako PWA na mobile a desktope.
  - `service-worker.js` — cache-first service worker, ktorý predcachuje každý statický súbor pri inštalácii, vymaže staré cache pri aktivácii a udržuje aplikáciu plne offline po prvej návšteve. Registrácia sa pri protokole `file://` preskočí automaticky, takže priame otvorenie `index.html` z disku zostáva čisté.
  - `i18n.js` — jeden ručne udržiavaný balík nesúci všetkých 28 jazykových slovníkov. Každý jazyk je samostatná IIFE, ktorá priradí `window.I18N[<lang>]` plochú mapu kľúč→reťazec. Bloky sú ohraničené komentármi hlavičky `// ==== <lang> ====` — vyhľadajte (grep) jeden, aby ste preskočili na daný jazyk. Zlúčené do jedného súboru namiesto 28 samostatných, pretože prekladové súbory sú veľmi opakujúce sa (rovnaké názvy kľúčov, rovnaká syntax zástupných symbolov) a gzip komprimuje celú sadu oveľa lepšie ako 28 samostatných prúdov — ušetrí ~23 KB pri prvom načítaní a uberie 27 HTTP požiadaviek. `t()` a `applyLanguage()` v `app.js` spracovávajú vyhľadávania (s anglickým fallback) a prechádzajú DOM aktualizujúc každý prvok `[data-i18n*]`.
  - `contests.js` — jeden ručne udržiavaný balík nesúci všetkých 68 konfigurácií pretekov. Každé preteky sú samostatná IIFE, ktorá priradí `window.CONTESTS[<id>]` objekt konfigurácie zodpovedajúci schéme (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Bloky sú ohraničené komentármi hlavičky `// ==== <id> ====` — vyhľadajte (grep) jeden, aby ste preskočili na dané preteky. Zlúčené do jedného súboru namiesto 68 samostatných, pretože konfigurácie pretekov sú veľmi opakujúce sa (rovnaká schéma, rovnaký prefix `APP_LQ_*`, rovnaké názvy polí hlavičky Cabrillo) a gzip komprimuje celú sadu oveľa lepšie ako 68 samostatných prúdov — ušetrí ~42 KB pri prvom načítaní a uberie 67 HTTP požiadaviek. Načítaný jediným tagom `<script>` v `index.html` pred `app.js`, takže je register naplnený, keď sa buduje rozbaľovací zoznam Pretek.
- Testované na aktuálnom Chromium, Firefox a Safari (desktop + iOS).

## Poďakovanie

Vytvoril [YL3IM](https://www.qrz.com/db/YL3IM).

Poďakovanie [A65BR](https://www.qrz.com/db/A65BR) Olegovi za neoceniteľné tipy, vďaka ktorým je časť satelitného QSO skutočne použiteľná — moderné dvojpísmenové označenia Sat-mode, katalóg AMSAT a automatické nastavenie uplink/downlink majú pôvod v jeho spätnej väzbe.

Vlajky krajín sa opierajú o sekvencie regionálnych indikátorov Unicode. Správne sa vykresľujú na macOS, iOS, Linux (s fontom emoji schopným vlajok) a Android. Windows neobsahuje systémový font vlajok, takže vlajkové emoji sa tam môžu zobraziť ako dvojice písmen.
