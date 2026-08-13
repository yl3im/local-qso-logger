/* CQ Worldwide DX Contest, SSB.
 * https://cqww.com/rules.htm
 * Exchange: RST + CQ Zone (2 digits, 01-40).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-ssb"] = {
    id: "cqww-ssb",
    name: "CQ Worldwide DX Contest, SSB",
    shortName: "CQ WW SSB",
    url: "https://cqww.com/rules.htm",
    windows: [
      { start: "2026-10-24T00:00:00Z", end: "2026-10-25T23:59:59Z" },
      { start: "2027-10-23T00:00:00Z", end: "2027-10-24T23:59:59Z" },
      { start: "2028-10-28T00:00:00Z", end: "2028-10-29T23:59:59Z" },
      { start: "2029-10-27T00:00:00Z", end: "2029-10-28T23:59:59Z" },
      { start: "2030-10-26T00:00:00Z", end: "2030-10-27T23:59:59Z" },
      { start: "2031-10-25T00:00:00Z", end: "2031-10-26T23:59:59Z" },
      { start: "2032-10-23T00:00:00Z", end: "2032-10-24T23:59:59Z" },
      { start: "2033-10-22T00:00:00Z", end: "2033-10-23T23:59:59Z" },
      { start: "2034-10-28T00:00:00Z", end: "2034-10-29T23:59:59Z" },
      { start: "2035-10-27T00:00:00Z", end: "2035-10-28T23:59:59Z" },
      { start: "2036-10-25T00:00:00Z", end: "2036-10-26T23:59:59Z" },
      { start: "2037-10-24T00:00:00Z", end: "2037-10-25T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_zone", type: "text", label: "My CQ Zone",
        placeholder: "15", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ZONE",
      },
      {
        id: "rcvd_zone", type: "text", label: "Their CQ Zone",
        placeholder: "15", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ZONE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WW-SSB",
      // Column order after the fixed prefix (freq mode date time).
      // Sent block: our call + rst_sent + sent_zone.
      // Rcvd block: their call + rst_rcvd + rcvd_zone.
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone"],
      // Extra header fields prompted in the Submission-info panel.
      // CALLSIGN / LOCATION / GRID-LOCATOR / OPERATORS are pre-filled
      // from the log's Station data and don't need to be prompted.
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
