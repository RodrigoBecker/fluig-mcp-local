---
title: "ARQ - Sistema acusa que existem aplicativos JAR em aberto e a plataforma não conclui a atualização"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258835192"
scraped_at: "2026-03-09T03:29:30.552Z"
depth: 2
anchors: 11
child_links: 45
---

# ARQ - Sistema acusa que existem aplicativos JAR em aberto e a plataforma não conclui a atualização

# Índice

# Plataforma

**Versão:** 1.6 ou superior

# Ocorrência

Ao tentar atualizar a plataforma, o sistema acusa que existem aplicativos abertos do tipo JAR e não consigo finalizar a atualização.

# Causa

O erro com os arquivos .jar acontece porque eles são arquivos temporários do TOTVS Fluig Plataforma criados enquanto o sistema está em execução.

Toda vez que a plataforma é reiniciada, são apagados os arquivos temporários em <instalação_fluig>\appserver\standalone\tmp (a partir da **2.0**) ou <instalação_fluig>\appserver\domain\servers\<fluig server>\tmp (até a **1.8.2**) para que após a inicialização do serviço a pasta seja criada novamente para armazenar todos os arquivos temporários que ele utilizará.

O que acontece é que alguns arquivos ficam com o nome muito grande, maior do que o sistema operacional consegue gerenciar. Por isso, quando o sistema tenta apagá-los, o SO informa que não consegue.

# Solução

Para contornar essa situação você pode renomear esses arquivos para poder apagá-los em seguida. Siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Pare os serviços da plataforma;

 - Acesse a pasta **<instalação_fluig>****\appserver\standalone** (a partir da **2.0**) ou **<instalação_fluig>\appserver\domain\servers\<fluig server>** (até a **1.8.2**)**;**

 - Remova a pasta **tmp**;

![](/download/attachments/258835192/image2016-11-18%208%3A55%3A41.png?version=1&modificationDate=1479470197000&api=v2)

**Figura 1 - Apagar a pasta temporária**

 - Durante a remoção, se o sistema operacional não conseguir gerenciar o arquivo pelo tamanho do seu nome, ele exibirá a mensagem:

"Os nomes dos arquivos de origem são maiores do que o tamanho máximo permitido pelo sistema de arquivos. Tente mover um local que tenha um nome de caminho menor ou renomeie com nomes menores antes de tentar a operação".

 - Marque a opção **Fazer isso para todos os itens atuais** e em seguida clique em **Ignorar**;![](/download/attachments/258835192/image2016-11-18%209%3A5%3A54.png?version=1&modificationDate=1479470810000&api=v2)

**Figura 2 - Ignorar exclusão de arquivos com nome muito grande**

 - Acesse a pasta **\tmp\vfs\deployment**;

 - Se o seu ambiente tiver muitos arquivos temporários, poderão existir mais pastas dentro dessa estrutura. No exemplo abaixo existe apenas uma;

![](/download/attachments/258835192/image2016-11-18%208%3A56%3A52.png?version=1&modificationDate=1479470268000&api=v2)

**Figura 3 - Pastas temporárias**

****

 - Acesse cada pasta, selecione todos os arquivos e pressione F2 para renomeá-los;

 - Após fazer isso em todas as pastas volte para **<instalação_fluig>****\appserver\standalone** (a partir da **2.0**) ou **<instalação_fluig>\appserver\domain\servers\<fluig server>** (até a **1.8.2**) e apague a pasta **tmp**.

![](/download/attachments/258835192/image2016-11-18%208%3A59%3A8.png?version=1&modificationDate=1479470404000&api=v2)

**Figura 4 - Renomear arquivos temporários**

 - Em seguida você já pode executar a atualização da plataforma. O sistema não terá mais problemas com os arquivos de nome muito grande.


<!-- anchors: ARQSistemaacusaqueexistemaplicativosJARemabertoeaplataformanãoconcluiaatualização-Índice, ARQSistemaacusaqueexistemaplicativosJARemabertoeaplataformanãoconcluiaatualização-Plataforma, ARQSistemaacusaqueexistemaplicativosJARemabertoeaplataformanãoconcluiaatualização-Ocorrência, ARQSistemaacusaqueexistemaplicativosJARemabertoeaplataformanãoconcluiaatualização-Causa, ARQSistemaacusaqueexistemaplicativosJARemabertoeaplataformanãoconcluiaatualização-Solução, samples, samples-1, samples-2, samples-3, samples-4, samples-5 -->
