---
title: "BPM 093 - É possível ajustar o fuso horário do servidor para que não gere erro ao gravar  os horários de início e conclusão das solicitações?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=275151216"
scraped_at: "2026-03-09T03:57:47.091Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 093 - É possível ajustar o fuso horário do servidor para que não gere erro ao gravar  os horários de início e conclusão das solicitações?

# Índice

# Plataforma

**Produto:**fluig
**Versão**: 1.6.0

# Ocorrência

Identificamos que o fuso-horário configurado no servidor de aplicação do Fluig não era o horário de Brasilia e, desta forma, as atividades executadas no BPM estavam sendo gravadas com horários de início e conclusão incorretos.

# Causa

Já alteramos a configuração do servidor e o problema foi solucionado para os processos executados após a mudança, porem gostaríamos de saber se existe alguma forma de atualizar a base histórica que ficou gravada com os horários incorretos.

# Solução

O fluig não possui um recurso para atualização dos dados históricos, e não recomendamos alterações diretamente na base de dados, visto o grande impacto que tais alterações podem causa na plataforma como um todo.


<!-- anchors: BPM093Épossívelajustarofusohoráriodoservidorparaquenãogereerroaogravaroshoráriosdeinícioeconclusãodassolicitações?-Índice, BPM093Épossívelajustarofusohoráriodoservidorparaquenãogereerroaogravaroshoráriosdeinícioeconclusãodassolicitações?-Plataforma, BPM093Épossívelajustarofusohoráriodoservidorparaquenãogereerroaogravaroshoráriosdeinícioeconclusãodassolicitações?-Ocorrência, BPM093Épossívelajustarofusohoráriodoservidorparaquenãogereerroaogravaroshoráriosdeinícioeconclusãodassolicitações?-Causa, BPM093Épossívelajustarofusohoráriodoservidorparaquenãogereerroaogravaroshoráriosdeinícioeconclusãodassolicitações?-Solução -->
