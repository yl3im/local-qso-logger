# Local QSO Logger

## Loe oma keeles

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 Eesti · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privaatsust austav amatöörraadiosageduste QSO-logger, mis töötab täielikult sinu brauseris. Ei kontot, ei serverit, ei jälgimist, ei analüütikat — sinu logiraamatud elavad ainult sinu brauseri `localStorage`'is ega lahku kunagi sinu seadmest.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Projekti veebisait: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger iPadil töötamas](media/iPad.png)

## Sisukord

- [Loe oma keeles](#loe-oma-keeles)
- [Funktsioonid](#funktsioonid)
- [Alustamine](#alustamine)
- [Installimine PWA-na mobiiliseadmesse](#installimine-pwa-na-mobiiliseadmesse)
  - [iOS (ainult Safari)](#ios-ainult-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logiraamatud](#logiraamatud)
- [QSOd](#qsod)
- [ADIF-import ja -eksport](#adif-import-ja--eksport)
- [Privaatsus ja andmed](#privaatsus-ja-andmed)
- [Liidese keel](#liidese-keel)
- [Teemad](#teemad)
- [Tehnilised märkused](#tehnilised-märkused)
- [Tänuavaldused](#tänuavaldused)

## Funktsioonid

- Mitu logiraamatut; igaühel oma QSO-de loend.
- Logiraamatu toimingud: loomine, ümbernimetamine, kustutamine, ADIF-import, ADIF-eksport (`.adi`).
- QSO-vorm jaotatud kolmeks plokiks: **Jaama andmed** (jaama kutsung, operaatori kutsung, oma ruudustik), mis jäävad QSO-de vahel kleepuvaks; **Töörežiim** (levirežiim, satelliit, režiim, satelliidi režiim, sagedusala, RX-sagedusala) satelliidiväljadega, mis kuvatakse ainult siis, kui levirežiim on *Satelliit*; ja **QSO andmed** (kontakteeritud kutsung, kontakteeritud ruudustik, UTC kuupäev/kellaaeg muutmisel, kommentaar, RST saadetud, RST vastu võetud).
- Täielik ADIF `MODE` → `SUBMODE` taksonoomia režiimi rippmenüüs — vali peamine režiim (`SSB`, `MFSK`, …) või mine otse konkreetsele alamrežiimile (`USB`, `FT4`, …); rakendus salvestab mõlemad väljad vastavalt ADIFile ja tabel näitab konkreetset alamrežiimi, kui see on olemas.
- Täielik ADIF-levirežiimide loetelu (SAT, RPT, EME, ES, MS, Aurora jne) rippmenüüna.
- Täielik AMSAT-satelliidikataloogi (~110 satelliiti) ja kahetasemeline **Satelliidi režiimi** rippmenüü: eelistatud kahetähelised uplink/downlink-koodid üleval (LU, LV, SX, UU, UV, VA, VU, VV) ja vanemad ühetähelised tähistused (A/B/J/K/L/R/S/T/U/V/W/X) grupeeritud *aegununa* all. Satelliidi režiimi valimine kohandab automaatselt uplink `BAND` ja downlink `RX band`.
- Mis tahes QSO redigeerimine ja kustutamine (kustutamisel kinnitusega).
- Mõistlikud vaikeväärtused: UTC kuupäev/kellaaeg eeltäidetud *praeguse* ajaga, režiimitundlik RST vaikeväärtus (59 häälrežiimidele, 599 CW/digitaalsele), kleepuvad jaama andmed + sagedusala + režiim + levirežiim järjestikustel QSO-del (ainult kontaktipõhised väljad — kutsung, nende ruudustik, kommentaar, RST — tühjendatakse pärast iga *QSO logimine*).
- Reaalajas duplikaatkutsungu indikaator (informatiivne — duplikaadid on lubatud).
- Riigi lipu veerg, mis on tuletatud kutsungu prefiksist (katab ≥99 % tavalistest amatöörraadiose prefiksitest, sealhulgas kandekohtade kutsungid nagu `9A/M0NCG`).
- Lokaliteeditoeline kuupäevakuvamine QSO tabelis; ISO-salvestus ja ADIF-väljund jäävad muutumatuks.
- Liides saadaval **28 keeles** (inglise keel pluss 22 ladina kirjas, 5 kirillitsas ja kreeka keel); lipuemoji-selektor päises.
- Päeva-/ööteem (päev on vaikimisi; lüliti on päises).
- Mobiilisõbralik reageeriv paigutus puutesuuruste nuppudega.
- Töötab täielikult võrguühenduseta — ei ole ühtegi võrgupäringut.
- Installitav PWA-na (Lisa avakuvale / Installi rakendus) HTTPS-i kaudu hostimisel.

## Alustamine

Ava lihtsalt `index.html` kaasaegses brauseris. Ei ehitusetappi, ei installimist, ei serverit.

Kui soovid seda hostida, pane staatilised failid (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ja kataloog `i18n/` 28 tõlkefailiga) mis tahes staatilisele hostile (GitHub Pages, Netlify, oma veebiserver). Töötab ka `file://` kaudu — teenusttöötaja registreerimine jäetakse `file:` protokollil automaatselt vahele, nii et `index.html` otse kettalt avamine toimib kenasti.

HTTPS-i kaudu hostimisel muutub rakendus installitavaks PWA-na (brauseri menüü *Installi rakendus* / *Lisa avakuvale*) ja töötab esimese külastuse järel võrguühenduseta tänu vahemälupõhisele teenusttöötajale, mis eellaadib kõik staatilised failid (UI + kõik tõlked).

Esimesel külastusel luuakse automaatselt vaikimisi logiraamat, nii et saad koheselt logimist alustada.

## Installimine PWA-na mobiiliseadmesse

Kui rakendust hostitakse HTTPS-i kaudu (nt GitHub Pages), saad selle installida oma telefoni avakuvale, kus see töötab täisekraanil ilma brauseri kroomita. Pärast esimest käivitamist salvestab teenusttöötaja kõik vahemällu, nii et järgmised käivitamised töötavad täielikult võrguühenduseta.

### iOS (ainult Safari)

iOS-is saavad PWA-sid installida ainult Safari — kolmanda osapoole brauserid ei saa.

1. Ava sait **Safaris**.
2. Puuduta nuppu **Jaga**.
3. Vali **Lisa avakuvale**, seejärel **Lisa**.

Juhend:

![iOS-i installimisjuhend](media/iOS_add_to_home_screen.gif)

Kõrgema kvaliteediga allikas: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Ava sait brauseris. Kuvatakse automaatselt *Installi rakendus* viip.
2. Vastasel juhul ava **⋮ menüü** → **Installi rakendus** (või **Lisa avakuvale** vanemas versioonis).

Juhend:

![Androidi installimisjuhend](media/Android_add_to_home_screen.gif)

Kõrgema kvaliteediga allikas: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logiraamatud

- **Loo:** sisesta nimi väljale *Logi nimi* ja esita. Kui jätad nime tühjaks, kasutatakse vaikimisi `Log YYYY-MM-DD HH:MM UTC`.
- **Vaheta:** klõpsa külgribal mõnda logiraamatut.
- **Nimeta ümber:** klõpsa logiraamatu päises *Nimeta ümber*. Salvesta Enteriga, tühista Escape'iga.
- **Kustuta:** klõpsa *Kustuta logi*. Sind palutakse kinnitada. Kui kustutad viimase logiraamatu, luuakse automaatselt uus.

## QSOd

- Täida vorm ja vajuta **QSO logimine**.
- Vorm on korraldatud kolmeks plokiks:
  - **Jaama andmed** — *Jaama kutsung* (sinu saatekutsung, ADIF `STATION_CALLSIGN`), *Operaator* (üksiku operaatori kutsung — erineb *Jaama kutsungist*, kui klubi jaamas on külalisoperaator mikrofoni juures; ADIF `OPERATOR`) ja *Minu ruudustik* (ADIF `MY_GRIDSQUARE`). Need jäävad samas seansis QSO-de vahel kleepuvaks — sea need korra ja need kanduvad üle.
  - **Töörežiim** — *Levirežiim*, *Režiim*, *Sagedusala*, pluss satelliidi-ainult väljad *Satelliit* / *Satelliidi režiim* / *RX-sagedusala*, kui levirežiim on *Satelliit*. Sagedusala, režiim ja levirežiim on kleepuvad nagu jaama andmed.
  - **QSO andmed** — kontaktipõhised väljad: *Kutsung*, *Ruudustik* (teise jaama Maidenhead), *Kommentaar* (ADIF `COMMENT`), *RST saadetud*, *RST vastu võetud*. Olemasoleva QSO muutmisel ilmuvad sellesse plokki ka *Kuupäev (UTC)* ja *Kellaaeg (UTC)*. Need väljad tühjendatakse pärast iga *QSO logimine*.
- Kõiki kutsungeid (kontakteeritud, jaam, operaator) suurendatakse automaatselt kirjutamisel; mõlemad ruudustikeväljad teevad sama.
- Kuupäev ja kellaaeg eeltäidetakse esitamisel *praeguse* UTC ajaga; muutmisel saad sisestada mis tahes väärtuse.
- RST saadetud / RST vastu võetud, kui need on tühjaks jäetud, on vaikimisi **59** häälrežiimidele (SSB/FM/DIGITALVOICE) ja **599** CW ja digitaalsetele režiimidele (CW/FT8/FT4/RTTY/PSK31/JT65). Vaikeväärtus järgib ema-MODE'i, nii et konkreetse alamrežiimi nagu *USB* või *FT4* valimine annab siiski õige vaikeväärtuse.
- *Duplikaat selles logis* kiip ilmub kutsunguvälja alla, kui kutsung juba praeguses logiraamatus eksisteerib. Duplikaadid *ei ole* blokeeritud.
- **Levirežiim** — valikuline ADIF-levirežiimide rippmenüü (SAT, RPT, EME, F2, Es, MS, LOS jne). Tavaliste maapealse HF-QSO-de jaoks jäta tühjaks.
- **Satelliidi QSOd** — levirežiimi *Satelliit* valimine paljastab kolm satelliidi-ainult välja: **Satelliit** (rippmenüü ~110 AMSAT-registreeritud satelliidiga), **Satelliidi režiim** (AMSAT-tähtedega tähistused, grupeeritud *moodsa* kahetähelise uplink/downlink koodidena üleval ja *aegunud* ühetäheliste koodidena all) ja **RX-sagedusala** (downlink-sagedusala). Satelliit, satelliidi režiim ja RX-sagedusala on kohustuslikud — brauser keeldub ilma nendeta esitamast. **Satelliidi režiimi** valimine täidab automaatselt peamise **Sagedusala** uplink-sagedusalaga ja **RX-sagedusala** downlink-sagedusalaga (nt režiim J → 2m uplink, 70cm downlink). *Tagasi* satelliidile lülitumine teisest levirežiimist lähtestab satelliidi režiimi, et saaksid valida uue. Mittesatelliidi QSO-del ei ole kunagi satelliidi-ainult välju; olemasoleva QSO lülitamine satelliidilt teisele levirežiimile eemaldab need puhtalt. **Ruudustik** ja **Minu ruudustik** on üldväljad (kasulikud ka VHF/UHF-ruudustiku võistlusteks) ja jäävad kõigi QSO-de jaoks nähtavaks.
- **Muuda QSOd** read *Muuda* nupuga. Vorm lülitub *Uuenda QSOd* režiimile, rida tõstetakse esile ja ilmub nupp *Tühista*. Logiraamatute vaheldamine või logi kustutamine tühistab muutmise automaatselt.
- **Kustuta QSO** real *Kustuta* nupuga (küsib kinnitust).

## ADIF-import ja -eksport

- **Eksport**: klõpsa logiraamatu päises *Ekspordi .adi*. Laaditakse alla fail, mis vastab **ADIF 3.1.7**. Päis deklareerib `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` ja `CREATED_TIMESTAMP` (UTC). QSO-väljad (kui mitte tühjad): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — millele järgneb iga impordil säilitatud lisa-ADIF-väli (vt allpool).
- **Import**: klõpsa logiraamatu loomise vormi all *Impordi .adi fail* ja vali `.adi` / `.adif` fail. Sellest luuakse uus logiraamat, nimega `Imported YYYY-MM-DD HH:MM UTC`. Import ei ühine kunagi olemasoleva logiraamatuga.
- **Kadudeta läbilask**: importimisel säilitatakse iga ADIF-väli, mida rakendus oma liideses ei modelleeri (nt `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` väljad) QSO-l ja saadetakse järgmisel ekspordil sõna-sõnalt uuesti välja. Seega säilitab ise imporditud faili eksportimine kõike.
- Välja pikkust käsitletakse UTF-8 baitide arvuna, nagu spetsifikatsioon nõuab, nii et mitmebaidine tekst (nt aktsendimärgiga tähemärgid `COMMENT`is) parsitakse õigesti.

## Privaatsus ja andmed

- Kõik andmed salvestatakse sinu brauseri `localStorage`'i võtme `local-qso:v1` all.
- Midagi ei edastata kuhugi. Puudub backend, API-kutse, telemeetria ega analüütika.
- Brauseri saidi andmete kustutamine, privaatse/inkognito režiimi kasutamine või teise brauseri/seadme kasutamine tähendab uut tühja logiraamatut — kasuta varundamiseks *Ekspordi .adi*.

## Liidese keel

Päises olev keelevalija katab **28 keelt**. Vali üks ja ülejäänud liides renderdatakse kohe uuesti; sinu valik salvestatakse koos logidega ja seda austatakse järgmisel külastusel. Vaikimisi on inglise keel.

Saadaval olevad keeled (lipuemoji + emakeelne nimi; tähestiku järjekorras iga kirjasüsteemi piires):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universaalsed tehnilised sildid jäävad kõigis keeltes oma kanoonilisse vormi: sagedusalade nimed (`20m`, `70cm`, …), ADIF-režiimikoodid (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ja ISO riigikoodid.

Kas puudub string sinu keeles? Iga keel on üks väike fail [`i18n/`](i18n/) all — kopeeri `i18n/en.js`, tõlgi väärtused, salvesta failina `i18n/<code>.js`, seejärel lisa `<script>` silt pluss `<select>` valik `index.html`-is ja kood `SUPPORTED_LANGS`-is `app.js`-is.

## Teemad

Päises olev teemavahetaja lülitab päeva (vaikimisi) ja öö vahel. Eelistus salvestatakse koos logidega ja seda austatakse järgmisel külastusel. Natiivsed kuupäeva-/kellaaegade valijad järgivad teemat `color-scheme` kaudu.

## Tehnilised märkused

- Ühe lehe rakendus, vanilla HTML + CSS + JavaScript. Ei raamistikke, ei ehitusetappi, ei sõltuvusi.
- Lähtekoodifailid:
  - `index.html` — märgistus ja meta-sildid.
  - `style.css` — teemad ja paigutus (päeva/öö muutujad, mobiili meediapäringud).
  - `app.js` — olek, püsimine, renderdamine, ADIF-parser/seerializeerija, kutsunguprefiksi → riigi otsing.
  - `favicon.svg` — sissehitletud SVG-favicon.
  - `manifest.webmanifest` — veebirakenduse manifest (nimi, teemavärv, ulatus, ikoon), et rakendus oleks installitav PWA-na mobiilil ja töölaual.
  - `service-worker.js` — vahemälupõhine teenusttöötaja, mis eellaadib kõik staatilised failid installimisel, eemaldab vanad vahemälud aktiveerimisel ja hoiab rakenduse pärast esimest külastust täielikult võrguühenduseta. Registreerimine jäetakse `file://` protokollil automaatselt vahele, nii et `index.html` otse kettalt avamine jääb puhtaks.
  - `i18n/<lang>.js` — üks tõlkefail iga toetatud keele jaoks (kokku 28). Igaüks on väike IIFE, mis määrab `window.I18N[<lang>]` lame võti→string kaardistus. `t()` ja `applyLanguage()` `app.js`-is käsitlevad otsinguid (ingliskeelse varukaitsega) ja läbivad DOM-i, uuendades iga `[data-i18n*]` elementi.
- Testitud hiljutistel Chromiumil, Firefoxil ja Safaril (töölaud + iOS).

## Tänuavaldused

Loonud [YL3IM](https://www.qrz.com/db/YL3IM).

Tänu [A65BR](https://www.qrz.com/db/A65BR) Olegile hindamatute vihjete eest, mis muutsid satelliidi QSO osa tegelikult kasutatavaks — moodsad kahetähelised satelliidirežiimi tähistused, AMSAT-kataloog ja uplink/downlink automaatne kohandamine pärinevad kõik tema tagasisidest.

Riikide lipud põhinevad Unicode'i regionaalsete indikaatorite järjestustel. Need kuvatakse õigesti macOS-il, iOS-il, Linuxil (lipuvõimelise emojifondiga) ja Androidil. Windows ei sisalda süsteemi lipufonti, nii et lipuemojid võivad seal kuvatuda tähepaarina.
