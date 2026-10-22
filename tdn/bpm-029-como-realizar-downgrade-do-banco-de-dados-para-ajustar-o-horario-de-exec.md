---
title: "BPM 029 - Como realizar downgrade do banco de dados para ajustar o horário de execução de uma atividade que está incorreto?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223919781"
scraped_at: "2026-03-09T03:53:19.020Z"
depth: 2
anchors: 12
child_links: 133
---

# BPM 029 - Como realizar downgrade do banco de dados para ajustar o horário de execução de uma atividade que está incorreto?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

As solicitações abertas possuem - na aba Detalhes - o histórico de movimentação e por onde a solicitação passou anteriormente, bem com o usuário que executou a atividade.

Porém o tempo que é exibido sobre quando foi executada a atividade está incorreto e esta é uma informação importante que os usuários necessitam. 

****

**Exemplo de Horário Incorreto**

# Causa

Problema no *driver *ojdbc (Oracle JDBC) superior à versão 6.

# Solução

Realizar o *downgrade*para a versão 6 do *driver*de conexão com o banco de dados Oracle: ojdbc6.jar

# Procedimentos

A seguir, estão descritos os procedimentos para realizar o *downgrade*:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

Primeiramente, pare os serviços do fluig;

Aconselhamos que seja efetuado um *backup* dos seguintes itens:

 - Base de dados do fluig;

 - Arquivos contidos no diretório <fluig>\jboss\modules\com\oracle\jdbc\main (fluig 1.5.x) ou <fluig>\appserver\modules\com\oracle\jdbc\main (fluig 1.6)

Acesse o site da Oracle e faça o *download* do driver de conexão na versão 6.

Em seguida, copie o arquivo ojdbc6.jar que foi baixado e mova para o diretório <fluig>\jboss\modules\com\oracle\jdbc\main (fluig 1.5.x) ou <fluig>\appserver\modules\com\oracle\jdbc\main (fluig 1.6).

**

No diretório <fluig>\jboss\modules\com\oracle\jdbc\main  (fluig 1.5.x) ou <fluig>\appserver\modules\com\oracle\jdbc\main (fluig 1.6), localize o arquivo 'module.xml' e altere o parâmetro path para 'ojdbc6.jar' conforme a linha 4 do exemplo abaixo:

[?](#)

| 12345678910 | `````````````````````````````````` |
| --- | --- |

Por fim, inicie os serviços do fluig e realize novos testes no histórico das solicitações.


<!-- anchors: BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Índice, BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Plataforma, BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Ocorrência, BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Causa, BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Solução, BPM029Comorealizardowngradedobancodedadosparaajustarohoráriodeexecuçãodeumaatividadequeestáincorreto?-Procedimentos, samples, samples-1, samples-2, samples-3, highlighter_180662, samples-4 -->
