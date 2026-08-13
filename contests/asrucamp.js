/* Asiatic Russia Championship.
 * https://ac.srr.ru/en/
 * Exchange: RST + serial. Asian-Russian stations (R9/UA9-region) work
 * everyone; other stations work only Asian-Russian participants.
 * Held second full weekend of October.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["asrucamp"] = {
    id: "asrucamp",
    name: "Asiatic Russia Championship",
    shortName: "AS-RU Champ",
    url: "https://ac.srr.ru/en/",
    windows: [
      { start: "2026-10-10T08:00:00Z", end: "2026-10-11T07:59:59Z" },
      { start: "2027-10-09T08:00:00Z", end: "2027-10-10T07:59:59Z" },
      { start: "2028-10-14T08:00:00Z", end: "2028-10-15T07:59:59Z" },
      { start: "2029-10-13T08:00:00Z", end: "2029-10-14T07:59:59Z" },
      { start: "2030-10-12T08:00:00Z", end: "2030-10-13T07:59:59Z" },
      { start: "2031-10-11T08:00:00Z", end: "2031-10-12T07:59:59Z" },
      { start: "2032-10-09T08:00:00Z", end: "2032-10-10T07:59:59Z" },
      { start: "2033-10-08T08:00:00Z", end: "2033-10-09T07:59:59Z" },
      { start: "2034-10-14T08:00:00Z", end: "2034-10-15T07:59:59Z" },
      { start: "2035-10-13T08:00:00Z", end: "2035-10-14T07:59:59Z" },
      { start: "2036-10-11T08:00:00Z", end: "2036-10-12T07:59:59Z" },
      { start: "2037-10-10T08:00:00Z", end: "2037-10-11T07:59:59Z" },
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
      contest: "AS-RU-CH",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
