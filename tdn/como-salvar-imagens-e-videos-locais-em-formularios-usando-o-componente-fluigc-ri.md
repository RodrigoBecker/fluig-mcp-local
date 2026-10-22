---
title: "Como salvar Imagens e Vídeos locais em formulários usando o componente FLUIGC.richeditor"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1005894967"
scraped_at: "2026-03-09T03:59:46.960Z"
depth: 2
anchors: 17
child_links: 61
---

# Como salvar Imagens e Vídeos locais em formulários usando o componente FLUIGC.richeditor

****

## Introdução

Este documento tem como objetivo descrever o funcionamento do processo de upload e armazenamento de arquivos no **ECM** a partir de arquivos locais inseridos no FLUIGC.richeditor. O procedimento ocorre de forma automática, atualizando o conteúdo do editor com os novos endereços dos arquivos publicados.

Atenção!

Essa documentação é compatível somente com a release 2.0.0 do Fluig ou superior.

## Exemplos completos para download

- [Formulário com mídias locais](/download/attachments/1005894967/form-texto-rico-com-midia-local.html?version=1&modificationDate=1760636279923&api=v2)
- [Formulário sem as ações de mídias locais](/download/attachments/1005894967/form-texto-rico-sem-midia-local.html?version=1&modificationDate=1760636280083&api=v2)

## Estrutura básica

O fluxo é composto por três partes principais:

- **Callbacks do editor** (localImageCallback e localVideoCallback).
- **Salvamento e substituição** (saveFilesECM).
- **Upload no ECM** (uploadFileECM).

### Callbacks do Editor

[?](#)

| `const settings = {````// outras configurações````localImageCallback: async``function` `(e, images, arrayFile) {````const newHTML = await saveFilesECM(images,``'img'``);````editor?.setData(newHTML);````},````localVideoCallback: async``function` `(e, videos, arrayFile) {````const newHTML = await saveFilesECM(videos,``'source'``);````editor?.setData(newHTML);````}``};` `const editor = FLUIGC.richeditor(``'help'``, settings);` |
| --- |

#### localImageCallback

**Objetivo:** Processar imagens inseridas no editor.

1. Recebe a lista de imagens (images).
2. Chama saveFilesECM com o seletor 'img'.
3. Atualiza o conteúdo do editor.

#### localVideoCallback

**Objetivo:** Processar vídeos inseridos no editor.

1. Recebe a lista de imagens (videos).
2. Chama saveFilesECM com o seletor 'source'.
3. Atualiza o conteúdo do editor.

### Salvamento e substituição

#### saveFilesECM

[?](#)

| `async``function` `saveFilesECM(files, type) {````let currentHTML = editor?.getData() ||``''``;````const parser =``new` `DOMParser();````const doc = parser.parseFromString(currentHTML,``'text/html'``);````const parentId =``'37'``;``// Código da pasta do ECM` ```for` `(const file of files) {````try` `{````const fileUrl = file.url;````const fileName = file.alt;````const data = await uploadFileECM(fileName, parentId);````const newUrl = `/content-management/api/v2/documents/${data.documentId}/stream`;````const filesInDoc = doc.querySelectorAll(type);` ```filesInDoc.forEach(target => {````const idx = target.src.indexOf(``'/webdesk'``);````const normalizedFileUrl = encodeURI(fileUrl);` ```if` `(idx >= 0 && target.src.substring(idx) === normalizedFileUrl) {````target.src = newUrl;````}````});` ```}``catch` `(error) {````console.error(``'Erro ao processar arquivo:'``, error);````}````}` ```return` `doc.body.innerHTML;``}` |
| --- |

**Responsabilidade:**Processar cada arquivo, publicar no ECM e atualizar a URL no HTML.

**Passos:**

1. Obter o HTML do editor.
2. Converter em objeto manipulável via DOMParser.
3. Definir pasta de destino (parentId).
4. Para cada arquivo, publicar no ECM e substituir a URL no HTML.
5. Retornar HTML atualizado.

### Upload no ECM

#### uploadFileECM

[?](#)

| `function` `uploadFileECM(fileName, parentId) {````const data = {````tenantId: parseInt(WCMAPI.getTenantId(), 10),````documentDescription: fileName,````phisicalFile: fileName,````parentDocumentId: parentId,````downloadEnabled:``true``,````approved:``true``,````draft:``false``,````inheritSecurity:``true````};` ```return` `new` `Promise((resolve, reject) => {````$.ajax({````type:``'POST'``,````dataType:``'json'``,````url:``'/content-management/api/v2/documents/publish'``,````contentType:``'application/json'``,````data: JSON.stringify(data),````success: data => resolve(data),````error: (xhr, status, err) => reject(err)````});````});``}` |
| --- |

**Responsabilidade:**Publicar o arquivo no ECM e retornar o documentId.

**Detalhes:**

- Recebe o nome do arquivo e a pasta de destino.
- Monta objeto com dados do documento.
- Envia requisição para /content-management/api/v2/documents/publish.
- Retorna os dados do documento publicado.

## Observação Importante

Os arquivos são enviados e salvos no ECM **imediatamente** após sua inserção no editor, durante o processo de upload. Este envio **não depende** do salvamento do formulário. Assim, mesmo que o formulário não seja salvo, o arquivo permanecerá publicado no ECM.

## Fluxo Geral

1. Usuário insere imagem/vídeo no editor.
2. Callback (localImageCallback ou localVideoCallback) é acionado.
3. saveFilesECM processa o arquivo:

- Publica no ECM (uploadFileECM).
- Atualiza a URL no HTML.

4. Editor é atualizado com o novo conteúdo.

## Esconder ações de imagens e vídeos locais

Caso queira esconder as ações de imagens e vídeos locais, pode-se usar a propriedade **hideLocalImageAndVideoButton: true** nas configurações do componente.

Exemplo:

[?](#)

| `const settings = {````// outras configurações````hideLocalImageAndVideoButton:``true``};` `const editor = FLUIGC.richeditor(``'help'``, settings);` |
| --- |


<!-- anchors: ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-Introdução, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-Exemploscompletosparadownload, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-Estruturabásica, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-CallbacksdoEditor, highlighter_729043, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-localImageCallback, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-localVideoCallback, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-Salvamentoesubstituição, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-saveFilesECM, highlighter_47798, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-UploadnoECM, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-uploadFileECM, highlighter_498657, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-ObservaçãoImportante, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-FluxoGeral, ComosalvarImagenseVídeoslocaisemformuláriosusandoocomponenteFLUIGC.richeditor-Esconderaçõesdeimagensevídeoslocais, highlighter_978663 -->
