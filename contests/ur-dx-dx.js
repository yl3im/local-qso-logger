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
