---
title: "Gerando a página de documentação de processos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=126718685"
scraped_at: "2026-03-09T03:05:24.071Z"
depth: 1
anchors: 4
child_links: 53
---

# Gerando a página de documentação de processos

# Índice

# Introdução

Com a introdução do Fluig Studio e da adoção da notação BPMN 2.0, a plataforma Fluig passou a oferecer a possibilidade de documentar detalhadamente os processos existentes dentro de uma organização. Partindo desta premissa a plataforma Fluig está oferecendo agora a geração da documentação de processos em forma de página Web permitindo que o modelador/documentador de processos publique essa página aonde ele achar adequado oferecendo o acesso a informação aonde ele for solicitado.

![](/download/attachments/126718685/image2014-3-6%2014%3A49%3A47.png?version=1&modificationDate=1394128940000&api=v2)

# Gerando o site

Gerar o site de documentação de processos é um processo simples. No Explorador de pacotes clique com o botão esquerdo em qualquer pasta do seu projeto Fluig e selecione a opção Exportar que aparece no menu de contexto .

![](/download/attachments/126718685/image2014-3-6%2014%3A56%3A13.png?version=1&modificationDate=1394128940000&api=v2)

Nas opções de exportação abra a pasta "Fluig" e selecione a opção "Exportar Projeto para o formato de site" . 

![](/download/attachments/126718685/image2014-3-6%2014%3A58%3A21.png?version=1&modificationDate=1394128940000&api=v2)

Confirme a informação e o site será gerado abrindo a página com o Navegador Web padrão da máquina .

Vale lembrar que cada projeto Fluig terá apenas um site e este site listará todos os diagramas de processo existentes na pasta "workflow/diagrams" do projeto em questão . 

# Campos de Extensão para entidades de processo

Para cada entidade existente dentro do diagrama (e para o próprio diagrama) é possível criar campos de extensão que permitem documentar de forma mais detalhada um diagrama ou uma atividade do mesmo dentro da página de documento (site) . Para cadastrar campos de extensão para as entidades basta acessar a seção de "**Extensão**" dentro das propriedades do elemento. Nessa seção a quantidade e o tipo de campos necessários de acordo com a necessidade do seu negócio.

![](/download/attachments/126718685/image2014-3-6%2015%3A23%3A30.png?version=1&modificationDate=1394130196000&api=v2)

Ao clicar na atividade dentro do site gerado esses campos estarão incluídos na documentação da entidade .

![](/download/attachments/126718685/image2014-3-6%2015%3A25%3A13.png?version=1&modificationDate=1394130299000&api=v2)

Nas atividades sem campos extensão associados apenas o código e a descrição da tarefa serão exibidos dentro desta tela de detalhamento .


<!-- anchors: Gerandoapáginadedocumentaçãodeprocessos-Índice, Gerandoapáginadedocumentaçãodeprocessos-Introdução, Gerandoapáginadedocumentaçãodeprocessos-Gerandoosite, Gerandoapáginadedocumentaçãodeprocessos-CamposdeExtensãoparaentidadesdeprocesso -->
