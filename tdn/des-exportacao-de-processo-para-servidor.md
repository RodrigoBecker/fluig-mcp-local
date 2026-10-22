---
title: "DES - Exportação de processo para servidor"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=187534151"
scraped_at: "2026-03-09T04:45:08.874Z"
depth: 3
anchors: 5
child_links: 57
---

# DES - Exportação de processo para servidor

# Índice

# Plataforma

**Produto:  **Fluig Studio

# Ocorrência

Ao tentar exportar um processo para um servidor da plataforma aparece a mensagem 'A definição de formulário pertence a um servidor diferente do servidor atual' e não é permitida a exportação.

![](/download/attachments/187534151/06-selecionar_servidor.jpg?version=1&modificationDate=1431002977000&api=v2)

# Causa

Isto ocorre quando o processo foi desenvolvido ou importado de outro servidor e não foram alteradas as propriedades do processo antes de efetuar a exportação.

# Solução

Abrir o diagrama do processo na perspectiva Fluig do TDS, clicar sobre a parte branca do diagrama, e acessar a aba 'Properties' > 'Geral'. No campo 'Servidor' selecione o servidor para o qual será exportado o processo.

![](/download/attachments/187534151/Capturar.JPG?version=2&modificationDate=1431002977000&api=v2)

Para exportar um processo com formulário, na opção 'Formulário', campo 'Definição de formulário', selecione 'Local' e escolha o formulário da pasta local que foi desenvolvido para o processo.

![](/download/attachments/187534151/Capturar2.JPG?version=1&modificationDate=1431002977000&api=v2)

Salve o diagrama e prossiga com a exportação do processo conforme a documentação disponível em [Importação e Exportação de projeto no Studio](/pages/viewpage.action?pageId=128681226).


<!-- anchors: DESExportaçãodeprocessoparaservidor-Índice, DESExportaçãodeprocessoparaservidor-Plataforma, DESExportaçãodeprocessoparaservidor-Ocorrência, DESExportaçãodeprocessoparaservidor-Causa, DESExportaçãodeprocessoparaservidor-Solução -->
