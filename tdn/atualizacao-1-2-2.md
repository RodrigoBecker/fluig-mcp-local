---
title: "Atualização 1.2.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=128681975"
scraped_at: "2026-03-09T03:21:04.199Z"
depth: 2
anchors: 4
child_links: 34
---

# Atualização 1.2.2

Confira abaixo as novidades na atualização 1.2.2 do Fluig:

# ECM

**Suporte a HTTPS nos documentos externos**

Foi evoluída a chamada de URLs pela publicação de documento externo para suportar links HTTPs. Um caso de utilização é com o Fluig Analytics, onde as URLs para embutir relatórios utilizam HTTPs. Para saber mais de como trazer relatórios para o seu Fluig e suas restrições consulte a documentação de customização: [Utilização de URLs para renderizar dentro do Fluig](/pages/viewpage.action?pageId=127959306)

![](https://lh6.googleusercontent.com/k6NJQxLlKs8fhSsrdG8F6UroCpiMj8mTUROvZl9P6yKWtEaoqJsofYaAmYfQfFH01nrj5mMZ8Kc_3Lt3UvOjaTwA__Oo3JDFQw1pbPjQwWc5FhbuX_zeN49pI0OM-g)

****

**Campo data de criação padronizado**

Foi equalizada a informação de data de criação que é exibida na navegação de documentos Ao navegar e exibir as propriedades do documento é exibida a mesma data.

**Segurança no Checkout de Documentos**

Mais segurança no momento de realizar um checkout de documento, agora a opção de edição de conteúdo (Webdav) fica desabilitada na navegação de documentos até que seja realizado um checkin o documento. Para editar o documento antes de realizar o Checkin utilize o documento publicado na pasta "Meus Documentos"

# Fluig Studio

**Conexão com servidor Fluig no TOTVS Developer Studio**

Com a atualização do TOTVS Developer Studio foi necessário evoluir o plugin do Fluig para suportar essa alteração. Será necessário realizar a função de atualização dentro do próprio Studio para receber essa novidade.

****

**Salvar dados por eventos em Tabelas de Banco de Dados**

Em eventos de workflow (hAPI.setCardValue) mudanças de valores de formulários agora são salvos corretamente para futura consulta.

**Consulta de processos cancelados**

Os processos cancelados pelo usuário são agora exibidos corretamente na consulta de solicitações na aba “Processos Cancelados”.

![](/download/attachments/128681975/image2014-3-25%2010%3A56%3A39.png?version=1&modificationDate=1395755687000&api=v2)

**Desabilitar campos filhos em formulário**

Em um formulário Pai x Filho que contêm check boxes foi evoluído o mecanismo de desabilitar campos (método enableFields) para que seja respeitada a operação selecionada.

![](/download/attachments/128681975/image2014-3-25%2010%3A59%3A58.png?version=1&modificationDate=1395755886000&api=v2)

# Social

**Listagem de informações administrativas**

As funcionalidades sociais que utilizam tabela como recurso para exibir informações aos usuários administradores, como por exemplo, administração de comunidade e denúncias, foi alterada para serem exibidas corretamente em diferentes situações.

**Publicações de comunidades inativas**

Foram feitas evoluções no acesso de publicações em comunidades que forem inativadas. Agora ao inativar as publicações dessa comunidade são ocultas dos usuários, bem como resultados na busca.

**Segurança de comunidades na busca**

Posts feitos em comunidades de conteúdo privado agora só serão acessíveis por membros dessa comunidade, seja na visualização da página da comunidade ou através da funcionalidade de busca.

# Arquitetura

**Tratamento de usuários inativos**

Foram feitas melhorias na forma que usuários inativos são tratados. Em algumas situações trazer um usuário inativo para ativo novamente não era executada a ativação corretamente.

**Mensagem de inicialização do servidor de aplicação**

Durante as manutenções do produto é necessário reiniciar o servidor de aplicação do Fluig. Nesse momento o Fluig fica indisponível para utilização. Agora durante a inicialização mostrará uma mensagem solicitando o usuário a tentar em alguns instantes, impedindo o acesso ao Fluig antes dele estar pronto.

**Agilidade na busca por administradores**

Para funções na plataforma que consultam os usuários Administradores foi realizado um  aprimoramento para retornar mais rapidamente os resultados.


<!-- anchors: Atualização1.2.2-ECM, Atualização1.2.2-FluigStudio, Atualização1.2.2-Social, Atualização1.2.2-Arquitetura -->
