---
title: "License Configuration"
url: "https://tdn.totvs.com/display/public/fluig/License+Configuration"
scraped_at: "2026-03-09T04:50:39.026Z"
depth: 3
anchors: 2
child_links: 34
---

# License Configuration

Na aba License Configuration devem ser configuradas informações do licenciamento do produto, da empresa e dos usuários que utilizam o Fluig ESB.

As informações estão agrupadas em dois grupos: Contact Information e License Category.

### Contact Information

Permite configurar os usuários do Fluig ESB, conforme os campos abaixo.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Company Name | Razão social da empresa usuária do sistema. |
| Federal ID | Número do CNPJ da empresa. |
| Name | Nome do responsável pelo Fluig ESB. |
| E-mail | E-mail do contato. |
| Phone | Número do telefone do contato. |

### License Category

O grupo de licença permite configurar o licenciamento do produto. Existem três categorias de licença: **Hard Lock**, **Start Key**e **Emergency Key**.

A licença definitiva é a de categoria **Hard Lock**. Ao selecionar essa opção é necessário informar os dados de conexão do Servidor de Licenças TOTVS - LS, conforme campos abaixo.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Hostname | Nome ou endereço IP do servidor onde está carregado o servidor de licenças TOTVS (LS) com o dispositivo Hard Lock conectado. |
| LS Port | Porta utilizada no servidor informado acima para carregar o serviço de licença TOTVS (LS). |
| Client Port | Porta da máquina onde está instalado o Fluig ESB que será utilizada para conectar-se com a o serviço de licenças TOTVS (LS). |
| Test Conection | Esse botão tem a finalidade de testar a conexão entre a máquina onde está instalado o Fluig ESB com o servidor de licenças TOTVS (LS). |

A categoria **Start Key** se encontra impressa na nota fiscal de aquisição do produto e tem duração de 20 dias.

A categoria**Emergencial Key**é utilizada caso por algum motivo as categorias de licenças descritas acima não estarem disponíveis para configuração. Nesses casos é possível informar uma licença dessa categoria que possui validade de 48 horas.

Os campos disponibilizados para essas categorias são discriminados abaixo.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Key | Chave de licença Start Key ou Emergencial Key. |
| Test Validation | Esse botão tem a finalidade de testar se a chave informada é válida e ainda exibir o número de dias de expiração da licença. |


<!-- anchors: LicenseConfiguration-ContactInformation, LicenseConfiguration-LicenseCategory -->
