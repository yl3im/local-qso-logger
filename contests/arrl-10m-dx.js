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
      { start: "2025-12-13T00:00:00Z", end: "2025-12-14T23:59:59Z" },
      { start: "2026-12-12T00:00:00Z", end: "2026-12-13T23:59:59Z" },
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
