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
