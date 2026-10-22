---
title: "RequestInfoVO"
url: "https://tdn.totvs.com/display/public/fluig/RequestInfoVO"
scraped_at: "2026-03-09T04:01:04.362Z"
depth: 2
anchors: 5
child_links: 59
---

# RequestInfoVO

# Descrição

---

Este é um objeto de entrada do método de validação de login. Foi implementado na atualização **Fluig 2.0.0-260224** e permite criar validações com os dados da requisição como IP, host, porta.

Este objeto é um dos parâmetros de entrada do método [beforeLogin](/display/fluig/Evento+beforeLogin).

# Atributos da instância

---

**String ip**

- Endereço IP real do cliente, considerando cabeçalhos de proxy (X-Forwarded-For).
- Este IP só é confiável quando o ambiente utiliza um **Proxy reverso** configurado corretamente, com a funcionalidade de encaminhamento do IP original habilitada na requisição.

**String userAgent**

- Valor enviado pelo navegador contendo detalhes sobre sistema operacional, navegador e dispositivo.

**String method**

- O método HTTP utilizado na requisição (GET, POST, PUT, DELETE…).

**String requestURI**

- Parte do caminho solicitado pelo cliente dentro da aplicação.
- Ex: /portal/login/auth.

**String queryString**

- Parâmetros enviados na URL quando o método é GET.
- Ex: user=jose&id=10.

**String host**

- Valor do cabeçalho Host, normalmente o domínio acessado.
- Ex: fluig.minhaempresa.com ou localhost:8080.

**String protocol**

- Protocolo e versão usados na requisição.
- Ex: HTTP/1.1 ou HTTP/2.

**String referer**

- URL da página anterior de onde o usuário veio (caso o navegador envie). Útil para entender fluxo de navegação e identificar redirecionamentos externos.

# Exemplos de uso

---

**Impressão dos dados da requisição:**

[?](#)

| 123 | `function` `beforeLogin(login, origin, requestInfoVO) {````log.dir(requestInfoVO);``}` |
| --- | --- |

**Saída:**

[?](#)

| 12345678910 | `{````"referer"` `:``"http://127.0.1.1:8080/portal/p/1/home"``,````"protocol"` `:``"HTTP/1.1"``,````"method"` `:``"POST"``,````"ip"` `:``"127.0.0.1"``,````"host"` `:``"127.0.1.1:8080"``,````"userAgent"` `:``"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"``,````"requestURI"` `:``"/portal/p/1/j_security_check"``,````"queryString"` `:``null``}` |
| --- | --- |


<!-- anchors: RequestInfoVO-Descrição, RequestInfoVO-Atributosdainstância, RequestInfoVO-Exemplosdeuso, highlighter_149877, highlighter_745659 -->
