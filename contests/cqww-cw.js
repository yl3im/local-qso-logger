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
      { start: "2025-11-29T00:00:00Z", end: "2025-11-30T23:59:59Z" },
      { start: "2026-11-28T00:00:00Z", end: "2026-11-29T23:59:59Z" },
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
