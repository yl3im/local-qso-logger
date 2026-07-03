# Local QSO Logger

## Číst ve svém jazyce

🇺🇸 [English](README.md) · 🇨🇿 Čeština · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Radioamatérský QSO logger respektující soukromí, který běží celý ve vašem prohlížeči. Žádný účet, žádný server, žádné sledování, žádná analytika — vaše zápisníky žijí pouze v `localStorage` vašeho prohlížeče a nikdy neopustí vaše zařízení.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Webové stránky projektu: [qso.lv](https://qso.lv).

![Local QSO Logger běžící na iPadu](media/iPad.png)

## Obsah

- [Číst ve svém jazyce](#číst-ve-svém-jazyce)
- [Funkce](#funkce)
- [Začínáme](#začínáme)
- [Instalace jako PWA na mobilním zařízení](#instalace-jako-pwa-na-mobilním-zařízení)
  - [iOS (pouze Safari)](#ios-pouze-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Zápisníky](#zápisníky)
- [QSO](#qso)
- [Import a export ADIF](#import-a-export-adif)
- [Soukromí a data](#soukromí-a-data)
- [Jazyk rozhraní](#jazyk-rozhraní)
- [Témata](#témata)
- [Technické poznámky](#technické-poznámky)
- [Poděkování](#poděkování)

## Funkce

- Více zápisníků; každý s vlastním seznamem QSO.
- Akce se zápisníkem: vytvoření, přejmenování, smazání, import z ADIF, export do ADIF (`.adi`).
- Formulář QSO rozdělený do tří bloků: **Data stanice** (volací značka stanice, volací značka operátora, vlastní čtverec), který zůstává přilepený přes jednotlivá QSO; **Provozní mód** (mód šíření, satelit, mód, satelitní mód, pásmo, přijímací pásmo) se satelitními poli zobrazenými pouze tehdy, když je propagační mód *Satelit*; a **Data QSO** (volaná značka, čtverec protistanice, datum/čas UTC při editaci, komentář, RST odeslané, RST přijaté).
- Kompletní taxonomie ADIF `MODE` → `SUBMODE` v rozevíracím seznamu módů — vyberte nadřazený mód (`SSB`, `MFSK`, …) nebo přejděte přímo na konkrétní submód (`USB`, `FT4`, …); aplikace ukládá obě pole podle ADIF a tabulka zobrazuje konkrétní submód, pokud existuje.
- Kompletní výčet propagačních módů ADIF (SAT, RPT, EME, ES, MS, Aurora atd.) jako rozevírací seznam.
- Kompletní katalog satelitů AMSAT (~110 objektů) a dvouúrovňový výběr **Satelitního módu**: preferované dvoupísmenné kódy uplink/downlink nahoře (LU, LV, SX, UU, UV, VA, VU, VV) a starší jednopísmenná označení (A/B/J/K/L/R/S/T/U/V/W/X) seskupená jako *zastaralé* níže. Výběr satelitního módu automaticky upraví uplink `BAND` a downlink `RX band`.
- Úprava a smazání libovolného QSO (s potvrzením při mazání).
- Rozumné výchozí hodnoty: datum/čas UTC předvyplněný na *nyní*, výchozí RST podle módu (59 pro hlasové módy, 599 pro CW/digitální), přilepená data stanice + pásmo + mód + propagační mód přes po sobě jdoucí QSO (pouze pole pro daný kontakt — značka, jejich čtverec, komentář, RST — se po každém *Zaznamenat QSO* vymažou).
- Živý indikátor duplicitní volací značky (informační — duplikáty jsou povoleny).
- Sloupec vlajky země odvozený z prefixu volací značky (pokrývá ≥99 % běžných radioamatérských prefixů, včetně přenosných jako `9A/M0NCG`).
- Zobrazení data v tabulce QSO dle lokálního nastavení; úložiště ISO a výstup ADIF zůstávají nezměněny.
- Rozhraní dostupné v **28 jazycích** (angličtina plus 22 jazyků latinkou, 5 jazyků azbukou a řečtina); volič s vlajkovými emoji v záhlaví.
- Denní / noční témata (denní je výchozí; přepínač je v záhlaví).
- Responzivní rozvržení přizpůsobené pro mobily s tlačítky vhodnými pro dotyk.
- Funguje plně offline — žádné síťové požadavky v žádném okamžiku.
- Instalovatelné jako PWA (Přidat na plochu / Instalovat aplikaci) při hostování přes HTTPS.

## Začínáme

Stačí otevřít `index.html` v moderním prohlížeči. Žádný krok sestavení, žádná instalace, žádný server.

Pokud chcete aplikaci hostovat, zkopírujte statické soubory (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` a adresář `i18n/` s 28 překladovými soubory) na libovolný statický hostitel (GitHub Pages, Netlify, váš vlastní webový server). Funguje i přes `file://` — registrace service workeru se na protokolu `file:` automaticky přeskočí, takže přímé otevření `index.html` z disku funguje čistě.

Při hostování přes HTTPS se aplikace stane instalovatelnou jako PWA (nabídka prohlížeče *Instalovat aplikaci* / *Přidat na plochu*) a po první návštěvě funguje offline díky service workeru s předností z mezipaměti, který předukládá každý statický soubor (UI + všechny překlady).

Při první návštěvě se automaticky vytvoří výchozí zápisník, takže můžete okamžitě začít zaznamenávat.

## Instalace jako PWA na mobilním zařízení

Když je aplikace hostována přes HTTPS (např. GitHub Pages), můžete ji nainstalovat na domovskou obrazovku telefonu, kde běží na celou obrazovku bez chromu prohlížeče. Po prvním spuštění service worker uloží vše do mezipaměti, takže následná spuštění fungují plně offline.

### iOS (pouze Safari)

Na iOS mohou instalovat PWA pouze Safari — prohlížeče třetích stran nemohou.

1. Otevřete stránku v **Safari**.
2. Klepněte na tlačítko **Sdílet**.
3. Vyberte **Přidat na plochu** a potom **Přidat**.

Průvodce:

![Průvodce instalací na iOS](media/iOS_add_to_home_screen.gif)

Zdroj ve vyšší kvalitě: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otevřete stránku v prohlížeči. Výzva k *instalaci aplikace* se může zobrazit automaticky.
2. Pokud ne, otevřete **nabídku ⋮** → **Instalovat aplikaci** (nebo **Přidat na plochu** ve starších verzích).

Průvodce:

![Průvodce instalací na Androidu](media/Android_add_to_home_screen.gif)

Zdroj ve vyšší kvalitě: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Zápisníky

- **Vytvořit:** zadejte název do pole *Název záznamu* a odešlete. Pokud název ponecháte prázdný, výchozí hodnota bude `Log YYYY-MM-DD HH:MM UTC`.
- **Přepnout:** klikněte na libovolný zápisník v postranním panelu.
- **Přejmenovat:** klikněte na *Přejmenovat* v záhlaví zápisníku. Stiskněte Enter pro uložení, Escape pro zrušení.
- **Smazat:** klikněte na *Smazat zápisník*. Budete požádáni o potvrzení. Pokud smažete poslední zápisník, automaticky se vytvoří nový.

## QSO

- Vyplňte formulář a stiskněte **Zaznamenat QSO**.
- Formulář je uspořádán do tří bloků:
  - **Data stanice** — *Volací značka stanice* (vaše vysílací volací značka, ADIF `STATION_CALLSIGN`), *Operátor* (volací značka jednotlivého operátora — odlišná od *Volací značky stanice*, pokud je na mikrofonu klubové stanice hostující operátor; ADIF `OPERATOR`) a *Můj čtverec* (ADIF `MY_GRIDSQUARE`). Tato pole zůstávají přilepena přes QSO ve stejné relaci — nastavte je jednou a přenesou se.
  - **Provozní mód** — *Mód šíření*, *Mód*, *Pásmo*, plus satelitní pole *Satelit* / *Satelitní mód* / *Přijímací pásmo* tehdy, když je propagační mód *Satelit*. Pásmo, mód a propagační mód jsou přilepeny stejně jako data stanice.
  - **Data QSO** — pole pro daný kontakt: *Volací značka*, *Čtverec* (Maidenhův čtverec protistanice), *Komentář* (ADIF `COMMENT`), *RST odeslané*, *RST přijaté*. Při úpravě existujícího QSO se v tomto bloku zobrazí také *Datum (UTC)* a *Čas (UTC)*. Tato pole se po každém *Zaznamenat QSO* vymažou.
- Všechny volací značky (kontaktovaná, stanice, operátor) se automaticky převádějí na velká písmena při psaní; obě pole čtverce fungují stejně.
- Datum a čas se při odeslání předvyplní na *nyní* v UTC; při editaci můžete zadat libovolnou hodnotu.
- RST odeslané / RST přijaté, pokud jsou ponechána prázdná, výchozí hodnota je **59** pro hlasové módy (SSB/FM/DIGITALVOICE) a **599** pro CW a digitální módy (CW/FT8/FT4/RTTY/PSK31/JT65). Výchozí hodnota sleduje nadřazený MODE, takže výběr konkrétního submódu jako *USB* nebo *FT4* stále přinese správnou výchozí hodnotu.
- Čip *Duplikát v tomto záznamu* se zobrazí pod polem volací značky, pokud značka již v aktuálním zápisníku existuje. Duplikáty *nejsou* blokovány.
- **Mód šíření** — volitelný rozevírací seznam propagačních módů ADIF (SAT, RPT, EME, F2, Es, MS, LOS atd.). Pro normální pozemní HF QSO nechte prázdné.
- **Satelitní QSO** — výběr propagačního módu *Satelit* odhalí tři pole pouze pro satelit: **Satelit** (rozevírací seznam ~110 objektů registrovaných v AMSAT), **Satelitní mód** (označení AMSAT, seskupená jako *moderní* dvoupísmenné kódy uplink/downlink nahoře a *zastaralé* jednopísmenné kódy níže) a **Přijímací pásmo** (downlink pásmo). Satelit, satelitní mód a přijímací pásmo jsou povinné — prohlížeč odmítne odeslání bez nich. Výběrem **Satelitního módu** se automaticky vyplní hlavní **Pásmo** uplink pásmem a **Přijímací pásmo** downlink pásmem (např. mód J → uplink 2m, downlink 70cm). Přepnutím *zpět* na satelit z jiného propagačního módu se satelitní mód resetuje, abyste si vybrali nový. Nesatelitní QSO nikdy nesou satelitní pole; přepnutí existujícího QSO ze satelitu na jiný mód šíření je vyčistí. **Čtverec** a **Můj čtverec** jsou obecná pole (také užitečná pro závody VHF/UHF čtverců) a zůstávají viditelná pro každé QSO.
- **Úprava QSO** tlačítkem *Upravit* na řádku. Formulář se přepne do režimu *Aktualizovat QSO*, řádek se zvýrazní a zobrazí se tlačítko *Zrušit*. Přepnutí zápisníků nebo smazání záznamu úpravu automaticky zruší.
- **Smazání QSO** tlačítkem *Smazat* na řádku (vyžaduje potvrzení).

## Import a export ADIF

- **Export**: klikněte na *Exportovat .adi* v záhlaví zápisníku. Stáhne se soubor odpovídající **ADIF 3.1.7**. Záhlaví deklaruje `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` a `CREATED_TIMESTAMP` (UTC). Pole QSO emitovaná (pokud nejsou prázdná): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — následováno každým dalším polem ADIF zachovaným při importu (viz níže).
- **Import**: klikněte na *Importovat soubor .adi* pod formulářem pro vytvoření zápisníku a vyberte soubor `.adi` / `.adif`. Z něj se vytvoří nový zápisník pojmenovaný `Imported YYYY-MM-DD HH:MM UTC`. Import nikdy nesloučí s existujícím zápisníkem.
- **Bezeztrátový přenos**: při importu se každé pole ADIF, které aplikace nemodeluje ve svém uživatelském rozhraní (např. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, pole `APP_*`), zachová v QSO a při dalším exportu se znovu emituje doslovně. Export souboru, který byl sám importován, tedy vše zachová.
- Délka pole se považuje za počet bajtů UTF-8, jak vyžaduje specifikace, takže vícebajtový text (např. akcentované znaky v `COMMENT`) se správně parsuje.

## Soukromí a data

- Všechna data jsou uložena v `localStorage` vašeho prohlížeče pod klíčem `local-qso:v1`.
- Nic se nikam nepřenáší. Neexistuje backend, API volání, telemetrie ani analytika.
- Vymazání dat webu v prohlížeči, použití soukromého/anonymního režimu nebo jiného prohlížeče/zařízení znamená nový prázdný zápisník — použijte *Exportovat .adi* pro zálohu.

## Jazyk rozhraní

Volič jazyka v záhlaví pokrývá **28 jazyků**. Vyberte jeden a zbytek rozhraní se okamžitě překreslí; váš výběr se uloží spolu s vašimi záznamy a při příští návštěvě se respektuje. Výchozí je angličtina.

Dostupné jazyky (vlajkové emoji + nativní název; seřazeny abecedně v rámci každého písma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzální technické popisky zůstávají ve své kanonické formě ve všech jazycích: názvy pásem (`20m`, `70cm`, …), kódy módů ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` a kódy zemí ISO.

Chybí vám řetězec ve vašem jazyce? Každý jazyk je jediný malý soubor v [`i18n/`](i18n/) — zkopírujte `i18n/en.js`, přeložte hodnoty, uložte jako `i18n/<code>.js`, pak přidejte `<script>` tag plus možnost do `<select>` v `index.html` a kód do `SUPPORTED_LANGS` v `app.js`.

## Témata

Přepínač tématu v záhlaví přepíná mezi denním (výchozím) a nočním. Předvolba se uloží spolu s vašimi záznamy a při příští návštěvě se respektuje. Nativní výběrač data/času téma sleduje přes `color-scheme`.

## Technické poznámky

- Jednostránková aplikace, vanilla HTML + CSS + JavaScript. Žádné frameworky, žádný krok sestavení, žádné závislosti.
- Zdrojové soubory:
  - `index.html` — markup a meta tagy.
  - `style.css` — témata a rozvržení (denní/noční proměnné, mobilní media queries).
  - `app.js` — stav, persistence, vykreslování, ADIF parser/serializátor, vyhledávání prefix volací značky → země.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (název, barva tématu, rozsah, ikona), aby aplikace byla instalovatelná jako PWA na mobilních zařízeních a počítačích.
  - `service-worker.js` — service worker s předností z mezipaměti, který při instalaci předuloží každý statický soubor, při aktivaci vymaže staré mezipaměti a po první návštěvě udržuje aplikaci plně offline. Registrace se automaticky přeskočí na protokolu `file://`, takže přímé otevření `index.html` z disku zůstane čisté.
  - `i18n/<lang>.js` — jeden překladový soubor pro každý podporovaný jazyk (celkem 28). Každý je malý IIFE, který přiřadí `window.I18N[<lang>]` plochý klíč→řetězec mapa. `t()` a `applyLanguage()` v `app.js` zpracovávají vyhledávání (s anglickým záložním) a procházejí DOM aktualizací každého prvku `[data-i18n*]`.
- Testováno na aktuálním Chromiu, Firefoxu a Safari (desktop + iOS).

## Poděkování

Vytvořil [YL3IM](https://www.qrz.com/db/YL3IM).

Díky [A65BR](https://www.qrz.com/db/A65BR) Olegovi za neocenitelné podněty, které zpřístupnily část satelitních QSO — moderní dvoupísmenná označení satelitního módu, katalog AMSAT a automatické přizpůsobení uplink/downlink vycházejí z jeho zpětné vazby.

Vlajky zemí spoléhají na sekvence regionálních indikátorů Unicode. Správně se zobrazují na macOS, iOS, Linuxu (s fontem emoji schopným vlajek) a Androidu. Windows neobsahuje systémový font pro vlajky, takže vlajkové emoji se tam mohou zobrazovat jako páry písmen.
