---
title: "ARQ - Como ajustar as configurações da plataforma da atualização 1.6.4 até 1.8.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=941246805"
scraped_at: "2026-03-09T04:09:14.102Z"
depth: 2
anchors: 7
child_links: 61
---

# ARQ - Como ajustar as configurações da plataforma da atualização 1.6.4 até 1.8.2

Fique atento!

Esta página é válida para as atualizações **1.6.4 até 1.8.2**** **do TOTVS Fluig.

Se você utiliza outra atualização, acesse:

- **Voyager (2.0) ou superior**: [Configurações da plataforma](/pages/viewpage.action?pageId=257623022);
- **1.6.0 até 1.6.3**: [Como ajustar as configurações da plataforma da atualização 1.6.0 até 1.6.3](/pages/viewpage.action?pageId=351386044).

# Índice

# Descrição

---

A plataforma possibilita a configuração de parâmetros do servidor de forma visual, na aba Parâmetros da Plataforma, ou através da API [System Configuration](https://api.fluig.com/old/resource_ConfigurationServiceRest.html).

# Arquivo de configuração

---

O arquivo de configuração é gerado durante o processo de instalação ou atualização. As configurações possíveis são as mesmas que eram disponibilizadas anteriormente (via *bindings* ou propriedades globais no arquivo **domain.xml**).

O arquivo de configuração está localizado em** [diretório_instalação]/repository/wcmdir/config/configuration.properties** e utiliza o formato chave=valor.

Quando a plataforma é inicializada e o configuration.properties está presente na pasta config, será feita a persistência dos dados. Ao final deste processo ele é removido. 

Atenção!

Caso desejar alterar um arquivo gerado automaticamente, é recomendado fazer *backup* do arquivo original.

# Recuperação das configurações

---

Alguma configuração feita foi perdida? Não se preocupe, a plataforma gera arquivos de backup das configurações!

Sempre que for realizada a configuração via tela ou API um arquivo de backup é gerado com as configurações suportadas.

Este arquivo é gerado em **[diretório_instalação]/repository/wcmdir/config** e no nome do arquivo constará a data em que ele foi gerado, no formato **configuration.AAAAMMDD-HHmmss.properties**.

**Exemplo:** um arquivo de *backup* gerado no dia 01/12/2016 às 13:20:43, terá o nome configuration.20160201-132043.properties.

Se alguma alteração nos parâmetros impedir o acesso a plataforma, é possível recuperar a configuração anterior.

Para efetuar este procedimento:

- Faça uma cópia do arquivo de backup na data desejada para a mesma pasta;
- Nomeie o arquivo como **configuration.properties**;
- Reinicie a plataforma.

![](/download/attachments/941246805/properties.jpg?version=1&modificationDate=1746637009913&api=v2)

# Configurações do servidor disponíveis

---

As configurações de servidor passíveis de alteração estão relacionadas em [Parâmetros de configuração da plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=257623031).

Veja abaixo como é possível alterar propriedades pela *web* ou via API. 

# Configuração pela página Parâmetros da Plataforma

---

Para alterar algumas configurações chaves do servidor foi criado o recurso **Parâmetros da Plataforma** onde é possível visualizar as configurações atuais e alterar os parâmetros necessários.

Para visualizar a aba acesse a plataforma com o usuário **wcmadmin**, clique em **Painel de controle** → **WCM → Configurações do Sistema** → aba **Parâmetros da Plataforma**. ** Veja a imagem**

Acesso via API

Também é possível realizar alterações nas configurações via API Pública, na documentação da API acesse a página**System Configuration** para mais detalhes.

# Bloqueio de Clickjacking

---

A opção de Bloqueio de *Clickjacking* evita que ataques deste tipo sejam realizados na plataforma. Os ataques *Clickjacking* são executados inserindo uma página dentro de outra através de um elemento *iframe* em uma página *HTML* e interceptando eventos de mouse e teclado.

A configuração de **Bloqueio de clickjacking** está disponível no recurso de **Configurações do Sistema → Parâmetros da Plataforma**e vem habilitada por padrão.

Não é recomendado desativar esta opção, portanto altere esse parâmetro somente se tiver ciência dos riscos da vulnerabilidade.

![](/download/attachments/941246805/Image%2015.jpg?version=1&modificationDate=1746637009973&api=v2)


<!-- anchors: ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-Índice, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-Descrição, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-Arquivodeconfiguração, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-Recuperaçãodasconfigurações, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-Configuraçõesdoservidordisponíveis, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-ConfiguraçãopelapáginaParâmetrosdaPlataforma, ARQComoajustarasconfiguraçõesdaplataformadaatualização1.6.4até1.8.2-BloqueiodeClickjacking -->
