---
title: "DES - Utilização de mask em campo de formulário com pai e filho"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=190517250"
scraped_at: "2026-03-09T04:45:18.383Z"
depth: 3
anchors: 7
child_links: 58
---

# DES - Utilização de mask em campo de formulário com pai e filho

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

A propriedade 'mask' não funciona para campos pai e filho nos formulários.

# Causa

Isto acontece porque a forma que são tratados estes campos é um pouco diferente, eles são adicionados conforme necessidade no formulário, não são fixos como os outros. Como a execução dos campos filhos ocorre antes que estes campos apareçam no formulário, não são atribuídas as máscaras.

# Solução

Para funcionar deve-se criar uma função, uma sugestão é utilizar as funções JQuery para pegar os campos de uma coluna inteira da tabela do pai e filho e atribuir a máscara que precisar nos campos.
Outra forma de solucionar o problema é adicionar as propriedades 'mask' no campo pai e filho normalmente e recarregar o evento 'mask', para atribuir nos campos filhos, conforme exemplo abaixo:

[?](#)

| `function` `addChild(){````var` `row = wdkAddChild(``'tabelaFilhos'``);``//Adicionar filhos` ```MaskEvent.init();``//Atualiza os campos com 'mask'``}````` |
| --- |

# Observações

É necessário ter conhecimento de Javascript básico ou JQuery para fazer este procedimento. 
Para mais detalhes sobre o 'mask' e desenvolvimento de pai e filho, favor consultar a documentação de [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=75270483).


<!-- anchors: DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Índice, DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Plataforma, DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Ocorrência, DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Causa, DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Solução, highlighter_36547, DESUtilizaçãodemaskemcampodeformuláriocompaiefilho-Observações -->
