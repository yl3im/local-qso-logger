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
