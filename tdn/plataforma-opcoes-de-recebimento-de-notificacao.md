---
title: "Plataforma ❙ Opções de recebimento de notificação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244738828"
scraped_at: "2026-03-09T04:41:54.021Z"
depth: 3
anchors: 28
child_links: 59
---

# Plataforma ❙ Opções de recebimento de notificação

# Falando de opções de recebimento de notificação...

---

Essa página tem o intuito de apresentar o funcionamento de cada tipo de notificação listada. É importante mencionar que todas essas notificações serão apresentadas obrigatoriamente* na plataforma, no entanto o usuário só receberá as notificações por e-mail, SMS e *push* caso essas opções específicas estejam habilitadas em suas [configurações de notificação](/pages/viewpage.action?pageId=233763976).

Existem alguns tipos de notificações que podem ser marcados com nenhum tipo de alerta, mas são exceções, como: Convite para editar documento e Modificação de documento.

## Documentos

---

Veja a seguir as opções de recebimento de notificação relacionadas ao recurso Documentos.

### Documento pendente de sua aprovação

---

Emite notificação para o usuário que deve aprovar um documento, informando que o documento irá aparecer na Central de tarefas do usuário até ser aprovado.

### Documento aprovado

---

Emite notificação para o publicador do documento, quando o único ou o último aprovador executar a aprovação do documento.

### Documento aprovado, faltando aprovação de outros usuários

---

Emite notificação para o publicador do documento, quando um dos aprovadores executar a aprovação, porém o documento ainda permanecer em consenso.

### Documento reprovado

---

Emite notificação para o publicador do documento, quando um dos aprovadores executar a reprovação do documento.

### Documento reprovado, faltando aprovação de outros usuários

---

Emite notificação para o publicador do documento, quando um dos aprovadores executar a reprovação do documento, porém o documento ainda permanecer em consenso.

### Última versão do documento a aprovar eliminada

---

Essa notificação será enviada nos casos em que o documento tiver aprovadores e, após aprovarem o documento, esse documento for removido. Nesse caso, serão notificados todos os envolvidos, com exceção do usuário que removeu.

### Documento publicado com o assunto que acompanho

---

Essa notificação é emitida quando for publicado um documento com um assunto que o usuário acompanhe. Para notificar, o [assunto](/pages/viewpage.action?pageId=234455255)precisa ter a opção "Notifica atualização" selecionada, o usuário precisa estar inserido em um grupo vinculado a esse assunto, e nas [propriedades do documento](/pages/viewpage.action?pageId=243648184) precisa estar selecionada a opção "Notificar".

### Nova versão de documento com o assunto que acompanho

---

Essa notificação é emitida quando for publicada uma nova versão ou revisão de um documento com um assunto que o usuário acompanhe. Para notificar, o [assunto ](/pages/viewpage.action?pageId=234455255)precisa ter a opção "Notifica atualização" selecionada, o usuário precisa estar inserido em um grupo vinculado a esse assunto, e nas [propriedades do documento](/pages/viewpage.action?pageId=243648184) precisa estar selecionada a opção "Notificar".

### Documento removido com o assunto que acompanho

---

Essa notificação é emitida quando for removido um documento com um assunto que o usuário acompanhe. A notificação ocorre quando o documento for movido para a lixeira, e não ao remover da lixeira (excluir permanentemente). Para notificar, o [assunto ](/pages/viewpage.action?pageId=234455255)precisa ter a opção "Notifica eliminação" selecionada, o usuário precisa estar inserido em um grupo vinculado a esse assunto, e nas [propriedades do documento](/pages/viewpage.action?pageId=243648184) precisa estar selecionada a opção "Notificar".

### Documento atualizado com o assunto que acompanho

---

Essa notificação é emitida quando for atualizado ou restaurado (da lixeira) um documento com um assunto que o usuário acompanhe. Para notificar, o [assunto ](/pages/viewpage.action?pageId=234455255)precisa ter a opção "Notifica atualização" selecionada, o usuário precisa estar inserido em um grupo vinculado a esse assunto, e nas [propriedades do documento](/pages/viewpage.action?pageId=243648184) precisa estar selecionada a opção "Notificar".****

### Documento a expirar sob sua responsabilidade

---

Emite notificação de expiração do documento para o usuário que foi definido como seu autor. Para que a notificação seja emitida é necessário existir uma tarefa do tipo Expiração de documentos no [agendador de tarefas](/pages/viewpage.action?pageId=234455387).

A emissão da notificação considera o que foi definido nos campos "Documento expira?", "Período de notificação de expiração" e "Válido até" das [propriedades do documento](/pages/viewpage.action?pageId=243648184). Se esses campos não forem definidos, será considerada a definição existente nos [parâmetros gerais](/pages/viewpage.action?pageId=234455426) da empresa.

### Todas as versões de um documento que você foi aprovador da última versão foram eliminadas

---

Essa notificação é enviada ao aprovador de um documento, no momento em que esse documento for removido.

### Pasta removida com documentos com assuntos que acompanho

---

Essa notificação é emitida quando for removida uma pasta com pelo menos um documento com um assunto que o usuário acompanhe. A notificação ocorre quando essa pasta for movida para a lixeira, e não ao remover da lixeira (excluir permanentemente). Para notificar, o [assunto ](/pages/viewpage.action?pageId=234455255)precisa ter a opção "Notifica eliminação" selecionada, o usuário precisa estar inserido em um grupo vinculado a esse assunto, e nas [propriedades do documento](/pages/viewpage.action?pageId=243648184) precisa estar selecionada a opção "Notificar". 

**oculto**

Não encontrado utilização:

- Solicitação de leitura
- Versão de documento eliminada, onde você foi o aprovador, sendo que não é a última versão do documento
- Receber permissão
- Convite para editar documento

### Solicitar permissão

---

Essa notificação é enviada para os administradores selecionados pelo usuário autenticado, no momento da solicitação da permissão adicional. Mais detalhes sobre a solicitação das permissões pode ser obtida na página [Solicitar permissão adicional em pasta ou em documento](/pages/viewpage.action?pageId=235325476).

### Modificação de documento

---

Essa notificação é enviada para os usuários que tiverem assinalado para acompanhar o documento, a cada vez que esse documento for modificado.

### Novo documento publicado com o resultado da exportação de hits

---

Ao visualizar as propriedades de um documento e o mesmo tiver um histórico de acessos, a plataforma irá apresentar a opção "Clique aqui para exportar a lista de todos os acessos de todas as versões". O resultado da exportação de hits aciona esta notificação. Para saber mais, acesse o help [Exportar acessos ao documento](/pages/viewpage.action?pageId=235325483#Plataforma❙Visualizarpropriedadesdodocumento-Exportaracessosaodocumento).

### Erro ao processar a exportação de hits do documento

---

Ao visualizar as propriedades de um documento e o mesmo tiver um histórico de acessos, a plataforma irá apresentar a opção "Clique aqui para exportar a lista de todos os acessos de todas as versões". Caso ocorra algum erro ao processar a exportação de hits, esta notificação será acionada. Para saber mais, acesse o help [Exportar acessos ao documento](/pages/viewpage.action?pageId=235325483#Plataforma❙Visualizarpropriedadesdodocumento-Exportaracessosaodocumento).

### Transferência de conteúdos

---

Essa notificação é acionada para os usuários administradores quando um download de documento for solicitado e o TOTVS Fluig Plataforma esteja utilizando replicação de conteúdos.

### Transferência de conteúdos finalizada

---

Essa notificação é acionada para os usuários administradores quando um download de replicação de conteúdos foi finalizado.

### Limite da cota

---

Quando a quantidade de dados armazenados estiver próxima de atingir o limite de cota parametrizada na tela de [Controle de cotas](/pages/viewpage.action?pageId=235320837) em uma determinada pasta, essa notificação será enviada para seu respectivo dono. Uma barra indicativa é apresentada ao acessar a pasta, para que o usuário autenticado possa visualizar a quantidade ainda disponível e, com isso, tomar as ações necessárias.

### Cota esgotada

---

Quando a quantidade de dados armazenados atingir a cota parametrizada na tela de [Controle de cotas](/pages/viewpage.action?pageId=235320837) em uma determinada pasta, essa notificação será enviada para seu respectivo dono.

### Download de pasta

---

Quando o usuário autenticado acionar a opção de download da pasta, a plataforma irá iniciar a compactação dos arquivos. Assim que a compactação for concluída, o usuário irá receber a notificação, informando o link para download do arquivo compactado. 

O download da pasta somente será permitido se o usuário tiver as permissões necessárias de acesso à pasta, para mais informações, consulte: [Definir critérios de segurança para pasta ou para documento](/pages/viewpage.action?pageId=243008857).

### Falha no download de pasta

---

Ao solicitar um download de pasta, essa ação é realizada em segundo plano e, caso ocorra erro no download, essa notificação será apresentada ao usuário. Por exemplo: supondo que a plataforma esteja configurada com [Controle de cotas](/pages/viewpage.action?pageId=235320837) e marcada a opção "Bloquear publicação ao atingir limite de cota". Se o usuário autenticado tentar efetuar o *download* de uma pasta que, após compactada, tiver um tamanho superior à cota disponível em sua pasta "Meus Documentos", receberá uma notificação de que ocorreu uma falha no download da pasta.

## Gerais

---

Veja a seguir as opções de recebimento de notificação gerais.

### Uma métrica está demorando mais que o definido

---

![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

Essa notificação é disparada no caso de lentidão no indexador (SOlr). Caso essa notificação seja emitida, significa que pode estar ocorrendo lentidão na indexação do volume, e o ideal é verificar se existe tarefa de Indexação de documentos ativa no [Agendador de tarefas](/pages/viewpage.action?pageId=234455387) e a frequência de execução dessa tarefa. Outra causa para a lentidão pode ser um grande volume de publicações de documentos simultaneamente.

### Senha recuperada recentemente

---

Essa notificação é emitida depois que o usuário solicita a recuperação da senha a partir da opção **Esqueceu sua senha?** na tela de autenticação. Ao finalizar o processo de recuperação, essa notificação é enviada informando que a senha foi recuperada e alterada recentemente.

Essa notificação é emitida na própria [Central de notificações](/pages/viewpage.action?pageId=233763951) ou por *e-mail*, dependendo de como foi [configurada](/pages/viewpage.action?pageId=233763976).

Importante!

Essa notificação não é emitida ao alterar a senha a partir do [cadastro](/pages/viewpage.action?pageId=234455411) do usuário ou a partir da edição do seu [perfil](/pages/viewpage.action?pageId=233762774).

**oculto**

[Platform ❙ Notification receiving options](/pages/viewpage.action?pageId=248578174)

[Opciones para recibir notificación](/pages/viewpage.action?pageId=248580411)

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Opçõesderecebimentodenotificação-Falandodeopçõesderecebimentodenotificação..., Plataforma❙Opçõesderecebimentodenotificação-Documentos, Plataforma❙Opçõesderecebimentodenotificação-Documentopendentedesuaaprovação, Plataforma❙Opçõesderecebimentodenotificação-Documentoaprovado, Plataforma❙Opçõesderecebimentodenotificação-Documentoaprovado,faltandoaprovaçãodeoutrosusuários, Plataforma❙Opçõesderecebimentodenotificação-Documentoreprovado, Plataforma❙Opçõesderecebimentodenotificação-Documentoreprovado,faltandoaprovaçãodeoutrosusuários, Plataforma❙Opçõesderecebimentodenotificação-Últimaversãododocumentoaaprovareliminada, Plataforma❙Opçõesderecebimentodenotificação-Documentopublicadocomoassuntoqueacompanho, Plataforma❙Opçõesderecebimentodenotificação-Novaversãodedocumentocomoassuntoqueacompanho, Plataforma❙Opçõesderecebimentodenotificação-Documentoremovidocomoassuntoqueacompanho, Plataforma❙Opçõesderecebimentodenotificação-Documentoatualizadocomoassuntoqueacompanho, Plataforma❙Opçõesderecebimentodenotificação-Documentoaexpirarsobsuaresponsabilidade, Plataforma❙Opçõesderecebimentodenotificação-Todasasversõesdeumdocumentoquevocêfoiaprovadordaúltimaversãoforameliminadas, Plataforma❙Opçõesderecebimentodenotificação-Pastaremovidacomdocumentoscomassuntosqueacompanho, Plataforma❙Opçõesderecebimentodenotificação-Solicitarpermissão, Plataforma❙Opçõesderecebimentodenotificação-Modificaçãodedocumento, Plataforma❙Opçõesderecebimentodenotificação-Novodocumentopublicadocomoresultadodaexportaçãodehits, Plataforma❙Opçõesderecebimentodenotificação-Erroaoprocessaraexportaçãodehitsdodocumento, Plataforma❙Opçõesderecebimentodenotificação-Transferênciadeconteúdos, Plataforma❙Opçõesderecebimentodenotificação-Transferênciadeconteúdosfinalizada, Plataforma❙Opçõesderecebimentodenotificação-Limitedacota, Plataforma❙Opçõesderecebimentodenotificação-Cotaesgotada, Plataforma❙Opçõesderecebimentodenotificação-Downloaddepasta, Plataforma❙Opçõesderecebimentodenotificação-Falhanodownloaddepasta, Plataforma❙Opçõesderecebimentodenotificação-Gerais, Plataforma❙Opçõesderecebimentodenotificação-Umamétricaestádemorandomaisqueodefinido, Plataforma❙Opçõesderecebimentodenotificação-Senharecuperadarecentemente -->
