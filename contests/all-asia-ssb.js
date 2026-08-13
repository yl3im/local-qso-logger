/* All Asian DX Contest, SSB (JARL).
 * https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm
 * Exchange: RST + operator age in years (all stations, both sides).
 * XYL/YL operators may send "00" to keep age private. SSB variant of the
 * All Asian contest; held first full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["all-asia-ssb"] = {
    id: "all-asia-ssb",
    name: "All Asian DX Contest, SSB",
    shortName: "All Asian SSB",
    url: "https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm",
    windows: [
      { start: "2026-09-05T00:00:00Z", end: "2026-09-06T23:59:59Z" },
      { start: "2027-09-04T00:00:00Z", end: "2027-09-05T23:59:59Z" },
      { start: "2028-09-02T00:00:00Z", end: "2028-09-03T23:59:59Z" },
      { start: "2029-09-01T00:00:00Z", end: "2029-09-02T23:59:59Z" },
      { start: "2030-09-07T00:00:00Z", end: "2030-09-08T23:59:59Z" },
      { start: "2031-09-06T00:00:00Z", end: "2031-09-07T23:59:59Z" },
      { start: "2032-09-04T00:00:00Z", end: "2032-09-05T23:59:59Z" },
      { start: "2033-09-03T00:00:00Z", end: "2033-09-04T23:59:59Z" },
      { start: "2034-09-02T00:00:00Z", end: "2034-09-03T23:59:59Z" },
      { start: "2035-09-01T00:00:00Z", end: "2035-09-02T23:59:59Z" },
      { start: "2036-09-06T00:00:00Z", end: "2036-09-07T23:59:59Z" },
      { start: "2037-09-05T00:00:00Z", end: "2037-09-06T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_age", type: "text", label: "My age (yrs, or 00)",
        placeholder: "45", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AGE",
      },
      {
        id: "rcvd_age", type: "text", label: "Their age",
        placeholder: "45", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_AGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "AA-SSB",
      sentTemplate: ["rst_sent", "sent_age"],
      rcvdTemplate: ["rst_rcvd", "rcvd_age"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
