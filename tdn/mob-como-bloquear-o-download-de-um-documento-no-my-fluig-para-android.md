---
title: "MOB - Como bloquear o download de um documento no My Fluig para Android?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243631482"
scraped_at: "2026-03-09T04:47:14.800Z"
depth: 3
anchors: 12
child_links: 42
---

# MOB - Como bloquear o download de um documento no My Fluig para Android?

# Índice

# Plataforma

**Aplicativo:** My Fluig

**Sistema Operacional:** Android

# Ocorrência

Existem documentos que foram publicados utilizando o visualizador interno e com a opção de download desabilitada para evitar o acesso ao arquivo físico. Porém, quando esses documentos são visualizados através do My Fluig em Android, o *download* do documento é realizado para o dispositivo.

# Causa

Devido às características próprio sistema operacional, arquivos com extensões como: docx, txt, doc, ppt, pptx, e dentre outros, são baixados para o dispositivo. Isso ocorre pois arquivos com estas extensões não são suportados pelo visualizador interno. No Android, apenas arquivos do tipo imagem, vídeo e PDF são exibidos diretamente no aplicativo.

Por esse motivo, os usuários que possuem permissão de Leitura (ou superior) conseguem realizar o *download* do arquivo físico ao visualizá-lo.

# Solução

Os passos abaixo demonstram como bloquear no My Fluig o *download* de documentos que tenham essa opção desabilitada pelo publicador/administrador.

## Configurando permissão de download de documentos no My Fluig

É possível configurar permissão de *download* para visualização de documentos no aplicativo Android, devido as limitações explicadas acima. Para realizar esta alteração siga os seguintes passos: 

1. Efetue a autenticação no Fluig Plataforma pela web utilizando o usuário **wcmadmin** e acesse **Painel de Controle  → WCM → Empresas**.
2. Selecione a empresa que deseja alterar e então clique na opção **Editar**.
3. A tela de edição de empresa será apresentada. Clique no botão **Cadastrar dados adicionais****.**
4. A tela de dados adicionais da empresa será apresentada. No campo **Chave,**informe o valor **enableDocumentSecurityOnMobile **e no campo **Valor **informe:
- **true**:  Para que a configuração de permissão de *download* do documento definida pelo publicador seja considerada na visualização pelo My Fluig.
- **false**: Para habilitar a visualização do documento através do dispositivo móvel aos usuários que possuam permissão de Leitura (ou superior), independente da configuração definida pelo publicador.
5. Clique no botão **Salvar** para salvar os dados adicionais. O item **enableDocumentSecurityOnMobile **será adicionado na listagem de dados adicionais da empresa.

![](/download/attachments/243631482/enabledocumentdownload.JPG?version=1&modificationDate=1467924067000&api=v2)

**Figura 1 - Clique no botão Salvar para salvar as alterações na empresa e efetivar a alteração.**

## Configurando permissão de download no documento

Além de configurar a chave **enableDocumentSecurityOnMobile **na empresa, é necessário também configurar a permissão no documento, da seguinte forma:

1. Acesse a pasta onde o documento está salvo e no final da linha do documento, clique no botão **Mais opções ** e selecione **Propriedades**.
2. Selecione a aba **Informações Gerais** e localize o campo **Permite download e impressão?**
3. Para que o documento possa ser baixado e visualizado no *mobile*, basta manter o campo assinalado.
4. Para impedir o *download* do documento, **desmarque esta opção**.                                                                                  

![](/download/attachments/243631482/bloqueio%20de%20download%20no%20mobile.png?version=1&modificationDate=1727874987393&api=v2)

**Figura 2: Marque ou desmarque a opção "Permite download e impressão?" do documento**.

Hey!

Para garantir a segurança do arquivo físico, certifique-se em marcar a opção "**Utiliza visualizador interno?**"

## Qual será o comportamento desta configuração para o usuário no My Fluig?

- [Passo 1](#)
- [Passo 2](#)

 - Caso o usuário tenha permissão para fazer o *download* do documento, será possível baixar e visualizar o documento tocando na opção **Salvar documento.**

![](/download/attachments/243631482/Screenshot_20241002-102748-portrait.png?version=1&modificationDate=1727876028890&api=v2)

**Figura 3 - Tela de download de documento no fluig para Android.**

 - Será aberto as opções para salvar o arquivo no dispositivo. Como salvar no Drive por exemplo ou ainda enviar o arquivo físico por outros aplicativos de visualização.

 - Caso o usuário não tenha permissão para fazer o *download* do documento, ou seja, quando na Fluig Plataforma o parâmetro **enableDocumentSecurityOnMobile** foi definido como *true*, o documento não será visualizado ou baixado e na tela será apresentada a seguinte mensagem:

![](/download/attachments/243631482/Screenshot_20241002-105333-portrait.png?version=1&modificationDate=1727877360370&api=v2)

**Figura 4 - Mensagem informando que o documento não pode ser visualizado.**

****

## E as permissões de Download e Impressão da aba Segurança?

Nas propriedades de documentos e pastas, há uma opção chamada **Download e impressão** na aba **Segurança**, que permite especificar quais usuários/grupos terão o download do documento liberado.

Caso a plataforma esteja na Atualização 1.5.12 ou anterior, quando a chave **enableDocumentSecurityOnMobile** for configurada no ambiente, independentemente do valor atribuído a ela (*true* ou *false*), as permissões de download e impressão definidas na aba Segurança não serão levadas em consideração pelo My Fluig.

A partir da Atualização 1.5.13, as configurações da aba Segurança serão aplicadas no My Fluig, desde que a chave **enableDocumentSecurityOnMobile** tenha sido habilitada.

![](/download/attachments/243631482/aba%20seguran%C3%A7a%20em%20documentos%20e%20pastas.png?version=1&modificationDate=1727877579190&api=v2)

Atenção

Uma vez definido o parâmetro **enableDocumentSecurityOnMobile**, esta configuração será aplicada para os novos usuários que adicionarem sua conta no My Fluig para Android.

Para usuários que já possuem a conta configurada em um dispositivo móvel Android, na próxima vez em que o aplicativo for aberto, esta configuração será atualizada. Caso o dispositivo estiver usando rede 4G ou 5G, essa verificação é feita apenas uma vez por dia.

Para conferir o procedimento de como bloquear o download de documentos no My Fluig para Android, acesse [bloquear ação de download de documento para Android](https://tdn.totvs.com/x/Yp19Hg).


<!-- anchors: MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Índice, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Plataforma, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Ocorrência, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Causa, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Solução, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-ConfigurandopermissãodedownloaddedocumentosnoMyFluig, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-Configurandopermissãodedownloadnodocumento, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-QualseráocomportamentodestaconfiguraçãoparaousuárionoMyFluig?, samples, samples-1, samples-2, MOBComobloquearodownloaddeumdocumentonoMyFluigparaAndroid?-EaspermissõesdeDownloadeImpressãodaabaSegurança? -->
