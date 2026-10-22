---
title: "Plataforma ❙ Parâmetros"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455426"
scraped_at: "2026-03-09T03:13:08.097Z"
depth: 1
anchors: 3
child_links: 57
---

# Plataforma ❙ Parâmetros

# Falando de parâmetros...

---

O recurso Parâmetros permite o cadastro de informações e parâmetros necessários para a utilização da plataforma. Define as características padrão da plataforma.

![](/download/attachments/234455426/Par%C3%A2metros%20plataforma.png?version=2&modificationDate=1750254513360&api=v2)

## Definir parâmetros gerais

---

**01.** No menu principal, clique em ![](/download/attachments/234455426/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750253888650&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455426/%C3%ADcone-par%C3%A2metros-gerais.png?version=1&modificationDate=1750253747620&api=v2) **Parâmetros gerais**.

Existem informações que foram preenchidas durante a criação da empresa e qualquer alteração terá impacto no produto.

**04.** Configure os parâmetros do quadro **Geral.** 

**Habilita meus documentos**Definir se será habilitada a pasta "Meus Documentos" para todos os usuários.
Quando assinalado, todos os usuários, exceto os convidados e anônimos, terão uma pasta particular em que poderão realizar o processo de Check-out / Check-in e armazenar objetos particulares.
Quando for desativar a pasta Meus Documentos, a plataforma irá validar se essa pasta particular está sendo utilizada por algum usuário. Se estiver, é necessário que ele exclua o conteúdo da pasta e o remova também da lixeira, caso contrário aparecerá uma mensagem impedindo o recurso de ser desabilitado.

**Indexação automática**Definir se será feita a indexação automática de pastas e documentos.

**Habilita exibição do wizard de primeiro acesso do usuário **Escolher se o novo usuário terá o *wizard* de usuário. O *wizard* de Primeiro acesso é um recurso apresentado na primeira vez em que o usuário acessa a plataforma, com o objetivo de estimulá-lo a completar seu perfil, adicionar comunidades e seguir usuários.

**Tamanho máximo de upload pela web (MB):**Insira o tamanho máximo permitido para um arquivo ao efetuar *upload* pela web. Se for zero, o upload será limitado ao valor máximo de 1024 megabytes (MB) ou 1 gigabyte (GB), que é o limite padrão do serviço Fluig. A unidade utilizada neste campo é em megabytes (MB).

Nota:

Para aumentar o limite de *upload* do serviço Fluig, consulte esta [documentação](/display/fluig/Como+aumentar+o+limite+de+upload+da+plataforma).

Importante!

Ao alterar o limite de *upload* do serviço Fluig para um valor acima da configuração padrão, a performance para todos os usuários da plataforma pode ser afetada durante o *upload* de arquivos com tamanho superior a esse padrão.

**Tamanho máximo de upload pelo Fluig Connect (MB)**Inserir o tamanho máximo permitido para um arquivo ao efetuar *upload* pelo Connect. A unidade utilizada é em megabytes (MB). Esse campo somente é habilitado quando a utilização do Connect está Ativa na plataforma.

**Espaço utilizado**Insira o tamanho da cota contratada. Utilizado para limitar o tamanho o espaço em disco para todo o sistema. Esta alteração irá refletir em todos os usuários. A unidade utilizada é em megabytes (MB).

**Idioma padrão dos documentos**Selecione o idioma padrão a ser sugerido nas publicações de documentos. É necessário informar qual o idioma do documento no momento da sua publicação na plataforma. Esse idioma é utilizado para indexar o documento.

**05.** Configure os parâmetros do quadro **Valores padrão.** 

**Controle manual de versão inicial**Assinale se o controle da versão inicial será feito manualmente. Se assinalado, durante a criação de um documento a versão pode ser definida manualmente, por exemplo: existe um documento que está em sua terceira versão, porém só agora será incluído na plataforma, então manualmente é possível definir o documento como versão “3.000”.

Importante!

Somente na hora da criação do documento a versão é inserida manualmente, as demais serão automáticas. Caso não esteja assinalado, o documento a ser criado estará na versão 1.000 obrigatoriamente, as demais versão também serão automáticas”.

**Documento expira?**Assinalar se os documentos publicados irão expirar após um intervalo de tempo.
Quando assinalado, determina que na publicação de novos documentos deve ser apresentado já assinalado, como padrão, o campo "Documento Expira?" exibindo a data base para expiração do documento, conforme data de publicação e quantidade de dias-padrão definida no campo "Prazo para expiração de documentos (dias)".
A informação desse campo apenas serve para definir o que deve ser sugerido na publicação de documentos. Expiração de Documentos: Usada quando existe a necessidade de descobrir se já passou a data de expiração de algum documento, caso exista, os documentos irão expirar assim que uma [tarefa agendada](/pages/viewpage.action?pageId=234455387) de Expiração de documento for executada na plataforma.

**Prazo para expiração dos documentos**Insira o prazo em dias que deve ser definido para que os documentos expirem.
EXEMPLO
Se o valor for 10 dias, o prazo de expiração será dez dias após a data de publicação do documento.

**Período de notificação da expiração**Insira o período de antecedência, em quantidade de dias, que deve ser considerado para o envio de notificação de expiração dos documentos.

**Valor máximo para resultados da busca avançada de documentos**Insira o número máximo de resultados de busca. Se informado o valor zero, significa que não tem um limite de resultados (infinito).

**Approval, visualizar somente tarefas configuradas para o aplicativo**Assinale para que sejam mostradas somente as tarefas que foram configuradas para serem utilizadas no aplicativo. 

**06.**Configure os parâmetros do quadro **Marca d'água em versões anteriores. **

**Habilita marca d'água para versões anteriores**Quando habilitado, essa opção permite que documentos com versões anteriores recebam uma marca d'água para sua correta identificação. Como por exemplo, documentos obsoletos. Ao habilitar este campo é necessário definir qual marca d'água será utilizada nas versões anteriores do documento no campo **Marca d'água**. Será permitido ao usuário salvar este campo somente quando existir uma [marca d'água](https://tdn.totvs.com/x/BoH5DQ) cadastrada.

Importante!

Este campo ficará desabilitado caso **não**tenha uma marca d'água cadastrada, impossibilitando que o usuário selecione alguma marca.

**07.** Clique em **Salvar**.

## Perguntas frequentes

---

[ECM - É possível colocar manualmente o número da versão e revisão no documento ou no formulário?](/pages/viewpage.action?pageId=208348361)

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Parâmetros-Falandodeparâmetros..., Plataforma❙Parâmetros-Definirparâmetrosgerais, Plataforma❙Parâmetros-Perguntasfrequentes -->
