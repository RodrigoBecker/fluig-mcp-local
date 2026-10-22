---
title: "Considerações de DNS para a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=213980466"
scraped_at: "2026-03-09T04:01:41.844Z"
depth: 2
anchors: 8
child_links: 81
---

# Considerações de DNS para a plataforma

# Índice

# Objetivo

---

O objetivo deste artigo é descrever as considerações que devem ser respeitadas para o correto funcionamento da plataforma TOTVS Fluig com DNS.

Dica

Após a configuração do DNS interno ou externo, você deve alterar a URL de acesso ao portal nas Configurações do Sistema da plataforma. Confira como fazer acessando [Configurações do sistema](https://tdn.totvs.com/x/EO4KDg).

# DNS

---

O acrônimo DNS é o termo em inglês para Domain Name System e consiste de um sistema de gerenciamento de nomes para redes de computadores.

## Definições

---

Um **domínio de DNS** é definido pelo nome cuja finalidade se refere a localizar e identificar computadores dentro de uma rede, seja ela interna ou externa (internet). Por exemplo, *fluig.com* e *suaempresa.com.br*.

Um **serviço gerenciador de DNS** é definido pelo sistema que faz a gestão das configurações e mantém o domínio disponível para consultas. Por exemplo, ISC BIND, Microsoft DNS Server e Amazon Route 53.

Uma **zona de DNS** é definida como a configuração responsável por um domínio dentro de um serviço gerenciador de DNS. 

Um **host de DNS** é definido como um registro dentro de uma zona de DNS que armazena um nome e um endereçamento IP. Por exemplo, registro *www* do *tipo A* aponta para o IP 54.86.205.229 dentro da zona fluig.com.

Um **servidor de DNS** é um servidor responsável por traduzir nomes de computadores para endereços IP e endereços IP para nomes de computadores, permitindo a localização de computadores em um determinado domínio.

Com a utilização de DNS, é possível acessar um site tanto pelo seu domínio ([www.fluig.com)](http://www.fluig.com%29/) quanto pelo seu IP (54.86.205.229).

## DNS Interno

---

O servidor de DNS Interno é o servidor na rede interna que irá possuir autoridade sobre o domínio na qual a plataforma estará publicada.

Este servidor tem como objetivo atender toda resolução de nomes que originam-se da rede interna ou rede privada.

Para utilização da plataforma internamente através de um host de DNS, será necessário criar no servidor de DNS interno um registro do *tipo A (registro responsável pelo mapeamento de um nome para IPv4)* apontando para o IP do servidor do fluig internamente.

Observação

É mandatória a configuração da plataforma através de um host de DNS (*tipo A ou CNAME*) caso deseje disponibilizar o mesmo internamente (rede interna) e externamente (internet).

## DNS Externo

---

O servidor de DNS Externo é o servidor na rede externa ou DMZ que irá possuir autoridade sobre o domínio na qual a plataforma estará publicada.

Este servidor tem como objetivo atender toda resolução de nomes que originam-se da rede externa, ou internet.

Para utilização da plataforma externamente através de um host de DNS, será necessário criar no servidor de DNS externo um registro do *tipo A (registro responsável pelo mapeamento de um nome para IPv4)* apontando para o IP que identifica o servidor do fluig na internet, geralmente representado pelo IP de uma interface externa do firewall da rede, que faz o redirecionamento do pacote para o IP do fluig internamente.

Observação

É mandatória a configuração da plataforma através de um host de DNS (*tipo A ou CNAME*) caso deseje disponibilizar o mesmo internamente (rede interna) e externamente (internet).

## Funcionamento do DNS Interno e Externo

---

Abaixo temos uma exemplificação do funcionamento do DNS interno e do DNS externo quando requisitamos acesso a plataforma internamente ou externamente.

- [DNS Interno](#)
- [DNS Externo](#)

![](/download/attachments/213980466/dns-local-sem-moldura.png?version=1&modificationDate=1449497735000&api=v2)

![](/download/attachments/213980466/dns-internet-sem-moldura.png?version=1&modificationDate=1449497790000&api=v2)


<!-- anchors: ConsideraçõesdeDNSparaaplataforma-Índice, ConsideraçõesdeDNSparaaplataforma-Objetivo, ConsideraçõesdeDNSparaaplataforma-DNS, ConsideraçõesdeDNSparaaplataforma-Definições, ConsideraçõesdeDNSparaaplataforma-DNSInterno, ConsideraçõesdeDNSparaaplataforma-DNSExterno, ConsideraçõesdeDNSparaaplataforma-FuncionamentodoDNSInternoeExterno, samples -->
