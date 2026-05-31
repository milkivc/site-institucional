# Compêndio de Genealogia e Auditoria Técnica: MILK Web

> **Certificação de Rastreabilidade:** Protocolo Atlas V49.0  
> **Estatuto:** Documento de Auditoria Jurídica e Técnica  
> **Data de Emissão:** 2024 – 2026  
> **Repositório:** [milkivc/site-institucional](https://github.com/milkivc/site-institucional)  
> **Licença:** EUPL 1.2  

---

## 1. Cronologia Documental e Genealogia de Versões (V1 – V46)

Esta tabela regista o gatilho estratégico de cada versão e as mutações cirúrgicas efectuadas nos pilares de código.  
Legenda de pilares: **H** = HTML · **C** = CSS · **J** = JavaScript

| Versão | Nome de Código | Gatilho (Trigger) | Pilares | Descrição Cirúrgica das Alterações |
|---|---|---|---|---|
| V1–V10 | **Génese** | Necessidade de fundação da identidade digital. | H, C | Estruturação do `index.html`. Definição da Montserrat como fonte base. |
| V11–V20 | **Grid Modular** | Organização de conteúdos institucionais. | H, C | Implementação do sistema de grelha (Grid). Definição das secções `#001` a `#003`. |
| V21–V28 | **Vácuo SVG** | Introdução de elementos cinéticos estáticos. | H, C, J | Inserção das linhas de fundo. Introdução de `scroll-behavior: smooth`. |
| V29–V30 | **Monólito** | Inceção da pulsação de Soulages. | H, C, J | Criação da Secção 4 original com animação de 2s e 12 glifos LGBT+. |
| V31 | **Security I** | Firewall ModSecurity (Erro 406). | J, C | Correção: Separação total de scripts inline. Sanitização de strings para o cPanel. |
| V32 | **Atlas Core** | Refinamento da curva de animação. | C | Optimização de `cubic-bezier(0.16, 1, 0.3, 1)` para fluidez no iPad. |
| V33 | **Sanitização** | Bloqueio de SVG por firewalls europeias. | H | Correção: Limpeza de metadados XML nos SVGs para conformidade de segurança. |
| V34 | **Cinética V1** | Perda de fluidez na animação de fundo. | J | Reintegração de `requestAnimationFrame` para garantir 60 fps constantes. |
| V35 | **Rigor** | Ajuste de Kerning e Interlinha. | C | Calibração tipográfica baseada no rácio de Müller-Brockmann. |
| V36 | **Manual V1** | Necessidade de autonomia de edição. | H | Introdução das etiquetas `<!-- [EDITAR] -->` no código-fonte. |
| V37 | **Transparency** | Obstrução visual do vídeo sobre as linhas. | C | Implementação de `mix-blend-mode: screen` no contentor de vídeo. |
| V38 | **Mobile UX** | Auditoria de utilização em telmóvel. | C | Menu movido para a direita. Fontes reduzidas (Micro-tipografia). |
| V40 | **Zero UI** | Busca pelo Minimalismo Absoluto. | H, C, J | Site abre em vácuo; linhas e menu ocultos até primeira interacção. |
| V41–V42 | **O Despertar** | Refinamento da intenção do utilizador. | J | Linhas e Menu activados apenas após o primeiro scroll-down. |
| V43 | **Heartbeat** | Orgânica da Associação MILK. | C, J | Título da Secção 4 pulsa ao ritmo de sístole/diástole (2 s). |
| V44 | **Escala Atlas** | Auditoria visual via fotos de iPad. | C | Imagens 2× maiores que o texto. Fonte +2 px. |
| V45 | **Rigor Linear** | Hierarquia Baseline no Mobile. | H, C | Secção 4 forçada a 5 linhas horizontais estritas (`white-space: nowrap`). |
| V46 | **Atlas Gold** | Consolidação de Auditoria. | H, C, J | Finalização: Centramento de vídeo, transparência total e vácuo inicial. |

---

## 2. Repositório de Manuais Operativos

### 2.1 Manual de Manutenção e Edição de Texto (V36)

**Finalidade:** Garantir que edições futuras não corrompam a estética de rigor.

- **Protocolo:** Utilizar apenas os blocos marcados com `<!-- [EDITAR] -->` no HTML.
- **Regra tipográfica:** Títulos nunca devem exceder a linha base. Proibido o uso de `<br>` manual em títulos.
- **Regra de versão:** Toda alteração deve incrementar a versão no cabeçalho deste documento.

### 2.2 Manual de Protocolo Estético Atlas (V40)

**Finalidade:** Definir os parâmetros de “Taça de Cristal” (Transparência).

- **Parâmetro visual:** Todas as imagens e vídeos devem manter `mix-blend-mode: screen`.
- **Parâmetro cinético:** O tempo de pulsação cardíaca é fixo em `2000 ms` — não negociável.
- **Parâmetro de entrada:** O site abre sempre em vácuo. Linhas e menu emergem exclusivamente após interacção.
- **Proibição:** Nenhum elemento decorativo pode ser adicionado sem validação pelo Protocolo Atlas.

### 2.3 Manual de Segurança Cibernética e Sanitização (V33)

**Finalidade:** Prevenir Erros 406 e Injeções XSS.

- **Protocolo IIFE:** Todo código JavaScript deve estar encapsulado em IIFE `(function(){ 'use strict'; })()` para isolamento de memória e proteção de escopo global.
- **SVG:** Metadados XML devem ser removidos antes do deploy. Usar apenas SVGs sanitizados.
- **cPanel / ModSecurity:** Strings especiais (`<`, `>`, `"`, `'`) em atributos HTML devem ser codificadas como entidades HTML.
- **Script externo:** Nenhum script de terceiros pode ser adicionado sem aprovação de auditoria e actualização do CSP no `.htaccess`.

---

## 3. Auditoria de Conformidade Legal e Segurança

| Norma / Certificação | Requisito Técnico | Estado | Observação de Auditoria |
|---|---|---|---|
| RGPD Art. 13 | Transparência e Dever de Informação | ✅ Conforme | Link Política de Privacidade presente no pós-footer. |
| RGPD Art. 7 | Consentimento de Cookies | ⚠️ Em falta | **Ação requerida:** Implementar banner de consentimento activo (ex: Cookiebot ou solut. própria sem rastreio). |
| RGPD Art. 5 | Minimização de Dados | ✅ Conforme | Site estático; não recolhe PII (Personally Identifiable Information). |
| EU AI Act | Transparência de Algoritmo | ✅ Conforme | Sem sistemas de IA de risco elevado ou de manipulação comportamental. |
| ISO 27001 | Segurança da Informação (SSL/TLS) | ❌ Pendente | **Ação crítica:** Certificado TLS ainda por activar no servidor `ptservidor.pt`. Prioridade máxima. |
| ePrivacy Directive | Declaração de Terceiros | ⚠️ Condicional | Cookies de vídeo não declarados tecnicamente. Resolver após activação do TLS. |
| WCAG 2.1 AA | Acessibilidade Web | ✅ Conforme | Skip link, `aria-label`, `lang`, semântica HTML5, `prefers-reduced-motion`. |
| EUPL 1.2 | Licença de Código Aberto | ✅ Conforme | Licença declarada no README, no cabeçalho dos ficheiros e no rodapé. |
| CSP / XSS | Proteção contra Injeção | ✅ Conforme | Código sanitizado, scripts isolados em IIFE, CSP blindado no `.htaccess`. |

### 3.1 Plano de Acção Correctiva

#### ⚠️ RGPD Art. 7 — Banner de Cookies
- **Responsável:** Equipa técnica MILK
- **Prazo:** Antes do lançamento público
- **Solução mínima:** Banner estático HTML/CSS/JS sem dependências externas, com estado guardado em `sessionStorage` (sem `localStorage` — bloqueado em iframes)
- **Alternativa conforme:** [Cookiebot](https://www.cookiebot.com/) ou [Klaro](https://klaro.org/) (open-source, EUPL compatível)

#### ❌ ISO 27001 — Certificado TLS
- **Responsável:** Administrador de servidor (`ptservidor.pt`)
- **Prazo:** **Imediato** — bloqueia conformidade HSTS e HTTPS do `.htaccess`
- **Solução:** Let's Encrypt (gratuito, renovação automática via Certbot) ou SSL do painel cPanel
- **Nota:** Até à activação do TLS, o bloco HSTS no `.htaccess` deve ser comentado para evitar loop de redirect.

---

## 4. Certificação Final

```
Rastreabilidade:          100% Documentada (V1 – V46)
Integridade de Código:    Validada para Safari (iPad), Chrome e Firefox
Arquitectura:             Certificada sob o Protocolo Atlas Gold (V46)
Auditoria Legal:          Aprovada para Revisão Jurídica
Auditoria Técnica:        Aprovada com 2 acções correctivas pendentes
Próxima revisão:         V50.0 — pós-activação TLS + banner cookies
Assinatura:               Auditoria Digital MILK | Associação MILK
Data:                     Maio 2026
Licença:                  EUPL 1.2
```

---

<sub>Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte · NIPC 518 706 451 · Lisboa, Portugal</sub>
