---
title: "Personalização da URL para redirecionamento mobile"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185732379"
scraped_at: "2026-03-09T03:46:25.078Z"
depth: 2
anchors: 4
child_links: 39
---

# Personalização da URL para redirecionamento mobile

# Índice

**

# Objetivo

---

Conforme informado na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade), o TOTVS Fluig Plataforma não é homologado para acesso pelo navegador mobile, apenas pelo aplicativo My fluig. Quando é realizado o acesso via navegador mobile, a plataforma apresenta uma tela sugerindo o download do aplicativo ** Veja a imagem **. O campo URL para redirecionamento mobile configura a URL para qual o usuário será direcionado ao acionar o link "continuar mesmo assim".

## Alteração da URL para redirecionamento mobile

Para alterar a URL da página de redirecionamento *mobile*, realize os seguintes passos:

1. Efetue o *login* na plataforma utilizando o usuário **wcmadmin**, e então acesse **Painel de Controle  ► WCM ► Configurações do Sistema**.
2. Na tela de configurações do sistema, acesse a aba **Personalização**.
3. Informe a URL da página no campo **URL para redirecionamento mobile**.** **Pode ser informada uma URL padrão da plataforma ou algo específico (por exemplo, pode ser uma comunidade ou uma página customizada).![](/download/attachments/185732379/personalizacao.png?version=4&modificationDate=1620151960313&api=v2)
4. Clique no botão **Salvar**.

Após salvar essa configuração, quando os usuários forem acessar a plataforma via navegador mobile e acionarem o link "continuar mesmo assim" (da tela de sugestão do download do aplicativo), a plataforma irá redirecionar para a URL informada.  

## Como montar a URL de redirecionamento

Quando requisita a página de redirecionamento, a plataforma envia dois parâmetros que podem ser utilizados na lógica desta página de redirecionamento:

- **cssClass:**sistema operacional utilizado quando acessada a página de redirecionamento. Seu valor pode ser **ios**ou**android.**
- **urlMobile:**URL requisitada originalmente pelo usuário.

Teste sua URL!

É importante testar a configuração dessa URL, pois caso sejam informados dados inválidos neste campo e a URL for construída incorretamente, a plataforma pode entrar em um loop infinito e redirecionar novamente para a tela de login após a autenticação.

- Exemplo para redirecionar para uma página customizada: [https://suaempresa.fluig.com/portal/p/1/acompanhamentoprojeto](https://suaempresa.fluig.com/portal/p/1/acompanhamentoprojeto)
- Exemplo de URL incorreta: [https://suaempresa.fluig.com/nkwidget/index.html?urlMobile=https://suaempresa.fluig.com:443/portal/home?redir=true&cssClass=android](https://suaempresa.fluig.com/nkwidget/index.html?urlMobile=https://suaempresa.fluig.com:443/portal/home?redir=true&cssClass=android)

Nos casos onde o usuário configurar a URL [https://URLFLUIG/portal](https://urlfluig/portal) por exemplo, e ainda assim desejar acessar a plataforma pelo navegador mobile, deve ser implementado o login personalizado conforme descrito nas páginas [Personalização da página de login no tema Clássico](https://tdn.totvs.com/x/DwFlDw) e [Personalização da página de login no tema Snowflake](https://tdn.totvs.com/x/zE90GQ).


<!-- anchors: PersonalizaçãodaURLpararedirecionamentomobile-Índice, PersonalizaçãodaURLpararedirecionamentomobile-Objetivo, PersonalizaçãodaURLpararedirecionamentomobile-AlteraçãodaURLpararedirecionamentomobile, PersonalizaçãodaURLpararedirecionamentomobile-ComomontaraURLderedirecionamento -->
