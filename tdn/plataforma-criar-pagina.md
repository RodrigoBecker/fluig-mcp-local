---
title: "Plataforma ❙ Criar página"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455933"
scraped_at: "2026-03-09T04:20:13.263Z"
depth: 3
anchors: 2
child_links: 65
---

# Plataforma ❙ Criar página

# Falando de criar página...

---

Por meio desse recurso é possível criar páginas para que apareçam no menu principal da plataforma, definir suas configurações e propriedades e personalizá-las, escolhendo seu *layout* e os *widgets *que as devem compor. Ao criar uma nova página, ela entra automaticamente no modo Rascunho, não sendo necessário efetuar a ação de salvar um rascunho, pois as informações serão salvas automaticamente.

Quando uma página é publicada, uma versão dela é gerada. Posteriormente, depois da página passar por edições, é possível restaurar uma versão anterior à versão publicada. Ao publicar uma página, caso ela contenha pelo menos um *widget* que foi configurado para ser exibido no aplicativo móvel, a página é habilitada para também ser exibida no aplicativo móvel. Nesse caso, ao editá-la, o campo "Habilitar página no aplicativo *mobile*" é exibido assinalado.

![](/download/attachments/234455933/Layouts%20responsivos.png?version=2&modificationDate=1749581205903&api=v2)

## Criar página

---

**01.** No menu principal, clique em ![](/download/attachments/234455933/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1749580169980&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Personalização**.

**03**. Clique em ![](/download/attachments/234455933/%C3%ADcone-minhas-p%C3%A1ginas.png?version=1&modificationDate=1749580038747&api=v2) **Minhas páginas**.

**04.** Clique em **Criar página**.

**05.** Selecione o *layout* desejado para a nova página.

É necessário selecionar o*layout* para definir a estrutura da página, pois ele contém os *slots* disponíveis para a adição de *widgets*, bem como o posicionamento deles na página. Mais informações podem ser obtidas em *Layout*. Os *layouts* que apresentam uma *tag* de identificação chamada **Layout responsivo** identificam os *layouts* que se adaptam a diversos tamanho de tela.

**06.** Clique em **Avançar**.

**07.** Defina o ícone para a nova página.

A definição do ícone depende do tema em vigor na plataforma.

- **Clássico:**esse tema permite o uso de ícones personalizados, para isso acione a opção **Trocar ícone**. O tamanho padrão do ícone de uma página é 50 x 30 pixels. Ícones maiores serão redimensionados e ícones menores serão ampliados para o tamanho padrão.

- **Snowflake**: esse tema possibilita a escolha de um ícone dentre os disponibilizados pela plataforma, seguindo o padrão de ícones flat da Style Guide. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**08.** Insira as informações solicitadas para a criação da nova página.

Os campos destacados com um asterisco (*) são de preenchimento obrigatório.

**Nome da página**Nome para a página que está sendo criada.

**Descrição**Descrição da página que está sendo criada.

**Identificador único**Identificador único da página que está sendo criada. Esse identificador não pode conter caracteres especiais.

**URL personalizada para acesso**URL personalizada e simplificada para acesso à página que está sendo criada, podendo ser no formato "[http://dominio.com/pagina](http://dominio.com/pagina)" ou "[http://pagina.dominio.com](http://pagina.dominio.com)" - no caso do último exemplo é necessário informar ao administrador do servidor de domínios para efetuar o devido redirecionamento.

Importante!

Atualmente, existem 3 regras para conteúdos não permitidos em URLs personalizadas de acesso. São elas:

1. **Dois ou mais slashes consecutivos** (`//` ou `\\`);
2. **Strings que começam com** `/wcmadmin`;
3. **Strings que começam com** `/portal`.

**Autorização**Configuração para restringir o acesso à página de maneira genérica. As opções disponíveis são:

- **Public**: quando selecionada, determina que é possível acessar a página sem estar logado no sistema;

- **Authenticated**: quando selecionada, determina que apenas os usuários logados no sistema podem acessar a página.

**Página raiz**Página à qual a página que está sendo criada será relacionada como filha. O objetivo desta configuração é criar uma hierarquia de páginas.

- Clique em **Localizar**, ao lado do campo **Página raiz**.

- A listagem de páginas será apresentada. Localize e clique sobre o nome da página, logo depois clique em **Adicionar**.

**Habilitar sub-páginas**Quando assinalada, determina que a página pode ter sub-páginas relacionadas a ela, ou seja, na criação de uma nova página, ela estará disponível para ser selecionada como uma página pai.

**Exibir sub-páginas no sub-menu**Quando assinalada, determina que as páginas filhas serão exibidas ao posicionar o*mouse* sobre a página pai no menu, não sendo necessário clicar sobre ela para que sejam exibidas. Caso contrário, as páginas filhas são exibidas no mesmo nível da página pai, ou seja, são exibidas logo abaixo da página pai no menu. Essa opção somente é habilitada quando a opção "Habilitar páginas filhas" estiver assinalada.

**Página agrupadora**Quando assinalada, determina que não é exibido nenhum conteúdo na página, ela somente agrupa e organiza páginas filhas no menu.

**Habilitar pathparam**Quando assinalado, determina que é possível enviar parâmetros por meio de URL para a página.

**09.** Clique em **Avançar**.

Na próxima janela é possível definir as permissões da página.

**10.** Clique em **Adicionar** para incluir permissões para a página.

Por padrão, as permissões para o usuário que está criando a página já são exibidas. Porém, é possível adicionar permissões para outros usuários, para papéis e para grupos de usuários.

**11.** Insira as permissões desejadas para a página.

É possível adicionar permissão para usuários, papéis e grupos de usuários.

Para incluir um usuário/papel/grupo de usuários, clique em **Adicionar** localizado no canto superior esquerdo da tela. Uma janela para localizar os usuários/grupos/papeis será apresentada. Clique em **Localizar** para que os usuários/grupos/papeis sejam localizados, clique sobre o usuário/grupo/papel que deseja adicionar permissão e clique em **Adicionar**.

**Usuário**Usuário ao qual será concedido algum tipo de permissão.

**Papel**Papel ao qual será concedido algum tipo de permissão.

**Grupo**Grupo de usuários ao qual será concedido algum tipo de permissão.

**Visualizar permissão**Quando assinalado, determina que o usuário/papel/grupo de usuários possui permissão para visualizar a página.

**Alterar permissão**Quando assinalado, determina que o usuário/papel/grupo de usuários possui permissão para editar a página.

**Remover permissão**Quando assinalado, determina que o usuário/papel/grupo de usuários possui permissão para remover a página.

**12.** Clique em **Confirmar**.

**13.**Clique em **Concluir.**

A página será apresentada no modo de edição no construtor de páginas com os *slots* disponíveis, onde é possível adicionar *widgets* e personalizar a apresentação da página.

No lado esquerdo da tela é possível localizar todas as *widgets* que são separadas por módulo entre Todas, Aprendizado, BPM, ECM, Identity, Integrações, Social e WCM.

Além disso, também é possível utilizar o filtro para fazer uma busca entre as *widgets* do TOTVS Fluig Plataforma e Personalizado, caso tenha *widgets* personalizadas. 

**14.** Para incluir as *widgets* é possível clicar na *widget* desejada e arrastar (*drag and drop*) posicionando-as nos *slots* desejados.

É possível recolher o menu lateral esquerdo para uma melhor visualização dos *slots* e inclusão de *widgets* na página através do ícone ![](/download/attachments/234455933/oie_transparent%20%2845%29.png?version=1&modificationDate=1677521552853&api=v2). Além disso, é possível adicionar mais de uma *widget* para cada *slot* disponível na página.

Informações adicionais sobre os *widgets* disponíveis e as configurações específicas de cada um podem ser obtidas em *Widgets*.

**15.**Ao incluir a *widget* ela será apresentada no *slot* correspondente. Após incluir a *widget* é necessário editar as permissões. Para isso clique no ícone ![](/download/attachments/234455933/flaticon-unlock.png?version=1&modificationDate=1677522167743&api=v2) para adicionar as permissões.

Para remover uma *widget* do *slot* basta acionar o ícone ![](/download/attachments/234455933/flaticon-trash%20%281%29.png?version=1&modificationDate=1677523340890&api=v2). Na mensagem apresentada clique em **Remover** para que a *widget* seja removida do *slot*.

**16.**Clique na aba correspondente à permissão que se deseja configurar, **Por grupo**, **Por papel** e **Por usuário**.

É possível configurar permissões para usuários, papéis e grupos de usuários.

**17.** Na aba desejada, clique em **Adicionar** para localizar o usuário/papel/grupo que deseja adicionar.

**18.** Selecione o usuário/papel/grupo de usuários desejado clicando em cima do nome. 

**19.** No quadro **Permissão**, assinale as opções que determinam os tipos de permissão para o usuário/papel/grupo de usuários.

**Visualizar Widget**Quando assinalado, determina que o usuário/papel/grupo de usuários possui permissão para visualizar a *widget* na página.

**Alterar Widget**Quando assinalado, determina que o usuário/papel/grupo de usuários possui permissão para alterar a *widget* na página.

**Atribuir Permissão**Quando assinalado, determina que o usuário/papel/grupo de usuários pode configurar as permissões para a *widget*.

**20.**Clique em**Aplicar alterações**.

**21.** Na mensagem apresentada para confirmar as alterações, clique em **Confirmar**.

Para remover as permissões de um usuário/papel/grupo de usuários, é necessário selecioná-lo e clicar em **Remover**.

**22.**Clique em **Publicar**.

**23.** Insira uma breve descrição para a página e clique em **Publicar página**.

Ao clicar em **Publicar Página**, a página é apresentada no modo de visualização e torna-se disponível a todos que possuem permissão de visualizá-la. Além disso, após publicada uma versão da página é gerada e caso passe por outras edições e publicações é possível restaurar uma versão anterior à publicada. 

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Criarpágina-Falandodecriarpágina..., Plataforma❙Criarpágina-Criarpágina -->
