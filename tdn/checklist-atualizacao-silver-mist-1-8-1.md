---
title: "Checklist atualização Silver Mist 1.8.1"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=748078643"
scraped_at: "2026-03-09T05:19:42.238Z"
depth: 4
anchors: 2
child_links: 27
---

# Checklist atualização Silver Mist 1.8.1

# Objetivo

Procuramos nos antecipar a todas as situações para você não ter nenhum problema, porém podem haver alguns impactos na sua plataforma, requerendo atenção no momento da atualização.

O objetivo desta página é descrever que itens são relevantes observar para que a atualização ocorra de forma tranquila em sua empresa.

# Itens do checklist

      **Atualização do Fluig**

A instalação do **Fluig 1.8.1 (Silver Mist)** exige que a plataforma esteja na atualização **1.7.1 (Crystal Lake) ou superior**. Caso seu ambiente esteja em uma release anterior, é necessário primeiramente atualizar para **1.7.1**, subir os serviços e iniciar a plataforma, e só então atualizar para a **1.8.1**.

      **Desativação Universal Analytics x Google Analytics 4**

O Universal Analytics será desativado em **01 de Julho de 2023** e passará a ser substituído pelo Google Analytics 4. Essa desativação fará com que os dados da sua empresa no TOTVS Fluig Plataforma deixem de ser processados. 
É necessário que uma nova propriedade do Google Analytics 4 seja criada e configurado um novo token no TOTVS Fluig Plataforma.

Recomendamos que a atualização seja feita até a data informada acima. Para realizar a atualização acesse: **Usuário Google Analytics**.

      **License Server atualizado**

Na release 1.8.1 Silver Mist, para garantir o correto controle de licenças é necessário que o License Server esteja atualizado numa versão superior a **3.2.0.** Caso o License Server esteja numa versão inferior, o Fluig entrará no **modo demonstração não permitindo o acesso dos usuários.**

      **Homologação MySQL 8.0**

Para quem utiliza o MySQL 5.7, recomendamos planejar a atualização do banco de dados para a versão 8.0 o quanto antes, pois a versão 5.7 deixará de receber suporte pela própria fornecedora do sistema em **Outubro de 2023.**

**ATENÇÃO:** A versão MySQL 8.0 exige algumas configurações iniciais que só podem ser realizadas na instalação. Portanto é muito importante que a atualização seja feita por um especialista em banco de dados.

Ao atualizar o banco de dados para a versão MySQL 8.0 também deve ser atualizado o driver de conexão JDBC "MySQL Connector/J".

Recomendamos a leitura da documentação **Configuração de banco de dados MySQL**

*Para clientes Cloud, se faz necessário o contato com o time responsável para solicitar a atualização.*

Atenção!

É recomendável realizar o **backup** do banco de dados e da instalação do Fluig antes de instalar a atualização.

Confira o guia [Backup da aplicação Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666031) e o [Guia de Atualização do Fluig](#) para mais detalhes.

Consulte nossas documentações [Matriz de Portabilidade](https://tdn.totvs.com/x/_ApbB) e [Dimensionamento](https://tdn.totvs.com/x/9QpbB) para mais informações sobre os requisitos e desempenho do Fluig.


<!-- anchors: ChecklistatualizaçãoSilverMist1.8.1-Objetivo, ChecklistatualizaçãoSilverMist1.8.1-Itensdochecklist -->
