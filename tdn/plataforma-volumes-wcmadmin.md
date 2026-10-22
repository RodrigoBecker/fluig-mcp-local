---
title: "Plataforma ❙ Volumes (wcmadmin)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233766796"
scraped_at: "2026-03-09T04:03:17.631Z"
depth: 2
anchors: 5
child_links: 53
---

# Plataforma ❙ Volumes (wcmadmin)

# Falando de volumes...

---

A plataforma permite que os documentos publicados sejam armazenados em volumes diferentes, objetivando a melhor distribuição dos documentos físicos.

A utilização de múltiplos volumes oferece melhores condições para administração das alocações físicas dos documentos.

- **Documento**: é o volume utilizado para gravação de documentos publicados abaixo de determinada pasta da plataforma. Um volume do tipo documento pode ser relacionado somente a uma única pasta e uma pasta somente pode ser relacionada a um único volume. No cadastro do volume do tipo Documento, a pasta relacionada ao volume deve, obrigatoriamente, estar vazia (sem documento ou subpastas) e não pode ser alterada.

- **Meus documentos**: cada usuário possui uma pasta particular na plataforma e cada pasta possui um volume determinado. É possível criar vários volumes e determinar qual volume deve ser utilizado para cada usuário. Isso é feito no cadastro de [Usuários](/pages/viewpage.action?pageId=234455411). Depois que o volume for cadastrado, é possível alterar o diretório físico do volume. Uma verificação será exibida caso um usuário já tenha publicado algum documento relacionado ao volume.
EXEMPLOSe quem administra tentar alterar o diretório físico de um volume da pasta Meus documentos, a qual o usuário está associado e que tenha algum documento publicado, será exibida uma mensagem. Porém, a alteração não será bloqueada, pois cabe a quem administra confirmar que todos os documentos já foram transferidos antes de confirmar a alteração do volume. Ao confirmar a alteração, é necessário efetuar a transferência do conteúdo do diretório anterior para o novo diretório. Essa ação não é feita automaticamente e o usuário não conseguirá visualizar o documento na sua pasta particular. É adequado que a administração verifique com todos os usuários se a transferência dos documentos já foi realizada antes de executar esta ação.

- **Anexo workflow**: é o volume utilizado para gravação de documentos anexos em solicitações de processos *workflow*. Também é possível criar vários volumes, sendo que a definição de qual volume deve ser utilizado para cada processo é determinada no cadastro de Processos *workflow*. Esse procedimento é muito semelhante ao volume da pasta particular, onde se define o volume do tipo Anexo *workflow* e, depois, se relaciona cada processo ao volume. Dessa forma, todos os documentos anexados a esse processo que não estejam publicados na plataforma serão gravados nesse volume. No cadastro do volume do tipo Anexo *workflow* é obrigatório informar o diretório físico para o volume. Após o cadastro do volume, é possível alterar seu diretório físico, sendo que nesse caso é efetuada uma verificação para analisar se o volume em questão está relacionado a algum processo *workflow* e, caso esteja, será exibida uma mensagem questionando a alteração. É realizado o mesmo tipo de validação da pasta particular. Se houver algum processo relacionado que tenha algum documento publicado, cabe a quem administra efetuar a transferência de conteúdo de um volume para o outro.

- **Disponível**: esse tipo de volume é criado pelo wcmadmin para que a administração de cada empresa possa escolher o tipo do volume. Dessa forma, wcmadmin cadastra somente o diretório físico onde serão armazenados os arquivos e define o tamanho máximo de armazenamento.

O volume *Default* é utilizado para as pastas de documentos, pastas particulares, informações de aprendizado, avaliações, conteúdos e processos *workflows* que não estão relacionados a volumes específicos. Não é possível excluir o volume do tipo *Default*, pois ele é padrão da plataforma. Todas as pastas físicas estão contidas nesse volume.

![](/download/attachments/233766796/volumes-wcmadmin.png?version=1&modificationDate=1750439535347&api=v2)

## Ver volumes

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/233766796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750439605993&api=v2) **Painel de controle**.

**03**. Localize o agrupador **Gerais**.

**04**. Clique em ![](/download/attachments/233766796/%C3%ADcone-volumes.png?version=1&modificationDate=1750439454960&api=v2) **Volumes**.

**05.** Veja os volumes existentes para cada empresa.

## Adicionar volume

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/233766796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750439605993&api=v2) **Painel de controle**.

**03**. Localize o agrupador **Gerais**.

**04**. Clique em ![](/download/attachments/233766796/%C3%ADcone-volumes.png?version=1&modificationDate=1750439454960&api=v2) **Volumes**.

**05.** Selecione a empresa para a qual deseja adicionar um novo volume.

**06.** Clique em **Adicionar**.

**07.** Insira as informações solicitadas.

As informações solicitadas são:

**Código**Código de identificação do novo volume.

**Tipo do volume**Tipo do volume que está sendo criado, conforme a finalidade a qual se destina. Os tipos disponíveis são:

- Documento;
- Meus documentos;
- Anexo *workflow*;
- Disponível.

**Diretório físico**Diretório físico onde se localizará o volume.

**Tamanho máximo (Mb)**Tamanho máximo que o volume pode atingir.

**08.** Clique em **Salvar**.

## Editar volume

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/233766796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750439605993&api=v2) **Painel de controle**.

**03**. Localize o agrupador **Gerais**.

**04**. Clique em ![](/download/attachments/233766796/%C3%ADcone-volumes.png?version=1&modificationDate=1750439454960&api=v2) **Volumes**.

**05.** Selecione a empresa da qual deseja editar um volume.

**06.** Selecione o volume a ser editado.

**07.** Clique em **Editar**.

**08.** Efetue as alterações desejadas.

Mais informações sobre os campos exibidos podem ser obtidas no tópico **Adicionar volume**.

**09.** Clique em **Salvar**.

## Excluir volume

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/233766796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750439605993&api=v2) **Painel de controle**.

**03**. Localize o agrupador **Gerais**.

**04**. Clique em ![](/download/attachments/233766796/%C3%ADcone-volumes.png?version=1&modificationDate=1750439454960&api=v2) **Volumes**.

**05.** Selecione a empresa da qual deseja excluir um volume.

**06.** Selecione o volume a ser excluído.

**07.** Clique em **Remover**.

**08.** Na mensagem exibida, clique em **Confirmar** para confirmar a exclusão do volume.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Volumes(wcmadmin)-Falandodevolumes..., Plataforma❙Volumes(wcmadmin)-Vervolumes, Plataforma❙Volumes(wcmadmin)-Adicionarvolume, Plataforma❙Volumes(wcmadmin)-Editarvolume, Plataforma❙Volumes(wcmadmin)-Excluirvolume -->
