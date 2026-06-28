# Local QSO Logger

## Léigh i do theanga

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 Gaeilge · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Loga QSO raidió amaitéarach a thugann meas don phríobháideacht agus a ritheann go hiomlán i do bhrabhsálaí. Gan cuntas, gan freastalaí, gan rianú, gan anailísíocht — ní fhanann do lóganna ach in `localStorage` do bhrabhsálaí agus ní fhágann siad do ghléas riamh.

Le [YL3IM](https://www.qrz.com/db/YL3IM). Suíomh gréasáin an tionscadail: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger ar iPad](media/iPad.png)

## Clár

- [Léigh i do theanga](#léigh-i-do-theanga)
- [Gnéithe](#gnéithe)
- [Ag tosú](#ag-tosú)
- [Suiteáil mar PWA ar fón póca](#suiteáil-mar-pwa-ar-fón-póca)
  - [iOS (Safari amháin)](#ios-safari-amháin)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Lóganna](#lóganna)
- [QSO](#qso)
- [Iompórtáil agus easpórtáil ADIF](#iompórtáil-agus-easpórtáil-adif)
- [Príobháideacht agus sonraí](#príobháideacht-agus-sonraí)
- [Teanga an chomhéadain](#teanga-an-chomhéadain)
- [Téamaí](#téamaí)
- [Nótaí teicniúla](#nótaí-teicniúla)
- [Buíochas](#buíochas)

## Gnéithe

- Lóganna iolracha, gach ceann lena liosta QSO féin.
- Gníomhartha lóga: cruthaigh, athainmnigh, scrios, iompórtáil ó ADIF, easpórtáil go ADIF (`.adi`).
- Réimsí QSO: glaomharc, dáta UTC, am UTC, banda, mód, RST seolta, RST faighte.
- Cuir QSO ar bith in eagar nó scrios é (le deimhniú nuair a scriosann tú).
- Réamhshocruithe ciallmhara: dáta/am UTC an lae inniu réamhlíonta, réamhshocruithe RST de réir an mhóid (59 do mhóid ghutha, 599 do CW/digiteach), banda agus mód seasta idir QSOnna comhleanúnacha.
- Táscaire dúblach glaomhairc i bhfíor-am (faisnéiseach — ceadaítear dúblacha).
- Colún brat tíre a fhaightear ó réimír an ghlaomhairc (clúdaíonn ≥99 % de na réimíreanna raidió amaitéaracha coitianta, lena n-áirítear glaomhairc inaistrithe ar nós `9A/M0NCG`).
- Taispeáint dáta atá feasach ar an locale sa tábla QSO; fanann stóráil ISO agus aschur ADIF gan athrú.
- Téamaí lae/oíche (lá mar réamhshocrú; tá an scoránaí sa cheanntásc).
- Leagan amach freagrach atá oiriúnach do ghuthán póca le cnaipí oiriúnacha don tadhall.
- Oibríonn sé go hiomlán as líne — gan aon iarratais líonra ag am ar bith.
- In-shuiteáilte mar PWA (Cuir leis an scáileán Baile / Suiteáil aip) nuair a óstáiltear é trí HTTPS.
- Comhéadan ar fáil i **28 teanga** (Béarla móide 22 i scríbhinn Laidineach, 5 i scríbhinn Choireallach, agus Gréigis); roghnóir le emoji bratacha sa cheanntásc.

## Ag tosú

Oscail `index.html` i mbrabhsálaí nua-aimseartha. Gan tógáil, gan suiteáil, gan freastalaí.

Chun é a óstáil, cuir na comhaid statacha (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` agus an chomhadlann `i18n/` leis na 28 comhad aistriúcháin) ar aon óstach statach (GitHub Pages, Netlify, do fhreastalaí gréasáin féin). Oibreoidh sé tríd `file://` freisin — déantar clárú an service worker a ligean thar ceal go huathoibríoch ar an bprótacal `file:`, mar sin oibríonn oscailt `index.html` go díreach ón diosca go glan.

Nuair a fhreastalaítear trí HTTPS, bíonn an feidhmchlár in-shuiteáilte mar PWA (tríd an roghchlár brabhsálaí *Suiteáil aip* / *Cuir leis an scáileán Baile*) agus oibríonn sé as líne tar éis na chéad chuairte buíochas le service worker cache-first a réamh-thaisceann gach comhad statach (UI + gach aistriúchán).

Cruthaítear loga réamhshocraithe go huathoibríoch ar an gcéad chuairt, ionas gur féidir leat tosú ag logáil láithreach.

## Suiteáil mar PWA ar fón póca

Nuair a fhreastalaítear an feidhmchlár trí HTTPS (m.sh. GitHub Pages), is féidir leat é a shuiteáil ar scáileán baile do ghutháin ionas go reáchtáilfidh sé i lánscáileán gan chrome an bhrabhsálaí. Tar éis na chéad oscailte, taisceann an service worker gach rud, mar sin oibríonn na hoscailtí ina dhiaidh sin go hiomlán as líne.

### iOS (Safari amháin)

Ar iOS, ní féidir ach le Safari PWA a shuiteáil — ní féidir le brabhsálaithe tríú páirtí.

1. Oscail an suíomh i **Safari**.
2. Brúigh an cnaipe **Comhroinn**.
3. Roghnaigh **Cuir le scáileán Baile**, ansin **Cuir leis**.

Treoir:

![Treoir suiteála iOS](media/iOS_add_to_home_screen.gif)

Foinse de chaighdeán níos airde: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Oscail an suíomh i do bhrabhsálaí. D'fhéadfadh leid *Suiteáil aip* nochtadh go huathoibríoch.
2. Mura ndéanann, oscail an **roghchlár ⋮** → **Suiteáil aip** (nó **Cuir leis an scáileán Baile** i leaganacha níos sine).

Treoir:

![Treoir suiteála Android](media/Android_add_to_home_screen.gif)

Foinse de chaighdeán níos airde: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Lóganna

- **Cruthaigh:** clóscríobh ainm i *Ainm an lóga* agus seol. Más rud é go bhfágann tú an t-ainm folamh, beidh an réamhshocrú `Log YYYY-MM-DD HH:MM UTC`.
- **Athraigh:** cliceáil ar aon loga sa bharra taoibh.
- **Athainmnigh:** cliceáil *Athainmnigh* i gceanntásc an lóga. Sábháilfidh Enter, cealóidh Escape.
- **Scrios:** cliceáil *Scrios an lóg*. Iarrfar ort deimhniú. Má scriosann tú an loga deireanach, cruthófar ceann nua go huathoibríoch.

## QSO

- Líon isteach an fhoirm agus brúigh **Taifead QSO**.
- Athraítear an glaomharc go ceannlitreacha go huathoibríoch agus tú ag clóscríobh.
- Réamhlíontar dáta agus am go *anois* in UTC agus athshocraítear iad tar éis gach QSO taifeadta; is féidir leat fós aon luach a chur isteach.
- Fanann an banda agus an mód idir QSO sa seisiún céanna, mar sin ní gá duit iad a roghnú arís le haghaidh gach teagmhála.
- RST seolta / RST faighte, má fhágtar folamh iad, titeann siad ar ais go **59** do mhóid ghutha (SSB/FM/AM/DIGITALVOICE) agus go **599** do CW agus móid dhigiteacha (CW/FT8/FT4/RTTY/PSK31/JT65).
- Tagann sliosa *Dúblach sa lóg seo* in airde faoin réimse glaomhairc má tá an glaomharc ann cheana féin sa loga reatha. *Ní* chuirtear bac ar dhúblacha.
- **Cuir QSO in eagar** le cnaipe *Cuir in eagar* ar an ró. Athraíonn an fhoirm go mód *Nuashonraigh QSO*, aibhsítear an ró, agus tagann cnaipe *Cealaigh* in airde. Cealaíonn athrú lóga nó scriosadh an lóga an t-eagarthóireacht go huathoibríoch.
- **Scrios QSO** le cnaipe *Scrios* ar an ró (iarrann deimhniú).

## Iompórtáil agus easpórtáil ADIF

- **Easpórtáil**: cliceáil *Easpórtáil .adi* i gceanntásc an lóga. Íoslódáiltear comhad le `ADIF_VER 3.1.4` agus `PROGRAMID local-qso` sa cheanntásc. Mapáilann gach taifead `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Iompórtáil**: cliceáil *Iompórtáil comhad .adi* faoin bhfoirm cruthaithe lóga agus roghnaigh comhad `.adi`/`.adif`. Cruthaítear loga nua leis an ainm `Iompórtáilte YYYY-MM-DD HH:MM UTC`. Ní chumasctear an iompórtáil isteach i loga atá ann cheana riamh.
- Caitear le comhaireamh fhad na réimse mar líon na gcarachtar, a oibríonn le ADIF ASCII (gach réimse QSO caighdeánach). Is féidir le hábhar il-bheart i réimsí téacs neamhriachtanacha a pharsáil go aisteach.

## Príobháideacht agus sonraí

- Stóráiltear gach sonra in `localStorage` an bhrabhsálaí faoin eochair `local-qso:v1`.
- Ní tharchuirtear faic áit ar bith. Gan inneall siar, gan glaonna API, gan teiliméadracht, gan anailísíocht.
- Ciallaíonn glanadh sonraí an tsuímh, úsáid mód príobháideach/incognito, nó úsáid brabhsálaí/gléas eile loga folamh — úsáid *Easpórtáil .adi* le haghaidh cúltacaí.

## Teanga an chomhéadain

Clúdaíonn roghnóir teanga sa cheanntásc **28 teanga**. Roghnaigh ceann amháin agus déantar an chuid eile den chomhéadan a athrindreáil láithreach; sábháiltear do rogha lena lóganna agus tugtar meas air ag an gcéad chuairt eile. Is é Béarla an réamhshocrú.

Teangacha ar fáil (emoji brat + ainm dúchais; in ord aibítre laistigh de gach script):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Fanann lipéid theicniúla uilíocha ina bhfoirm chanónach i ngach teanga: ainmneacha banda (`20m`, `70cm`, …), cóid mhód ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` agus cóid tíre ISO.

In easnamh teaghrán i do theanga? Is comhad amháin beag in [`i18n/`](i18n/) gach teanga — cóipeáil `i18n/en.js`, aistrigh na luachanna, sábháil mar `i18n/<cód>.js`, ansin cuir clib `<script>` móide rogha `<select>` leis in `index.html` agus an cód in `SUPPORTED_LANGS` in `app.js`.

## Téamaí

Athraíonn an scoránaí téama sa cheanntásc idir lá (réamhshocrú) agus oíche. Sábháiltear an sainrogha lena lóganna agus tugtar meas air ag an gcéad chuairt eile. Leanann roghnóirí dúchasacha dáta/ama an téama trí `color-scheme`.

## Nótaí teicniúla

- Feidhmchlár leathanach amháin, HTML + CSS + JavaScript glan. Gan creataí, gan tógáil, gan spleáchais.
- Comhaid foinse:
  - `index.html` — marcáil agus meta-thicéid.
  - `style.css` — téamaí agus leagan amach (athróga lá/oíche, ceisteanna meán soghluaiste).
  - `app.js` — staid, persistance, rindreáil, ADIF parser/serializer, cuardach réimír glaomhairc → tír.
  - `favicon.svg` — favicon SVG inlíne.
  - `manifest.webmanifest` — Web App Manifest (ainm, dath téama, scope, deilbhín) ionas gur féidir an feidhmchlár a shuiteáil mar PWA ar fhón póca agus ar dheasc.
  - `service-worker.js` — service worker cache-first a réamh-thaisceann gach comhad statach ag an tsuiteáil, a aistríonn na taisce sean ag gníomhachtú, agus a choinníonn an feidhmchlár go hiomlán as líne tar éis na chéad chuairte. Déantar clárú a ligean thar ceal go huathoibríoch don phrótacal `file://`, mar sin fanann oscailt `index.html` go díreach ón diosca glan.
  - `i18n/<lang>.js` — comhad aistriúcháin amháin in aghaidh na teanga tacaithe (28 san iomlán). Is IIFE beag gach ceann a sannann do `window.I18N[<lang>]` léarscáil leibhéal eochair→teaghrán. Láimhseálann `t()` agus `applyLanguage()` in `app.js` na cuardaigh (le fallback Béarla) agus siúlann siad tríd an DOM ag nuashonrú gach eilimint `[data-i18n*]`.
- Tástáilte ar Chromium, Firefox agus Safari le déanaí (deasc + iOS).

## Buíochas

Tógtha ag [YL3IM](https://www.qrz.com/db/YL3IM).

Braitheann bratacha tíre ar sheichimh táscaire réigiúnacha Unicode. Rindreáiltear iad i gceart ar macOS, iOS, Linux (le cló-aghaidh emoji a thacaíonn le bratacha) agus Android. Ní chuimsíonn Windows cló-aghaidh bratach córais, mar sin d'fhéadfadh emoji brat a bheith le feiceáil ann mar phéirí litreacha.
