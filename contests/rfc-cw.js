/* Cup of the Russian Federation (RFC), CW.
 * https://www.srr.ru/CONTEST/rrfrules-eng.php
 * Exchange: RST + serial. Held mid-April (2nd Sat of April).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rfc-cw"] = {
    id: "rfc-cw",
    name: "Cup of the Russian Federation, CW",
    shortName: "RFC CW",
    url: "https://www.srr.ru/CONTEST/rrfrules-eng.php",
    windows: [
      { start: "2026-04-11T07:00:00Z", end: "2026-04-11T14:59:59Z" },
      { start: "2027-04-10T07:00:00Z", end: "2027-04-10T14:59:59Z" },
      { start: "2028-04-08T07:00:00Z", end: "2028-04-08T14:59:59Z" },
      { start: "2029-04-14T07:00:00Z", end: "2029-04-14T14:59:59Z" },
      { start: "2030-04-13T07:00:00Z", end: "2030-04-13T14:59:59Z" },
      { start: "2031-04-12T07:00:00Z", end: "2031-04-12T14:59:59Z" },
      { start: "2032-04-10T07:00:00Z", end: "2032-04-10T14:59:59Z" },
      { start: "2033-04-09T07:00:00Z", end: "2033-04-09T14:59:59Z" },
      { start: "2034-04-08T07:00:00Z", end: "2034-04-08T14:59:59Z" },
      { start: "2035-04-14T07:00:00Z", end: "2035-04-14T14:59:59Z" },
      { start: "2036-04-12T07:00:00Z", end: "2036-04-12T14:59:59Z" },
      { start: "2037-04-11T07:00:00Z", end: "2037-04-11T14:59:59Z" },
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
      contest: "RFC-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
