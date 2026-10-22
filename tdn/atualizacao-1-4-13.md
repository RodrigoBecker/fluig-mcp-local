---
title: "Atualização 1.4.13"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=190519193"
scraped_at: "2026-03-09T03:17:46.663Z"
depth: 2
anchors: 4
child_links: 39
---

# Atualização 1.4.13

¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/0ZBpCw) para ver el Release Notes en Español.

 Do you speak English? [Click here](https://tdn.totvs.com/x/5pBpCw) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.13 do fluig:

## BPM

**Ocultar itens de formulários do tipo Pai x Filho**

Agora é possível ocultar campos e itens HTML por ID de formulários do tipo Pai x Filho em algumas atividades do processo. Para isso, foram criadas as funções JavaScript *setVisible* e *setVisibleById*.

Saiba mais:

Obtenha mais detalhes sobre as novas funções em [Desenvolvimento de formulários](https://tdn.totvs.com/x/U4l8B).

## Analytics

**Aprimoramentos no modelo de dados do fluig**

Nesta atualização do fluig efetuamos alguns ajustes no modelo de dados do fluig Analytics. Não se preocupe, seus dados estão seguros conosco!

Atenção, usuário do fluig Analytics - não é um simples blá-blá-blá

Não atualize para o fluig 1.4.13 sem [planejar conosco](https://suporte.fluig.com) a atualização do modelo de dados do seu projeto do fluig Analytics. Para o correto envio dos dados do fluig para o fluig Analytics, a atualização para o fluig 1.4.13 precisa estar **sincronizada** com a atualização do modelo de dados do seu projeto no fluig Analytics. Utilizar o fluig 1.4.13 sem efetuar a atualização do modelo de dados ocasionará falha no envio de informações.

## fluig Studio

**Exportação de formulários com mais de um arquivo HTML**

Agora, quando o formulário possui mais de um arquivo HTML, é possível escolher o arquivo que deve ser o principal no momento de exportá-lo do fluig Studio para o fluig.

![](/download/attachments/190519193/SOCIALECMSUST-4315.png?version=2&modificationDate=1435329996000&api=v2)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Criação da propriedade JBOSS_HOME nos arquivos de configuração ao efetuar uma nova instalação do fluig.Nota Se você já possui o fluig instalado e está enfrentando dificuldades para acessá-lo, confira [essa FAQ](https://tdn.totvs.com/x/_KVICw).

- Cancelamento de solicitação que possui um sub processo com atividade automática.

- Movimentação do *widget* Editor de conteúdo entre os *slots* da página sem perder o conteúdo previamente inserido.

- Atualização da página do navegador depois de fechar a tela de movimentação de solicitações.

- Criação de várias solicitações sem fechar a tela de movimentação ao desmarcar a opção **Fechar ao salvar/enviar**.

- Impressão de cópia controlada, utilização de documento de protocolo e *download* de documentos no qual se possui apenas permissão de leitura.

- Exibição de registros de formulário Pai x Filho quando existem campos que são áreas de texto preenchidos com quebra de linha.

- Restauração da versão anterior de um registro de formulário sem perder as informações preenchidas.

- Exibição da mensagem de validação para confirmar que a senha atende aos critérios exigidos ao incluir um usuário no fluig quando se utiliza o fluig Identity.

- Exibição de mensagem informativa de que o *widget* Navegação de comunidades é compatível apenas com páginas de comunidades.

- Funcionamento de atividade do tipo *Timer* no processo principal quando ela está logo após uma atividade de sub processo ou depois duas atividades automáticas.

- Exportação da consulta de solicitações no idioma que está sendo utilizado pelo usuário autenticado no fluig.

- Impressão de arquivos que não possuem extensão compatível com a cópia controlada.


<!-- anchors: Atualização1.4.13-BPM, Atualização1.4.13-Analytics, Atualização1.4.13-fluigStudio, Atualização1.4.13-Correções -->
