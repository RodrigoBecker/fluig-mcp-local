---
title: "Configurar Instagram no widget Slideshow"
url: "https://tdn.totvs.com/display/public/fluig/Configurar+Instagram+no+widget+Slideshow"
scraped_at: "2026-03-09T04:21:01.413Z"
depth: 3
anchors: 19
child_links: 70
---

# Configurar Instagram no widget Slideshow

# Índice

# Objetivo

---

O objetivo deste guia é orientar os desenvolvedores sobre como realizar a integração de uma conta do Instagram com o *widget Slideshow* do Kit Intranet. Lembrando que não há suporte para a configuração de múltiplas contas no *widget* *Slideshow* padrão.

# Widget Slideshow

---

Para exibir imagens de uma conta do Instagram, é necessário selecionar a opção **Instagram** no campo **Este Widget Integra com** nas propriedades do *widget* *Slideshow* e publicar a página para salvar a configuração.

![](/download/attachments/273310668/widget_slideshow.png?version=1&modificationDate=1492697550000&api=v2)

**Propriedades do widget Slideshow do Kit Intranet**

# Serviço REST

---

Ao importar o Kit Intranet com o *widget* *Slideshow*, é criado automaticamente um serviço de demonstração do Instagram (instagram.demo) na página [Serviços REST](/pages/viewpage.action?pageId=243660796) do Painel de Controle do Fluig. Embora seja apenas um exemplo, este serviço pode ser adaptado por um desenvolvedor para exibir as fotos de outra conta desta rede social.

Para isso, é necessário obter os seguintes dados da conta desejada e substituí-los nas propriedades do serviço instagram.demo:

- [*Client* ID (ID cliente)](#ConfigurarInstagramnowidgetSlideshow-client_id)
- *Client Secret*
- [Token de acesso (*Access token*)](#ConfigurarInstagramnowidgetSlideshow-token)

![](/download/attachments/273310668/configura%C3%A7%C3%A3o_instagram.jpg?version=1&modificationDate=1512740493000&api=v2)

**Propriedades do serviço REST instagram.demo**

# Obter dados do Instagram

---

Importante

Os procedimentos abaixo são de responsabilidade do fornecedor (Instagram), não da plataforma Fluig, e portanto estão sujeitos à alteração sem aviso prévio.

O *widget* *Slideshow* realiza a autenticação com o Instagram através do protocolo OAuth 2.0, portanto é necessário possuir uma conta no portal do desenvolvedor deste serviço ([developers.facebook.com](https://developers.facebook.com/)) para obtenção dos dados de integração*: Client* ID, *Client Secret* e *Access Token*.

Na documentação abaixo, será apresentado uma das formas de obtenção destes dados como exemplo para os desenvolvedores que desejam utilizar essa integração.

### Criar aplicativo do Facebook

Antes de configurar seu Client ID e Client Secret é necessário criar um aplicativo do Facebook e a partir dele, ir adicionando os produtos como o **Exibição básica do Instagram**. O material para consulta pode ser encontrado em: [https://developers.facebook.com/docs/instagram-basic-display-api](https://developers.facebook.com/docs/instagram-basic-display-api). 

Antes de prosseguir para os próximos passos é necessário criar um usuário teste e autenticar, para isso siga a [etapa 3 e etapa 4](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#etapa-3--adicionar-um-usu-rio-de-teste-do-instagram)da documentação do fornecedor

### Client ID e Client Secret

Após o cadastro no portal de desenvolvedor do Facebook, o desenvolvedor poderá registrar um novo produto, para o qual serão fornecidos o **Client ID** e **Client Secret**.

- [Registrar novo cliente](#)
- [Propriedades do cliente](#)

![](/download/attachments/273310668/Captura%20de%20tela%20de%202022-01-14%2015-53-57.png?version=1&modificationDate=1642186502427&api=v2)

**Tela de registro de novo produto no aplicativo**

Caso o único objetivo deste cliente seja obter os dados para integração do Instagram com o *widget* *Slideshow*, a URL do servidor Fluig pode ser informada no campo ***Configurações de OAuth do cliente***. O endereço preenchido nesse campo será utilizado mais adiante para gerar o token de acesso (*access token*).

![](/download/attachments/273310668/Captura%20de%20tela%20de%202022-01-14%2016-06-14.png?version=1&modificationDate=1642187196253&api=v2)

**O Client ID e Client Secret estarão o disponíveis após o registro do cliente**

Antes de prosseguir para os próximos passos é necessário criar um usuário teste e autenticar, para isso siga a [etapa 3 e etapa 4](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#etapa-3--adicionar-um-usu-rio-de-teste-do-instagram)da documentação do fornecedor.

### Token de Acesso

Siga os passos abaixo para obter o *token* de acesso. 

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Abra uma nova aba do navegador e informe a URL abaixo, substituindo CLIENT-ID pelo Client ID obtido anteriormente e REDIRECT-URI pela URL de redirecionamento informada no cadastro do cliente.

[?](#)

| `https://api.instagram.com/oauth/authorize?client_id={CLIENT-ID}&redirect_uri={REDIRECT-URL}&scope=user_profile,user_media&response_type=code` |
| --- |

 - Ao acessar esta URL, o navegador será redirecionado para o endereço abaixo, de onde poderá ser copiado o **Code**, disponível no final da URL (CODE):

[?](#)

| `http://your-redirect-uri.com?code=AQDp3TtBQQ...#_` |
| --- |

 - Exemplo de URL com o code gerado.

![](/download/attachments/273310668/Captura%20de%20tela%20de%202022-01-14%2016-33-51.png?version=1&modificationDate=1642188863307&api=v2)

  Ao capturar o code os caracteres **#_** no final devem ser retirados.

 - Com o code em mãos é hora de obter o access code, para isso utilize algum aplicativo que aceita solicitações de cURL e realize a seguinte requisição POST. Na URL fazer a troca dos respectivos parâmetros**Client-id, Cliente-Secret, Code e Redirect-Url**

[?](#)

| `https://api.instagram.com/oauth/access_token?client_id={client-id}&client_secret={client-secret}&code={code}&grant_type=authorization_code&redirect_uri={redirect-url}` |
| --- |

 - O retorno deve ser um JSON semelhante a esse:

[?](#)

| `{````"access_token": "IGQVJ...",````"user_id": 17841405793187218``}` |
| --- |

  Caso utilize o Postman passe os parâmetros no **body**, e não em params. Certifique-se de que a x-www-form-urlencoded esteja habilitada

Uma vez de posse do ID Cliente, *Client Secret* e Token de acesso, basta substituí-los no serviço **instagram.demo** na página de [Serviços REST](#ConfigurarInstagramnowidgetSlideshow-servico) do Painel de Controle para que as imagens da conta do Instagram sejam exibidas no *widget* *Slideshow*.

Dúvidas?

Caso tenha dúvidas ou problemas relacionados à obtenção dos dados de autenticação do Instagram, consulte a [documentação completa](https://www.instagram.com/developer/authentication/) do fornecedor.


<!-- anchors: ConfigurarInstagramnowidgetSlideshow-Índice, ConfigurarInstagramnowidgetSlideshow-Objetivo, ConfigurarInstagramnowidgetSlideshow-WidgetSlideshow, ConfigurarInstagramnowidgetSlideshow-ServiçoRESTservico, ConfigurarInstagramnowidgetSlideshow-ObterdadosdoInstagram, ConfigurarInstagramnowidgetSlideshow-CriaraplicativodoFacebook, ConfigurarInstagramnowidgetSlideshow-ClientIDeClientSecretclient_id, newclient, newclient-1264699527, newclient-1636462235, ConfigurarInstagramnowidgetSlideshow-TokendeAcessotoken, accesstoken, accesstoken-872616687, highlighter_687351, accesstoken-872616688, highlighter_814255, accesstoken-872616689, highlighter_539050, highlighter_944149 -->
