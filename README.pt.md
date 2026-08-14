# Local QSO Logger

## Ler no seu idioma

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 Português · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Um logger de QSO de radioamadorismo que respeita a privacidade e funciona completamente no seu navegador. Sem conta, sem servidor, sem rastreamento, sem análises — os seus cadernos de estação vivem apenas no `localStorage` do seu navegador e nunca saem do seu dispositivo.

Por [YL3IM](https://www.qrz.com/db/YL3IM). Sítio web do projeto: [qso.lv](https://qso.lv).

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
- [Concursos](#concursos)
- [Importação e exportação](#importação-e-exportação)
- [Privacidade e dados](#privacidade-e-dados)
- [Idioma da interface](#idioma-da-interface)
- [Temas](#temas)
- [Notas técnicas](#notas-técnicas)
- [Créditos](#créditos)

## Funcionalidades

- Vários cadernos de estação; cada um com a sua própria lista de QSOs.
- Os **registos de concurso** são opcionais — escolhe de um catálogo de 68 concursos integrados ao criar um caderno. O formulário QSO ganha um bloco *Troca de concurso* específico do concurso, a deteção de duplicados respeita a regra do concurso, e *Exportar .cbr* gera um ficheiro de submissão Cabrillo v3 além da habitual exportação ADIF.
- Ações do caderno: criar, renomear, eliminar, importar um ficheiro de registo (ADIF ou Cabrillo — formato detetado automaticamente), exportar para ADIF (`.adi`), mais *Exportar .cbr* (Cabrillo v3) para cadernos de concurso. Reimportar um ficheiro `.cbr` previamente exportado pela app restaura-o como o mesmo caderno de concurso.
- Formulário QSO agrupado em três blocos: **Dados da estação** (indicativo da estação, indicativo do operador, localizador próprio) que ficam fixos entre QSOs; **Modo de operação** (modo de propagação, satélite, modo, modo satélite, banda, banda RX) com campos de satélite visíveis apenas quando o modo de propagação é *Satélite*; e **Dados QSO** (indicativo contactado, localizador contactado, data/hora UTC ao editar, comentário, RST enviado, RST recebido).
- Taxonomia completa ADIF `MODE` → `SUBMODE` na lista pendente de modos — escolhe um modo pai (`SSB`, `MFSK`, …) ou vai diretamente a um submodo específico (`USB`, `FT4`, …); a aplicação guarda ambos os campos conforme ADIF e a tabela mostra o submodo específico quando existe.
- Enumeração completa dos modos de propagação ADIF (SAT, RPT, EME, ES, MS, Aurora, etc.) como lista pendente.
- Catálogo completo de satélites AMSAT (~110 satélites) e uma lista pendente **Modo satélite** de dois níveis: códigos preferidos de duas letras uplink/downlink no topo (LU, LV, SX, UU, UV, VA, VU, VV) e as designações legadas de uma letra (A/B/J/K/L/R/S/T/U/V/W/X) agrupadas como *obsoletas* em baixo. A escolha de um modo satélite ajusta automaticamente `BAND` (uplink) e `RX band` (downlink).
- Editar e eliminar qualquer QSO (com confirmação ao eliminar).
- Valores predefinidos sensatos: data/hora UTC pré-preenchida para *agora*, RST predefinido por modo (59 para modos de voz, 599 para CW/digital), dados da estação + banda + modo + modo de propagação fixos entre QSOs consecutivos (apenas os campos por contacto — indicativo, localizador deles, comentário, RST — são limpos após cada *Registar QSO*).
- Indicador de indicativo duplicado em tempo real (informativo — duplicados são permitidos).
- Coluna de bandeira do país derivada do prefixo do indicativo (cobre ≥99 % dos prefixos comuns de radioamadorismo, incluindo chamadas portáteis como `9A/M0NCG`).
- Autodeteção de **O meu localizador** com um toque: um botão 🌐 junto ao campo pede ao navegador as tuas coordenadas atuais e preenche o localizador Maidenhead de 6 caracteres (usa a API de Geolocalização do navegador — requer permissão do utilizador).
- Apresentação de data sensível ao locale na tabela QSO; o armazenamento ISO e a saída ADIF permanecem inalterados.
- Interface disponível em **28 idiomas** (inglês mais 22 em escrita latina, 5 em cirílico e grego); seletor com emoji de bandeira no cabeçalho.
- Temas claro / escuro (claro é o predefinido; o botão está no cabeçalho).
- Esquema responsivo adaptado para dispositivos móveis com botões de tamanho tátil.
- Funciona completamente offline — sem pedidos de rede em nenhum momento.
- Instalável como PWA (Adicionar ao ecrã inicial / Instalar aplicação) quando alojado via HTTPS.

## Primeiros passos

Basta abrir `index.html` num navegador moderno. Sem etapa de compilação, sem instalação, sem servidor.

Se quiser alojá-lo, coloque os ficheiros estáticos (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, o único pacote `i18n.js` que carrega os 28 dicionários de idioma, e o único pacote `contests.js` que carrega as 68 configurações de concurso) em qualquer alojamento estático (GitHub Pages, Netlify, o seu próprio servidor web). Funciona também via `file://` — o registo do service worker é ignorado automaticamente no protocolo `file:`, pelo que abrir `index.html` diretamente do disco funciona corretamente.

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
  - **Dados da estação** — *Indicativo da estação* (o seu indicativo de transmissão, ADIF `STATION_CALLSIGN`), *Operador* (o indicativo do operador individual — diferente do *indicativo da estação* quando um operador convidado está ao microfone de uma estação de clube; ADIF `OPERATOR`) e *O meu localizador* (ADIF `MY_GRIDSQUARE`) com um botão 🌐 que preenche o localizador a partir da localização atual do seu navegador (API de Geolocalização — o navegador pedirá permissão na primeira vez). Estes ficam fixos entre QSOs na mesma sessão — defina-os uma vez e são transportados.
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

## Concursos

Um caderno pode opcionalmente ser um **registo de concurso** — escolhe um concurso na lista pendente *Concurso* no formulário de criação de caderno. Lista vazia = caderno normal (predefinido, comportamento existente inalterado).

Os registos de concurso obtêm:

- **Bloco de troca de concurso** no formulário QSO, renderizado dinamicamente a partir do esquema do concurso selecionado. Os tipos de campo são `text`, `number` e `serial` (auto-incremental, apenas leitura). Os campos marcados como *sticky* (a tua própria zona / condado / distrito / potência / idade / …) são pré-preenchidos com o valor do QSO anterior; os campos por QSO (a zona deles, o número de série deles, …) são limpos após cada *Registar QSO*.
- **Emblema de concurso** junto ao nome do registo no cabeçalho de detalhe.
- **Deteção de duplicados** que respeita a `duplicateRule` do concurso (`per-band-mode`, `per-band`, `per-day` ou `off`). O chip continua a ser apenas informativo — nunca bloqueia a submissão.
- **Chip de aviso** quando o UTC atual cai fora de qualquer uma das janelas de data declaradas pelo concurso (12 anos pré-carregados, 2026–2037), ou quando a banda / modo selecionados não estão no conjunto legal do concurso. Nunca bloqueia.
- **Painel de informação de submissão** no cabeçalho de detalhe: um formulário em linha para os campos de cabeçalho Cabrillo que o concurso declara (categoria, potência, nome, clube, morada, soapbox, …). Os valores persistem no caderno, não por QSO.
- **Botão Exportar .cbr** no cabeçalho de detalhe, junto a *Exportar .adi*. Emite um ficheiro Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` pré-preenchidos a partir dos dados de estação do primeiro QSO, o resto do painel de informação de submissão, depois uma linha `QSO:` por contacto em ordem cronológica usando as colunas `sentTemplate` / `rcvdTemplate` do concurso.
- **Reimportação Cabrillo** através do botão padrão *Importar ficheiro de registo* — um ficheiro `.cbr` previamente exportado pela app (ou por qualquer outro logger que emita Cabrillo v3 padrão) volta a um caderno de concurso novo do tipo correto. O cabeçalho `CONTEST:` é comparado com o catálogo integrado; quando várias configurações partilham a mesma etiqueta (p. ex. `ARRL-10` corresponde tanto a `arrl-10m-dx` como a `arrl-10m-w`), a app desambigua comparando a letra de modo da linha QSO e o número de colunas com o modelo de cada candidato, e depois prefere a variante `-dx`. Os campos de cabeçalho (categoria, nome, clube, soapbox, …) reidratam o painel de informação de submissão; os valores de troca QSO reidratam `q.contestExchange` de acordo com o modelo do concurso.

### Catálogo de concursos integrado (68 configurações)

Agrupados por família:

- **Família CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Família ARRL** (9): ARRL DX SSB/CW (lado DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (cada um fornecido a partir de *ambas* as perspetivas DX e W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE e outros europeus** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Europa central/oriental assimétricos — ambas as perspetivas** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Clube russo / RadioSport** (12): Russian DX (ambos os lados), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Bielorrússia + Itália + Croácia + Espanha + RTTY ucraniano** (12): Belarus BFRR CW+SSB (ambos os lados), ARI DX (ambos os lados), Croatian 9A CW (ambos os lados), Spanish CNCW (ambos os lados), Ukrainian RTTY (ambos os lados).
- **Global** (2): All Asian DX CW+SSB.

Os concursos assimétricos (onde o país anfitrião e o lado DX enviam trocas diferentes) são fornecidos com **duas configurações** — uma para a perspetiva do país anfitrião (código regional fixo) e uma para a perspetiva DX (número de série fixo). O campo do lado recebido é um único campo de texto livre para que o operador possa escrever qualquer formato consoante o contacto.

Cada configuração inclui:

- Valores de troca de concurso reemitidos na exportação ADIF através de campos do espaço de nomes `APP_LQ_*`; o carimbo de cabeçalho `APP_LQ_CONTEST_ID` permite que uma reimportação posterior reidrate o caderno como o mesmo concurso com todos os campos intactos.
- 12 anos de janelas de data (2026–2037) para que o chip *fora da janela do concurso* continue útil durante uma década sem uma nova entrega.
- Um modelo Cabrillo que mapeia cada campo de troca para a coluna correta da linha `QSO:`.

Adicionar um novo concurso = cola um novo bloco IIFE em [`contests.js`](contests.js) na posição alfabética (cada concurso existente é delimitado por um comentário de cabeçalho `// ==== <id> ====`, por isso é fácil encontrar onde inserir). Não é necessária qualquer alteração em `index.html`, nenhuma alteração em `service-worker.js`, nenhuma alteração em `app.js` — o renderizador, o gestor de submissão, o detetor de duplicados, o ciclo ADIF e o emissor Cabrillo absorvem cada configuração como dados puros.

## Importação e exportação

- **Importar** qualquer ficheiro de registo — clique em *Importar ficheiro de registo* sob o formulário de criação de caderno e escolha um ficheiro `.adi` / `.adif` (ADIF) ou `.cbr` / `.cab` (Cabrillo v3). O formato é detetado automaticamente a partir da primeira linha do ficheiro (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → um aviso de "EDI ainda não suportado"). É sempre criado um novo caderno — a importação nunca se funde com um existente. As importações ADIF chegam como registos normais a menos que o cabeçalho traga um `APP_LQ_CONTEST_ID` escrito pela nossa própria exportação de concurso (nesse caso o registo é reidratado como registo de concurso desse concurso). As importações Cabrillo chegam sempre como registos de concurso — consulte a secção *Concursos* para saber como a etiqueta `CONTEST:` é comparada com o catálogo integrado.
- **Exportação ADIF**: clique em *Exportar .adi* no cabeçalho do caderno. É descarregado um ficheiro conforme com **ADIF 3.1.7**. O cabeçalho declara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` e `CREATED_TIMESTAMP` (UTC). Campos por QSO emitidos (quando não vazios): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguidos por cada campo ADIF adicional preservado na importação (ver abaixo).
- **Exportação Cabrillo** está documentada na secção *Concursos* acima — só está disponível para cadernos de concurso (o botão *Exportar .cbr* aparece no cabeçalho do caderno quando o registo tem um concurso).
- **Ciclo sem perdas**: na importação ADIF, qualquer campo que a aplicação não modela na sua interface (p. ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campos `APP_*`) é preservado no QSO e re-emitido literalmente na próxima exportação ADIF. Assim, exportar um ficheiro que foi ele próprio importado preserva tudo.
- O comprimento do campo em ADIF é tratado como uma contagem de bytes UTF-8, como a especificação exige, pelo que texto multi-byte (p. ex. caracteres acentuados em `COMMENT`) é analisado corretamente.

## Privacidade e dados

- Todos os dados são armazenados no `localStorage` do seu navegador sob a chave `local-qso:v1`.
- Nada é transmitido para lado nenhum. Não há backend, chamadas de API, telemetria nem análises.
- Limpar os dados do site no navegador, usar o modo privado/incógnito ou um navegador/dispositivo diferente significa um novo caderno vazio — use *Exportar .adi* para fazer cópias de segurança.

## Idioma da interface

Um seletor de idioma no cabeçalho cobre **28 idiomas**. Escolha um e o resto da interface é renderizado de imediato; a sua escolha é guardada junto com os seus registos e respeitada na próxima visita. O inglês é o predefinido.

Idiomas disponíveis (emoji de bandeira + nome nativo; ordenados alfabeticamente em cada sistema de escrita):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

As etiquetas técnicas universais permanecem na sua forma canónica em todos os idiomas: nomes de banda (`20m`, `70cm`, …), códigos de modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` e códigos de país ISO.

Falta uma string no seu idioma? Cada dicionário de idioma vive num único pacote [`i18n.js`](i18n.js), dividido em 28 secções por comentários de cabeçalho `// ==== <lang> ====`. Procure (grep) o cabeçalho do seu idioma para saltar para a sua secção, depois adicione/edite a chave. Adicionar um idioma completamente novo = cole um novo bloco IIFE em `i18n.js` na posição alfabética, adicione o código de idioma a `SUPPORTED_LANGS` em `app.js`, e adicione uma opção `<select>` em `index.html`.

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
  - `i18n.js` — um único pacote mantido manualmente que carrega os 28 dicionários de idioma. Cada idioma é uma IIFE autónoma que atribui a `window.I18N[<lang>]` um mapa plano chave→string. Os blocos são delimitados por comentários de cabeçalho `// ==== <lang> ====` — procure (grep) um para saltar para esse idioma. Empacotado num único ficheiro em vez de 28 ficheiros individuais porque os ficheiros de tradução são muito repetitivos (mesmos nomes de chave, mesma sintaxe de marcador de posição) e o gzip comprime todo o conjunto muito melhor do que 28 fluxos separados — poupa ~23 KB no primeiro carregamento e corta 27 pedidos HTTP. `t()` e `applyLanguage()` em `app.js` tratam das pesquisas (com fallback em inglês) e percorrem o DOM atualizando cada elemento `[data-i18n*]`.
  - `contests.js` — um único pacote mantido manualmente que carrega as 68 configurações de concurso. Cada concurso é uma IIFE autónoma que atribui a `window.CONTESTS[<id>]` um objeto de configuração conforme ao esquema (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Os blocos são delimitados por comentários de cabeçalho `// ==== <id> ====` — procure (grep) um para saltar para esse concurso. Empacotado num único ficheiro em vez de 68 ficheiros individuais porque as configurações de concurso são muito repetitivas (mesmo esquema, mesmo prefixo `APP_LQ_*`, mesmos nomes de campos de cabeçalho Cabrillo) e o gzip comprime todo o conjunto muito melhor do que 68 fluxos separados — poupa ~42 KB no primeiro carregamento e corta 67 pedidos HTTP. Carregado por uma única tag `<script>` em `index.html` antes de `app.js` para que o registo esteja povoado quando a lista pendente de Concurso é construída.
- Testado nos Chromium, Firefox e Safari recentes (ambiente de trabalho + iOS).

## Créditos

Criado por [YL3IM](https://www.qrz.com/db/YL3IM).

Obrigado a [A65BR](https://www.qrz.com/db/A65BR) Oleg pelas dicas inestimáveis que tornaram a parte de QSO por satélite realmente utilizável — as designações modernas de dois caracteres do modo satélite, o catálogo AMSAT e o ajuste automático uplink/downlink têm todos origem no seu feedback.

As bandeiras dos países baseiam-se em sequências de indicadores regionais Unicode. São apresentadas corretamente no macOS, iOS, Linux (com um tipo de letra emoji compatível com bandeiras) e Android. O Windows não inclui um tipo de letra de sistema para bandeiras, pelo que os emoji de bandeira podem aparecer como pares de letras.
