---
title: "Topologia DMZ"
url: "https://tdn.totvs.com/display/public/fluig/Topologia+DMZ"
scraped_at: "2026-03-09T04:02:11.248Z"
depth: 2
anchors: 3
child_links: 78
---

# Topologia DMZ

# Introdução

---

O TOTVS Fluig Plataforma possui suporte à implementação de DMZ.

O acrônimo DMZ, em segurança da informação, corresponde à DeMilitarized Zone ou "zona desmilitarizada". A DMZ é uma pequena rede situada entre uma rede confiável e uma não confiável, geralmente entre a rede local e a Internet.

A função de uma DMZ é manter todos os serviços que possuem acesso externo (tais como servidores HTTP) junto em uma rede local, limitando assim o potencial dano em caso de comprometimento de algum serviço por um invasor.

# Pré-requisitos

---

- O cliente deve possuir um domínio de internet.

- O mesmo endereço de acesso à plataforma deve ser usado tanto para rede externa quanto para a rede interna.

- Quando a plataforma estiver usando SSL, é necessário liberar somente a porta 443 no *firewall* ao invés da porta 8080.

- Liberar no *firewall* os seguintes endereços para acesso a partir do servidor Fluig:Fluig Analytics - https://[analytics.fluig.com](https://analytics.fluig.com);
- TOTVS Identity - servidor e porta do serviço Identity, por exemplo, https://[fluigidentity.com](http://fluigidentity.com).

- Caso o servidor de *e-mail* usado pela plataforma esteja fora da rede interna, é necessário liberar o endereço e a porta do servidor de *e-mail* nos *firewalls*.

- A topologia descrita e as portas também atendem ao aplicativo móvel do Fluig.

# Topologia

---

A figura abaixo ilustra a topologia e as portas de comunicação usadas pela plataforma.

         ![](/download/attachments/152801841/fluig-dmz.png?version=2&modificationDate=1408995776000&api=v2)


<!-- anchors: TopologiaDMZ-Introdução, TopologiaDMZ-Pré-requisitos, TopologiaDMZ-Topologia -->
