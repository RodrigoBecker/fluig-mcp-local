---
title: "Iniciar um processo a partir de página publica"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1037988334"
scraped_at: "2026-03-09T03:48:35.649Z"
depth: 2
anchors: 10
child_links: 50
---

# Iniciar um processo a partir de página publica

# Objetivo

---

Essa documentação tem por objetivo abranger todas as etapas isoladas que existem para iniciar uma solicitação no TOTVS Fluig via página pública utilizando widget, e API REST pública com codificação em Java. 

## Contextualização

---

- Nesta documentação precisaremos criar uma widget personalizada, uma página pública e um processo básico.

## Criando um processo

---

01. Para criar um processo simples (início, atividade e fim) siga os passos da documentação [Plataforma | Editor de processos](https://tdn.totvs.com/pages/viewpage.action?pageId=860245005#Plataforma%E2%9D%99Editordeprocesso-Verdiagramadoprocesso) no **passo 01** do item **Ver diagrama do processo**.

![](/download/attachments/1037988334/Processo%20simples.png?version=1&modificationDate=1769558300837&api=v2)

## Criando uma widget

---

01. Baixe o **exemplo** e siga as instruções contidas no arquivo **README.md**. Ao fazer isso, serão gerados dois artefatos iguais aos exemplificados abaixo, que precisarão ser adicionados na Central de componentes. Saiba mais detalhes sobre como adicionar um componente na central **aqui**.

[?](#)

| `api-start-public-process/api-pack-start-public-process/target/api-start-public-process.ear` |
| --- |

Recomendamos a alteração dos arquivos abaixo conforme as instruções: 

**Activate.java**

- APP_KEY = será o usuário que será criado.

É possível conferir mais detalhes sobre o Activate [aqui](https://tdn.totvs.com/x/bS6QGg).

**component.xml **

- Informações relacionadas à título, descrições, versões, categorias e desenvolvedor.

[?](#)

| `widget-start-public-process/target/widget-start-public-process.war` |
| --- |

Recomendamos a alteração dos arquivos abaixo conforme a instrução:

**startPublicProcess.js:**

- tenantId = 1; código da empresa

- processId = 'private-process'; código do processo

- targetAssigneeUserCode = 'adm'; usuário que será o solicitante. 

**Aplication.info**

- Informações relacionadas à título, descrições, versões, categorias e desenvolvedor.

## Criando uma página pública

---

Após a criar o processo, é necessário criar uma página pública contendo um botão para iniciar uma solicitação. No **TOTVS Fluig**, há duas formas de criar uma página pública, sendo uma **NO-CODE** sem a necessidade de códigos, e uma segunda via codificação, sendo esta a forma que utilizaremos nesta documentação.

### Via interface da plataforma

---

- Para criar uma página no TOTVS Fluig, acesse o **Painel de controle** ![](/download/attachments/1037988334/seta-direita.png?version=1&modificationDate=1769558300400&api=v2) agrupador **Personalização** ![](/download/attachments/1037988334/seta-direita.png?version=1&modificationDate=1769558300400&api=v2) **Minhas páginas**. 

Dica

Para mais detalhes e passo a passo sobre como criar uma página, acesse [Plataforma | Criar página](https://tdn.totvs.com/x/fYP5DQ) no **passo 08** do item Criar página.

### Via codificação

- Uma segunda forma seria a **via codificação**, sendo esta a forma que utilizaremos nesta documentação. Neste exemplo, usaremos a API REST para Processos, em específico: **POST - /v2/processes/{processId}/start**. Você pode conferir mais detalhes da API **aqui**.

## Adicionando a widget na página

---

**01.** A página será apresentada em modo de edição para incluir a widget que foi criada anteriormente pelo artefato.

**02.** Localize a widget na seção **Personalizado** no agrupador de widgets no lado esquerdo, e arraste-a para a área de construção ou clique sobre a mesma. No caso deste exemplo de uso utilizamos o nome: Iniciar solicitação de um processo público.

**03.** Após a inclusão da widget, clique em **Publicar**, insira uma breve descrição e clique em **Publicar página**.

**04.** Para acessar a página pública basta acessar a URL da sua empresa adicionando o identificador utilizado no momento da criação da página. Ficando como no exemplo: <FLUIG_URL>/iniciar-processo-via-publica

![](/download/attachments/1037988334/iniciar%20solicita%C3%A7%C3%A3o%20via%20p%C3%A1gina%20p%C3%BAblica.png?version=1&modificationDate=1769558300740&api=v2)


<!-- anchors: Iniciarumprocessoapartirdepáginapublica-Objetivo, Iniciarumprocessoapartirdepáginapublica-Contextualização, Iniciarumprocessoapartirdepáginapublica-Criandoumprocesso, Iniciarumprocessoapartirdepáginapublica-Criandoumawidget, highlighter_346089, highlighter_758994, Iniciarumprocessoapartirdepáginapublica-Criandoumapáginapública, Iniciarumprocessoapartirdepáginapublica-Viainterfacedaplataforma, Iniciarumprocessoapartirdepáginapublica-Viacodificação, Iniciarumprocessoapartirdepáginapublica-Adicionandoawidgetnapágina -->
