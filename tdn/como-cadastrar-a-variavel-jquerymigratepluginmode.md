---
title: "Como cadastrar a variável jQueryMigratePluginMode"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=563414690"
scraped_at: "2026-03-09T04:55:53.643Z"
depth: 3
anchors: 8
child_links: 44
---

# Como cadastrar a variável jQueryMigratePluginMode

# Índice

# Objetivo

O objetivo deste guia é apresentar como preencher a variável do plugin de migração do jQuery através dos dados adicionais da empresa e sua vantagem ao utilizá-lo. 

Seu principal valor está nos modos de uso do plugin entre desenvolvimento e produção.

No modo Desenvolvimento são exibidas mensagens no console do navegador utilizado mostrando o que está errado no seu código auxiliando no encontro de problemas, porém deixa o console "poluído" ou seja sobrecarregado.

Já no modo Produção as mensagens no console do navegador não são exibidas ocasionando uma limpeza na geração dos logs porém uma mensagem é exibida avisando que o plugin está em uso e qual sua versão.

## Cadastrando a variável jQueryMigratePluginMode no plugin jQuery

Para o cadastro da variável siga os passos abaixo:

- [Passo 01](#)
- [Passo 02](#)
- [Passo 03](#)
- [Passo 04](#)

 - Efetue a autenticação no TOTVS Fluig Plataforma utilizando o usuário **wcmadmin** e então acesse **Painel de controle** > **WCM** >**Empresas**;

![](/download/attachments/563414690/wcm%20empresas.png?version=1&modificationDate=1600694609233&api=v2)

 - Selecione a empresa que deseja cadastrar as variáveis e acione opção **Editar**;

![](/download/attachments/563414690/wcm%20editar%20empresa.png?version=1&modificationDate=1600694609200&api=v2)

 - A tela de dados da empresa será apresentada. Acione **Cadastrar dados adicionais**;

![](/download/attachments/563414690/wcm%20editar%20dados%20empresa.png?version=1&modificationDate=1600694609167&api=v2)

 - A tela de Dados adicionais da empresa será apresentada. No campo **Chave** informe a variável:

   jQueryMigratePluginMode| valor: DEVELOPMENT ou PRODUCTION | Para definir qual o modo entre Desenvolvimento e Produção | Quando nada é definido, ele está em modo DEVELOPMENT por "padrão".

![](/download/attachments/563414690/wcm%20jQueryMigratePluginMode.png?version=1&modificationDate=1600694609123&api=v2)

 - Acione o botão **Salvar** para registrar a variável nos dados adicionais da empresa.

Atenção!

A configuração dessa variável é feita por empresa, e não para o sistema como um todo.


<!-- anchors: ComocadastraravariáveljQueryMigratePluginMode-Índice, ComocadastraravariáveljQueryMigratePluginMode-Objetivo, ComocadastraravariáveljQueryMigratePluginMode-CadastrandoavariáveljQueryMigratePluginModenopluginjQuery, sample, sample-1, sample-2, sample-3, sample-4 -->
