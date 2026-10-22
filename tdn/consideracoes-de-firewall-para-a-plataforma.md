---
title: "Considerações de Firewall para a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=219684365"
scraped_at: "2026-03-09T04:01:45.869Z"
depth: 2
anchors: 5
child_links: 78
---

# Considerações de Firewall para a plataforma

# Índice

# Objetivo

---

O objetivo deste artigo é descrever quais são as considerações que devem ser respeitadas para disponibilização da plataforma em uma rede com firewall.

# Firewall

---

Firewall é uma solução de segurança de rede, que determina a entrada ou saída do tráfego de rede com base em um conjunto de regras.

### Liberações de Portas no Firewall

---

É comum a necessidade de disponibilizar a plataforma para acesso de uma rede externa, por exemplo a internet.

Como uma boa prática de segurança, devemos sempre publicar a plataforma externamente através de uma solução de firewall, evitando assim que todas as portas da plataforma fiquem apresentadas diretamente para acesso via internet.

Para disponibilização do TOTVS Fluig Plataforma externamente, as portas abaixo devem ser liberadas na solução de firewall utilizada.

| Origem | Destino | Porta | Camada de Transporte | Camada de Aplicação |
| --- | --- | --- | --- | --- |
| Origem | Destino | Porta | Camada de Transporte | Camada de Aplicação |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 8080 | TCP | HTTP |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 8443 | TCP | HTTPS |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 7777 | TCP | HTTP & WebSocket |

### Regras de NAT no Firewall

---

Uma técnica utilizada para disponibilizar a plataforma externamente através de firewall, é o NAT (*Network Address Translation*).

O NAT permite que possamos traduzir endereços IPs e portas da rede interna para a internet. Com isso, podemos mapear as portas de rede de um IP público (roteável pela internet), que pode estar vinculado ao firewall da rede, para um servidor que esteja na rede interna, no caso o servidor da plataforma.

Por exemplo, considerando o cenário na qual o IP público 54.54.54.1 seja responsável por representar um ambiente externamente, e o IP 192.168.1.25 seja responsável por representar um ambiente internamente, ao acessarmos externamente a plataforma pelo IP 54.54.54.1 nas portas 8080 ou 8443, o firewall que tem em suas interfaces externas o IP 54.54.54.1, aplicará uma regra de NAT encaminhando os pacotes externos para as portas 8080 ou 8443 do servidor interno de IP 192.168.1.25.

Abaixo temos uma representação das regras de NAT necessárias para disponibilização da plataforma externamente.

| Origem | Destino Externo | Porta Externa | Camada de Transporte | Destino Interno | Porta Interna |
| --- | --- | --- | --- | --- | --- |
| Origem | Destino Externo | Porta Externa | Camada de Transporte | Destino Interno | Porta Interna |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 8080 | TCP | IP da plataforma (Interno) | 8080 |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 8443 | TCP | IP da plataforma (Interno) | 8443 |
| 0.0.0.0/0 (Internet) | IP da plataforma (Externo) | 7777 | TCP | IP da plataforma (Interno) | 7777 |


<!-- anchors: ConsideraçõesdeFirewallparaaplataforma-Índice, ConsideraçõesdeFirewallparaaplataforma-Objetivo, ConsideraçõesdeFirewallparaaplataforma-Firewall, ConsideraçõesdeFirewallparaaplataforma-LiberaçõesdePortasnoFirewall, ConsideraçõesdeFirewallparaaplataforma-RegrasdeNATnoFirewall -->
