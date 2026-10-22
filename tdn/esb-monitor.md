---
title: "ESB Monitor"
url: "https://tdn.totvs.com/display/public/fluig/ESB+Monitor"
scraped_at: "2026-03-09T04:37:53.612Z"
depth: 3
anchors: 2
child_links: 27
---

# ESB Monitor

# Sobre

---

O Fluig ESB Monitor tem como finalidade permitir ao usuário fazer o monitoramento, edição e reenvio das mensagens processadas pelo Fluig ESB. Através deste serviço o usuário tem acesso ao monitoramento de suas mensagens enviadas pelo Fluig ESB, sendo possível visualizar seu status da transação, detalhes da mensagem e seus erros ocorridos.

Também há possibilidade de editar a mensagem, fazer reprocessamento, download de uma cópia da mensagem selecionada e cópia em modo Excel e PDF das informações da mensagem.

### Inicialização

Antes de começar a utilizar o Fluig ESB Monitor para monitorar as mensagens trafegadas no ESB, é necessário verificar alguns itens especialmente e certificar-se de que os serviços do produto tenham sido inicializados.

- **Banco de Dados**: O banco de dados configurado para o  Fluig ESB deverá estar inicializado para que o monitor tenha acesso ao conteúdo das mensagens armazenadas. Caso o banco de dados configurado para o  Fluig ESB seja o  Derby, certificar-se de que o serviço do Windows Fluig ESB Derby NT Service esteja operante.

Caso não esteja instalado como serviço do Windows, executar o arquivo startup_db.bat contido na pasta \bin do diretório de instalação do Fluig ESB. Se optou por criar ícones na área de trabalho ou na composição do menu iniciar pode ser executado o programa Database Startup.

- **Servidor do Fluig ESB**: O serviço de inicialização do Servidor do Fluig ESB deve estar inicializado. Por padrão, o servidor é inicializado na porta 8085.

Caso não esteja instalado como serviço do Windows, executar o arquivo startup-esb.bat contido na pasta bin do diretório de instalação do Fluig ESB. Se optou por criar ícones na área de trabalho ou na composição do menu iniciar pode ser executado o programa ESB Startup.

- **Monitor do Fluig ESB**: Quando optar por criar ícones na área de trabalho ou na composição do menu iniciar pode ser executado o programa Fluig ESB Monitor para que seja possível monitorar as mensagens trafegadas.


<!-- anchors: ESBMonitor-Sobre, ESBMonitor-Inicialização -->
