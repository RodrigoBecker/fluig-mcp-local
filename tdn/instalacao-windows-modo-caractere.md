---
title: "Instalação Windows - Modo Caractere"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=274325941"
scraped_at: "2026-03-09T04:54:16.472Z"
depth: 3
anchors: 31
child_links: 65
---

# Instalação Windows - Modo Caractere

# Objetivo

---

Informar como é realizada a instalação de módulos específicos da plataforma no Windows como o do Fluig, Servidor de indexação (Solr) e RealTime (nodejs), em modo caractere.

# Pré-requisitos

---

Antes de iniciar uma instalação, certifique-se de que os procedimentos e requisitos abaixo foram preenchidos:

- Leia atentamente o [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732).

- Verifique se as configurações e especificações do servidor estão de acordo com os requisitos estipulados no [Dimensionamento](https://tdn.totvs.com/display/fluig/Dimensionamento) e na [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

- Confirme se a base de dados foi criada em um banco de dados homologado, conforme as orientações descritas em [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464), [SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499) ou [Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

- É obrigatório que a instalação do(s) módulo(s) seja realizada utilizando o usuário **administrador** ou um usuário que tenha permissões de instalação e alteração de serviços.

# Pacote de instalação

---

**01.** Para fazer *download* do pacote de instalação, acesse a [Central do cliente](https://suporte.totvs.com), conforme descrito na documentação [Como fazer para obter a plataforma](/display/fluig/Como+fazer+para+obter+a+plataforma).

**02.** Descompacte o instalador da plataforma no diretório desejado.

**03. Pronto!** Agora você já pode executar os comandos para instalação da plataforma.

# Passo a passo para a instalação da plataforma

---

Movimente-se nas abas abaixo e acompanhe o passo a passo de instalação:

Atenção!

Por questões de segurança, orientamos não expor sua plataforma diretamente à internet. Para isso, será necessário [criar uma rede DMZ](https://tdn.totvs.com/x/MZIbCQ) juntamente com o [protocolo HTTPS](https://tdn.totvs.com/x/vdMgFQ).

- [Passo 1](#)
- [Passo 2](#)

Nota:

Se você já possui um arquivo de configuração (install.conf) previamente configurado, pode seguir diretamente para o passo 2.

Se a instalação for realizada de forma completa, ou seja, com todos os módulos no mesmo servidor de aplicação, não será necessário executar os procedimentos [Passo a passo para instalar somente o Servidor de indexação](#InstalaçãoWindowsModoCaractere-solr) e [Passo a passo para instalar somente o RealTime](#InstalaçãoWindowsModoCaractere-node).

  - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall` |
| --- |

  - A execução do comando irá gerar o arquivo de configurações**install.conf**conforme imagem abaixo:

![](/download/attachments/274325941/Image%2024.jpg?version=1&modificationDate=1495039685000&api=v2)

**Figura 1 - Arquivo install.conf gerado**

  - Edite o arquivo**install.conf**alterando as variáveis para atender as configurações desejadas para a instalação do produto.

Importante!

Quando informar o diretório onde a plataforma será instalada, no parâmetro INSTALL_PATH, deve-se usar duas contrabarras (\\) como separador de pastas.

Se o **Servidor de indexação** não for instalado neste momento juntamente com o Fluig, o parâmetro **install.solr** deve ser igual a **false**. Ao optar por instalar, além de alterar o valor do parâmetro **install.solr** para**true,** deve-se informar também o **diretório** de instalação do **JDK** como valor no parâmetro **solr.jdk**, na condição de estar instalado. Caso o valor do parâmetro permanecer em branco, o **JDK** será instalado automaticamente.

Se o **nodejs** não for instalado neste momento juntamente com o Fuig, o parâmetro **install.node** deve ser igual **false**.

 - Se o arquivo de configuração (install.conf) já existe e está em um diretório diferente, passe como parâmetro o caminho absoluto do arquivo de configuração:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall \``install``.conf` |
| --- |

 - **Pronto!**Ao finalizar a instalação no Console, os **serviços do Fluig** estarão pronto para serem iniciados.

# Passo a passo para instalar somente o Servidor de indexação

---

Siga os passos abaixo para a instalação:

- [Passo 1](#)
- [Passo 2](#)

Nota:

Se você já possui um arquivo de configuração (install.conf) previamente configurado, pode seguir diretamente para o passo 2.

  - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall solr` |
| --- |

  - A execução do comando irá gerar o arquivo de configurações**install.conf**.

  - Edite o arquivo**install.conf**alterando as variáveis para atender as configurações desejadas para a instalação do produto.

Importante!

Quando informar o diretório onde o **Solr** será instalado, no parâmetro INSTALL_PATH, deve-se usar duas contrabarras (\\) como separador de pastas.

Para que o **Servidor de indexação** seja instalado neste momento, o parâmetro **install.solr** deve ter o valor **true**. Também é necessário alterar o valor do parâmetro **solr.remote** se a instalação será feita para/em ambiente remoto e **solr.cloud** se a instalação será feita para/em ambiente *cloud*. 

Se já houver uma instalação do **JDK**, o seu caminho/diretório deve ser informado como valor no parâmetro **solr.jdk**. Se o valor do parâmetro permanecer em branco o JDK será instalado automaticamente.

 - Se o arquivo de configuração (install.conf) já existe e está em um diretório diferente, passe como parâmetro o**caminho absoluto** do arquivo de configuração executando o comando abaixo:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall solr \``install``.conf` |
| --- |

 - **Pronto!** Ao finalizar a instalação no Prompt de Comandos, o serviço do **Servidor de indexação** estará pronto para ser iniciado.

Dica!

Se desejar configurar **alta disponibilidade (Cluster)**, continue a instalação conforme os procedimentos descritos na documentação [Servidor de indexação em alta disponibilidade](/pages/viewpage.action?pageId=257623206).

# Passo a passo para instalar somente o RealTime

---

Para realizar a instalação, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)

Nota:

Se você já possui um arquivo de configuração (install.conf) previamente configurado, pode seguir diretamente para o passo 2.

  - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall nodejs` |
| --- |

  - A execução do comando irá gerar o arquivo de configurações**install.conf**.

  - Edite o arquivo**install.conf**alterando as variáveis para atender as configurações desejadas para a instalação do produto.

Importante!

Quando informar o diretório onde o **nodejs** será instalado, no parâmetro INSTALL_PATH, deve-se usar duas contrabarras (\\) como separador de pastas.

Para o **nodejs** ser instalado neste momento, o parâmetro**install.node** deve ter o valor **true**.

 - Se o arquivo de configuração (install.conf) já existe e está em um diretório diferente, passe como parâmetro o caminho absoluto do arquivo de configuração executando o comando abaixo:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.``install``.ExecuteInstall nodejs \``install``.conf` |
| --- |

 - **Pronto!** Ao finalizar a instalação no Prompt de Comandos, o serviço do **RealTime** estará pronto para ser iniciado.

# Atualização dos módulos

---

As instruções para realizar o atualização dos serviços do Fluig estão informados abaixo:

- [Fluig](#)
- [Servidor de Indexação](#)
- [RealTime](#)

 - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando abaixo. Se o Fluig foi instalado de forma completa ou seja, com todos os módulos, não será necessário atualizar os módulos Servidor de indexação e RealTime separadamente, sendo preciso apenas executar este comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.wcm.update.FluigUpdate ` |
| --- |

  - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.wcm.update.FluigUpdate solr ` |
| --- |

 - Abra o **Prompt de comandos** no diretório onde o pacote de instalação foi descompactado e execute o comando:

[?](#)

| `java -``cp` `fluig-installer.jar com.fluig.wcm.update.FluigUpdate nodejs ` |
| --- |

# Exceção Firewall

---

Caso o servidor onde a plataforma foi instalada possua *firewall* ativo é necessário adicionar exceções para as seguintes portas utilizadas pela plataforma:

- Porta do Servidor de Aplicação;
- Porta do Servidor para RealTime;
- Porta do Servidor de Chat.

# Primeiro acesso

---

Para informações sobre os próximos passos, que envolvem o primeiro acesso à plataforma, acesse a documentação [Primeiro acesso após a instalação da plataforma](/pages/viewpage.action?pageId=431678598).


<!-- anchors: InstalaçãoWindowsModoCaractere-Objetivo, InstalaçãoWindowsModoCaractere-Pré-requisitos, InstalaçãoWindowsModoCaractere-Pacotedeinstalação, InstalaçãoWindowsModoCaractere-Passoapassoparaainstalaçãodaplataforma, samples1, samples1-1, highlighter_697134, samples1-2, highlighter_299983, InstalaçãoWindowsModoCaractere-PassoapassoparainstalarsomenteoServidordeindexação, samples2, samples2-1, highlighter_537304, samples2-2, highlighter_893876, InstalaçãoWindowsModoCaractere-PassoapassoparainstalarsomenteoRealTime, samples3, samples3-1, highlighter_225571, samples3-2, highlighter_138443, InstalaçãoWindowsModoCaractere-Atualizaçãodosmódulos, samples4, samples4-1, highlighter_964152, samples4-2, highlighter_917660, samples4-3, highlighter_749147, InstalaçãoWindowsModoCaractere-ExceçãoFirewall, InstalaçãoWindowsModoCaractere-Primeiroacesso -->
