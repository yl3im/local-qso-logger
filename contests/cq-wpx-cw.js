/* CQ WPX Contest, CW.
 * https://cqwpx.com/rules.htm
 * Exchange: RST + serial number. Runs the last full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-cw"] = {
    id: "cq-wpx-cw",
    name: "CQ Worldwide WPX Contest, CW",
    shortName: "CQ WPX CW",
    url: "https://cqwpx.com/rules.htm",
    windows: [
      { start: "2026-05-30T00:00:00Z", end: "2026-05-31T23:59:59Z" },
      { start: "2027-05-29T00:00:00Z", end: "2027-05-30T23:59:59Z" },
      { start: "2028-05-27T00:00:00Z", end: "2028-05-28T23:59:59Z" },
      { start: "2029-05-26T00:00:00Z", end: "2029-05-27T23:59:59Z" },
      { start: "2030-05-25T00:00:00Z", end: "2030-05-26T23:59:59Z" },
      { start: "2031-05-31T00:00:00Z", end: "2031-06-01T23:59:59Z" },
      { start: "2032-05-29T00:00:00Z", end: "2032-05-30T23:59:59Z" },
      { start: "2033-05-28T00:00:00Z", end: "2033-05-29T23:59:59Z" },
      { start: "2034-05-27T00:00:00Z", end: "2034-05-28T23:59:59Z" },
      { start: "2035-05-26T00:00:00Z", end: "2035-05-27T23:59:59Z" },
      { start: "2036-05-31T00:00:00Z", end: "2036-06-01T23:59:59Z" },
      { start: "2037-05-30T00:00:00Z", end: "2037-05-31T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
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
      contest: "CQ-WPX-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
