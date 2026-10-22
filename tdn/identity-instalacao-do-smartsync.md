---
title: "Identity | Instalação do SmartSync"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286720040"
scraped_at: "2026-03-09T05:11:39.061Z"
depth: 3
anchors: 5
child_links: 32
---

# Identity | Instalação do SmartSync

---

Para realizar a instalação do SmartSync, siga os passos abaixo:

**oculto**

Esse procedimento foi duplicado no artigo: [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360025122813](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360025122813) (Como instalar o SmartSync)

Caso tenha alguma alteração, lembrar de repassar para esse artigo!

- [1- Pré-requisitos](#)
- [2- Obter o instalador](#)
- [3- Instalar o SmartSync](#)
- [4- Executar o SmartSync](#)

 - Todos os requisitos informados na [Matriz de Portabilidade - Identity](https://tdn.totvs.com/x/eDAxE).

 - O servidor em que o SmartSync está instalado deve, obrigatoriamente, ser capaz de acessar os domínios do Identity (*.fluigidentity.com e *.customerfi.com) para que a sincronização e a autenticação dos usuários do Active Directory sejam efetuadas. O cliente deve providenciar para que as devidas exceções sejam adicionadas ao *proxy* e *firewall* de sua rede.

 - Não é obrigatório instalar o SmartSync no mesmo servidor do diretório Active Directory, desde que a comunicação entre ambos (*ping*) esteja totalmente liberada.

 - Acessar o Identity, acionar ![](/download/attachments/286720040/flaticon-settings%20%281%29.png?version=2&modificationDate=1645443721027&api=v2)**Configurações** e selecionar a opção **Active Directory**.

 - Na seção **Gerenciar Active Directories**, acionar o link **Gerenciar Active Directories**.

 - Acionar a opção **Baixar SmartSync **e salvar no diretório desejado.

 - Clicar com o botão direito do *mouse* sobre o instalador do SmartSync e selecionar a opção **Executar como administrador**ou **Instalar** (dependendo da versão do sistema operacional).

 - Na janela do instalador, acionar **Avançar** até concluir a instalação.

![](/download/attachments/286720040/SmartSync.gif?version=1&modificationDate=1586798665077&api=v2)

Para executar o SmartSync no Windows, clicar duas vezes sobre o atalho criado na Área de Trabalho ou buscar por "SmartSync" no campo de pesquisa do menu Iniciar.


<!-- anchors: Instalação, Instalação-1, Instalação-2, Instalação-3, Instalação-4 -->
