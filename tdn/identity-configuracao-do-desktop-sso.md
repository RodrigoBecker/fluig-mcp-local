---
title: "Identity | Configuração do Desktop SSO"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=146969084"
scraped_at: "2026-03-09T05:12:37.531Z"
depth: 3
anchors: 61
child_links: 45
---

# Identity | Configuração do Desktop SSO

# Falando de configuração do Desktop SSO...

---

O Desktop SSO é um componente não obrigatório na arquitetura do Identity e que pode ser habilitado pelo administrador do contexto. Ele é responsável pelo *Single Sign On* (SSO), o que permite aos usuários que já estejam autenticados no Windows da estação de trabalho acessar o Identity sem informar as credenciais (e-mail e senha) manualmente.

A validação das credenciais do Windows no Identity é realizada através de um *script* ASP, que é gerado pelo próprio Identity e deve ser hospedado em um servidor IIS (*Internet Information Service*). O *script* consulta as credenciais no Active Directory, recupera o e-mail associado ao usuário e o valida no Identity.

Se as credenciais forem legítimas, o usuário obterá acesso ao Identity sem a necessidade de informá-las manualmente. Caso as credenciais não sejam válidas, será apresentada ao usuário a página de login do Identity, onde ele deverá informar o e-mail e senha para ter acesso às aplicações.

Para maior segurança, é possível cadastrar intervalos de IPs, que restringem a permissão para utilização do recurso de SSO. Isto permite, por exemplo, que usuários internos da empresa tenham a experiência SSO habilitada, enquanto usuários externos à rede corporativa serão obrigados a entrar com credenciais manualmente para ter acesso ao Identity e seus aplicativos.

Atenção!

O Desktop SSO não cria o usuário no TOTVS Identity, então ele precisa ser criado previamente, com o mesmo e-mail que está no AD, para que o login funcione corretamente.

**oculto**

Os passos para configuração dessa página foram repassados ao artigo: [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360025124393](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360025124393)
Caso tenha alguma alteração, lembrar de atualizar lá! ![(wink)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/wink.svg)

# Habilitando o Desktop SSO no Identity

Siga os passos abaixo como administrador do contexto para habilitar o Desktop SSO.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Para habilitar o SSO em um contexto do TOTVS Identity, o administrador deve acessar ![](/download/attachments/146969084/flaticon-settings%20%281%29.png?version=1&modificationDate=1596636621923&api=v2) **Configurações**.

 - Acessar a aba **Active Directory**.

![](/download/attachments/146969084/aba_active_directory.gif?version=1&modificationDate=1518632194000&api=v2)

 - No final da página, marcar a opção **Permitir o acesso via Desktop SSO**.

 - Acionar o *link*** Configurações do Desktop SSO**.

![](/download/attachments/146969084/Image%2011%2013%20003.png?version=1&modificationDate=1510583708000&api=v2)

 - Nesta página será realizada a definição dos intervalos de endereços IP que serão liberados para executar o SSO.

 - Acionar ![](/download/attachments/146969084/editar.png?version=1&modificationDate=1510599672000&api=v2) (**Editar**).

 - É importante que o responsável pela infraestrutura do cliente acompanhe o processo de configuração do Identity, inclusive a configuração do Desktop SSO. Este profissional poderá facilitar algumas configurações como por exemplo, IPs externos, dados de conexão com o Active Directory e usuários para teste.

![](/download/attachments/146969084/Image%2011%2013%20004.png?version=1&modificationDate=1510583750000&api=v2)

 - Informar um endereço IP externo permitido. Os endereços IP informados na configuração do Desktop SSO devem ser **IPs externos** para garantir a comunicação com o TOTVS Identity, que não possui acesso aos IPs internos da rede. Caso não saiba qual o endereço o IP externo, o administrador pode usar sites como [http://www.meuip.com.br/](http://www.meuip.com.br/) para identifica-los.

 - Além de informar um endereço IP específico, é possível informar um intervalo de IPs. Por exemplo: 192.168.4.[0-10]. Essa expressão indica que todos os endereços IP entre 192.168.4.0 e 192.168.4.10 serão permitidos.

Os IPs externos não cadastrados serão redirecionados para a página de login, onde os usuários deverão informar manualmente as credenciais para obter acesso ao contexto. É necessário que a empresa possua um IP externo estático garantindo que usuários deste IP utilizem o Desktop SSO e os IPs diferentes do cadastrado possam utilizar suas credenciais pela tela de autenticação.

 - Informar a **URL do script de Autenticação**, abordado [no próximo tópico.](https://tdn.totvs.com/pages/viewpage.action?pageId=146969084#Configura%C3%A7%C3%A3odoDesktopSSO-iis) Essa URL é o endereço do servidor IIS para acesso ao *script* de autenticação, por exemplo: [https://acme.com/remote_auth.asp](https://acme.com/remote_auth.asp). Nesse momento ainda não é necessário ter o *script* totalmente configurado no IIS, apenas informar o endereço em que o *script* será hospedado.

 - Acionar **Salvar**.

![](/download/attachments/146969084/Image%2011%2013%20005.png?version=1&modificationDate=1510583792000&api=v2)

Se o administrador cadastrar [0-255]. [0-255]. [0-255]. [0-255] como endereço permitido, o Identity entenderá que todos os endereços de acesso são válidos. Contudo, essa configuração poderá acarretar problemas, pois usuários de fora da rede não terão acesso ao endereço do Desktop SSO e receberão uma mensagem erro.

 - A definição dos endereços IPs permitidos é apenas o primeiro passo para configuração do acesso via *Single Sign On*. O próximo passo é a [configuração do *script* remote_auth.asp](https://tdn.totvs.com/pages/viewpage.action?pageId=146969084#Configura%C3%A7%C3%A3odoDesktopSSO-iis) no servidor IIS.

 - O *script* remote_auth.asp é único para cada contexto e seu *download* é habilitado apenas após a definição dos IPs pelo administrador (acionando o botão Salvar).

 - Para fazer o *download*, acionar o botão **Baixar**, que será ativado na seção Baixar o Script de Autenticação SSO.

O *Single Sign On* só será realizado caso o usuário acesse o Identity através do subdomínio cadastrado para o contexto, por exemplo, [empresa].[fluigidentity.com](http://fluigidentity.com).

![](/download/attachments/146969084/Image%2011%2013%20006.png?version=1&modificationDate=1510583847000&api=v2)

# Configurar o Desktop SSO no IIS

Para realizar a configuração do Desktop SSO, é necessário possuir um servidor Windows com o recurso IIS (*Internet Information Services*) habilitado para que o *script* de autenticação SSO seja hospedado. Nos tutoriais abaixo são demonstradas em um servidor Windows Server 2012 R2 a inclusão dos *roles* exigidos e a configuração do *script* no IIS.

## Habilitar Roles

Para o correto funcionamento do *Single Sign On*, é fundamental adicionar os seguintes *roles* ao servidor Windows:

- [Web Server](#)
- [ASP Classic](#)
- [Windows Authentication](#)

 - O *role* *Web Server* inclui o IIS (*Internet Information Services*) e é um pré-requisito para os demais *roles* exigidos para o SSO.

 - No *Server Manager*do Windows, acionar ***Manage*** → **Add Roles and Features**.

 - No *wizard* apresentado, acionar ***Next*** até chegar à pagina *Server Roles*.

 - Marcar a opção **Web Server (IIS)** e acionar ***Next**.*

 - Será apresentando um quadro questionando se os recursos (*features*) necessários para o IIS também devem ser instalados. Acionar ***Add Features***.

 - Acionar ***Next***até chegar à página *Confirmation* e acionar ***Install*** para instalar o *role* *Web Server*.

![](/download/attachments/146969084/web_server%20355.png?version=1&modificationDate=1519215534000&api=v2)

 - Por padrão, o IIS executa aplicações ASP .NET (deve ser a versão 4.5), mas também é preciso habilitar aplicações ASP Classic.

 - Para isso, após a instalação do IIS, acessar novamente o *Server Manager*do Windows, acionar ***Manage*** → **Add Roles and Features**.

 - Na página *Server Roles*, expandir *Web Server* (IIS) → *Web Server* → *Application Development* e marcar o *role***ASP**.

 - Acionar ***Next*** até concluir o *wizard*.

![](/download/attachments/146969084/Image%2002%2020%20001.png?version=1&modificationDate=1519135618000&api=v2)

 - Outro *role* que deve ser habilitado no IIS é a autenticação Windows no Desktop SSO. Desta forma, o navegador poderá enviar as credenciais para a aplicação efetuar as validações necessárias no Active Directory.

 - Acessar o *Server Manager*do Windows, acionar ***Manage*** → **Add Roles and Features**.

 - Na página *Server Roles*, expandir *Web Server* (IIS) → *Web Server* → *Security* e marcar o *role***Windows Authentication**.

 - Acionar ***Next*** até concluir o *wizard*.

![](/download/attachments/146969084/Image%2002%2020%20002.png?version=1&modificationDate=1519135642000&api=v2)

## Ativar tráfego NTLM

Atenção

O NTLM é um protocolo antigo e a Microsoft já tornou obsoleto. Para mais detalhes, consulte a documentação da [Microsoft](https://learn.microsoft.com/pt-br/windows-server/get-started/removed-deprecated-features-windows-server?tabs=ws25).

Confira os passos abaixo para ativar o tráfego NTLM.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

Pressione a tecla **Windows** e a tecla**R** para abrir a janela de **Executar** (Run). Digite **gpmc.msc**.

![](/download/attachments/146969084/NTLM%20001.png?version=1&modificationDate=1612890079560&api=v2)

Irá abrir a janela **Group Policy Management**. Expanda o item **Forest**, em seguida **Domains**, o seu domínio, até chegar no item **Default Domain Policy**.

![](/download/attachments/146969084/NTLM%20002.png?version=1&modificationDate=1612890078600&api=v2)

Clique com botão direito no **Default Domain Policy**. Clique em **Edit**.

![](/download/attachments/146969084/NTLM%20003.png?version=1&modificationDate=1612890078277&api=v2)

Irá abrir a janela **Group Policy Management Editor**.

![](/download/attachments/146969084/NTLM%20004.png?version=1&modificationDate=1612890077890&api=v2)

Acesse **Policies** > **Windows Settings** > **Security Settings** > **Local Policies** > **Security Options**.

![](/download/attachments/146969084/NTLM%20005.png?version=1&modificationDate=1612890077077&api=v2)

Localize a opção indicada abaixo e altere para **Permitir tudo**.

![](/download/attachments/146969084/NTLM%20006.png?version=2&modificationDate=1612890311803&api=v2)

## Configurar o Script no IIS

Após a habilitação dos *roles* obrigatórios, o *script* de autenticação do Desktop SSO deve ser configurado e hospedado no IIS.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)

 - Abrir o **Internet Information Services (IIS) Manager**.

 - Acionar ***Add Website...***.

![](/download/attachments/146969084/Image%2002%2020%20003.png?version=1&modificationDate=1519217614000&api=v2)

 - Preencher as informações necessárias para a criação do site e acionar **OK**.

 - No exemplo abaixo, o **Site name** será "desktopSSO", uma pasta chamada "DSSO" foi criada no diretório padrão "C:\inetpub\wwwroot" e definida como **Physical path**, e a porta será "81".

![](/download/attachments/146969084/Image%2002%2020%20004.png?version=1&modificationDate=1519217878000&api=v2)

 - Copiar o *script* de autenticação do Desktop SSO "remote_auth.asp" para a pasta criada no passo anterior.

Para obter o *script*, seguir as orientações do passo a passo [Habilitando o Desktop SSO](#Identity|ConfiguraçãodoDesktopSSO-habilitar) no Identity. Lembrando que é preciso informar nas configurações do Desktop SSO no Identity o endereço de hospedagem do remote_auth.asp no IIS, por exemplo: [http://localhost:81/remote_auth.asp](http://172.20.61.19/dsso/remote_auth.asp).

![](/download/attachments/146969084/Image%2002%2020%20005.png?version=1&modificationDate=1519218790000&api=v2)

 - No Internet Information Services (IIS) Manager, acionar ***Add Application...*** para criar uma nova aplicação ASP ao *website*.

![](/download/attachments/146969084/Image%2002%2020%20006.png?version=1&modificationDate=1519219246000&api=v2)

 - Preencher os campos necessários para a criação da aplicação e acionar **OK**.

 - No exemplo abaixo, o **Alias** da aplicação será "dsso" e o ***Physical path*** será o mesmo do *website*.

![](/download/attachments/146969084/Image%2002%2020%20007.png?version=1&modificationDate=1519219661000&api=v2)

 - Após a criação da aplicação, deve-se configurar as regras de autenticação.

 - Acionar ***Authentication***.

![](/download/attachments/146969084/Image%2002%2020%20008.png?version=1&modificationDate=1519221146000&api=v2)

 - O status da opção ***Windows Authentication*** deve ser definido como *Enabled* (Habilitado).

 - Todas as demais opções disponíveis devem ter os status definidos como *Disabled* (Desabilitado).

![](/download/attachments/146969084/Image%2002%2020%20009.png?version=1&modificationDate=1519221321000&api=v2)

 - Clicar com o botão direito do *mouse* sobre o item ***Windows Authentication*** e acionar a opção ***Providers...*** para definir os provedores utilizados pela autenticação.

![](/download/attachments/146969084/Image%2002%2020%20010.png?version=1&modificationDate=1519221553000&api=v2)

 - No quadro **Providers**, apenas a opção **NTLM** deve ser mantida. Todos os demais provedores listados (caso existam) devem ser removidos.

 - Se este procedimento não for executado, o navegador pode vir a exigir as credenciais de acesso ao usuário através de uma caixa de diálogo.

Sobre o protocolo NTLM

O NTLM é um protocolo de autenticação utilizado em uma rede Windows. São necessárias [configurações específicas nos navegadores](#Identity|ConfiguraçãodoDesktopSSO-navegadores) (Internet Explorer, Google Chrome e Mozilla Firefox) para que eles utilizem este protocolo e também no *script* remote_auth.asp (Desktop SSO) para utilizar a Autenticação Windows.

Os sistemas operacionais Linux e macOS não suportam o protocolo NTLM, portanto não é possível utilizá-los para realizar o SSO. Nestes sistemas é realizado um contorno para que, ao tentar o acesso via SSO, sejam requisitadas as credenciais do usuário. As orientações para configurar este contorno estão disponíveis no item [Configuração para Linux e macOS](#Identity|ConfiguraçãodoDesktopSSO-linux).

 - Ao finalizar esse passo, a configuração do *script* de autenticação do Desktop SSO no IIS está completa e deve ser testada para confirmar se todos os procedimentos foram realizados corretamente.

![](/download/attachments/146969084/Image%2002%2020%20011.png?version=1&modificationDate=1519221803000&api=v2)

## Verificar a configuração do SSO

Após a configuração do *script* de autenticação do Desktop SSO no IIS, é possível executá-lo para confirmar se o procedimento foi realizado corretamente.

- [Executar script](#)
- [Debug](#)

 - Abrir o navegador e acessar a URL do *script*, por exemplo, [http://localhost/dsso/remote_auth.asp](http://localhost/dsso/remote_auth.asp).

 - No exemplo abaixo, o usuário "usuarioteste9" estava logado diretamente no servidor. A mensagem abaixo mostra que o usuário foi localizado no Active Directory, porém não possuía um e-mail cadastrado, o que é primordial para o Identity.

 - Em uma situação como essa, ao tentar acessar o contexto da empresa no Identity, o usuário seria redirecionado para a página de login e uma mensagem de login SSO inválido seria exibida.

![](/download/attachments/146969084/Image%2002%2021%20001.png?version=1&modificationDate=1519232168000&api=v2)

 - O *script* de autenticação possui instruções para realizar o *debug* da aplicação. Este modo exibe dados adicionais para auxiliar na identificação de problemas na configuração do SSO.

 - Para acessar o modo *debug*, basta inclui o parâmetro **debug=1** no final da URL do *script*. Por exemplo: [http://localhost/dsso/remote_auth.asp?debug=1](http://localhost/dsso/remote_auth.asp?debug=1).

 - No exemplo abaixo, o usuário não possui e-mail cadastrado no Active Directory, o que é um pré-requisito do Identity.

![](/download/attachments/146969084/Image%2002%2021%20002.png?version=1&modificationDate=1519232641000&api=v2)

# Configurar navegadores

A configuração nos navegadores tem por objetivo direcioná-los para a URL do Desktop SSO para a realização do login com as credenciais do Windows. A configuração realizada no Internet Explorer também é válida para o Google Chrome, enquanto o Mozilla Firefox exige uma configuração específica.

## Google Chrome e Internet Explorer

É necessário configurar o navegador do usuário para que ele utilize autenticação Windows (NTLM) com o *script* remote_auth.asp.

Mesmo que o Desktop SSO tenha sido configurado para utilizar autenticação Windows no IIS, o navegador do cliente precisa enviar as credenciais para que o *script* possa fazer as validações necessárias no Active Directory e no Identity.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Acessar o **Painel de Controle** do Windows e acionar a opção **Rede e Internet**.

 - No menu Rede e Internet, acionar a opção **Opções da Internet**.

****

 - Selecionar a aba **Segurança**e marcar a zona de segurança **Intranet local**. Isto garante o envio das credenciais do Windows apenas para a URL do Desktop SSO. Outras aplicações e *websites* não serão afetados.

 - Acionar **Sites** para adicionar a URL do Desktop SSO.

![](/download/attachments/146969084/GC%20Passo%20002.png?version=2&modificationDate=1607604486983&api=v2)

 - Nas configurações da intranet local, acionar **Avançadas**.

 - Informar a URL do Desktop SSO e acionar **Adicionar**.

 - Acionar **Fechar**quando concluído.

![](/download/attachments/146969084/GC%20Passo%20003.png?version=1&modificationDate=1607604384420&api=v2)

 - De volta à aba Segurança, ainda com a zona Intranet local selecionada, acionar **Nível personalizado...**.

![](/download/attachments/146969084/GC%20Passo%20004.png?version=1&modificationDate=1607604384243&api=v2)

 - Na opção Logon, marcar a opção **Logon automático com o nome de usuário e senha atuais**.

 - Clicar em **OK**para confirmar.

![](/download/attachments/146969084/GC%20Passo%20005.png?version=1&modificationDate=1607604383997&api=v2)

 - O sistema deve emitir uma mensagem de confirmação para alterar as configurações, acionar **Sim** para confirmar.

 - Acionar **Aplicar** na janela de Propriedades da Internet, para que as alterações tenham efeito.

## Mozilla Firefox

O navegador Mozilla Firefox exige uma configuração específica.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acessar a URL **about:config** na barra de endereços do navegador.

![](/download/attachments/146969084/Image%2002%2019%20005.png?version=1&modificationDate=1519046788000&api=v2)

 - Será apresentado um alerta de segurança. Acionar **Eu aceito o risco!**.

![](/download/attachments/146969084/Image%2002%2019%20006.png?version=1&modificationDate=1519046874000&api=v2)

 - Na barra de pesquisa **Localizar**, informar "NTLM".

 - Dentre os registros exibidos, localizar **network.automatic-ntlm-auth.trusted-uris**. Clicar duas vezes sobre essa linha.

 - Informar a URL do Desktop SSO.

![](/download/attachments/146969084/Image%2002%2019%20007.png?version=1&modificationDate=1519047108000&api=v2)

## Group Policies para Google Chrome e Internet Explorer

Caso a empresa possua uma grande quantidade de navegadores e estações de trabalho a serem configuradas, é possível fazer a distribuição das configurações utilizando-se de *Group Policies* (GPO). Durante o procedimento de autenticação no domínio, pode-se executar uma série de tarefas automáticas como, por exemplo, configurar o Internet Explorer do usuário.

- [Passo 1](#)
- [Passo 2](#)

 - O administrador deverá definir a seguinte configuração de GPO: ***Computer Configuration*** → ***Administrative Templates*** → ***Windows Components*** → ***Internet Explorer*** → ***Internet Control Panel*** → ***Security Page***.

![](/download/attachments/146969084/group_policies_1.png?version=1&modificationDate=1525889928000&api=v2)

 - Após habilitar a definição de lista da Zona da Intranet, o cliente deverá definir a URL do Desktop SSO como membro da Zona da Intranet. No nosso exemplo, estamos definindo o site *.[fluigidentity.com](http://fluigidentity.com).

 - Desta forma, toda vez que um usuário membro deste domínio efetuar o login, as configurações necessárias serão realizadas. Se executada todos os dias, a GPO também deve evitar que um usuário mais avançado desfaça as configurações necessárias para o Desktop SSO.

![](/download/attachments/146969084/group_policies_2.png?version=1&modificationDate=1525889986000&api=v2)

Group Policies para Firefox

A configuração do navegador Mozilla Firefox a partir de *Group Policies* não é suportada.

# Configuração para Linux, macOS e Mobile

O Desktop SSO utiliza o protocolo NTLM para realizar o *Single Sign On*, porém este é um protocolo utilizado apenas pelo sistema operacional Windows. Para tratar situações onde o cliente possui estações Linux, macOS ou realiza o acesso via dispositivo móvel, é possível instalar um *script*, executado antes do Desktop SSO, com a finalidade de identificar o sistema operacional que está requisitando a página.

Chamado de check_remote_auth.asp, este *script* não é distribuído pelo Identity, mas foi construído especificamente para implantações com ecossistemas mais complexos, envolvendo diferentes sistemas operacionais.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Fazer o *download* do arquivo check_remote_auth.asp [nesse *link*](/download/attachments/146969084/check_remote_auth.asp?version=1&modificationDate=1441994763000&api=v2). (É necessário editá-lo e ajustar os parâmetros conforme descrição disponível dentro do próprio *script*).

 - Esse arquivo deve ser hospedado no mesmo IIS em que foi armazenado o *script* do Desktop SSO.

 - Para isso, criar uma pasta dentro do diretório "C:/inetpub/wwwroot", assim como foi feito para o remote_auth.asp.

![](/download/attachments/146969084/Image%2002%2021%20004.png?version=1&modificationDate=1519234338000&api=v2)

 - No ***Internet Information Services (IIS) Manager***, criar um *website* e uma aplicação para o check_remote_auth.asp. No exemplo abaixo foi usado o nome "check_dsso".

![](/download/attachments/146969084/Image%2002%2021%20005.png?version=2&modificationDate=1607607757707&api=v2)

 - É importante que a aplicação seja configurada para usar autenticação ***Anonymous Authentication***, pois a única finalidade dela é redirecionar o usuário para a URL correta.

![](/download/attachments/146969084/Autentica%C3%A7%C3%A3o%20an%C3%B4nima.png?version=1&modificationDate=1607607822710&api=v2)

 - Após a configuração do script, acessar as configurações de Desktop SSO no Identity e alterar o campo **URL de Autenticação** para o endereço do check_remote_auth.asp.

 - Se o usuário estiver utilizando Windows, ele será redirecionado para o *script* Desktop SSO. Caso contrário, será direcionado para uma URL do Identity que solicitará as credenciais de acesso.

![](/download/attachments/146969084/Image%2003%2022%20002.png?version=1&modificationDate=1521727959000&api=v2)

# Opções de arquitetura para alta disponibilidade

O Desktop SSO pode utilizar uma arquitetura baseada em um único servidor. O problema é que neste cenário, se o *script* estiver *offline*, o usuário não conseguirá autenticar no Identity.

O administrador deverá desabilitar o *Single Sign On* do contexto do cliente, no Identity, ou corrigir o que for necessário para que o *script* fique *online*.

Existe uma opção onde podemos instalar o Desktop SSO em duas máquinas, o que fornece uma boa redundância do componente. Se um servidor ou uma aplicação estiver indisponível, o outro servidor assume a responsabilidade de manter o serviço de *Single Sign On* acessível.

Para isso precisamos disponibilizar um *Load Balancer* que terá a responsabilidade de fazer o *redirect*, caso um dos dois servidores com Desktop SSO esteja *offline*. Existem algumas opções para efetuar o Load Balance, como por exemplo, Apache, BIG-IP e Barracuda.

![](/download/attachments/146969084/o7.JPG?version=2&modificationDate=1587414603827&api=v2)


<!-- anchors: Identity|ConfiguraçãodoDesktopSSO-FalandodeconfiguraçãodoDesktopSSO..., Identity|ConfiguraçãodoDesktopSSO-HabilitandooDesktopSSOnoIdentityhabilitar, samples, samples-872616687, samples-872616688, samples-872616689, samples-872616690, samples-872616691, Identity|ConfiguraçãodoDesktopSSO-ConfiguraroDesktopSSOnoIISiis, Identity|ConfiguraçãodoDesktopSSO-HabilitarRoles, roles, roles-2018962895, roles--377279312, roles--396277259, Identity|ConfiguraçãodoDesktopSSO-AtivartráfegoNTLM, samples, samples-872616687, samples-872616688, samples-872616689, samples-872616690, samples-872616691, samples-872616692, Identity|ConfiguraçãodoDesktopSSO-ConfiguraroScriptnoIIS, samples, samples-872616687, samples-872616688, samples-872616689, samples-872616690, samples-872616691, samples-872616692, samples-872616693, samples-872616694, samples-872616695, Identity|ConfiguraçãodoDesktopSSO-VerificaraconfiguraçãodoSSO, testar, testar--1070800246, testar-65906227, Identity|ConfiguraçãodoDesktopSSO-Configurarnavegadoresnavegadores, Identity|ConfiguraçãodoDesktopSSO-GoogleChromeeInternetExplorer, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, Identity|ConfiguraçãodoDesktopSSO-MozillaFirefox, samples, samples-1, samples-2, samples-3, Identity|ConfiguraçãodoDesktopSSO-GroupPoliciesparaGoogleChromeeInternetExplorer, gp, gp-872616687, gp-872616688, Identity|ConfiguraçãodoDesktopSSO-ConfiguraçãoparaLinux,macOSeMobilelinux, check_remote, check_remote-872616687, check_remote-872616688, check_remote-872616689, Identity|ConfiguraçãodoDesktopSSO-Opçõesdearquiteturaparaaltadisponibilidade -->
