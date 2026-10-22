---
title: "Configuração de Envio de E-mail"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235307808"
scraped_at: "2026-03-09T04:20:29.624Z"
depth: 3
anchors: 1
child_links: 192
---

# Configuração de Envio de E-mail

# Configuração de Envio de E-mail 

| Produto: | Easy Import Control |  |  |
| --- | --- | --- | --- |
| Ocorrência: | Parâmetros | Descrição | Conteúdo |
| MV_RELACNT | Conta a ser utilizada no envio de E-Mail para os relatórios | usuario@gmail.com |  |
| MV_RELAPSW | Senha para autenticação no servidor de E-mail | 12345 |  |
| MV_RELAUSR | Usuário para Autenticação no Servidor de E-mail  | usuario@gmail.com |  |
| MV_RELAUTH | Servidor de EMAIL necessita de Autenticação? | .T. |  |
| MV_RELFROM | E-mail utilizado no campo FROM no envio de relatórios por e-mail | usuario@gmail.com |  |
| MV_RELPSW | Senha da Conta de E-Mail para envio de relatórios  | 12345 |  |
| MV_RELSERV | Nome do Servidor de Envio de E-mail utilizado nos relatórios | smtp.gmail.com:587 |  |
| MV_RELTIME | Timeout no Envio de EMAIL.           | 120 |  |
| MV_WFSMTP | Nome do Servidor SMTP(envio de mensagem) | smtp.gmail.com:587 |  |
| MV_WFTCONN | Indica o numero de tentativas de acesso ao servidor de e-mails. Caso não seja informado o valor e'1 | 2 |  |

**Procedimentos para Utilização**

SOLICITAÇÃO DE NUMERÁRIO

Esta rotina é utilizada pelo importador para solicitar ao departamento financeiro um adiantamento ao despachante para pagamento de despesas de um determinado processo.

Esta rotina controlará os lançamentos de despesas previstas, disponibilizando-as como despesas efetivas para o processo apenas após a aprovação da realização do adiantamento ao despachante.

MANUTENÇÃO DE NUMERÁRIOS

Sequencia 01 - Configuração de Parâmetros de E-mail:

1. No Configurador (SIGACFG) acesse Base de Dados/ Dicionário/ Base de Dados.
2. Pesquise e Edite os parâmetros de configuração de e-mail e siga o exemplo acima para preenchimento dos mesmos.
3. Clique em Confirmar.

Sequencia 02 - Vinculação de E-mail no Usuário:

1.  No Configurador (SIGACFG) acesse Usuário/ Senhas/ Usuários.
2. Selecione o usuário logado no sistema e clique em Alterar.
3. Na tela apresenta informe o campo E-mail e clique em Confirmar. 
4. O e-mail configurado no cadastro de usuário será levado para a tela de liberação de despesas do Numerário, preenchendo automaticamente os campos De: e CC:.

Sequencia 03 - Inclusão de Despesas no Numerário:

1. No Easy Import Control (SIGAEIC) acesse Atualizações\ Embarque\ Solicit. Numerário.
2.  Localize o embarque cadastrado e clique na opção Manutenção.
3. Selecione a opção Incluir disponível em Ações Relacionadas e informe os dados.
4. Clique em Confirmar para salvar a despesa.
5. Para liberar o Adiantamento, acesse a opção Liberar Adiantamento disponível em Ações Relacionadas. Esta opção só é ativada quando existe saldo no campo “Valor Não Aprovado” no cabeçalho da tela de manutenção.
6. Neste momento será apresentada a mensagem "Deseja realmente enviar E-mail ao despachante?" clique em Sim.
7. Na tela que será apresentada, informe o e-mail do despachante e clique em Ok.

Sequencia 04 - Como realizar liberação do adiantamento do numerário:

1. No Easy Import Control (SIGAEIC) acesse Atualizações/ Financeiro/ Geração PA.
2. Selecione a despesa cadastrada e clique em Gera PA.
3. Caso queira cancelar a Liberação de Adiantamento, utilize a opção Cancela Aprovação disponível em Ações Relacionadas.
4. Confira os dados e clique sobre o botão Confirmar para gravar.


<!-- anchors: ConfiguraçãodeEnviodeEmail-ConfiguraçãodeEnviodeE-mail -->
