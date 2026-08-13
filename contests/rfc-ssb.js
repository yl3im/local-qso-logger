/* Cup of the Russian Federation (RFC), SSB.
 * https://www.srr.ru/CONTEST/rrfrules-eng.php
 * Exchange: RS + serial. SSB variant of the same event; held mid-April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rfc-ssb"] = {
    id: "rfc-ssb",
    name: "Cup of the Russian Federation, SSB",
    shortName: "RFC SSB",
    url: "https://www.srr.ru/CONTEST/rrfrules-eng.php",
    windows: [
      { start: "2026-04-11T15:00:00Z", end: "2026-04-11T22:59:59Z" },
      { start: "2027-04-10T15:00:00Z", end: "2027-04-10T22:59:59Z" },
      { start: "2028-04-08T15:00:00Z", end: "2028-04-08T22:59:59Z" },
      { start: "2029-04-14T15:00:00Z", end: "2029-04-14T22:59:59Z" },
      { start: "2030-04-13T15:00:00Z", end: "2030-04-13T22:59:59Z" },
      { start: "2031-04-12T15:00:00Z", end: "2031-04-12T22:59:59Z" },
      { start: "2032-04-10T15:00:00Z", end: "2032-04-10T22:59:59Z" },
      { start: "2033-04-09T15:00:00Z", end: "2033-04-09T22:59:59Z" },
      { start: "2034-04-08T15:00:00Z", end: "2034-04-08T22:59:59Z" },
      { start: "2035-04-14T15:00:00Z", end: "2035-04-14T22:59:59Z" },
      { start: "2036-04-12T15:00:00Z", end: "2036-04-12T22:59:59Z" },
      { start: "2037-04-11T15:00:00Z", end: "2037-04-11T22:59:59Z" },
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
      contest: "RFC-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
