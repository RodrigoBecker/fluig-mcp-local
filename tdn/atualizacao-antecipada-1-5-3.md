---
title: "Atualização antecipada 1.5.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208348659"
scraped_at: "2026-03-09T04:24:54.180Z"
depth: 3
anchors: 12
child_links: 46
---

# Atualização antecipada 1.5.3

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.3**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.3**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

# Índice

## Procedimentos para atualização do atualização antecipada

*Por se tratar de uma liberação emergencial são necessários alguns procedimentos diferenciados para atualização do ambiente. Vamos a eles:*

*1 - Descompacte o conteúdo do arquivo referente a atualização para uma pasta;*

*2 - Pare a execução dos serviços do **fluig**, **fluig_MemCached** e **fluig_RealTime**;*

*3 - Elimine as pastas data, log e tmp do fluig em: (<instalacao fluig>\jboss\standalone);*

*4 - Copie os arquivos descompactados anteriormente para a pasta <instalacao fluig>\jboss\apps. Substitua todos os arquivos;*

*5 - Inicie os serviços Memcached e RealTime;*

*6 - Inicie o serviço do fluig.*

*Basta aguardar o serviço do fluig ficar disponível e acessar a plataforma já atualizada.*

*Caso o seu ambiente fluig seja administrado pela nossa equipe de Cloud, você pode entrar em contato através de um chamado ou ligando para 4003-0015 e solicitar a atualização.*

## Atualização antecipada #1

**Central de tarefas**

**Atualização oficial:** fluig 1.5.4

Visualização e movimentação de solicitações mais rápida na Central de Tarefas. 

**Editar conteúdo em anexos workflow**

**Atualização oficial:** fluig 1.5.4

Exibição da opção Editar conteúdo, na aba Anexos de uma solicitação, quando o documento que está anexo foi publicado a partir da opção Novo documento (avançado) e sua extensão não consta em sua Descrição.

**Editar conteúdo em anexos workflow**

**Atualização oficial:** fluig 1.5.4

Edição de formulário de processo que possui campos definidos para utilizarem o Analytics.

**Movimentação de solicitações**

**Atualização oficial:** fluig 1.5.4

Movimentação de solicitações para uma atividade que é responsável por mover outra solicitação para a próxima atividade.

## Atualização antecipada #2

**Vínculo entre processo e formulário**

**Atualização oficial:** fluig 1.5.4

Anexo de arquivos do tipo PDF em uma solicitação que está atrasada e que foi convertida para uma nova versão que possui um formulário diferente da versão anterior.

**Edição do perfil do usuário integrado ao Identity**

**Atualização oficial:** fluig 1.5.4

Alteração do perfil de administrador para usuário comum no Identity ao modificar o usuário no Painel de Controle do fluig quando há integração ativa.

**Quantidade máxima de licenças excedida ao cadastrar novos usuários**

**Atualização oficial:** fluig 1.5.4

Ajustada a validação de licenças, no provisionamento via identity e na criação de novos usuários via painel de controle.

**Desativar usuários**

**Atualização oficial:** fluig 1.5.4

Desativação de usuário no fluig quando há integração com o Identity.

**Variáveis em eventos de uma movimentação workflow**

**Atualização oficial:** fluig 1.5.4

Foram adicionadas as variáveis, como por exemplo WKNumState, nos eventos workflow quando uma solicitação é movimentada via dispositivo mobile.

## Atualização antecipada #3

**Exportar treinamentos**

**Atualização oficial:** fluig 1.5.4

Exportação de treinamentos por usuários que possuem matrícula numérica.

**Avaliações**

**Atualização oficial:** fluig 1.5.4

Utilização da opção “Copiar um bloco existente” ao editar as questões de uma avaliação.

**Lista de usuários no beforeTaskSave**

**Atualização oficial:** fluig 1.5.4

Adicionada validação para verificar se o campo de atribuição do processo esta vazio.

**Experiências de uso**

**Atualização oficial:** fluig 1.5.4

Melhorias para execução dos novos programas HTML do ERP dentro do fluig.

**Conversão de solicitações**

**Atualização oficial:** fluig 1.5.4

Foram realizadas alterações para melhorar a performance ao carregar os dados dos processos para conversão.

## Atualização antecipada #4

**Exportação de conquistas**

**Atualização oficial:** fluig 1.5.5

Exportação do Relatório de Conquistas por Colaborador do recurso Gamificação, salvando o arquivo na pasta Meus documentos do usuário autenticado. É emitida uma notificação avisando sobre a conclusão da exportação.

****

**Prazo em atividades ADHoc**

**Atualização oficial:** fluig 1.5.5

Ao criar atividades em um processo ADHoc com prazo para o dia atual, a atividade não era criada

****

**Serviços com binding**

**Atualização oficial:** fluig 1.5.5

Não era possível inserir serviços através do Studio quando o volume da empresa e o arquivo de binding estavam com endereço de rede. 

**Autenticação via webservices**

**Atualização oficial:** fluig 1.5.5

Ocorria erro de "Invalid User" quando se utilizava mais de uma vez a autenticação via WebService com Identity habilitado.

## Atualização antecipada #5

**ECMCardService **

**Atualização oficial:** fluig 1.5.5

O método create do WebService ECMCardService agora considera o publisherId como dono do documento, caso nenhum ColleagueId seja informado.

## Atualização antecipada #6

**Erro após validação em processos **

**Atualização oficial:** fluig 1.5.5

Foram realizados tratamentos na movimentação de solicitações para evitar erros após validações do processo.

## Atualização antecipada #7

**Publicação de documentos utilizando o método createDocument **

**Atualização oficial:** fluig 1.5.5

Corrigida a publicação de documentos via serviço utilizando o método createDocument, agora é verificado o caminho do arquivo no diretório do usuário logado caso não encontre o arquivo no diretório apontado na integração.

## Atualização antecipada #8

**Atualização do servidor de aplicação**

**Atualização oficial:** fluig 1.5.6

Verifique se você precisa aplicar esta atualização via instalador, consultando o log do servidor fluig.

Ao iniciar o serviço procure no log pela informação "**Iniciando JBoss EAP**", verifique se a versão informada é a versão: "**6.4.3.GA (AS 7.5.3.Final-redhat-2)"**, caso não seja, seu ambiente precisa ser atualizado.

## Atualização antecipada #9

**Segurança de anexo workflow por executor da segunda atividade**

**Atualização oficial:** fluig 1.5.7

Não era possível acessar e movimentar uma solicitação que estava com segurança de anexo workflow por executor de atividade configurada.

## Atualização antecipada #10 & #11

**Visualizador interno utilizando arquivos convertidos para PDF**

**Atualização oficial:** fluig 1.5.8

Permitir que o fluig Viewer faça visualização dos documentos office convertidos para PDF pelo conversor externo. Caso o pdf exista, este será exibido no visualizador interno, para alta fidelidade da visualização de documentos.


<!-- anchors: Atualizaçãoantecipada1.5.3-Índice, Atualizaçãoantecipada1.5.3-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.5.3-Atualizaçãoantecipada#10&#11 -->
