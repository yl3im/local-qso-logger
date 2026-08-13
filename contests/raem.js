/* RAEM Contest (Russian Arctic and Antarctic Expedition, memorial to
 * Ernst T. Krenkel U3AA / RAEM).
 * https://raem.srr.ru/en/
 * Exchange: RST + operator's approximate geographic coordinates
 * (integer latitude and longitude in degrees, with N/S and E/W suffix
 * for hemisphere — e.g. "57N" / "24E"). The real exchange uses signed
 * integer values; this config exposes them as two free-text inputs
 * (approximation — precise numeric formatting is left to the operator).
 * Held last full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["raem"] = {
    id: "raem",
    name: "RAEM Contest",
    shortName: "RAEM",
    url: "https://raem.srr.ru/en/",
    windows: [
      { start: "2026-12-27T00:00:00Z", end: "2026-12-27T11:59:59Z" },
      { start: "2027-12-26T00:00:00Z", end: "2027-12-26T11:59:59Z" },
      { start: "2028-12-24T00:00:00Z", end: "2028-12-24T11:59:59Z" },
      { start: "2029-12-23T00:00:00Z", end: "2029-12-23T11:59:59Z" },
      { start: "2030-12-29T00:00:00Z", end: "2030-12-29T11:59:59Z" },
      { start: "2031-12-28T00:00:00Z", end: "2031-12-28T11:59:59Z" },
      { start: "2032-12-26T00:00:00Z", end: "2032-12-26T11:59:59Z" },
      { start: "2033-12-25T00:00:00Z", end: "2033-12-25T11:59:59Z" },
      { start: "2034-12-24T00:00:00Z", end: "2034-12-24T11:59:59Z" },
      { start: "2035-12-23T00:00:00Z", end: "2035-12-23T11:59:59Z" },
      { start: "2036-12-28T00:00:00Z", end: "2036-12-28T11:59:59Z" },
      { start: "2037-12-27T00:00:00Z", end: "2037-12-27T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_lat", type: "text", label: "My latitude (deg N/S)",
        placeholder: "57N", required: true, sticky: true, maxLength: 5,
        adifField: "APP_LQ_SENT_LAT",
      },
      {
        id: "sent_lon", type: "text", label: "My longitude (deg E/W)",
        placeholder: "24E", required: true, sticky: true, maxLength: 5,
        adifField: "APP_LQ_SENT_LON",
      },
      {
        id: "rcvd_lat", type: "text", label: "Their latitude",
        placeholder: "57N", required: true, maxLength: 5,
        adifField: "APP_LQ_RCVD_LAT",
      },
      {
        id: "rcvd_lon", type: "text", label: "Their longitude",
        placeholder: "24E", required: true, maxLength: 5,
        adifField: "APP_LQ_RCVD_LON",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RAEM",
      sentTemplate: ["rst_sent", "sent_lat", "sent_lon"],
      rcvdTemplate: ["rst_rcvd", "rcvd_lat", "rcvd_lon"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
