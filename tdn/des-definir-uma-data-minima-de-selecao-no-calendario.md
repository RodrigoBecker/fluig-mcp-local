---
title: "DES  - Definir uma data mínima de seleção no calendário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243009403"
scraped_at: "2026-03-09T04:45:44.770Z"
depth: 3
anchors: 6
child_links: 56
---

# DES  - Definir uma data mínima de seleção no calendário

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.5.9

# Ocorrência

Pretendemos implementar uma validação de data referente ao nosso processo de aprovação de horas extras, de forma que, as solicitações devem ser iniciadas com pelo menos três dias de antecedência. 

# Solução

O componente de [calendário](https://style.fluig.com/javascript.html#fluig-calendar) presente no [Style Guide](https://style.fluig.com/) possibilita realizar esta validação, pois é possível definir uma data mínima de seleção. Por exemplo, se o usuário tentar iniciar a solicitação hoje, só conseguirá selecionar no calendário uma data daqui a três dias.

Disponibilizei anexo um exemplo de formulário que aplica a regra descrita acima. Para bloquear a data mínima de seleção, foi utilizado método setMinDate() disponível a partir do objeto FLUIGC.calendar():

**Calendário**

[?](#)

| 12345678910 | `// Esta linha cria a variável calendário que receberá a chamada FLUIGC.calendar():``var` `calendario = FLUIGC.calendar(``"#"` `+ id);``// Cria a variável com a data atual:``var` `dataAtual =``new` `Date();``// Adiciona 3 dias na data atual, você pode alterar este valor conforme necessário:``var` `dias = 3;``// Incrementa a quantidade de dias na data atual:``dataAtual.setDate(dataAtual.getDate() + dias);``// Define que o valor mínimo a ser selecionado no calendário:``calendario.setMinDate(dataAtual);` |
| --- | --- |

Com a implementação deste código, podemos visualizar que a data mínima de seleção é de 3 dias após a data atual:

![](/download/attachments/243009403/image2016-7-5%2011%3A29%3A22.png?version=1&modificationDate=1467729290000&api=v2)

# Observações

Esta configuração não está disponível no editor web da plataforma no momento, é possível de ser feita apenas via TDS, alterando o código manualmente.


<!-- anchors: DESDefinirumadatamínimadeseleçãonocalendário-Índice, DESDefinirumadatamínimadeseleçãonocalendário-Plataforma, DESDefinirumadatamínimadeseleçãonocalendário-Ocorrência, DESDefinirumadatamínimadeseleçãonocalendário-Solução, highlighter_736832, DESDefinirumadatamínimadeseleçãonocalendário-Observações -->
