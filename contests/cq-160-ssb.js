/* CQ 160-Meter Contest, SSB.
 * https://cq160.com/rules.htm
 * Exchange: RST + CQ zone (+ state/province for W/VE).
 * Single-band (160m) event. Runs the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-160-ssb"] = {
    id: "cq-160-ssb",
    name: "CQ 160-Meter Contest, SSB",
    shortName: "CQ 160 SSB",
    url: "https://cq160.com/rules.htm",
    windows: [
      { start: "2026-02-27T22:00:00Z", end: "2026-03-01T22:00:00Z" },
      { start: "2027-02-26T22:00:00Z", end: "2027-02-28T22:00:00Z" },
      { start: "2028-02-25T22:00:00Z", end: "2028-02-27T22:00:00Z" },
      { start: "2029-02-23T22:00:00Z", end: "2029-02-25T22:00:00Z" },
      { start: "2030-02-22T22:00:00Z", end: "2030-02-24T22:00:00Z" },
      { start: "2031-02-21T22:00:00Z", end: "2031-02-23T22:00:00Z" },
      { start: "2032-02-27T22:00:00Z", end: "2032-02-29T22:00:00Z" },
      { start: "2033-02-25T22:00:00Z", end: "2033-02-27T22:00:00Z" },
      { start: "2034-02-24T22:00:00Z", end: "2034-02-26T22:00:00Z" },
      { start: "2035-02-23T22:00:00Z", end: "2035-02-25T22:00:00Z" },
      { start: "2036-02-22T22:00:00Z", end: "2036-02-24T22:00:00Z" },
      { start: "2037-02-27T22:00:00Z", end: "2037-03-01T22:00:00Z" },
    ],
    bands: ["160m"],
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
      {
        id: "rcvd_qth", type: "text", label: "State/Prov (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "CQ-160-SSB",
      sentTemplate: ["rst_sent", "sent_zone"],
      rcvdTemplate: ["rst_rcvd", "rcvd_zone", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
