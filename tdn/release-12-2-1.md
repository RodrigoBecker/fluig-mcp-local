---
title: "Release 12.2.1"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.1"
scraped_at: "2026-03-09T04:36:14.991Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.2.1

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.2.1**.

## Implementações

**Recurso: Produto PIMS em componentes TOTVS**

**Situação:** O produto PIMS não era considerado um produto TOTVS exigindo a utilização dos componentes JMS Receiver e JMS Sender o que exigia o uso de licenciamento.

**Solução:** Criou-se um novo produto nos componentes TOTVS Receiver e TOTVS Sender denominado PIMS possuindo as mesmas configurações dos componentes JMS Receiver e JMS Sender respectivamente. Com essa alteração, ao configurar uma integração com o PIMS deve-se utilizar os componentes TOTVS para que não seja necessária a utilização da licença.

**Recurso: Importar diagramas inativos**

**Situação:** O fluig ESB Plugin importava todos os diagramas das versões anteriores, não importando se estivesse ativo ou não. Isso impossibilita do usuário identificar quais os diagramas são de interesse do usuário para realizar o *deploy* ao fluig ESB Server.

**Solução:** Alterou-se o *wizard* de importação de diagramas via arquivo permitindo o usuário visualizar as informações de informações principais de cada diagrama contido no arquivo selecionado durante o processo. A visualização é uma tabela e as informações são: nome do diagrama (componente Receiver) e se está ativo (ou não). Permite ao usuário selecionar individualmente os diagramas desejados para importação, bem como a seleção de todos os diagramas contidos no arquivo. Por padrão, somente serão selecionados os diagramas ativos.

## Correções

**Recurso: fluig ESB Monitor – Informações do componente DOCIdentifier**

**Situação:** Ao configurar um componente *DOCIdentifier* com caracteres especiais com espaços (ex.: “teste – teste”) para os campos *From*/*To* o resultado no fluig  ESB Monitor é um valor nulo identificado como “NaN” nas respectivas colunas.

**Solução:** Foram efetuadas alterações para consistir a situação mencionada. Para o exemplo “teste – teste” configurado no campo *To* do componente *DOCIdentifier*, será visualizado “teste – teste”  na coluna *To* no fluig ESB Monitor.

**Recurso: Componente File Receiver**

**Situação:** Ao ler um arquivo através do componente *File Receiver* o mesmo não era removido. Isso permitia que o fluig  ESB enviasse para o processamento a mesma informação indefinidamente.

**Solução:** Foram realizadas alterações em bibliotecas para utilizar a versão 2.7.3 do Camel sanando a ocorrência.

**Recurso: Componente When**

**Situação:** Quando o componente *When* era indicado por mais de um componente *XMLValidator* ou *Identifier* no diagrama, o processamento da mensagem era interrompido no componente *When*.

**Solução:** Foram efetuadas alterações nos componentes *XMLValidator* e *Identifier* para consistir a existência de um componente *When* referenciado por outro componente, permitindo que o fluxo de mensagem tenha o destino correto.

**Recurso: Instalador fluig ESB**

**Situação:** Não existia a opção do idioma espanhol no processo de instalação.

**Solução:** Para o instalador do ESB, foi adicionada a opção de instalar com o idioma espanhol. Os guias para consulta do produto foram traduzidos e disponibilizados para acesso após instalar o fluig  ESB na pasta denominada “docs-ESB”.

**Recurso: Componente TOTVS Receiver – Produto Datasul – Tipo EAI**

**Situação:** Ao tentar capturar as mensagens enfileiradas na tabela *fila-eai* com registros travados (em *lock*) o ESB continuava a processar a requisição e exibia o seguinte erro: *Column 'TRANSACTIONID' cannot be null.* Em conseqüência ocorria o problema conhecido *CamelBinding* entrando em loop.

**Solução:** Realizou-se um tratamento para os registros da tabela *fila-eai* que estivessem travados no componente *TOTVSReceiver* sob o produto *Datasul* tipo *EAI*. Caso os registros estejam em *lock*, o mesmo é ignorado e uma mensagem de advertência é escrita nos *logs* do fluig  ESB. Isso evita problemas como o mencionado.

**Recurso: Validação da Licença**

**Situação:** Em redes lentas, ao realizar a validação da licença comunicando com o servidor de licenças (LS), era identificado nos *logs* a mensagem: *[LS Error -13] Não existe nenhuma licença em uso para este 'Owner' (IP Server+ Porta+ Número da thread).*

**Solução:** Foram efetuadas alterações por aumentar o tempo de espera da resposta do servidor de licenças (LS).

**Recurso: Componente Transformer (XSLT)**

**Situação:** Ao ocorrer um erro no componente Transformer devido a uma incoerência no arquivo XSLT o fluig  ESB estava tratando o erro, porém, a mensagem era remetido para o próximo componente, continuando o processamento.

**Solução:** Foram efetuadas alterações no componente Transformer para que em caso de erros na transformação XSLT, a mensagem não seja enviada para o próximo componente e o seu erro seja tratado para exibir no *log* e no fluig  ESB Monitor para consulta por parte do usuário.

**Recurso: Componente CustomSender – Tratamento de Erros**

**Situação:** Ao ocorrer um erro no código executado pelo componente CustomSender o fluig  ESB não estava tratando o erro e a mensagem era considerada processada.

**Solução:** Foram efetuadas alterações no componente CustomSender para que todos os erros seja tratados como os outros componentes tipo Sender do fluig  ESB.

**Recurso: Log incompleto**

**Situação:** Alguns erros oriundos do processamento interno das filas JMS do fluig  ESB não estavam sendo gravados nos arquivos de *logs*, impossibilitando uma verificação detalhada.

**Solução:** A configuração dos *logs* do ESB foi alterada para gravar os erros internos.

**Recurso: Componente TOTVS Receiver – Produto Datasul – Tipo EAI**

**Situação:** Ao capturar a mensagem da tabela *fila-eai*, o status do registro somente é atualizado após todo o processamento pelo fluig ESB, caracterizando que o processamento está em modo síncrono.

**Solução:** Alterou-se o componente para ler o registro da *fila-eai* e após enviar para o próximo componente em modo assíncrono executar a atualização do registro. Assim, após ler a mensagem da *fila-eai* o fluig ESB assume a responsabilidade de enviar para o sistema destino.

**Recurso: Múltiplos diagramas com Mail Receiver**

**Situação:** Quando ocorria mais de um componente *Mail Receiver* em diagramas distintos, o fluig ESB exibia o seguinte erro: *Failed to start route route_MailReceiver-aux because of Multiple consumers for the same endpoint is not allowed.*

**Solução:** A situação foi corrigida por nomear as rotas internas de maneira distinta, de modo que seja único cada um dos identificadores do *MailReceiver.*


<!-- anchors: Release12.2.1-Implementações, Release12.2.1-Correções -->
