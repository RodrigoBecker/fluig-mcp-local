---
title: "Plataforma ❙ Propriedades do documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243648184"
scraped_at: "2026-03-09T03:41:37.670Z"
depth: 2
anchors: 26
child_links: 79
---

# Plataforma ❙ Propriedades do documento

# Falando de propriedades do documento...

---

O modo avançado de criação de documentos permite definir uma série de propriedades para cada documento. Confira o passo a passo para inclusão de documento por tipo: [Documento](/pages/viewpage.action?pageId=233763101), [Documento externo](/pages/viewpage.action?pageId=233763110), [Artigo](/pages/viewpage.action?pageId=233763104), [Relatório](/pages/viewpage.action?pageId=242392150) ou [Aplicativo](/pages/viewpage.action?pageId=233763116).

![](/download/attachments/243648184/propriedades%20do%20documento.png?version=1&modificationDate=1752520162817&api=v2)

## Comentário

---

Breve descrição com informações relevantes sobre o documento e seu conteúdo.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Tags

---

Rótulos atribuídos ao documento para facilitar a busca. As *tags* funcionam como palavras-chave e permitem etiquetar o documento de maneira mais informal e pessoal. É possível encontrar o documento por navegação ou na busca. Inserir com ou sem o caractere "#" para ativar o auto complete das *tags* no campo de *tags*. O auto complete exibe uma lista suspensa com as cinco *tags* mais utilizadas a partir dos caracteres digitados depois do caractere "#".

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Descrição versão/revisão

---

Descrição da atual versão/revisão do documento.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO 

## Versão/revisão

---

Número da versão/revisão do documento. Este campo somente é habilitado na inclusão de um documento e quando o campo "Controle manual da versão inicial" do recurso [Parâmetros](/pages/viewpage.action?pageId=234455426) no Painel de Controle está assinalado. Quando o campo do Painel de Controle não está assinalado, é automaticamente atribuída a versão/revisão "1.000" para o documento e não é possível alterá-la. O formato desse campo é numérico (999.999), sendo que os três primeiros números representam a versão e os três demais representam a revisão. Após a primeira publicação, a plataforma controla automaticamente a evolução de versões e revisões, não permitindo a alteração dos números. Ao selecionar este campo, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova versão/revisão.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO 

## Controle de versão

---

Forma de controle de versão aplicada ao documento. As opções disponíveis são:

**•** **Nova revisão**: quando selecionada, determina que as alterações efetuadas resultarão em uma revisão da versão atual do documento. É normalmente utilizada quando o documento possui uma pequena alteração. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova revisão.

**•** **Nova versão**: quando selecionada, determina que as alterações efetuadas resultarão em uma nova versão do documento. É normalmente utilizada quando o documento possui uma alteração grande de conteúdo. Ao escolher esta opção, faz com que o conteúdo do documento possa ser alterado e a data original de criação do documento será modificada e passará a ser a data da ultima alteração feita, devido a criação de uma nova versão.

**•** **Manter versão**: quando selecionada, determina que será mantida a versão atual do documento. É utilizado quando o documento atual não é mais válido e é necessário trocar todo o conteúdo corrente por um novo atualizado. Caso o documento necessite de aprovação, o conteúdo anterior do documento continua sendo exibido até que a nova versão/revisão seja aprovada. Essa opção somente é exibida quando não for assinalada a opção "Criar versão/revisão obrigatória" ao criar o documento.  Ao escolher opção “Manter revisão", faz com que o conteúdo do documento possa ser alterado e a data de criação da versão original possa ser mantida, sem que se crie uma nova versão do documento.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO 

Importante

Quando o documento estiver em*check-out*, os campos de **Versão/Revisão** e **Controle de versão**presentes na aba Informações gerais, serão bloqueados, com isso, não será permitido realizar a troca de versão. No entanto, será possível a troca de versão somente ao efetuar o [*check-in*](https://tdn.totvs.com/x/7sgGDg).

## Criar versão/revisão obrigatória

---

Quando selecionado, determina que não é possível alterar o documento e manter a mesma versão/revisão, ou seja, somente é possível efetivar alterações criando uma nova versão ou revisão dele. Se na publicação do documento esse campo for assinalado, ele permanece desabilitado ao editar as propriedades do documento.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO 

## Documento expira?

---

Quando assinalado, determina que o documento expirará na data informada no campo "Válido até". Caso contrário, o documento não expirará e a data informada no campo "Válido até" não é considerada. Essa opção será exibida assinalada quando o campo "Documento expira?" – do recurso [Parâmetros](/pages/viewpage.action?pageId=234455426) do Painel de Controle – estiver assinalado. E a notificação será apresentada somente para o autor do documento.  **Assista ao vídeo**

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Período de notificação de expiração

---

Para que a notificação seja emitida é necessário existir uma tarefa do tipo Expiração de documentos no [agendador de tarefas](/pages/viewpage.action?pageId=234455387).

Período de antecedência – em dias – a partir do qual a emissão de notificação de expiração do documento se iniciará. Se for inserido zero (0) será considerado o número de dias informado nos [Parâmetros](/pages/viewpage.action?pageId=234455426) do Painel de Controle. A notificação será apresentada para o autor do documento.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Válido a partir de

---

Data a partir da qual o documento estará disponível para os usuários – de acordo com as permissões de acesso. Essa data permite ao autor do documento agendar sua visualização para os demais usuários da plataforma, pois ele somente será exibido a partir dessa data. A data para publicação não pode ser menor que a data corrente e a publicação futura não envia *e-mail* de notificação (aprovação, nova versão/revisão do documento etc.). Quando o documento é válido somente a partir de uma data futura, para o autor ele é identificado com o ícone ![](/download/attachments/243648184/Valido%20a%20partir%20de.png?version=1&modificationDate=1550500752987&api=v2), que representa que é um documento futuro. ** Veja a imagem**

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Válido até

---

Data a partir da qual o documento será considerado como expirado quando a opção "Documento expira?" estiver assinalada. A data de expiração é sugerida considerando o campo "Dias expiração documentos" – do recurso [Parâmetros](/pages/viewpage.action?pageId=234455426) do Painel de Controle – quando ele tiver algum valor definido. Se o campo "Documento expira" desse recurso não estiver assinalado, essa data é desconsiderada. Quando o documento estiver expirado, ele será apresentado na cor vermelha e com o ícone ![](/download/attachments/243648184/Expirado.png?version=1&modificationDate=1558955367640&api=v2). ** Veja a imagem**

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Tipo de documento

---

Tipo ao qual o documento pertence.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Assunto

---

Assunto ao qual o documento está relacionado. É possível digitar o assunto desejado, a partir dos assuntos configurados na tela de [Assuntos](/pages/viewpage.action?pageId=234455255).

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Utiliza visualizador interno?

---

Quando assinalado, determina que o documento será exibido no visualizador interno da plataforma. Por padrão esse campo é assinalado e os documentos são exibidos no visualizador interno. Esse campo somente é habilitado para alteração quando é definido que ele não deve ser herdado da pasta pai.

Recurso disponível em: DOCUMENTO    

## Marca d'água

---

Permite selecionar uma marca d'água conforme os registros configurados na tela de [Marca d'água](/pages/viewpage.action?pageId=234455302). Ao definir uma marca no documento, ela passa a ser obrigatória na visualização, no download e na impressão de cópia controlada do documento. É importante ressaltar que, para definir uma marca d'água é necessário habilitar o Visualizador Interno.

Recurso disponível em: DOCUMENTO    

## Tipo de ícone

---

Elemento gráfico para representar o documento. Quando não é escolhido o ícone, é associado um ícone padrão com base na extensão do arquivo. É possível incluir ícones personalizados, por meio do recurso [Cadastro de ícones](/pages/viewpage.action?pageId=234455258) do Painel de controle. 

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Autor

---

Usuário autor do documento.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Publicador

---

Campo informativo, contendo o nome do usuário que realizou a publicação do documento. 

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Idioma

---

Idioma ao qual o documento está relacionado. O idioma é utilizado para indexar as informações do conteúdo e do documento. As informações indexadas são utilizadas nas buscas por conteúdo. Como padrão, é exibido o idioma determinado nas preferências do usuário. Se não estiver definido no perfil do usuário, é sugerido o idioma padrão definido nos [Parâmetros](/pages/viewpage.action?pageId=234455426) do Painel de Controle.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Notificar?

---

Quando assinalado, determina que os usuários que possuem o assunto relacionado ao documento como assunto de interesse serão notificados sobre a sua publicação e atualização. Se o assunto relacionado ao documento é um assunto obrigatório, todos os usuários ativos serão notificados, independente de terem ou não o assunto como interesse.

Recurso disponível em: DOCUMENTO DOCUMENTO EXTERNO ARTIGO RELATÓRIO APLICATIVO

## Permite download e impressão?

---

Quando assinalado, determina que o documento permite que sejam efetuados download e impressão do seu conteúdo por usuários que possuem permissão para isso, ou seja, a opção Download e impressão na aba Segurança do documento está assinalada para um usuário ou um grupo ao qual ele pertence.

Recurso disponível em: DOCUMENTO    

## Atualiza propriedades de cópia controlada?

---

Quando assinalado, efetua a atualização das informações nas propriedades do documento, necessárias para a impressão da cópia controlada do documento.

Recurso disponível em: DOCUMENTO   RELATÓRIO 

## Campos customizados

---

Informações gerais de um documento. O cadastro desses campos é realizado no recurso [Campos customizados](/pages/viewpage.action?pageId=234455265) do Painel de controle.

Recurso disponível em: DOCUMENTO 

## URL

---

URL para a qual o usuário será direcionando quando acessar esse documento externo. 

Recurso disponível em: DOCUMENTO EXTERNO   

## Aplicativo

---

Aplicativo que será publicado na navegação de documento e que foi previamente cadastrado em [Aplicativos](/pages/viewpage.action?pageId=234455228).

Recurso disponível em: APLICATIVO

## Parâmetros

---

Caminho e nome do programa do aplicativo a ser executado.

Recurso disponível em: APLICATIVO

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Propriedadesdodocumento-Falandodepropriedadesdodocumento..., Plataforma❙Propriedadesdodocumento-Comentário, Plataforma❙Propriedadesdodocumento-Tags, Plataforma❙Propriedadesdodocumento-Descriçãoversão/revisão, Plataforma❙Propriedadesdodocumento-Versão/revisão, Plataforma❙Propriedadesdodocumento-Controledeversão, Plataforma❙Propriedadesdodocumento-Criarversão/revisãoobrigatória, Plataforma❙Propriedadesdodocumento-Documentoexpira?, Plataforma❙Propriedadesdodocumento-Períododenotificaçãodeexpiração, Plataforma❙Propriedadesdodocumento-Válidoapartirde, Plataforma❙Propriedadesdodocumento-Válidoaté, Plataforma❙Propriedadesdodocumento-Tipodedocumento, Plataforma❙Propriedadesdodocumento-Assunto, Plataforma❙Propriedadesdodocumento-Utilizavisualizadorinterno?, Plataforma❙Propriedadesdodocumento-Marcad'água, Plataforma❙Propriedadesdodocumento-Tipodeícone, Plataforma❙Propriedadesdodocumento-Autor, Plataforma❙Propriedadesdodocumento-Publicador, Plataforma❙Propriedadesdodocumento-Idioma, Plataforma❙Propriedadesdodocumento-Notificar?, Plataforma❙Propriedadesdodocumento-Permitedownloadeimpressão?, Plataforma❙Propriedadesdodocumento-Atualizapropriedadesdecópiacontrolada?, Plataforma❙Propriedadesdodocumento-Camposcustomizados, Plataforma❙Propriedadesdodocumento-URL, Plataforma❙Propriedadesdodocumento-Aplicativo, Plataforma❙Propriedadesdodocumento-Parâmetros -->
