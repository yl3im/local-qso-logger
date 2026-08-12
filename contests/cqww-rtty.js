/* CQ WW RTTY DX Contest.
 * https://cqwwrtty.com/rules.htm
 * Exchange: RST + CQ Zone + State/Province (W/VE only).
 * We ship the common overseas exchange (RST + zone); the state/province
 * field is exposed as a free-text field for W/VE operators to fill in.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cqww-rtty"] = {
    id: "cqww-rtty",
    name: "CQ Worldwide RTTY DX Contest",
    shortName: "CQ WW RTTY",
    url: "https://cqwwrtty.com/rules.htm",
    windows: [
      { start: "2025-09-27T00:00:00Z", end: "2025-09-28T23:59:59Z" },
      { start: "2026-09-26T00:00:00Z", end: "2026-09-27T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
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
      {
        id: "rcvd_qth", type: "text", label: "State/Province (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WW-RTTY",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
