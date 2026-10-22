---
title: "Identity | SmartSync - Segurança de Dados em Trânsito"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=855369642"
scraped_at: "2026-03-09T05:12:41.845Z"
depth: 3
anchors: 2
child_links: 29
---

# Identity | SmartSync - Segurança de Dados em Trânsito

Esta página tem por objetivo explicar os mecanismos de segurança implementados no tráfego de informações entre o SmartSync(*client*) e o Identity(*server*).

## Dados em trânsito

---

Toda comunicação entre o cliente e servidor é criptograda usando [TLS/SSL](https://www.cloudflare.com/pt-br/learning/ssl/how-does-ssl-work/). Além do uso da criptografia em trânsito, o campo de "senha" é encriptado usando [chaves assimétricas](https://www.cloudflare.com/pt-br/learning/ssl/how-does-public-key-encryption-work/), ou seja a chave pública permanece com o servidor, enquanto a chave privada é usada pelo cliente para decriptar a senha e em seguida verificar se a senha bate com a contida no Active Directory. 

As chaves criptográficas são criadas durante a configuração do AD no Identity e são únicas para cada configuração.

![](/download/attachments/855369642/SmartSync-Sec.png?version=2&modificationDate=1720532558107&api=v2)

## Autenticação entre SmartSync e Identity

---

Como um meio mais eficiente e performático de receber as requisições de sincronização e login via AD, é utilizada uma [Api-Key](https://aws.amazon.com/pt/what-is/api-key/) para identificar o SmartSync que está solicitando ou enviando dados para o servidor, sendo ela exclusiva para cada SmartSync configurado.

Fique atento!

Esta documentação é válida a partir da **versão 5.0.0** ou superior do SmartSync. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê no seu ambiente.


<!-- anchors: Identity|SmartSyncSegurançadeDadosemTrânsito-Dadosemtrânsito, Identity|SmartSyncSegurançadeDadosemTrânsito-AutenticaçãoentreSmartSynceIdentity -->
