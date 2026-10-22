---
title: "ARQ - Como posso ajustar as configurações da plataforma da release 1.6.0 a Snowflake (1.6.3)?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=351386044"
scraped_at: "2026-03-09T04:09:18.529Z"
depth: 2
anchors: 7
child_links: 60
---

# ARQ - Como posso ajustar as configurações da plataforma da release 1.6.0 a Snowflake (1.6.3)?

Atenção

Esta página é destinada a atualizações 1.6.0 à Snowflake (1.6.3) do TOTVS Fluig Plataforma.

Caso possua uma atualização Waterdrop (1.6.4) ou superior, acesse: [Configurações da Plataforma](/pages/viewpage.action?pageId=257623022).

# Índice

# Descrição

Desde a atualização 1.5.6 a plataforma possibilita a configuração de parâmetros do servidor de forma visual, na aba Parâmetros da Plataforma, ou através da API [System Configuration](https://api.fluig.com/old/resource_ConfigurationServiceRest.html).

# Arquivo de configuração

O arquivo de configuração é gerado durante o processo de instalação ou atualização. As configuração possíveis são as mesmas que eram disponibilizadas anteriormente (via *bindings* ou propriedades globais no arquivo **domain.xml**).

O arquivo de configuração está localizado em** [diretório_instalação]/repository/wcmdir/config/configuration.properties** e utiliza o formato chave=valor.

Quando a plataforma é inicializada e o configuration.properties está presente na pasta config, será feita a persistência dos dados. Ao final deste processo ele é removido. 

Atenção!

Caso desejar alterar um arquivo gerado automaticamente, é recomendado fazer *backup* do arquivo original.

# Recuperação das configurações

Alguma configuração feita foi perdida? Não se preocupe, a plataforma gera arquivos de backup das configurações!

Sempre que for realizada a configuração via tela ou API é gerado um arquivo de backup com as configurações suportadas. Este arquivo é gerado em [diretório_instalação]/repository/wcmdir/config e no nome do arquivo constará a data em que ele foi gerado, no formato configuration.AAAAMMDD-HHmmss.properties.

Exemplo: um arquivo de *backup* gerado no dia 01/12/2016 às 13:20:43, terá o nome configuration.20160201-132043.properties.

Se alguma alteração nos parâmetros impedir o acesso a plataforma, é possível recuperar a configuração anterior. Para efetuar este procedimento faça uma cópia do arquivo de backup na data desejada para a mesma pasta, nomeie o arquivo como **configuration.properties** e reinicie a plataforma.

![](/download/attachments/351386044/properties.jpg?version=1&modificationDate=1523367843000&api=v2)

# Configurações do servidor disponíveis

As configurações de servidor passíveis de alteração estão relacionadas em [Parâmetros de configuração da plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=257623031).

Veja abaixo como é possível alterar propriedades pela *web* ou via API. 

# Configuração pela página Parâmetros da Plataforma

Para alterar algumas configurações chaves do servidor foi criado o recurso **Parâmetros da Plataforma** onde é possível visualizar as configurações atuais e alterar os parâmetros necessários.

Para visualizar a aba acesse a plataforma com o usuário **wcmadmin**, clique em **Painel de controle** → aba **WCM → Configurações do Sistema** → aba **Parâmetros da Plataforma**.

![](/download/attachments/351386044/parametros_plataforma.png?version=1&modificationDate=1523367843000&api=v2)

Acesso via API

Também é possível realizar alterações nas configurações via API Pública, na documentação da API acesse a página **System Configuration** para mais detalhes.

# Bloqueio de Clickjacking 

A opção de Bloqueio de *Clickjacking* evita que ataques deste tipo sejam realizados na plataforma. Os ataques *Clickjacking* são executados inserindo uma página dentro de outra através de um elemento *iframe* em uma página *HTML* e interceptando eventos de mouse e teclado.

A configuração de **Bloqueio de clickjacking** está disponível no recurso de **Configurações do Sistema → Parâmetros da Plataforma **e vem habilitada por padrão. Não é recomendado desativar esta opção, portanto altere esse parâmetro somente se tiver ciência dos riscos da vulnerabilidade.

![](/download/attachments/351386044/clickjacking.jpg?version=1&modificationDate=1523367843000&api=v2)


<!-- anchors: ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-Índice, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-Descrição, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-Arquivodeconfiguração, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-Recuperaçãodasconfigurações, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-Configuraçõesdoservidordisponíveis, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-ConfiguraçãopelapáginaParâmetrosdaPlataforma, ARQComopossoajustarasconfiguraçõesdaplataformadarelease1.6.0aSnowflake(1.6.3)?-BloqueiodeClickjacking -->
