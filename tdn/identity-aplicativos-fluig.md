---
title: "Identity | Aplicativos Fluig"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Aplicativos+Fluig"
scraped_at: "2026-03-09T04:57:58.653Z"
depth: 3
anchors: 7
child_links: 43
---

# Identity | Aplicativos Fluig

# Visão geral

---

O TOTVS Fluig Plataforma possui integração nativa com o TOTVS Identity, no entanto, essas configurações possuem algumas especificidades que detalharemos nessa documentação.

# Pré-requisitos

---

- Possuir um contexto criado no Identity, conforme as orientações da página [Criação de Conta no Identity](https://tdn.totvs.com/x/sAzMCg).
- Possuir o Fluig instalado, configurado e atualizado, conforme as orientações do [Guia de Instalação fluig](https://tdn.totvs.com/x/zAJbDw) e do [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186).
- Pretensão de realizar a [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143).
- Pretensão de habilitar o [Modo de Provisionamento Fluig](/display/fluig/Modo+de+Provisionamento+Fluig) *(opcional)*.

# Configurando o aplicativo Fluig

---

**01.** Acionar o menu **Aplicativos**.

**02.** Localizar o****aplicativo**Fluig**na lista.

**03**. Acionar o aplicativo e [obter o applicationId](https://tdn.totvs.com/pages/viewpage.action?pageId=344457998#Identity|Obterpar%C3%A2metros-ObterapplicationId).

**04.**O aplicativo Fluig de escolha deve possuir o **applicationId 42**.

**05.** Realizar a [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143).

# Habilitando o modo de provisionamento no aplicativo Fluig

---

**01.** Acionar o menu **Aplicativos**.

**02.** Localizar o****aplicativo**Fluig**na lista.

**03**. Acionar o aplicativo e [obter o applicationId](https://tdn.totvs.com/pages/viewpage.action?pageId=344457998#Identity|Obterpar%C3%A2metros-ObterapplicationId).

**04.**O aplicativo Fluig de escolha deve possuir o **applicationId 42**.

**04.** Acionar a opção **Clonar** para criar um novo aplicativo com as mesmas propriedades do atual.

**05.** Habilitar o [Modo de Provisionamento Fluig](/display/fluig/Modo+de+Provisionamento+Fluig).

Atenção

Não se deve habilitar o **modo de provisionamento** no aplicativo **Fluig** com **applicationId****42**, pois trata-se da integração nativa com o Identity. Para ativar o modo de provisionamento, é necessário **clonar** o aplicativo, obrigatoriamente. Descumprir essa recomendação ocasionará erros na integração.

# Exemplificando os termos: contexto e empresa

---

Importante

**01. Contexto:** É o cadastro da empresa dentro do Identity, como se fosse a abertura de uma conta. Por padrão, são criados **dois**contextos: **produção** (*[.fluigidentity.com](http://fluigidentity.com)) e **homologação** (*[.customerfi.com](http://customerfi.com)), ambos com o mesmo Administrador Corporativo.

Não é necessário nenhuma configuração extra para que o usuário acesse os contextos, basta apenas aceitar o convite enviado por e-mail e definir a senha de login.

O Administrador Corporativo consegue cadastrar diversos sistemas através dos protocolos de autenticação de mercado (Thick, Plugin, SAML e Executável SAML). Esses sistemas serão os **Aplicativos** dentro do Identity, por exemplo, Fluig, RM, Protheus, Datasul, Jira, etc.

**02. Empresa (ou tenant):**A****criação da empresa é realizada no Fluig utilizando o usuário **wcmadmin**. Nesse caso, a configuração da empresa é fundamental, pois definirá as principais características na plataforma, tais como seu administrador, volume, etc.

É possível adicionar **mais de uma empresa** em uma mesma instalação do Fluig. Cada empresa será identificada com um **código (ou tenant)**, escolhido pelo próprio administrador.

**01.** Para fins didáticos, vamos considerar que a empresa **EXEMPLAR S. A.**possui **dois contextos** criados no Identity **(produção e homologação)**. As URLs de acesso são:

- **Produção:** [exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/)
- **Homologação: **[exemplar.customerfi.com](http://exemplar.customerfi.com/)

**02.** No Identity, é permitido adicionar quantos **aplicativos Fluig** houver necessidade, tanto em **produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com)), como em **homologação** ([exemplar.customerfi.com](http://exemplar.customerfi.com/)). Entretanto,****cada contexto****do Identity suporta a **integração** com apenas **uma** **empresa** (ou *tenant*) do Fluig. 

**03.** Ainda utilizando um exemplo hipotético, a empresa **EXEMPLAR S. A.**possui**duas instalações** do **Fluig**. Sua equipe interna definiu uma instalação como **ambiente de produção**, e a outra, como **ambiente de****homologação.**As URLs de acesso e seus respectivos IPs são:

- **Fluig Produção:** [https://exemplar-prod.fluig.com](https://exemplar-prod.fluig.com/) (IP: 100.11.0.1)
- **Fluig Homologação: **[https://exemplar-homol.fluig.com](https://exemplar-homol.fluig.com/) (IP: 200.22.0.2)

**04.** O **Fluig Produção**possui **três empresas** cadastradas com os códigos (ou *tenants*) **1, 2 e 3**. Na prática, trata-se de **uma única** instalação Fluig, com 3 empresas e 3 códigos distintos:

- **Empresa 1:** [https://exemplar-prod.fluig.com/portal/1/home](https://exemplar-prod.fluig.com/portal/1/home)
- **Empresa 2: **[https://exemplar-prod.fluig.com/portal/2/home](https://exemplar-prod.fluig.com/portal/2/home)
- **Empresa 3:** [https://exemplar-prod.fluig.com/portal/3/home](https://exemplar-prod.fluig.com/portal/3/home)

**05.**Já o**Fluig Homologação** possui **duas empresas** cadastradas com os códigos (ou *tenants*)**A e B**. Na prática, trata-se de **uma única** instalação Fluig, com 2 empresas e 2 códigos distintos:

- **Empresa A: **[https://exemplar-homol.fluig.com/portal/A/home](https://exemplar-homol.fluig.com/portal/A/home)
- **Empresa B:** [https://exemplar-homol.fluig.com/portal/B/home](https://exemplar-homol.fluig.com/portal/B/home)

# Cenários possíveis de integração: contextos (TO) empresas

---

**01. Integração Produção (TO) Produção:**

Nesse cenário, realiza-se a integração do **Fluig Produção** ([https://exemplar-prod.fluig.com](https://exemplar-prod.fluig.com/)) com o contexto de **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/)).

Atenção

Para cada contexto do Identity é suportada a integração com apenas uma empresa do Fluig. Sendo assim, o administrador deverá escolher em qual **empresa (1, 2 ou 3)** do **Fluig Produção** a integração será habilitada.

![](/download/attachments/817642448/image-2024-1-2_10-57-7.png?version=1&modificationDate=1704203827730&api=v2)

**02. Integração Homologação (TO) Homologação:**

Nesse cenário, realiza-se a integração do **Fluig Homologação** ([https://exemplar-homol.fluig.com](https://exemplar-homol.fluig.com/)) com o contexto de **Homologação** ([exemplar.customerfi.com](http://exemplar.customerfi.com/)).

Atenção

Para cada contexto do Identity é suportada a integração com apenas uma empresa do Fluig. Sendo assim, o administrador deverá escolher em qual **empresa (A ou B)** do **Fluig Homologação** a integração será habilitada.

![](/download/attachments/817642448/image-2024-1-2_10-57-52.png?version=1&modificationDate=1704203872523&api=v2)

**03. Integração (Produção AND Homologação) (TO) Tenants-****Produção:**

Nesse cenário, as **empresas 1 e 3**do **Fluig Produção**são integradas, respectivamente, aos contextos de **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/)) e **Homologação**([exemplar.customerfi.com](http://exemplar.customerfi.com/)). Na prática:

- **Fluig Produção/Empresa 1** ([https://exemplar-prod.fluig.com/portal/1/home](https://exemplar-prod.fluig.com/portal/1/home)) integrado ao contexto **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/))
- **Fluig Produção/Empresa 3**([https://exemplar-prod.fluig.com/portal/3/home](https://exemplar-prod.fluig.com/portal/3/home)) integrado ao contexto **Homologação**([exemplar.customerfi.com](http://exemplar.customerfi.com/))

![](/download/attachments/817642448/image-2024-1-2_10-58-5.png?version=1&modificationDate=1704203885067&api=v2)

**04. Integração (Produção AND Homologação) (TO) Tenants-Homologação:**

Nesse cenário, as **empresas A e B**do **Fluig Homologação**são integradas, respectivamente, aos contextos de **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/)) e **Homologação**([exemplar.customerfi.com](http://exemplar.customerfi.com/)). Na prática:

- **Fluig Homologação/Empresa A** ([https://exemplar-homol.fluig.com/portal/A/home](https://exemplar-homol.fluig.com/portal/A/home)) integrado ao contexto **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/))
- **Fluig Homologação/Empresa B**([https://exemplar-homol.fluig.com/portal/B/home](https://exemplar-homol.fluig.com/portal/B/home)) integrado ao contexto **Homologação**([exemplar.customerfi.com](http://exemplar.customerfi.com/))

![](/download/attachments/817642448/image-2024-1-2_10-58-22.png?version=1&modificationDate=1704203902217&api=v2)

**05. Integração Homologação****(TO) (Tenant-Produção AND Tenant-Homologação):**

Nesse cenário, a **empresa 2 **do** Fluig Produção** e a **empresa A**do **Fluig Homologação** são integradas ao contexto de **Homologação** ([exemplar.customerfi.com](http://exemplar.customerfi.com/)). Na prática:

- **Fluig Produção/Empresa 2** ([https://exemplar-prod.fluig.com/portal/2/home](https://exemplar-prod.fluig.com/portal/2/home)) integrado ao contexto **Homologação **([exemplar.customerfi.com](http://exemplar.customerfi.com/))
- **Fluig Homologação/Empresa A **([https://exemplar-homol.fluig.com/portal/A/home](https://exemplar-homol.fluig.com/portal/A/home)) integrado ao contexto **Homologação**([exemplar.customerfi.com](http://exemplar.customerfi.com/))

É um cenário possível por se tratar de duas instalações Fluig alocadas em servidores diferentes, com IPs distintos (100.11.0.1 e 200.22.0.2) e utilizando o mesmo contexto no Identity.

![](/download/attachments/817642448/image-2024-1-2_10-58-35.png?version=1&modificationDate=1704203915740&api=v2)

**06. Integração Produção****(TO) (Tenant-Produção AND Tenant-Homologação):**

Nesse cenário, a **empresa 3 **do** Fluig Produção** e a **empresa B**do **Fluig Homologação** são integradas ao contexto de **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/)). Na prática:

- **Fluig Produção/Empresa 3**([https://exemplar-prod.fluig.com/portal/3/home](https://exemplar-prod.fluig.com/portal/3/home)) integrado ao contexto **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/))
- **Fluig Homologação/Empresa B **([https://exemplar-homol.fluig.com/portal/B/home](https://exemplar-homol.fluig.com/portal/B/home)) integrado ao contexto **Produção**([exemplar.fluigidentity.com](http://exemplar.fluigidentity.com/))

É um cenário possível por se tratar de duas instalações Fluig alocadas em servidores diferentes, com IPs distintos (100.11.0.1 e 200.22.0.2) e utilizando o mesmo contexto no Identity.

![](/download/attachments/817642448/image-2024-1-2_10-58-47.png?version=1&modificationDate=1704203927073&api=v2)

# Saiba mais

---

- [Identity](/display/fluig/Identity)
- [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143)
- [Modo de Provisionamento Fluig](/display/fluig/Modo+de+Provisionamento+Fluig)


<!-- anchors: Identity|AplicativosFluig-Visãogeral, Identity|AplicativosFluig-Pré-requisitos, Identity|AplicativosFluig-ConfigurandooaplicativoFluig, Identity|AplicativosFluig-HabilitandoomododeprovisionamentonoaplicativoFluig, Identity|AplicativosFluig-Exemplificandoostermos:contextoeempresa, Identity|AplicativosFluig-Cenáriospossíveisdeintegração:contextos(TO)empresas, Identity|AplicativosFluig-Saibamais -->
