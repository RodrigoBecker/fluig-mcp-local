---
title: "SOC - Como incluir permissão de gravação na galeria da comunidade para usuários específicos?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=253493391"
scraped_at: "2026-03-09T04:47:39.670Z"
depth: 3
anchors: 9
child_links: 38
---

# SOC - Como incluir permissão de gravação na galeria da comunidade para usuários específicos?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Gostaria de adicionar a permissão para que um usuário comum possa administrar a galeria de imagens na comunidade, mas apenas para um determinado usuário; os demais não devem poder criar galerias ou inserir imagens.

# Solução

Para permitir que determinados usuários criem galerias na comunidade, sem que essa permissão seja aplicada aos demais membros, você deve configurar as permissões de segurança diretamente na pasta em que as imagens da comunidade são armazenadas.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - O primeiro passo é identificar a pasta que em as imagens da comunidade são salvas. Acesse a comunidade com um administrador e clique no botão **Administrar** → **Editar comunidade**.

![](/download/attachments/253493391/editar%20comunidade.png?version=1&modificationDate=1633353178410&api=v2)

 - Na tela de administração da comunidade, desça a página até a área de **Conteúdo e segurança**.

 - Na coluna Pasta, será exibido o caminho da pasta onde as imagens da comunidade são armazenadas. Na imagem abaixo, o caminho seria Raiz/Comunidades/Espanhol Básico.

![](/download/attachments/253493391/Captura%20de%20Tela%2013_09%20002.png?version=1&modificationDate=1473788653000&api=v2)

**No exemplo acima, os membros da comunidade possuem permissão de Leitura, ou seja, apenas podem visualizar as imagens das galerias.**

 - Acesse o menu lateral **Documentos** e navegue até o diretório onde encontra-se a pasta com as imagens da comunidade.

 - No final da linha, clique sobre o menu **Mais opções** → **Propriedades**

![](/download/attachments/253493391/Captura%20de%20Tela%2013_09%20003.png?version=1&modificationDate=1473788965000&api=v2)

 - Na aba Segurança, adicione os usuários que deverão receber permissão para inclusão de imagens nas galerias. Para isso clique em **Colaborador**, selecione o usuário, e defina o nível de segurança para, no mínimo, **G** (Gravação).

 - Uma vez finalizadas as configurações, clique em **Confirmar**.

![](/download/attachments/253493391/Captura%20de%20Tela%2013_09%20004.png?version=2&modificationDate=1473789392000&api=v2)

**No exemplo acima, a usuária Anna Smyth, que é membro da comunidade Espanhol Básico (mas não é moderadora) agora poderá incluir imagens nas galerias desta comunidade.**


<!-- anchors: SOCComoincluirpermissãodegravaçãonagaleriadacomunidadeparausuáriosespecíficos?-Índice, SOCComoincluirpermissãodegravaçãonagaleriadacomunidadeparausuáriosespecíficos?-Plataforma, SOCComoincluirpermissãodegravaçãonagaleriadacomunidadeparausuáriosespecíficos?-Ocorrência, SOCComoincluirpermissãodegravaçãonagaleriadacomunidadeparausuáriosespecíficos?-Solução, samples, samples-1, samples-872616688, samples-3, samples-872616690 -->
