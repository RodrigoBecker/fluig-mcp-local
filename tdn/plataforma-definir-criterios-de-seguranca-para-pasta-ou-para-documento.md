---
title: "Plataforma ❙ Definir critérios de segurança para pasta ou para documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243008857"
scraped_at: "2026-03-09T04:07:55.089Z"
depth: 2
anchors: 6
child_links: 54
---

# Plataforma ❙ Definir critérios de segurança para pasta ou para documento

# Falando de definir critérios de segurança para pasta ou para documento...

---

A plataforma oferece opções na configuração de segurança para definir permissões e restrições de acesso e ações sobre pastas e documentos. Esses critérios de segurança podem ser definidos especificamente para o usuário, para grupos nos quais o usuário está relacionado ou, ainda, para todos os usuários ativos na plataforma. Dessa forma, um mesmo usuário pode estar configurado com vários tipos de permissões e restrições para uma mesma pasta ou documento, sendo consideradas as maiores permissões e restrições definidas para ele.

As restrições são utilizadas para anular permissões concedidas, sendo assim, uma restrição sem uma permissão não gera nenhum resultado. 

EXEMPLO DE APLICAÇÃO DE RESTRIÇÃO

Foi concedida permissão total sobre um documento para um grupo de usuários. Porém, um dos usuários pertencentes ao grupo deve apenas visualizar o documento. Sendo assim, é necessário cadastrar uma restrição do tipo Modificação para esse usuário específico, para que ele apenas visualize o documento, sem poder efetuar nenhuma alteração.

É necessário possuir permissão total na pasta ou no documento para definir ou alterar os seus critérios de segurança.

Quando a segurança de uma pasta ou documento é modificada na plataforma, essa alteração não é automaticamente repassada aos usuários conectados no **fluig Connect**. Para que a alteração tenha efeito, será necessário acionar a opção **Recarregar**do fluig Connect, fazendo com que as configurações dos diretórios remotos sejam atualizadas.

![](/download/attachments/243008857/propriedades%20de%20seguran%C3%A7a.png?version=1&modificationDate=1752522109920&api=v2)

## Acessar configuração de segurança

---

**01**. No menu principal, clique em ![](/download/attachments/243008857/flaticon-folder-open.png?version=1&modificationDate=1752521937393&api=v2)**Documentos**.

**02**. Localize a pasta ou o documento que deve ter a segurança configurada.

**03**. Clique em ![](/download/attachments/243008857/oie_transparent%20%2824%29.png?version=1&modificationDate=1752522166577&api=v2)**Mais ações** referente à pasta ou ao documento e clique na opção **Propriedades**.

**04**. Clique na aba **Segurança**.

## Herda segurança da pasta pai?

---

Essa opção está disponível somente para subpastas ou documentos criados dentro de pastas com critérios de segurança definidos.

**01**. Clique na aba **Segurança **conforme apresentado no item [Acessar configuração de segurança](#Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-acessar).

**02**. Marque a opção **Herda segurança do pai?**.

Quando habilitada essa opção, todos os critérios de segurança da pasta pai são atribuídos à pasta ou ao documento. Se a pasta pai também herda segurança, essa mesma segurança (da pasta "avó") será aplicada à pasta ou ao documento e assim consecutivamente.

Mesmo definindo que os critérios de segurança serão herdados, é possível incluir outros critérios que serão exclusivos para a pasta ou para o documento.

## Adicionar permissão

---

**Visualize o passo a passo**

**01**. No menu principal, clique em ![](/download/attachments/243008857/flaticon-folder-open.png?version=1&modificationDate=1752521937393&api=v2)**Documentos**.

**02**. Localize a pasta ou o documento que deve ter a segurança configurada.

**03**. Clique em ![](/download/attachments/243008857/oie_transparent%20%2824%29.png?version=1&modificationDate=1752522166577&api=v2)**Mais ações** referente à pasta ou ao documento e clique na opção **Propriedades**.

**04.** Clique na aba **Segurança **conforme apresentado no item [Acessar configuração de segurança](#Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-acessar).

**05.**Clique em**Permissões**.

A área de permissões possibilita a configuração de acesso para a pasta ou para o documento que está sendo criado ou editado.

**06.**Defina como a permissão será configurada.

**Usuários**
Essa opção define os critérios de permissão para um usuário específico. É possível adicionar um usuário digitando seu nome no campo **Buscar** e clicando sobre o nome do mesmo.

**Grupos**
Essa opção define os critérios de permissão para um grupo de usuários. É possível adicionar um grupo digitando seu nome no campo **Buscar** e clicando sobre o nome do mesmo.

**Todos**
Essa opção define os critérios de permissão para todos os usuários ativos na plataforma.

**07.** Caso tenha sido selecionado mais de um grupo, em **Regra dos grupos**, escolha a opção que determina a regra a ser considerada para grupos de usuários.

Dependendo da opção selecionada, o tratamento da segurança para grupos será diferenciado. As opções disponíveis são:

- **Todos os usuários dos grupos:**quando selecionada, os usuários de todos os grupos para os quais foram definidos critérios de permissão terão acesso ao documento/pasta. Este acesso é limitado ao nível de segurança definido para o grupo. Esta opção trabalha com o conceito de união de todos os grupos.

- **Somente os usuários comuns dos grupos:**quando selecionada, somente os usuários comuns em todos os grupos para os quais foram definidos critérios de permissão terão acesso ao documento/pasta. Este acesso é limitado ao nível de segurança definido para o grupo. Esta opção trabalha com o conceito de intersecção entre os usuários dos grupos.

Para todas as opções sempre a maior permissão é considerada.

Estas regras só são aplicadas quando existem mais de um grupo.

**08.**Defina os critérios de permissão para os grupos ou usuários nas colunas exibidas ao lado de seu respectivo nome.

**Listar conteúdo**
Quando assinalado, determina que o conteúdo existente dentro da pasta ou do formulário será exibido na navegação de documentos. Quando não assinalado, o acesso ao conteúdo só pode ser efetuado a partir do seu *link*, mesmo que o usuário possua permissão de leitura e gravação, pois ele não visualizará o conteúdo da pasta ou formulário. Essa opção somente é exibida para pastas e formulários.

**Download e impressão**
Quando assinalado, determina que o usuário pode efetuar *download* e imprimir o documento ou o conteúdo da pasta, desde que o documento ou a pasta permita, ou seja, o campo Permite *download* e impressão, localizado na aba Informações gerais – para [documentos](/pages/viewpage.action?pageId=243648184) – ou na aba Propriedades herdadas – para [pastas](/pages/viewpage.action?pageId=241701521) – esteja assinalado.

**Todas as versões**
Quando assinalado, determina que o nível de segurança (leitura, gravação, modificação ou total) será válido para todas as versões da pasta ou do documento.

**Nível de segurança**
Ações que serão permitidas que o usuário efetue sobre a pasta ou sobre o documento. As opções disponíveis são:

- **Leitura**: quando selecionada, determina que o usuário pode apenas visualizar a pasta ou o documento;

- **Modificação**: quando selecionada, determina que o usuário pode modificar o item em questão, além das ações permitidas em Leitura e Gravação. Se for uma pasta, além de poder visualizá-la e gravar conteúdo dentro dela, ele também pode modificar suas propriedades. Se for um documento, é possível modificar suas propriedades e seu conteúdo. Porém, não é possível alterar os critérios de segurança das pastas e documentos.

- **Total**: quando selecionada, determina que o usuário tem permissão total sobre o item, ou seja, pode efetuar todas as ações citadas anteriormente e também alterar os critérios de segurança.

Para excluir um usuário ou grupo dos critérios de permissão, acionar o ícone ![](/download/attachments/243008857/flaticon-trash.png?version=1&modificationDate=1752522786510&api=v2)localizado na coluna **Excluir**.

**09**. Clique em **Confirmar** para concluir a configuração.

## Adicionar restrição

---

A restrição é utilizada para anular permissões. Dessa forma, uma restrição sem uma permissão não tem efeito na regra de definição de segurança.

**01.** Clique na aba **Segurança **conforme apresentado no item [Acessar configuração de segurança](#Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-acessar).

**02.**Clique em**Restrições**.

**03.**Defina como a restrição será configurada.

**Usuários**
Essa opção define os critérios de restrição para um usuário específico. 

**Grupos**
Essa opção define os critérios de restrição para um grupo de usuários.

**Todos**
Essa opção define os critérios de restrição para todos os usuários ativos na plataforma.

**04.** Caso tenha sido selecionado mais de um grupo, em **Regra dos grupos**, selecione a opção que determina a regra a ser considerada para grupos de usuários.

Dependendo da opção selecionada, o tratamento da segurança para grupos será diferenciado. As opções disponíveis são:

- **Todos os usuários dos grupos:**quando selecionada, os usuários de todos os grupos para os quais foram definidos critérios de restrição terão acesso ao documento/pasta. Este acesso é limitado ao nível de segurança definido para o grupo e ao resultado entre permissão versus restrição. Esta opção trabalha com o conceito de união de todos os grupos.

- **Somente os usuários comuns dos grupos:**quando selecionada, somente os usuários comuns em todos os grupos para os quais foram definidos critérios de restrição terão acesso ao documento/pasta. Este acesso é limitado ao nível de segurança definido para o grupo e ao resultado entre permissão versus restrição. Esta opção trabalha com o conceito de intersecção entre os usuários dos grupos.

Para todas as opções sempre a maior permissão é considerada.

Estas regras só são aplicadas quando existem mais de um grupo.

**05. **Defina os critérios de restrição para o usuário ou grupo nas colunas exibidas ao lado de seu nome.

**Listar conteúdo**
Quando selecionada, determina que o conteúdo existente dentro da pasta ou do formulário não será exibido na navegação de documentos. Essa opção somente é exibida para pastas e formulários.

**Download e impressão**
Quando selecionada, determina que o usuário não pode efetuar *download* nem imprimir o documento ou o conteúdo da pasta.

**Nível de segurança**
Ações que serão permitidas que o usuário efetue sobre a pasta ou sobre o documento. As opções disponíveis são:

- **Leitura**: quando assinalada, determina que o usuário não pode visualizar a pasta ou o documento;

- **Modificação**: quando assinalada, determina que o usuário não pode modificar o item em questão, mas pode efetuar todas as ações citadas anteriormente se tiver as permissões dos níveis anteriores. Ou seja, se for uma pasta, pode apenas visualizá-la e gravar conteúdo dentro dela, porém, não pode modificar suas propriedades nem seus critérios de segurança. Se for um documento, apenas é possível visualizá-lo, sem modificar suas propriedades e seu conteúdo.

- **Total**: quando assinalado, determina que o usuário tem restrição total sobre o item, ou seja, pode efetuar todas as ações citadas anteriormente – se tiver permissão nos níveis anteriores – menos alterar os critérios de segurança do item.

Para excluir um usuário ou grupo dos critérios de restrição, acionar o ícone ![](/download/attachments/243008857/flaticon-trash.png?version=1&modificationDate=1752522786510&api=v2)localizado na coluna **Excluir**.

**06**. Clique em **Confirmar** para concluir a configuração.

## Compartilhar externamente?

---

Esse parâmetro, quando habilitado, possibilita que o documento seja acessado por pessoas que não possuem conta no TOTVS Fluig Plataforma. Para mais detalhes, consulte a documentação de [Compartilhamento externo](/pages/viewpage.action?pageId=345543634).

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Falandodedefinircritériosdesegurançaparapastaouparadocumento..., Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Acessarconfiguraçãodesegurança, Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Herdasegurançadapastapai?, Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Adicionarpermissão, Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Adicionarrestrição, Plataforma❙Definircritériosdesegurançaparapastaouparadocumento-Compartilharexternamente? -->
