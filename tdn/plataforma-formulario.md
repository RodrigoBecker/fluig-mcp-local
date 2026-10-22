---
title: "Plataforma ❙ Formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233763113"
scraped_at: "2026-03-09T03:08:50.763Z"
depth: 1
anchors: 17
child_links: 65
---

# Plataforma ❙ Formulário

# Falando de formulário...

---

Os formulários são utilizados para publicar informações de maneira simplificada e padronizada, com a utilização de campos e anexos que são armazenados em uma base de dados.

Para publicar um formulário, é necessário fazer o seu *upload*, relacionar os anexos e preencher as informações gerais, dentre outras informações.

Um formulário pode ser um documento HTML, criado em um editor de HTML, ou pode ser elaborado no Studio e exportado para ser publicado na plataforma. Saiba mais sobre os formulários na documentação técnica de [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=75270483).

![](/download/attachments/233763113/Formulario%20avan%C3%A7ado.png?version=3&modificationDate=1752537070787&api=v2)

## Incluir formulário avançado

---

**01.**No local desejado para a criação do formulário, clique em **Novo**, localizado na barra de ações da parte superior esquerda da janela.

**02.** Clique em **Formulário avançado**.

Ao clicar nessa opção, é exibida a janela na qual é possível incluir um formulário.

**03**. Insira uma descrição que identifique o novo formulário.

**04.** Na aba **Arquivos de publicação**, selecione os arquivos desejados.

O formulário pode ser elaborado no Studio e exportado para posterior publicação na navegação de documentos.

Acionar **Escolher arquivos** para selecionar um formulário da estação de trabalho, ou **Copiar arquivo do ECM** para selecionar um formulário que já está publicado na plataforma.

Essa aba permite efetuar a transferência do relatório a partir de uma estação de trabalho para a plataforma. Essa transferência é chamada de *upload* e é necessária porque, para que um relatório seja publicado, ele deve inicialmente ser gravado na área destinada aos arquivos a serem publicados. Apesar de ser um diretório único determinado nos Parâmetros gerais, a plataforma cria automaticamente nesse diretório uma área de *upload *para cada usuário. Essa definição faz com que cada usuário visualize somente os documentos existentes na sua área de *upload*.

Localizar e selecionar o arquivo principal do formulário e quais serão os seus anexos. Selecionar um arquivo de extensão HTML, HTM ou XSL como principal. 

Se desejado, assinalar **Limpar diretório de upload ao publicar**. Quando assinalado, determina que os arquivos que estão no diretório de *upload* serão excluídos ao concluir a publicação do formulário.

**05. **Clique na aba **Informações gerais**e insira as informações solicitadas.

**Publicador**Usuário que publicou o formulário.

**Autor**Usuário autor do formulário que está sendo publicado.

**Nome dataset**Nome a ser atribuído ao *dataset* que o formulário se tornará.

**Armazenar em**Forma de armazenamento dos dados do *dataset*. As opções disponíveis são:
- Tabela de banco de dados;
- Em uma única tabela.

**Listar apenas registros ativos**Quando assinalado, determina que serão apresentados apenas os registros de formulário da versão ativa do formulário no *dataset*. Esse campo somente é habilitado ao preencher o campo "Nome *dataset*".

**Documento expira?**Quando assinalado, determina que o formulário expirará na data informada no campo "Válido até". Caso contrário, o formulário não expirará e a data informada no campo "Válido até" não é considerada. Essa opção será exibida assinalada quando o campo "Documento expira?" – do recurso Parâmetros da guia Gerais do Painel de Controle – estiver assinalado.  **Assista ao vídeo**

**Período de expiração**Tempo – em dias – dentro do qual o formulário expirará.

**Válido a partir de **Data a partir da qual o formulário estará disponível para que os usuários o respondam – de acordo as permissões de acesso. Essa data permite ao autor do formulário agendar sua visualização para os demais usuários da plataforma, pois ele somente será exibido a partir dessa data. Quando o formulário é válido somente a partir de uma data futura, para o autor ele é exibido identificado com uma seta vermelha que representa que é um documento futuro. A data para publicação futura não pode ser menor que a data corrente e a publicação futura não envia e-mail de notificação (aprovação, nova versão/revisão do documento etc.).

**Válido até**Data a partir da qual o formulário será considerado como expirado quando a opção "Documento expira?" estiver assinalada. A data de expiração é sugerida considerando o campo "Dias expiração documentos" – do recurso Parâmetros da guia Gerais do Painel de Controle – quando ele tiver algum valor definido. Se o campo "Documento expira" desse recurso não estiver assinalado, essa data é desconsiderada.

**Versão/revisão**Número da versão/revisão inicial do formulário que está sendo publicado. Este campo somente é habilitado na inclusão de um formulário e quando o campo "Controle manual da versão inicial" do recurso Parâmetros da guia Gerais no Painel de Controle está assinalado. Quando o campo do Painel de Controle não está assinalado, é automaticamente atribuída a versão/revisão "1.000" para o formulário e não é possível alterá-la. O formato desse campo é numérico (999.999), sendo que os três primeiros números representam a versão e os três demais representam a revisão. Após a primeira publicação, a plataforma controla automaticamente a evolução de versões e revisões, não permitindo a alteração dos números. Ao selecionar este campo, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova versão/revisão.

Importante!

Vale lembrar que não é possível remover a versão de um formulário. Não sendo possível também tomar essa ação em solicitações já finalizadas.

Alterações em formulários vinculados com processos só são efetivadas em novas solicitações, para as solicitações em andamento, se mantêm a mesma versão de formulário.

**Tipo de ícone**Elemento gráfico para representar o formulário.

**Permitir mais de um registro de formulário por usuário**Quando assinalado, determina que o formulário pode ser respondido mais de uma vez pelo mesmo usuário.

**Descrição versão/revisão**Descrição da atual versão/revisão do formulário.

**Comentário**Breve descrição com informações relevantes sobre o formulário.

**Tags**Rótulos atribuídos ao formulário para facilitar a busca posteriormente.

**06.** Clique na aba **Descrição principal dos registros de formulário**e defina as informações solicitadas. 

**Utilizar descrição padrão**Quando assinalado, determina que a descrição dos registros do formulário será a padrão, ou seja, a data na qual foi respondido e o nome do usuário que o respondeu.

**Alterar todos os registros de formulário ativos para a última data de atualização**Quando assinalado, determina que a descrição dos registros do formulário ativos será alterada para a descrição padrão (data + usuário que respondeu o formulário) considerando a data da última atualização feita no registro do formulário. Essa opção somente é exibida ao assinalar a opção "Utilizar descrição padrão" ao editar as propriedades de um formulário que até então utilizava um campo como descrição de seus registros.

**Alterar descrição em todos os registros de formulário ativos**Quando assinalado, determina que a descrição de todos os registros de formulário ativos será alterada para conter o valor do campo selecionado, substituindo a descrição padrão. Essa opção somente é exibida ao desmarcar a opção "Utilizar descrição padrão" ao editar as propriedades de um formulário que até então utilizava a descrição padrão em seus registros.

**Selecione um campo para descrição do registro de formulário**Campo que será a descrição dos registros do formulário. Os campos do formulário somente são habilitados para seleção quando o campo "Utilizar descrição padrão" não estiver assinalado.

**07.** Clique na aba **Aprovação**e defina os critérios de aprovação para o formulário.

Mais informações sobre o procedimento podem ser obtidas em [Definir critérios de aprovação para pasta ou para documento](/pages/viewpage.action?pageId=243008763). 

**08.** Clique na aba **Segurança**e defina os critérios de segurança para o formulário.

Mais informações sobre o procedimento podem ser obtidas em [Definir critérios de segurança para pasta ou para documento](/pages/viewpage.action?pageId=243008857).

**09.** Clique na aba **Datasets do formulário**.

**10** Clique em **Associar dataset**.

**11.** No campo apresentado, selecione o *dataset* que será relacionado ao formulário.

Para excluir um *dataset* inserido, basta acionar o ícone representado por uma lixeira e localizado ao lado direito do nome do *dataset*.

**12.** Clique em **Confirmar**.

## Acessar formulário

---

**01.** Localize e clique sobre o nome do formulário que deseja acessar.

**02.** Visualize os registros do formulário.

## Solicitar permissão adicional em formulário

---

Essa opção é apresentada somente para usuários que não são administradores.

**01.** Localize o formulário para o qual deseja solicitar permissões adicionais.

**02.** Posicione o *mouse* sobre o nome do formulário.

**03.** Clique em **Solicitar permissões adicionais**, localizado no quadro exibido com as informações gerais do formulário.

Ao clicar nessa opção é exibida a janela na qual é possível solicitar permissões adicionais no formulário. Mais informações podem ser obtidas em [Solicitar permissão adicional em pasta ou em documento](/pages/viewpage.action?pageId=235325476).

## Visualizar anexos do formulário

---

**01.** Localize o formulário no qual deseja visualizar os anexos.

**02.** Clique em ![](/download/attachments/233763113/flaticon-paperclip.png?version=1&modificationDate=1752537393957&api=v2)**Visualizar anexos**, localizado ao lado direito do nome do formulário e representado por um clipe.

Ao clicar nessa opção é exibida a janela na qual é possível visualizar os anexos do formulário. Mais informações podem ser obtidas em [Visualizar anexos de documento](/pages/viewpage.action?pageId=244420101).

## Definir prioridade para formulário

---

Para efetuar essa ação, é necessário que a coluna Prioridade esteja sendo apresentada. Caso não esteja, verifique o item [Visualizar prioridade do conteúdo da pasta](https://tdn.totvs.com/x/G-HuDQ#Plataforma%E2%9D%99Pasta.-Visualizarprioridadedoconte%C3%BAdodapasta).

** Veja a imagem**

**01.** Localize o documento para o qual se deseja definir prioridade.

**02.** Na coluna **Prioridade** clique sobre o espaço correspondente à prioridade.

**03**. Insira uma prioridade numérica para a pasta e pressione a tecla **Enter** no teclado.

A priorização de pastas ou de documentos é utilizada exclusivamente para ordená-los pela sua prioridade na navegação de documentos. É possível definir prioridade para todos os tipos de documentos que podem ser publicados.

Para visualizar o conteúdo de uma pasta ordenado por sua prioridade, basta efetuar um clique sobre a coluna Prioridade.

## Definir formulário como favorito

---

**01.** Localize o formulário que deseja definir como favorito.

**02.** Clique no ícone ![](/download/attachments/233763113/flaticon-star%20%281%29.png?version=1&modificationDate=1752537503750&api=v2)**Adicionar aos favoritos**, localizado ao lado direito do nome do formulário.

Mais informações sobre o recurso Favoritos podem ser obtidas em [Definir pasta ou documento como favorito](/pages/viewpage.action?pageId=233765739).

## Renomear formulário

---

Para efetuar essa ação, é necessário que o usuário tenha permissão de modificação no formulário escolhido.

**01**. Localize o formulário que se deseja renomear.

**02.** Clique em ![](/download/attachments/233763113/oie_transparent%20%2824%29.png?version=1&modificationDate=1752537550207&api=v2)**Mais opções**, localizado ao lado direito do nome do formulário e clique em **Renomear**.

**03.** Preencha o novo nome e clique em **Renomear **para confirmar.

## Editar formulário

---

**01.** Localize o formulário que se deseja editar.

**02.** Clique em ![](/download/attachments/233763113/oie_transparent%20%2824%29.png?version=1&modificationDate=1752537550207&api=v2)**Mais opções**, localizado ao lado direito do nome do formulário.

**03.** Clique em **Propriedades**.

Ao acionar essa opção é exibida a janela na qual é possível editar o formulário. 

Os campos são os mesmos apresentados no item [Incluir formulário avançado](#Plataforma❙Formulário-Incluirformulárioavançado), porém ao editar um formulário é exibido um novo campo na aba **Informações gerais**:

**Controle de versão**
Forma de controle de versão aplicada ao documento. As opções disponíveis são:

**•** **Nova revisão**: quando selecionada, determina que as alterações efetuadas resultarão em uma revisão da versão atual do documento. É normalmente utilizada quando o documento possui uma pequena alteração. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova revisão.

**•** **Nova versão**: quando selecionada, determina que as alterações efetuadas resultarão em uma nova versão do documento. É normalmente utilizada quando o documento possui uma alteração grande de conteúdo. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova versão.

**•** **Manter versão**: quando selecionada, determina que será mantida a versão atual do documento. É utilizado quando o documento atual não é mais válido e é necessário trocar todo o conteúdo corrente por um novo atualizado. Caso o documento necessite de aprovação, o conteúdo anterior do documento continua sendo exibido até que a nova versão/revisão seja aprovada. Essa opção somente é exibida quando não for assinalada a opção "Criar versão/revisão obrigatória" ao criar o documento.  Ao escolher opção “Manter revisão", faz com que o conteúdo do documento possa ser alterado e a data de criação da versão original possa ser mantida, sem que se crie uma nova versão do documento. 

**04**. Edite as propriedades necessárias.

**05**. Clique em **Confirmar**.

## Restaurar versão do formulário

---

**01.** Localize o formulário do qual se deseja restaurar uma versão antiga.

**02.** Clique em ![](/download/attachments/233763113/oie_transparent%20%2824%29.png?version=1&modificationDate=1752537550207&api=v2)**Mais opções**, localizado ao lado direito do nome do formulário.

**03. **Clique em **Propriedades**.

Ao clicar nessa opção é exibida a janela na qual é possível restaurar uma versão antiga do formulário. Mais informações podem ser obtidas em [Restaurar versão de documento](/pages/viewpage.action?pageId=243636503).

## Espelhar formulário

---

**01.** Localize e selecione ![](/download/attachments/233763113/oie_transparent%20%2825%29.png?version=2&modificationDate=1752537915320&api=v2)o formulário no qual se deseja criar um documento espelho.

**02.** Clique em **Espelhar**, localizado na barra de ações da parte superior esquerda da janela.

Ao clicar nessa opção é exibida a janela na qual é possível concluir a criação de um documento espelho do formulário. Mais informações podem ser obtidas em [Espelhar documento](/pages/viewpage.action?pageId=235325451).

## Alterar registros do formulário em bloco

---

**01.** Localize e acesse o formulário no qual estão publicados os registros que se deseja alterar de uma única vez.

**02.** Selecione os registros do formulário que serão alterados de uma única vez.

**03.** Clique em **Mais** e logo depois em **Alteração em bloco**, localizado na barra de ações da parte superior esquerda da janela.

Ao clicar nessa opção é exibida a janela na qual é possível alterar as propriedades comuns de vários registros do formulário de única vez. Mais informações podem ser obtidas em [Alterar documentos em bloco](/pages/viewpage.action?pageId=235325464).

## Filtrar conteúdo do formulário

---

**01.** Localize e acesse o formulário do qual se deseja filtrar os registros.

**02.** Clique em **Mais**, localizado na barra de ações da parte superior esquerda da janela.

**03.** Clique em **Filtrar**.

Ao clicar nessa opção é exibida a janela na qual é possível definir os dados pelos quais os registros do formulário serão filtrados. Mais informações podem ser obtidas em [Filtrar conteúdo da pasta ou do formulário](/pages/viewpage.action?pageId=235325459).

## Visualizar prioridade dos registros do formulário

---

**01.** Localize e acesse o formulário do qual se deseja visualizar a prioridade dos registros.

**02.** Clique em **Mais**, localizado na barra de ações da parte superior esquerda da janela.

**03.** Clique em **Mostrar prioridade**.

Ao clicar nessa opção é exibida a coluna Prioridade, ao lado da coluna Código, onde é possível visualizar e definir uma prioridade numérica para os registros do formulário e, também, visualizá-los ordenados pela prioridade. Para isso, basta efetuar um clique sobre a coluna para ordenar o conteúdo.

## Ocultar prioridade dos registros do formulário

---

**01.** Localize e acesse o formulário do qual se deseja ocultar a prioridade do conteúdo.

**02.** Clique em **Mais**, localizado na barra de ações da parte superior esquerda da janela.

**03.** Clique em **Esconder prioridade**.

Ao clicar nessa opção a coluna Prioridade deixa de ser exibida para os registros do formulário.

## Incluir registro no formulário

---

**01.** Localize e acesse o formulário no qual se deseja incluir um registro.

**02.** Clique em **Novo**logo depois****em **registro de formulário**, localizado na barra de ações da parte superior esquerda da janela.

Ao clicar nessa opção é exibida a janela na qual é possível incluir um registro para o formulário. Mais informações podem ser obtidas em [Registro de formulário](/pages/viewpage.action?pageId=243645686).

## Remover formulário

---

**01.** Localize e selecione ![](/download/attachments/233763113/oie_transparent%20%2825%29.png?version=2&modificationDate=1752537915320&api=v2)o formulário que se deseja eliminar.

**02.** Clique em **Mais**, localizado na barra de ações da parte superior esquerda da janela.

**03.** Clique em **Remover**.

Ao clicar nessa opção é exibida uma mensagem informando que o formulário foi removido. Porém, ele apenas é eliminado da estrutura da navegação de documentos, permanecendo na Lixeira. Quando o [Controle de cotas](/pages/viewpage.action?pageId=235320837) está ativo, o espaço ocupado pelo formulário na pasta será liberado apenas quando este for excluído da Lixeira. Mais informações sobre como restaurar ou remover o formulário definitivamente da plataforma podem ser obtidas em [Lixeira](/pages/viewpage.action?pageId=243636051).

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Formulário-Falandodeformulário..., Plataforma❙Formulário-Incluirformulárioavançado, Plataforma❙Formulário-Acessarformulário, Plataforma❙Formulário-Solicitarpermissãoadicionalemformulário, Plataforma❙Formulário-Visualizaranexosdoformulário, Plataforma❙Formulário-Definirprioridadeparaformulário, Plataforma❙Formulário-Definirformuláriocomofavorito, Plataforma❙Formulário-Renomearformulário, Plataforma❙Formulário-Editarformulário, Plataforma❙Formulário-Restaurarversãodoformulário, Plataforma❙Formulário-Espelharformulário, Plataforma❙Formulário-Alterarregistrosdoformulárioembloco, Plataforma❙Formulário-Filtrarconteúdodoformulário, Plataforma❙Formulário-Visualizarprioridadedosregistrosdoformulário, Plataforma❙Formulário-Ocultarprioridadedosregistrosdoformulário, Plataforma❙Formulário-Incluirregistronoformulário, Plataforma❙Formulário-Removerformulário -->
