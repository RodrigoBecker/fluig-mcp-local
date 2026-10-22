---
title: "IDE - Por que as imagens do Kit Intranet não são exibidas quando ativo a integração com o Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=393362525"
scraped_at: "2026-03-09T03:38:22.488Z"
depth: 2
anchors: 5
child_links: 45
---

# IDE - Por que as imagens do Kit Intranet não são exibidas quando ativo a integração com o Identity?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma integrado ao TOTVS Identity

# Ocorrência

Tenho o Kit Intranet publicado em minhas páginas e quando ativo a integração com o Identity as imagens do widget Slideshow e artigos não são exibidas. Porém, se desabilito a integração com o Identity, funciona perfeitamente. Por que isso ocorre?

# Causa

Isso ocorre porque nas configurações da plataforma (wcmadmin), a URL do Portal foi preenchida com o endereço IP do servidor de instalação (por exemplo: http://192.168.15.54:8080), porém nas configurações do aplicativo Fluig no Identity foi informado o endereço de domínio do servidor (http://fluig.suaempresa.com.br).

# Solução

A URL do Portal preenchida no wcmadmin e o Domínio preenchido no aplicativo Fluig do Identity devem apontar para o mesmo endereço.

**Para verificar a URL do Portal no wcmadmin**

**01.** Acessar a plataforma com o usuário wcmadmin.

**02.** Acessar o **Painel de Controle** → **WCM** → **Configuração do sistema**.

**03.** Na aba Portal, verifique o endereço informado no campo **URL do Portal**.

![](/download/attachments/393362525/URL_do_portal.png?version=2&modificationDate=1597070032870&api=v2)

**Para verificar o Domínio no aplicativo Fluig**

**01.** Acesse o Identity com um usuário administrador.

**02.** Clique sobre o Menu **Aplicativos**.

**03.** Busque pelo aplicativo Fluig que foi configurado.

**04.** Clique sobre o nome do app para abrir as configurações.

**05.** Acesse a aba **Editar** e verifique o endereço informado no campo **Domínio**.

Lembrando que é necessário informar /portal/idp ao final dessa URL, por exemplo, "[http://192.168.15.54:8080/portal/idp](http://192.168.15.54:8080/portal/idp)" para que o acesso seja realizado corretamente.

![](/download/attachments/393362525/Dom%C3%ADnio.png?version=2&modificationDate=1597070048730&api=v2)


<!-- anchors: IDEPorqueasimagensdoKitIntranetnãosãoexibidasquandoativoaintegraçãocomoIdentity?-Índice, IDEPorqueasimagensdoKitIntranetnãosãoexibidasquandoativoaintegraçãocomoIdentity?-Plataforma, IDEPorqueasimagensdoKitIntranetnãosãoexibidasquandoativoaintegraçãocomoIdentity?-Ocorrência, IDEPorqueasimagensdoKitIntranetnãosãoexibidasquandoativoaintegraçãocomoIdentity?-Causa, IDEPorqueasimagensdoKitIntranetnãosãoexibidasquandoativoaintegraçãocomoIdentity?-Solução -->
