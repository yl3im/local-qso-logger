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
