---
title: "ARQ - Por que ao iniciar o serviço do fluig ocorre o erro 'Local hostname not found, check the file “hosts”'?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244420208"
scraped_at: "2026-03-09T04:23:27.892Z"
depth: 3
anchors: 8
child_links: 62
---

# ARQ - Por que ao iniciar o serviço do fluig ocorre o erro 'Local hostname not found, check the file “hosts”'?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

**Versão:** 1.5.10 ou superior

# Ocorrência

Ao inicializar o serviço do fluig, o sistema não sobe e o log registra a mensagem abaixo. O que devo fazer para o serviço do fluig subir?

**Mensagem em log**

[?](#)

| `Local hostname not found, check the file “hosts”.` |
| --- |

# Causa

O*hostname* (nome da máquina) do servidor não foi adicionado ao arquivo *hosts*. A falta desta configuração pode causar uma série de problemas na utilização da plataforma, por isso a inicialização é interrompida.

# Solução

Adicionar o *hostname* no arquivo *hosts* do sistema operacional apontando para o IP da própria máquina (*loopback*). No exemplo abaixo, o IP local é "127.0.1.1" e o *hostname* é "servidor-fluig":

**Exemplo de arquivo hosts no Windows**

[?](#)

| 1234567891011121314151617181920212223 | `# Copyright (c) 1993-2009 Microsoft Corp.``#``# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.``#``# This file contains the mappings of IP addresses to host names. Each``# entry should be kept on an individual line. The IP address should``# be placed in the first column followed by the corresponding host name.``# The IP address and the host name should be separated by at least one``# space.``#``# Additionally, comments (such as these) may be inserted on individual``# lines or following the machine name denoted by a '#' symbol.``#``# For example:``#``#      102.54.94.97     rhino.acme.com          # source server``#       38.25.63.10     x.acme.com              # x client host` `# localhost name resolution is handled within DNS itself.``#    127.0.0.1       localhost``#    ::1             localhost` `127.0.1.1   servidor-fluig` |
| --- | --- |

# Observação

- No Windows, este arquivo fica armazenado no diretório C:\Windows\System32\drivers\etc\hosts.

- No Linux, o caminho padrão é /etc/hosts. Para descobrir o *hostname* de um servidor Linux, utilize o comando: **cat /etc/hostname**.


<!-- anchors: ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Índice, ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Plataforma, ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Ocorrência, highlighter_257415, ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Causa, ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Solução, highlighter_876148, ARQPorqueaoiniciaroserviçodofluigocorreoerro'Localhostnamenotfound,checkthefile“hosts”'?-Observação -->
