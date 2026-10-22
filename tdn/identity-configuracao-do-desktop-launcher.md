---
title: "Identity | Configuração do Desktop Launcher"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235592303"
scraped_at: "2026-03-09T05:23:37.104Z"
depth: 4
anchors: 14
child_links: 42
---

# Identity | Configuração do Desktop Launcher

# Falando de Desktop Launcher...

---

Aplicativos que estão instalados localmente em um computador e que exigem credenciais de login podem ser acessados pelo Identity utilizando uma ferramenta chamada Desktop Launcher.

Quando o Desktop Launcher estiver instalado e configurado, ele acessa as suas credenciais em todos os aplicativos *desktop* adicionados ao Launchpad. Quando um aplicativo *desktop* for aberto, o Desktop Launcher irá recuperar as suas informações de login do Identity e irá inseri-las no aplicativo em seu computador.

Esta documentação demonstra como fazer o *download*, instalar e configurar o Desktop Launcher, e como abrir os aplicativos *desktop* pelo Launchpad.

# Pré-requisitos

- Consultar os requisitos mínimos na [Matriz de Portabilidade - TOTVS Identity](https://tdn.totvs.com/x/eDAxE).

- Embora não seja obrigatório para instalar o Desktop Launcher, é recomendado possuir um aplicativo *desktop* previamente cadastrado no Identity, conforme demonstrado na documentação [Como configurar aplicativos Desktop no Identity,](https://tdn.totvs.com/x/IL4KDg) para testar a configuração da aplicação.

# Obter o Desktop Launcher

O *download* do Desktop Launcher pode ser feito por qualquer usuário do Identity. Para administradores, o *download* está disponível na página [Gerenciar conta](https://tdn.totvs.com/x/79q7E#Gerenciarconta-ObteroDesktopLauncher) e para usuários comuns, [Meu Perfil](https://tdn.totvs.com/x/gNq7E#Meuperfil-ObteroDesktopLauncher).

# Instalar o Desktop Launcher

Após o *download* do pacote de instalação do Desktop Launcher, conforme o procedimento acima, o processo de instalação pode ser iniciado.

- Acionar o pacote de instalação do Desktop Launcher com o botão direito do *mouse* e selecionar **Executar como administrador**. Será apresentado o *wizard* de instalação.

- Acionar **Next**.

- Conferir os dados de instalação e acionar **Install**. O procedimento de instalação será iniciado e pode durar vários minutos.

- Acionar ***Finish***. Um atalho para execução do Desktop Launcher será criado na Área de trabalho do Windows.

![](/download/attachments/235592303/install_desktop_launcher.gif?version=1&modificationDate=1499349783000&api=v2)

**Instalação do Desktop Launcher**

# Configurar o Desktop Launcher

Para realizar as configurações no Desktop Launcher, o usuário deve executar o aplicativo através do atalho criado na área de trabalho do Windows e seguir os procedimentos abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acionar ***Advanced Settings*** no canto inferior direito do aplicativo.

![](/download/attachments/235592303/config_desktop_launcher_1.png?version=1&modificationDate=1499361202000&api=v2)

 - Informar o domínio da empresa no Identity nos campos **SSOProfileStoreRestUrl** e **UserStoreRestUrl**. Por exemplo, [https://suaempresa.fluigidentity.com.](https://minhaempresa.fluigidentity.com.)

 - Caso o computador esteja instalado em uma rede que utiliza proxy, informe as configurações de proxy na seção **Http Proxy**. Caso contrário, mantenha a opção *No Proxy*.

 - Acionar ***Update*** para salvar as configurações.

![](/download/attachments/235592303/config_desktop_launcher_2.png?version=1&modificationDate=1499685230000&api=v2)

 - Informar as credenciais de acesso ao Identity nos campos **Account Name** (e-mail) e **Password** (senha pessoal).

 - Essas informações são atreladas ao nome do usuário do Windows e armazenadas para que quando o computador for iniciado o Desktop Launcher seja executado e faça o login automaticamente.

 - Acionar ***Log In***.

![](/download/attachments/235592303/config_desktop_launcher_3.png?version=1&modificationDate=1499685068000&api=v2)

 - Se as configurações estiveram corretas e as credenciais informadas válidas, serão exibidos todos os aplicativos que foram adicionados ao Launchpad do usuário no Identity.

 - Caso seja necessário fazer login com outro usuário, acionar ***Logout*** no canto inferior direito da tela principal do Desktop Launcher. As informações anteriormente atreladas à conta do Windows serão substituídas pelo novo login.

![](/download/attachments/235592303/config_desktop_launcher_4.png?version=1&modificationDate=1499460245000&api=v2)

Update SSOProfile

Sempre que for realizada alguma alteração em um [aplicativo *desktop* no Identity](https://tdn.totvs.com/x/IL4KDg), é recomendado acionar o botão **Update SSOProfile**, para que as atualizações sejam verificadas pelo Desktop Launcher.

# Informar as credenciais do aplicativo no Launchpad

Além da configuração do Desktop Launcher na estação de trabalho, o aplicativo *desktop* no Identity precisa ser configurado com as credenciais de acesso do usuário ao aplicativo em questão e o caminho do executável no computador.

No exemplo abaixo, o executável do Skype está localizado no diretório "C:\Program Files (x86)\Skype\Phone\Skype.exe".

- [Usuário Comum](#)
- [Administrador](#)

![](/download/attachments/235592303/Image%2007%2007%20001.png?version=2&modificationDate=1499459830000&api=v2)

![](/download/attachments/235592303/Image%2007%2007%20002.png?version=1&modificationDate=1499459837000&api=v2)

# Configurar inicialização automática do Desktop Launcher

É possível configurar o Desktop Launcher para ser executado automaticamente junto à inicialização do sistema operacional Windows, simplificando a autenticação do usuário. Os passos a seguir demonstram os procedimentos necessários para a inicialização automática.

- Abrir o programa **Executar** do Windows (atalho de teclado: Windows + R).

- Informar o comando abaixo para abrir o diretório de inicialização automática no Windows Explorer:

[?](#)

| `%AppData%\Microsoft\Windows\Start Menu\Programs\Startup` |
| --- |

- Copiar o atalho do Desktop Launcher criado na Área de Trabalho para o diretório de inicialização automática.

![](/download/attachments/235592303/startup_desktop_launcher.gif?version=1&modificationDate=1499780260000&api=v2)


<!-- anchors: Identity|ConfiguraçãodoDesktopLauncher-FalandodeDesktopLauncher..., Identity|ConfiguraçãodoDesktopLauncher-Pré-requisitos, Identity|ConfiguraçãodoDesktopLauncher-ObteroDesktopLauncher, Identity|ConfiguraçãodoDesktopLauncher-InstalaroDesktopLauncher, Identity|ConfiguraçãodoDesktopLauncher-ConfiguraroDesktopLauncher, config, config-872616687, config-872616688, config-872616689, config-872616690, Identity|ConfiguraçãodoDesktopLauncher-InformarascredenciaisdoaplicativonoLaunchpad, launchpad, Identity|ConfiguraçãodoDesktopLauncher-ConfigurarinicializaçãoautomáticadoDesktopLauncher, highlighter_66585 -->
