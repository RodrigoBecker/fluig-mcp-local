---
title: "ARQ - Por que ocorre a mensagem de erro FileAlreadyExistsException ao iniciar a plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243631521"
scraped_at: "2026-03-04T03:38:13.614Z"
depth: 4
anchors: 6
child_links: 61
---

# ARQ - Por que ocorre a mensagem de erro FileAlreadyExistsException ao iniciar a plataforma?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** A partir da 1.5.9

# Ocorrência

Por que ocorre a mensagem de erro FileAlreadyExistsException ao iniciar a plataforma?

  **server.log** Expand source

[expand source](#)[?](#)

| 12345678910111213 | `ERROR [stderr] (Thread-``77``) java.nio.file.FileAlreadyExistsException: R:\TOTVS\FLUIG\PRODUCAO\jboss\apps\zipfstmp787877799232000323.tmp -> R:\TOTVS\FLUIG\PRODUCAO\jboss\apps\social-ecm-totlets-widgets-communities-all.war``ERROR [stderr] (Thread-``77``)  at sun.nio.fs.WindowsException.translateToIOException(WindowsException.java:``81``)``ERROR [stderr] (Thread-``77``)  at sun.nio.fs.WindowsException.rethrowAsIOException(WindowsException.java:``97``)``ERROR [stderr] (Thread-``77``)  at sun.nio.fs.WindowsFileCopy.move(WindowsFileCopy.java:``387``)``ERROR [stderr] (Thread-``77``)  at sun.nio.fs.WindowsFileSystemProvider.move(WindowsFileSystemProvider.java:``287``)``ERROR [stderr] (Thread-``77``)  at java.nio.file.Files.move(Files.java:``1347``)``ERROR [stderr] (Thread-``77``)  at com.sun.nio.zipfs.ZipFileSystem.sync(ZipFileSystem.java:``1297``)``ERROR [stderr] (Thread-``77``)  at com.sun.nio.zipfs.ZipFileSystem.close(ZipFileSystem.java:``277``)``ERROR [stderr] (Thread-``77``)  at com.totvs.technology.wcm.WCMService.processSimpleDeploys(WCMService.java:``884``)``ERROR [stderr] (Thread-``77``)  at com.totvs.technology.wcm.WCMService.doStartUp(WCMService.java:``429``)``ERROR [stderr] (Thread-``77``)  at com.totvs.technology.wcm.WCMService.access$``300``(WCMService.java:``88``)``ERROR [stderr] (Thread-``77``)  at com.totvs.technology.wcm.WCMService$StandAloneScanner.run(WCMService.java:``934``)``ERROR [stderr] (Thread-``77``)  at java.lang.Thread.run(Thread.java:``745``)` |
| --- | --- |

# Solução

Durante o processo de *deploy* dos artefatos na inicialização da plataforma, vários arquivos temporários são criados e removidos na pasta [diretório_instalação]\jboss\apps.

Em algumas situações, no entanto, pode acontecer de o antivírus bloquear a remoção destes arquivos temporários, gerando duplicidade.

É necessário desabilitar o módulo de varredura de arquivos ou desligar o antivírus completamente.

Atenção!

Em atualizações 1.6 e superiores, o diretório em que ocorre a criação e remoção de arquivos temporários durante o processo de *deploy* dos artefatos é [diretório_instalação]\appserver\apps.

# Observações

Até o momento, este problema foi observado apenas em servidores com o antivírus Intel Security-McAfee.


<!-- anchors: ARQPorqueocorreamensagemdeerroFileAlreadyExistsExceptionaoiniciaraplataforma?-Índice, ARQPorqueocorreamensagemdeerroFileAlreadyExistsExceptionaoiniciaraplataforma?-Plataforma, ARQPorqueocorreamensagemdeerroFileAlreadyExistsExceptionaoiniciaraplataforma?-Ocorrência, highlighter_84321, ARQPorqueocorreamensagemdeerroFileAlreadyExistsExceptionaoiniciaraplataforma?-Solução, ARQPorqueocorreamensagemdeerroFileAlreadyExistsExceptionaoiniciaraplataforma?-Observações -->
