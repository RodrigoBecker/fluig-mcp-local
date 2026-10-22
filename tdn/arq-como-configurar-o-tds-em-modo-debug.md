---
title: "ARQ - Como configurar o TDS em modo Debug?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=196812975"
scraped_at: "2026-03-09T03:30:20.803Z"
depth: 2
anchors: 9
child_links: 55
---

# ARQ - Como configurar o TDS em modo Debug?

# Índice

# Plataforma

**Produto: **TOTVS Developer Studio****

# Ocorrência

Caso tenha problemas na utilização do plugin fluig Studio, é possível configurar o TDS (TOTVS Developer Studio) ou Eclipse no modo Debug para obter o log de execução da ferramenta.

# Solução

Siga os passos abaixo para configurar o TOTVS Developer Studio em modo Debug:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Primeiramente, acesse o diretório de instalação do TDS ou Eclipse e crie um atalho do arquivo executável (.exe) na Área de trabalho.

![](/download/attachments/196812975/Captura%20de%20Tela%2016_08%20001.png?version=1&modificationDate=1471354296000&api=v2)

 - Clique com o botão direito no atalho que foi criado e selecione **Propriedades**.

 - No campo **Destino**, acrescente o valor -debug, conforme o exemplo abaixo:  

![](/download/attachments/196812975/image2015-8-5%2016%3A18%3A12.png?version=1&modificationDate=1438802399000&api=v2)

 - Execute o TDS ou o Eclipse através do atalho criado.

 - Execute os passos até simular o problema que está enfrentando. Durante a utilização, deverá ser exibida uma janela do *prompt* de comando em segundo plano.

 - Assim que o erro ocorrer, acesse a janela do *prompt* do comando e selecione todo o conteúdo clicando com o botão direito sobre o *prompt* → **Editar** → **Selecionar tudo**.

![](/download/attachments/196812975/image2016-8-16%209%3A59%3A50.png?version=1&modificationDate=1471352390000&api=v2)

 - Em seguida, copie as informações clicando com o botão direito sobre o *prompt*→****Editar** → **Copiar**.

![](/download/attachments/196812975/image2016-8-16%2010%3A0%3A52.png?version=1&modificationDate=1471352452000&api=v2)

 - Abra o Bloco de notas ou outro editor de textos de sua preferência, cole as informações copiadas do *prompt*e salve no formato .txt.


<!-- anchors: ARQComoconfiguraroTDSemmodoDebug?-Índice, ARQComoconfiguraroTDSemmodoDebug?-Plataforma, ARQComoconfiguraroTDSemmodoDebug?-Ocorrência, ARQComoconfiguraroTDSemmodoDebug?-Solução, samples, samples-1, samples-2, samples-3, samples-4 -->
