/* Russian District Award Contest (RDAC).
 * https://rdaward.org/rdac_en.html
 * Exchange: RST + serial (all stations). Russian stations may additionally
 * announce their RDA district code (e.g. "MO-01", "SP-15") — captured here
 * as a single free-text catch-all so operators can type either a serial
 * (received from DX) or a district (received from RU).
 * Held third full weekend of September.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["rdac"] = {
    id: "rdac",
    name: "Russian District Award Contest",
    shortName: "RDAC",
    url: "https://rdaward.org/rdac_en.html",
    windows: [
      { start: "2026-09-19T08:00:00Z", end: "2026-09-20T07:59:59Z" },
      { start: "2027-09-18T08:00:00Z", end: "2027-09-19T07:59:59Z" },
      { start: "2028-09-16T08:00:00Z", end: "2028-09-17T07:59:59Z" },
      { start: "2029-09-15T08:00:00Z", end: "2029-09-16T07:59:59Z" },
      { start: "2030-09-21T08:00:00Z", end: "2030-09-22T07:59:59Z" },
      { start: "2031-09-20T08:00:00Z", end: "2031-09-21T07:59:59Z" },
      { start: "2032-09-18T08:00:00Z", end: "2032-09-19T07:59:59Z" },
      { start: "2033-09-17T08:00:00Z", end: "2033-09-18T07:59:59Z" },
      { start: "2034-09-16T08:00:00Z", end: "2034-09-17T07:59:59Z" },
      { start: "2035-09-15T08:00:00Z", end: "2035-09-16T07:59:59Z" },
      { start: "2036-09-20T08:00:00Z", end: "2036-09-21T07:59:59Z" },
      { start: "2037-09-19T08:00:00Z", end: "2037-09-20T07:59:59Z" },
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
        id: "rcvd_exchange", type: "text",
        label: "Their serial or RDA district",
        placeholder: "001 or MO-01", required: true, maxLength: 6,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RDAC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
