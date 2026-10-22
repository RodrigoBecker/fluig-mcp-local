---
title: "Instalação e configuração de duas instâncias do Fluig ESB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=6066588"
scraped_at: "2026-03-09T03:25:13.139Z"
depth: 2
anchors: 6
child_links: 27
---

# Instalação e configuração de duas instâncias do Fluig ESB

# Índice

# Objetivo

---

Existem algumas situações que exigem a instalação de dois ou mais serviços Fluig ESB em um mesmo servidor. Nestes casos, é necessário configurar alguns itens como o serviço do Windows e de servidor do próprio Fluig ESB.

As instruções a seguir referem-se à instalação de dois Fluig ESB em um mesmo computador.

# Instalação

---

Ao instalar uma nova cópia do Fluig ESB deve-se escolher o nome para o serviço no Windows. Este serviço deve ter o nome diferente dos instalados no computador.

A configuração de nomes diferenciados ocorre no momento da instalação na tela denominada Configurar serviços.

Deve-se marcar a opção de serviço do Fluig ESB e, em seguida, descrever um nome diferenciado da instalação existente.

Se nesta etapa os serviços não foram instalados, pode instalá-los manualmente após o Fluig ESB ter sido instalado em seu computador. Você pode visualizar esta etapa no item [Execução](https://tdn.totvs.com/display/fluig/Principal).

# Configurar Fluig ESB Server

---

Para ter dois Fluig ESB é interessante ter um Fluig ESB Server criado com as configurações padrões:

- **Server Name:** Default
- **Host Name:** localhost
- **Port:** 8085

Após configurar o *Server* é necessário iniciar o motor do Fluig ESB. Para isso deve-se executar o **Database Startup** e **ESB Startup** através dos atalhos na área de trabalho ou no menu Iniciar do Windows.

O processo de criação de um ESB Server está disponível no item [Visão ESB Servers](/pages/viewpage.action?pageId=6066531).

# Conectar Fluig ESB Server

---

Para conectar o *Server* é preciso dar duplo clique no Fluig ESB Server criado. As configurações do servidor serão abertas e nesta etapa estão configuradas seguindo o padrão do Fluig ESB.

As configurações que deverão ser alteradas estão descritas a seguir.

1. Alteração dos campos **ESB Port** e **JMX Port** na aba *System Properties*.
2. Alteração do campo **Port** na aba *Internal HTTP Server*.
3. Alteração das **configurações de banco de dados** na aba *Database Configuration*.

Outras informações podem ser alteradas conforme desejado, porém é importante que as alterações mencionadas sejam configuradas de maneira diferente do outro [Server](https://tdn.totvs.com/display/fluig/Perspectiva+TOTVS+Servers) que será utilizado.

Após salvar as alterações (no menu *File* > *Save*) é necessário finalizar a atividade do **ESB Startup** e, em seguida, iniciá-lo novamente, para que as alterações sejam efetivadas e seja possível realizar uma nova conexão com as novas informações.

# Configurar novo Fluig ESB Server

---

Neste momento é necessário criar um novo servidor utilizando o *host* e *port* informados na configuração do Fluig ESB Server gerado.

- **Server Name:** NomeServidor
- **Host Name:** [localhost - host a ser informado]
- **Port:** [8015 - porta configurada anteriormente]

Desta maneira haverá o server *Default* ainda configurado caso a etapa de criação de servidor seja repetida novamente. E haverá este novo Fluig ESB Server configurado.

Após configurar o novo **Fluig ESB server** é preciso somente conectá-lo. Será possível conectar dois Fluig ESB Server ao mesmo tempo, em um mesmo servidor.

Com as configurações realizadas, os serviços ESB Server das duas instalações poderão ser inicializados mantendo a individualidade de informações e mensagens processadas.


<!-- anchors: InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-Índice, InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-Objetivo, InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-Instalação, InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-ConfigurarFluigESBServer, InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-ConectarFluigESBServer, InstalaçãoeconfiguraçãodeduasinstânciasdoFluigESB-ConfigurarnovoFluigESBServer -->
