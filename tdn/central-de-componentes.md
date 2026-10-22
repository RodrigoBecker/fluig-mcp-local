---
title: "Central de componentes"
url: "https://tdn.totvs.com/display/public/fluig/Central+de+componentes#CentraldeComponentes-RedeploydeComponentes"
scraped_at: "2026-03-09T04:25:39.186Z"
depth: 3
anchors: 14
child_links: 47
---

# Central de componentes

# Índice

## Objetivo

A Central de Componentes permite gerenciar todos os componentes existentes na plataforma. É possível adicionar componentes adquiridos na [Fluig Store](http://www.fluigstore.com/) e, também, baixar componentes para personalizá-los e importá-los novamente. A opção de *download* é exibida apenas para componentes que permitem desenvolvimentos sobre a plataforma.

## Fazer download de um componente

Para personalizar um componente, primeiramente é necessário fazer o *download* do mesmo pela Central de Componentes.

![](/download/attachments/116359178/Download%20componente.gif?version=1&modificationDate=1598483569123&api=v2)

## Customização de um componente

Após o download do widget, o desenvolvedor deve realizar os seguintes passos **antes** de iniciar a alteração do widget:

1. Descompacte o .zip;
2. Importe o projeto Maven através do pom.xml no Eclipse ou sua IDE de preferência;
3. No arquivo application.info altere os seguintes parâmetros:**application.code**=NOME_DA_SUA_WIDGET
4. **locale.file.base.name**=NOME_DA_SUA_WIDGET
5. Remova o parâmetro **application.extendible**=true
6. Adicione o parâmetro **application.origincode**=NOME_DA_WIDGET_ORIGINAL. Exemplo: **socialtimeline**.

Altere o nome dos arquivos de internacionalização do diretório **src/main/resources**, substuindo o nome do widget atual pelo nome de seu widget:

1. ***.properties** para **NOME_DA_WIDGET.properties**
2. ***_en_US.properties** para **NOME_DA_WIDGET_en_US.properties**
3. ***_es.properties** para **NOME_DA_WIDGET_es.properties**
4. ***_pt_BR.properties** para **NOME_DA_WIDGET_pt_BR.properties**

Altere o contexto do projeto Web no arquivo **jboss-web.xml** localizado no diretório **src/main/webapp/WEB-INF**:
1. <context-root>**/NOME_DA_WIDGET**</context-root>

Pronto. O widget está pronto para ser customizado e compilado para poder ser feito o upload!

## Adicionar um componente no no TOTVS Fluig Plataforma

Para adicionar um componente no Fluig Plataforma, deve-se fazer login como administrador e seguir os passos abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acesse o* ***Painel de controle** → agrupador **Aplicativos** → **Central de componentes**.

![](/download/attachments/116359178/Painel%20de%20Controle%20165.png?version=1&modificationDate=1547044516253&api=v2)

Em atualizações anteriores à **1.6.5 (Liquid)**, a Central de componentes é acessada pela aba **WCM** no **Painel de controle**.

 - Acione **Escolher arquivo** e selecione o arquivo do componente para publicação na plataforma Fluig.

 - Acione **Enviar** para fazer a publicação.

![](/download/attachments/116359178/add_componente_2.gif?version=1&modificationDate=1498655595000&api=v2)

 - Após o envio, o componente será exibido na lista de componentes. É possível usar o campo Buscar, localizado no canto direito da página, para encontrá-lo.

![](/download/attachments/116359178/add_componente_3.png?version=1&modificationDate=1498655697000&api=v2)

## Ativar/Desativar um componente

Por padrão, ao incluir um novo componente na plataforma, este componente virá desativado. Para ativá-lo, deve-se seguir os passos abaixo.

- [Ativar](#)
- [Desativar](#)

 - Pesquise pelo componente que deseja-se ativar através do campo Busca localizado no canto direito da página.

 - Selecione o componente na lista de componentes.

 - Acione **Ativar**. Será exibida uma mensagem confirmando a ativação e o status do componente será alterado para Ativo.

![](/download/attachments/116359178/Ativar%20componente.gif?version=2&modificationDate=1598484101050&api=v2)

 - Pesquise pelo componente que deseja-se desativar através do campo Busca localizado no canto direito da página.

 - Selecione o componente na lista de componentes.

 - Acione **Desativar**. Será exibida uma mensagem confirmando a desativação e o status do componente será alterado para Inativo.

![](/download/attachments/116359178/Desativar%20componente.gif?version=1&modificationDate=1598531147713&api=v2)

Atenção!

Orientamos que o componente (.war ou .ear) não seja removido manualmente da pasta **apps/**. Essa remoção trará impactos consideráveis pois o comando de *undeploy* é acionado executando as seguintes ações para cada item abaixo:

- *Widget* (**.war**):Remove todas as *widgets* de todas as páginas;

*Layout* (**.war**):
- Remove todas as páginas***** que utilizam esse *layout*;

Tema (**.war**):
- Remove todas as páginas***** que utilizam esse tema;

*Component* (**.ear**):
- Remove todas as páginas desse componente.

Removendo manualmente, **o processo de recuperação é irreversível**, dado que todos os registros desse componente também serão removidos do banco de dados pois não serão mais utilizados.

***** As páginas internas não são removidas, como por exemplo: **cpaneladmin**

Recomendação

Recomendamos que o processo correto seja feito desativando estes componentes através da Central de componentes que é encontrada no menu **Painel de Controle** > agrupador **Aplicativos** > **Central de componentes**.

**

## Redeploy de componentes (Atualização de componentes)

Quando um componente é modificado, se ele possui o arquivo "pages.xml", é necessário clicar em **Ativar** novamente para criar as novas páginas.

A Central de componentes agirá da seguinte maneira:

- Para as páginas já existentes.Se a página possui rascunho, ele será liberado como uma versão nova e a página que está no componente será a próxima versão. Ex.:página criada pela publicação de componente - **v1**;
- usuário editou a página - criou um rascunho e não liberou;
- novo componente é *deployado* e a página em questão faz parte desse componente: rascunho criado pelo usuário é liberado, criando a **v2**. Com a publicação do componente, a **v3** da página é criada de acordo com o componente. Desta forma, o usuário não perde alterações realizadas - se ele desejar pode restaurar a **v2** como nova versão da página - **v4**.****

Para páginas sem rascunhos será criada apenas uma nova versão e liberada. Ex.:
- página criada pela publicação de componente - **v1**;
- novo componente é *deployado* e a página em questão faz parte desse componente: com a publicação do componente, a **v2** da página é criada de acordo com o componente. Desta forma, o usuário não perde alterações realizadas - se ele desejar pode restaurar a **v1** como nova versão da página - **v3**.

Para as páginas novas.
- Será feita a criação e publicação delas.

Caso a nova versão do componente não tenha mais algumas páginas será necessário desativar e reativar o componente. Exemplo:

- componente publicado com 5 páginas;
- ativar o componente (criação das páginas);
- alteração do arquivo "pages.xml", removendo páginas;
- enviar novamente o componente com 2 páginas;
- desativar (exclui as páginas existentes);
- ativar novamente.

Se o componente não for desativado, as páginas ainda existirão.


<!-- anchors: Centraldecomponentes-Índice, Centraldecomponentes-Objetivo, Centraldecomponentes-Fazerdownloaddeumcomponente, Centraldecomponentes-Customizaçãodeumcomponente, Centraldecomponentes-AdicionarumcomponentenonoTOTVSFluigPlataforma, exemplos, exemplos-1, exemplos-2, exemplos-3, Centraldecomponentes-Ativar/Desativarumcomponente, exemplos2, exemplos2-5, exemplos2-6, Centraldecomponentes-Redeploydecomponentes(Atualizaçãodecomponentes) -->
