/* OK/OM DX Contest, CW — DX-station perspective (non-OK/OM operators).
 * https://www.okomdx.crk.cz/en/
 * Exchange (DX side): send RST + serial; receive RST + 3-char OK/OM
 * district code (e.g. "ABA", "APA", "BKA") from OK/OM stations, or
 * RST + serial from other DX stations. Held the second full weekend of
 * November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-cw-dx"] = {
    id: "okom-dx-cw-dx",
    name: "OK/OM DX Contest, CW (DX side)",
    shortName: "OK/OM DX CW (DX)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-11-14T12:00:00Z", end: "2026-11-15T11:59:59Z" },
      { start: "2027-11-13T12:00:00Z", end: "2027-11-14T11:59:59Z" },
      { start: "2028-11-11T12:00:00Z", end: "2028-11-12T11:59:59Z" },
      { start: "2029-11-10T12:00:00Z", end: "2029-11-11T11:59:59Z" },
      { start: "2030-11-09T12:00:00Z", end: "2030-11-10T11:59:59Z" },
      { start: "2031-11-08T12:00:00Z", end: "2031-11-09T11:59:59Z" },
      { start: "2032-11-13T12:00:00Z", end: "2032-11-14T11:59:59Z" },
      { start: "2033-11-12T12:00:00Z", end: "2033-11-13T11:59:59Z" },
      { start: "2034-11-11T12:00:00Z", end: "2034-11-12T11:59:59Z" },
      { start: "2035-11-10T12:00:00Z", end: "2035-11-11T11:59:59Z" },
      { start: "2036-11-08T12:00:00Z", end: "2036-11-09T11:59:59Z" },
      { start: "2037-11-14T12:00:00Z", end: "2037-11-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their district (OK/OM) or serial (DX)",
        placeholder: "ABA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "OK-OM-DX",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
