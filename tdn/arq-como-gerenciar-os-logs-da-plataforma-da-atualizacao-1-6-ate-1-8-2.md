---
title: "ARQ - Como gerenciar os logs da plataforma da atualização 1.6 até 1.8.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=941245905"
scraped_at: "2026-03-09T04:43:55.269Z"
depth: 3
anchors: 10
child_links: 47
---

# ARQ - Como gerenciar os logs da plataforma da atualização 1.6 até 1.8.2

Fique atento!

Esta página é válida para as atualizações **1.6 até 1.8.2**** **do TOTVS Fluig.

Se você utiliza a atualização **Voyager (2.0) ou superior**, acesse a página original [Gestão de logs](/pages/viewpage.action?pageId=203764136).

# Índice

# Introdução

---

Em alguns casos, para obter mais informações sobre um determinado erro, pode ser necessário ativar um log mais detalhado.

# Como funciona?

---

As configurações de *log* são realizadas por instalação da plataforma e são definidas no arquivo '**domain.xml**' localizado em [Instalação fluig]/appserver/domain/configuration.

No caso de um ambiente em alta disponibilidade, as alterações nas configurações de *log* devem ser efetuadas em todas as máquinas do *cluster*.

A configuração de log consiste basicamente em dois tipos de itens: '**handlers**' e '**loggers**'.

O '**handler**' é responsável pela forma de processamento/armazenamento dos registros de* log*, enquanto o '**logger**' é responsável por definir o nível de um pacote específico e por qual(is) '**handler(s)**' este pacote será tratado.

Por exemplo, o '**handler**' do arquivo de *log* padrão da plataforma (server.log) possui a seguinte configuração:

**domain.xml**

[?](#)

| ```````````````````````````````` |
| --- |

Basicamente esta configuração define que o arquivo de *log* definido na propriedade **<file>** (server.log), será rotacionado no final de cada dia, ou seja, o conteúdo que estava no arquivo será salvo em outro arquivo contendo a data como sufixo, seguindo o padrão definido na propriedade **<suffix>**, e o arquivo original será zerado para registrar as próximas mensagens. 

É importante verificar que a propriedade **<level>** deste '**handler**' possui, por padrão, o valor 'INFO'. Isso significa que este 'handler' irá registrar apenas mensagens de nível "INFO" ou superior. Sendo assim, mesmo que existam pacotes enviando mensagens em nível de 'DEBUG', eles não serão registrados, pois 'DEBUG' é um nível mais baixo que 'INFO'. Caso deseje visualizar mensagens em nível de 'DEBUG' no arquivo 'server.log', é necessário primeiramente alterar a configuração de '<level name="INFO"/>' para '<level name="DEBUG"/>'.

Os níveis de log seguem a seguinte ordem, sendo do nível mais baixo ao mais alto:

1. ALL
2. FINEST
3. FINER
4. TRACE
5. DEBUG
6. FINE
7. CONFIG
8. INFO
9. WARN
10. WARNING
11. ERROR
12. SEVERE
13. FATAL

**Exemplo:** se um 'handler' for definido com level igual a 'INFO', irá registrar apenas mensagens de nível 'INFO', 'WARN', 'WARNING', 'ERROR', 'SEVERE' e 'FATAL'. Além dos níveis acima, também pode ser configurado o nível '**OFF**', nos casos em que nenhuma mensagem deve ser registrada.

Cada configuração de '**logger'** está atrelada à um ou mais '**handlers**'. Quando esta informação não é configurada na declaração de um '**logger'**, é considerada a configuração realizada para o '**root-logger'**, que no caso do fluig possui a configuração abaixo:

**domain.xml**

[?](#)

| ```````````````````````````` |
| --- |

Neste caso, todos os 'loggers'** **que não definirem um 'handler'** **específico, serão processados por estes três '**handlers**: CONSOLE' (caso seja iniciado via script no terminal do sistema operacional), 'FILE' (arquivo server.log) e 'USERLOGGING' (ver [aqui](/display/fluig/Controle+de+Log)).

A configuração de um '**logger'** normalmente é feita conforme abaixo:

**domain.xml**

[?](#)

| ```````` |
| --- |

- O parâmetro '**category**' indica o pacote ou nome completo da classe que este '**logger**' está configurando.
- O parâmetro '**level**' indica o nível mínimo das mensagens que serão apresentadas para esta categoria (pacote ou classe). Neste caso, as mensagens de log enviadas pelo pacote 'io.undertow.request' serão registradas apenas se forem do nível 'FATAL'.

# Configuração via interface de gerenciamento do servidor de aplicação

---

## Usuário do Servidor de Aplicação

Caso não possua um usuário de gerenciamento do servidor de aplicação, é necessário criá-lo:

1. No **prompt de comando** do Windows ou no **console** do Linux, navegue até o diretório **bin** do servidor de aplicação ([Instalação do fluig]/appserver/bin);
2. Executar o script **add-user.bat** ou **add-user.sh**;
3. Na primeira pergunta exibida, apenas dê **ENTER**;
4. Informe o** nome do usuário** na segunda pergunta;
5. Escolha uma **senha** e digite-a na terceira e quarta perguntas;
6. Após a confirmação da senha, efetue um **ENTER** na quinta pergunta;
7. Na sexta e sétima perguntas é necessário digitar "**Sim**" (ou *"*Yes*",* se o console estiver em inglês) e confirmar com a tecla **Enter**. 

## Adicionando Classe ou Pacote 

1. Acesse http://[IP ou hostname]**:9990** e informe o **usuário** e **senha** criados no passo anterior;
2. Acesse **Configuration** → **Profiles** → **full** → **Logging → View**;
3. Na tela de log, acesse a aba **Log Categories**;
4. Clique em **Add**;
5. Em **name** informe o pacote ou classe a ser monitorada (Ex.: com.datasul.technology.webdesk.workflow.engine );
6. Defina a opção **Debug** no** Level, **selecione a opção '**Use parent handlers**' e **Salve**;

Veja abaixo um exemplo dos procedimentos citados acima, sendo eles: criando 'Usuário do servidor de aplicação' e 'Adicionando Classe ou Pacote':

![](/download/attachments/941245905/arq5.gif?version=1&modificationDate=1746628354123&api=v2)

# Visualizando o Log de Debug

---

Após realizada as configurações, o log pode ser monitorado a partir do arquivo [Instalação fluig]/appserver/domain/servers/fluig1/log/server.log.

Use uma das [ferramentas de análise recomendadas](https://tdn.totvs.com/pages/viewpage.action?pageId=235336390) para visualizar o arquivo ou, caso o sistema operacional seja Linux, é possível usar o comando:

| `tail -f [Instalação fluig]/appserver/domain/servers/fluig1/log/server.log` |
| --- |


<!-- anchors: ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-Índice, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-Introdução, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-Comofunciona?, highlighter_85873, highlighter_288107, highlighter_650939, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-Configuraçãoviainterfacedegerenciamentodoservidordeaplicação, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-UsuáriodoServidordeAplicação, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-AdicionandoClasseouPacote, ARQComogerenciaroslogsdaplataformadaatualização1.6até1.8.2-VisualizandooLogdeDebug -->
