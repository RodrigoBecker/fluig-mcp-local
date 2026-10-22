---
title: "ARQ - Problemas com caracteres especiais na publicação em ambiente Linux"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=419529562"
scraped_at: "2026-03-04T03:38:40.552Z"
depth: 4
anchors: 7
child_links: 60
---

# ARQ - Problemas com caracteres especiais na publicação em ambiente Linux

**Produto:** TOTVS Fluig Plataforma

**Ambiente:** Linux

# Ocorrência

Ao publicar arquivos com caracteres especiais, por exemplo acentuação, principalmente em ambiente Linux a publicação não tem sucesso e ocorre a mensagem abaixo no log:

**Mensagem de erro**

ERROR [com.datasul.technology.webdesk.foundation.servlet.StreamControlWCM] (default task-11) StreamControlWCM failed: java.lang.RuntimeException: javax.ejb.EJBException: java.nio.file.InvalidPathException: Malformed input or input contains unmappable characters: <caminho do arquivo>

# Solução

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

No arquivo de configuração host.xml **<instalação>/appserver/domain/configuration/host.xml** localize o trecho abaixo:

 - <option value="-Dfile.encoding=utf8"/>

E altere para:

 - <option value="-Dfile.encoding=UTF-8"/>

Abaixo deste trecho, adicione a nova linha:

 - <option value="-DLC_CTYPE=UTF-8"/> 

O conteúdo da tag jvm-options deve ficar:

  **Exemplo:**

<jvm-options>
<option value="-Dfile.encoding=UTF-8"/>
<option value="-DLC_CTYPE=UTF-8"/>
<option value="-XX:MaxMetaspaceSize=1024m"/>
<option value="-Djavamelody.disabled=true"/>

<!-- Debug
<option value="-Xdebug"/>
<option value="-Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n"/>
-->
</jvm-options>


<!-- anchors: ARQProblemascomcaracteresespeciaisnapublicaçãoemambienteLinux-Ocorrência, ARQProblemascomcaracteresespeciaisnapublicaçãoemambienteLinux-Solução, 1, 1-1, 1-2, 1-3, 1-4 -->
