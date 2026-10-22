---
title: "Configuração do SmartSync"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286520624"
scraped_at: "2026-03-09T04:12:43.907Z"
depth: 2
anchors: 12
child_links: 42
---

# Configuração do SmartSync

---

Após a instalação do SmartSync no servidor, é necessário configurá-lo com os diretórios Active Directory para que a sincronização dos usuários e/ou grupos possa ser iniciada.

O SmartSync é compatível apenas com Active Directory e suporta tanto a sincronização de usuários quanto grupos. É possível adicionar diversos ADs ao SmartSync, configurando-os de acordo com a sua necessidade.

**oculto**

Os passos para configuração foram duplicados para o artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094) (Como configurar o SmartSync) 

Se for feita alguma alteração, lembrar de repassar a esse artigo.

## Pré-requisitos

- [Instalar e executar o SmartSync](#) no servidor.
- Vincular um diretório Active Directory ao contexto da empresa no Identity e copiar o token, conforme descrito em [Gerenciar Active Directories](https://tdn.totvs.com/x/W55UE).
- A porta 443 precisa ser liberada para saída.

## Configurar o SmartSync

 **Assista ao vídeo**

Para abrir o painel de configurações do SmartSync, deve-se abrir a aplicação e acionar o botão **Configure**. As opções de configuração serão distribuídas em cinco abas, conforme explicitado a seguir.

### FluigIdentity Server

A aba FluigIdentity Server é a primeira exibida no painel de configurações do SmartSync. Nela são definidas as informações de conexão ao AD Sync, o serviço responsável pela sincronização de dados entre o Active Directory e o contexto no Identity.

![](/download/attachments/286520624/FluigIdentity%20Server.png?version=3&modificationDate=1548098417890&api=v2)

**ADSync Service Server**Apresenta a URL [https://app.fluigidentity.com/adsync](https://app.fluigidentity.com/adsync) para integração com o ambiente de produção do Identity. Caso o contexto utilizado esteja no ambiente de homologação, alterar para [https://app.customerfi.com/adsync](https://app.customerfi.com/adsync).

**ADSync Interval Syncronism**Campo em que é definido o intervalo (em segundos) em que o SmartSync deve acionar o serviço AD Sync para buscar comandos LDAP no Identity. A alteração deste campo é recomendada apenas em ambientes que possuam conexões limitadas à internet. O tempo padrão é 1 segundo e o máximo, 5 segundos.

**HTTP Proxy**Seção****onde é realizada a configuração do proxy, caso necessária.

| Tipo | Descrição |
| --- | --- |
| Tipo | Descrição |
| SystemDefault | O SmartSync utilizará as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync. |
| CustomProxy | O SmartSync utilizará as configurações de proxy definidas nos campos Host, Port, Username e Password para conectar-se ao AD Sync. Caso o proxy não exija autenticação, os campos Username e Password podem ser deixados em branco. |
| NoProxy | O SmartSync tentará conectar-se diretamente ao AD Sync sem passar por um proxy. |

As configurações de proxy e rede são de responsabilidade do cliente e não fazem parte do escopo do nosso time de atendimento.

****

**Save**Ao acionar o botão **Save**, as informações preenchidas acima serão utilizadas para efetuar um teste de conexão ao ADSync Server.

### Domain LDAP

Na aba Domain LDAP são incluídos os diretórios Active Directory que o SmartSync poderá acessar para fazer a sincronização dos dados. Para adicionar um novo diretório Active Directory, acionar **Add**. Para editar, clicar duas vezes sobre um diretório cadastrado.

É possível adicionar diversos ADs ao SmartSync, configurando-os de acordo com a sua necessidade.

![](/download/attachments/286520624/domain.png?version=1&modificationDate=1520972720000&api=v2)

**Address Directory Server**A URL ou o nome do domínio do Active Directory acompanhado da porta. Exemplo: [LDAP://192.168.59:389](LDAP://192.168.59:389).

**Root DN**Domínio raiz. Base DN ou primeiro nível. Esta informação deve ser fornecida pelo administrador do Active Directory do cliente.

****

**User Name** / **Password**Login e senha do administrador do Active Directory (é obrigatório que as credenciais sejam de um administrador).

Atenção

Dependendo da configuração do AD do cliente pode ser necessário informar o domínio juntamente com o usuário. **Por exemplo: domínio\usuário**. Já em outros casos apenas o nome do usuário será suficiente.

**Token**Chave gerada pelo Identity que identifica com qual diretório este domínio fará a integração. Para saber como obter o token, consulte a documentação [Gerenciar Active Directories](https://tdn.totvs.com/x/W55UE#GerenciarActiveDirectories-obtertoken).

**Interval Synchronism**Intervalo de sincronização (em segundos) das informações do Active Directory que sofreram alteração e devem ser atualizadas no Identity. O valor default é de 1 segundo, isto significa que a cada segundo o SmartSync fará uma chamada para o seu AD para verificar alterações, o que pode afetar o funcionamento da máquina AD caso ela não tenha capacidade de processamento compatível.

Este valor pode ser alterado para um valor maior, conforme a capacidade da rede e de máquina, lembrando que se for definido um valor de 600s, significa que uma alteração no AD demorará 10 min para ser enviada ao Identity.

**User Filter**O filtro é uma linguagem de busca no diretório LDAP. Esta configuração serve para realizar *apenas* a importação inicial dos usuários. Por padrão, está definido para importar apenas os usuários com e-mail preenchido. 

Independente do filtro configurado, o Identity apenas importará usuários que possuam os campos Nome, Sobrenome e E-mail preenchidos no Active Directory.

**Enabled**Determina se a integração do Active Directory cadastrado com o Identity está habilitada ou não.

### NTFS

Na aba NTFS são configurados os diretórios compartilhados para controle de permissão através do Identity. A documentação deste recurso está disponível na página [Sistema de Arquivos NTFS](https://tdn.totvs.com/x/AbrbCw).

### Windows Authentication

No campo **Port** da aba Windows Authentication, manter o valor 0.

![](/download/attachments/286520624/windows_authentication.png?version=1&modificationDate=1504201468000&api=v2)

### Application Options

Essa aba reúne configurações relacionadas ao próprio SmartSync.

![](/download/attachments/286520624/application_options.png?version=1&modificationDate=1504201520000&api=v2)

Para que o SmartSync inicie junto ao Windows, marcar a opção **Auto running with windows startup**. Na opção **Log Options** é possível definir o nível de aprofundamento das informações exibidas no registro (*log*) do SmartSync:

| Tipo | Descrição |
| --- | --- |
| Tipo | Descrição |
| INFO | É o nível mais superficial. Registra as ações realizadas com sucesso pelo SmartSync. |
| WARN | Registra as advertências geradas pelo SmartSync, além dos registros do nível acima. |
| ERROR | Registra os erros ocorridos no SmartSync, além dos registros dos dois níveis acima. |
| DEBUG | É a opção recomendada, pois incluir detalhes adicionais, além dos registros dos três níveis acima. |

## Iniciar serviço do SmartSync

O serviço do SmartSync, quando iniciado, monitora constantemente o diretório LDAP configurado. Caso sejam criados novos usuários ou ocorram alterações no status de usuários existentes, essas mudanças são sincronizadas com o Identity pelo SmartSync e vice-versa.

- [Aplicação](#)
- [Windows](#)

O serviço pode ser iniciado e interrompido através da própria aplicação pelo botão **Start Service**/**Stop Service**.

![](/download/attachments/286520624/iniciar_smartsync_aplica%C3%A7%C3%A3o.gif?version=1&modificationDate=1504530919000&api=v2)

Ao instalar o SmartSync no servidor, é criado automaticamente um serviço no Windows chamado "SmartSync". Para iniciar o serviço, seguir as instruções a seguir:

 - Acessar o painel de **Serviços** do Windows (services.msc).

 - Localizar o serviço SmartSync na listagem.

 - Clicar com o botão direito do *mouse* sobre o serviço.

 - Acionar **Iniciar**.

![](/download/attachments/286520624/iniciar_smartsync_windows.gif?version=1&modificationDate=1504528394000&api=v2)

## Recursos do SmartSync

O SmartSync oferece os seguintes recursos para o monitoramento de atividades e gerenciamento de usuários:

![](/download/attachments/286520624/recursos_smartsync.png?version=1&modificationDate=1521723873000&api=v2)

**Visualizar log de serviço**

Para visualizar o *log* de serviço do SmartSync, basta acionar a opção ***Service Log*****(1)**. O *log* registra quais tarefas foram executadas pela aplicação e quando, portanto é útil para monitorar a sincronização de dados e identificar possíveis problemas. O nível de detalhamento do log é definido na aba **Application Options**, [conforme descrito acima](#ConfiguraçãodoSmartSync-application).

**Verificar configurações de domínio**

Para verificar se as configurações aplicadas ao SmartSync são válidas, está disponível a opção ***Check Configuration*****(2)**. Este recurso verifica se o SmartSync é capaz de conectar-se ao(s) domínio(s) LDAP cadastrados e ao AD Sync utilizando a rede do servidor onde a aplicação está instalada e as configurações HTTP e *proxy* definidas na aba **FluigIdentity Server**. Os resultados são exibidos no painel central do SmartSync.

**Reimportar todos os usuários**

Caso o administrador deseje repetir a importação inicial de usuários (e grupos, se for utilizado um Active Directory), que por padrão é realizada apenas após a configuração do domínio no SmartSync, está disponível o recurso ***Reimport All*** **(3)**.

Lembrando que o status dos usuários os importados do Active Directory permanece como "Pendente" no contexto do Identity até a aprovação do administrador. Uma vez aceitos, o status dos usuários é alterado para "Ativo" e o acesso à empresa no Identity é liberado.

**oculto**

Configuração inicial do SmartSync

---

Para realizar a configuração inicial, é necessário ter baixado o arquivo com as configurações do Active Directory realizadas no Identity. Confira os passos para obter o arquivo **nessa documentação**.

**01**. Para acessar as configurações do SmartSync, abrir a aplicação e acionar o botão **Configurar.** 

**02**. Inserir as informações de proxy.

**Tipo**
A configuração de proxy pode ser: manual, padrão do sistema ou sem proxy.

- Na **configuração manual**, é necessário informar o **host**, a **porta**, **usuário** e **senha** para conexão com o AD Sync. O botão **Testar conexão** ajuda a testar se a configuração informada está correta.
- Na **configuração padrão do sistema**, o SmartSync utilizará as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync.
- **Sem proxy**, o SmartSync tentará conectar-se diretamente ao AD Sync sem passar por um proxy.

**03**. Acionar **Avançar**.

**04**. Inserir as informações do Active Directory cadastrado no TOTVS Identity.

**Usuário**e **Senha**Login e senha do administrador do Active Directory (é obrigatório que as credenciais sejam de um administrador).****

**Host**e**Porta**Domínio raiz. Base DN ou primeiro nível. Esta informação deve ser fornecida pelo administrador do Active Directory.

**05**. Na seção Dados do Active Directory, acionar o botão **Selecionar**e localizar o arquivo de configurações do Active Directory.

Os dados a serem importados serão apresentados na tela, para a conferência.

**06**. Acionar **Concluir **para finalizar.

Se os dados estiverem corretos, após a conclusão da configuração, a tela principal do SmartSync será apresentada com as informações do AD configurado.

**oculto**

Monitorar SmartSync

---

Para que as informações abaixo sejam apresentadas, é necessário que tenha sido efetuada a configuração inicial do SmartSync.

**01**. Abrir a aplicação.

**02**. Visualizar as informações apresentadas.

A tela principal do SmartSync será apresentada com as informações do AD configurado, divididas em:

- **Conexão com Identity**Mostra o status da conexão, a data da última conexão e o servidor configurado.

- **Configurações de proxy**Mostra os dados informados no SmartSync para a configuração do proxy de rede.

- **Logs de eventos**Eventos registrados no SmartSync, de acordo com a data informada no filtro. São apresentados eventos de informação (por exemplo, se o ADSync estiver disponível), de alerta (por exemplo, caso tenha alguma lentidão) e de erro (por exemplo, inconsistências de configuração, falhas na importação ou indisponibilidades).

**oculto**

Testar conexão com o Identiy

---

Para efetuar essa ação, é necessário que tenha sido efetuada a configuração inicial do SmartSync.

**01**. Abrir a aplicação.

**02**. Na seção Conexão com Identity, acionar o botão **Testar conexão**.

Se os dados estiverem corretos, será apresentada a mensagem **Conexão realizada com sucesso**.

**oculto**

Editar configurações do SmartSync

---

Para efetuar essa ação, é necessário que tenha sido efetuada a configuração inicial do SmartSync.

**01**. Abrir a aplicação.

**02**. Na seção Configurações de proxy, acionar o botão **Editar configurações**.

**03**. Inserir as informações de proxy.

**Tipo**
A configuração de proxy pode ser: manual, padrão do sistema ou sem proxy.

- Na **configuração manual**, é necessário informar o **host**, a **porta**, **usuário** e **senha** para conexão com o AD Sync. O botão **Testar conexão** ajuda a testar se a configuração informada está correta.
- Na **configuração padrão do sistema**, o SmartSync utilizará as configurações de proxy definidas no sistema operacional para conectar-se ao AD Sync.
- **Sem proxy**, o SmartSync tentará conectar-se diretamente ao AD Sync sem passar por um proxy.

**04**. Acionar **Salvar**.

**oculto**

Adicionar Active Directory

---

Para efetuar essa ação, é necessário que tenha sido efetuada a configuração inicial do SmartSync.

**01**. Abrir a aplicação.

**02**. Acionar a aba **Active Directory**.

**03**. Acionar **Adicionar**.

Insira as informações sobre o Active Directory cadastrado no TOTVS Identity:

**Usuário e Senha**
Login e senha do administrador do Active Directory (é obrigatório que as credenciais sejam de um administrador).

**IP**A URL ou o nome do domínio do Active Directory acompanhado da porta. Exemplo: [LDAP://192.168.59:389](LDAP://192.168.59:389).

**04**. Na seção Dados do Active Directory, acionar o botão **Selecionar**e localizar o arquivo de configurações do Active Directory.

Os dados a serem importados serão apresentados na tela, para a conferência.

**05**. Acionar **Adicionar** para finalizar a inclusão do AD.

Se os dados estiverem corretos, após a inclusão do novo AD, a tela de Active Directory será apresentada com as informações de cada AD configurado e a situação de conexão com o Identity.

**oculto**

Excluir Active Directory

---

**01**. Abrir a aplicação.

**02**. Acionar a aba **Active Directory**.

**03**. Localizar o AD a ser excluído e acionar **Excluir**![](/download/attachments/286520624/flaticon-trash.png?version=1&modificationDate=1606402325730&api=v2) .

**04**. Na mensagem de confirmação, marcar a opção **Li e concordo**e acionar **Excluir**.

Ao confirmar a exclusão do Active Directory, o processo de sincronização dos usuários irá parar definitivamente.


<!-- anchors: ConfiguraçãodoSmartSync-Pré-requisitos, ConfiguraçãodoSmartSync-ConfiguraroSmartSync, ConfiguraçãodoSmartSync-FluigIdentityServer, ConfiguraçãodoSmartSync-DomainLDAP, ConfiguraçãodoSmartSync-NTFS, ConfiguraçãodoSmartSync-WindowsAuthentication, ConfiguraçãodoSmartSync-ApplicationOptionsapplication, ConfiguraçãodoSmartSync-IniciarserviçodoSmartSync, serviços, serviços--1732913260, serviços--1280820637, ConfiguraçãodoSmartSync-RecursosdoSmartSync -->
