---
title: "DSAUPC-19669 DT Padrão TISS - Novembro/2023 - Vigência 01/12/2023"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=817646813"
scraped_at: "2026-03-09T05:34:15.737Z"
depth: 4
anchors: 5
child_links: 123
---

# DSAUPC-19669 DT Padrão TISS - Novembro/2023 - Vigência 01/12/2023

## 01. DADOS GERAIS

| Produto: | TOTVS Saúde Planos |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: |  |
| Módulo: | Planos - Linha Protheus - Procedimento |
| Função: | PLSA444 |
| País: | Brasil |
| Ticket: | 5792370 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DSAUPC-19669 |

## 02. SITUAÇÃO/REQUISITO

Em Novembro de 2023, a ANS liberou novas atualizações, com relação as terminologias das tabelas TISS, com início de vigência em 01/12/2023.

Além disso, se faz necessário ajustar os arquivos *.csv gerados, para que os nomes dos arquivos e suas extensões estejam inteiramente em minúsculo, devido as particularidades de servidores que utilizam como Sistema Operacional (SO) o Linux.

## 03. SOLUÇÃO

Realizado o processo de tratamento das tabelas, para o formato CSV, com os nomes e extensões inteiramente em minúsculo, funcionando tanto em servidores Windows® ou Linux.

O arquivo já está disponível no Arte, para ser atualizado via rotina de atualização automática de terminologias do Protheus.

Importante: No momento não é possível utilizar a rotina PLSA444 que baixa automaticamente as atualizações da TISS. Posteriormente iremos disponibilizar esta funcionalidade novamente. 
Hoje para atualizar sua versão TISS você deve pegar os arquivos CSV que recebeu disponibilizar em um diretório e utilizar a ferramenta PLSWIZARD. 

Veja um Exemplo:

![](/download/attachments/817646813/plswizard.gif?version=1&modificationDate=1712847502447&api=v2)

## 04. DEMAIS INFORMAÇÕES

          Não se aplica

## 05. ASSUNTOS RELACIONADOS

- Página da ANS, sobre a TISS: [https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss](https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss).


<!-- anchors: DSAUPC19669DTPadrãoTISSNovembro/2023Vigência01/12/2023-01.DADOSGERAIS, DSAUPC19669DTPadrãoTISSNovembro/2023Vigência01/12/2023-02.SITUAÇÃO/REQUISITO, DSAUPC19669DTPadrãoTISSNovembro/2023Vigência01/12/2023-03.SOLUÇÃO, DSAUPC19669DTPadrãoTISSNovembro/2023Vigência01/12/2023-04.DEMAISINFORMAÇÕES, DSAUPC19669DTPadrãoTISSNovembro/2023Vigência01/12/2023-05.ASSUNTOSRELACIONADOS -->
