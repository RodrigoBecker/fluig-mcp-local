---
title: "Identity | Acesso via Desktop SSO"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Acesso+via+Desktop+SSO"
scraped_at: "2026-03-09T05:12:18.551Z"
depth: 3
anchors: 2
child_links: 35
---

# Identity | Acesso via Desktop SSO

# Falando de acesso via Desktop SSO...

---

O Desktop SSO é um componente não obrigatório na arquitetura do TOTVS Identity e que pode ser habilitado pelo administrador do contexto. Ele é responsável pelo *Single Sign On* (SSO), o que permite aos usuários que já estejam autenticados no Windows da estação de trabalho acessar o Identity sem informar as credenciais (e-mail e senha) manualmente.

A validação das credenciais do Windows no Identity é realizada através de um *script* ASP, que é gerado pelo próprio Identity e deve ser hospedado em um servidor IIS (*Internet Information Service*). O *script* consulta as credenciais no Active Directory, recupera o e-mail associado ao usuário e o valida no Identity.

Se as credenciais forem legítimas, o usuário obterá acesso ao Identity sem a necessidade de informá-las manualmente. Caso as credenciais não sejam válidas, será apresentada ao usuário a página de login do Identity, onde ele deverá informar o e-mail e senha para ter acesso às aplicações.

Para maior segurança, é possível cadastrar intervalos de IPs, que restringem a permissão para utilização do recurso de SSO. Isto permite, por exemplo, que usuários internos da empresa tenham a experiência SSO habilitada, enquanto usuários externos à rede corporativa serão obrigados a entrar com credenciais manualmente para ter acesso ao Identity e seus aplicativos.

Consulte os procedimentos de instalação e configuração do [Desktop SSO](https://tdn.totvs.com/x/-JHCC).

![](/download/attachments/273992707/Desktop%20SSO%20vers%C3%A3o%20root-2.0.15-snapshot.png?version=1&modificationDate=1583843798697&api=v2)

## Habilitar Desktop SSO

---

**Veja a imagem**

****

**01. **Acessar as configurações ![](/download/attachments/273992707/flaticon-settings%20%281%29.png?version=1&modificationDate=1591202369147&api=v2) e selecionar a opção [Active Directory](https://tdn.totvs.com/display/TIdentity/Active+Directory).

**02.** Na seção **Acesso via Desktop SSO**, habilitar o acesso ao Identity via Desktop SSO marcando a opção **Permitir o acesso via Desktop SSO**.

**03.** Acionar o link **Configuração do Desktop SSO**.

Nesta página será realizada a definição dos intervalos de endereços IP que serão liberados para executar o SSO.

**04.** Informar um endereço IP externo permitido.

Os endereços IP informados na configuração do Desktop SSO devem ser **IPs externos** para garantir a comunicação com o Identity, que não possui acesso aos IPs internos da rede. Caso não saiba qual o endereço o IP externo, o administrador pode usar sites como [http://www.meuip.com.br/](http://www.meuip.com.br/) para identifica-los.

Os IPs externos não cadastrados serão redirecionados para a página de login, onde os usuários deverão informar manualmente as credenciais para obter acesso ao contexto. É necessário que a empresa possua um IP externo estático garantindo que usuários deste IP utilizem o Desktop SSO e os IPs diferentes do cadastrado possam utilizar suas credenciais pela tela de autenticação.

Além de informar um endereço IP específico, é possível informar um intervalo de IPs. Por exemplo: 192.168.4.[0-10]. Essa expressão indica que todos os endereços IP entre 192.168.4.0 e 192.168.4.10 serão permitidos.

Se o administrador cadastrar [0-255]. [0-255]. [0-255]. [0-255] como endereço permitido, o Identity entenderá que todos os endereços de acesso são válidos. Contudo, essa configuração poderá acarretar problemas, pois usuários de fora da rede não terão acesso ao endereço do Desktop SSO e receberão uma mensagem erro.

**05.** Acionar o botão **Adicionar **localizado do lado direito de um endereço IP cadastrado para incluir mais um endereço IP à lista.

**06.** Acionar o ícone ![](/download/attachments/273992707/flaticon-trash.png?version=1&modificationDate=1583844333877&api=v2) localizado do lado direito de um endereço IP cadastrado para retirá-lo da lista de endereços IP permitidos.

**07.** Informar a **URL** do *script* de autenticação.

Esta URL é o endereço do servidor IIS para acesso ao *script* de autenticação. Por exemplo: https://acme.com/remote_auth.asp.

É obrigatório preencher esse campo, para que o *script* seja gerado corretamente.

**08.** Acionar **Salvar**.

Ao salvar as configurações, o *script* de autenticação SSO será disponibilizado para *download*.

**09.** Acionar **Baixar**.

As instruções para configuração do script remote_auth.asp constam na documentação [Configuração do Desktop SSO](/pages/viewpage.action?pageId=146969084).


<!-- anchors: Identity|AcessoviaDesktopSSO-FalandodeacessoviaDesktopSSO..., Identity|AcessoviaDesktopSSO-HabilitarDesktopSSO -->
