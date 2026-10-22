---
title: "Atualizações (1.8.0)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=695600349#Atualiza%C3%A7%C3%B5es(1.8.0)-221222"
scraped_at: "2026-03-09T04:39:21.259Z"
depth: 3
anchors: 198
child_links: 77
---

# Atualizações (1.8.0)

## 

## Ciclo de atualização

Maior destaque para as atualizações evolutivas (**Update **). 

As liberações mais relevantes são identificadas por um selo especial:

![](/download/attachments/695600349/essential.png?version=1&modificationDate=1655902468510&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/695600349/mandatory.png?version=1&modificationDate=1655902468633&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização da plataforma](https://tdn.totvs.com/x/2xVbB).

**oculto**

## 24 de Setembro de 2024

---

## Correções

FBPM-9031

- Realizada correição para corrigir a inclusão de anexos, aplicação de filtro por anexo e exclusão de anexo filtrado, dentro do processo.

## 23 de Julho de 2024 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.0-240723**.

## Correções

- Realizado ajuste na tela de consulta de solicitações ao alterar o idioma.
- Ajuste realizado para que o menu da Store seja apresentado corretamente ao atualizar o TOTVS Fluig.
- Corrigido o gerenciamento das licenças do Fluig.
- Ajuste realizado para que não ocorra inconsistência no campo Data ao trocar o idioma da plataforma. 

## 13 de Março de 2024

---

## Correções

- Efetuadas correções para que os parâmetros do *link* de primeiro acesso à plataforma não sejam perdidos em um navegador onde já exista uma sessão iniciada e um novo acesso ao *link* seja feito depois de 30 minutos.
- Ajuste realizado para que a atualização entre versões do Fluig Plataforma ocorra corretamente não ocasionando inconsistências nessa atualização.

## 27 de Fevereiro de 2024

---

## Correções

- Efetuadas correções no redirecionamento de URL para permitir acessar a plataforma Fluig a partir de um navegador *mobile*.
- Ajuste realizado para que ao aplicar restrição de visualização na página Store para usuários admin a mesma reflita a restrição adicionada corretamente.
- Efetuadas correções para permitir que um usuário comum possa ativar ou desativar outros usuários comuns quando possuir permissão para isso.

## 09 de Janeiro de 2024

---

## Correções

- Feito tratamento para que não sejam executados *scripts* no parâmetro "errorMsg" ao chamar a URL utilizando um *payload* com códigos maliciosos, sanando vulnerabilidades e aumentando a segurança.
- Implementada biblioteca DOMPurify para auxiliar no tratamento de vulnerabilidades pelo frontend.
- Realizada correção nos aplicativos My Approval e My Fluig, para que ao acessar a central de tarefas de um usuário substituído, somente as tarefas relacionadas às quais estou designado como substituto sejam exibidas.
- Realizada correção para que a remoção de um arquivo da lixeira de outro usuário através da API interna não seja permitida.

## 05 de Dezembro de 2023

---

## Correção

- Corrigida inconsistência no processo cuja tarefa possui um mecanismo de atribuição por campo de formulário (Pool:Group:Nome_Grupo), para que ao movimentar, não apresente nenhum erro.

## 

##  27 de Novembro de 2023

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.0-231127**.

Saiba quais são os impactos:

- Esta situação permitia a exploração de*Cross-site scripting* pela página mobileredir. Foram realizados ajustes para sanar essa falha de segurança.

## 31 de Outubro de 2023

---

## Correções

- Realizada correção no *style guide* que permite o use de tabelas e *tags*complementares dentro do componente *popover*.
- Realizada correção para que as solicitações não sejam apresentadas de forma duplicada na Central de Tarefas.
- Realizada correção para que o evento _beforetasksave _execute normalmente na transferência da solicitação.

## 17 de Outubro de 2023

---

Atenção!

Informamos que as mídias liberadas entre os dias **05/09/23** a **10/10/23** estão sujeitas a apresentar inconsistências se instaladas em banco de dados Oracle. Para as novas instalações recomendamos utilizar mídias fora do intervalo mencionado.

Confira a [notícia](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20TOTVS%20Fluig.-,18/10/2023,-Inconsist%C3%AAncia%20nas%20m%C3%ADdias) que divulgamos no portal do cliente.

## Correções

- Correção realizada para que ao utilizar caracteres especiais com codificação diferente em imagens, os mesmos sejam normalizados com o mesma codificação aceita pela plataforma.
- Correção realizada para que seja possível iniciar a aplicação da plataforma.
- Realizada correção no Fluig para que o botão de "Enviar imagem" seja mostrado somente quando estiver dentro de subpastas.

## 10 de Outubro de 2023

---

## Correções

- Feitos ajustes em opções de [configuração](/pages/viewpage.action?pageId=233763976) de notificação de prazo de tarefas e solicitações que estavam duplicadas.
- Realizada correção no agendador de tarefas para sanar problemas de travamento na fila.
- Realizada correção na Lista Mestra, para que o histórico de aprovação em subpastas seja apresentado corretamente.

## 03 de Outubro de 2023

---

## Correções

- Ajustes realizados para otimizar a geração de [thumbnail](https://tdn.totvs.com/x/4gBlDw).

## 

## 26 de Setembro de 2023 

---

## Melhoria

**Novo método de visualização de documentos**

Agora os documentos do tipo PNG, JPG, JPEG e BMP, por padrão, não virão com a opção de visualizador interno assinalado, permitindo assim que os documentos sejam abertos e visualizados diretamente pelo visualizador padrão do navegador. 

Caso queira visualizar estas extensões via *Fluig Viewer*, será necessário assinalar a opção dentro das propriedades do documento. Acesse a [documentação](https://tdn.totvs.com/x/kRJoDg)para saber mais detalhes.

##  19 de Setembro de 2023 

---

## Correção

- Criado novo dataset Interno para trazer as informações de mecanismos de atribuição. Confira mais detalhes na documentação de [Datasets internos](https://tdn.totvs.com/x/SgKeCQ).

## Melhoria

**Reajustada a quantidade de requisições da visualização de documentos**

Essa solução veio com o objetivo de reduzir as requisições desnecessárias que ocorriam quando um documento era visualizado várias vezes, pois a cada nova visualização o serviço era acionado para converter o documento.

##  12 de Setembro de 2023 

---

## Correções

- Realizado ajustes de segurança na API de listagem da Store.

##  05 de Setembro de 2023 

---

## Melhorias

**Itens da store agora é Store!**

Nessa atualização o recurso Itens da Store que você conhecia passou por mudanças e agora se chama Store - a página de soluções do TOTVS Fluig que agora está mais moderna e intuitiva.

Aprimoramos a busca por soluções reposicionando o campo de busca para a parte superior da página, proporcionando maior destaque e praticidade para você na hora de buscar por uma solução.

- [Campo de busca](#)

![](/download/attachments/695600349/Busca%20store.PNG?version=1&modificationDate=1693937855560&api=v2)

Além dos filtros já existentes, criamos novos filtros que auxiliam a encontrar as soluções de forma mais eficaz. 

Você pode acionar o filtro através do ícone ![](/download/attachments/695600349/flaticon-filter%20%281%29.png?version=1&modificationDate=1693937856107&api=v2) filtrar soluções por:

- Desenvolvedor;
- Categorias;
- Tipo.

Além disso, organizamos as categorias separando-as por Novidades, Todas as soluções e Flows. Essa divisão torna o uso de cada categoria mais prático, permitindo que você encontre soluções específicas em categorias distintas.

- [Categorias da store](#)

![](/download/attachments/695600349/Nova%20store%20atualizada.gif?version=1&modificationDate=1693946787860&api=v2)

Aproveite essa novidade e confira a nova página Store do TOTVS Fluig.

Confira mais detalhes no help [Store](https://tdn.totvs.com/x/frOcEw).

## Correções

- Efetuados ajustes na definição de permissões para que os recursos do [Painel de controle](/pages/viewpage.action?pageId=233762861) sejam exibidos corretamente para usuários comuns quando eles recebem permissão de acesso a esses recursos – tais como [Substitutos](/pages/viewpage.action?pageId=234455459) e [Expedientes](/pages/viewpage.action?pageId=233766840) – e quando o banco de dados utilizado é o Oracle.
- Realizado ajuste para que ao adicionar ou renomear um arquivo com tags no nome, não sejam interpretadas como HTML pelo Fluig.

## 29 de Agosto de 2023

---

## Correções

- Realizada correção para sanar lentidão na página de configuração de processos, para que seja feita uma chamada do _alert _para cada API.
- Correção realizada para que seja possível localizar usuários, grupos ou papéis ao criar uma página.
- Incluído status "Finalizado" ao utilizar o componente de upload do style guide Fluig e realizado ajuste na área de upload para que fique disponível para inclusão de novos arquivos.
- Correções realizadas a fim de garantir que todos os componentes do bootstrap estejam na versão 3.4.1 e atualizado os componentes Tooltip e Popover para a versão 3.4.1-FLUIG.
- Alterada a opção **Flags "HttpOnly" e "Secure" nos cookies** para que seja habilitada automaticamente ao selecionar a opção **HTTPS** como protocolo nas [Configurações do sistema](/pages/viewpage.action?pageId=235597328).

## 22 de Agosto de 2023

---

## Correções

- Aumentada a segurança da edição de campos do recurso [Editar perfil](/pages/viewpage.action?pageId=233762774), tanto pela página quanto pela API.
- Correção realizada para que as permissões sejam apresentadas ao utilizar o layout comunicativo para criar páginas.

## 15 de Agosto de 2023

---

## Correções

- Efetuados ajustes para bloquear alterações nas preferências do usuário via API quando o usuário que está autenticado não é o mesmo que está sendo alterado, mesmo que o autenticado seja o administrador, permitindo assim, que apenas as próprias informações de quem está autenticado sejam alteradas.
- Realizada correção ao executar o importador de dados históricos, para que os campos com valores fixo em formato de texto (*String*) possam ser lidos pelo importador e enviados ao analytics corretamente.
- Realizada correção para que ao desmarcar a opção de PDF/A, os vídeos no formato .MP4 sejam exibidos corretamente.
- Realizada correção no campo zoom, para que permita consultas com maior número de caracteres.

## 08 de Agosto de 2023

---

## Correções

- Correção de inconsistência ao consumir API de listagem de documentos na pasta.
- Alterada a opção de notificação "Senha alterada recentemente" para "Senha recuperada recentemente", localizada na aba Gerais da [Configuração de notificações](/pages/viewpage.action?pageId=233763976), pois essa notificação somente é emitida quando é feito o processo de recuperação de senha.
- Realizada correção na configuração das atividades, para que não seja possível inserir _tags _e alterar a cor da fonte.
- Realizada correção em documentos, para que ao copiar e colar uma pasta com arquivo que possuía segurança herdada, não fique em carregamento e impeça a inclusão da pasta.

## 01 de Agosto de 2023

---

## Correções

- Correção realizada no comportamento do componente [checkbox](https://style.fluig.com/components.html#custom-checkbox-and-radio) dentro da tabela pai e filho.
- Corrigida API para possibilitar a ativação das notificações em comunidades.
- Realizada correção no menu de descrição principal dos registros de um formulário, para que a descrição inserida seja incluída corretamente.

## 

##  26 de Julho de 2023

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.0-230726**.

Saiba quais são os impactos:

- Esta situação permitia a alteração dos dados de acesso dos usuários pela página de Preferências. Foram realizados ajustes para sanar essa falha de segurança.

## Correções

- Correção realizada para permitir a edição de campos na página de Temas ao acessar com o usuário wcmadmin.
- Correção de inconsistência no componente de zoom, para não permitir a seleção de mais de um registro.

## 

## 18 de Julho de 2023

---

## Melhorias

### Implementada criptografia de senha no AD

Pensando em deixar a sua segurança ainda maior, foi aplicada uma atualização no sistema, que permite agora utilizar uma senha encriptada do LDAP. 

Através de uma *tag*utilizada no *domain*, será possível definir se a senha será encriptada ou não.

Para saber de todos os detalhes e como funciona esta novidade, acesse a documentação [Configuração de autenticação utilizando LDAP](https://tdn.totvs.com/x/XQVbDw). Concluída

### Melhoria no campo zoom

Sempre pensando em trazer melhorias que façam a diferença na sua rotina, trouxemos a inclusão do caractere porcento "**%**" para a pesquisa do campo zoom, a fim de melhorar a experiência e facilitar a utilização.

## Correções

- Realizada correção para que seja possível executar os comandos SQL do update em qualquer banco homologado pelo Fluig.
- Realizada correção para que seja executada a atualização da imagem docker e o sistema seja atualizado corretamente, alterando para a versão instalada.
- Realizada correção na visualização de documentos, para que ao gerar uma nova versão, seja possível visualizá-lo corretamente.
- Realizada correção para que a impressão de uma cópia controlada não apresente nenhuma inconsistência.
- Realizado ajuste para que seja possível incluir a permissão na API de resultados do processo.
- Realizada melhoria para o controle de versão no evento global.
- Correção realizada para que ao trocar o tema para o Snowflake o mesmo seja aplicado corretamente em toda a plataforma.

## 

## 11 de Julho de 2023

---

## Melhorias

### TOTVS Flows: Sua solicitação de compra facilitada

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível! 

Apresentamos o **TOTVS Flows - Solicitação de compra**. Com ele é possível abrir pedidos de compras de forma otimizada, podendo informar qual item será comprado, direcionando para as devidas aprovações da gestão e área de compras. Permitindo ainda, realizar o cadastro de itens e do centro de custo consumido no processo.

Tudo para trazer mais facilidade à sua rotina!

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Solicitação de compra** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalação - Flow de solicitação de compra](#)
- [Abertura de solicitação de compra](#)

#### Error rendering macro 'multimedia'
  com.atlassian.renderer.v2.macro.MacroException: Cannot find attachment 'instalação flow compras.mp4'

#### Error rendering macro 'multimedia'
  com.atlassian.renderer.v2.macro.MacroException: Cannot find attachment 'Vídeo iniciar flow compras 1.mp4'

### TOTVS Flows: Seu pedido de férias otimizado

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível! 

Apresentamos o **TOTVS Flows - Solicitação de férias**. Que permite aos colaboradores abrir solicitação de férias de forma otimizada, onde o colaborador poderá solicitar suas férias diretamente ao seu superior imediato, enviando a solicitação para aprovação. Passando então pela validação da área de Recursos Humanos, programando o pagamento com o financeiro e assegurando toda a documentação para assinatura.

Tudo para trazer mais facilidade à sua rotina!

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Solicitação de férias** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalação - Flow de solicitação de férias](#)
- [Abertura de solicitação de férias](#)

#### Your browser does not support the HTML5 video element

#### Error rendering macro 'multimedia'
  com.atlassian.renderer.v2.macro.MacroException: Cannot find attachment 'Vídeo abrir solicitação férias.mp4'

### Integrar o TOTVS Fluig com TOTVS iPaaS agora é possível!

Enfim, trouxemos a você essa possibilidade incrível! Agora é possível integrar o TOTVS Fluig com o TOVS iPaaS de forma fácil e rápida.

Basta seguir o passo a passo descrito na documentação oficial e pronto. Acesse agora mesmo em [Integração do TOTVS FLUIG com TOTS iPaaS](https://tdn.totvs.com/x/xuIaLg), confira todos os detalhes e fique por dentro desta novidade.

## Correções

- Realizada correção nas regras de formulário, para que ao configurar a ação "Validar" e voltar para a tela das regras já cadastradas, elas sejam mantidas para visualização.
- Realizada correção no componente de busca de documentos, para que as pastas configuradas no desenvolvimento personalizado sejam mostradas corretamente.
- Realizada correção para que os campos dos formulários sejam listados corretamente na aba "Descrição Principal dos Registros de Formulário " nas propriedades do documento.
- Ajuste na mensagem apresentada à deixando mais clara nos casos onde o usuário tenta criar páginas com códigos (id) que já existem.
- Realizada correção nos usuários da plataforma, para que seja possível bloquear um usuário sem nenhuma restrição.
- Correção realizada para que o layout Comunicativo receba as corretas configurações de permissão nas widgets.

## 

## 05 de Julho de 2023

---

## Correções

- Realizada correção nas regras de formulário, para que ao configurar a ação "Validar" e voltar para a tela das regras já cadastradas, sejam mantidas para visualização.
- Realizada correção no componente de busca de documentos, para que as pastas configuradas no desenvolvimento personalizado sejam mostradas corretamente.
- Ajuste na mensagem apresentada à deixando mais clara nos casos onde o usuário tenta criar páginas com códigos (id) que já existem.

## 

## 20 de Junho de 2023

---

## Melhorias

### TOTVS Flows: agilize seu dia a dia com processos prontos para uso!

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível!

Apresentamos o **TOTVS Flows**: vários processos pré-definidos e configurados prontos para uso. É isso mesmo, você só precisa instalar e começar a usar! Sem desenvolvimento, sem linhas de código, sem complicação.

O primeiro *flow* que já está disponível para uso é o [Abertura de chamado](/display/fluig/Flows+%7C+Abertura+de+chamado). Com ele, seus colaboradores podem abrir uma solicitação para qualquer área da empresa e ela será direcionada para a equipe que fará a tratativa correta da ocorrência. Tudo de forma automatizada e simples de usar. É mais facilidade que se diz, né?

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Abertura de chamado** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalando](#)
- [Abrindo solicitação](#)

#### Error rendering macro 'multimedia'
  com.atlassian.renderer.v2.macro.MacroException: Cannot find attachment 'Instalar e configurar flow Abertura de chamado.mp4'

#### Error rendering macro 'multimedia'
  com.atlassian.renderer.v2.macro.MacroException: Cannot find attachment 'Abertura de chamado - Abrir solicitação.mp4'

## Correções

- Realizada correção para que seja possível alterar o critério de aprovação da pasta pai, sem que seja exibida a mensagem de documento pendente.
- Realizada correção para que tamanho do índice seja respeitado no Oracle, limitado a 30 caracteres.
- Correção realizada para que seja possível sincronizar um dataset offline.

## 

## 13 de Junho de 2023

---

## Correções

- Correção realizada para que seja possível editar páginas corretamente.
- Realizada correção para que em situações onde a geração da lista mestra gere erro devido ao servidor utilizar 100% da CPU e da Memória RAM, a mensagem da inconsistência seja clara ao usuário, informando o motivo de não ter sido gerada.

## 

## 06 de Junho de 2023

---

## Correções

- Realizado ajuste para que a criação de índices na tabela documento, diminua o alto consumo na CPU.

## 

## 30 de Maio de 2023

---

## Melhorias

**Criação de índices para melhoria de performance!**

A criação de índices em tabelas ML trouxe ganhos de performance para o TOTVS Fluig. 

## Correções

- Atualizada a biblioteca e suas dependências relacionadas à exportação de dados para aumentar a segurança e confiabilidade.
- Realizada correção para que o checkbox de impressora seja removido das opções de "Configuração de relatório", onde agora é possível realizar a consulta sem apresentar o erro de impressora.
- Realizada correção na API, para que no campo "descriptionLevel" seja informada a descrição do nível adicionado.
- Realizada correção para que ao clicar em qualquer objeto dentro de um processo que não tenha ligação com regras de formulário, não seja apresentado o modal com requisições desnecessárias e que seja possível visualizar as regras de formulário mesmo que o processo não tenha sido salvo.
- Realizado ajuste para implementar a validação, a fim de identificar o usuário autenticado na plataforma ou o usuário administrador, fazendo com que o envio da URL do documento via API ocorra corretamente ao utilizar o fluxo automático.

## 

## 23 de Maio de 2023

---

## Correções

- Corrigido o recurso Permissões para exibir corretamente uma página criada ao efetuar uma busca por ela.

## 

##  16 de Maio de 2023

---

## Correções

- Criado o parâmetro takeTask para que seja possível restringir uma atividade a um usuário específico.
- Correção realizada para que o sistema faça a varredura de todos os módulos de login disponíveis dentro do domain.xml para que o processo de login no My Approval não seja afetado quando utilizado via autenticação de LDAP.
- Correção realizada para que quando uma atividade estiver em paralelo essa informação também reflita no Analytics.
- Corregida inconsistência dos dados enviados ao Analytics para que os valores sejam exibidos corretamente.
- Disponibilizado novo importador manual do Analytics. Saiba mais [aqui](https://tdn.totvs.com/x/k4_NBw).

## 

## 09 de Maio de 2023

---

## Correções

- Foi alterado o *validateUpload* para validar também o *mimetype* do conteúdo do arquivo e para remover o arquivo da pasta de *upload* caso ocorra alguma inconsistência.
- Corrigido o filtro por papel no aplicativo Approval para que as solicitações sejam filtradas e exibidas corretamente de acordo com o papel selecionado pelo usuário.
- Efetuados ajustes para não executar códigos HTML injetados na URL, aumentando a segurança e confiabilidade.
- Correção realizada para que apenas usuários com papel de administrador consigam realizar chamadas através da API de consulta de serviços.
- Correção realizada para que os campos de usuário e senha sejam apresentados corretamente no plugin Eclipse ao cadastrar serviço SOAP.

## 

## 02 de Maio de 2023

---

## Correções

- Realizada correção para que seja seja exibido no arquivo de log o tipo de instalação realizada, clássica ou *Docker*.
- Realizada correção para que seja possível atualizar o arquivo de literais sem apresentar erro no log e sem comprometer a inicialização.
- Realizada correção para que ao publicar um anexo, o usuário consiga pesquisar pelo código e nome em todas as pastas e sub-pastas em que ele tenha permissão.
- Realizada correção no sistema para que ele passe a exibir uma mensagem no log informando que o *License***Server**está desatualizado.

## 

## 25 de Abril de 2023

---

## Correções

- Ajuste realizado para que ao apresentar alguma inconsistência, o erro traga somente a informação principal e a mensagem customizada para o usuário.
- Correção realizada para que ao transferir uma solicitação que contenha regra de negócio em uma tarefa, a transferência seja realizada com sucesso.
- Correção realizada para que o nome do usuário que assumiu e movimentou a tarefa seja exibido corretamente.
- Realizada correção nos documentos, para que ao tentar editar um documento utilizando o Google drive e o documento estiver marcado para herdar herança, seja possível adicionar outros usuários como editores.
- Realizada correção para que ao filtrar as regras do formulário por atividade, seja possível visualizar corretamente todas as regras.
- Realizada correção para que os registros de uma página possam ser exibidos corretamente e a paginação seja mostrada de acordo com a quantidade solicitada por página.
- Realizada correção para que as literais de tradução sejam aplicadas corretamente em todo o painel de controle, para os três idiomas vinculados.

## 

## 18 de Abril de 2023

---

## Correções

- Correção realizada para que seja possível adicionar widgets no layout Comunicativo com usuário comum que possua permissão para editar a página.
- Realizada correção para corrigir inconsistência ao definir os grupos de segurança do arquivo, para que ao alterar o nível de segurança da pasta, os usuários e grupos sejam incluídos sem nenhuma intercorrência.
- Correção realizada para que ao acessar as propriedades do documento na aba de documentos relacionados, todas as pastas de documentos sejam apresentadas corretamente.

## 

## 11 de Abril de 2023

---

## Correções

- Correção realizada para que o conteúdo da aba da comunidade seja apresentado corretamente ao selecionar um arquivo para a publicação.
- Correção realizada para que seja possível exportar listas corretamente.
- Correção realizada para que ao utilizar o evento beforeSendNotification alterando a propriedade priority da notificação para "NONE" para que as notificações não sejam mais recebidas.
- Correção da seguinte biblioteca: Fluig API (página da API antiga): jszip 3.1.5 para 3.7.1

## 

## 04 de Abril de 2023

---

**Desativação Universal Analytics x Google Analytics 4** 

Conforme a **notícia que divulgamos******no portal de clientes, a partir de **01 de Julho de 2023** o serviço Universal Analytics será desativado e substituído pelo **Google Analytics 4**. Essa desativação fará com que os dados e métricas da sua empresa no TOTVS Fluig Plataforma deixem de ser coletados pelo Google Analytics.

Sendo necessário que uma nova propriedade do Google Analytics 4 seja criada e incluída como token no TOTVS Fluig Plataforma, para que os dados sejam coletados novamente. Recomendamos que a atualização seja feita até a data informada acima.

**Após a aplicação da correção foi possível atualizar o arquivo de literais sem que fosse apresentado erro no log e sem que a inicialização fosse comprometida.Após a aplicação da correção foi possível atualizar o arquivo de literais sem que fosse apresentado erro no log e sem que a inicialização fosse comprometida.Clique aqui** e confira como realizar essa atualização!

## Correções

- Correção realizada para que ao alterar o fuso horário a data dos documentos mantenha-se da forma correta.
- Correção realizada para que seja possível acessar o arquivo anexado ao processo quando o processo está utilizando eventos de processos e datasets.
- Correção realizada para que ao executar o fluxo automático relacionado à tarefas em atraso, o e-mail de notificação seja enviado corretamente.
- Correção realizada para que a barra de rolagem do documento seja apresentada corretamente na tela de anexos da solicitação.
- Implementada validação para identificar o usuário autenticado na plataforma ou o usuário administrador, fazendo com que o envio da URL do documento via API ocorra corretamente ao utilizar o fluxo automático.
- Correção realizada para que seja possível transferir uma solicitação ao gestor do processo quando a mesma está atribuída por campos de formulário.
- Corrigida inconsistência na transferência de pendencias onde continha documentos com dois ou mais níveis de aprovação.
- Correção realizada para ajustar o comportamento das regras de formulário abaixo:Ao excluir uma atividade que possua regras de formulário, que as regras sejam excluídas também.
- Ao filtrar as regras de formulário por atividade para que seja possível visualizar todas as regras corretamente.

- Correção realizada para que ao habilitar a opção "Utilizar logo da empresa no formulário" na configuração do formulário do processo, a logo seja apresentada corretamente no formulário.

## 

## 28 de Março de 2023

---

## Correções

- Correção realizada para que ao alterar o fuso horário a data dos documentos mantenha-se da forma correta.

## 

## 21 de Março de 2023

---

## Correções

- Corrigido o redirecionamento das opções Assinar plano e Testar gratuitamente da página Soluções para funcionarem corretamente.
- Atualização das seguintes bibliotecas:Fluig Plataforma: Underscore.js da 1.5.0 para 1.13.6
- Fluig Plataforma: moment.js da 2.29.1 para 2.29.4
- Fluig Plataforma: moment-timezone da 0.5.33 para a 0.5.41
- Fluig Plataforma: jquery-migrate da 3.4.0 para a 3.4.1
- Fluig API (página da API antiga): Bootstrap 3.3.6 para 3.4.1
- Fluig API (página da API antiga): jQuery 1.11.2 para 3.6.3
- Fluig API (página da API antiga): jszip 3.1.5 para 3.7.1

- Correção realizada para que seja possível criar um artigo corretamente em uma comunidade, em que a geração de thumbnail esteja habilitada no cadastro da empresa.
- Correção realizada para que seja possível publicar corretamente um documento como anexo em solicitações.
- Correção realizada para que o usuário que movimentar a solicitação não possua permissão no papel configurado na atividade, uma mensagem será apresentada, evitando a movimentação e a perda de relacionamento. 

## 

## 14 de Março de 2023

---

## Correções

- Correção realizada para que ao finalizar uma avaliação vinculada a um treinamento todas as informações sejam apresentadas corretamente.
- Correção realizada para que mostre apenas uma opção ou permita a criação de sub-processos mesmo tendo fluxo automático configurado.
- Realizada correção para que usuários com estado bloqueado, não consigam iniciar solicitações em um processo.
- Ajuste realizado para que a mensagem ao excluir um anexo que foi adicionado por outro usuário seja apresentada corretamente.

## 

## 07 de Março de 2023

---

## Correções

- Validação implementada evitando SQLinjections tipo based time em consultas de APIs de dataset.
- Correção realizada para que ao realizar uma publicação a plataforma busque outras comunidades corretamente para replicar a publicação.
- Correção realizada para que seja possível desabilitar o bloqueio de Clickjacking corretamente nos parâmetros da plataforma.
- Correção realizada para que um documento compartilhado externamente não fique mais disponível para acesso após sua exclusão.
- Ajuste realizado para que seja possível excluir um processo que não tenha vinculo ao processo pai e que não possua solicitações iniciadas. Ajuste realizado também nas mensagens apresentadas.
- Correção realizada para que somente os processos ativos sejam apresentados na central de diagnóstico.

## 

## 28 de Fevereiro de 2023 

---

## Correções

- Correção realizada para que os dados do formulário e a movimentação de solicitação em bloco sejam apresentados corretamente.

## 

##  22 de Fevereiro de 2023

---

## Melhorias

**Aba Informações mais completa**

Disponibilizamos na aba Informações o número da solicitação e o código do processo. Facilitando a rápida identificação do processo. Confira abaixo como ficou o novo layout da aba Informações.

- [Aba Informações](#)

![](/download/attachments/695600349/Aba%20Informa%C3%A7%C3%B5es.png?version=1&modificationDate=1677176402737&api=v2)

## Correções

- Correção realizada para o certificado seja apresentado corretamente, possibilitando a leitura do mesmo.
- Realizada correção no histórico da solicitação, para que os comentários realizados estejam alinhados corretamente.

## 

##  14 de Fevereiro de 2023 

---

## Melhorias

**Geração de thumbnails no Fluig Plataforma**

A partir da release **1.8.0-230214** a geração de thumbnails virá habilitada por padrão na plataforma para as novas empresas criadas. 

Essa ação garantirá mais praticidade, pois não será mais necessário habilitar esse recurso manualmente, facilitando assim a identificação dos vídeos, tanto na plataforma quanto no aplicativo My Fluig.

**Tela de consulta de documentos relacionados atualizada!**

Disponibilizamos a partir dessa release a tela de consulta de documentos relacionados atualizada! Além de modernizar o visual, também adicionamos informações importantes na hora da consulta para relacionar um documento. 

A coluna**Descrição** que você já conhecia virou **Título**, mantemos as colunas **Código** e **Versão**, e adicionamos as colunas **Autor** e **Publicador**, dessa forma você consulta informações mais detalhadas sobre o documento a ser relacionado.

Mantemos também o campo de busca para facilitar a localização do documento e o filtro, podendo filtrar pelo **código** ou **título** do documento.

- [Consulta de documentos relacionados](#)

![](/download/attachments/695600349/Nova%20tela%20documentos%20relacionados.gif?version=1&modificationDate=1676396654147&api=v2)

Para saber mais acesse o help [Plataforma | Documento externo](https://tdn.totvs.com/x/JvHuDQ) na seção **Incluir documento externo** passo **06**.

## Correções

- Corrigido o envio das respostas de um formulário público quando é utilizado o Forms Beta integrado ao TOTVS Fluig Plataforma e o formulário é respondido por um usuário comum que está autenticado na plataforma.
- Criada nova API DELETE para remover página. /page-management/api/v2/pages/{page_code}.
- Criada nova API POST que irá criar uma página cópia de uma já existente. /page-management/api/v2/pages/{code}/duplicate.
- Correção realizada para que o nome dos usuários que incluíram anexos na solicitação sejam apresentados corretamente na aba de anexos.
- Correção realizada para que ao incluir um anexo via consulta de solicitações, o arquivo seja gravado na primeira atividade do paralelismo. Além disso foi melhorada a mensagem para tornar a ação mais clara.
- Correção realizada para que seja possível atualizar o Fluig Plataforma de versões 1.7.1 para a 1.8.0 em sistemas operacionais Linux.
- Correção realizada para que seja exibido o histórico completo de movimentações de solicitações.

## 

## 07 de Fevereiro de 2023

---

## Correções

- Ajuste realizado para que determinadas informações em log não ultrapassagem 2.000 caracteres para que não haja estouro de memória.
- Correção realizada para que os modais de novidades e de tela de login sejam apresentadas de formas responsivas.
- Correção realizada na ação de seguir usuários para que as permissões de cada requisição sejam respeitadas segundo a permissão do próprio usuário.
- Ajuste realizado para que ao acessar uma página via código na URL, seja apresentado o indicativo "Minhas páginas" na mensagem do navegador.
- Correção realizada para que o ícone de lupa seja apresentado em atividades que possuam atribuição por grupo e possuem descrição longa para que seja possível visualizar os usuários do grupo.

## 

## 31 de Janeiro de 2023

---

## Correções

- Criado novo evento global **validateUpload** que será executado após o upload de arquivos via API, Webservices e FTP, tendo o objetivo de auxiliar na validação de arquivos (ex: validar as extensões permitidas).
- Vulnerabilidade corrigida na visualização de documentos.

## 

## 25 de Janeiro de 2023

---

## Correções

- Implementada validação extra ao ler o dataset.documento. Grandes quantidades de registros podem causar instabilidade no momento de envio das métricas.
- Correção realizada para que seja possível realizar o *deploy* de *widgets* via Eclipse.
- Correção realizada para que documentos avançados HTML sejam exibidos corretamente.

## 

##  17 de Janeiro de 2023 

---

## Melhorias

**Listagem de páginas de cara nova!**

Preparamos uma nova experiência em listagem de páginas no TOTVS Fluig Plataforma. Confira abaixo todas as novidades!

**Visual moderno**

A tela de listagem de páginas está com um visual moderno e intuitivo fazendo com que fique muito mais fácil encontrar suas páginas.

- [Nova listagem de páginas](#)

![](/download/attachments/695600349/Listagem%20de%20p%C3%A1ginas%20%28nova%20listagem%29.PNG?version=1&modificationDate=1673985711397&api=v2)

**Seções Publicadas e Rascunhos**

Criamos a separação entre páginas já publicadas e páginas que estão em rascunho, através das seções **Publicadas** e **Rascunhos**, dessa forma você sabe rapidamente o status de cada página e as encontra de forma mais rápida também.

- [Separação de páginas por status](#)

![](/download/attachments/695600349/sess%C3%B5es%20publicadas%20e%20rascunhos.PNG?version=1&modificationDate=1673986458413&api=v2)

**Página pública ou privada?**

Agora você sabe de forma muito mais prática se a página é pública ou privada, basta localizar o ícone ao lado direito da coluna versão. O ícone de globo ![](/download/attachments/695600349/flaticon-earth.png?version=1&modificationDate=1673986609453&api=v2) representa as páginas públicas enquanto o ícone de cadeado ![](/download/attachments/695600349/flaticon-lock.png?version=1&modificationDate=1673986662120&api=v2) representa as páginas privadas.

- [Identifique de forma rápida](#)

![](/download/attachments/695600349/p%C3%A1gina%20publica%20e%20privada.PNG?version=1&modificationDate=1673986541320&api=v2)

**Novas colunas informativas**

Criamos novas colunas trazendo informações importantes sobre as páginas, como a última vez em que foi editada e por quem, além da versão ativa da página.

- [Novas informações](#)

![](/download/attachments/695600349/novas%20colunas%20da%20listagem%20de%20p%C3%A1ginas.PNG?version=1&modificationDate=1673987027277&api=v2)

**Quer ver a última versão de uma página em rascunho?**

Não tem problema! Na seção **Rascunhos**, através do botão de mais ações o recurso **Visualizar última versão**, possibilita essa ação, que leva você à última versão ativa da página.

- [Veja a última versão publicada de uma página em rascunho](#)

![](/download/attachments/695600349/visualizar%20ultima%20vers%C3%A3o.png?version=1&modificationDate=1673987272493&api=v2)

**Informações da página**

Agora você também encontra todas as informações da página de forma rápida. Basta acessar o botão de mais ações e ir no recurso **Informações**. Você será redirecionado à página de informações, contendo o nome da página, descrição e seu identificador único. 

- [Veja informações rapidamente](#)

![](/download/attachments/695600349/informa%C3%A7%C3%B5es%20da%20p%C3%A1gina.PNG?version=1&modificationDate=1673987601553&api=v2)

**Configurações da página**

As configurações da página também podem ser acessadas e alteradas de forma rápida, através do recurso **Configurações**. 

Você pode alterar a privacidade da página entre pública ou privada, personalizar URL para redirecionamento interno, localizar e associar à uma página raiz, e habilitar opções que você já conhece como habilitar sub-páginas, exibir sub-páginas no sub-menu, páginas agrupadoras e página *pathparam*.

- [Acesse configurações rapidamente](#)

![](/download/attachments/695600349/configura%C3%A7%C3%B5es%20da%20p%C3%A1gina.PNG?version=1&modificationDate=1673987745423&api=v2)

Para saber mais acesse [Plataforma | Minhas páginas](https://tdn.totvs.com/x/04L5DQ).

## Correções

- Correção realizada para que o Fluig realize o reset do arquivo de log diariamente, evitando que arquivos alcancem tamanhos muito grandes.

## 

## 10 de Janeiro de 2023

---

## Correções

- Criada nova API para identificar se há mudança de tema em andamento. O caminho da API é /v2/themes/theme-change/blocked.
- Efetuados ajustes no Painel de controle do wcmAdmin para permitir salvar as alterações feitas nas configurações gerais ou informar caso exista alguma inconsistência.
- Criada nova API para listar comentários de documentos e pastas. A API pode ser encontrada em: /content-management/api/v2/documents/{documentId}/comments - GET
- Criada nova API para realizar comentários em documentos e pastas. A API pode ser encontrada em: /content-management/api/v2/documents/comment - POST
- Correção realizada para que ao cadastrar um mecanismo de atribuição na aba Segurança Anexos, a solicitação do processo seja iniciada corretamente.
- Correção relacionada a permissão de APIs e Webservices.
- Correção realizada para que seja possível consumir outro formulário através de dataset em evento intermediário.
- Correção realizada para que seja possível obter a URL de anexos de documentos das solicitações via API.
- Realizada correção onde o formulário pai x filho estava gravando informações na ordem incorreta em bases Oracle.
- Criada API para favoritar pastas e documentos. Ela pode ser encontrada em: /content-management/api/v2/documents/{documentId}/favorite

## 

## 22 de Dezembro de 2022 

---

## Melhorias

**Chegou uma nova experiência em solicitações** 

A partir da atualização 1.8.0-221222 do TOTVS Fluig Plataforma, melhoramos a experiência das solicitações de processos.

Modernizamos a abertura e interação com as solicitações ficando muito mais intuitivo essa movimentação, disponibilizamos novas abas e melhor disposição das informações facilitando o uso. 

A aba **Formulário** foi feita exclusivamente para que o formulário seja exibido da melhor forma possível, pois aumentamos a área de exibição dele por meio da aba, assim você visualiza os campos com mais facilidade.

Já na aba **Informações** você pode consultar em qual atividade a solicitação se encontra, assim como visualizar o fluxograma da solicitação e exportar a imagem do fluxograma por meio do recurso Visualizar fluxograma. Além de poder consultar o responsável pela solicitação e demais informações importantes.

A aba que você conhecia como **Complementos**, virou **Histórico**. É nela que você consulta todas as movimentações que a solicitação teve, assim como os comentários, que também passou por uma melhoria e agora se encontra no topo da página, evidenciando o recurso. Além disso, pode consultar também o prazo para a resolução da solicitação. 

A aba **Anexos** também passou por melhorias, as informações são apresentadas em modo de tabela, ou seja, uma abaixo da outra, facilitando sua visualização. Além disso, as opções de uploads foram agrupadas no botão Adicionar, e você consegue saber em qual atividade o anexo foi incluído.

Gostou da novidade? Atualize agora mesmo sua plataforma e garanta uma nova experiência na movimentação de solicitações.

- [Aba Formulário](#)
- [Aba Informações](#)
- [Aba Histórico](#)
- [Aba Anexos](#)

![](/download/attachments/695600349/aba-formulario.gif?version=1&modificationDate=1671901835753&api=v2)

![](/download/attachments/695600349/aba-informacoes.gif?version=1&modificationDate=1671901947107&api=v2)

![](/download/attachments/695600349/aba-historico.gif?version=1&modificationDate=1671902016983&api=v2)

![](/download/attachments/695600349/aba-anexo.gif?version=1&modificationDate=1671902084277&api=v2)

Para saber mais detalhes acesse a nossa documentação [Plataforma | Iniciar solicitação](https://tdn.totvs.com/x/VfHuDQ).

## Correções

- Melhoria das mensagens apresentadas sobre a expiração do ambiente Fluig, tornando-a mais clara para os usuários, informando que a release (versão) do Fluig está desatualizada.
- Vulnerabilidade corrigida na visualização de documentos.
- Validação implementado para que não ocorra duplicidade em índices já existentes.
- Correção realizada para que seja possível editar documentos em *check-out* corretamente.
- Vulnerabilidade de informações de log corrigida.

## 

## 13 de Dezembro de 2022

---

## Correções

- Melhoria realizada para disponibilizar mensagens sobre a troca de tema na plataforma. Avisando quando há uma troca de tema em andamento e quando a mesma foi concluída.
- Atualização da biblioteca commons-io para a versão 2.7 fazendo com que a inconsistência que removia a biblioteca não ocorra mais.
- Correção realizada para que não seja possível incluir grupos que possuam conexões interdependentes entre si, pois essa situação estava gerando a inconsistência.
- Desenvolvida API para favoritar comunidades.

## 

##  06 de Dezembro de 2022

---

## Correções

- Criação de diversos índices para bancos de dados homologados, principalmente para o banco Microsoft SQL Server. Melhorando a performance da plataforma.
- Correção realizada para que seja possível atualizar o Fluig corretamente sendo executada a inicialização dos serviços dentro do tempo de *timeout* padrão da plataforma.
- Modernizada a tela de documentos relacionados para facilitar a identificação de cada documento. Implementado também um campo de busca para localizar o documento com mais facilidade.

## 

##  29 de Novembro de 2022 

---

## Correções

- Correção realizada para que ocorra validação nos métodos que possuem permissão para que apenas o usuário configurado consiga realizar o acesso, sendo que para usuários administradores o acesso não possui restrição.
- Ajuste realizado para que não seja possível inserir conteúdos HTML nos campos de Busca da plataforma.
- Ajuste realizado ao conceder permissão de modificação para um grupo para que seja possível fazer o *check-out* de um documento vindo de um usuário do grupo.
- Melhorias de segurança na plataforma para que sejam retornadas somente informações do usuário conectado, evitando que seja possível acessar informações de outros usuários.
- Correção realizada para que ao acessar uma página pública estando autenticado que a mesma não perca os parâmetros definidos.

## 

## 22 de Novembro de 2022 

---

## Melhorias

**Mais controle nas versões de documentos!**

Melhoramos o recurso Marca d’água e a partir de agora você poderá utilizá-la em versões antigas dos seus documentos, indicando que estas versões são obsoletas.

Isso garante que o controle de versões fique sempre em dia, facilitando no momento de auditorias, por exemplo.

No item Parâmetros do painel de controle, você pode incluir uma marca d’água nas versões obsoletas dos documentos no quadro **Marca d’água em versões anteriores**, selecionando o item **Habilita marca d’água em versões anteriores**.

Basta utilizar uma marca já cadastrada na plataforma ou adicionar uma nova marca que identifique os documentos obsoletos.

- [Habilita marca d'água em versões anteriores](#)

![](/download/attachments/695600349/marca%20obsoleta.png?version=1&modificationDate=1669054595497&api=v2)

****

Para saber mais acesse nossa documentação de [Parâmetros](https://tdn.totvs.com/x/goH5DQ).

**Nova tela de Marca d’água e pré-visualização**

Ao adicionar uma nova marca d’água você consegue pré-visualizar como essa marca irá se comportar no documento, podendo definir sua posição, alinhamento, fonte, tamanho da fonte, cor e transparência do texto no documento. 

Assim você tem marcas personalizadas para cada tipo de documento e que são salvas respeitando as configurações definidas no momento do cadastro, garantindo a correta identificação de cada documento e suas versões. 

Todos os documentos vigentes e obsoletos que possuem uma marca cadastrada irão recebê-la no momento da impressão.

- [Pré-visualização Marca d'água](#)

![](/download/attachments/695600349/Marca%20d%27%C3%A1gua%20pr%C3%A9-visualiza%C3%A7%C3%A3o.gif?version=1&modificationDate=1669055873913&api=v2)

Para saber mais acesse a nossa documentação de [Marca d'água](https://tdn.totvs.com/x/BoH5DQ).

## Correções

- Correção do comportamento do indicativo de exibição dos caracteres na tela de cadastro de dados adicionais da empresa. Agora ao apresentar o ícone de cadeado fechado os caracteres são ocultado e quando está aberto os caracteres são exibidos.
- Correção realizada para que ao utilizar hAPI.getChildrenIndexes no banco de dados Oracle o número de registros criados na tabela seja retornado corretamente.
- Realizada correção onde ao utilizar o hAPI.setCardValue no evento beforeStateEntry, os dados estavam sendo gravados em índices errados.
- Criado dois novos parâmetros WKCurrentMovto e WKActualThread para que os valores sejam informados corretamente. O método hAPI.getActualThread foi depreciado e no lugar recomendamos a utilização dos novos parâmetros mencionados.

## 

## 18 de Novembro de 2022

---

## Correções

- Correção realizada para que seja possível utilizar *https* com *offset* colocando diretamente o valor da porta sem precisar considerar o valor do offset pois ao salvar as configurações aplicadas o sistema vai capturar o valor do offset subtraindo o valor da porta digitada.
- Correção da inconsistência que ocasionava loading infinito na página de Central de tarefas. 

## 

## 08 de Novembro de 2022 

---

## Melhorias

**Mais uma ação na responsividade da plataforma**

Pensando em incentivar cada vez mais o  uso do novo tema responsivo que disponibilizamos na [release 1.8 - Mist](https://tdn.totvs.com/x/T5iWK), não teremos mais a opção de alternar entre os temas clássico e snowflake através do usuário wcmadmin. Através do wcmadmim é possível somente personalizar o tema, alterando imagens e cores.

Mas fique tranquilo, o tema ainda poderá ser trocado em outras empresas com o usuário administrador quando houver necessidade.

## Correções

- Correção realizada para que seja possível incluir mais de um registro de formulário por vez quando utilizado com banco de dados Oracle.
- Correção realizada na inconsistência apresentada ao consultar, criar formulário com mais de 1.000 registros.
- Correção realizada para que ao acessar o link de redefinição de senha através do navegador mobile os campos para redefinir a senha sejam apresentados corretamente em casos onde possui customlogin configurado.
- Correção realizada para que o *pop up* de notificações da plataforma seja aberto corretamente não cobrindo o conteúdo da timeline.
- Correção realizada para que ao acessar um link a partir da home do aplicativo o mesmo abra corretamente. Melhora da performance de carregamento da home no aplicativo My Fluig para iOS.

## 

## 01 de Novembro de 2022 

---

## Correções

- Criava nova API para a criação de pastas. A API pode ser acessa em {ambiente-fluig}/content-management/api/v2/folders/{parentId}.
- Correção no controle de licenças para as modalidades Intera e Corporativo.
- Correção realizada para respeitar o papel selecionado no *checkbox*. Não selecionando mais todos os papéis recém adicionados para o usuário.
- Melhoria de performance em formulários com muitas versões solucionando a inconsistência de lentidão.
- Correção realizada para que um documento seja enviado corretamente para aprovação por um usuário com permissão total na pasta.
- Correção realizada para que ao fazer o deploy do componente da Digte a home do TOTVS Fluig não seja removida.

## 

## 25 de Outubro de 2022 

---

## Correções

- Ajuste realizado para que seja possível fazer o download da versão vigente de um documento em aprovação.
- Ajuste realizado na verificação de versão da plataforma Fluig tornando-a independente do arquivo version.xml em situações onde a plataforma é utilizada em ambientes Fluig_RealTime dedicado.

## 

## 18 de Outubro de 2022 

---

## Correções

- Ajuste realizado para que seja possível abrir documentos quando utiliza-se proxy.
- Correção realizada para que seja possível anular versões de questões no LMS corretamente.

## 

## 11 de Outubro de 2022 

---

## Correções

- Resolvida a lentidão durante o uso de documentos na plataforma.
- Correção realizada para que seja possível encaminhar uma solicitação para um *fork* quando utilizado o mecanismo de atribuição por grupo.

## 

## 04 de Outubro de 2022 

---

## Melhorias

**Homologação SQL Server 2019**

A partir da atualização 1.8.0-221004 o TOTVS Fluig Plataforma passa a suportar o banco de dados SQL Server 2019. 

Fizemos essa ação, pois [conforme o comunicado disponibilizado pela Microsoft](https://learn.microsoft.com/pt-br/lifecycle/products/sql-server-2017) o suporte do SQL Server 2017 será encerrado em breve.

Essa ação é importante pois, além de manter a plataforma compatível com a versão mais recente do SQL Server, esta versão traz grandes melhorias de segurança, que atendem a requisitos da LGPD, e melhor desempenho

Confira a [notícia](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,04/10/2022,-Homologa%C3%A7%C3%A3o%20SQL%20Server) que liberamos no portal de clientes. Para saber mais detalhes sobre as novidades do SQL Server 2019 [clique aqui](https://learn.microsoft.com/pt-br/sql/sql-server/what-s-new-in-sql-server-2019?view=sql-server-ver16).

Acesse nossa [Matriz de portabilidade](https://tdn.totvs.com/x/_ApbB).

![](/download/attachments/695600349/SQL%20SERVER%202019.jpg?version=2&modificationDate=1664465265040&api=v2)

**Homologação do Microsoft Edge**

Com a descontinuação do Microsoft Internet Explorer [informado neste comunicado](https://learn.microsoft.com/pt-br/lifecycle/announcements/internet-explorer-11-end-of-support), a partir da atualização 1.8.0-221004 do TOTVS Fluig Plataforma, o navegador Microsoft Edge passa a ser homologado.

Acesse nossa [Matriz de portabilidade](https://tdn.totvs.com/x/_ApbB).

![](/download/attachments/695600349/Microsoft%20EDGE.png?version=1&modificationDate=1664475267667&api=v2)

## Correções

- Ajustes realizados ao cadastrar e salvar [dados adicionais](/download/attachments/695600349/Gerenciar%20dados%20adicionais..png?version=1&modificationDate=1663616308107&api=v2) de um usuário com os valores (.) ou (,), para que as informações sejam apresentadas corretamente na plataforma.
- Correção realizada para que o filtro se mantenha selecionado ao editar as propriedades de um documento na central de tarefas > [meus documentos](https://tdn.totvs.com/x/WPLuDQ).
- Corrigido o permissionamento da API getAvailableDatasets
- Melhoria na mensagem apresentada ao tentar exportar um formulário com mais de 1.000 (mil) campos. Nesse caso a mensagem informa ao usuário que é necessário uma revisão ou que modifique a [forma de armazenamento](https://tdn.totvs.com/x/phSWDg), pois o banco tem um limite de aceite de 1.000 (mil) campos.

## 

## 28 de Setembro de 2022 

---

## Correções

- Corrigida a inconsistência ao movimentar uma atividade para o gestor do processo usando o mecanismo de atribuição por grupo.
- Realizado ajuste no *update*que causava o *timeout*ao iniciar o Fluig após a atualização para a 1.8.0.
- Ajustes realizados para que os serviços do tipo REST do TOTVS Fluig plataforma possam ser autenticados corretamente em um servidor de [proxy](https://tdn.totvs.com/x/TwBlDw).

## 

## 20 de Setembro de 2022 

---

## Correções

- Corrigida inconsistência ao realizar o [convite de usuários](https://tdn.totvs.com/x/HIL5DQ)na plataforma, para que a data do convite seja apresentada corretamente.
- Corrigida inconsistência ao visualizar uma solicitação de atividades paralelas por meio do aplicativo My Fluig, para que seja demonstrado corretamente o andamento das atividades.

## 

## 13 de Setembro de 2022 

---

## Correções 

- Corrigida inconsistência ao exportar um processo via Eclipse, para que o usuário consiga efetuar a exportação corretamente na plataforma.
- Corrigida inconsistência ao [transferir pendências](https://tdn.totvs.com/x/lIH5DQ) na plataforma, para que seja possível localizar um usuário ao acionar a lupa.

## 

## 06 de Setembro de 2022 

---

## Correções

- Corrigida inconsistência ao criar um dataset e habilitar a [sincronização](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013#Sincroniza%C3%A7%C3%A3odedatasets-Configurandoasincroniza%C3%A7%C3%A3odedatasets)dos dados, para que sejam retornados corretamente ao servidor do TOTVS Fluig Plataforma.
- Ajustes realizados ao efetuar o *login *via web ou dispositivos mobile no TOTVS Fluig Plataforma, para que quando o usuário inserir credenciais inválidas não gere excesso de informações gravadas no log da aplicação.
- Inserido a [coluna *E-mail*](/download/attachments/695600349/Coluna%20e-mail.JPG?version=1&modificationDate=1661975442810&api=v2) ao selecionar um usuário na aba segurança das pastas na plataforma, para que seja possível realizar o filtro de um usuário por meio do endereço eletrônico.
- Ajuste realizado para otimização de consultas que estavam impactando a performance do banco de dados.
- Correção realizada para que seja possível a importação e exportação de um processo sem configuração no Eclipse.

## 

## 31 de Agosto de 2022 

---

## Correções

- Corrigida inconsistência ao [realizar o filtro](https://tdn.totvs.com/download/attachments/243008857/Selecione%20um%20usu%C3%A1rio.JPG?version=1&modificationDate=1661961027442&api=v2) por e-mail de um usuário na [segurança para pastas ou para documento](https://tdn.totvs.com/x/WQV8Dg) na plataforma. 
- Ajustes realizados ao efetuar a ação de arrastar e soltar um arquivo (*drag and drop*) na navegação de documentos da plataforma, para que a mensagem no quadro "*Solte os seus arquivos aqu*i" seja apresentada corretamente ao usuário.

## 

## 30 de Agosto de 2022 

---

## Correções

- Ajustes realizados, para que ao movimentar uma solicitação para o início (retorno) a mesma seja realizada corretamente na plataforma e *mobile*.
- Corrigida inconsistência ao visualizar um arquivo no formato *.zip* na navegação de documentos, para que o usuário com permissão de visualização do arquivo, utilize a opção de [download](https://jiraproducao.totvs.com.br/secure/attachment/1553755/valida%C3%A7%C3%A3o.png)do documento.
- Correção realizada para que ao consultar solicitações através do filtro "que participei" somente as solicitações em que o usuário participou sejam apresentadas. 
- Ajustes realizados para que o usuário possa [efetuar *download *de pasta ou documento](https://tdn.totvs.com/x/McgGDg) por meio da [Notificação recebida](https://tdn.totvs.com/download/attachments/235325489/Image%20003.png?version=1&modificationDate=1594125465267&api=v2) na plataforma.

## 

## 23 de Agosto de 2022 

---

## Correções

- Ajuste realizado ao fazer *check-out* de um documento para que seja possível atualizá-lo ou fazer o *upload* do mesmo.
- Correção realizada para que ao acionar Descartar na solicitação, a mesma seja descartada corretamente.
- Corrigida inconsistência na ativação das notificações por e-mail, para que os parâmetros de notificações sejam respeitados ao alterar ou criar um novo usuário na plataforma.
- Correção realizada para que seja possível assumir e movimentar uma solicitação corretamente quando a mesma possuir [*gateway* paralelo](https://tdn.totvs.com/display/fluig/Gateways#Gateways-GatewayParalelo) configurado.
- Ajustes realizados para que seja possível a visualização de todos os campos descritores na Central de Tarefas ao editar um formulário na plataforma.
- Ajustes realizados no método de sincronização do dataset para que os dados sejam atualizados corretamente, sem o acúmulo das tabelas temporárias.
- Corrigida inconsistência no layout da aba detalhes e complementos da solicitação para que a página seja apresentada corretamente ao usuário.
- Realizada correção no descarte de imagens de artigos e em suas alterações em rascunhos, para que não ocorra mais comportamentos errôneos.
- Ajustada validação do campo "matrícula" de um usuário para garantir que o botão para cancelar uma solicitação seja exibido corretamente.
- Ajustes realizado para que não seja permitido alterar valores quando o campo zoom estiver desabilitado em um formulário.
- Ajuste realizado para que o SCORM dos treinamentos sejam calculados corretamente.
- Ajustes realizados para que quando o usuário possuir uma [marca d´agua](https://tdn.totvs.com/x/BoH5DQ) cadastrada, o botão para excluí-la fique desabilitado.
- Ajustes realizados no método de sincronização do dataset para que os dados sejam atualizados corretamente, sem o acúmulo das tabelas temporárias.

## 

## 16 de Agosto de 2022 

---

## Correções

- Correção realizada para que seja possível adicionar *widgets* em *slots* corretamente.
- Correção realizada na API de *timeline*para que as *timelines*de comunidades sejam apresentadas corretamente em dispositivos *mobile*.
- Ajustes realizados na página de solicitações para que o formulário da solicitação mantenha seu espaçamento correto em resoluções menores ou iguais a 1366x768.
- Inconsistência no recurso [Compactar solicitações finalizadas](https://tdn.totvs.com/x/W4H5DQ) resolvida, para que guarde somente a última versão dos registros de formulários.
- Ajustes realizados ao criar um registro de formulário na plataforma via API sem enviar valor no campo inputFields, para que o mesmo funcione corretamente.
- Ajuste realizado para que o SCORM dos treinamentos sejam calculados corretamente.

## 

## 02 de Agosto de 2022 

---

## Correções

- Ajuste realizado para que não haja a necessidade de passar a tag OauthDTO no request do objeto. Dessa forma a integração do Fluig com o Protheus passará a funcionar corretamente.
- Corrigida inconsistência ao copiar o link de um documento que está em aprovação ou revisão, para que seja gerado o link da versão ativa do documento. 
- Correção realizada ao visualizar documentos favoritos expirados na plataforma, para que os mesmos sejam apresentados como expirados após a data de expiração.
- Corrigida inconsistência ao realizar a busca por documentos na lixeira, para que os mesmos sejam retornados sem a necessidade de preencher os campos data inicial e data final.
- Corrigida inconsistência ao criar um [documento externo](https://tdn.totvs.com/x/JvHuDQ) para que seja possível a utilização de uma URL do TOTVS Fluig Plataforma.
- Corrigida inconsistência ao acessar um documento, para que as opções parar de notificar e notificar sejam exibidas corretamente na plataforma.

##  

## 27 de Julho de 2022

---

**Mais agilidade em processos**
Para deixar o seu dia a dia com BPM mais ágil, otimizamos internamente para que as consultas sejam mais rápidas, incluindo:

- Consulta de solicitações
- Busca de atividades que o usuário participou
- Central de Tarefas: listagem de tarefas em pool - grupo e papel
- Central de Tarefas: movimentação como substituto e gestor
- Central de Tarefas: filtros "que participei", "minhas solicitações", "que participei como gestor/substituto"

## Correções

- Ajuste realizado para que seja possível criar publicações com links extensos e superiores a 255 caracteres.
- Ajustes realizados nas configurações do proxy na plataforma, para que as mesmas sejam devidamente utilizadas ao executar os *webservices*quando o TOTVS Identity estiver habilitado.
- Correção realizada na central de tarefas em [documentos a aprovar](https://tdn.totvs.com/x/XvLuDQ), para que os mesmos sigam o fluxo corretamente após o usuário aprová-los ou reprová-los. 

## 

## 19 de Julho de 2022

---

**Novidades na página "Soluções"!**

A partir de agora utilizar o menu "Soluções" para acessar os aplicativos No-Code ficou muito mais fácil e interativo. Isso porque agora é possível visualizar nossas ofertas diretamente de dentro da página. Isso facilitará ainda mais a maneira como os usuários visualizam os planos, sendo direcionados automaticamente para a TOTVS Store para concluir a compra. 

Além disso, a página de soluções conta agora com diferentes comportamentos de acordo com o perfil do usuário, deixando assim os acessos mais fluidos e com manuseio facilitado, permitindo que os usuários acessem os apps incluídos no seu plano¹. 

Lembrando que a ativação gratuita do plano Essentials está inclusa apenas para clientes que adquiram o Fluig Plataforma até junho/2022. 

Aproveite todos os benefícios e venha conhecer a página remodelada e repleta de opções para tornar a sua rotina de trabalho mais produtiva e completa.

Para cenários onde a plataforma está com Identity integrado e com o No-Code habilitado.

![](/download/attachments/695600349/solucoes%20totvs%20fluig.PNG?version=1&modificationDate=1658257119087&api=v2)

Para saber o passo a passo dessas novidades, como ativar sua oferta e criar sua conta *trial* gratuita, acesse nossas documentações completas através dos links a seguir:

[Plataforma - Soluções](https://tdn.totvs.com/x/CL-SGQ)

[Ativação da oferta TOTVS Fluig No-Code](https://tdn.totvs.com/pages/viewpage.action?pageId=578055521)

[No-Code | Criar conta gratuita](https://tdn.totvs.com/display/fluig/No-Code+%7C+Criar+conta+gratuita)

## Correções

- Correção realizada para que a indexação automática de documentos funcione corretamente, para que ao mover um documento de uma pasta para outra o mesmo seja apresentado na pasta correta.
- Ajustes realizados na Impressão de cópia controlada, para que seja possível inserir variáveis em qualquer coluna ou planilha, em um documento aberto na ferramenta [Microsoft Excel.](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071#Impress%C3%A3odec%C3%B3piacontrolada-MicrosoftExcel) 
- Ajustes realizados para que o usuário seja redirecionado para a [Central de Tarefas](/download/attachments/695600349/Central%20de%20tarefas.JPG?version=1&modificationDate=1657919129283&api=v2) ao realizar *check-out*do documento.

## 

## 12 de Julho de 2022

---

## Correções

- Ajustes realizados reforçando a segurança no TOTVS Fluig Plataforma.
- Criado método "[getRoles](https://tdn.totvs.com/pages/viewpage.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-M%C3%A9todos.6)" para que sejam obtidos os papéis vinculados ao usuário na plataforma.
- Corrigida inconsistência na emissão da mensagem de alerta, ao copiar o link de um documento para a área de transferência.

##  

## 05 de Julho de 2022

---

## Correções

- Correção realizada ao consultar um webservice com autenticação do tipo basic para solucionar a inconsistência ao utilizar o serviço na consulta de datasets da plataforma.
- Correção realizada para que seja possível acessar a página de Operações no painel de controle e melhorada a mensagem de erro deixando mais claro para o usuário o que ocorreu. 
- Ajustes realizados para que o gestor de um sub-processo consiga movimentar a solicitação normalmente na plataforma.
- Corrigida inconsistência ao criar conteúdo no LMS, para que seja possível executar o conteúdo SCORM sem interrupções em tela.
- Correção realizada para que seja possível realizar alterações nos filtros que possuem ordenação na Central de tarefas. 
- Correção realizada para que seja possível inserir pré-requisitos corretamente no tópico desejado. 
- Correção realizada para que a marca d'água seja apresentada com a pontuação correta da versão/revisão no momento da impressão.

## 

## 28 de Junho de 2022

---

## Correções

- Corrigida inconsistência ao utilizar a opção de filtrar pelo nome dos documentos na plataforma.
- Corrigida inconsistência ao selecionar uma pasta na *widget*de *slideshow*para que os botões de ação sejam apresentados corretamente.
- Correção realizada ao solicitar participação em uma comunidade pública e privada na plataforma, para que o usuário participe somente após a confirmação da solicitação. 
- Correção realizada para que a ordenação definida na widget Timeline seja respeitada no My Fluig apresentando as publicações na ordem correta.
- Realizada correção para que seja possível a correta visualização, ao abrir um documento pelo ECM dentro de uma atividade de serviço.
- Realizado ajustes nas setas retroceder e avançar do navegador para que seja possível navegar nos diretórios do Fluig por nível seguindo a hierarquia dos diretórios acessados.
- Correção realizada ao exportar um processo na plataforma, para que ao acionar a lupa seja possível visualizar todos os usuários da atividade.

##  

## 22 de Junho de 2022

---

## Correções

- Corrigida inconsistência ao realizar o download de arquivos thumbnails quando a API Thumbnail Fluig estiver habilitada na plataforma.
- Realizado ajustes reforçando a segurança na integração da widget Analytics no TOTVS Fluig Plataforma.
- Corrigida inconsistência para que as publicações em comunidades sejam apresentadas corretamente na timeline do TOTVS Fluig Plataforma.
- Corrigida inconsistência na [configuração de envio de e-mail](https://tdn.totvs.com/x/CAZbDw), para que as notificações da plataforma sejam enviadas corretamente. 
- Corrigida inconsistência para que o registro do valor/hora do usuário seja apresentado corretamente no TOTVS Fluig plataforma.
- Ajustes realizados para que ao definir um [controle de cotas](https://tdn.totvs.com/x/BbYGDg) o mesmo seja aplicado também nas páginas filhas.
- Ajustes realizados para que palavras chaves no log da [solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=644018092#Plataforma%E2%9D%99CentraldeDiagn%C3%B3sticos-Solicita%C3%A7%C3%B5es) sejam destacadas, facilitando a leitura dos erros pelos usuários.
- Corrigida inconsistência ao importar documentos atualizados no Fluig para que o conteúdo seja exibido corretamente na plataforma. 
- Corrigida inconsistência ao incluir um arquivo na pasta *check-out,* para que seja permitido realizar upload somente de documentos que estão em *check-out.*
- Corrigida inconsistência no [agendador de tarefas,](https://tdn.totvs.com/x/W4H5DQ) para que o último registro vinculado à um processo não seja excluído do TOTVS Fluig Plataforma.
- Corrigida inconsistência para que seja permitido a [movimentação em bloco](https://tdn.totvs.com/pages/viewpage.action?pageId=233763380#Plataforma%E2%9D%99Tarefasaconcluir-Movimenta%C3%A7%C3%A3oemBloco) das solicitações na plataforma, com isso, os anexos serão publicados no GED mantendo corretamente o fluxo da movimentação.
- Ajustes realizados na [central de tarefas](https://tdn.totvs.com/x/AfDuDQ) para que o valor limite no range seja de até 7 dígitos.
- Corrigida inconsistência para que ao realizar o *check-in* do documento sem acessar a aba aprovação, seja exibida a mensagem informando que o arquivo foi enviado para aprovação.
- Correção realizada para que um documento com prazo expirado, seja apresentado na cor vermelha na tela de [documentos favoritos.](https://tdn.totvs.com/x/kvDuDQ)
- Ajustes realizados na exibição do select, ao enviar os dados para movimentação de uma atividade para que não ocorra duplicidade nos valores no formdata.
- Ajustes realizados para que seja possível a correta visualização do formulário do Approval.
- Ajustes realizados ao concluir a visualização do [item do treinamento](https://tdn.totvs.com/pages/viewpage.action?pageId=233765948#Plataforma%E2%9D%99Treinamentoemandamento-Visualizaritemdotreinamento). O ajuste promoveu a implementação da frase *"Para sair e contabilizar sua pontuação, clique em Encerrar visualização", *localizada ao lado do botão Encerrar visualização. 
- Corrigida inconsistência ao realizar o *upload *de um documento para que o mesmo seja apresentado na lista em tela.
- Corrigida inconsistência na aba Minhas comunidades no TOTVS Fluig Plataforma
- Ajustes realizados na marca do Fluig. O ajuste promoveu a atualização para a imagem da nova marca do TOTVS Fluig Plataforma.
- Ajustes realizados ao acionar o *tooltip*do ícone no rodapé da tela, para que o texto seja apresentado sem inconsistências. 
- Ajustes realizados nas permissões do usuário para que não seja possível remover uma *widget*sem a permissão concedida.
- Ajustes realizados nas informações enviadas ao usuário no formulário de feedback.
- Realizada correção de inconsistência no Firefox, prevenindo a navegação e ação de *logout*dentro da página de *preview*de temas na plataforma.
- Corrigida inconsistência nos ícones os quais representam os idiomas na plataforma.
- Corrigida inconsistência ao remover um usuário na plataforma.
- Correção de inconsistência na tela de edição da página Intranet, para que a *widget*não seja apresentada ao usuário comum sem permissão, ou caso seja apresentada, este será informado que não possui permissão na página.
- Ajustes realizados nos componentes da página de *preview*do tema no TOTVS Fluig Plataforma.
- Correção de inconsistência na imagem ao realizar uma nova instalação do Fluig.
- Ajustes realizados ao acessar uma comunidade e realizar *upload*de vídeos na *widget*Poster na plataforma.
- Correção no deploy de componentes, para que o deploy seja realizado corretamente no TOTVS Fluig Plataforma.
- Realizado ajustes no *layout*ao inserir um título de uma nova comunidade, para que o texto seja apresentado corretamente.
- Correção de inconsistência ao acessar a página de configuração do tema, o botão "[Restaurar Tema](https://tdn.totvs.com/pages/viewpage.action?pageId=267800859&preview=/267800859/689045762/tema%20wcmadmin.png#Plataforma%E2%9D%99Temas(wcmadmin)-Restaurarnovotema)" será habilitado somente quando houver alguma alteração no tema. 
- Ajustes realizados para que um usuário comum com permissões na página de comunidades consiga [criar comunidades](https://tdn.totvs.com/pages/viewpage.action?pageId=234455576#Plataforma%E2%9D%99Comunidades-Criarcomunidade)na plataforma.
- Correção de inconsistência ao editar o nome das galerias de uma comunidade no Fluig, para que o novo nome seja salvo corretamente.
- Correção realizada para que os ícones do menu sejam exibidos corretamente quando utilizado o tema Clássico do Fluig.
- Corrigida inconsistência ao acessar a página de [configurações de temas](https://tdn.totvs.com/x/G1H2Dw) na plataforma, para que a mesma seja exibida corretamente.
- Corrigida inconsistência ao cancelar um subprocesso em conjunto com o processo principal, para que ambos sejam cancelados simultaneamente. 
- Ajustes realizados na exibição do formulário para que o mesmo seja apresentado de acordo com o layout da página.
- Realizado ajustes para que seja permitido ao usuário salvar um formulário em edição.


<!-- anchors: Atualizações(1.8.0)-Ciclodeatualização, Atualizações(1.8.0)-24deSetembrode2024, Atualizações(1.8.0)-Correções, Atualizações(1.8.0)-23deJulhode2024, Atualizações(1.8.0)-Correções.1, Atualizações(1.8.0)-13deMarçode2024, Atualizações(1.8.0)-Correções.2, Atualizações(1.8.0)-27deFevereirode2024, Atualizações(1.8.0)-Correções.3, Atualizações(1.8.0)-09deJaneirode2024, Atualizações(1.8.0)-Correções.4, Atualizações(1.8.0)-05deDezembrode2023, Atualizações(1.8.0)-Correção, Atualizações(1.8.0)-27deNovembrode2023, Atualizações(1.8.0)-31deOutubrode2023, Atualizações(1.8.0)-Correções.5, Atualizações(1.8.0)-17deOutubrode2023, Atualizações(1.8.0)-Correções.6, Atualizações(1.8.0)-10deOutubrode2023, Atualizações(1.8.0)-Correções.7, Atualizações(1.8.0)-03deOutubrode2023, Atualizações(1.8.0)-Correções.8, Atualizações(1.8.0)-26deSetembrode2023, Atualizações(1.8.0)-Melhoria, Atualizações(1.8.0)-19deSetembrode2023, Atualizações(1.8.0)-Correção.1, Atualizações(1.8.0)-Melhoria.1, Atualizações(1.8.0)-12deSetembrode2023, Atualizações(1.8.0)-Correções.9, Atualizações(1.8.0)-05deSetembrode2023, Atualizações(1.8.0)-Melhorias, sample, sample, Atualizações(1.8.0)-Correções.10, Atualizações(1.8.0)-29deAgostode2023, Atualizações(1.8.0)-Correções.11, Atualizações(1.8.0)-22deAgostode2023, Atualizações(1.8.0)-Correções.12, Atualizações(1.8.0)-15deAgostode2023, Atualizações(1.8.0)-Correções.13, Atualizações(1.8.0)-08deAgostode2023, Atualizações(1.8.0)-Correções.14, Atualizações(1.8.0)-01deAgostode2023, Atualizações(1.8.0)-Correções.15, Atualizações(1.8.0)-26deJulhode2023, Atualizações(1.8.0)-Correções.16, Atualizações(1.8.0)-18deJulhode2023, Atualizações(1.8.0)-Melhorias.1, Atualizações(1.8.0)-ImplementadacriptografiadesenhanoAD, Atualizações(1.8.0)-Melhorianocampozoom, Atualizações(1.8.0)-Correções.17, Atualizações(1.8.0)-11deJulhode2023, Atualizações(1.8.0)-Melhorias.2, Atualizações(1.8.0)-TOTVSFlows:Suasolicitaçãodecomprafacilitada, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.0)-100%true5%, Aberturadechamado-2, Atualizações(1.8.0)-100%true5%.1, Atualizações(1.8.0)-TOTVSFlows:Seupedidodefériasotimizado, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.0)-100%true5%.2, Aberturadechamado-2, Atualizações(1.8.0)-100%true5%.3, Atualizações(1.8.0)-IntegraroTOTVSFluigcomTOTVSiPaaSagoraépossível!, Atualizações(1.8.0)-Correções.18, Atualizações(1.8.0)-05deJulhode2023, Atualizações(1.8.0)-Correções.19, Atualizações(1.8.0)-20deJunhode2023, Atualizações(1.8.0)-Melhorias.3, Atualizações(1.8.0)-TOTVSFlows:agilizeseudiaadiacomprocessosprontosparauso!, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.0)-100%true5%.4, Aberturadechamado-2, Atualizações(1.8.0)-100%true5%.5, Atualizações(1.8.0)-Correções.20, Atualizações(1.8.0)-13deJunhode2023, Atualizações(1.8.0)-Correções.21, Atualizações(1.8.0)-06deJunhode2023, Atualizações(1.8.0)-Correções.22, Atualizações(1.8.0)-30deMaiode2023, Atualizações(1.8.0)-Melhorias.4, Atualizações(1.8.0)-Correções.23, Atualizações(1.8.0)-23deMaiode2023, Atualizações(1.8.0)-Correções.24, Atualizações(1.8.0)-16deMaiode2023, Atualizações(1.8.0)-Correções.25, Atualizações(1.8.0)-09deMaiode2023, Atualizações(1.8.0)-Correções.26, Atualizações(1.8.0)-02deMaiode2023, Atualizações(1.8.0)-Correções.27, Atualizações(1.8.0)-25deAbrilde2023, Atualizações(1.8.0)-Correções.28, Atualizações(1.8.0)-18deAbrilde2023, Atualizações(1.8.0)-Correções.29, Atualizações(1.8.0)-11deAbrilde2023, Atualizações(1.8.0)-Correções.30, Atualizações(1.8.0)-04deAbrilde2023, Atualizações(1.8.0)-Correções.31, Atualizações(1.8.0)-28deMarçode2023, Atualizações(1.8.0)-Correções.32, Atualizações(1.8.0)-21deMarçode2023, Atualizações(1.8.0)-Correções.33, Atualizações(1.8.0)-14deMarçode2023, Atualizações(1.8.0)-Correções.34, Atualizações(1.8.0)-07deMarçode2023, Atualizações(1.8.0)-Correções.35, Atualizações(1.8.0)-28deFevereirode2023, Atualizações(1.8.0)-Correções.36, Atualizações(1.8.0)-22deFevereirode2023, Atualizações(1.8.0)-Melhorias.5, samples, Atualizações(1.8.0)-Correções.37, Atualizações(1.8.0)-14deFevereirode2023, Atualizações(1.8.0)-Melhorias.6, sample, Atualizações(1.8.0)-Correções.38, Atualizações(1.8.0)-07deFevereirode2023, Atualizações(1.8.0)-Correções.39, Atualizações(1.8.0)-31deJaneirode2023, Atualizações(1.8.0)-Correções.40, Atualizações(1.8.0)-25deJaneirode2023, Atualizações(1.8.0)-Correções.41, Atualizações(1.8.0)-17deJaneirode2023, Atualizações(1.8.0)-Melhorias.7, sample, sample, sample, sample, sample, sample, sample, Atualizações(1.8.0)-Correções.42, Atualizações(1.8.0)-10deJaneirode2023, Atualizações(1.8.0)-Correções.43, Atualizações(1.8.0)-22deDezembrode2022, Atualizações(1.8.0)-Melhorias.8, sample, Atualizações(1.8.0)-Correções.44, Atualizações(1.8.0)-13deDezembrode2022, Atualizações(1.8.0)-Correções.45, Atualizações(1.8.0)-06deDezembrode2022, Atualizações(1.8.0)-Correções.46, Atualizações(1.8.0)-29deNovembrode2022, Atualizações(1.8.0)-Correções.47, Atualizações(1.8.0)-22deNovembrode2022, Atualizações(1.8.0)-Melhorias.9, sample, sample, Atualizações(1.8.0)-Correções.48, Atualizações(1.8.0)-18deNovembrode2022, Atualizações(1.8.0)-Correções.49, Atualizações(1.8.0)-08deNovembrode2022, Atualizações(1.8.0)-Melhorias.10, Atualizações(1.8.0)-Correções.50, Atualizações(1.8.0)-01deNovembrode2022, Atualizações(1.8.0)-Correções.51, Atualizações(1.8.0)-25deOutubrode2022, Atualizações(1.8.0)-Correções.52, Atualizações(1.8.0)-18deOutubrode2022, Atualizações(1.8.0)-Correções.53, Atualizações(1.8.0)-11deOutubrode2022, Atualizações(1.8.0)-Correções.54, Atualizações(1.8.0)-04deOutubrode2022, Atualizações(1.8.0)-Melhorias.11, Atualizações(1.8.0)-Correções.55, Atualizações(1.8.0)-28deSetembrode2022, Atualizações(1.8.0)-Correções.56, Atualizações(1.8.0)-20deSetembrode2022, Atualizações(1.8.0)-Correções.57, Atualizações(1.8.0)-13deSetembrode2022, Atualizações(1.8.0)-Correções.58, Atualizações(1.8.0)-06deSetembrode2022, Atualizações(1.8.0)-Correções.59, Atualizações(1.8.0)-31deAgostode2022, Atualizações(1.8.0)-Correções.60, Atualizações(1.8.0)-30deAgostode2022, Atualizações(1.8.0)-Correções.61, Atualizações(1.8.0)-23deAgostode2022, Atualizações(1.8.0)-Correções.62, Atualizações(1.8.0)-16deAgostode2022, Atualizações(1.8.0)-Correções.63, Atualizações(1.8.0)-02deAgostode2022, Atualizações(1.8.0)-Correções.64, Atualizações(1.8.0)-27deJulhode2022, Atualizações(1.8.0)-Correções.65, Atualizações(1.8.0)-19deJulhode2022, Atualizações(1.8.0)-Correções.66, Atualizações(1.8.0)-12deJulhode2022, Atualizações(1.8.0)-Correções.67, Atualizações(1.8.0)-05deJulhode2022, Atualizações(1.8.0)-Correções.68, Atualizações(1.8.0)-28deJunhode2022, Atualizações(1.8.0)-Correções.69, Atualizações(1.8.0)-22deJunhode2022, Atualizações(1.8.0)-Correções.70 -->
