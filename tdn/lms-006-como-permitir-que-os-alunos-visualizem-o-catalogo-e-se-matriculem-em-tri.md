---
title: "LMS 006 - Como permitir que os alunos visualizem o catálogo e se matriculem em trilhas e treinamentos?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=211064180"
scraped_at: "2026-03-09T03:35:48.316Z"
depth: 2
anchors: 11
child_links: 75
---

# LMS 006 - Como permitir que os alunos visualizem o catálogo e se matriculem em trilhas e treinamentos?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Card:** LMS

# Ocorrência

Como liberar o catálogo para todos os usuários e também permitir que eles visualizem e se matriculem nos treinamentos e trilhas?

# Solução

Para permitir tais ações, é necessário liberar algumas permissões. Para isso, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Faça o *login* com um usuário administrador e, no menu principal, acesse o **Painel de Controle**.

 - No agrupador **Pessoas**, acione **Permissões**.

![](/download/attachments/211064180/01.PNG?version=5&modificationDate=1553538344457&api=v2)

 - Selecione a categoria de permissão **Papel** e acione **Próxima etapa**.

![](/download/attachments/211064180/02.PNG?version=5&modificationDate=1600284962067&api=v2)

 - No quadro Papéis, selecione o papel **user** e acione **Próxima etapa**.

![](/download/attachments/211064180/03.PNG?version=5&modificationDate=1600284962357&api=v2)

 - Acione **Adicionar** e localize e selecione os seguintes recursos:**Trilhas e treinamentos**, **Aprendizado - Catálogo de trilhas e treinamentos** e **Aprendizado - Matrículas**.****

![](/download/attachments/211064180/04.png?version=4&modificationDate=1553538531847&api=v2)

 - Ative as permissões de cada recurso conforme descrito abaixo:

   [Trilhas e treinamentos](https://tdn.totvs.com/pages/viewpage.action?pageId=274850166#Plataforma%E2%9D%99Recursosdeaprendizadoeavalia%C3%A7%C3%B5es-Trilhasetreinamentos): opção **Visualizar página** deve ser ativada.

   - [Aprendizado - Catálogo de trilhas e treinamentos](https://tdn.totvs.com/pages/viewpage.action?pageId=274850166#Plataforma%E2%9D%99Recursosdeaprendizadoeavalia%C3%A7%C3%B5es-Trilhasetreinamentos): opção **Ler** deve ser ativada.

   - A opção **Cancelar matrícula em treinamento/trilhas** do recurso [Aprendizado - Matrículas](https://tdn.totvs.com/pages/viewpage.action?pageId=274850166#Plataforma%E2%9D%99Recursosdeaprendizadoeavalia%C3%A7%C3%B5es-Matr%C3%ADculas) permite que o aluno cancele sua própria matrícula nos itens do catálogo. Se desejado, ativar essa opção também.

     Atualizações anteriores à 1.6.1 

      Obrigatoriamente é necessário ativar a opção **Matricular em treinamento/trilhas**do recurso **Aprendizado - Matrículas**.

 Depois de ativar todas as opções, acione **Aplicar permissões**.

![](/download/attachments/211064180/05.png?version=6&modificationDate=1553538567463&api=v2)

 - Agora, é necessário que o catálogo e todas as trilhas e treinamentos tenham a permissão de **Execução** definida para **Todos**. Para isso, no menu principal posicione o *mouse* sobre **Aprendizado** e, em seguida, clique em **Trilhas e treinamentos** e edite a segurança da pasta raiz do catálogo.Você pode conferir o passo a passo da edição da pasta raiz do catálogo em [Editar catálogo](https://tdn.totvs.com/pages/viewpage.action?pageId=233765960#Plataforma%E2%9D%99Trilhasetreinamentos-Editarcat%C3%A1logo).

  **Entenda:**

Todas as trilhas e treinamentos também precisam estar com essa mesma permissão configurada. Para isso, existem duas opções:

   - definir essa mesma permissão (**Execução** para **Todos**) na segurança do cadastro de cada item (trilha ou treinamento);

   - ou definir na segurança do cadastro de cada item abaixo da pasta raiz que ele deve herdar as permissões definidas para ela.

Mais informações e o passo a passo para definir essas permissões podem ser obtidas em [Pasta](/pages/viewpage.action?pageId=233766420), [Treinamento](/pages/viewpage.action?pageId=233766426), [Trilha](/pages/viewpage.action?pageId=233766429) e [*Link*](https://tdn.totvs.com/display/HF/Link#Link-seguranca).

![](/download/attachments/211064180/06.PNG?version=3&modificationDate=1600285115407&api=v2)

**Saiba mais...**

Confira as opções de permissão dos demais catálogos e recursos de aprendizado em [Recursos de aprendizado e avaliações](/pages/viewpage.action?pageId=274850166).

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: LMS006Comopermitirqueosalunosvisualizemocatálogoesematriculememtrilhasetreinamentos?-Índice, LMS006Comopermitirqueosalunosvisualizemocatálogoesematriculememtrilhasetreinamentos?-Plataforma, LMS006Comopermitirqueosalunosvisualizemocatálogoesematriculememtrilhasetreinamentos?-Ocorrência, LMS006Comopermitirqueosalunosvisualizemocatálogoesematriculememtrilhasetreinamentos?-Solução, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6 -->
