---
title: "Plataforma ❙ Permissões e restrições em catálogos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235575851"
scraped_at: "2026-03-09T04:41:58.047Z"
depth: 3
anchors: 4
child_links: 46
---

# Plataforma ❙ Permissões e restrições em catálogos

# Índice

## Falando de permissões e restrições em catálogos...

É possível definir níveis de permissão e restrição de acesso aos itens dos catálogos de treinamentos/trilhas e disciplinas/turmas disponíveis.

As permissões e restrições são definidas pelo usuário administrador ou por usuários que possuem permissão para alterar os itens do catálogo. Elas podem ser atribuídas a usuários específicos, a grupos de usuários e a turmas e disciplinas. O usuário administrador da plataforma possui todas as permissões disponíveis, inclusive para ignorar as permissões e/ou restrições nos catálogos de disciplinas e turmas, trilhas e treinamentos e tópicos e questões.

### Permissões

---

A seguir são apresentados os níveis de permissão, do mais baixo para o mais alto, que podem ser definidos para cada item dos catálogos de treinamentos/trilhas, disciplinas/turmas e tópicos/questões:

- Leitura: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode apenas visualizar o item no catálogo, não podendo realizar nenhuma ação sobre ele;

- Execução: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode visualizar e se matricular no item do catálogo, podendo executar todo o seu conteúdo. Esse nível de permissão é aplicado apenas a itens do catálogo que permitem que usuários se matriculem neles, ou seja, trilhas, treinamentos e turmas;

- Escrita: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode criar novos itens dentro dos itens do catálogo que permitem a criação de itens filhos. Essa permissão é aplicada a pastas, disciplinas e turmas, não sendo aplicada a tópicos que, mesmo permitindo a criação de itens filhos, não recebem permissão ou restrição específicas, pois assumem as definidas para a turma;

- Modificação: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode modificar o item, como suas propriedades, seus conteúdos e avaliações - caso possua - bem como suas permissões e restrições, além de criar novos itens para ele caso permita itens filhos.

- Exclusão: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode, além de efetuar todas as outras ações anteriores, excluir o item do catálogo;

- Completo: quando definido esse tipo de permissão, o usuário ou grupo de usuários pode efetuar todas as ações anteriores no item do catálogo.

### Restrições

---

A seguir são apresentados os níveis de restrição, do mais baixo para o mais alto, que podem ser definidos para cada item dos catálogos de treinamentos/trilhas, disciplinas/turmas e tópicos/questões. As restrições seguem o caminho inverso das permissões, ou seja, o usuário pode executar todas as ações de nível menor (anteriores) do que o nível da restrição, isso se ele possuir as permissões de níveis anteriores.

**Exemplo:** se um usuário possui permissão do tipo Completa e restrição do tipo Modificação em um determinado item, ele pode executar todas as ações anteriores à Modificação (de menor nível), ou seja, pode visualizar, executar e escrever no item, porém, não pode modificá-lo e nem excluí-lo.

- Leitura: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode visualizar o item no catálogo;

- Execução: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode se matricular no item do catálogo;

- Escrita: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode adicionar novos itens em itens que permitem filhos;

- Modificação: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode modificar o item do catálogo;

- Exclusão: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode excluir o item do catálogo;

- Completo: quando definido esse tipo de restrição, o usuário ou grupo de usuários não pode efetuar nenhuma ação sobre o item do catálogo.

Também é possível utilizar o conceito de herança de permissões nos itens dos catálogos de treinamentos/trilhas, disciplinas/turmas e tópicos/questões. Ao definir que um item deve herdar as permissões, todas as permissões e restrições aplicadas ao seu item pai serão aplicadas a ele.

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: Plataforma❙Permissõeserestriçõesemcatálogos-Índice, Plataforma❙Permissõeserestriçõesemcatálogos-Falandodepermissõeserestriçõesemcatálogos..., Plataforma❙Permissõeserestriçõesemcatálogos-Permissões, Plataforma❙Permissõeserestriçõesemcatálogos-Restrições -->
