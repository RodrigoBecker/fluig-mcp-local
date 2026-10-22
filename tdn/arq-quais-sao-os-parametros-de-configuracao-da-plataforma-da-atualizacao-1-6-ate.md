---
title: "ARQ - Quais são os parâmetros de configuração da plataforma da atualização 1.6 até 1.8.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=941259888"
scraped_at: "2026-03-09T04:09:22.816Z"
depth: 2
anchors: 6
child_links: 57
---

# ARQ - Quais são os parâmetros de configuração da plataforma da atualização 1.6 até 1.8.2

Fique atento!

Esta página é válida para as atualizações **1.6 até 1.8.2**** **do TOTVS Fluig.

Se você utiliza a atualização **Voyager (2.0) ou superior**, acesse a página original [Parâmetros de configuração da plataforma](/pages/viewpage.action?pageId=257623031).

# Índice

# Parâmetros de configuração

---

Acompanhe a seguir detalhes sobre as configurações de parâmetros do arquivo**configuration.properties** disponível em [diretório_instalação]\repository\wcmdir\config.**

| Parâmetro | Parâmetro API | Descrição | Valores Aceitos |
| --- | --- | --- | --- |
| webdesk/FTPPort | FTP_PORT | Alterar a porta FTP para a publicação de documentos via FTP. A porta padrão é 21 | Inteiro de 1 à 65535. |
| webdesk/FTPPrivateFolderPort | FTP_PRIVATEFOLDER_PORT | Alterar a porta FTP para a pasta particular. A porta padrão é 25 | Inteiro de 1 à 65535. |
| webdesk/FTPPortRange | FTP_PORT_RANGE | Conjunto de portas usadas para conexão de FTP passivo, caso não seja informado é usada uma porta aleatória. | Conjunto de portas, e.g: 2000-3000,3005. |
| ```
webdesk/FTPPrivateFolderRange
``` | FTP_PRIVATEFOLDER_PORT_RANGE | Conjunto de portas usadas para conexão de FTP passivo das pastas privadas, caso não seja informado é usada uma porta aleatória. | Conjunto de portas, e.g: 2000-3000,3005. |
| webdesk/LSHost | LS_HOST | Alterar o endereço do servidor de licenças (License Server). | IP ou HOSTNAME. |
| webdesk/LSPort | LS_PORT | Alterar a porta de comunicação com o servidor de licenças (License Server). | Inteiro de 1 à 65535. |
| webdesk/OOoDir | OO_DIRECTORY | Alterar o diretório de instalação do OpenOffice (para a conversão dos documentos em PDF) | Caminho para instalação do OpenOffice. |
| webdesk/OOoPort | OO_PORT | Alterar as portas disponíveis para o OpenOffice. Para informar mais de uma porta deve-se utilizar o separador “,” (vírgula) | Inteiro de 1 à 65535. |
| fluig/server.url | SERVER_URL | Alterar a URL de acesso à plataforma. O padrão inicial é http://[endereco_IP]:8080. | IP ou HOSTNAME. |
| totvs/solrHome | SOLR_HOME | Alterar o diretório em que são armazenadas as configurações do Solr. | Caminho para configuração do Solr. |
| totvs/solrURL | SOLR_URL | Alterar a URL do Solr. Por padrão a URL é [servidor_fluig]:8080/solr. | IP ou HOSTNAME. |
| totvs/solrCloud | SOLR_CLOUD | Ative para configurar o Solr com servidor em Cluster. | true/false |
| totvs/solrRemote | SOLR_REMOTE | Ative para configurar o Solr em servidor separado remoto. | true/false |
| wcm/cacheServerAddress | CACHE_SERVER_ADRESS | Alterar [protocolo]:[endereco]:[porta] do servidor de cache de permissões. | LOCAL_MAP, memcached:[host]:[port], redis:[host]:[port], redisc:[host]:[port] |
| node.chat.url | NODE_CHAT_URL | Alterar a URL utilizada para comunicar as notificações e publicações da plataforma em tempo real. Use o mesmo endereço (host) da plataforma, para evitar problemas de Cross-Domain. | IP ou HOSTNAME, com a porta. |
| node.realtime.url | NODE_REALTIME_URL | Alterar a URL interna do servidor de comunicação com o node.js. Use o mesmo endereço (host) da plataforma, para evitar problemas de Cross-Domain. | IP ou HOSTNAME, com a porta. |
| fluig.schedule.server.host | SCHEDULE_SERVER_HOST | Altera a URL do servidor de agendamentos. | IP ou HOSTNAME. |
| fluig.schedule.server.port | SCHEDULE_SERVER_PORT | Alterar a porta do servidor de agendamentos. | Inteiro de 1 à 65535. |
| analytics.resources.folder | ANALYTICS_RESOURCES_FOLDER | Alterar a pasta de recursos do Fluig Analytics. | Caminho onde fica os arquivos para envio do Analytics. |
| fluig/mail.defaultSender | MAIL_DEFAULT_SENDER | Habilitar o envio de e-mail utilizando o e-mail cadastrado no parâmetro mail.from. | true/false |
| fluig/mail.personal | MAIL_PERSONAL | Definir um nome junto ao e-mail de origem, para identificar a empresa por exemplo. Tipo: NOME_DA_EMPRESA adm@fluig.com. |  |
| fluig/mail.allNotification | MAIL_ALL_NOTIFICATION | Caso definido como 'true' faz com que todos os e-mails da plataforma sejam enviados a partir do e-mail informado no campo mail.from e não apenas os e-mails de sistema. | true/false |
| fluig/mail.from | MAIL_FROM | Alterar o endereço de e-mail utilizado para envio dos e-mails de sistema. |  |

# Parâmetros adicionados a  partir da 1.6.1

---

| Parâmetro | Parâmetro API | Descrição | Valores Aceitos |
| --- | --- | --- | --- |
| Parâmetro | Parâmetro API | Descrição | Valores Aceitos |
| webdesk/OOoEnabled | OO_ENABLED | Habilitar/Desabilitar o serviço do OpenOffice. | true/false |
| webdesk/FTPEnabled | FTP_ENABLED | Permite habilitar ou desabilitar o servidor FTP. | true/false |
| webdesk/FTPExternalAddress | FTP_EXTERNAL_ADDRESS | Endereço externo do servidor de FTP, necessário para expor o FTP em modo passivo se estiver usando NAT. | IP ou HOSTNAME do servidor externo. |
| FDN_emailSmtpServer | SMTP_SERVER | Alterar o HOSTNAME do servidor de SMTP. | IP ou HOSTNAME. |
| FDN_emailSmtpPort | SMTP_PORT | Alterar a porta SMTP para o envio de e-mails. A porta padrão é 25. | Inteiro de 1 à 65535. |
| FDN_emailSecurity | MAIL_SECURITY | Ativar/Desativar o uso de TLS na conexão SMTP. | true/false |
| FDN_emailAuthentication | MAIL_AUTHENTICATION | Ativar/Desativar autenticação no envio de e-mail. | true/false |
| FDN_emailUser | MAIL_USER | Login do usuário utilizado na autenticação do servidor de e-mail. |  |
| FDN_emailPasswd | MAIL_PASSWORD | Senha utilizada na autenticação do servidor de e-mail. |  |

# Parâmetro alterado a  partir da 1.6.2

---

| Parâmetro | Parâmetro API | Descrição | Valores Aceitos |
| --- | --- | --- | --- |
| Parâmetro | Parâmetro API | Descrição | Valores Aceitos |
| FDN_emailSecurity | MAIL_SECURITY | Protocolo de segurança utilizado na conexão SMTP | none/tls/ssl (os valores devem ser minúsculo) |

# Configuração do JMS

---

Para obter um melhor desempenho do servidor de aplicação utilizado pela plataforma, recomenda-se a alteração do parâmetro abaixo:

A alteração deste parâmetro é opcional e aplicável à atualização 1.6. Antes de alterá-lo, não esqueça de criar um *backup* do arquivo domain.xml.

No arquivo**domain.xml**, armazenado na pasta [diretório_instalação]\appserver\domain\configuration, altere:

- Configurações relacionadas ao JMS para não persistir as mensagens em disco.

**domain.xml**

[?](#)

| `` |
| --- |


<!-- anchors: ARQQuaissãoosparâmetrosdeconfiguraçãodaplataformadaatualização1.6até1.8.2-Índice, ARQQuaissãoosparâmetrosdeconfiguraçãodaplataformadaatualização1.6até1.8.2-Parâmetrosdeconfiguração, ARQQuaissãoosparâmetrosdeconfiguraçãodaplataformadaatualização1.6até1.8.2-Parâmetrosadicionadosapartirda1.6.1, ARQQuaissãoosparâmetrosdeconfiguraçãodaplataformadaatualização1.6até1.8.2-Parâmetroalteradoapartirda1.6.2, ARQQuaissãoosparâmetrosdeconfiguraçãodaplataformadaatualização1.6até1.8.2-ConfiguraçãodoJMS, highlighter_905703 -->
