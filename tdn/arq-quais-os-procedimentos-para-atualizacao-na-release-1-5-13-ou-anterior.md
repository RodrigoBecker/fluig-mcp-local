---
title: "ARQ - Quais os procedimentos para atualização na release 1.5.13 ou anterior?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=155583041"
scraped_at: "2026-03-09T03:29:48.857Z"
depth: 2
anchors: 13
child_links: 47
---

# ARQ - Quais os procedimentos para atualização na release 1.5.13 ou anterior?

Atenção

Página destinada a atualizações 1.5.13 ou anterior.

Acesse a página original para atualizações a partir da release 1.6: [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186).

# Índice

# Objetivo

O objetivo desta página é apresentar os procedimentos necessários para efetuar a atualização do TOTVS Fluig Plataforma. 

Nota

Para acompanhar informações sobre Atualização Programada e sobre o Ciclo de Atualização Obrigatório acesse [Atualização da plataforma](/pages/viewpage.action?pageId=73078235).

Fluig no Cloud

Caso tenha contratado o serviço de Cloud, a instalação, atualização ou configuração da plataforma é realizada por uma equipe de atendimento específica. Para solicitar o atendimento, acha um chamado para a equipe de Cloud pela página de [suporte](https://suporte.totvs.com/).

# Procedimentos para efetuar a atualização da plataforma

Para efetuar a atualização, é necessário seguir os passos descritos a seguir:

Atenção!

- É imprescindível parar todos os serviços antes de atualizar: FLUIG, fluig_Memcached, fluig_Realtime, Prizm (esse serviço só existe se você utiliza o Fluig Viewer *on premises*).

- Para realizar o backup recomendamos acompanhar o guia: [Backup da aplicação](/pages/viewpage.action?pageId=155583247).

- Se houver a necessidade de *downgrade*, a base deverá ser restaurada para o *backup* da versão. Sobre o *downgrade*: Caso a plataforma for atualizada para a versão 1.3.6 e deseja-se retornar para a versão 1.3.5, será necessário restaurar o backup da versão 1.3.5, não contendo os dados adicionados na versão mais atual.

-  Para atualização para a 1.5 atente-se guia [Atualização 1.5 - Inicialização com LMS](/pages/viewpage.action?pageId=189305418).

- Clientes que estiverem utilizando a plataforma abaixo da atualização 1.2.8 devem entrar em contato cm o [Suporte TOTVS Fluig](https://suporte.totvs.com) **antes**de executar a atualização.

- Para atualizar a plataforma instalada em *Load Balance* é necessário que o pacote de atualização seja executado em cada nó e, como mencionado acima, os serviços  FLUIG, fluig_Memcached, fluig_Realtime e Prizm devem estar parados antes que o processo de atualização seja iniciado.

- Caso o Indexer estiver instalado em servidor separado é necessário, logo após a atualização ser executada em cada nó, que o arquivo foundation-addon-indexer-web.war, que foi gerado no diretório [Instalação fluig]/jboss/apps, seja movido para o diretório [fluig_Indexer]/webapps, substituindo o arquivo foundation-addon-indexer-web.war que se encontra neste diretório, que é de uma versão anterior.

- [Passo1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Efetue o *download* do instalador no [Portal de Clientes](https://suporte.totvs.com/portal/p/10098/download#000035/FLUIG%201.5/FLUIG/) e descompacte-o.

![](/download/attachments/155583041/download.png?version=3&modificationDate=1731413139380&api=v2)

  - Pare os serviços *fluig*, *fluig_MemCached* e *fluig_RealTime*.

![](/download/attachments/155583041/a2.png?version=1&modificationDate=1409087422000&api=v2)

 - Execute o instalador e escolha a opção "Atualizar minha instalação".

![](/download/attachments/155583041/a3.PNG?version=2&modificationDate=1416937373000&api=v2)

 - Clique em "**Próximo**" até o sistema apresentar a mensagem de que a atualização foi concluída com sucesso.

 - Inicie os serviços respeitando a seguinte ordem:**1.** fluig_MemCached;**2.** fluig_RealTime;**3.** fluig.

Importante

Habilite o acesso ao serviço de versionamento da plataforma, liberando acesso ao endereço [https://version.fluig.com](https://version.fluig.com) (porta 443), na rede local onde a plataforma está instalada.

# Atualização em ambiente Linux - Modo Caractere

Movimente-se nas abas abaixo e acompanhe o passo a passo de atualização.

- [Passo 1](#)
- [Passo 2](#)

 - Descompacte o instalador da plataforma.

  - Abra o console no diretório onde o instalador foi descompactado e execute o comando:

     [?](#)
| `./jdk-64/bin/java -cp fluig-installer.jar com.fluig.wcm.update.FluigUpdate [Diretório fluig]` |
| --- |

   Substitua o [Diretório fluig] pelo diretório onde se localiza a instalação da plataforma a ser atualizada.


<!-- anchors: ARQQuaisosprocedimentosparaatualizaçãonarelease1.5.13ouanterior?-Índice, ARQQuaisosprocedimentosparaatualizaçãonarelease1.5.13ouanterior?-Objetivo, ARQQuaisosprocedimentosparaatualizaçãonarelease1.5.13ouanterior?-Procedimentosparaefetuaraatualizaçãodaplataforma, samples, samples-1, samples-2, samples-3, samples-4, ARQQuaisosprocedimentosparaatualizaçãonarelease1.5.13ouanterior?-AtualizaçãoemambienteLinux-ModoCaractere, samples, samples-1, samples-2, highlighter_902655 -->
