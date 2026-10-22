---
title: "Plataforma ❙ Regras para anexos em solicitações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=860252092"
scraped_at: "2026-03-09T04:15:33.602Z"
depth: 3
anchors: 58
child_links: 66
---

# Plataforma ❙ Regras para anexos em solicitações

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividade](https://tdn.totvs.com/pages/viewpage.action?pageId=233763197#Plataforma%E2%9D%99Configuraratividadesefluxos-ConfigurarAtividade). 

IDIOMA

# Falando de regras para anexos em solicitações...

---

As regras para os anexos são condições ou pré-requisitos que podem ser definidos nos componentes **Início** e **Atividade**, que representam etapas de um processo. Elas podem exigir, proibir ou permitir anexos com algumas características específicas, tais como nome dos arquivos, extensões, quantidade de arquivos, dentre outras – independentemente dos anexos que já existem na solicitação, em etapas anteriores, por exemplo – garantindo que a etapa esteja completa e dentro dos critérios exigidos para que a solicitação possa seguir adiante.

As regras para os anexos podem ser:

- **gerais**:****são regras mais simples e visam exigir quantidades de anexos;

- **específicas**: são regras que, combinadas com as gerais, permitem exigir características específicas dos anexos, como nome ou extensão;

- **avançadas**: são regras específicas com condições definidas a partir de caracteres especiais, cada um com seu significado.

Nota:

As regras para os anexos não são obrigatórias em nenhum componente. Elas podem ou não ser definidas de acordo com as necessidades específicas de cada etapa, processo ou negócio.

Se nenhuma regra for definida, é permitido adicionar qualquer tipo e qualquer quantidade de anexos, ou seja, nenhuma validação é feita.

Dica!

[Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=862123505#Plataforma%E2%9D%99Atividade-Configurarregrasparaanexos) e saiba como configurar regras para os anexos em uma etapa do processo.

![](/download/attachments/860252092/regras-de-anexos.png?version=3&modificationDate=1742580998407&api=v2)

## Objetivo das regras

---

As regras têm como objetivo agilizar a resolução das solicitações, visto que evita que a solicitação seja enviada adiante sem que o conteúdo necessário para análise na próxima etapa esteja faltando ou esteja incorreto, por exemplo, o que exigiria o retorno da solicitação para que ele seja ajustado.

Desta forma, as regras ajudam a evitar retrabalhos e atrasos na resolução das solicitações, bem como visam facilitar a análise de cada etapa e o entendimento daquilo que está sendo solicitado.

## Ordem de verificação das regras

---

No momento de movimentar a solicitação para a próxima etapa, as regras para anexos da etapa corrente são verificadas e, caso uma delas não seja atendida, é exibida uma mensagem informando quais regras foram atendidas e quais ainda não foram.

É necessário que **todas as regras** sejam atendidas e **todos os anexos** sejam válidos para que a etapa possa ser concluída e a solicitação enviada para a próxima. Quando um anexo é considerado válido para uma regra, ele não é verificado nas demais regras. Por isso, existe uma ordem na qual as regras são verificadas e é importante considerá-la ao criar as regras.

A ordem de verificação das regras para os anexos da etapa é:

- **1º →**São verificadas as regras de **quantidade**, **nome** e **extensão**. São analisados os anexos válidos para cada regra. Se qualquer uma das regras não for atendida, a mensagem de validação é exibida e o envio para a próxima etapa não é permitido.

- **2º** **→**É verificado se existe uma regra com **qualquer um** e se existe um anexo que ainda não atendeu a nenhuma regra anterior. Em caso afirmativo, o anexo será considerado válido, pois atende à regra com o **qualquer um** (que é a última a ser verificada) e o envio para a próxima etapa é permitido. Caso contrário – não existe regra com o **qualquer um**, mas existe um anexo que não atendeu a nenhuma regra anterior – a mensagem de validação é exibida e o envio para a próxima etapa não é permitido, mesmo que os demais anexos tenham atendido às regras anteriores.
EXEMPLO 1**→**Uma etapa possui 3 regras para os anexos, sendo uma com **qualquer um**.**→**Foram adicionados 4 anexos. Dois deles atenderam à primeira regra, um deles atendeu à segunda regra e o quarto não atendeu a nenhuma das duas regras (que são verificadas antes da regra com o **qualquer um**).**→**Como a terceira regra possui o **qualquer um**, esse quarto anexo atende a ela. Neste caso, todas as regras foram atendidas e todos os anexos são válidos. Portanto, o envio para a próxima etapa é permitido.

EXEMPLO 2**→**Uma etapa possui 2 regras para os anexos e nenhuma delas usa o **qualquer um**.**→**Foram adicionados 3 anexos. Um atendeu à primeira regra, outro atendeu à segunda regra e o terceiro não atendeu a nenhuma das duas regras.**→**Como não existe nenhuma regra com o **qualquer um**, esse terceiro anexo não atendeu a nenhuma regra. Neste caso, ele não será considerado válido. Portanto, o envio para a próxima etapa não é permitido.

## Regra geral

---

As regras gerais são as mais simples e servem para definir a quantidade exigida de anexos ou se o anexo pode ser de qualquer tipo e em qualquer quantidade na etapa.

Confira abaixo um exemplo para cada condição disponível para criação de regras gerais para anexos.

**→**O anexo deve ser **igual** **a** **2**.

É obrigatório adicionar **dois** anexos nessa etapa, não sendo permitido adicionar mais.

**→**O anexo deve ser **maior que** **0**.

É obrigatório adicionar **pelo menos** **um**anexo nessa etapa, sendo permitido adicionar **mais** de um.

**→**O anexo deve ser **maior ou igual a 1**. 

É obrigatório adicionar **pelo menos um** anexo nessa etapa, sendo permitido adicionar **mais** de um.

**→**O anexo deve ser **menor que 3**.

É permitido adicionar **até dois** anexos nessa etapa ou deixar a etapa sem anexos.

**→**O anexo deve ser **menor ou igual a 4**.

É permitido adicionar **até quatro** anexos nessa etapa ou deixar a etapa sem anexos.

**→**O anexo deve ser **qualquer um**. 

É permitido adicionar **qualquer tipo**e **qualquer quantidade** de anexos nessa etapa, podendo, inclusive, deixar a etapa sem anexos.

CENÁRIO 1
Em um processo de **Solicitação de abono de horas** por questões médicas para a área de Folha de pagamento, o solicitante precisa obrigatoriamente enviar o atestado médico que justifica o abono. O atestado é aceito em qualquer formato, podendo ser uma imagem, uma foto, um documento em PDF, um arquivo do tipo ZIP, enfim, nenhuma exigência é feita com relação ao tipo do arquivo. Porém, só é permitido enviar um atestado por solicitação, ou seja, se o solicitante possuir mais de um atestado, deve abrir uma solicitação para cada um.

Sendo assim, a regra pode ser definida da seguinte forma:

→ O anexo deve ser **igual a 1**.

É obrigatório adicionar **um** anexo de qualquer tipo. E não é permitido adicionar mais de um.

****

        Your browser does not support the HTML5 video element

CENÁRIO 2
Em um processo de **Aprovação de orçamento** simples,****a pessoa responsável pela aprovação prefere que o detalhamento seja feito diretamente no formulário da solicitação, para que ao abrir a solicitação para analisar, o valor a ser aprovado já esteja evidenciado, sem a necessidade de abrir um documento para ver as informações.

→ Neste caso, não é necessário adicionar nenhuma regra, basta ativar a opção **Proibir anexos**, que significa que não é permitido adicionar **nenhum** anexo nessa etapa. O detalhamento do orçamento deve ser adicionado no formulário da solicitação.

****

        Your browser does not support the HTML5 video element

## Regra específica

---

As regras específicas precisam ser combinadas com as regras gerais para permitir ou exigir características específicas dos anexos, tais como nome e extensão dos arquivos.

É possível definir, por exemplo, que somente é permitido adicionar anexos com um determinado tipo de extensão ou exigir que o arquivo anexado siga um padrão de nomenclatura pré-determinado.

Confira a seguir alguns exemplos de regras específicas para anexos.

→ O anexo deve ser **igual a 1** com **o nome do arquivo contendo nota**no**início**.

É obrigatório adicionar **um** anexo que tenha o termo **nota** no início do seu nome.

→ O anexo deve ser **menor ou igual a 2** com **a extensão igual a** **.zip**.

É permitido adicionar até **dois** anexos com a extensão **.zip** ou deixar a etapa sem anexos.

→ O anexo deve ser **igual a 1** com **o nome e extensão contendo** no nome o termo **boleto** no** início** e na extensão o termo **.pdf **no** fim**.

É obrigatório adicionar **um** anexo que tenha o termo **boleto** no **início** do seu **nome** e que seja um documento do tipo **PDF**.

CENÁRIO 1
Em um processo de **Abertura de chamado** para a área de TI, o solicitante precisa enviar pelo menos uma imagem da inconsistência que está ocorrendo ou do recurso para o qual está solicitando atendimento. Somente são aceitas imagens que sejam do tipo PNG. Se conseguir, também é interessante enviar o *log*, mas ele precisa ser no formato TXT e não é obrigatório.

Sendo assim, as regras podem ser definidas da seguinte forma:

→ O anexo deve ser **maior ou igual a 1** com **a extensão igual a** **.png**.

É obrigatório adicionar **pelo menos um** anexo que seja uma imagem com a extensão **.png**. Mas, se o solicitante desejar, pode adicionar mais anexos.

→ O anexo deve ser **maior ou igual a 0** com **a extensão igual a** **.txt**.

Se o solicitante conseguir obter o *log*, ele pode anexar na solicitação para facilitar a análise. Mas, não é obrigatório anexar.

→ O anexo deve ser **igual a 0** com **a extensão igual a** **.exe**.

Por questões de segurança, não é permitido adicionar nenhum anexo que tenha a extensão **.exe**.

****

        Your browser does not support the HTML5 video element

CENÁRIO 2
Em um processo de **Solicitação de pagamento** para a área Financeira, o solicitante precisa enviar, obrigatoriamente, três documentos: a nota fiscal eletrônica, o boleto para pagamento e um detalhamento dos produtos ou serviços adquiridos. Os documentos precisam ser do tipo PDF e estar identificados pelos respectivos nomes "boleto", "fatura" e a nota fiscal precisa estar identificada com o código "NF" no início do nome.

Desta forma, as regras podem ser definidas da seguinte maneira:

→ O anexo deve ser **igual a 1** com **o nome e extensão igual a**no nome o termo**boleto**e na extensão o termo**pdf**.

É obrigatório adicionar **um**anexo que tenha o nome **boleto** e que seja um documento com a extensão **.pdf**.

→ O anexo deve ser **igual a 1** com **o nome e extensão igual a**no nome o termo**fatura**e na extensão o termo**pdf**.

É obrigatório adicionar **um**anexo que tenha o nome **fatura** e que seja um documento com a extensão **.pdf**.

→ O anexo deve ser **igual a 1** com **o nome e extensão contendo**no nome o termo**NF**no**início**e na extensão o termo**pdf**no**fim**.

É obrigatório adicionar **um** anexo com os caracteres **NF** no início do seu nome e com a extensão **.pdf** para identificar que é a nota fiscal. Anexos como **NF_10355.pdf**, **NF89665.doc.pdf**, **NF-58361.pdf** seriam aceitos.

****

        Your browser does not support the HTML5 video element

## Regra avançada

---

As regras avançadas são definidas a partir de uma expressão que pode utilizar uma combinação dos seguintes caracteres:

- ***** (**asterisco**): permite deixar livre para ter ou não quaisquer caracteres antes ou depois dele.
**EXEMPLOboleto* →** significa conter o termo **boleto**no início do nome, podendo ter ou não quaisquer outros caracteres depois do termo, inclusive na extensão – permitido pelo *****. Anexos como **boleto.pdf** ou **boleto-janeiro.png** seriam aceitos.
- **|** (**pipe**): significa "**ou**" e permite definir múltiplos padrões.
**EXEMPLO*.pdf|*.doc|*.docx|*.txt** → significa que pode ser **.pdf**, **.doc**, **.docx**, ou **.txt**.** **– extensões permitidas pelo **|** – podendo ter qualquer nome antes da extensão – permitido pelo *****. Anexos como **processo.pdf** ou **anotações.txt** seriam aceitos.
- **!** (**exclamação**): significa "**diferente de**" ou "**proibido**" e permite barrar um padrão.
**EXEMPLO!*.zip**→ significa diferente de **.zip**– extensão foi proibida pelo **!** – podendo ter qualquer nome antes da extensão – permitido pelo *****. Anexos como **boleto.pdf** ou **processo.png** seriam aceitos.

Confira a seguir mais alguns exemplos de regras avançadas para anexos.

→ O anexo deve ser **igual a 1** com **condição avançada** **fatura.pdf|nota.pdf**.

É obrigatório adicionar **um** anexo com o nome **fatura** ou **nota** e com a extensão **.pdf**. Não é permitido adicionar mais de **um**.

→ O anexo deve ser **qualquer um** com **condição avançada** **!server.***.

É permitido adicionar **qualquer tipo**de anexo com o nome diferente de ***server*** e com qualquer extensão ou deixar a etapa sem anexos. O nome **server** é **proibido**.

→ O anexo deve ser **maior ou igual a 3** com **condição avançada *boleto*.pdf**.

É obrigatório adicionar **pelo menos 3** anexos, podendo adicionar mais, que contenha o termo **boleto** no nome e com a extensão **.pdf**.

CENÁRIO 1
Em um processo de **Solicitação de reembolso** de viagem para a área Financeira, o solicitante pode enviar o comprovante de pagamento da estadia, do transporte e do ingresso, caso a viagem tenha sido para um evento. Os comprovantes precisam estar em PDF e identificados pelo nome.

Desta forma, as regras podem ser definidas da seguinte maneira:

→ O anexo deve ser **maior ou igual a 1**com **condição avançada** ***estadia*.pdf|*transporte*.pdf|*ingresso*.pdf**.

É obrigatório adicionar **pelo menos um** anexo, podendo anexar mais, que contenha o termo **estadia**, **transporte** ou **ingresso** no nome e com a extensão .**pdf**.

****

        Your browser does not support the HTML5 video element

CENÁRIO 2
Em um processo de **Solicitação de compra** de materiais de escritório para a área de Compras, o solicitante precisa enviar uma foto do material solicitado para servir de referência e facilitar para quem vai efetuar a compra. Essa foto pode ser de vários tipos.

Desta forma, as regras podem ser definidas da seguinte maneira:

→ O anexo deve ser **maior ou igual a 1** com **condição avançada** ***.png|*.jpg|*.jpeg|*.bmp**.

É obrigatório adicionar **pelo menos 1** anexo com qualquer nome e que seja uma imagem com uma das extensões permitidas: **.png**,**.jpg**,**.jpeg** ou **.bmp**.

****

        Your browser does not support the HTML5 video element

## Exemplos de uso

---

Reunimos aqui vários cenários nos quais podem ser aplicadas regras para os anexos. Os exemplos contam com a regra, uma mensagem de auxílio para atender à regra e os resultados de acordo com o cenário.

São demonstrados exemplos de regras gerais, específicas e avançadas. Clique em cada cenário para ver seus detalhes.

[Abrir/fechar todos os cenários](#)

#### Exigir pelo menos um anexo na etapa.

---

**REGRA**

→ O anexo deve ser **maior que 0**.

**MENSAGEM**

→ É obrigatório adicionar pelo menos um anexo de qualquer tipo.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf adicionado. |  | Regra atendida. |
| Um anexo com a extensão .zip adicionado. |  | Regra atendida. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regra atendida. |
| Um anexo com a extensão .jpg adicionado. |  | Regra atendida. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regra atendida. |

#### Proibir anexo na etapa.

---

Para proibir anexos em uma etapa, não é necessário criar nenhuma regra, basta ativar a opção **Proibir anexos**, que determina que não é permitido adicionar nenhum anexo na etapa.

![](/download/attachments/860252092/proibir-anexos.png?version=1&modificationDate=1728397534717&api=v2)

#### Exigir um anexo com a extensão .zip.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **a extensão igual a .zip**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com a extensão .zip.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .zip adicionado. |  | Regra atendida. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regra não atendida. |
| Um anexo com a extensão .jpg adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regra não atendida. |

#### Exigir um anexo com a extensão .zip E um anexo com a extensão .pdf.

---

**REGRAS**

→ O anexo deve ser **igual a 1** com **a extensão igual a .zip**.
→ O anexo deve ser **igual a 1** com **a extensão igual a .pdf**.

**MENSAGENS**

→ É obrigatório adicionar um anexo com a extensão .zip.
→ É obrigatório adicionar um anexo com a extensão .pdf.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regras atendidas. |
| Um anexo com a extensão .jpg adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regras não atendidas. |

#### Exigir um anexo com a extensão .zip OU .pdf.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **condição avançada .zip|.pdf**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com a extensão .zip ou com a extensão .pdf.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf adicionado. |  | Regra atendida. |
| Um anexo com a extensão .zip adicionado. |  | Regra atendida. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regra não atendida. |
| Um anexo com a extensão .jpg adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regra não atendida. |

#### Exigir um anexo com a extensão .zip e deixar livre para anexar ou não outros tipos de anexo.

---

**REGRAS**

→ O anexo deve ser **igual a 1** com **a extensão igual a .zip**.
→ O anexo deve ser **qualquer um**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com a extensão .zip.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip adicionado. |  | Regras atendidas. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regras atendidas. |
| Um anexo com a extensão .jpg adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regras atendidas. |

#### Proibir anexo com a extensão .zip e deixar livre para anexar ou não outros tipos de anexo.

---

**REGRAS**

→ O anexo deve ser **igual a 0** com **a extensão igual a .zip**.
→ O anexo deve ser **qualquer um**.

**MENSAGEM**

→ Não é permitido adicionar um anexo com a extensão .zip.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras atendidas. |
| Um anexo com a extensão .pdf adicionado. |  | Regras atendidas. |
| Um anexo com a extensão .zip adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regras não atendidas. |
| Um anexo com a extensão .jpg adicionado. |  | Regras atendidas. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regras não atendidas. |

#### Exigir um anexo com a extensão .zip e exigir pelo menos outro tipo de anexo.

---

**REGRAS**

→ O anexo deve ser **igual a 1** com **a extensão igual a .zip**.
→ O anexo deve ser **maior ou igual a** **1** com **a extensão diferente de .zip**.

**MENSAGENS**

→ É obrigatório adicionar um anexo com a extensão .zip.
→ É obrigatório adicionar pelo menos um anexo com a extensão diferente de .zip.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regras atendidas. |
| Um anexo com a extensão .jpg adicionado. |  | Regras não atendidas. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regras atendidas. |

#### Exigir um ou mais anexos do tipo imagem.

---

**REGRA**

→ O anexo deve ser **maior ou igual a 1** com **condição avançada .png|.jpg|.gif**.

**MENSAGEM**

→ É obrigatório adicionar pelo menos um anexo com a extensão .png, .jpg ou .gif.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .pdf adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .zip adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regra não atendida. |
| Um anexo com a extensão .jpg adicionado. |  | Regra atendida. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regra não atendida. |

#### Permitir somente anexo do tipo imagem, mas sem torná-lo obrigatório.

---

**REGRA**

→ O anexo deve ser **maior ou igual a 0** com **condição avançada .png|.jp*g|.gif**.

**MENSAGEM**

→ São permitidos apenas anexos com as extensões .png, .jpg, .jpeg ou .gif.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra atendida. |
| Um anexo com a extensão .pdf adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .zip adicionado. |  | Regra não atendida. |
| Um anexo com a extensão .zip e um com a extensão .pdf adicionados. |  | Regra não atendida. |
| Um anexo com a extensão .jpg adicionado. |  | Regra atendida. |
| Um anexo com a extensão .pdf, um com a extensão .zip e um com a extensão .jpg adicionados. |  | Regra não atendida. |

#### Exigir um anexo com nome e extensão específicos.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **o nome e extensão igual a** no nome o termo ***server*** e na extensão o termo **.log**.

**MENSAGEM**

→ Somente um anexo com o nome server.log é permitido.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra não atendida. |
| Um anexo server.txt adicionado. |  | Regra não atendida. |
| Um anexo server.log.zip adicionado. |  | Regra não atendida. |
| Um anexo server.zip adicionado. |  | Regra não atendida. |

#### Exigir um anexo com termo específico no início do nome e extensão específica.

---

**REGRAS**

→ O anexo deve ser **igual a 1** com **condição avançada server*.log.**

**MENSAGEM**

→ É obrigatório adicionar um anexo com *server* no início do nome e com a extensão .log.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra atendida. |
| Um anexo server.txt adicionado. |  | Regra não atendida. |
| Um anexo server.log.zip adicionado. |  | Regra não atendida. |
| Um anexo server.zip adicionado. |  | Regra não atendida. |

#### Exigir um anexo com termo específico no início do nome e da extensão. 

---

**REGRA**

→ O anexo deve ser **igual a 1** com **o nome e extensão contendo** no nome o termo ***server*** no **início** e na extensão o termo **.log**no**início**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com *server* no início do nome e com .log no início da extensão.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra atendida. |
| Um anexo server.txt adicionado. |  | Regra não atendida. |
| Um anexo server.log.zip adicionado. |  | Regra atendida. |
| Um anexo server.zip adicionado. |  | Regra não atendida. |

#### Exigir um anexo contendo um termo específico no nome e no início da extensão.

---

**REGRA**

→ O anexo deve ser **igual a 1** com condição avançada ***server*.log***.

**MENSAGEM**

→ É obrigatório adicionar um anexo que contenha *server* no nome e .log no início da extensão.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra atendida. |
| Um anexo server-2018.log adicionado. |  | Regra atendida. |
| Um anexo server.txt adicionado. |  | Regra não atendida. |
| Um anexo server.log.zip adicionado. |  | Regra atendida. |
| Um anexo server.zip adicionado. |  | Regra não atendida. |

#### Proibir anexo com termo específico no nome e deixar livre para anexar ou não outros tipos de anexo.

---

**REGRAS**

→ O anexo deve ser **qualquer um**com**condição avançada !*server*.**

**OU**

→ O anexo deve ser **igual a 0** com **condição avançada** ***server***.
→ O anexo deve ser **qualquer um**.

**MENSAGEM**

→ Não é permitido adicionar um anexo que contenha *server* no nome.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras atendidas. |
| Um anexo server.log adicionado. |  | Regras não atendidas. |
| Um anexo abcserver.log adicionado. |  | Regras não atendidas. |
| Um anexo server-2018.log adicionado. |  | Regras não atendidas. |
| Um anexo server.txt adicionado. |  | Regras não atendidas. |
| Um anexo server.log.zip adicionado. |  | Regras não atendidas. |
| Um anexo server.zip adicionado. |  | Regras não atendidas. |
| Um anexo boleto.pdf adicionado. |  | Regras atendidas. |

#### Proibir anexo com termo específico no nome e exigir um anexo com outro nome.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **condição avançada** **!*server***.

**MENSAGEM**

→ É obrigatório adicionar um anexo que não contenha *server* no nome.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra não atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra não atendida. |
| Um anexo server.txt adicionado. |  | Regra não atendida. |
| Um anexo server.log.zip adicionado. |  | Regra não atendida. |
| Um anexo server.zip adicionado. |  | Regra não atendida. |
| Um anexo boleto.pdf adicionado. |  | Regra atendida. |

#### Exigir anexo com extensão específica somente se tiver um nome específico ou qualquer anexo de outra extensão.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **condição avançada server.log|!*.log**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com o nome *server* e com a extensão .log ou qualquer anexo com a extensão diferente de .log.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra atendida. |
| Um anexo server.txt adicionado. |  | Regra atendida. |
| Um anexo server.log.zip adicionado. |  | Regra atendida. |
| Um anexo server.zip adicionado. |  | Regra atendida. |
| Um anexo boleto.pdf adicionado. |  | Regra atendida. |

#### Exigir anexo com termo específico no início do nome e extensão específica ou qualquer anexo de outra extensão.

---

**REGRA**

→ O anexo deve ser **igual a 1** com **condição avançada server*.log|!*.log**.

**MENSAGEM**

→ É obrigatório adicionar um anexo com *server* no início do nome e com a extensão .log ou qualquer anexo com a extensão diferente de .log.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regra não atendida. |
| Um anexo server.log adicionado. |  | Regra atendida. |
| Um anexo abcserver.log adicionado. |  | Regra não atendida. |
| Um anexo server-2018.log adicionado. |  | Regra não atendida. |
| Um anexo server.txt adicionado. |  | Regra atendida. |
| Um anexo server.log.zip adicionado. |  | Regra atendida. |
| Um anexo server.zip adicionado. |  | Regra atendida. |
| Um anexo boleto.pdf adicionado. |  | Regra atendida. |

#### Proibir anexo com termo específico no nome e permitir qualquer anexo com extensão específica.

---

**REGRAS**

→ O anexo deve ser **igual a 0** com **o nome do arquivo contendo irpf** no **meio**.
→ O anexo deve ser **qualquer um**com**a extensão igual a .zip**.

**MENSAGEM**

→ Não é permitido adicionar um anexo que contenha irpf no nome.
→ É permitido adicionar qualquer anexo com a extensão .zip.

| Resultados |  |  |
| --- | --- | --- |
| Nenhum anexo adicionado. |  | Regras não atendidas. |
| Um anexo declaracao-irpf.pdf adicionado. |  | Regras não atendidas. |
| Um anexo abcserver.log adicionado. |  | Regras não atendidas. |
| Um anexo server-2018.log adicionado. |  | Regras não atendidas. |
| Um anexo server.txt adicionado. |  | Regras não atendidas. |
| Um anexo server.log.zip adicionado. |  | Regras atendidas. |
| Um anexo server.zip adicionado. |  | Regras atendidas. |
| Um anexo irpf.zip adicionado. |  | Regras não atendidas. |

## Dúvidas frequentes

---

Confira aqui algumas dúvidas frequentes sobre anexos em solicitações ou em etapas das solicitações. Clique na dúvida para ver seus detalhes.

[Abrir/fechar todas as dúvidas](#)

####  O que acontece se o anexo não atender à regra?

---

A etapa na qual a solicitação se encontra não pode ser concluída e, consequentemente, a solicitação não pode ser enviada para a próxima etapa.

Todas as regras existentes na etapa precisam ser atendidas e todos os anexos adicionados precisam ser validados por, pelo menos, uma regra para que ela possa ser concluída e a solicitação enviada para a próxima.

####  Quais tipos de arquivos são permitidos como anexo?

---

Existe uma vasta gama de extensões de arquivos que são permitidos como anexos. As principais extensões que são listadas para serem selecionadas na criação de regras para os anexos são detalhadas a seguir. Porém, é possível selecionar outras mais específicas também.

Além disso, se a extensão desejada não for sugerida para seleção, é possível digitá-la e ela será considerada normalmente na regra.

| Principais extensões |  |  |
| --- | --- | --- |
| Documentos | .doc / .docx | Microsoft Word Document |
| .pdf | Portable Document Format |  |
| .txt | Plain Text File |  |
| .rtf | Rich Text Format |  |
| .odt | OpenDocument Text Document |  |
| Planilhas | .xls / .xlsx | Microsoft Excel Spreadsheet |
| .csv | Comma-Separated Values |  |
| .ods | OpenDocument Spreadsheet |  |
| Apresentações | .ppt / .pptx | Microsoft PowerPoint Presentation |
| .odp | OpenDocument Presentation |  |
| Imagens | .jpg / .jpeg | JPEG Image |
| .png | Portable Network Graphics |  |
| .gif | Graphics Interchange Format |  |
| .bmp | Bitmap Image |  |
| .svg | Scalable Vector Graphics |  |
| Áudio | .mp3 | MPEG Audio Layer III |
| .wav | Waveform Audio File Format |  |
| .aac | Advanced Audio Coding |  |
| .flac | Free Lossless Audio Codec |  |
| Vídeo | .mp4 | MPEG-4 Video File |
| .avi | Audio Video Interleave |  |
| .mkv | Matroska Video File |  |
| .mov | Apple QuickTime Movie |  |
| .wmv | Windows Media Video |  |
| Arquivos compactados | .zip | Zip Archive |
| .rar | RAR Archive |  |
| .7z | 7-Zip Archive |  |
| .tar.gz | Compressed Tarball File |  |
| Arquivos executáveis e de sistema | .exe | Windows Executable File |
| .dll | Dynamic Link Library |  |
| .sys | Windows System File |  |
| .sh | Shell Script |  |
| .bat | Batch File |  |
| Código fonte e scripts | .html / .htm | HyperText Markup Language File |
| .css | Cascading Style Sheets File |  |
| .js | JavaScript File |  |
| .py | Python Script |  |
| .java | Java Source Code File |  |
| .c / .cpp | C / C++ Source Code File |  |
| Banco de dados | .sql | Structured Query Language Data File |
| .db / .sqlite | SQLite Database File |  |
| .mdb / .accdb | Microsoft Access Database |  |

####  Qual o tamanho máximo permitido para um anexo na solicitação?

---

Por padrão, o tamanho máximo permitido por anexo (arquivo) é **100MB**. Porém, é possível personalizar esse tamanho nos [Parâmetros gerais](/pages/viewpage.action?pageId=234455426), podendo ser diminuído ou aumentado até o limite de **1GB**. Para isso:

**01.** Acesse o **Painel de controle**.

**02.** No agrupador **Parâmetros técnicos**, clique em **Parâmetros**.

**03.** Em **Tamanho máximo de upload pela web (MB)**, informe o tamanho desejado por arquivo em *megabytes*.

Nota:

Para definir um tamanho maior que o limite de **1GB**, é necessário seguir os passos descritos em [Como aumentar o limite de *upload* da plataforma](/display/fluig/Como+aumentar+o+limite+de+upload+da+plataforma). Porém, ao definir um tamanho máximo maior que o limite (1GB), os recursos podem apresentar instabilidades no momento em que os anexos (arquivos) forem adicionados.

####  Qual a quantidade necessária de anexos para uma etapa da solicitação?

---

Não existe quantidade mínima ou máxima definidas. Isso depende da etapa e do processo em questão.

O questionamento que pode ser feito é: "quais evidências ou documentos são necessários em cada etapa para que a solicitação seja analisada e concluída com sucesso?". Essa resposta vai direcionar qual a quantidade e as regras para os anexos.

EXEMPLO
Na etapa **Pagamento** de um processo de Solicitação de pagamento, a área Financeira somente efetua pagamentos por **boleto bancário**. Nesse caso, o boleto precisa ser anexado pelo solicitante no momento da abertura da solicitação. Sendo assim, a etapa **Solicitar pagamento** (que é a primeira etapa do processo) precisa exigir **pelo menos um anexo**, que é o boleto bancário necessário para que o pagamento seja efetuado quando a solicitação chegar na etapa **Pagamento**.

####  Qual a quantidade máxima permitida de anexos em uma solicitação ou em uma etapa da solicitação?

---

Não há restrição quanto à quantidade máxima de anexos que podem ser adicionados em uma solicitação (considerando todas as etapas) ou em uma única etapa da solicitação.

Porém, ao adicionar **mais de 600 anexos (arquivos)**de uma única vez, é exibida uma mensagem alertando que pode ocorrer instabilidades no recurso. Mesmo assim, os anexos são adicionados desde que não ultrapassem o tamanho máximo permitido por arquivo definido nos [Parâmetros gerais](/pages/viewpage.action?pageId=234455426), que por padrão é **100MB**, podendo ser alterado até o limite de **1GB**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Regrasparaanexosemsolicitações-Falandoderegrasparaanexosemsolicitações..., Plataforma❙Regrasparaanexosemsolicitações-Objetivodasregras, Plataforma❙Regrasparaanexosemsolicitações-Ordemdeverificaçãodasregras, Plataforma❙Regrasparaanexosemsolicitações-Regrageral, Plataforma❙Regrasparaanexosemsolicitações-Regraespecífica, Plataforma❙Regrasparaanexosemsolicitações-Regraavançada, Plataforma❙Regrasparaanexosemsolicitações-Exemplosdeuso, toggleAll-1, Plataforma❙Regrasparaanexosemsolicitações-@1Exigirpelomenosumanexonaetapa., content_@1, Plataforma❙Regrasparaanexosemsolicitações-@2Proibiranexonaetapa., content_@2, Plataforma❙Regrasparaanexosemsolicitações-@3Exigirumanexocomaextensão.zip., content_@3, Plataforma❙Regrasparaanexosemsolicitações-@4Exigirumanexocomaextensão.zipEumanexocomaextensão.pdf., content_@4, Plataforma❙Regrasparaanexosemsolicitações-@5Exigirumanexocomaextensão.zipOU.pdf., content_@5, Plataforma❙Regrasparaanexosemsolicitações-@6Exigirumanexocomaextensão.zipedeixarlivreparaanexarounãooutrostiposdeanexo., content_@6, Plataforma❙Regrasparaanexosemsolicitações-@7Proibiranexocomaextensão.zipedeixarlivreparaanexarounãooutrostiposdeanexo., content_@7, Plataforma❙Regrasparaanexosemsolicitações-@8Exigirumanexocomaextensão.zipeexigirpelomenosoutrotipodeanexo., content_@8, Plataforma❙Regrasparaanexosemsolicitações-@9Exigirumoumaisanexosdotipoimagem., content_@9, Plataforma❙Regrasparaanexosemsolicitações-@10Permitirsomenteanexodotipoimagem,massemtorná-loobrigatório., content_@10, Plataforma❙Regrasparaanexosemsolicitações-@11Exigirumanexocomnomeeextensãoespecíficos., content_@11, Plataforma❙Regrasparaanexosemsolicitações-@12Exigirumanexocomtermoespecíficonoiníciodonomeeextensãoespecífica., content_@12, Plataforma❙Regrasparaanexosemsolicitações-@13Exigirumanexocomtermoespecíficonoiníciodonomeedaextensão., content_@13, Plataforma❙Regrasparaanexosemsolicitações-@14Exigirumanexocontendoumtermoespecíficononomeenoiníciodaextensão., content_@14, Plataforma❙Regrasparaanexosemsolicitações-@15Proibiranexocomtermoespecíficononomeedeixarlivreparaanexarounãooutrostiposdeanexo., content_@15, Plataforma❙Regrasparaanexosemsolicitações-@16Proibiranexocomtermoespecíficononomeeexigirumanexocomoutronome., content_@16, Plataforma❙Regrasparaanexosemsolicitações-@17Exigiranexocomextensãoespecíficasomentesetiverumnomeespecíficoouqualqueranexodeoutraextensão., content_@17, Plataforma❙Regrasparaanexosemsolicitações-@18Exigiranexocomtermoespecíficonoiníciodonomeeextensãoespecíficaouqualqueranexodeoutraextensão., content_@18, Plataforma❙Regrasparaanexosemsolicitações-@19Proibiranexocomtermoespecíficononomeepermitirqualqueranexocomextensãoespecífica., content_@19, Plataforma❙Regrasparaanexosemsolicitações-Dúvidasfrequentes, toggleAll-2, Plataforma❙Regrasparaanexosemsolicitações-@saiba-mais-1Oqueaconteceseoanexonãoatenderàregra?, content_@saiba-mais-1, Plataforma❙Regrasparaanexosemsolicitações-@saiba-mais-2Quaistiposdearquivossãopermitidoscomoanexo?, content_@saiba-mais-2, Plataforma❙Regrasparaanexosemsolicitações-@saiba-mais-3Qualotamanhomáximopermitidoparaumanexonasolicitação?, content_@saiba-mais-3, Plataforma❙Regrasparaanexosemsolicitações-@saiba-mais-4Qualaquantidadenecessáriadeanexosparaumaetapadasolicitação?, content_@saiba-mais-4, Plataforma❙Regrasparaanexosemsolicitações-@saiba-mais-5Qualaquantidademáximapermitidadeanexosemumasolicitaçãoouemumaetapadasolicitação?, content_@saiba-mais-5 -->
