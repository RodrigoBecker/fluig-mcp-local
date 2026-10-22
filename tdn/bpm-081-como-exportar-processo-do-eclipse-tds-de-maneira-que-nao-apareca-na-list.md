---
title: "BPM 081 - Como exportar processo do Eclipse/TDS de maneira que não apareça na lista \"Sem Categoria\" ?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268802433"
scraped_at: "2026-03-09T03:56:59.017Z"
depth: 2
anchors: 6
child_links: 134
---

# BPM 081 - Como exportar processo do Eclipse/TDS de maneira que não apareça na lista "Sem Categoria" ?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Alterei a categoria do meu processo no Eclipse/TDS, mas ao exportar para o fluig ele aparece na categoria "Sem Categoria".

![](/download/attachments/268802433/image2016-11-8%208%3A26%3A38.png?version=1&modificationDate=1478605417000&api=v2)

**Figura 1 - Configuração de nova categoria do diagrama**

****

****

**Figura 2 - Processo é exibido na categoria Sem Categoria**

****

# Causa

Quando o processo possui arquivos literais utilizados para tradução é necessário alterar a categoria também nesses arquivos. 

Se a categoria não for alterada em todos eles, as solicitações serão exibidas como **Sem Categoria** no fluig.

# Solução

Acesse o projeto no Eclipse/TDS e navegue pelo **Exportador de Projeto** até a pasta **literals**. Os arquivos possuem a extensão **.properties** com o nome do diagrama e o código do idioma de tradução, por exemplo:

- **diagrama_en_US.properties**
- **diagrama_es.properties**
- **diagrama_pt_BR.properties**

Edite os arquivos e confira se a propriedade **process.category** está em branco como no exemplo da imagem abaixo. Se estiver você deve preenchê-la com a mesma categoria informada nas propriedades do diagrama.

Salve as alterações e exporte o projeto novamente.

Acesse as tela de Inicializar Solicitações para confirmar se o processo agora aparece na categoria desejada.

![](/download/attachments/268802433/image2016-11-8%208%3A41%3A23.png?version=1&modificationDate=1478605417000&api=v2)

**Figura 3 - Arquivos literais sem categoria**

****

****![](/download/attachments/268802433/image2016-11-8%208%3A39%3A36.png?version=1&modificationDate=1478605417000&api=v2)

**Figura 4 - Alteração da categoria no arquivo literal**

****

****

**Figura 5 - Exibição do processo na categoria correta**

# Observações

Para saber mais sobre a tradução de processos e os arquivos literais acesse a documentação [Tradução de Processos](/pages/viewpage.action?pageId=160105353).


<!-- anchors: BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Índice, BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Plataforma, BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Ocorrência, BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Causa, BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Solução, BPM081ComoexportarprocessodoEclipse/TDSdemaneiraquenãoapareçanalista"SemCategoria"?-Observações -->
