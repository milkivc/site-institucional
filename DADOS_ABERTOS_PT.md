# Ecossistema de Dados Abertos e Governação de Infraestruturas em Portugal
## Uma Análise Multiaxial e Cirúrgica

> **Enquadramento Teórico:** Keller Easterling — *Extrastatecraft: The Power of Infrastructure Space*  
> **Âmbito:** Infraestruturas de dados do Estado Português — central, autárquico, judicial, geoespacial, oceânico, económico e educacional  
> **Repositório:** [milkivc/site-institucional](https://github.com/milkivc/site-institucional)  
> **Licença:** EUPL 1.2  

---

## 0. Premissa Conceptual

A governação contemporânea e o exercício do poder soberano não se circunscrevem às fronteiras territoriais físicas nem à promulgação de decretos legislativos nos moldes tradicionais do Estado-Nação. Na era digital, o poder manifesta-se através da **arquitectura invisível das infraestruturas de dados**.

A metodologia desta análise inspira-se no quadro teórico de **Keller Easterling** sobre a *extrastatecraft* — o poder do espaço infraestrutural —, postulado no qual os sistemas operativos da sociedade, os padrões técnicos de interoperabilidade, os formatos espaciais e as grelhas de dados ditam formas ocultas e altamente determinantes de política e poder, substituindo frequentemente o debate democrático pela **parametrização técnica**.

---

## 1. A Matriz Político-Administrativa Central e o Paradigma da Interoperabilidade

O Estado central português dispõe de uma infraestrutura de dados que reflecte a tensão dialéctica entre o imperativo cívico da transparência democrática e a complexidade técnica inerente à interoperabilidade de sistemas legados.

**Quadro regulatório vigente:**
- **Lei n.º 68/2021** — transpõe a Directiva (UE) 2019/1024, mandatando a indexação no portal nacional [dados.gov.pt](https://dados.gov.pt)
- **Iniciativa Mosaico** — uniformização do panorama historicamente fragmentado
- **Regulamento Nacional de Interoperabilidade Digital (RNID)** — Modelo de Dados da Administração Pública comum, facilitando a integração entre entidades estatais e o sector privado

---

## 2. A Arquitectura de Dados da Assembleia da República

O poder legislativo português representa um dos nós mais avançados e estruturados do panorama de dados abertos nacional. Desde a reformulação do portal em **março de 2018**, foi estabelecida uma política de disponibilização sistemática em formatos estruturados e abertos — **XML e JSON** — consumíveis via API ou extracção em massa.

### 2.1 Taxonomia dos Dados Parlamentares Abertos

| Categoria | Cobertura Temporal | Formato |
|---|---|---|
| Agenda Parlamentar | Futura (reuniões, plenárias, comissões) | JSON, XML |
| Atividades (debates, moções, votações) | Desde a II Legislatura | JSON, XML |
| Atividade dos Deputados | Desde a Assembleia Constituinte | JSON, XML |
| Composição Histórica dos Órgãos | Histórico completo | JSON |
| Diários Oficiais (múltiplas séries) | Histórico completo | XML, PDF |
| Diplomas e Resoluções Aprovados | Histórico completo | JSON |
| Delegações Parlamentares (APCE, NATO, UIP) | Histórico completo | JSON |

### 2.2 A Infraestrutura Extrastatal: Sociedade Civil e Reassemblagem de Dados

A verdadeira inovação sociotécnica ocorre frequentemente **fora** da infraestrutura oficial. Iniciativas da sociedade civil — visíveis no GitHub sob o projecto *"Central de Dados"* — reassemblam milhares de ficheiros JSON para construir ferramentas analíticas independentes que mapeiam:

- Redes complexas de influência e votações cruzadas
- O ecossistema de políticos e redes corporativas em Portugal ao longo das últimas décadas

Esta dinâmica ilustra a mecânica da infraestrutura extrastatal: **o Estado fornece o código-fonte bruto; a malha cívica transforma-o num mecanismo de governança auditável.**

---

## 3. A Arquitectura Documental do Sistema de Justiça e da Procuradoria-Geral da República

Se o poder legislativo avançou na *dataficação* estruturada, o ecossistema do sistema de Justiça e da PGR apresenta um paradigma mais conservador, ancorado em bases jurídico-documentais de arquitectura clássica e predominantemente textual.

### 3.1 Bases Jurídico-Documentais (ITIJ / DGSI)

O acesso à informação jurídica pública assenta hegemonicamente nas **Bases Jurídico-Documentais do ITIJ**, alojadas no portal [DGSI](https://www.dgsi.pt).

A varredura dos pareceres do Conselho Consultivo da PGR revela que estes operam como uma **jurisprudência administrativa de facto**. Acervo histórico seleccionado:

| Ano | Matéria | Relevância |
|---|---|---|
| 1976 | Perda de nacionalidade — Estado da Índia | Doutrina histórica da cidadania |
| 1994 | Acesso ao Ficheiro Central de Pessoas Colectivas vs. vida privada | Tensão RGPD avant la lettre |
| 2003 | Tutela administrativa — Casa do Douro | Intervenção do Estado em entidades reguladas |
| 2000s | CAE e CMEC — sector eléctrico liberalizado | Regulação de mercados infraestruturais |
| 2010s+ | Videovigilância, ordem pública e princípio da necessidade | Segurança vs. direitos fundamentais |

### 3.2 Conselho Superior do Ministério Público (CSMP)

O CSMP disponibiliza deliberações, atas, listas de antiguidade e relatórios anuais de inspecção. Publicações estruturantes recentes:

- **2023** — Regulamento do Movimento de Magistrados do Ministério Público
- **2025** — Estatuto do Núcleo de Ética e Deontologia
- **2026** — Valores de Referência Processual (VRP) para as Procuradorias dos Juízos Administrativos e Fiscais

### 3.3 Constatação Infraestrutural Primária

> ⚠️ **Ausência de API moderna e padronizada** para consumo massivo de decisões judiciais, pareceres doutrinários e deliberações do CSMP. A dependência de motores de busca internos baseados em formulários fechados (DGSI) mantém os dados da justiça numa **zona de opacidade algorítmica**, limitando severamente a aplicação de NLP e IA generativa por entidades independentes.

---

## 4. A Capilaridade Territorial: Fricção Burocrática e Dados Autárquicos

A varredura das camadas administrativas mais próximas do cidadão — **Municípios** e **Juntas de Freguesia** — revela a realidade tecnológica mais assimétrica de todo o ecossistema nacional. É aqui que o princípio da **data equity** é mais severamente testado.

### 4.1 O Repositório Descentralizado e Fragmentado de Atas e Deliberações

**Quadro legal:** Lei n.º 75/2013 (Lei das Autarquias Locais) — matriz de todo o procedimento administrativo territorial.

A pesquisa nos repositórios digitais dispersos das câmaras municipais revela um modelo de partilha assentando quase exclusivamente em **PDF estático** — frequentemente digitalizações visuais de papel, não ficheiros nascidos digitalmente.

**Exemplos de granularidade documental detectada:**

| Município | Conteúdo Documentado |
|---|---|
| **Mirandela** | Conhecimento regular e formal das actividades dos órgãos autárquicos |
| **Constância** | Delegação complexa de competências Câmara → Presidente; maiorias qualificadas de 2/3 na Assembleia Municipal |
| **Avis** | Alterações orçamentais; apoios a Alcórrego e Maranhão; Plano Municipal para a Igualdade; encargos plurianuais ao Estrela Alcorreguense; adesão à Associação de Municípios do Portugal Romano |
| **Portalegre** | Tensões políticas sobre relatórios financeiros dos SMAT; escrutínio da oposição |
| **Espinho** | Prorrogação de prazos (DL n.º 55/2020 e DL n.º 87-B/2022) para assunção de competências de acção social transferidas pelo Estado Central |

**Obstáculo estrutural:** A extracção em massa destes dados exige técnicas avançadas de **OCR** e *text mining* para reassemblar a vontade política local e escrutinar a despesa pública.

### 4.2 A Deliberação da CNPD e o Estrangulamento Operacional

As directrizes da **CNPD** (aprovadas a 18 de abril de 2023) determinam que atas publicadas na Internet contendo dados pessoais devem ser **previamente anonimizadas**, abrangendo qualquer detalhe que permita identificação indirecta face à comunidade local.

**Consequência prática:** Câmaras e juntas com parcos recursos, sem ferramentas automatizadas de *data masking*, debatem-se com expurgo documental manual — resultando em:
- Atraso considerável e estrutural na publicação; ou
- Decisão excessivamente conservadora de **não publicar de todo**, subvertendo inadvertidamente o princípio do dado aberto.

### 4.3 Plataformas e Grau de Interoperabilidade

| Entidade | Plataforma | Tipologia de Dados | Grau de Interoperabilidade |
|---|---|---|---|
| **Assembleia da República** | Portal Dados Abertos Parlamentar | JSON, XML, Atividades, Agendas, Iniciativas | **Elevado** — API nativa funcional |
| **PGR / Ministério Público** | Bases ITIJ (DGSI) e Portal Institucional | Pareceres, Atas CSMP, Relatórios | **Baixo** — HTML estático e PDF textual |
| **DGAL / Administração Central** | Portal Autárquico e Transparência Municipal | Finanças locais, transferências, estatísticas | **Médio** — CSV e XLS disponíveis |
| **Municípios (Câmaras e Assembleias)** | Sítios Institucionais Locais Dispersos | Atas (PDF anonimizados CNPD), Orçamentos | **Muito Baixo** — PDFs não estruturados |
| **Juntas de Freguesia (ANAFRE)** | Portal das Freguesias e Serviços Fechados | Modelos burocráticos, pareceres contabilísticos | **Baixo** — Repositório fechado a associados |

---

## 5. A ANAFRE e o Paradigma da Base Territorial

No estrato mais capilar da governação portuguesa, as Juntas de Freguesia dependem em altíssima medida de plataformas agregadoras, sendo o portal da **[ANAFRE](https://www.anafre.pt)** a estrutura de suporte vital.

O portal actua como repositório centralizado especializado, fornecendo:
- Minutas de atas padronizadas para reuniões de juntas e assembleias de freguesia
- Modelos de documentos para contratação pública e gestão de RH
- Compilações de legislação sobre finanças locais, recenseamento e actos eleitorais
- Ferramentas de pesquisa territorial hierárquica (distrito → região autónoma → concelho → freguesia)

**Dimensão político-institucional:** A ANAFRE actua como lóbi institucional junto da AR, evidenciado pelo apoio ao **Projecto de Lei n.º 416/XVI/1.ª** — que visa repor e desagregar as freguesias fundidas coercivamente pela **Lei n.º 11-A/2013** (período da Troika) —, acompanhando o procedimento especial aprovado pela **Lei n.º 39/2021**.

> Como postula Easterling: o Estado legisla a intenção de abertura de forma centralizada, mas a infraestrutura física e digital — ditada por constrangimentos de *software* proprietário e orçamentos curtos — **resiste a essa abertura de forma contínua e silenciosa**.

---

## 6. Infraestruturas Geoespaciais, Batimetria e a Gestão Tecnológica do Território

Seguindo as orientações de Easterling: **a cartografia de precisão não é a representação passiva do território; é a sua programação activa.** Quem controla a métrica geométrica, as projecções e as camadas de atributos, controla o paradigma do planeamento urbano, os direitos de propriedade e a extracção económica de valor.

### 6.1 O SNIG e o Imperativo INSPIRE

Coordendado pela **Direção-Geral do Território (DGT)**, o **Sistema Nacional de Informação Geográfica (SNIG)** é o grande nó nevrálgico de intersecção espacial da Administração Pública portuguesa. Integrado com a **Directiva INSPIRE (UE)**, o SNIG assegura que dados territoriais do Estado estejam disponíveis em formato harmonizado e interoperável a nível continental.

**Serviços normalizados disponibilizados pelo RNDG:**

| Serviço | Tipo | Utilização |
|---|---|---|
| **WMS** | Web Map Service | Visualização dinâmica de mapas em imagem |
| **WMTS** | Web Map Tile Service | Elevado desempenho em aplicações web |
| **WFS** | Web Feature Service | Download de geometria vetorial nativa e atributos tabulares |
| **KML / KMZ** | Formato de exportação | Cruzamento com ortofotomapas e OpenStreetMap |
| **OGC Context (XML)** | Pacote interoperável | Integração de múltiplas fontes geoespaciais |

### 6.2 Batimetria Oceânica e a Governação Extrastatal do Fundo do Mar

O território marítimo sob jurisdição portuguesa (ZEE + proposta de extensão da plataforma continental além das 200 milhas náuticas) é **esmagadoramente superior** em área à massa terrestre. A governança dos dados oceânicos assume proeminência geoestratégica vital.

O **Instituto Hidrográfico (IH)** — órgão da Marinha Portuguesa — publica dados batimétricos através do portal **[Gridmar](https://www.hidrografico.pt)**, em formatos científicos especializados:

| Formato | Descrição | Uso Principal |
|---|---|---|
| **GeoTIFF** | Ficheiros raster geo-referenciados de alta densidade | Análise visual e modelação de declives |
| **ASCII XYZ / Point Clouds** | Matrizes 3D de pontos gerados por sensores multibeam | Modelos Digitais de Elevação (MDE) |
| **WMS EMODnet** | Camadas servidas via protocolo WMS standard | Integração com rede europeia EMODnet e World Ocean Base |

**A base de dados batimétrica (Bathy DataBASE) enleia-se com:**
- **EMODnet** — European Marine Observation and Data Network
- **World Ocean Base** — base de alcance global

A classificação abrange não apenas valores isobáticos absolutos de profundidade, mas também a classificação geológica e reológica do tipo de fundo marinho.

> **Consequência infraestrutural (Easterling):** Os ficheiros XYZ e GeoTIFF da batimetria naval tornam-se a base operacional da governança do capitalismo oceânico — definindo a viabilidade de mineração de terras raras em mar profundo, cabos de telecomunicações submarinos, prospeção de jazidas minerais e parques de energia eólica *offshore*.

---

## 7. Economia, Microdados Estratégicos e a Luta pela Equidade de Dados

### 7.1 Interfaces Abertas e a Democratização do Dado Estatístico

| Plataforma | Entidade | Oferta | Formato / API |
|---|---|---|---|
| **BPstat** | Banco de Portugal | Séries cronológicas de contas nacionais, endividamento, balança de pagamentos | API moderna e documentada |
| **Bases de Microdados** | INE | 14 bases de Empresas; 10 de Inquérito às Condições de Vida; 6 da Sociedade da Informação; demografias, agricultura, mercado de trabalho | Protocolo (SPSS, Stata, R) |
| **PORDATA** | Fund. Francisco Manuel dos Santos | *Retratos dos Municípios*, *Retratos da Europa*, simulador IPC, perfis eleitorais | Interface web acessível |

A PORDATA aponta para um problema sistémico mais sombrio: a **falta de equidade real** por detrás das proclamadas estratégias de libertação de dados.

### 7.2 O Desafio Existencial da *Data Equity*

A literatura emergente sobre **Equidade de Dados Abertos Governamentais (EDAG)** postula que:

> O mero acto de publicar repositórios digitais abertos **não actua, por si só, na mitigação de assimetrias pré-existentes.** Se apenas grandes corporações tecnológicas, fundos de investimento especulativo e universidades com copiosos recursos detiverem o capital computacional e o capital humano pericial para extrair e treinar modelos de *machine learning* sobre estes dados, **a assimetria será exponenciada — não reduzida.**

### 7.3 A DGEEC e o Défice de Transição Digital na Educação

A **Direção-Geral de Estatísticas da Educação e Ciência (DGEEC)** possui mais de **75 anos de histórico estatístico**, cobrindo toda a taxonomia do ensino português:

- *Básico primário elementar* e *Telescola* (início dos anos 80)
- *Secundário técnico-profissional* e Secundário geral por unidades capitalizáveis (anos 90)
- Indicadores de acesso social e económico à ciência, sucesso e abandono escolar

**Diagnóstico quantitativo alarmante** de inquéritos da própria DGEEC:

| Obstáculo Declarado | % de Câmaras Municipais |
|---|---|
| "Recursos humanos e competências analíticas insuficientes" | **66%** |
| "Infraestrutura de TIC de base francamente insuficiente" | **53%** |

> **Conclusão capital:** A máquina não carece apenas de ver a informação aberta no portal governamental; carece da **alfabetização funcional para actuar analiticamente sobre ela.**

---

## 8. A Resposta Sistémica: PRR, POLEN e a Rede Nacional de Dados de Investigação

O hiato estrutural começa a ser atacado através do **Plano de Recuperação e Resiliência (PRR)**, nomeadamente:

- **Programa "Ciência Mais Digital"** — medida REC05i08
- **Programa Nacional de Ciência Aberta e Dados Abertos de Investigação (PNCADAI)**
- **Rede Nacional de Gestão de Dados de Investigação (GDI)** — coordenada pela **FCT (Fundação para a Ciência e a Tecnologia)**

### 8.1 Plataforma POLEN

Arquitetura modular com três componentes interdependentes:

| Componente | Designação | Função |
|---|---|---|
| **POLEN Blueprint** | Polo de serviços modulares base | Normalização de metadados e políticas de dados |
| **POLEN DataHub** | Central concentradora arquivística | Repositório federado de dados de investigação |
| **POLEN Sync** | Módulos de sincronização contínua | Automatização de deposição e actualização |

**Consórcio Re.Data:** Projecto mobilizador que aglutinou comunidades académicas nacionais em sinergias de capacitação metodológica.

### 8.2 Objectivo Matricial: Princípios FAIR

O desígnio programático central é a adopção massificada dos princípios **FAIR** nos acervos de investigação nacionais:

| Letra | Atributo | Descrição |
|---|---|---|
| **F** | Findable | Dados facilmente encontráveis por máquinas e humanos |
| **A** | Accessible | Acesso via rede digital aberta e autenticada |
| **I** | Interoperable | Semânticas estruturadas e vocabulários partilhados |
| **R** | Reusable | Reutilizáveis noutras frentes de investigação, maximizando o proveito de financiamento público |

---

## 9. Conclusão Analítica: A Infraestrutura como Política

A análise multiaxial do ecossistema de dados abertos português confirma, de forma empírica e cirúrgica, o postulado central de Easterling: **a infraestrutura é política.** Não apenas como suporte técnico da decisão política, mas como forma autónoma de poder — que opera silenciosamente, abaixo do limiar do debate democrático, através de formatos, protocolos, normas de interoperabilidade e arquitecturas de acesso.

As assimetrias identificadas — entre o poder legislativo altamente *dataficado* e o sistema de justiça em opacidade algorítmica; entre os municípios metropolitanos e as juntas de freguesia do interior; entre quem detém capacidade computacional e quem recebe dados que não consegue processar — não são falhas acidentais. São **a arquitectura.**

A superação destas assimetrias exige não apenas a abertura de mais dados, mas a construção simultânea de **capacidade de reassemblagem** — infraestrutura humana, técnica e financeira — distribuída de forma equitativa pelo território e pelos actores da sociedade civil.

---

<sub>Associação MILK · Movimento de Intervenções e Linguagens Kulturais e Arte · NIPC 518 706 451 · Lisboa, Portugal · Licença EUPL 1.2</sub>
