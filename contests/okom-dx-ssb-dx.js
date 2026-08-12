/* OK/OM DX Contest, SSB — DX-station perspective.
 * https://www.okomdx.crk.cz/en/
 * Exchange (DX side): send RST + serial; receive RST + 3-char OK/OM
 * district (OK/OM) or RST + serial (DX). Held the second full weekend
 * of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["okom-dx-ssb-dx"] = {
    id: "okom-dx-ssb-dx",
    name: "OK/OM DX Contest, SSB (DX side)",
    shortName: "OK/OM DX SSB (DX)",
    url: "https://www.okomdx.crk.cz/en/",
    windows: [
      { start: "2026-02-14T12:00:00Z", end: "2026-02-15T11:59:59Z" },
      { start: "2027-02-13T12:00:00Z", end: "2027-02-14T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
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
