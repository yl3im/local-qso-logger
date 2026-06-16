/* Local QSO Logger — all logic runs client-side; state persists in localStorage. */
(() => {
  "use strict";

  const STORAGE_KEY = "local-qso:v1";

  const BANDS = ["160m","80m","60m","40m","30m","20m","17m","15m","12m","10m","6m","4m","2m","70cm","23cm"];
  const MODES = ["SSB","CW","FM","AM","FT8","FT4","RTTY","PSK31","JT65","DIGITALVOICE"];
  const DEFAULT_BAND = "20m";
  const DEFAULT_MODE = "SSB";

  // RST default per mode: voice modes use 2-digit (RS), CW/digital use 3-digit (RST).
  const MODE_RST_DEFAULT = {
    SSB: "59", FM: "59", AM: "59", DIGITALVOICE: "59",
    CW: "599", FT8: "599", FT4: "599", RTTY: "599", PSK31: "599", JT65: "599",
  };

  // Callsign prefix → ISO 3166-1 alpha-2 country. Longest match wins (2-letter checked before 1-letter).
  const CALL_PREFIX = {
    // Germany
    DA:"DE",DB:"DE",DC:"DE",DD:"DE",DF:"DE",DG:"DE",DH:"DE",DJ:"DE",DK:"DE",DL:"DE",DM:"DE",DO:"DE",DP:"DE",DQ:"DE",DR:"DE",
    // Baltics & Nordics
    YL:"LV", LY:"LT", ES:"EE",
    SM:"SE",SA:"SE",SI:"SE", LA:"NO",LB:"NO", OZ:"DK",OU:"DK",OV:"DK",
    OH:"FI",OF:"FI",OG:"FI",OI:"FI", TF:"IS",
    // Central / Eastern Europe
    SP:"PL",SQ:"PL",SO:"PL",SN:"PL",HF:"PL",
    OK:"CZ",OL:"CZ", OM:"SK", HA:"HU",HG:"HU",
    OE:"AT", HB:"CH", LX:"LU",
    ON:"BE",OO:"BE",OP:"BE",OQ:"BE",OR:"BE",OS:"BE",OT:"BE",
    PA:"NL",PB:"NL",PC:"NL",PD:"NL",PE:"NL",PF:"NL",PG:"NL",PH:"NL",PI:"NL",
    EA:"ES",EB:"ES",EC:"ES",ED:"ES",EE:"ES",EF:"ES",EG:"ES",EH:"ES",
    CT:"PT",CR:"PT",CQ:"PT",CS:"PT",
    SV:"GR",SX:"GR",SY:"GR",SZ:"GR",
    YO:"RO",YP:"RO",YQ:"RO",YR:"RO",
    LZ:"BG", YU:"RS",YT:"RS",
    "9A":"HR", S5:"SI", E7:"BA", Z3:"MK",
    UR:"UA",UT:"UA",UU:"UA",UV:"UA",UW:"UA",UX:"UA",UY:"UA",UZ:"UA",EM:"UA",EN:"UA",EO:"UA",
    UA:"RU",UB:"RU",UC:"RU",UD:"RU",UE:"RU",UF:"RU",UG:"RU",UH:"RU",UI:"RU",
    RA:"RU",RC:"RU",RD:"RU",RE:"RU",RF:"RU",RG:"RU",RJ:"RU",RK:"RU",RL:"RU",RM:"RU",
    RN:"RU",RO:"RU",RP:"RU",RQ:"RU",RT:"RU",RU:"RU",RV:"RU",RW:"RU",RX:"RU",RY:"RU",RZ:"RU",
    ER:"MD", EU:"BY",EV:"BY",EW:"BY",
    "4L":"GE", EK:"AM", "4J":"AZ","4K":"AZ",
    EZ:"TM", EY:"TJ", EX:"KG", UJ:"UZ",UK:"UZ",
    UN:"KZ",UO:"KZ",UP:"KZ",UQ:"KZ",
    // UK & Ireland
    "2E":"GB","2I":"GB","2M":"GB","2W":"GB","2D":"GB","2J":"GB","2U":"GB",
    GM:"GB",GW:"GB",GI:"GB",GD:"GB",GJ:"GB",GU:"GB",
    MM:"GB",MW:"GB",MI:"GB",MD:"GB",MJ:"GB",MU:"GB",
    EI:"IE",EJ:"IE",
    // Turkey & Middle East
    TA:"TR",TB:"TR",TC:"TR",
    "4X":"IL","4Z":"IL",
    A4:"OM", A6:"AE", A7:"QA", A9:"BH",
    // Americas
    AA:"US",AB:"US",AC:"US",AD:"US",AE:"US",AF:"US",AG:"US",AH:"US",AI:"US",AJ:"US",AK:"US",AL:"US",
    KA:"US",KB:"US",KC:"US",KD:"US",KE:"US",KF:"US",KG:"US",KI:"US",KJ:"US",KK:"US",
    KM:"US",KN:"US",KO:"US",KQ:"US",KR:"US",KS:"US",KT:"US",KU:"US",KV:"US",KX:"US",KY:"US",KZ:"US",
    VE:"CA",VA:"CA",VO:"CA",VY:"CA",CY:"CA",
    XE:"MX",XF:"MX","4A":"MX","4B":"MX","4C":"MX",
    PY:"BR",PP:"BR",PQ:"BR",PR:"BR",PS:"BR",PT:"BR",PU:"BR",PV:"BR",PW:"BR",PX:"BR",
    ZV:"BR",ZW:"BR",ZX:"BR",ZY:"BR",ZZ:"BR",
    LU:"AR",LO:"AR",LP:"AR",LQ:"AR",LR:"AR",LS:"AR",LT:"AR",LV:"AR",LW:"AR",
    CE:"CL",CA:"CL",CB:"CL",CC:"CL",CD:"CL",XQ:"CL",XR:"CL",
    // Asia-Pacific
    JA:"JP",JE:"JP",JF:"JP",JG:"JP",JH:"JP",JI:"JP",JJ:"JP",JK:"JP",JL:"JP",
    JM:"JP",JN:"JP",JO:"JP",JP:"JP",JQ:"JP",JR:"JP",JS:"JP",
    VK:"AU",AX:"AU",VH:"AU",VI:"AU",VJ:"AU",VL:"AU",VM:"AU",VN:"AU",VZ:"AU",
    ZL:"NZ",ZM:"NZ",
    BY:"CN",BG:"CN",BH:"CN",BI:"CN",BJ:"CN",BD:"CN",BR:"CN",BT:"CN",
    HL:"KR",DS:"KR","6K":"KR","6L":"KR","6M":"KR","6N":"KR",
    VR:"HK", "9V":"SG", "9M":"MY","9W":"MY",
    HS:"TH",E2:"TH",
    VU:"IN",AT:"IN",AU:"IN",AV:"IN",AW:"IN",
    // Africa
    SU:"EG", ZS:"ZA",ZR:"ZA",ZT:"ZA",ZU:"ZA",
    CN:"MA", "7X":"DZ", "3V":"TN",
    // Gaps surfaced by real-world ADIF imports
    US:"UA",                                                // Ukraine (was missing — UR/UT/UU/UV/UW/UX/UY/UZ present)
    YB:"ID",YC:"ID",YD:"ID",YE:"ID",YF:"ID",YG:"ID",YH:"ID",// Indonesia
    YI:"IQ",                                                // Iraq (note: distinct from YB-YH Indonesia)
    DN:"DE",                                                // Germany — novice / special
    "5B":"CY",                                              // Cyprus
    TM:"FR", TK:"FR",                                       // France special-event / Corsica
    "3Z":"PL",                                              // Poland special
    HZ:"SA",                                                // Saudi Arabia
    YM:"TR",                                                // Turkey special
    "9H":"MT",                                              // Malta
    "9K":"KW",                                              // Kuwait
    HE:"CH",                                                // Switzerland (HB also CH)
    CX:"UY",                                                // Uruguay
    DU:"PH",                                                // Philippines
    YY:"VE",                                                // Venezuela
    AO:"ES",                                                // Spain special
    BA:"CN",                                                // China
    // A handful of common DXCC entries not yet covered
    HC:"EC", HK:"CO", HJ:"CO", HI:"DO", HP:"PA", HR:"HN", HQ:"HN", TI:"CR",
    CO:"CU", CM:"CU", "4S":"LK", AP:"PK", BV:"TW", BX:"TW",
    XW:"LA", XU:"KH", XV:"VN", "3W":"VN",
    // Single-letter (must NOT collide with 2-letter blocks above)
    F:"FR", I:"IT", G:"GB", M:"GB", K:"US", W:"US", N:"US",
    R:"RU",                                                 // R0-R9 Russian calls (RA-RZ matched by 2-letter above)
  };

  function callsignCountry(call) {
    if (!call) return null;
    let c = String(call).toUpperCase().trim();
    // Strip portable / maritime / aeronautical / lighthouse / QRP / area-change suffixes.
    c = c.replace(/\/(P|M|A|MM|AM|QRP|QRPP|LH|\d)$/i, "");
    // For prefix-portable calls like "9A/M0NCG" or "VK4/G3WGV", the operating
    // location prefix is the shorter side. Pick the side that yields a country
    // lookup; if both do, prefer the shorter (more prefix-like) one.
    if (c.includes("/")) {
      const parts = c.split("/").filter(Boolean);
      let best = null;
      for (const p of parts) {
        const country = CALL_PREFIX[p.slice(0, 2)] || CALL_PREFIX[p.slice(0, 1)];
        if (country && (!best || p.length < best.len)) best = { country, len: p.length };
      }
      if (best) return best.country;
      c = parts[0] || c;
    }
    return CALL_PREFIX[c.slice(0, 2)] || CALL_PREFIX[c.slice(0, 1)] || null;
  }

  function isoToFlag(iso) {
    if (!iso || iso.length !== 2) return "";
    const A = 0x41, BASE = 0x1F1E6;
    return String.fromCodePoint(BASE + iso.charCodeAt(0) - A, BASE + iso.charCodeAt(1) - A);
  }

  const DATE_FMT = new Intl.DateTimeFormat(undefined);
  function formatDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    if (!y || !m || !d) return iso;
    return DATE_FMT.format(new Date(y, m - 1, d));
  }

  /** @typedef {{id:string,call:string,date:string,time:string,band:string,mode:string,rstSent:string,rstRcvd:string}} Qso */
  /** @typedef {{id:string,name:string,qsos:Qso[]}} Log */

  /** @type {{logs: Log[], selectedId: string|null, theme: "day"|"night"}} */
  let state = load();
  if (state.theme !== "day" && state.theme !== "night") state.theme = "day";

  // Ephemeral (not persisted): id of the QSO currently being edited, or null.
  let editingId = null;

  // ---------- Persistence ----------
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) { /* fall through to default */ }
    return { logs: [], selectedId: null };
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  const uid = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  const selectedLog = () =>
    state.logs.find((l) => l.id === state.selectedId) || null;

  // ---------- DOM refs ----------
  const $ = (id) => document.getElementById(id);
  const logForm = $("log-form");
  const logList = $("log-list");
  const noLog = $("no-log");
  const logDetail = $("log-detail");
  const detailName = $("detail-name");
  const renameInput = $("rename-input");
  const qsoForm = $("qso-form");
  const qsoTbody = $("qso-tbody");
  const qsoEmpty = $("qso-empty");
  const themeToggle = $("theme-toggle");
  const dupIndicator = $("dup-indicator");

  // ---------- Theme ----------
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    themeToggle.textContent = state.theme === "day" ? "Night" : "Day";
  }

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "day" ? "night" : "day";
    applyTheme();
    save();
  });

  // ---------- Select population ----------
  function fillSelect(sel, values, defaultVal) {
    sel.innerHTML = "";
    for (const v of values) {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      if (v === defaultVal) opt.selected = true;
      sel.appendChild(opt);
    }
  }
  fillSelect($("qso-band"), BANDS, DEFAULT_BAND);
  fillSelect($("qso-mode"), MODES, DEFAULT_MODE);

  // ---------- Duplicate callsign indicator ----------
  function updateDupIndicator() {
    const log = selectedLog();
    const raw = $("qso-call").value.trim().toUpperCase();
    const isDup = !!log && !editingId && raw.length > 0 && log.qsos.some((q) => q.call === raw);
    dupIndicator.hidden = !isDup;
  }
  function bindUppercase(el) {
    el.addEventListener("input", () => {
      const upper = el.value.toUpperCase();
      if (upper === el.value) return;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      el.value = upper;
      if (start !== null) el.setSelectionRange(start, end);
    });
  }
  bindUppercase($("qso-call"));
  $("qso-call").addEventListener("input", updateDupIndicator);

  // ---------- Edit QSO ----------
  function startEdit(q) {
    editingId = q.id;
    qsoForm.classList.add("is-editing");
    $("qso-call").value = q.call || "";
    $("qso-date").value = q.date || "";
    $("qso-time").value = (q.time || "").slice(0, 5);
    $("qso-band").value = q.band || DEFAULT_BAND;
    $("qso-mode").value = q.mode || DEFAULT_MODE;
    $("qso-rst-sent").value = q.rstSent || "";
    $("qso-rst-rcvd").value = q.rstRcvd || "";
    $("qso-submit").textContent = "Update QSO";
    $("qso-cancel").hidden = false;
    render();
    $("qso-call").focus();
  }

  function cancelEdit(opts) {
    editingId = null;
    qsoForm.classList.remove("is-editing");
    $("qso-call").value = "";
    $("qso-date").value = "";
    $("qso-time").value = "";
    $("qso-rst-sent").value = "";
    $("qso-rst-rcvd").value = "";
    $("qso-submit").textContent = "Log QSO";
    $("qso-cancel").hidden = true;
    if (!(opts && opts.skipRender)) render();
    updateDupIndicator();
  }

  $("qso-cancel").addEventListener("click", () => cancelEdit());

  // ---------- Rename logbook (inline) ----------
  let renameCancelled = false;
  function startRename() {
    const log = selectedLog();
    if (!log) return;
    renameCancelled = false;
    renameInput.value = log.name;
    detailName.hidden = true;
    renameInput.hidden = false;
    renameInput.focus();
    renameInput.select();
  }
  function commitRename() {
    if (renameCancelled) { renameCancelled = false; return; }
    const log = selectedLog();
    if (log) {
      const next = renameInput.value.trim();
      if (next) log.name = next;
    }
    detailName.hidden = false;
    renameInput.hidden = true;
    render();
  }
  function cancelRename() {
    renameCancelled = true;
    detailName.hidden = false;
    renameInput.hidden = true;
  }
  $("rename-btn").addEventListener("click", startRename);
  renameInput.addEventListener("blur", commitRename);
  renameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); renameInput.blur(); }
    else if (e.key === "Escape") { e.preventDefault(); cancelRename(); renameInput.blur(); }
  });

  // ---------- Rendering ----------
  function render() {
    renderLogList();
    renderDetail();
    save();
  }

  function renderLogList() {
    logList.innerHTML = "";
    for (const log of state.logs) {
      const li = document.createElement("li");
      if (log.id === state.selectedId) li.classList.add("active");
      li.innerHTML = `
        <div class="log-title"></div>
        <span class="count">${log.qsos.length} QSO${log.qsos.length === 1 ? "" : "s"}</span>`;
      li.querySelector(".log-title").textContent = log.name;
      li.addEventListener("click", () => {
        if (log.id !== state.selectedId && editingId) cancelEdit({ skipRender: true });
        state.selectedId = log.id;
        render();
      });
      logList.appendChild(li);
    }
  }

  function renderDetail() {
    const log = selectedLog();
    if (!log) {
      noLog.hidden = false;
      logDetail.hidden = true;
      return;
    }
    noLog.hidden = true;
    logDetail.hidden = false;

    detailName.textContent = log.name;

    qsoTbody.innerHTML = "";
    // Newest first.
    const rows = [...log.qsos].reverse();
    for (const q of rows) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="row-actions">
          <button class="row-edit btn-touch" type="button" aria-label="Edit QSO">Edit</button>
          <button class="row-del btn-touch" type="button" aria-label="Delete QSO">Delete</button>
        </td>
        <td class="flag"></td>
        <td></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>
        <td class="mono"></td>`;
      if (q.id === editingId) tr.classList.add("editing");
      const cells = tr.querySelectorAll("td");
      const iso = callsignCountry(q.call);
      cells[1].textContent = iso ? isoToFlag(iso) : "";
      cells[1].title = iso || "";
      cells[2].textContent = q.call;
      cells[3].textContent = formatDate(q.date);
      cells[4].textContent = (q.time || "").slice(0, 5);
      cells[5].textContent = q.band || "—";
      cells[6].textContent = q.mode || "—";
      cells[7].textContent = q.rstSent || "—";
      cells[8].textContent = q.rstRcvd || "—";
      tr.querySelector(".row-edit").addEventListener("click", () => startEdit(q));
      tr.querySelector(".row-del").addEventListener("click", () => {
        if (!confirm(`Delete QSO with ${q.call || "(no callsign)"}?`)) return;
        log.qsos = log.qsos.filter((x) => x.id !== q.id);
        if (editingId === q.id) cancelEdit({ skipRender: true });
        render();
      });
      qsoTbody.appendChild(tr);
    }
    qsoEmpty.hidden = log.qsos.length > 0;
    updateDupIndicator();
  }

  // ---------- Date/time helpers (UTC, ADIF convention) ----------
  function nowUtcParts() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return {
      date: `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`,
      time: `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`,
    };
  }

  // ---------- ADIF export ----------
  // ADIF field: <NAME:byteLength>VALUE
  function adifField(name, value) {
    if (value == null || value === "") return "";
    const v = String(value);
    const len = new TextEncoder().encode(v).length;
    return `<${name}:${len}>${v} `;
  }

  function buildAdif(log) {
    const lines = [];
    lines.push(`ADIF export from Local QSO Logger`);
    lines.push(adifField("ADIF_VER", "3.1.4").trim());
    lines.push(adifField("PROGRAMID", "local-qso").trim());
    lines.push("<EOH>");
    lines.push("");

    for (const q of log.qsos) {
      const rec =
        adifField("CALL", q.call) +
        adifField("QSO_DATE", q.date.replace(/-/g, "")) +
        adifField("TIME_ON", q.time.replace(/:/g, "")) +
        adifField("BAND", q.band) +
        adifField("MODE", q.mode) +
        adifField("RST_SENT", q.rstSent) +
        adifField("RST_RCVD", q.rstRcvd) +
        "<EOR>";
      lines.push(rec);
    }
    return lines.join("\n") + "\n";
  }

  // ---------- ADIF import ----------
  // Parses a single record chunk into { FIELDNAME: value, ... } (uppercase keys).
  function parseAdifRecord(chunk) {
    const fields = {};
    const fieldRe = /<([A-Za-z0-9_]+):(\d+)(?::[A-Za-z])?>/g;
    let m;
    while ((m = fieldRe.exec(chunk)) !== null) {
      const name = m[1].toUpperCase();
      const len = parseInt(m[2], 10);
      const start = m.index + m[0].length;
      fields[name] = chunk.slice(start, start + len);
    }
    return fields;
  }

  function parseAdif(text) {
    const eoh = text.match(/<EOH>/i);
    const body = eoh ? text.slice(eoh.index + eoh[0].length) : text;
    const records = [];
    const eorRe = /<EOR>/gi;
    let last = 0, m;
    while ((m = eorRe.exec(body)) !== null) {
      const rec = parseAdifRecord(body.slice(last, m.index));
      if (Object.keys(rec).length) records.push(rec);
      last = m.index + m[0].length;
    }
    return records;
  }

  function adifDateToIso(d) {
    if (!d || d.length < 8) return "";
    return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
  }

  function adifTimeToHms(t) {
    if (!t) return "00:00:00";
    const s = String(t).padEnd(6, "0").slice(0, 6);
    return `${s.slice(0, 2)}:${s.slice(2, 4)}:${s.slice(4, 6)}`;
  }

  function importAdif(text) {
    const records = parseAdif(text);
    if (!records.length) {
      alert("No QSO records found in this ADIF file.");
      return;
    }
    const { date, time } = nowUtcParts();
    const log = {
      id: uid(),
      name: `Imported ${date} ${time.slice(0, 5)} UTC`,
      qsos: records.map((r) => ({
        id: uid(),
        call: (r.CALL || "").toUpperCase(),
        date: adifDateToIso(r.QSO_DATE || ""),
        time: adifTimeToHms(r.TIME_ON || ""),
        band: (r.BAND || "").toLowerCase(),
        mode: (r.MODE || "").toUpperCase(),
        rstSent: r.RST_SENT || "",
        rstRcvd: r.RST_RCVD || "",
      })),
    };
    state.logs.push(log);
    state.selectedId = log.id;
    render();
    $("qso-call").focus();
  }

  function exportLog(log) {
    const blob = new Blob([buildAdif(log)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safe = log.name.replace(/[^a-z0-9_-]+/gi, "_").replace(/^_+|_+$/g, "");
    a.href = url;
    a.download = `${safe || "log"}.adi`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ---------- Event handlers ----------
  logForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const typedName = $("log-name").value.trim();
    let name = typedName;
    if (!name) {
      const { date, time } = nowUtcParts();
      name = `Log ${date} ${time.slice(0, 5)} UTC`;
    }
    const log = { id: uid(), name, qsos: [] };
    state.logs.push(log);
    state.selectedId = log.id;
    logForm.reset();
    render();
    $("qso-call").focus();
  });

  qsoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const log = selectedLog();
    if (!log) return;
    const band = $("qso-band").value;
    const mode = $("qso-mode").value;
    const defaultRst = MODE_RST_DEFAULT[mode] || "59";

    let date, time;
    if (editingId) {
      // Edit mode: use whatever the user typed (no seconds in the input).
      date = $("qso-date").value;
      const t = $("qso-time").value;
      time = t.length === 5 ? t + ":00" : t;
    } else {
      // New QSO: auto-stamp current UTC at the moment of submit.
      const now = nowUtcParts();
      date = now.date;
      time = now.time;
    }

    const fields = {
      call: $("qso-call").value.trim().toUpperCase(),
      date,
      time,
      band,
      mode,
      rstSent: $("qso-rst-sent").value.trim() || defaultRst,
      rstRcvd: $("qso-rst-rcvd").value.trim() || defaultRst,
    };
    if (editingId) {
      const q = log.qsos.find((x) => x.id === editingId);
      if (q) Object.assign(q, fields);
      cancelEdit({ skipRender: true });
    } else {
      log.qsos.push({ id: uid(), ...fields });
      $("qso-call").value = "";
      $("qso-rst-sent").value = "";
      $("qso-rst-rcvd").value = "";
    }
    // Band/mode stay sticky across QSOs in the same session.
    $("qso-band").value = band;
    $("qso-mode").value = mode;
    $("qso-call").focus();
    render();
    updateDupIndicator();
  });

  $("export-btn").addEventListener("click", () => {
    const log = selectedLog();
    if (log) exportLog(log);
  });

  $("import-btn").addEventListener("click", () => $("import-input").click());
  $("import-input").addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      importAdif(text);
    } catch (err) {
      alert("Failed to import file: " + (err && err.message ? err.message : err));
    } finally {
      e.target.value = "";
    }
  });

  $("delete-log-btn").addEventListener("click", () => {
    const log = selectedLog();
    if (!log) return;
    if (!confirm(`Delete logbook "${log.name}" and its ${log.qsos.length} QSO(s)?`)) return;
    if (editingId) cancelEdit({ skipRender: true });
    state.logs = state.logs.filter((l) => l.id !== log.id);
    state.selectedId = state.logs.length ? state.logs[0].id : null;
    ensureAtLeastOneLog();
    render();
  });

  // ---------- Init ----------
  function ensureAtLeastOneLog() {
    if (state.logs.length > 0) return;
    const { date, time } = nowUtcParts();
    const log = { id: uid(), name: `Log ${date} ${time.slice(0, 5)} UTC`, qsos: [] };
    state.logs.push(log);
    state.selectedId = log.id;
  }

  applyTheme();
  ensureAtLeastOneLog();
  render();

  // ---------- PWA service worker ----------
  // Skipped on file:// (browsers refuse to register there) so the app still
  // opens cleanly when launched directly from disk.
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
})();
