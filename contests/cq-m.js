/* CQ-M International DX Contest (Soyuz Radio Amateurov Rossii).
 * http://cqm.srr.ru/
 * Exchange: RST + serial (both sides). Held the second full weekend of May.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-m"] = {
    id: "cq-m",
    name: "CQ-M International DX Contest",
    shortName: "CQ-M",
    url: "http://cqm.srr.ru/",
    windows: [
      { start: "2026-05-09T12:00:00Z", end: "2026-05-10T11:59:59Z" },
      { start: "2027-05-08T12:00:00Z", end: "2027-05-09T11:59:59Z" },
      { start: "2028-05-13T12:00:00Z", end: "2028-05-14T11:59:59Z" },
      { start: "2029-05-12T12:00:00Z", end: "2029-05-13T11:59:59Z" },
      { start: "2030-05-11T12:00:00Z", end: "2030-05-12T11:59:59Z" },
      { start: "2031-05-10T12:00:00Z", end: "2031-05-11T11:59:59Z" },
      { start: "2032-05-08T12:00:00Z", end: "2032-05-09T11:59:59Z" },
      { start: "2033-05-14T12:00:00Z", end: "2033-05-15T11:59:59Z" },
      { start: "2034-05-13T12:00:00Z", end: "2034-05-14T11:59:59Z" },
      { start: "2035-05-12T12:00:00Z", end: "2035-05-13T11:59:59Z" },
      { start: "2036-05-10T12:00:00Z", end: "2036-05-11T11:59:59Z" },
      { start: "2037-05-09T12:00:00Z", end: "2037-05-10T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
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
      contest: "CQ-M",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
