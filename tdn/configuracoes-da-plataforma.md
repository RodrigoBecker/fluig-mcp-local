---
title: "Configurações da plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623022"
scraped_at: "2026-03-09T03:09:25.430Z"
depth: 1
anchors: 6
child_links: 60
---

# Configurações da plataforma

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)**do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse:

- para atualizações **1.6.4 até 1.8.2**: [Como ajustar as configurações da plataforma da atualização 1.6.4 até 1.8.2](/pages/viewpage.action?pageId=941246805);
- para atualizações **1.6.0 até 1.6.3**: [Como ajustar as configurações da plataforma da atualização 1.6.0 até 1.6.3](/pages/viewpage.action?pageId=351386044).

# Descrição

---

A plataforma possibilita a configuração de parâmetros do servidor de forma visual, na aba Parâmetros da Plataforma, ou através da API *System Configuration*.

# Arquivo de configuração

---

O arquivo de configuração é gerado durante o processo de instalação ou atualização. As configurações possíveis são as mesmas que eram disponibilizadas anteriormente (via *bindings* ou propriedades globais no arquivo **standalone.xml**).

O arquivo de configuração está localizado em** [diretório_instalação]/repository/wcmdir/config/configuration.properties** e utiliza o formato chave=valor.

Quando a plataforma é inicializada e o **configuration.properties** está presente na pasta **config**, será feita a persistência dos dados. Ao final deste processo ele é removido. 

Importante!

Se desejar alterar um arquivo gerado automaticamente, é recomendado fazer *backup* do arquivo original.

# Recuperação das configurações

---

Alguma configuração feita foi perdida? Não se preocupe, a plataforma gera arquivos de *backup* das configurações!

Sempre que for realizada a configuração via tela ou API um arquivo de *backup* é gerado com as configurações suportadas.

Este arquivo é gerado em **[diretório_instalação]/repository/wcmdir/config** e no nome do arquivo constará a data em que ele foi gerado, no formato **configuration.AAAAMMDD-HHmmss.properties**.

EXEMPLO
Um arquivo de *backup* gerado no dia 01/12/2016 às 13:20:43, terá o nome **configuration.20160201-132043.properties**.

Se alguma alteração nos parâmetros impedir o acesso à plataforma, é possível recuperar a configuração anterior. Para efetuar este procedimento:

**01.** Faça uma cópia do arquivo de *backup* na data desejada para a mesma pasta.

**02.** Nomeie o arquivo como **configuration.properties**.

**03.** Reinicie a plataforma.

![](/download/attachments/257623022/properties.jpg?version=1&modificationDate=1492696121000&api=v2)

# Configurações do servidor disponíveis

---

As configurações de servidor passíveis de alteração estão relacionadas em [Parâmetros de configuração da plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=257623031).

Veja abaixo como é possível alterar propriedades pela *web* ou via API. 

# Configuração pela página Parâmetros da plataforma

---

Para alterar algumas configurações chave do servidor, foi criado o recurso [Parâmetros da plataforma](/pages/viewpage.action?pageId=235597328) onde é possível visualizar as configurações atuais e alterar os parâmetros necessários.

Para visualizar a aba, acesse a plataforma com o usuário **wcmadmin**, clique em **Painel de controle** → **WCM → Configurações do sistema** → aba **Parâmetros da plataforma**.

![](/download/attachments/257623022/par%C3%A2metros-da-plataforma.png?version=1&modificationDate=1755628276387&api=v2)

Dica!

Também é possível realizar alterações nas configurações via API Pública. Na documentação da API, acesse a página*****System Configuration* para mais detalhes.

# Bloqueio de Clickjacking

---

A opção de **Bloqueio de Clickjacking** evita que ataques deste tipo sejam realizados na plataforma. Os ataques *Clickjacking* são executados inserindo uma página dentro de outra através de um elemento *iframe* em uma página HTML e interceptando eventos de *mouse* e teclado.

A opção **Bloqueio de clickjacking** está disponível no recurso **Configurações do sistema → Parâmetros da plataforma**e vem habilitada por padrão.

Importante!

Não é recomendado desativar esta opção, portanto, altere esse parâmetro somente se tiver ciência dos riscos de vulnerabilidade.

![](/download/attachments/257623022/bloqueio-clickjacking.png?version=1&modificationDate=1755628276497&api=v2)


<!-- anchors: Configuraçõesdaplataforma-Descrição, Configuraçõesdaplataforma-Arquivodeconfiguração, Configuraçõesdaplataforma-Recuperaçãodasconfigurações, Configuraçõesdaplataforma-Configuraçõesdoservidordisponíveis, Configuraçõesdaplataforma-ConfiguraçãopelapáginaParâmetrosdaplataforma, Configuraçõesdaplataforma-BloqueiodeClickjacking -->
