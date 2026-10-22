---
title: "EIC0020_Conta e Ordem quando Cliente é o Importador"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=538506424"
scraped_at: "2026-03-09T05:27:53.406Z"
depth: 4
anchors: 2
child_links: 192
---

# EIC0020_Conta e Ordem quando Cliente é o Importador

# Conta e Ordem quando o Cliente é o Importador

| Produto: | Protheus |
| --- | --- |
| Versões: | P12 |
| Ocorrência: | Esse documento consiste no tratamento dos processos de conta e ordem do tipo importador com o objetivo de apresentar os valores que serão usados para geração da Nota de Transferência de Posse (EICCO100), onde formaliza a transferência da mercadoria do Importador para o Adquirente. |
| Ambiente: | Easy Import Control (SIGAEIC) |
| Passo a passo: | ### Procedimentos para Utilização
Pré-Requisitos:O parâmetro MV_ PCOIMPO deve ser preenchido com: T;O parâmetro MV_PCOFOB deve ser preenchido com: F;O parâmetro MV_EIC_PCO deve ser preenchido com: T;O parâmetro MV_EASY deve ser desabilitado, portanto preenchido com: S;O parâmetro MV_TEM_DI deve ser desabilitado, portanto preenchido com: F;Será utilizado algumas informações do cadastro de produto como Descrição, Unidade de Medida, Tipo de Saída e Armazem Padrão.Na fase de PO preencher o campo Import C.O. (W6_IMPCO) igual a SIM;Possuir um processo na fase de desembaraço com adições e os campos Tipo Consig.(W6_PRO_IMP) e CNPJ Consig.(W6_CGC_OUT) da aba Outros devem estar preenchidos.Sequência 001:1.    No módulo Easy Import Control (SIGAEIC), acesse Atualizações / Desembaraço / Pré-Nota/Geracao PV (EICCO100). Selecione o processo no qual os valores não foram gravados e clique em Pré-Nota.2.    Serão exibidos os valores correspondentes às despesas e os itens que compõe o processo. Clique na opção Des/Marca Todas Despesas e Des/Marca Todos Itens, estes irão marcar respectivamente todas as despesas e itens do processo.3.    Clique na opção Digitação No. NFT Itens para informar o número da nota fiscal dos itens. Clique em Confirmar.4.    O número da nota fiscal e série serão inseridos nos itens do processo.5.    Clique em Des / Marca Todos Itens. Selecione Relat. de Status dos Itens.6.    Insira os dados solicitados e clique em Confirmar.7.    Selecione o Tipo Impressão para Em Disco, e selecione o Ambiente para Servidor. Pressione OK ao fim do processo.8.    Será apresentado o relatório. Caso deseje imprimir o relatório clique em Imprimir, caso contrário, clique em Sair9.    Em seguida pressione Fechar para retornar ao formulário principal.10.  Clique em Gravar Valores.11.  O sistema exibirá a confirmação de gravação. Clique em Sim.12.  Clique em Sim novamente.13.  O status do registro passa a ser amarelo, isto é, os valores estão gravados. Sequência 002:1.    No módulo Easy Import Control (SIGAEIC), acesse Atualizações / Desembaraço / Pré-Nota/Geracao PV (EICCO100). Selecione o processo no qual os valores foram gravados e clique em Ações Relacionadas e em seguida clique Impressao val. .2.    Clique em Preview.3.    Será apresentado o relatório. Para imprimir, clique na opção Imprimir. Caso contrário, clique em Sair |
| Observações: |  |


<!-- anchors: EIC0020_ContaeOrdemquandoClienteéoImportador-ContaeOrdemquandooClienteéoImportador, EIC0020_ContaeOrdemquandoClienteéoImportador-ProcedimentosparaUtilização -->
