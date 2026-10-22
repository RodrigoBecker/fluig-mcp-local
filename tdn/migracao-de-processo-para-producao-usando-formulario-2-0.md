---
title: "Migração de processo para produção usando formulário 2.0"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1019341119"
scraped_at: "2026-03-09T03:03:18.138Z"
depth: 1
anchors: 7
child_links: 37
---

# Migração de processo para produção usando formulário 2.0

# Objetivo

---

Este documento detalha os passos para migrar um processo, incluindo seu formulário, do ambiente de desenvolvimento para o ambiente de produção.

Dica

Os códigos utilizados nesta documentação são para auxiliar no entendimento. Fique a vontade para utilizar códigos que fazem sentido com o dia a dia da sua empresa.

# Preparação do processo e formulário no desenvolvimento

---

**Processo criado**

- Um processo de exemplo foi criado: **Migrando para Produção** (código: **migrando-para-producao**).

![](/download/attachments/1019341119/image-2025-12-2_15-58-20.png?version=1&modificationDate=1764703418243&api=v2)

**Formulário criado**

- O formulário associado foi criado: **Formulário de Migrando para Produção** (código: 3).

![](/download/attachments/1019341119/image-2025-12-2_15-59-27.png?version=1&modificationDate=1764703418187&api=v2)

# Exportação do processo em desenvolvimento

---

**Exportar processo do ambiente de desenvolvimento**

- Obtenha o conteúdo (XML) do processo de desenvolvimento com o **ID do processo seja o mesmo** (migrando-para-producao) utilizando a API: **GET /process-management/swagger-ui/#/Processes/exportProcess**

![](/download/attachments/1019341119/image-2025-12-2_16-0-49.png?version=1&modificationDate=1764703418123&api=v2)

**Exemplo de retorno**

- A execução da API retornou o seguinte corpo, que contém o body (o XML do do processo).

![](/download/attachments/1019341119/image-2025-12-2_16-1-40.png?version=1&modificationDate=1764703418047&api=v2)

Importante

Recomendamos abrir a URL de exportação direto no navegador para então copiar o conteúdo ou fazer download, como no exemplo abaixo:

![](/download/attachments/1019341119/image-2025-12-2_16-3-4.png?version=1&modificationDate=1764703417967&api=v2)

**Importar o processo para produção**

- Importe o novo processo para o ambiente de produção usando a API abaixo e populando os campos body, processId e release com os dados obtidos na etapa anterior. O body deve ser o XML copiado do retorno da API de exportação. [POST /process-management/swagger-ui/#/Processes/importNewProcess](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/importNewProcess)

Importante

É preciso alterar o campo **<formIdV2>** com o valor **0** para desvincular o formulário, ficando desta forma: **<formIdV2>0</formIdV2>**

****

**Resultado da criação**

- A execução bem-sucedida da API deve retorno o novo processo criado (no exemplo, o processo foi criado com o código:**migrando-para-producao**).

![](/download/attachments/1019341119/image-2025-12-2_16-6-48.png?version=1&modificationDate=1764703417830&api=v2)

# Exportação do formulário em desenvolvimento

---

### Obtenção do conteúdo do formulário de desenvolvimento

**API para conteúdo do formulário**

- Obtenha o conteúdo (JSON) do formulário de desenvolvimento (código 3) utilizando a API: **GET /form-management/Forms/getFormByCode**

****

**Exemplo de retorno**

- A execução da API retornou o seguinte corpo, que contém o content (o JSON do layout do formulário), como no exemplo abaixo:

****

# Criação do formulário em produção

---

**API para criação**

- Crie o novo formulário no ambiente de produção usando a API indicada no link e populando os campos **name**, **content**, **category** e **processId** com os dados obtidos no retorno da API de consulta. **POST /form-management/Forms/createFormInDraftWithInitialVersion**

**Exemplo do corpo da requisição**

****

**Resultado da criação**

- A execução bem-sucedida da API deve retornar o novo ID do formulário criado (no exemplo, o formulário foi criado com o código **4**).

****

# Finalização e publicação do processo e formulário em produção

---

**Edite o novo processo no ambiente de produção na web e publique**

- Com o Formulário (**código****4**) e o Processo (**migrando-para-producao**) criados no ambiente de Produção, basta que você **edite o processo**e, em seguida, **publique-o**.

![](/download/attachments/1019341119/Finaliza%C3%A7%C3%A3o%20da%20migra%C3%A7%C3%A3o%20processo%20e%20formulario.gif?version=1&modificationDate=1764703751963&api=v2)


<!-- anchors: Migraçãodeprocessoparaproduçãousandoformulário2.0-Objetivo, Migraçãodeprocessoparaproduçãousandoformulário2.0-Preparaçãodoprocessoeformulárionodesenvolvimento, Migraçãodeprocessoparaproduçãousandoformulário2.0-Exportaçãodoprocessoemdesenvolvimento, Migraçãodeprocessoparaproduçãousandoformulário2.0-Exportaçãodoformulárioemdesenvolvimento, Migraçãodeprocessoparaproduçãousandoformulário2.0-Obtençãodoconteúdodoformuláriodedesenvolvimento, Migraçãodeprocessoparaproduçãousandoformulário2.0-Criaçãodoformulárioemprodução, Migraçãodeprocessoparaproduçãousandoformulário2.0-Finalizaçãoepublicaçãodoprocessoeformulárioemprodução -->
