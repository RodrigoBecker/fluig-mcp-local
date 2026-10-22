---
title: "Guia de instalação Fluig Studio"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73078179"
scraped_at: "2026-03-09T03:45:00.344Z"
depth: 2
anchors: 10
child_links: 47
---

# Guia de instalação Fluig Studio

# Índice

# Instalação da IDE

---

Para utilização do plugin de desenvolvimento do Fluig é necessário possuir uma IDE baseada em Eclipse. As IDEs homologadas para trabalhar com o Fluig Studio estão listadas abaixo:

| IDEs Homologadas | Página de download | Requisitos |
| --- | --- | --- |
| IDEs Homologadas | Página de download | Requisitos |
| Eclipse Luna   | https://www.eclipse.org/downloads/packages/release/luna/sr2/eclipse-ide-java-developers | Ter instalado o JDK 8 da Oracle: https://www.oracle.com/br/java/technologies/javase/javase8-archive-downloads.html |
| Eclipse 2019-R9 | https://www.eclipse.org/downloads/packages/release/2019-09/r/eclipse-ide-enterprise-java-developers | Ter instalado o JDK 8 da Oracle: https://www.oracle.com/br/java/technologies/javase/javase8-archive-downloads.html O recurso de Autocompletar, na edição de eventos não funcionará por um problema no JSDT (JavaScript Development Tools) da IDE. |

O plugin de desenvolvimento do Fluig não é compatível com o sistema operacional macOS.

# Instalação do Fluig Studio

---

## Pré requisitos

- Para a instalar e atualizar o Fluig Studio será necessário acesso à internet na estação em que a IDE está instalada.

Com sua IDE instalada e devidamente configurada restam apenas quatro passos simples que são os mesmos em ambas as IDEs.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Selecione no menu “Help” a opção “Install New Software”  ou “Ajuda” e a opção “Instalar novo Software” se sua IDE estiver traduzida.

![](/download/attachments/73078179/1.PNG?version=1&modificationDate=1377778734000&api=v2)

 - Adicione um novo “update site” selecionando o botão "Add":

![](/download/attachments/73078179/2.PNG?version=1&modificationDate=1377778793000&api=v2)

 - Cadastre o endereço **http://update.fluig.com**, referente a última versão do plugin do Fluig disponível, confirmando os dados conforme figura abaixo:

![](/download/attachments/73078179/image2014-1-10%2011%3A52%3A12.png?version=1&modificationDate=1389365492000&api=v2)

Atenção

Para o TDS 11.2 e o Eclipse em versões anteriores à Mars, é recomendável adicionar também o repositório  [**https://archive.eclipse.org/graphiti/updates/0.11.2/**](https://archive.eclipse.org/graphiti/updates/0.11.2/), referente a versão compatível do Graphiti© com o Fluig Studio.

Nota

Se deseja informar a atualização do plugin de uma versão específica, basta informar "*/<versãoFluig>*" após a URL padrão, onde <versãoFluig> corresponde ao número da versão desejada.

**Exemplo:** Possuo o Fluig 1.2.8 e desejo atualizar o plugin Fluig para a mesma versão do servidor, como já existe uma versão mais atual disponível na URL padrão, basta informar: **http://update.fluig.com/128** .

 - Selecione a opção que você acabou de cadastrar no **Passo 3** e confirme a operação.

![](/download/attachments/73078179/image2014-1-10%2011%3A53%3A33.png?version=1&modificationDate=1389365573000&api=v2)

Atenção

Para o correto funcionamento da instalação do Fluig Studio é necessário selecionar o *checkbox* “Contact all update sites during install to find required software”.

Na ocorrência de erros referentes à autenticação no proxy, durante essa etapa, você pode tentar desabilitar o proxy, o firewall e até mesmo o antivírus na máquina onde estiver instalando o plugin, e em seguida prosseguir com a instalação. Sugere-se também fazer um teste de instalação em uma máquina fora da rede para comparar.

 - Após o download e reinício da IDE a mesma estará pronta para trabalhar com o Fluig Studio.

**Dica:** Para atualização basta selecionar o update cadastrado com o Fluig Studio conforme ilustrado no passo número 4.

Atenção

Não é recomendado o uso do plugin "Team Foundation Server plug-in for Eclipse" (TFS) no mesmo TDS do plugin Fluig.

O plugin Fluig utiliza algumas bibliotecas de terceiros para comunicação com os *webservices* do servidor Fluig. Entre elas, o plugin Apache Xerces ([http://xerces.apache.org/](http://xerces.apache.org/)), que é instalado automaticamente e pode ser visualizado em *Sobre > Detalhes da Instalação > Plugins*. A versão atual disponível nos repositórios do Eclipse Luna é a versão 2.9.0.

Identificamos que o TFS também faz uso do Xerces, porém, na versão 2.8.0. Normalmente isso geraria um erro ou um alerta, na hora da instalação, mas o TFS não o instala diretamente, apenas carrega-o internamente a partir da pasta *plugins/com.microsoft.tfs.core_14.0.2.201512281637/libs/xerces-2.8.0*.

Por se tratarem de duas versões diferentes, quando carregado primeiramente o Xerces do TFS, ao tentar utilizar algumas funções do plugin Fluig, o TDS identifica versões diferentes do mesmo arquivo e dispara um erro.

A pasta pode ser removida manualmente para que os dois possam trabalhar juntos, mas o TFS pode não funcionar corretamente.

**Vídeo How to**

Se preferir veja a seguir o vídeo a seguir que ilustra o processo de instalação do Fluig Studio


<!-- anchors: GuiadeinstalaçãoFluigStudio-Índice, GuiadeinstalaçãoFluigStudio-InstalaçãodaIDE, GuiadeinstalaçãoFluigStudio-InstalaçãodoFluigStudio, GuiadeinstalaçãoFluigStudio-Prérequisitos, Instalação, Instalação-872616687, Instalação-872616688, Instalação-872616689, Instalação-872616690, Instalação-872616691 -->
