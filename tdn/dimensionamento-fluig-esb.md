---
title: "Dimensionamento Fluig ESB"
url: "https://tdn.totvs.com/display/public/fluig/Dimensionamento+Fluig+ESB"
scraped_at: "2026-03-09T04:37:49.225Z"
depth: 3
anchors: 0
child_links: 20
---

# Dimensionamento Fluig ESB

Atenção!

- O Fluig ESB é um produto que tem seu hardware dimensionado de acordo com a integração que está sendo utilizada.
- É necessário que o serviço do TOTVS ESB esteja em uma máquina dedicada sem outros serviços como ERP ou LS para que tenha o funcionamento correto.

Abaixo, segue um exemplo de**dimensionamento mínimo** para um servidor dedicado:

| Memória RAM | 1.000 mensagens por hora. | 8 GB |
| --- | --- | --- |
| 100.000 Mensagens por hora. | 16 GB |  |
| Processador | Bits | 64 Bits |
| Core | Mínimo 2 núcleos |  |
|  Disco | Velocidade | Mínimo 7200 RPM |
| Taxa de transferência | Mínimo 1 Gb/s |  |
| Espaço requerido para instalação | 4 GB |  |
| Espaço requerido para banco de dados | O espaço em banco de dados é relativo ao número de mensagens e a configuração de limpeza do histórico. Consulte-nos. |  |

**Servidores virtuais - VM - não estão homologados para a execução do Fluig ESB.**

Para ambientes de **alta disponibilidade** ou **missão crítica**, a equipe de produto TOTVS deverá ser acionada através do e-mail: [esb@totvs.com.br](mailto:esb@totvs.com.br).
