---
title: "BPM 045 - Como personalizar um campo Identificador de uma solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240298013"
scraped_at: "2026-03-09T03:54:28.662Z"
depth: 2
anchors: 8
child_links: 131
---

# BPM 045 - Como personalizar um campo Identificador de uma solicitação?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** todas

# Ocorrência

Desejamos colocar um campo do formulário visível na lista de solicitações para facilitar a identificação da solicitação.

![](/download/attachments/240298013/www.GIFCreator.me_nIAkmB.gif?version=2&modificationDate=1553532061680&api=v2)

**Campo Identificador**

# Solução

É possível personalizar a informação que aparecerá na coluna Identificador da solicitação de três formas:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acesse o menu **Processos → Configurar Processos**;

 - Selecione o processo que deseja editar, clique em **Editar**;

 - Após aberto o fluxo clique em **Formulário** no canto esquerdo superior;

 - Clique sobre **Configurações do formulário** para expandir;

 - No campo **Descrição Principal dos Registros** selecione o campo do formulário que será apresentado na coluna Identificador;

 - Salve as alterações;

 - Para alterar a descrição das solicitações já abertas, veja o **Passo 2**.

![](/download/attachments/240298013/Capturar.PNG?version=1&modificationDate=1466509863000&api=v2)

**Figura 1: Campo Descrição Principal dos Registros**

 - Localize o formulário do processo na Navegação de Documentos (menu Documentos) do fluig e acesse as **Propriedades** deste formulário;

 - Na aba **Descrição Principal dos Registros de Formulário** desmarque a opção **Utilizar descrição padrão** para que seja possível selecionar o campo do formulário que será o campo descritor no bloco abaixo;

 - Marque a opção **Alterar descrição em TODOS os registros de formulário ativos** para que todas as solicitações já abertas assumam este mesmo campo como Identificador;

 - Confirme as alterações;

![](/download/attachments/240298013/Capturar1.PNG?version=1&modificationDate=1466509865000&api=v2)

 - No fluig Studio, durante a exportação do formulário do processo, preencha no **Campo Descritor** o campo do formulário que será utilizado como Identificador;

 - Para alterar o campo Identificador de todas as solicitações abertas verifique o **Passo 2**.

![](/download/attachments/240298013/Capturar5.PNG?version=1&modificationDate=1466509866000&api=v2)****


<!-- anchors: BPM045ComopersonalizarumcampoIdentificadordeumasolicitação?-Índice, BPM045ComopersonalizarumcampoIdentificadordeumasolicitação?-Plataforma, BPM045ComopersonalizarumcampoIdentificadordeumasolicitação?-Ocorrência, BPM045ComopersonalizarumcampoIdentificadordeumasolicitação?-Solução, samples, samples-1, samples-2, samples-3 -->
