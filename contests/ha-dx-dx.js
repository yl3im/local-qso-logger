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
