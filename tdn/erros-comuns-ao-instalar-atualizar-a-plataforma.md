---
title: "Erros comuns ao instalar/atualizar a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=819058035"
scraped_at: "2026-03-09T03:44:51.627Z"
depth: 2
anchors: 53
child_links: 59
---

# Erros comuns ao instalar/atualizar a plataforma

# Índice

# Objetivo

---

O objetivo deste guia é apresentar quais os problemas mais comuns ao efetuar a atualização do TOTVS Fluig Plataforma e como resolvê-los.

# Pré-requisitos

---

- Interesse em instalar/atualizar o ambiente de acordo com o [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732) ou o [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186), respectivamente.
- Servidores respeitando o [Modelo de dimensionamento](https://tdn.totvs.com/display/fluig/Modelo+de+dimensionamento).
- Plataforma de acordo com os padrões da [Matriz de portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+portabilidade).
- Conferir outras [Especificações Técnicas](https://tdn.totvs.com/pages/viewpage.action?pageId=144409649) necessárias.

# Sistema Operacional Windows

---

Descrevemos abaixo algumas situações que podem impactar diretamente na instalação/atualização das mídias do TOTVS Fluig Plataforma no Sistema Operacional Windows.

## Alterar o tipo de inicialização dos serviços para manual

---

**01.** Alterar o tipo de inicialização dos serviços do Fluig para**"manual"**é importante para evitar que o serviço inicialize e impeça a atualização da plataforma.

Importante

Essa configuração será utilizada apenas para reiniciar o servidor e fazer a atualização. Depois o serviço poderá ser configurado novamente para **inicialização automática**.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acessar a tela de**Serviços**do**Windows** e procure pelos serviços: (1) fluig, (2) fluig_Indexer e (3) fluig_RealTime.

![](https://lh4.googleusercontent.com/YrTzhKtrImgyBecmxYeWnep2owGaJu4ZHc1haIqbMFrOeuuaOs0mhbLL25ZkasY09lA3oFRMKUSjVjP5N6cajR4RFz6_Rx1VyFed-l-tc54UXmYDOzhu2uLct7dWIAAE2j41EdQM)

 - Acessar as **propriedades** dos serviços.

![](https://lh5.googleusercontent.com/zt6a1P3LDWDYD_6K_7zH5LwOcdYFzLxBzLjqD0lNkixUgidHLswo2k2reXDiM_b4Sih7h3MIV74s1M0yKNGXf8_IRf9-kcrASxEjL1z4ojkF2Dy_PM6y_ctl3HUOTy867-Z9u_LT)

 - Alterar o **Tipo de Inicialização** de Automático para **Manual**. 

 - Fazer isso para (1) fluig, (2) fluig_Indexer e (3) fluig_RealTime.

![](https://lh3.googleusercontent.com/tUWdw3SJzEriQbmfsJcBZRW1-TtIvPmr_n4oK86ttjc4QATn0ecGJWdX5E1WiKu1Y5Ywdi7YtJvy6QQgpyxSobNw2-RMsQ42ijNj53eZkaI7-wS9-zdK5Elabx3M3niankO7Fjo1)

## Serviço "fluig" permanece com o status "stopping" (ou "parando")

---

Não é incomum que, ao encerrar o **serviço "fluig"**, o status permaneça em **"stopping"** e não finalize a ação. Esse comportamento não é específico da plataforma e, geralmente, está associado a interferências externas, seja de outra aplicação, servidor, etc. A maior parte dos relatos estão relacionados ao **serviço "fluig"**, os demais serviços **(fluig_Indexer e fluig_RealTime)** nunca apresentaram tal eventualidade.

Os motivos mais comuns para a situação ocorrer são:

- Aplicação de **backup** sendo executada nas pastas e no mesmo servidor da plataforma, de forma que, o serviço não consiga fazer os procedimentos necessários para parar.
- **Antivírus** ativado, ou funcionando no mesmo servidor, sem ter o Fluig configurado como exceção. Isso pode impedir a plataforma de apagar pastas temporárias, que é um procedimento padrão no desligamento.

Recomendação

O ideal é que o servidor seja **dedicado** à plataforma, sem que haja outros sistemas operando em conjunto.

Preparamos alguns procedimentos a serem feitos para que a instalação/atualização possa prosseguir:

**01.**Desativar outras aplicações **Java** e avaliar se ainda ocorre interferências ao finalizar o **serviço "fluig"**.

**02.** Conferir a documentação de [Portas e endereços](/pages/viewpage.action?pageId=275591571) utilizados pelo Fluig e descartar a possibilidade de conflitos nas portas pela utilização de outras aplicações.

**03.** Recortar os arquivos da **pasta apps** para outro local, fora do diretório de instalação do Fluig: **<diretório de instalação do Fluig>\appserver\apps**

**04.** Limpar os **arquivos temporários** do **Windows**, seguindo os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Fechar **todas** as aplicações abertas.

 - Acionar **Executar**.

![](/download/attachments/819058035/image-2024-1-10_15-59-36.png?version=1&modificationDate=1704913177573&api=v2)

 - Digitar o termo **%tmp%** ou **%temp%** (ambos são válidos).

 - Clicar em **Ok**.

![](/download/attachments/819058035/image-2024-1-10_16-1-1.png?version=1&modificationDate=1704913262640&api=v2)

 - Abrirá a pasta de **arquivos temporários** do**Windows**.

 - Selecionar todos os arquivos **(Ctrl + A)**.

![](/download/attachments/819058035/image-2024-1-18_17-3-15.png?version=1&modificationDate=1705608195700&api=v2)

 - Clicar com o botão direito do mouse em cima dos arquivos selecionados e acionar **Excluir**.

 - Confirme a exclusão dos arquivos.

 - Também é possível realizar a exclusão com o botão**Delete**, no teclado.

![](/download/attachments/819058035/image-2024-1-18_17-5-1.png?version=1&modificationDate=1705608301823&api=v2)

**05.** Encerrar todas as tarefas do **OpenJDK Platform binary**e do **Node.js JavaScript Runtime**no **Gerenciador de Tarefas** do **Windows**:

Informação

O **Node.js JavaScript Runtime**é um ambiente de execução do código JavaScript do lado servidor (*server-side*). Na prática, o **Node.js**gera a possibilidade de criar aplicações autossuficientes (*standalone*) em uma máquina servidora, sem a necessidade do navegador.

Já o** OpenJDK Platform binary**é um serviço que executa o Servidor de Aplicação Java, que serve como base para a aplicação Fluig.

A plataforma funciona tanto de forma **reativa**, quando os usuários a acessam; quanto **proativa**, quando se tratam de fluxos automáticos, agendamentos de processamentos e demais tarefas automatizadas que possam estar configuradas.

Assim, mesmo sem usuários utilizando o ambiente, existem integrações ou agendamentos de tarefas que são executados em**segundo plano** pelo Fluig.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acionar o atalho **Ctrl + Alt + Del** no teclado e clicar em **Gerenciador de Tarefas**.

 - Também é possível pesquisar por **Gerenciador de Tarefas** no campo de busca do**Windows**.

![](/download/attachments/819058035/image-2024-1-10_17-42-40.png?version=1&modificationDate=1704919361033&api=v2)

 - Se certifique que está na aba **Processos**.

 - Buscar em**Processos em segundo plano**pelos termos **"OpenJDK Platform binary"**e **"Node.js JavaScript Runtime"**.

![](/download/attachments/819058035/image-2024-1-10_17-54-21.png?version=1&modificationDate=1704920061327&api=v2)

 - Acionar o recurso **Finalizar tarefa**para cada processo em segundo plano relacionado ao **"OpenJDK Platform binary"**e ao **"Node.js JavaScript Runtime"**.

![](/download/attachments/819058035/image-2024-1-10_17-57-7.png?version=1&modificationDate=1704920227483&api=v2)

 - Após finalizar as tarefas, abra novamente a tela de **Serviços** do **Windows**. Todos os serviços deverão aparecer sem nenhuma informação na coluna **Status**. 

![](/download/attachments/819058035/image-2024-1-10_18-2-2.png?version=1&modificationDate=1704920523307&api=v2)

## Mensagens durante a instalação/atualização

---

**01.** Durante a instalação ou atualização da plataforma, podem surgir as seguintes mensagens de erro:

- *O serviço Fluig está em execução. Finalize o serviço para continuar a atualização.*
- *Existe algum arquivo aberto ou em uso. Feche todas as aplicações que possam estar usando arquivos.*
- *O serviço do Solr está em execução. Finalize o serviço para continuar a atualização.*
- *The system cannot find the path specified.*
- *Mensagens em branco.*
- *Unable to evaluate expression using this context.*
- *[...]\dataset.author.csv (O dispositivo não está pronto).*

Informação

O instalador da plataforma verifica se todos os serviços e arquivos da plataforma estão abertos ou em uso durante a instalação/atualização. Isso garante que o procedimento seja realizado com segurança.

Aviso

Ao ignorar os erros e prosseguir com a instalação, é possível finalizá-la. No entanto, ao tentar inicializar a plataforma, os serviços são encerrados logo em seguida.

**02.** Abaixo seguem alguns exemplos das mensagens que podem aparecer em tela:

- [Exemplo 1](#)
- [Exemplo 2](#)
- [Exemplo 3](#)
- [Exemplo 4](#)
- [Exemplo 5](#)
- [Exemplo 6](#)
- [Exemplo 7](#)

![](https://lh3.googleusercontent.com/FoV7B6XDaReUoIxKfBaNI7LdQg2Qrvby-HhOBuwQmDNXWL947618KGFn4kbZYTuNzLIZc71xzGcdcRBPLeBxd3z9dEUj4rcfOoG0rhc5cX1571TBaWNy4n6tACw8EHZ77GxyoIIm)

![](https://lh4.googleusercontent.com/zb3_DT80ETi6DrV1lgmeYobxER-DoWCOvH-c_K4pcctQId7jJdJBQRLKGVE52cP2EL0oQ0CBtNpdzT_DkjfQvTiFanB_2KB0pqtcELnKurOqbC9-4PKYr438xNVtFzn_GumFYVR7)

![](https://lh6.googleusercontent.com/tBAnHHPDhU-UDBe8iwrx4R4eTDN6M4TDFbWFId9R3TtEVPmjLSO8eruMHVXJmxGqgqFZauW_M4WI1dSb4M-4VnlMr2Yu_J96qoTRk8CKwSJrCe4vH1ZjgtLFWMkCgtFy6aEwIJLM)

![](https://lh6.googleusercontent.com/trLExRqfOgRKY6cZ8IF0IPgfnpfeTfNOyCVmWXJE1NovsvAsrrAUhwckbDQw_tY5KLy6Pf2DpO8PDllkjUQlMHVzWeL7-iEFvzWO430FglkKZMesiNMo7pBtzUs_vfmQZv8IWr3a)

![](https://lh6.googleusercontent.com/Rg82H8ODqW6FUKANSYlzOVsPAuidgj4NKP8TUM1HPSoXSwi7PxLtZd__sfZ9jNUlvOiDyfxo8zE91QraXHPdBBKCar08ZnsjtOYcfnaPD3aH-90D4yiRy920J4_lzWwJBzg7vwGi)

![](https://lh6.googleusercontent.com/3LtMt7cTkEUXnwdNXdLVWtV9tjY0Q-kEbs-vXPqgJ3MC44ufWkakwf_txv6tWa18qckN-XdUSZy0PGALXahFCW4UJKLVME31mtPvYgkNLEkiOOAbRSOuA-djubeEJ-o4i_nbGy5q)

![](https://lh5.googleusercontent.com/tbWA_fvLx3uTRtHnLU8FgTas6lZuOaNeTJ33-lrhONjC5IigkN_E0-RXFyIYatJsOFVakmCpXcbZt74kUCMDpq7lzZpJ-HLHCd9lIP-fOZHAG7372sBBAxuVHHV6y2wVbl3Raswb)

## Renomear o diretório de instalação (teste)

---

**01.**Certifique-se de ter fechado todos os arquivos e finalizado os serviços do Fluig: (1) fluig, (2) fluig_Indexer e (3) fluig_RealTime.

**02.** Tente renomear a pasta de instalação da plataforma. 

**03.** Se o Sistema Operacional não permitir que a pasta seja renomeada, significa que algum arquivo está aberto ou em execução.

## Verificar as permissões do usuário executor da mídia

---

**01.** O usuário que está executando o instalador deve possuir permissão de **administrador**.

**02.**Iniciar a sessão no Sistema Operacional com um usuário que possua propriedades administrativas no servidor.

**03.**Verificar se o usuário autenticado é realmente um usuário administrador:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Buscar pelo o**Painel de Controle** do **Windows**.

![](/download/attachments/819058035/image-2024-1-10_15-12-27.png?version=1&modificationDate=1704910349050&api=v2)

 - Acionar **Contas de Usuário**.

****

 - Acionar **Contas de Usuário**novamente.

![](/download/attachments/819058035/image-2024-1-10_15-14-50.png?version=1&modificationDate=1704910491660&api=v2)

 - Clicar em **Gerenciar Contas de Usuários**.

![](/download/attachments/819058035/image-2024-1-18_17-8-13.png?version=1&modificationDate=1705608493857&api=v2)

 - Selecionar o usuário que está autenticado e clicar em **Propriedades**.

![](/download/attachments/819058035/image-2024-1-18_17-10-41.png?version=1&modificationDate=1705608642120&api=v2)

 - A opção **Administrador** precisa estar marcada.

****

**04.**Em caráter de teste, tente iniciar o instalador por linha de comando:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Abrir o **Prompt de Comando** através do botão direito do mouse e escolha a opção **Executar como administrador**, conforme a imagem abaixo:

****

 - Se sua sessão**não for**de administrador, será necessário informar um **login** e **senha**antes de prosseguir;

 - Com o **Prompt de Comando** aberto, navegue até a pasta descompactada onde contém a **mídia** do Fluig.

![](/download/attachments/819058035/passso-2.png?version=1&modificationDate=1719958216063&api=v2)

 - Ao acessar a pasta do instalador, execute o arquivo **Fluig-Installer-64.exe**.

 - A tela do instalador/atualizador será exibida e o processo de atualização prosseguirá normalmente.

![](/download/attachments/819058035/passo-3.png?version=1&modificationDate=1719958278257&api=v2)

## Consultar o log de eventos do Windows

---

O**Windows** possui o **Visualizador de Eventos**como recurso nativo para consulta de logs de eventos. Essa ferramenta registra detalhes sobre erros no sistema, inclusive os que são causados por falha de hardware, como HD ou memória RAM. **Para consultar:**

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Pesquisar pelo **Painel de Controle** no campo de busca do **Windows**.

![](/download/attachments/819058035/image-2024-1-10_18-32-3.png?version=1&modificationDate=1704922323503&api=v2)

 - Acionar a opção**Sistema e Segurança**.

![](/download/attachments/819058035/image-2024-1-10_18-34-29.png?version=1&modificationDate=1704922469657&api=v2)

 - Clicar em **Ferramentas do Windows**.

![](/download/attachments/819058035/image-2024-1-10_18-35-30.png?version=1&modificationDate=1704922530753&api=v2)

 - Clicar em **Visualizador de Eventos****.**

![](/download/attachments/819058035/image-2024-1-10_18-39-31.png?version=1&modificationDate=1704922771387&api=v2)

 - O **Visualizador de Eventos** mostra diversas informações a respeito do tipo de evento e qual aplicação fez o disparo.

![](/download/attachments/819058035/image-2024-1-10_18-45-57.png?version=1&modificationDate=1704923157357&api=v2)

## Monitor de Recursos do Windows

---

**01.** O **Monitor de Recursos**é um recurso do **Windows**que pode auxiliar no mapeamento das aplicações que estão conectadas ou utilizando o **Java.exe**. **Para acessá-la:**

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Pesquisar pelo **Painel de Controle** no campo de busca do **Windows**.

![](/download/attachments/819058035/image-2024-1-10_18-32-3.png?version=1&modificationDate=1704922323503&api=v2)

 - Acionar a opção**Sistema e Segurança**.

![](/download/attachments/819058035/image-2024-1-10_18-34-29.png?version=1&modificationDate=1704922469657&api=v2)

 - Clicar em **Ferramentas do Windows**.

![](/download/attachments/819058035/image-2024-1-10_18-35-30.png?version=1&modificationDate=1704922530753&api=v2)

 - Clicar em **Monitor de Recursos****.**

![](/download/attachments/819058035/image-2024-1-11_12-6-35.png?version=1&modificationDate=1704985595847&api=v2)

 - Ao abrir o **Monitor de Recursos**, aparecerá a aba **“Visão Geral"**com os recursos de **hardware**.

 - Selecionar a aba**CPU**e buscar pelo**java.exe**.

![](https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AMzByC0kcQP2ng8oMMdKjPodp%2BlTTXA7abOYVkJZPqUlYTQuEDCvYScSXJWYwiASE4IBeAm3m0UsGHaA5JC1JlXiq2Qv4xsG1BOmWZJQz3CZCVrHrmETuudcO5IZU7US%2BjBlUDg81yQqIiBiBOH4H3tLA033lqrAZtSi1dX4qLB9aZiKLvQAPVjrquRxy7nJ6G3pW%2BNmb1Z3PFGOFR8yS5elQLCCzNmfZPpo%2Bw%2BgX0OrOVsiIuqlc%2BnfVW4LHEYadktsdHEN2a9PqF4RBFsCpupkH95OEXA5mvbme8R%2BrcMjiC%2Bss3TJV58MW5O46bzO%2FnQoKh0yi6p%2BYDysrYAvcREnr6f8EWMykKcxiY9qofobhGcTGAE5UZQxAUEFqlpPMSliYzjAbrQoqDtA85oUCkXQIeXvIs7OtHIX1rwOppjwvwXIfhJbhEcTEWDpp%2BVQrtyRVZ74EqgEm%2FZfLWpPeV0Nl1Qm3hCeDeeddduvSn0yiL7wsdtLN3a9CKC1%2BoMHsUV6Ezx%2BgHsWb8gB0QiDh3j6qYMd1gexERFZWezcQhZ8mGUqI%2FGZ4M%2BIk4bGk9xd6EMMz8vBB6SUUMeqJBk%2Bi%2Bt%2Fpzdm%2BllGaxM%3D&sz=w1280-h847)

 - Com o**java.exe** selecionado, é possível consultar, nas abas **Identificadores Associados** e **Módulo Associados**, todas as aplicações que estão utilizando o recurso.

![](/download/attachments/819058035/image-2024-1-11_13-45-5.png?version=1&modificationDate=1704991505500&api=v2)

## Limpeza de arquivos temporários e pastas keys

---

**01.** Realizar a limpeza dos arquivos temporários e pastas keys, conforme o passo a passo abaixo:

**a)** Parar a execução dos serviços do Fluig: (1) fluig, (2) fluig_Indexer e (3) fluig_RealTime.

**b)** Acessar o diretório: <**diretório de instalação do Fluig>/appserver/domain**.

**c)** Eliminar as pastas: **data, log, servers** e **tmp**.

Atenção

Nesse diretório existe a pasta **configuration**, que** não deve ser excluída**, pois se trata de uma pasta fundamental para o funcionamento da plataforma. As demais pastas são todas temporárias. Caso a plataforma não as encontre, ela automaticamente recria as pastas.

Informação

Esse procedimento reiniciará a plataforma e limpará os arquivos de log do ambiente.

**d)**Apagar as pastas keys disponíveis nos caminhos:

- **<diretório de instalação do Fluig>\repository\wcmdir**
- **<volume do Fluig>\keys***.*

**e)** Verificar se existem arquivos que **NÃO **estejam nos formatos **.war**, **.ear** ou **.jar** dentro das pastas **apps**, **core **e **system**. Caso existam, é necessário remover esses arquivos **fora do formato** das pastas: 

- **<diretório de instalação do Fluig>\appserver\apps**
- **<diretório de instalação do Fluig>\appserver\core**
- **<diretório de instalação do Fluig>\appserver\system**

Importante

Os arquivos temporários gerados nestas pastas são excluídos no momento da finalização dos serviços, porém, em casos de desligamentos forçados do ambiente estes arquivos podem não ser excluídos automaticamente. Assim, é necessário fazer a exclusão manualmente, geralmente, **os arquivos temporários estão no formato .tmp ou são diretórios como o mesmo nome**.

## Nova tentativa de atualização

---

**01.**Reiniciar o servidor.

**02.** Tentar efetuar a atualização da plataforma novamente.

**03.** Iniciar novamente os serviços do Fluig: (1) fluig_Indexer, (2) fluig_RealTime e (3) fluig.

# Sistema Operacional Linux

---

Em servidores Linux essas situações não costumam ocorrer, no entanto, caso ocorra alguma eventualidade, realize a abertura de um ticket na [Central de Atendimento](https://centraldeatendimento.fluig.com/hc/pt-br), através das opções: **Nova Solicitação** → **Suporte Técnico** e anexe esses arquivos ao chamado. Essa ação agilizará todo o processo de atendimento:

- **<diretório de instalação do Fluig>\appserver\domain\configuration\domain.xml**
- **<diretório de instalação do Fluig>\appserver\domain\configuration\host.xml**
- **<diretório de instalação do Fluig>\appserver\domain\servers\fluig1\log\server.log**
- **<diretório de instalação do Fluig>\appserver\domain\log\host-controller.log**
- **<diretório de instalação do Fluig>\appserver\domain\log\process-controller.log**
- **<diretório de instalação do Fluig>\node\fluig.rt\package.json**
- **<diretório de instalação do Fluig>\node\fluig.rt\logs**
- **<diretório de instalação do Fluig>\install.log**
- **<fluig.conf> (Arquivo que fica dentro do servidor do Proxy Reverso)**


<!-- anchors: Erroscomunsaoinstalar/atualizaraplataforma-Índice, Erroscomunsaoinstalar/atualizaraplataforma-Objetivo, Erroscomunsaoinstalar/atualizaraplataforma-Pré-requisitos, Erroscomunsaoinstalar/atualizaraplataforma-SistemaOperacionalWindows, Erroscomunsaoinstalar/atualizaraplataforma-Alterarotipodeinicializaçãodosserviçosparamanual, identificar, identificar-872616687, identificar-872616688, identificar-872616689, Erroscomunsaoinstalar/atualizaraplataforma-Serviço"fluig"permanececomostatus"stopping"(ou"parando"), identificar, identificar-872616687, identificar-872616688, identificar-872616689, identificar-872616690, identificar, identificar-872616687, identificar-872616688, identificar-872616689, identificar-872616690, Erroscomunsaoinstalar/atualizaraplataforma-Mensagensduranteainstalação/atualização, identificar, Erroscomunsaoinstalar/atualizaraplataforma-Renomearodiretóriodeinstalação(teste), Erroscomunsaoinstalar/atualizaraplataforma-Verificaraspermissõesdousuárioexecutordamídia, identificar, identificar-872616687, identificar-872616688, identificar-872616689, identificar-872616690, identificar-872616691, identificar-872616692, identificar, identificar-872616687, identificar-872616688, identificar-872616689, Erroscomunsaoinstalar/atualizaraplataforma-ConsultarologdeeventosdoWindows, identificar, identificar-872616687, identificar-872616688, identificar-872616689, identificar-872616690, identificar-872616691, Erroscomunsaoinstalar/atualizaraplataforma-MonitordeRecursosdoWindows, identificar, identificar-872616687, identificar-872616688, identificar-872616689, identificar-872616690, identificar-872616691, identificar-872616692, Erroscomunsaoinstalar/atualizaraplataforma-Limpezadearquivostemporáriosepastaskeys, Erroscomunsaoinstalar/atualizaraplataforma-Novatentativadeatualização, Erroscomunsaoinstalar/atualizaraplataforma-SistemaOperacionalLinux -->
