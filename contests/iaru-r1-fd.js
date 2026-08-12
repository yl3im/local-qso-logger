/* IARU Region 1 Field Day.
 * https://www.iaru-r1.org/ (individual society URLs vary)
 * Exchange: RST + serial number (0001, 0002, …). Same format for the
 * CW leg (June) and SSB leg (September); one config covers both.
 * Sent serial auto-increments; the operator types the received serial.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["iaru-r1-fd"] = {
    id: "iaru-r1-fd",
    name: "IARU Region 1 Field Day (SSB / CW)",
    shortName: "IARU R1 FD",
    url: "https://www.iaru-r1.org/",
    windows: [
      // CW leg — first full weekend of June.
      { start: "2026-06-06T13:00:00Z", end: "2026-06-07T12:59:59Z" },
      // SSB leg — first full weekend of September.
      { start: "2026-09-05T13:00:00Z", end: "2026-09-06T12:59:59Z" },
      { start: "2027-06-05T13:00:00Z", end: "2027-06-06T12:59:59Z" },
      { start: "2027-09-04T13:00:00Z", end: "2027-09-05T12:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB", "CW"],
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
      // Not all IARU R1 societies use the same Cabrillo tag; the field-day
      // committees typically accept a generic marker in the CONTEST: line.
      contest: "IARU-R1-FIELD-DAY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-BAND", "CATEGORY-POWER",
        "CATEGORY-MODE", "CATEGORY-TRANSMITTER",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
