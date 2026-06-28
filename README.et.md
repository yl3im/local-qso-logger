# Local QSO Logger

## Loe oma keeles

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 Eesti · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privaatsust austav amatöörraadio QSO-logija, mis töötab täielikult sinu brauseris. Kontot pole vaja, serverit pole, jälgimist pole, analüütikat pole — sinu logiraamatud asuvad ainult brauseri `localStorage` mälus ja ei lahku kunagi sinu seadmest.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Projekti veebileht: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger iPadis](media/iPad.png)

## Sisukord

- [Loe oma keeles](#loe-oma-keeles)
- [Funktsioonid](#funktsioonid)
- [Alustamine](#alustamine)
- [Paigaldamine PWA-na mobiilis](#paigaldamine-pwa-na-mobiilis)
  - [iOS (ainult Safari)](#ios-ainult-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logiraamatud](#logiraamatud)
- [QSO-d](#qso-d)
- [ADIF import ja eksport](#adif-import-ja-eksport)
- [Privaatsus ja andmed](#privaatsus-ja-andmed)
- [Liidese keel](#liidese-keel)
- [Teemad](#teemad)
- [Tehnilised märkused](#tehnilised-märkused)
- [Tunnustused](#tunnustused)

## Funktsioonid

- Mitu logiraamatut, igal oma QSO-de loend.
- Logiraamatu toimingud: loomine, ümbernimetamine, kustutamine, ADIF-i import, ADIF-i eksport (`.adi`).
- QSO väljad: kutsung, UTC kuupäev, UTC aeg, riba, liik, RST saadetud, RST vastu võetud.
- Mis tahes QSO redigeerimine ja kustutamine (kinnitusega kustutamisel).
- Mõistlikud vaikeväärtused: tänane UTC kuupäev/aeg eeltäidetud, liigist sõltuvad RST vaikeväärtused (59 hääle režiimidele, 599 CW/digi režiimidele), riba ja liik jäävad järjestikuste QSO-de vahel kleepuvaks.
- Reaalajas duplikaatkutsungi näidik (informatiivne — duplikaadid on lubatud).
- Riigi lipu veerg, mis tuletatakse kutsungi eesliitest (katab ≥99 % tavalistest amatöörraadio eesliidetest, sealhulgas portatiivsed kutsungid nagu `9A/M0NCG`).
- Lokaaditeadlik kuupäeva kuvamine QSO tabelis; ISO-salvestus ja ADIF-väljund jäävad muutmata.
- Päeva/öö teemad (päev on vaikimisi; lüliti asub päises).
- Mobiilisõbralik tundlik paigutus puudutusele sobivate nuppudega.
- Töötab täielikult võrguta — mitte ühtegi võrgupäringut.
- Paigaldatav PWA-na (Lisa avakuvale / Paigalda rakendus), kui hostitakse HTTPS-i kaudu.
- Liides saadaval **28 keeles** (inglise pluss 22 ladina, 5 kirillilise ja kreeka tähestikuga); lipuemoji-prefiksiga valija päises.

## Alustamine

Avage lihtsalt `index.html` kaasaegses brauseris. Pole ehitust, pole paigaldamist, pole serverit.

Kui soovite seda majutada, paigutage staatilised failid (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ja `i18n/` kaust 28 tõlkefailiga) mis tahes staatilisele hostile (GitHub Pages, Netlify, oma veebiserver). Töötab ka `file://` kaudu — service workeri registreerimine jäetakse `file:` protokolli korral automaatselt vahele, nii et `index.html` otse kettalt avamine töötab puhtalt.

HTTPS-i kaudu serveerimisel muutub rakendus PWA-na paigaldatavaks (brauseri *Paigalda rakendus* / *Lisa avakuvale* menüü kaudu) ja töötab pärast esimest külastust võrguta tänu cache-first service workerile, mis hoiab eel-vahemällu kõik staatilised failid (liides + kõik tõlked).

Esmase külastuse korral luuakse automaatselt vaikelogiraamat, nii et saate kohe logimist alustada.

## Paigaldamine PWA-na mobiilis

Kui rakendust serveeritakse HTTPS-i kaudu (nt GitHub Pages), saate selle paigaldada oma telefoni avakuvale, et see töötaks täisekraanil ilma brauseri liideseta. Pärast esimest käivitamist puhverdab service worker kõik, nii et järgmised käivitused töötavad täielikult võrguta.

### iOS (ainult Safari)

iOS-is saab PWA-sid paigaldada ainult Safari — kolmandate osapoolte brauserid ei saa.

1. Avage sait **Safaris**.
2. Toksake nuppu **Jaga**.
3. Valige **Lisa avakuvale**, seejärel **Lisa**.

Juhend:

![iOS paigaldusjuhend](media/iOS_add_to_home_screen.gif)

Kõrgema kvaliteediga allikas: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Avage sait oma brauseris. Võib ilmuda automaatne *Paigalda rakendus* viip.
2. Vastasel juhul avage **⋮ menüü** → **Paigalda rakendus** (või **Lisa avakuvale** vanemates versioonides).

Juhend:

![Android paigaldusjuhend](media/Android_add_to_home_screen.gif)

Kõrgema kvaliteediga allikas: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logiraamatud

- **Loomine:** sisestage nimi väljal *Logiraamatu nimi* ja saatke. Kui jätate nime tühjaks, on vaikimisi `Log YYYY-MM-DD HH:MM UTC`.
- **Vahetamine:** klõpsake külgribal mis tahes logiraamatul.
- **Ümbernimetamine:** klõpsake logiraamatu päises *Nimeta ümber*. Enter salvestab, Escape tühistab.
- **Kustutamine:** klõpsake *Kustuta logiraamat*. Teil palutakse kinnitada. Kui kustutate viimase logiraamatu, luuakse automaatselt uus.

## QSO-d

- Täitke vorm ja vajutage **Salvesta QSO**.
- Kutsung muudetakse kirjutamise ajal automaatselt suurtähtedeks.
- Kuupäev ja kellaaeg eeltäidetakse *praegu* UTC-s ja taastatakse pärast iga salvestatud QSO-d; saate siiski sisestada mis tahes väärtuse.
- Riba ja liik püsivad sama seansi QSO-de vahel, nii et te ei pea iga kontakti jaoks neid uuesti valima.
- RST saadetud / RST vastu võetud, kui jäetakse tühjaks, langevad tagasi väärtusele **59** hääle režiimide jaoks (SSB/FM/AM/DIGITALVOICE) ja **599** CW ja digi režiimide jaoks (CW/FT8/FT4/RTTY/PSK31/JT65).
- Kutsungivälja all ilmub *Duplikaat selles logis* märk, kui kutsung juba praeguses logiraamatus eksisteerib. Duplikaate *ei* blokeerita.
- **QSO redigeerimine** rida *Muuda* nupuga. Vorm lülitub *Uuenda QSO-d* režiimi, rida tõstetakse esile ja ilmub *Loobu* nupp. Logiraamatu vahetamine või logi kustutamine tühistab redigeerimise automaatselt.
- **QSO kustutamine** rida *Kustuta* nupuga (palub kinnitust).

## ADIF import ja eksport

- **Eksport**: klõpsake logiraamatu päises *Ekspordi .adi*. Allalaaditakse fail, mille päises on `ADIF_VER 3.1.4` ja `PROGRAMID local-qso`. Iga kirje vastendab `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klõpsake Loo-logiraamat-vormi all *Impordi .adi fail* ja valige `.adi`/`.adif` fail. Luuakse uus logiraamat nimega `Imporditud YYYY-MM-DD HH:MM UTC`. Import ei liideta kunagi olemasolevasse logiraamatusse.
- Välja pikkuse arvu käsitletakse kui tähemärkide arvu, mis töötab ASCII ADIF-i jaoks (kõik standardsed QSO-väljad). Mitmebaidiline sisu mittetähtsates tekstiväljades võib parseerida veidralt.

## Privaatsus ja andmed

- Kõik andmed salvestatakse brauseri `localStorage`-is võtme `local-qso:v1` alla.
- Midagi ei edastata kuhugi. Pole tausta, pole API kutset, pole telemeetriat, pole analüütikat.
- Brauseri saidi andmete kustutamine, privaatse/incognito režiimi kasutamine või teise brauseri/seadme kasutamine tähendab tühja logiraamatut — varuks kasutage *Ekspordi .adi*.

## Liidese keel

Päises asuv keelevalija katab **28 keelt**. Valige üks ja ülejäänud liides renderdatakse kohe uuesti; teie valik salvestatakse koos teie logidega ja seda austatakse järgmisel külastusel. Inglise keel on vaikimisi.

Saadaval keeled (lipuemoji + omakeelne nimi; igas tähestikus tähestikulises järjekorras):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universaalsed tehnilised sildid jäävad oma kanoonilises kujus kõigis keeltes: ribade nimed (`20m`, `70cm`, …), ADIF režiimi koodid (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ja ISO riigikoodid.

Puudub stringi teie keeles? Iga keel on üks väike fail kaustas [`i18n/`](i18n/) — kopeerige `i18n/en.js`, tõlkige väärtused, salvestage failina `i18n/<kood>.js`, seejärel lisage `<script>` silt pluss `<select>` valik `index.html`-s ja kood `SUPPORTED_LANGS`-i `app.js`-s.

## Teemad

Päises olev teemavahetaja vahetab päeva (vaikimisi) ja öö vahel. Eelistus salvestatakse koos teie logidega ja seda austatakse järgmisel külastusel. Natiivsed kuupäeva-/kellaaja valijad järgivad teemat `color-scheme` kaudu.

## Tehnilised märkused

- Ühe lehekülje rakendus, puhas HTML + CSS + JavaScript. Pole raamistikke, pole ehitust, pole sõltuvusi.
- Lähtefailid:
  - `index.html` — märgistus ja meta-sildid.
  - `style.css` — teemad ja paigutus (päeva/öö muutujad, mobiilse media päringud).
  - `app.js` — olek, püsivus, renderdamine, ADIF parser/serializer, kutsungi eesliite → riik otsing.
  - `favicon.svg` — sisseehitatud SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (nimi, teema värv, ulatus, ikoon), nii et rakendus on paigaldatav PWA-na mobiilis ja töölaual.
  - `service-worker.js` — cache-first service worker, mis paigaldamisel eel-vahemällu hoiab iga staatilise faili, aktiveerimisel kustutab vanad vahemälud ja hoiab rakenduse pärast esimest külastust täielikult võrguta. Registreerimine jäetakse `file://` protokolli korral automaatselt vahele, nii et `index.html` otse kettalt avamine jääb puhtaks.
  - `i18n/<lang>.js` — üks tõlkefail toetatud keele kohta (kokku 28). Iga on tilluke IIFE, mis omistab `window.I18N[<lang>]`-le lameda võti→string kaardi. `t()` ja `applyLanguage()` `app.js`-s käsitlevad otsinguid (inglise keele varuvõimalusega) ja kõnnivad läbi DOM-i, värskendades iga `[data-i18n*]` elemendi.
- Testitud uuemate Chromium, Firefox ja Safari brauseritega (töölaud + iOS).

## Tunnustused

Loonud [YL3IM](https://www.qrz.com/db/YL3IM).

Riigi lipud tuginevad Unicode'i regionaalse indikaatori järjenditele. Need kuvatakse õigesti macOS-is, iOS-is, Linuxis (lipuvõimekas emoji fondiga) ja Androidis. Windows ei sisalda süsteemset lipufonti, seega võivad lipuemojid seal ilmuda tähepaaridena.
