/* Russian Radiosport Team Championship (RRTC).
 * https://rrtc.rdrclub.ru/en/
 * Exchange: RST + serial. Held second Sat of July.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rrtc"] = {
    id: "rrtc",
    name: "Russian Radiosport Team Championship",
    shortName: "RRTC",
    url: "https://rrtc.rdrclub.ru/en/",
    windows: [
      { start: "2026-07-11T07:00:00Z", end: "2026-07-11T14:59:59Z" },
      { start: "2027-07-10T07:00:00Z", end: "2027-07-10T14:59:59Z" },
      { start: "2028-07-08T07:00:00Z", end: "2028-07-08T14:59:59Z" },
      { start: "2029-07-14T07:00:00Z", end: "2029-07-14T14:59:59Z" },
      { start: "2030-07-13T07:00:00Z", end: "2030-07-13T14:59:59Z" },
      { start: "2031-07-12T07:00:00Z", end: "2031-07-12T14:59:59Z" },
      { start: "2032-07-10T07:00:00Z", end: "2032-07-10T14:59:59Z" },
      { start: "2033-07-09T07:00:00Z", end: "2033-07-09T14:59:59Z" },
      { start: "2034-07-08T07:00:00Z", end: "2034-07-08T14:59:59Z" },
      { start: "2035-07-14T07:00:00Z", end: "2035-07-14T14:59:59Z" },
      { start: "2036-07-12T07:00:00Z", end: "2036-07-12T14:59:59Z" },
      { start: "2037-07-11T07:00:00Z", end: "2037-07-11T14:59:59Z" },
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
      contest: "RRTC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
