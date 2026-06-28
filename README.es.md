# Local QSO Logger

## Leer en su idioma

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 Español · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un registro de QSO de radioaficionado respetuoso con la privacidad que funciona enteramente en su navegador. Sin cuenta, sin servidor, sin rastreo, sin analítica — sus cuadernos viven solo en el `localStorage` de su navegador y nunca abandonan su dispositivo.

Por [YL3IM](https://www.qrz.com/db/YL3IM). Sitio del proyecto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger en un iPad](media/iPad.png)

## Contenido

- [Leer en su idioma](#leer-en-su-idioma)
- [Características](#características)
- [Empezando](#empezando)
- [Instalar como PWA en el móvil](#instalar-como-pwa-en-el-móvil)
  - [iOS (solo Safari)](#ios-solo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Cuadernos](#cuadernos)
- [QSO](#qso)
- [Importación y exportación ADIF](#importación-y-exportación-adif)
- [Privacidad y datos](#privacidad-y-datos)
- [Idioma de la interfaz](#idioma-de-la-interfaz)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Características

- Múltiples cuadernos, cada uno con su propia lista de QSO.
- Acciones de cuaderno: crear, renombrar, eliminar, importar desde ADIF, exportar a ADIF (`.adi`).
- Campos del QSO: indicativo, fecha UTC, hora UTC, banda, modo, RST enviado, RST recibido.
- Editar y eliminar cualquier QSO (con confirmación al eliminar).
- Valores por defecto sensatos: fecha/hora UTC actuales precargadas, valores RST por defecto según el modo (59 para modos de voz, 599 para CW/digital), banda y modo pegajosos entre QSO consecutivos.
- Indicador en vivo de indicativo duplicado (informativo — se permiten duplicados).
- Columna con bandera del país derivada del prefijo del indicativo (cubre ≥99 % de los prefijos comunes de radioafición, incluyendo indicativos portables como `9A/M0NCG`).
- Visualización de fecha sensible a la configuración regional en la tabla de QSO; el almacenamiento ISO y la salida ADIF permanecen sin cambios.
- Temas día/noche (día por defecto; el conmutador está en el encabezado).
- Diseño responsivo adaptado a móvil con botones de tamaño apto para tacto.
- Funciona totalmente sin conexión — sin solicitudes de red en ningún momento.
- Instalable como PWA (Añadir a pantalla de inicio / Instalar app) cuando se aloja vía HTTPS.
- Interfaz disponible en **28 idiomas** (inglés más 22 de escritura latina, 5 cirílicos y griego); selector con banderas en el encabezado.

## Empezando

Simplemente abra `index.html` en un navegador moderno. Sin build, sin instalación, sin servidor.

Si desea alojarlo, coloque los archivos estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` y la carpeta `i18n/` con los 28 archivos de traducción) en cualquier alojamiento estático (GitHub Pages, Netlify, su propio servidor web). También funcionará vía `file://` — el registro del service worker se omite automáticamente en el protocolo `file:`, por lo que abrir `index.html` directamente desde el disco sigue funcionando limpiamente.

Cuando se sirve vía HTTPS, la aplicación se puede instalar como PWA (mediante el menú *Instalar app* / *Añadir a pantalla de inicio* del navegador) y funciona sin conexión después de la primera visita gracias a un service worker cache-first que preinstala todos los archivos estáticos (UI + todas las traducciones).

Se crea automáticamente un cuaderno por defecto en la primera visita, para que pueda comenzar a registrar de inmediato.

## Instalar como PWA en el móvil

Cuando la app se sirve vía HTTPS (p. ej. GitHub Pages), puede instalarla en la pantalla de inicio de su teléfono para que se ejecute a pantalla completa sin la interfaz del navegador. Después del primer lanzamiento, el service worker cachea todo, por lo que los lanzamientos siguientes funcionan totalmente sin conexión.

### iOS (solo Safari)

En iOS, solo Safari puede instalar PWA — los navegadores de terceros no pueden.

1. Abra el sitio en **Safari**.
2. Toque el botón **Compartir**.
3. Elija **Añadir a pantalla de inicio**, luego **Añadir**.

Tutorial:

![Tutorial de instalación en iOS](media/iOS_add_to_home_screen.gif)

Fuente de mayor calidad: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Abra el sitio en su navegador. Puede aparecer automáticamente un aviso *Instalar app*.
2. De lo contrario, abra el **menú ⋮** → **Instalar app** (o **Añadir a pantalla de inicio** en versiones más antiguas).

Tutorial:

![Tutorial de instalación en Android](media/Android_add_to_home_screen.gif)

Fuente de mayor calidad: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Cuadernos

- **Crear:** escriba un nombre en *Nombre del cuaderno* y envíe. Si deja el nombre vacío, por defecto será `Log YYYY-MM-DD HH:MM UTC`.
- **Cambiar:** haga clic en cualquier cuaderno en la barra lateral.
- **Renombrar:** haga clic en *Renombrar* en el encabezado del cuaderno. Pulse Enter para guardar, Escape para cancelar.
- **Eliminar:** haga clic en *Eliminar cuaderno*. Se le pedirá confirmación. Si elimina el último cuaderno, se creará uno nuevo automáticamente.

## QSO

- Rellene el formulario y pulse **Registrar QSO**.
- El indicativo se pone automáticamente en mayúsculas mientras escribe.
- La fecha y la hora se precargan a *ahora* en UTC y se reinician después de cada QSO registrado; aún puede introducir cualquier valor.
- La banda y el modo persisten entre QSO de la misma sesión, por lo que no es necesario volver a seleccionarlos para cada contacto.
- RST enviado / RST recibido, si se dejan vacíos, vuelven a **59** para modos de voz (SSB/FM/AM/DIGITALVOICE) y a **599** para CW y modos digitales (CW/FT8/FT4/RTTY/PSK31/JT65).
- Aparece una chip *Duplicado en este cuaderno* bajo el campo de indicativo si el indicativo ya existe en el cuaderno actual. Los duplicados *no* se bloquean.
- **Editar un QSO** con el botón *Editar* en la fila. El formulario cambia al modo *Actualizar QSO*, se resalta la fila y aparece un botón *Cancelar*. Cambiar de cuaderno o eliminarlo cancela la edición automáticamente.
- **Eliminar un QSO** con el botón *Eliminar* en la fila (pide confirmación).

## Importación y exportación ADIF

- **Exportar**: haga clic en *Exportar .adi* en el encabezado del cuaderno. Se descarga un archivo con `ADIF_VER 3.1.4` y `PROGRAMID local-qso` en el encabezado. Cada registro mapea `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Importar**: haga clic en *Importar archivo .adi* debajo del formulario de creación de cuaderno y elija un archivo `.adi`/`.adif`. Se crea un nuevo cuaderno con el nombre `Importado YYYY-MM-DD HH:MM UTC`. La importación nunca se fusiona en un cuaderno existente.
- El recuento de longitud de campo se trata como número de caracteres, lo que funciona para ADIF ASCII (todos los campos QSO estándar). Contenido multi-byte en campos de texto no esenciales puede analizarse de forma extraña.

## Privacidad y datos

- Todos los datos se almacenan en el `localStorage` del navegador bajo la clave `local-qso:v1`.
- Nada se transmite a ningún sitio. No hay backend, no hay llamadas a API, no hay telemetría, no hay analítica.
- Borrar los datos del sitio, usar el modo privado/incógnito, o usar un navegador/dispositivo diferente significa un cuaderno vacío — use *Exportar .adi* para hacer copias de seguridad.

## Idioma de la interfaz

Un selector de idioma en el encabezado cubre **28 idiomas**. Elija uno y el resto de la interfaz se renderiza inmediatamente; su elección se guarda junto con sus logs y se respeta en la próxima visita. Inglés es el predeterminado.

Idiomas disponibles (emoji de bandera + nombre nativo; ordenados alfabéticamente dentro de cada escritura):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Las etiquetas técnicas universales permanecen en su forma canónica en todos los idiomas: nombres de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` y códigos ISO de país.

¿Falta una cadena en su idioma? Cada idioma es un solo archivo pequeño en [`i18n/`](i18n/) — copie `i18n/en.js`, traduzca los valores, guarde como `i18n/<código>.js`, luego añada una etiqueta `<script>` más una opción `<select>` en `index.html` y el código en `SUPPORTED_LANGS` en `app.js`.

## Temas

El conmutador de tema en el encabezado alterna entre día (predeterminado) y noche. La preferencia se guarda junto con sus logs y se respeta en la próxima visita. Los selectores nativos de fecha/hora siguen el tema vía `color-scheme`.

## Notas técnicas

- App de una sola página, HTML + CSS + JavaScript puros. Sin frameworks, sin build, sin dependencias.
- Archivos fuente:
  - `index.html` — marcado y meta tags.
  - `style.css` — temas y diseño (variables día/noche, media queries móviles).
  - `app.js` — estado, persistencia, renderizado, parser/serializer ADIF, búsqueda prefijo indicativo → país.
  - `favicon.svg` — favicon SVG en línea.
  - `manifest.webmanifest` — Web App Manifest (nombre, color del tema, scope, ícono) para que la app sea instalable como PWA en móvil y escritorio.
  - `service-worker.js` — service worker cache-first que en la instalación pre-cachea todos los archivos estáticos, en la activación purga cachés antiguas y mantiene la app funcionando totalmente sin conexión después de la primera visita. El registro se omite automáticamente para el protocolo `file://`, por lo que abrir `index.html` directamente desde el disco permanece limpio.
  - `i18n/<lang>.js` — un archivo de traducción por idioma soportado (28 en total). Cada uno es un pequeño IIFE que asigna a `window.I18N[<lang>]` un mapa plano clave→cadena. `t()` y `applyLanguage()` en `app.js` gestionan las búsquedas (con fallback al inglés) y recorren el DOM actualizando cada elemento `[data-i18n*]`.
- Probado en Chromium, Firefox y Safari recientes (escritorio + iOS).

## Créditos

Construido por [YL3IM](https://www.qrz.com/db/YL3IM).

Las banderas de país dependen de secuencias de indicador regional Unicode. Se renderizan correctamente en macOS, iOS, Linux (con una fuente emoji compatible con banderas) y Android. Windows no incluye una fuente de banderas del sistema, por lo que los emojis de banderas pueden aparecer como pares de letras allí.
