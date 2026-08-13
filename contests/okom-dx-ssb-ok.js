/* OK/OM DX Contest, SSB — OK/OM-station perspective.
 * https://www.okomdx.crk.cz/en/
 * Exchange (OK/OM side): send RST + district; receive RST + district
 * (OK/OM) or RST + serial (DX). Held the second full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-ssb-ok"] = {
    id: "okom-dx-ssb-ok",
    name: "OK/OM DX Contest, SSB (OK/OM side)",
    shortName: "OK/OM DX SSB (OK/OM)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-02-14T12:00:00Z", end: "2026-02-15T11:59:59Z" },
      { start: "2027-02-13T12:00:00Z", end: "2027-02-14T11:59:59Z" },
      { start: "2028-02-12T12:00:00Z", end: "2028-02-13T11:59:59Z" },
      { start: "2029-02-10T12:00:00Z", end: "2029-02-11T11:59:59Z" },
      { start: "2030-02-09T12:00:00Z", end: "2030-02-10T11:59:59Z" },
      { start: "2031-02-08T12:00:00Z", end: "2031-02-09T11:59:59Z" },
      { start: "2032-02-14T12:00:00Z", end: "2032-02-15T11:59:59Z" },
      { start: "2033-02-12T12:00:00Z", end: "2033-02-13T11:59:59Z" },
      { start: "2034-02-11T12:00:00Z", end: "2034-02-12T11:59:59Z" },
      { start: "2035-02-10T12:00:00Z", end: "2035-02-11T11:59:59Z" },
      { start: "2036-02-09T12:00:00Z", end: "2036-02-10T11:59:59Z" },
      { start: "2037-02-14T12:00:00Z", end: "2037-02-15T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_district", type: "text", label: "My district",
        placeholder: "ABA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DISTRICT",
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
      sentTemplate: ["rst_sent", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
