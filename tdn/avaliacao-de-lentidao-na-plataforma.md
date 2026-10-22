---
title: "Avaliação de lentidão na plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268597232"
scraped_at: "2026-03-09T03:45:20.318Z"
depth: 2
anchors: 14
child_links: 57
---

# Avaliação de lentidão na plataforma

# Índice

# Objetivo

---

Problemas de lentidão no TOTVS Fluig Plataforma podem acontecer por diversos motivos, por isso reunimos nesta página algumas formas para identificar e analisar possíveis causas de lentidão.

# Pré-requisitos

---

O dimensionamento do ambiente do usuário deve estar de acordo com as [especificações definidas](https://tdn.totvs.com/x/lFQ4IQ).

# Análise inicial

---

Conforme o [Guia de Performance e Analise do Servidor](https://tdn.totvs.com/x/AHQSCw), a análise inicial deve ser realizada para identificar o ponto exato de lentidão com base na reclamação do usuário.

Para realizar esta análise, deve-se utilizar as ferramentas de rede do navegador, conforme descrito no item [Análise Inicial](https://tdn.totvs.com/x/D3QSCw).

# Cenários comuns

---

Dentro da nossa experiência de atendimento à diversos clientes, identificamos alguns cenários como os mais comuns quando relacionados à lentidão da plataforma. Abaixo, temos a descrição de cada um deles, bem como as medidas normalmente utilizadas para identificar os fatores que levam à percepção de lentidão.

#### Na página inicial

Começamos com a avaliação dos tempos de execução dos *widgets* e, caso existam, das páginas desenvolvidas sobre a plataforma. Essa análise é realizada principalmente através das ferramentas de análise disponibilizadas pelos navegadores, como Chrome e Firefox. Nesta avaliação, buscamos identificar qual, ou quais, recursos estão levando um tempo anormal para responder ou carregar.

#### Na publicação ou visualização de documentos

Quando a demora é percebida na publicação de documentos, começamos verificando se há execução de eventos personalizados, através do *log* do servidor. Caso a percepção seja na visualização, também temos a hipótese de eventos personalizados demorando muito para executar. Caso a lentidão seja no visualizador interno, deve-se verificar seu [dimensionamento](/display/fluig/Sobre+o+Fluig+Viewer).

#### Na tela de inicialização de processos

Normalmente identificamos que a percepção de lentidão nesta tela ocorre devido aos mecanismos de atribuição relacionados às atividades iniciais dos processos. Como a plataforma precisa resolver cada um dos mecanismos para então exibir a lista dos processos aos quais o usuário possui permissão para iniciar, pode haver lentidão neste ponto.

#### Na abertura da tela de movimentação de processo

Nesta tela, quando o processo está sendo aberto para que usuário possa preencher o formulário, anexar arquivos, etc., normalmente iniciamos a avaliação pelo tempo de execução das requisições através do console do navegador para identificar quais recursos estão demorando para responder. Assim, podemos identificar se o motivo da percepção de lentidão são recursos externos, como bibliotecas JavaScript utilizadas no formulário, ou requisições internas da própria plataforma.

Caso identificado que são requisições internas, passamos a avaliar o *log* do servidor em busca da execução de desenvolvimentos como eventos de processos do tipo *before* e de eventos de formulário (*displayFields, enableFields, etc.*), consultas à dataset e/ou consultas a serviços externos. Caso a lentidão seja causada pela execução de eventos, sugerimos a revisão dos mesmos para reduzir ao máximo o processamento necessário para execução. Caso a lentidão seja em consultas a datasets, deve-se avaliar se o dataset em questão foi desenvolvido utilizando as boas práticas e também recursos como a sincronização de datasets.

#### Na movimentação de processo

Quando temos situações onde o envio da solicitação está levando muito tempo, procedemos com uma análise bastante parecida com a analise descrita no item acima, porém agora devemos avaliar eventos de processos do tipo *after* e eventos de validação de formulários (*validateForm*, etc.).

Em muitos casos, na movimentação de solicitações são utilizadas integrações com aplicativos externos que podem causar a percepção de lentidão para o usuário. Para estes casos, recomendamos a utilização da [Atividade de Serviço](https://tdn.totvs.com/x/1oSNBw). Mais informações sobre esta atividade e exemplo de utilização estão disponíveis no guia [Integração assíncrona via processos workflow](https://tdn.totvs.com/x/9mUmDg).

Para saber mais

- [Desenvolvimento de dataset](https://tdn.totvs.com/x/eitbB)
- [Sincronização de datasets](https://tdn.totvs.com/x/xZSwD)
- [Desenvolvimento de processos](https://tdn.totvs.com/x/widbB)
- [Desenvolvimento de formulários](https://tdn.totvs.com/x/U4l8B)
- [Integração assíncrona via processo](https://tdn.totvs.com/x/9mUmDg)
- [Desenvolvimento de eventos](https://tdn.totvs.com/x/EIl8B)
- [Desenvolvimento de widgets](https://tdn.totvs.com/x/jSiDC)

# Analisando o log da plataforma

---

Para analisar o *log* estático, recomendamos o uso de uma ferramenta de texto inteligente, como o Notepad++ ou o SublimeText. Para acompanhar em [tempo real](https://tdn.totvs.com/x/xvIGDg), podem ser utilizadas ferramentas como o BareTail e o glogg.

A página [Mensagens de *log* para processos](https://tdn.totvs.com/x/u5QKDg) tem como objetivo auxiliar o suporte e desenvolvedores da plataforma a ativar e compreender um novo conjunto de mensagens de *log* que trazem informações relevantes a solicitação Workflow durante as fases de abertura e movimentação passando por eventos de processo e Datasets que venham a ser consultados dentro desses eventos.

Os tópicos a seguir irão demonstrar como ativar essas mensagens e farão uma breve descrição de todos os campos retornados. Desta forma, é muito importante que os desenvolvedores conheçam essas mensagens para que possam entender melhor como o Fluig trata e responde a erros durante a execução de processos e desenvolvimentos.

Outra ferramenta bastante importante é a avaliação dos tempos de execução através da classe *JSChronos*.

Basta procurar por "*[com.totvs.technology.foundation.common.JSChronos]*" no *log* do servidor. Todos os pontos de customização são registrados com a informação do tempo de execução, conforme exemplo abaixo:

**Exemplo de execução de dataset**

[?](#)

| `11:02:22,499 INFO [com.totvs.technology.foundation.common.JSChronos] (http-pool-threads - 77) DatasetFactory.getDataset.dsCargosSalariosAtv executou por 1 segundo` |
| --- |

**Exemplo de execução de customizações**

[?](#)

| `11:13:01,280 INFO [com.totvs.technology.foundation.common.JSChronos] (http-pool-threads - 95) CustomizationManagerImpl.invokeFunction.validateForm executou por 1 segundo` |
| --- |

# Ativação do log por usuário

---

Esta é uma ferramenta disponibilizada na plataforma a partir da versão 1.5.8, pois conforme o [Release Notes](https://tdn.totvs.com/x/L9H7DQ) do recurso, quanto maior o uso da plataforma, mais informações são registradas em seu *log*, o que torna difícil saber qual usuário efetuou a ação que acarretou em um erro. 

Por isso, agora quando um usuário relatar que está com problemas e você está com dúvidas do que está acontecendo, ative essa nova opção e acompanhe todas as informações que vão te auxiliar a fazer o diagnóstico de situações que estejam prejudicando o uso da plataforma para esse usuário. Para conferir, acesse **Painel de Controle** > **Gerais** > **Controle de *****log**.*

O guia completo de ativação e utilização da funcionalidade está disponível na página [Controle de*log* por usuário](https://tdn.totvs.com/x/wLMKDg).


<!-- anchors: Avaliaçãodelentidãonaplataforma-Índice, Avaliaçãodelentidãonaplataforma-Objetivo, Avaliaçãodelentidãonaplataforma-Pré-requisitos, Avaliaçãodelentidãonaplataforma-Análiseinicial, Avaliaçãodelentidãonaplataforma-Cenárioscomuns, Avaliaçãodelentidãonaplataforma-Napáginainicial, Avaliaçãodelentidãonaplataforma-Napublicaçãoouvisualizaçãodedocumentos, Avaliaçãodelentidãonaplataforma-Nateladeinicializaçãodeprocessos, Avaliaçãodelentidãonaplataforma-Naaberturadatelademovimentaçãodeprocesso, Avaliaçãodelentidãonaplataforma-Namovimentaçãodeprocesso, Avaliaçãodelentidãonaplataforma-Analisandoologdaplataforma, highlighter_857818, highlighter_569372, Avaliaçãodelentidãonaplataforma-Ativaçãodologporusuário -->
