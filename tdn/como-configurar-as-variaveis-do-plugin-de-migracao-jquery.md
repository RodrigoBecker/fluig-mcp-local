---
title: "Como configurar as variáveis do plugin de migração jQuery"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=561640995"
scraped_at: "2026-03-09T03:48:13.723Z"
depth: 2
anchors: 9
child_links: 44
---

# Como configurar as variáveis do plugin de migração jQuery

# Índice

# Objetivo

O objetivo deste guia é apresentar como preencher as variáveis do plugin de migração do jQuery através dos dados adicionais da empresa e sua vantagem ao utilizá-lo. 

Seu principal valor está nos modos de uso do plugin entre desenvolvimento e produção. 

No modo Desenvolvimento são exibidas mensagens no *console* do navegador utilizado mostrando o que está errado no seu código auxiliando no encontro de problemas, porém deixa o console "poluído" ou seja sobrecarregado. 

Já no modo Produção as mensagens no *console* do navegador não são exibidas ocasionando uma limpeza na geração dos *logs*porém uma mensagem é exibida avisando que o plugin está em uso e qual sua versão. Além de definir se o plugin estará habilitado para uso ou não.

## Configurando variáveis do jQuery e jQuery Migrate

Adicionamos duas variáveis para controlar o plugin de migração do jQuery. Uma para habilitar ou desabilitar ele e outra para escolher o modo, desenvolvimento ou produção. Porém essas variáveis não vem preenchidas por padrão, sendo necessário o administrador da empresa preencher elas caso ache necessário.

Na [release 1.8-Mist](https://tdn.totvs.com/x/T5iWK) do TOTVS Fluig Plataforma, o plugin do jQuery está desabilitado por padrão.

Portanto quando a chave **disablejQueryMigratePlugin **não existir ou o estiver com o valor **true** inserido, o plugin jQuery estará desabilitado fazendo com que algumas funcionalidades fiquem indisponíveis, como as modais por exemplo. Para saber melhor quais os impactos que podem ocorrer recomendamos a leitura da documentação [Atualização jQuery - Como identificar o que precisa ser atualizado?](https://tdn.totvs.com/x/zA2eI).

- [Passo 01](#)
- [Passo 02](#)
- [Passo 03](#)
- [Habilitando o plugin jQuery](#)
- [Desabilitando o plugin jQuery](#)

 - Efetue a autenticação no TOTVS Fluig Plataforma utilizando o usuário **wcmadmin** e então acesse **Painel de controle** > **WCM** >**Empresas**

![](/download/attachments/561640995/wcm%20empresas.png?version=1&modificationDate=1598971161567&api=v2)

 - Selecione a empresa que deseja incluir as variáveis e acione opção **Editar**;

![](/download/attachments/561640995/wcm%20editar%20empresa.png?version=1&modificationDate=1598971161483&api=v2)

 - A tela de dados da empresa será apresentada. Acione **Cadastrar dados adicionais**;![](/download/attachments/561640995/Cadastrar%20dados%20adicionais.png?version=1&modificationDate=1661887252067&api=v2)

Nesta r[elease 1.8-Mist](https://tdn.totvs.com/x/T5iWK) o plugin jQuery foi desabilitado por padrão. Neste passo iremos mostrar como habilita-lo novamente. 

 - Com a tela de dados adicionais aberta, insira a chave **disablejQueryMigratePlugin** com o valor ***false***. Isso significa que o plugin será habilitado novamente. Após isso, acione **Salvar**. Como no exemplo abaixo:

![](/download/attachments/561640995/habilitar%20jquery%20migrate.png?version=1&modificationDate=1661887750663&api=v2)

Você pode definir qual o modo que deseja da chave **jQueryMigratePluginMode** também, o valor **DEVELOPMENT** significa que ele está em modo de **desenvolvimento**. Já o modo **PRODUCTION** significa que ele está em modo de **produção**. 

   - Quando nada é definido, ele está em modo DEVELOPMENT por **padrão**.

Caso queira desabilitar o plugin, basta seguir os passos abaixo.

 - Siga os passos **01** a **03** descritos acima. 

 - Com a tela de dados adicionais aberta, insira a chave **disablejQueryMigratePlugin** com o valor ***true***. Isso significa que o plugin será desabilitado. Após isso, acione **Salvar**. Como no exemplo abaixo:

![](/download/attachments/561640995/desabilitar%20jquery.png?version=1&modificationDate=1661888623267&api=v2)

Você pode definir qual o modo que deseja da chave **jQueryMigratePluginMode** também, o valor **DEVELOPMENT** significa que ele está em modo de **desenvolvimento**. Já o modo **PRODUCTION** significa que ele está em modo de **produção**. 

   - Quando nada é definido, ele está em modo DEVELOPMENT por **padrão**.


<!-- anchors: ComoconfigurarasvariáveisdoplugindemigraçãojQuery-Índice, ComoconfigurarasvariáveisdoplugindemigraçãojQuery-Objetivo, ComoconfigurarasvariáveisdoplugindemigraçãojQuery-ConfigurandovariáveisdojQueryejQueryMigrate, sample, sample-1, sample-2, sample-3, sample-4, sample-5 -->
