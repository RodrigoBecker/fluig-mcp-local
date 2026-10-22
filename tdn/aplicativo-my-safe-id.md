---
title: "Aplicativo My Safe id"
url: "https://tdn.totvs.com/display/public/fluig/Aplicativo+My+Safe+id"
scraped_at: "2026-03-09T04:13:27.426Z"
depth: 2
anchors: 35
child_links: 65
---

# Aplicativo My Safe id

# Objetivo

O objetivo deste guia é orientar os usuários sobre a utilização do aplicativo **My Safe id** para proteção de suas contas em serviços *online* através da autenticação multifator.

# Autenticação Multifator + My Safe id

A autenticação multifator oferece uma camada adicional de segurança para serviços e aplicações *web* através de um token (chave eletrônica) gerado no aplicativo My Safe id. Este token deve ser informado na página de login do serviço para liberar o acesso à conta.

Assumindo que apenas o usuário tem acesso ao aparelho - e portanto ao token - agentes maliciosos serão barrados, mesmo que possuam o login e a senha, pois não dispõe do código gerado pelo My Safe id. Além disso, para impedir a reutilização de um token, o código é substituído automaticamente a cada 30 segundos.

![](/download/attachments/309405201/120@2x.png?version=1&modificationDate=1509478534000&api=v2)

# Como obter o aplicativo My Safe id?

O aplicativo My Safe id pode ser obtido para iPhone na [App Store](https://itunes.apple.com/br/app/safe-id/id1304505629?mt=8) e para smartphones Android na [Google Play Store](https://play.google.com/store/apps/details?id=com.fluig.mfa).

# Como adicionar uma conta ao My Safe id?

A conta do serviço ou aplicação *web* pode ser adicionada ao My Safe id de duas formas: através do escaneamento de um código (*QR code*) ou informando manualmente a chave de acesso.

Tanto o *QR Code* quanto a chave para inclusão manual são fornecidos pelo serviço/aplicação que será adicionado ao My Safe id. [Veja um exemplo](#AplicativoMySafeid-google).

- [Escanear código](#)
- [Incluir manualmente](#)

 - Abrir o aplicativo My Safe id no smartphone.

 - Acionar o botão ![](/download/attachments/309405201/icon-plus.png?version=1&modificationDate=1509478648000&api=v2) para acessar a tela de inclusão de contas.

É necessário conceder ao My Safe id a permissão de acesso à câmera do aparelho para o escaneamento do código.

 - A câmera do aparelho será ativada para escaneamento do *QR* *code*.

 - Aponte a câmera para o *QR code* para efetuar a leitura da código.

 - Pronto! A conta será adicionada automaticamente à tela inicial do My Safe id e o token já pode ser utilizado para autenticação no serviço.

![](/download/attachments/309405201/safe_id_escanear.gif?version=1&modificationDate=1514471319000&api=v2)

 - Abrir o aplicativo My Safe id no smartphone.

 - Acionar o botão ![](/download/attachments/309405201/icon-plus.png?version=1&modificationDate=1509478648000&api=v2) para acessar a tela de inclusão de contas.

 - Acionar **OK, Entendi** no canto inferior da tela.

 - Acionar **Adicione manualmente** no canto inferior da tela.

 - Informar o nome do serviço/aplicação no campo **Título**.

 - Informar o nome de usuário ou e-mail de acesso no campo **Conta**.

 - Informar a chave de acesso fornecida pelo serviço/aplicação no campo **Chave**.

 - Acionar ![](/download/attachments/309405201/icon-check.png?version=2&modificationDate=1509479062000&api=v2) para salvar as informações.

 - Pronto! A conta será adicionada automaticamente à tela inicial do My Safe id e o token já pode ser utilizado para autenticação no serviço.

![](/download/attachments/309405201/safe_id_manualmente.gif?version=1&modificationDate=1514470888000&api=v2)

Sem internet? Sem problemas!

Não é necessária conexão à internet no smartphone para adicionar novas contas ou para consultar os tokens no My Safe id.

## Como editar os dados da conta?

O My Safe id permite a edição do título e do usuário/login associados à conta. Abra o aplicativo e siga os passos abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegar até a conta que será alterada deslizando a tela para os lados.

![](/download/attachments/309405201/Editar_1.png?version=2&modificationDate=1509640204000&api=v2)

 - Acionar ![](/download/attachments/309405201/icon-edit.png?version=1&modificationDate=1509479037000&api=v2) no canto superior direito da tela.

![](/download/attachments/309405201/Editar_2.png?version=3&modificationDate=1509640201000&api=v2)

 - Informar o novo título e/ou conta.

 - Acionar ![](/download/attachments/309405201/icon-check.png?version=2&modificationDate=1509479062000&api=v2) para salvar as alterações.

![](/download/attachments/309405201/Editar_3.png?version=2&modificationDate=1509640203000&api=v2)

## Como remover a conta?

O My Safe id permite remover as contas adicionadas. Abra o aplicativo e siga os passos abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegar até a conta que será removida deslizando a tela para os lados.

![](/download/attachments/309405201/Remover_1.png?version=2&modificationDate=1509640264000&api=v2)

 - Acionar ![](/download/attachments/309405201/icon-edit.png?version=1&modificationDate=1509479037000&api=v2) no canto superior direito.

![](/download/attachments/309405201/Remover_2.png?version=2&modificationDate=1509640265000&api=v2)

 - Acionar ![](/download/attachments/309405201/icon-delete.png?version=2&modificationDate=1509479474000&api=v2).

 - Para confirmar a exclusão, acionar**OK**.

![](/download/attachments/309405201/Remover_3.gif?version=4&modificationDate=1509640762000&api=v2)

# Como adicionar uma conta do TOTVS Identity ao My Safe id?

O passo a passo a seguir demonstra como habilitar a autenticação multifator em uma conta do TOTVS Identity e adicioná-la ao My Safe id.

DICA!

Lembrando que essa configuração, por padrão, é opcional, mas pode ser configurada como obrigatória pela administração da empresa. Para mais detalhes, consulte a documentação [Multi-Factor Authentication](/display/fluig/Identity+%7C+Multi-Factor+Authentication).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - A demonstração a seguir será ilustrada a partir do ponto de vista de um Usuário comum do TOTVS Identity, porém o procedimento é o mesmo para contas Administrador.

 - Passar o cursor do *mouse* sobre o nome do usuário no canto superior direito da página para exibir o menu da conta.

 - Acionar **Segurança**.

![](/download/attachments/309405201/MFA%20Passo%201.gif?version=1&modificationDate=1702330636657&api=v2)

 - Baixar o aplicativo **My Safe id** a partir da loja de aplicativos correspondente ao sistema operacional do smartphone utilizado pelo usuário (iPhone ou Android).

 - Abrir o My Safe id no aparelho.

 - Acionar ![](/download/attachments/309405201/icon-plus.png?version=1&modificationDate=1509478648000&api=v2) no app

 - Apontar a câmera do dispositivo para o código de barras bidimensional (*QR Code*) fornecido pelo TOTVS Identity.

![](/download/attachments/280746624/Autentica%C3%A7%C3%A3o%20multifator.png?version=3&modificationDate=1699385715070&api=v2)

 - Feita a leitura, o My Safe id irá gerar um token de acesso. Cada token possui duração máxima de 30 segundos e será renovado automaticamente.

 - Informar o token no campo **000-000**. O token será validado e, se estiver correto, uma mensagem de sucesso será apresentada.

![](/download/attachments/309405201/MFA%20Passo%203.gif?version=1&modificationDate=1702331485043&api=v2)

 - A partir de agora, após preencher o e-mail e senha ao acessar o TOTVS Identity, o usuário deverá abrir o My Safe id no aparelho e informar o token gerado pelo aplicativo para se autenticar.

![](/download/attachments/273980013/MFA%20Login.png?version=1&modificationDate=1702331910640&api=v2)

# Como adicionar uma conta do Google ao My Safe id?

O passo a passo a seguir demonstra como habilitar a autenticação multifator em uma conta do Google (Passos 1 a 4) e adicioná-la ao My Safe id (Passos 5 a 10).

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

 - Acessar a página **Minha Conta** do Google ([https://myaccount.google.com/](https://myaccount.google.com/)).

 - Acionar **Login e Segurança** → **Verificação em duas etapas → Primeiros passos**.

****

****

 - Informar a senha da conta do Google e acionar **Próxima**.

![](/download/attachments/309405201/safeid1.png?version=1&modificationDate=1509977600000&api=v2)

 - O Google exige que a conta seja verificada com um número de telefone.

 - Informar o número do telefone que deseja utilizar para a autenticação (com DDD) e acionar **Próxima**.

Por padrão, um código de verificação será enviado por mensagem de texto (SMS) para o número informado. Também é possível receber este código através de uma ligação telefônica.

 - Preencher o campo com o código recebido e acionar **Próxima**.

![](/download/attachments/309405201/gifmypass3.gif?version=1&modificationDate=1509484085000&api=v2)

 - Confirmada a validade do número de telefone informado, acionar **Ativar** para que a conta do Google passe a suportar a autenticação multifator.

![](/download/attachments/309405201/safeid2.png?version=2&modificationDate=1509978433000&api=v2)

 - Na página exibida após a ativação, localize a sessão **App Google Autenticador**.

 - Acionar **Configurar**.

![](/download/attachments/309405201/mp8.png?version=2&modificationDate=1509641058000&api=v2)

 - Selecionar o tipo do dispositivo onde o My Safe id está instalado (**Android** ou **iPhone**) e acionar **Próxima**.

![](/download/attachments/309405201/mp7.png?version=2&modificationDate=1509641058000&api=v2)

 - Abrir o My Safe id no aparelho smartphone.

 - Acionar o botão ![](/download/attachments/309405201/icon-plus.png?version=1&modificationDate=1509478648000&api=v2) no aplicativo para acessar a tela de inclusão de contas.

 - Apontar a câmera do smartphone para*QR code* apresentado na tela para efetuar a leitura do código.

 - Na página da conta Google, acionar **Próxima**.

Usou QR Code?

Caso a conta tenha sido adicionada utilizando a leitura do QR Code, o próximo passo pode ser desconsiderado. Avançar para o Passo 9.

 - Para incluir a chave manualmente, acionar **Não consegue ler o código?**.

![](/download/attachments/309405201/mp10.png?version=3&modificationDate=1509641059000&api=v2)

 - Abrir o aplicativo My Safe id no smartphone.

 - Acionar o botão ![](/download/attachments/309405201/icon-plus.png?version=1&modificationDate=1509478648000&api=v2) no aplicativo para acessar a tela de inclusão de contas.

 - Acionar **Adicione manualmente** no canto inferior da tela.

Este passo só deve ser executado por usuários que desejem adicionar a conta do Google ao My Safe id manualmente e **não** pelo escaneamento do *QR code*.

 - Informar o nome do serviço/aplicação no campo **Título**, por exemplo, "Google".

 - Informar o e-mail do Google no campo **Conta**, por exemplo, "seuemail@gmail.com".

 - Informar a chave de acesso fornecida pelo Google no campo **Chave**.

 - Acionar ![](/download/attachments/309405201/icon-check.png?version=2&modificationDate=1509479062000&api=v2) para salvar as informações.

 - Na página da conta Google, acionar **Próxima**.

![](/download/attachments/309405201/mp9.png?version=4&modificationDate=1509641056000&api=v2)

 - Na página **Minha Conta**, acionar **Concluído**para finalizar a configuração da verificação em duas etapas através do aplicativo My Safe id.

![](/download/attachments/309405201/mp12.png?version=2&modificationDate=1509641057000&api=v2)

 - A partir de agora, ao acessar a conta do Google será exigida, além do endereço de e-mail e senha, o token gerado pelo My Safe id.

![](/download/attachments/309405201/safeid4.png?version=1&modificationDate=1509978458000&api=v2)


<!-- anchors: AplicativoMySafeid-Objetivo, AplicativoMySafeid-AutenticaçãoMultifator+MySafeid, AplicativoMySafeid-ComoobteroaplicativoMySafeid?, AplicativoMySafeid-ComoadicionarumacontaaoMySafeid?, incluir_conta, incluir_conta-1708163460, incluir_conta-1200155601, AplicativoMySafeid-Comoeditarosdadosdaconta?, editar, editar-872616687, editar-872616688, editar-872616689, AplicativoMySafeid-Comoremoveraconta?, remover, remover-872616687, remover-872616688, remover-872616689, AplicativoMySafeid-ComoadicionarumacontadoTOTVSIdentityaoMySafeid?, identity, identity-872616687, identity-872616688, identity-872616689, identity-872616690, AplicativoMySafeid-ComoadicionarumacontadoGoogleaoMySafeid?google, incluir_conta, incluir_conta-872616687, incluir_conta-872616688, incluir_conta-872616689, incluir_conta-872616690, incluir_conta-872616691, incluir_conta-872616692, incluir_conta-872616693, incluir_conta-872616694, incluir_conta-872616695, incluir_conta-1281313569 -->
