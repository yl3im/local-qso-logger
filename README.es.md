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
- [Importación y exportación ADIF](#importación-y-exportación-adif)
- [Privacidad y datos](#privacidad-y-datos)
- [Idioma de la interfaz](#idioma-de-la-interfaz)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Funciones

- Múltiples cuadernos de registro; cada uno con su propia lista de QSOs.
- Acciones del cuaderno: crear, renombrar, eliminar, importar desde ADIF, exportar a ADIF (`.adi`).
- Formulario QSO agrupado en tres bloques: **Datos de la estación** (indicativo de la estación, indicativo del operador, cuadrícula propia) que permanecen fijos entre QSOs; **Modo de operación** (modo de propagación, satélite, modo, modo sat, banda, banda RX) con campos de satélite que solo aparecen cuando el modo de propagación es *Satélite*; y **Datos QSO** (indicativo contactado, cuadrícula contactada, fecha/hora UTC al editar, comentario, RST enviado, RST recibido).
- Taxonomía completa ADIF `MODE` → `SUBMODE` en el desplegable de modos — elige un modo padre (`SSB`, `MFSK`, …) o ve directamente a un submodo específico (`USB`, `FT4`, …); la aplicación almacena ambos campos según ADIF y la tabla muestra el submodo específico cuando lo hay.
- Enumeración completa de modos de propagación ADIF (SAT, RPT, EME, ES, MS, Aurora, etc.) como desplegable.
- Catálogo completo de satélites AMSAT (~110 satélites) y un desplegable **Modo sat** de dos niveles: códigos preferidos de dos letras uplink/downlink en la parte superior (LU, LV, SX, UU, UV, VA, VU, VV) y las designaciones heredadas de una letra (A/B/J/K/L/R/S/T/U/V/W/X) agrupadas como *obsoletas* abajo. Elegir un modo sat ajusta automáticamente `BAND` (uplink) y `RX band` (downlink).
- Editar y eliminar cualquier QSO (con confirmación al eliminar).
- Valores predeterminados sensatos: fecha/hora UTC pre-rellenada a *ahora*, RST predeterminado según modo (59 para modos de voz, 599 para CW/digital), datos de estación + banda + modo + modo de propagación fijos entre QSOs consecutivos (solo los campos por contacto — indicativo, su cuadrícula, comentario, RST — se borran tras cada *Registrar QSO*).
- Indicador en tiempo real de indicativo duplicado (informativo — los duplicados están permitidos).
- Columna de bandera del país derivada del prefijo del indicativo (cubre ≥99 % de los prefijos habituales de radioafición, incluidas llamadas portátiles como `9A/M0NCG`).
- Visualización de fecha adaptada a la localización en la tabla QSO; el almacenamiento ISO y la salida ADIF permanecen sin cambios.
- Interfaz disponible en **28 idiomas** (inglés más 22 en escritura latina, 5 en cirílico y griego); selector con emoji de bandera en la cabecera.
- Temas de día / noche (día es el predeterminado; el conmutador está en la cabecera).
- Diseño adaptable para móviles con botones de tamaño táctil.
- Funciona completamente sin conexión — sin solicitudes de red en ningún momento.
- Instalable como PWA (Añadir a pantalla de inicio / Instalar app) cuando se aloja sobre HTTPS.

## Primeros pasos

Simplemente abre `index.html` en un navegador moderno. Sin paso de compilación, sin instalación, sin servidor.

Si quieres alojarlo, copia los archivos estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` y el directorio `i18n/` con los 28 archivos de traducción) en cualquier host estático (GitHub Pages, Netlify, tu propio servidor web). También funciona sobre `file://` — el registro del service worker se omite automáticamente en el protocolo `file:` para que abrir `index.html` directamente desde el disco funcione sin problemas.

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
  - **Datos de la estación** — *Indicativo de la estación* (tu indicativo transmisor, ADIF `STATION_CALLSIGN`), *Operador* (el indicativo del operador individual — distinto del *indicativo de la estación* cuando hay un operador invitado al micrófono de una estación de club; ADIF `OPERATOR`) y *Mi cuadrícula* (ADIF `MY_GRIDSQUARE`). Estos permanecen fijos entre QSOs de la misma sesión — fíjalos una vez y se transfieren.
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

## Importación y exportación ADIF

- **Exportar**: haz clic en *Exportar .adi* en la cabecera del cuaderno. Se descarga un archivo conforme a **ADIF 3.1.7**. La cabecera declara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` y `CREATED_TIMESTAMP` (UTC). Campos por QSO emitidos (cuando no están vacíos): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguidos de cada campo ADIF adicional preservado en la importación (véase más abajo).
- **Importar**: haz clic en *Importar archivo .adi* bajo el formulario de crear cuaderno y elige un archivo `.adi` / `.adif`. Se crea un nuevo cuaderno a partir de él, llamado `Imported YYYY-MM-DD HH:MM UTC`. La importación nunca se fusiona con un cuaderno existente.
- **Ciclo sin pérdidas**: al importar, cualquier campo ADIF que la app no modela en su interfaz (p. ej. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campos `APP_*`) se conserva en el QSO y se vuelve a emitir literalmente en la próxima exportación. Así, exportar un archivo que fue importado conserva todo.
- La longitud del campo se trata como un conteo de bytes UTF-8 según requiere la especificación, por lo que el texto multibyte (p. ej. indicativos con tildes en `COMMENT`) se analiza correctamente.

## Privacidad y datos

- Todos los datos se almacenan en el `localStorage` de tu navegador bajo la clave `local-qso:v1`.
- No se transmite nada a ningún lugar. No hay backend, ni llamadas a API, ni telemetría, ni analíticas.
- Borrar los datos del sitio del navegador, usar el modo privado/incógnito o usar un navegador/dispositivo diferente significa un cuaderno vacío nuevo — usa *Exportar .adi* para hacer copias de seguridad.

## Idioma de la interfaz

Un selector de idioma en la cabecera cubre **28 idiomas**. Elige uno y el resto de la interfaz se renderiza inmediatamente; tu elección se guarda junto con tus registros y se respeta en la próxima visita. El inglés es el predeterminado.

Idiomas disponibles (emoji de bandera + nombre nativo; ordenados alfabéticamente dentro de cada sistema de escritura):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Las etiquetas técnicas universales permanecen en su forma canónica en todos los idiomas: nombres de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` y códigos de país ISO.

¿Falta alguna cadena en tu idioma? Cada idioma es un único archivo pequeño bajo [`i18n/`](i18n/) — copia `i18n/en.js`, traduce los valores, guarda como `i18n/<code>.js`, luego añade una etiqueta `<script>` más una opción en `<select>` en `index.html` y el código en `SUPPORTED_LANGS` en `app.js`.

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
  - `i18n/<lang>.js` — un archivo de traducción por idioma compatible (28 en total). Cada uno es un pequeño IIFE que asigna a `window.I18N[<lang>]` un mapa plano clave→cadena. `t()` y `applyLanguage()` en `app.js` gestionan las búsquedas (con respaldo en inglés) y recorren el DOM actualizando cada elemento `[data-i18n*]`.
- Probado en Chromium, Firefox y Safari recientes (escritorio + iOS).

## Créditos

Creado por [YL3IM](https://www.qrz.com/db/YL3IM).

Gracias a [A65BR](https://www.qrz.com/db/A65BR) Oleg por las invaluables sugerencias que hicieron realmente usable la parte de QSO por satélite — las designaciones modernas de modo sat de dos letras, el catálogo AMSAT y el ajuste automático uplink/downlink provienen de su retroalimentación.

Las banderas de países se basan en secuencias de indicadores regionales Unicode. Se muestran correctamente en macOS, iOS, Linux (con una fuente emoji compatible con banderas) y Android. Windows no incluye una fuente de banderas del sistema, por lo que los emoji de bandera pueden aparecer como pares de letras allí.
