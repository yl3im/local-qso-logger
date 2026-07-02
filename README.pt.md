# Local QSO Logger

## Ler no seu idioma

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 Português · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Um logger de QSO de radioamadorismo que respeita a privacidade e funciona completamente no seu navegador. Sem conta, sem servidor, sem rastreamento, sem análises — os seus cadernos de estação vivem apenas no `localStorage` do seu navegador e nunca saem do seu dispositivo.

Por [YL3IM](https://www.qrz.com/db/YL3IM). Sítio web do projeto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger a correr no iPad](media/iPad.png)

## Conteúdo

- [Ler no seu idioma](#ler-no-seu-idioma)
- [Funcionalidades](#funcionalidades)
- [Primeiros passos](#primeiros-passos)
- [Instalar como PWA no telemóvel](#instalar-como-pwa-no-telemóvel)
  - [iOS (apenas Safari)](#ios-apenas-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Cadernos de estação](#cadernos-de-estação)
- [QSOs](#qsos)
- [Importação e exportação ADIF](#importação-e-exportação-adif)
- [Privacidade e dados](#privacidade-e-dados)
- [Idioma da interface](#idioma-da-interface)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Funcionalidades

- Vários cadernos de estação; cada um com a sua própria lista de QSOs.
- Ações do caderno: criar, renomear, eliminar, importar de ADIF, exportar para ADIF (`.adi`).
- Formulário QSO agrupado em três blocos: **Dados da estação** (indicativo da estação, indicativo do operador, localizador próprio) que ficam fixos entre QSOs; **Modo de operação** (modo de propagação, satélite, modo, modo satélite, banda, banda RX) com campos de satélite visíveis apenas quando o modo de propagação é *Satélite*; e **Dados QSO** (indicativo contactado, localizador contactado, data/hora UTC ao editar, comentário, RST enviado, RST recebido).
- Taxonomia completa ADIF `MODE` → `SUBMODE` na lista pendente de modos — escolha um modo pai (`SSB`, `MFSK`, …) ou vá diretamente a um submodo específico (`USB`, `FT4`, …); a aplicação guarda ambos os campos conforme ADIF e a tabela mostra o submodo específico quando existe.
- Enumeração completa dos modos de propagação ADIF (SAT, RPT, EME, ES, MS, Aurora, etc.) como lista pendente.
- Catálogo completo de satélites AMSAT (~110 satélites) e uma lista pendente **Modo satélite** de dois níveis: códigos preferidos de duas letras uplink/downlink no topo (LU, LV, SX, UU, UV, VA, VU, VV) e as designações legadas de uma letra (A/B/J/K/L/R/S/T/U/V/W/X) agrupadas como *obsoletas* em baixo. A escolha de um modo satélite ajusta automaticamente `BAND` (uplink) e `RX band` (downlink).
- Editar e eliminar qualquer QSO (com confirmação ao eliminar).
- Valores predefinidos sensatos: data/hora UTC pré-preenchida para *agora*, RST predefinido por modo (59 para modos de voz, 599 para CW/digital), dados da estação + banda + modo + modo de propagação fixos entre QSOs consecutivos (apenas os campos por contacto — indicativo, localizador deles, comentário, RST — são limpos após cada *Registar QSO*).
- Indicador de indicativo duplicado em tempo real (informativo — duplicados são permitidos).
- Coluna de bandeira do país derivada do prefixo do indicativo (cobre ≥99 % dos prefixos comuns de radioamadorismo, incluindo chamadas portáteis como `9A/M0NCG`).
- Apresentação de data sensível ao locale na tabela QSO; o armazenamento ISO e a saída ADIF permanecem inalterados.
- Interface disponível em **28 idiomas** (inglês mais 22 em escrita latina, 5 em cirílico e grego); seletor com emoji de bandeira no cabeçalho.
- Temas claro / escuro (claro é o predefinido; o botão está no cabeçalho).
- Esquema responsivo adaptado para dispositivos móveis com botões de tamanho tátil.
- Funciona completamente offline — sem pedidos de rede em nenhum momento.
- Instalável como PWA (Adicionar ao ecrã inicial / Instalar aplicação) quando alojado via HTTPS.

## Primeiros passos

Basta abrir `index.html` num navegador moderno. Sem etapa de compilação, sem instalação, sem servidor.

Se quiser alojá-lo, coloque os ficheiros estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` e o diretório `i18n/` com os 28 ficheiros de tradução) em qualquer alojamento estático (GitHub Pages, Netlify, o seu próprio servidor web). Funciona também via `file://` — o registo do service worker é ignorado automaticamente no protocolo `file:`, pelo que abrir `index.html` diretamente do disco funciona corretamente.

Quando alojado via HTTPS, a aplicação torna-se instalável como PWA (menu do navegador *Instalar aplicação* / *Adicionar ao ecrã inicial*) e funciona offline após a primeira visita graças a um service worker cache-first que pré-armazena em cache todos os ficheiros estáticos (UI + todas as traduções).

Um caderno predefinido é criado automaticamente na primeira visita, para que possa começar a registar de imediato.

## Instalar como PWA no telemóvel

Quando a aplicação está alojada via HTTPS (p. ex. GitHub Pages), pode instalá-la no ecrã inicial do seu telemóvel para que funcione em ecrã inteiro sem a barra do navegador. Após o primeiro arranque, o service worker coloca tudo em cache, pelo que os arranques seguintes funcionam completamente offline.

### iOS (apenas Safari)

No iOS, apenas o Safari pode instalar PWAs — os navegadores de terceiros não conseguem.

1. Abra o site no **Safari**.
2. Toque no botão **Partilhar**.
3. Escolha **Adicionar ao ecrã de início** e depois **Adicionar**.

Tutorial:

![Tutorial de instalação no iOS](media/iOS_add_to_home_screen.gif)

Fonte em maior qualidade: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Abra o site no seu navegador. Pode aparecer automaticamente um aviso para *Instalar aplicação*.
2. Caso contrário, abra o **menu ⋮** → **Instalar aplicação** (ou **Adicionar ao ecrã inicial** em versões mais antigas).

Tutorial:

![Tutorial de instalação no Android](media/Android_add_to_home_screen.gif)

Fonte em maior qualidade: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Cadernos de estação

- **Criar:** escreva um nome em *Nome do registo* e envie. Se deixar o nome em branco, o predefinido é `Log YYYY-MM-DD HH:MM UTC`.
- **Mudar:** clique em qualquer caderno na barra lateral.
- **Renomear:** clique em *Renomear* no cabeçalho do caderno. Prima Enter para guardar, Escape para cancelar.
- **Eliminar:** clique em *Eliminar registo*. Ser-lhe-á pedida confirmação. Se eliminar o último caderno, é criado um novo automaticamente.

## QSOs

- Preencha o formulário e prima **Registar QSO**.
- O formulário está organizado em três blocos:
  - **Dados da estação** — *Indicativo da estação* (o seu indicativo de transmissão, ADIF `STATION_CALLSIGN`), *Operador* (o indicativo do operador individual — diferente do *indicativo da estação* quando um operador convidado está ao microfone de uma estação de clube; ADIF `OPERATOR`) e *O meu localizador* (ADIF `MY_GRIDSQUARE`). Estes ficam fixos entre QSOs na mesma sessão — defina-os uma vez e são transportados.
  - **Modo de operação** — *Modo prop.*, *Modo*, *Banda*, mais os campos exclusivos de satélite *Satélite* / *Modo satélite* / *Banda RX* quando o modo de propagação é *Satélite*. A banda, o modo e o modo de propagação são fixos como os dados da estação.
  - **Dados QSO** — campos por contacto: *Indicativo*, *Localizador* (Maidenhead da outra estação), *Comentário* (ADIF `COMMENT`), *RST enviado*, *RST recebido*. Ao editar um QSO existente, *Data (UTC)* e *Hora (UTC)* também aparecem neste bloco. Estes campos são limpos após cada *Registar QSO*.
- Todos os indicativos (contactado, estação, operador) são automaticamente convertidos para maiúsculas ao escrever; ambos os campos de localizador fazem o mesmo.
- A data e hora são pré-preenchidas para *agora* em UTC ao submeter; ao editar pode escrever qualquer valor.
- RST enviado / RST recebido, se deixados em branco, são por predefinição **59** para modos de voz (SSB/FM/DIGITALVOICE) e **599** para CW e modos digitais (CW/FT8/FT4/RTTY/PSK31/JT65). O predefinido segue o MODE pai, pelo que escolher um submodo específico como *USB* ou *FT4* ainda dá o predefinido correto.
- Um chip *Duplicado neste registo* aparece sob o campo de indicativo se o indicativo já existir no caderno atual. Duplicados *não* são bloqueados.
- **Modo de propagação** — lista pendente opcional de modos de propagação ADIF (SAT, RPT, EME, F2, Es, MS, LOS, etc.). Deixe em branco para QSOs HF terrestres normais.
- **QSOs de satélite** — selecionar o modo de propagação *Satélite* revela três campos exclusivos de satélite: **Satélite** (lista pendente de ~110 satélites registados na AMSAT), **Modo satélite** (designações de letras AMSAT, agrupadas como códigos *modernos* de duas letras uplink/downlink no topo e códigos *obsoletos* de uma letra em baixo) e **Banda RX** (banda de downlink). Satélite, modo satélite e banda RX são obrigatórios — o navegador recusará a submissão sem eles. Ao escolher um **Modo satélite**, a **Banda** principal é preenchida automaticamente com a banda de uplink e a **Banda RX** com a banda de downlink (p. ex. modo J → uplink 2m, downlink 70cm). Voltar a *satélite* de outro modo de propagação reinicia o modo satélite para que escolha um novo. QSOs não satélite nunca transportam campos de satélite; mudar um QSO existente de satélite para outro modo de propagação remove-os corretamente. **Localizador** e **O meu localizador** são campos gerais (também úteis para concursos de localizador VHF/UHF) e permanecem visíveis para todos os QSOs.
- **Editar um QSO** com o botão *Editar* na linha. O formulário passa para o modo *Atualizar QSO*, a linha é realçada e aparece um botão *Cancelar*. Mudar de caderno ou eliminar o registo cancela a edição automaticamente.
- **Eliminar um QSO** com o botão *Eliminar* na linha (pede confirmação).

## Importação e exportação ADIF

- **Exportar**: clique em *Exportar .adi* no cabeçalho do caderno. É descarregado um ficheiro conforme com **ADIF 3.1.7**. O cabeçalho declara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` e `CREATED_TIMESTAMP` (UTC). Campos por QSO emitidos (quando não vazios): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguidos por cada campo ADIF adicional preservado na importação (ver abaixo).
- **Importar**: clique em *Importar ficheiro .adi* sob o formulário de criação de caderno e escolha um ficheiro `.adi` / `.adif`. É criado a partir dele um novo caderno, com o nome `Imported YYYY-MM-DD HH:MM UTC`. A importação nunca se funde com um caderno existente.
- **Ciclo sem perdas**: na importação, qualquer campo ADIF que a aplicação não modela na sua interface (p. ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campos `APP_*`) é preservado no QSO e re-emitido literalmente na próxima exportação. Assim, exportar um ficheiro que foi ele próprio importado preserva tudo.
- O comprimento do campo é tratado como uma contagem de bytes UTF-8, como a especificação exige, pelo que texto multi-byte (p. ex. caracteres acentuados em `COMMENT`) é analisado corretamente.

## Privacidade e dados

- Todos os dados são armazenados no `localStorage` do seu navegador sob a chave `local-qso:v1`.
- Nada é transmitido para lado nenhum. Não há backend, chamadas de API, telemetria nem análises.
- Limpar os dados do site no navegador, usar o modo privado/incógnito ou um navegador/dispositivo diferente significa um novo caderno vazio — use *Exportar .adi* para fazer cópias de segurança.

## Idioma da interface

Um seletor de idioma no cabeçalho cobre **28 idiomas**. Escolha um e o resto da interface é renderizado de imediato; a sua escolha é guardada junto com os seus registos e respeitada na próxima visita. O inglês é o predefinido.

Idiomas disponíveis (emoji de bandeira + nome nativo; ordenados alfabeticamente em cada sistema de escrita):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

As etiquetas técnicas universais permanecem na sua forma canónica em todos os idiomas: nomes de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` e códigos de país ISO.

Falta uma string no seu idioma? Cada idioma é um único ficheiro pequeno em [`i18n/`](i18n/) — copie `i18n/en.js`, traduza os valores, guarde como `i18n/<code>.js`, depois adicione uma etiqueta `<script>` mais uma opção `<select>` em `index.html` e o código em `SUPPORTED_LANGS` em `app.js`.

## Temas

O botão de tema no cabeçalho alterna entre claro (predefinido) e escuro. A preferência é guardada junto com os seus registos e respeitada na próxima visita. Os seletores nativos de data/hora seguem o tema via `color-scheme`.

## Notas técnicas

- Aplicação de página única, HTML + CSS + JavaScript puro. Sem frameworks, sem etapa de compilação, sem dependências.
- Ficheiros fonte:
  - `index.html` — marcação e meta tags.
  - `style.css` — temas e esquema (variáveis claro/escuro, media queries para móvel).
  - `app.js` — estado, persistência, renderização, analisador/serializador ADIF, pesquisa prefixo indicativo → país.
  - `favicon.svg` — favicon SVG em linha.
  - `manifest.webmanifest` — Web App Manifest (nome, cor do tema, âmbito, ícone) para que a aplicação seja instalável como PWA no móvel e no ambiente de trabalho.
  - `service-worker.js` — service worker cache-first que pré-armazena em cache todos os ficheiros estáticos na instalação, remove caches antigas na ativação e mantém a aplicação completamente offline após a primeira visita. O registo é automaticamente ignorado no protocolo `file://`, pelo que abrir `index.html` diretamente do disco permanece limpo.
  - `i18n/<lang>.js` — um ficheiro de tradução por idioma suportado (28 no total). Cada um é um pequeno IIFE que atribui a `window.I18N[<lang>]` um mapa plano chave→string. `t()` e `applyLanguage()` em `app.js` tratam das pesquisas (com fallback em inglês) e percorrem o DOM atualizando cada elemento `[data-i18n*]`.
- Testado nos Chromium, Firefox e Safari recentes (ambiente de trabalho + iOS).

## Créditos

Criado por [YL3IM](https://www.qrz.com/db/YL3IM).

Obrigado a [A65BR](https://www.qrz.com/db/A65BR) Oleg pelas dicas inestimáveis que tornaram a parte de QSO por satélite realmente utilizável — as designações modernas de dois caracteres do modo satélite, o catálogo AMSAT e o ajuste automático uplink/downlink têm todos origem no seu feedback.

As bandeiras dos países baseiam-se em sequências de indicadores regionais Unicode. São apresentadas corretamente no macOS, iOS, Linux (com um tipo de letra emoji compatível com bandeiras) e Android. O Windows não inclui um tipo de letra de sistema para bandeiras, pelo que os emoji de bandeira podem aparecer como pares de letras.
