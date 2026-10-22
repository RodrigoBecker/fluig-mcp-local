---
title: "Plataforma ❙ Pasta avançada"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=241701521"
scraped_at: "2026-03-09T03:41:25.517Z"
depth: 2
anchors: 6
child_links: 56
---

# Plataforma ❙ Pasta avançada

# Falando de pasta avançada...

---

O modo avançado de criação de pastas permite definir uma série de propriedades para a pasta, bem como critérios de aprovação e de segurança.

![](/download/attachments/241701521/pasta%20avan%C3%A7ada.png?version=1&modificationDate=1752510941957&api=v2)

## Campos da pasta avançada

---

**Título**Defina um título ou nome para a nova pasta

**Ícone**Selecione um ícone que identifique a nova pasta.

## Informações gerais

---

Insira as informações solicitadas.

**Volume físico**

**Default**

Campo informativo do volume ao qual a pasta está associada, configurado no momento da criação da pasta.
A cota definida para a pasta limitará o tamanho total de publicações dentro dela. Esse campo somente é habilitado se o recurso controle de cotas estiver ativo na plataforma e quando a pasta pai não possui controle de cotas. Se a pasta pai possuir controle de cotas, a pasta que está sendo criada herdará o mesmo tamanho da pasta pai e tudo o que é publicado, tanto na pasta pai quanto nas filhas, consome a cota da pasta pai. Para atribuir uma cota para uma pasta pai, é necessário remover a cota específica das pastas filhas, pois elas herdarão o valor definido para a pasta pai. Informações sobre como ativar esse controle podem ser obtidas em [Controle de cotas](/pages/viewpage.action?pageId=235320837).

**Armazenar por longo prazo**
Formato do documento que deverá ser gerado e armazenado caso deseje criar documentos para serem armazenados por longo prazo dentro dessa pasta. As opções disponíveis são:
- Não armazena;
- PDF/A;
- ODF.

Quando você preencher este campo com uma extensão (PDF ou ODF), toda vez que você fizer o upload de um arquivo .doc ou .docx, por exemplo, ele criará uma cópia na extensão marcada em seu volume. Temos este recurso, pois o .doc ou .docx são exemplos de extensões de um software privativo. Dessa forma, não é garantido que você terá como visualizá-los durante toda a utilização do TOTVS Fluig Plataforma. Como PDF e ODF são livres, é praticamente garantido que você conseguirá visualizá-los para sempre. Portanto este recurso funciona como uma forma de backup, para garantir o armazenamento do documento, sem que você dependa de um software proprietário.

Caso exista a necessidade de criar documentos de longo prazo para outras extensões de arquivos, é possível fazer por intermédio de um *plugin* externo. Informações sobre como criar esse *plugin* podem ser obtidas na documentação técnica de [Conversores de Documentos](/display/fluig/Conversores+de+Documentos).

Observação

O PDF/A é um padrão definido pela norma ISO 19005-1:2005, onde alguns recursos não são permitidos por não serem compatíveis ao perfil de um documento eletrônico para arquivamento a longo prazo. 

Por isso, eventualmente, os documentos convertidos para PDF/A podem perder qualidade, como, por exemplo, os que utilizam recursos de transparência. Depois da publicação do documento, recomenda-se que o mesmo seja visualizado para ter certeza que o documento foi armazenado de acordo com o original.

**Campo informativo do usuário publicador da pasta**Mostra o nome do usuário publicador da pasta.

**Autor**
Usuário que será definido como autor da pasta.

**Tags**Rótulos de identificação da pasta para facilitar em uma busca futura.

**Comentários**
Descrição sobre a pasta, sobre o tipo de conteúdo que ela armazenará ou outras informações que se julgue relevante.

## Aprovação

---

Defina os critérios de aprovação para a pasta, se desejado.

**Nível de aprovação**Digite o nome do nível de aprovação da pasta.

EXEMPLO

Diretoria, Gestores, Líderes, entre outros.

Após inserir um nível de aprovação, é possível definir **Usuários**ou **Grupos**que terão acesso. É permitido incluir vários níveis de aprovação.

Com isso, será necessário definir as **Condições de aprovação**: **E**, **OU**e **Único aprovador.**

Mais informações podem ser obtidas em: [Definir critérios de aprovação para pasta ou para documento](/pages/viewpage.action?pageId=243008763).

## Segurança

---

Defina os critérios de segurança para a pasta, se desejado.

**Herda segurança do pai?**Quando habilitado, define que todos os critérios de segurança da pasta pai são atribuídos à pasta ou ao documento.

**Permissões**Permite definir permissões para um usuário, grupos ou todos.

No campo **Regra dos grupos**, deve ser selecionado entre: **Todos os usuários dos grupos** ou **Somente os usuários comuns entre os grupos.**

Ao incluir um grupo ou usuário, será necessário assinalar as opções que deseja para o usuário ou grupo, podendo definir entre:

- Listar conteúdo
- *Downdload*e impressão
- Todas as versões
- Nível de segurança

**Leitura** - Permite apenas visualização.

**Gravação**- Permite incluir conteúdo na pasta ou responder um formulário. Não permite modificar as propriedades.

**Modificação**- Permite modificar o item em questão, além das ações permitidas em Leitura e Gravação.

**Total**- permissão total

Para excluir algum usuário ou grupo, basta acionar o botão da lixeira, em **Excluir**.

**Restrições**Permite definir restrições para um usuário, grupos ou todos.

No campo **Regra dos grupos**, deverá ser selecionado entre: **Todos os usuários dos grupos** ou **Somente os usuários comuns entre os grupos.**

Ao incluir um grupo ou usuário, será necessário assinalar as opções que deseja para o usuário ou grupo, podendo definir entre:

- Listar conteúdo
- *Downdload*e impressão
- Todas as versões
- Nível de segurança

**Leitura -** Permite apenas visualização.

**Gravação**- Permite incluir conteúdo na pasta ou responder um formulário. Não permite modificar as propriedades.

**Modificação**- Permite modificar o item em questão, além das ações permitidas em Leitura e Gravação.

**Total**- permissão total

Para excluir algum usuário ou grupo, basta acionar o botão da lixeira, em **Excluir**.

Informações detalhadas sobre o procedimento podem ser obtidas em [Definir critérios de segurança para pasta ou para documento](/pages/viewpage.action?pageId=243008857).

## Propriedades herdadas

---

Defina as informações solicitadas.

**Tipo de documento**
Permite selecionar o tipo de documento ao qual a pasta pertence: **Contratos**, **Financeiro**ou **Genérico**.

**Assunto**
Permite selecionar o assunto ao qual a pasta pertence. Informações adicionais podem ser obtidas em [Assunto](/pages/viewpage.action?pageId=234455255).

**Notificar?**
Quando assinalado, determina que será enviada uma notificação por *e-mail* quando documentos forem publicados dentro dessa pasta para os usuários que possuem o assunto da pasta como um assunto de interesse.

**Criar versão/revisão inalterável**
Quando assinalado, determina que somente é possível efetuar alterações para a pasta criando uma nova versão ou revisão dela, pois a versão atual é inalterável.

**Versão/revisão**
Forma de controle de versão aplicada à pasta.

As opções disponíveis são:

- **Manter versão atual**: quando selecionada, determina que será mantida a versão atual da pasta. É utilizada quando a pasta atual não é mais válida e é necessário trocar a versão corrente por uma nova atualizada. Caso a pasta necessite de aprovação, o seu conteúdo anterior continua sendo exibido até que as alterações sejam aprovadas. Ao escolher opção “Manter revisão", faz com que o conteúdo do documento possa ser alterado e a data de criação da versão original possa ser mantida, sem que se crie uma nova versão do documento. 

- **Criar nova revisão**: quando selecionada, determina que as alterações efetuadas resultarão em uma revisão da versão atual da pasta. É normalmente utilizada quando a pasta possui uma pequena alteração. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova revisão.

 - **Criar nova versão**: quando selecionada, determina que as alterações efetuadas resultarão em uma nova versão da pasta. É normalmente utilizada quando a pasta passa por grandes alterações. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova versão.

**Permite download e impressão?**
Quando assinalado, determina que a pasta permite que seu conteúdo seja baixado e impresso por usuários que tenham permissão para isso, ou seja, a opção *Download* e impressão localizada na aba [Segurança](/pages/viewpage.action?pageId=243008857) da pasta está assinalada para o usuário ou um grupo ao qual ele pertence. 

**Atualiza propriedades de cópia controlada?**
Quando assinalado, determina que as propriedades necessárias para a impressão da cópia controlada serão atualizadas. O recurso de impressão de cópia controlada permite determinar a área destino da cópia que está sendo impressa e, ainda, a emissão automática do protocolo de entrega, evitando que o conteúdo de documentos controlados seja alterado ou copiado de forma não autorizada.

**Utiliza visualizador interno?**
Quando assinalado, determina que os documentos serão exibidos no visualizador interno da plataforma.

As opções disponíveis são:

- PFDRenderer
- PDFBox
- JPedal
- ICEPdf

Por padrão, os documentos são exibidos no visualizador interno, exceto arquivos com extensões do tipo PNG, JPG, JPEG e BMP, que serão visualizados diretamente pelo visualizador padrão do navegador. Caso queira visualizar estas extensões via Fluig Viewer, será necessário assinalar a opção dentro das propriedades do documento.

**Adicionar campo customizado**
Determina que os [campos customizados](/pages/viewpage.action?pageId=234455265) a serem exibidos nas propriedades dos documentos serão herdados da pasta pai. Caso não esteja selecionado, é possível acionar a opção**Adicionar campo** para incluir campos desenvolvidos sobre a plataforma se for definido que eles não serão herdados da pasta pai.
Para incluir, basta acionar **Adicionar campo customizado**.

Clique em **Salvar**, para salvar as informações definidas.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Pastaavançada-Falandodepastaavançada..., Plataforma❙Pastaavançada-Camposdapastaavançada, Plataforma❙Pastaavançada-Informaçõesgerais, Plataforma❙Pastaavançada-Aprovação, Plataforma❙Pastaavançada-Segurança, Plataforma❙Pastaavançada-Propriedadesherdadas -->
