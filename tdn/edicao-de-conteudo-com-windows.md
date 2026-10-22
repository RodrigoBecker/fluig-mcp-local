---
title: "Edição de conteúdo com Windows"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=152802067"
scraped_at: "2026-03-09T03:47:17.698Z"
depth: 2
anchors: 15
child_links: 45
---

# Edição de conteúdo com Windows

# Introdução

---

A edição de conteúdo permite que o usuário faça a alteração do conteúdo de um documento publicado no TOTVS Fluig Plataforma sem precisar fazer o *download* e posteriormente uma nova publicação ou atualização manual.

Diferente da [edição colaborativa com o Google Drive](https://tdn.totvs.com/x/ukQYDQ), **os usuários precisam ter o Microsoft® Office instalado e configurado em seus computadores**.

# Requisitos para edição de conteúdo

---

A máquina de quem irá editar o documento precisa ter o sistema operacional Windows 7 ou superior. Os navegadores e as versões do Office compatíveis podem ser consultados na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade).

# Extensões suportadas

---

As extensões suportadas para edição de conteúdo com o Windows são:

DOC, DOCX, XLS, XLSX, PPT, PPTX, MPP e ODT.

# Suporte ao HTTP no Microsoft® Office

---

A edição de conteúdo com Windows é realizada por meio do protocolo [WebDav](https://tdn.totvs.com/x/QJoKDg). Porém, nem todas as versões do Microsoft® Office suportam o protocolo WebDAV. Neste caso, para verificação e correto funcionamento, é necessário ter suporte ao HTTP no Microsoft® Office.

Para testar se existe esta configuração no Office, basta abrir um documento direto por um link web, por exemplo: [http://calibre-ebook.com/downloads/demos/demo.docx](http://calibre-ebook.com/downloads/demos/demo.docx). No Office 2013 essa ação é realizada acionando **Abrir**>** ****Outros Locais da Web**, conforme imagem:

![](/download/attachments/152802067/image2014-5-12%2011%3A12%3A51.png?version=1&modificationDate=1408629116000&api=v2)

Para a edição de conteúdo de documentos com a extensão .doc ou .docx, por exemplo, a plataforma utiliza o protocolo MS-WORD. Esse protocolo é instalado na máquina do usuário durante a instalação do pacote MS Office. Para saber se ele está instalado, o usuário que deseja editar deve acessar em sua máquina a tela de Programas Padrão do Windows, e verificar se o protocolo MS-WORD existe e está associado ao Word. Se esse protocolo não existe, o usuário deve restaurar o seu MS Office ou instalar uma versão mais nova (de acordo com [os requisitos](https://tdn.totvs.com/x/E5MbCQ)).

# Editar conteúdo no TOTVS Fluig Plataforma

---

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 6](#)
- [Passo 7](#)

 - Para editar o conteúdo na plataforma o usuário precisa ter permissão de modificação ou permissão total sobre o documento.

![](/download/attachments/152802067/image2018-11-27_10-36-30.png?version=1&modificationDate=1543325810590&api=v2)

 - Na navegação, clique sobre o menu do documento e acione **Editar conteúdo**.

![](/download/attachments/152802067/image2018-11-27_10-39-36.png?version=1&modificationDate=1543325978200&api=v2)

 - Para continuar é necessário fazer o checkout do documento. Acione **Sim** para continuar.

![](/download/attachments/152802067/image2018-11-27_10-41-1.png?version=1&modificationDate=1543326061793&api=v2)

 - O navegador então tenta abrir o documento com o aplicativo associado ao protocolo **MS-WORD** ou **MS-EXCEL** instalados e configurados no computador;

 - Marque a opção **Abrir sempre esse tipo de link no app associado** e acione o botão **Abrir Url: Word Protocol**.![](/download/attachments/152802067/image2018-11-27_10-46-28.png?version=1&modificationDate=1543326394687&api=v2)

 - Agora o MS Office exibirá uma janela de confirmação. Para continuar acione **Sim**.

![](/download/attachments/152802067/image2018-11-27_10-51-42.png?version=1&modificationDate=1543326703147&api=v2)

 - Acione o botão **Habilitar Edição** para que o MS Office permita a edição do conteúdo.

![](/download/attachments/152802067/image2018-11-27_10-52-41.png?version=1&modificationDate=1543326762257&api=v2)

 - Após editar o conteúdo, acione o botão de **Salvar** e o documento na plataforma será atualizado também.

![](/download/attachments/152802067/image2018-11-27_10-55-51.png?version=1&modificationDate=1543326951583&api=v2)

 - Volte para a navegação de documentos e acesse a pasta **Meus Documentos** > **Check-out**.

 - Acione o botão de check-in e finalize a publicação. Para saber mais, acesse a documentação sobre [check-in](https://tdn.totvs.com/x/7sgGDg).

![](/download/attachments/152802067/image2018-11-27_10-57-51.png?version=1&modificationDate=1543327071430&api=v2)

## Inconsistências relacionadas com produtos do Office

---

É possível que uma estação de trabalho possua diferentes produtos do Office de versões diferentes, como por exemplo Lync 2013 e MS Office 2010. Com isso, ao utilizar o Webdav na plataforma, o documento não é aberto e na barra de endereços do browser terá o seguinte conteúdo: **ms-excel:ofv|u|http://fluigURL:8080/portal** (caso o documento seja uma planilha do Excel).

Para solucionar essa inconsistência, devem ser seguidos os seguintes passos:

1. Abra a instalação do produto Office 2013, nesse exemplo será utilizado o Lync 2013.
2. Escolha a opção "Adicionar ou remover recursos".
3. Expanda Ferramentas Office.
4. Selecione Suporte para Microsoft Sharepoint Foundation e clique em "Não disponível" (observar figura abaixo).
5. Confirme e, após isso, repare a instalação do Microsoft Office 2010 ou 2007.![](/download/attachments/152802067/Lync.png?version=1&modificationDate=1624379843770&api=v2)


<!-- anchors: EdiçãodeconteúdocomWindows-Introdução, EdiçãodeconteúdocomWindows-Requisitosparaediçãodeconteúdo, EdiçãodeconteúdocomWindows-Extensõessuportadas, EdiçãodeconteúdocomWindows-SuporteaoHTTPnoMicrosoft®Office, EdiçãodeconteúdocomWindows-EditarconteúdonoTOTVSFluigPlataforma, editarconteúdo, editarconteúdo-872616687, editarconteúdo-872616688, editarconteúdo-872616689, editarconteúdo-872616690, editarconteúdo-872616691, editarconteúdo-872616692, editarconteúdo-872616692, editarconteúdo-872616693, EdiçãodeconteúdocomWindows-InconsistênciasrelacionadascomprodutosdoOffice -->
