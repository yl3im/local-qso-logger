/* Bundled contest catalog — 68 configs, one file for network efficiency.
 * Each contest is a self-contained IIFE assigning window.CONTESTS[<id>].
 * Grep for "==== <id> ====" to jump to a specific one. Adding a new
 * contest = paste a new IIFE block at the alphabetical position.
 *
 * Ships as one asset because the 68 individual files compressed to
 * ~57 KB gzipped where this bundle is ~15 KB; contest configs are highly
 * repetitive (same schema, same APP_LQ_* prefix, same Cabrillo header
 * fields) and gzip works far better across the whole set than 68 tiny
 * per-file streams.
 */

// ================================================================
// ==== 9a-cw-9a
// ================================================================
/* Croatian CW Contest (9A CW) — 9A-station perspective.
 * https://www.hamradio.hr/en/
 * Exchange (9A side): send RST + 2-char Croatian county code (e.g. "ZG"
 * Zagreb, "ST" Split); receive RST + county (9A) or RST + serial (DX).
 * Held third full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["9a-cw-9a"] = {
    id: "9a-cw-9a",
    name: "Croatian CW Contest (9A side)",
    shortName: "9A CW (9A)",
    url: "https://www.hamradio.hr/en/",
    windows: [
      { start: "2026-12-19T14:00:00Z", end: "2026-12-20T13:59:59Z" },
      { start: "2027-12-18T14:00:00Z", end: "2027-12-19T13:59:59Z" },
      { start: "2028-12-16T14:00:00Z", end: "2028-12-17T13:59:59Z" },
      { start: "2029-12-15T14:00:00Z", end: "2029-12-16T13:59:59Z" },
      { start: "2030-12-21T14:00:00Z", end: "2030-12-22T13:59:59Z" },
      { start: "2031-12-20T14:00:00Z", end: "2031-12-21T13:59:59Z" },
      { start: "2032-12-18T14:00:00Z", end: "2032-12-19T13:59:59Z" },
      { start: "2033-12-17T14:00:00Z", end: "2033-12-18T13:59:59Z" },
      { start: "2034-12-16T14:00:00Z", end: "2034-12-17T13:59:59Z" },
      { start: "2035-12-15T14:00:00Z", end: "2035-12-16T13:59:59Z" },
      { start: "2036-12-20T14:00:00Z", end: "2036-12-21T13:59:59Z" },
      { start: "2037-12-19T14:00:00Z", end: "2037-12-20T13:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_county", type: "text", label: "My county",
        placeholder: "ZG", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_COUNTY",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (9A) or serial (DX)",
        placeholder: "ZG or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "9A-CW",
      sentTemplate: ["rst_sent", "sent_county"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== 9a-cw-dx
// ================================================================
/* Croatian CW Contest (9A CW) — DX-station perspective (non-9A stations).
 * https://www.hamradio.hr/en/
 * Exchange (DX side): send RST + serial; receive RST + 2-char Croatian
 * county code from 9A stations, or RST + serial from other DX. Held third
 * full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["9a-cw-dx"] = {
    id: "9a-cw-dx",
    name: "Croatian CW Contest (DX side)",
    shortName: "9A CW (DX)",
    url: "https://www.hamradio.hr/en/",
    windows: [
      { start: "2026-12-19T14:00:00Z", end: "2026-12-20T13:59:59Z" },
      { start: "2027-12-18T14:00:00Z", end: "2027-12-19T13:59:59Z" },
      { start: "2028-12-16T14:00:00Z", end: "2028-12-17T13:59:59Z" },
      { start: "2029-12-15T14:00:00Z", end: "2029-12-16T13:59:59Z" },
      { start: "2030-12-21T14:00:00Z", end: "2030-12-22T13:59:59Z" },
      { start: "2031-12-20T14:00:00Z", end: "2031-12-21T13:59:59Z" },
      { start: "2032-12-18T14:00:00Z", end: "2032-12-19T13:59:59Z" },
      { start: "2033-12-17T14:00:00Z", end: "2033-12-18T13:59:59Z" },
      { start: "2034-12-16T14:00:00Z", end: "2034-12-17T13:59:59Z" },
      { start: "2035-12-15T14:00:00Z", end: "2035-12-16T13:59:59Z" },
      { start: "2036-12-20T14:00:00Z", end: "2036-12-21T13:59:59Z" },
      { start: "2037-12-19T14:00:00Z", end: "2037-12-20T13:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (9A) or serial (DX)",
        placeholder: "ZG or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "9A-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== all-asia-cw
// ================================================================
/* All Asian DX Contest, CW (JARL).
 * https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm
 * Exchange: RST + operator age in years (all stations, both sides).
 * XYL/YL operators may send "00" to keep age private. Held the third
 * full weekend of June.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["all-asia-cw"] = {
    id: "all-asia-cw",
    name: "All Asian DX Contest, CW",
    shortName: "All Asian CW",
    url: "https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm",
    windows: [
      { start: "2026-06-20T00:00:00Z", end: "2026-06-21T23:59:59Z" },
      { start: "2027-06-19T00:00:00Z", end: "2027-06-20T23:59:59Z" },
      { start: "2028-06-17T00:00:00Z", end: "2028-06-18T23:59:59Z" },
      { start: "2029-06-16T00:00:00Z", end: "2029-06-17T23:59:59Z" },
      { start: "2030-06-15T00:00:00Z", end: "2030-06-16T23:59:59Z" },
      { start: "2031-06-21T00:00:00Z", end: "2031-06-22T23:59:59Z" },
      { start: "2032-06-19T00:00:00Z", end: "2032-06-20T23:59:59Z" },
      { start: "2033-06-18T00:00:00Z", end: "2033-06-19T23:59:59Z" },
      { start: "2034-06-17T00:00:00Z", end: "2034-06-18T23:59:59Z" },
      { start: "2035-06-16T00:00:00Z", end: "2035-06-17T23:59:59Z" },
      { start: "2036-06-21T00:00:00Z", end: "2036-06-22T23:59:59Z" },
      { start: "2037-06-20T00:00:00Z", end: "2037-06-21T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_age", type: "text", label: "My age (yrs, or 00)",
        placeholder: "45", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AGE",
      },
      {
        id: "rcvd_age", type: "text", label: "Their age",
        placeholder: "45", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_AGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "AA-CW",
      sentTemplate: ["rst_sent", "sent_age"],
      rcvdTemplate: ["rst_rcvd", "rcvd_age"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== all-asia-ssb
// ================================================================
/* All Asian DX Contest, SSB (JARL).
 * https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm
 * Exchange: RST + operator age in years (all stations, both sides).
 * XYL/YL operators may send "00" to keep age private. SSB variant of the
 * All Asian contest; held first full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["all-asia-ssb"] = {
    id: "all-asia-ssb",
    name: "All Asian DX Contest, SSB",
    shortName: "All Asian SSB",
    url: "https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm",
    windows: [
      { start: "2026-09-05T00:00:00Z", end: "2026-09-06T23:59:59Z" },
      { start: "2027-09-04T00:00:00Z", end: "2027-09-05T23:59:59Z" },
      { start: "2028-09-02T00:00:00Z", end: "2028-09-03T23:59:59Z" },
      { start: "2029-09-01T00:00:00Z", end: "2029-09-02T23:59:59Z" },
      { start: "2030-09-07T00:00:00Z", end: "2030-09-08T23:59:59Z" },
      { start: "2031-09-06T00:00:00Z", end: "2031-09-07T23:59:59Z" },
      { start: "2032-09-04T00:00:00Z", end: "2032-09-05T23:59:59Z" },
      { start: "2033-09-03T00:00:00Z", end: "2033-09-04T23:59:59Z" },
      { start: "2034-09-02T00:00:00Z", end: "2034-09-03T23:59:59Z" },
      { start: "2035-09-01T00:00:00Z", end: "2035-09-02T23:59:59Z" },
      { start: "2036-09-06T00:00:00Z", end: "2036-09-07T23:59:59Z" },
      { start: "2037-09-05T00:00:00Z", end: "2037-09-06T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_age", type: "text", label: "My age (yrs, or 00)",
        placeholder: "45", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AGE",
      },
      {
        id: "rcvd_age", type: "text", label: "Their age",
        placeholder: "45", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_AGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "AA-SSB",
      sentTemplate: ["rst_sent", "sent_age"],
      rcvdTemplate: ["rst_rcvd", "rcvd_age"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ari-dx-dx
// ================================================================
/* ARI International DX Contest — DX-station perspective (non-I stations).
 * https://www.contestari.it/regolamenti-eng/
 * Exchange (DX side): send RST + serial; receive RST + 2-char Italian
 * province code (e.g. "RM", "MI", "TO") from I stations, or RST + serial
 * from other DX. Held first full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ari-dx-dx"] = {
    id: "ari-dx-dx",
    name: "ARI International DX Contest (DX side)",
    shortName: "ARI DX (DX)",
    url: "https://www.contestari.it/regolamenti-eng/",
    windows: [
      { start: "2026-05-02T12:00:00Z", end: "2026-05-03T11:59:59Z" },
      { start: "2027-05-01T12:00:00Z", end: "2027-05-02T11:59:59Z" },
      { start: "2028-05-06T12:00:00Z", end: "2028-05-07T11:59:59Z" },
      { start: "2029-05-05T12:00:00Z", end: "2029-05-06T11:59:59Z" },
      { start: "2030-05-04T12:00:00Z", end: "2030-05-05T11:59:59Z" },
      { start: "2031-05-03T12:00:00Z", end: "2031-05-04T11:59:59Z" },
      { start: "2032-05-01T12:00:00Z", end: "2032-05-02T11:59:59Z" },
      { start: "2033-05-07T12:00:00Z", end: "2033-05-08T11:59:59Z" },
      { start: "2034-05-06T12:00:00Z", end: "2034-05-07T11:59:59Z" },
      { start: "2035-05-05T12:00:00Z", end: "2035-05-06T11:59:59Z" },
      { start: "2036-05-03T12:00:00Z", end: "2036-05-04T11:59:59Z" },
      { start: "2037-05-02T12:00:00Z", end: "2037-05-03T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB", "RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their province (I) or serial (DX)",
        placeholder: "RM or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARI-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ari-dx-i
// ================================================================
/* ARI International DX Contest — I-station perspective (Italian operators).
 * https://www.contestari.it/regolamenti-eng/
 * Exchange (I side): send RST + 2-char Italian province code (e.g. "RM",
 * "MI", "TO"); receive RST + province (I) or RST + serial (DX). Held
 * first full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ari-dx-i"] = {
    id: "ari-dx-i",
    name: "ARI International DX Contest (I side)",
    shortName: "ARI DX (I)",
    url: "https://www.contestari.it/regolamenti-eng/",
    windows: [
      { start: "2026-05-02T12:00:00Z", end: "2026-05-03T11:59:59Z" },
      { start: "2027-05-01T12:00:00Z", end: "2027-05-02T11:59:59Z" },
      { start: "2028-05-06T12:00:00Z", end: "2028-05-07T11:59:59Z" },
      { start: "2029-05-05T12:00:00Z", end: "2029-05-06T11:59:59Z" },
      { start: "2030-05-04T12:00:00Z", end: "2030-05-05T11:59:59Z" },
      { start: "2031-05-03T12:00:00Z", end: "2031-05-04T11:59:59Z" },
      { start: "2032-05-01T12:00:00Z", end: "2032-05-02T11:59:59Z" },
      { start: "2033-05-07T12:00:00Z", end: "2033-05-08T11:59:59Z" },
      { start: "2034-05-06T12:00:00Z", end: "2034-05-07T11:59:59Z" },
      { start: "2035-05-05T12:00:00Z", end: "2035-05-06T11:59:59Z" },
      { start: "2036-05-03T12:00:00Z", end: "2036-05-04T11:59:59Z" },
      { start: "2037-05-02T12:00:00Z", end: "2037-05-03T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB", "RTTY"],
    exchange: [
      {
        id: "sent_province", type: "text", label: "My province",
        placeholder: "RM", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_PROVINCE",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their province (I) or serial (DX)",
        placeholder: "RM or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARI-DX",
      sentTemplate: ["rst_sent", "sent_province"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-10m-dx
// ================================================================
/* ARRL 10-Meter Contest — DX-station perspective.
 * https://www.arrl.org/10-meter
 * Exchange (DX side): send RST + ITU zone; receive RST + US state or
 * Canadian province (or another DX station's ITU zone). Single-band, 10m
 * only. Runs the second full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-10m-dx"] = {
    id: "arrl-10m-dx",
    name: "ARRL 10-Meter Contest (DX side)",
    shortName: "ARRL 10m (DX)",
    url: "https://www.arrl.org/10-meter",
    windows: [
      { start: "2026-12-12T00:00:00Z", end: "2026-12-13T23:59:59Z" },
      { start: "2027-12-11T00:00:00Z", end: "2027-12-12T23:59:59Z" },
      { start: "2028-12-09T00:00:00Z", end: "2028-12-10T23:59:59Z" },
      { start: "2029-12-08T00:00:00Z", end: "2029-12-09T23:59:59Z" },
      { start: "2030-12-14T00:00:00Z", end: "2030-12-15T23:59:59Z" },
      { start: "2031-12-13T00:00:00Z", end: "2031-12-14T23:59:59Z" },
      { start: "2032-12-11T00:00:00Z", end: "2032-12-12T23:59:59Z" },
      { start: "2033-12-10T00:00:00Z", end: "2033-12-11T23:59:59Z" },
      { start: "2034-12-09T00:00:00Z", end: "2034-12-10T23:59:59Z" },
      { start: "2035-12-08T00:00:00Z", end: "2035-12-09T23:59:59Z" },
      { start: "2036-12-13T00:00:00Z", end: "2036-12-14T23:59:59Z" },
      { start: "2037-12-12T00:00:00Z", end: "2037-12-13T23:59:59Z" },
    ],
    bands: ["10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_itu", type: "text", label: "My ITU Zone",
        placeholder: "29", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ITU",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/prov (W/VE) or ITU (DX)",
        placeholder: "PA or 08", required: true, maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-10",
      sentTemplate: ["rst_sent", "sent_itu"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-MODE",     "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-10m-w
// ================================================================
/* ARRL 10-Meter Contest — US/Canadian station perspective.
 * https://www.arrl.org/10-meter
 * Exchange (W/VE side): send RST + state or province; receive RST + ITU
 * zone (from DX) or state/province (from other W/VE stations). Single-band,
 * 10m only. Runs the second full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-10m-w"] = {
    id: "arrl-10m-w",
    name: "ARRL 10-Meter Contest (W/VE side)",
    shortName: "ARRL 10m (W/VE)",
    url: "https://www.arrl.org/10-meter",
    windows: [
      { start: "2026-12-12T00:00:00Z", end: "2026-12-13T23:59:59Z" },
      { start: "2027-12-11T00:00:00Z", end: "2027-12-12T23:59:59Z" },
      { start: "2028-12-09T00:00:00Z", end: "2028-12-10T23:59:59Z" },
      { start: "2029-12-08T00:00:00Z", end: "2029-12-09T23:59:59Z" },
      { start: "2030-12-14T00:00:00Z", end: "2030-12-15T23:59:59Z" },
      { start: "2031-12-13T00:00:00Z", end: "2031-12-14T23:59:59Z" },
      { start: "2032-12-11T00:00:00Z", end: "2032-12-12T23:59:59Z" },
      { start: "2033-12-10T00:00:00Z", end: "2033-12-11T23:59:59Z" },
      { start: "2034-12-09T00:00:00Z", end: "2034-12-10T23:59:59Z" },
      { start: "2035-12-08T00:00:00Z", end: "2035-12-09T23:59:59Z" },
      { start: "2036-12-13T00:00:00Z", end: "2036-12-14T23:59:59Z" },
      { start: "2037-12-12T00:00:00Z", end: "2037-12-13T23:59:59Z" },
    ],
    bands: ["10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_qth", type: "text", label: "My state/prov",
        placeholder: "PA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_QTH",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their ITU (DX) or state/prov (W/VE)",
        placeholder: "08 or PA", required: true, maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-10",
      sentTemplate: ["rst_sent", "sent_qth"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-MODE",     "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-160m-dx
// ================================================================
/* ARRL 160-Meter Contest — DX-station perspective.
 * https://www.arrl.org/160-meter
 * Exchange (DX side): send RST only; receive RST + ARRL/RAC section from
 * W/VE stations. CW only. Single-band, 160m. Runs the first full weekend
 * of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-160m-dx"] = {
    id: "arrl-160m-dx",
    name: "ARRL 160-Meter Contest (DX side)",
    shortName: "ARRL 160m (DX)",
    url: "https://www.arrl.org/160-meter",
    windows: [
      { start: "2026-11-06T22:00:00Z", end: "2026-11-08T16:00:00Z" },
      { start: "2026-12-04T22:00:00Z", end: "2026-12-06T16:00:00Z" },
      { start: "2027-11-05T22:00:00Z", end: "2027-11-07T16:00:00Z" },
      { start: "2027-12-03T22:00:00Z", end: "2027-12-05T16:00:00Z" },
      { start: "2028-11-03T22:00:00Z", end: "2028-11-05T16:00:00Z" },
      { start: "2028-12-01T22:00:00Z", end: "2028-12-03T16:00:00Z" },
      { start: "2029-11-02T22:00:00Z", end: "2029-11-04T16:00:00Z" },
      { start: "2029-11-30T22:00:00Z", end: "2029-12-02T16:00:00Z" },
      { start: "2030-11-01T22:00:00Z", end: "2030-11-03T16:00:00Z" },
      { start: "2030-12-06T22:00:00Z", end: "2030-12-08T16:00:00Z" },
      { start: "2031-10-31T22:00:00Z", end: "2031-11-02T16:00:00Z" },
      { start: "2031-12-05T22:00:00Z", end: "2031-12-07T16:00:00Z" },
      { start: "2032-11-05T22:00:00Z", end: "2032-11-07T16:00:00Z" },
      { start: "2032-12-03T22:00:00Z", end: "2032-12-05T16:00:00Z" },
      { start: "2033-11-04T22:00:00Z", end: "2033-11-06T16:00:00Z" },
      { start: "2033-12-02T22:00:00Z", end: "2033-12-04T16:00:00Z" },
      { start: "2034-11-03T22:00:00Z", end: "2034-11-05T16:00:00Z" },
      { start: "2034-12-01T22:00:00Z", end: "2034-12-03T16:00:00Z" },
      { start: "2035-11-02T22:00:00Z", end: "2035-11-04T16:00:00Z" },
      { start: "2035-11-30T22:00:00Z", end: "2035-12-02T16:00:00Z" },
      { start: "2036-10-31T22:00:00Z", end: "2036-11-02T16:00:00Z" },
      { start: "2036-12-05T22:00:00Z", end: "2036-12-07T16:00:00Z" },
      { start: "2037-11-06T22:00:00Z", end: "2037-11-08T16:00:00Z" },
      { start: "2037-12-04T22:00:00Z", end: "2037-12-06T16:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["CW"],
    exchange: [
      // DX stations send only RST — no additional field. But we still capture
      // the received W/VE section as a required field.
      {
        id: "rcvd_section", type: "text", label: "Their ARRL/RAC section",
        placeholder: "EMA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "ARRL-160",
      sentTemplate: ["rst_sent"],
      rcvdTemplate: ["rst_rcvd", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-160m-w
// ================================================================
/* ARRL 160-Meter Contest — US/Canadian station perspective.
 * https://www.arrl.org/160-meter
 * Exchange (W/VE side): send RST + ARRL/RAC section; receive RST + section
 * (from other W/VE) or RST only (from DX). CW only. Single-band, 160m.
 * Runs the first full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-160m-w"] = {
    id: "arrl-160m-w",
    name: "ARRL 160-Meter Contest (W/VE side)",
    shortName: "ARRL 160m (W/VE)",
    url: "https://www.arrl.org/160-meter",
    windows: [
      { start: "2026-11-06T22:00:00Z", end: "2026-11-08T16:00:00Z" },
      { start: "2026-12-04T22:00:00Z", end: "2026-12-06T16:00:00Z" },
      { start: "2027-11-05T22:00:00Z", end: "2027-11-07T16:00:00Z" },
      { start: "2027-12-03T22:00:00Z", end: "2027-12-05T16:00:00Z" },
      { start: "2028-11-03T22:00:00Z", end: "2028-11-05T16:00:00Z" },
      { start: "2028-12-01T22:00:00Z", end: "2028-12-03T16:00:00Z" },
      { start: "2029-11-02T22:00:00Z", end: "2029-11-04T16:00:00Z" },
      { start: "2029-11-30T22:00:00Z", end: "2029-12-02T16:00:00Z" },
      { start: "2030-11-01T22:00:00Z", end: "2030-11-03T16:00:00Z" },
      { start: "2030-12-06T22:00:00Z", end: "2030-12-08T16:00:00Z" },
      { start: "2031-10-31T22:00:00Z", end: "2031-11-02T16:00:00Z" },
      { start: "2031-12-05T22:00:00Z", end: "2031-12-07T16:00:00Z" },
      { start: "2032-11-05T22:00:00Z", end: "2032-11-07T16:00:00Z" },
      { start: "2032-12-03T22:00:00Z", end: "2032-12-05T16:00:00Z" },
      { start: "2033-11-04T22:00:00Z", end: "2033-11-06T16:00:00Z" },
      { start: "2033-12-02T22:00:00Z", end: "2033-12-04T16:00:00Z" },
      { start: "2034-11-03T22:00:00Z", end: "2034-11-05T16:00:00Z" },
      { start: "2034-12-01T22:00:00Z", end: "2034-12-03T16:00:00Z" },
      { start: "2035-11-02T22:00:00Z", end: "2035-11-04T16:00:00Z" },
      { start: "2035-11-30T22:00:00Z", end: "2035-12-02T16:00:00Z" },
      { start: "2036-10-31T22:00:00Z", end: "2036-11-02T16:00:00Z" },
      { start: "2036-12-05T22:00:00Z", end: "2036-12-07T16:00:00Z" },
      { start: "2037-11-06T22:00:00Z", end: "2037-11-08T16:00:00Z" },
      { start: "2037-12-04T22:00:00Z", end: "2037-12-06T16:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_section", type: "text", label: "My ARRL/RAC section",
        placeholder: "EMA", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SECTION",
      },
      // DX stations only send RST — leave rcvd_section blank for DX contacts.
      {
        id: "rcvd_section", type: "text", label: "Their section (W/VE only)",
        placeholder: "EMA", maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "ARRL-160",
      sentTemplate: ["rst_sent", "sent_section"],
      rcvdTemplate: ["rst_rcvd", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-dx-cw
// ================================================================
/* ARRL International DX Contest, CW.
 * https://www.arrl.org/arrl-dx
 * Configured for the DX-station perspective (YL3IM):
 *   sent  = RST + TX power (whole watts)
 *   rcvd  = RST + US/Canada state or province
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-dx-cw"] = {
    id: "arrl-dx-cw",
    name: "ARRL International DX Contest, CW",
    shortName: "ARRL DX CW",
    url: "https://www.arrl.org/arrl-dx",
    windows: [
      { start: "2026-02-21T00:00:00Z", end: "2026-02-22T23:59:59Z" },
      { start: "2027-02-20T00:00:00Z", end: "2027-02-21T23:59:59Z" },
      { start: "2028-02-19T00:00:00Z", end: "2028-02-20T23:59:59Z" },
      { start: "2029-02-17T00:00:00Z", end: "2029-02-18T23:59:59Z" },
      { start: "2030-02-16T00:00:00Z", end: "2030-02-17T23:59:59Z" },
      { start: "2031-02-15T00:00:00Z", end: "2031-02-16T23:59:59Z" },
      { start: "2032-02-21T00:00:00Z", end: "2032-02-22T23:59:59Z" },
      { start: "2033-02-19T00:00:00Z", end: "2033-02-20T23:59:59Z" },
      { start: "2034-02-18T00:00:00Z", end: "2034-02-19T23:59:59Z" },
      { start: "2035-02-17T00:00:00Z", end: "2035-02-18T23:59:59Z" },
      { start: "2036-02-16T00:00:00Z", end: "2036-02-17T23:59:59Z" },
      { start: "2037-02-21T00:00:00Z", end: "2037-02-22T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_pwr", type: "number", label: "My power (W)",
        placeholder: "100", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_PWR",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/province",
        placeholder: "PA", required: true, maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-DX-CW",
      sentTemplate: ["rst_sent", "sent_pwr"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-dx-ssb
// ================================================================
/* ARRL International DX Contest, SSB.
 * https://www.arrl.org/arrl-dx
 * Configured for the DX-station perspective (YL3IM):
 *   sent  = RST + TX power (whole watts)
 *   rcvd  = RST + US/Canada state or province (2- or 3-letter abbreviation)
 * A W/VE-perspective variant would flip these.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-dx-ssb"] = {
    id: "arrl-dx-ssb",
    name: "ARRL International DX Contest, SSB",
    shortName: "ARRL DX SSB",
    url: "https://www.arrl.org/arrl-dx",
    windows: [
      { start: "2026-03-07T00:00:00Z", end: "2026-03-08T23:59:59Z" },
      { start: "2027-03-06T00:00:00Z", end: "2027-03-07T23:59:59Z" },
      { start: "2028-03-04T00:00:00Z", end: "2028-03-05T23:59:59Z" },
      { start: "2029-03-03T00:00:00Z", end: "2029-03-04T23:59:59Z" },
      { start: "2030-03-02T00:00:00Z", end: "2030-03-03T23:59:59Z" },
      { start: "2031-03-01T00:00:00Z", end: "2031-03-02T23:59:59Z" },
      { start: "2032-03-06T00:00:00Z", end: "2032-03-07T23:59:59Z" },
      { start: "2033-03-05T00:00:00Z", end: "2033-03-06T23:59:59Z" },
      { start: "2034-03-04T00:00:00Z", end: "2034-03-05T23:59:59Z" },
      { start: "2035-03-03T00:00:00Z", end: "2035-03-04T23:59:59Z" },
      { start: "2036-03-01T00:00:00Z", end: "2036-03-02T23:59:59Z" },
      { start: "2037-03-07T00:00:00Z", end: "2037-03-08T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_pwr", type: "number", label: "My power (W)",
        placeholder: "100", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_PWR",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/province",
        placeholder: "PA", required: true, maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-DX-SSB",
      sentTemplate: ["rst_sent", "sent_pwr"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-fd
// ================================================================
/* ARRL Field Day.
 * https://www.arrl.org/field-day
 * Exchange: Class (e.g. "1A", "3F") + ARRL/RAC Section (e.g. "PAC", "ONE").
 * Both stations send the same exchange format; both receive it too.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-fd"] = {
    id: "arrl-fd",
    name: "ARRL Field Day",
    shortName: "ARRL FD",
    url: "https://www.arrl.org/field-day",
    windows: [
      { start: "2026-06-27T18:00:00Z", end: "2026-06-28T20:59:59Z" },
      { start: "2027-06-26T18:00:00Z", end: "2027-06-27T20:59:59Z" },
      { start: "2028-06-24T18:00:00Z", end: "2028-06-25T20:59:59Z" },
      { start: "2029-06-23T18:00:00Z", end: "2029-06-24T20:59:59Z" },
      { start: "2030-06-22T18:00:00Z", end: "2030-06-23T20:59:59Z" },
      { start: "2031-06-28T18:00:00Z", end: "2031-06-29T20:59:59Z" },
      { start: "2032-06-26T18:00:00Z", end: "2032-06-27T20:59:59Z" },
      { start: "2033-06-25T18:00:00Z", end: "2033-06-26T20:59:59Z" },
      { start: "2034-06-24T18:00:00Z", end: "2034-06-25T20:59:59Z" },
      { start: "2035-06-23T18:00:00Z", end: "2035-06-24T20:59:59Z" },
      { start: "2036-06-28T18:00:00Z", end: "2036-06-29T20:59:59Z" },
      { start: "2037-06-27T18:00:00Z", end: "2037-06-28T20:59:59Z" },
    ],
    // Field Day allows all HF/VHF/UHF bands except WARC (30m/17m/12m).
    bands: ["160m", "80m", "40m", "20m", "15m", "10m", "6m", "2m", "1.25m", "70cm"],
    modes: ["SSB", "CW", "FM"],
    exchange: [
      {
        id: "sent_class", type: "text", label: "My class",
        placeholder: "1A", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_CLASS",
      },
      {
        id: "sent_section", type: "text", label: "My section",
        placeholder: "EMA", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SECTION",
      },
      {
        id: "rcvd_class", type: "text", label: "Their class",
        placeholder: "1A", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_CLASS",
      },
      {
        id: "rcvd_section", type: "text", label: "Their section",
        placeholder: "EMA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-FD",
      sentTemplate: ["sent_class", "sent_section"],
      rcvdTemplate: ["rcvd_class", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-STATION", "CATEGORY-POWER",
        "CATEGORY-TRANSMITTER", "CLUB", "NAME",
        "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-rtty-ru-dx
// ================================================================
/* ARRL RTTY Roundup — DX-station perspective.
 * https://www.arrl.org/rtty-roundup
 * Exchange (DX side): send RST + serial; receive RST + state/province
 * (W/VE) or serial (DX). RTTY (+ other digital modes). Runs the first full
 * weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-rtty-ru-dx"] = {
    id: "arrl-rtty-ru-dx",
    name: "ARRL RTTY Roundup (DX side)",
    shortName: "ARRL RTTY RU (DX)",
    url: "https://www.arrl.org/rtty-roundup",
    windows: [
      { start: "2026-01-03T18:00:00Z", end: "2026-01-05T00:00:00Z" },
      { start: "2027-01-02T18:00:00Z", end: "2027-01-04T00:00:00Z" },
      { start: "2028-01-01T18:00:00Z", end: "2028-01-03T00:00:00Z" },
      { start: "2029-01-06T18:00:00Z", end: "2029-01-08T00:00:00Z" },
      { start: "2030-01-05T18:00:00Z", end: "2030-01-07T00:00:00Z" },
      { start: "2031-01-04T18:00:00Z", end: "2031-01-06T00:00:00Z" },
      { start: "2032-01-03T18:00:00Z", end: "2032-01-05T00:00:00Z" },
      { start: "2033-01-01T18:00:00Z", end: "2033-01-03T00:00:00Z" },
      { start: "2034-01-07T18:00:00Z", end: "2034-01-09T00:00:00Z" },
      { start: "2035-01-06T18:00:00Z", end: "2035-01-08T00:00:00Z" },
      { start: "2036-01-05T18:00:00Z", end: "2036-01-07T00:00:00Z" },
      { start: "2037-01-03T18:00:00Z", end: "2037-01-05T00:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/prov (W/VE) or serial (DX)",
        placeholder: "PA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== arrl-rtty-ru-w
// ================================================================
/* ARRL RTTY Roundup — US/Canadian station perspective.
 * https://www.arrl.org/rtty-roundup
 * Exchange (W/VE side): send RST + state/province; receive RST + state/prov
 * (from other W/VE) or serial (from DX). RTTY. Runs the first full weekend
 * of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-rtty-ru-w"] = {
    id: "arrl-rtty-ru-w",
    name: "ARRL RTTY Roundup (W/VE side)",
    shortName: "ARRL RTTY RU (W/VE)",
    url: "https://www.arrl.org/rtty-roundup",
    windows: [
      { start: "2026-01-03T18:00:00Z", end: "2026-01-05T00:00:00Z" },
      { start: "2027-01-02T18:00:00Z", end: "2027-01-04T00:00:00Z" },
      { start: "2028-01-01T18:00:00Z", end: "2028-01-03T00:00:00Z" },
      { start: "2029-01-06T18:00:00Z", end: "2029-01-08T00:00:00Z" },
      { start: "2030-01-05T18:00:00Z", end: "2030-01-07T00:00:00Z" },
      { start: "2031-01-04T18:00:00Z", end: "2031-01-06T00:00:00Z" },
      { start: "2032-01-03T18:00:00Z", end: "2032-01-05T00:00:00Z" },
      { start: "2033-01-01T18:00:00Z", end: "2033-01-03T00:00:00Z" },
      { start: "2034-01-07T18:00:00Z", end: "2034-01-09T00:00:00Z" },
      { start: "2035-01-06T18:00:00Z", end: "2035-01-08T00:00:00Z" },
      { start: "2036-01-05T18:00:00Z", end: "2036-01-07T00:00:00Z" },
      { start: "2037-01-03T18:00:00Z", end: "2037-01-05T00:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_qth", type: "text", label: "My state/prov",
        placeholder: "PA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_QTH",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/prov (W/VE) or serial (DX)",
        placeholder: "PA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-RTTY",
      sentTemplate: ["rst_sent", "sent_qth"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== asrucamp
// ================================================================
/* Asiatic Russia Championship.
 * https://ac.srr.ru/en/
 * Exchange: RST + serial. Asian-Russian stations (R9/UA9-region) work
 * everyone; other stations work only Asian-Russian participants.
 * Held second full weekend of October.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["asrucamp"] = {
    id: "asrucamp",
    name: "Asiatic Russia Championship",
    shortName: "AS-RU Champ",
    url: "https://ac.srr.ru/en/",
    windows: [
      { start: "2026-10-10T08:00:00Z", end: "2026-10-11T07:59:59Z" },
      { start: "2027-10-09T08:00:00Z", end: "2027-10-10T07:59:59Z" },
      { start: "2028-10-14T08:00:00Z", end: "2028-10-15T07:59:59Z" },
      { start: "2029-10-13T08:00:00Z", end: "2029-10-14T07:59:59Z" },
      { start: "2030-10-12T08:00:00Z", end: "2030-10-13T07:59:59Z" },
      { start: "2031-10-11T08:00:00Z", end: "2031-10-12T07:59:59Z" },
      { start: "2032-10-09T08:00:00Z", end: "2032-10-10T07:59:59Z" },
      { start: "2033-10-08T08:00:00Z", end: "2033-10-09T07:59:59Z" },
      { start: "2034-10-14T08:00:00Z", end: "2034-10-15T07:59:59Z" },
      { start: "2035-10-13T08:00:00Z", end: "2035-10-14T07:59:59Z" },
      { start: "2036-10-11T08:00:00Z", end: "2036-10-12T07:59:59Z" },
      { start: "2037-10-10T08:00:00Z", end: "2037-10-11T07:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "AS-RU-CH",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== baltic
// ================================================================
/* Baltic Contest (LRSF).
 * https://www.lrsf.lt/baltic/
 * Exchange: RST + serial. Baltic-area event (LY / YL / ES / SM / OH etc.
 * work everyone; other stations work only Baltic-area participants).
 * Runs a Saturday evening in May, 21:00-01:00 UTC. Both CW and SSB in
 * the same 4-hour window.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["baltic"] = {
    id: "baltic",
    name: "Baltic Contest",
    shortName: "Baltic",
    url: "https://www.lrsf.lt/baltic/",
    windows: [
      { start: "2026-05-16T21:00:00Z", end: "2026-05-17T01:00:00Z" },
      { start: "2027-05-15T21:00:00Z", end: "2027-05-16T01:00:00Z" },
      { start: "2028-05-20T21:00:00Z", end: "2028-05-21T01:00:00Z" },
      { start: "2029-05-19T21:00:00Z", end: "2029-05-20T01:00:00Z" },
      { start: "2030-05-18T21:00:00Z", end: "2030-05-19T01:00:00Z" },
      { start: "2031-05-17T21:00:00Z", end: "2031-05-18T01:00:00Z" },
      { start: "2032-05-15T21:00:00Z", end: "2032-05-16T01:00:00Z" },
      { start: "2033-05-21T21:00:00Z", end: "2033-05-22T01:00:00Z" },
      { start: "2034-05-20T21:00:00Z", end: "2034-05-21T01:00:00Z" },
      { start: "2035-05-19T21:00:00Z", end: "2035-05-20T01:00:00Z" },
      { start: "2036-05-17T21:00:00Z", end: "2036-05-18T01:00:00Z" },
      { start: "2037-05-16T21:00:00Z", end: "2037-05-17T01:00:00Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "BALTIC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-MODE",
        "CLUB",              "NAME",            "ADDRESS",
        "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== bfrr-cw-dx
// ================================================================
/* Belarus BFRR Championship, CW — DX-station perspective.
 * https://ewhfc.brl.by/
 * Exchange (DX side): send RST + serial; receive RST + 2-char Belarus area
 * code (MI, VI, MO, BR, GO, GR — corresponding to Belarusian regions) from
 * EW stations, or RST + serial from other DX. Held early October.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-cw-dx"] = {
    id: "bfrr-cw-dx",
    name: "Belarus BFRR Championship, CW (DX side)",
    shortName: "BFRR CW (DX)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T18:00:00Z", end: "2026-10-03T21:59:59Z" },
      { start: "2027-10-02T18:00:00Z", end: "2027-10-02T21:59:59Z" },
      { start: "2028-10-07T18:00:00Z", end: "2028-10-07T21:59:59Z" },
      { start: "2029-10-06T18:00:00Z", end: "2029-10-06T21:59:59Z" },
      { start: "2030-10-05T18:00:00Z", end: "2030-10-05T21:59:59Z" },
      { start: "2031-10-04T18:00:00Z", end: "2031-10-04T21:59:59Z" },
      { start: "2032-10-02T18:00:00Z", end: "2032-10-02T21:59:59Z" },
      { start: "2033-10-01T18:00:00Z", end: "2033-10-01T21:59:59Z" },
      { start: "2034-10-07T18:00:00Z", end: "2034-10-07T21:59:59Z" },
      { start: "2035-10-06T18:00:00Z", end: "2035-10-06T21:59:59Z" },
      { start: "2036-10-04T18:00:00Z", end: "2036-10-04T21:59:59Z" },
      { start: "2037-10-03T18:00:00Z", end: "2037-10-03T21:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== bfrr-cw-ew
// ================================================================
/* Belarus BFRR Championship, CW — EW-station perspective.
 * https://ewhfc.brl.by/
 * Exchange (EW side): send RST + 2-char Belarus area code (MI, VI, MO,
 * BR, GO, GR); receive RST + area (EW) or RST + serial (DX). Held early
 * October.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-cw-ew"] = {
    id: "bfrr-cw-ew",
    name: "Belarus BFRR Championship, CW (EW side)",
    shortName: "BFRR CW (EW)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T18:00:00Z", end: "2026-10-03T21:59:59Z" },
      { start: "2027-10-02T18:00:00Z", end: "2027-10-02T21:59:59Z" },
      { start: "2028-10-07T18:00:00Z", end: "2028-10-07T21:59:59Z" },
      { start: "2029-10-06T18:00:00Z", end: "2029-10-06T21:59:59Z" },
      { start: "2030-10-05T18:00:00Z", end: "2030-10-05T21:59:59Z" },
      { start: "2031-10-04T18:00:00Z", end: "2031-10-04T21:59:59Z" },
      { start: "2032-10-02T18:00:00Z", end: "2032-10-02T21:59:59Z" },
      { start: "2033-10-01T18:00:00Z", end: "2033-10-01T21:59:59Z" },
      { start: "2034-10-07T18:00:00Z", end: "2034-10-07T21:59:59Z" },
      { start: "2035-10-06T18:00:00Z", end: "2035-10-06T21:59:59Z" },
      { start: "2036-10-04T18:00:00Z", end: "2036-10-04T21:59:59Z" },
      { start: "2037-10-03T18:00:00Z", end: "2037-10-03T21:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_area", type: "text", label: "My Belarus area",
        placeholder: "MI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AREA",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-CW",
      sentTemplate: ["rst_sent", "sent_area"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== bfrr-ssb-dx
// ================================================================
/* Belarus BFRR Championship, SSB — DX-station perspective.
 * https://ewhfc.brl.by/
 * SSB segment runs immediately after the CW segment on the same evening.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-ssb-dx"] = {
    id: "bfrr-ssb-dx",
    name: "Belarus BFRR Championship, SSB (DX side)",
    shortName: "BFRR SSB (DX)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T22:00:00Z", end: "2026-10-04T01:59:59Z" },
      { start: "2027-10-02T22:00:00Z", end: "2027-10-03T01:59:59Z" },
      { start: "2028-10-07T22:00:00Z", end: "2028-10-08T01:59:59Z" },
      { start: "2029-10-06T22:00:00Z", end: "2029-10-07T01:59:59Z" },
      { start: "2030-10-05T22:00:00Z", end: "2030-10-06T01:59:59Z" },
      { start: "2031-10-04T22:00:00Z", end: "2031-10-05T01:59:59Z" },
      { start: "2032-10-02T22:00:00Z", end: "2032-10-03T01:59:59Z" },
      { start: "2033-10-01T22:00:00Z", end: "2033-10-02T01:59:59Z" },
      { start: "2034-10-07T22:00:00Z", end: "2034-10-08T01:59:59Z" },
      { start: "2035-10-06T22:00:00Z", end: "2035-10-07T01:59:59Z" },
      { start: "2036-10-04T22:00:00Z", end: "2036-10-05T01:59:59Z" },
      { start: "2037-10-03T22:00:00Z", end: "2037-10-04T01:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== bfrr-ssb-ew
// ================================================================
/* Belarus BFRR Championship, SSB — EW-station perspective.
 * https://ewhfc.brl.by/
 * SSB segment runs immediately after the CW segment on the same evening.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-ssb-ew"] = {
    id: "bfrr-ssb-ew",
    name: "Belarus BFRR Championship, SSB (EW side)",
    shortName: "BFRR SSB (EW)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T22:00:00Z", end: "2026-10-04T01:59:59Z" },
      { start: "2027-10-02T22:00:00Z", end: "2027-10-03T01:59:59Z" },
      { start: "2028-10-07T22:00:00Z", end: "2028-10-08T01:59:59Z" },
      { start: "2029-10-06T22:00:00Z", end: "2029-10-07T01:59:59Z" },
      { start: "2030-10-05T22:00:00Z", end: "2030-10-06T01:59:59Z" },
      { start: "2031-10-04T22:00:00Z", end: "2031-10-05T01:59:59Z" },
      { start: "2032-10-02T22:00:00Z", end: "2032-10-03T01:59:59Z" },
      { start: "2033-10-01T22:00:00Z", end: "2033-10-02T01:59:59Z" },
      { start: "2034-10-07T22:00:00Z", end: "2034-10-08T01:59:59Z" },
      { start: "2035-10-06T22:00:00Z", end: "2035-10-07T01:59:59Z" },
      { start: "2036-10-04T22:00:00Z", end: "2036-10-05T01:59:59Z" },
      { start: "2037-10-03T22:00:00Z", end: "2037-10-04T01:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_area", type: "text", label: "My Belarus area",
        placeholder: "MI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AREA",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-SSB",
      sentTemplate: ["rst_sent", "sent_area"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cnc-cw-dx
// ================================================================
/* Spanish CW Contest (CNCW / URE) — DX-station perspective.
 * https://concursos.ure.es/en/hf-contest-rules/
 * Exchange (DX side): send RST + serial; receive RST + 2-char Spanish
 * province code (e.g. "M" Madrid, "B" Barcelona) from EA stations, or
 * RST + serial from other DX. Held third full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cnc-cw-dx"] = {
    id: "cnc-cw-dx",
    name: "Spanish CW Contest (DX side)",
    shortName: "CNCW (DX)",
    url: "https://concursos.ure.es/en/hf-contest-rules/",
    windows: [
      { start: "2026-05-16T12:00:00Z", end: "2026-05-17T11:59:59Z" },
      { start: "2027-05-15T12:00:00Z", end: "2027-05-16T11:59:59Z" },
      { start: "2028-05-20T12:00:00Z", end: "2028-05-21T11:59:59Z" },
      { start: "2029-05-19T12:00:00Z", end: "2029-05-20T11:59:59Z" },
      { start: "2030-05-18T12:00:00Z", end: "2030-05-19T11:59:59Z" },
      { start: "2031-05-17T12:00:00Z", end: "2031-05-18T11:59:59Z" },
      { start: "2032-05-15T12:00:00Z", end: "2032-05-16T11:59:59Z" },
      { start: "2033-05-21T12:00:00Z", end: "2033-05-22T11:59:59Z" },
      { start: "2034-05-20T12:00:00Z", end: "2034-05-21T11:59:59Z" },
      { start: "2035-05-19T12:00:00Z", end: "2035-05-20T11:59:59Z" },
      { start: "2036-05-17T12:00:00Z", end: "2036-05-18T11:59:59Z" },
      { start: "2037-05-16T12:00:00Z", end: "2037-05-17T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their province (EA) or serial (DX)",
        placeholder: "M or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CNCW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cnc-cw-ea
// ================================================================
/* Spanish CW Contest (CNCW / URE) — EA-station perspective.
 * https://concursos.ure.es/en/hf-contest-rules/
 * Exchange (EA side): send RST + 2-char Spanish province code (e.g. "M"
 * Madrid); receive RST + province (EA) or RST + serial (DX). Held third
 * full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cnc-cw-ea"] = {
    id: "cnc-cw-ea",
    name: "Spanish CW Contest (EA side)",
    shortName: "CNCW (EA)",
    url: "https://concursos.ure.es/en/hf-contest-rules/",
    windows: [
      { start: "2026-05-16T12:00:00Z", end: "2026-05-17T11:59:59Z" },
      { start: "2027-05-15T12:00:00Z", end: "2027-05-16T11:59:59Z" },
      { start: "2028-05-20T12:00:00Z", end: "2028-05-21T11:59:59Z" },
      { start: "2029-05-19T12:00:00Z", end: "2029-05-20T11:59:59Z" },
      { start: "2030-05-18T12:00:00Z", end: "2030-05-19T11:59:59Z" },
      { start: "2031-05-17T12:00:00Z", end: "2031-05-18T11:59:59Z" },
      { start: "2032-05-15T12:00:00Z", end: "2032-05-16T11:59:59Z" },
      { start: "2033-05-21T12:00:00Z", end: "2033-05-22T11:59:59Z" },
      { start: "2034-05-20T12:00:00Z", end: "2034-05-21T11:59:59Z" },
      { start: "2035-05-19T12:00:00Z", end: "2035-05-20T11:59:59Z" },
      { start: "2036-05-17T12:00:00Z", end: "2036-05-18T11:59:59Z" },
      { start: "2037-05-16T12:00:00Z", end: "2037-05-17T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_province", type: "text", label: "My province",
        placeholder: "M", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_PROVINCE",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their province (EA) or serial (DX)",
        placeholder: "M or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CNCW",
      sentTemplate: ["rst_sent", "sent_province"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-160-cw
// ================================================================
/* CQ 160-Meter Contest, CW.
 * https://cq160.com/rules.htm
 * Exchange: RST + CQ zone. W/VE stations also send their state/province.
 * Single-band (160m) event. Runs the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-160-cw"] = {
    id: "cq-160-cw",
    name: "CQ 160-Meter Contest, CW",
    shortName: "CQ 160 CW",
    url: "https://cq160.com/rules.htm",
    windows: [
      { start: "2026-01-23T22:00:00Z", end: "2026-01-25T22:00:00Z" },
      { start: "2027-01-29T22:00:00Z", end: "2027-01-31T22:00:00Z" },
      { start: "2028-01-28T22:00:00Z", end: "2028-01-30T22:00:00Z" },
      { start: "2029-01-26T22:00:00Z", end: "2029-01-28T22:00:00Z" },
      { start: "2030-01-25T22:00:00Z", end: "2030-01-27T22:00:00Z" },
      { start: "2031-01-24T22:00:00Z", end: "2031-01-26T22:00:00Z" },
      { start: "2032-01-23T22:00:00Z", end: "2032-01-25T22:00:00Z" },
      { start: "2033-01-28T22:00:00Z", end: "2033-01-30T22:00:00Z" },
      { start: "2034-01-27T22:00:00Z", end: "2034-01-29T22:00:00Z" },
      { start: "2035-01-26T22:00:00Z", end: "2035-01-28T22:00:00Z" },
      { start: "2036-01-25T22:00:00Z", end: "2036-01-27T22:00:00Z" },
      { start: "2037-01-23T22:00:00Z", end: "2037-01-25T22:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
      // W/VE stations exchange state/province in addition to (or instead of)
      // zone. Leave blank for non-W/VE contacts.
      {
        id: "rcvd_qth", type: "text", label: "State/Prov (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "CQ-160-CW",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-160-ssb
// ================================================================
/* CQ 160-Meter Contest, SSB.
 * https://cq160.com/rules.htm
 * Exchange: RST + CQ zone (+ state/province for W/VE).
 * Single-band (160m) event. Runs the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-160-ssb"] = {
    id: "cq-160-ssb",
    name: "CQ 160-Meter Contest, SSB",
    shortName: "CQ 160 SSB",
    url: "https://cq160.com/rules.htm",
    windows: [
      { start: "2026-02-27T22:00:00Z", end: "2026-03-01T22:00:00Z" },
      { start: "2027-02-26T22:00:00Z", end: "2027-02-28T22:00:00Z" },
      { start: "2028-02-25T22:00:00Z", end: "2028-02-27T22:00:00Z" },
      { start: "2029-02-23T22:00:00Z", end: "2029-02-25T22:00:00Z" },
      { start: "2030-02-22T22:00:00Z", end: "2030-02-24T22:00:00Z" },
      { start: "2031-02-21T22:00:00Z", end: "2031-02-23T22:00:00Z" },
      { start: "2032-02-27T22:00:00Z", end: "2032-02-29T22:00:00Z" },
      { start: "2033-02-25T22:00:00Z", end: "2033-02-27T22:00:00Z" },
      { start: "2034-02-24T22:00:00Z", end: "2034-02-26T22:00:00Z" },
      { start: "2035-02-23T22:00:00Z", end: "2035-02-25T22:00:00Z" },
      { start: "2036-02-22T22:00:00Z", end: "2036-02-24T22:00:00Z" },
      { start: "2037-02-27T22:00:00Z", end: "2037-03-01T22:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
      {
        id: "rcvd_qth", type: "text", label: "State/Prov (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "CQ-160-SSB",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-m
// ================================================================
/* CQ-M International DX Contest (Soyuz Radio Amateurov Rossii).
 * http://cqm.srr.ru/
 * Exchange: RST + serial (both sides). Held the second full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-m"] = {
    id: "cq-m",
    name: "CQ-M International DX Contest",
    shortName: "CQ-M",
    url: "http://cqm.srr.ru/",
    windows: [
      { start: "2026-05-09T12:00:00Z", end: "2026-05-10T11:59:59Z" },
      { start: "2027-05-08T12:00:00Z", end: "2027-05-09T11:59:59Z" },
      { start: "2028-05-13T12:00:00Z", end: "2028-05-14T11:59:59Z" },
      { start: "2029-05-12T12:00:00Z", end: "2029-05-13T11:59:59Z" },
      { start: "2030-05-11T12:00:00Z", end: "2030-05-12T11:59:59Z" },
      { start: "2031-05-10T12:00:00Z", end: "2031-05-11T11:59:59Z" },
      { start: "2032-05-08T12:00:00Z", end: "2032-05-09T11:59:59Z" },
      { start: "2033-05-14T12:00:00Z", end: "2033-05-15T11:59:59Z" },
      { start: "2034-05-13T12:00:00Z", end: "2034-05-14T11:59:59Z" },
      { start: "2035-05-12T12:00:00Z", end: "2035-05-13T11:59:59Z" },
      { start: "2036-05-10T12:00:00Z", end: "2036-05-11T11:59:59Z" },
      { start: "2037-05-09T12:00:00Z", end: "2037-05-10T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-M",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-wpx-cw
// ================================================================
/* CQ WPX Contest, CW.
 * https://cqwpx.com/rules.htm
 * Exchange: RST + serial number. Runs the last full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-cw"] = {
    id: "cq-wpx-cw",
    name: "CQ Worldwide WPX Contest, CW",
    shortName: "CQ WPX CW",
    url: "https://cqwpx.com/rules.htm",
    windows: [
      { start: "2026-05-30T00:00:00Z", end: "2026-05-31T23:59:59Z" },
      { start: "2027-05-29T00:00:00Z", end: "2027-05-30T23:59:59Z" },
      { start: "2028-05-27T00:00:00Z", end: "2028-05-28T23:59:59Z" },
      { start: "2029-05-26T00:00:00Z", end: "2029-05-27T23:59:59Z" },
      { start: "2030-05-25T00:00:00Z", end: "2030-05-26T23:59:59Z" },
      { start: "2031-05-31T00:00:00Z", end: "2031-06-01T23:59:59Z" },
      { start: "2032-05-29T00:00:00Z", end: "2032-05-30T23:59:59Z" },
      { start: "2033-05-28T00:00:00Z", end: "2033-05-29T23:59:59Z" },
      { start: "2034-05-27T00:00:00Z", end: "2034-05-28T23:59:59Z" },
      { start: "2035-05-26T00:00:00Z", end: "2035-05-27T23:59:59Z" },
      { start: "2036-05-31T00:00:00Z", end: "2036-06-01T23:59:59Z" },
      { start: "2037-05-30T00:00:00Z", end: "2037-05-31T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WPX-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-wpx-rtty
// ================================================================
/* CQ WPX Contest, RTTY.
 * https://cqwpxrtty.com/rules.htm
 * Exchange: RST + serial number. Runs the second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-rtty"] = {
    id: "cq-wpx-rtty",
    name: "CQ Worldwide WPX Contest, RTTY",
    shortName: "CQ WPX RTTY",
    url: "https://cqwpxrtty.com/rules.htm",
    windows: [
      { start: "2026-02-14T00:00:00Z", end: "2026-02-15T23:59:59Z" },
      { start: "2027-02-13T00:00:00Z", end: "2027-02-14T23:59:59Z" },
      { start: "2028-02-12T00:00:00Z", end: "2028-02-13T23:59:59Z" },
      { start: "2029-02-10T00:00:00Z", end: "2029-02-11T23:59:59Z" },
      { start: "2030-02-09T00:00:00Z", end: "2030-02-10T23:59:59Z" },
      { start: "2031-02-08T00:00:00Z", end: "2031-02-09T23:59:59Z" },
      { start: "2032-02-14T00:00:00Z", end: "2032-02-15T23:59:59Z" },
      { start: "2033-02-12T00:00:00Z", end: "2033-02-13T23:59:59Z" },
      { start: "2034-02-11T00:00:00Z", end: "2034-02-12T23:59:59Z" },
      { start: "2035-02-10T00:00:00Z", end: "2035-02-11T23:59:59Z" },
      { start: "2036-02-09T00:00:00Z", end: "2036-02-10T23:59:59Z" },
      { start: "2037-02-14T00:00:00Z", end: "2037-02-15T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WPX-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cq-wpx-ssb
// ================================================================
/* CQ WPX Contest, SSB.
 * https://cqwpx.com/rules.htm
 * Exchange: RST + serial number (starting at 001, per-contact incrementing).
 * Prefix multiplier — every distinct prefix counted once for the whole log.
 * Runs the last full weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-ssb"] = {
    id: "cq-wpx-ssb",
    name: "CQ Worldwide WPX Contest, SSB",
    shortName: "CQ WPX SSB",
    url: "https://cqwpx.com/rules.htm",
    windows: [
      { start: "2026-03-28T00:00:00Z", end: "2026-03-29T23:59:59Z" },
      { start: "2027-03-27T00:00:00Z", end: "2027-03-28T23:59:59Z" },
      { start: "2028-03-25T00:00:00Z", end: "2028-03-26T23:59:59Z" },
      { start: "2029-03-24T00:00:00Z", end: "2029-03-25T23:59:59Z" },
      { start: "2030-03-23T00:00:00Z", end: "2030-03-24T23:59:59Z" },
      { start: "2031-03-22T00:00:00Z", end: "2031-03-23T23:59:59Z" },
      { start: "2032-03-27T00:00:00Z", end: "2032-03-28T23:59:59Z" },
      { start: "2033-03-26T00:00:00Z", end: "2033-03-27T23:59:59Z" },
      { start: "2034-03-25T00:00:00Z", end: "2034-03-26T23:59:59Z" },
      { start: "2035-03-24T00:00:00Z", end: "2035-03-25T23:59:59Z" },
      { start: "2036-03-22T00:00:00Z", end: "2036-03-23T23:59:59Z" },
      { start: "2037-03-28T00:00:00Z", end: "2037-03-29T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WPX-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cqww-cw
// ================================================================
/* CQ Worldwide DX Contest, CW.
 * https://cqww.com/rules.htm
 * Exchange: RST + CQ Zone (2 digits, 01-40).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-cw"] = {
    id: "cqww-cw",
    name: "CQ Worldwide DX Contest, CW",
    shortName: "CQ WW CW",
    url: "https://cqww.com/rules.htm",
    windows: [
      { start: "2026-11-28T00:00:00Z", end: "2026-11-29T23:59:59Z" },
      { start: "2027-11-27T00:00:00Z", end: "2027-11-28T23:59:59Z" },
      { start: "2028-11-25T00:00:00Z", end: "2028-11-26T23:59:59Z" },
      { start: "2029-11-24T00:00:00Z", end: "2029-11-25T23:59:59Z" },
      { start: "2030-11-23T00:00:00Z", end: "2030-11-24T23:59:59Z" },
      { start: "2031-11-22T00:00:00Z", end: "2031-11-23T23:59:59Z" },
      { start: "2032-11-27T00:00:00Z", end: "2032-11-28T23:59:59Z" },
      { start: "2033-11-26T00:00:00Z", end: "2033-11-27T23:59:59Z" },
      { start: "2034-11-25T00:00:00Z", end: "2034-11-26T23:59:59Z" },
      { start: "2035-11-24T00:00:00Z", end: "2035-11-25T23:59:59Z" },
      { start: "2036-11-22T00:00:00Z", end: "2036-11-23T23:59:59Z" },
      { start: "2037-11-28T00:00:00Z", end: "2037-11-29T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WW-CW",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cqww-rtty
// ================================================================
/* CQ WW RTTY DX Contest.
 * https://cqwwrtty.com/rules.htm
 * Exchange: RST + CQ Zone + State/Province (W/VE only).
 * We ship the common overseas exchange (RST + zone); the state/province
 * field is exposed as a free-text field for W/VE operators to fill in.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-rtty"] = {
    id: "cqww-rtty",
    name: "CQ Worldwide RTTY DX Contest",
    shortName: "CQ WW RTTY",
    url: "https://cqwwrtty.com/rules.htm",
    windows: [
      { start: "2026-09-26T00:00:00Z", end: "2026-09-27T23:59:59Z" },
      { start: "2027-09-25T00:00:00Z", end: "2027-09-26T23:59:59Z" },
      { start: "2028-09-23T00:00:00Z", end: "2028-09-24T23:59:59Z" },
      { start: "2029-09-22T00:00:00Z", end: "2029-09-23T23:59:59Z" },
      { start: "2030-09-28T00:00:00Z", end: "2030-09-29T23:59:59Z" },
      { start: "2031-09-27T00:00:00Z", end: "2031-09-28T23:59:59Z" },
      { start: "2032-09-25T00:00:00Z", end: "2032-09-26T23:59:59Z" },
      { start: "2033-09-24T00:00:00Z", end: "2033-09-25T23:59:59Z" },
      { start: "2034-09-23T00:00:00Z", end: "2034-09-24T23:59:59Z" },
      { start: "2035-09-22T00:00:00Z", end: "2035-09-23T23:59:59Z" },
      { start: "2036-09-27T00:00:00Z", end: "2036-09-28T23:59:59Z" },
      { start: "2037-09-26T00:00:00Z", end: "2037-09-27T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
      {
        id: "rcvd_qth", type: "text", label: "State/Province (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WW-RTTY",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== cqww-ssb
// ================================================================
/* CQ Worldwide DX Contest, SSB.
 * https://cqww.com/rules.htm
 * Exchange: RST + CQ Zone (2 digits, 01-40).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-ssb"] = {
    id: "cqww-ssb",
    name: "CQ Worldwide DX Contest, SSB",
    shortName: "CQ WW SSB",
    url: "https://cqww.com/rules.htm",
    windows: [
      { start: "2026-10-24T00:00:00Z", end: "2026-10-25T23:59:59Z" },
      { start: "2027-10-23T00:00:00Z", end: "2027-10-24T23:59:59Z" },
      { start: "2028-10-28T00:00:00Z", end: "2028-10-29T23:59:59Z" },
      { start: "2029-10-27T00:00:00Z", end: "2029-10-28T23:59:59Z" },
      { start: "2030-10-26T00:00:00Z", end: "2030-10-27T23:59:59Z" },
      { start: "2031-10-25T00:00:00Z", end: "2031-10-26T23:59:59Z" },
      { start: "2032-10-23T00:00:00Z", end: "2032-10-24T23:59:59Z" },
      { start: "2033-10-22T00:00:00Z", end: "2033-10-23T23:59:59Z" },
      { start: "2034-10-28T00:00:00Z", end: "2034-10-29T23:59:59Z" },
      { start: "2035-10-27T00:00:00Z", end: "2035-10-28T23:59:59Z" },
      { start: "2036-10-25T00:00:00Z", end: "2036-10-26T23:59:59Z" },
      { start: "2037-10-24T00:00:00Z", end: "2037-10-25T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WW-SSB",
      // Column order after the fixed prefix (freq mode date time).
      // Sent block: our call + rst_sent + sent_zone.
      // Rcvd block: their call + rst_rcvd + rcvd_zone.
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone"],
      // Extra header fields prompted in the Submission-info panel.
      // CALLSIGN / LOCATION / GRID-LOCATOR / OPERATORS are pre-filled
      // from the log's Station data and don't need to be prompted.
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== dzcup
// ================================================================
/* UA1DZ Memorial Cup (DZ Cup).
 * https://ua1dz.rdrclub.ru/rules
 * Memorial contest honouring Georgy Rumiantsev UA1DZ.
 * Exchange: RST + serial. Held second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["dzcup"] = {
    id: "dzcup",
    name: "UA1DZ Memorial Cup",
    shortName: "UA1DZ Cup",
    url: "https://ua1dz.rdrclub.ru/rules",
    windows: [
      { start: "2026-02-14T15:00:00Z", end: "2026-02-14T18:59:59Z" },
      { start: "2027-02-13T15:00:00Z", end: "2027-02-13T18:59:59Z" },
      { start: "2028-02-12T15:00:00Z", end: "2028-02-12T18:59:59Z" },
      { start: "2029-02-10T15:00:00Z", end: "2029-02-10T18:59:59Z" },
      { start: "2030-02-09T15:00:00Z", end: "2030-02-09T18:59:59Z" },
      { start: "2031-02-08T15:00:00Z", end: "2031-02-08T18:59:59Z" },
      { start: "2032-02-14T15:00:00Z", end: "2032-02-14T18:59:59Z" },
      { start: "2033-02-12T15:00:00Z", end: "2033-02-12T18:59:59Z" },
      { start: "2034-02-11T15:00:00Z", end: "2034-02-11T18:59:59Z" },
      { start: "2035-02-10T15:00:00Z", end: "2035-02-10T18:59:59Z" },
      { start: "2036-02-09T15:00:00Z", end: "2036-02-09T18:59:59Z" },
      { start: "2037-02-14T15:00:00Z", end: "2037-02-14T18:59:59Z" },
    ],
    bands: ["80m", "40m", "20m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UA1DZ-CUP",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== eu-hf-championship
// ================================================================
/* European HF Championship (SCC / Slovenia Contest Club).
 * https://ehfc.hamradio.si/
 * Exchange: RST + last two digits of the year the operator was first
 * licensed (e.g. "88" for someone licensed in 1988). Both sides send
 * this — it's the same everywhere. European stations only. Held the
 * first weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["eu-hf-championship"] = {
    id: "eu-hf-championship",
    name: "European HF Championship",
    shortName: "EU HF Champ",
    url: "https://ehfc.hamradio.si/",
    windows: [
      { start: "2026-08-01T12:00:00Z", end: "2026-08-01T23:59:59Z" },
      { start: "2027-08-07T12:00:00Z", end: "2027-08-07T23:59:59Z" },
      { start: "2028-08-05T12:00:00Z", end: "2028-08-05T23:59:59Z" },
      { start: "2029-08-04T12:00:00Z", end: "2029-08-04T23:59:59Z" },
      { start: "2030-08-03T12:00:00Z", end: "2030-08-03T23:59:59Z" },
      { start: "2031-08-02T12:00:00Z", end: "2031-08-02T23:59:59Z" },
      { start: "2032-08-07T12:00:00Z", end: "2032-08-07T23:59:59Z" },
      { start: "2033-08-06T12:00:00Z", end: "2033-08-06T23:59:59Z" },
      { start: "2034-08-05T12:00:00Z", end: "2034-08-05T23:59:59Z" },
      { start: "2035-08-04T12:00:00Z", end: "2035-08-04T23:59:59Z" },
      { start: "2036-08-02T12:00:00Z", end: "2036-08-02T23:59:59Z" },
      { start: "2037-08-01T12:00:00Z", end: "2037-08-01T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_licyear", type: "text", label: "My licence year (2 dig.)",
        placeholder: "88", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_LICYEAR",
      },
      {
        id: "rcvd_licyear", type: "text", label: "Their licence year (2 dig.)",
        placeholder: "88", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_LICYEAR",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "EU-HF-CH",
      sentTemplate: ["rst_sent", "sent_licyear"],
      rcvdTemplate: ["rst_rcvd", "rcvd_licyear"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== gagarin
// ================================================================
/* Yuri Gagarin International DX Contest (GCUP).
 * https://gcup.ru/en/
 * Exchange: RST + serial (all stations). Held on the weekend closest to
 * 12 April (Cosmonautics Day, Gagarin's first flight).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["gagarin"] = {
    id: "gagarin",
    name: "Yuri Gagarin International DX Contest",
    shortName: "Gagarin Cup",
    url: "https://gcup.ru/en/",
    windows: [
      { start: "2026-04-11T21:00:00Z", end: "2026-04-12T20:59:59Z" },
      { start: "2027-04-10T21:00:00Z", end: "2027-04-11T20:59:59Z" },
      { start: "2028-04-08T21:00:00Z", end: "2028-04-09T20:59:59Z" },
      { start: "2029-04-14T21:00:00Z", end: "2029-04-15T20:59:59Z" },
      { start: "2030-04-13T21:00:00Z", end: "2030-04-14T20:59:59Z" },
      { start: "2031-04-12T21:00:00Z", end: "2031-04-13T20:59:59Z" },
      { start: "2032-04-10T21:00:00Z", end: "2032-04-11T20:59:59Z" },
      { start: "2033-04-09T21:00:00Z", end: "2033-04-10T20:59:59Z" },
      { start: "2034-04-08T21:00:00Z", end: "2034-04-09T20:59:59Z" },
      { start: "2035-04-14T21:00:00Z", end: "2035-04-15T20:59:59Z" },
      { start: "2036-04-12T21:00:00Z", end: "2036-04-13T20:59:59Z" },
      { start: "2037-04-11T21:00:00Z", end: "2037-04-12T20:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RUS-YURI-GAGARIN",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ha-dx-dx
// ================================================================
/* HA DX Contest — DX-station perspective (non-HA operators).
 * https://www.mrasz.hu/hadx
 * Exchange (DX side): send RST + serial; receive RST + Hungarian county
 * abbreviation (2 letters, e.g. "BA", "PE") from HA stations, or RST +
 * serial from other DX stations. Held the third full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ha-dx-dx"] = {
    id: "ha-dx-dx",
    name: "HA DX Contest (DX side)",
    shortName: "HA DX (DX)",
    url: "https://www.mrasz.hu/hadx",
    windows: [
      { start: "2026-01-17T12:00:00Z", end: "2026-01-18T11:59:59Z" },
      { start: "2027-01-16T12:00:00Z", end: "2027-01-17T11:59:59Z" },
      { start: "2028-01-15T12:00:00Z", end: "2028-01-16T11:59:59Z" },
      { start: "2029-01-20T12:00:00Z", end: "2029-01-21T11:59:59Z" },
      { start: "2030-01-19T12:00:00Z", end: "2030-01-20T11:59:59Z" },
      { start: "2031-01-18T12:00:00Z", end: "2031-01-19T11:59:59Z" },
      { start: "2032-01-17T12:00:00Z", end: "2032-01-18T11:59:59Z" },
      { start: "2033-01-15T12:00:00Z", end: "2033-01-16T11:59:59Z" },
      { start: "2034-01-21T12:00:00Z", end: "2034-01-22T11:59:59Z" },
      { start: "2035-01-20T12:00:00Z", end: "2035-01-21T11:59:59Z" },
      { start: "2036-01-19T12:00:00Z", end: "2036-01-20T11:59:59Z" },
      { start: "2037-01-17T12:00:00Z", end: "2037-01-18T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (HA) or serial (DX)",
        placeholder: "BA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "HA-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ha-dx-ha
// ================================================================
/* HA DX Contest — HA-station perspective (Hungarian operators).
 * https://www.mrasz.hu/hadx
 * Exchange (HA side): send RST + county (2-letter, e.g. "BA", "PE");
 * receive RST + county (HA) or RST + serial (DX). Held the third full
 * weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ha-dx-ha"] = {
    id: "ha-dx-ha",
    name: "HA DX Contest (HA side)",
    shortName: "HA DX (HA)",
    url: "https://www.mrasz.hu/hadx",
    windows: [
      { start: "2026-01-17T12:00:00Z", end: "2026-01-18T11:59:59Z" },
      { start: "2027-01-16T12:00:00Z", end: "2027-01-17T11:59:59Z" },
      { start: "2028-01-15T12:00:00Z", end: "2028-01-16T11:59:59Z" },
      { start: "2029-01-20T12:00:00Z", end: "2029-01-21T11:59:59Z" },
      { start: "2030-01-19T12:00:00Z", end: "2030-01-20T11:59:59Z" },
      { start: "2031-01-18T12:00:00Z", end: "2031-01-19T11:59:59Z" },
      { start: "2032-01-17T12:00:00Z", end: "2032-01-18T11:59:59Z" },
      { start: "2033-01-15T12:00:00Z", end: "2033-01-16T11:59:59Z" },
      { start: "2034-01-21T12:00:00Z", end: "2034-01-22T11:59:59Z" },
      { start: "2035-01-20T12:00:00Z", end: "2035-01-21T11:59:59Z" },
      { start: "2036-01-19T12:00:00Z", end: "2036-01-20T11:59:59Z" },
      { start: "2037-01-17T12:00:00Z", end: "2037-01-18T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_county", type: "text", label: "My county",
        placeholder: "BA", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_COUNTY",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (HA) or serial (DX)",
        placeholder: "BA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "HA-DX",
      sentTemplate: ["rst_sent", "sent_county"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== iaru-hf
// ================================================================
/* IARU HF World Championship.
 * https://www.arrl.org/iaru-hf-world-championship
 * Exchange: RST + ITU Zone (non-HQ) OR RST + IARU HQ multiplier
 * abbreviation (e.g. "ARRL", "RSGB", "DARC"). We store the received value
 * as a single free-text field — the operator types either an ITU zone or
 * a society abbreviation.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["iaru-hf"] = {
    id: "iaru-hf",
    name: "IARU HF World Championship",
    shortName: "IARU HF",
    url: "https://www.arrl.org/iaru-hf-world-championship",
    windows: [
      { start: "2026-07-11T12:00:00Z", end: "2026-07-12T12:00:00Z" },
      { start: "2027-07-10T12:00:00Z", end: "2027-07-11T12:00:00Z" },
      { start: "2028-07-08T12:00:00Z", end: "2028-07-09T12:00:00Z" },
      { start: "2029-07-14T12:00:00Z", end: "2029-07-15T12:00:00Z" },
      { start: "2030-07-13T12:00:00Z", end: "2030-07-14T12:00:00Z" },
      { start: "2031-07-12T12:00:00Z", end: "2031-07-13T12:00:00Z" },
      { start: "2032-07-10T12:00:00Z", end: "2032-07-11T12:00:00Z" },
      { start: "2033-07-09T12:00:00Z", end: "2033-07-10T12:00:00Z" },
      { start: "2034-07-08T12:00:00Z", end: "2034-07-09T12:00:00Z" },
      { start: "2035-07-14T12:00:00Z", end: "2035-07-15T12:00:00Z" },
      { start: "2036-07-12T12:00:00Z", end: "2036-07-13T12:00:00Z" },
      { start: "2037-07-11T12:00:00Z", end: "2037-07-12T12:00:00Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_itu", type: "text", label: "My ITU Zone or HQ abbr.",
        placeholder: "29", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_ITU",
      },
      {
        id: "rcvd_itu", type: "text", label: "Their ITU Zone or HQ abbr.",
        placeholder: "29 or RSGB", required: true, maxLength: 6,
        adifField: "APP_LQ_RCVD_ITU",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "IARU-HF",
      sentTemplate: ["rst_sent", "sent_itu"],
      rcvdTemplate: ["rst_rcvd", "rcvd_itu"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== iaru-r1-fd
// ================================================================
/* IARU Region 1 Field Day.
 * https://www.iaru-r1.org/ (individual society URLs vary)
 * Exchange: RST + serial number (0001, 0002, …). Same format for the
 * CW leg (June) and SSB leg (September); one config covers both.
 * Sent serial auto-increments; the operator types the received serial.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["iaru-r1-fd"] = {
    id: "iaru-r1-fd",
    name: "IARU Region 1 Field Day (SSB / CW)",
    shortName: "IARU R1 FD",
    url: "https://www.iaru-r1.org/",
    windows: [
      { start: "2026-06-06T13:00:00Z", end: "2026-06-07T12:59:59Z" },
      { start: "2026-09-05T13:00:00Z", end: "2026-09-06T12:59:59Z" },
      { start: "2027-06-05T13:00:00Z", end: "2027-06-06T12:59:59Z" },
      { start: "2027-09-04T13:00:00Z", end: "2027-09-05T12:59:59Z" },
      { start: "2028-06-03T13:00:00Z", end: "2028-06-04T12:59:59Z" },
      { start: "2028-09-02T13:00:00Z", end: "2028-09-03T12:59:59Z" },
      { start: "2029-06-02T13:00:00Z", end: "2029-06-03T12:59:59Z" },
      { start: "2029-09-01T13:00:00Z", end: "2029-09-02T12:59:59Z" },
      { start: "2030-06-01T13:00:00Z", end: "2030-06-02T12:59:59Z" },
      { start: "2030-09-07T13:00:00Z", end: "2030-09-08T12:59:59Z" },
      { start: "2031-06-07T13:00:00Z", end: "2031-06-08T12:59:59Z" },
      { start: "2031-09-06T13:00:00Z", end: "2031-09-07T12:59:59Z" },
      { start: "2032-06-05T13:00:00Z", end: "2032-06-06T12:59:59Z" },
      { start: "2032-09-04T13:00:00Z", end: "2032-09-05T12:59:59Z" },
      { start: "2033-06-04T13:00:00Z", end: "2033-06-05T12:59:59Z" },
      { start: "2033-09-03T13:00:00Z", end: "2033-09-04T12:59:59Z" },
      { start: "2034-06-03T13:00:00Z", end: "2034-06-04T12:59:59Z" },
      { start: "2034-09-02T13:00:00Z", end: "2034-09-03T12:59:59Z" },
      { start: "2035-06-02T13:00:00Z", end: "2035-06-03T12:59:59Z" },
      { start: "2035-09-01T13:00:00Z", end: "2035-09-02T12:59:59Z" },
      { start: "2036-06-07T13:00:00Z", end: "2036-06-08T12:59:59Z" },
      { start: "2036-09-06T13:00:00Z", end: "2036-09-07T12:59:59Z" },
      { start: "2037-06-06T13:00:00Z", end: "2037-06-07T12:59:59Z" },
      { start: "2037-09-05T13:00:00Z", end: "2037-09-06T12:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB", "CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      // Not all IARU R1 societies use the same Cabrillo tag; the field-day
      // committees typically accept a generic marker in the CONTEST: line.
      contest: "IARU-R1-FIELD-DAY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-BAND", "CATEGORY-POWER",
        "CATEGORY-MODE", "CATEGORY-TRANSMITTER",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== lz-dx
// ================================================================
/* LZ DX Contest (Bulgarian Federation of Radio Amateurs).
 * https://lzdx.bfra.org/rulesen.html
 * Exchange: RST + ITU zone (both LZ and DX stations send zone). Held
 * the third full weekend of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["lz-dx"] = {
    id: "lz-dx",
    name: "LZ DX Contest",
    shortName: "LZ DX",
    url: "https://lzdx.bfra.org/rulesen.html",
    windows: [
      { start: "2026-11-21T12:00:00Z", end: "2026-11-22T11:59:59Z" },
      { start: "2027-11-20T12:00:00Z", end: "2027-11-21T11:59:59Z" },
      { start: "2028-11-18T12:00:00Z", end: "2028-11-19T11:59:59Z" },
      { start: "2029-11-17T12:00:00Z", end: "2029-11-18T11:59:59Z" },
      { start: "2030-11-16T12:00:00Z", end: "2030-11-17T11:59:59Z" },
      { start: "2031-11-15T12:00:00Z", end: "2031-11-16T11:59:59Z" },
      { start: "2032-11-20T12:00:00Z", end: "2032-11-21T11:59:59Z" },
      { start: "2033-11-19T12:00:00Z", end: "2033-11-20T11:59:59Z" },
      { start: "2034-11-18T12:00:00Z", end: "2034-11-19T11:59:59Z" },
      { start: "2035-11-17T12:00:00Z", end: "2035-11-18T11:59:59Z" },
      { start: "2036-11-15T12:00:00Z", end: "2036-11-16T11:59:59Z" },
      { start: "2037-11-21T12:00:00Z", end: "2037-11-22T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_itu", type: "text", label: "My ITU Zone",
        placeholder: "28", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ITU",
      },
      {
        id: "rcvd_itu", type: "text", label: "Their ITU Zone",
        placeholder: "28", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ITU",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "LZ-DX",
      sentTemplate: ["rst_sent", "sent_itu"],
      rcvdTemplate: ["rst_rcvd", "rcvd_itu"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== nrau-baltic-cw
// ================================================================
/* NRAU-Baltic Contest, CW.
 * https://www.nrau.net/activities/nrau-baltic-contest/
 * CW segment runs 06:30-08:30 UTC — same Saturday as the SSB segment.
 * Exchange: RST + serial + NRAU district code (e.g. LA1, OH2, SM3, YL3).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["nrau-baltic-cw"] = {
    id: "nrau-baltic-cw",
    name: "NRAU-Baltic Contest, CW",
    shortName: "NRAU Baltic CW",
    url: "https://www.nrau.net/activities/nrau-baltic-contest/",
    windows: [
      { start: "2026-01-10T06:30:00Z", end: "2026-01-10T08:30:00Z" },
      { start: "2027-01-09T06:30:00Z", end: "2027-01-09T08:30:00Z" },
      { start: "2028-01-08T06:30:00Z", end: "2028-01-08T08:30:00Z" },
      { start: "2029-01-13T06:30:00Z", end: "2029-01-13T08:30:00Z" },
      { start: "2030-01-12T06:30:00Z", end: "2030-01-12T08:30:00Z" },
      { start: "2031-01-11T06:30:00Z", end: "2031-01-11T08:30:00Z" },
      { start: "2032-01-10T06:30:00Z", end: "2032-01-10T08:30:00Z" },
      { start: "2033-01-08T06:30:00Z", end: "2033-01-08T08:30:00Z" },
      { start: "2034-01-14T06:30:00Z", end: "2034-01-14T08:30:00Z" },
      { start: "2035-01-13T06:30:00Z", end: "2035-01-13T08:30:00Z" },
      { start: "2036-01-12T06:30:00Z", end: "2036-01-12T08:30:00Z" },
      { start: "2037-01-10T06:30:00Z", end: "2037-01-10T08:30:00Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "sent_district", type: "text", label: "My NRAU district",
        placeholder: "YL3", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_DISTRICT",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
      {
        id: "rcvd_district", type: "text", label: "Their NRAU district",
        placeholder: "OH2", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_DISTRICT",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "NRAU-BALTIC-CW",
      sentTemplate: ["rst_sent", "sent_serial", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial", "rcvd_district"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== nrau-baltic-ssb
// ================================================================
/* NRAU-Baltic Contest, SSB.
 * https://www.nrau.net/activities/nrau-baltic-contest/
 * Nordic + Baltic regional event (Nordic Radio Amateur Union + Baltic
 * amateur societies). SSB segment runs 07:30-09:30 UTC; CW segment 06:30-
 * 08:30 UTC — same Saturday, distinct Cabrillo submissions.
 * Exchange: RST + serial + NRAU district code (e.g. LA1, OH2, SM3, YL3).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["nrau-baltic-ssb"] = {
    id: "nrau-baltic-ssb",
    name: "NRAU-Baltic Contest, SSB",
    shortName: "NRAU Baltic SSB",
    url: "https://www.nrau.net/activities/nrau-baltic-contest/",
    windows: [
      { start: "2026-01-10T07:30:00Z", end: "2026-01-10T09:30:00Z" },
      { start: "2027-01-09T07:30:00Z", end: "2027-01-09T09:30:00Z" },
      { start: "2028-01-08T07:30:00Z", end: "2028-01-08T09:30:00Z" },
      { start: "2029-01-13T07:30:00Z", end: "2029-01-13T09:30:00Z" },
      { start: "2030-01-12T07:30:00Z", end: "2030-01-12T09:30:00Z" },
      { start: "2031-01-11T07:30:00Z", end: "2031-01-11T09:30:00Z" },
      { start: "2032-01-10T07:30:00Z", end: "2032-01-10T09:30:00Z" },
      { start: "2033-01-08T07:30:00Z", end: "2033-01-08T09:30:00Z" },
      { start: "2034-01-14T07:30:00Z", end: "2034-01-14T09:30:00Z" },
      { start: "2035-01-13T07:30:00Z", end: "2035-01-13T09:30:00Z" },
      { start: "2036-01-12T07:30:00Z", end: "2036-01-12T09:30:00Z" },
      { start: "2037-01-10T07:30:00Z", end: "2037-01-10T09:30:00Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "sent_district", type: "text", label: "My NRAU district",
        placeholder: "YL3", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_DISTRICT",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
      {
        id: "rcvd_district", type: "text", label: "Their NRAU district",
        placeholder: "OH2", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_DISTRICT",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "NRAU-BALTIC-SSB",
      sentTemplate: ["rst_sent", "sent_serial", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial", "rcvd_district"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== okom-dx-cw-dx
// ================================================================
/* OK/OM DX Contest, CW — DX-station perspective (non-OK/OM operators).
 * https://www.okomdx.crk.cz/en/
 * Exchange (DX side): send RST + serial; receive RST + 3-char OK/OM
 * district code (e.g. "ABA", "APA", "BKA") from OK/OM stations, or
 * RST + serial from other DX stations. Held the second full weekend of
 * November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-cw-dx"] = {
    id: "okom-dx-cw-dx",
    name: "OK/OM DX Contest, CW (DX side)",
    shortName: "OK/OM DX CW (DX)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-11-14T12:00:00Z", end: "2026-11-15T11:59:59Z" },
      { start: "2027-11-13T12:00:00Z", end: "2027-11-14T11:59:59Z" },
      { start: "2028-11-11T12:00:00Z", end: "2028-11-12T11:59:59Z" },
      { start: "2029-11-10T12:00:00Z", end: "2029-11-11T11:59:59Z" },
      { start: "2030-11-09T12:00:00Z", end: "2030-11-10T11:59:59Z" },
      { start: "2031-11-08T12:00:00Z", end: "2031-11-09T11:59:59Z" },
      { start: "2032-11-13T12:00:00Z", end: "2032-11-14T11:59:59Z" },
      { start: "2033-11-12T12:00:00Z", end: "2033-11-13T11:59:59Z" },
      { start: "2034-11-11T12:00:00Z", end: "2034-11-12T11:59:59Z" },
      { start: "2035-11-10T12:00:00Z", end: "2035-11-11T11:59:59Z" },
      { start: "2036-11-08T12:00:00Z", end: "2036-11-09T11:59:59Z" },
      { start: "2037-11-14T12:00:00Z", end: "2037-11-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their district (OK/OM) or serial (DX)",
        placeholder: "ABA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "OK-OM-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== okom-dx-cw-ok
// ================================================================
/* OK/OM DX Contest, CW — OK/OM-station perspective.
 * https://www.okomdx.crk.cz/en/
 * Exchange (OK/OM side): send RST + 3-char district code (e.g. "ABA");
 * receive RST + district (OK/OM) or RST + serial (DX). Held the second
 * full weekend of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-cw-ok"] = {
    id: "okom-dx-cw-ok",
    name: "OK/OM DX Contest, CW (OK/OM side)",
    shortName: "OK/OM DX CW (OK/OM)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-11-14T12:00:00Z", end: "2026-11-15T11:59:59Z" },
      { start: "2027-11-13T12:00:00Z", end: "2027-11-14T11:59:59Z" },
      { start: "2028-11-11T12:00:00Z", end: "2028-11-12T11:59:59Z" },
      { start: "2029-11-10T12:00:00Z", end: "2029-11-11T11:59:59Z" },
      { start: "2030-11-09T12:00:00Z", end: "2030-11-10T11:59:59Z" },
      { start: "2031-11-08T12:00:00Z", end: "2031-11-09T11:59:59Z" },
      { start: "2032-11-13T12:00:00Z", end: "2032-11-14T11:59:59Z" },
      { start: "2033-11-12T12:00:00Z", end: "2033-11-13T11:59:59Z" },
      { start: "2034-11-11T12:00:00Z", end: "2034-11-12T11:59:59Z" },
      { start: "2035-11-10T12:00:00Z", end: "2035-11-11T11:59:59Z" },
      { start: "2036-11-08T12:00:00Z", end: "2036-11-09T11:59:59Z" },
      { start: "2037-11-14T12:00:00Z", end: "2037-11-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_district", type: "text", label: "My district",
        placeholder: "ABA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DISTRICT",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their district (OK/OM) or serial (DX)",
        placeholder: "ABA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "OK-OM-DX",
      sentTemplate: ["rst_sent", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== okom-dx-ssb-dx
// ================================================================
/* OK/OM DX Contest, SSB — DX-station perspective.
 * https://www.okomdx.crk.cz/en/
 * Exchange (DX side): send RST + serial; receive RST + 3-char OK/OM
 * district (OK/OM) or RST + serial (DX). Held the second full weekend
 * of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-ssb-dx"] = {
    id: "okom-dx-ssb-dx",
    name: "OK/OM DX Contest, SSB (DX side)",
    shortName: "OK/OM DX SSB (DX)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-02-14T12:00:00Z", end: "2026-02-15T11:59:59Z" },
      { start: "2027-02-13T12:00:00Z", end: "2027-02-14T11:59:59Z" },
      { start: "2028-02-12T12:00:00Z", end: "2028-02-13T11:59:59Z" },
      { start: "2029-02-10T12:00:00Z", end: "2029-02-11T11:59:59Z" },
      { start: "2030-02-09T12:00:00Z", end: "2030-02-10T11:59:59Z" },
      { start: "2031-02-08T12:00:00Z", end: "2031-02-09T11:59:59Z" },
      { start: "2032-02-14T12:00:00Z", end: "2032-02-15T11:59:59Z" },
      { start: "2033-02-12T12:00:00Z", end: "2033-02-13T11:59:59Z" },
      { start: "2034-02-11T12:00:00Z", end: "2034-02-12T11:59:59Z" },
      { start: "2035-02-10T12:00:00Z", end: "2035-02-11T11:59:59Z" },
      { start: "2036-02-09T12:00:00Z", end: "2036-02-10T11:59:59Z" },
      { start: "2037-02-14T12:00:00Z", end: "2037-02-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their district (OK/OM) or serial (DX)",
        placeholder: "ABA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "OK-OM-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== okom-dx-ssb-ok
// ================================================================
/* OK/OM DX Contest, SSB — OK/OM-station perspective.
 * https://www.okomdx.crk.cz/en/
 * Exchange (OK/OM side): send RST + district; receive RST + district
 * (OK/OM) or RST + serial (DX). Held the second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-ssb-ok"] = {
    id: "okom-dx-ssb-ok",
    name: "OK/OM DX Contest, SSB (OK/OM side)",
    shortName: "OK/OM DX SSB (OK/OM)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-02-14T12:00:00Z", end: "2026-02-15T11:59:59Z" },
      { start: "2027-02-13T12:00:00Z", end: "2027-02-14T11:59:59Z" },
      { start: "2028-02-12T12:00:00Z", end: "2028-02-13T11:59:59Z" },
      { start: "2029-02-10T12:00:00Z", end: "2029-02-11T11:59:59Z" },
      { start: "2030-02-09T12:00:00Z", end: "2030-02-10T11:59:59Z" },
      { start: "2031-02-08T12:00:00Z", end: "2031-02-09T11:59:59Z" },
      { start: "2032-02-14T12:00:00Z", end: "2032-02-15T11:59:59Z" },
      { start: "2033-02-12T12:00:00Z", end: "2033-02-13T11:59:59Z" },
      { start: "2034-02-11T12:00:00Z", end: "2034-02-12T11:59:59Z" },
      { start: "2035-02-10T12:00:00Z", end: "2035-02-11T11:59:59Z" },
      { start: "2036-02-09T12:00:00Z", end: "2036-02-10T11:59:59Z" },
      { start: "2037-02-14T12:00:00Z", end: "2037-02-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_district", type: "text", label: "My district",
        placeholder: "ABA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DISTRICT",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their district (OK/OM) or serial (DX)",
        placeholder: "ABA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "OK-OM-DX",
      sentTemplate: ["rst_sent", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== raem
// ================================================================
/* RAEM Contest (Russian Arctic and Antarctic Expedition, memorial to
 * Ernst T. Krenkel U3AA / RAEM).
 * https://raem.srr.ru/en/
 * Exchange: RST + operator's approximate geographic coordinates
 * (integer latitude and longitude in degrees, with N/S and E/W suffix
 * for hemisphere — e.g. "57N" / "24E"). The real exchange uses signed
 * integer values; this config exposes them as two free-text inputs
 * (approximation — precise numeric formatting is left to the operator).
 * Held last full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["raem"] = {
    id: "raem",
    name: "RAEM Contest",
    shortName: "RAEM",
    url: "https://raem.srr.ru/en/",
    windows: [
      { start: "2026-12-27T00:00:00Z", end: "2026-12-27T11:59:59Z" },
      { start: "2027-12-26T00:00:00Z", end: "2027-12-26T11:59:59Z" },
      { start: "2028-12-24T00:00:00Z", end: "2028-12-24T11:59:59Z" },
      { start: "2029-12-23T00:00:00Z", end: "2029-12-23T11:59:59Z" },
      { start: "2030-12-29T00:00:00Z", end: "2030-12-29T11:59:59Z" },
      { start: "2031-12-28T00:00:00Z", end: "2031-12-28T11:59:59Z" },
      { start: "2032-12-26T00:00:00Z", end: "2032-12-26T11:59:59Z" },
      { start: "2033-12-25T00:00:00Z", end: "2033-12-25T11:59:59Z" },
      { start: "2034-12-24T00:00:00Z", end: "2034-12-24T11:59:59Z" },
      { start: "2035-12-23T00:00:00Z", end: "2035-12-23T11:59:59Z" },
      { start: "2036-12-28T00:00:00Z", end: "2036-12-28T11:59:59Z" },
      { start: "2037-12-27T00:00:00Z", end: "2037-12-27T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_lat", type: "text", label: "My latitude (deg N/S)",
        placeholder: "57N", required: true, sticky: true, maxLength: 5,
        adifField: "APP_LQ_SENT_LAT",
      },
      {
        id: "sent_lon", type: "text", label: "My longitude (deg E/W)",
        placeholder: "24E", required: true, sticky: true, maxLength: 5,
        adifField: "APP_LQ_SENT_LON",
      },
      {
        id: "rcvd_lat", type: "text", label: "Their latitude",
        placeholder: "57N", required: true, maxLength: 5,
        adifField: "APP_LQ_RCVD_LAT",
      },
      {
        id: "rcvd_lon", type: "text", label: "Their longitude",
        placeholder: "24E", required: true, maxLength: 5,
        adifField: "APP_LQ_RCVD_LON",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RAEM",
      sentTemplate: ["rst_sent", "sent_lat", "sent_lon"],
      rcvdTemplate: ["rst_rcvd", "rcvd_lat", "rcvd_lon"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== rdac
// ================================================================
/* Russian District Award Contest (RDAC).
 * https://rdaward.org/rdac_en.html
 * Exchange: RST + serial (all stations). Russian stations may additionally
 * announce their RDA district code (e.g. "MO-01", "SP-15") — captured here
 * as a single free-text catch-all so operators can type either a serial
 * (received from DX) or a district (received from RU).
 * Held third full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rdac"] = {
    id: "rdac",
    name: "Russian District Award Contest",
    shortName: "RDAC",
    url: "https://rdaward.org/rdac_en.html",
    windows: [
      { start: "2026-09-19T08:00:00Z", end: "2026-09-20T07:59:59Z" },
      { start: "2027-09-18T08:00:00Z", end: "2027-09-19T07:59:59Z" },
      { start: "2028-09-16T08:00:00Z", end: "2028-09-17T07:59:59Z" },
      { start: "2029-09-15T08:00:00Z", end: "2029-09-16T07:59:59Z" },
      { start: "2030-09-21T08:00:00Z", end: "2030-09-22T07:59:59Z" },
      { start: "2031-09-20T08:00:00Z", end: "2031-09-21T07:59:59Z" },
      { start: "2032-09-18T08:00:00Z", end: "2032-09-19T07:59:59Z" },
      { start: "2033-09-17T08:00:00Z", end: "2033-09-18T07:59:59Z" },
      { start: "2034-09-16T08:00:00Z", end: "2034-09-17T07:59:59Z" },
      { start: "2035-09-15T08:00:00Z", end: "2035-09-16T07:59:59Z" },
      { start: "2036-09-20T08:00:00Z", end: "2036-09-21T07:59:59Z" },
      { start: "2037-09-19T08:00:00Z", end: "2037-09-20T07:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their serial or RDA district",
        placeholder: "001 or MO-01", required: true, maxLength: 6,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RDAC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ref-cw-dx
// ================================================================
/* REF Contest, CW — DX-station perspective (non-F operators).
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (DX side): send RST + serial; receive RST + French department
 * number (3 digits, e.g. "075" Paris) from F stations, or RST + serial
 * from other DX stations. Held the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-cw-dx"] = {
    id: "ref-cw-dx",
    name: "REF Contest, CW (DX side)",
    shortName: "REF CW (DX)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-01-24T06:00:00Z", end: "2026-01-25T18:00:00Z" },
      { start: "2027-01-23T06:00:00Z", end: "2027-01-24T18:00:00Z" },
      { start: "2028-01-22T06:00:00Z", end: "2028-01-23T18:00:00Z" },
      { start: "2029-01-27T06:00:00Z", end: "2029-01-28T18:00:00Z" },
      { start: "2030-01-26T06:00:00Z", end: "2030-01-27T18:00:00Z" },
      { start: "2031-01-25T06:00:00Z", end: "2031-01-26T18:00:00Z" },
      { start: "2032-01-24T06:00:00Z", end: "2032-01-25T18:00:00Z" },
      { start: "2033-01-22T06:00:00Z", end: "2033-01-23T18:00:00Z" },
      { start: "2034-01-28T06:00:00Z", end: "2034-01-29T18:00:00Z" },
      { start: "2035-01-27T06:00:00Z", end: "2035-01-28T18:00:00Z" },
      { start: "2036-01-26T06:00:00Z", end: "2036-01-27T18:00:00Z" },
      { start: "2037-01-24T06:00:00Z", end: "2037-01-25T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ref-cw-f
// ================================================================
/* REF Contest, CW — F-station perspective (French operators).
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (F side): send RST + French department number (3 digits,
 * e.g. "075" for Paris); receive RST + department (F) or RST + serial
 * (DX). Held the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-cw-f"] = {
    id: "ref-cw-f",
    name: "REF Contest, CW (F side)",
    shortName: "REF CW (F)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-01-24T06:00:00Z", end: "2026-01-25T18:00:00Z" },
      { start: "2027-01-23T06:00:00Z", end: "2027-01-24T18:00:00Z" },
      { start: "2028-01-22T06:00:00Z", end: "2028-01-23T18:00:00Z" },
      { start: "2029-01-27T06:00:00Z", end: "2029-01-28T18:00:00Z" },
      { start: "2030-01-26T06:00:00Z", end: "2030-01-27T18:00:00Z" },
      { start: "2031-01-25T06:00:00Z", end: "2031-01-26T18:00:00Z" },
      { start: "2032-01-24T06:00:00Z", end: "2032-01-25T18:00:00Z" },
      { start: "2033-01-22T06:00:00Z", end: "2033-01-23T18:00:00Z" },
      { start: "2034-01-28T06:00:00Z", end: "2034-01-29T18:00:00Z" },
      { start: "2035-01-27T06:00:00Z", end: "2035-01-28T18:00:00Z" },
      { start: "2036-01-26T06:00:00Z", end: "2036-01-27T18:00:00Z" },
      { start: "2037-01-24T06:00:00Z", end: "2037-01-25T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_dept", type: "text", label: "My département (3 dig.)",
        placeholder: "075", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DEPT",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-CW",
      sentTemplate: ["rst_sent", "sent_dept"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ref-ssb-dx
// ================================================================
/* REF Contest, SSB — DX-station perspective.
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (DX side): send RST + serial; receive RST + French dept (F)
 * or serial (DX). Held the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-ssb-dx"] = {
    id: "ref-ssb-dx",
    name: "REF Contest, SSB (DX side)",
    shortName: "REF SSB (DX)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-02-28T06:00:00Z", end: "2026-03-01T18:00:00Z" },
      { start: "2027-02-27T06:00:00Z", end: "2027-02-28T18:00:00Z" },
      { start: "2028-02-26T06:00:00Z", end: "2028-02-27T18:00:00Z" },
      { start: "2029-02-24T06:00:00Z", end: "2029-02-25T18:00:00Z" },
      { start: "2030-02-23T06:00:00Z", end: "2030-02-24T18:00:00Z" },
      { start: "2031-02-22T06:00:00Z", end: "2031-02-23T18:00:00Z" },
      { start: "2032-02-28T06:00:00Z", end: "2032-02-29T18:00:00Z" },
      { start: "2033-02-26T06:00:00Z", end: "2033-02-27T18:00:00Z" },
      { start: "2034-02-25T06:00:00Z", end: "2034-02-26T18:00:00Z" },
      { start: "2035-02-24T06:00:00Z", end: "2035-02-25T18:00:00Z" },
      { start: "2036-02-23T06:00:00Z", end: "2036-02-24T18:00:00Z" },
      { start: "2037-02-28T06:00:00Z", end: "2037-03-01T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ref-ssb-f
// ================================================================
/* REF Contest, SSB — F-station perspective.
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (F side): send RST + French department; receive RST + dept
 * (F) or serial (DX). Held the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-ssb-f"] = {
    id: "ref-ssb-f",
    name: "REF Contest, SSB (F side)",
    shortName: "REF SSB (F)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-02-28T06:00:00Z", end: "2026-03-01T18:00:00Z" },
      { start: "2027-02-27T06:00:00Z", end: "2027-02-28T18:00:00Z" },
      { start: "2028-02-26T06:00:00Z", end: "2028-02-27T18:00:00Z" },
      { start: "2029-02-24T06:00:00Z", end: "2029-02-25T18:00:00Z" },
      { start: "2030-02-23T06:00:00Z", end: "2030-02-24T18:00:00Z" },
      { start: "2031-02-22T06:00:00Z", end: "2031-02-23T18:00:00Z" },
      { start: "2032-02-28T06:00:00Z", end: "2032-02-29T18:00:00Z" },
      { start: "2033-02-26T06:00:00Z", end: "2033-02-27T18:00:00Z" },
      { start: "2034-02-25T06:00:00Z", end: "2034-02-26T18:00:00Z" },
      { start: "2035-02-24T06:00:00Z", end: "2035-02-25T18:00:00Z" },
      { start: "2036-02-23T06:00:00Z", end: "2036-02-24T18:00:00Z" },
      { start: "2037-02-28T06:00:00Z", end: "2037-03-01T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_dept", type: "text", label: "My département (3 dig.)",
        placeholder: "075", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DEPT",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-SSB",
      sentTemplate: ["rst_sent", "sent_dept"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== rfc-cw
// ================================================================
/* Cup of the Russian Federation (RFC), CW.
 * https://www.srr.ru/CONTEST/rrfrules-eng.php
 * Exchange: RST + serial. Held mid-April (2nd Sat of April).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rfc-cw"] = {
    id: "rfc-cw",
    name: "Cup of the Russian Federation, CW",
    shortName: "RFC CW",
    url: "https://www.srr.ru/CONTEST/rrfrules-eng.php",
    windows: [
      { start: "2026-04-11T07:00:00Z", end: "2026-04-11T14:59:59Z" },
      { start: "2027-04-10T07:00:00Z", end: "2027-04-10T14:59:59Z" },
      { start: "2028-04-08T07:00:00Z", end: "2028-04-08T14:59:59Z" },
      { start: "2029-04-14T07:00:00Z", end: "2029-04-14T14:59:59Z" },
      { start: "2030-04-13T07:00:00Z", end: "2030-04-13T14:59:59Z" },
      { start: "2031-04-12T07:00:00Z", end: "2031-04-12T14:59:59Z" },
      { start: "2032-04-10T07:00:00Z", end: "2032-04-10T14:59:59Z" },
      { start: "2033-04-09T07:00:00Z", end: "2033-04-09T14:59:59Z" },
      { start: "2034-04-08T07:00:00Z", end: "2034-04-08T14:59:59Z" },
      { start: "2035-04-14T07:00:00Z", end: "2035-04-14T14:59:59Z" },
      { start: "2036-04-12T07:00:00Z", end: "2036-04-12T14:59:59Z" },
      { start: "2037-04-11T07:00:00Z", end: "2037-04-11T14:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RFC-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== rfc-ssb
// ================================================================
/* Cup of the Russian Federation (RFC), SSB.
 * https://www.srr.ru/CONTEST/rrfrules-eng.php
 * Exchange: RS + serial. SSB variant of the same event; held mid-April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rfc-ssb"] = {
    id: "rfc-ssb",
    name: "Cup of the Russian Federation, SSB",
    shortName: "RFC SSB",
    url: "https://www.srr.ru/CONTEST/rrfrules-eng.php",
    windows: [
      { start: "2026-04-11T15:00:00Z", end: "2026-04-11T22:59:59Z" },
      { start: "2027-04-10T15:00:00Z", end: "2027-04-10T22:59:59Z" },
      { start: "2028-04-08T15:00:00Z", end: "2028-04-08T22:59:59Z" },
      { start: "2029-04-14T15:00:00Z", end: "2029-04-14T22:59:59Z" },
      { start: "2030-04-13T15:00:00Z", end: "2030-04-13T22:59:59Z" },
      { start: "2031-04-12T15:00:00Z", end: "2031-04-12T22:59:59Z" },
      { start: "2032-04-10T15:00:00Z", end: "2032-04-10T22:59:59Z" },
      { start: "2033-04-09T15:00:00Z", end: "2033-04-09T22:59:59Z" },
      { start: "2034-04-08T15:00:00Z", end: "2034-04-08T22:59:59Z" },
      { start: "2035-04-14T15:00:00Z", end: "2035-04-14T22:59:59Z" },
      { start: "2036-04-12T15:00:00Z", end: "2036-04-12T22:59:59Z" },
      { start: "2037-04-11T15:00:00Z", end: "2037-04-11T22:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RFC-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== rrtc
// ================================================================
/* Russian Radiosport Team Championship (RRTC).
 * https://rrtc.rdrclub.ru/en/
 * Exchange: RST + serial. Held second Sat of July.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rrtc"] = {
    id: "rrtc",
    name: "Russian Radiosport Team Championship",
    shortName: "RRTC",
    url: "https://rrtc.rdrclub.ru/en/",
    windows: [
      { start: "2026-07-11T07:00:00Z", end: "2026-07-11T14:59:59Z" },
      { start: "2027-07-10T07:00:00Z", end: "2027-07-10T14:59:59Z" },
      { start: "2028-07-08T07:00:00Z", end: "2028-07-08T14:59:59Z" },
      { start: "2029-07-14T07:00:00Z", end: "2029-07-14T14:59:59Z" },
      { start: "2030-07-13T07:00:00Z", end: "2030-07-13T14:59:59Z" },
      { start: "2031-07-12T07:00:00Z", end: "2031-07-12T14:59:59Z" },
      { start: "2032-07-10T07:00:00Z", end: "2032-07-10T14:59:59Z" },
      { start: "2033-07-09T07:00:00Z", end: "2033-07-09T14:59:59Z" },
      { start: "2034-07-08T07:00:00Z", end: "2034-07-08T14:59:59Z" },
      { start: "2035-07-14T07:00:00Z", end: "2035-07-14T14:59:59Z" },
      { start: "2036-07-12T07:00:00Z", end: "2036-07-12T14:59:59Z" },
      { start: "2037-07-11T07:00:00Z", end: "2037-07-11T14:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RRTC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== rus-ww-mm
// ================================================================
/* Russian WW MultiMode Contest.
 * https://ruwwmm.srr.ru/en/rules/
 * Exchange: RST + serial (mixed modes — CW, SSB, digital). Held last full
 * weekend of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rus-ww-mm"] = {
    id: "rus-ww-mm",
    name: "Russian WW MultiMode Contest",
    shortName: "RUS WW MM",
    url: "https://ruwwmm.srr.ru/en/rules/",
    windows: [
      { start: "2026-11-28T00:00:00Z", end: "2026-11-29T23:59:59Z" },
      { start: "2027-11-27T00:00:00Z", end: "2027-11-28T23:59:59Z" },
      { start: "2028-11-25T00:00:00Z", end: "2028-11-26T23:59:59Z" },
      { start: "2029-11-24T00:00:00Z", end: "2029-11-25T23:59:59Z" },
      { start: "2030-11-23T00:00:00Z", end: "2030-11-24T23:59:59Z" },
      { start: "2031-11-22T00:00:00Z", end: "2031-11-23T23:59:59Z" },
      { start: "2032-11-27T00:00:00Z", end: "2032-11-28T23:59:59Z" },
      { start: "2033-11-26T00:00:00Z", end: "2033-11-27T23:59:59Z" },
      { start: "2034-11-25T00:00:00Z", end: "2034-11-26T23:59:59Z" },
      { start: "2035-11-24T00:00:00Z", end: "2035-11-25T23:59:59Z" },
      { start: "2036-11-22T00:00:00Z", end: "2036-11-23T23:59:59Z" },
      { start: "2037-11-28T00:00:00Z", end: "2037-11-29T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB", "RTTY", "PSK", "FT8", "FT4"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RUS-WW-MM",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== russian-dx-dx
// ================================================================
/* Russian DX Contest — DX-station perspective (non-Russian operators).
 * https://www.rdxc.org/asp/pages/rulesg.asp
 * Exchange (DX side): send RST + serial; receive RST + Russian oblast
 * code (2 letters, e.g. "MO", "SP", "LO") from Russian stations, or
 * RST + serial from other DX stations. Held the third full weekend of
 * March, mixed CW/SSB.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-dx-dx"] = {
    id: "russian-dx-dx",
    name: "Russian DX Contest (DX side)",
    shortName: "RDXC (DX)",
    url: "https://www.rdxc.org/asp/pages/rulesg.asp",
    windows: [
      { start: "2026-03-21T12:00:00Z", end: "2026-03-22T11:59:59Z" },
      { start: "2027-03-20T12:00:00Z", end: "2027-03-21T11:59:59Z" },
      { start: "2028-03-18T12:00:00Z", end: "2028-03-19T11:59:59Z" },
      { start: "2029-03-17T12:00:00Z", end: "2029-03-18T11:59:59Z" },
      { start: "2030-03-16T12:00:00Z", end: "2030-03-17T11:59:59Z" },
      { start: "2031-03-15T12:00:00Z", end: "2031-03-16T11:59:59Z" },
      { start: "2032-03-20T12:00:00Z", end: "2032-03-21T11:59:59Z" },
      { start: "2033-03-19T12:00:00Z", end: "2033-03-20T11:59:59Z" },
      { start: "2034-03-18T12:00:00Z", end: "2034-03-19T11:59:59Z" },
      { start: "2035-03-17T12:00:00Z", end: "2035-03-18T11:59:59Z" },
      { start: "2036-03-15T12:00:00Z", end: "2036-03-16T11:59:59Z" },
      { start: "2037-03-21T12:00:00Z", end: "2037-03-22T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (RU) or serial (DX)",
        placeholder: "MO or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RDXC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== russian-dx-ru
// ================================================================
/* Russian DX Contest — Russian-station perspective.
 * https://www.rdxc.org/asp/pages/rulesg.asp
 * Exchange (RU side): send RST + Russian oblast code (2 letters, e.g.
 * "MO", "SP", "LO"); receive RST + oblast (from other RU stations) or
 * RST + serial (from DX). Held the third full weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-dx-ru"] = {
    id: "russian-dx-ru",
    name: "Russian DX Contest (RU side)",
    shortName: "RDXC (RU)",
    url: "https://www.rdxc.org/asp/pages/rulesg.asp",
    windows: [
      { start: "2026-03-21T12:00:00Z", end: "2026-03-22T11:59:59Z" },
      { start: "2027-03-20T12:00:00Z", end: "2027-03-21T11:59:59Z" },
      { start: "2028-03-18T12:00:00Z", end: "2028-03-19T11:59:59Z" },
      { start: "2029-03-17T12:00:00Z", end: "2029-03-18T11:59:59Z" },
      { start: "2030-03-16T12:00:00Z", end: "2030-03-17T11:59:59Z" },
      { start: "2031-03-15T12:00:00Z", end: "2031-03-16T11:59:59Z" },
      { start: "2032-03-20T12:00:00Z", end: "2032-03-21T11:59:59Z" },
      { start: "2033-03-19T12:00:00Z", end: "2033-03-20T11:59:59Z" },
      { start: "2034-03-18T12:00:00Z", end: "2034-03-19T11:59:59Z" },
      { start: "2035-03-17T12:00:00Z", end: "2035-03-18T11:59:59Z" },
      { start: "2036-03-15T12:00:00Z", end: "2036-03-16T11:59:59Z" },
      { start: "2037-03-21T12:00:00Z", end: "2037-03-22T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_oblast", type: "text", label: "My oblast",
        placeholder: "MO", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_OBLAST",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (RU) or serial (DX)",
        placeholder: "MO or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RDXC",
      sentTemplate: ["rst_sent", "sent_oblast"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== russian-ww-rtty
// ================================================================
/* Russian WW RTTY Contest.
 * https://rdrclub.ru/russian-ww-rtty-contest/rules
 * Exchange: RST + serial (all stations, both sides). Both Russian and
 * non-Russian stations use the same simple RST + serial format —
 * Russian-oblast multipliers are counted by the contest robot from CALL.
 * Runs the first weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-ww-rtty"] = {
    id: "russian-ww-rtty",
    name: "Russian WW RTTY Contest",
    shortName: "RUS WW RTTY",
    url: "https://rdrclub.ru/russian-ww-rtty-contest/rules",
    windows: [
      { start: "2026-03-07T00:00:00Z", end: "2026-03-08T23:59:59Z" },
      { start: "2027-03-06T00:00:00Z", end: "2027-03-07T23:59:59Z" },
      { start: "2028-03-04T00:00:00Z", end: "2028-03-05T23:59:59Z" },
      { start: "2029-03-03T00:00:00Z", end: "2029-03-04T23:59:59Z" },
      { start: "2030-03-02T00:00:00Z", end: "2030-03-03T23:59:59Z" },
      { start: "2031-03-01T00:00:00Z", end: "2031-03-02T23:59:59Z" },
      { start: "2032-03-06T00:00:00Z", end: "2032-03-07T23:59:59Z" },
      { start: "2033-03-05T00:00:00Z", end: "2033-03-06T23:59:59Z" },
      { start: "2034-03-04T00:00:00Z", end: "2034-03-05T23:59:59Z" },
      { start: "2035-03-03T00:00:00Z", end: "2035-03-04T23:59:59Z" },
      { start: "2036-03-01T00:00:00Z", end: "2036-03-02T23:59:59Z" },
      { start: "2037-03-07T00:00:00Z", end: "2037-03-08T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RUS-WW-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== sp-dx
// ================================================================
/* SP DX Contest (PZK, Poland).
 * https://spdxcontest.pzk.org.pl/en/
 * Exchange (DX side): RST + serial; SP stations send RST + 2-letter
 * province code (e.g. "WA", "MZ", "SL"). We store the received value as
 * a single free-text field — the operator types either a serial or a
 * province code depending on the contact. Runs the first weekend of April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["sp-dx"] = {
    id: "sp-dx",
    name: "SP DX Contest",
    shortName: "SP DX",
    url: "https://spdxcontest.pzk.org.pl/en/",
    windows: [
      { start: "2026-04-04T15:00:00Z", end: "2026-04-05T15:00:00Z" },
      { start: "2027-04-03T15:00:00Z", end: "2027-04-04T15:00:00Z" },
      { start: "2028-04-01T15:00:00Z", end: "2028-04-02T15:00:00Z" },
      { start: "2029-04-07T15:00:00Z", end: "2029-04-08T15:00:00Z" },
      { start: "2030-04-06T15:00:00Z", end: "2030-04-07T15:00:00Z" },
      { start: "2031-04-05T15:00:00Z", end: "2031-04-06T15:00:00Z" },
      { start: "2032-04-03T15:00:00Z", end: "2032-04-04T15:00:00Z" },
      { start: "2033-04-02T15:00:00Z", end: "2033-04-03T15:00:00Z" },
      { start: "2034-04-01T15:00:00Z", end: "2034-04-02T15:00:00Z" },
      { start: "2035-04-07T15:00:00Z", end: "2035-04-08T15:00:00Z" },
      { start: "2036-04-05T15:00:00Z", end: "2036-04-06T15:00:00Z" },
      { start: "2037-04-04T15:00:00Z", end: "2037-04-05T15:00:00Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial_or_prov", type: "text",
        label: "Their serial (DX) or SP province",
        placeholder: "001 or WA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "SP-DX-CONTEST",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial_or_prov"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-MODE",
        "CATEGORY-BAND",     "CLUB",            "NAME",
        "ADDRESS",           "EMAIL",           "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ur-dx-dx
// ================================================================
/* Ukrainian DX Contest — DX-station perspective (non-UR operators).
 * https://uz2hz.com/en/uz2hz-rules-en/
 * Exchange (DX side): send RST + serial; receive RST + Ukrainian oblast
 * code (2 letters, e.g. "KI", "OD") from UR stations, or RST + serial
 * from other DX stations. Held the first weekend of November, mixed
 * CW+SSB.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-dx-dx"] = {
    id: "ur-dx-dx",
    name: "Ukrainian DX Contest (DX side)",
    shortName: "UR DX (DX)",
    url: "https://uz2hz.com/en/uz2hz-rules-en/",
    windows: [
      { start: "2026-11-07T12:00:00Z", end: "2026-11-08T11:59:59Z" },
      { start: "2027-11-06T12:00:00Z", end: "2027-11-07T11:59:59Z" },
      { start: "2028-11-04T12:00:00Z", end: "2028-11-05T11:59:59Z" },
      { start: "2029-11-03T12:00:00Z", end: "2029-11-04T11:59:59Z" },
      { start: "2030-11-02T12:00:00Z", end: "2030-11-03T11:59:59Z" },
      { start: "2031-11-01T12:00:00Z", end: "2031-11-02T11:59:59Z" },
      { start: "2032-11-06T12:00:00Z", end: "2032-11-07T11:59:59Z" },
      { start: "2033-11-05T12:00:00Z", end: "2033-11-06T11:59:59Z" },
      { start: "2034-11-04T12:00:00Z", end: "2034-11-05T11:59:59Z" },
      { start: "2035-11-03T12:00:00Z", end: "2035-11-04T11:59:59Z" },
      { start: "2036-11-01T12:00:00Z", end: "2036-11-02T11:59:59Z" },
      { start: "2037-11-07T12:00:00Z", end: "2037-11-08T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (UR) or serial (DX)",
        placeholder: "KI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UKR-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ur-dx-ur
// ================================================================
/* Ukrainian DX Contest — UR-station perspective.
 * https://uz2hz.com/en/uz2hz-rules-en/
 * Exchange (UR side): send RST + Ukrainian oblast code (e.g. "KI", "OD");
 * receive RST + oblast (UR) or RST + serial (DX). Held the first weekend
 * of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-dx-ur"] = {
    id: "ur-dx-ur",
    name: "Ukrainian DX Contest (UR side)",
    shortName: "UR DX (UR)",
    url: "https://uz2hz.com/en/uz2hz-rules-en/",
    windows: [
      { start: "2026-11-07T12:00:00Z", end: "2026-11-08T11:59:59Z" },
      { start: "2027-11-06T12:00:00Z", end: "2027-11-07T11:59:59Z" },
      { start: "2028-11-04T12:00:00Z", end: "2028-11-05T11:59:59Z" },
      { start: "2029-11-03T12:00:00Z", end: "2029-11-04T11:59:59Z" },
      { start: "2030-11-02T12:00:00Z", end: "2030-11-03T11:59:59Z" },
      { start: "2031-11-01T12:00:00Z", end: "2031-11-02T11:59:59Z" },
      { start: "2032-11-06T12:00:00Z", end: "2032-11-07T11:59:59Z" },
      { start: "2033-11-05T12:00:00Z", end: "2033-11-06T11:59:59Z" },
      { start: "2034-11-04T12:00:00Z", end: "2034-11-05T11:59:59Z" },
      { start: "2035-11-03T12:00:00Z", end: "2035-11-04T11:59:59Z" },
      { start: "2036-11-01T12:00:00Z", end: "2036-11-02T11:59:59Z" },
      { start: "2037-11-07T12:00:00Z", end: "2037-11-08T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_oblast", type: "text", label: "My oblast",
        placeholder: "KI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_OBLAST",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (UR) or serial (DX)",
        placeholder: "KI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UKR-DX",
      sentTemplate: ["rst_sent", "sent_oblast"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ur-rtty-dx
// ================================================================
/* Ukrainian RTTY Championship — DX-station perspective (non-UR).
 * https://uz2hz.com/en/ur-dx-contest-rules-en/
 * Exchange (DX side): send RST + serial; receive RST + Ukrainian oblast
 * code (e.g. "KI", "OD") from UR stations, or RST + serial from other DX.
 * RTTY-only companion to URDX; held last full weekend of April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-rtty-dx"] = {
    id: "ur-rtty-dx",
    name: "Ukrainian RTTY Championship (DX side)",
    shortName: "UR RTTY (DX)",
    url: "https://uz2hz.com/en/ur-dx-contest-rules-en/",
    windows: [
      { start: "2026-04-25T12:00:00Z", end: "2026-04-26T11:59:59Z" },
      { start: "2027-04-24T12:00:00Z", end: "2027-04-25T11:59:59Z" },
      { start: "2028-04-22T12:00:00Z", end: "2028-04-23T11:59:59Z" },
      { start: "2029-04-28T12:00:00Z", end: "2029-04-29T11:59:59Z" },
      { start: "2030-04-27T12:00:00Z", end: "2030-04-28T11:59:59Z" },
      { start: "2031-04-26T12:00:00Z", end: "2031-04-27T11:59:59Z" },
      { start: "2032-04-24T12:00:00Z", end: "2032-04-25T11:59:59Z" },
      { start: "2033-04-23T12:00:00Z", end: "2033-04-24T11:59:59Z" },
      { start: "2034-04-22T12:00:00Z", end: "2034-04-23T11:59:59Z" },
      { start: "2035-04-28T12:00:00Z", end: "2035-04-29T11:59:59Z" },
      { start: "2036-04-26T12:00:00Z", end: "2036-04-27T11:59:59Z" },
      { start: "2037-04-25T12:00:00Z", end: "2037-04-26T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (UR) or serial (DX)",
        placeholder: "KI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UKR-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== ur-rtty-ur
// ================================================================
/* Ukrainian RTTY Championship — UR-station perspective.
 * https://uz2hz.com/en/ur-dx-contest-rules-en/
 * Exchange (UR side): send RST + Ukrainian oblast code (e.g. "KI", "OD");
 * receive RST + oblast (UR) or RST + serial (DX). RTTY-only. Held last
 * full weekend of April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-rtty-ur"] = {
    id: "ur-rtty-ur",
    name: "Ukrainian RTTY Championship (UR side)",
    shortName: "UR RTTY (UR)",
    url: "https://uz2hz.com/en/ur-dx-contest-rules-en/",
    windows: [
      { start: "2026-04-25T12:00:00Z", end: "2026-04-26T11:59:59Z" },
      { start: "2027-04-24T12:00:00Z", end: "2027-04-25T11:59:59Z" },
      { start: "2028-04-22T12:00:00Z", end: "2028-04-23T11:59:59Z" },
      { start: "2029-04-28T12:00:00Z", end: "2029-04-29T11:59:59Z" },
      { start: "2030-04-27T12:00:00Z", end: "2030-04-28T11:59:59Z" },
      { start: "2031-04-26T12:00:00Z", end: "2031-04-27T11:59:59Z" },
      { start: "2032-04-24T12:00:00Z", end: "2032-04-25T11:59:59Z" },
      { start: "2033-04-23T12:00:00Z", end: "2033-04-24T11:59:59Z" },
      { start: "2034-04-22T12:00:00Z", end: "2034-04-23T11:59:59Z" },
      { start: "2035-04-28T12:00:00Z", end: "2035-04-29T11:59:59Z" },
      { start: "2036-04-26T12:00:00Z", end: "2036-04-27T11:59:59Z" },
      { start: "2037-04-25T12:00:00Z", end: "2037-04-26T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_oblast", type: "text", label: "My oblast",
        placeholder: "KI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_OBLAST",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (UR) or serial (DX)",
        placeholder: "KI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UKR-RTTY",
      sentTemplate: ["rst_sent", "sent_oblast"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== wae-cw
// ================================================================
/* Worked All Europe DX Contest, CW.
 * https://www.darc.de/der-club/referate/conteste/wae-dx-contest/
 * Exchange: RST + serial. QTC-traffic feature not implemented in v1 (see
 * wae-ssb.js note). Runs the second full weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["wae-cw"] = {
    id: "wae-cw",
    name: "Worked All Europe DX Contest, CW",
    shortName: "WAE CW",
    url: "https://www.darc.de/der-club/referate/conteste/wae-dx-contest/",
    windows: [
      { start: "2026-08-08T00:00:00Z", end: "2026-08-09T23:59:59Z" },
      { start: "2027-08-14T00:00:00Z", end: "2027-08-15T23:59:59Z" },
      { start: "2028-08-12T00:00:00Z", end: "2028-08-13T23:59:59Z" },
      { start: "2029-08-11T00:00:00Z", end: "2029-08-12T23:59:59Z" },
      { start: "2030-08-10T00:00:00Z", end: "2030-08-11T23:59:59Z" },
      { start: "2031-08-09T00:00:00Z", end: "2031-08-10T23:59:59Z" },
      { start: "2032-08-14T00:00:00Z", end: "2032-08-15T23:59:59Z" },
      { start: "2033-08-13T00:00:00Z", end: "2033-08-14T23:59:59Z" },
      { start: "2034-08-12T00:00:00Z", end: "2034-08-13T23:59:59Z" },
      { start: "2035-08-11T00:00:00Z", end: "2035-08-12T23:59:59Z" },
      { start: "2036-08-09T00:00:00Z", end: "2036-08-10T23:59:59Z" },
      { start: "2037-08-08T00:00:00Z", end: "2037-08-09T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "WAE-DX-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== wae-ssb
// ================================================================
/* Worked All Europe DX Contest, SSB.
 * https://www.darc.de/der-club/referate/conteste/wae-dx-contest/
 * Exchange: RST + serial. In WAE, EU stations work only DX and vice-versa.
 * NOTE: WAE's headline QTC-traffic feature (sending previously-worked QSOs
 * in batches of up to 10) is NOT implemented in v1 — needs a dedicated
 * QSO-form block and a Cabrillo QTC-line emitter. This config supports
 * plain QSOs only; QTC is a future addition.
 * Runs the second full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["wae-ssb"] = {
    id: "wae-ssb",
    name: "Worked All Europe DX Contest, SSB",
    shortName: "WAE SSB",
    url: "https://www.darc.de/der-club/referate/conteste/wae-dx-contest/",
    windows: [
      { start: "2026-09-12T00:00:00Z", end: "2026-09-13T23:59:59Z" },
      { start: "2027-09-11T00:00:00Z", end: "2027-09-12T23:59:59Z" },
      { start: "2028-09-09T00:00:00Z", end: "2028-09-10T23:59:59Z" },
      { start: "2029-09-08T00:00:00Z", end: "2029-09-09T23:59:59Z" },
      { start: "2030-09-14T00:00:00Z", end: "2030-09-15T23:59:59Z" },
      { start: "2031-09-13T00:00:00Z", end: "2031-09-14T23:59:59Z" },
      { start: "2032-09-11T00:00:00Z", end: "2032-09-12T23:59:59Z" },
      { start: "2033-09-10T00:00:00Z", end: "2033-09-11T23:59:59Z" },
      { start: "2034-09-09T00:00:00Z", end: "2034-09-10T23:59:59Z" },
      { start: "2035-09-08T00:00:00Z", end: "2035-09-09T23:59:59Z" },
      { start: "2036-09-13T00:00:00Z", end: "2036-09-14T23:59:59Z" },
      { start: "2037-09-12T00:00:00Z", end: "2037-09-13T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "WAE-DX-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== yo-dx-hf-dx
// ================================================================
/* YO DX HF Contest — DX-station perspective (non-YO operators).
 * https://www.hamradio.ro/frr/index.php/regulamente/yo-dx-hf-contest
 * Exchange (DX side): send RST + serial; receive RST + Romanian county
 * abbreviation (2 letters, e.g. "BH", "CJ") from YO stations, or RST +
 * serial from other DX stations. Held the last full weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["yo-dx-hf-dx"] = {
    id: "yo-dx-hf-dx",
    name: "YO DX HF Contest (DX side)",
    shortName: "YO DX HF (DX)",
    url: "https://www.hamradio.ro/frr/index.php/regulamente/yo-dx-hf-contest",
    windows: [
      { start: "2026-08-29T12:00:00Z", end: "2026-08-30T11:59:59Z" },
      { start: "2027-08-28T12:00:00Z", end: "2027-08-29T11:59:59Z" },
      { start: "2028-08-26T12:00:00Z", end: "2028-08-27T11:59:59Z" },
      { start: "2029-08-25T12:00:00Z", end: "2029-08-26T11:59:59Z" },
      { start: "2030-08-24T12:00:00Z", end: "2030-08-25T11:59:59Z" },
      { start: "2031-08-30T12:00:00Z", end: "2031-08-31T11:59:59Z" },
      { start: "2032-08-28T12:00:00Z", end: "2032-08-29T11:59:59Z" },
      { start: "2033-08-27T12:00:00Z", end: "2033-08-28T11:59:59Z" },
      { start: "2034-08-26T12:00:00Z", end: "2034-08-27T11:59:59Z" },
      { start: "2035-08-25T12:00:00Z", end: "2035-08-26T11:59:59Z" },
      { start: "2036-08-30T12:00:00Z", end: "2036-08-31T11:59:59Z" },
      { start: "2037-08-29T12:00:00Z", end: "2037-08-30T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (YO) or serial (DX)",
        placeholder: "BH or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "YO-DX-HF",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();

// ================================================================
// ==== yo-dx-hf-yo
// ================================================================
/* YO DX HF Contest — YO-station perspective (Romanian operators).
 * https://www.hamradio.ro/frr/index.php/regulamente/yo-dx-hf-contest
 * Exchange (YO side): send RST + county (2-letter, e.g. "BH");
 * receive RST + county (YO) or RST + serial (DX). Held the last full
 * weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["yo-dx-hf-yo"] = {
    id: "yo-dx-hf-yo",
    name: "YO DX HF Contest (YO side)",
    shortName: "YO DX HF (YO)",
    url: "https://www.hamradio.ro/frr/index.php/regulamente/yo-dx-hf-contest",
    windows: [
      { start: "2026-08-29T12:00:00Z", end: "2026-08-30T11:59:59Z" },
      { start: "2027-08-28T12:00:00Z", end: "2027-08-29T11:59:59Z" },
      { start: "2028-08-26T12:00:00Z", end: "2028-08-27T11:59:59Z" },
      { start: "2029-08-25T12:00:00Z", end: "2029-08-26T11:59:59Z" },
      { start: "2030-08-24T12:00:00Z", end: "2030-08-25T11:59:59Z" },
      { start: "2031-08-30T12:00:00Z", end: "2031-08-31T11:59:59Z" },
      { start: "2032-08-28T12:00:00Z", end: "2032-08-29T11:59:59Z" },
      { start: "2033-08-27T12:00:00Z", end: "2033-08-28T11:59:59Z" },
      { start: "2034-08-26T12:00:00Z", end: "2034-08-27T11:59:59Z" },
      { start: "2035-08-25T12:00:00Z", end: "2035-08-26T11:59:59Z" },
      { start: "2036-08-30T12:00:00Z", end: "2036-08-31T11:59:59Z" },
      { start: "2037-08-29T12:00:00Z", end: "2037-08-30T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_county", type: "text", label: "My county",
        placeholder: "BH", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_COUNTY",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (YO) or serial (DX)",
        placeholder: "BH or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "YO-DX-HF",
      sentTemplate: ["rst_sent", "sent_county"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
