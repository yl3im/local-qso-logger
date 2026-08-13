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
