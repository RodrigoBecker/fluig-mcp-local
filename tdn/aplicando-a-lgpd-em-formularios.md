---
title: "Aplicando a LGPD em  Formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=668198808"
scraped_at: "2026-03-09T03:59:42.467Z"
depth: 2
anchors: 6
child_links: 52
---

# Aplicando a LGPD em  Formulários

# Índice

# Objetivo

---

O objetivo deste guia é descrever o desenvolvimento de formulários avançados no fluig, abordando algumas regras da LGPD (Lei Geral de Proteção de Dados, Lei nº 13.709).

# Pré-requisitos

---

Antes de iniciar o desenvolvimento de formulários, assista aos vídeos *how to* no item [Criação de formulários](https://tdn.totvs.com/x/fv4lE).

# LGPD

---

O LGPD foi implementado a fim de garantir transparência no uso dos dados das pessoas físicas em quaisquer meios. No que diz respeito aos formulários codificados publicados na plataforma, serão fornecidos os mecanismos para que os desenvolvedores de formulário via código, possam identificar quais campos de um formulário irão possuir dados pessoais ou sensíveis de usuários, preservando seu desenvolvimento e deixando-os compatíveis com a Lei Geral de Proteção de Dados.

Para configurar campos que possuem dados que devem ser monitorados, o desenvolvedor deve adicionar alguns atributos ao campo "input" do html.

**Campo normal:**

[?](#)

| `` |
| --- |

**Campo LGPD:**

[?](#)

| ````data-protection``=``"Nome do cliente"````data-protection-anonymizable````data-protection-sensitive````data-protection-name````data-protection-class-consent``=``"Necessário para futuras ofertas"``>` |
| --- |

**Atributos:Dado que será monitorado:**
data-protection="" ou data-protection="description"

**Dado que permite ser anonimizado:**
data-protection-anonymizable ou data-protection-anonymizable="true"

**Dado sensível:**
data-protection-sensitive ou data-protection-sensitive="true"

**Tipo de dado:**
data-protection-name
data-protection-mail
data-protection-cpf
data-protection-id (rg)
data-protection-driver-license (cnh)
data-protection-voter-id (título eleitoral)
data-protection-work-card (carteira de trabalho)
data-protection-passport
data-protection-other

**Classificação:**
data-protection-class-contract (execução de contrato)
data-protection-class-legal-obligation (obrigação legal)
data-protection-class-consent (consentimento)
data-protection-class-public-policies (execução de políticas públicas)
data-protection-class-scientific-analysis (estudos por órgão de pesquisa)
data-protection-class-dedicated-law (exercício regular de direito)
data-protection-class-life-protection (proteção da vida)
data-protection-class-health-guardianship (tutela de saúde)
data-protection-class-legitimate-interests (interesse legítimo)
data-protection-class-credit-protection (Proteção de crédito)

**Classificação com justificativa:**
data-protection-class-contract="".

Fique por dentro

Para saber mais detalhes sobre o LGPD e sua implementação, acesse [LEI GERAL DE PROTEÇÃO AOS DADOS PESSOAIS](https://tdn.totvs.com/pages/releaseview.action?pageId=514427789).


<!-- anchors: AplicandoaLGPDemFormulários-Índice, AplicandoaLGPDemFormulários-Objetivo, AplicandoaLGPDemFormulários-Pré-requisitos, AplicandoaLGPDemFormulários-LGPD, highlighter_35819, highlighter_452259 -->
