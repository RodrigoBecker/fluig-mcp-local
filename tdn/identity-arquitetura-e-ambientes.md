---
title: "Identity | Arquitetura e ambientes"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Arquitetura+e+ambientes"
scraped_at: "2026-03-09T04:35:36.160Z"
depth: 3
anchors: 5
child_links: 30
---

# Identity | Arquitetura e ambientes

# Falando de arquitetura e ambientes...

---

O Identity é uma aplicação 100% SaaS cujo ambiente de produção está hospedado na nuvem brasileira da AWS (Amazon Web Services), a maior plataforma de computação em nuvem do mundo. O serviço de hospedagem segue as principais certificações de segurança, como PCI-DSS, HIPAA/HITECH, FedRAMP, GDPR, FIPS 140-2 e NIST 800-171, o que nos ajuda a atender aos requisitos de conformidade em todo o mundo.

Esta estrutura garante vários benefícios tanto para a aplicação quanto para o cliente, entre eles:

- Escalabilidade virtualmente ilimitada;
- Atendimento das requisições por qualquer um dos servidores;
- Redundância de serviços;
- Sem impacto para o usuário em caso de falha.

O Identity ainda possui uma série de medidas planejadas para reduzir o impacto de uma indisponibilidade na operação dos clientes.

- Monitoramento do ambiente por uma equipe *DevOps* especializada;
- *Backups* diários;
- Controle de versão da aplicação;
- Processo de recuperação automática;
- Registro das atividades.

Essas ações também ajudam a preservar a segurança e a disponibilidade do serviço durante os procedimentos de atualização da aplicação.

## Tratativas de segurança

Além dos itens mencionados acima, o Identity conta com as seguintes ferramentas de segurança:

- Tratamentos para ataques de força bruta;
- Rede de distribuição de conteúdo (CDN);
- Firewall com configuração de *rate limit*, reputação de IPs e outros bloqueios;
- Todos os servidores em rede privada (não expostos para a internet);
- Regras de bloqueio disponibilizadas pela própria AWS;
- Ferramenta para geração e proteção das credenciais do cluster.

# Tecnologia Docker com orquestração Kubernetes

Os serviços do Identity utilizam a tecnologia de contêineres Docker e são controlados pela ferramenta de orquestração Kubernetes. A estrutura em contêineres é mais eficiente que o modelo de máquinas virtuais (VMs) usado anteriormente, pois os serviços do Identity podem assim compartilhar recursos como o sistema operacional e bibliotecas, aproveitando de forma mais eficaz o *hardware* dos servidores.

Outra vantagem é a portabilidade proporcionada pelo isolamento dos serviços em contêineres, um formato leve, autossuficiente e que pode ser executado em uma grande variedade de ambientes. Além disso, a inicialização mais rápida de um contêiner, comparada às VMs, aumenta significativamente a resiliência da aplicação.

### Requisitos para integrações

A partir da atualização da arquitetura para o Docker, todas as integrações devem utilizar o protocolo **TLS 1.2**. Outro requisito é a extensão **SNI** (*Server Name Indication*), que deve ser implementada pelas aplicações que desejam se comunicar com o Identity.

Importante

A não implementação dos requisitos de segurança (TLS 1.2 e SNI) resulta no bloqueio da conexão, impedindo a integração das aplicações ao Identity para fins de autenticação, acesso, provisionamento, entre outros.

### Requisitos para aplicativos customizados

Para que a integração entre aplicativos customizados e o Identity em arquitetura Docker continuem funcionando, são necessárias algumas alterações:

- A primeira consiste na utilização do protocolo TLS v1.2 para as comunicações HTTPS, pois o SSL já foi quebrado e representa uma falha de segurança. 

- A segunda alteração consiste em ativar o SNI para as conexões com o Identity.

Das duas alterações a que causa o maior impacto é a ativação de SNI, visto que a JDK 7 possui bugs no tratamento de SNI, que devem ser contornados.


<!-- anchors: Identity|Arquiteturaeambientes-Falandodearquiteturaeambientes..., Identity|Arquiteturaeambientes-Tratativasdesegurança, Identity|Arquiteturaeambientes-TecnologiaDockercomorquestraçãoKubernetes, Identity|Arquiteturaeambientes-Requisitosparaintegrações, Identity|Arquiteturaeambientes-Requisitosparaaplicativoscustomizados -->
