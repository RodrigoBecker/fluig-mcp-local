---
title: "Apresentação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=6066524"
scraped_at: "2026-03-04T03:35:27.774Z"
depth: 4
anchors: 4
child_links: 29
---

# Apresentação

# Índice

# TOTVS ESB

---

O TOTVS ESB é um sistema que tem como objetivo facilitar o trabalho de integração de aplicações. É uma plataforma de integração que possibilita a troca transparente de informações entre aplicações internas ou externas, utilizando protocolos padrões da Internet.

Este sistema abrange as fases mais complexas de uma integração, começando com o mapeamento das fontes de dados, fazendo transformações para adequação do formato no destinatário e entrega da informação no destino com total segurança e integridade, utilizando vários protocolos de transmissão de dados.

Com este sistema, as aplicações continuarão preservando sua independência, e serão habilitadas a se integrar com outras aplicações, estejam elas rodando dentro dos limites da corporação ou externamente em sites remotos, parceiros, clientes e fornecedores.

Para que fique clara a abordagem usada nos textos desta documentação, padronizamos aqui que quando citarmos sistema estaremos nos referindo ao TOTVS ESB e quando citarmos ferramenta estaremos nos referindo a qualquer programa do TOTVS ESB utilizado pelo usuário para atender suas necessidades de integração. As principais características deste sistema são:

- **DESENVOLVIDO EM JAVA:**A solução foi desenvolvida em Java, permitindo sua instalação em grande parte dos ambientes operacionais utilizados nas empresas.
- **INTEGRAÇÃO ASSÍNCRONA OU SÍNCRONA:** A solução garante a entrega das mensagens, mesmo em casos de indisponibilidade do ambiente, fazendo a sincronização total após o restabelecimento da infraestrutura.
- **MAPEAMENTO DE MENSAGENS:** A solução transforma *layouts* e conteúdos de mensagens, reduzindo os custos de implementação e disponibilizando as mensagens exatamente como cada aplicação exige.
- **EDITOR VISUAL:**A solução permite configurar os cenários de integração através de um editor gráfico, onde são definidos os destinos, as origens, os mapeamentos, os formatos de mensagens e os protocolos de comunicação.
- **ACESSO A BANCO DE DADOS:**A solução utiliza e possibilita o acesso a diversos bancos de dados do mercado, permitindo a leitura ou atualização de informações.
- **ROTEAMENTO DINÂMICO:** A solução controla automaticamente os destinatários das mensagens, eliminando erros e garantindo a entrega no local correto pelo caminho mais apropriado.
- **SEGURANÇA:** A solução utiliza os padrões de segurança universalmente aceitos pelo mercado, como HTTP/S e SSL, além de oferecer criptografia forte das mensagens trafegadas.

| Sumário para Rápida Consulta |  |
| --- | --- |
| Sumário para Rápida Consulta |  |
| Garantia de entrega de mensagens | Desenvolvido em Java |
| Recebimento e envio de qualquer padrão de mensagem | Segurança das informações |
| Roteamento dinâmico de mensagens | Fundamentado no Apache Camel |
| Transformação de mensagens | Protocolos padrões de mercado e comuns da Internet. |
| Gerenciamento e monitoramento | Baixo custo  |
| Acesso a banco de dados | Criptografia Síncrona e Assíncrona |
| Alta Performance | Compatível com ERPs (Microsiga Protheus, RM, Logix e Datasul EMS) |
| Editor gráfico para criação dos diagramas de integração | Tradução e Conversão de mensagens |
| Independência de plataforma | Fácil customização |
| Fácil instalação e configuração | Compactação de mensagens |
| Validação de conteúdo | Acesso a dados não-intrusivo (dispensa liberação de portas adicionais - acessa somente o necessário) |

# Protocolos de Comunicação

---

Suporta os mais variados protocolos de comunicação utilizados em aplicações e/ou integrações com parceiros, tais como os citados na tabela abaixo. Sendo que outros protocolos de comunicação específicos escritos em Java também podem ser adicionados às ferramentas do sistema. Mais detalhes da documentação dos componentes do [Editor de Diagramas](https://tdn.totvs.com/display/fluig/ESB+Editor).

| HTTP | Hyper Text Transfer Protocol |
| --- | --- |
| HTTPs | HTTP utilizando SSL (Autenticação e Criptografia) |
| FTP | File Transfer Protocol |
| Mail | Suporte a SMTP, POP3 e IMAP |
| SOAP | Simple Object Access Protocol |

# Recursos de integração

---

O TOTVS ESB tem a função básica de levar uma informação de um Ponto A para um Ponto B, fazendo as transformações necessárias. Os recursos do TOTVS ESB que facilitam esta integração entre aplicações são:

- **Transformação de Formatos:** por intermédio de XSL, é possível fazer transformações nos formatos das mensagens XML para se adequarem ao formato do destinatário, eliminando a customização das portas de entrada e saída.
- **Mapeamento:**o processo de mapeamento de código entre parceiros ou aplicações talvez seja o ponto mais crítico em um processo de integração. O TOTVS ESB realiza este processo de maneira fácil e prática, utilizando, para mapear ou converter rapidamente a troca de códigos, mecanismos amigáveis ao usuário. Por intermédio de XSL, é possível o mapeamento de informações, tanto no formato quanto no conteúdo. Com este recurso, as aplicações envolvidas na integração não precisam se preocupar com a forma na qual a informação é representada no seu destino.
- **Roteamento:** é baseado em qualquer informação disponível nas mensagens originais, como por exemplo, a identificação do parceiro ou produto. Uma vez identificada, a mensagem pode ser transformada, mapeada e enviada para o destino correto, de acordo com os seus requisitos especificados.
- **Fluxo de Integrações:**a configuração das origens, transformações de conteúdo e formato, destinos e protocolos são feita por intermédio de um editor visual, o Editor de Diagramas, facilitando assim a definição dos fluxos de integração.
- **Monitoramento:**usando uma interface web é possível acompanhar as integrações, visualizando as mensagens trafegadas e tomando ações sobre elas.


<!-- anchors: Apresentação-Índice, Apresentação-TOTVSESB, Apresentação-ProtocolosdeComunicação, Apresentação-Recursosdeintegração -->
