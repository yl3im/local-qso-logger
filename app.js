/* Local QSO Logger — all logic runs client-side; state persists in localStorage. */
(() => {
  "use strict";

  const STORAGE_KEY = "local-qso:v1";
  const APP_VERSION = "1.0";
  const ADIF_VERSION = "3.1.7";

  // Listed from longest wavelength to shortest (the source had 3cm/6cm swapped — fixed).
  const BANDS = [
    "2190m","630m","560m","160m","80m","60m","40m","30m","20m","17m","15m","12m","10m","8m","6m","5m","4m","2m","1.25m",
    "70cm","33cm","23cm","13cm","9cm","6cm","3cm","1.25cm",
    "6mm","4mm","2.5mm","2mm","1mm",
  ];
  const DEFAULT_BAND = "20m";
  const DEFAULT_MODE = "SSB";

  // ADIF MODE → list of SUBMODEs. Empty list = parent has no submodes (e.g. FM, FT8).
  // Parents in MODE_NO_PARENT_OPTION are *only* selectable via a submode (DYNAMIC/FSK/MTONE).
  const MODE_GROUPS = {
    "ATV": [],
    "CHIP": ["CHIP128","CHIP64"],
    "CLO": [],
    "CONTESTI": [],
    "CW": ["PCW"],
    "DIGITALVOICE": ["C4FM","DMR","DSTAR","FREEDV","M17"],
    "DOMINO": ["DOM-M","DOM11","DOM16","DOM22","DOM4","DOM44","DOM5","DOM8","DOM88","DOMINOEX","DOMINOF"],
    "DYNAMIC": ["VARA FM 1200","VARA FM 9600","VARA HF","VARA SATELLITE"],
    "FAX": [],
    "FM": [],
    "FSK": ["SCAMP_FAST","SCAMP_SLOW","SCAMP_VSLOW"],
    "FSK31": [],
    "FSK441": [],
    "FT8": [],
    "HELL": ["FMHELL","FSKH105","FSKH245","FSKHELL","HELL80","HELLX5","HELLX9","HFSK","PSKHELL","SLOWHELL"],
    "ISCAT": ["ISCAT-A","ISCAT-B"],
    "JT4": ["JT4A","JT4B","JT4C","JT4D","JT4E","JT4F","JT4G"],
    "JT44": [],
    "JT65": ["JT65A","JT65B","JT65B2","JT65C","JT65C2"],
    "JT6M": [],
    "JT9": ["JT9-1","JT9-10","JT9-2","JT9-30","JT9-5","JT9A","JT9B","JT9C","JT9D","JT9E","JT9E FAST","JT9F","JT9F FAST","JT9G","JT9G FAST","JT9H","JT9H FAST"],
    "MFSK": ["FST4","FST4W","FT2","FT4","JS8","JTMS","MFSK11","MFSK128","MFSK128L","MFSK16","MFSK22","MFSK31","MFSK32","MFSK4","MFSK64","MFSK64L","MFSK8","MM2","Q65"],
    "MSK144": [],
    "MT63": [],
    "MTONE": ["SCAMP_OO","SCAMP_OO_SLW"],
    "OLIVIA": ["OLIVIA 16/1000","OLIVIA 16/500","OLIVIA 32/1000","OLIVIA 4/125","OLIVIA 4/250","OLIVIA 8/250","OLIVIA 8/500"],
    "OPERA": ["OPERA-BEACON","OPERA-QSO"],
    "PAC": ["PAC2","PAC3","PAC4"],
    "PAX": ["PAX2"],
    "PKT": [],
    "PSK": ["8PSK1000","8PSK1000F","8PSK1200F","8PSK125","8PSK125F","8PSK125FL","8PSK250","8PSK250F","8PSK250FL","8PSK500","8PSK500F","PSK10","PSK1000","PSK1000RC2","PSK125","PSK125RC10","PSK125RC12","PSK125RC16","PSK125RC4","PSK125RC5","PSK250","PSK250RC2","PSK250RC3","PSK250RC5","PSK250RC6","PSK250RC7","PSK31","PSK500","PSK500RC2","PSK500RC3","PSK500RC4","PSK63","PSK63F","PSK63RC10","PSK63RC20","PSK63RC32","PSK63RC4","PSK63RC5","PSK800RC2","PSKAM10","PSKAM31","PSKAM50","PSKFEC31","QPSK125","QPSK250","QPSK31","QPSK500","QPSK63","SIM31"],
    "PSK2K": [],
    "Q15": [],
    "QRA64": ["QRA64A","QRA64B","QRA64C","QRA64D","QRA64E"],
    "ROS": ["ROS-EME","ROS-HF","ROS-MF"],
    "RTTY": ["ASCI"],
    "RTTYM": [],
    "SSB": ["LSB","USB"],
    "SSTV": [],
    "T10": [],
    "THOR": ["THOR-M","THOR100","THOR11","THOR16","THOR22","THOR25X4","THOR4","THOR5","THOR50X1","THOR50X2","THOR8"],
    "THRB": ["THRBX","THRBX1","THRBX2","THRBX4","THROB1","THROB2","THROB4"],
    "TOR": ["AMTORFEC","GTOR","NAVTEX","SITORB"],
    "V4": [],
    "VOI": [],
    "WINMOR": [],
    "WSPR": [],
  };
  const MODE_NO_PARENT_OPTION = new Set(["DYNAMIC", "FSK", "MTONE"]);

  // AMSAT satellite-mode designations. Each entry is
  // [code, uplinkBand, downlinkBand] — bands match the values in BANDS.
  // "10 GHz" resolves to our 3cm band; "1.2 GHz" resolves to 23cm.
  // Modern two-letter codes (uplink/downlink pair, e.g. "LU" = 23cm ↑ / 70cm ↓)
  // are preferred; the single-letter codes are legacy AMSAT designations kept
  // for compatibility with historical logs.
  const SAT_MODES_MODERN = [
    ["LU", "23cm", "70cm"],
    ["LV", "23cm", "2m"],
    ["SX", "13cm", "3cm"],
    ["UU", "70cm", "70cm"],
    ["UV", "70cm", "2m"],
    ["VA", "2m",   "10m"],
    ["VU", "2m",   "70cm"],
    ["VV", "2m",   "2m"],
  ];
  const SAT_MODES_DEPRECATED = [
    ["A", "2m",   "10m"],
    ["B", "70cm", "2m"],
    ["J", "2m",   "70cm"],
    ["K", "15m",  "10m"],
    ["L", "23cm", "70cm"],
    ["R", "70cm", "3cm"],
    ["S", "13cm", "3cm"],
    ["T", "15m",  "2m"],
    ["U", "70cm", "15m"],
    ["V", "2m",   "23cm"],
    ["W", "70cm", "3cm"],
    ["X", "23cm", "3cm"],
  ];
  // Flat list used by the SAT_MODE change handler to look up an entry's bands.
  const SAT_MODES = [...SAT_MODES_MODERN, ...SAT_MODES_DEPRECATED];

  // ADIF SAT_NAME values, curated list. Stored value is the name (e.g.
  // "AO-7"); the description is shown next to it in the dropdown for clarity.
  const SAT_NAMES = [
    ["AISAT1",   "AISAT-1 AMSAT India APRS Digipeater"],
    ["AO-10",    "AMSAT-OSCAR 10"],
    ["AO-109",   "AMSAT-OSCAR 109"],
    ["AO-123",   "ASRTU-OSCAR 123"],
    ["AO-13",    "AMSAT-OSCAR 13"],
    ["AO-16",    "AMSAT-OSCAR 16"],
    ["AO-21",    "OSCAR 21/RS-14"],
    ["AO-27",    "AMRAD-OSCAR 27"],
    ["AO-3",     "AMSAT-OSCAR 3"],
    ["AO-4",     "AMSAT-OSCAR 4"],
    ["AO-40",    "AMSAT-OSCAR 40"],
    ["AO-51",    "AMSAT-OSCAR 51"],
    ["AO-6",     "AMSAT-OSCAR 6"],
    ["AO-7",     "AMSAT-OSCAR 7"],
    ["AO-73",    "AMSAT-OSCAR 73"],
    ["AO-8",     "AMSAT-OSCAR 8"],
    ["AO-85",    "AMSAT-OSCAR 85 (Fox-1A)"],
    ["AO-91",    "AMSAT-OSCAR 91 (RadFxSat / Fox-1B)"],
    ["AO-92",    "AMSAT-OSCAR 92 (Fox-1D)"],
    ["ARISS",    "ARISS"],
    ["Arsene",   "OSCAR 24"],
    ["BO-102",   "BIT Progress-OSCAR 102 (CAS-7B)"],
    ["BY70-1",   "Bayi Kepu Weixing 1"],
    ["CAS-2T",   "CAS-2T"],
    ["CAS-3H",   "LilacSat-2"],
    ["CAS-4A",   "CAMSAT 4A (CAS-4A)"],
    ["CAS-4B",   "CAMSAT 4B (CAS-4B)"],
    ["DO-64",    "Delfi OSCAR-64"],
    ["EO-79",    "FUNcube-3"],
    ["EO-88",    "Emirates-OSCAR 88 (Nayif-1)"],
    ["FO-118",   "CAS-5A"],
    ["FO-12",    "Fuji-OSCAR 12"],
    ["FO-20",    "Fuji-OSCAR 20"],
    ["FO-29",    "Fuji-OSCAR 29"],
    ["FO-99",    "Fuji-OSCAR 99 (NEXUS)"],
    ["FS-3",     "FalconSAT 3"],
    ["HO-107",   "HuskySat OSCAR 107"],
    ["HO-113",   "HO-113"],
    ["HO-119",   "Hope-OSCAR 119"],
    ["HO-68",    "Hope-Oscar 68"],
    ["INSPR7",   "INSPIRE-Sat7"],
    ["IO-117",   "GreenCube"],
    ["IO-86",    "Indonesia-OSCAR 86 (LAPAN-ORARI)"],
    ["JO-97",    "Jordan-OSCAR 97 (JY1Sat)"],
    ["KEDR",     "ARISSat-1"],
    ["LEDSAT",   "LEDSAT"],
    ["LO-19",    "Lusat-OSCAR 19"],
    ["LO-78",    "LituanicaSAT-1"],
    ["LO-87",    "LUSEX-OSCAR 87"],
    ["LO-90",    "LilacSat-OSCAR 90 (LilacSat-1)"],
    ["MAYA-3",   "Cubesat"],
    ["MAYA-4",   "Cubesat"],
    ["MIREX",    "MIR Packet Digipeater"],
    ["MO-112",   "Mirsat-1"],
    ["MO-122",   "MESAT1-OSCAR 122"],
    ["NO-103",   "Navy-OSCAR 103 (BRICSAT 2)"],
    ["NO-104",   "Navy-OSCAR 104 (PSAT 2)"],
    ["NO-44",    "Navy-OSCAR 44"],
    ["NO-83",    "BRICsat"],
    ["NO-84",    "PSAT"],
    ["PO-101",   "Phillipines-OSCAR-101 (Diwata-2)"],
    ["QO-100",   "Qatar-OSCAR 100 (Es'hail-2/P4A)"],
    ["RS-1",     "Radio Sputnik 1"],
    ["RS-10",    "Radio Sputnik 10"],
    ["RS-11",    "Radio Sputnik 11"],
    ["RS-12",    "Radio Sputnik 12"],
    ["RS-13",    "Radio Sputnik 13"],
    ["RS-15",    "Radio Sputnik 15"],
    ["RS-2",     "Radio Sputnik 2"],
    ["RS-44",    "Radio Sputnik 44 (DOSAAF-85)"],
    ["RS-5",     "Radio Sputnik 5"],
    ["RS-6",     "Radio Sputnik 6"],
    ["RS-7",     "Radio Sputnik 7"],
    ["RS-8",     "Radio Sputnik 8"],
    ["SAREX",    "Shuttle Amateur Radio Experiment (SAREX) Digipeater"],
    ["SO-121",   "Hades-D"],
    ["SO-124",   "Hades-R"],
    ["SO-125",   "Hades-ICM"],
    ["SO-35",    "Sunsat-OSCAR 35"],
    ["SO-41",    "Saudi-OSCAR 41"],
    ["SO-50",    "Saudi-OSCAR 50"],
    ["SO-67",    "Sumbandila Oscar 67"],
    ["SONATE",   "SONATE-2"],
    ["TAURUS",   "Taurus-1 (Jinniuzuo-1)"],
    ["TEVEL1",   "Tevel-1"],
    ["TEVEL2",   "Tevel-2"],
    ["TEVEL3",   "Tevel-3"],
    ["TEVEL4",   "Tevel-4"],
    ["TEVEL5",   "Tevel-5"],
    ["TEVEL6",   "Tevel-6"],
    ["TEVEL7",   "Tevel-7"],
    ["TEVEL8",   "Tevel-8"],
    ["TO-108",   "TQ-OSCAR 108 (CAS-6 / TQ-1)"],
    ["UKUBE1",   "UKube-1 (FUNcube-2)"],
    ["UO-14",    "UOSAT-OSCAR 14"],
    ["UVSQ",     "CubeSat"],
    ["VO-52",    "VUsat-OSCAR 52"],
    ["XW-2A",    "Hope 2A (CAS-3A)"],
    ["XW-2B",    "Hope 2B (CAS-3B)"],
    ["XW-2C",    "Hope 2C (CAS-3C)"],
    ["XW-2D",    "Hope 2D (CAS-3D)"],
    ["XW-2E",    "Hope 2E (CAS-3E)"],
    ["XW-2F",    "Hope 2F (CAS-2F)"],
    ["TEV2-1",   "Tevel2-1"],
    ["TEV2-2",   "Tevel2-2"],
    ["TEV2-3",   "Tevel2-3"],
    ["TEV2-4",   "Tevel2-4"],
    ["TEV2-5",   "Tevel2-5"],
    ["TEV2-6",   "Tevel2-6"],
    ["TEV2-7",   "Tevel2-7"],
    ["TEV2-8",   "Tevel2-8"],
    ["TEV2-9",   "Tevel2-9"],
  ];

  // ADIF 3.1.7 § III.B.13 Propagation Mode Enumeration.
  // Stored value is the code (e.g. "AS"); the description is shown next to it
  // in the dropdown for clarity.
  const PROP_MODES = [
    ["AS", "Aircraft Scatter"],
    ["AUE", "Aurora-E"],
    ["AUR", "Aurora"],
    ["BS", "Back scatter"],
    ["ECH", "EchoLink"],
    ["EME", "Earth-Moon-Earth"],
    ["ES", "Sporadic E"],
    ["F2", "F2 Reflection"],
    ["FAI", "Field Aligned Irregularities"],
    ["GWAVE", "Ground Wave"],
    ["INTERNET", "Internet-assisted"],
    ["ION", "Ionoscatter"],
    ["IRL", "IRLP"],
    ["LOS", "Line of Sight"],
    ["MS", "Meteor scatter"],
    ["RPT", "Terrestrial or atmospheric repeater or transponder"],
    ["RS", "Rain scatter"],
    ["SAT", "Satellite"],
    ["TEP", "Trans-equatorial"],
    ["TR", "Tropospheric ducting"],
  ];
  // AM kept here for legacy data even though it isn't in the new dropdown.
  const VOICE_PARENTS = new Set(["SSB", "FM", "AM", "DIGITALVOICE"]);

  // submode → parent
  const SUBMODE_TO_PARENT = {};
  for (const [p, subs] of Object.entries(MODE_GROUPS)) {
    for (const s of subs) SUBMODE_TO_PARENT[s] = p;
  }
  const modeParent = (value) => SUBMODE_TO_PARENT[value] || value;
  const rstDefaultFor = (value) => VOICE_PARENTS.has(modeParent(value)) ? "59" : "599";

  // Callsign prefix → ISO 3166-1 alpha-2 country. Longest match wins (2-letter checked before 1-letter).
  const CALL_PREFIX = {
    // Germany
    DA:"DE",DB:"DE",DC:"DE",DD:"DE",DF:"DE",DG:"DE",DH:"DE",DJ:"DE",DK:"DE",DL:"DE",DM:"DE",DO:"DE",DP:"DE",DQ:"DE",DR:"DE",
    // Baltics & Nordics
    YL:"LV", LY:"LT", ES:"EE",
    SM:"SE",SA:"SE",SI:"SE", LA:"NO",LB:"NO", OZ:"DK",OU:"DK",OV:"DK",
    OH:"FI",OF:"FI",OG:"FI",OI:"FI", TF:"IS",
    // Central / Eastern Europe
    SP:"PL",SQ:"PL",SO:"PL",SN:"PL",HF:"PL",
    OK:"CZ",OL:"CZ", OM:"SK", HA:"HU",HG:"HU",
    OE:"AT", HB:"CH", LX:"LU",
    ON:"BE",OO:"BE",OP:"BE",OQ:"BE",OR:"BE",OS:"BE",OT:"BE",
    PA:"NL",PB:"NL",PC:"NL",PD:"NL",PE:"NL",PF:"NL",PG:"NL",PH:"NL",PI:"NL",
    EA:"ES",EB:"ES",EC:"ES",ED:"ES",EE:"ES",EF:"ES",EG:"ES",EH:"ES",
    CT:"PT",CR:"PT",CQ:"PT",CS:"PT",
    SV:"GR",SX:"GR",SY:"GR",SZ:"GR",
    YO:"RO",YP:"RO",YQ:"RO",YR:"RO",
    LZ:"BG", YU:"RS",YT:"RS",
    "9A":"HR", S5:"SI", E7:"BA", Z3:"MK",
    UR:"UA",UT:"UA",UU:"UA",UV:"UA",UW:"UA",UX:"UA",UY:"UA",UZ:"UA",EM:"UA",EN:"UA",EO:"UA",
    UA:"RU",UB:"RU",UC:"RU",UD:"RU",UE:"RU",UF:"RU",UG:"RU",UH:"RU",UI:"RU",
    RA:"RU",RC:"RU",RD:"RU",RE:"RU",RF:"RU",RG:"RU",RJ:"RU",RK:"RU",RL:"RU",RM:"RU",
    RN:"RU",RO:"RU",RP:"RU",RQ:"RU",RT:"RU",RU:"RU",RV:"RU",RW:"RU",RX:"RU",RY:"RU",RZ:"RU",
    ER:"MD", EU:"BY",EV:"BY",EW:"BY",
    "4L":"GE", EK:"AM", "4J":"AZ","4K":"AZ",
    EZ:"TM", EY:"TJ", EX:"KG", UJ:"UZ",UK:"UZ",
    UN:"KZ",UO:"KZ",UP:"KZ",UQ:"KZ",
    // UK & Ireland
    "2E":"GB","2I":"GB","2M":"GB","2W":"GB","2D":"GB","2J":"GB","2U":"GB",
    GM:"GB",GW:"GB",GI:"GB",GD:"GB",GJ:"GB",GU:"GB",
    MM:"GB",MW:"GB",MI:"GB",MD:"GB",MJ:"GB",MU:"GB",
    EI:"IE",EJ:"IE",
    // Turkey & Middle East
    TA:"TR",TB:"TR",TC:"TR",
    "4X":"IL","4Z":"IL",
    A4:"OM", A6:"AE", A7:"QA", A9:"BH",
    // Americas
    AA:"US",AB:"US",AC:"US",AD:"US",AE:"US",AF:"US",AG:"US",AH:"US",AI:"US",AJ:"US",AK:"US",AL:"US",
    KA:"US",KB:"US",KC:"US",KD:"US",KE:"US",KF:"US",KG:"US",KI:"US",KJ:"US",KK:"US",
    KM:"US",KN:"US",KO:"US",KQ:"US",KR:"US",KS:"US",KT:"US",KU:"US",KV:"US",KX:"US",KY:"US",KZ:"US",
    VE:"CA",VA:"CA",VO:"CA",VY:"CA",CY:"CA",
    XE:"MX",XF:"MX","4A":"MX","4B":"MX","4C":"MX",
    PY:"BR",PP:"BR",PQ:"BR",PR:"BR",PS:"BR",PT:"BR",PU:"BR",PV:"BR",PW:"BR",PX:"BR",
    ZV:"BR",ZW:"BR",ZX:"BR",ZY:"BR",ZZ:"BR",
    LU:"AR",LO:"AR",LP:"AR",LQ:"AR",LR:"AR",LS:"AR",LT:"AR",LV:"AR",LW:"AR",
    CE:"CL",CA:"CL",CB:"CL",CC:"CL",CD:"CL",XQ:"CL",XR:"CL",
    // Asia-Pacific
    JA:"JP",JE:"JP",JF:"JP",JG:"JP",JH:"JP",JI:"JP",JJ:"JP",JK:"JP",JL:"JP",
    JM:"JP",JN:"JP",JO:"JP",JP:"JP",JQ:"JP",JR:"JP",JS:"JP",
    VK:"AU",AX:"AU",VH:"AU",VI:"AU",VJ:"AU",VL:"AU",VM:"AU",VN:"AU",VZ:"AU",
    ZL:"NZ",ZM:"NZ",
    BY:"CN",BG:"CN",BH:"CN",BI:"CN",BJ:"CN",BD:"CN",BR:"CN",BT:"CN",
    HL:"KR",DS:"KR","6K":"KR","6L":"KR","6M":"KR","6N":"KR",
    VR:"HK", "9V":"SG", "9M":"MY","9W":"MY",
    HS:"TH",E2:"TH",
    VU:"IN",AT:"IN",AU:"IN",AV:"IN",AW:"IN",
    // Africa
    SU:"EG", ZS:"ZA",ZR:"ZA",ZT:"ZA",ZU:"ZA",
    CN:"MA", "7X":"DZ", "3V":"TN",
    // Gaps surfaced by real-world ADIF imports
    US:"UA",                                                // Ukraine (was missing — UR/UT/UU/UV/UW/UX/UY/UZ present)
    YB:"ID",YC:"ID",YD:"ID",YE:"ID",YF:"ID",YG:"ID",YH:"ID",// Indonesia
    YI:"IQ",                                                // Iraq (note: distinct from YB-YH Indonesia)
    DN:"DE",                                                // Germany — novice / special
    "5B":"CY",                                              // Cyprus
    TM:"FR", TK:"FR",                                       // France special-event / Corsica
    "3Z":"PL",                                              // Poland special
    HZ:"SA",                                                // Saudi Arabia
    YM:"TR",                                                // Turkey special
    "9H":"MT",                                              // Malta
    "9K":"KW",                                              // Kuwait
    HE:"CH",                                                // Switzerland (HB also CH)
    CX:"UY",                                                // Uruguay
    DU:"PH",                                                // Philippines
    YY:"VE",                                                // Venezuela
    AO:"ES",                                                // Spain special
    BA:"CN",                                                // China
    // A handful of common DXCC entries not yet covered
    HC:"EC", HK:"CO", HJ:"CO", HI:"DO", HP:"PA", HR:"HN", HQ:"HN", TI:"CR",
    CO:"CU", CM:"CU", "4S":"LK", AP:"PK", BV:"TW", BX:"TW",
    XW:"LA", XU:"KH", XV:"VN", "3W":"VN",
    // Single-letter (must NOT collide with 2-letter blocks above)
    F:"FR", I:"IT", G:"GB", M:"GB", K:"US", W:"US", N:"US",
    R:"RU",                                                 // R0-R9 Russian calls (RA-RZ matched by 2-letter above)
  };

  function callsignCountry(call) {
    if (!call) return null;
    let c = String(call).toUpperCase().trim();
    // Strip portable / maritime / aeronautical / lighthouse / QRP / area-change suffixes.
    c = c.replace(/\/(P|M|A|MM|AM|QRP|QRPP|LH|\d)$/i, "");
    // For prefix-portable calls like "9A/M0NCG" or "VK4/G3WGV", the operating
    // location prefix is the shorter side. Pick the side that yields a country
    // lookup; if both do, prefer the shorter (more prefix-like) one.
    if (c.includes("/")) {
      const parts = c.split("/").filter(Boolean);
      let best = null;
      for (const p of parts) {
        const country = CALL_PREFIX[p.slice(0, 2)] || CALL_PREFIX[p.slice(0, 1)];
        if (country && (!best || p.length < best.len)) best = { country, len: p.length };
      }
      if (best) return best.country;
      c = parts[0] || c;
    }
    return CALL_PREFIX[c.slice(0, 2)] || CALL_PREFIX[c.slice(0, 1)] || null;
  }

  function isoToFlag(iso) {
    if (!iso || iso.length !== 2) return "";
    const A = 0x41, BASE = 0x1F1E6;
    return String.fromCodePoint(BASE + iso.charCodeAt(0) - A, BASE + iso.charCodeAt(1) - A);
  }

  const DATE_FMT = new Intl.DateTimeFormat(undefined);
  function formatDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    if (!y || !m || !d) return iso;
    return DATE_FMT.format(new Date(y, m - 1, d));
  }

  /** @typedef {{id:string,call:string,date:string,time:string,band:string,mode:string,rstSent:string,rstRcvd:string}} Qso */
  /** @typedef {{id:string,name:string,qsos:Qso[]}} Log */

  const SUPPORTED_LANGS = [
    "en",
    "cs", "da", "de", "et", "es", "fr", "ga", "hr", "it", "lv", "lt", "hu", "nl", "no", "pl", "pt", "ro", "sk", "sl", "fi", "sv",
    "be", "bg", "ru", "sr", "uk",
    "el",
  ];

  /** @type {{logs: Log[], selectedId: string|null, theme: "day"|"night", lang: string}} */
  let state = load();
  if (state.theme !== "day" && state.theme !== "night") state.theme = "day";
  if (!SUPPORTED_LANGS.includes(state.lang)) state.lang = "en";

  // Legacy migration: earlier versions stored a submode directly in q.mode
  // (e.g. q.mode = "USB"). The new model keeps them separate — q.mode is
  // always the ADIF parent MODE, q.submode is the optional SUBMODE. Split
  // once on load; harmless if already migrated.
  for (const log of state.logs) {
    for (const q of log.qsos) {
      if (q && q.mode && SUBMODE_TO_PARENT[q.mode] && !q.submode) {
        q.submode = q.mode;
        q.mode = SUBMODE_TO_PARENT[q.mode];
      }
    }
  }

  // Ephemeral (not persisted): id of the QSO currently being edited, or null.
  let editingId = null;

  // ---------- Persistence ----------
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) { /* fall through to default */ }
    return { logs: [], selectedId: null };
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  const uid = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  const selectedLog = () =>
    state.logs.find((l) => l.id === state.selectedId) || null;

  // ---------- DOM refs ----------
  const $ = (id) => document.getElementById(id);
  const logForm = $("log-form");
  const logList = $("log-list");
  const noLog = $("no-log");
  const logDetail = $("log-detail");
  const detailName = $("detail-name");
  const renameInput = $("rename-input");
  const qsoForm = $("qso-form");
  const qsoTbody = $("qso-tbody");
  const qsoEmpty = $("qso-empty");
  const themeToggle = $("theme-toggle");
  const dupIndicator = $("dup-indicator");
  const langSelect = $("lang-select");

  // ---------- i18n ----------
  // Returns the translation for `key` in the active language, falling back to
  // English then to the key itself. Positional placeholders {0}, {1}, ... are
  // replaced by the corresponding `args` (stringified).
  function t(key, ...args) {
    const dict = (window.I18N && window.I18N[state.lang]) || {};
    const en = (window.I18N && window.I18N.en) || {};
    let s = dict[key];
    if (s === undefined) s = en[key];
    if (s === undefined) s = key;
    args.forEach((v, i) => { s = s.split(`{${i}}`).join(String(v)); });
    return s;
  }

  // Walk the DOM and update every element marked with a data-i18n* attribute.
  // Also re-apply the state-dependent labels (theme button, submit button).
  function applyLanguage() {
    const dict = (window.I18N && window.I18N[state.lang]) || (window.I18N && window.I18N.en) || {};
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const v = dict[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const v = dict[el.dataset.i18nAriaLabel];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    themeToggle.textContent = state.theme === "day" ? t("header.theme.night") : t("header.theme.day");
    $("qso-submit").textContent = editingId ? t("qso.update") : t("qso.log");
    if (langSelect) langSelect.value = state.lang;
  }

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const next = langSelect.value;
      if (!SUPPORTED_LANGS.includes(next)) return;
      state.lang = next;
      applyLanguage();
      render();
    });
  }

  // ---------- Theme ----------
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    themeToggle.textContent = state.theme === "day" ? t("header.theme.night") : t("header.theme.day");
  }

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "day" ? "night" : "day";
    applyTheme();
    save();
  });

  // ---------- Select population ----------
  function fillSelect(sel, values, defaultVal) {
    sel.innerHTML = "";
    for (const v of values) {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      if (v === defaultVal) opt.selected = true;
      sel.appendChild(opt);
    }
  }
  fillSelect($("qso-band"), BANDS, DEFAULT_BAND);

  // Propagation-mode dropdown: first option is "no selection" (empty string,
  // matching the ADIF convention that PROP_MODE is absent for typical HF QSOs).
  function fillPropModeSelect(sel) {
    sel.innerHTML = "";
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("qso.prop_mode.none");
    sel.appendChild(none);
    for (const [code, desc] of PROP_MODES) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = `${code} — ${desc}`;
      sel.appendChild(opt);
    }
  }
  fillPropModeSelect($("qso-prop-mode"));

  // Satellite fields are only relevant when propagation mode is SAT.
  // Toggle the `.is-sat` class on the form to reveal them, and toggle the
  // `required` attribute so the browser's native validation prompt (same UX
  // as the empty-callsign case) fires on submit when they're not filled.
  function updateSatVisibility() {
    const isSat = $("qso-prop-mode").value === "SAT";
    qsoForm.classList.toggle("is-sat", isSat);
    $("qso-sat-name").required = isSat;
    $("qso-sat-mode").required = isSat;
    $("qso-band-rx").required = isSat;
  }
  $("qso-prop-mode").addEventListener("change", () => {
    updateSatVisibility();
    // Reselecting SAT clears the SAT_MODE dropdown so the operator picks
    // one again — which fires the change handler and re-adjusts BAND/BAND_RX.
    if ($("qso-prop-mode").value === "SAT") $("qso-sat-mode").value = "";
  });

  // BAND_RX: same options as BAND, but with a leading empty option because
  // most QSOs (non-split, non-satellite) don't need a receive band.
  function fillBandRxSelect(sel) {
    sel.innerHTML = "";
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("qso.prop_mode.none"); // reuse "(none)"
    sel.appendChild(none);
    for (const v of BANDS) {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      sel.appendChild(opt);
    }
  }
  fillBandRxSelect($("qso-band-rx"));

  // SAT_NAME: full satellite catalog with a leading empty option.
  function fillSatNameSelect(sel) {
    sel.innerHTML = "";
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("qso.prop_mode.none");
    sel.appendChild(none);
    for (const [name, desc] of SAT_NAMES) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = `${name} — ${desc}`;
      sel.appendChild(opt);
    }
  }
  fillSatNameSelect($("qso-sat-name"));

  // SAT_MODE: AMSAT mode designations. Selecting one auto-adjusts BAND
  // (uplink) and BAND_RX (downlink) since operators pick a satellite mode
  // first. Modern two-letter codes are grouped at the top; legacy single-
  // letter codes go under a "deprecated" group at the bottom.
  function fillSatModeSelect(sel) {
    sel.innerHTML = "";
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("qso.prop_mode.none");
    sel.appendChild(none);
    const appendGroup = (label, list) => {
      const og = document.createElement("optgroup");
      og.label = label;
      for (const [code, up, down] of list) {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = `${code} — ${up} ↑ ${down} ↓`;
        og.appendChild(opt);
      }
      sel.appendChild(og);
    };
    appendGroup("modern", SAT_MODES_MODERN);
    appendGroup("deprecated", SAT_MODES_DEPRECATED);
  }
  fillSatModeSelect($("qso-sat-mode"));

  $("qso-sat-mode").addEventListener("change", () => {
    const entry = SAT_MODES.find(([code]) => code === $("qso-sat-mode").value);
    if (!entry) return;
    const [, up, down] = entry;
    $("qso-band").value = up;
    $("qso-band-rx").value = down;
  });

  function fillModeSelect(sel, defaultVal) {
    sel.innerHTML = "";
    for (const [parent, subs] of Object.entries(MODE_GROUPS)) {
      const includeParent = !MODE_NO_PARENT_OPTION.has(parent);
      if (subs.length === 0) {
        const opt = document.createElement("option");
        opt.value = parent; opt.textContent = parent;
        if (parent === defaultVal) opt.selected = true;
        sel.appendChild(opt);
      } else {
        const og = document.createElement("optgroup");
        og.label = parent;
        if (includeParent) {
          const opt = document.createElement("option");
          opt.value = parent; opt.textContent = parent;
          if (parent === defaultVal) opt.selected = true;
          og.appendChild(opt);
        }
        for (const s of subs) {
          const opt = document.createElement("option");
          opt.value = s; opt.textContent = s;
          if (s === defaultVal) opt.selected = true;
          og.appendChild(opt);
        }
        sel.appendChild(og);
      }
    }
  }
  fillModeSelect($("qso-mode"), DEFAULT_MODE);

  // ---------- Duplicate callsign indicator ----------
  function updateDupIndicator() {
    const log = selectedLog();
    const raw = $("qso-call").value.trim().toUpperCase();
    const isDup = !!log && !editingId && raw.length > 0 && log.qsos.some((q) => q.call === raw);
    dupIndicator.hidden = !isDup;
  }
  function bindUppercase(el) {
    el.addEventListener("input", () => {
      const upper = el.value.toUpperCase();
      if (upper === el.value) return;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      el.value = upper;
      if (start !== null) el.setSelectionRange(start, end);
    });
  }
  bindUppercase($("qso-call"));
  bindUppercase($("qso-station-call"));
  bindUppercase($("qso-gridsquare"));
  bindUppercase($("qso-my-gridsquare"));
  $("qso-call").addEventListener("input", updateDupIndicator);

  // ---------- Edit QSO ----------
  function startEdit(q) {
    editingId = q.id;
    qsoForm.classList.add("is-editing");
    // Station-data block — filled from the edited QSO's own values.
    $("qso-station-call").value = q.stationCall || "";
    $("qso-operator").value = q.operator || "";
    $("qso-my-gridsquare").value = q.myGridSquare || "";
    // QSO-data block
    $("qso-call").value = q.call || "";
    $("qso-gridsquare").value = q.gridSquare || "";
    $("qso-comment").value = q.comment || "";
    $("qso-date").value = q.date || "";
    $("qso-time").value = (q.time || "").slice(0, 5);
    $("qso-rst-sent").value = q.rstSent || "";
    $("qso-rst-rcvd").value = q.rstRcvd || "";
    // Operation-mode block
    $("qso-band").value = q.band || DEFAULT_BAND;
    // Prefer the submode (more specific) when both are stored — matches how
    // the operator originally picked from the dropdown.
    $("qso-mode").value = q.submode || q.mode || DEFAULT_MODE;
    $("qso-prop-mode").value = q.propMode || "";
    $("qso-band-rx").value = q.bandRx || "";
    // Preserve legacy SAT_MODE values (like "U/V" from imported ADIF) that
    // aren't in our AMSAT letter enum by adding them as a one-off option.
    const satModeSel = $("qso-sat-mode");
    satModeSel.value = q.satMode || "";
    if (q.satMode && satModeSel.value !== q.satMode) {
      const opt = document.createElement("option");
      opt.value = q.satMode;
      opt.textContent = q.satMode;
      satModeSel.appendChild(opt);
      satModeSel.value = q.satMode;
    }
    $("qso-sat-name").value = q.satName || "";
    updateSatVisibility();
    $("qso-submit").textContent = t("qso.update");
    $("qso-cancel").hidden = false;
    render();
    $("qso-call").focus();
  }

  function cancelEdit(opts) {
    editingId = null;
    qsoForm.classList.remove("is-editing");
    // Clear per-QSO fields only; the Station-data block stays sticky across
    // consecutive contacts (station callsign / operator / my grid are session-
    // stable), matching how band/mode/prop-mode carry over.
    $("qso-call").value = "";
    $("qso-gridsquare").value = "";
    $("qso-comment").value = "";
    $("qso-date").value = "";
    $("qso-time").value = "";
    $("qso-rst-sent").value = "";
    $("qso-rst-rcvd").value = "";
    $("qso-submit").textContent = t("qso.log");
    $("qso-cancel").hidden = true;
    if (!(opts && opts.skipRender)) render();
    updateDupIndicator();
  }

  $("qso-cancel").addEventListener("click", () => cancelEdit());

  // ---------- Rename logbook (inline) ----------
  let renameCancelled = false;
  function startRename() {
    const log = selectedLog();
    if (!log) return;
    renameCancelled = false;
    renameInput.value = log.name;
    detailName.hidden = true;
    renameInput.hidden = false;
    renameInput.focus();
    renameInput.select();
  }
  function commitRename() {
    if (renameCancelled) { renameCancelled = false; return; }
    const log = selectedLog();
    if (log) {
      const next = renameInput.value.trim();
      if (next) log.name = next;
    }
    detailName.hidden = false;
    renameInput.hidden = true;
    render();
  }
  function cancelRename() {
    renameCancelled = true;
    detailName.hidden = false;
    renameInput.hidden = true;
  }
  $("rename-btn").addEventListener("click", startRename);
  renameInput.addEventListener("blur", commitRename);
  renameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); renameInput.blur(); }
    else if (e.key === "Escape") { e.preventDefault(); cancelRename(); renameInput.blur(); }
  });

  // ---------- Rendering ----------
  function render() {
    renderLogList();
    renderDetail();
    save();
  }

  function renderLogList() {
    logList.innerHTML = "";
    for (const log of state.logs) {
      const li = document.createElement("li");
      if (log.id === state.selectedId) li.classList.add("active");
      const countText = log.qsos.length === 1
        ? t("count.qso_one", log.qsos.length)
        : t("count.qso_many", log.qsos.length);
      li.innerHTML = `
        <div class="log-title"></div>
        <span class="count"></span>`;
      li.querySelector(".count").textContent = countText;
      li.querySelector(".log-title").textContent = log.name;
      li.addEventListener("click", () => {
        if (log.id !== state.selectedId && editingId) cancelEdit({ skipRender: true });
        state.selectedId = log.id;
        render();
      });
      logList.appendChild(li);
    }
  }

  function renderDetail() {
    const log = selectedLog();
    if (!log) {
      noLog.hidden = false;
      logDetail.hidden = true;
      return;
    }
    noLog.hidden = true;
    logDetail.hidden = false;

    detailName.textContent = log.name;

    qsoTbody.innerHTML = "";
    // Newest first.
    const rows = [...log.qsos].reverse();
    for (const q of rows) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="row-actions">
          <button class="row-edit btn-touch" type="button"></button>
          <button class="row-del btn-touch" type="button"></button>
        </td>
        <td class="flag"></td>
        <td></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>`;
      const editBtn = tr.querySelector(".row-edit");
      const delBtn = tr.querySelector(".row-del");
      editBtn.textContent = t("table.edit");
      editBtn.setAttribute("aria-label", t("table.edit.title"));
      delBtn.textContent = t("table.delete");
      delBtn.setAttribute("aria-label", t("table.delete.title"));
      if (q.id === editingId) tr.classList.add("editing");
      const cells = tr.querySelectorAll("td");
      const iso = callsignCountry(q.call);
      cells[1].textContent = iso ? isoToFlag(iso) : "";
      cells[1].title = iso || "";
      cells[2].textContent = q.call;
      cells[3].textContent = (q.time || "").slice(0, 5);
      cells[4].textContent = formatDate(q.date);
      cells[5].textContent = q.band || "—";
      cells[6].textContent = q.submode || q.mode || "—";
      cells[7].textContent = q.propMode || "—";
      cells[8].textContent = q.rstSent || "—";
      cells[9].textContent = q.rstRcvd || "—";
      editBtn.addEventListener("click", () => startEdit(q));
      delBtn.addEventListener("click", () => {
        const who = q.call || t("confirm.no_callsign");
        if (!confirm(t("confirm.delete_qso", who))) return;
        log.qsos = log.qsos.filter((x) => x.id !== q.id);
        if (editingId === q.id) cancelEdit({ skipRender: true });
        render();
      });
      qsoTbody.appendChild(tr);
    }
    qsoEmpty.hidden = log.qsos.length > 0;
    updateDupIndicator();
  }

  // ---------- Date/time helpers (UTC, ADIF convention) ----------
  function nowUtcParts() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return {
      date: `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`,
      time: `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`,
    };
  }

  // ADIF CREATED_TIMESTAMP: "YYYYMMDD HHMMSS" in UTC, 15 chars with a single space.
  function nowAdifTimestamp() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const date = `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
    const time = `${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}`;
    return `${date} ${time}`;
  }

  // Fields consumed by the app's typed QSO model. Any other ADIF field on
  // import is preserved on q.extras and re-emitted on export, so round-tripping
  // a foreign ADIF doesn't destroy data we don't yet surface in the UI.
  const KNOWN_ADIF_FIELDS = new Set([
    "CALL", "QSO_DATE", "TIME_ON", "BAND", "MODE", "SUBMODE",
    "RST_SENT", "RST_RCVD", "PROP_MODE",
    "GRIDSQUARE", "MY_GRIDSQUARE", "BAND_RX", "SAT_MODE", "SAT_NAME",
    "STATION_CALLSIGN", "OPERATOR", "COMMENT",
  ]);

  // ---------- ADIF export ----------
  // ADIF field: <NAME:byteLength>VALUE
  function adifField(name, value) {
    if (value == null || value === "") return "";
    const v = String(value);
    const len = new TextEncoder().encode(v).length;
    return `<${name}:${len}>${v} `;
  }

  function buildAdif(log) {
    const lines = [];
    lines.push(`ADIF export from Local QSO Logger`);
    lines.push(adifField("ADIF_VER", ADIF_VERSION).trim());
    lines.push(adifField("PROGRAMID", "local-qso").trim());
    lines.push(adifField("PROGRAMVERSION", APP_VERSION).trim());
    lines.push(adifField("CREATED_TIMESTAMP", nowAdifTimestamp()).trim());
    lines.push("<EOH>");
    lines.push("");

    for (const q of log.qsos) {
      let rec =
        adifField("STATION_CALLSIGN", q.stationCall) +
        adifField("OPERATOR", q.operator) +
        adifField("MY_GRIDSQUARE", q.myGridSquare) +
        adifField("CALL", q.call) +
        adifField("QSO_DATE", q.date.replace(/-/g, "")) +
        adifField("TIME_ON", q.time.replace(/:/g, "")) +
        adifField("BAND", q.band) +
        adifField("MODE", q.mode) +
        adifField("SUBMODE", q.submode) +
        adifField("PROP_MODE", q.propMode) +
        adifField("GRIDSQUARE", q.gridSquare) +
        adifField("BAND_RX", q.bandRx) +
        adifField("SAT_MODE", q.satMode) +
        adifField("SAT_NAME", q.satName) +
        adifField("RST_SENT", q.rstSent) +
        adifField("RST_RCVD", q.rstRcvd) +
        adifField("COMMENT", q.comment);
      // Preserve ADIF fields imported from other loggers that we don't model
      // as first-class UI properties (COMMENT, NAME, GRIDSQUARE, FREQ, DXCC,
      // QSL_*, POTA_REF, etc.). Full round-trip fidelity without UI churn.
      if (q.extras) {
        for (const [k, v] of Object.entries(q.extras)) rec += adifField(k, v);
      }
      rec += "<EOR>";
      lines.push(rec);
    }
    return lines.join("\n") + "\n";
  }

  // ---------- ADIF import ----------
  // ADIF field length is a byte count (UTF-8), not a character count.
  // Multi-byte content in text fields (e.g. COMMENT "Zambrów") is common and
  // must be sliced at the byte level, so we scan the input as a Uint8Array.
  // Field names and tags are ASCII in valid ADIF.
  const ADIF_DECODER = new TextDecoder("utf-8");

  // Case-insensitive search for a bare ASCII tag like "<EOR>" or "<EOH>".
  function findAsciiTag(bytes, tagName, fromIdx) {
    const target = tagName.toUpperCase();
    const tLen = target.length;
    outer:
    for (let i = fromIdx; i <= bytes.length - tLen - 2; i++) {
      if (bytes[i] !== 0x3C) continue; // '<'
      if (bytes[i + tLen + 1] !== 0x3E) continue; // '>'
      for (let k = 0; k < tLen; k++) {
        let b = bytes[i + 1 + k];
        if (b >= 0x61 && b <= 0x7A) b -= 0x20; // ASCII uppercase
        if (b !== target.charCodeAt(k)) continue outer;
      }
      return i;
    }
    return -1;
  }

  // Parse one QSO chunk (bytes between preceding boundary and <EOR>) into
  // { FIELDNAME: value, ... } with uppercase keys.
  function parseAdifRecord(bytes) {
    const fields = {};
    let i = 0;
    while (i < bytes.length) {
      // Find next '<'
      while (i < bytes.length && bytes[i] !== 0x3C) i++;
      if (i >= bytes.length) break;
      // Find matching '>' (tag content is ASCII in valid ADIF)
      let j = i + 1;
      while (j < bytes.length && bytes[j] !== 0x3E) j++;
      if (j >= bytes.length) break;
      const tag = ADIF_DECODER.decode(bytes.subarray(i + 1, j));
      i = j + 1;
      const parts = tag.split(":");
      if (parts.length < 2) continue; // <EOR>/<EOH> or malformed
      const name = parts[0].toUpperCase();
      const len = parseInt(parts[1], 10);
      if (!Number.isFinite(len) || len < 0) continue;
      fields[name] = ADIF_DECODER.decode(bytes.subarray(i, i + len));
      i += len;
    }
    return fields;
  }

  function parseAdif(text) {
    const bytes = new TextEncoder().encode(text);
    const eohIdx = findAsciiTag(bytes, "EOH", 0);
    let cursor = eohIdx >= 0 ? eohIdx + 5 : 0; // "<EOH>" is 5 bytes
    const records = [];
    while (true) {
      const eorIdx = findAsciiTag(bytes, "EOR", cursor);
      if (eorIdx < 0) break;
      const rec = parseAdifRecord(bytes.subarray(cursor, eorIdx));
      if (Object.keys(rec).length) records.push(rec);
      cursor = eorIdx + 5; // past "<EOR>"
    }
    return records;
  }

  function adifDateToIso(d) {
    if (!d || d.length < 8) return "";
    return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
  }

  function adifTimeToHms(t) {
    if (!t) return "00:00:00";
    const s = String(t).padEnd(6, "0").slice(0, 6);
    return `${s.slice(0, 2)}:${s.slice(2, 4)}:${s.slice(4, 6)}`;
  }

  function importAdif(text) {
    const records = parseAdif(text);
    if (!records.length) {
      alert(t("alert.no_qsos_in_adif"));
      return;
    }
    const { date, time } = nowUtcParts();
    const log = {
      id: uid(),
      name: `${t("log.imported_prefix")} ${date} ${time.slice(0, 5)} ${t("log.utc_suffix")}`,
      qsos: records.map((r) => {
        // Everything the app doesn't model as a first-class field is stashed
        // in q.extras so it survives a subsequent export unchanged.
        const extras = {};
        for (const [k, v] of Object.entries(r)) {
          if (!KNOWN_ADIF_FIELDS.has(k) && v) extras[k] = v;
        }
        // ADIF stores MODE (parent) and SUBMODE (specific) separately. Preserve
        // both. If a source omits MODE but supplies SUBMODE, derive the parent
        // via SUBMODE_TO_PARENT; if the submode is unknown, fall back to using
        // the raw value as the mode (best-effort round-trip).
        const rawMode = (r.MODE || "").toUpperCase();
        const rawSubmode = (r.SUBMODE || "").toUpperCase();
        let mode = rawMode;
        let submode = rawSubmode;
        if (!mode && submode) mode = SUBMODE_TO_PARENT[submode] || submode;
        const qso = {
          id: uid(),
          call: (r.CALL || "").toUpperCase(),
          date: adifDateToIso(r.QSO_DATE || ""),
          time: adifTimeToHms(r.TIME_ON || ""),
          band: (r.BAND || "").toLowerCase(),
          mode,
          propMode: (r.PROP_MODE || "").toUpperCase(),
          rstSent: r.RST_SENT || "",
          rstRcvd: r.RST_RCVD || "",
        };
        if (submode) qso.submode = submode;
        // Station data — MY_GRIDSQUARE is now general-purpose (not sat-only),
        // and STATION_CALLSIGN / OPERATOR are always allowed.
        if (r.STATION_CALLSIGN) qso.stationCall  = r.STATION_CALLSIGN.toUpperCase();
        if (r.OPERATOR)         qso.operator     = r.OPERATOR;
        if (r.MY_GRIDSQUARE)    qso.myGridSquare = r.MY_GRIDSQUARE;
        if (r.GRIDSQUARE)       qso.gridSquare   = r.GRIDSQUARE;
        if (r.COMMENT)          qso.comment      = r.COMMENT;
        // Satellite-only fields — attached only when the source record has them.
        if (r.BAND_RX)          qso.bandRx       = r.BAND_RX.toLowerCase();
        if (r.SAT_MODE)         qso.satMode      = r.SAT_MODE;
        if (r.SAT_NAME)         qso.satName      = r.SAT_NAME;
        if (Object.keys(extras).length) qso.extras = extras;
        return qso;
      }),
    };
    state.logs.push(log);
    state.selectedId = log.id;
    render();
    $("qso-call").focus();
  }

  function exportLog(log) {
    const blob = new Blob([buildAdif(log)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safe = log.name.replace(/[^a-z0-9_-]+/gi, "_").replace(/^_+|_+$/g, "");
    a.href = url;
    a.download = `${safe || "log"}.adi`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ---------- Event handlers ----------
  logForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const typedName = $("log-name").value.trim();
    let name = typedName;
    if (!name) {
      const { date, time } = nowUtcParts();
      name = `${t("log.default_prefix")} ${date} ${time.slice(0, 5)} ${t("log.utc_suffix")}`;
    }
    const log = { id: uid(), name, qsos: [] };
    state.logs.push(log);
    state.selectedId = log.id;
    logForm.reset();
    render();
    $("qso-call").focus();
  });

  qsoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const log = selectedLog();
    if (!log) return;
    const band = $("qso-band").value;
    // The dropdown selection may be a parent MODE ("SSB", "MFSK", …) or a
    // SUBMODE ("USB", "FT4", …). Split into ADIF's two-field form:
    //   q.mode    = parent (always set)
    //   q.submode = specific submode (present only when the operator picked one)
    const modeSelection = $("qso-mode").value;
    const mode = modeParent(modeSelection);
    const submodeSelection = SUBMODE_TO_PARENT[modeSelection] ? modeSelection : "";
    const propMode = $("qso-prop-mode").value;
    const defaultRst = rstDefaultFor(mode);
    // Native `required` on the sat fields (toggled by updateSatVisibility)
    // handles the empty-satellite-field prompt exactly like empty callsign.
    const isSat = propMode === "SAT";

    let date, time;
    if (editingId) {
      // Edit mode: use whatever the user typed (no seconds in the input).
      date = $("qso-date").value;
      const t = $("qso-time").value;
      time = t.length === 5 ? t + ":00" : t;
    } else {
      // New QSO: auto-stamp current UTC at the moment of submit.
      const now = nowUtcParts();
      date = now.date;
      time = now.time;
    }

    // Station-data block — general fields (not sat-specific). Only attached
    // to the QSO when the operator actually filled them in, so blank inputs
    // don't pollute the stored record.
    const stationCall = $("qso-station-call").value.trim();
    const operator = $("qso-operator").value.trim();
    const myGrid = $("qso-my-gridsquare").value.trim();
    // QSO-data block — general per-contact fields.
    const grid = $("qso-gridsquare").value.trim();
    const comment = $("qso-comment").value.trim();

    const fields = {
      call: $("qso-call").value.trim().toUpperCase(),
      date,
      time,
      band,
      mode,
      propMode,
      rstSent: $("qso-rst-sent").value.trim() || defaultRst,
      rstRcvd: $("qso-rst-rcvd").value.trim() || defaultRst,
    };
    // Only attach submode when the operator actually picked one; keeps the
    // stored model clean and matches ADIF (SUBMODE is optional).
    if (submodeSelection) fields.submode = submodeSelection;
    if (stationCall) fields.stationCall = stationCall;
    if (operator)    fields.operator    = operator;
    if (myGrid)      fields.myGridSquare = myGrid;
    if (grid)        fields.gridSquare   = grid;
    if (comment)     fields.comment      = comment;
    // Satellite-only fields — attached only when it *is* a satellite QSO.
    // Non-sat QSOs never carry sat properties; editing a sat QSO to a non-sat
    // mode strips any previously stored sat data.
    if (isSat) {
      fields.bandRx  = $("qso-band-rx").value;
      fields.satMode = $("qso-sat-mode").value;
      fields.satName = $("qso-sat-name").value;
    }
    if (editingId) {
      const q = log.qsos.find((x) => x.id === editingId);
      if (q) {
        Object.assign(q, fields);
        // Editing away from a submode-specific selection removes the stored
        // q.submode (Object.assign didn't touch it since fields.submode was
        // absent when the operator picked a parent-only value).
        if (!submodeSelection) delete q.submode;
        // Empty optional inputs delete the previously stored value.
        if (!stationCall) delete q.stationCall;
        if (!operator)    delete q.operator;
        if (!myGrid)      delete q.myGridSquare;
        if (!grid)        delete q.gridSquare;
        if (!comment)     delete q.comment;
        if (!isSat) {
          delete q.bandRx;
          delete q.satMode;
          delete q.satName;
        }
      }
      cancelEdit({ skipRender: true });
    } else {
      log.qsos.push({ id: uid(), ...fields });
      // Clear per-QSO fields; station data (stationCall/operator/myGrid) stays
      // sticky across contacts like band/mode/prop-mode.
      $("qso-call").value = "";
      $("qso-gridsquare").value = "";
      $("qso-comment").value = "";
      $("qso-rst-sent").value = "";
      $("qso-rst-rcvd").value = "";
    }
    // Band/mode/prop-mode stay sticky across QSOs in the same session.
    // Restore the operator's exact dropdown selection (parent OR submode),
    // not the split parent — otherwise consecutive submode QSOs would keep
    // jumping back to the parent.
    $("qso-band").value = band;
    $("qso-mode").value = modeSelection;
    $("qso-prop-mode").value = propMode;
    $("qso-call").focus();
    render();
    updateDupIndicator();
  });

  $("export-btn").addEventListener("click", () => {
    const log = selectedLog();
    if (log) exportLog(log);
  });

  $("import-btn").addEventListener("click", () => $("import-input").click());
  $("import-input").addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      importAdif(text);
    } catch (err) {
      alert(t("alert.import_failed", err && err.message ? err.message : err));
    } finally {
      e.target.value = "";
    }
  });

  $("delete-log-btn").addEventListener("click", () => {
    const log = selectedLog();
    if (!log) return;
    if (!confirm(t("confirm.delete_logbook", log.name, log.qsos.length))) return;
    if (editingId) cancelEdit({ skipRender: true });
    state.logs = state.logs.filter((l) => l.id !== log.id);
    state.selectedId = state.logs.length ? state.logs[0].id : null;
    ensureAtLeastOneLog();
    render();
  });

  // ---------- Init ----------
  function ensureAtLeastOneLog() {
    if (state.logs.length > 0) return;
    const { date, time } = nowUtcParts();
    const log = { id: uid(), name: `${t("log.default_prefix")} ${date} ${time.slice(0, 5)} ${t("log.utc_suffix")}`, qsos: [] };
    state.logs.push(log);
    state.selectedId = log.id;
  }

  applyLanguage();
  applyTheme();
  ensureAtLeastOneLog();
  render();

  // ---------- PWA service worker ----------
  // Skipped on file:// (browsers refuse to register there) so the app still
  // opens cleanly when launched directly from disk.
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
})();
