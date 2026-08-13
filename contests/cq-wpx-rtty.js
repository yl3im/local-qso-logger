/* CQ WPX Contest, RTTY.
 * https://cqwpxrtty.com/rules.htm
 * Exchange: RST + serial number. Runs the second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-rtty"] = {
    id: "cq-wpx-rtty",
    name: "CQ Worldwide WPX Contest, RTTY",
    shortName: "CQ WPX RTTY",
    url: "https://cqwpxrtty.com/rules.htm",
    windows: [
      { start: "2026-02-14T00:00:00Z", end: "2026-02-15T23:59:59Z" },
      { start: "2027-02-13T00:00:00Z", end: "2027-02-14T23:59:59Z" },
      { start: "2028-02-12T00:00:00Z", end: "2028-02-13T23:59:59Z" },
      { start: "2029-02-10T00:00:00Z", end: "2029-02-11T23:59:59Z" },
      { start: "2030-02-09T00:00:00Z", end: "2030-02-10T23:59:59Z" },
      { start: "2031-02-08T00:00:00Z", end: "2031-02-09T23:59:59Z" },
      { start: "2032-02-14T00:00:00Z", end: "2032-02-15T23:59:59Z" },
      { start: "2033-02-12T00:00:00Z", end: "2033-02-13T23:59:59Z" },
      { start: "2034-02-11T00:00:00Z", end: "2034-02-12T23:59:59Z" },
      { start: "2035-02-10T00:00:00Z", end: "2035-02-11T23:59:59Z" },
      { start: "2036-02-09T00:00:00Z", end: "2036-02-10T23:59:59Z" },
      { start: "2037-02-14T00:00:00Z", end: "2037-02-15T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
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
      contest: "CQ-WPX-RTTY",
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
