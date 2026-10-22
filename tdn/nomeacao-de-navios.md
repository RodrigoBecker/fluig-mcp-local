---
title: "Nomeação de Navios"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240303197"
scraped_at: "2026-03-09T05:28:10.667Z"
depth: 4
anchors: 2
child_links: 192
---

# Nomeação de Navios

# Nomeação de Navios

| Produto: | SIGAEIC / SIGAEEC |
| --- | --- |
| Versões: | P11 |
| Ocorrência: | Cadastro de Navios |
| Passo a passo: | O cadastro de navios possibilita o usuário cadastrar os navios que são usados no processo de exportação/importação, informar a próxima viagem, as suas rotas (Origem/Destino) e os agentes que trabalham com o navio. Este cadastro é usado no fechamento de praça do embarque.Pré-Requisitos:Possuir um Agente cadastrado.
#### Exemplo - Como cadastrar um Navio:
No Easy Import Control (SIGAEIC), acesse  Atualizações\ Tabelas\ Nomeação de Navios.Clique na opção Incluir.Na aba Cadastrais, preencha o código e número da viagem, além de outras informações do navio.Na aba Transito, preencha o porto de origem e destino, além de outras informações de datas.Em Ações Relacionadas, clique em Incluir.Selecione o porto de destino, e preencha as informações de destinos para a viagem.Será apresentada a mensagem: Deseja recalcular o transti time da(s) rota(s) de destino?.Caso clique em Não o sistema manterá o preenchido pelo usuário.Caso clique em Sim o sistema executará os seguintes cálculos:Caso nao tenha data de embarque (EE6_EMBEFE) preenchida na capa do cadastro, os cálculos de datas do destino e do transit time serão feitos com base no campo ETS origem (EE6_ETSORI).Caso a data de embarque (EE6_EMBEFE) esteja preenchida na capa do cadastro, os cálculos de datas do destino e do transit time serão feitos com base no próprio campo Embarque.É possível incluir vários destinos para a viagem. Após incluir os destinos desejados clique em Confirmar. |
| Observações: | No SIGAEEC é possível acessar o cadastro através do menu Atualizações\ Cadastros\ Disp. de Navios.O SIGAEIC e SIGAEEC compartilham do mesmo cadastro de navios, desta forma, os cadastros feitos no SIGAEIC ficam disponiveis no SIGAEEC e vice versa.O valor colocado no Transit Time é somado ao E.T.A destino.O valor colocado no Transit Time A/B é somado ao E.T.B e E.T.S, caso não tenha esse valor preenchido será mantida a mesma data do E.T.A destino.Ao preencher o T.T. ou o T.T. A/B os campos de data são calculados automaticamente e vice versa. |


<!-- anchors: NomeaçãodeNavios-NomeaçãodeNavios, NomeaçãodeNavios-Exemplo-ComocadastrarumNavio: -->
