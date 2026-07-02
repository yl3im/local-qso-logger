# Local QSO Logger

## Léigh i do theanga

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 Gaeilge · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Logálaí QSO raidió amaitéarach a chosnaíonn do phríobháideacht agus a ritheann go hiomlán i do bhrabhsálaí. Gan cuntas, gan freastalaí, gan rianú, gan anailísíocht — maireann do leabhair loga sa `localStorage` amháin i do bhrabhsálaí agus ní fhágann siad do ghléas riamh.

Le [YL3IM](https://www.qrz.com/db/YL3IM). Suíomh an tionscadail: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger ag rith ar iPad](media/iPad.png)

## Clár ábhair

- [Léigh i do theanga](#léigh-i-do-theanga)
- [Gnéithe](#gnéithe)
- [Ag tosnú](#ag-tosnú)
- [Suiteáil mar PWA ar mhóibíl](#suiteáil-mar-pwa-ar-mhóibíl)
  - [iOS (Safari amháin)](#ios-safari-amháin)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Leabhair loga](#leabhair-loga)
- [QSOanna](#qsoanna)
- [Iompórtáil agus easpórtáil ADIF](#iompórtáil-agus-easpórtáil-adif)
- [Príobháideacht agus sonraí](#príobháideacht-agus-sonraí)
- [Teanga an chomhéadain](#teanga-an-chomhéadain)
- [Téamaí](#téamaí)
- [Nótaí teicniúla](#nótaí-teicniúla)
- [Creidmheasanna](#creidmheasanna)

## Gnéithe

- Leabhair loga iolracha; gach ceann le liosta QSO féin.
- Gníomhartha leabhair loga: cruthaigh, athainmnigh, scrios, iompórtáil ó ADIF, easpórtáil go ADIF (`.adi`).
- Foirm QSO eagraithe i dtrí bhloc: **Sonraí stáisiúin** (comhartha glaonna an stáisiúin, comhartha glaonna an oibreora, greille féin) a fhanann greamaithe idir QSOanna; **Mód oibriúcháin** (mód iomadaithe, satailít, mód, mód satailíte, banda, banda RX) le réimsí satailíte le feiceáil nuair is é *Satailít* an mód iomadaithe; agus **Sonraí QSO** (comhartha glaonna a dtéitear i dteagmháil leis, greille na staisiúin eile, dáta/am UTC agus á chur in eagar, nóta, RST seolta, RST faighte).
- Tacsanomaíocht iomlán ADIF `MODE` → `SUBMODE` sa liosta anuas módanna — roghnaigh mód tuismitheoirí (`SSB`, `MFSK`, …) nó téigh díreach go fo-mhód sonrach (`USB`, `FT4`, …); stórálann an aip an dá réimse de réir ADIF agus taispeánann an tábla an fo-mhód sonrach nuair atá ceann ann.
- Liosta iomlán mód iomadaithe ADIF (SAT, RPT, EME, ES, MS, Aurora, srl.) mar liosta anuas.
- Catalóg iomlán satailíte AMSAT (~110 satailít) agus liosta anuas **Mód satailíte** dhá leibhéal: cóid dhá litir roghnaithe uplink/downlink ag barr (LU, LV, SX, UU, UV, VA, VU, VV) agus na hainmníochtaí aon litir oidhreachta (A/B/J/K/L/R/S/T/U/V/W/X) grúpáilte mar *as dáta* thíos. Trí mhód satailíte a roghnú, coigeartaítear `BAND` (uplink) agus `RX band` (downlink) go huathoibríoch.
- Cuir in eagar agus scrios aon QSO (le deimhniú ar scriosadh).
- Luachanna réamhshocraithe ciallmhara: dáta/am UTC réamhlíonta chuig *anois*, réamhshocraithe RST bunaithe ar mhód (59 do mhódanna gutha, 599 do CW/digiteach), sonraí stáisiúin + banda + mód + mód iomadaithe greamaithe ar QSOanna comhleanúnacha (ní ghlantar ach na réimsí in aghaidh teagmhála — comhartha glaonna, a ngreille, nóta, RST — tar éis gach *Loga QSO*).
- Táscaire comhartha glaonna dúbailte beo (faisnéiseach — ceadaítear dúblaigh).
- Colún bratach tíre arna dhíorthú ó réimír an chomhartha glaonna (clúdaíonn ≥99 % de réimírí coitianta raidió amaitéaraigh, lena n-áirítear glaoanna iniompartha mar `9A/M0NCG`).
- Taispeántas dáta áitiúil-feasach sa tábla QSO; fanann stóráil ISO agus aschur ADIF gan athrú.
- Comhéadan ar fáil i **28 teanga** (Béarla móide 22 script Laidineach, 5 Coireallach, agus Gréigis); roghnóir emoji brataí sa cheanntásc.
- Téamaí lae / oíche (lá mar réamhshocrú; tá an lasc sa cheanntásc).
- Leagan amach freagrúil atá mór le móibíl le cnaipí méid tadhlach.
- Oibríonn go hiomlán as líne — gan iarratais líonra ar bith am ar bith.
- In-suiteáilte mar PWA (Cuir leis an scáileán baile / Suiteáil feidhleantas) nuair a óstáiltear thar HTTPS.

## Ag tosnú

Oscail `index.html` i mbrabhsálaí nua-aimseartha. Gan céim tógála, gan suiteáil, gan freastalaí.

Más mian leat é a óstáil, cuir na comhaid statacha (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` agus an t-eolaire `i18n/` leis na 28 comhad aistriúcháin) ar aon óstaí statach (GitHub Pages, Netlify, do fhreastalaí gréasáin féin). Oibríonn sé freisin thar `file://` — déantar clárú an oibrí seirbhíse a scipeáil go huathoibríoch ar an bprótacal `file:`, ionas go n-oibríonn oscailt `index.html` go díreach ón diosca go glan.

Nuair a óstáiltear thar HTTPS, éiríonn an aip in-suiteáilte mar PWA (roghchlár *Suiteáil feidhleantas* / *Cuir leis an scáileán baile* sa bhrabhsálaí) agus oibríonn sé as líne tar éis an chéad chuairte a bhuíochas le hoibrí seirbhíse tosaíocht taisce a réamh-chuireann i dtaisce gach comhad statach (UI + gach aistriúchán).

Cruthaítear leabhar loga réamhshocraithe go huathoibríoch ar an gcéad chuairt, ionas gur féidir leat tosú ag logáil láithreach.

## Suiteáil mar PWA ar mhóibíl

Nuair a óstáiltear an aip thar HTTPS (m.sh. GitHub Pages), is féidir leat í a shuiteáil ar scáileán baile do ghutháin ionas go ritheann sí lánscáileán gan cróm brabhsálaí. Tar éis an chéad seoladh, cuireann an t-oibrí seirbhíse gach rud i dtaisce, ionas go n-oibríonn seoladh ina dhiaidh sin go hiomlán as líne.

### iOS (Safari amháin)

Ar iOS, ní féidir ach Safari PWAanna a shuiteáil — ní féidir le brabhsálaithe tríú páirtí.

1. Oscail an suíomh i **Safari**.
2. Tapáil an cnaipe **Comhroinn**.
3. Roghnaigh **Cuir leis an Scáileán Baile**, ansin **Cuir leis**.

Siúlóid:

![Siúlóid suiteála iOS](media/iOS_add_to_home_screen.gif)

Foinse ardchaighdeáin: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Oscail an suíomh i do bhrabhsálaí. D'fhéadfadh leid *Suiteáil feidhleantas* a bheith le feiceáil go huathoibríoch.
2. Mura gcuirtear é sin i láthair, oscail an **roghchlár ⋮** → **Suiteáil feidhleantas** (nó **Cuir leis an Scáileán Baile** ar leaganacha níos sine).

Siúlóid:

![Siúlóid suiteála Android](media/Android_add_to_home_screen.gif)

Foinse ardchaighdeáin: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Leabhair loga

- **Cruthaigh:** clóscríobh ainm i *Ainm loga* agus cuir isteach é. Má fhágann tú an t-ainm bán, is é `Log YYYY-MM-DD HH:MM UTC` an réamhshocrú.
- **Athraigh:** cliceáil ar leabhar loga sa bharra taoibh.
- **Athainmnigh:** cliceáil ar *Athainmnigh* i gceanntásc an leabhair loga. Brúigh Iontráil le sábháil, Éalú le cealaigh.
- **Scrios:** cliceáil ar *Scrios loga*. Iarrfar ort é a dheimhniú. Má scriosann tú an leabhar loga deiridh, cruthaítear ceann úr go huathoibríoch.

## QSOanna

- Líon isteach an fhoirm agus brúigh **Loga QSO**.
- Eagraítear an fhoirm i dtrí bhloc:
  - **Sonraí stáisiúin** — *Comhartha glaonna stáisiúin* (do chomhartha glaonna tarchuradóireachta, ADIF `STATION_CALLSIGN`), *Oibreoir* (comhartha glaonna an oibreora aonair — difriúil ón *gcomhartha glaonna stáisiúin* nuair atá oibreoir aoi ag micreafón stáisiúin clúib; ADIF `OPERATOR`) agus *Mo ghreille* (ADIF `MY_GRIDSQUARE`). Fanann siad seo greamaithe idir QSOanna sa seisiún céanna — socraigh iad uair amháin agus déantar iad a iompar ar aghaidh.
  - **Mód oibriúcháin** — *Mód iomadaithe*, *Mód*, *Banda*, móide na réimsí satailíte *Satailít* / *Mód satailíte* / *Banda RX* nuair is é *Satailít* an mód iomadaithe. Tá an banda, mód, agus mód iomadaithe greamaithe cosúil le sonraí stáisiúin.
  - **Sonraí QSO** — réimsí in aghaidh teagmhála: *Comhartha glaonna*, *Greille* (Maidenhead na staisiúin eile), *Nóta* (ADIF `COMMENT`), *RST seolta*, *RST faighte*. Agus QSO atá ann cheana féin á chur in eagar, taispeántar *Dáta (UTC)* agus *Am (UTC)* freisin sa bhloc seo. Glantar na réimsí seo tar éis gach *Loga QSO*.
- Déantar gach comhartha glaonna (a dtéitear i dteagmháil leis, stáisiúin, oibreoir) a uaschás go huathoibríoch agus tú ag clóscríobh; déanann an dá réimse greille an rud céanna.
- Réamhlíontar dáta agus am chuig *anois* in UTC ar chur isteach; agus á chur in eagar is féidir leat aon luach a chlóscríobh.
- RST seolta / RST faighte, má fhágtar bán iad, is **59** an réamhshocrú do mhódanna gutha (SSB/FM/DIGITALVOICE) agus **599** do CW agus módanna digiteacha (CW/FT8/FT4/RTTY/PSK31/JT65). Leanann an réamhshocrú an MODE tuismitheoirí, mar sin fiú trí fho-mhód sonrach mar *USB* nó *FT4* a roghnú tugtar an réamhshocrú ceart.
- Taispeántar slis *Dúblach sa loga seo* faoi réimse an chomhartha glaonna má tá an glao ann cheana sa leabhar loga reatha. *Ní* chuirtear cosc ar dhúblaigh.
- **Mód iomadaithe** — liosta anuas roghanna de mhódanna iomadaithe ADIF (SAT, RPT, EME, F2, Es, MS, LOS, srl.). Fág bán do QSOanna HF talúna gnátha.
- **QSOanna satailíte** — trí mhód iomadaithe *Satailít* a roghnú nochttar trí réimse satailíte amháin: **Satailít** (liosta anuas de ~110 satailít cláraithe AMSAT), **Mód satailíte** (ainmníochtaí litreach AMSAT, grúpáilte mar chóid dhá litir *nua-aimseartha* uplink/downlink ag barr agus cóid aon litir *as dáta* thíos) agus **Banda RX** (banda downlink). Ní mór satailít, mód satailíte agus banda RX a líonadh — diúltóidh an brabhsálaí cur isteach gan iad. Má roghnaíonn tú **Mód satailíte** líontar an príomh-**Bhanda** go huathoibríoch leis an mbanda uplink agus **Banda RX** leis an mbanda downlink (m.sh. mód J → uplink 2m, downlink 70cm). Trí mhalartú *ar ais* go satailít ó mhód iomadaithe eile athshocraítear an mód satailíte ionas go spreagtar tú rogha nua a dhéanamh. Ní iompraíonn QSOanna neamhshatailíte réimsí satailíte riamh; trí QSO atá ann cheana a athrú ó satailít go mód iomadaithe eile glantar iad go néata. Is réimsí ginearálta iad **Greille** agus **Mo ghreille** (úsáideach freisin do chomórtais greille VHF/UHF) agus fanann siad infheicthe do gach QSO.
- **Cuir QSO in eagar** leis an gcnaipe *Cuir in eagar* ar an gciarsúr. Athraíonn an fhoirm go mód *Nuashonraigh QSO*, aibhsítear an ciarsúr, agus taispeántar cnaipe *Cealaigh*. Má athraíonn tú leabhair loga nó má scriosann tú an loga cealaítear an eagarthóireacht go huathoibríoch.
- **Scrios QSO** leis an gcnaipe *Scrios* ar an gciarsúr (iarrann deimhniú).

## Iompórtáil agus easpórtáil ADIF

- **Easpórtáil**: cliceáil ar *Easpórtáil .adi* i gceanntásc an leabhair loga. Íoslódáiltear comhad ag cloí le **ADIF 3.1.7**. Dearbhaíonn an ceanntásc `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` agus `CREATED_TIMESTAMP` (UTC). Réimsí in aghaidh QSO a astaítear (nuair nach bhfuil siad folamh): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — ina dhiaidh sin gach réimse ADIF breise a caomhnaíodh ar iompórtáil (féach thíos).
- **Iompórtáil**: cliceáil ar *Iompórtáil comhad .adi* faoin bhfoirm cruthaigh leabhar loga agus roghnaigh comhad `.adi` / `.adif`. Cruthaítear leabhar loga nua uaidh, darb ainm `Imported YYYY-MM-DD HH:MM UTC`. Ní chumasc iompórtáil le leabhar loga atá ann cheana.
- **Timthriall gan caillteanas**: ar iompórtáil, coinnítear aon réimse ADIF nach samhlaíonn an aip ina comhéadan (m.sh. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, réimsí `APP_*`) ar an QSO agus astaitear arís go litriúil ar an gcéad easpórtáil eile é. Mar sin caomhnaíonn comhad a easpórtáiltear a iompórtáladh é féin gach rud.
- Caitear le fad réimse mar chomhaireamh beart UTF-8 mar a éilíonn an sonraíocht, mar sin déantar téacs il-bheart (m.sh. comharthaí glaonna cló sínte in `COMMENT`) a pharsáil i gceart.

## Príobháideacht agus sonraí

- Stóráiltear gach sonra i `localStorage` do bhrabhsálaí faoin eochair `local-qso:v1`.
- Ní tharchuirtear aon rud in aon áit. Níl aon chúl-chóras, glao API, teileamaictric ná anailísíocht ann.
- Ciallaíonn sonraí suímh an bhrabhsálaí a ghlanadh, mód príobháideach/anaithnid a úsáid, nó brabhsálaí/gléas eile a úsáid leabhar loga nua folamh — úsáid *Easpórtáil .adi* le cúltaca a dhéanamh.

## Teanga an chomhéadain

Clúdaíonn roghnóir teanga sa cheanntásc **28 teanga**. Roghnaigh ceann agus déantar an chuid eile den chomhéadan a athsholáthar láithreach; sábháiltear do rogha in éineacht le do logaí agus urramaítear é ar an gcéad chuairt eile. Is é an Béarla an réamhshocrú.

Teangacha ar fáil (emoji brataí + ainm dúchasach; in ord aibítre laistigh de gach córas scríbhneoireachta):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Fanann lipéid theicniúla uilíocha ina bhfoirm chanónach i ngach teanga: ainmneacha banda (`20m`, `70cm`, …), cóid mód ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` agus cóid tíre ISO.

An bhfuil teaghrán ar iarraidh i do theanga? Is comhad beag aonair é gach teanga faoi [`i18n/`](i18n/) — cóipeáil `i18n/en.js`, aistrigh na luachanna, sábháil mar `i18n/<code>.js`, ansin cuir clib `<script>` móide rogha `<select>` in `index.html` agus an cód in `SUPPORTED_LANGS` in `app.js`.

## Téamaí

Athraíonn an lasc téama sa cheanntásc idir lá (réamhshocrú) agus oíche. Sábháiltear an rogha in éineacht le do logaí agus urramaítear é ar an gcéad chuairt eile. Leanann roghnóirí dúchasacha dáta/ama an téama trí `color-scheme`.

## Nótaí teicniúla

- Aip leathanach aonair, HTML + CSS + JavaScript vanilla. Gan creataí, gan céim tógála, gan spleáchais.
- Comhaid foinse:
  - `index.html` — marcáil agus meite-chlibeanna.
  - `style.css` — téamaí agus leagan amach (athróga lae/oíche, fiosruithe meáin mhóibíl).
  - `app.js` — staid, buanú, rindreáil, parsálaí/srathóir ADIF, réimír comhartha glaonna → cuardach tíre.
  - `favicon.svg` — favicon SVG inlíne.
  - `manifest.webmanifest` — Web App Manifest (ainm, dath téama, raon feidhme, deilbhín) ionas go bhfuil an aip in-suiteáilte mar PWA ar mhóibíl agus ar dheasc.
  - `service-worker.js` — oibrí seirbhíse tosaíocht taisce a réamh-chuireann i dtaisce gach comhad statach ar shuiteáil, a ghlanann seanchaí ar ghníomhachtú, agus a choinníonn an aip go hiomlán as líne tar éis an chéad chuairte. Sceipitear an clárú go huathoibríoch ar an bprótacal `file://` ionas go bhfanann oscailt `index.html` go díreach ón diosca glan.
  - `i18n/<lang>.js` — comhad aistriúcháin amháin in aghaidh teanga tacaithe (28 san iomlán). Is IIFE beag é gach ceann a shannadh `window.I18N[<lang>]` léarscáil eochair→teaghrán cothrom. Láimhseálann `t()` agus `applyLanguage()` in `app.js` cuardaigh (le cúltaca Béarla) agus siúlann siad an DOM ag nuashonrú gach eilimint `[data-i18n*]`.
- Tástáilte ar Chromium, Firefox agus Safari (deasc + iOS) le déanaí.

## Creidmheasanna

Tógtha ag [YL3IM](https://www.qrz.com/db/YL3IM).

Buíochas le [A65BR](https://www.qrz.com/db/A65BR) Oleg as na leidanna luachmhara a rinne an cuid QSO satailíte iarbhír inúsáidte — na hainmníochtaí nua-aimseartha dhá litir mód satailíte, catalóg AMSAT, agus an coigeartú uathoibríoch uplink/downlink, tháinig siad ar fad óna aiseolas.

Braitheann bratacha tíortha ar shreachanna táscaire réigiúnacha Unicode. Taispeántar iad i gceart ar macOS, iOS, Linux (le clófhoireann emoji atá in ann bratacha) agus Android. Ní chuimsíonn Windows clófhoireann bratach córais, mar sin d'fhéadfadh emoji bratacha a bheith le feiceáil mar phéirí litreacha ansin.
