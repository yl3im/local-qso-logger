/* Yuri Gagarin International DX Contest (GCUP).
 * https://gcup.ru/en/
 * Exchange: RST + serial (all stations). Held on the weekend closest to
 * 12 April (Cosmonautics Day, Gagarin's first flight).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["gagarin"] = {
    id: "gagarin",
    name: "Yuri Gagarin International DX Contest",
    shortName: "Gagarin Cup",
    url: "https://gcup.ru/en/",
    windows: [
      { start: "2026-04-11T21:00:00Z", end: "2026-04-12T20:59:59Z" },
      { start: "2027-04-10T21:00:00Z", end: "2027-04-11T20:59:59Z" },
      { start: "2028-04-08T21:00:00Z", end: "2028-04-09T20:59:59Z" },
      { start: "2029-04-14T21:00:00Z", end: "2029-04-15T20:59:59Z" },
      { start: "2030-04-13T21:00:00Z", end: "2030-04-14T20:59:59Z" },
      { start: "2031-04-12T21:00:00Z", end: "2031-04-13T20:59:59Z" },
      { start: "2032-04-10T21:00:00Z", end: "2032-04-11T20:59:59Z" },
      { start: "2033-04-09T21:00:00Z", end: "2033-04-10T20:59:59Z" },
      { start: "2034-04-08T21:00:00Z", end: "2034-04-09T20:59:59Z" },
      { start: "2035-04-14T21:00:00Z", end: "2035-04-15T20:59:59Z" },
      { start: "2036-04-12T21:00:00Z", end: "2036-04-13T20:59:59Z" },
      { start: "2037-04-11T21:00:00Z", end: "2037-04-12T20:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
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
      contest: "RUS-YURI-GAGARIN",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
