---
title: "Plataforma ❙ Scripts do processo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=860252124"
scraped_at: "2026-03-09T04:38:16.451Z"
depth: 3
anchors: 6
child_links: 61
---

# Plataforma ❙ Scripts do processo

Nota:

Esta documentação refere-se ao novo editor de processos da plataforma.

IDIOMA

# Falando de scripts do processo...

---

Os *scripts* podem ser associados aos eventos do processo para personalizar o que deve acontecer quando determinado evento ocorrer. Eles são chamados ao longo da execução do processo, em momentos predeterminados pelos eventos, tais como a criação de uma solicitação ou a chegada de uma solicitação em uma determinada etapa do processo.

Ao utilizar*scripts* nos processos, é possível manipular valores do formulário relacionado a eles, fazer a comunicação com serviços externos, enviar *e-mails* para pessoas externas, manipular anexos da solicitação e fazer publicação no recurso [Documentos](/pages/viewpage.action?pageId=233762797), consultar *datasets*, adicionar validações na movimentação da solicitação, integrar com outras solicitações ou outros pontos da plataforma, gerar *logs* etc.

Dica!

Obtenha mais detalhes e informações mais técnicas sobre o desenvolvimento de *scripts* para eventos em:

- [Eventos de processos](/display/fluig/Eventos+de+Processos);

- [Desenvolvimento de eventos](/display/fluig/Desenvolvimento+de+Eventos);

- [Personalizando o *e-mail* padrão (*onNotify*)](/pages/viewpage.action?pageId=852912430);

- [*E-mails* personalizados (*notifier.notify*)](/pages/viewpage.action?pageId=852915615);

- [Motor de personalização](/pages/viewpage.action?pageId=745133366);

- [Exemplos avançados de processos](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse).

![](/download/attachments/860252124/scripts-do-processo.png?version=4&modificationDate=1742579761000&api=v2)

EXEMPLO DE USO
Em um processo de **Pagamento de fornecedores**, existe a necessidade de enviar uma notificação por *e-mail* para uma pessoa da empresa fornecedora quando o pagamento for realizado e a solicitação for finalizada. Por ser de outra empresa, essa pessoa não é uma participante do processo e nem possui cadastro na plataforma, não sendo possível notificá-la a partir das configurações de notificação disponíveis no componente [Fim](/pages/viewpage.action?pageId=864352301).

Neste caso, é possível adicionar um *script* para o evento **afterProcessFinish**. Assim, quando a solicitação for finalizada, a pessoa da empresa fornecedora ficará ciente de que o seu pagamento já foi feito, pois ela também receberá o *e-mail* de notificação.

**afterProcessFinish**

[?](#)

| `function` `afterProcessFinish(processId) {````try` `{````var` `remetente =``"MATRICULA_DO_REMETENTE"``;````//O código do template de e-mail previamente cadastrado em````//"Painel de controle > Templates de e-mail"````var` `templateEmail =``"CODIGO_TEMPLATE_EMAIL"``;````var` `parametros =``new` `java.util.HashMap();````//Parâmetro que será utilizado como assunto do e-mail````parametros.put(``"subject"``,``"Seu pagamento foi realizado"``);````//Parâmetro do template que receberá o nome do responsável contido no````//campo "responsavelFornecedor" do formulário````parametros.put(``"NOME_RESPONSAVEL"``, hAPI.getCardValue(``"responsavelFornecedor"``));````//Parâmetro do template que receberá o valor pago e que está contido no````//campo "valorPago" do formulário````parametros.put(``"VALOR_PAGAMENTO"``, hAPI.getCardValue(``"valorPago"``));``` ```//Instancia lista de destinatários````var` `destinatarios =``new` `java.util.ArrayList();` ```//Adiciona o e-mail externo do responsável pelo fornecedor da solicitação````//que está contido no campos "emailFornecedor" do formulário````destinatarios.add(hAPI.getCardValue(``"emailFornecedor"``));``` ```//Realiza o envio do e-mail````notifier.notify(remetente, templateEmail, parametros, destinatarios,``"text/html"``);````}``catch``(e) {````log.error(``"Erro ao enviar e-mail ao fornecedor: "` `+ e);````}``}` |
| --- |

## Ver scripts do processo

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), clique na aba ![](/download/attachments/860252124/script.png?version=2&modificationDate=1742317956680&api=v2) ***Script** *– localizada no meio da barra superior.

**02.** Na lateral esquerda, veja todos os eventos do processo que possuem *scripts*.

**03.** Clique em cada evento para ver o seu *script*.

Para ocultar a lista de eventos, clique em **Fechar** ![](/download/attachments/860252124/fechar.png?version=1&modificationDate=1728061948560&api=v2). Para ver a lista novamente, basta clicar em **Abrir**![](/download/attachments/860252124/abrir.png?version=2&modificationDate=1728062005870&api=v2).

## Adicionar script no processo

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), clique na aba ![](/download/attachments/860252124/script.png?version=2&modificationDate=1742317956680&api=v2) ***Script** *– localizada no meio da barra superior.

**02.** Na lateral esquerda, clique em **Adicionar script**![](/download/attachments/860252124/adicionar-script.png?version=1&modificationDate=1726774524837&api=v2)– localizado na parte superior.

**03.** Selecione o evento do processo para o qual deseja adicionar um *script*.

**04.** Clique em **Adicionar**.

**05.** Na área de codificação, insira o código do *script* que deve ser executado quando o evento selecionado ocorrer no processo.

**06.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar o *script* criado.

**07.** Na mensagem exibida, clique em **Ok, entendi**.

## Editar script do processo

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), clique na aba ![](/download/attachments/860252124/script.png?version=2&modificationDate=1742317956680&api=v2) ***Script** *– localizada no meio da barra superior.

**02.** Na lateral esquerda, localize e clique sobre o evento para o qual deseja editar o *script*.

**03.** Na área de codificação, edite o código do *script* que deve ser executado quando o evento selecionado ocorrer no processo.

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no *script*.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

## Excluir script do processo

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), clique na aba ![](/download/attachments/860252124/script.png?version=2&modificationDate=1742317956680&api=v2) ***Script** *– localizada no meio da barra superior.

**02.** Na lateral esquerda, localize o evento do qual deseja excluir o *script*.

**03.** Clique em **Excluir**![](/download/attachments/860252124/excluir.png?version=1&modificationDate=1726775382903&api=v2).

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar o processo considerando a exclusão do *script*.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Scriptsdoprocesso-Falandodescriptsdoprocesso..., highlighter_257297, Plataforma❙Scriptsdoprocesso-Verscriptsdoprocesso, Plataforma❙Scriptsdoprocesso-Adicionarscriptnoprocesso, Plataforma❙Scriptsdoprocesso-Editarscriptdoprocesso, Plataforma❙Scriptsdoprocesso-Excluirscriptdoprocesso -->
