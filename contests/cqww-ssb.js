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
      { start: "2025-10-25T00:00:00Z", end: "2025-10-26T23:59:59Z" },
      { start: "2026-10-24T00:00:00Z", end: "2026-10-25T23:59:59Z" },
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
