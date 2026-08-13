/* All Asian DX Contest, CW (JARL).
 * https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm
 * Exchange: RST + operator age in years (all stations, both sides).
 * XYL/YL operators may send "00" to keep age private. Held the third
 * full weekend of June.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["all-asia-cw"] = {
    id: "all-asia-cw",
    name: "All Asian DX Contest, CW",
    shortName: "All Asian CW",
    url: "https://www.jarl.org/English/4_Library/A-4-3_Contests/2019AA_Rule.htm",
    windows: [
      { start: "2026-06-20T00:00:00Z", end: "2026-06-21T23:59:59Z" },
      { start: "2027-06-19T00:00:00Z", end: "2027-06-20T23:59:59Z" },
      { start: "2028-06-17T00:00:00Z", end: "2028-06-18T23:59:59Z" },
      { start: "2029-06-16T00:00:00Z", end: "2029-06-17T23:59:59Z" },
      { start: "2030-06-15T00:00:00Z", end: "2030-06-16T23:59:59Z" },
      { start: "2031-06-21T00:00:00Z", end: "2031-06-22T23:59:59Z" },
      { start: "2032-06-19T00:00:00Z", end: "2032-06-20T23:59:59Z" },
      { start: "2033-06-18T00:00:00Z", end: "2033-06-19T23:59:59Z" },
      { start: "2034-06-17T00:00:00Z", end: "2034-06-18T23:59:59Z" },
      { start: "2035-06-16T00:00:00Z", end: "2035-06-17T23:59:59Z" },
      { start: "2036-06-21T00:00:00Z", end: "2036-06-22T23:59:59Z" },
      { start: "2037-06-20T00:00:00Z", end: "2037-06-21T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
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
      contest: "AA-CW",
      sentTemplate: ["rst_sent", "sent_age"],
      rcvdTemplate: ["rst_rcvd", "rcvd_age"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
