---
title: "Checklist atualização 1.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=721006021"
scraped_at: "2026-03-09T05:20:00.578Z"
depth: 4
anchors: 2
child_links: 29
---

# Checklist atualização 1.8

## Objetivo

Como você pode perceber nesta atualização mudamos o número desta versão! Fizemos isso, pois temos mudanças arquiteturais relevantes. 

Procuramos nos antecipar a todas as situações para você não ter nenhum problema, porém podem haver algumas incompatibilidades em customizações ou personalizações feitas na sua plataforma, requerendo um pouco mais de atenção no momento da atualização.

O objetivo desta página é descrever que itens são relevantes observar para que a atualização ocorra de forma tranquila em sua empresa.

# Checklist

      **Atualização do Fluig**

A instalação do **Fluig 1.8.0** exige que a plataforma esteja na atualização **1.7.1 ou superior**. Caso seu ambiente esteja em uma release anterior, é necessário primeiramente atualizar para **1.7.1** ou superior e só então atualizar para **1.8.0**.

      **Requisitos de hardware**

Confira se o seu ambiente atende às definições de hardware para os servidores de aplicação e de banco de dados abaixo. Para mais detalhes consulte a documentação de **dimensionamento**.

![](/download/attachments/440834439/dimensionamento.png?version=3&modificationDate=1604944647477&api=v2)

      **Nova experiência em solicitações**

Verifique se a atualização não afetou a formatação dos formulários dos seus processos que possuem personalização. Caso queira desabilitar a nova experiência e voltar a utilizar o layout antigo, basta o administrador acessar a área de configuração de processos. A experiência antiga será descontinuada em versões futuras.

      **Central de componentes**

Com a atualização do Java da versão 8 para a 11, alguns recursos e bibliotecas foram descontinuados ou retirados dessa nova versão. 
É importante avaliar se os seus componentes customizados (widgets, arquivos .ear, .war, .jar) enviados para a plataforma utilizam alguns desses recursos e providenciar os ajustes antes de atualizar. 
Verifique tudo que mudou em cada versão do Java, consultando o **release notes**.

      **Plugin Eclipse**

Desenvolvedores que utilizam o plugin do Eclipse precisam atualizar para uma versão que execute com Java 11.

      **Arquivos "Domain.xml" e "Host.xml"**

Caso tenha efetuado alguma personalização nos arquivos "domain.xml" e "host.xml", é importante validar se todas as alterações foram migradas para a nova versão.
Verifique tudo o que foi alterado manualmente nos arquivos.

      **Bibliotecas Front-end utilizadas**

Foram realizadas atualizações nas bibliotecas: jQuery da versão 222 para a 3.5.0, Moment da versão 2.9.0 para a 2.24.0 e Bootstrap da versão 3.3.6 para a 3.4.1. 
Ao atualizar o cliente receberá o jQuery novo junto com o plugin de migração, tudo no mesmo arquivo.
Segue a url: /portal/resources/js/jquery/jquery.js

Liberamos nessa release um plugin de migração fornecido pela própria jQuery, o **jquery-migrate**, que além de ajudar a restaurar os comportamentos perdidos na versão anterior, irá facilitar também a identificação dos pontos onde é necessário a atualização do código.

Mais detalhes na documentação **Atualização jQuery - Como identificar o que precisa ser ajustado**.

OBS.: Recomendamos que utilizem este plugin para realizar as adequações do código o mais breve possível, pois nas próximas releases ele será removido da instalação do Fluig.

      **Fluig instalado em servidor Linux**

Existem variáveis de ambiente Linux utilizadas para definir um limite de arquivos aberto e um número máximo de processos rodando. Os valores default no Linux para estas variáveis não são os ideais para alta performance do Fluig Indexer (Solr), por isso sugerimos ajustar os valores conforme a documentação **Configurações sugeridas em ambientes Linux**.

      **Propriedade jboss.server.log.dir**

Com a atualização do servidor de aplicação Wildfly da versão 10 para a versão 18, o comando **jboss.server.log.dir** no arquivo **domain.conf** foi descontinuado. Esse comando era utilizado para alterar o caminho da pasta de log do servidor, então como alternativa de configuração a partir da **atualização 1.7.0**, pode-se utilizar um link simbólico para a pasta de log, de acordo com o sistema operacional utilizado.

      **Banco de dados**

Conforme informado no [portal do cliente](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=TOTVS%20Fluig%20Plataforma-,19/06/2020,-Aten%C3%A7%C3%A3o%3A%20Banco%20de), a partir da atualização 1.7 o Fluig deixa de ser compatível com o banco de dados **MySQL 5.5**. Caso esse banco de dados seja utilizado, é necessário atualizar a versão do MySQL antes de prosseguir com a instalação do Fluig.

      **Diretório certs**

O diretório "certs" se refere à pasta onde os certificados são guardados. Recomendamos que esse diretório seja criado dentro do volume, para evitar que, em uma atualização ou migração de tecnologia, a pasta seja afetada. Para mais detalhes consulte a documentação de [Configuração HTTPS do Fluig](https://tdn.totvs.com/x/vdMgFQ).

      **Replicação de Sessão**

A partir dessa release está descontinuado o uso de **Replicação de Sessão** em **ambientes distribuídos**.

Caso tenha essa configuração aplicada em seu ambiente, ative a configuração de Afinidade de Sessão novamente, antes de atualizar.

Siga as instruções para ativar a Afinidade de Sessão conforme apresentado nas documentações abaixo:

  - [ambientes Windows](https://tdn.totvs.com/x/KwVbDw)

  - [ambientes Linux](https://tdn.totvs.com/x/GAVbDw)

Atenção!

É recomendável realizar o **backup** do banco de dados e da instalação do Fluig antes de instalar a atualização.

Confira o guia [Backup da aplicação Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666031) e o [Guia de Atualização do Fluig](/pages/viewpage.action?pageId=271666186) para mais detalhes.

Consulte nossas documentações [Matriz de Portabilidade](https://tdn.totvs.com/x/_ApbB) e [Dimensionamento](https://tdn.totvs.com/x/9QpbB) para mais informações sobre os requisitos e desempenho do Fluig.


<!-- anchors: Checklistatualização1.8-Objetivo, Checklistatualização1.8-Checklist -->
