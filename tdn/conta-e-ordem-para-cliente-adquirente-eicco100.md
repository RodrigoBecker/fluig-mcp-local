---
title: "Conta e Ordem para Cliente Adquirente (EICCO100)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=397378615"
scraped_at: "2026-03-09T05:27:57.490Z"
depth: 4
anchors: 0
child_links: 193
---

# Conta e Ordem para Cliente Adquirente (EICCO100)

Implementada melhoria que consiste na criação da rotina Nota de Transferência de Posse (EICCO100) com o objetivo de atender importações por conta e ordem do tipo adquirente. Tal rotina será utilizada para receber os valores que serão transferidos para o adquirente referente as transações realizadas pelo Importador durante o processo de importação.

Procedimentos para Utilização

Pré-Requisitos:

- É necessário habilitar os parâmetros com os seguintes conteúdos:

[MV_PCOIMPO](/pages/viewpage.action?pageId=306858377)= F

[MV_PCOFOB](https://tdn.totvs.com/pages/viewpage.action?pageId=306858377)= F

[MV_EIC_PCO](https://tdn.totvs.com/pages/viewpage.action?pageId=306858377) = T

[MV_EASY](https://tdn.totvs.com/pages/viewpage.action?pageId=306858377) = S

**Sequência 001:**

- Configuração do ambiente Conta e Ordem para cliente Importador através de templates.

1. No **Easy Import Control (SIGAEIC)** acesse **Atualizações/ Miscelânea/ Templates (EASYTEMPLATE).**
2. É apresentada a janela para início da configuração do ambiente.
3. Clique em **Avançar**.
4. Selecione o template a ser ativado. Clique em **Avançar**.
5. Será verificado se o ambiente esta configurado, ou seja, se o *update* do template, neste caso, Conta e Ordem para cliente Adquirente, foi executado corretamente. Caso a verificação seja efetuada com sucesso, clique em **Avançar**.
6. São apresentados os parâmetros pertinentes ao template para a configuração. Se necessário, informe corretamente os parâmetros e clique em **Avançar**.
7. Configure o ambiente conforme o template. Clique em **Avançar**.
8. Clique em **Finalizar** para ser finalizada a configuração.

** **

**Pré-Requisitos:**

- Possuir um Solicitação de Importação cadastrada.

**Seqüência 002:**

1. No Easy Import Control (SIGAEIC) acesse Atualizações/ Purchase Order/ Manutenção (EICPO400).
2. Clique em Incluir.
3. Preencha os campos obrigatórios. Na pasta Cadastrais informe a opção SIM no campo Import. C.O.? (W2_IMPCO) e clique em Confirmar.
4. Na tela de Seleção de SI, informe a unidade requisitante e a SI cadastrada anteriormente. Clique em Confirmar.
5. Na tela de Seleção de Itens, selecione o item e clique em Confirmar. Clique em Confirmar novamente.
6. É apresentada a mensagem Confirma a gravação?. Clique em SIM.
7. É apresentado a mensagem informando que foi gerado o pedido. Clique em OK.

** **

** **

**Sequência 003:**

1. No Compras (SIGACOM) acesse Atualizações/ Pedidos/ Pedido de Compras (MATA121).
2. Visualize o pedido gerado.

Sequencia 004:

1. No Easy Import Control (SIGAEIC) acesse Atualizações/ Desembaraço/ Manutenção (EICDI502).
2. Clique em Incluir, preencha os campos obrigatórios.
3. Na pasta Cadastrais, o campo Import. C.O.? (W6_IMPCO) esta preenchido.
4. Na pasta Outros, preencha os campos Tipo Consig.(W6_PRO_IMP) e CNPJ Consig.(W6_CGC_OUT).
5. Clique em Ações Relacionadas e clique em Itens. Dê um duplo clique no item e marque o mesmo.
6. Clique em Ações Relacionadas e clique em Invoice e clique em Incluir. Preencha os campos obrigatórios e vincule o item. Clique em Confirmar.
7. Clique em Ações Relacionadas e em Adições.
8. Clique em Ações Relacionadas novamente e clique em Gera. Confirme.
9. Clique em Confirmar na tela de Conferência Final é apresentada a mensagem: Confirma a Gravação?. Clique em SIM.

** **

**Seqüência 005:**

1. No módulo **Easy Import Control** **(SIGAEIC)**, acesse **Atualizações / Desembaraço / NF Transferência (EICCO100)**.
2. Selecione o processo em análise e em seguida clique no botão **Valores NFT**.
3. Serão exibidos os valores correspondentes às despesas do processo e os itens que compõe o Embarque/Desembaraço. Clique em **Des/Marca Todas Despesas** e em seguida **Des/Marca Todos Itens**.
4. Clique em **Digitação No. NFT Itens** para informar o número da Nota Fiscal correspondente aos itens exibidos. Confirme. O número da Nota Fiscal e Série serão inseridos na capa do processo.
5. Clique em **Gerar NFT**.
6. Clique em **Sim** na seguinte mensagem exibida: **Confirma Gravação dos Valores e Geração da NFT?.**
7. É apresentada a mensagem **Geração da Nota Fiscal Concluida.**Clique em **OK**para gravar a geração da nota.

Sequência 006:

1. No módulo **Easy Import Control** **(SIGAEIC)**, acesse **Atualizações / Desembaraço / NF Transferência (EICCO100)**.
2. Posicione no processo desejado e clique na opção **Ações Relacionadas** e clique em **Impressão val.**
3. Clique na opção **Preview**.
4. Visualize a impressão do relatório.

Sequência 007:

1. No módulo Compras (SIGACOM), acesse Atualizações/ Movimentos/ Documento Entrada (MATA103).
2. Posicione no processo desejado e clique na opção Classificar. Observe que os campos Número e Série estão preenchidos.
3. Preencha os campos Tipo Entrada e Cod. Fiscal.
4. Clique em Confirmar para salvar.
