# Local QSO Logger

## Léigh i do theanga

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 Gaeilge · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Logálaí QSO raidió amaitéarach a chosnaíonn do phríobháideacht agus a ritheann go hiomlán i do bhrabhsálaí. Gan cuntas, gan freastalaí, gan rianú, gan anailísíocht — maireann do leabhair loga sa `localStorage` amháin i do bhrabhsálaí agus ní fhágann siad do ghléas riamh.

Le [YL3IM](https://www.qrz.com/db/YL3IM). Suíomh an tionscadail: [qso.lv](https://qso.lv).

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
- [Comórtais](#comórtais)
- [Iompórtáil agus easpórtáil](#iompórtáil-agus-easpórtáil)
- [Príobháideacht agus sonraí](#príobháideacht-agus-sonraí)
- [Teanga an chomhéadain](#teanga-an-chomhéadain)
- [Téamaí](#téamaí)
- [Nótaí teicniúla](#nótaí-teicniúla)
- [Creidmheasanna](#creidmheasanna)

## Gnéithe

- Leabhair loga iolracha; gach ceann le liosta QSO féin.
- Tá **logaí comórtais** roghnach — roghnaigh ó chatalóg de 68 comórtas ionsuite agus leabhar loga á chruthú. Faigheann foirm QSO bloc *Malartú comórtais* atá sonrach don chomórtas, urramaíonn brath dúblach riail an chomórtais, agus scaoileann *Easpórtáil .cbr* comhad aighneachta Cabrillo v3 in éineacht leis an ngnáth-easpórtáil ADIF.
- Gníomhartha leabhair loga: cruthaigh, athainmnigh, scrios, iompórtáil comhad loga (ADIF nó Cabrillo — brathtar an fhormáid go huathoibríoch), easpórtáil go ADIF (`.adi`), móide *Easpórtáil .cbr* (Cabrillo v3) do leabhair loga comórtais. Athiompórtálann comhad `.cbr` a easpórtáladh roimhe seo ag an aip é mar an leabhar loga comórtais céanna.
- Foirm QSO eagraithe i dtrí bhloc: **Sonraí stáisiúin** (comhartha glaonna an stáisiúin, comhartha glaonna an oibreora, greille féin) a fhanann greamaithe idir QSOanna; **Mód oibriúcháin** (mód iomadaithe, satailít, mód, mód satailíte, banda, banda RX) le réimsí satailíte le feiceáil nuair is é *Satailít* an mód iomadaithe; agus **Sonraí QSO** (comhartha glaonna a dtéitear i dteagmháil leis, greille na staisiúin eile, dáta/am UTC agus á chur in eagar, nóta, RST seolta, RST faighte).
- Tacsanomaíocht iomlán ADIF `MODE` → `SUBMODE` sa liosta anuas módanna — roghnaigh mód tuismitheoirí (`SSB`, `MFSK`, …) nó téigh díreach go fo-mhód sonrach (`USB`, `FT4`, …); stórálann an aip an dá réimse de réir ADIF agus taispeánann an tábla an fo-mhód sonrach nuair atá ceann ann.
- Liosta iomlán mód iomadaithe ADIF (SAT, RPT, EME, ES, MS, Aurora, srl.) mar liosta anuas.
- Catalóg iomlán satailíte AMSAT (~110 satailít) agus liosta anuas **Mód satailíte** dhá leibhéal: cóid dhá litir roghnaithe uplink/downlink ag barr (LU, LV, SX, UU, UV, VA, VU, VV) agus na hainmníochtaí aon litir oidhreachta (A/B/J/K/L/R/S/T/U/V/W/X) grúpáilte mar *as dáta* thíos. Trí mhód satailíte a roghnú, coigeartaítear `BAND` (uplink) agus `RX band` (downlink) go huathoibríoch.
- Cuir in eagar agus scrios aon QSO (le deimhniú ar scriosadh).
- Luachanna réamhshocraithe ciallmhara: dáta/am UTC réamhlíonta chuig *anois*, réamhshocraithe RST bunaithe ar mhód (59 do mhódanna gutha, 599 do CW/digiteach), sonraí stáisiúin + banda + mód + mód iomadaithe greamaithe ar QSOanna comhleanúnacha (ní ghlantar ach na réimsí in aghaidh teagmhála — comhartha glaonna, a ngreille, nóta, RST — tar éis gach *Loga QSO*).
- Táscaire comhartha glaonna dúbailte beo (faisnéiseach — ceadaítear dúblaigh).
- Colún bratach tíre arna dhíorthú ó réimír an chomhartha glaonna (clúdaíonn ≥99 % de réimírí coitianta raidió amaitéaraigh, lena n-áirítear glaoanna iniompartha mar `9A/M0NCG`).
- Uath-bhrath **Mo ghreille** le tapáil amháin: cnaipe 🌐 in aice leis an réimse a iarrann do bhrabhsálaí do chomhordanáidí reatha agus a líonann isteach an ghreille Maidenhead 6-charachtar (baineann sé úsáid as API Geolocation an bhrabhsálaí — teastaíonn cead ón úsáideoir).
- Taispeántas dáta áitiúil-feasach sa tábla QSO; fanann stóráil ISO agus aschur ADIF gan athrú.
- Comhéadan ar fáil i **28 teanga** (Béarla móide 22 script Laidineach, 5 Coireallach, agus Gréigis); roghnóir emoji brataí sa cheanntásc.
- Téamaí lae / oíche (lá mar réamhshocrú; tá an lasc sa cheanntásc).
- Leagan amach freagrúil atá mór le móibíl le cnaipí méid tadhlach.
- Oibríonn go hiomlán as líne — gan iarratais líonra ar bith am ar bith.
- In-suiteáilte mar PWA (Cuir leis an scáileán baile / Suiteáil feidhleantas) nuair a óstáiltear thar HTTPS.

## Ag tosnú

Oscail `index.html` i mbrabhsálaí nua-aimseartha. Gan céim tógála, gan suiteáil, gan freastalaí.

Más mian leat é a óstáil, cuir na comhaid statacha (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, an t-aon bheart `i18n.js` amháin a iompraíonn na 28 foclóir teanga go léir, agus an t-aon bheart `contests.js` amháin a iompraíonn na 68 cumraíocht comórtais go léir) ar aon óstaí statach (GitHub Pages, Netlify, do fhreastalaí gréasáin féin). Oibríonn sé freisin thar `file://` — déantar clárú an oibrí seirbhíse a scipeáil go huathoibríoch ar an bprótacal `file:`, ionas go n-oibríonn oscailt `index.html` go díreach ón diosca go glan.

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
  - **Sonraí stáisiúin** — *Comhartha glaonna stáisiúin* (do chomhartha glaonna tarchuradóireachta, ADIF `STATION_CALLSIGN`), *Oibreoir* (comhartha glaonna an oibreora aonair — difriúil ón *gcomhartha glaonna stáisiúin* nuair atá oibreoir aoi ag micreafón stáisiúin clúib; ADIF `OPERATOR`) agus *Mo ghreille* (ADIF `MY_GRIDSQUARE`) le cnaipe 🌐 a líonann isteach an ghreille ó shuíomh reatha do bhrabhsálaí (API Geolocation — iarrfaidh an brabhsálaí cead an chéad uair). Fanann siad seo greamaithe idir QSOanna sa seisiún céanna — socraigh iad uair amháin agus déantar iad a iompar ar aghaidh.
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

## Comórtais

Is féidir le leabhar loga a bheith ina **loga comórtais** go roghnach — roghnaigh comórtas ó liosta anuas *Comórtas* san fhoirm chun leabhar loga a chruthú. Liosta anuas folamh = gnáthleabhar loga (réamhshocrú, gan athrú ar an iompar atá ann).

Faigheann logaí comórtais:

- **Bloc malartaithe comórtais** i bhfoirm QSO, arna rindreáil go dinimiciúil ó scéimre an chomórtais roghnaithe. Is iad `text`, `number` agus `serial` na cineálacha réimse (uath-mhéadaitheach, inléite amháin). Réamhlíontar réimsí atá marcáilte mar *sticky* (do chrios féin / do chontae / do cheantar / do chumhacht / d'aois / …) ó luach an QSO roimhe sin; glantar réimsí in aghaidh QSO (a gcrios, a n-uimhir sraithe, …) tar éis gach *Loga QSO*.
- **Suaitheantas comórtais** in aice le hainm an loga i gceanntásc an mhionsonraithe.
- Urramaíonn **brath dúblach** `duplicateRule` an chomórtais (`per-band-mode`, `per-band`, `per-day` nó `off`). Tá an slis fós faisnéiseach amháin — ní chuireann sé cosc ar chur isteach riamh.
- **Slis rabhaidh** nuair a thiteann an UTC reatha lasmuigh d'aon cheann de na fuinneoga dátaí a dhearbhaigh an comórtas (12 bliana réamhluchtaithe, 2026–2037), nó nuair nach bhfuil an banda / mód roghnaithe i dtacar dleathach an chomórtais. Ní chuireann sé cosc riamh.
- **Painéal faisnéise um chur isteach** i gceanntásc an mhionsonraithe: foirm inlíne do na réimsí ceanntásc Cabrillo a dhearbhaíonn an comórtas (catagóir, cumhacht, ainm, club, seoladh, soapbox, …). Maireann luachanna ar an leabhar loga, ní in aghaidh QSO.
- Cnaipe **Easpórtáil .cbr** i gceanntásc an mhionsonraithe, in aice le *Easpórtáil .adi*. Astaíonn sé comhad Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` réamhlíonta ó shonraí stáisiúin an chéad QSO, an chuid eile ón bpainéal faisnéise um chur isteach, ansin líne `QSO:` amháin in aghaidh teagmhála in ord croineolaíoch ag baint úsáide as colúin `sentTemplate` / `rcvdTemplate` an chomórtais.
- **Athiompórtáil Cabrillo** tríd an gcnaipe caighdeánach *Iompórtáil comhad loga* — filleann comhad `.cbr` a easpórtáladh roimhe seo ag an aip (nó ag aon logálaí eile a astaíonn Cabrillo v3 caighdeánach) ar ais go leabhar loga comórtais úr den chineál ceart. Meaitseáiltear an ceanntásc `CONTEST:` in aghaidh an chatalóg ionsuite; nuair a roinneann cumraíochtaí iolracha an chlib chéanna (m.sh. meaitseálann `ARRL-10` le `arrl-10m-dx` agus `arrl-10m-w` araon), díréamhaíonn an aip trí litir mhóid líne an QSO agus líon na gcolún a mheaitseáil in aghaidh teimpléad gach iarrthóra, agus ansin fabhraíonn sé don leagan `-dx`. Athhiodrálann réimsí ceanntásc (catagóir, ainm, club, soapbox, …) an painéal faisnéise um chur isteach; athhiodrálann luachanna malartaithe QSO `q.contestExchange` de réir theimpléad an chomórtais.

### Catalóg comórtais ionsuite (68 cumraíocht)

Grúpáilte de réir teaghlaigh:

- **Teaghlach CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Teaghlach ARRL** (9): ARRL DX SSB/CW (taobh DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (gach ceann seolta ó *bhoth* peirspictíochtaí DX agus W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE agus Eorpach eile** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Lár/Oirthear na hEorpa neamhshiméadrach — an dá pheirspictíocht** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Clubtha na Rúise / RadioSport** (12): Russian DX (an dá thaobh), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **An Bhealarúis + an Iodáil + an Chróit + an Spáinn + RTTY na hÚcráine** (12): Belarus BFRR CW+SSB (an dá thaobh), ARI DX (an dá thaobh), Croatian 9A CW (an dá thaobh), Spanish CNCW (an dá thaobh), Ukrainian RTTY (an dá thaobh).
- **Domhanda** (2): All Asian DX CW+SSB.

Seoltar comórtais neamhshiméadracha (áit a seolann an tír óstach agus an taobh DX malartuithe éagsúla) le **dhá chumraíocht** — ceann do pheirspictíocht na tíre óstaí (cód réigiúin greamaitheach) agus ceann don pheirspictíocht DX (uimhir sraithe ghreamaitheach). Is réimse aon-saor-théacs amháin é an taobh a fuarthas ionas gur féidir leis an oibreoir ceachtar formáid a chlóscríobh ag brath ar an teagmháil.

Iompraíonn gach cumraíocht:

- Athastaítear luachanna malartaithe comórtais in easpórtáil ADIF trí réimsí spás ainm `APP_LQ_*`; ligeann stampa ceanntáisc `APP_LQ_CONTEST_ID` d'athiompórtáil ina dhiaidh sin an leabhar loga a athhiodráitiú mar an comórtas céanna leis na réimsí go léir slán.
- 12 bliana de fhuinneoga dátaí (2026–2037) ionas go bhfanann an slis *lasmuigh d'fhuinneog an chomórtais* úsáideach ar feadh deich mbliana gan seachadadh úr.
- Teimpléad Cabrillo a mhapálann gach réimse malartaithe chuig an gcolún ceart ar líne `QSO:`.

Comórtas nua a chur leis = greamaigh bloc IIFE nua isteach in [`contests.js`](contests.js) ag an suíomh aibítreach (tá gach comórtas atá ann cheana theorannaithe ag nóta tráchta ceanntáisc `// ==== <id> ====`, mar sin tá sé éasca a fháil amach cá gcuirfí é). Ní theastaíonn aon athrú in `index.html`, aon athrú in `service-worker.js`, ná aon athrú in `app.js` — súnn an rindreálaí, an láimhseálaí cur isteach, an brathadóir dúblach, an t-imchuairt ADIF agus an t-astaitheoir Cabrillo isteach gach cumraíocht mar shonraí íon.

## Iompórtáil agus easpórtáil

- **Iompórtáil** aon chomhad loga — cliceáil ar *Iompórtáil comhad loga* faoin bhfoirm cruthaigh leabhar loga agus roghnaigh comhad `.adi` / `.adif` (ADIF) nó `.cbr` / `.cab` (Cabrillo v3). Braitear an fhormáid go huathoibríoch ó chéad líne an chomhaid (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → foláireamh "Níl tacaíocht EDI ann fós"). Cruthaítear leabhar loga nua i gcónaí — ní chumascann iompórtáil riamh le ceann atá ann cheana. Tagann iompórtálacha ADIF isteach mar ghnáthlogaí mura n-iompraíonn an ceanntásc `APP_LQ_CONTEST_ID` a scríobhadh ag ár n-easpórtáil comórtais féin (agus i gcás sin, athhiodrálann an loga mar loga comórtais den chomórtas sin). Tagann iompórtálacha Cabrillo isteach i gcónaí mar logaí comórtais — féach an rannán *Comórtais* le haghaidh conas a mheaitseáiltear an chlib `CONTEST:` in aghaidh an chatalóg ionsuite.
- **Easpórtáil ADIF**: cliceáil ar *Easpórtáil .adi* i gceanntásc an leabhair loga. Íoslódáiltear comhad ag cloí le **ADIF 3.1.7**. Dearbhaíonn an ceanntásc `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` agus `CREATED_TIMESTAMP` (UTC). Réimsí in aghaidh QSO a astaítear (nuair nach bhfuil siad folamh): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — ina dhiaidh sin gach réimse ADIF breise a caomhnaíodh ar iompórtáil (féach thíos).
- Déantar cur síos ar **Easpórtáil Cabrillo** sa rannán *Comórtais* thuas — níl sé ar fáil ach do leabhair loga comórtais (taispeántar an cnaipe *Easpórtáil .cbr* i gceanntásc an leabhair loga nuair atá comórtas ag an loga).
- **Timthriall gan caillteanas**: ar iompórtáil ADIF, coinnítear aon réimse nach samhlaíonn an aip ina comhéadan (m.sh. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, réimsí `APP_*`) ar an QSO agus astaitear arís go litriúil ar an gcéad easpórtáil ADIF eile é. Mar sin caomhnaíonn comhad a easpórtáiltear a iompórtáladh é féin gach rud.
- Caitear le fad réimse in ADIF mar chomhaireamh beart UTF-8 mar a éilíonn an sonraíocht, mar sin déantar téacs il-bheart (m.sh. comharthaí glaonna cló sínte in `COMMENT`) a pharsáil i gceart.

## Príobháideacht agus sonraí

- Stóráiltear gach sonra i `localStorage` do bhrabhsálaí faoin eochair `local-qso:v1`.
- Ní tharchuirtear aon rud in aon áit. Níl aon chúl-chóras, glao API, teileamaictric ná anailísíocht ann.
- Ciallaíonn sonraí suímh an bhrabhsálaí a ghlanadh, mód príobháideach/anaithnid a úsáid, nó brabhsálaí/gléas eile a úsáid leabhar loga nua folamh — úsáid *Easpórtáil .adi* le cúltaca a dhéanamh.

## Teanga an chomhéadain

Clúdaíonn roghnóir teanga sa cheanntásc **28 teanga**. Roghnaigh ceann agus déantar an chuid eile den chomhéadan a athsholáthar láithreach; sábháiltear do rogha in éineacht le do logaí agus urramaítear é ar an gcéad chuairt eile. Is é an Béarla an réamhshocrú.

Teangacha ar fáil (emoji brataí + ainm dúchasach; in ord aibítre laistigh de gach córas scríbhneoireachta):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Fanann lipéid theicniúla uilíocha ina bhfoirm chanónach i ngach teanga: ainmneacha banda (`20m`, `70cm`, …), cóid mód ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` agus cóid tíre ISO.

An bhfuil teaghrán ar iarraidh i do theanga? Maireann gach foclóir teanga i mbeart aonair [`i18n.js`](i18n.js), roinnte i 28 rannán le nótaí tráchta ceanntáisc `// ==== <lang> ====`. Déan grep ar cheanntásc do theanga chun léim go dtí a rannán, ansin cuir leis / cuir in eagar an eochair. Teanga iomlán nua a chur leis = greamaigh bloc IIFE nua isteach in `i18n.js` ag an suíomh aibítreach, cuir cód na teanga le `SUPPORTED_LANGS` in `app.js`, agus cuir rogha `<select>` le `index.html`.

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
  - `i18n.js` — beart amháin á chothabháil de láimh a iompraíonn na 28 foclóir teanga go léir. Is IIFE neamhspleách í gach teanga a shanntar `window.I18N[<lang>]` léarscáil eochair→teaghrán cothrom. Teorannaítear bloic le nótaí tráchta ceanntáisc `// ==== <lang> ====` — déan grep ar cheann chun léim go dtí an teanga sin. Bearta i gcomhad amháin in ionad 28 comhad ar leith toisc go bhfuil comhaid aistriúcháin an-athdhéanta (na hainmneacha eochrach céanna, an chomhréir shealbhóra-áite chéanna) agus go gcomhbhrúnn gzip an tacar iomlán i bhfad níos fearr ná 28 sruth ar leith — sábhálann sé ~23 KB ar an gcéad luchtú agus baintear 27 iarratas HTTP. Láimhseálann `t()` agus `applyLanguage()` in `app.js` cuardaigh (le cúltaca Béarla) agus siúlann siad an DOM ag nuashonrú gach eilimint `[data-i18n*]`.
  - `contests.js` — beart amháin á chothabháil de láimh a iompraíonn na 68 cumraíocht comórtais go léir. Is IIFE neamhspleách í gach comórtas a shanntar `window.CONTESTS[<id>]` réad cumraíochta atá ag comhlíonadh scéimre (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Teorannaítear bloic le nótaí tráchta ceanntáisc `// ==== <id> ====` — déan grep ar cheann chun léim go dtí an comórtas sin. Bearta i gcomhad amháin in ionad 68 comhad ar leith toisc go bhfuil cumraíochtaí comórtais an-athdhéanta (an scéimre céanna, an réimír `APP_LQ_*` céanna, na hainmneacha réimse ceanntáisc Cabrillo céanna) agus go gcomhbhrúnn gzip an tacar iomlán i bhfad níos fearr ná 68 sruth ar leith — sábhálann sé ~42 KB ar an gcéad luchtú agus baintear 67 iarratas HTTP. Luchtaithe ag clib `<script>` amháin in `index.html` roimh `app.js` ionas go bhfuil an clár líonta nuair a thógtar an liosta anuas Comórtas.
- Tástáilte ar Chromium, Firefox agus Safari (deasc + iOS) le déanaí.

## Creidmheasanna

Tógtha ag [YL3IM](https://www.qrz.com/db/YL3IM).

Buíochas le [A65BR](https://www.qrz.com/db/A65BR) Oleg as na leidanna luachmhara a rinne an cuid QSO satailíte iarbhír inúsáidte — na hainmníochtaí nua-aimseartha dhá litir mód satailíte, catalóg AMSAT, agus an coigeartú uathoibríoch uplink/downlink, tháinig siad ar fad óna aiseolas.

Braitheann bratacha tíortha ar shreachanna táscaire réigiúnacha Unicode. Taispeántar iad i gceart ar macOS, iOS, Linux (le clófhoireann emoji atá in ann bratacha) agus Android. Ní chuimsíonn Windows clófhoireann bratach córais, mar sin d'fhéadfadh emoji bratacha a bheith le feiceáil mar phéirí litreacha ansin.
