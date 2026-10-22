---
title: "Internacionalização (i18n)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185738869"
scraped_at: "2026-03-09T04:29:33.132Z"
depth: 3
anchors: 16
child_links: 60
---

# Internacionalização (i18n)

# Índice

# Objetivo

O objetivo deste guia é apresentar os procedimentos necessários para adaptar a plataforma Fluig para ser traduzida para outros idiomas.

# Conceito e configuração

O conceito de internacionalização ou i18n *(*que, por vezes, também é chamado de "Localização"*)* consiste no desenvolvimento e/ou adaptação de um produto para o idioma de um ou mais países. O acrônimo *"*i18n*"* origina-se do inglês "*internationalization*", onde 18 é o número de letras entre o primeiro *"*i*"* e o último *"*n*"*.

Na plataforma Fluig, o i18n é suportado na forma de arquivos de propriedades distintos para cada idioma. Sempre que for [criado um projeto a partir do Fluig Studio](https://tdn.totvs.com/display/fluig/Criando+um+projeto+Fluig+no+Studio), a estrutura de *i18n* será apresentada conforme o exemplo a seguir:

![](/download/attachments/185738869/i18n_I.png?version=1&modificationDate=1425642090000&api=v2)

Não se engane!

O nome do componente *(widget, layout etc.)* em questão coincide com o prefixo dos arquivos i18n. Este é o comportamento padrão do Studio, mas não é isso que fará com que as funções de i18n funcionem corretamente em seu componente. Dentro do [arquivo application.info](/display/fluig/Arquivo+application.info) deve existir uma propriedade chamada [locale.file.base.name](https://tdn.totvs.com/display/fluig/Arquivo+application.info#Arquivoapplication.info-locale.file.base.name). O importante é que o valor desta propriedade - esse sim - seja o mesmo que o prefixo dos arquivos i18n.

# Utilização no desenvolvimento

Nos arquivos i18n o cadastro deve ser feito da seguinte forma:

[?](#)

| `codigo.da.label=Valor da Label` |
| --- |

## Arquivos de fontes freemarker (.ftl) e javascript (.js)

Quando é necessário referenciar o valor da tradução desejada, deve-se utilizar o código *"${i18n.getTranslation('codigo.da.label')}"*.

### Arquivo .ftl:

[?](#)

| `````${i18n.getTranslation('codigo.da.label')}``````` |
| --- |

### Arquivo .js:

[?](#)

| `var` `descricao =``'${i18n.getTranslation("codigo.da.label")}'``;` |
| --- |

## Como traduzir propriedades do application.info?

Algumas propriedades do [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) são utilizadas em telas do sistema, sendo uma delas a tela de seleção de *widgets* na edição de páginas. É obrigatório, portanto, que ao menos as propriedades [application.title](/display/fluig/Arquivo+application.info#Arquivoapplication.info-application.title), [application.description](/display/fluig/Arquivo+application.info#Arquivoapplication.info-application.description) e [application.category](/display/fluig/Arquivo+application.info#Arquivoapplication.info-application.category) sejam traduzidas.

Para que isso seja possível, basta criar essas propriedades com os mesmos códigos que aparecem no application.info nos arquivos i18n. Veja o exemplo a seguir:

[?](#)

| `codigo.da.label=Valor da Label``application.title=Título``application.description=Descrição do Componente``application.category=Categoria Escolhida` |
| --- |

# Mapeamento de caracteres (text file enconding)

É importante ter certeza de que todos os arquivos de seu projeto estejam configurados como **UTF-8**. Normalmente a configuração de mapeamento de caracteres pode ser encontrada em dois lugares.

**Nas propriedades do projeto do eclipse:**

![](/download/attachments/185738869/utf8-a_I.png?version=1&modificationDate=1425651532000&api=v2)

****

**Ou nas propriedades do próprio fonte:**

![](/download/attachments/185738869/utf8-b_I.png?version=1&modificationDate=1425651540000&api=v2)

# Escape de caracteres (escape character)

Mesmo utilizando os arquivos com mapeamento de caractere UTF-8, é aconselhável utilizar caracteres de *espace* sempre que houver a necessidade de escrever caracteres especiais *(ç, á, é etc.)*. Portanto, a propriedade:

[?](#)

| `window.edit.name=Nome de Exibição` |
| --- |

torna-se:

[?](#)

| `window.edit.name=Nome de Exibi\u00E7\u00E3o` |
| --- |

Assim, independentemente do sistema operacional no qual a plataforma Fluig é utilizado, os caracteres especiais sempre são mostrados corretamente. Para que esse processo seja feito de forma produtiva, pode-se utilizar uma das muitas [ferramentas *online* de *character escaping*](https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=online+character+escape).


<!-- anchors: Internacionalização(i18n)-Índice, Internacionalização(i18n)-Objetivo, Internacionalização(i18n)-Conceitoeconfiguração, Internacionalização(i18n)-Utilizaçãonodesenvolvimento, highlighter_130510, Internacionalização(i18n)-Arquivosdefontesfreemarker(.ftl)ejavascript(.js), Internacionalização(i18n)-Arquivo.ftl:, highlighter_276098, Internacionalização(i18n)-Arquivo.js:, highlighter_797504, Internacionalização(i18n)-Comotraduzirpropriedadesdoapplication.info?, highlighter_9187, Internacionalização(i18n)-Mapeamentodecaracteres(textfileenconding), Internacionalização(i18n)-Escapedecaracteres(escapecharacter), highlighter_352419, highlighter_867142 -->
