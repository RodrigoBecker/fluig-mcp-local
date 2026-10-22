---
title: "Bloquear ação download de documento para Android"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=511548770"
scraped_at: "2026-03-09T04:12:26.051Z"
depth: 2
anchors: 20
child_links: 69
---

# Bloquear ação download de documento para Android

# Índice

# Bloquear download de documentos

---

Os procedimentos abaixo demonstram como bloquear no My Fluig o *download* de documentos que tenham essa opção desabilitada pelo publicador/administrador.

## Configurando permissão de download de documentos no My Fluig

---

É possível configurar permissão de *download* para visualização de documentos no aplicativo Android. Para realizar esta alteração siga os passos abaixo: 

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Efetue a autenticação no TOTVS Fluig Plataforma pela web utilizando o usuário **wcmadmin** e acesse **Painel de Controle  → WCM → Empresas**.

 - Selecione a empresa que deseja alterar e então clique na opção **Editar**.

 - A tela de edição de empresa será apresentada. Clique no botão **Cadastrar dados adicionais****.**

 - A tela de dados adicionais da empresa será apresentada. No campo **Chave,**informe o valor **enableDocumentSecurityOnMobile **e no campo **Valor **informe:

**true:**  Para que a configuração de permissão de *download* do documento definida pelo publicador seja considerada na visualização pelo My Fluig.

**false:** Para habilitar a visualização do documento através do dispositivo móvel aos usuários que possuam permissão de Leitura (ou superior), independente da configuração definida pelo publicador.

 - Clique no botão **Salvar** para salvar os dados adicionais. O item **enableDocumentSecurityOnMobile **será adicionado na listagem de dados adicionais da empresa.

![](/download/attachments/511548770/enabledocumentdownload.jpg?version=1&modificationDate=1566847492137&api=v2)

## Configurando permissão de download do documento

---

Além de configurar a chave **enableDocumentSecurityOnMobile **na empresa, é necessário também configurar a permissão no documento, da seguinte forma:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acesse a pasta onde o documento está salvo e no final da linha do documento, clique no botão **Mais opções ** e selecione **Propriedades**.

 - Selecione a aba **Informações Gerais** e localize o campo **Permite download e impressão?**

 - Para que o documento possa ser baixado e visualizado no *mobile*, basta manter o campo assinalado.

 - Para impedir o *download* do documento, **desmarque esta opção**.**Conforme a imagem abaixo**:

![](/download/attachments/511548770/bloqueio%20de%20download%20no%20mobile.png?version=1&modificationDate=1727890975970&api=v2)

Hey!

Para garantir a segurança do arquivo físico, certifique-se em marcar a opção **Utiliza visualizador interno?**.

## Comportamento da configuração para o usuário no aplicativo

---

Acompanhe o funcionamento da configuração de bloqueio da ação de download e como ela será apresentada para o usuário nos passos abaixo:

- [Passo 1](#)
- [Passo 2](#)

 - Caso o usuário tenha permissão para fazer o *download* do documento, será possível baixar e visualizar o documento tocando na opção **Salvar documento**.

****

 - Caso o usuário não tenha permissão para fazer o *download* do documento, ou seja, quando na Fluig Plataforma o parâmetro **enableDocumentSecurityOnMobile** foi definido como *true*, o documento não será visualizado ou baixado e na tela será apresentada a seguinte mensagem:

![](/download/attachments/511548770/Screenshot_20241002-105333-portrait.png?version=1&modificationDate=1727891454590&api=v2)

## Permissões de download e impressão na aba Segurança

---

Nas propriedades de documentos e pastas, há uma opção chamada **Download e impressão** na aba **Segurança**, que permite especificar quais usuários/grupos terão o download do documento liberado.

Caso o Fluig esteja na Atualização 1.5.12 ou anterior, quando a chave **enableDocumentSecurityOnMobile** for configurada no ambiente, independentemente do valor atribuído a ela (*true* ou *false*), as permissões de download e impressão definidas na aba Segurança não serão levadas em consideração pelo My Fluig.

A partir da Atualização 1.5.13, as configurações da aba Segurança serão aplicadas no My Fluig, desde que a chave **enableDocumentSecurityOnMobile** tenha sido habilitada.

![](/download/attachments/511548770/aba%20seguran%C3%A7a%20em%20documentos%20e%20pastas.png?version=1&modificationDate=1727891787367&api=v2)

Atenção

Uma vez definido o parâmetro **enableDocumentSecurityOnMobile**, esta configuração será aplicada para os novos usuários que adicionarem sua conta no aplicativo do Fluig para Android.

Para usuários que já possuem a conta configurada em um dispositivo móvel Android, na próxima vez em que o aplicativo for aberto, esta configuração será atualizada. Caso o dispositivo estiver usando rede 3G, essa verificação é feita apenas uma vez por dia.


<!-- anchors: BloquearaçãodownloaddedocumentoparaAndroid-Índice, BloquearaçãodownloaddedocumentoparaAndroid-Bloqueardownloaddedocumentos, BloquearaçãodownloaddedocumentoparaAndroid-ConfigurandopermissãodedownloaddedocumentosnoMyFluig, 1, 1-1, 1-2, 1-3, 1-4, 1-5, BloquearaçãodownloaddedocumentoparaAndroid-Configurandopermissãodedownloaddodocumento, 1, 1-1, 1-2, 1-3, 1-4, BloquearaçãodownloaddedocumentoparaAndroid-Comportamentodaconfiguraçãoparaousuárionoaplicativo, 1, 1-1, 1-2, BloquearaçãodownloaddedocumentoparaAndroid-PermissõesdedownloadeimpressãonaabaSegurança -->
