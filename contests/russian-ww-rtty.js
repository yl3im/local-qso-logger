/* Russian WW RTTY Contest.
 * https://rdrclub.ru/russian-ww-rtty-contest/rules
 * Exchange: RST + serial (all stations, both sides). Both Russian and
 * non-Russian stations use the same simple RST + serial format —
 * Russian-oblast multipliers are counted by the contest robot from CALL.
 * Runs the first weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-ww-rtty"] = {
    id: "russian-ww-rtty",
    name: "Russian WW RTTY Contest",
    shortName: "RUS WW RTTY",
    url: "https://rdrclub.ru/russian-ww-rtty-contest/rules",
    windows: [
      { start: "2026-03-07T00:00:00Z", end: "2026-03-08T23:59:59Z" },
      { start: "2027-03-06T00:00:00Z", end: "2027-03-07T23:59:59Z" },
      { start: "2028-03-04T00:00:00Z", end: "2028-03-05T23:59:59Z" },
      { start: "2029-03-03T00:00:00Z", end: "2029-03-04T23:59:59Z" },
      { start: "2030-03-02T00:00:00Z", end: "2030-03-03T23:59:59Z" },
      { start: "2031-03-01T00:00:00Z", end: "2031-03-02T23:59:59Z" },
      { start: "2032-03-06T00:00:00Z", end: "2032-03-07T23:59:59Z" },
      { start: "2033-03-05T00:00:00Z", end: "2033-03-06T23:59:59Z" },
      { start: "2034-03-04T00:00:00Z", end: "2034-03-05T23:59:59Z" },
      { start: "2035-03-03T00:00:00Z", end: "2035-03-04T23:59:59Z" },
      { start: "2036-03-01T00:00:00Z", end: "2036-03-02T23:59:59Z" },
      { start: "2037-03-07T00:00:00Z", end: "2037-03-08T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
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
      contest: "RUS-WW-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
