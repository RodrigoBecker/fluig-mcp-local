---
title: "BPM 097 - Por que dados de formulários são perdidos em atividades paralelas?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=389553376"
scraped_at: "2026-03-09T03:57:59.742Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 097 - Por que dados de formulários são perdidos em atividades paralelas?

# Índice

# Plataforma

**Produto:  **Fluig

# Ocorrência

Ao preencher um formulário de forma simultânea em atividades paralelas, a informação enviada por um dos usuários é perdida.

# Causa

Há uma regra para formulário em atividades paralelas a qual valida as versões do mesmo, onde quando há usuários preenchendo o formulário simultaneamente e um usuário envia suas informações, os demais usuários ao tentar o envio receberão uma mensagem informando que houve alteração e que será necessário atualizar seu formulário, a fim de que os usuários visualizem o que foi atualizado.

                                                                             ![](/download/attachments/389553376/image2018-8-8_11-8-43.png?version=1&modificationDate=1533737323000&api=v2)    

Tendo em consideração que o fluig não possui formulário onde as informações são salvas em tempo real, e sim quando os dados são populados (enviados ao banco de dados), essa validação foi criada para que não sejam perdidas informações durante o processo.

Sabendo do funcionamento dessa validação, quando há um formulário com versão única não é possível aplicar a mesma, pois toda vez que há uma movimentação a versão é sobreposta, diferente de quando há um formulário versionado, onde os registros são salvos separadamente sendo possível aplicar a validação.

# Solução

Criar o formulário versionado para esse cenário. Caso seu projeto já esteja em funcionamento será necessário retirar a versão única do mesmo e liberar versão/exportá-lo para o servidor.

Na web, acesse **Configuração de Processo**, acione **Propriedades** e acesse a aba **Formulário**:

![](/download/attachments/389553376/image2018-8-8_11-12-0.png?version=1&modificationDate=1533737520000&api=v2)

No Studio, acesse **Propriedades** e acione a aba** Formulário:**

****

![](/download/attachments/389553376/image2018-8-8_11-15-8.png?version=1&modificationDate=1533737708000&api=v2)

Importante!

Vale lembrar que, para solicitações em andamento não será possível a alteração através da conversão, pois não é possível a conversão de formulários.


<!-- anchors: BPM097Porquedadosdeformuláriossãoperdidosematividadesparalelas?-Índice, BPM097Porquedadosdeformuláriossãoperdidosematividadesparalelas?-Plataforma, BPM097Porquedadosdeformuláriossãoperdidosematividadesparalelas?-Ocorrência, BPM097Porquedadosdeformuláriossãoperdidosematividadesparalelas?-Causa, BPM097Porquedadosdeformuláriossãoperdidosematividadesparalelas?-Solução -->
