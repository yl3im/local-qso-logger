# Local QSO Logger

## Olvassa el a saját nyelvén

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 Magyar · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Adatvédelmet tisztelő amatőr rádió QSO-napló, amely teljes egészében a böngészőjében fut. Nincs fiók, nincs szerver, nincs követés, nincs analitika — naplói kizárólag a böngésző `localStorage` tárában találhatók, és soha nem hagyják el az eszközét.

Készítette: [YL3IM](https://www.qrz.com/db/YL3IM). Projekt weboldal: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger iPaden](media/iPad.png)

## Tartalom

- [Olvassa el a saját nyelvén](#olvassa-el-a-saját-nyelvén)
- [Funkciók](#funkciók)
- [Kezdeti lépések](#kezdeti-lépések)
- [Telepítés PWA-ként mobilon](#telepítés-pwa-ként-mobilon)
  - [iOS (csak Safari)](#ios-csak-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Naplók](#naplók)
- [QSO-k](#qso-k)
- [ADIF import és export](#adif-import-és-export)
- [Adatvédelem és adatok](#adatvédelem-és-adatok)
- [Felhasználói felület nyelve](#felhasználói-felület-nyelve)
- [Témák](#témák)
- [Technikai megjegyzések](#technikai-megjegyzések)
- [Köszönetnyilvánítás](#köszönetnyilvánítás)

## Funkciók

- Több napló, mindegyik saját QSO-listával.
- Napló műveletek: létrehozás, átnevezés, törlés, importálás ADIF-ből, exportálás ADIF-be (`.adi`).
- QSO mezők: hívójel, UTC dátum, UTC idő, sáv, mód, RST adott, RST kapott.
- Bármely QSO szerkesztése és törlése (törléskor megerősítéssel).
- Értelmes alapértelmezések: mai UTC dátum/idő előre kitöltve, mód-függő RST alapértékek (59 hang módoknak, 599 CW/digitális módoknak), ragadós sáv és mód egymást követő QSO-k között.
- Élő duplikált hívójel jelző (informatív — duplikátumok megengedettek).
- Ország zászló oszlop a hívójel előtagból származtatva (lefedi a gyakori rádióamatőr előtagok ≥99 %-át, beleértve a portable hívójeleket, mint `9A/M0NCG`).
- Lokálhoz igazított dátum megjelenítés a QSO táblázatban; az ISO tárolás és ADIF kimenet változatlan marad.
- Nappali/éjszakai témák (nappali alapértelmezett; a váltó a fejlécben található).
- Mobilbarát reszponzív elrendezés érintésre méretezett gombokkal.
- Teljesen offline működik — semmilyen időpontban nincs hálózati kérés.
- Telepíthető PWA-ként (Hozzáadás a kezdőképernyőhöz / Alkalmazás telepítése), ha HTTPS-en keresztül van kiszolgálva.
- Felület **28 nyelven** elérhető (angol plusz 22 latin betűs, 5 cirill betűs és görög); zászló emoji előtagú választó a fejlécben.

## Kezdeti lépések

Egyszerűen nyissa meg az `index.html` fájlt egy modern böngészőben. Nincs build, nincs telepítés, nincs szerver.

Ha hosztolni szeretné, helyezze a statikus fájlokat (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` és az `i18n/` könyvtár a 28 fordítási fájllal) bármely statikus hosztra (GitHub Pages, Netlify, saját webszerver). `file://`-en keresztül is működni fog — a service worker regisztrálása automatikusan kihagyásra kerül `file:` protokollnál, így az `index.html` közvetlen megnyitása a lemezről tisztán működik.

HTTPS-en keresztül kiszolgálva az alkalmazás telepíthetővé válik PWA-ként (a böngésző *Alkalmazás telepítése* / *Hozzáadás a kezdőképernyőhöz* menüjén keresztül), és az első látogatás után offline működik egy cache-first service workernek köszönhetően, amely minden statikus fájlt (UI + összes fordítás) előgyorsítótáraz.

Az első látogatáskor automatikusan létrejön egy alapértelmezett napló, így azonnal elkezdheti a naplózást.

## Telepítés PWA-ként mobilon

Amikor az alkalmazást HTTPS-en keresztül szolgálja ki (pl. GitHub Pages), telepítheti a telefon kezdőképernyőjére, hogy teljes képernyőn fusson böngésző-kerete nélkül. Az első indítás után a service worker mindent gyorsítótárba helyez, így a későbbi indítások teljesen offline működnek.

### iOS (csak Safari)

iOS-en csak a Safari telepíthet PWA-t — harmadik fél böngészői nem.

1. Nyissa meg az oldalt a **Safari**-ban.
2. Koppintson a **Megosztás** gombra.
3. Válassza a **Főképernyőhöz adás**, majd a **Hozzáadás** lehetőséget.

Útmutató:

![iOS telepítési útmutató](media/iOS_add_to_home_screen.gif)

Magasabb minőségű forrás: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Nyissa meg az oldalt a böngészőjében. Automatikusan megjelenhet az *Alkalmazás telepítése* felszólítás.
2. Egyébként nyissa meg a **⋮ menüt** → **Alkalmazás telepítése** (vagy **Hozzáadás a kezdőképernyőhöz** régebbi verziókban).

Útmutató:

![Android telepítési útmutató](media/Android_add_to_home_screen.gif)

Magasabb minőségű forrás: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Naplók

- **Létrehozás:** írjon be egy nevet a *Napló neve* mezőbe és küldje el. Ha üresen hagyja, az alapértelmezett `Log YYYY-MM-DD HH:MM UTC`.
- **Váltás:** kattintson bármely naplóra az oldalsávban.
- **Átnevezés:** kattintson az *Átnevezés* gombra a napló fejlécében. Az Enter ment, az Escape megszakít.
- **Törlés:** kattintson a *Napló törlése* gombra. Megerősítést kell adnia. Ha törli az utolsó naplót, automatikusan új jön létre.

## QSO-k

- Töltse ki az űrlapot és nyomja meg a **QSO rögzítése** gombot.
- A hívójel automatikusan nagybetűsre alakul gépelés közben.
- Dátum és idő előre ki van töltve a *most* UTC értékre, és minden rögzített QSO után visszaáll; még mindig bármilyen értéket beírhat.
- A sáv és a mód megmarad az azonos munkamenetben lévő QSO-k között, így nem kell minden kontaktushoz újra kiválasztani.
- RST adott / RST kapott, ha üresen marad, **59**-re esik vissza hang módoknál (SSB/FM/AM/DIGITALVOICE) és **599**-re CW és digitális módoknál (CW/FT8/FT4/RTTY/PSK31/JT65).
- A hívójel mező alatt megjelenik egy *Duplikátum ebben a naplóban* címke, ha a hívójel már létezik a jelenlegi naplóban. A duplikátumokat *nem* tilt.
- **QSO szerkesztése** a sorban lévő *Szerk.* gombbal. Az űrlap *QSO frissítése* módba vált, a sor kiemelve, és megjelenik egy *Mégse* gomb. Napló váltása vagy a napló törlése automatikusan megszakítja a szerkesztést.
- **QSO törlése** a sorban lévő *Törlés* gombbal (megerősítést kér).

## ADIF import és export

- **Export**: kattintson a napló fejlécében a *.adi exportálása* gombra. Letöltődik egy fájl `ADIF_VER 3.1.4` és `PROGRAMID local-qso` fejléccel. Minden rekord leképezi a `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD` mezőket.
- **Import**: kattintson a napló-létrehozás űrlap alatt a *.adi fájl importálása* gombra és válasszon egy `.adi`/`.adif` fájlt. Új napló jön létre `Importálva YYYY-MM-DD HH:MM UTC` névvel. Az import soha nem keveredik létező naplóba.
- A mező hossz számolása karakterszámként kezelendő, ami működik ASCII ADIF-nél (minden szabványos QSO mező). A többbyte-os tartalom nem lényeges szöveges mezőkben furcsán parszolhat.

## Adatvédelem és adatok

- Az összes adat a böngésző `localStorage`-jában van tárolva a `local-qso:v1` kulcs alatt.
- Semmi sem továbbítódik sehova. Nincs backend, nincs API hívás, nincs telemetria, nincs analitika.
- A weboldal adatainak törlése, privát/inkognitó mód használata vagy másik böngésző/eszköz használata üres naplót jelent — használja a *.adi exportálása* funkciót biztonsági mentésre.

## Felhasználói felület nyelve

A fejlécben lévő nyelvválasztó **28 nyelvet** fed le. Válasszon egyet, és a felület többi része azonnal újrarenderelődik; választása a naplókkal együtt elmentődik, és a következő látogatáskor tiszteletben tartódik. Az angol az alapértelmezett.

Elérhető nyelvek (zászló emoji + anyanyelvi név; betűrendben minden írásrendszerben):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Az univerzális technikai címkék kanonikus formájukban maradnak minden nyelven: sávnevek (`20m`, `70cm`, …), ADIF mód kódok (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` és ISO országkódok.

Hiányzik egy szöveg a saját nyelvén? Minden nyelv egy kis fájl az [`i18n/`](i18n/) alatt — másolja le az `i18n/en.js`-t, fordítsa le az értékeket, mentse `i18n/<kód>.js` néven, majd adjon hozzá egy `<script>` címkét plus egy `<select>` opciót az `index.html`-be és a kódot a `SUPPORTED_LANGS`-be az `app.js`-ben.

## Témák

A fejlécben lévő téma váltó vált nappali (alapértelmezett) és éjszakai között. Az beállítás a naplókkal együtt elmentődik, és a következő látogatáskor tiszteletben tartódik. A natív dátum-/időválasztók követik a témát a `color-scheme`-en keresztül.

## Technikai megjegyzések

- Egyetlen oldalas alkalmazás, tiszta HTML + CSS + JavaScript. Nincs framework, nincs build, nincs függőség.
- Forrásfájlok:
  - `index.html` — markup és meta címkék.
  - `style.css` — témák és elrendezés (nappali/éjszakai változók, mobil media query-k).
  - `app.js` — állapot, perzisztencia, renderelés, ADIF parszer/szerializátor, hívójel-előtag → ország keresés.
  - `favicon.svg` — beágyazott SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (név, téma szín, scope, ikon), hogy az alkalmazás telepíthető legyen PWA-ként mobilon és asztali gépen.
  - `service-worker.js` — cache-first service worker, amely a telepítéskor minden statikus fájlt előgyorsítótáraz, az aktiváláskor töröl régi gyorsítótárakat, és az első látogatás után teljesen offline tartja az alkalmazást. A regisztrálás automatikusan kihagyásra kerül `file://` protokoll esetén, így az `index.html` közvetlen megnyitása a lemezről tiszta marad.
  - `i18n/<lang>.js` — egy fordítási fájl minden támogatott nyelvhez (összesen 28). Mindegyik egy apró IIFE, amely a `window.I18N[<lang>]`-hez egy lapos kulcs→sztring térképet rendel. Az `app.js`-ben lévő `t()` és `applyLanguage()` kezeli a kereséseket (angol fallback-kel) és bejárja a DOM-ot, frissítve minden `[data-i18n*]` elemet.
- Tesztelve a legújabb Chromium, Firefox és Safari verziókkal (asztali + iOS).

## Köszönetnyilvánítás

Készítette: [YL3IM](https://www.qrz.com/db/YL3IM).

Az ország zászlók Unicode regional indicator szekvenciákra támaszkodnak. Helyesen renderelődnek macOS-en, iOS-en, Linuxon (zászló-támogató emoji betűtípussal) és Androidon. A Windows nem tartalmaz rendszer zászló betűtípust, ezért a zászló emojik ott betű párokként jelenhetnek meg.
