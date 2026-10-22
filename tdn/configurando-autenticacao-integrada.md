---
title: "Configurando Autenticação Integrada"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=162170863"
scraped_at: "2026-03-09T04:01:37.728Z"
depth: 2
anchors: 51
child_links: 84
---

# Configurando Autenticação Integrada

# Índice

# Objetivo

---

O objetivo deste guia é habilitar e configurar a autenticação integrada com Windows no TOTVS Fluig Plataforma. 

# Visão Geral

---

A autenticação integrada com o Windows possibilita que os usuários que estejam registrados no Active Directory possam acessar a plataforma sem precisar informar manualmente seus dados de acesso através da tela de login, desde que já esteja autenticado no Windows.

Basicamente o processo de autenticação integrada com o Windows funciona da seguinte maneira:

1. O usuário acessa a plataforma através do seu navegador;
2. A plataforma inicia o processo de autenticação integrada, redirecionando para o servidor IIS;
3. O script de autenticação remota no IIS sabe como autenticar o usuário pelas credenciais de domínio do Windows;
4. O usuário é consultado e validado no Active Directory pelo IIS;
5. IIS redireciona novamente à plataforma com as informações de identidade do usuário retornadas pelo Active Directory;
6. A plataforma valida a integridade das informações recebidas do servidor IIS;
7. Caso as informações do usuário forem válidas, autentica o usuário na plataforma, caso contrário redireciona para a tela de login.

Atenção!

Com essa configuração de autenticação integrada os usuários não são criados automaticamente na plataforma. Eles somente são criados automaticamente quando é utilizado o TOTVS Identity.

# NTLM

---

O NTLM é um protocolo de autenticação utilizado em uma rede Windows. Como veremos nos tópicos a seguir, existem uma série de configurações que devemos realizar nos navegadores para que utilizem este protocolo, e também no script de autenticação remota para que utilize a chamada Autenticação Windows.

Além disso, é importante lembrar que existem limitações com relação a sistemas operacionais que não Windows. Linux e Mac, por exemplo, não podem utilizar o protocolo NTLM. O efeito nestes sistemas operacionais é que se tentarem o acesso via autenticação integrada, uma caixa de diálogo proveniente do navegador pedirá para que o usuário informe suas credenciais.

# Configuração da Autenticação Integrada

---

Para usufruir da autenticação integrada com o Windows, é necessário habilitar este recurso na plataforma e realizar algumas configurações, como a criação do serviço de autenticação remota. As configurações necessárias para o correto funcionamento da autenticação integrada são apresentadas nos tópicos abaixo.

### Habilitando e Configurando na plataforma

O primeiro passo para a configuração da autenticação integrada é habilitá-la na plataforma:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

 - Efetue o login na plataforma utilizando o usuário **wcmadmin**, e então acesse **Painel de Controle  ► WCM ► Configurações do Sistema**.

![](/download/attachments/162170863/int01_.png?version=1&modificationDate=1591384780267&api=v2)

 - Na tela de configurações do sistema, acesse a aba **Autenticação**. Para habilitar a autenticação integrada assinale a opção **Habilitar autenticação integrada.**

![](/download/attachments/162170863/int02_.png?version=1&modificationDate=1591384809513&api=v2)

 - Insira a URL do servidor IIS onde será executado o script de autenticação remota no campo **URL script de autenticação**. A URL deve apontar por padrão para **http(s)://<endereço-iis>/remote_auth.asp** (A configuração do servidor IIS e da URL para acesso será descrito no tópico Configuração IIS).

   Fique atento! 

    As máquinas dos usuários devem conseguir acessar a URL configurada em **URL script de autenticação** da forma como ela foi informada nesse campo.

![](/download/attachments/162170863/int03_.png?version=1&modificationDate=1591384826117&api=v2)

 - Clique no botão **Gerar Novo Token**para gerar um token de autenticação. O token é utilizado para validar a integridade e segurança das requisições de autenticação integrada recebidas pela plataforma.

![](/download/attachments/162170863/int04_.png?version=1&modificationDate=1591384868533&api=v2)

 - Informe o endereço do servidor Active Directory no campo **Endereço do servidor AD**no seguinte formato **<servidor>:<porta>** e o DN (Distinguished Name) base para a pesquisa de usuários no campo **Base DN**. O DN base é utilizado para informar abaixo de qual entrada no Active Directory será pesquisado e validado os usuários para a autenticação integrada.

![](/download/attachments/162170863/int05_.png?version=1&modificationDate=1591384882967&api=v2)

 - Informe um login e senha do Active Directory que possua privilégios suficientes para ler informações dos usuários no Active Directory informado no passo anterior. O login deve ser informando no campo **Usuário de domínio**e a senha no campo **Senha.**

![](/download/attachments/162170863/int06_.png?version=1&modificationDate=1591384903370&api=v2)

 - Clique no botão **Salvar** para salvar as configurações de autenticação. Em seguida clique no botão **Exportar** para gerar e salvar o script de autenticação remota que deverá ser publicado no servidor IIS.

![](/download/attachments/162170863/int07_.png?version=1&modificationDate=1591384920013&api=v2)

É importante lembrar que existem diversas configurações à serem executadas antes que possamos utilizar a Autenticação Integrada, estas serão detalhadas nos tópicos a seguir. Se estas configurações não forem finalizadas antes que a autenticação integrada seja habilitada, os usuários poderão ter dificuldades para autenticar na plataforma, ou até mesmo poderão ser impedidos de ter acesso.

### Configuração IIS

Para disponibilizar o serviço de autenticação remota é necessário ter um servidor Windows com o Internet Information Services (IIS) habilitado. Siga o passo-a-passo abaixo para habilitar o IIS:

Caso a função Servidor Web (IIS) já tenha sido adicionada ao servidor este passo-a-passo pode ser ignorado. Importante apenas garantir que os serviços de função **ASP** e **Autenticação do Windows** tenham sidos instalados para o Servidor Web (para mais detalhes confira o **passo 4**).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Para habilitar o IIS (caso não esta habilitado ainda), devemos utilizar o **Gerenciador de Servidores** e adicionar uma nova função. Para adicionar uma nova função, clique na opção **Funções** e em seguida em **Adicionar funções**.

![](/download/attachments/162170863/image2014-10-1%2011%3A38%3A1.png?version=1&modificationDate=1412174279000&api=v2)

 - A tela de **Assistente para Adicionar Funções** é aberta. Assinale a opção **Servidor Web (IIS)**e clique no botão **Próximo**.

![](/download/attachments/162170863/image2014-10-1%2011%3A46%3A21.png?version=1&modificationDate=1412174779000&api=v2)

 - Uma tela com uma introdução ao Servidor Web (IIS) é apresentada. Clique no botão **Próximo** para continuar com a instalação.

![](/download/attachments/162170863/image2014-10-1%2011%3A48%3A2.png?version=1&modificationDate=1412174880000&api=v2)

 - Para que seja possível configurar e disponibilizar o serviço de**autenticação remota** é necessário a instalação dos seguintes serviços de função: **ASP**, **Extensões ISAPI** e **Autenticação do Windows**. Assinale estes serviços de funções e clique em **Próximo**.

![](/download/attachments/162170863/image2014-10-1%2011%3A50%3A4.png?version=1&modificationDate=1412175002000&api=v2)

 - Os serviços de funções **ASP** e **Extenções ISAPI** são necessários para a execução do script ASP responsável pela autenticação remota e o serviço de função **Autenticação do Windows** é necessário para que o navegador possa enviar as credenciais para a aplicação efetuar as validações necessárias no Active Directory.

 - A tela de confirmação de instalação é apresentada. Clique em **Instalar** para finalizar a instalação do Servidor Web (IIS).

![](/download/attachments/162170863/image2014-10-1%2013%3A11%3A40.png?version=1&modificationDate=1412179898000&api=v2)

 - Após finalizar a instalação é apresentada a tela de **Resultados da Instalação** com o resumo dos itens instalados. Clique em **Fechar.**

![](/download/attachments/162170863/image2014-10-1%2013%3A35%3A55.png?version=1&modificationDate=1412181352000&api=v2)

##### Configuração e Disponibilização do Serviço

Após possuir o IIS instalado e com as funções de serviços necessárias é possível configurar o serviço de **autenticação remota**. Lembrando que o apoio da equipe de infraestrutura é fundamental, siga o passo-a-passo abaixo para configurar e disponibilizar o serviço de **autenticação remota**:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)
- [Passo 10](#)

 - Primeiramente devemos criar um arquivo chamado **redirect.html**com o seguinte conteúdo (lembre-se que a chave FLUIG-HOST deve ser substituída pelo endereço do servidor fluig).

Lembrando que no campo **URL script de autenticação**, deve ser informado o mesmo nome do domínio utilizado na plataforma, por exemplo, URL='[http://suaempresa.com.br/portal/home?dssoError=invalidUser'](http://suaempresa.com.br/portal/home?dssoError=invalidUser%27)).

  **redirect.html**

[?](#)

| `````````````````` |
| --- |

 - Seguindo, devemos **criar um diretório** de conteúdo para o site que iremos criar nos próximos passos. Neste diretório colocamos o script ASP baixado da plataforma (ver item [Habilitando e Configurando na plataforma](#ConfigurandoAutenticaçãoIntegrada-HabilitandoeConfigurandonaplataforma)) e o arquivo **redirect.html**.

![](/download/attachments/162170863/Image%2014.jpg?version=2&modificationDate=1495053662000&api=v2)

 - No IIS agora precisamos **criar um novo site,** que será a aplicação responsável em fornecer o serviço de autenticação remota. Para criar um novo site clique na ação **Adicionar Site**. A tela**Adicionar Site** será apresentada, informe o **nome do site** (por exemplo fluigsso), o **tipo**, **endereço IP** e **porta**, que devem ser definidos pelo administrador do servidor.

![](/download/attachments/162170863/image2014-10-1%2014%3A36%3A18.png?version=1&modificationDate=1412184976000&api=v2)

O endereço informado nas configurações do site é o valor que deve ser informado no campo **URL script de autenticação**na configuração da autenticação integrada na plataforma (ver passo 3 do item [Habilitando e Configurando na plataforma](#ConfigurandoAutenticaçãoIntegrada-HabilitandoeConfigurandonaplataforma)).

 - Outro ponto a ser configurado é autenticação deste site. Realizamos isto através do item **Autenticação**.

![](/download/attachments/162170863/image2014-10-1%2014%3A55%3A1.png?version=1&modificationDate=1412186099000&api=v2)

 - Devemos habilitar a forma de autenticação do **Autenticação do Windows**e desabilitar todas as outras opções de autenticação.

![](/download/attachments/162170863/image2014-10-1%2014%3A59%3A39.png?version=1&modificationDate=1412186377000&api=v2)

 - Existe um detalhe que deve ser tratado na autenticação, que são os provedores utilizados pela Autenticação do Windows. Clique com o botão direito na opção **Autenticação do Windows** e em seguida clicar na opção **Provedores**.

![](/download/attachments/162170863/provedores-site.png?version=1&modificationDate=1412186783000&api=v2)

 - Devemos deixar apenas a opção **NTLM**. Todas as outras devem ser excluídas. Se isso não for feito, pode ser exigido do usuário a entrada de credenciais via caixa de diálogo do navegador. Não esquecer que existe outra configuração a ser feita diretamente no navegador para evitar este problema (veremos em tópicos posteriores).

![](/download/attachments/162170863/image2014-10-1%2015%3A9%3A51.png?version=1&modificationDate=1412186988000&api=v2)

 - Em alguns casos, não será possível negociar as credenciais do usuário via **NTML** e então o IIS redirecionará o usuário para uma página de erro (HTTP 401.2 - Não autorizado). Para evitar este comportamento é possível definir uma página de erro personalizada onde o usuário é redirecionado para a página de login da plataforma ao invés de uma página de erro do IIS. 

 - Realizamos isto através do botão **Páginas de Erro**.

![](/download/attachments/162170863/image2014-10-1%2015%3A22%3A13.png?version=1&modificationDate=1412187731000&api=v2)

 - Para adicionar uma nova página de erro clique na opção **Adicionar.**

![](/download/attachments/162170863/image2014-10-1%2015-27-49.png?version=1&modificationDate=1495053159000&api=v2)

 - A tela **Adicionar Página de Erro Personalizado** é apresentada. Informe o código de status **401.2**, selecione a ação de resposta **Inserir conteúdo do arquivo estático na resposta de erro**e no campo **Caminho do Arquivo** informe o caminho relativo (ou seja, apenas o **nome.extensão**, conforme a imagem abaixo) da raiz do site direcionando para o arquivo **redirect.html**.

![](/download/attachments/162170863/image2014-10-1%2015%3A27%3A18.png?version=1&modificationDate=1412188036000&api=v2)

 - Para finalizar e adicionar a página de erro clique no botão **OK**.

 - Finalizadas as configurações, é possível realizar um **teste** diretamente no script. Para isto basta executar o script no navegador com o parâmetro de consulta debug=1, que neste exemplo foi [http://10.80.128.251:8180/remote_auth.asp?debug=1](http://10.80.128.251:8180/remote_auth.asp?debug=1)

 - Quando acrescentado o parâmetro de consulta debug=1, o script é informado para executar em modo debug, no qual ele retorna diversos valores que nos ajudam a depurar o serviço de autenticação remota. No exemplo executado, podemos ver que foi retornado o usuário 'João da Silva' e que a autenticação está funcionando corretamente.

![](/download/attachments/162170863/image2014-10-1%2015%3A31%3A44.png?version=1&modificationDate=1412188301000&api=v2)

 - **Uma vez concluída estas configurações é possível efetuar a autenticação integrada.**

 - Como teste final, autentique no Windows utilizando as credenciais de um usuário válido do Active Directory. Em seguida acesse a plataforma. O acesso à plataforma não exigirá login e senha e já autenticará o usuário no Windows.

### Configuração do Navegador

---

Atenção

**A configuração do navegador deverá ser realizada em cada terminal cliente.**

É necessário configurar o navegador do usuário para que ele utilize autenticação Windows (NTLM) com o script de autenticação remota (remote_auth.asp).

Mesmo que o serviço de autenticação remota tenha sido configurado para utilizar autenticação Windows no IIS, o navegador do cliente precisa enviar as credenciais para que o script possa fazer as validações necessárias no Active Directory.

##### Internet Explorer e outros navegadores derivados do Chromium (Microsoft Edge e Google Chrome)

No caso dos navegadores**Internet Explorer** e **Google Chrome**, as configurações de segurança e autenticação devem ser realizadas através das **Opções da Internet,**localizada no painel de controle do Windows, pois assim, estes navegadores irão assumir as configurações realizadas. Observe e siga os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Para começar, devemos acessar o menu **Opções da Internet**, pelo painel de controle. Para isso, basta segurar a tecla Windows do teclado, pressionar a tecla "R", digitar "control" no campo correspondente e em seguida clicar no botão OK.

![](/download/attachments/162170863/Painel%20de%20controle.JPG?version=1&modificationDate=1657652627393&api=v2)

 - Na sequência, alterar a exibição para **Ícones** para facilitar a visualização e clicar na opção **Opções da Internet**.

![](/download/attachments/162170863/Op%C3%A7%C3%B5es%20da%20Internet.JPG?version=1&modificationDate=1657653688250&api=v2)

****

 - Em seguida clicar na aba **Segurança**, selecionar **Intranet** **local** e posteriormente, clicar em **Sites.**

![](/download/attachments/162170863/Passo%203.JPG?version=2&modificationDate=1657804650893&api=v2)

 - Para adicionar o endereço do servidor de autenticação remota precisamos clicar no botão **Avançadas**:

![](/download/attachments/162170863/image2014-9-24%2015%3A11%3A36.png?version=1&modificationDate=1411582106000&api=v2)

 - Informamos a URL do servidor de autenticação remota no campo **Adicionar este site à zona** e então clicamos no botão **Adicionar**. Podemos fechar a tela clicando no botão **Fechar**:

![](/download/attachments/162170863/image2014-9-24%2015%3A11%3A49.png?version=1&modificationDate=1411582118000&api=v2)

****

 - É importante garantir que as configurações de**Autenticação do Usuário** estejam definidas para **Login automático** com o nome de usuário e senha atuais, para a **Intranet Local.** Para consultar esta tela, basta selecionar **Intranet Local** e clicar no botão **Nível personalizado:******

![](/download/attachments/162170863/image2014-9-24%2015%3A12%3A57.png?version=1&modificationDate=1411582187000&api=v2)

****

##### Mozilla Firefox

O Firefox deve ser configurado de uma maneira um pouco diferente:

- [Passo 1](#)
- [Passo 2](#)

 - Em primeiro lugar, precisamos digitar [about:config](http://aboutconfig/) na barra de endereços, para poder acessar as configurações do Firefox:

****

****

 - Uma mensagem de alerta normalmente é exibida. Para continuar, basta clicar no botão de confirmação. No nosso exemplo, o botão **Serei cuidadoso, prometo!******

****

 - As configurações de NTLM podem ser facilmente encontradas se digitarmos no campo **Localizar**, a palavra “ntlm”. Devemos manter as configurações como exibidas abaixo. A mais importante é **network.automatic-ntlm-auth.trusted-urls**, onde devemos informar a URL do servidor de autenticação remota:

![](/download/attachments/162170863/image2014-9-24%2014%3A37%3A36.png?version=1&modificationDate=1411581159000&api=v2)

 - **Feito isso, temos também o Firefox configurado para utilização da autenticação integrada com o Windows do fluig.**

### Group Policies

---

Configurar o navegador de alguns poucos usuários é uma tarefa simples, porém, o cliente terá problemas quando possui milhares de usuários a serem configurados.

Para estes casos, podemos utilizar a estratégia de distribuição das configurações, baseadas na utilização de **Group Policies (GPO)**. Durante o procedimento de autenticação no domínio, pode ser executada uma série de tarefas automáticas, como por exemplo, configurar o navegador do usuário.

##### Internet Explorer e Google Chrome

O administrador deverá definir a seguinte configuração de GPO:

Configuração do Computador ► Modelos Administrativos ► Componentes do Windows ► Internet Explorer ► Painel de Controle da Internet ► Página Segurança:

![](/download/attachments/162170863/group%20policies%20ie1.png?version=1&modificationDate=1411998793000&api=v2)

Após habilitar a **Lista de Atribuições de Sites a Zonas**, o cliente deverá definir a URL do servidor de autenticação remota como**membro da Zona da Intranet**.

![](/download/attachments/162170863/group%20policies%20ie2.png?version=1&modificationDate=1411999034000&api=v2)

Desta forma, toda vez que um usuário membro do domínio efetuar o login, as configurações necessárias serão realizadas. Se executada todos os dias, a GPO também deve evitar que um usuário mais avançado desfaça as configurações necessárias para a autenticação remota.

##### Mozilla Firefox

No caso do navegador **Mozilla Firefox**, não existe maneira direta de configurar o navegador a partir da GPO, porém, existem scripts que realizam esta configuração, e estes scripts podem ser executados a partir de uma GPO.

O administrador que desejar realizar as configurações no Firefox, poderá seguir a seguinte configuração:

Para este procedimento será necessário desenvolver uma personalização que aplica as configurações no Firefox (script).

Configuração do Usuário ► Configurações do Windows ► Scripts (Logon/Logoff) ► Logon

![](/download/attachments/162170863/group%20policies%20firefox.png?version=1&modificationDate=1411999184000&api=v2)

# Opções de Arquitetura para Alta Disponibilidade

---

A autenticação remota pode utilizar uma arquitetura baseada em um único servidor. O problema é que neste cenário, se o script estiver off-line, o usuário não conseguirá autenticar na plataforma. O administrador deverá desabilitar a autenticação integrada na plataforma ou corrigir o que for necessário para que o script fique online.

Existe uma opção onde podemos criar dois servidores de autenticação remota, o que fornece uma boa redundância do componente. Se um servidor estiver fora do ar, ou se uma aplicação estiver fora, o outro servidor assume a responsabilidade de manter online o serviço de autenticação remota.

Para isso é necessário disponibilizar um *Load Balancer *que terá a responsabilidade de fazer o redirecionamento, caso um dos dois servidores de autenticação remota esteja off-line.


<!-- anchors: ConfigurandoAutenticaçãoIntegrada-Índice, ConfigurandoAutenticaçãoIntegrada-Objetivo, ConfigurandoAutenticaçãoIntegrada-VisãoGeral, ConfigurandoAutenticaçãoIntegrada-NTLM, ConfigurandoAutenticaçãoIntegrada-ConfiguraçãodaAutenticaçãoIntegrada, ConfigurandoAutenticaçãoIntegrada-HabilitandoeConfigurandonaplataforma, fluig-config, fluig-config-1, fluig-config-2, fluig-config-3, fluig-config-4, fluig-config-5, fluig-config-6, fluig-config-7, ConfigurandoAutenticaçãoIntegrada-ConfiguraçãoIIS, config-iis, config-iis-1, config-iis-2, config-iis-3, config-iis-4, config-iis-5, config-iis-6, ConfigurandoAutenticaçãoIntegrada-ConfiguraçãoeDisponibilizaçãodoServiço, dsso-app-iis, dsso-app-iis-1, highlighter_610717, dsso-app-iis-2, dsso-app-iis-3, dsso-app-iis-4, dsso-app-iis-5, dsso-app-iis-6, dsso-app-iis-7, dsso-app-iis-8, dsso-app-iis-9, dsso-app-iis-10, ConfigurandoAutenticaçãoIntegrada-ConfiguraçãodoNavegador, ConfigurandoAutenticaçãoIntegrada-InternetExplorereoutrosnavegadoresderivadosdoChromium(MicrosoftEdgeeGoogleChrome), ie-chrome-config, ie-chrome-config-1, ie-chrome-config-2, ie-chrome-config-1, ie-chrome-config-3, ie-chrome-config-4, ConfigurandoAutenticaçãoIntegrada-MozillaFirefox, firefox-config, firefox-config-1, firefox-config-2, ConfigurandoAutenticaçãoIntegrada-GroupPolicies, ConfigurandoAutenticaçãoIntegrada-InternetExplorereGoogleChrome, ConfigurandoAutenticaçãoIntegrada-MozillaFirefox.1, ConfigurandoAutenticaçãoIntegrada-OpçõesdeArquiteturaparaAltaDisponibilidade -->
