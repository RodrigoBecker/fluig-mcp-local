---
title: "Plataforma ❙ Configurações do sistema"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235597328"
scraped_at: "2026-03-09T03:43:42.027Z"
depth: 2
anchors: 5
child_links: 56
---

# Plataforma ❙ Configurações do sistema

# Falando de configurações do sistema...

---

Esse recurso permite definir as configurações básicas para a utilização da plataforma.

É possível definir informações sobre notificações, autenticação integrada, personalização de exibição da plataforma, utilização de assinatura digital em documentos, dentre outras.

- [Portal](#)
- [Autenticação](#)
- [Personalização](#)
- [Parâmetros da plataforma](#)

![](/download/attachments/235597328/configura%C3%A7%C3%B5es%20do%20sistema.png?version=6&modificationDate=1750443509823&api=v2)

![](/download/attachments/235597328/Aba%20autentica%C3%A7%C3%A3o.png?version=3&modificationDate=1750443571017&api=v2)

![](/download/attachments/235597328/Aba%20personaliza%C3%A7%C3%A3o.png?version=2&modificationDate=1750443631460&api=v2)

![](/download/attachments/235597328/Parametros%20da%20Plataforma.png?version=1&modificationDate=1750443674223&api=v2)

## Gerenciar configurações do sistema

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597328/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750442507587&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597328/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750442507587&api=v2) **Configurações do sistema**.

**05.** Insira as informações solicitadas na aba **Portal**.

As informações solicitadas são:

**Protocolo**Indica se o protocolo de acesso é HTTP ou HTTPS.

Dica!

Acesse a documentação [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893) para verificar o procedimento necessário para alterar o protocolo de HTTP para HTTPS.

Ao configurar o protocolo HTTPS, se o seu ambiente utiliza [balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga), é necessário replicar a configuração [manualmente](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) em cada um dos demais servidores da plataforma.

**Domínio**URL do portal utilizado.

**Porta**Porta de acesso à plataforma. A porta padrão é 443.  

**Flags "HttpOnly" e "Secure" nos cookies**Como uma forma de prevenir ataques, como roubos de cookies, é possível habilitar as flags "HttpOnly" e "Secure" em alguns cookies gerados pelo Fluig Plataforma.
Isso ajuda a minimizar esses ataque ao prevenir o acesso ao valor do cookie usando JavaScript.
Essa opção é habilitada automaticamente ao selecionar a opção **HTTPS**em **Protocolo**. Além disso, a prevenção também funciona independente da configuração do HTTPS (Nginx, Apache ou TOTVS Fluig Plataforma).
Segue a lista de cookies que permitem o uso das flags habilitadas:

- JSESSIONID
- JSESSIONIDSSO
- jwt.token
- mobile_redirected
- WCMUserLang (este cookie somente será criado quando o idioma for alterado)

Nota:

Assim que novos cookies receberem essas flags a lista será atualizada.

**Tema padrão**Tema padrão selecionado para a criação de novas empresas (*tenant*).

**06.** Clique na aba **Autenticação** e defina as informações solicitadas.

As informações solicitadas são:

**Habilitar autenticação integrada**Quando assinalado, determina que a integração com o sistema operacional Windows está ativa, ou seja, possibilita que os usuários que estão registrados no Active Directory – implementação de serviço de diretório que armazena informações sobre objetos em rede de computadores e as disponibiliza ao usuário – possam acessar a plataforma sem precisar informar seus dados de acesso na tela de *login* da plataforma, desde que já estejam autenticados no Windows.

**URL script de autenticação**URL do servidor IIS (Serviços de Informações da Internet) – no qual será executado o *script* de autenticação remota. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**Token de autenticação***Token* utilizado para validar a integridade e a segurança das requisições de autenticação integrada. Para gerar um novo *token*, acionar **Gerar novo token**, localizado no lado direito do campo. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**Endereço do servidor AD**Endereço do servidor do Active Directory no seguinte formato: [servidor]:[porta]. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**Base DN**DN (*Distinguished Name*) base que será utilizado para informar abaixo de qual entrada no Active Directory serão pesquisados e validados os usuários para a autenticação integrada. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**Usuário de domínio**Usuário do Active Directory que possui privilégios suficientes para ler informações de outros usuários no Active Directory. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**Senha**Senha do usuário de domínio. Esse campo somente é habilitado quando for assinalada a opção "Habilitar autenticação integrada".

**07.** Clique na aba **Thumbnail** e insira o caminho para o executável do FFmpeg, que é o aplicativo responsável por gerar versões reduzidas de imagens e vídeos na plataforma com o intuito de facilitar a visualização e o reconhecimento de um conteúdo desse tipo.

É necessário que o FFmpeg esteja instalado no servidor da plataforma para que ela possa gerar os *thumbnails*. Mais informações sobre como obter o FFmpeg e qual a versão necessária podem ser obtidas na documentação [Configurar e Habilitar Thumbnails](/display/fluig/Configurar+e+Habilitar+Thumbnails).

**08.** Clique na aba **Personalização** e insira as informações solicitadas.

As informações solicitadas são:

**URL da imagem de logo (página de login)**URL da imagem de logomarca que será exibida na página de *login* da plataforma na Web.

**URL da imagem de logo (página de login mobile)**URL da imagem de logomarca que será exibida na página de *login* do aplicativo móvel da plataforma.

**URL para redirecionamento mobile**URL da página que é exibida quando um usuário acessa a plataforma por um navegador *mobile* e que informa que é possível baixar o aplicativo móvel da plataforma para acessar os seus recursos de forma otimizada.

**09.** Clique na aba **Parâmetros da plataforma** e inserir as informações solicitadas.

As informações solicitadas são:

**CONFIGURAÇÕES GERAIS**

---

**Bloqueio de Clickjacking**Quando habilitado, evita que ataques c*lickjacking* sejam realizados na plataforma. Os ataques *Clickjacking*são executados inserindo uma página dentro de outra através de um elemento *iframe* em uma página *HTML* e interceptando eventos de mouse e teclado e, por esse motivo, este recurso vem habilitado por padrão. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

Importante!

Não é recomendado desativar esta opção, portanto altere esse parâmetro somente se tiver ciência dos riscos da vulnerabilidade.

**CONFIGURAÇÕES DE E-MAIL**

---

Tudo o que for configurado como global será aplicado para todas as empresas cadastradas na plataforma, exceto aquelas que possuem configurações individuais. Siga as instruções de preenchimento conforme o item *Configuração global *da página* *[Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560). 

**CONFIGURAÇÕES DO OPENOFFICE**

---

**Habilitar OpenOffice**Quando habilitada permite a utilização de Cópia Controlada. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

**Diretório do OpenOffice**Diretório no qual está o OpenOffice.

**Portas do OpenOffice**Lista de portas do OpenOffice separadas por vírgula.

**SERVIDOR DE LICENÇAS**

---

**Habilitar License Server**Quando habilitada permite a manipular a plataforma utilizando as licenças gerenciadas pelo License Server. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

**Host do LS**Endereço do servidor do License Server.

**Porta do License Server**Porta utilizada pelo License Server.

Nota:

Para realizar a validação da comunicação entre os servidores, utilize o botão *Testar conexão*, no trecho de configuração do Servidor de Licenças.

**REALTIME**

---

**Habilitar o Realtime**Indica se o Realtime está habilitado no ambiente.

**URL para recebimento de notificações**URL utilizada para recebimento de notificações da plataforma.

**URL interna para envio de notificações**URL interna utilizada para o envio de notificações da plataforma.

Nota:

Para realizar a validação com o serviço de Realtime, utilize o botão *Testar conexão*.

**INDEXAÇÃO**

---

**URL de acesso ao Solr**URL utilizada para acessar o Solr.

**Solr em Cluster**Quando habilitado, determina que a utilização do Solr em *cluster* está ativa. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

**Solr em Servidor Remoto**Quando habilitado, determina que a utilização do Solr em servidor separado está ativa. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

Nota:

Para realizar a validação com o serviço de indexação, utilize o botão *Testar conexão*.

**FTP**

---

**Habilitar servidor FTP**Quando habilitado, permite a utilização do servidor de FTP. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.

**Porta do FTP**Porta do FTP que é utilizada para publicação de documentos.

**Faixa de Portas do FTP**Faixa de portas utilizadas pelo FTP para publicação e publicação em pastas privadas.

**Porta FTP para pastas privadas**Porta utilizada pelo FTP para publicação em pastas privadas.

**Faixa de portas FTP para pastas privadas**Definir a faixa de portas usadas para a comunicação de FTP passivo.

**10.** Clique em **Salvar**.

## Exportar script de autenticação

---

**01.** Após salvar as informações inseridas para a autenticação integrada, clique em **Exportar**, localizado no canto inferior direito da aba **Autenticação**.

O *script* de autenticação remota deve ser publicado no servidor IIS.

## Editar configurações do sistema

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597328/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750442507587&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597328/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750442507587&api=v2) **Configurações do sistema**.

**05.** Altere as informações desejadas.

Ao alterar alguns parâmetros é necessário reiniciar o serviço da plataforma.

**06.** Clique em **Salvar**.

**oculto**

Tradução:

[System settings](https://tdn.totvs.com/x/ZKIXDg)

[Configuraciones del sistema](https://tdn.totvs.com/x/faUXDg)

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Configuraçõesdosistema-Falandodeconfiguraçõesdosistema..., abas, Plataforma❙Configuraçõesdosistema-Gerenciarconfiguraçõesdosistema, Plataforma❙Configuraçõesdosistema-Exportarscriptdeautenticação, Plataforma❙Configuraçõesdosistema-Editarconfiguraçõesdosistema -->
