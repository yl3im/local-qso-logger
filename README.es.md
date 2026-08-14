# Local QSO Logger

## Leer en tu idioma

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 Español · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un registrador de QSO de radioafición que respeta la privacidad y funciona completamente en tu navegador. Sin cuenta, sin servidor, sin rastreo, sin analíticas — tus cuadernos de registro viven únicamente en el `localStorage` de tu navegador y nunca abandonan tu dispositivo.

Por [YL3IM](https://www.qrz.com/db/YL3IM). Sitio web del proyecto: [qso.lv](https://qso.lv).

![Local QSO Logger ejecutándose en iPad](media/iPad.png)

## Contenido

- [Leer en tu idioma](#leer-en-tu-idioma)
- [Funciones](#funciones)
- [Primeros pasos](#primeros-pasos)
- [Instalar como PWA en móvil](#instalar-como-pwa-en-móvil)
  - [iOS (solo Safari)](#ios-solo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Cuadernos de registro](#cuadernos-de-registro)
- [QSOs](#qsos)
- [Concursos](#concursos)
- [Importación y exportación](#importación-y-exportación)
- [Privacidad y datos](#privacidad-y-datos)
- [Idioma de la interfaz](#idioma-de-la-interfaz)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Funciones

- Múltiples cuadernos de registro; cada uno con su propia lista de QSOs.
- Los **registros de concurso** son opcionales — elige de un catálogo de 68 concursos integrados al crear un cuaderno. El formulario QSO obtiene un bloque *Intercambio de concurso* específico del concurso, la detección de duplicados respeta la regla del concurso, y *Exportar .cbr* genera un archivo de envío Cabrillo v3 junto a la exportación ADIF habitual.
- Acciones del cuaderno: crear, renombrar, eliminar, importar un archivo de log (ADIF o Cabrillo — formato detectado automáticamente), exportar a ADIF (`.adi`), además de *Exportar .cbr* (Cabrillo v3) para cuadernos de concurso. Reimportar un archivo `.cbr` previamente exportado por la app lo restaura como el mismo cuaderno de concurso.
- Formulario QSO agrupado en tres bloques: **Datos de la estación** (indicativo de la estación, indicativo del operador, cuadrícula propia) que permanecen fijos entre QSOs; **Modo de operación** (modo de propagación, satélite, modo, modo sat, banda, banda RX) con campos de satélite que solo aparecen cuando el modo de propagación es *Satélite*; y **Datos QSO** (indicativo contactado, cuadrícula contactada, fecha/hora UTC al editar, comentario, RST enviado, RST recibido).
- Taxonomía completa ADIF `MODE` → `SUBMODE` en el desplegable de modos — elige un modo padre (`SSB`, `MFSK`, …) o ve directamente a un submodo específico (`USB`, `FT4`, …); la aplicación almacena ambos campos según ADIF y la tabla muestra el submodo específico cuando lo hay.
- Enumeración completa de modos de propagación ADIF (SAT, RPT, EME, ES, MS, Aurora, etc.) como desplegable.
- Catálogo completo de satélites AMSAT (~110 satélites) y un desplegable **Modo sat** de dos niveles: códigos preferidos de dos letras uplink/downlink en la parte superior (LU, LV, SX, UU, UV, VA, VU, VV) y las designaciones heredadas de una letra (A/B/J/K/L/R/S/T/U/V/W/X) agrupadas como *obsoletas* abajo. Elegir un modo sat ajusta automáticamente `BAND` (uplink) y `RX band` (downlink).
- Editar y eliminar cualquier QSO (con confirmación al eliminar).
- Valores predeterminados sensatos: fecha/hora UTC pre-rellenada a *ahora*, RST predeterminado según modo (59 para modos de voz, 599 para CW/digital), datos de estación + banda + modo + modo de propagación fijos entre QSOs consecutivos (solo los campos por contacto — indicativo, su cuadrícula, comentario, RST — se borran tras cada *Registrar QSO*).
- Indicador en tiempo real de indicativo duplicado (informativo — los duplicados están permitidos).
- Columna de bandera del país derivada del prefijo del indicativo (cubre ≥99 % de los prefijos habituales de radioafición, incluidas llamadas portátiles como `9A/M0NCG`).
- Autodetección con un toque de **Mi cuadrícula**: un botón 🌐 junto al campo pide a tu navegador tus coordenadas actuales y rellena la cuadrícula Maidenhead de 6 caracteres (usa la API de geolocalización del navegador — requiere permiso del usuario).
- Visualización de fecha adaptada a la localización en la tabla QSO; el almacenamiento ISO y la salida ADIF permanecen sin cambios.
- Interfaz disponible en **28 idiomas** (inglés más 22 en escritura latina, 5 en cirílico y griego); selector con emoji de bandera en la cabecera.
- Temas de día / noche (día es el predeterminado; el conmutador está en la cabecera).
- Diseño adaptable para móviles con botones de tamaño táctil.
- Funciona completamente sin conexión — sin solicitudes de red en ningún momento.
- Instalable como PWA (Añadir a pantalla de inicio / Instalar app) cuando se aloja sobre HTTPS.

## Primeros pasos

Simplemente abre `index.html` en un navegador moderno. Sin paso de compilación, sin instalación, sin servidor.

Si quieres alojarlo, copia los archivos estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, el único paquete `i18n.js` que contiene los 28 diccionarios de idioma, y el único paquete `contests.js` que contiene las 68 configuraciones de concursos) en cualquier host estático (GitHub Pages, Netlify, tu propio servidor web). También funciona sobre `file://` — el registro del service worker se omite automáticamente en el protocolo `file:` para que abrir `index.html` directamente desde el disco funcione sin problemas.

Cuando se aloja sobre HTTPS, la app se vuelve instalable como PWA (menú *Instalar app* / *Añadir a pantalla de inicio* del navegador) y funciona sin conexión tras la primera visita gracias a un service worker cache-first que pre-cachea todos los archivos estáticos (UI + todas las traducciones).

Se crea automáticamente un cuaderno predeterminado en la primera visita, para que puedas empezar a registrar de inmediato.

## Instalar como PWA en móvil

Cuando la app se aloja sobre HTTPS (p. ej. GitHub Pages), puedes instalarla en la pantalla de inicio de tu teléfono para que funcione a pantalla completa sin la barra del navegador. Tras el primer inicio, el service worker cachea todo, por lo que los inicios posteriores funcionan completamente sin conexión.

### iOS (solo Safari)

En iOS, solo Safari puede instalar PWAs — los navegadores de terceros no pueden.

1. Abre el sitio en **Safari**.
2. Pulsa el botón **Compartir**.
3. Elige **Añadir a pantalla de inicio** y luego **Añadir**.

Tutorial:

![Tutorial de instalación en iOS](media/iOS_add_to_home_screen.gif)

Fuente de mayor calidad: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Abre el sitio en tu navegador. Puede aparecer automáticamente un aviso para *Instalar app*.
2. Si no, abre el **menú ⋮** → **Instalar app** (o **Añadir a pantalla de inicio** en versiones antiguas).

Tutorial:

![Tutorial de instalación en Android](media/Android_add_to_home_screen.gif)

Fuente de mayor calidad: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Cuadernos de registro

- **Crear:** escribe un nombre en *Nombre del log* y envía. Si dejas el nombre en blanco, se usa `Log YYYY-MM-DD HH:MM UTC` por defecto.
- **Cambiar:** haz clic en cualquier cuaderno en la barra lateral.
- **Renombrar:** haz clic en *Renombrar* en la cabecera del cuaderno. Pulsa Enter para guardar, Escape para cancelar.
- **Eliminar:** haz clic en *Eliminar log*. Se pedirá confirmación. Si eliminas el último cuaderno, se crea uno nuevo automáticamente.

## QSOs

- Rellena el formulario y pulsa **Registrar QSO**.
- El formulario está organizado en tres bloques:
  - **Datos de la estación** — *Indicativo de la estación* (tu indicativo transmisor, ADIF `STATION_CALLSIGN`), *Operador* (el indicativo del operador individual — distinto del *indicativo de la estación* cuando hay un operador invitado al micrófono de una estación de club; ADIF `OPERATOR`) y *Mi cuadrícula* (ADIF `MY_GRIDSQUARE`) con un botón 🌐 que rellena la cuadrícula a partir de la ubicación actual de tu navegador (API de geolocalización — el navegador pedirá permiso la primera vez). Estos permanecen fijos entre QSOs de la misma sesión — fíjalos una vez y se transfieren.
  - **Modo de operación** — *Modo de prop.*, *Modo*, *Banda*, más los campos exclusivos de satélite *Satélite* / *Modo sat* / *Banda RX* cuando el modo de propagación es *Satélite*. La banda, el modo y el modo de propagación son fijos igual que los datos de la estación.
  - **Datos QSO** — campos por contacto: *Indicativo*, *Cuadrícula* (Maidenhead de la otra estación), *Comentario* (ADIF `COMMENT`), *RST enviado*, *RST recibido*. Al editar un QSO existente, *Fecha (UTC)* y *Hora (UTC)* también aparecen en este bloque. Estos campos se borran tras cada *Registrar QSO*.
- Todos los indicativos (contactado, estación, operador) se ponen en mayúsculas automáticamente al escribir; ambos campos de cuadrícula hacen lo mismo.
- La fecha y hora se pre-rellenan a *ahora* en UTC al enviar; al editar puedes escribir cualquier valor.
- RST enviado / RST recibido, si se dejan en blanco, son **59** por defecto para modos de voz (SSB/FM/DIGITALVOICE) y **599** para CW y modos digitales (CW/FT8/FT4/RTTY/PSK31/JT65). El valor predeterminado sigue al MODE padre, por lo que elegir un submodo específico como *USB* o *FT4* sigue dando el valor predeterminado correcto.
- Aparece un chip *Duplicado en este log* bajo el campo de indicativo si el indicativo ya existe en el cuaderno actual. Los duplicados *no* están bloqueados.
- **Modo de propagación** — desplegable opcional de modos de propagación ADIF (SAT, RPT, EME, F2, Es, MS, LOS, etc.). Déjalo vacío para QSOs HF terrestres normales.
- **QSOs de satélite** — seleccionar el modo de propagación *Satélite* revela tres campos exclusivos de satélite: **Satélite** (desplegable de ~110 satélites registrados en AMSAT), **Modo sat** (designaciones de letras AMSAT, agrupadas como códigos *modernos* de dos letras uplink/downlink arriba y códigos *obsoletos* de una letra abajo) y **Banda RX** (banda de downlink). Satélite, modo sat y banda RX son obligatorios — el navegador rechazará el envío sin ellos. Al elegir un **Modo sat** se rellena automáticamente la **Banda** principal con la banda de uplink y **Banda RX** con la banda de downlink (p. ej. modo J → uplink 2m, downlink 70cm). Volver a *satélite* desde otro modo de propagación reinicia el modo sat para que elijas uno nuevo. Los QSOs no satelitales nunca llevan campos de satélite; cambiar un QSO existente de satélite a otro modo de propagación los elimina correctamente. **Cuadrícula** y **Mi cuadrícula** son campos generales (también útiles para concursos de cuadrícula VHF/UHF) y permanecen visibles para todos los QSOs.
- **Editar un QSO** con el botón *Editar* en la fila. El formulario cambia al modo *Actualizar QSO*, la fila se resalta y aparece un botón *Cancelar*. Cambiar de cuaderno o eliminar el log cancela la edición automáticamente.
- **Eliminar un QSO** con el botón *Eliminar* en la fila (pide confirmación).

## Concursos

Un cuaderno puede ser opcionalmente un **registro de concurso** — elige un concurso del desplegable *Concurso* en el formulario de creación de cuaderno. Desplegable vacío = cuaderno normal (predeterminado, comportamiento existente sin cambios).

Los registros de concurso obtienen:

- **Bloque de intercambio de concurso** en el formulario QSO, renderizado dinámicamente a partir del esquema del concurso seleccionado. Los tipos de campo son `text`, `number` y `serial` (autoincremental, solo lectura). Los campos marcados como *sticky* (tu propia zona / condado / distrito / potencia / edad / …) se pre-rellenan con el valor del QSO anterior; los campos por QSO (su zona, su número de serie, …) se borran tras cada *Registrar QSO*.
- **Insignia de concurso** junto al nombre del log en la cabecera de detalle.
- **Detección de duplicados** que respeta la `duplicateRule` del concurso (`per-band-mode`, `per-band`, `per-day` u `off`). El chip sigue siendo solo informativo — nunca bloquea el envío.
- **Chip de advertencia** cuando el UTC actual queda fuera de cualquiera de las ventanas de fecha declaradas por el concurso (12 años precargados, 2026–2037), o cuando la banda / modo seleccionados no están en el conjunto legal del concurso. Nunca bloquea.
- **Panel de información de envío** en la cabecera de detalle: un formulario en línea para los campos de cabecera Cabrillo que declara el concurso (categoría, potencia, nombre, club, dirección, soapbox, …). Los valores se guardan en el cuaderno, no por QSO.
- **Botón Exportar .cbr** en la cabecera de detalle, junto a *Exportar .adi*. Emite un archivo Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` pre-rellenados a partir de los datos de estación del primer QSO, el resto desde el panel de información de envío, y luego una línea `QSO:` por contacto en orden cronológico usando las columnas `sentTemplate` / `rcvdTemplate` del concurso.
- **Reimportación Cabrillo** a través del botón estándar *Importar archivo de log* — un archivo `.cbr` previamente exportado por la app (o por cualquier otro registrador que emita Cabrillo v3 estándar) vuelve a un cuaderno de concurso nuevo del tipo correcto. La cabecera `CONTEST:` se compara con el catálogo integrado; cuando varias configuraciones comparten la misma etiqueta (p. ej. `ARRL-10` coincide tanto con `arrl-10m-dx` como con `arrl-10m-w`), la app desambigua comparando la letra de modo de la línea QSO y el número de columnas con la plantilla de cada candidato, y luego prefiere la variante `-dx`. Los campos de cabecera (categoría, nombre, club, soapbox, …) rehidratan el panel de información de envío; los valores de intercambio QSO rehidratan `q.contestExchange` según la plantilla del concurso.

### Catálogo de concursos integrado (68 configuraciones)

Agrupados por familia:

- **Familia CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Familia ARRL** (9): ARRL DX SSB/CW (lado DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (cada uno entregado desde *ambas* perspectivas DX y W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE y otros europeos** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Europa central/oriental asimétricos — ambas perspectivas** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Club ruso / RadioSport** (12): Russian DX (ambos lados), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Bielorrusia + Italia + Croacia + España + RTTY ucraniano** (12): Belarus BFRR CW+SSB (ambos lados), ARI DX (ambos lados), Croatian 9A CW (ambos lados), Spanish CNCW (ambos lados), Ukrainian RTTY (ambos lados).
- **Global** (2): All Asian DX CW+SSB.

Los concursos asimétricos (donde el país anfitrión y el lado DX envían intercambios diferentes) se entregan con **dos configuraciones** — una para la perspectiva del país anfitrión (código de región fijo) y otra para la perspectiva DX (número de serie fijo). El campo del lado recibido es un único campo de texto libre para que el operador pueda escribir cualquier formato según el contacto.

Cada configuración incluye:

- Valores de intercambio de concurso reemitidos en la exportación ADIF a través de campos del espacio de nombres `APP_LQ_*`; el sello de cabecera `APP_LQ_CONTEST_ID` permite que una reimportación posterior rehidrate el cuaderno como el mismo concurso con todos los campos intactos.
- 12 años de ventanas de fecha (2026–2037) para que el chip *fuera de la ventana del concurso* siga siendo útil durante una década sin un nuevo lanzamiento.
- Una plantilla Cabrillo que mapea cada campo de intercambio a la columna correcta de la línea `QSO:`.

Añadir un nuevo concurso = pegar un nuevo bloque IIFE en [`contests.js`](contests.js) en la posición alfabética (cada concurso existente está delimitado por un comentario de cabecera `// ==== <id> ====`, por lo que es fácil encontrar dónde insertarlo). No se necesita ningún cambio en `index.html`, ningún cambio en `service-worker.js`, ningún cambio en `app.js` — el renderizador, el gestor de envío, el detector de duplicados, el ciclo ADIF y el emisor Cabrillo absorben cada configuración como datos puros.

## Importación y exportación

- **Importar** cualquier archivo de log — haz clic en *Importar archivo de log* bajo el formulario de creación de cuaderno y elige un archivo `.adi` / `.adif` (ADIF) o `.cbr` / `.cab` (Cabrillo v3). El formato se detecta automáticamente a partir de la primera línea del archivo (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → un aviso de "EDI aún no compatible"). Siempre se crea un nuevo cuaderno — la importación nunca se fusiona con uno existente. Las importaciones ADIF llegan como logs normales a menos que la cabecera lleve un `APP_LQ_CONTEST_ID` escrito por nuestra propia exportación de concurso (en cuyo caso el log se rehidrata como un registro de concurso de ese concurso). Las importaciones Cabrillo siempre llegan como registros de concurso — consulta la sección *Concursos* para ver cómo se compara la etiqueta `CONTEST:` con el catálogo integrado.
- **Exportar ADIF**: haz clic en *Exportar .adi* en la cabecera del cuaderno. Se descarga un archivo conforme a **ADIF 3.1.7**. La cabecera declara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` y `CREATED_TIMESTAMP` (UTC). Campos por QSO emitidos (cuando no están vacíos): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguidos de cada campo ADIF adicional preservado en la importación (véase más abajo).
- **Exportar Cabrillo** está documentado en la sección *Concursos* de arriba — solo está disponible para cuadernos de concurso (el botón *Exportar .cbr* aparece en la cabecera del cuaderno cuando el log tiene un concurso).
- **Ciclo sin pérdidas**: al importar ADIF, cualquier campo que la app no modela en su interfaz (p. ej. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campos `APP_*`) se conserva en el QSO y se vuelve a emitir literalmente en la próxima exportación ADIF. Así, exportar un archivo que fue importado conserva todo.
- La longitud del campo en ADIF se trata como un conteo de bytes UTF-8 según requiere la especificación, por lo que el texto multibyte (p. ej. indicativos con tildes en `COMMENT`) se analiza correctamente.

## Privacidad y datos

- Todos los datos se almacenan en el `localStorage` de tu navegador bajo la clave `local-qso:v1`.
- No se transmite nada a ningún lugar. No hay backend, ni llamadas a API, ni telemetría, ni analíticas.
- Borrar los datos del sitio del navegador, usar el modo privado/incógnito o usar un navegador/dispositivo diferente significa un cuaderno vacío nuevo — usa *Exportar .adi* para hacer copias de seguridad.

## Idioma de la interfaz

Un selector de idioma en la cabecera cubre **28 idiomas**. Elige uno y el resto de la interfaz se renderiza inmediatamente; tu elección se guarda junto con tus registros y se respeta en la próxima visita. El inglés es el predeterminado.

Idiomas disponibles (emoji de bandera + nombre nativo; ordenados alfabéticamente dentro de cada sistema de escritura):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Las etiquetas técnicas universales permanecen en su forma canónica en todos los idiomas: nombres de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` y códigos de país ISO.

¿Falta alguna cadena en tu idioma? Cada diccionario de idioma vive en un único paquete [`i18n.js`](i18n.js), dividido en 28 secciones por comentarios de cabecera `// ==== <lang> ====`. Busca (grep) la cabecera de tu idioma para saltar a su sección, luego añade/edita la clave. Añadir un idioma completamente nuevo = pega un nuevo bloque IIFE en `i18n.js` en la posición alfabética, añade el código de idioma a `SUPPORTED_LANGS` en `app.js`, y añade una opción `<select>` en `index.html`.

## Temas

El conmutador de tema en la cabecera alterna entre día (predeterminado) y noche. La preferencia se guarda junto con tus registros y se respeta en la próxima visita. Los selectores nativos de fecha/hora siguen el tema mediante `color-scheme`.

## Notas técnicas

- Aplicación de página única, HTML + CSS + JavaScript puro. Sin frameworks, sin paso de compilación, sin dependencias.
- Archivos fuente:
  - `index.html` — marcado y metaetiquetas.
  - `style.css` — temas y diseño (variables día/noche, consultas de medios para móvil).
  - `app.js` — estado, persistencia, renderizado, analizador/serializador ADIF, búsqueda de prefijo de indicativo → país.
  - `favicon.svg` — favicon SVG en línea.
  - `manifest.webmanifest` — Web App Manifest (nombre, color de tema, ámbito, icono) para que la app sea instalable como PWA en móvil y escritorio.
  - `service-worker.js` — service worker cache-first que pre-cachea todos los archivos estáticos al instalar, elimina cachés antiguas al activar y mantiene la app completamente offline tras la primera visita. El registro se omite automáticamente en el protocolo `file://` para que abrir `index.html` directamente desde el disco permanezca limpio.
  - `i18n.js` — un único paquete mantenido a mano que contiene los 28 diccionarios de idioma. Cada idioma es una IIFE autónoma que asigna a `window.I18N[<lang>]` un mapa plano clave→cadena. Los bloques están delimitados por comentarios de cabecera `// ==== <lang> ====` — busca (grep) uno para saltar a ese idioma. Empaquetado en un solo archivo en lugar de 28 archivos individuales porque los archivos de traducción son muy repetitivos (mismos nombres de clave, misma sintaxis de marcador de posición) y gzip comprime todo el conjunto mucho mejor que 28 flujos separados — ahorra ~23 KB en la primera carga y elimina 27 solicitudes HTTP. `t()` y `applyLanguage()` en `app.js` gestionan las búsquedas (con respaldo en inglés) y recorren el DOM actualizando cada elemento `[data-i18n*]`.
  - `contests.js` — un único paquete mantenido a mano que contiene las 68 configuraciones de concursos. Cada concurso es una IIFE autónoma que asigna a `window.CONTESTS[<id>]` un objeto de configuración conforme al esquema (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Los bloques están delimitados por comentarios de cabecera `// ==== <id> ====` — busca (grep) uno para saltar a ese concurso. Empaquetado en un solo archivo en lugar de 68 archivos individuales porque las configuraciones de concurso son muy repetitivas (mismo esquema, mismo prefijo `APP_LQ_*`, mismos nombres de campos de cabecera Cabrillo) y gzip comprime todo el conjunto mucho mejor que 68 flujos separados — ahorra ~42 KB en la primera carga y elimina 67 solicitudes HTTP. Cargado por una única etiqueta `<script>` en `index.html` antes de `app.js` para que el registro esté poblado cuando se construye el desplegable de concurso.
- Probado en Chromium, Firefox y Safari recientes (escritorio + iOS).

## Créditos

Creado por [YL3IM](https://www.qrz.com/db/YL3IM).

Gracias a [A65BR](https://www.qrz.com/db/A65BR) Oleg por las invaluables sugerencias que hicieron realmente usable la parte de QSO por satélite — las designaciones modernas de modo sat de dos letras, el catálogo AMSAT y el ajuste automático uplink/downlink provienen de su retroalimentación.

Las banderas de países se basan en secuencias de indicadores regionales Unicode. Se muestran correctamente en macOS, iOS, Linux (con una fuente emoji compatible con banderas) y Android. Windows no incluye una fuente de banderas del sistema, por lo que los emoji de bandera pueden aparecer como pares de letras allí.
