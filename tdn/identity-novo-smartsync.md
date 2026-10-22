---
title: "Identity | Novo SmartSync"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Novo+SmartSync"
scraped_at: "2026-03-09T03:27:09.484Z"
depth: 2
anchors: 20
child_links: 48
---

# Identity | Novo SmartSync

# Falando de Novo SmartSync...

---

O SmartSync é um aplicativo responsável pela sincronização de dados entre o Identity e o Active Directory. Os dados sincronizados incluem a criação de novos usuários, alteração de dados como nome, sobrenome, e-mail e os grupos vinculados.

![](/download/attachments/696706457/image2023-1-13_17-19-23.png?version=2&modificationDate=1676470515360&api=v2)

## Instalar o SmartSync

---

Para realizar a instalação do SmartSync, siga os passos abaixo:

**01**. Confira os pré-requisitos a seguir.

- Verifique todos os requisitos informados na [Matriz de portabilidade](https://tdn.totvs.com/x/eDAxE).
- Ter instalado o pacote **ASP .NET completo** e o**.NET desktop**. No momento da instalação, você pode ser direcionado ao link de instalação se desejar [(veja a imagem)](/download/attachments/696706457/mensagem.PNG?version=1&modificationDate=1677184020117&api=v2).
- O servidor em que o SmartSync está instalado deve, obrigatoriamente, ser capaz de acessar os domínios do Identity (*.fluigidentity.com e *.customerfi.com) para que a sincronização e a autenticação dos usuários do Active Directory sejam efetuadas. Você deve providenciar para que as devidas exceções sejam adicionadas ao proxy e firewall de sua rede.
- Não é obrigatório instalar o SmartSync no mesmo servidor do diretório Active Directory, desde que a comunicação entre ambos (ping) esteja totalmente liberada.

**02**. Baixe o instalador conforme instruído no item **Baixar instalador do SmartSync **na documentação de [Active Directory](https://tdn.totvs.com/x/ZWWPKQ).

**03**. Clique com o botão direito do *mouse* sobre o instalador do SmartSync e selecione a opção **Executar como administrador **ou **Instalar** (dependendo da versão do sistema operacional).

**04**. Acione **Avançar** até concluir a instalação.

Após a instalação do SmartSync no servidor, é necessário configurá-lo com os diretórios Active Directory para que a sincronização dos usuários e/ou grupos possa ser iniciada.

Existem dois processos em execução para o SmartSync:

- **SmartsyncApplication**: responsável por fazer todo o monitoramento do que recebe e envia para o Identity, onde é feito o controle dos usuários e grupos que são sincronizados.
- **SmartsyncWebApi**: responsável pela parte visual do SmartSync, onde é possível ver os status, configurar, baixar logs.

Após a instalação e configuração do SmartSync, é necessário manter o serviço **SmartsyncApplication** em execução.

IMPORTANTE!

O SmartSync faz a criação dos serviços do Windows automaticamente toda vez que se cria uma nova configuração. Porém, caso seja necessário criar manualmente, os passos estão no item **Criação manual de serviço do Windows** nesta documentação.

### Criação manual de serviço do Windows

---

O SmartSync faz a criação dos serviços do Windows automaticamente  toda vez que se cria uma nova configuração. 

**01**. Acesse o prompt do Windows (cmd) e insira o comando a seguir, para instalar o serviço do Windows.

[?](#)

| `sc create "SmartSync.Application" binpath="C:\Program Files\TOTVS\SmartSync\Application\SmartSync.Application.exe"` |
| --- |

**02**. Ainda no prompt do Windows, digite o comando abaixo para iniciar o serviço.

[?](#)

| `sc start "SmartSync.Application"` |
| --- |

## Configuração inicial do SmartSync

---

Para realizar essa ação, é necessário que o SmartSync tenha sido instalado e executado no servidor.

IMPORTANTE!

Caso venha a ser feita a migração de um Active Directory antigo, durante a migração não será possível validar o login e senha no AD, os usuários que precisarem renovar o cache (validade de 14 dias desde a criação) não irão conseguir autenticar-se.

Por esse motivo, recomendamos que esse procedimento seja feito em período de menor utilização do sistema, por exemplo, durante a madrugada ou no fim de semana.

![](/download/attachments/696706457/tela-proxy-sem-registro.png?version=1&modificationDate=1676471082630&api=v2)

**01**. Abra a aplicação e acione o botão **Configurar.** 

**02**. Inclua as informações do protocolo e do ambiente, que pode ser produção ou customerfi. Acione **Testar**para garantir que a comunicação está ocorrendo. 

**03**. Acione **Avançar**para continuar a configuração do SmartSync. As configurações de proxy ainda não estão disponíveis na versão atual do SmartSync.

**oculto**

**Tipo**
A configuração de proxy pode ser: manual, padrão do sistema ou sem proxy.

- Na **configuração manual**, é necessário informar o **host**, a **porta**, **usuário** e **senha** para conexão com o AD Sync. O botão **Testar conexão** ajuda a testar se a configuração informada está correta.
- Na **configuração padrão do sistema**, o SmartSync utilizará as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync.
- **Sem proxy**, o SmartSync tentará conectar-se diretamente ao AD Sync sem passar por um proxy.

**04**. Acione avançar e insira as informações do Active Directory cadastrado no TOTVS Identity.

**IP/Nome do servidor**Apenas o IP ou nome do servidor de AD, sem o protocolo 'LDAP://' e sem a porta do serviço.****

**Usuário**e **Senha**Login e senha de administração do Active Directory (é obrigatório que as credenciais sejam de administrador).****

**Domínio**
Domínio raiz. Base DN ou primeiro nível. Esta informação deve ser fornecida pelo administrador do Active Directory.

**Token**Token copiado do diretório no Identity. Para mais detalhes sobre o token, verifique o item **Copiar token do diretório**da documentação do [Active Directory](https://tdn.totvs.com/x/ZWWPKQ).

![](/download/attachments/696706457/Dados%20AD.PNG?version=1&modificationDate=1754947333997&api=v2)

**05**. Acione **Concluir **para finalizar.

Se os dados estiverem corretos, após a conclusão da configuração, a tela principal do SmartSync será apresentada com as informações do AD configurado.

Se os dados estiverem incorretos, será exibida mensagem de erro e será necessário gerar novo token para realizar uma nova tentativa de configuração.

## Trocar porta do SmartSync

---

Para realizar essa ação, é necessário que o SmartSync esteja parado e fechado. A alteração de porta pode ser feita a qualquer momento.

**1.** Abra o arquivo **appsettings.json** com o auxílio de um editor de texto. Pode ser aberto no bloco de notas do Windows.

**2.** Localize o campo **Url**e altere a porta. A porta padrão é a 5325.  **Veja a imagem**

## Acessar o SmartSync

---

Para que seja possível o acesso, é necessário que os serviços SmartsyncApplication e SmartsyncWebApi tenham sido previamente inicializados. Ao abrir as aplicações, o navegador será iniciado, abrindo a página inicial do SmartSync que fica em [http://localhost:5000/home](http://localhost:5000/home).

O SmartSync está organizado nas abas: Início e Active Directory. 

Caso seja o primeiro acesso, será necessário configurar o SmartSync, o que consiste nas etapas **Proxy**e**Active Directory**(explicadas nos itens **Configurações de proxy**e**Adicionar Active Directory**desta documentação).

### Início

---

Na aba Início são apresentadas as principais informações sobre o SmartSync.

#### Conexão com o Identity

---

Nessa seção você preenche o ambiente a ser conectado com o AD, por padrão é o ambiente de produção: [https://app.fluigidentity.com/.](https://app.fluigidentity.com/.) 

![](/download/attachments/696706457/image2023-1-16_11-33-34.png?version=2&modificationDate=1676472329997&api=v2)

##### Editar ambiente

---

Realize alteração de protocolo e ambiente nos campos abaixo para testar conexão com Identity.

##### Testar conexão

---

Confira se a conexão foi estabelecida para cada ambiente em que o AD cadastrado aponta. 

#### Configurações de proxy

---

As configurações de proxy ainda não estão disponíveis na versão atual do SmartSync.

Na configuração padrão do sistema, o SmartSync utiliza as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync.

![](/download/attachments/696706457/image2023-1-16_11-39-44.png?version=1&modificationDate=1673880017720&api=v2)

**oculto**

Tipo
Dados necessários para que o SmartSync use um proxy para acessar a rede externa. A configuração de proxy pode ser: manual, padrão do sistema ou sem proxy.

- Na configuração manual, é necessário informar o host, a porta, usuário e senha para conexão com o AD Sync. O botão Testar conexão ajuda a testar se a configuração informada está correta.
- Na configuração padrão do sistema, o SmartSync utilizará as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync.
- Sem proxy, o SmartSync tentará conectar-se diretamente ao AD Sync sem passar por um proxy.

#### Logs de eventos

---

Apresenta os logs registrados pelo **SmartsyncWebApi** e **SmartsyncApplication**. É possível exportar esse log no formato .txt, para ver o detalhamento dos eventos detectados.

Os logs são armazenados conforme o nível de log escolhido, sendo eles: 

- **Info** (informações): mostra mensagens esperadas para uso regular do SmartSync, além de mensagens de debug, warning e error.
- **Debug** (depuração): mostra as mensagens da depuração que são úteis apenas durante o desenvolvimento, além de mensagens de warning e error.
- **Warning** (aviso): mostra possíveis problemas que ainda não são erros, além de mensagens de error.
- **Error** (erro): mostra problemas que causaram erros no SmartSync.

Entre os eventos de informação registrados, estão: data e início da aplicação, ambiente conectado, testes de conexão, filtros usados para encontrar usuários e grupos, erros na inclusão de diretórios Active Directory. 

![](/download/attachments/696706457/image2023-1-16_11-44-19.png?version=1&modificationDate=1673880292267&api=v2)

##### Exportar log de eventos

---

**01**. Na seção Logs de eventos, escolha o log desejado: **SmartsyncWebApi** ou **SmartsyncApplication**.

**02**. Verifique o período que deseja acompanhar.

**03**. Clique em **Exportar**.

**04**. Localize o log a ser exportado.

**05**. Acione **Exportar**.

Com isso, o log de eventos é baixado e pode ser visualizado no Bloco de notas ou leitor de arquivos texto de sua preferência.

##### Editar nível do log

---

****

**01**. Na seção Logs de eventos, acione o botão **Editar Logs**.

**02**. Escolha o nível de log desejado: info, debug, warning ou error.

**03**. Acione **Salvar**.

Após salvar a alteração, o nível escolhido será válido apenas para os próximos logs gerados.

### Active Directory

---

Nessa aba é realizada a inclusão dos diretórios do Active Directory que serão gerenciados pelo SmartSync.

A coluna **Situação Identity** identifica quando o diretório está ativo para que seja possível a importação de usuários e grupos de permissão.

- **→ Desconectado:** Quando um Active Directory está inativo não realiza a sincronização.
-  ![](/download/attachments/696706457/image2023-1-17_17-59-37.png?version=1&modificationDate=1673989210343&api=v2)→ **C****onectado:** Quando um Active Directory está ativo e sincronizando.

Também é possível observar quando uma importação de usuários/grupos está em andamento e quando for finalizada, em cada Active Directory.

- ![](/download/attachments/696706457/image2023-1-17_18-7-47.png?version=1&modificationDate=1673989700337&api=v2)→ **Sincronizando**: Importação de usuários e grupos ainda está sendo feita.
- ![](/download/attachments/696706457/image2023-1-17_18-5-39.png?version=1&modificationDate=1673989572367&api=v2)→ **Sincronizado**: Importação de usuários e grupos finalizada.

![](/download/attachments/696706457/image2023-1-13_17-27-42.png?version=1&modificationDate=1673641693027&api=v2)

#### Adicionar Active Directory

---

![](/download/attachments/696706457/image2023-1-16_14-30-1.png?version=1&modificationDate=1673890234677&api=v2)

**01**. No SmartSync, certifique-se de estar na aba **Active Directory**.

**02**. Acione o botão **Adicionar**.

**03**. Na tela aberta, preencha as informações relacionadas ao Active Directory a ser sincronizado com o Identity.

**IP**IP no qual o Active Directory está executando. 

**Domínio**Domínio da rede.

**Token**Token copiado do diretório no Identity. Para mais detalhes sobre o token, verifique o item **Copiar token do diretório**da documentação do [Active Directory](https://tdn.totvs.com/x/ZWWPKQ).

**04**. Clique em **Adicionar**.

Se todas as informações estiverem corretas, o Active Directory será adicionado na lista, e passará a sincronizar as informações com o Identity.

Caso tenha alguma inconsistência nos dados informados, o Active Directory não será adicionado na lista. Para identificar o problema, verifique o log conforme o item **Logs de eventos** dessa documentação.

#### Editar Active Directory

---

**01.** No SmartSync, certifique-se de estar na aba **Active Directory**.

**02.**Localize o Active Directory a ser alterado.

**03**. Acione **Editar** localizado ao lado direito da coluna Situação Identity.

**04**. Na tela aberta, corrija as informações necessárias. 

**IP**IP no qual o Active Directory está executando. 

**Domínio**Domínio da rede.

**05**. Clique em **Editar**para gravar as alterações.

#### Excluir Active Directory

---

**01.** No SmartSync, certifique-se de estar na aba **Active Directory**.

**02.**Localize o Active Directory a ser excluido.

**03**. Acione **Excluir**![](/download/attachments/696706457/image2023-1-16_15-26-33.png?version=1&modificationDate=1673893626587&api=v2) localizado ao lado direito da coluna Situação Identity.

**04**. Na mensagem de confirmação, marque a caixa de confirmação.

**05**. Acione **Excluir**.

Ao excluir a configuração do Active Directory, o processo de sincronização dos usuários e grupos irá parar definitivamente.

Fique atento!

Esta documentação é válida a partir da **versão 5.1.1.0** ou superior do SmartSync. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê no seu ambiente.


<!-- anchors: Identity|NovoSmartSync-FalandodeNovoSmartSync..., Identity|NovoSmartSync-InstalaroSmartSync, Identity|NovoSmartSync-CriaçãomanualdeserviçodoWindows, highlighter_610503, highlighter_503200, Identity|NovoSmartSync-ConfiguraçãoinicialdoSmartSync, Identity|NovoSmartSync-TrocarportadoSmartSync, Identity|NovoSmartSync-AcessaroSmartSync, Identity|NovoSmartSync-Início, Identity|NovoSmartSync-ConexãocomoIdentity, Identity|NovoSmartSync-Editarambiente, Identity|NovoSmartSync-Testarconexão, Identity|NovoSmartSync-Configuraçõesdeproxy, Identity|NovoSmartSync-Logsdeeventos, Identity|NovoSmartSync-Exportarlogdeeventos, Identity|NovoSmartSync-Editarníveldolog, Identity|NovoSmartSync-ActiveDirectory, Identity|NovoSmartSync-AdicionarActiveDirectory, Identity|NovoSmartSync-EditarActiveDirectory, Identity|NovoSmartSync-ExcluirActiveDirectory -->
