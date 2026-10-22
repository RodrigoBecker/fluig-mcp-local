---
title: "BPM 006 - O que significa a mensagem: \"Usuário XXXXXX não está apto a receber a tarefa\" ? (atividades de processos)."
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198950887"
scraped_at: "2026-03-09T03:52:45.176Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 006 - O que significa a mensagem: "Usuário XXXXXX não está apto a receber a tarefa" ? (atividades de processos).

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Na Transferência de pendências, ao transferir atividades de processos, é exibida a mensagem "Usuário XXXXXX não está apto a receber a tarefa.".

# Causa

O usuário selecionado como destino para receber as atividades não está no mecanismo de atribuição da atividade atual do processo. Muitas vezes o mecanismo de atribuição está configurado como "Por executor de atividade", "Por campo de formulário" ou "Por usuário".

Se uma dessas opções estiver configurada no mecanismo de atribuição da atividade de destino, o retorno da lista sempre será um usuário que não é o usuário de destino da transferência, então a mensagem de erro será apresentada.

Isso pode ocorrer também caso o cliente tenha algum mecanismo de atribuição customizado que retorne apenas um usuário e o usuário retornado nesse mecanismo não seja o usuário selecionado como destino da transferência de pendências.

Exemplo

Se o Mecanismo de Atribuição da atividade tiver sido configurado "Por usuário" e o usuário selecionado for Ronaldo, não será possível transferir esta pendência para João, pois o mecanismo da atividade não aceita outro usuário que não seja o Ronaldo.

Se Ronaldo e João pertencessem a um mesmo grupo e o mecanismo de atribuição da atividade fosse "Por Grupo", a transferência poderia ser realizada normalmente.

# Solução

Verificar se no processo em questão foi configurado gestor, pois o usuário que é gestor tem as mesmas permissões que o usuário que se encontra com a tarefa, podendo inclusive movimentar, cancelar ou transferir para outro usuário.

Para os casos em que a atividade atual estiver configurada com esses mecanismos ou que o mecanismo só retorna um usuário que não é o usuário de destino, a alternativa é acessar o fluig com o usuário de destino e realizar a transferência de atividade acessando a solicitação pela Central de Tarefas.


<!-- anchors: BPM006Oquesignificaamensagem:"UsuárioXXXXXXnãoestáaptoareceberatarefa"?(atividadesdeprocessos).-Índice, BPM006Oquesignificaamensagem:"UsuárioXXXXXXnãoestáaptoareceberatarefa"?(atividadesdeprocessos).-Plataforma, BPM006Oquesignificaamensagem:"UsuárioXXXXXXnãoestáaptoareceberatarefa"?(atividadesdeprocessos).-Ocorrência, BPM006Oquesignificaamensagem:"UsuárioXXXXXXnãoestáaptoareceberatarefa"?(atividadesdeprocessos).-Causa, BPM006Oquesignificaamensagem:"UsuárioXXXXXXnãoestáaptoareceberatarefa"?(atividadesdeprocessos).-Solução -->
