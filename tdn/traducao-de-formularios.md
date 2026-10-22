---
title: "Tradução de Formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=668197293"
scraped_at: "2026-03-09T03:59:38.283Z"
depth: 2
anchors: 11
child_links: 52
---

# Tradução de Formulários

# Índice

# Objetivo

---

O objetivo deste guia é descrever a tradução de formulários avançados no TOTVS Fluig Plataforma.

# Pré-requisitos

---

Antes de iniciar o desenvolvimento de formulários, assista aos vídeos *how to* no item [Criação de formulários](https://tdn.totvs.com/x/fv4lE).

# Tradução de formulários

---

Para traduzir formulários é necessário utilizar a função i18n.translate(“literal_da_tradução”) nos pontos do arquivo HTML que devem ser traduzidos, conforme exemplo a seguir:

[?](#)

| `i18n.translate("nm_cliente")``````i18n.translate("contato_cliente")``` |
| --- |

As literais e seus respectivos valores são informados em arquivos de propriedades com a extensão .properties para cada um dos idiomas desejados. Os idiomas suportados para a tradução são os mesmos suportados pelo Fluig:

Português (pt_BR);

Inglês (en_US);

Espanhol (es).

Os arquivos contendo as literais têm a seguinte nomenclatura:

**Português:** nome_do_formulario_pt_BR.properties;

**Inglês:** nome_do_formulario_en_US.properties;

**Espanhol:**nome_do_formulario_es.properties.

Os arquivos de propriedades são criados de acordo com os passos apresentados a seguir:

- [Passo1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Para gerar os arquivos de propriedades, na visão *Explorador de Pacotes,* deve-se acessar o arquivo HTML do formulário a ser traduzido, clique com o botão direito e acessar a opção *Externalizar Strings*.

![](/download/attachments/668197293/Passo1.PNG?version=1&modificationDate=1645537716050&api=v2)

**Figura 1 - Menu Contextual Externalizar Strings.**

  - Os arquivos contendo as literais são criados na pasta do formulário.

![](/download/attachments/668197293/Passo2.PNG?version=1&modificationDate=1645537716677&api=v2)

**Figura 2 - Arquivos Properties na Pasta do Formulário.**

****

 - Informe os valores correspondentes às literais para o idioma de cada arquivo.

![](/download/attachments/668197293/Passo3.PNG?version=1&modificationDate=1645537716467&api=v2)

**Figura 3 - Edição de um Arquivo Properties.**

****

Ao exportar um formulário para o Fluig, os arquivos de propriedades contendo as literais são publicados como anexos dele.
O formulário é apresentado no idioma que está configurado para o usuário corrente.

# Traduzindo Eventos de formulários 

---

Da mesma forma que é possível traduzir a interface do formulário é possível traduzir também mensagem retornadas nos eventos do formulário. Para isso basta utilizar a função i18n.translate dentro dos eventos passando uma propriedade que esteja pré-definida no arquivos .properties deste mesmo formulário. Abaixo exemplo de uma implementação que irá retornar para o usuário uma mensagem de acordo com o definido no arquivo properties.

[?](#)

| `if` `(form.getValue(``'meeting'``) ==``null` `|| form.getValue(``'meeting'``).trim().length() == 0) {````throw` `i18n.translate(``"proidade_definida_no_arquivo_properties"``);````}` |
| --- |


<!-- anchors: TraduçãodeFormulários-Índice, TraduçãodeFormulários-Objetivo, TraduçãodeFormulários-Pré-requisitos, TraduçãodeFormulários-Traduçãodeformulários, highlighter_64342, samples, samples-1, samples-2, samples-3, TraduçãodeFormulários-TraduzindoEventosdeformulários, highlighter_623566 -->
