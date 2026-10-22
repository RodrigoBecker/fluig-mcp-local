---
title: "Plataforma ❙ Importar e exportar páginas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455771"
scraped_at: "2026-03-09T04:53:24.245Z"
depth: 3
anchors: 4
child_links: 57
---

# Plataforma ❙ Importar e exportar páginas

# Falando de importar e exportar páginas...

---

Por meio deste recurso é possível exportar uma página ou um conjunto de páginas que podem ser, posteriormente importadas no TOTVS Fluig Plataforma ou exportadas de um [servidor](https://tdn.totvs.com/x/jYtJF)para o outro sem a necessidade de baixar arquivos. 

Com esse recurso é possível, por exemplo, a estruturação de uma página - com *widgets*, segurança, *layout* entre outros - e a realização de testes, verificando as funcionalidades e a navegação em um ambiente de testes. Posteriormente, exportando toda a estrutura do ambiente de testes, é possível replicá-la no ambiente de produção por meio da importação, o que diminui o esforço e, consequentemente, o custo, visto que não será necessário replicar tudo o que foi criado no ambiente de testes manualmente para o ambiente oficial.

Para exportação, são apresentadas somente as páginas editáveis em uma estrutura no formato de árvore na qual elas podem ser assinaladas. Ao assinalar uma página filha, a página pai é automaticamente assinalada também, garantindo assim, que seja mantida a estrutura original na exportação. O mesmo ocorre ao assinalar uma página pai, suas filhas também serão assinaladas automaticamente e exportadas.

Sempre será exportada a última versão da página selecionada.

Para a exportação automática de páginas entre servidores é necessário criar anteriormente uma chave Oauth e um usuário Aplicativo no servidor de destino, para que seja possível realizar o cadastro deste servidor na plataforma. Saiba mais em [Servidores.](https://tdn.totvs.com/x/jYtJF)

Ao realizar a importação de uma ou mais páginas, as mesmas são publicadas automaticamente logo após a importação, ou seja, já estarão visíveis aos demais usuários.

Importante!

Uma página somente pode ser exportada e importada entre ambientes do TOTVS Fluig que estejam na mesma atualização.

![](/download/attachments/234455771/export_import.png?version=3&modificationDate=1749146926077&api=v2)

## Exportar páginas via download

---

**01.** No menu principal, clique em ![](/download/attachments/234455771/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1749147058733&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Personalização**.

**03**. Clique em ![](/download/attachments/234455771/%C3%ADcone-importar-exportar-p%C3%A1ginas.png?version=1&modificationDate=1749145977170&api=v2) **Importar e exportar páginas**.

**04.** Na estrutura apresentada, assinale as páginas que serão exportadas.

São apresentadas apenas as páginas editáveis. Páginas pais e filhas são sempre exportadas juntas para garantir que a estrutura original seja mantida, não é possível exportar apenas uma página pai ou apenas uma página filha.

Imagens do ECM adicionadas em páginas a partir do *widget* Editor de conteúdo não serão exportadas.

**05.** Clique em** Exportar páginas.**

**06.** Selecione **Download das páginas/artefatos.**

**07.** Clique em **Exportar**.

Será gerado um arquivo compactado contendo os itens solicitados na exportação.

## Importar páginas

---

**01.** No menu principal, clique em ![](/download/attachments/234455771/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1749147058733&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Personalização**.

**03**. Clique em ![](/download/attachments/234455771/%C3%ADcone-importar-exportar-p%C3%A1ginas.png?version=1&modificationDate=1749145977170&api=v2) **Importar e exportar páginas**.

**04.** Clique em **Importar**.

**05.** Selecione o arquivo compactado que contém as páginas a serem importadas.

**06.** Clique em **Confirmar Importação**.

Importante!

O procedimento de importar páginas é necessário apenas para exportações via *download*.

## Exportar páginas via servidores

---

![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** No menu principal, clique em ![](/download/attachments/234455771/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1749147058733&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Personalização**.

**03**. Clique em ![](/download/attachments/234455771/%C3%ADcone-importar-exportar-p%C3%A1ginas.png?version=1&modificationDate=1749145977170&api=v2) **Importar e exportar páginas**.

**04.** Na estrutura apresentada, assinale as páginas que serão exportadas.

São apresentadas apenas as páginas editáveis. Páginas pais e filhas são sempre exportadas juntas para garantir que a estrutura original seja mantida e não é possível exportá-las de forma independente.

Imagens do ECM adicionadas em páginas a partir do *widget* Editor de conteúdo não serão exportadas.

**05.** Clique em **Exportar páginas.**

**06.** Selecione **Enviar para outro Servidor.**

**07.**Selecione o servidor desejado.

Os servidores precisam ser previamente cadastrados na plataforma para aparecerem na lista. Para saber mais sobre o cadastro de servidores confira a [documentação](https://tdn.totvs.com/x/jYtJF).

**08.** Clique em**Exportar.**

Ao clicar em **Exportar**, as páginas selecionadas anteriormente são enviadas para publicação no servidor de destino.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Importareexportarpáginas-Falandodeimportareexportarpáginas..., Plataforma❙Importareexportarpáginas-Exportarpáginasviadownload, Plataforma❙Importareexportarpáginas-Importarpáginas, Plataforma❙Importareexportarpáginas-Exportarpáginasviaservidores -->
