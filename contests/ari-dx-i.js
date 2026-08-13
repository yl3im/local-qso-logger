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
