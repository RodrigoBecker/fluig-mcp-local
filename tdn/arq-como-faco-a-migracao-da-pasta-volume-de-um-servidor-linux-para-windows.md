---
title: "ARQ - Como faço a migração da pasta 'volume' de um servidor Linux para Windows?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269067666"
scraped_at: "2026-03-09T04:44:28.344Z"
depth: 3
anchors: 11
child_links: 41
---

# ARQ - Como faço a migração da pasta 'volume' de um servidor Linux para Windows?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

# Ocorrência

Nossa plataforma está instalada em sistema operacional Linux e estamos migrando para ambiente Windows. Precisamos apontar a pasta "Volume" para o servidor com Windows portanto, qual é o procedimento que devemos realizar?

# Solução

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Criar uma nova pasta de "Volume" no servidor com Windows.

 - Acesse a plataforma do Servidor Windows logando com o usuário 'wcmadmin'.

![](/download/attachments/269067666/1.JPG?version=2&modificationDate=1508105523000&api=v2)

 - Navegue até o Painel de Controle → Gerais → Volumes.

![](/download/attachments/269067666/5.JPG?version=2&modificationDate=1553790226000&api=v2)

 - Selecione a opção *Default* e clique em Editar.

![](/download/attachments/269067666/6.JPG?version=1&modificationDate=1508104803000&api=v2)

 - Altere o campo **Diretório físico** para o novo diretório da pasta 'Volume' do servidor Windows e clique em **Salvar**.

![](/download/attachments/269067666/7.JPG?version=1&modificationDate=1508104863000&api=v2)

 - Copie as sub-pastas do 'Volume' contido no servidor Linux para a nova pasta de 'Volume' criada no servidor Windows.


<!-- anchors: ARQComofaçoamigraçãodapasta'volume'deumservidorLinuxparaWindows?-Índice, ARQComofaçoamigraçãodapasta'volume'deumservidorLinuxparaWindows?-Plataforma, ARQComofaçoamigraçãodapasta'volume'deumservidorLinuxparaWindows?-Ocorrência, ARQComofaçoamigraçãodapasta'volume'deumservidorLinuxparaWindows?-Solução, Sample, Sample-1, Sample-2, Sample-3, Sample-4, Sample-5, Sample-6 -->
