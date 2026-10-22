---
title: "Database Configuration"
url: "https://tdn.totvs.com/display/public/fluig/Database+Configuration"
scraped_at: "2026-03-09T04:37:37.422Z"
depth: 3
anchors: 2
child_links: 34
---

# Database Configuration

A aba Database Configuration permite configurar o banco de dados desejado para que as mensagens trafegadas pelo Fluig ESB sejam registradas.

Para que possamos ter informações detalhadas sobre nossos processamentos de mensagens, o Fluig ESB nos oferece um serviço de persistência de dados, onde são registradas informações detalhadas da mensagem.

O ESB Editor também oferece um serviço de configuração de limpeza para o banco de dados. Com isso, tem-se dois grupos de configuração: Cleaning e Fluig ESB.

### Cleaning

Configura o recurso de limpeza de mensagens do banco de dados.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Cleaning Database | Permite configurar opções de limpeza de mensagens do banco de dados. |
| Remove Error Message | Quando marcada, permite a remoção de mensagens com status de erro do banco de dados. |
| Days to expire | Serão removidas do banco de dados as mensagens que possuam data de criação anterior ao número informado (em dias). |
| Each | Identifica a frequência com que a limpeza de mensagens será acionada a partir do dia 1 de cada mês. Ou seja, de quantos em quantos dias será acionada a limpeza de mensagens com início no dia 1 de cada mês. Assim, a execução ocorre também no dia 1º de cada mês. Ex.: caso seja cada 30 dias e a contagem iniciar no dia 1 de maio, a limpeza será executada no dia 30 de maio e também no dia 1 de junho repetindo o procedimento no dia 30 de junho. |
| Hour | O horário do dia em que será acionada a limpeza de mensagens. Ex.: 00:00 (meia-noite) |

As mensagens de erro são mantidas no banco de dados por no mínimo 30 dias, mesmo se a limpeza de mensagens estiver agendada para ocorrer em um período menor. As demais mensagens são removidas conforme a configuração.

### ESB

Permite configurar o banco de dados utilizado para monitoramento e histórico das mensagens.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Database | Permite selecionar o banco de dados que será utilizado. |
| Driver | Exibe a classe driver do banco de dados selecionado no campo Database. |
| URL | Configura a URL de conexão com o banco de dados. Cada banco de dados selecionado no campo Database possui uma URL específica. Assim, ao selecionar o banco de dados esse campo irá demonstrar a URL modelo solicitando que o usuário complete com informações específicas. Exemplo: jdbc:derby://localhost:1527/esbdb;create=true; |
| User | Nome do usuário de banco de dados. Se for o banco de dados Derby o usuário é "SA" |
| Password | Senha do usuário de banco de dados. Se for o banco de dados Derby a senha é "SA" |
| Test Connection | Esse botão realiza um teste de conexão com o banco de dados levando em consideração os dados inseridos nos campos anteriores. |
| Dialect | Exibe a classe responsável por se comunicar com o Hibernate. |


<!-- anchors: DatabaseConfiguration-Cleaning, DatabaseConfiguration-ESB -->
