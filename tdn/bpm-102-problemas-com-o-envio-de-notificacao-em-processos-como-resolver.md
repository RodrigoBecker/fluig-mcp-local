---
title: "BPM 102 - Problemas com o envio de notificação em processos, como resolver?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=221555408"
scraped_at: "2026-03-09T03:58:17.213Z"
depth: 2
anchors: 13
child_links: 132
---

# BPM 102 - Problemas com o envio de notificação em processos, como resolver?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 2.0, 1.6 ou inferior

# Ocorrência

O fluig está com problemas no envio de notificações de movimentação de tarefas por e-mail ao responsável da tarefa. Isto ocorre mesmo com tudo configurado corretamente, opção de notificação selecionada no processo, configuração do SMTP e enviando e-mails de outras funcionalidades. Como resolvo?

No log é apresentado um erro parecido com este:

**Erro**

[?](#)

| `ERROR [com.fluig.ecm.notification.service.ECMNotificationHandler]``EJB ASYNC -``230``) ECMNotificationQueue -- service``jboss.naming.context.java.ECMNotificationQueue:``javax.naming.NameNotFoundException: ECMNotificationQueue -- service``jboss.naming.context.java.ECMNotificationQueue` |
| --- |

# Causa

Está faltando o parâmetro <jms-queue> referente ao 'ECMNotificationQueue' em um arquivo de configuração da plataforma.

# Solução

Para realizar o procedimento abaixo, os serviços do fluig devem estar parados.

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)
- [1.5.13 e anteriores](#)

Para resolver siga os passos abaixo:

1. Adicione o trecho de parametrização abaixo no arquivo **standalone.xml**, localizado em [Instalação fluig]/appserver/standalone/configuration. Este parâmetro deve ser acrescentado dentro da *tag* <jms-destinations>, junto com as outras configurações de "*queues*".

  **standalone.xml**

[?](#)

| `````````````````true``` |
| --- |

2. Apague as pastas temporárias 'data' e 'tmp' em [Instalação fluig]/appserver/standalone/log;

3. Limpar o cache do navegador para realizar os testes;

4. Inicie os serviços do Fluig.

Para resolver siga os passos abaixo:

1. Adicione o trecho de parametrização abaixo no arquivo **domain.xml**, localizado em [Instalação fluig]/appserver/domain/configuration. Este parâmetro deve ser acrescentado dentro da tag <server>, no subsystem <subsystem xmlns="urn:jboss:domain:messaging-activemq:1.0">.

  **domain.xml**

[?](#)

| `` |
| --- |

2. Apague as pastas temporárias 'data' e 'tmp', localizadas em [Instalação fluig]/appserver/domain/servers, de todos os *servers;*

3. Limpar o cache do navegador para realizar os testes;

4. Inicie os serviços do Fluig.

Para resolver siga os passos abaixo:

1. Adicione o trecho de parametrização abaixo no arquivo **standalone.xml**, localizado em [Instalação fluig]/jboss/standalone/configuration. Este parâmetro deve ser acrescentado dentro da *tag* <jms-destinations>, junto com as outras configurações de "*queues*".

  **standalone.xml**

[?](#)

| `````````````````true``` |
| --- |

2. Apague as pastas temporárias 'data' e 'tmp' em [Instalação fluig]/jboss/standalone;

3. Limpar o cache do navegador para realizar os testes;

4. Inicie os serviços do Fluig.


<!-- anchors: BPM102Problemascomoenviodenotificaçãoemprocessos,comoresolver?-Índice, BPM102Problemascomoenviodenotificaçãoemprocessos,comoresolver?-Plataforma, BPM102Problemascomoenviodenotificaçãoemprocessos,comoresolver?-Ocorrência, highlighter_366956, BPM102Problemascomoenviodenotificaçãoemprocessos,comoresolver?-Causa, BPM102Problemascomoenviodenotificaçãoemprocessos,comoresolver?-Solução, sample, sample-3, highlighter_339815, sample-1, highlighter_220971, sample-2, highlighter_263158 -->
