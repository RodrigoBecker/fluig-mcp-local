---
title: "Plataforma ❙ Controle de cotas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235320837"
scraped_at: "2026-03-09T04:05:12.555Z"
depth: 2
anchors: 3
child_links: 57
---

# Plataforma ❙ Controle de cotas

# Falando de controle de cotas...

---

Esse recurso permite definir um tamanho padrão de armazenamento que as pastas da plataforma podem ter, bem como para a pasta particular dos usuários. E vem desabilitado por padrão.

As cotas definidas aqui são padrão. Porém, é possível definir valores específicos por pasta e por usuário. Para pastas, é possível definir um valor para cada uma alterando suas propriedades. Nesse caso, as cotas seguem a hierarquia de pastas, ou seja, as pastas filhas de uma pasta herdarão sua cota e todas as publicações efetuadas, tanto na pasta pai quanto nas filhas, consomem espaço da cota da pasta pai. Para atribuir cotas específicas para as pastas filhas, é necessário que a cota da pasta pai seja ilimitada (valor 0), assim como para atribuir cota de armazenamento para uma pasta que possui filhas com cota definida, é necessário alterar a cota das filhas para ilimitada. Para a pasta Meus documentos também é possível definir um valor diferente do padrão para cada usuário diretamente no cadastro de [Usuários](/pages/viewpage.action?pageId=234455411).

É possível definir se a publicação será ou não bloqueada quando a pasta atingir seu tamanho máximo permitido.

Também é possível visualizar um relatório contendo informações sobre cada pasta, sua cota, o total utilizado e o total disponível para utilização.

![](/download/attachments/235320837/CONTROLE%20DE%20COTAS1.png?version=5&modificationDate=1750419053340&api=v2)

## Habilitar controle de cotas

---

**01.** No menu principal, clique em ![](/download/attachments/235320837/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750418569033&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/235320837/%C3%ADcone-controle-cotas.png?version=1&modificationDate=1750418263650&api=v2) **Controle de cotas**.

**04.** Defina as informações solicitadas.

As informações solicitadas são:

**Habilitar controle de cotas**
Quando habilitado, determina que é possível definir um limite de tamanho para as pastas. Nesse caso, o botão é apresentado com o indicativo **ON**, informando que o recurso está ativo. Quando acionado para desabilitar o recurso, o botão é apresentado com o indicativo **OFF**, informando que o recurso está desabilitado.

**Bloquear publicação ao atingir o limite de cota**
Quando assinalado, determina que a publicação na pasta será bloqueada quando ela atingir o seu tamanho máximo pré-definido.

**Cota padrão pasta (0 para ilimitado)**
Tamanho máximo padrão que as pastas da plataforma podem ter. Esse valor pode ser alterado nas propriedades de cada pasta, sendo possível definir um valor específico para cada uma. Quando uma pasta possui pastas filhas, essas herdarão o seu limite de tamanho e as publicações efetuadas, tanto na pasta pai quanto nas filhas, consomem espaço da cota da pasta pai.
Para atribuir cotas específicas para as pastas filhas, é necessário que a cota da pasta pai seja ilimitada (valor 0), assim como para atribuir cota de armazenamento para uma pasta que possui filhas com cota definida, é necessário alterar a cota das filhas para ilimitada.

**Cota padrão meus documentos (0 para ilimitado)**
Tamanho máximo padrão permitido para a pasta pessoal – Meus documentos – dos usuários. Esse valor pode ser alterado para um valor específico para cada usuário no cadastro de usuários. A configuração do controle de cotas feita na pasta Meus Documentos vale automaticamente para as subpastas criadas pelo próprio usuário.

**05.** Clique em **Salvar**.

Após habilitar o controle de cotas, caso alguma pasta esteja ocupando tamanho próximo ou estourando o limite definido, quem administra a plataforma irá receber uma notificação referente a cada pasta nessa situação, desde que a notificação esteja habilitada nas [configurações de notificações do usuário](/pages/viewpage.action?pageId=233763976). ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

## Ver cotas utilizadas

---

Para efetuar essa ação, é necessário que o controle de cotas esteja ativo.

**01.** No menu principal, clique em ![](/download/attachments/235320837/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750418569033&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/235320837/%C3%ADcone-controle-cotas.png?version=1&modificationDate=1750418263650&api=v2) **Controle de cotas**.

**04**. Clique em **Visualizar relatório**.

Uma nova tela será apresentada, trazendo a cota e o espaço disponível e utilizado das pastas da plataforma. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

É importante salientar que o relatório apresentado não leva em consideração o espaço utilizado pelos itens (pastas e documentos) que estão na lixeira dos usuários. E também não considera a pasta Meus documentos.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Controledecotas-Falandodecontroledecotas..., Plataforma❙Controledecotas-Habilitarcontroledecotas, Plataforma❙Controledecotas-Vercotasutilizadas -->
