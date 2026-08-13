/* ARRL Field Day.
 * https://www.arrl.org/field-day
 * Exchange: Class (e.g. "1A", "3F") + ARRL/RAC Section (e.g. "PAC", "ONE").
 * Both stations send the same exchange format; both receive it too.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-fd"] = {
    id: "arrl-fd",
    name: "ARRL Field Day",
    shortName: "ARRL FD",
    url: "https://www.arrl.org/field-day",
    windows: [
      { start: "2026-06-27T18:00:00Z", end: "2026-06-28T20:59:59Z" },
      { start: "2027-06-26T18:00:00Z", end: "2027-06-27T20:59:59Z" },
      { start: "2028-06-24T18:00:00Z", end: "2028-06-25T20:59:59Z" },
      { start: "2029-06-23T18:00:00Z", end: "2029-06-24T20:59:59Z" },
      { start: "2030-06-22T18:00:00Z", end: "2030-06-23T20:59:59Z" },
      { start: "2031-06-28T18:00:00Z", end: "2031-06-29T20:59:59Z" },
      { start: "2032-06-26T18:00:00Z", end: "2032-06-27T20:59:59Z" },
      { start: "2033-06-25T18:00:00Z", end: "2033-06-26T20:59:59Z" },
      { start: "2034-06-24T18:00:00Z", end: "2034-06-25T20:59:59Z" },
      { start: "2035-06-23T18:00:00Z", end: "2035-06-24T20:59:59Z" },
      { start: "2036-06-28T18:00:00Z", end: "2036-06-29T20:59:59Z" },
      { start: "2037-06-27T18:00:00Z", end: "2037-06-28T20:59:59Z" },
    ],
    // Field Day allows all HF/VHF/UHF bands except WARC (30m/17m/12m).
    bands: ["160m", "80m", "40m", "20m", "15m", "10m", "6m", "2m", "1.25m", "70cm"],
    modes: ["SSB", "CW", "FM"],
    exchange: [
      {
        id: "sent_class", type: "text", label: "My class",
        placeholder: "1A", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_CLASS",
      },
      {
        id: "sent_section", type: "text", label: "My section",
        placeholder: "EMA", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SECTION",
      },
      {
        id: "rcvd_class", type: "text", label: "Their class",
        placeholder: "1A", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_CLASS",
      },
      {
        id: "rcvd_section", type: "text", label: "Their section",
        placeholder: "EMA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-FD",
      sentTemplate: ["sent_class", "sent_section"],
      rcvdTemplate: ["rcvd_class", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-STATION", "CATEGORY-POWER",
        "CATEGORY-TRANSMITTER", "CLUB", "NAME",
        "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
