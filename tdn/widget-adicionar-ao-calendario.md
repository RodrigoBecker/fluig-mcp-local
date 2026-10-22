---
title: "Widget Adicionar ao calendário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=219694281"
scraped_at: "2026-03-09T05:10:50.315Z"
depth: 3
anchors: 22
child_links: 63
---

# Widget Adicionar ao calendário

# Índice

# Objetivo do componente

---

O *widget* Adicionar ao calendário permite a criação de eventos que, posteriormente, os interessados podem adicionar como um compromisso em seu calendário do Outlook, do Google, da Apple ou Yahoo.

# Instalação do componente Adicionar ao calendário

---

- Para que esse *widget* seja exibido na lista de *widgets* disponíveis para páginas, primeiramente é necessário fazer o *download* do código-fonte do componente (**Add-to-calendar**) no [diretório público do fluig](https://git.fluig.com/projects/SAMPLES/repos/add-to-calendar/browse) no Git. 
- Após acessar o repositório da *widget*, siga as instruções do [README.md](https://git.fluig.com/projects/SAMPLES/repos/add-to-calendar/browse/README.md) para compilar e dar *deploy* no componente. 

# Adicionando o widget em uma página

---

O passo a passo abaixo demonstra como incluir o *widget* Adicionar ao calendário em uma página da plataforma.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Acesse a página em que deseja adicionar o *widget* de calendário, acione o menu de configuração no canto superior direito e selecione a opção **Editar página.******

****

****

 - Selecione algum ***slot***da página em edição e acione**Adicionar uma nova widget****.******

****

****

 - No painel de seleção de *widgets*, navegue até a opção **Adicionar ao calendário**, localizada em **Personalizado → Fluig Store → Adicionar ao Calendário**, e acione **Adicionar**.

 ****

 ****

 - Após a inclusão do *widget* no *slot**,*** preencha os dados do evento e acione **Salvar**. Os campos **Nome do evento**, **Início** e **Término** são obrigatórios.

****

 - Após salvar as alterações no *widget*, acesse o menu de configuração no canto superior direito e selecione a opção **Publicar página**.

****

 - Após a publicação da página, será possível visualizar o *widget* e se desejado ,escolher um dos tipos de calendário para incluir o evento.

****

# Alterações para o widget Adicionar ao calendário

---

Para ter acesso ao código fonte do componente e efetuar alterações no *widget* padrão conforme as necessidades da sua empresa, siga os passos descritos abaixo**.**

Atenção

Caso deseje utilizar o componente padrão e não tenha interesse em personalizá-lo, o procedimento abaixo não é necessário.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)

 - Acesse o [repositório de exemplos do fluig](https://git.fluig.com/projects/SAMPLES), e selecione a opção **sample-fluigaddtocalendar**.****

****

****

 - No repositório do **sample-fluigaddtocalendar**, selecione a opção **Download** no menu lateral esquerdo e efetue o *download* na pasta de sua preferência.

 ****

 ****

 ****

 - Efetuado o download do **sample-fluigaddtocalendar,**acesse o fluig Studio, acione a opção **File → Import,**no menu superior esquerdo.

![](/download/attachments/219694281/Import1.png?version=1&modificationDate=1450198899000&api=v2)

 - Selecione a opção **General → Existing Projects into Workspace**.

![](/download/attachments/219694281/Import2.png?version=1&modificationDate=1450199192000&api=v2)

 - Selecione a opção **Select archive file**acione a opção **Browse...**e em seguida navegue até o local onde está localizado o arquivo: **sample-fluigaddtocalendar-master.zip** baixado no Passo 2, em seguida acione o botão **Abrir**.

![](/download/attachments/219694281/Import3.png?version=1&modificationDate=1450199277000&api=v2)

 - Para finalizar a importação acione o botão **Finish**.

 ![](/download/attachments/219694281/Import4.png?version=1&modificationDate=1450199640000&api=v2)

 - Após a finalização da importação do Projeto para o **fluig Studio**navegue até a raiz do Widget, **fluigStudio > wcm > widget > AddThisEvent**e selecione a raiz com o botão direito e acione a opção **Export**.

 ![](/download/attachments/219694281/Import5.png?version=1&modificationDate=1450199879000&api=v2)

 - Selecione a opção **Fluig > Exportar para o servidor Fluig**.

 ![](/download/attachments/219694281/Import6.png?version=1&modificationDate=1450200446000&api=v2)

 - Selecione o Servidor desejado e acione a opção **Finish**, após a finalização o widget estará disponível para ser adicionados nas páginas do WCM.

   - * Caso não tenha um servidor cadastrado no seu **fluig Studio,**siga esse tutorial: [Cadastrando servidor fluig no Studio](https://tdn.totvs.com/display/fluig/Cadastrando+servidor+fluig+no+Studio).

 ![](/download/attachments/219694281/Import7.png?version=1&modificationDate=1450200599000&api=v2)


<!-- anchors: WidgetAdicionaraocalendário-Índice, WidgetAdicionaraocalendário-Objetivodocomponente, WidgetAdicionaraocalendário-InstalaçãodocomponenteAdicionaraocalendário, WidgetAdicionaraocalendário-Adicionandoowidgetemumapágina, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, WidgetAdicionaraocalendário-AlteraçõesparaowidgetAdicionaraocalendário, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7, samples-8, samples-9 -->
