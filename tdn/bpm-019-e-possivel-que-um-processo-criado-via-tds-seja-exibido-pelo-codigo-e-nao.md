---
title: "BPM 019 - É possível que um processo criado via TDS seja exibido pelo código e não pela descrição?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223929597"
scraped_at: "2026-03-09T03:34:30.455Z"
depth: 2
anchors: 9
child_links: 132
---

# BPM 019 - É possível que um processo criado via TDS seja exibido pelo código e não pela descrição?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Tenho um processo criado pelo TDS ou Eclipse. Contudo ao efetuar a exportação para o servidor fluig, o processo é exibido pelo seu código e não pela sua descrição.

# Causa

Este comportamento ocorre devido ao uso de literais pelo processo desenvolvido no TDS.

Quando a Descrição, Categoria e Instruções do processo são alterados no fluig pela web, a alteração não é realizada de forma automática nos arquivos literais. Por isso as alterações não são aplicadas.

# Solução

A modificação da descrição, categoria e instruções de um processo que contém literais deverá ser realizada de forma manual, através dos arquivos de literais armazenados na pasta "*literals*" do projeto no TDS.

Para realizar este procedimento, faça conforme descrito abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Importar o processo do servidor do fluig para o TDS.

![](/download/attachments/223929597/1.jpg?version=1&modificationDate=1453378486000&api=v2)

**Figura 1 - Iniciar 'Importar Processo' do fluig**

****

****

**Figura 2 - Escolher servidor**

****

****

**Figura 3 - Selecionar o processo**

****

 - Alterar o código do arquivo pt_BR (caso utilizar nas três línguas, alterar nos três arquivos) e Salvar. Poderão ser alteradas as três informações dependendo da necessidade. Lembrando que após a criação das literais, a edição destes três campos deverão ser alterados diretamente nos arquivos de literias conforme descrito na documentação [Tradução de Processos](https://tdn.totvs.com/x/iQOLCQ).

![](/download/attachments/223929597/4.jpg?version=1&modificationDate=1453378489000&api=v2)

**Figura 4 - Abrir e alterar as informações do arquivo na língua pt_BR**

 - Exportar o processo e os arquivos literais novamente para o fluig

![](/download/attachments/223929597/5.jpg?version=1&modificationDate=1453378490000&api=v2)

**Figura 5 - Selecionar e exportar para o fluig**

****

****

**Figura 6 - Selecionar o servidor e Liberar Versão**


<!-- anchors: BPM019ÉpossívelqueumprocessocriadoviaTDSsejaexibidopelocódigoenãopeladescrição?-Índice, BPM019ÉpossívelqueumprocessocriadoviaTDSsejaexibidopelocódigoenãopeladescrição?-Plataforma, BPM019ÉpossívelqueumprocessocriadoviaTDSsejaexibidopelocódigoenãopeladescrição?-Ocorrência, BPM019ÉpossívelqueumprocessocriadoviaTDSsejaexibidopelocódigoenãopeladescrição?-Causa, BPM019ÉpossívelqueumprocessocriadoviaTDSsejaexibidopelocódigoenãopeladescrição?-Solução, samples, samples-1, samples-2, samples-3 -->
