---
title: "Proxy reverso"
url: "https://tdn.totvs.com/display/public/fluig/Proxy+reverso"
scraped_at: "2026-03-09T05:10:59.771Z"
depth: 3
anchors: 8
child_links: 88
---

# Proxy reverso

Nota:

Esta página foi revisada para considerar as configurações de *server* do TOTVS Fluig Plataforma a partir da atualização 1.6.

# Objetivo

---

O objetivo deste guia é descrever os procedimentos para a configuração de um servidor de *proxy* reverso em uma instalação da plataforma.

Dicas

Após a configuração do *proxy* reverso, não esqueça de alterar a URL de acesso ao portal nas Configurações do sistema da plataforma. [Clique aqui](https://tdn.totvs.com/x/EO4KDg)e saiba como fazer.

Importante!

Salientamos que, ao utilizar um *proxy* reverso, uma prática de segurança recomendada para a plataforma é não expor o servidor de aplicação diretamente na Internet.

[Clique aqui](/pages/viewpage.action?pageId=611010249) e veja outras boas práticas de segurança recomendadas para o seu ambiente.

# Visão geral

---

Um *proxy* reverso é um servidor que repassa o tráfego de rede recebido para um ou mais servidores. Ele fica na frente dos servidores Web e encaminha as solicitações do cliente – o navegador Web, por exemplo – para esses servidores Web, agindo como uma camada de controle, ajudando a aumentar a segurança, a confiabilidade e o desempenho.

Em uma instalação da plataforma, este tipo de servidor é usado para habilitar uma topologia de arquitetura chamada [DMZ](https://tdn.totvs.com/display/fluig/Topologia+DMZ).

# Funcionamento

---

O *proxy* reverso intercepta as solicitações dos clientes antes que elas cheguem aos servidores Web. Isso permite aplicar balanceamento de carga – um dos seus usos mais comuns – como também cache de conteúdo, criptografia SSL, compressão de dados, além de permitir aumentar a segurança das aplicações Web e a proteção contra ataques.

Dessa forma, o *proxy* reverso garante que nenhum cliente se comunique diretamente com os servidores Web.

# Por que utilizar um proxy reverso?

---

Alguns dos benefícios obtidos ao utilizar um *proxy* reverso são:

- melhora no desempenho de aplicações Web, diminuindo o tempo de resposta e otimizando o processamento, pois ele facilita o balanceamento de carga e o cache de conteúdo;

- aumento da confiabilidade e da segurança contra ataques, visto que ele permite proteger os servidores implementando várias medidas de segurança e proteção;

- facilidade na aplicação de políticas de segurança, de autenticação e de autorização, por permitir centralizar o controle de tráfego;

- redução da carga de trabalho dos servidores *back-end*, pois ele gerencia a criptografia e a descriptografia do tráfego SSL.

# Configuração de proxy reverso / DMZ

---

No exemplo abaixo, a implementação da DMZ na plataforma foi realizada com o uso do Apache™ HTTP *Server*, que é um servidor *Web* de código livre, desenvolvido e mantido pela Apache *Software Foundation*.

A figura a seguir apresenta as topologias DMZ + SSL suportadas pela plataforma TOTVS Fluig.

Nota:

Destacamos que a topologia considerada ideal e recomendada é a número **2**: **(DMZ + SSL) → Fluig**.

****

Importante!

Não é possível utilizar as notificações em tempo real quando utilizado *proxy* reverso com HTTPS.

Se o seu ambiente utiliza HTTPS e [balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga), a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.

## Proxy reverso com Apache

---

Consulte os procedimentos para a configuração e alguns exemplos em [Configuração de *proxy* reverso Apache](/pages/viewpage.action?pageId=877162376).

## Proxy reverso com NGINX

---

Consulte os procedimentos para a configuração e alguns exemplos em [Configuração de *proxy* reverso NGINX com HTTPS](/pages/viewpage.action?pageId=736971727).

Importante!

Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.

## Proxy reverso com NLB ou Big IP

---

Para configurar *proxy* reverso utilizando o NLB, Big IP ou outros servidores homologados na nossa [matriz de portabilidade](/display/fluig/Matriz+de+Portabilidade), consulte a documentação dos próprios fornecedores ou fabricantes.

Mas, é importante se atentar à prevenção de vulnerabilidades, para que informações não fiquem expostas no cabeçalho HTTP. [Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=626350885) e saiba como ocultá-las no NLB.


<!-- anchors: Proxyreverso-Objetivo, Proxyreverso-Visãogeral, Proxyreverso-Funcionamento, Proxyreverso-Porqueutilizarumproxyreverso?, Proxyreverso-Configuraçãodeproxyreverso/DMZ, Proxyreverso-ProxyreversocomApache, Proxyreverso-ProxyreversocomNGINX, Proxyreverso-ProxyreversocomNLBouBigIP -->
