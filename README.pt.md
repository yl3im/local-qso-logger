# Local QSO Logger

## Ler no seu idioma

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 Português · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Um logger de QSO radioamador respeitador da privacidade que funciona inteiramente no seu navegador. Sem conta, sem servidor, sem rastreio, sem analítica — os seus cadernos vivem apenas no `localStorage` do navegador e nunca saem do seu dispositivo.

Por [YL3IM](https://www.qrz.com/db/YL3IM). Site do projeto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger num iPad](media/iPad.png)

## Índice

- [Ler no seu idioma](#ler-no-seu-idioma)
- [Funcionalidades](#funcionalidades)
- [Começar](#começar)
- [Instalar como PWA no telemóvel](#instalar-como-pwa-no-telemóvel)
  - [iOS (apenas Safari)](#ios-apenas-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Cadernos](#cadernos)
- [QSO](#qso)
- [Importação e exportação ADIF](#importação-e-exportação-adif)
- [Privacidade e dados](#privacidade-e-dados)
- [Idioma da interface](#idioma-da-interface)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Funcionalidades

- Vários cadernos, cada um com a sua própria lista de QSO.
- Ações de caderno: criar, renomear, eliminar, importar de ADIF, exportar para ADIF (`.adi`).
- Campos de QSO: indicativo, data UTC, hora UTC, banda, modo, RST enviado, RST recebido.
- Editar e eliminar qualquer QSO (com confirmação na eliminação).
- Padrões sensatos: data/hora UTC de hoje pré-preenchidas, RST por defeito conforme o modo (59 para modos de voz, 599 para CW/digital), banda e modo persistentes entre QSO consecutivos.
- Indicador em tempo real de duplicação de indicativo (informativo — duplicados são permitidos).
- Coluna com bandeira do país derivada do prefixo do indicativo (cobre ≥99 % dos prefixos comuns de radioamadorismo, incluindo indicativos portáteis como `9A/M0NCG`).
- Exibição de data sensível à localização na tabela QSO; armazenamento ISO e saída ADIF permanecem inalterados.
- Temas dia/noite (dia por defeito; alternador no cabeçalho).
- Layout responsivo amigável ao móvel com botões adequados ao toque.
- Funciona totalmente offline — sem pedidos de rede em momento algum.
- Instalável como PWA (Adicionar ao ecrã principal / Instalar aplicação) quando alojado por HTTPS.
- Interface disponível em **28 idiomas** (inglês mais 22 latinos, 5 cirílicos e grego); seletor com emoji de bandeira no cabeçalho.

## Começar

Basta abrir `index.html` num navegador moderno. Sem build, sem instalação, sem servidor.

Se quiser alojá-lo, coloque os ficheiros estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` e o diretório `i18n/` com os 28 ficheiros de tradução) em qualquer alojamento estático (GitHub Pages, Netlify, o seu próprio servidor web). Também funcionará por `file://` — o registo do service worker é automaticamente saltado no protocolo `file:`, pelo que abrir `index.html` diretamente do disco funciona limpamente.

Quando servido por HTTPS, a aplicação torna-se instalável como PWA (através do menu *Instalar aplicação* / *Adicionar ao ecrã principal* do navegador) e funciona offline após a primeira visita graças a um service worker cache-first que pré-cacheia todos os ficheiros estáticos (UI + todas as traduções).

Um caderno padrão é criado automaticamente na primeira visita, para que possa começar a registar imediatamente.

## Instalar como PWA no telemóvel

Quando a aplicação é servida por HTTPS (por exemplo, GitHub Pages), pode instalá-la no ecrã principal do telemóvel para que funcione em ecrã inteiro sem a interface do navegador. Após o primeiro arranque, o service worker faz cache de tudo, pelo que arranques subsequentes funcionam totalmente offline.

### iOS (apenas Safari)

No iOS, apenas o Safari pode instalar PWAs — navegadores de terceiros não podem.

1. Abra o site no **Safari**.
2. Toque no botão **Partilhar**.
3. Escolha **Adicionar ao ecrã principal**, depois **Adicionar**.

Tutorial:

![Tutorial de instalação iOS](media/iOS_add_to_home_screen.gif)

Fonte de qualidade superior: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Abra o site no seu navegador. Pode aparecer automaticamente um aviso *Instalar aplicação*.
2. Caso contrário, abra o **menu ⋮** → **Instalar aplicação** (ou **Adicionar ao ecrã principal** em versões mais antigas).

Tutorial:

![Tutorial de instalação Android](media/Android_add_to_home_screen.gif)

Fonte de qualidade superior: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Cadernos

- **Criar:** digite um nome em *Nome do caderno* e submeta. Se deixar o nome vazio, o padrão será `Log YYYY-MM-DD HH:MM UTC`.
- **Alternar:** clique em qualquer caderno na barra lateral.
- **Renomear:** clique em *Renomear* no cabeçalho do caderno. Enter guarda, Escape cancela.
- **Eliminar:** clique em *Eliminar caderno*. Ser-lhe-á pedida confirmação. Se eliminar o último caderno, um novo é criado automaticamente.

## QSO

- Preencha o formulário e prima **Registar QSO**.
- O indicativo é automaticamente posto em maiúsculas enquanto escreve.
- Data e hora são pré-preenchidas com *agora* em UTC e redefinidas após cada QSO registado; pode ainda inserir qualquer valor.
- A banda e o modo persistem entre QSO da mesma sessão, portanto não tem de os selecionar de novo para cada contacto.
- RST enviado / RST recebido, se deixados vazios, voltam a **59** para modos de voz (SSB/FM/AM/DIGITALVOICE) e a **599** para CW e modos digitais (CW/FT8/FT4/RTTY/PSK31/JT65).
- Um chip *Duplicado neste caderno* aparece sob o campo do indicativo se o indicativo já existir no caderno atual. Duplicados *não* são bloqueados.
- **Editar um QSO** com o botão *Editar* na linha. O formulário muda para o modo *Atualizar QSO*, a linha é destacada, e um botão *Cancelar* aparece. Alternar de caderno ou eliminar o log cancela a edição automaticamente.
- **Eliminar um QSO** com o botão *Eliminar* na linha (pede confirmação).

## Importação e exportação ADIF

- **Exportar**: clique em *Exportar .adi* no cabeçalho do caderno. Um ficheiro é descarregado com `ADIF_VER 3.1.4` e `PROGRAMID local-qso` no cabeçalho. Cada registo mapeia `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Importar**: clique em *Importar ficheiro .adi* sob o formulário de criação de caderno e escolha um ficheiro `.adi`/`.adif`. Um novo caderno é criado com o nome `Importado YYYY-MM-DD HH:MM UTC`. A importação nunca é fundida num caderno existente.
- A contagem de comprimento de campo é tratada como número de caracteres, o que funciona para ADIF ASCII (todos os campos QSO padrão). Conteúdo multibyte em campos de texto não essenciais pode ser analisado de forma estranha.

## Privacidade e dados

- Todos os dados são armazenados no `localStorage` do navegador sob a chave `local-qso:v1`.
- Nada é transmitido para lado algum. Sem backend, sem chamadas de API, sem telemetria, sem analítica.
- Limpar dados do site, usar o modo privado/incógnito, ou usar um navegador/dispositivo diferente significa um caderno vazio — use *Exportar .adi* para backup.

## Idioma da interface

Um seletor de idioma no cabeçalho cobre **28 idiomas**. Escolha um e o resto da interface é re-renderizado imediatamente; a sua escolha é guardada junto com os seus logs e respeitada na próxima visita. Inglês é o padrão.

Idiomas disponíveis (emoji bandeira + nome nativo; ordenados alfabeticamente dentro de cada escrita):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Rótulos técnicos universais permanecem na sua forma canónica em todos os idiomas: nomes de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` e códigos ISO de país.

Falta uma cadeia no seu idioma? Cada idioma é um pequeno ficheiro em [`i18n/`](i18n/) — copie `i18n/en.js`, traduza os valores, guarde como `i18n/<código>.js`, depois adicione uma etiqueta `<script>` mais uma opção `<select>` em `index.html` e o código em `SUPPORTED_LANGS` em `app.js`.

## Temas

O alternador de tema no cabeçalho alterna entre dia (padrão) e noite. A preferência é guardada junto com os seus logs e respeitada na próxima visita. Os seletores nativos de data/hora seguem o tema via `color-scheme`.

## Notas técnicas

- Aplicação de página única, HTML + CSS + JavaScript puros. Sem frameworks, sem build, sem dependências.
- Ficheiros de origem:
  - `index.html` — markup e meta tags.
  - `style.css` — temas e layout (variáveis dia/noite, media queries móveis).
  - `app.js` — estado, persistência, renderização, parser/serializador ADIF, lookup prefixo de indicativo → país.
  - `favicon.svg` — favicon SVG inline.
  - `manifest.webmanifest` — Web App Manifest (nome, cor do tema, scope, ícone) para que a aplicação seja instalável como PWA em móvel e desktop.
  - `service-worker.js` — service worker cache-first que na instalação pré-cacheia cada ficheiro estático, na ativação remove caches antigas e mantém a aplicação totalmente offline após a primeira visita. O registo é saltado automaticamente para o protocolo `file://`, pelo que abrir `index.html` diretamente do disco permanece limpo.
  - `i18n/<lang>.js` — um ficheiro de tradução por idioma suportado (28 no total). Cada um é uma pequena IIFE que atribui a `window.I18N[<lang>]` um mapa plano chave→string. `t()` e `applyLanguage()` em `app.js` tratam dos lookups (com fallback para inglês) e percorrem o DOM atualizando cada elemento `[data-i18n*]`.
- Testado em Chromium, Firefox e Safari recentes (desktop + iOS).

## Créditos

Construído por [YL3IM](https://www.qrz.com/db/YL3IM).

As bandeiras dos países baseiam-se em sequências indicadoras regionais Unicode. Renderizam corretamente em macOS, iOS, Linux (com um tipo de letra emoji compatível com bandeiras) e Android. O Windows não inclui um tipo de letra de bandeiras do sistema, pelo que os emojis de bandeira podem aparecer como pares de letras nele.
