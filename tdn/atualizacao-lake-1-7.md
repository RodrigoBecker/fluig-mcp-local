---
title: "Atualização Lake (1.7)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=440834439"
scraped_at: "2026-03-09T03:14:09.070Z"
depth: 2
anchors: 26
child_links: 40
---

# Atualização Lake (1.7)

![](/download/attachments/440834439/Banner-TDN.png?version=1&modificationDate=1588964309217&api=v2)

Atenção! Lake 1.7.0!

Como você pode perceber nesta atualização mudamos o número desta versão! Fizemos isso, pois temos mudanças arquiteturais relevantes. Procuramos nos antecipar a todas as situações para você não ter nenhum problema, porém podem haver algumas incompatibilidade em customizações ou personalização feitas na sua plataforma, requerendo um pouco mais de atenção no momento da atualização. 

Lembre-se também que é necessário primeiramente estar com o ambiente na atualização **Fluig ****1.6.5-200318 ou superior**, e em seguida atualizar para a **1.7.0**.

Veja na sessão [Arquitetura](https://tdn.totvs.com/pages/viewpage.action?pageId=440834439#Atualiza%C3%A7%C3%A3oLake(1.7.0)-Arquitetura) as mudanças e confira o [Checklist completo](/pages/viewpage.action?pageId=549488105) que preparamos com todas as dicas do que você precisa verificar para realizar a atualização do seu ambiente tranquilamente.

 - [Fique atento aos requisitos de hardware para garantir a performance da sua plataforma](#)

![](/download/attachments/440834439/dimensionamento.png?version=3&modificationDate=1604944647477&api=v2)

Para verificar mais detalhes sobre as definições de hardware para os servidores de aplicação e de banco de dados, consulte a documentação de [Modelo de dimensionamento](/display/fluig/Modelo+de+dimensionamento).

Atenção - MySQL 5.5

Com o lançamento da release 1.7 (Lake), que trouxe muitas novidades em Arquitetura, o baixo desempenho do banco **MySQL 5.5** noticiado no [portal de clientes em 2017](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,08/12/2017,-Utiliza%20MySQL%205.5) se potencializou e a execução de comandos padrões das funções pré existentes no produto não será realizada corretamente. É importante ressaltar que, a partir desta release, o TOTVS Fluig Plataforma deixa de ser compatível com o banco de dados MySQL 5.5. 

Replicação de Sessão

A partir dessa release está descontinuado o uso de **Replicação de Sessão** em **ambientes distribuídos**.

Caso tenha essa configuração aplicada em seu ambiente, ative a configuração de Afinidade de Sessão novamente, antes de atualizar.

Siga as instruções para ativar a Afinidade de Sessão conforme apresentado nas documentações abaixo:

- [ambientes Windows](/display/fluig/Plataforma+em+load+balance+com+Microsoft+NLB)
- [ambientes Linux](/display/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux)

Confira abaixo as novidades na atualização 1.7.0 do TOTVS Fluig Plataforma:

- [Plataforma](#AtualizaçãoLake(1.7)-Plataforma)
- [Lei Geral de Proteção de Dados Pessoais - LGPD](#AtualizaçãoLake(1.7)-LeiGeraldeProteçãodeDadosPessoais-LGPD)
- [Processos](#AtualizaçãoLake(1.7)-Processos)
- [Documentos](#AtualizaçãoLake(1.7)-Documentos)
- [Mobile](#AtualizaçãoLake(1.7)-Mobile)
- [Social](#AtualizaçãoLake(1.7)-Social)
- [Arquitetura](#AtualizaçãoLake(1.7)-Arquitetura)
- [WCM](#AtualizaçãoLake(1.7)-WCM)
- [Documentações](#AtualizaçãoLake(1.7)-Documentações)
- [Correções](#AtualizaçãoLake(1.7)-Correções)

![](/download/attachments/440834439/espanhol.png?version=1&modificationDate=1543868725483&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/81PNI) para ver el Release Notes en Español.

![](/download/attachments/440834439/ingles.png?version=1&modificationDate=1543868725433&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/T1fNI) to view the Release Notes in English.

## Plataforma

---

**Fluig Plataforma agora é TOTVS Fluig Plataforma!**

Hoje em dia, tudo à nossa volta está em constante evolução... E aqui na TOTVS não seria diferente, não é mesmo? Por isso, nossa arquitetura de marca foi reformulada com o objetivo de simplificar a forma como nossos produtos são apresentados, facilitando o entendimento do nosso portfólio pelo mercado.

Com isso, o Fluig Plataforma que você já conhece passa a se chamar **TOTVS Fluig Plataforma**: uma imensidão de possibilidades dentro da nossa plataforma, com toda a força que a marca TOTVS representa!

Essa mudança de marca traz mudanças no visual da plataforma, que agora conta também com a identidade da TOTVS. 

Confira os pontos onde temos a mudança:

- [Nome da versão](#)
- [Imagem padrão de login e da logo](#)
- [Nome e ícone na aba do navegador](#)

![](/download/attachments/440834439/Nome.png?version=1&modificationDate=1591352964153&api=v2)

![](/download/attachments/440834439/Logo.png?version=1&modificationDate=1591353391653&api=v2)

![](/download/attachments/440834439/Aba.png?version=1&modificationDate=1591353552803&api=v2)

**Fique tranquilo!**

Todo o funcionamento da plataforma continua o mesmo inclusive contendo as inovações e melhorias para esta release.

## Lei Geral de Proteção de Dados Pessoais - LGPD

---

**Mergulhando nos dados pessoais com a LGPD **

A LGPD (lei geral de proteção de dados) é a lei que tem o objetivo de regular as atividades em relação aos dados pessoais e com isso garantir a segurança e a privacidade dos consumidores. Como fornecedora de software, a TOTVS se posiciona como parceira dos clientes em seus processos de adequação à LGPD. 

Pensando neste cenário, disponibilizamos na **atualização Lake**novos recursos, visando a manutenção e evolução do grau de conformidade com as melhores práticas de gestão e processos relativos à proteção de dados. Explore a seguir:

**Política de uso e Termo de consentimento **Escreva uma política de uso bem completa para o seu portal, abrangendo todos os pontos em que o portal irá requisitar os dados do usuário. Essa política de uso pode ser configurada como um termo de consentimento: no primeiro login do usuário, ele terá que aceitar esse termo, para então acessar o portal. Isso garante à empresa o respaldo de que o usuário está ciente do uso de seus dados.

Veja como é simples configurar um termo de consentimento para aceite dos usuários:

- [1- Escreva um termo](#)
- [2- Vincule o termo como Política de uso](#)
- [3- Selecione a Política que exige consentimento](#)
- [E pronto!](#)

Inclua um arquivo PDF ou construa um artigo na própria plataforma, com o termo de consentimento e todas as informações necessárias.

![](/download/attachments/440834439/Pol%C3%ADtica%20de%20uso.png?version=2&modificationDate=1585935996807&api=v2)

Cadastre uma política de uso para essa empresa, vinculando o termo que você escreveu.

![](/download/attachments/440834439/Pol%C3%ADtica%20de%20uso%202.png?version=1&modificationDate=1585759769763&api=v2)

Não se esqueça de indicar que esse documento deve ser apresentado aos seus usuários, como um termo de consentimento.

![](/download/attachments/440834439/Pol%C3%ADtica%20de%20uso%203.png?version=1&modificationDate=1585762132483&api=v2)

E pronto!

Fazendo isso, o termo passa a ser apresentado aos seus usuários, aguardando o aceite de cada um. Simples né?

![](/download/attachments/440834439/Termo%20de%20Consentimento%20%281%29.png?version=5&modificationDate=1592328136057&api=v2)

Atenção!

- Recomenda-se validar o termo de consentimento com um especialista jurídico de sua área de atuação, antes de divulgá-lo aos seus usuários.
- Se o ambiente Fluig for integrado ao Identity, o termo de consentimento é cadastrado nas configurações de [segurança do Identity](https://tdn.totvs.com/x/C5JvI#Dadoseprivacidade-Definirtermodeconsentimentotermo).
- Para mais informações consulte as documentações de [Política de uso](https://tdn.totvs.com/x/UoH5DQ) e [Termo de consentimento](https://tdn.totvs.com/x/DvBeI).

**Gerencie os dados pessoais solicitados na plataforma**Como a plataforma Fluig é altamente personalizável, grande parte das informações armazenadas são provenientes de campos criados pelo próprio usuário. Para facilitar a identificação e o controle dos dados pessoais que estão sendo armazenados, esses dados agora estão mapeados em uma listagem separada, disponível apenas para administradores. 

O cadastro de Dados pessoais chegou para facilitar a sua vida! Aponte os campos do seu banco de dados que contenham dados pessoais. Complemente ainda mais esse cadastro, inserindo classificações e justificativas, como: para que ele está sendo solicitado e para quais fins será utilizado.

Veja como funciona:

- [Lista de dados pessoais](#)
- [Adicionar dado pessoal](#)

A tela de Dados pessoais concentra todos os campos que solicitam dados pessoais... 

![](/download/attachments/440834439/Dados%20pessoais%20%281%29.png?version=3&modificationDate=1587416223493&api=v2)

... E você pode incluir manualmente os atributos necessários como dado pessoal.

![](/download/attachments/440834439/Adicionar%20dado%20pessoal.png?version=2&modificationDate=1585836960697&api=v2)

Fique atento!

Os dados pessoais podem ser solicitados em formulários criados no modo avançado, no Fluig Studio, formulários de processos, formulários de comunidades, Forms, além dos dados do cadastro do usuário. Para mais informações consulte a documentação [Dados pessoais](https://tdn.totvs.com/x/OfheI).

**Garanta a privacidade dos seus usuários**Imergindo ainda mais nesse contexto, e se algum usuário, como titular das informações e preocupado com sua privacidade, solicitar alguma ação em relação aos seus dados? A atualização Lake está preparada para atendê-lo!

Com o novo recurso de Anonimizar e exportar dados pessoais, você pode localizar facilmente os dados pessoais por usuário ou por tipo de dado, e tomar as ações necessárias, que podem ser: exportar ou anonimizar os dados.

- Na **exportação de dados**, os dados pessoais solicitados são reunidos em um arquivo JSON para ser enviado ao titular dos dados, que pode até mesmo importá-lo em outro sistema caso desejar;

- Na **anonimização**, os dados pessoais passam por um tratamento irreversível, dessa forma eles não serão mais apresentados em seus respectivos cadastros. 

Confira abaixo:

- [Anonimizar e exportar dados pessoais](#)
- [Anonimizar os dados](#)
- [Dados anonimizados](#)
- [Exportar dados](#)
- [Dados exportados](#)

![](/download/attachments/440834439/anonimizar%20e%20exportar.png?version=3&modificationDate=1587417171397&api=v2)

![](/download/attachments/440834439/Anonimizar.png?version=3&modificationDate=1587416557250&api=v2)

![](/download/attachments/440834439/Anonimiza%C3%A7%C3%A3o%20antes%20e%20depois.png?version=3&modificationDate=1586259778383&api=v2)

![](/download/attachments/440834439/Exportar%20dados.png?version=2&modificationDate=1587417208743&api=v2)

![](/download/attachments/440834439/Dados%20exportados.png?version=3&modificationDate=1586376221550&api=v2)

Atenção!

Para mais informações sobre esses recursos, consulte a documentação [Anonimizar e exportar dados pessoais](https://tdn.totvs.com/x/uOpvI).

**Mapeie os dados pessoais de formulários**
A atualização Lake está inundando sua plataforma com recursos de segurança e proteção! Os formulários construídos pelos próprios usuários do Fluig e que contenham dados pessoais agora também podem ser mapeados para facilitar o atendimento à LGPD. Isso engloba os formulários criados no modo avançado, criados no Fluig Studio, formulários de processos, formulários de comunidades e Forms.

Esses recursos contam com a busca pelos dados, anonimização e exportação conforme necessidade, além do registro de log de visualização, para garantir a segurança do titular das informações. 

**Saiba tudo o que acontece na plataforma**Como um recurso adicional para garantir a segurança em suas operações, o Fluig oferece ainda um serviço de registro das alterações realizadas na plataforma, em recursos específicos como Papéis, Usuários, Grupos, Processos, Documentos, entre outros e um monitoramento dedicado aos dados pessoas cadastrados.** **Para saber mais, acesse [Eventos de auditoria](https://tdn.totvs.com/x/UhqbEg).

![](/download/attachments/440834439/Eventos%20de%20auditoria%201.7.0.png?version=1&modificationDate=1585318554993&api=v2)

Dica

É importante reforçar que a TOTVS se posiciona como parceira dos clientes em seus processos de adequação à LGPD. Estamos empenhados em auxiliá-los nessa transição, ainda que nossos produtos sejam ferramentas de apoio e que a adequação à Lei exija, especialmente, o compromisso de cada empresa e cliente. 

Ficou em dúvida sobre algum conceito ou regra da LGPD? Conheça mais sobre o assunto [nessa documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=514427789).

## Processos

---

**LGPD aplicado a formulários de processos**

Seja para aplicativos Saas ou sistemas locais, o que todos buscamos para nossos dados que trafegam na rede é a segurança. E é para isso que a LGPD chegou de forma consolidada e completa, para atender essas demandas, assegurando assim aos usuários uma forma muito mais completa de proteger e tratar seus dados pessoais, com o sigilo e atenção que merecem. 

Os formulários sempre foram grandes personagens em se tratando de dados, já que muitos deles solicitam informações variadas e na maioria das vezes, de cunho pessoal. como idade, número de CPF, número de RG, data de nascimento, entre outros. Dados esses que carregam consigo o peso de uma informação completamente pessoal e intransferível. 

Os dados pessoais dentro da plataforma podem contar com as medidas de segurança, onde ao configurar um formulário dentro de um processo com regras específicas, você poderá definir quais informações podem ou não ficar disponíveis para visualização. Em todos os campos, exceto campo Avaliação, é possível configurar o item **Privacidade**, podendo dizer que este campo possui dado pessoal, se o seu conteúdo pode ser anonimizado e qual o motivo e justificativa de ser solicitado no formulário. Confira todo o passo a passo, acessando a documentação de **Configurar formulário** e veja quais os itens que podem ser configurados de acordo com a Lei Geral de Proteção de Dados.

- [Vídeo](#)
- [Formulário na configuração do processo](#)

![](/download/attachments/440834439/Formul%C3%A1rio%20-%20configurar%20processo.PNG?version=1&modificationDate=1585945743617&api=v2)

**Novas APIs de****cadastro de processos e substituto**

Pensando em atender à necessidade dos clientes em realizar operações de criação, consulta, atualização e distribuição de processos via API, apresentamos as novas APIs criadas especialmente para facilitar a rotina do cadastro de processos workflow. 

E para completar, implementamos a lógica nas APIs de processos para que considerem o conceito de usuário substituto para aplicativo mobile. 

Clique e confira para saber mais detalhes destas APIs em [API Process Management](https://api.fluig.com/process-management/swagger-ui/#/Processes). 

![](/download/attachments/440834439/image2020-4-6_14-44-9.png?version=1&modificationDate=1586195051397&api=v2)

## Documentos

---

**Formulário avançado no contexto da LGPD**

Os formulários avançados, ou seja, que são criados e configurados através do fluig Studio, também adotam as medidas de segurança de dados pessoais. As configurações, neste caso, são criadas com codificação diretamente no Studio e permitem que o desenvolvedor adicione alguns atributos ao campo "input" do HTML para que a privacidade do campo seja configurada.

Veja a seguir o passo a passo de como configurar seu formulário avançado de acordo com as normas da LGPD para proteção de seus dados, ou acesse [Desenvolvimento de formulários](https://tdn.totvs.com/x/U4l8B).

Veja como fica a configuração de privacidade no formulário avançado:

- [Desenvolvimento no Fluig Studio](#)
- [Formulário importado para o Fluig](#)
- [Formulário sendo preenchido](#)

O formulário sendo desenvolvido no Fluig Studio. Em destaque, os atributos para configuração da privacidade do campo:

![](/download/attachments/440834439/Fluig%20Studio.png?version=2&modificationDate=1585943739413&api=v2)

![](/download/attachments/440834439/Formul%C3%A1rio%20avan%C3%A7ado.png?version=2&modificationDate=1586193539773&api=v2)

![](/download/attachments/440834439/Preenchimento%20formul%C3%A1rio.png?version=1&modificationDate=1586193204353&api=v2)

**Aprofunde-se nos relatórios do Fluig**

Atualizamos nossa plataforma para estar compatível com a versão mais recente do BIRT, a 4.8. O BIRT é uma plataforma *open source* que facilita a modelagem de relatórios dentro do fluig. Nessa versão, ele recebeu melhorias na segurança dos dados e no acesso aos dados, maior suporte a outros formatos de exportação de relatórios (incluindo XLS e DOCX) e integração fácil com as bibliotecas JavaScript. Saiba mais sobre os recursos dessa versão no [site oficial](https://www.eclipse.org/birt/phoenix/project/notable4.3.php).  

![](/download/attachments/440834439/Birt-logo.png?version=1&modificationDate=1586883750237&api=v2)

Acesse a documentação técnica de [Desenvolvimento de relatórios](https://tdn.totvs.com/x/KAJzB) para conferir como preparar o ambiente e construir os relatórios que desejar! Consulte [aqui](https://tdn.totvs.com/x/IaOwD) os templates que já desenvolvemos para você!

## Mobile

---

**Substitutos no Approval**

Agora, no aplicativo Approval, é possível movimentar solicitações como usuário substituto. É possível selecionar a pessoa que está sendo substituída e visualizar suas tarefas pendentes, facilitando assim o acesso e a conclusão das tarefas com mais eficiência.
Para conferir a documentação acesse [Configurar atividades e fluxos](https://tdn.totvs.com/x/ffHuDQ). Confira também as novidades deste aplicativo, acessando [Release Notes Approval](https://tdn.totvs.com/x/Q4-HEw).

**Recurso de Conexões totalmente modernizado!**

O aplicativo Fluig mobile, está passando por diversas ações de melhoria para que você tenha uma experiência cada vez mais agradável e intuitiva.

Por isso, toda a tela de **Conexões** foi modernizada com uma nova tecnologia que foi implementada a fim de garantir maior facilidade no uso e organização das informações dispostas na tela do seu dispositivo. Confira mais detalhes acessando [Release notes Fluig mobile](https://tdn.totvs.com/x/B1y2Fg). Para saber mais detalhes sobre como usar o recurso acesse [Guia de utilização Fluig mobile](https://tdn.totvs.com/x/EAtvBg).

Este recurso estará disponível a partir da atualização 1.7.0 do aplicativo Fluig, que sairá em breve. Fique atento em nosso release notes!

**Sem confusão com links: mais uma ação de melhoria para seu aplicativo Fluig**

Ficou muito mais claro e fácil enviar links do aplicativo Fluig para outras pessoas por meio de outros aplicativos como o WhatsApp®, por exemplo. Pois agora ao receber um link do Fluig será possível acessá-lo diretamente pelo app, sem a necessidade de abrir esse link pelo browser mesmo com o aplicativo Fluig já instalado. 

Confira mais essa novidade no nosso [Release notes Fluig mobile](https://tdn.totvs.com/x/B1y2Fg), e acesse os detalhes deste recurso na documentação [Recebimento de link Fluig mobile](https://tdn.totvs.com/x/0w3NI).

## Social

---

**Novas APIs Sociais na atualização Lake**

Estamos sempre pensando em atender à necessidade dos nossos clientes em realizar as mais diversas operações. Por isso, desenvolvemos novas APIs de Colaboração justamente para facilitar essas operações em:

- Comunidades: para comunidades foram desenvolvidas APIs para listar informações específicas de uma comunidade, listar informações de todas as comunidades, listar usuários participantes da comunidade, solicitar permissão para participar da comunidade e exclusão do usuário da comunidade;
- Seguidores: em seguidores as APIs foram desenvolvidas para pesquisar todos os seguidores de um usuário, solicitações para seguir um usuário em específico e a exclusão de um usuário da lista de seguidores de outro usuário;
- Fotos de perfil: para fotos de perfil foi desenvolvida a API para adicionar ou alterar uma imagem para um usuário em específico;
- Usuários: foram desenvolvidas APIs para listar informações de todos os usuários, listar usuários que são seguidos por um usuário em específico e listar informações de um único usuário.

Confira mais detalhes acessando: [API Social Collaboration](https://api.fluig.com/collaboration/swagger-ui/).

![](/download/attachments/440834439/image2020-4-6_14-45-1.png?version=1&modificationDate=1586195122680&api=v2)

Para mais detalhes sobre APIs acesse: [api.fluig.com](https://api.fluig.com/)

**LGPD aplicado a formulários em comunidade**

Você também poderá utilizar dos nossos recursos para se adequar as novas medidas de proteção de dados nos formulários publicados nas comunidades.

Com isso, os campos ganharam mais uma opção para configuração, o item **Privacidade**. Basta adicionar os campos necessários para o seu formulário e definir o item privacidade dentro da configuração de cada campo. Dessa forma, você pode garantir ainda mais a segurança dos dados que são recolhidos em seus formulários.

Não perca essa atualização e garanta cada vez mais flexibilidade para seu Fluig.

**Confira a novidade**

- Para mais detalhes acesse o help [Publicar formulário em comunidade](https://tdn.totvs.com/x/pfvuDQ).

![](/download/attachments/440834439/LGPD%20privacidade%20forms%20comunidade.png?version=1&modificationDate=1586172727017&api=v2)

## Arquitetura

---

**Mais segurança e compatibilidade no Fluig**

Algumas bibliotecas e ferramentas foram atualizadas para trazer mais segurança, desempenho e estabilidade à plataforma fluig. A plataforma agora utiliza o servidor de aplicação **Wildfly** na **versão 18**e o ambiente de execução Java (**OpenJDK**) está na **versão 11.** Também homologamos o banco de dados **Oracle18c**e o **Windows Server 2019**.

![](/download/attachments/440834439/Arquitetura.png?version=2&modificationDate=1588964372770&api=v2)

![](/download/attachments/440834439/Windows-server-2019-dinahosting-1.jpg?version=3&modificationDate=1591362140203&api=v2)

**Fique atento!**

- Desenvolvedores que utilizam o plugin do Eclipse precisam atualizar para uma versão que execute com Java 11.
- Se foi efetuada alguma personalização nos arquivos "domain.xml" e "host.xml", é importante validar se todas as alterações foram migradas para a nova versão, verifique tudo o que foi alterado manualmente nos arquivos.

Atenção - MySQL 5.5

Com o lançamento da release 1.7 (Lake), que trouxe muitas novidades em Arquitetura, o baixo desempenho do banco **MySQL 5.5** noticiado no [portal de clientes em 2017](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,08/12/2017,-Utiliza%20MySQL%205.5) se potencializou e a execução de comandos padrões das funções pré existentes no produto não será realizada corretamente. É importante ressaltar que, a partir desta release, o TOTVS Fluig Plataforma deixa de ser compatível com o banco de dados MySQL 5.5. 

Consulte nossas documentações [Matriz de Portabilidade](https://tdn.totvs.com/x/_ApbB) e [Dimensionamento](https://tdn.totvs.com/x/9QpbB) para mais informações sobre os requisitos e desempenho do Fluig.

## WCM

---

**Atualização de arquitetura no WCM – Mais segurança para você**

Na versão 1.7.0 Lake realizamos uma atualização de bibliotecas (libs) pensando sempre em trazer mais segurança e estabilidade ao acessar a plataforma Fluig.

Verifique a seguir as bibliotecas atualizadas:

- jQuery da versão 2.2.2 para a **3.5.0**
- Moment da versão 2.9.0 para a **2.24.0**
- Bootstrap da versão 3.3.6 para a **3.4.1**

Como essa atualização pode trazer impactos nos seus desenvolvimentos de páginas e widgets, liberamos nessa release um plugin de migração fornecido pela própria jQuey, o **jquery-migrate**.

Além de ajudar a restaurar os comportamentos perdidos na versão anterior, irá facilitar também na identificação dos pontos onde é necessário a atualização do código. Recomendamos que utilizem este plugin para realizar as adequações do código o mais breve possível, pois nas próximas releases ele será removido da instalação do Fluig.

**Fique atento!**

Todo o passo a passo necessário para que você identifique o que precisa ser atualizado está disponível na documentação: **Atualização jQuery - Como identificar o que precisa ser atualizado**

**Novo menu de edição do Fluig**

A plataforma Fluig foi totalmente modernizada nesta atualização, trazendo grandes melhorias não só de segurança como também melhorias de usabilidade.

Com isso, o menu do Fluig Plataforma foi totalmente modernizado trazendo facilidade na identificação pelos usuários e facilidade no uso também.

Os recursos **Editar perfil**, **Editar imagem**, **Idioma**, **Ajuda** e **Sair** estão localizados ao lado direito da foto de perfil do usuário, identificado pelo ícone. Dessa forma, todos os recursos que antes ficavam juntos à foto do perfil, estarão mais fáceis de localizar e utilizar!

- [Novo menu](#)

![](/download/attachments/440834439/Novo%20menu%20Fluig%20plataforma.png?version=1&modificationDate=1590174333840&api=v2)

**Confira mais detalhes**

Mais detalhes sobre essa atualização podem ser conferidos no help [Configurações](https://tdn.totvs.com/x/k9VSDg).

## Documentações

---

- Nossa documentação sobre **Eventos de auditoria**foi atualizada para trazer o detalhamento dos eventos que são auditados na plataforma. Confira!
- Documentações dos novos recursos relacionados à privacidade do usuário, agrupados em [Segurança e acesso](https://tdn.totvs.com/x/pqf-Fg).
- O **TOTVS Identity** agora conta com um espaço exclusivo de help, perguntas frequentes e documentações técnicas. [Acesse aqui!](https://tdn.totvs.com/x/NnA9I)  
- Confira em detalhes as novidades e as correções disponíveis no [aplicativo fluig Mobile](https://tdn.totvs.com/x/B1y2Fg).

Uma imensa base de conhecimento ao seu dispor

Estamos constantemente evoluindo nossa base de conhecimento no **Zendesk**. Cada vez que você for abrir um chamado para o atendimento Fluig, efetue a busca para ver se existe um artigo com dúvidas ou problemas semelhantes, que foram mapeados e resolvidos. As sugestões de artigo serão apresentadas no momento em que você indicar o assunto do chamado.

Dessa forma, você pode executar seu trabalho com mais agilidade. Acesse [suporte.totvs.com](https://suporte.totvs.com) e saiba mais.

## Correções

---

**WCM**

- Tratamento realizado para possibilitar a inclusão de mais de uma URL em publicações.
- Ajustes no componente *autocomplete* da Style Guide, para não mostrar a lista de opções ao receber foco quando o campo estiver desabilitado.

**BPM**

- Realizado ajuste no scroll na atualização para o tema Snowflake, para corrigir o alinhamento do conteúdo apresentada em tela.
- Realizada correção na atividade condicional, para que a validação do script dessa atividade seja aceito e validado corretamente.****
- Realizada correção na criação de sub categorias com o mesmo nome da categoria pai. Tratamento feito para separar a categoria por nível de estrutura, sanando a inconsistência, para que os processos sejam carregados e as pastas exibidas corretamente.
- Realizada correção nas bibliotecas importadas, para que sejam validadas automaticamente e não mostre mais a mensagem, quando o formulário utiliza o Style Guide.
- ****Realizado ajuste para que, após a atualização do Fluig, as palavras digitadas de forma incorreta nos complementos da solicitação, sejam sublinhadas em vermelho, acusando o erro de língua Portuguesa.
- ****Corrigida situação onde, tendo um processo com mecanismo de atribuição por campo de formulário configurado, ao editá-lo e excluir o campo existente para adicionar um novo, o mecanismo da atividade ficava vazio e não permitida edição. Ajustado para que, quando trocado o campo, ele seja atualizado.
- ****Realizada correção para que os usuários de um papel sejam exibidos corretamente ao visualizar os dados de uma atividade, na inicialização de um processo.
- Realizada alteração na busca de usuários no Tasks, para que a listagem de usuários seja visualizada corretamente.
- Realizada correção no fluig mobile para que o texto do complemento da atividade de serviços seja exibido corretamente na tela.
- Corrigida a tabela FDN_PERSONALDATA referente aos campos do formulário do processo, para que os dados pessoais que forem marcados como anônimos, sejam anonimizados corretamente.
- Realizado ajuste para que, após a atualização do fluig, as palavras digitadas de forma incorreta nos complementos da solicitação, sejam sublinhadas em vermelho, acusando o erro de língua Portuguesa.
- Corrigida inconsistência no cadastro de usuário substituto, onde anteriormente o sistema permitia cadastrar usuários e datas idênticas
- Corrigida inconsistência que não permitia validar ou editar os usuários substitutos ao iniciar um processo.
- Corrigida inconsistência que ocorria ao selecionar uma atividade em pool, e ao clicar para exibir a lista de usuários do grupo/papel, o resultado seja carregado corretamente.
- Ajustada as validações da atividade de serviço, para que seja possível exportar um processo com a versão liberada, contendo a atividade de serviço sem script.
- Tratamento realizado para emitir alerta caso o usuário tente movimentar uma solicitação para usuário inativo ou inexistente.
- Realizada correção no ADHOC do fluig para que seja utilizada uma única versão do registro de formulário.
- Realizada correção na consulta de solicitações para que que os processos que não possuem State possam ser visualizados corretamente.
- Corrigidas falhas de segurança no fluig, ao utilizar o menu Processos.
- Corrigida inconsistência que não permitia mostrar os usuários de um grupo, quando utilizado o mecanismo de atribuição customizado em uma solicitação.
- Realizada correção para que ao acessar uma solicitação diretamente pela URL e movimentar a atividade de um processo diretamente do navegador IE 11, os botões de ação sejam carregados automaticamente.
- Realizado ajuste na nacionalização do fluig, para que os processos sejam definidos corretamente quando o idioma estiver diferente do Português.
- Efetuados ajustes para exibir corretamente todos os documentos de uma pasta ao selecioná-la no momento de incluir um anexo a um processo.
- Corrigida inconsistência no mecanismo de atribuição por campo de formulário utilizando dataset de colleague, cujo erro ocorria quando era informado no campo de descrição, um campo diferente de colleagueId.
- Corrigida inconsistência no navegador Internet Explorer 11 que não permitia carregar a consulta de solicitações de um processo.
- Corrigido o fluxo de informações entre um processo e um subprocesso para que as condições de uma atividade automática do processo principal sejam validadas corretamente utilizando dados do subprocesso.
- Corrigida a movimentação de solicitações em bloco quando há campos relacionados a um formulário do tipo pai-filho para que os campos sejam exibidos corretamente.

**Forms**

- Realizada correção nos formulários com campos de texto com máscara moeda ou porcentagem, para que salvem corretamente o valor no banco de dados com PONTO que é o separador decimal corretor, ao invés da VÍRGULA que estava sendo aplicada erroneamente.
- Realizado ajuste nos campos do formulário, para que os nomes sejam salvos corretamente.
- Realizado ajuste no campo de texto rico e aumentado o limite do campo para 10.000 caracteres, onde a validação será aplicada somente aos caracteres que são visíveis ao usuário.
- Realizado ajuste no forms para que o componente de texto rico exiba um contador dos caracteres inseridos no campo e exiba também uma mensagem em tela, quando o limite de caracteres for ultrapassado.
- Ajustado o uso da tecla Tab para que, ao pressioná-la, o foco seja movido campo a campo da esquerda para a direita e, posteriormente, para baixo no primeiro campo à esquerda, facilitando assim o preenchimento de formulários sem a necessidade de clicar em cada campo para preenchê-lo.
- Corrigida inconsistências que não permitiam visualizar os registros de um formulário de forma correta.
- Realizado ajuste para que não exista duplicação de colunas e respostas no momento da  exportação do forms para excel.
- Realizado ajuste na API REST que cria os registros de formulário, para que retorne corretamente as mensagens do validateForm.
- Efetuadas correções para exibir campos do tipo zoom como campos descritores quando um formulário exportado pelo fluig Studio for editado na plataforma fluig.
- Corrigida a documentação de API REST no swagger a fim de auxiliar o usuário a compreender de forma mais simples como criar e atualizar formulários com eventos.

**Portais**

- Corrigida a inconsistência que impedia a inicialização correta do Fluig.
- Correção realizada permitindo o *deploy* de componentes com arquivos "js" que tenham menos de 3 caracteres.
- Ajuste realizado para que os widgets do Analytics sejam autenticados corretamente juntos ao Fluig no momento da autenticação, não apresentando mais a tela para acesso nos widgets.

**Fundação**

- Correção na ordenação pelas colunas "Matricula do substituto" e "Matricula do substituído" da tela de Substitutos.
- Corrigida validação da quantidade de caracteres dos campos "Login" e "Matrícula" do usuário.
- Inclusão de mensagem para orientar quanto ao preenchimento do código na inclusão de papel.
- Ajuste realizado no Approval para que exista uma validação de conexão LDAP sem o uso de credenciais.
- Em ambientes Linux foi incluída a verificação de permissão do usuário, onde o usuário que inicia o serviço deve ser proprietário *(owner)* da pasta de instalação. Essa validação estava sendo feita apenas para ambientes Linux derivados do Debian, e agora a verificação está sendo feita em ambientes Linux derivados do RedHat também.
- Ajuste realizado para situações onde um usuário está ativo em mais de uma empresa no Fluig. Agora, no cadastro de usuário, edição de usuário, reativação de usuário e durante o login, será apresentada uma mensagem ao administrador informando que este usuário não poderá acessar a plataforma utilizando um e-mail já cadastrado em outra empresa, ficando a critério do administrador continuar ou não os procedimentos acima listados.

**Dataset**

- Correção realizada na API "/ecm/dataset/synchronizeDataset" para que apresente o correto funcionamento.

**ECM**

- Ajuste realizado para que os comentários incluídos para o Documento sejam apresentados em tela sem precisar fechar e abrir novamente a tela de comentários.
- Corrigida inconsistência na exportação da lista de acessos de todas as versões do documento, quando esse documento teve muitos hits.
- Inclusão dos campos *inheritApprovers, convertDocumentType, notificationDays, **quota* e *publicDocument* no objeto [DocumentDto](https://tdn.totvs.com/x/l4eADQ#Guiadepropriedadesdosobjetos-DocumentDto).


<!-- anchors: 122, 122--1473971087, AtualizaçãoLake(1.7)-Plataforma, TOTVs, AtualizaçãoLake(1.7)-LeiGeraldeProteçãodeDadosPessoais-LGPD, Termo, Termo-1, Termo-2, Termo-3, Termo-4, dadospessoais, dadospessoais-lista1, dadospessoais-lista2, Anonimizar_Exportar, AtualizaçãoLake(1.7)-Processos, 1, AtualizaçãoLake(1.7)-Documentos, locais, locais-studio, AtualizaçãoLake(1.7)-Mobile, AtualizaçãoLake(1.7)-Social, AtualizaçãoLake(1.7)-Arquitetura, AtualizaçãoLake(1.7)-WCM, sample, AtualizaçãoLake(1.7)-Documentações, AtualizaçãoLake(1.7)-Correções -->
