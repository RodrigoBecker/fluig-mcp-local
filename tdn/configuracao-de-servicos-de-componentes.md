---
title: "Configuração de serviços de componentes"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267788666"
scraped_at: "2026-03-09T04:01:27.708Z"
depth: 2
anchors: 30
child_links: 81
---

# Configuração de serviços de componentes

# Objetivo

---

O objetivo desse guia é apresentar os procedimentos necessários para a configuração dos serviços de componentes, neste caso os softwares do pacote Microsoft® Office, assim como o Word®, PowerPoint® e Excel®, na utilização de forma integrada com o TOTVS Fluig Plataforma.

Este recurso é utilizado em algumas situações como:

1. [Conversores de Documentos](/display/fluig/Conversores+de+Documentos)
2. [Impressão de Cópia Controlada](/pages/viewpage.action?pageId=152802071)

Essa configuração deve ser feita no servidor da plataforma. O sistema operacional deve ser Microsoft Windows. Para verificar as versões homologadas, acesse a [Matriz de Portabilidade](https://tdn.totvs.com/x/_ApbB).

# Configuração dos serviços

---

Neste caso algumas configurações devem ser feitas no serviço do Fluig:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Na tela de Serviços do Windows® é necessário acessar as propriedades do serviço FLUIG, conforme imagem abaixo:

![](/download/attachments/152802071/image2013-9-24%2018%3A0%3A38.png?version=1&modificationDate=1408629210000&api=v2)

 - É preciso configurar um usuário administrador para execução do serviço. Certifique-se que este usuário tenha**controle total** sobre os diretórios do volume.

![](/download/attachments/267788666/cali%20image1.png?version=1&modificationDate=1530824699000&api=v2)

 - Na tela de Serviços do Windows® também é necessário que o serviço *Spooler* de Impressão esteja iniciado nas máquinas onde será realizada a impressão:

![](/download/attachments/152802071/image2013-9-25%2014%3A25%3A52.png?version=1&modificationDate=1408629210000&api=v2)

# Configurar os componentes do pacote Microsoft® Office

---

Também será preciso executar o programa de Serviços de Componente do Windows®. Este programa é responsável pela gestão de componentes de integração COM dentro do Windows®.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

Acesse o Executar (Win + R) ou *prompt* do sistema operacional e digite: **dcomcnfg**. 

Neste programa execute os seguintes passos para configurar arquivos Microsoft® Excel, Microsoft® Word e Microsoft® PowerPoint:

 - Expanda a opção **Serviços de Componente**

 - Expanda a opção **Computadores**

 - Expanda a opção **Meu Computador**

 - Clique no item **Config DCOM**.

![](/download/attachments/267788666/cali%20image2.png?version=1&modificationDate=1530824758000&api=v2)

Na listagem de componentes exibida no painel central, procure pelos componentes:

 1. Microsoft Excel Application;

 2. Documento do Microsoft Word 97 - 2003;

 3. Aplicativo do Microsoft PowerPoint.

Clique sobre o componente em questão com o botão direito do *mouse* e selecione **Propriedades**:

Importante!

Repetir as mesmas permissões de acesso para os três componentes (Word®, Excel® e PowerPoint®).

![](/download/attachments/152802071/4.png?version=1&modificationDate=1465580810000&api=v2)

Selecione a aba Identidade e escolha a opção **O usuário interativo.**

Em alguns casos esta opção não atende o problema, sendo recomendado portanto selecionar **Este usuário** e definir o mesmo usuário responsável por iniciar o serviço do Fluig.

![](/download/attachments/267788666/cali%20image3.png?version=1&modificationDate=1530824826000&api=v2)

Na aba Segurança selecione a opção **Personalizar** para todos os tipos de segurança.

Clique também em **Editar** e adicione o grupo **Todos** em cada uma das permissões:

![](/download/attachments/267788666/cali%20image4.png?version=1&modificationDate=1530824877000&api=v2)

Após adicionar o grupo **Todos**, atribuir a opção **Permitir** para todas as permissões possíveis, conforme imagens abaixo:

 1. Permissão de Acesso:

   Acesso Local e Acesso remoto

 Permissão de Início e Ativação

   1. Início Local e Início Remoto

   2. Ativação Local e Ativação Remota

 Alterar Permissão de Configuração

   1. Controle total

   2. Ler

![](/download/attachments/267788666/config%20servicos.PNG?version=1&modificationDate=1568402196363&api=v2)

Na aba Local desmarque todas as opções da tela.

![](/download/attachments/267788666/image2017-10-16_14-31-28.png?version=1&modificationDate=1508175089000&api=v2)

Após realizar os passos anteriores, efetuar um teste de impressão.

Caso a impressão não funcione corretamente com todas as opções desmarcadas, marque a opção **Executar o aplicativo neste computador** e faça um novo teste.

![](/download/attachments/267788666/Captura%20de%20tela%20de%202020-07-20%2013-51-41.png?version=2&modificationDate=1595264138927&api=v2)

Dica

Caso tenha interesse que o Serviço de Componentes sempre seja exibido no Console, é necessário salvar estas configurações utilizando a opção Salvar e informando um diretório para armazenar o arquivo **console.msc**. Ao executar o Console de Gerenciamento novamente, abra este arquivo.

# Configuração dos componentes 32 bits

---

Importante!

Em algumas máquinas com sistemas operacionais 64 bits, os componentes do Microsoft® Office não são criados no Serviços de Componente para 64 bits, e sim no de 32 bits. Siga os próximos passos para realizar esta configuração.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Para visualizar os Serviços de Componente de 32 bits, execute o Console de Gerenciamento para 32 bits:

![](/download/attachments/152802071/1.png?version=2&modificationDate=1465905669000&api=v2)

 - Adicionar o Serviços de Componente ao Console de Gerenciamento, conforme imagens abaixo:

![](/download/attachments/267788666/Captura_sem_t%C3%ADtulo_082715_111700_AM.jpg?version=1&modificationDate=1476379233000&api=v2)

 1. Selecione na lista de Snap-ins disponíveis, o Serviços de Componente;

 2. Adicione o Snap-in selecionado;

 3. Clique em OK;

 4. Volte para o tópico anterior e efetue os passos para configuração do pacote Microsoft® Office.

![](/download/attachments/267788666/cali%20box%204.png?version=1&modificationDate=1530825203000&api=v2)

# Forçando a configuração do usuário através da GPO (Group Policy).

---

Em caso de instalação do pacote Microsoft® Office através de GPO (*Grupo Policy*) no servidor de aplicação, deve-se observar a necessidade de inclusão do usuário neste procedimento.

Para isto, é preciso seguir os passos abaixo para que o usuário não seja mais removido na instalação.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Após configurar o usuário e senha na DCOM (Serviços de Componentes), conforme imagem abaixo:

![](/download/attachments/267788666/user%20dcom.png?version=1&modificationDate=1476377002000&api=v2)

 - O Windows® salva o usuário em uma regra nas Diretivas de Segurança Local, que podem ser acessadas conforme imagem abaixo:

![](/download/attachments/267788666/acessar%20diretivas%20locais.png?version=1&modificationDate=1476377002000&api=v2)

 - O Windows® salva o usuário em uma regra nas Diretivas de Segurança Local, que podem ser acessadas conforme imagem abaixo:

 ![](/download/attachments/267788666/local%20antes%20da%20gpo.png?version=1&modificationDate=1476377002000&api=v2)

 - Após aplicação forçada da GPOs, atualizando as permissões do servidor de aplicação, conforme imagem abaixo.

![](/download/attachments/267788666/aplica%C3%A7%C3%A3o%20da%20GPO.png?version=1&modificationDate=1476377002000&api=v2)

 - Após este processo, pode-se perder o usuário nesta regra, conforme é exibido na imagem abaixo, automaticamente afetando a utilização dos pacotes do Microsoft® Office

![](/download/attachments/267788666/local%20depois%20da%20gpo.png?version=1&modificationDate=1476377002000&api=v2)

Importante!

Para solução deste problema, basta incluir na GPO o usuário responsável por subir os componentes, que no caso foi informado, conforme a imagem do Passo 1 deste tutorial.

# Possíveis problemas

---

- [Situação 1](#)
- [Situação 2](#)

 - É importante conferir qual usuário está iniciando o software do pacote Microsoft® Office, neste caso deve ser o mesmo que está configurado para iniciar o serviço do Fluig.

 - Para isto, é utilizado o gerenciador de tarefas, na aba de "Processos", conforme imagem abaixo:

Importante!

O processo normalmente deve subir e descer de forma rápida, em torno de 4 segundos, conforme é feito a requisição pelo Fluig.

Em caso do processo ficar preso muito mais tempo que isso pode ocasionar outros problemas no Fluig, como calculo do CRC do documento, gerando o erro "Documento modificado externamente" ao visualizar o mesmo.

![](/download/attachments/267788666/processo%20word.png?version=1&modificationDate=1476377002000&api=v2)

 - Observar se não há outros usuários logados no servidor de aplicação que podem estar causando conflitos no momento que o Fluig utilizar os componentes do Microsoft® Office, isto pode ser visto através do gerenciador de tarefas, na aba "Usuários" conforme imagem abaixo:

Importante!

No caso do servidor possuir outros usuários logados e principalmente com algum software do pacote Microsoft® Office aberto, deverá ser finalizado a respectiva sessão.

![](/download/attachments/267788666/usu%C3%A1rios%20logados%20no%20servidor.png?version=1&modificationDate=1476377002000&api=v2)


<!-- anchors: Configuraçãodeserviçosdecomponentes-Objetivo, Configuraçãodeserviçosdecomponentes-Configuraçãodosserviços, servicos, servicos-1, servicos-2, servicos-3, Configuraçãodeserviçosdecomponentes-ConfiguraroscomponentesdopacoteMicrosoft®Office, componente, componente-1, componente-2, componente-3, componente-4, componente-5, componente-6, componente-7, Configuraçãodeserviçosdecomponentes-Configuraçãodoscomponentes32bits, componente32bits, componente32bits-1, componente32bits-2, componente32bits-3, Configuraçãodeserviçosdecomponentes-ForçandoaconfiguraçãodousuárioatravésdaGPO(GroupPolicy)., forceusariodcom, forceusariodcom-1, forceusariodcom-2, forceusariodcom-3, forceusariodcom-4, Configuraçãodeserviçosdecomponentes-Possíveisproblemas, componente32bits, componente32bits-1, componente32bits-2 -->
