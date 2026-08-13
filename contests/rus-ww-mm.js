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
