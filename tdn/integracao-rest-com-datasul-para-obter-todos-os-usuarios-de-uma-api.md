---
title: "Integração REST com Datasul para obter todos os usuários de uma API"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=649320092"
scraped_at: "2026-03-09T04:00:23.193Z"
depth: 2
anchors: 6
child_links: 53
---

# Integração REST com Datasul para obter todos os usuários de uma API

# Índice

# Integração REST com Datasul para obter todos os usuários de uma API

---

Nesse exemplo, é criado um *dataset* o qual faz uma integração REST com a API padrão "*users*" do Datasul, com o objetivo de obter os registros de todos os usuários cadastrados no Datasul.

O objetivo deste desenvolvimento é fazer uma integração REST com o produto Datasul para obter todos os usuários, ou seja, consumir uma API padrão do Datasul a qual retorna todos os usuários cadastrados. Mas, para que isso seja possível, é necessário que o ambiente no Fluig esteja configurado com o ambiente externo Datasul.

Portanto, o requisito fundamental é ter um ambiente Datasul com integração do tipo REST habilitada. O procedimento de habilitação dessa integração, poderá ser encontrada nesta [Documentação sobre Serviços no TOTVS Fluig Plataforma](https://tdn.totvs.com/pages/releaseview.action?pageId=243660796)[.](https://tdn.totvs.com/x/-PeFDg)

## Componentes utilizados

---

Vamos exemplificar o uso dos seguintes componentes Fluig:

- Criação de *dataset* customizado;
- Integração via REST com Datasul;
- Cadastro e consumo de serviço.

## Exemplo de tela

---

Esse é um exemplo do resultado à consulta ao *dataset*, através do painel de controle:

![](/download/attachments/649320092/image2021-11-11_11-16-12.png?version=1&modificationDate=1636640868233&api=v2)

## Requisitos para o funcionamento do desenvolvimento

---

- Datasul com versão 12.1.24 ou superior;
- Ter um ambiente Datasul com integração do tipo REST habilitada.

## Desenvolvimento

---

O código fonte desse *dataset* está disponível para visualização e download. Assim, é possível baixá-lo e ainda ajustá-lo ao seu negócio ou às suas necessidades do dia a dia!

****

**Clique aqui** para ver e baixar o código fonte desse dataset.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.


<!-- anchors: IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-Índice, IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI, IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-Componentesutilizados, IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-Exemplodetela, IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-Requisitosparaofuncionamentododesenvolvimento, IntegraçãoRESTcomDatasulparaobtertodososusuáriosdeumaAPI-Desenvolvimento -->
