# Local QSO Logger

## Lue omalla kielelläsi

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 Suomi · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Yksityisyyttä kunnioittava radioamatöörinen QSO-lokikirja, joka toimii kokonaan selaimessasi. Ei tiliä, ei palvelinta, ei seurantaa, ei analytiikkaa — lokikirjasi asuvat vain selaimesi `localStorage`-muistissa eivätkä koskaan poistu laitteeltasi.

Tekijä: [YL3IM](https://www.qrz.com/db/YL3IM). Projektin verkkosivusto: [qso.lv](https://qso.lv).

![Local QSO Logger iPadilla käynnissä](media/iPad.png)

## Sisällys

- [Lue omalla kielelläsi](#lue-omalla-kielelläsi)
- [Ominaisuudet](#ominaisuudet)
- [Aloittaminen](#aloittaminen)
- [Asenna PWA:ksi mobiiliin](#asenna-pwaksi-mobiiliin)
  - [iOS (vain Safari)](#ios-vain-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Lokikirjat](#lokikirjat)
- [QSO-yhteydet](#qso-yhteydet)
- [Kilpailut](#kilpailut)
- [Tuonti ja vienti](#tuonti-ja-vienti)
- [Yksityisyys ja tiedot](#yksityisyys-ja-tiedot)
- [Käyttöliittymän kieli](#käyttöliittymän-kieli)
- [Teemat](#teemat)
- [Tekniset huomiot](#tekniset-huomiot)
- [Kiitokset](#kiitokset)

## Ominaisuudet

- Useita lokikirjoja; kullakin oma QSO-luettelonsa.
- **Kilpailulokikirjat** ovat valinnaisia — valitse 68 sisäänrakennetun kilpailun katalogista lokikirjaa luodessasi. QSO-lomake saa kilpailukohtaisen *Kilpailun vaihto* -lohkon, duplikaattien tunnistus noudattaa kilpailun sääntöä, ja *Vie .cbr* luo Cabrillo v3 -lähetystiedoston tavallisen ADIF-viennin lisäksi.
- Lokikirjan toiminnot: luominen, uudelleennimeäminen, poistaminen, lokitiedoston tuonti (ADIF tai Cabrillo — muoto tunnistetaan automaattisesti), vienti ADIF:iin (`.adi`), sekä *Vie .cbr* (Cabrillo v3) kilpailulokikirjoille. Aiemmin sovelluksen viemän `.cbr`-tiedoston uudelleentuonti palauttaa sen samana kilpailulokikirjana.
- QSO-lomake ryhmitelty kolmeen lohkoon: **Asematiedot** (aseman kutsumerkki, operaattorin kutsumerkki, oma ruutu) pysyy kiinteänä QSO-jen välillä; **Toimintatapa** (etenemistapa, satelliitti, tapa, sateliittitapa, kaista, RX-kaista) sateliittikenttien näkyessä vain etenemistavan ollessa *Satelliitti*; sekä **QSO-tiedot** (kutsutun aseman kutsumerkki, kutsutun ruutu, UTC-päivämäärä/-aika muokattaessa, kommentti, RST lähetetty, RST vastaanotettu).
- Täysi ADIF `MODE` → `SUBMODE` -taksonomia tilavalinnassa — valitse ylätaso (`SSB`, `MFSK`, …) tai sukellu suoraan tiettyyn alitilaan (`USB`, `FT4`, …); sovellus tallentaa molemmat kentät ADIF:n mukaisesti ja taulukko näyttää tietyn alitilan, jos sellainen on.
- Täysi ADIF-etenemistilan luettelointi (SAT, RPT, EME, ES, MS, Aurora jne.) pudotusvalikkona.
- Täysi AMSAT-satelliittiluettelo (~110 satelliittia) ja kaksitasoinen **Sat mode** -pudotusvalikko: suositeltavat kaksikirjaimiset uplink/downlink-koodit ylhäällä (LU, LV, SX, UU, UV, VA, VU, VV) ja vanhentuneet yksikirjaimiset tunnukset (A/B/J/K/L/R/S/T/U/V/W/X) ryhmiteltynä *vanhentuneiksi* alhaalla. Satelliittitavan valinta säätää automaattisesti uplink `BAND`- ja downlink `RX band` -arvot.
- Minkä tahansa QSO:n muokkaaminen ja poistaminen (poistettaessa pyydetään vahvistus).
- Järkevät oletukset: tämän päivän UTC-päivämäärä/-aika esitäytetty, tilalle sopivat RST-oletukset (59 puhetiloille, 599 CW/digitaalisille), kiinteät Asematiedot + kaista + tapa + etenemistapa peräkkäisten QSO-jen välillä (vain per-yhteys-kentät — kutsumerkki, ruutu, kommentti, RST — tyhjenevät jokaisen *Kirjaa QSO* -toiminnon jälkeen).
- Reaaliaikainen duplikaattikutsumerkin ilmaisin (informatiivinen — duplikaatit ovat sallittuja).
- Maan lippu -sarake johdettuna kutsumerkin etuliitteestä (kattaa ≥99 % yleisistä radioamatöörien etuliitteistä, mukaan lukien siirrettävät kutsut kuten `9A/M0NCG`).
- Yhden napautuksen **Oma ruutu** -automaattitunnistus: 🌐-painike kentän vieressä kysyy selaimeltasi nykyiset koordinaattisi ja täyttää 6-merkkisen Maidenhead-ruudun (käyttää selaimen Geolocation-rajapintaa — vaatii käyttäjän luvan).
- Lokaalin mukainen päivämäärän näyttö QSO-taulukossa; tallennus ja ADIF-tuloste pysyvät ISO-muodossa.
- Käyttöliittymä **28 kielellä** (englanti sekä 22 latinalaista, 5 kyrillisiä ja kreikka); lippuemojin sisältävä valitsin otsikossa.
- Päivä-/yöteemat (päivä on oletusarvo; kytkin on otsikossa).
- Mobiiliystävällinen responsiivinen asettelu kosketukselle sopivilla painikkeilla.
- Toimii täysin offline — ei verkkopyyntöjä missään vaiheessa.
- Asennettavissa PWA:ksi (Lisää aloitusnäyttöön / Asenna sovellus) HTTPS:n kautta isännöitäessä.

## Aloittaminen

Avaa vain `index.html` modernissa selaimessa. Ei rakennusvaihetta, ei asennusta, ei palvelinta.

Jos haluat isännöidä sitä, pudota staattiset tiedostot (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, yksittäinen `i18n.js`-paketti, joka kantaa kaikki 28 kieliesanakirjaa, ja yksittäinen `contests.js`-paketti, joka kantaa kaikki 68 kilpailukokoonpanoa) mille tahansa staattiselle isännöintipalvelulle (GitHub Pages, Netlify, oma verkkopalvelin). Se toimii myös `file://`:n kautta — palvelintyöntekijän rekisteröinti ohitetaan automaattisesti `file:`-protokollalla, joten `index.html` suoraan levyltä avaaminen toimii siististi.

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

![iOS-asennusohje](media/iOS_add_to_home_screen.gif)

Laadukkaampi lähde: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Avaa sivusto selaimessasi. *Asenna sovellus* -kehote saattaa ilmestyä automaattisesti.
2. Muuten avaa **⋮-valikko** → **Asenna sovellus** (tai **Lisää aloitusnäyttöön** vanhemmissa versioissa).

Ohje:

![Android-asennusohje](media/Android_add_to_home_screen.gif)

Laadukkaampi lähde: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Lokikirjat

- **Luo:** kirjoita nimi *Lokin nimi* -kenttään ja lähetä. Jos jätät nimen tyhjäksi, oletuksena on `Log YYYY-MM-DD HH:MM UTC`.
- **Vaihda:** napsauta mitä tahansa lokikirjaa sivupalkissa.
- **Nimeä uudelleen:** napsauta *Nimeä uudelleen* lokikirjan otsikossa. Paina Enter tallentaaksesi, Escape peruuttaaksesi.
- **Poista:** napsauta *Poista loki*. Sinulta pyydetään vahvistus. Jos poistat viimeisen lokikirjan, uusi luodaan automaattisesti.

## QSO-yhteydet

- Täytä lomake ja paina **Kirjaa QSO**.
- Lomake on järjestetty kolmeen lohkoon:
  - **Asematiedot** — *Aseman kutsumerkki* (lähetyskutsumerkkisi, ADIF `STATION_CALLSIGN`), *Operaattori* (yksittäisen operaattorin kutsumerkki — eri kuin *Aseman kutsumerkki*, kun vieraileva operaattori on kerhon aseman mikrofonilla; ADIF `OPERATOR`) ja *Oma ruutu* (ADIF `MY_GRIDSQUARE`) sekä 🌐-painike, joka täyttää ruudun selaimesi nykyisestä sijainnista (Geolocation-rajapinta — selain pyytää lupaa ensimmäisellä kerralla). Nämä pysyvät kiinteinä QSO-jen välillä samassa istunnossa — aseta ne kerran ja ne siirtyvät.
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

## Kilpailut

Lokikirja voi valinnaisesti olla **kilpailulokikirja** — valitse kilpailu *Kilpailu*-pudotusvalikosta lokikirjan luontilomakkeessa. Tyhjä pudotusvalikko = tavallinen lokikirja (oletus, olemassa oleva toiminta ennallaan).

Kilpailulokikirjat saavat:

- **Kilpailun vaihtolohko** QSO-lomakkeessa, dynaamisesti renderöity valitun kilpailun kaavan mukaisesti. Kenttätyypit ovat `text`, `number` ja `serial` (automaattisesti kasvava, vain luku). *Sticky*-merkityt kentät (oma vyöhykkeesi / piirikuntasi / alueesi / tehosi / ikäsi / …) esitäytetään edellisen QSO:n arvosta; per-QSO-kentät (heidän vyöhykkeensä, heidän sarjanumeronsa, …) tyhjenevät jokaisen *Kirjaa QSO* -toiminnon jälkeen.
- **Kilpailumerkki** lokin nimen vieressä yksityiskohtien otsikossa.
- **Duplikaattien tunnistus**, joka noudattaa kilpailun `duplicateRule`-arvoa (`per-band-mode`, `per-band`, `per-day` tai `off`). Merkki pysyy pelkästään informatiivisena — ei koskaan estä lähetystä.
- **Varoitusmerkki**, kun nykyinen UTC on kilpailun ilmoittamien päivämääräikkunoiden ulkopuolella (12 vuotta esiladattu, 2026–2037), tai kun valittu kaista / tapa ei ole kilpailun sallitussa joukossa. Ei koskaan estä.
- **Lähetystietopaneeli** yksityiskohtien otsikossa: sisäänrakennettu lomake Cabrillo-otsikkokentille, jotka kilpailu ilmoittaa (kategoria, teho, nimi, klubi, osoite, soapbox, …). Arvot säilyvät lokikirjassa, eivät QSO-kohtaisesti.
- **Vie .cbr** -painike yksityiskohtien otsikossa, *Vie .adi*:n vieressä. Tuottaa Cabrillo v3 -tiedoston: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` esitäytetty ensimmäisen QSO:n asematiedoista, loput lähetystietopaneelista, sitten yksi `QSO:`-rivi per yhteys kronologisessa järjestyksessä kilpailun `sentTemplate` / `rcvdTemplate`-sarakkeita käyttäen.
- **Cabrillo-uudelleentuonti** vakiopainikkeen *Tuo lokitiedosto* kautta — aiemmin sovelluksen viemä `.cbr`-tiedosto (tai minkä tahansa muun lokikirjan, joka tuottaa standardin Cabrillo v3:n) palautuu uuteen oikean tyyppiseen kilpailulokikirjaan. `CONTEST:`-otsikko täsmätään sisäänrakennettuun katalogiin; kun useat kokoonpanot jakavat saman tunnisteen (esim. `ARRL-10` täsmää sekä `arrl-10m-dx`- että `arrl-10m-w`-kokoonpanoon), sovellus ratkaisee epäselvyyden täsmäämällä QSO-rivin tilakirjaimen ja sarakkeiden määrän kunkin ehdokkaan mallia vastaan, ja suosii sitten `-dx`-varianttia. Otsikkokentät (kategoria, nimi, klubi, soapbox, …) palauttavat lähetystietopaneelin; QSO:n vaihtoarvot palauttavat `q.contestExchange`-tiedon kilpailun mallin mukaisesti.

### Sisäänrakennettu kilpailukatalogi (68 kokoonpanoa)

Ryhmitelty perheittäin:

- **CQ-perhe** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL-perhe** (9): ARRL DX SSB/CW (DX-puoli), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (jokainen toimitettu *molemmista* DX- ja W/VE-näkökulmista).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE ja muut eurooppalaiset** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Keski-/Itä-Euroopan epäsymmetriset — molemmat näkökulmat** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Venäläinen klubi / RadioSport** (12): Russian DX (molemmat puolet), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Valko-Venäjä + Italia + Kroatia + Espanja + ukrainalainen RTTY** (12): Belarus BFRR CW+SSB (molemmat puolet), ARI DX (molemmat puolet), Croatian 9A CW (molemmat puolet), Spanish CNCW (molemmat puolet), Ukrainian RTTY (molemmat puolet).
- **Globaali** (2): All Asian DX CW+SSB.

Epäsymmetriset kilpailut (joissa isäntämaa ja DX-puoli lähettävät erilaisia vaihtoja) toimitetaan **kahdella kokoonpanolla** — yksi isäntämaan näkökulmasta (kiinteä aluekoodi) ja yksi DX-näkökulmasta (kiinteä sarjanumero). Vastaanotetun puolen kenttä on yksi vapaa tekstikenttä, jotta operaattori voi kirjoittaa kummankin muodon yhteydestä riippuen.

Jokainen kokoonpano sisältää:

- Kilpailun vaihtoarvot, jotka lähetetään uudelleen ADIF-viennissä `APP_LQ_*`-nimiavaruuden kenttien kautta; otsikkoleima `APP_LQ_CONTEST_ID` mahdollistaa myöhemmän uudelleentuonnin palauttaa lokikirjan samaksi kilpailuksi kaikkien kenttien ollessa ehjät.
- 12 vuoden päivämääräikkunat (2026–2037), joten *kilpailuikkunan ulkopuolella* -merkki pysyy hyödyllisenä vuosikymmenen ilman uutta julkaisua.
- Cabrillo-mallin, joka yhdistää jokaisen vaihtokentän oikeaan `QSO:`-rivin sarakkeeseen.

Uuden kilpailun lisääminen = liitä uusi IIFE-lohko tiedostoon [`contests.js`](contests.js) aakkosjärjestyksen mukaiseen kohtaan (jokainen olemassa oleva kilpailu rajataan `// ==== <id> ====`-otsikkokommentilla, joten on helppo löytää, mihin lisätä). Ei vaadita muutosta `index.html`:ään, ei muutosta `service-worker.js`:ään, ei muutosta `app.js`:ään — renderöijä, lähetyksen käsittelijä, duplikaattien tunnistin, ADIF-edestakainen kierto ja Cabrillo-lähetin imevät jokaisen kokoonpanon puhtaana datana.

## Tuonti ja vienti

- **Tuo** mikä tahansa lokitiedosto — napsauta *Tuo lokitiedosto* lokikirjan luontilomakkeen alla ja valitse `.adi` / `.adif` (ADIF)- tai `.cbr` / `.cab` (Cabrillo v3) -tiedosto. Muoto tunnistetaan automaattisesti tiedoston ensimmäisestä rivistä (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → varoitus "EDI:tä ei vielä tueta"). Uusi lokikirja luodaan aina — tuonti ei koskaan yhdisty olemassa olevaan. ADIF-tuonnit tulevat tavallisina lokeina, ellei otsikko kanna omaa kilpailuvientiämme kirjoittamaa `APP_LQ_CONTEST_ID`-tunnusta (tässä tapauksessa loki palautetaan kyseisen kilpailun kilpailulokina). Cabrillo-tuonnit tulevat aina kilpailulokeina — katso *Kilpailut*-osio siitä, miten `CONTEST:`-tunniste täsmätään sisäänrakennettuun katalogiin.
- **ADIF-vienti**: napsauta *Vie .adi* lokikirjan otsikossa. Tiedosto ladataan **ADIF 3.1.7** -standardin mukaisena. Otsikko ilmoittaa `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` ja `CREATED_TIMESTAMP` (UTC). QSO-kohtaiset kentät (kun ei-tyhjiä): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — jota seuraa jokainen ylimääräinen ADIF-kenttä, joka säilytettiin tuonnissa (katso alla).
- **Cabrillo-vienti** on dokumentoitu yllä *Kilpailut*-osiossa — käytettävissä vain kilpailulokikirjoille (*Vie .cbr* -painike ilmestyy lokikirjan otsikkoon, kun lokilla on kilpailu).
- **Häviötön edestakaisin**: ADIF-tuonnissa mikä tahansa kenttä, jota sovellus ei mallinna käyttöliittymässään (esim. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-kentät) säilytetään QSO:ssa ja lähetetään uudelleen sanasanaisesti seuraavassa ADIF-viennissä. Joten itse tuodun tiedoston vienti säilyttää kaiken.
- Kentän pituus käsitellään ADIF:ssä UTF-8-tavumääränä spesifikaation mukaisesti, joten monitavuinen teksti (esim. aksenttimerkit `COMMENT`-kentässä) jäsennetään oikein.

## Yksityisyys ja tiedot

- Kaikki tiedot on tallennettu selaimesi `localStorage`-muistiin avaimella `local-qso:v1`.
- Mitään ei siirretä minnekään. Ei taustapalvelua, ei API-kutsua, ei telemetriaa, ei analytiikkaa.
- Selaimen sivustotietojen tyhjentäminen, yksityisen/incognito-tilan käyttäminen tai eri selaimen/laitteen käyttäminen tarkoittaa tyhjää lokikirjaa — käytä *Vie .adi* varmuuskopiointiin.

## Käyttöliittymän kieli

Otsikon kielenvalitsin kattaa **28 kieltä**. Valitse yksi ja muu käyttöliittymä piirretään välittömästi uudelleen; valintasi tallennetaan lokikirjojesi mukana ja otetaan huomioon seuraavalla käynnillä. Oletus on englanti.

Käytettävissä olevat kielet (lippuemoji + alkuperäinen nimi; järjestetty aakkosjärjestykseen kunkin kirjaimiston sisällä):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Yleiset tekniset merkinnät pysyvät kanonisessa muodossaan kaikissa kielissä: kaistanimet (`20m`, `70cm`, …), ADIF-tilakoodit (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ja ISO-maakoodit.

Puuttuuko kielessäsi merkkijono? Jokainen kieliesanakirja elää yhdessä [`i18n.js`](i18n.js)-paketissa, joka on jaettu 28 osioon `// ==== <lang> ====`-otsikkokommenteilla. Grep-hae oman kielesi otsikko hypätäksesi sen osioon, lisää sitten / muokkaa avainta. Täysin uuden kielen lisääminen = liitä uusi IIFE-lohko tiedostoon `i18n.js` aakkosjärjestyksen mukaiseen kohtaan, lisää kielikoodi `SUPPORTED_LANGS`-listaan `app.js`:ssä, ja lisää `<select>`-vaihtoehto `index.html`:ssä.

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
  - `i18n.js` — yksi käsin ylläpidetty paketti, joka kantaa kaikki 28 kieliesanakirjaa. Jokainen kieli on itsenäinen IIFE, joka määrittää `window.I18N[<lang>]` tasaiseksi avain→merkkijono-kartaksi. Lohkot rajataan `// ==== <lang> ====`-otsikkokommenteilla — grep-hae yksi hypätäksesi kyseiseen kieleen. Paketoitu yhteen tiedostoon 28 erillisen sijaan, koska käännöstiedostot ovat hyvin toistuvia (samat avainnimet, sama paikkamerkkisyntaksi) ja gzip pakkaa koko joukon paljon paremmin kuin 28 erillistä virtaa — säästää ~23 KB ensimmäisessä latauksessa ja poistaa 27 HTTP-pyyntöä. `t()` ja `applyLanguage()` `app.js`:ssä käsittelevät haut (englanninkielisellä varauksella) ja kävelevät DOM:ssa päivittäen jokaisen `[data-i18n*]`-elementin.
  - `contests.js` — yksi käsin ylläpidetty paketti, joka kantaa kaikki 68 kilpailukokoonpanoa. Jokainen kilpailu on itsenäinen IIFE, joka määrittää `window.CONTESTS[<id>]` skeeman mukaisen kokoonpano-olion (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Lohkot rajataan `// ==== <id> ====`-otsikkokommenteilla — grep-hae yksi hypätäksesi kyseiseen kilpailuun. Paketoitu yhteen tiedostoon 68 erillisen sijaan, koska kilpailukokoonpanot ovat hyvin toistuvia (sama skeema, sama `APP_LQ_*`-etuliite, samat Cabrillo-otsikkokenttien nimet) ja gzip pakkaa koko joukon paljon paremmin kuin 68 erillistä virtaa — säästää ~42 KB ensimmäisessä latauksessa ja poistaa 67 HTTP-pyyntöä. Ladataan yhdellä `<script>`-tunnisteella `index.html`:ssä ennen `app.js`:ää, joten rekisteri on täytetty, kun Kilpailu-pudotusvalikko rakennetaan.
- Testattu viimeisimmällä Chromium, Firefox ja Safari (työpöytä + iOS).

## Kiitokset

Kehittänyt [YL3IM](https://www.qrz.com/db/YL3IM).

Kiitos [A65BR](https://www.qrz.com/db/A65BR) Olegille korvaamattomista vihjeistä, jotka tekivät satelliitti-QSO-osasta todella käytettävän — modernit kaksikirjaimiset Sat-mode-tunnukset, AMSAT-luettelo ja uplink/downlink-automaattisäätö juontavat kaikki juurensa hänen palautteestaan.

Maiden liput perustuvat Unicoden alueellisiin indikaattorisekvenssseihin. Ne renderöityvät oikein macOS:ssä, iOS:ssä, Linuxissa (lipuille kykenevällä emoji-fontilla) ja Androidissa. Windows ei sisällä järjestelmälippufonttia, joten lippuemojit saattavat näkyä siellä kirjainpareina.
