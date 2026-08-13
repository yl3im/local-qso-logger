/* CQ Worldwide DX Contest, CW.
 * https://cqww.com/rules.htm
 * Exchange: RST + CQ Zone (2 digits, 01-40).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-cw"] = {
    id: "cqww-cw",
    name: "CQ Worldwide DX Contest, CW",
    shortName: "CQ WW CW",
    url: "https://cqww.com/rules.htm",
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
    modes: ["CW"],
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
      contest: "CQ-WW-CW",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
