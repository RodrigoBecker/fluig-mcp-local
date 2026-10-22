---
title: "Backup da aplicação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271666031"
scraped_at: "2026-03-09T03:46:05.654Z"
depth: 2
anchors: 25
child_links: 47
---

# Backup da aplicação

Atenção

Esta página foi revisada para considerar as configurações de server para a atualização 1.6 ou superiores.

# Índice

# Objetivo

---

O objetivo deste guia é orientar o administrador do ambiente sobre a criação de cópias de segurança do banco de dados, pasta de instalação e diretório de arquivos do TOTVS Fluig Plataforma.

# Backup da aplicação

---

Para fazer o backup da aplicação da plataforma, o ideal é fazer um backup completo incluindo a pasta de instalação, volume completo e a base de dados. Esse backup pode ser manual ou automatizado, dependendo do que acharem melhor.

Quanto ao backup do volume, basta salvar a pasta completa. O backup da instalação também pode ser da pasta completa, assim se necessário é possível restaurá-lo.

Confira a seguir o procedimento de acordo com o sistema operacional.

## Windows

---

- [Parar serviços](#)
- [Copiar banco de dados](#)
- [Copiar instalação](#)

****

**1.** Parar todos os serviços do Fluig (fluig_RealTime, fluig_Indexer, FLUIG).

****

**2.** Acessar o gerenciador do banco de dados e realizar cópia da base de dados do Fluig.

O gerenciamento do banco de dados é de responsabilidade do cliente. Acione sua equipe de TI para receber orientação de como fazer o *backup*.

****

****

**3.** Copiar os arquivos da aplicação (diretório de instalação e volume).

**3.1** Apagar as pastas temporárias data, log, servers e temp localizadas em [diretório_instalação]\appserver\domain.

![](/download/attachments/271666031/003_02_16.png?version=1&modificationDate=1487253803000&api=v2)

**3.2** Fazer a cópia de segurança dos diretórios de instalação (onde são armazenados os arquivos de sistema, responsáveis pelo funcionamento da plataforma) e de volume (onde ficam armazenados os documentos, formulários, templates e demais arquivos publicados pelos usuários na plataforma).

![](/download/attachments/271666031/004_02_16.png?version=1&modificationDate=1487254419000&api=v2)

**A localização do volume é definida pelo administrador durante a criação da empresa no Fluig.**

## Linux

---

- [Parar serviços](#)
- [Copiar banco de dados](#)
- [Copiar instalação](#)

**1. **Parar todos os serviços do Fluig

| Utilizando o init | fluig

        ?`service fluig stop` |
| --- | --- |

        **Indexer**

[?](#)

| `service fluig_Indexer stop` |
| --- |

        **RealTime**

[?](#)

| `service fluig_Realtime stop` |
| --- |

    Utilizando o systemd

        **fluig**

[?](#)

| `systemctl stop fluig` |
| --- |

        **Indexer**

[?](#)

| `systemctl stop fluig_Indexer` |
| --- |

        **RealTime**

[?](#)

| `systemctl stop fluig_Realtime` |
| --- |

    Sem serviços

        **fluig**

[?](#)

| `#Para identificar o numero do servico fluig``ps` `-wef |``grep` `standalone.sh` `#Para encerrar o servico``kill` `[nº serviço fluig]` |
| --- |

        **Indexer**

[?](#)

| `service fluig_Indexer stop` |
| --- |

        **RealTime**

[?](#)

| `#Para identificar o numero do servico node``ps` `-wef |``grep` `node` `#Para encerrar o servico``kill` `[nº serviço node]` |
| --- |

**2.** Acessar o gerenciador do banco de dados e realizar cópia da base de dados do Fluig.

O gerenciamento do banco de dados é de responsabilidade do cliente. Acione sua equipe de TI para receber orientação de como fazer o *backup*.

**3.** Copiar os arquivos da aplicação (diretório de instalação e volume).

**3.1** Apagar as pastas temporárias data, log, servers e temp localizadas em [diretório_instalação]/appserver/domain.

  **Pastas temporárias**

[?](#)

| `#Navegar ate a pasta /appserver/domain do diretorio de instalacao e remover as pastas temporarias` `#data``rm` `data -R` `#log``rm` `log -R` `#temp``rm` `temp -R` |
| --- |

**3.2** Fazer a cópia de segurança dos diretórios de instalação (onde são armazenados os arquivos de sistema, responsáveis pelo funcionamento da plataforma) e de volume (onde ficam armazenados os documentos, formulários, templates e demais arquivos publicados pelos usuários na plataforma).

  **Pasta de Instalação**

[?](#)

| `#Copiar a pasta de instalacao do fluig` `cp` `-R [pasta de instalacao] [diretorio de backup]` |
| --- |

  **Volume**

[?](#)

| `#Copiar o volume do fluig` `cp` `-R [volume] [diretorio de backup]` |
| --- |

Dica

Saiba mais sobre a configuração e utilização de volumes em [Plataforma ❙ Volumes (wcmadmin)](https://tdn.totvs.com/x/jP-uDQ).


<!-- anchors: Backupdaaplicação-Índice, Backupdaaplicação-Objetivo, Backupdaaplicação-Backupdaaplicação, Backupdaaplicação-Windows, windows, windows--2044383236, windows-1898017787, windows--1554265960, Backupdaaplicação-Linux, Linux, Linux-L1, highlighter_16488, highlighter_295026, highlighter_937396, highlighter_27370, highlighter_785948, highlighter_300142, highlighter_5158, highlighter_203025, highlighter_475012, Linux-L2, Linux-L3, highlighter_27214, highlighter_490027, highlighter_976718 -->
