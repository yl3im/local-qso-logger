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
