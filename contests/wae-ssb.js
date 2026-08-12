/* Worked All Europe DX Contest, SSB.
 * https://www.darc.de/der-club/referate/conteste/wae-dx-contest/
 * Exchange: RST + serial. In WAE, EU stations work only DX and vice-versa.
 * NOTE: WAE's headline QTC-traffic feature (sending previously-worked QSOs
 * in batches of up to 10) is NOT implemented in v1 — needs a dedicated
 * QSO-form block and a Cabrillo QTC-line emitter. This config supports
 * plain QSOs only; QTC is a future addition.
 * Runs the second full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["wae-ssb"] = {
    id: "wae-ssb",
    name: "Worked All Europe DX Contest, SSB",
    shortName: "WAE SSB",
    url: "https://www.darc.de/der-club/referate/conteste/wae-dx-contest/",
    windows: [
      { start: "2026-09-12T00:00:00Z", end: "2026-09-13T23:59:59Z" },
      { start: "2027-09-11T00:00:00Z", end: "2027-09-12T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
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
      contest: "WAE-DX-SSB",
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
