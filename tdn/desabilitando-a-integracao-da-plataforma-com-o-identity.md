---
title: "Desabilitando a integração da plataforma com o Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=857583857"
scraped_at: "2026-03-09T04:13:20.303Z"
depth: 2
anchors: 8
child_links: 57
---

# Desabilitando a integração da plataforma com o Identity

# Pré-requisitos

---

- Possuir o TOTVS Fluig Plataforma em**atualização 1.6.x ou superior** instalado e configurado conforme as orientações do [Guia de Instalação fluig](https://tdn.totvs.com/x/zAJbDw).
- Possuir um contexto criado no TOTVS Identity, conforme as orientações da página [Criação de Conta no Identity](https://tdn.totvs.com/x/sAzMCg).
- Ter uma empresa cadastrada no Fluig e integrada com o Identity, de acordo com a documentação [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143).

# Acessar o wcmadmin com a plataforma integrada ao Identity

---

**01.**Quando realizada a integração TOTVS Fluig Plataforma com o TOTVS Identity, toda tentativa de acesso à tela de login do Fluig será direcionado para a tela do Identity.

**02.** Para acessar com o wcmadmin é necessário usar a seguinte URL:

- **http://[endereco]:[porta]/portal/home?wcmadmin=true**

Exemplos:

- [https://fluig.suaempresa.com/portal/home?wcmadmin=true](https://fluig.suaempresa.com/portal/home?wcmadmin=true)
- [http://10.80.80.219:8080/portal/home?wcmadmin=true](http://10.80.80.219:8080/portal/home?wcmadmin=true)

# Desabilitar a integração com o Identity

---

**01.** De posse dos dados de acesso do usuário **wcmadmin** do Fluig, é possível desabilitar a integração com o Identity.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acessar o Fluig com o usuário **wcmadmin**.

 - Acessar o **Painel de Controle** → agrupador **WCM** → **Empresas**.

 - Assinalar a empresa desejada e acionar **Editar**.

![](/download/attachments/857583857/image-2024-7-18_14-8-40.png?version=1&modificationDate=1721322520803&api=v2)

 - Acessar a aba **Autenticação**.

 - Assinalar **NÃO** na opção "**Deseja habilitar o acesso com Identity?**".

 - Clicar em **Salvar**.

![](/download/attachments/857583857/image-2024-7-18_14-12-12.png?version=1&modificationDate=1721322732497&api=v2)

 - Uma notificação push será exibida em tela informando que a autenticação via Identity foi desabilitada e sugerindo executar o processo de recuperação de senha para todos os usuários.

 - Marque a opção **Sim**.

![](/download/attachments/857583857/image-2024-7-18_14-15-22.png?version=1&modificationDate=1721322922397&api=v2)

 - Deverá aparecer um push na cor **verde** indicando que o processo de recuperação de senha foi realizado com sucesso.

![](/download/attachments/857583857/image-2024-7-18_14-18-43.png?version=1&modificationDate=1721323124087&api=v2)


<!-- anchors: DesabilitandoaintegraçãodaplataformacomoIdentity-Pré-requisitos, DesabilitandoaintegraçãodaplataformacomoIdentity-AcessarowcmadmincomaplataformaintegradaaoIdentity, DesabilitandoaintegraçãodaplataformacomoIdentity-DesabilitaraintegraçãocomoIdentity, identificar, identificar-identificar, identificar-identificar, identificar-identificar, identificar-identificar -->
