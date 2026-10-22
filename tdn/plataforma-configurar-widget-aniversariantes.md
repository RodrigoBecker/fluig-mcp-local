---
title: "Plataforma ❙ Configurar widget Aniversariantes"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235600036"
scraped_at: "2026-03-09T04:21:22.530Z"
depth: 3
anchors: 2
child_links: 90
---

# Plataforma ❙ Configurar widget Aniversariantes

# Falando de configurar widget Aniversariantes...

---

A configuração do *widget* Aniversariantes permite definir o local de onde serão exibidos os aniversariantes e as configurações necessárias para a integração, bem como se deve ou não ser exibido no aplicativo móvel.

Por padrão o *widget* apresenta dois aniversariantes e carrega mais dois cada vez que o botão **Carregar mais** é acionado. Apenas aniversariantes do mês atual são exibidos.

Esse *widget* pode ser visualizado no aplicativo móvel da plataforma.

Importante!

Para que esse *widget* seja exibido na lista de *widgets* disponíveis para páginas, primeiramente é necessário obter o artefato Kit Intranet do diretório [Git](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse). Depois, é necessário importar o artefato em [Importar e exportar páginas](/pages/viewpage.action?pageId=234455771). Após efetuados esses procedimentos, o *widget* estará disponível para utilização.

Mais informações podem ser obtidas em [Kit Intranet](https://tdn.totvs.com/x/nbBICw).

![](/download/attachments/235600036/w_aniversariantes_rm.png?version=3&modificationDate=1750181303353&api=v2)

## Configurar widget Aniversariantes

---

**01.** Depois de incluir o *widget* na página em edição, defina as configurações desejadas para ele.

As informações solicitadas são:

**Habilitar no aplicativo mobile**Quando acionado, habilita/desabilita a exibição do *widget* no aplicativo móvel. Esse ícone está localizado no canto superior direito do *widget*, ao lado de **Editar permissão**.

**Este widget se integra com**Tipo de integração a partir do qual o widget buscará os aniversariantes para exibição. As opções disponíveis são:

- **Um formulário**: quando selecionada, determina que serão exibidos os aniversariantes provenientes de um formulário integrado ao *widget*. Mais informações podem ser obtidas em [Integrando *widget* com formulários/*datasets*](https://tdn.totvs.com/pages/releaseview.action?pageId=185739337);

- **RM**: quando selecionada, determina que serão exibidos os aniversariantes provenientes do TOTVS RM.

**Link do servidor**Endereço IP e porta do serviço TBC do TOTVS RM – no formato [http://host:porta](http://hostporta) – do qual os aniversariantes serão exibidos. Esse campo somente é apresentado quando a opção de integração escolhida for "RM".

**Login**Login de acesso ao serviço no TOTVS RM. Esse campo somente é apresentado quando a opção de integração escolhida for "RM".

**Senha**Senha de acesso ao serviço no TOTVS RM. Esse campo somente é apresentado quando a opção de integração escolhida for "RM".

**02.** Clique em **Salvar**.

Para que as alterações realizadas na configuração do *widget* sejam apresentadas aos usuários, é necessário publicar a página na qual ele está localizado. Mais informações sobre a publicação de páginas podem ser obtidas em [Adicionar página](/pages/viewpage.action?pageId=234455933) e [Editar página](/pages/viewpage.action?pageId=234455936).

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙ConfigurarwidgetAniversariantes-FalandodeconfigurarwidgetAniversariantes..., Plataforma❙ConfigurarwidgetAniversariantes-ConfigurarwidgetAniversariantes -->
