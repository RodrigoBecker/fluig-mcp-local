---
title: "Instalação da plataforma em Windows - Instalador"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257622840"
scraped_at: "2026-03-09T04:54:12.019Z"
depth: 3
anchors: 29
child_links: 60
---

# Instalação da plataforma em Windows - Instalador

# Pré-requisitos

---

Antes de iniciar uma instalação, certifique-se de que os procedimentos e requisitos abaixo foram preenchidos:

- Leia atentamente o [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732).

- Verifique se as configurações e especificações do servidor estão de acordo com os requisitos estipulados no [Dimensionamento](https://tdn.totvs.com/display/fluig/Dimensionamento) e na [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

- Confirme se a base de dados da plataforma foi criada em um banco de dados homologado, conforme as orientações descritas em [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464), [SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499) ou [Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

# Passo a passo para a instalação da plataforma

---

A seguir, acompanhe o passo a passo para instalação da plataforma em Windows:

Atenção!

Por questões de segurança, orientamos não expor sua plataforma diretamente à internet. Para isso, será necessário [criar uma rede DMZ](https://tdn.totvs.com/x/MZIbCQ) juntamente com o [protocolo HTTPS](https://tdn.totvs.com/x/vdMgFQ).

- [01](#)
- [02](#)
- [03](#)
- [04](#)
- [05](#)
- [06](#)
- [07](#)
- [08](#)
- [09](#)
- [10](#)
- [11](#)
- [12](#)
- [13](#)
- [14](#)
- [15](#)

 - Na primeira tela, o idioma da mídia de instalação deve ser selecionado.

![](/download/attachments/257622840/1.png?version=3&modificationDate=1747155916523&api=v2)

 - Em **Termo de uso**, é exibido o contrato de licença do produto que contém os termos de uso, *copyright* e recomendações para a execução da instalação que deverão ser lidos atentamente.

 - Para prosseguir, assinale a opção **Eu concordo com este contrato de licença** e em seguida, clique em **Próximo**.

![](/download/attachments/257622840/Image%20002.png?version=2&modificationDate=1747155966677&api=v2)

 - Em **Instalação do TOTVS Fluig**, informe se deverá ser realizada a instalação ou a atualização da plataforma.

 - Mantenha assinalada a opção **Instalar o TOTVS Fluig**.

![](/download/attachments/257622840/Image%20003.png?version=2&modificationDate=1747156072990&api=v2)

Dica!

Se ao invés de instalar um novo ambiente você deseja atualizar uma instalação existente, acesse o [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186).

 - Em **Diretório de instalação** informe o diretório destino da aplicação. Por padrão a pasta de instalação será chamada "fluig" e ficará armazenada na unidade em que o sistema operacional está instalado. Por exemplo: "C:\fluig".

Importante!

Não é permitida a instalação da plataforma em pastas cujo nome contenha acentuações e/ou espaços.

![](/download/attachments/257622840/Image%20005.png?version=2&modificationDate=1747156185657&api=v2)

 - Em **Dados do servidor** devem ser preenchidas as informações de acesso ao servidor Fluig.

 - O campo**Endereço IP** é preenchido automaticamente pelo instalador, porém confirme se este é o IP correto de acesso ao servidor, pois em um servidor com múltiplas interfaces de rede, a sugestão de endereço IP pode não ser a interface de rede principal.

 - **Porta:**porta do servidor que será utilizada para a execução da plataforma.

 - **URL pública**: endereço público pelo qual a plataforma pode ser acessada.

![](/download/attachments/257622840/Image%20006.png?version=2&modificationDate=1747156250947&api=v2)

Nota:

A plataforma não permite o uso do "*localhost*" no campo Endereço IP. Para ambientes focados exclusivamente em desenvolvimento sobre a plataforma ou treinamento, recomendamos o uso do endereço "127.0.0.1" ou o *hostname* do servidor.

 - Em **Banco de dados** selecione o banco mais adequado às suas necessidades.

Importante!

O sistema gerenciador do banco de dados deve estar instalado e o banco ou instância deve ter sido previamente criado, conforme os pré-requisitos listados no [início deste guia](#InstalaçãodaplataformaemWindowsInstalador-requisitos).

![](/download/attachments/257622840/Image%20007.png?version=2&modificationDate=1747156425543&api=v2)

 - Nesta etapa informe os dados para conexão com o banco de dados.

 - Cada banco de dados possui uma configuração de conexão distinta, portanto confira abaixo as informações necessárias para cada um dos banco de dados e utilize o guia referente ao banco de dados selecionado anteriormente:

- [MySQL](#)
- [SQL Server](#)
- [Oracle](#)

Importante!

Para o **banco de dados MySQL**, é necessário que a base seja criada conforme descrito em [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464).

Para configurar a conexão com um banco de dados MySQL, é necessário informar os seguintes dados:

     - **Arquivo do Driver:**informe o caminho do driver MySQL. Para obter o driver do MySQL, consulte a página [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464#Configura%C3%A7%C3%A3odebancodedadosMySQL-1.6-DownloaddoDriver);

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**nome do banco de dados.

![](/download/attachments/257622840/Image%20010.png?version=2&modificationDate=1747156674037&api=v2)

Importante!

Para o **banco de dados SQL Server**, é necessário que a base seja criada conforme descrito em [Configuração do banco de dados SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499).

Para configurar a conexão com um banco de dados Microsoft SQL Server, é necessário informar os seguintes dados:

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**nome do banco de dados;

     - **Instância:**nome da instância do SQL Server.

![](/download/attachments/257622840/Image%20011.png?version=2&modificationDate=1747156728050&api=v2)

Importante!

Para o **banco de dados Oracle**, é necessário realizar algumas configurações para inicialização da plataforma, conforme detalhes em [Configuração do banco de dados Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

Para um banco de dados Oracle é necessário informar os seguintes dados:

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**SID (Oracle *System Identifier*) da instância do banco de dados.

![](/download/attachments/257622840/Image%2030.png?version=1&modificationDate=1747156787777&api=v2)

 - Em **Configuração de e-mail** os campos não são obrigatórios. Poderão ser informados o endereço do **Servidor SMTP**, a **Porta SMTP** e o **E-mail do remetente** padrão para envio de notificações a respeito das ações tomadas na plataforma.

 - Caso o servidor SMTP exija autenticação é necessário assinalar a opção**Servidor exige autenticação** e informar um usuário e senha válido.

![](/download/attachments/257622840/Image%20012.png?version=2&modificationDate=1747156862970&api=v2)

 - Em **Tipo de licenciamento** escolha a opção mais adequada para seu ambiente.

![](/download/attachments/257622840/Image%20013.png?version=2&modificationDate=1747157012967&api=v2)

  - Nesta etapa são oferecidas duas opções de licenciamento. Cada uma é configurada de forma diferente na plataforma.

  - Clique nas opções abaixo e verifique.

- [License Server](#)
- [Fluig Identity Partner](#)

Em **Servidor de licenças**, informe o endereço do **Servidor de licenças** e **Porta do servidor de licenças** para que a plataforma seja habilitada para uso. Esta configuração é válida para todas as empresas cadastradas. Os valores preenchidos podem ser editados após a instalação pelo painel administrativo da plataforma.

Importante!

Os valores preenchidos automaticamente pelo instalador são apenas uma sugestão e não apontam necessariamente para um servidor de licenças válido.

         Clientes *cloud* devem abrir um *ticket* para a Equipe de atendimento Cloud TOTVS solicitando alteração do *License Server*. 

![](/download/attachments/257622840/Image%20015.png?version=2&modificationDate=1747157228207&api=v2)

O** Fluig Identity Partner** é um novo modelo de licenciamento que utiliza o TOTVS Identity na nuvem para controlar o acesso à plataforma. Para que clientes atuais e novos utilizem o modo License Server.

Sua configuração é realizada após acessar a plataforma, utilizando um usuário com perfil de administrador.

 - Em **Servidor Realtime**, assinale a opção **Habilitar Realtime**, se desejado.

 - Se a opção acima for assinalada, informe o **IP/Nome do servidor**, a **Porta pública** e a **Porta interna**.

 - O mesmo servidor utilizado para a instalação da plataforma pode ser utilizado para a configuração do *Realtime*, basta informar o endereço IP preenchido no passo 5.

Nota:

O Servidor *Realtime* é responsável por atualizar a [Central de notificações](https://tdn.totvs.com/pages/viewpage.action?pageId=233763951) do usuário, sem que seja necessário atualizar toda a página da plataforma.

![](/download/attachments/257622840/Image%20016.png?version=2&modificationDate=1747159046040&api=v2)

 - Em **Servidor de indexação**é possível configurar o servidor que será utilizado no processo de indexação dos documentos do repositório. Informar a **URL** do servidor. 

![](/download/attachments/257622840/Image%20017.png?version=2&modificationDate=1747157550097&api=v2)

 - Neste passo o instalador informa os pacotes do sistema que serão instalados.

 - Em seguida, o instalador irá verificar a compatibilidade dos componentes de software existente no servidor e prepara a instalação com os dados informados anteriormente.

![](/download/attachments/257622840/Image%20020.png?version=2&modificationDate=1747157886407&api=v2)

 - Os arquivos serão copiados para a pasta destino da instalação.

![](/download/attachments/257622840/Image%20021.png?version=2&modificationDate=1747158105177&api=v2)

 - Nesse passo o instalador exibe a execução dos processos externos e um relatório sobre a instalação do produto. O sistema será registrado como um serviço do Microsoft Windows.

![](/download/attachments/257622840/Image%20024.png?version=2&modificationDate=1747158226530&api=v2)

 - A instalação da plataforma é concluída com sucesso. Clique em **Ok** e, depois, em **Sair** para encerrar.

Importante!

Por questões de segurança, é altamente recomendável efetuar a encriptação da senha conforme o procedimento informado [nesta documentação](/pages/viewpage.action?pageId=454434362).

![](/download/attachments/257622840/Image%20025.png?version=2&modificationDate=1747158324240&api=v2)

# Inicialização da plataforma

---

O Fluig será instalado como um serviço no Microsoft Windows. Para iniciar ou interromper a aplicação, acesse a partir do Menu Iniciar: **Painel de Controle** → **Ferramentas Administrativas** → **Serviços**.

![](/download/attachments/257622840/23.png?version=1&modificationDate=1489682443000&api=v2)

Antes de iniciar os serviços do Fluig, é necessário alterar o usuário de inicialização. Os serviços fluig_Indexer, fluig_RealTime e fluig devem ser inicializados, nesta ordem, por um usuário que tenha privilégios de administrador no servidor onde fluig foi instalado. Para isso, siga os seguintes passos:

**01.** Clique com o botão direito do mouse sobre um dos serviços do Fluig;

**02.** Selecione a opção **Propriedades**;

**03.** Selecione a aba **Logon** no topo da janela;

**04.** Selecione a opção **Esta conta** e informe um usuário com privilégios administrativos no servidor.

Esse procedimento deve ser realizado nos três serviços do Fluig. Uma vez concluída a configuração, inicie o fluig_Indexer, o fluig_RealTime e o fluig, nesta ordem.

![](/download/attachments/257622840/Propriedades%20do%20servi%C3%A7o.gif?version=1&modificationDate=1489682238000&api=v2)

Para acompanhar o processo de inicialização, acesse a pasta de instalação da plataforma, navegue até o diretório [diretório_instalação]\appserver\standalone\log (a partir da **2.0**) ou [diretório_instalação]\appserver\domain\servers\fluig1\log (até a **1.8.2**) e consulte o arquivo **server.log**. Quando a inicialização estiver concluída, a seguinte mensagem será exibida neste arquivo:

[?](#)

| `INFO  [com.fluig.startup.service.FluigStartupBean] (EJB TIMER - 10) == Fluig is up and running right now.        ==` |
| --- |

# Primeiro acesso

---

Para informações sobre os próximos passos, que envolvem o primeiro acesso à plataforma, acesse a documentação [Primeiro acesso após a instalação da plataforma](/pages/viewpage.action?pageId=431678598).


<!-- anchors: InstalaçãodaplataformaemWindowsInstalador-Pré-requisitosrequisitos, InstalaçãodaplataformaemWindowsInstalador-Passoapassoparaainstalaçãodaplataforma, install-windows, install-windows-1, install-windows-2, install-windows-3, install-windows-4, install-windows-5, install-windows-6, install-windows-7, db-config, db-config-mysql, db-config-sqlserver, db-config-oracle, install-windows-8, install-windows-9, 9, db-config, db-config-ls, db-config-partner, install-windows-10, install-windows-11, install-windows-12, install-windows-13, install-windows-15, install-windows-16, InstalaçãodaplataformaemWindowsInstalador-Inicializaçãodaplataforma, highlighter_267930, InstalaçãodaplataformaemWindowsInstalador-Primeiroacesso -->
