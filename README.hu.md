# Local QSO Logger

## Olvasd a saját nyelveden

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 Magyar · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Adatvédelmet tisztelő amatőrrádiós QSO-naplózó, amely teljesen a böngésződben fut. Nincs fiók, nincs szerver, nincs nyomon követés, nincs analitika — a naplóid csak a böngésződ `localStorage`-ában élnek, és soha nem hagyják el az eszközödet.

Készítette: [YL3IM](https://www.qrz.com/db/YL3IM). A projekt webhelye: [qso.lv](https://qso.lv).

![Local QSO Logger iPaden futva](media/iPad.png)

## Tartalom

- [Olvasd a saját nyelveden](#olvasd-a-saját-nyelveden)
- [Funkciók](#funkciók)
- [Első lépések](#első-lépések)
- [Telepítés PWA-ként mobilon](#telepítés-pwa-ként-mobilon)
  - [iOS (csak Safari)](#ios-csak-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Naplók](#naplók)
- [QSO-k](#qso-k)
- [Versenyek](#versenyek)
- [Import és export](#import-és-export)
- [Adatvédelem és adatok](#adatvédelem-és-adatok)
- [Felhasználói felület nyelve](#felhasználói-felület-nyelve)
- [Témák](#témák)
- [Technikai megjegyzések](#technikai-megjegyzések)
- [Köszönetnyilvánítások](#köszönetnyilvánítások)

## Funkciók

- Több napló; mindegyik saját QSO-listával.
- A **verseny naplók** opcionálisak — válassz a 68 beépített verseny katalógusából napló létrehozásakor. A QSO-űrlap egy versenyspecifikus *Verseny csere* blokkal bővül, a duplikátumfigyelés tiszteletben tartja a verseny szabályát, és az *Exportálás .cbr* egy Cabrillo v3 beküldési fájlt hoz létre a szokásos ADIF export mellett.
- Napló-műveletek: létrehozás, átnevezés, törlés, naplófájl importálása (ADIF vagy Cabrillo — a formátumot automatikusan felismeri), export ADIF-ba (`.adi`), valamint *Exportálás .cbr* (Cabrillo v3) verseny naplókhoz. Egy korábban az alkalmazás által exportált `.cbr` fájl újraimportálása ugyanazon verseny naplóként állítja helyre.
- A QSO-űrlap három blokkra van osztva: **Állomás adatai** (az állomás hívójele, az operátor hívójele, saját négyzetrácsod), amelyek ragadnak a QSO-k között; **Üzemmód** (terjedési mód, műhold, üzemmód, műhold-üzemmód, sáv, RX sáv) műholdas mezőkkel, amelyek csak akkor látszanak, ha a terjedési mód *Műhold*; és **QSO adatok** (hívott hívójel, hívott rácsmező, UTC dátum/idő szerkesztésnél, megjegyzés, RST küldött, RST vett).
- A teljes ADIF `MODE` → `SUBMODE` taxonómia az üzemmód legördülőben — válassz szülő üzemmódot (`SSB`, `MFSK`, …) vagy ugorj egyenesen egy konkrét almódra (`USB`, `FT4`, …); az alkalmazás ADIF szerint menti mindkét mezőt, a táblázat pedig az almódot mutatja, ha van.
- A teljes ADIF terjedési mód felsorolás (SAT, RPT, EME, ES, MS, Aurora stb.) legördülőként.
- A teljes AMSAT műhold-katalógus (~110 műhold) és egy kétszintű **Műhold-üzemmód** legördülő: a preferált kétbetűs uplink/downlink kódok felül (LU, LV, SX, UU, UV, VA, VU, VV) és a régebbi egybetűs jelölések (A/B/J/K/L/R/S/T/U/V/W/X) *elavult* csoportban alul. A műhold-üzemmód kiválasztása automatikusan beállítja a `BAND` (uplink) és `RX band` (downlink) értékeket.
- Bármely QSO szerkesztése és törlése (törlés előtt megerősítéssel).
- Ésszerű alapértékek: az UTC dátum/idő előre kitöltve *most* értékre, üzemmód-függő RST alapértékek (59 hangos módokhoz, 599 CW/digitálishoz), ragadós állomás adatok + sáv + üzemmód + terjedési mód egymást követő QSO-k között (csak a kapcsolatonkénti mezők — hívójel, rácsmező, megjegyzés, RST — törlődnek minden *QSO naplózása* után).
- Élő duplikált hívójel jelző (tájékoztató jellegű — a duplikátok megengedettek).
- Országzászló-oszlop a hívójel-előtagból levezetve (a közönséges amatőrrádiós előtagok ≥99 %-át lefedi, beleértve a hordozható hívásokat is, mint `9A/M0NCG`).
- Egyérintéses **Saját rácsmező** automatikus felismerés: egy 🌐 gomb a mező mellett megkérdezi a böngésződtől a jelenlegi koordinátáidat, és kitölti a 6 karakteres Maidenhead rácsmezőt (a böngésző Geolocation API-ját használja — felhasználói engedélyt igényel).
- Területi beállítás szerint megjelenített dátum a QSO táblázatban; az ISO-tárolás és az ADIF-kimenet változatlan marad.
- A felület **28 nyelven** érhető el (angol plusz 22 latin írásmódú, 5 cirill írásmódú és görög); zászló emoji előtagú választó a fejlécben.
- Nappali / éjszakai témák (nap az alapértelmezett; az átkapcsoló a fejlécben van).
- Mobilbarát reszponzív elrendezés érintőméretű gombokkal.
- Teljesen offline működik — semmilyen hálózati kérés nincs.
- PWA-ként telepíthető (Hozzáadás a kezdőképernyőhöz / Alkalmazás telepítése) HTTPS-en történő tárolásnál.

## Első lépések

Egyszerűen nyisd meg az `index.html` fájlt egy modern böngészőben. Nincs build lépés, nincs telepítés, nincs szerver.

Ha tárolni szeretnéd, másold a statikus fájlokat (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, az egyetlen `i18n.js` köteget, amely mind a 28 nyelvi szótárt hordozza, és az egyetlen `contests.js` köteget, amely mind a 68 verseny konfigurációt hordozza) bármely statikus tárhelyre (GitHub Pages, Netlify, saját webszerver). `file://` protokollal is működik — a service worker regisztrációja automatikusan kihagyódik a `file:` protokollon, így az `index.html` közvetlenül lemezről való megnyitása is tisztán működik.

HTTPS-en tárolva az alkalmazás PWA-ként telepíthetővé válik (böngésző *Alkalmazás telepítése* / *Hozzáadás a kezdőképernyőhöz* menü), és az első látogatás után offline is működik egy cache-first service workernek köszönhetően, amely előre gyorsítótárazza az összes statikus fájlt (UI + összes fordítás).

Az első látogatáskor automatikusan létrejön egy alapértelmezett napló, így azonnal elkezdhetsz naplózni.

## Telepítés PWA-ként mobilon

Ha az alkalmazás HTTPS-en van tárolva (pl. GitHub Pages), telepítheted a telefonod kezdőképernyőjére, ahol böngésző chrome nélkül, teljes képernyőn fut. Az első indítás után a service worker mindent gyorsítótáraz, így a következő indítások teljesen offline működnek.

### iOS (csak Safari)

iOS-en csak a Safari telepíthet PWA-kat — harmadik féltől származó böngészők nem tudják.

1. Nyisd meg az oldalt a **Safariban**.
2. Érintsd meg a **Megosztás** gombot.
3. Válaszd a **Hozzáadás a kezdőképernyőhöz**, majd az **Hozzáadás** lehetőséget.

Útmutató:

![iOS telepítési útmutató](media/iOS_add_to_home_screen.gif)

Jobb minőségű forrás: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Nyisd meg az oldalt a böngészőben. Automatikusan megjelenhet az *Alkalmazás telepítése* üzenet.
2. Ellenkező esetben nyisd meg a **⋮ menüt** → **Alkalmazás telepítése** (vagy **Hozzáadás a kezdőképernyőhöz** régebbi verziókban).

Útmutató:

![Android telepítési útmutató](media/Android_add_to_home_screen.gif)

Jobb minőségű forrás: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Naplók

- **Létrehozás:** gépeld be a nevet a *Napló neve* mezőbe, majd küld el. Ha a nevet üresen hagyod, az alapértelmezett `Log YYYY-MM-DD HH:MM UTC` lesz.
- **Váltás:** kattints bármely naplóra az oldalsávban.
- **Átnevezés:** kattints az *Átnevezés* gombra a napló fejlécében. Az Enter billentyűvel menthetsz, az Escape-pel visszavonhatsz.
- **Törlés:** kattints a *Napló törlése* gombra. Megerősítést kér. Ha törölsz az utolsó naplót, automatikusan létrejön egy új.

## QSO-k

- Töltsd ki az űrlapot, majd nyomj **QSO naplózása** gombot.
- Az űrlap három blokkra van rendezve:
  - **Állomás adatai** — *Állomás hívójele* (az adó hívójelod, ADIF `STATION_CALLSIGN`), *Operátor* (az egyéni operátor hívójele — különbözik az *állomás hívójelétől*, ha egy vendég operátor ül egy klubállomás mikrofonjánál; ADIF `OPERATOR`) és *Saját rácsmezőm* (ADIF `MY_GRIDSQUARE`) egy 🌐 gombbal, amely a böngésződ jelenlegi helyzetéből tölti ki a rácsmezőt (Geolocation API — a böngésző első alkalommal engedélyt kér). Ezek ugyanazon munkamenet QSO-i között ragadnak — egyszer add meg őket, és átvitelre kerülnek.
  - **Üzemmód** — *Terjedési mód*, *Üzemmód*, *Sáv*, plusz a csak műholdas *Műhold* / *Műhold-üzemmód* / *RX sáv* mezők, ha a terjedési mód *Műhold*. A sáv, az üzemmód és a terjedési mód ragadós, mint az állomás adatai.
  - **QSO adatok** — kapcsolatonkénti mezők: *Hívójel*, *Rácsmező* (a másik állomás Maidenhead-koordinátái), *Megjegyzés* (ADIF `COMMENT`), *RST küldött*, *RST vett*. Meglévő QSO szerkesztésekor ebben a blokkban megjelenik a *Dátum (UTC)* és az *Idő (UTC)* is. Ezek a mezők törlődnek minden *QSO naplózása* után.
- Az összes hívójel (hívott, állomás, operátor) automatikusan nagybetűvé válik gépelés közben; mindkét rácsmező-mező ugyanígy működik.
- A dátum és az idő elküldéskor *most* UTC értékre töltődik elő; szerkesztéskor bármilyen értéket begépelhetsz.
- RST küldött / RST vett, ha üresen hagyod, az alapértelmezett **59** hangos módoknál (SSB/FM/DIGITALVOICE) és **599** CW és digitális módoknál (CW/FT8/FT4/RTTY/PSK31/JT65). Az alapértelmezett a szülő MODE-t követi, így egy konkrét almód — pl. *USB* vagy *FT4* — kiválasztása is a helyes alapértékeket adja.
- A *Duplikát ebben a naplóban* chip megjelenik a hívójel mező alatt, ha a hívójel már szerepel az aktuális naplóban. A duplikátok *nincsenek* tiltva.
- **Terjedési mód** — opcionális ADIF terjedési módok legördülő (SAT, RPT, EME, F2, Es, MS, LOS stb.). Hagyd üresen a szokásos HF-es szárazföldi QSO-khoz.
- **Műholdas QSO-k** — a *Műhold* terjedési mód kiválasztásakor három csak műholdas mező jelenik meg: **Műhold** (legördülő ~110 AMSAT-regisztrált műholddal), **Műhold-üzemmód** (AMSAT betűjelölések, *modern* kétbetűs uplink/downlink kódokra és *elavult* egybetűs kódokra csoportosítva) és **RX sáv** (downlink sáv). A műhold, a műhold-üzemmód és az RX sáv kötelező — a böngésző ezek nélkül nem küldi el az űrlapot. A **Műhold-üzemmód** kiválasztásakor automatikusan kitöltődik a fő **Sáv** az uplink sávval és az **RX sáv** a downlink sávval (pl. J üzemmód → 2m uplink, 70cm downlink). Más terjedési módból *vissza* műholdra váltva a műhold-üzemmód visszaáll, hogy újat lehessen választani. A nem műholdas QSO-k soha nem tartalmaznak műholdas mezőket; egy meglévő QSO műholdból más terjedési módra váltása tisztán eltávolítja azokat. A **Rácsmező** és a **Saját rácsmezőm** általános mezők (VHF/UHF rácsmező-versenyekhez is hasznosak), és minden QSO-nál láthatók maradnak.
- **QSO szerkesztése** a sor *Szerkesztés* gombjával. Az űrlap *QSO frissítése* módba vált, a sor kiemelődik, és megjelenik egy *Mégse* gomb. Napló váltása vagy a napló törlése automatikusan megszakítja a szerkesztést.
- **QSO törlése** a sor *Törlés* gombjával (megerősítést kér).

## Versenyek

Egy napló opcionálisan lehet **verseny napló** — válassz egy versenyt a *Verseny* legördülőből a napló-létrehozási űrlapon. Üres legördülő = normál napló (alapértelmezett, a meglévő viselkedés változatlan).

A verseny naplók a következőket kapják:

- **Verseny csere blokk** a QSO-űrlapon, amely dinamikusan jelenik meg a kiválasztott verseny sémája alapján. A mezőtípusok `text`, `number` és `serial` (automatikusan növekvő, csak olvasható). A *sticky* jelölésű mezők (a saját zónád / megyéd / kerületed / teljesítményed / korod / …) az előző QSO értékéből töltődnek elő; a QSO-nkénti mezők (az ő zónájuk, sorozatszámuk, …) minden *QSO naplózása* után törlődnek.
- **Verseny jelvény** a napló neve mellett a részletfejlécben.
- **Duplikátumfigyelés**, amely tiszteletben tartja a verseny `duplicateRule` beállítását (`per-band-mode`, `per-band`, `per-day` vagy `off`). A chip továbbra is csak tájékoztató jellegű — soha nem blokkolja a beküldést.
- **Figyelmeztető chip**, amikor az aktuális UTC a verseny által deklarált dátumablakokon kívül esik (12 évre előre betöltve, 2026–2037), vagy amikor a kiválasztott sáv / üzemmód nincs a verseny engedélyezett készletében. Soha nem blokkol.
- **Beküldési infópanel** a részletfejlécben: beágyazott űrlap a verseny által deklarált Cabrillo fejlécmezőkhöz (kategória, teljesítmény, név, klub, cím, soapbox, …). Az értékek a naplón maradnak meg, nem QSO-nként.
- **Exportálás .cbr** gomb a részletfejlécben, az *Exportálás .adi* mellett. Egy Cabrillo v3 fájlt bocsát ki: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` az első QSO állomásadataiból előre kitöltve, a többi a beküldési infópanelből, majd egy `QSO:` sor kapcsolatonként időrendi sorrendben, a verseny `sentTemplate` / `rcvdTemplate` oszlopait használva.
- **Cabrillo újraimportálás** a szabványos *Naplófájl importálása* gombon keresztül — egy korábban az alkalmazás által exportált `.cbr` fájl (vagy bármely más naplózó, amely szabványos Cabrillo v3-at bocsát ki) visszakerül egy friss, megfelelő típusú verseny naplóba. A `CONTEST:` fejlécet összevetik a beépített katalógussal; amikor több konfiguráció ugyanazt a címkét osztja meg (pl. az `ARRL-10` mind az `arrl-10m-dx`-szel, mind az `arrl-10m-w`-vel egyezik), az alkalmazás a QSO-sor módbetűjének és az oszlopok számának minden jelölt sablonjához való illesztésével dönt, majd a `-dx` variánst részesíti előnyben. A fejlécmezők (kategória, név, klub, soapbox, …) helyreállítják a beküldési infópanelt; a QSO cseregértékek helyreállítják a `q.contestExchange` mezőt a verseny sablonja szerint.

### Beépített verseny katalógus (68 konfiguráció)

Család szerint csoportosítva:

- **CQ család** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL család** (9): ARRL DX SSB/CW (DX oldal), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (mindegyik *mindkét* DX és W/VE nézőpontból szállítva).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE és egyéb európai** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Közép-/kelet-európai aszimmetrikus — mindkét nézőpont** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Orosz klub / RadioSport** (12): Russian DX (mindkét oldal), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Fehéroroszország + Olaszország + Horvátország + Spanyolország + ukrán RTTY** (12): Belarus BFRR CW+SSB (mindkét oldal), ARI DX (mindkét oldal), Croatian 9A CW (mindkét oldal), Spanish CNCW (mindkét oldal), Ukrainian RTTY (mindkét oldal).
- **Globális** (2): All Asian DX CW+SSB.

Az aszimmetrikus versenyek (ahol a házigazda ország és a DX oldal különböző cserét küld) **két konfigurációval** érkeznek — egy a házigazda ország nézőpontjához (ragadós régiókód) és egy a DX nézőponthoz (ragadós sorozatszám). A fogadott oldal mezője egyetlen szabad szöveges gyűjtőmező, hogy az operátor a kapcsolattól függően bármelyik formátumot begépelhesse.

Minden konfiguráció tartalmazza:

- A verseny cseréjének értékei újra kibocsátásra kerülnek az ADIF exportban az `APP_LQ_*` névtér mezőkön keresztül; az `APP_LQ_CONTEST_ID` fejlécbélyeg lehetővé teszi, hogy egy későbbi újraimport helyreállítsa a naplót ugyanazon versenyként, minden mezővel érintetlenül.
- 12 év dátumablak (2026–2037), így a *versenyablakon kívül* chip évtizedekig hasznos marad új kiadás nélkül.
- Egy Cabrillo sablon, amely minden cseremezőt a helyes `QSO:` sor oszlopára képez le.

Új verseny hozzáadása = illessz egy új IIFE blokkot a [`contests.js`](contests.js) fájlba az ábécé szerinti pozícióba (minden meglévő versenyt egy `// ==== <id> ====` fejlécmegjegyzés határol, így könnyű megtalálni, hova illeszd be). Nincs szükség `index.html` módosításra, `service-worker.js` módosításra, `app.js` módosításra — a renderelő, a beküldés-kezelő, a duplikátumdetektor, az ADIF oda-vissza konverzió és a Cabrillo kibocsátó minden konfigurációt tiszta adatként fogad be.

## Import és export

- **Import** bármely naplófájlból — kattints az *Naplófájl importálása* gombra a napló-létrehozási űrlap alatt, és válassz egy `.adi` / `.adif` (ADIF) vagy `.cbr` / `.cab` (Cabrillo v3) fájlt. A formátumot a fájl első sora alapján automatikusan felismeri (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → egy "EDI még nem támogatott" figyelmeztetés). Mindig új napló jön létre — az import soha nem egyesül egy meglévővel. Az ADIF importok normál naplóként érkeznek, hacsak a fejléc nem hordoz egy `APP_LQ_CONTEST_ID`-t, amelyet a saját verseny exportunk írt (ebben az esetben a napló az adott verseny verseny naplójaként áll helyre). A Cabrillo importok mindig verseny naplóként érkeznek — lásd a *Versenyek* szakaszt arról, hogyan illesztik a `CONTEST:` címkét a beépített katalógushoz.
- **ADIF export**: kattints az *Exportálás .adi* gombra a napló fejlécében. Letöltődik egy **ADIF 3.1.7**-nek megfelelő fájl. A fejléc deklarálja az `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` és `CREATED_TIMESTAMP` (UTC) értékeket. QSO-nkénti kibocsátott mezők (ha nem üresek): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — amelyet minden importáláskor megőrzött extra ADIF mező követ (lásd alább).
- A **Cabrillo export** dokumentációja fent, a *Versenyek* szakaszban található — csak verseny naplók esetén elérhető (az *Exportálás .cbr* gomb megjelenik a napló fejlécében, amikor a naplónak van versenye).
- **Veszteségmentes kör**: ADIF importáláskor minden mező, amelyet az alkalmazás nem modellez a felhasználói felületén (pl. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` mezők), megmarad a QSO-n, és a következő ADIF exportálásnál szó szerint újra kibocsátásra kerül. Így egy importált fájl exportálása mindent megőriz.
- A mezőhosszt ADIF-ban UTF-8 bájt-számként kezeli, ahogyan a specifikáció megköveteli, így a többbájtos szöveg (pl. ékezetes karakterek a `COMMENT`-ben) helyesen kerül feldolgozásra.

## Adatvédelem és adatok

- Minden adat a böngésződ `localStorage`-ában van tárolva a `local-qso:v1` kulcs alatt.
- Semmi sem kerül továbbításra sehova. Nincs háttérrendszer, API-hívás, telemetria vagy analitika.
- A böngésző oldal-adatainak törlése, privát/inkognito mód vagy más böngésző/eszköz használata egy új üres naplót jelent — használd az *Exportálás .adi* funkciót a biztonsági mentéshez.

## Felhasználói felület nyelve

A fejlécben lévő nyelvválasztó **28 nyelvet** fed le. Válassz egyet, és a felület többi része azonnal újrarenderelődik; a választásod a naplóid mellé mentődik, és a következő látogatáskor is érvényes. Az alapértelmezett az angol.

Elérhető nyelvek (zászló emoji + natív név; ábécé sorrendben minden írásrendszeren belül):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Az univerzális technikai jelölések minden nyelven kanonikus formájukban maradnak: sávnevek (`20m`, `70cm`, …), ADIF üzemmódkódok (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` és ISO országkódok.

Hiányzik egy szöveg a saját nyelveden? Minden nyelvi szótár egyetlen [`i18n.js`](i18n.js) csomagban él, `// ==== <lang> ====` fejlécmegjegyzésekkel 28 szakaszra osztva. Keresd meg (grep) a saját nyelved fejlécét, hogy a szakaszára ugorj, majd add hozzá / szerkeszd a kulcsot. Egy teljesen új nyelv hozzáadása = illessz egy új IIFE blokkot az `i18n.js` fájlba az ábécé szerinti pozícióba, add hozzá a nyelvkódot a `SUPPORTED_LANGS`-hoz az `app.js`-ben, és adj hozzá egy `<select>` opciót az `index.html`-ben.

## Témák

A fejlécben lévő témákapcsoló vált a nappali (alapértelmezett) és az éjszakai között. A beállítás a naplóid mellé mentődik, és a következő látogatáskor érvényes. A natív dátum-/időválasztók a `color-scheme` segítségével követik a témát.

## Technikai megjegyzések

- Egyoldalas alkalmazás, vanilla HTML + CSS + JavaScript. Nincs keretrendszer, nincs build lépés, nincs függőség.
- Forrásfájlok:
  - `index.html` — jelölés és meta tagek.
  - `style.css` — témák és elrendezés (nappali/éjszakai változók, mobil média lekérdezések).
  - `app.js` — állapot, perzisztencia, renderelés, ADIF parser/szerializáló, hívójel-előtag → ország keresés.
  - `favicon.svg` — beágyazott SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (név, témaszín, hatókör, ikon), hogy az alkalmazás PWA-ként telepíthető legyen mobilon és asztali gépen.
  - `service-worker.js` — cache-first service worker, amely telepítéskor előre gyorsítótárazza az összes statikus fájlt, aktiváláskor törli a régi gyorsítótárakat, és az első látogatás után teljesen offline tartja az alkalmazást. A regisztráció automatikusan kihagyódik a `file://` protokollon, így az `index.html` közvetlen lemezről való megnyitása tiszta marad.
  - `i18n.js` — egyetlen kézzel karbantartott csomag, amely mind a 28 nyelvi szótárt hordozza. Minden nyelv egy önálló IIFE, amely a `window.I18N[<lang>]`-hoz rendel egy lapos kulcs→érték leképezést. A blokkokat `// ==== <lang> ====` fejlécmegjegyzések határolják — keress (grep) egyet, hogy arra a nyelvre ugorj. Egyetlen fájlba csomagolva 28 egyéni fájl helyett, mert a fordítási fájlok nagyon ismétlődőek (ugyanazok a kulcsnevek, ugyanaz a helyőrző-szintaxis), és a gzip sokkal jobban tömöríti a teljes készletet, mint 28 külön adatfolyamot — ~23 KB-ot spórol az első betöltésnél és 27 HTTP-kéréssel kevesebb kell. A `t()` és az `applyLanguage()` az `app.js`-ben kezeli a kereséseket (angol tartalékkal) és végigjárja a DOM-ot, frissítve minden `[data-i18n*]` elemet.
  - `contests.js` — egyetlen kézzel karbantartott csomag, amely mind a 68 verseny konfigurációt hordozza. Minden verseny egy önálló IIFE, amely a `window.CONTESTS[<id>]`-hoz rendel egy sémának megfelelő konfigurációs objektumot (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). A blokkokat `// ==== <id> ====` fejlécmegjegyzések határolják — keress (grep) egyet, hogy arra a versenyre ugorj. Egyetlen fájlba csomagolva 68 egyéni fájl helyett, mert a verseny konfigurációk nagyon ismétlődőek (ugyanaz a séma, ugyanaz az `APP_LQ_*` prefix, ugyanazok a Cabrillo fejlécmező nevek), és a gzip sokkal jobban tömöríti a teljes készletet, mint 68 külön adatfolyamot — ~42 KB-ot spórol az első betöltésnél és 67 HTTP-kéréssel kevesebb kell. Egyetlen `<script>` tag tölti be az `index.html`-ben az `app.js` előtt, így a regiszter feltöltött, amikor a Verseny legördülő felépül.
- Tesztelve az aktuális Chromium, Firefox és Safari böngészőkön (asztali + iOS).

## Köszönetnyilvánítások

Készítette: [YL3IM](https://www.qrz.com/db/YL3IM).

Köszönet [A65BR](https://www.qrz.com/db/A65BR) Olegnek a felbecsülhetetlen értékű tippekért, amelyek ténylegesen használhatóvá tették a műholdas QSO részt — a modern kétbetűs műhold-üzemmód jelölések, az AMSAT-katalógus és az automatikus uplink/downlink beállítás mind az ő visszajelzéséből ered.

Az országzászlók Unicode területi jelző szekvenciákon alapulnak. Helyesen jelennek meg macOS-en, iOS-en, Linuxon (zászló-kompatibilis emoji betűtípussal) és Androidon. A Windows nem tartalmaz rendszerzászló-betűtípust, ezért a zászló emojik ott betűpárokként jelenhetnek meg.
