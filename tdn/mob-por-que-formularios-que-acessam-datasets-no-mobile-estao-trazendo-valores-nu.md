---
title: "MOB - Por que formulários que acessam datasets no mobile estão trazendo valores nulos?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223929070"
scraped_at: "2026-03-09T03:33:06.834Z"
depth: 2
anchors: 9
child_links: 39
---

# MOB - Por que formulários que acessam datasets no mobile estão trazendo valores nulos?

# Índice

# Plataforma

**Produto: **Fluig Mobile

# Ocorrência

O campo de um formulário que acessa um dataset traz apenas valores nulos, mas via web funciona normalmente.

# Causa

Se o seu formulário possui uma estrutura de arquivos semelhante a essa: 
- SEU_FORMULÁRIO.html; 
- SEU_FORMULARIO_ecmmobile.html; 

Abra o segundo arquivo e verifique se o código HTML do campo que está apresentando problemas é semelhante ao código abaixo:

**SEU_FORMULARIO_ecmmobile.html**

[?](#)

| ```LABEL DO CAMPO``````null````null````````null````null````` |
| --- |

# Solução

Converta o formulário para a nova versão - que utiliza o novo [Style Guide](https://style.fluig.com/) - onde apenas um código serve tanto para o navegador web quanto para o app mobile. Siga os passos abaixo:

1) Tenha certeza de que você está utilizando a versão mais recente do Fluig Studio (que seja compatível com seu Fluig server);

2) Crie um novo formulário;

3) Copie todos os arquivos do seu formulário anterior para o novo, com exceção do(s) arquivos .html. Veremos esse(s) a seguir;

4) Sobre o arquivo SEU_FORMULARIO.html:

- Abra o fonte de seu formulário antigo e copie o conteúdo da tag:

[?](#)

| ```````` |
| --- |

- Abra o fonte de seu novo formulário e cole o conteúdo copiado dentro da tag:

[?](#)

| ```````` |
| --- |

Importante

Não copie a tag "<form>", apenas o conteúdo dela

5) Sobre o arquivo SEU_FORMULARIO_ecmmobile.html:

- Ignore-o e não o copie para a nova estrutura;

6) Ao exportar novamente o formulário para o Fluig, não o faça como novo formulário. Escolha o nome do antigo, como se fosse gerar apenas uma nova versão dele

# Observações

Provavelmente será necessário remodelar a parte visual do formulário. Facilitadores podem ser encontrados em [https://style.fluig.com](https://style.fluig.com/)


<!-- anchors: MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Índice, MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Plataforma, MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Ocorrência, MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Causa, highlighter_243205, MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Solução, highlighter_370529, highlighter_132123, MOBPorqueformuláriosqueacessamdatasetsnomobileestãotrazendovaloresnulos?-Observações -->
