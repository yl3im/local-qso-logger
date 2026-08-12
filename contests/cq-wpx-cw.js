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
