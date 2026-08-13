/* CQ 160-Meter Contest, CW.
 * https://cq160.com/rules.htm
 * Exchange: RST + CQ zone. W/VE stations also send their state/province.
 * Single-band (160m) event. Runs the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-160-cw"] = {
    id: "cq-160-cw",
    name: "CQ 160-Meter Contest, CW",
    shortName: "CQ 160 CW",
    url: "https://cq160.com/rules.htm",
    windows: [
      { start: "2026-01-23T22:00:00Z", end: "2026-01-25T22:00:00Z" },
      { start: "2027-01-29T22:00:00Z", end: "2027-01-31T22:00:00Z" },
      { start: "2028-01-28T22:00:00Z", end: "2028-01-30T22:00:00Z" },
      { start: "2029-01-26T22:00:00Z", end: "2029-01-28T22:00:00Z" },
      { start: "2030-01-25T22:00:00Z", end: "2030-01-27T22:00:00Z" },
      { start: "2031-01-24T22:00:00Z", end: "2031-01-26T22:00:00Z" },
      { start: "2032-01-23T22:00:00Z", end: "2032-01-25T22:00:00Z" },
      { start: "2033-01-28T22:00:00Z", end: "2033-01-30T22:00:00Z" },
      { start: "2034-01-27T22:00:00Z", end: "2034-01-29T22:00:00Z" },
      { start: "2035-01-26T22:00:00Z", end: "2035-01-28T22:00:00Z" },
      { start: "2036-01-25T22:00:00Z", end: "2036-01-27T22:00:00Z" },
      { start: "2037-01-23T22:00:00Z", end: "2037-01-25T22:00:00Z" },
    ],
    bands: ["160m"],
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
      // W/VE stations exchange state/province in addition to (or instead of)
      // zone. Leave blank for non-W/VE contacts.
      {
        id: "rcvd_qth", type: "text", label: "State/Prov (W/VE)",
        placeholder: "e.g. WA", maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "CQ-160-CW",
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
