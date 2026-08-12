/* ARRL 160-Meter Contest — DX-station perspective.
 * https://www.arrl.org/160-meter
 * Exchange (DX side): send RST only; receive RST + ARRL/RAC section from
 * W/VE stations. CW only. Single-band, 160m. Runs the first full weekend
 * of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-160m-dx"] = {
    id: "arrl-160m-dx",
    name: "ARRL 160-Meter Contest (DX side)",
    shortName: "ARRL 160m (DX)",
    url: "https://www.arrl.org/160-meter",
    windows: [
      { start: "2025-12-05T22:00:00Z", end: "2025-12-07T16:00:00Z" },
      { start: "2026-12-04T22:00:00Z", end: "2026-12-06T16:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["CW"],
    exchange: [
      // DX stations send only RST — no additional field. But we still capture
      // the received W/VE section as a required field.
      {
        id: "rcvd_section", type: "text", label: "Their ARRL/RAC section",
        placeholder: "EMA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "ARRL-160",
      sentTemplate: ["rst_sent"],
      rcvdTemplate: ["rst_rcvd", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
