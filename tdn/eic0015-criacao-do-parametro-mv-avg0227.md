---
title: "EIC0015_Criação do Parâmetro MV_AVG0227"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=309406066"
scraped_at: "2026-03-09T05:27:36.317Z"
depth: 4
anchors: 0
child_links: 192
---

# EIC0015_Criação do Parâmetro MV_AVG0227

Criação do Parâmetro MV_AVG0227

| Linha de Produto: | Protheus |
| --- | --- |
| Segmento: | Manufatura |
| Módulo: | Easy Import Control - SIGAEIC |
| Versões | P11 e P12 |
| Ocorrência: | Implementado o parâmetro MV_AVG0227 que é responsável por Habilitar/Desabilitar o calculo do frete pelo valor definido no campo %Aplicado (WI_PERCAPL) na rotina de Tabela Pré-Calculo |
| Observações: | Aplicar atualização do(s) programa(s) AVGERAL.PRW, AVOBJECT.PRW, AVUPDATE01.PRW, UITHOX33.PRW e EICTP251.PRW.Para que as alterações sejam efetuadas, é necessário executar a função U_ UITHOX33.1. Em Microsiga Protheus Smart Client, digite U_UITHOX33 no campo Programa Inicial.Para a correta atualização do dicionário de dados, certifique-se que a data do compatibilizador seja igual ou superior a 15/07/2013.2. Clique em Confirmar para continuar.3. Após a confirmação é exibida uma tela para a seleção da empresa em que o dicionário de dados será modificado.4. Ao confirmar é exibida uma mensagem de advertência sobre o backup e a necessidade de sua execução em modo exclusivo.5. Clique em Processar para iniciar o processamento. O primeiro passo da execução é a preparação dos arquivos. É apresentada uma mensagem explicativa na tela.6. Em seguida, é exibida a janela Atualização concluída com o histórico (log) de todas as atualizações processadas. Nesse log de atualização são apresentados somente os campos atualizados pelo programa. O compatibilizador cria os campos que ainda não existem no dicionário de dados.7. Clique em Gravar para salvar o histórico (log) apresentado.8. Clique em Confirmar para encerrar o processamento.9. Criação de Parâmetros no arquivo SX6 – Parâmetros:PROCEDIMENTOS PARA UTILIZAÇÃOPre-Requsito:  Habilitar o parâmetro MV_AVG0227 = .T. Possuir um produto com o campo Peso Liquido (B1_PESO) preenchido. Possuir uma Solicitação de Importação. Possuir um Purchase Order. Sequencia 001:Sequencia 001:1. No Easy Import Control (SIGAEIC), acesse Atualizações/Financeiro/Tabela Pre-Calculo (EICTC210).2.Clique em Incluir.3. Preencha os dados menos o campo de VIA (WF_VIA).4. No gride inferior utilizaremos as despesas 1.01 (FOB) e 1.02 (FRETE) e apague as demais despesas.5. Na linha da despesa de 1.02 - FRETE preencha o campo %Aplicado com o valor 10 (10%) e em seguida clique em Confirmar para gravar.6. Verifique que o registro foi salvo com sucesso.Sequencia 002:1. No Easy Import Control (SIGAEIC), acesse Atualizações/Financeiro/Pre-Calculo (EICTP25A).2. Preencha o P.O desejado no pergunte e clique em OK para prosseguir.3. Na tela de Montagem do Pre-Calculo preencha os dados desejados e clique em Confirmar.4. Na rotina Pre-Calculo marque o item desejado pela caixa de seleção (checkbox) e clique em Ações Relacionadas/Relatório por Item.5. Selecione as opções desejadas e configure impressora no caso na tela de impressão clicamos em Preview.6. Na tela do relatório verifique que o valor do frete esta com 10% do valor CIF.7. Clique em Sair e em seguida Confirmar para fechar. |
