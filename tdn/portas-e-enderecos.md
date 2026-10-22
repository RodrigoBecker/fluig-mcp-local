---
title: "Portas e endereços"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=275591571"
scraped_at: "2026-03-09T03:44:25.350Z"
depth: 2
anchors: 2
child_links: 37
---

# Portas e endereços

# Objetivo

---

O objetivo deste guia é informar as portas padrão e endereços utilizados pelo TOTVS Fluig.

# Portas padrão utilizadas

---

Acompanhe a seguir detalhes sobre as portas utilizadas pela plataforma. Estão sendo listadas três portas padrão de bancos de dados homologados conforme a [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade). Caso sua aplicação utilize a de MySQL, por exemplo, as demais (SQL Server e Oracle) deverão ser excluídas da sua lista de portas utilizadas.

 Importante mencionar também que, no momento da instalação da plataforma, por algum motivo (*firewall*, portas em uso por outros *softwares*...), as portas padrão poderão ser alteradas para o correto funcionamento. Casos as portas padrão tenham sido alteradas, consulte os parâmetros nos arquivos e páginas de configurações da plataforma.

| Porta | Parâmetro | Uso | Para comunicar com | Afetado pelo offset | Necessário ao Cliente ou ao Servidor? | URL Destino |
| --- | --- | --- | --- | --- | --- | --- |
| Porta | Parâmetro | Uso | Para comunicar com | Afetado pelo offset | Necessário ao Cliente ou ao Servidor? | URL Destino |
| 9021 | webdesk/FTPPort | Porta FTP para a publicação de documentos via FTP | Usuário fazer upload de arquivos na plataforma (normalmente para publicar no GED) | Não | Servidor/Cliente | ftp://<host>:9021 |
| 25 | mail-smtp | Porta de configuração de envio de e-mail. | Fluig com servidor de e-mail | Não | Servidor |  |
| 1433 | sqlserver | Banco de dados SQL Server | Fluig com banco de dados | Não | Servidor |  |
| 1521 | oracle | Banco de dados Oracle | Fluig com banco de dados | Não | Servidor |  |
| 3306 | mysql | Banco de dados MySQL | Fluig com banco de dados | Não | Servidor |  |
| 3528 | iiop |  | Porta de uso interno no Fluig | Sim | Servidor |  |
| 3529 | iiop-ssl |  | Porta de uso interno no Fluig | Sim | Servidor |  |
| 4099 | fluig.schedule.server.port | A porta do servidor de agendamentos. | Porta de uso interno no Fluig | Sim | Servidor |  |
| 4713 | txn-status-manager |  | Porta de uso interno no Fluig | Sim | Servidor |  |
| 5445 | messaging-remote | Porta remota da fila jms | Porta de uso interno no Fluig | Sim | Servidor |  |
| 5555 | webdesk/LSPort | Porta de comunicação com o servidor do License Server. | Para comunicação entre o Fluig de aplicação e License Server. | Não | Servidor |  |
| 7777 | node.chat.url | RealTime - Chat | Usuário com Realtime (Node.jS) | Não | Cliente | ws://<host>:7777 |
| 8009 | ajp |  | Servidor apache com servidor Fluig, quando habilitado Load Balancer | Sim | Servidor |  |
| 8021 | webdesk/FTPPrivateFolderPort | Porta FTP para a pasta particular | Usuário fazer upload de arquivos no Fluig (normalmente para publicar no GED) | Não | Servidor | ftp://<host>:8021 |
| 8080 | totvs/serverIPPort | Porta padrão (HTTP) de acesso | Porta de acesso do Fluig | Sim | Servidor/Cliente | http://<host>:8080/ |
| 8443 | https | Protocolo HTTPS | Usuário com servidor Fluig (quando habilitado https) | Sim | Servidor | https://<host>:8443 |
| 8888 | node.realtime.url | RealTime | Fluig com Realtime (Node.jS) | Não | Servidor | ws://<host>:8888 |
| 8983 | totvs/solrURL | Porta do Solr | Para comunicação entre Fluig e o servidor de Indexação. | Não | Servidor | http://<host>:8983/solr |
| 9990 | jboss.management.http.port | Aplicação – JMX – Console Web | Usuário monitorar o Fluig, normalmente deve estar bloqueada para uso externo | Sim | Servidor | http://<host>:9990/ |
| 9999 | jboss.management.native.port | Aplicação – JMX - Acesso | Porta de uso interno no Fluig | Sim | Servidor |  |
| 11211 |  | Porta do Servidor de cache - Memcached | Fluig com servidor de cache | Não | Servidor |  |
| 15001 | webdesk/OOoPort | Portas disponíveis para o OpenOffice | Com OpenOffice | Não | Servidor |  |
| 15002 | webdesk/OOoPort | Portas disponíveis para o OpenOffice | Com OpenOffice | Não | Servidor |  |
| 443 |  | Identity | Identity | Não | Servidor | https://*.fluigidentity.com  Saiba mais   |
| 443 |  | Google Drive | Google | Não | Servidor | https://www.googleapis.com |
| 443 |  | Notificação em dispositivos mobile | UrbanAirship, parceiro que centraliza todas as mensagens enviadas para dispositivos mobile (Android ou IOS) | Não | Servidor | https://*.urbanairship.com |
| 443 |  | Porta utilizada para configurações no Analytics. | Fluig com a internet | Não | Servidor | https://analytics.fluig.com https://secure.gooddata.com https://na1.secure.gooddata.com https://na1-di.gooddata.com https://secure-di.gooddata.com |
| 443 |  | Porta utilizada para acesso ao version.** É um protocolo proprietário que utiliza a porta 443, porém, não deve ser validado como HTTPS. Adicione a URL como exceção no proxy para não ser validado. | Fluig com a internet | Não | Servidor | http://version.fluig.com |
| 443 |  | Porta utilizada para acesso ao visualizador interno (Fluig viewer). | Fluig com a internet | Não | Servidor | https://api.accusoft.com.brhttps://api.accusoft.com |
| 80 |  | Porta utilizada para acesso ao visualizador interno (Fluig viewer). | Fluig com a internet | Não | Servidor | http://api.accusoft.com.brhttp://api.accusoft.com |
| 80 |  | Porta utilizada para download dos certificados da ICP-BRASIL | Fluig com a internet | Não | Servidor | http://politicas.icpbrasil.gov.br |
| 443 |  | Porta utilizada para acesso a Central de Ajuda. | Fluig com a internet | Não | Servidor | tdn.fluig.io |
| 5228, 5229, 5230 e 443 |  | Notificação em dispositivos mobile. | Firebase Cloud Messaging, serviço de envio e recebimento de notificações Push. (Android e iOS) | Não | Servidor\Cliente | mtalk4.google.commtalk-staging.google.commtalk-dev.google.comalt1-mtalk.google.comalt2-mtalk.google.comalt3-mtalk.google.comalt4-mtalk.google.comalt5-mtalk.google.comalt6-mtalk.google.comalt7-mtalk.google.comalt8-mtalk.google.comandroid.apis.google.comdevice-provisioning.googleapis.comfirebaseinstallations.googleapis.com |
| 443 |  | Listagem e download dos itens da Store | Amazon Web Services (AWS) | Não | Servidor e cliente | https://*.s3.sa-east-1.amazonaws.comhttps://*.lambda-url.sa-east-1.on.awshttps://static-fluigstoreitems.fluig.io |
| 443 |  | Para utilização da Inteligência Artificial e NPS (Pesquisa de satisfação) | Com o Fluig intelligence, que está em Cloud | Não | Servidor | https://api-fluig.totvs.app   |
| 443 | isDisabledNPS | Para utilização do NPS (Pesquisa de uso) | Com a solução de Customer Experience da TOTVS | Não | Cliente | https://nps-service-core.azurewebsites.net |

Dica!

Clique no link para obter mais informações sobre [Configuração de ambientes com alta disponibilidade](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga).


<!-- anchors: Portaseendereços-Objetivo, Portaseendereços-Portaspadrãoutilizadas -->
