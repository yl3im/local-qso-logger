/* Worked All Europe DX Contest, CW.
 * https://www.darc.de/der-club/referate/conteste/wae-dx-contest/
 * Exchange: RST + serial. QTC-traffic feature not implemented in v1 (see
 * wae-ssb.js note). Runs the second full weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["wae-cw"] = {
    id: "wae-cw",
    name: "Worked All Europe DX Contest, CW",
    shortName: "WAE CW",
    url: "https://www.darc.de/der-club/referate/conteste/wae-dx-contest/",
    windows: [
      { start: "2026-08-08T00:00:00Z", end: "2026-08-09T23:59:59Z" },
      { start: "2027-08-14T00:00:00Z", end: "2027-08-15T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
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
      contest: "WAE-DX-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
