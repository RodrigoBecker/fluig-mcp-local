---
title: "Usuário Google Analytics"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=192087046"
scraped_at: "2026-03-09T03:47:54.562Z"
depth: 2
anchors: 16
child_links: 44
---

# Usuário Google Analytics

Atenção

O Google desativará o Universal Analytics em **01 de Julho de 2023** e será substituído pelo Google Analytics 4.

Essa desativação fará com que os dados da sua empresa no TOTVS Fluig Plataforma deixem de ser coletados e para que você consiga continuar medindo os acessos ao Fluig utilizando o Google Analytics 4, é necessário que uma nova propriedade do Google Analytics 4 seja criada e configurada no TOTVS Fluig Plataforma. 

Recomendamos que a nova propriedade seja configurada antes do prazo da desativação conforme os passos descritos nesta documentação.

Ressaltamos que: para que a configuração funcione de modo esperado a plataforma Fluig precisa estar na release **1.8.0-040423** ou **superiores**.

# Índice

# Objetivo

O objetivo desta documentação é demonstrar os passos iniciais para configuração da integração do TOTVS Fluig Plataforma com o Google Analytics. O Google Analytics é uma ferramenta gratuita de monitoramento de servidor, que disponibiliza informações precisas de uso por requisição, entre outros dados. Com ele é possível saber quem está utilizando o servidor no momento, praticamente em tempo real, dependendo das condições da conexão.

# Inscrever-se no Google Analytics

Para inscrever-se no Google Analytics, é necessário criar ou possuir uma [Conta do Google](https://accounts.google.com/SignUp?hl=pt-BR) (esta mesma conta é usada para acessar serviços do Google como o Gmail, YouTube, Play Store, etc.). Uma vez criada a conta, é possível seguir os passos abaixo.

As telas abaixo podem apresentar diferenças em relação ao que está demonstrado, devido a eventuais atualizações da Google.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)

 - Acessar [https://analytics.google.com/](https://analytics.google.com/).

 - Prosseguir com o **Login no Google Analytics** e autenticar-se com a conta do Google .

![](/download/attachments/192087046/image2021-12-7_11-48-52.png?version=1&modificationDate=1638888565867&api=v2)

 - Após efetuar o login, será apresentada a página abaixo.

 - Acionar **Começar a usar**.

![](/download/attachments/192087046/Google%20analytics%201.png?version=1&modificationDate=1678124815843&api=v2)

 - Será apresentada a seção de **Configuração da conta**.

 - Nesse momento, deve-se configurar o nome da conta do usuário, um identificador único para a conta no Google Analytics.

 - Nesta mesma página também é possível informar se deseja que setores do Google acessem as informações da conta criada no Google Analytics de alguma forma.

Lembre-se que, mesmo que as informações sejam desmarcadas, alguns produtos Google ainda podem verificar informações de sua conta Google Analytics, a menos que sejam manualmente desativados pela opção "Vinculação de Produto".

 - Acionar **Próxima** para continuar a configuração.

![](/download/attachments/192087046/Google%20analytics%202.png?version=1&modificationDate=1678125660210&api=v2)

 - Será apresentada a seção de **Configuração da propriedade**.

 - Nesse momento, deve-se configurar o nome da propriedade, um facilitador para identificar o endereço sendo monitorado.

 - Clique em **Próxima** para continuar a configuração.

![](/download/attachments/192087046/image-2022-10-20-16-32-44-497.png?version=1&modificationDate=1675275439150&api=v2)

 - Será apresentada a seção **Sobre sua empresa**.

 - Nesse momento, deve-se configurar os dados conforme o tamanho da empresa e objetivos.

 - Acionar **Criar **para concluir a configuração.

![](/download/attachments/192087046/Google%20analytics%204.png?version=1&modificationDate=1678126012470&api=v2)

 - Será apresentado o contrato de Termos de serviço.

 - Acionar **Aceito** para prosseguir.

![](/download/attachments/192087046/Google%20analytics%205.png?version=1&modificationDate=1678127526000&api=v2)

 - Após aceitar os Termos de Serviço, uma nova tela aparecerá. Clique em **Web**.

****

 - Em seguida, preencha a URL do site e o Nome do Fluxo e clique em **Criar Fluxo**.

![](/download/attachments/192087046/image-2022-10-20-16-37-31-344.png?version=1&modificationDate=1675356463860&api=v2)

 - Copie o **ID da Métrica** apresentado na tela de Detalhes do Fluxo e em seguida clique em **Gerenciar as tags do site conectadas**.

![](/download/attachments/192087046/Google%20analytics%206-1.png?version=1&modificationDate=1678128807963&api=v2)

![](/download/attachments/192087046/Google%20gerenciar%20tags.png?version=1&modificationDate=1678128942620&api=v2)

 - Cole o ID copiado e digite um apelido na tela que surge. Em seguida, clique em **Conectar**.

![](/download/attachments/192087046/google%20conectar%20tag.PNG?version=1&modificationDate=1678129187597&api=v2)

# Informar o usuário do Google Analytics no TOTVS Fluig Plataforma

Com o ID de acompanhamento em mãos, acessar o Fluig Plataforma com um usuário administrador da empresa.

- [Passo 1](#)
- [Passo 2](#)

 - Acessar o **Painel de controle** → agrupador **Parâmetros técnicos** → **Usuário Google Analytics**.

![](/download/attachments/192087046/Painel%20de%20Controle%20165.png?version=1&modificationDate=1547058857953&api=v2)

 - Informar o ID de acompanhamento no campo **Token**.

 - Acionar **Salvar**.****A integração estará ativa e o Fluig passará a informar o Google Analytics de suas requisições HTTP, permitindo o monitoramento do servidor e o acesso a algumas informações privilegiadas, como acessos e requisições, em tempo hábil.

![](/download/attachments/192087046/Google%20analytics%207-1.png?version=1&modificationDate=1678128463513&api=v2)

Para desabilitar o envio de informações futuramente, basta assinalar a opção **Desabilitar o Google Analytics**e acionar**Salvar**.


<!-- anchors: UsuárioGoogleAnalytics-Índice, UsuárioGoogleAnalytics-Objetivo, UsuárioGoogleAnalytics-Inscrever-senoGoogleAnalytics, criar_usuario_ga, criar_usuario_ga-872616687, criar_usuario_ga-872616688, criar_usuario_ga-872616689, criar_usuario_ga-872616690, criar_usuario_ga-872616691, criar_usuario_ga-872616692, criar_usuario_ga-872616693, criar_usuario_ga-872616694, UsuárioGoogleAnalytics-InformarousuáriodoGoogleAnalyticsnoTOTVSFluigPlataforma, painel_controle, painel_controle-872616687, painel_controle-872616688 -->
