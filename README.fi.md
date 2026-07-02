# Local QSO Logger

## Lue omalla kielelläsi

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 Suomi · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Yksityisyyttä kunnioittava radioamatöörinen QSO-lokikirja, joka toimii kokonaan selaimessasi. Ei tiliä, ei palvelinta, ei seurantaa, ei analytiikkaa — lokikirjasi asuvat vain selaimesi `localStorage`-muistissa eivätkä koskaan poistu laitteeltasi.

Tekijä: [YL3IM](https://www.qrz.com/db/YL3IM). Projektin verkkosivusto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger running on iPad](media/iPad.png)

## Sisällys

- [Lue omalla kielelläsi](#lue-omalla-kielelläsi)
- [Ominaisuudet](#ominaisuudet)
- [Aloittaminen](#aloittaminen)
- [Asenna PWA:ksi mobiiliin](#asenna-pwaksi-mobiiliin)
  - [iOS (vain Safari)](#ios-vain-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Lokikirjat](#lokikirjat)
- [QSO-yhteydet](#qso-yhteydet)
- [ADIF-tuonti ja -vienti](#adif-tuonti-ja--vienti)
- [Yksityisyys ja tiedot](#yksityisyys-ja-tiedot)
- [Käyttöliittymän kieli](#käyttöliittymän-kieli)
- [Teemat](#teemat)
- [Tekniset huomiot](#tekniset-huomiot)
- [Kiitokset](#kiitokset)

## Ominaisuudet

- Useita lokikirjoja; kullakin oma QSO-luettelonsa.
- Lokikirjan toiminnot: luominen, uudelleennimeäminen, poistaminen, tuonti ADIF:stä, vienti ADIF:iin (`.adi`).
- QSO-lomake ryhmitelty kolmeen lohkoon: **Asematiedot** (aseman kutsumerkki, operaattorin kutsumerkki, oma ruutu) pysyy kiinteänä QSO-jen välillä; **Toimintatapa** (etenemistapa, satelliitti, tapa, sateliittitapa, kaista, RX-kaista) sateliittikenttien näkyessä vain etenemistavan ollessa *Satelliitti*; sekä **QSO-tiedot** (kutsutun aseman kutsumerkki, kutsutun ruutu, UTC-päivämäärä/-aika muokattaessa, kommentti, RST lähetetty, RST vastaanotettu).
- Täysi ADIF `MODE` → `SUBMODE` -taksonomia tilavalinnassa — valitse ylätaso (`SSB`, `MFSK`, …) tai sukellu suoraan tiettyyn alitilaan (`USB`, `FT4`, …); sovellus tallentaa molemmat kentät ADIF:n mukaisesti ja taulukko näyttää tietyn alitilan, jos sellainen on.
- Täysi ADIF-etenemistilan luettelointi (SAT, RPT, EME, ES, MS, Aurora jne.) pudotusvalikkona.
- Täysi AMSAT-satelliittiluettelo (~110 satelliittia) ja kaksitasoinen **Sat mode** -pudotusvalikko: suositeltavat kaksikirjaimiset uplink/downlink-koodit ylhäällä (LU, LV, SX, UU, UV, VA, VU, VV) ja vanhentuneet yksikirjaimiset tunnukset (A/B/J/K/L/R/S/T/U/V/W/X) ryhmiteltynä *vanhentuneiksi* alhaalla. Satelliittitavan valinta säätää automaattisesti uplink `BAND`- ja downlink `RX band` -arvot.
- Minkä tahansa QSO:n muokkaaminen ja poistaminen (poistettaessa pyydetään vahvistus).
- Järkevät oletukset: tämän päivän UTC-päivämäärä/-aika esitäytetty, tilalle sopivat RST-oletukset (59 puhetiloille, 599 CW/digitaalisille), kiinteät Asematiedot + kaista + tapa + etenemistapa peräkkäisten QSO-jen välillä (vain per-yhteys-kentät — kutsumerkki, ruutu, kommentti, RST — tyhjenevät jokaisen *Kirjaa QSO* -toiminnon jälkeen).
- Reaaliaikainen duplikaattikutsumerkin ilmaisin (informatiivinen — duplikaatit ovat sallittuja).
- Maan lippu -sarake johdettuna kutsumerkin etuliitteestä (kattaa ≥99 % yleisistä radioamatöörien etuliitteistä, mukaan lukien siirrettävät kutsut kuten `9A/M0NCG`).
- Lokaalin mukainen päivämäärän näyttö QSO-taulukossa; tallennus ja ADIF-tuloste pysyvät ISO-muodossa.
- Käyttöliittymä **28 kielellä** (englanti sekä 22 latinalaista, 5 kyrillisiä ja kreikka); lippuemojin sisältävä valitsin otsikossa.
- Päivä-/yöteemat (päivä on oletusarvo; kytkin on otsikossa).
- Mobiiliystävällinen responsiivinen asettelu kosketukselle sopivilla painikkeilla.
- Toimii täysin offline — ei verkkopyyntöjä missään vaiheessa.
- Asennettavissa PWA:ksi (Lisää aloitusnäyttöön / Asenna sovellus) HTTPS:n kautta isännöitäessä.

## Aloittaminen

Avaa vain `index.html` modernissa selaimessa. Ei rakennusvaihetta, ei asennusta, ei palvelinta.

Jos haluat isännöidä sitä, pudota staattiset tiedostot (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ja `i18n/`-hakemisto 28 käännöstiedostolla) mille tahansa staattiselle isännöintipalvelulle (GitHub Pages, Netlify, oma verkkopalvelin). Se toimii myös `file://`:n kautta — palvelintyöntekijän rekisteröinti ohitetaan automaattisesti `file:`-protokollalla, joten `index.html` suoraan levyltä avaaminen toimii siististi.

HTTPS:n kautta isännöitäessä sovelluksesta tulee asennettava PWA (*Asenna sovellus* / *Lisää aloitusnäyttöön* -valikko) ja se toimii offline ensimmäisen käynnin jälkeen välimuistia ensin käyttävän palvelintyöntekijän ansiosta, joka tallentaa välimuistiin jokaisen staattisen tiedoston (UI + kaikki käännökset).

Oletus-lokikirja luodaan automaattisesti ensimmäisellä käynnillä, joten voit aloittaa kirjaamisen heti.

## Asenna PWA:ksi mobiiliin

Kun sovellus on isännöity HTTPS:n kautta (esim. GitHub Pages), voit asentaa sen puhelimesi aloitusnäyttöön, jossa se toimii koko näytön tilassa ilman selaimen elementtejä. Ensimmäisen käynnistyksen jälkeen palvelintyöntekijä tallentaa kaiken välimuistiin, joten myöhemmät käynnistykset toimivat täysin offline.

### iOS (vain Safari)

iOS:ssä vain Safari voi asentaa PWA:ita — kolmannen osapuolen selaimet eivät pysty.

1. Avaa sivusto **Safarissa**.
2. Napauta **Jaa**-painiketta.
3. Valitse **Lisää aloitusnäyttöön**, sitten **Lisää**.

Ohje:

![iOS install walkthrough](media/iOS_add_to_home_screen.gif)

Laadukkaampi lähde: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Avaa sivusto selaimessasi. *Asenna sovellus* -kehote saattaa ilmestyä automaattisesti.
2. Muuten avaa **⋮-valikko** → **Asenna sovellus** (tai **Lisää aloitusnäyttöön** vanhemmissa versioissa).

Ohje:

![Android install walkthrough](media/Android_add_to_home_screen.gif)

Laadukkaampi lähde: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Lokikirjat

- **Luo:** kirjoita nimi *Lokin nimi* -kenttään ja lähetä. Jos jätät nimen tyhjäksi, oletuksena on `Log YYYY-MM-DD HH:MM UTC`.
- **Vaihda:** napsauta mitä tahansa lokikirjaa sivupalkissa.
- **Nimeä uudelleen:** napsauta *Nimeä uudelleen* lokikirjan otsikossa. Paina Enter tallentaaksesi, Escape peruuttaaksesi.
- **Poista:** napsauta *Poista loki*. Sinulta pyydetään vahvistus. Jos poistat viimeisen lokikirjan, uusi luodaan automaattisesti.

## QSO-yhteydet

- Täytä lomake ja paina **Kirjaa QSO**.
- Lomake on järjestetty kolmeen lohkoon:
  - **Asematiedot** — *Aseman kutsumerkki* (lähetyskutsumerkkisi, ADIF `STATION_CALLSIGN`), *Operaattori* (yksittäisen operaattorin kutsumerkki — eri kuin *Aseman kutsumerkki*, kun vieraileva operaattori on kerhon aseman mikrofonilla; ADIF `OPERATOR`) ja *Oma ruutu* (ADIF `MY_GRIDSQUARE`). Nämä pysyvät kiinteinä QSO-jen välillä samassa istunnossa — aseta ne kerran ja ne siirtyvät.
  - **Toimintatapa** — *Etenemistapa*, *Tapa*, *Kaista* sekä sateliittikentät *Satelliitti* / *Sat mode* / *RX-kaista*, kun etenemistapa on *Satelliitti*. Kaista, tapa ja etenemistapa ovat kiinteitä kuten Asematiedot.
  - **QSO-tiedot** — per-yhteys-kentät: *Kutsumerkki*, *Ruutu* (toisen aseman Maidenhead-ruutu), *Kommentti* (ADIF `COMMENT`), *RST lähetetty*, *RST vastaanotettu*. Olemassa olevaa QSO:a muokattaessa tässä lohkossa näkyvät myös *Päivämäärä (UTC)* ja *Aika (UTC)*. Nämä kentät tyhjenevät jokaisen *Kirjaa QSO* -toiminnon jälkeen.
- Kaikki kutsumerkit (kutsuttu, asema, operaattori) muuntuvat automaattisesti isoiksi kirjaimiksi kirjoittaessa; molemmat ruutukentät toimivat samoin.
- Päivämäärä ja aika esitäytetään lähetettäessä *nyt* UTC-ajassa; muokattaessa voit kirjoittaa minkä tahansa arvon.
- RST lähetetty / RST vastaanotettu, jos ne jätetään tyhjiksi, oletusarvo on **59** puhetiloille (SSB/FM/DIGITALVOICE) ja **599** CW- ja digitaalisille tiloille (CW/FT8/FT4/RTTY/PSK31/JT65). Oletus seuraa ylätason MODE-arvoa, joten tietyn alitilan kuten *USB* tai *FT4* valitseminen tuottaa silti oikean oletuksen.
- *Duplikaatti tässä lokissa* -merkki ilmestyy kutsumerkki-kentän alle, jos kutsumerkki on jo olemassa nykyisessä lokikirjassa. Duplikaatit *eivät* ole estetty.
- **Etenemistapa** — valinnainen ADIF-etenemistilojen pudotusvalikko (SAT, RPT, EME, F2, Es, MS, LOS jne.). Jätä tyhjäksi tavallisille HF-maanpintayhteyksillle.
- **Satelliitti-QSO:t** — etenemistavan *Satelliitti* valitseminen paljastaa kolme sateliittikenttää: **Satelliitti** (pudotusvalikko ~110 AMSAT-rekisteröidystä satelliitista), **Sat mode** (AMSAT-kirjaintunnukset, ryhmiteltynä *moderneiksi* kaksikirjaimisiksi uplink/downlink-koodeiksi ylhäällä ja *vanhentuneiksi* yksikirjaimisiksi koodeiksi alhaalla) ja **RX-kaista** (downlink-kaista). Satelliitti, Sat mode ja RX-kaista ovat pakollisia — selain kieltäytyy lähettämästä ilman niitä. **Sat mode** -valinnan tekeminen täyttää automaattisesti pää-**Kaistan** uplink-kaistalla ja **RX-kaistan** downlink-kaistalla (esim. tila J → 2m uplink, 70cm downlink). *Takaisin* sateliittiin kytkeminen toisesta etenemistilasta nollaa Sat mode -valinnan, joten sinua pyydetään valitsemaan uusi. Ei-satelliitti-QSO:t eivät koskaan kanna sateliittikohtaisia kenttiä; olemassa olevan QSO:n kytkeminen sateliitista toiseen prop-modeen poistaa ne siististi. **Ruutu** ja **Oma ruutu** ovat yleisiä kenttiä (hyödyllisiä myös VHF/UHF-ruutukilpailuissa) ja pysyvät näkyvillä jokaisessa QSO:ssa.
- **Muokkaa QSO:ta** rivin *Muokkaa*-painikkeella. Lomake vaihtuu *Päivitä QSO* -tilaan, rivi korostuu ja *Peruuta*-painike ilmestyy. Lokikirjojen vaihtaminen tai lokin poistaminen peruuttaa muokkauksen automaattisesti.
- **Poista QSO** rivin *Poista*-painikkeella (pyytää vahvistuksen).

## ADIF-tuonti ja -vienti

- **Vienti**: napsauta *Vie .adi* lokikirjan otsikossa. Tiedosto ladataan **ADIF 3.1.7** -standardin mukaisena. Otsikko ilmoittaa `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` ja `CREATED_TIMESTAMP` (UTC). QSO-kohtaiset kentät (kun ei-tyhjiä): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — jota seuraa jokainen ylimääräinen ADIF-kenttä, joka säilytettiin tuonnissa (katso alla).
- **Tuonti**: napsauta *Tuo .adi-tiedosto* Luo lokikirja -lomakkeen alla ja valitse `.adi`- / `.adif`-tiedosto. Siitä luodaan uusi lokikirja nimellä `Imported YYYY-MM-DD HH:MM UTC`. Tuonti ei koskaan yhdistä olemassa olevaan lokikirjaan.
- **Häviötön edestakaisin**: tuonnissa mikä tahansa ADIF-kenttä, jota sovellus ei mallinna käyttöliittymässään (esim. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-kentät) säilytetään QSO:ssa ja lähetetään uudelleen sanasanaisesti seuraavassa viennissä. Joten itse tuodun tiedoston vienti säilyttää kaiken.
- Kentän pituus käsitellään UTF-8-tavumääränä spesifikaation mukaisesti, joten monitavuinen teksti (esim. aksenttimerkit `COMMENT`-kentässä) jäsennetään oikein.

## Yksityisyys ja tiedot

- Kaikki tiedot on tallennettu selaimesi `localStorage`-muistiin avaimella `local-qso:v1`.
- Mitään ei siirretä minnekään. Ei taustapalvelua, ei API-kutsua, ei telemetriaa, ei analytiikkaa.
- Selaimen sivustotietojen tyhjentäminen, yksityisen/incognito-tilan käyttäminen tai eri selaimen/laitteen käyttäminen tarkoittaa tyhjää lokikirjaa — käytä *Vie .adi* varmuuskopiointiin.

## Käyttöliittymän kieli

Otsikon kielenvalitsin kattaa **28 kieltä**. Valitse yksi ja muu käyttöliittymä piirretään välittömästi uudelleen; valintasi tallennetaan lokikirjojesi mukana ja otetaan huomioon seuraavalla käynnillä. Oletus on englanti.

Käytettävissä olevat kielet (lippuemoji + alkuperäinen nimi; järjestetty aakkosjärjestykseen kunkin kirjaimiston sisällä):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Yleiset tekniset merkinnät pysyvät kanonisessa muodossaan kaikissa kielissä: kaistanimet (`20m`, `70cm`, …), ADIF-tilakoodit (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ja ISO-maakoodit.

Puuttuuko kielessäsi merkkijono? Jokainen kieli on yksi pieni tiedosto [`i18n/`](i18n/)-hakemistossa — kopioi `i18n/en.js`, käännä arvot, tallenna nimellä `i18n/<code>.js`, lisää sitten `<script>`-tunniste ja `<select>`-vaihtoehto `index.html`:ssä sekä koodi `SUPPORTED_LANGS`-listaan `app.js`:ssä.

## Teemat

Otsikon teemakytkin vaihtaa päivän (oletus) ja yön välillä. Asetus tallennetaan lokikirjojesi mukana ja otetaan huomioon seuraavalla käynnillä. Natiivit päivämäärä-/aikavalinnat seuraavat teemaa `color-scheme`-ominaisuuden kautta.

## Tekniset huomiot

- Yhden sivun sovellus, tavallinen HTML + CSS + JavaScript. Ei kehyksiä, ei rakennusvaihetta, ei riippuvuuksia.
- Lähdetiedostot:
  - `index.html` — merkinnät ja metatunnisteet.
  - `style.css` — teemat ja asettelu (päivä-/yömuuttujat, mobiilin mediakysely).
  - `app.js` — tila, pysyvyys, renderöinti, ADIF-jäsennin/-sarjoitin, kutsumerkin etuliite → maan haku.
  - `favicon.svg` — sisällytetty SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (nimi, teeman väri, laajuus, kuvake), jotta sovellus on asennettavissa PWA:ksi mobiilissa ja työpöydällä.
  - `service-worker.js` — välimuistia ensin käyttävä palvelintyöntekijä, joka tallentaa jokaisen staattisen tiedoston välimuistiin asennuksessa, poistaa vanhat välimuistit aktivoinnissa ja pitää sovelluksen täysin offline-tilassa ensimmäisen käynnin jälkeen. Rekisteröinti ohitetaan automaattisesti `file://`-protokollalla, joten `index.html`:n avaaminen suoraan levyltä pysyy siistinä.
  - `i18n/<lang>.js` — yksi käännöstiedosto kutakin tuettua kieltä kohti (28 yhteensä). Jokainen on pieni IIFE, joka määrittää `window.I18N[<lang>]` tasaiseksi avain→merkkijono-kartaksi. `t()` ja `applyLanguage()` `app.js`:ssä käsittelevät haut (englanninkielisellä varauksella) ja kävelevät DOM:ssa päivittäen jokaisen `[data-i18n*]`-elementin.
- Testattu viimeisimmällä Chromium, Firefox ja Safari (työpöytä + iOS).

## Kiitokset

Kehittänyt [YL3IM](https://www.qrz.com/db/YL3IM).

Kiitos [A65BR](https://www.qrz.com/db/A65BR) Olegille korvaamattomista vihjeistä, jotka tekivät satelliitti-QSO-osasta todella käytettävän — modernit kaksikirjaimiset Sat-mode-tunnukset, AMSAT-luettelo ja uplink/downlink-automaattisäätö juontavat kaikki juurensa hänen palautteestaan.

Maiden liput perustuvat Unicoden alueellisiin indikaattorisekvenssseihin. Ne renderöityvät oikein macOS:ssä, iOS:ssä, Linuxissa (lipuille kykenevällä emoji-fontilla) ja Androidissa. Windows ei sisällä järjestelmälippufonttia, joten lippuemojit saattavat näkyä siellä kirjainpareina.
