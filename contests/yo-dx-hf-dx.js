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
