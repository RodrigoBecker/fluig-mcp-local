---
title: "107 - Como criar e configurar o limite de registros de update no banco de dados utilizado pelo Fluig"
url: "https://tdn.totvs.com/display/public/fluig/107+-+Como+criar+e+configurar+o+limite+de+registros+de+update+no+banco+de+dados+utilizado+pelo+Fluig"
scraped_at: "2026-03-09T03:58:38.664Z"
depth: 2
anchors: 6
child_links: 131
---

# 107 - Como criar e configurar o limite de registros de update no banco de dados utilizado pelo Fluig

# Índice

# Plataforma

**Produto:**fluig

# Ocorrência

No processo de atualização para o Fluig 1.8.0 são executados updates no banco de dados, onde é realizada a criação de uma tabela temporária para a cópia de registros. É utilizado o limite de 10.000 (dez mil) registros durante a cópia dos dados. Em um ambiente com alto volume de dados, o update pode demorar por conta do total de registros x limite de registros para a cópia na tabela temporária. É possível aumentar esse limite seguindo os passos abaixo, para que o update seja executado em menos tempo.

Atenção

Consulte o seu DBA para realizar a configuração abaixo, para evitar problemas no servidor de banco de dados.

Importante

A configuração descrita nesta documentação é válida para o Fluig 1.7.1 (qualquer release). Ao atualizar para o Fluig 1.8.2, caso o ambiente esteja utilizando o Fluig 1.8.0 ou superior, o update já foi executado e a configuração abaixo não será utilizada, caso aplicada.

# Solução

Veja a seguir o passo a passo:

**Ambiente on-premises:**

1. Pare o serviço do Fluig;
2. Efetue o download do Fluig 1.8.2;
3. Faça a atualização do ambiente para o Fluig 1.8.2, conforme documentação;
4. Navegue até o diretório de instalação do Fluig:

- Acesse o diretório onde o Fluig está instalado.
- Acesse a pasta <FLUIG>/appserver/domain/configuration/
5. Localize e edite o arquivo domain.xml:

- No diretório mencionado, localize o arquivo domain.xml
6. No arquivo domain.xml, localize a tag “<system-properties>”

- Abra o arquivo domain.xml em um editor de texto de sua preferência.
- Localize a tag <system-properties>

- [Imagem](#)

        	![](/download/attachments/856923748/image-2024-7-15_10-20-34.png?version=1&modificationDate=1721050212817&api=v2)
7. Adicione a propriedade FLUIG_DB_PROCESS_DEFINITION_LIMIT:

- Adicione a propriedade FLUIG_DB_PROCESS_DEFINITION_LIMIT com o valor desejado (value) para ser o limite de registros na cópia de dados na tag <system-properties>

Exemplo:

        <property name="FLUIG_DB_PROCESS_DEFINITION_LIMIT" value="50000"/>   

- [Imagem](#)

![](/download/attachments/856923748/image-2024-7-15_10-29-26.png?version=1&modificationDate=1721050212740&api=v2)

**       **8**.**Inicie o serviço do Fluig;

        9. Acompanhe no log a execução do update.


<!-- anchors: id-107ComocriareconfigurarolimitederegistrosdeupdatenobancodedadosutilizadopeloFluig-Índice, id-107ComocriareconfigurarolimitederegistrosdeupdatenobancodedadosutilizadopeloFluig-Plataforma, id-107ComocriareconfigurarolimitederegistrosdeupdatenobancodedadosutilizadopeloFluig-Ocorrência, id-107ComocriareconfigurarolimitederegistrosdeupdatenobancodedadosutilizadopeloFluig-Solução, 1, 1 -->
