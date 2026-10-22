---
title: "DES - Recuperar o valor de um campo ao excluir registro de tabela pai-filho"
url: "https://tdn.totvs.com/display/public/fluig/DES+-+Recuperar+o+valor+de+um+campo+ao+excluir+registro+de+tabela+pai-filho"
scraped_at: "2026-03-09T04:45:49.196Z"
depth: 3
anchors: 5
child_links: 55
---

# DES - Recuperar o valor de um campo ao excluir registro de tabela pai-filho

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.5.9

# Ocorrência

É possível recuperar o valor de um registro pai-filho quando o usuário clicar no botão excluir?

# Solução

Com o uso da função [fnCustomDelete](https://tdn.totvs.com/x/U4l8B)é possível interferir na chamada que elimina um filho da tabela. Para obter o valor do campo a ser excluído, utilize o seguinte código:

[?](#)

| `function` `fnCustomDelete(oElement){````// Recuperar o valor do registro filho que está sendo eliminado````var` `valor = $(oElement).closest(``'tr'``).find(``"input[id^='NAME_CAMPO']"``).val();````alert (``"O valor do campo Cliente é: "` `+ valor);``` ```// Revomer o registro filho````fnWdkRemoveChild(oElement);````alert (``"Filho eliminado!"``);``}` |
| --- |

[Anexo](https://tdn.totvs.com/download/attachments/243639438/teste_pai_filho.zip?api=v2)segue o formulário de exemplo.


<!-- anchors: DESRecuperarovalordeumcampoaoexcluirregistrodetabelapaifilho-Índice, DESRecuperarovalordeumcampoaoexcluirregistrodetabelapaifilho-Plataforma, DESRecuperarovalordeumcampoaoexcluirregistrodetabelapaifilho-Ocorrência, DESRecuperarovalordeumcampoaoexcluirregistrodetabelapaifilho-Solução, highlighter_979798 -->
