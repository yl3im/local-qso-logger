# Local QSO Logger

## Čtěte ve svém jazyce

🇺🇸 [English](README.md) · 🇨🇿 Čeština · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

QSO deník pro radioamatéry respektující soukromí, který běží zcela ve vašem prohlížeči. Bez účtu, bez serveru, bez sledování, bez analytiky — vaše deníky jsou uloženy pouze v `localStorage` prohlížeče a nikdy neopustí vaše zařízení.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Web projektu: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger na iPadu](media/iPad.png)

## Obsah

- [Čtěte ve svém jazyce](#čtěte-ve-svém-jazyce)
- [Funkce](#funkce)
- [Začínáme](#začínáme)
- [Instalace jako PWA na mobilu](#instalace-jako-pwa-na-mobilu)
  - [iOS (pouze Safari)](#ios-pouze-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Deníky](#deníky)
- [QSO](#qso)
- [Import a export ADIF](#import-a-export-adif)
- [Soukromí a data](#soukromí-a-data)
- [Jazyk rozhraní](#jazyk-rozhraní)
- [Motivy](#motivy)
- [Technické poznámky](#technické-poznámky)
- [Poděkování](#poděkování)

## Funkce

- Více deníků, každý s vlastním seznamem QSO.
- Akce s deníkem: vytvořit, přejmenovat, smazat, importovat z ADIF, exportovat do ADIF (`.adi`).
- Pole QSO: volací značka, datum UTC, čas UTC, pásmo, druh provozu, RST odeslaný, RST přijatý.
- Úprava a mazání libovolného QSO (s potvrzením při mazání).
- Rozumná výchozí nastavení: dnešní datum/čas UTC předvyplněn, výchozí RST podle druhu provozu (59 pro hlasové módy, 599 pro CW/digital), pásmo a druh provozu zůstávají mezi po sobě jdoucími QSO.
- Živý indikátor duplicitní volací značky (informativní — duplikáty jsou povoleny).
- Sloupec s vlajkou země odvozenou z prefixu volací značky (pokrývá ≥99 % běžných radioamatérských prefixů, včetně portable značek jako `9A/M0NCG`).
- Zobrazení data v tabulce QSO podle locale; ISO úložiště a ADIF výstup zůstávají nezměněny.
- Denní/noční motivy (denní výchozí; přepínač je v hlavičce).
- Responzivní rozvržení vhodné pro mobil s dotykově přívětivými tlačítky.
- Funguje zcela offline — žádné síťové požadavky.
- Instalovatelné jako PWA (Přidat na plochu / Instalovat aplikaci) při hostování přes HTTPS.
- Rozhraní k dispozici ve **28 jazycích** (angličtina plus 22 latinkových, 5 cyrilských a řečtina); volič s vlajkami v hlavičce.

## Začínáme

Jednoduše otevřete `index.html` v moderním prohlížeči. Žádný build, žádná instalace, žádný server.

Pro hostování umístěte statické soubory (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` a adresář `i18n/` s 28 překladovými soubory) na libovolný statický hosting (GitHub Pages, Netlify, váš vlastní webový server). Funguje to i přes `file://` — registrace service workeru je automaticky vynechána u protokolu `file:`, takže přímé otevření `index.html` z disku funguje čistě.

Při poskytování přes HTTPS se aplikace stává instalovatelnou jako PWA (přes nabídku prohlížeče *Instalovat aplikaci* / *Přidat na plochu*) a po prvním načtení funguje offline díky cache-first service workeru, který přednahrává každý statický soubor (rozhraní + všechny překlady).

Při první návštěvě se automaticky vytvoří výchozí deník, takže můžete ihned začít zaznamenávat.

## Instalace jako PWA na mobilu

Když je aplikace poskytována přes HTTPS (např. GitHub Pages), můžete ji nainstalovat na domovskou obrazovku telefonu, aby běžela na celé obrazovce bez prohlížečového rámu. Po prvním spuštění service worker uloží vše do mezipaměti, takže následující spuštění fungují zcela offline.

### iOS (pouze Safari)

Na iOS může PWA instalovat pouze Safari — třetí prohlížeče ne.

1. Otevřete stránku v **Safari**.
2. Klepněte na tlačítko **Sdílet**.
3. Vyberte **Přidat na plochu**, poté **Přidat**.

Návod:

![iOS instalační návod](media/iOS_add_to_home_screen.gif)

Zdroj ve vyšší kvalitě: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otevřete stránku ve svém prohlížeči. Může se automaticky zobrazit výzva *Instalovat aplikaci*.
2. Jinak otevřete **⋮ menu** → **Instalovat aplikaci** (nebo **Přidat na plochu** ve starších verzích).

Návod:

![Android instalační návod](media/Android_add_to_home_screen.gif)

Zdroj ve vyšší kvalitě: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Deníky

- **Vytvořit:** zadejte název v poli *Název deníku* a odešlete. Pokud necháte název prázdný, výchozí je `Log YYYY-MM-DD HH:MM UTC`.
- **Přepnout:** klikněte na libovolný deník v postranním panelu.
- **Přejmenovat:** klikněte na *Přejmenovat* v hlavičce deníku. Enter uloží, Escape zruší.
- **Smazat:** klikněte na *Smazat deník*. Budete vyzváni k potvrzení. Pokud smažete poslední deník, automaticky se vytvoří nový.

## QSO

- Vyplňte formulář a stiskněte **Zapsat QSO**.
- Volací značka se při psaní automaticky převádí na velká písmena.
- Datum a čas se předvyplňují na *teď* v UTC a po každém zapsaném QSO se opět nastaví; můžete však zadat libovolnou hodnotu.
- Pásmo a druh provozu zůstávají mezi QSO ve stejné session, takže je nemusíte vybírat pro každé spojení znovu.
- RST odeslaný/přijatý při ponechání prázdné spadnou na **59** pro hlasové módy (SSB/FM/AM/DIGITALVOICE) a na **599** pro CW a digitální módy (CW/FT8/FT4/RTTY/PSK31/JT65).
- Pod polem volací značky se zobrazí chip *Duplikát v tomto deníku*, pokud volací značka v aktuálním deníku již existuje. Duplikáty *nejsou* blokovány.
- **Upravit QSO** pomocí tlačítka *Upravit* v řádku. Formulář se přepne do režimu *Aktualizovat QSO*, řádek se zvýrazní a objeví se tlačítko *Zrušit*. Přepnutí deníku nebo smazání deníku úpravu automaticky zruší.
- **Smazat QSO** pomocí tlačítka *Smazat* v řádku (požádá o potvrzení).

## Import a export ADIF

- **Export**: klikněte na *Exportovat .adi* v hlavičce deníku. Stáhne se soubor s `ADIF_VER 3.1.4` a `PROGRAMID local-qso` v hlavičce. Každý záznam mapuje `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klikněte na *Importovat soubor .adi* pod formulářem pro vytvoření deníku a vyberte soubor `.adi` / `.adif`. Vytvoří se nový deník s názvem `Importováno YYYY-MM-DD HH:MM UTC`. Import nikdy nesloučí do existujícího deníku.
- Délka pole se interpretuje jako počet znaků, což funguje pro ASCII ADIF (všechny standardní QSO pole). Vícebajtové znaky v nepodstatných textových polích mohou parsovat divně.

## Soukromí a data

- Všechna data jsou uložena v `localStorage` prohlížeče pod klíčem `local-qso:v1`.
- Nic se nikam nepřenáší. Žádný backend, žádná API volání, žádná telemetrie, žádná analytika.
- Vymazání dat prohlížeče, použití anonymního/soukromého režimu nebo použití jiného prohlížeče/zařízení znamená prázdný deník — pro zálohu použijte *Exportovat .adi*.

## Jazyk rozhraní

Volič jazyka v hlavičce pokrývá **28 jazyků**. Vyberte jeden a zbytek rozhraní se okamžitě překreslí; vaše volba je uložena spolu s deníky a respektována při další návštěvě. Výchozí je angličtina.

Dostupné jazyky (vlajka + vlastní název; abecedně v rámci každého písma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Univerzální technické popisky zůstávají ve své kanonické podobě ve všech jazycích: názvy pásem (`20m`, `70cm`, …), kódy ADIF módů (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` a ISO kódy zemí.

Chybí řetězec ve vašem jazyce? Každý jazyk je jeden malý soubor v adresáři [`i18n/`](i18n/) — zkopírujte `i18n/en.js`, přeložte hodnoty, uložte jako `i18n/<kód>.js`, pak přidejte tag `<script>` plus volbu `<select>` do `index.html` a kód do `SUPPORTED_LANGS` v `app.js`.

## Motivy

Přepínač motivu v hlavičce přepíná mezi denním (výchozí) a nočním. Volba je uložena spolu s deníky a respektována při další návštěvě. Nativní výběry data/času sledují motiv přes `color-scheme`.

## Technické poznámky

- Single-page aplikace, čisté HTML + CSS + JavaScript. Žádné frameworky, žádný build, žádné závislosti.
- Zdrojové soubory:
  - `index.html` — markup a meta tagy.
  - `style.css` — motivy a rozvržení (denní/noční proměnné, mobile media queries).
  - `app.js` — stav, persistence, rendering, ADIF parser/serializer, vyhledávání prefixu volací značky → země.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (název, barva tématu, scope, ikona), aby aplikace byla instalovatelná jako PWA na mobilu i desktopu.
  - `service-worker.js` — cache-first service worker, který při instalaci přednahrává každý statický soubor, při aktivaci ruší staré cache a po prvním načtení udržuje aplikaci plně offline. Registrace je automaticky vynechána u protokolu `file://`, takže přímé otevření `index.html` z disku zůstává čisté.
  - `i18n/<lang>.js` — jeden překladový soubor pro každý podporovaný jazyk (celkem 28). Každý je drobné IIFE, které přiřadí `window.I18N[<lang>]` plochou mapu klíč→řetězec. `t()` a `applyLanguage()` v `app.js` zajišťují vyhledávání (s anglickým fallbackem) a procházení DOM s aktualizací každého prvku `[data-i18n*]`.
- Testováno v aktuálních Chromium, Firefox a Safari (desktop + iOS).

## Poděkování

Vytvořil [YL3IM](https://www.qrz.com/db/YL3IM).

Vlajky zemí se opírají o Unicode regional indicator sekvence. Vykreslují se správně na macOS, iOS, Linuxu (s emoji fontem podporujícím vlajky) a Androidu. Windows neobsahuje systémový font vlajek, takže emojis vlajek se tam mohou zobrazovat jako dvojice písmen.
