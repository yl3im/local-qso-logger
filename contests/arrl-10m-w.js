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
      { start: "2025-12-13T00:00:00Z", end: "2025-12-14T23:59:59Z" },
      { start: "2026-12-12T00:00:00Z", end: "2026-12-13T23:59:59Z" },
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
