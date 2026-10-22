---
title: "Iniciar uma solicitação a partir de uma página pública utilizando Forms"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=458754182"
scraped_at: "2026-03-09T03:48:05.613Z"
depth: 2
anchors: 24
child_links: 53
---

# Iniciar uma solicitação a partir de uma página pública utilizando Forms

Atenção

Os aplicativos **Pages Beta**, **Forms Beta** e **Tasks Beta** foram descontinuados e o **suporte** padrão e oficial da TOTVS será mantido apenas até **Junho de 2023**.

Depois desse período, clientes que ativaram e estão usando os aplicativos continuarão tendo acesso a eles, porém, sem direito ao suporte.

O exemplo demonstrado nessa página utilizou os recursos Forms e Pages do menu Soluções que vinham junto com a plataforma Fluig na atualização 1.6.5 Liquid.

Esta página foi revisada para considerar as configurações da **atualização 1.6.5 (Liquid)**.

# Índice

# Objetivo

Este guia tem o propósito de mostrar como iniciar uma solicitação de processo a partir de uma página pública por meio de um formulário público. Vamos apresentar um exemplo e detalhar todos os passos da integração. 

![](/download/attachments/458754182/Esquemas.png?version=2&modificationDate=1550178301753&api=v2)

# Passo a passo

O caso de uso selecionado é o de recrutamento de novos colaboradores. Você pode conferir mais informações sobre essa aplicação por meio [desse webinar](https://youtu.be/KW2HK8H32YQ).

Confira a seguir os passos necessários para realizar essa configuração.

## Configuração do processo

O primeiro passo é definir qual o processo que deve ser iniciado. Você pode utilizar um processo já existente ou configurar um novo, caso necessário. 

Para verificar como criar o processo, verifique a documentação sobre [Adicionar processo](https://tdn.totvs.com/display/HF/Configurar+processos#Configurarprocessos-Adicionarprocesso).

Neste exemplo, vamos criar um processo simples, porém sua empresa pode evoluir o fluxograma para atender completamente as necessidades.

![](/download/attachments/458754182/construir%20processo.png?version=1&modificationDate=1550174482710&api=v2)

Atenção!

Não se esqueça de configurar o formulário do seu processo! E fique atento ao nome dos campos do formulário, iremos precisar dele nos próximos passos.

![](/download/attachments/458754182/formul%C3%A1rio.png?version=2&modificationDate=1550174892940&api=v2)

## Configuração do serviço

O segundo  passo para iniciar uma solicitação é por meio do cadastro do serviço REST de processos. Lembrando que se deseja fazer integração de um formulário com outro serviço é possível, basta cadastrar o serviço desejado.

Para verificar como criar o serviço, verifique a documentação sobre [Adicionar serviço](https://tdn.totvs.com/pages/viewpage.action?pageId=243660796#Servi%C3%A7os-Adicionarservi%C3%A7o).

No caso do exemplo, será utilizado um serviço REST configurado conforme a seguir.

- [Configuração](#)
- [Arquivo Swagger](#)
- [Domínio](#)
- [Tipo de autenticação](#)

![](/download/attachments/458754182/Image%20003.png?version=2&modificationDate=1550251844323&api=v2)![](/download/attachments/458754182/Image%20004.png?version=1&modificationDate=1550251745203&api=v2)

Para recuperar a informação do arquivo Swagger, siga os passo abaixo:

 1. Acesse a URl do seu ambiente TOTVS Fluig Plataforma e adicionar /api-rest. Ex: [http://suaempresa.fluig.com/api-rest](https://suaempresa.fluig.com/api-rest)

 2. Selecione o serviço que deseja, nesse caso utilizamos o de Process Management. Ver imagem abaixo:

![](https://lh5.googleusercontent.com/i01qOUIXTE-NTzpm3cCdXH2TxD4QcVAW0M1HwSWmUK7boJwiC0iY79i_7VX0bBaqtiqFryKb4zKHQHi15pkzdD8fTykgYfJ9bClD9HUTN6bT3PRXNHktMn7gvYXA0fxi-kt-jfeB)

Após acessar a página, copiar a URL e adicionar ao final a *swagger.json.* O resultado final será algo semelhante a: [http://suaempresa.fluig.com/process-management/swagger-ui/swagger.json](https://suaempresa.fluig.com/process-management/swagger-ui/swagger.json)

No campo Domínio você adicionará a URL do Fluig Plataforma da sua empresa junto com a Base URL que você pode recuperar na página do serviço (Process Management).

![](https://lh4.googleusercontent.com/qQMScwsEn5ZlHlHDmXyNZrXYRtfrJXWdGZGpSohqjsew7nnW9SuhfKq00naE6YeEFV2d7tms2cKdpBZRzz6MgfQ7SLHBIG4RUa-fLEuCzXVU3r03DE-DJuImGANdWmKMLRL41J2D)

Nosso exemplo utiliza o tipo de autenticação Rest oAuth 1, porém [nessa documentação ](https://tdn.totvs.com/pages/releaseview.action?pageId=239041233)são apresentados os detalhes de cada autenticação para atender a sua necessidade. Ao selecionar autenticação do tipo Rest oAuth 1 é preciso preencher algumas informações (Consumer Key, Consumer Secret, Token de acesso e Token Secret).

Acesse [essa documentação ](https://tdn.totvs.com/display/public/fluig/Fluig+API)para saber onde encontrar essas informações.

A URL de teste de serviço não é uma informação obrigatória, porém serve para testar se as configurações do serviço estão corretas. A única particularidade é que precisa ser um método GET.

![](https://lh5.googleusercontent.com/m0e0R3gnNKZbCp-4BdOZz4NOvIp9RXokekW6XmmVAsdBolNthoq-k6arBXmMQ_1cN9WO3xMgNehpYrZ7joKVXtaxw49hIp88YmNAYw9wQWT8fvSa0_VfYyMzg7hCMHIF_Zohfd_-)

## Configuração da operação

No terceiro passo é realizada a inclusão da operação que será necessária para integrar com o formulário.

Para verificar como criar a operação, verifique a documentação sobre [Adicionar operação](https://tdn.totvs.com/pages/viewpage.action?pageId=394220928#Opera%C3%A7%C3%B5es-Adicionaropera%C3%A7%C3%A3o).

No exemplo dessa documentação, será incluída a operação de iniciar solicitação de processos.

- [Configuração](#)
- [Operação do serviço](#)
- [Parâmetros de entrada e saída](#)

![](https://lh4.googleusercontent.com/993Foo8GDptLeFIURRXrfORT4XLvIHD7YWvyGMjgrW8zf1mt9KgtJR1OXOKtCT0AvHXgviJTzis7gKqZ-63FoUD0Q5co4H6BN5mH5mY8O2ruQEAWzzB7FP-GFQ0Dzqu4vvcCar3J)

As operações são os métodos retornados da documentação Swagger da API, cadastrado no serviço selecionado. No caso será escolhida a operação start, que é o método de inicialização de uma solicitação de processo.

Os parâmetros também são recuperados da documentação Swagger e o campo Label permite que sejam definidos nome mais amigáveis, que irão aparecer na integração do formulário, facilitando assim o entendimento de usuários das áreas de negócio.

## Configuração do formulário

Nesse 4º passo será apresentada a configuração do formulário, que inclui torná-lo público e integrado com a operação de iniciar a solicitação.

Para verificar como criar o formulário, verifique a documentação sobre [Construção de formulário](https://tdn.totvs.com/display/HF/Forms#Forms-Construirumformul%C3%A1rio).

No exemplo dessa documentação, foi criado um formulário com alguns campos. Na configuração dos campos, foram definidas as informações como obrigatórias:

- [Configuração](#)
- [Marcar como público](#)
- [Vincular a operação](#)

![](https://lh4.googleusercontent.com/FVILTRR8P-x37SJs9qXGrG8qV6j6v-0Ug0mTsPF78vOEmlFT5aCDYx8_U4nGH-jOvb45ZG37b5cF7Sbeis7YNVoi4GyyGPGQlDF2X7iRdoCoC1O65laAyTWu2VyZQHCyWEoK6XcU)

Como o formulário será adicionado a uma página pública, é necessário realizar a configuração para torná-lo formulário público. Basta acessar as configurações de segurança do formulário e defini-lo como público.

![](https://lh3.googleusercontent.com/7sdIzWozkHss5tcNnUg7yewltMrW_LThtKtmnItezL9ityes82NvSER9LBnkeXMfB2ho8vanHSB3jyyoUSz0oJ2pBIV7mp5GwKsAvg96EN_EuaN-mqYRVAfzk6NaeRU3IxVNj9D-)

Nessa mesma aba de configurações é realizada a inclusão da operação a ser integrada, basta selecionar a operação desejada (no caso, aquela de *start*) e configurar os campos para a integração. Serão preenchidos apenas os campos necessários para a integração, que são o **codigoProcesso** com o valor do código de processo a ser iniciado (nesse caso o código de processo é o do processo criado no passo 1), o parâmetro **targetState **(código da atividade que se encontra após a atividade inicio), o parâmetro **targetAssignee** (pessoa responsável pela atividade) e os campos que serão preenchidos no formulário público e enviados para o formulário do processo.

![](/download/attachments/458754182/Image%20001.png?version=1&modificationDate=1550239690767&api=v2)![](/download/attachments/458754182/Image%20002.png?version=1&modificationDate=1550239690887&api=v2)

Após configurar os campos é possível definir as mensagens relacionadas a integração.

## Configuração da página

O último passo é configurar a página pública, arrastando os componentes e personalizando o layout de acordo com a identidade da empresa.

Para verificar como criar a página, verifique a documentação sobre [Adicionar página](https://tdn.totvs.com/display/HF/Pages+Beta#PagesBeta-Adicionarp%C3%A1gina).

E para que a solução fique completa, basta adicionar o formulário criado no passo 4. Para fazer isso, siga os passos a seguir:

- [Pages](#)
- [Forms](#)
- [Pages](#)

Arraste um componente de Conteúdo externo para a página.

![](https://lh6.googleusercontent.com/-X7NaVjrTkJUowbn1XN8-SO9eN5Gv1U-FTb8pmVWDqytBIb1J_LtxIcAr3-5D6dVhCS2Ds3vD4BLQCJF3niSGQdKViwYKEEEXFw8tLIlFLWtwozLwsHoBgPY7ckF7snBayAtnwqz)

Acesse o seu formulário e acione a opção Compartilhar URL, para copiar a URL do formulário para a área de transferência. 

![](https://lh3.googleusercontent.com/elwUq38CVXs8xO6SFZNe4dAoNQeddBDz3HMZu25fwukwpBZrWYQ5zYl9W6_yrMaxXAKwn-1jJJpAwj2xLdmwnHsg5fGcqTTOmxmrXJ_H_xPJRRjKFJjbKGsRMyhSt51LdgUdDVVG)

Volte na tela de configuração da página e insira a URL do formulário na configuração do componente de Conteúdo externo.

![](https://lh5.googleusercontent.com/p5zGkzRkb1g6R7SE-CSxeoXjf2VoPq6PqEamrJwUGiZWJRRB2oiwwguewHNcsMX4SUrPNiBYAHJ5QRr-gBBjPRrGQevm0CgO84tm-U8axWwIsdSJkG3WFbz1IjsbYhZtj5d4ZBAG)

# Conheça mais: Webinar

Assista ao *webinar* gravado pelo time da plataforma Fluig, para obter mais detalhes sobre o funcionamento deste procedimento:


<!-- anchors: IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Índice, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Objetivo, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Passoapasso, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Configuraçãodoprocesso, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Configuraçãodoserviço, Serviços, Serviços-02, Serviços-03, Serviços-04, 1704744301, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Configuraçãodaoperação, Operação, Operação-02, Operação-03, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Configuraçãodoformulário, Forms, Forms-02, Forms-03, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Configuraçãodapágina, Page, Page-01, Page-02, Page-03, IniciarumasolicitaçãoapartirdeumapáginapúblicautilizandoForms-Conheçamais:Webinar -->
