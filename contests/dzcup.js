/* UA1DZ Memorial Cup (DZ Cup).
 * https://ua1dz.rdrclub.ru/rules
 * Memorial contest honouring Georgy Rumiantsev UA1DZ.
 * Exchange: RST + serial. Held second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["dzcup"] = {
    id: "dzcup",
    name: "UA1DZ Memorial Cup",
    shortName: "UA1DZ Cup",
    url: "https://ua1dz.rdrclub.ru/rules",
    windows: [
      { start: "2026-02-14T15:00:00Z", end: "2026-02-14T18:59:59Z" },
      { start: "2027-02-13T15:00:00Z", end: "2027-02-13T18:59:59Z" },
      { start: "2028-02-12T15:00:00Z", end: "2028-02-12T18:59:59Z" },
      { start: "2029-02-10T15:00:00Z", end: "2029-02-10T18:59:59Z" },
      { start: "2030-02-09T15:00:00Z", end: "2030-02-09T18:59:59Z" },
      { start: "2031-02-08T15:00:00Z", end: "2031-02-08T18:59:59Z" },
      { start: "2032-02-14T15:00:00Z", end: "2032-02-14T18:59:59Z" },
      { start: "2033-02-12T15:00:00Z", end: "2033-02-12T18:59:59Z" },
      { start: "2034-02-11T15:00:00Z", end: "2034-02-11T18:59:59Z" },
      { start: "2035-02-10T15:00:00Z", end: "2035-02-10T18:59:59Z" },
      { start: "2036-02-09T15:00:00Z", end: "2036-02-09T18:59:59Z" },
      { start: "2037-02-14T15:00:00Z", end: "2037-02-14T18:59:59Z" },
    ],
    bands: ["80m", "40m", "20m"],
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
      contest: "UA1DZ-CUP",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
