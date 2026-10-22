---
title: "Configurar e Habilitar Thumbnails"
url: "https://tdn.totvs.com/display/public/fluig/Configurar+e+Habilitar+Thumbnails"
scraped_at: "2026-03-09T03:10:48.334Z"
depth: 1
anchors: 13
child_links: 56
---

# Configurar e Habilitar Thumbnails

Atenção

Esta página é destinada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

# Índice

# Objetivo

---

O objetivo deste guia é habilitar a geração de *thumbnails* na plataforma utilizando o FFmpeg.

# Visão Geral

---

*Thumbnails* (miniaturas) são versões reduzidas de imagens ou vídeos que são apresentadas para tornar mais fácil o processo de visualização ou reconhecimento de um conteúdo.

Fique atento!

O recurso geração de *thumbnails* somente funcionará nas imagens e vídeos disponibilizados em **comunidades**.

![](/download/attachments/258277602/thumb.png?version=1&modificationDate=1551294944657&api=v2)

# Configuração

---

A configuração de geração de *thumbnail* é necessária **apenas** para as atualizações **1.6.5** e **inferiores**. A partir da atualização 1.7.0 Lake apenas o item [Habilitando *thumbnails*](https://tdn.totvs.com/display/public/fluig/Configurar+e+Habilitar+Thumbnails#ConfigurareHabilitarThumbnails-HabilitandoThumbnails) é necessário.

A plataforma gera *thumbnails* de alguns tipos de imagens e vídeos na exibição de documentos e galerias. Para configurar a geração de *thumbnails* siga o passo a passo a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - É necessário que o FFmpeg esteja instalado no servidor para que a plataforma consiga gerar *thumbnails*.

 - O FFmpeg pode ser obtido no [site oficial](http://ffmpeg.org/) do projeto, em versões [Linux](http://ffmpeg.org/download.html#build-linux) e [Windows](http://ffmpeg.zeranoe.com/builds/).

 - Existem três tipos de builds diferentes do FFmpeg. A plataforma utiliza a *build* de tipo ***Shared***, com DLLs separadas por biblioteca para uso externo, sendo esta portanto que deve ser baixada.

Versão do FFmpeg

O fluig necessita da versão 2.1*stable Shared* para gerar corretamente os *thumbnails*, compilado com as seguintes dependências:

   - Yasm

   - x264

   - libfdk_aac

   - libmp3lame

   - libopus

   - libogg

   - libvorbis

   - libvpx

 - Efetue o login utilizando o usuário **wcmadmin** e então acesse **Painel de Controle  →**aba**WCM → Configurações do Sistema**.

![](/download/attachments/258277602/image2016-10-19%2016%3A46%3A22.png?version=2&modificationDate=1611327158640&api=v2)

**Acessando a configuração de thumbnail**

 - Na tela de configurações do sistema, acesse a aba ***Thumbnail****.*

 - No campo **Caminho para o executável do FFmpeg**informe o caminho completo para o executável do FFmpeg instalado anteriormente, seguindo o seguinte modelo:

   Servidor Linux: [Diretório FFmepeg]/bin/ffmpeg

   - Servidor Windows: [Diretório FFmepeg]/bin/ffmpeg.exe

![](/download/attachments/258277602/image2016-10-19%2016%3A47%3A48.png?version=2&modificationDate=1611327450897&api=v2)

**Configuração de thumbnail**

****

 - Clique no botão **Salvar** para aplicar as alterações e concluir a configuração.

# Habilitando Thumbnails

---

A geração de *thumbnails* deve ser habilitada por empresa. Para habilitar a geração de *thumbnails* para uma determinada empresa siga o passo a passo abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Efetue o login utilizando o usuário **wcmadmin**, e então acesse **Painel de Controle  →**aba**WCM → Empresas**.

![](/download/attachments/258277602/Painel%20de%20controle%20wcmadmin%20165.png?version=1&modificationDate=1611326747860&api=v2)

**Acessando o cadastro de empresas**

****

 - Selecione a empresa que deseja habilitar a geração de *thumbnail* e clique no *link***Editar**.

![](/download/attachments/258277602/empresa1.png?version=1&modificationDate=1611326888040&api=v2)

**Selecionando empresa para habilitar thumbnail**

****

 - A tela de edição de empresa será apresentada. Assinale a opção **Habilitar geração de thumbnails.**

****

**Habilitando a geração de thumbnails**

****

 - Clique no botão **Salvar** para salvar as alterações e habilitar a geração de *thumbnail* para esta empresa.


<!-- anchors: ConfigurareHabilitarThumbnails-Índice, ConfigurareHabilitarThumbnails-Objetivo, ConfigurareHabilitarThumbnails-VisãoGeral, ConfigurareHabilitarThumbnails-Configuração, thumbnail-config, thumbnail-config-1, thumbnail-config-2, thumbnail-config-3, ConfigurareHabilitarThumbnails-HabilitandoThumbnails, enable-thumbnail-tenant, enable-thumbnail-tenant-1, enable-thumbnail-tenant-2, enable-thumbnail-tenant-3 -->
