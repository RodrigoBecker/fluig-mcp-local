---
title: "Instalação da plataforma no Linux - Instalador"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257622802"
scraped_at: "2026-03-09T04:39:14.984Z"
depth: 3
anchors: 31
child_links: 66
---

# Instalação da plataforma no Linux - Instalador

# Pré-requisitos 

---

Antes de iniciar uma instalação, certifique-se de que os procedimentos e requisitos abaixo foram preenchidos:

- Leia atentamente o [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732).

- Verifique se as configurações e especificações do servidor estão de acordo com os requisitos estipulados no [Dimensionamento](https://tdn.totvs.com/display/fluig/Dimensionamento) e na [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

- Confirme se a base de dados foi criada em um banco de dados homologado, conforme as orientações descritas em [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464), [SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499) ou [Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

- Conheça as orientações listadas no documento [Configurações sugeridas em ambientes Linux.](https://tdn.totvs.com/pages/viewpage.action?pageId=242389225)

- É obrigatório que a instalação da plataforma seja realizada utilizando o usuário **root** ou um usuário que tenha os privilégios de instalação de pacotes e alteração de serviços.

Importante!

É necessário que o usuário utilizado para iniciar o serviço do Fluig seja o mesmo usuário proprietário (owner) da pasta de instalação.

- Para realizar a instalação, será necessário possuir um gerenciador de interface gráfica ativo no Linux. Para instalações em modo caractere, acesse [Instalação Linux - Modo Caractere](/pages/viewpage.action?pageId=152797808).

- Ter instalado o pacote *unzip* para descompactação de arquivos.

# Distribuições homologadas

---

As distribuições Linux homologadas para a plataforma TOTVS Fluig podem ser consultadas na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade).

Orientação de segurança

Por motivos de segurança recomendamos que, após a instalação da plataforma em ambientes Linux, seja retirado o usuário como root seguindo o processo na documentação [Configurar ambiente Linux para não utilizar o usuário root](https://tdn.totvs.com/x/v2cWGw).

# Passo a passo para a instalação da plataforma

---

Atenção!

Por questões de segurança orientamos não expor sua plataforma diretamente à internet. Para isso, será necessário [criar uma rede DMZ](https://tdn.totvs.com/x/MZIbCQ) juntamente com o [protocolo HTTPS](https://tdn.totvs.com/x/vdMgFQ).

Abra o terminal do sistema operacional e execute o seguinte comando:

[?](#)

| `$``sudo` `bash` `fluig-installer-64.sh` |
| --- |

Em seguida, acompanhe o passo a passo para instalação gráfica do Fluig em Linux:

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

![](/download/attachments/257622802/passo1.png?version=2&modificationDate=1747839263543&api=v2)

 - Em **Termo de uso** é exibido o contrato de licença do produto que contém os termos de uso, *copyright* e recomendações para a execução da instalação que deverão ser lidos atentamente.

 - Para prosseguir, assinale a opção **Eu concordo com este contrato de licença** e em seguida, clique em **Próximo**.

![](/download/attachments/257622802/passo2.png?version=3&modificationDate=1747839608473&api=v2)

 - Em **Instalação do TOTVS Fluig** informe se deverá ser realizada a instalação ou atualização da plataforma.

 - Mantenha assinalada a opção **Instalar o TOTVS Fluig**.

![](/download/attachments/257622802/passo3.png?version=3&modificationDate=1747840020383&api=v2)

 - Em **Diretório de instalação** informe o diretório destino da aplicação. Por padrão a pasta de instalação será chamada "fluig" e ficará armazenada na unidade em que o sistema operacional está instalado. Por exemplo: "/opt/fluig".

Importante!

Não é permitida a instalação da plataforma em pastas cujo nome contenha acentuações e/ou espaços.

![](/download/attachments/257622802/passo4.png?version=3&modificationDate=1747855607377&api=v2)

 - Em **Dados do servidor** devem ser preenchidas as informações de acesso ao servidor Fluig.

 - O campo**Endereço IP** é preenchido automaticamente pelo instalador, porém confirme se este é o IP correto de acesso ao servidor, pois em um servidor com múltiplas interfaces de rede, a sugestão de endereço IP pode não ser a interface de rede principal.

 - **Porta:**porta do servidor que será utilizada para a execução da plataforma.

 - **URL pública**: endereço público pelo qual a plataforma pode ser acessada.

![](/download/attachments/257622802/passo5.png?version=3&modificationDate=1747855785013&api=v2)

A plataforma não permite o uso do "*localhost*" no campo Endereço IP. Para ambientes focados exclusivamente em desenvolvimento sobre a plataforma ou treinamento, recomendamos o uso do endereço "127.0.0.1" ou o *hostname* do servidor.

 - Em **Banco de dados** selecione o banco mais adequado às suas necessidades.

Importante!

O sistema gerenciador do banco de dados deve estar instalado e o banco ou instância deve ter sido previamente criado, conforme os pré-requisitos listados no [início deste guia](#InstalaçãodaplataformanoLinuxInstalador-requisitos).

![](/download/attachments/257622802/passo6.png?version=3&modificationDate=1747856015500&api=v2)

 - Nesta etapa informe os dados para conexão com o banco de dados.

 - Cada banco de dados possui uma configuração de conexão distinta, portanto confira abaixo as informações necessárias para cada um dos banco de dados e utilize o guia referente ao banco de dados selecionado anteriormente:

- [MySQL](#)
- [Microsoft SQL Server](#)
- [Oracle](#)

Importante!

Para o **banco de dados MySQL**, é necessário que a base seja criada conforme descrito em [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464);

 Para configurar a conexão com um banco de dados MySQL, é necessário informar os seguintes dados:

     - **Arquivo do Driver:**informe o caminho do driver MySQL. Para obter o driver do MySQL, consulte a página [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464#ConfiguraçãodebancodedadosMySQL-DownloaddoDriver);

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**nome do banco de dados. 

![](/download/attachments/257622802/passo7-mysql.png?version=3&modificationDate=1747856255807&api=v2)

Importante!

Para o **banco de dados SQL Server**, é necessário que a base seja criada conforme descrito em [Configuração do banco de dados SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499).

Para configurar a conexão com um banco de dados Microsoft SQL Server, é necessário informar os seguintes dados:

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**nome do banco de dados;

     - **Instância:**nome da instância do SQL Server.

![](/download/attachments/257622802/passo7-sqlserver.png?version=3&modificationDate=1747856479880&api=v2)

Importante!

Para o **banco de dados Oracle**, é necessário realizar algumas configurações para inicialização da plataforma, conforme detalhes em [Configuração do banco de dados Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

Para um banco de dados Oracle é necessário informar os seguintes dados:

     - **Usuário:**usuário utilizado para conexão com o banco de dados;

     - **Senha:**senha do usuário utilizado para conexão com o banco de dados;

     - **Servidor:**endereço do servidor;

     - **Porta:**porta lógica do servidor;

     - **Banco:**SID (Oracle *System Identifier*) da instância do banco de dados.

![](/download/attachments/257622802/passo7-oracle.png?version=3&modificationDate=1747856608620&api=v2)

 - Em **Configuração de e-mail** os campos não são obrigatórios. Poderão ser informados o endereço do **Servidor SMTP**, a **Porta SMTP** e o **E-mail do remetente** padrão para envio de notificações a respeito das ações tomadas no Fluig.

 - Caso o servidor SMTP exija autenticação é necessário assinalar a opção**Servidor exige autenticação** e informar um usuário e senha válidos.

![](/download/attachments/257622802/passo8.png?version=3&modificationDate=1747856867770&api=v2)

 - Em **Tipo de licenciamento** escolha a opção mais adequada para seu ambiente.

![](/download/attachments/257622802/passo9.png?version=2&modificationDate=1747857052663&api=v2)

  - Nesta etapa são oferecidas duas opções de licenciamento. Cada uma é configurada de forma diferente na plataforma.

  - Clique nas opções abaixo e verifique.

- [License Server](#)
- [Fluig Identity Partner](#)

Em **Servidor de licenças** informe o endereço do **Servidor de licenças** e **Porta do servidor de licenças**, para que a plataforma seja habilitada para uso. Esta configuração é válida para todas as empresas cadastradas. Os valores preenchidos podem ser editamos após a instalação através do painel administrativo da plataforma.

Importante!

Os valores preenchidos automaticamente pelo instalador são apenas uma sugestão e não apontam necessariamente para um servidor de licenças válido.

         Clientes Cloud devem abrir um ticket para a Equipe de Atendimento Cloud TOTVS solicitando alteração do License Server. 

![](/download/attachments/257622802/passo9-servidor-licen%C3%A7a.png?version=1&modificationDate=1747857638550&api=v2)

O** Fluig Identity Partner** é um modelo de licenciamento que utiliza o TOTVS Identity na nuvem para controlar o acesso à plataforma. Para que clientes atuais e novos utilizem o modo License Server.

Sua configuração é realizada após acessar a plataforma, utilizando um usuário com perfil de administrador.

 - Em **Servidor Realtime**, assinale a opção **Habilitar Realtime**, se desejado.

 - Se a opção acima for assinalada, informe o **IP/Nome do servidor**, a **Porta pública** e a **Porta interna**.

 - O mesmo servidor utilizado para a instalação da plataforma pode ser utilizado para a configuração do *chat*, basta informar o endereço IP preenchido no passo 5.

Nota:

O Servidor de Chat é responsável por atualizar a [Central de notificações](https://tdn.totvs.com/pages/viewpage.action?pageId=233763951) do usuário, sem que seja necessário atualizar toda a página da plataforma.

![](/download/attachments/257622802/passo10.png?version=3&modificationDate=1747857838807&api=v2)

 - Na tela configuração **Servidor de indexação**é possível configurar o servidor que será utilizado no processo de indexação dos documentos do repositório. Informar a **URL** do servidor.

![](/download/attachments/257622802/passo11.png?version=4&modificationDate=1747858442877&api=v2)

 - Neste passo o instalador informa os pacotes do sistema que serão instalados.

 - Em seguida, o instalador irá verificar a compatibilidade dos componentes de software existente no servidor e preparar a instalação com os dados informados anteriormente.

![](/download/attachments/257622802/passo13.png?version=3&modificationDate=1747858639087&api=v2)

 - Os arquivos serão copiados para a pasta destino da instalação.

![](/download/attachments/257622802/passo14.png?version=3&modificationDate=1747858815770&api=v2)

 - Nesse passo o instalador exibe a execução dos processos externos e um relatório sobre a instalação do produto. O sistema será registrado como um serviço do Microsoft Windows.

![](/download/attachments/257622802/passo15.png?version=3&modificationDate=1747859156730&api=v2)

Importante!

Algumas distribuições Linux não possuem o comando **chkconfig**, o que gera um alerta informando que o comando não foi encontrado durante a execução dos processos externos da instalação. Caso isto ocorra, clique em **Sim** na caixa de diálogo aberta para continuar com o processo de instalação.

 - A instalação da plataforma é concluída com sucesso. Clique em **Ok** e, depois, em **Sair** para encerrar.

Importante!

Por questões de segurança é altamente recomendável efetuar a encriptação da senha conforme o procedimento informado [nesta documentação](/pages/viewpage.action?pageId=454434362).

![](/download/attachments/257622802/passo16.png?version=3&modificationDate=1747859268180&api=v2)

Importante!

Não se esqueça de revisar as orientações apresentadas na página de [Configurações sugeridas em ambientes Linux.](https://tdn.totvs.com/pages/viewpage.action?pageId=242389225)

# Exceção Firewall

---

Caso o servidor onde a plataforma foi instalada possua *firewall* ativo é necessário adicionar exceções para as seguintes portas utilizadas pela plataforma:

- Porta do Servidor de Aplicação do Fluig;
- Porta do Servidor para RealTime;
- Porta do Servidor de Chat.

# Inicialização

---

Os procedimentos de inicialização estão disponíveis na página [Inicializar Fluig - Linux](/display/fluig/Inicializar+Fluig+-+Linux).

# Primeiro acesso

---

Para informações sobre os próximos passos, que envolvem o primeiro acesso à plataforma, acesse a documentação [Primeiro acesso após a instalação da plataforma](/pages/viewpage.action?pageId=431678598).

Dica

Para informações sobre utilização da plataforma, acesse o [Guia rápido da plataforma](/pages/viewpage.action?pageId=73894420), acompanhe os primeiros passos e se familiarize com o produto!


<!-- anchors: InstalaçãodaplataformanoLinuxInstalador-Pré-requisitosrequisitos, InstalaçãodaplataformanoLinuxInstalador-Distribuiçõeshomologadas, InstalaçãodaplataformanoLinuxInstalador-Passoapassoparaainstalaçãodaplataforma, highlighter_154940, install-linux, install-linux-1, install-linux-2, install-linux-3, install-linux-4, install-linux-5, install-linux-6, install-linux-7, db-config, db-config-mysql, db-config-sqlserver, db-config-oracle, install-linux-8, install-linux-9, 9, db-config, db-config-ls, db-config-partner, install-linux-10, install-linux-11, install-linux-13, install-linux-14, install-linux-15, install-linux-16, InstalaçãodaplataformanoLinuxInstalador-ExceçãoFirewall, InstalaçãodaplataformanoLinuxInstalador-Inicializaçãoinicializacao, InstalaçãodaplataformanoLinuxInstalador-Primeiroacesso -->
