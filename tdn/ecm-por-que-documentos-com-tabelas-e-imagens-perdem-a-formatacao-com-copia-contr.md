---
title: "ECM - Por que documentos com tabelas e imagens perdem a formatação com cópia controlada?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268796914"
scraped_at: "2026-03-09T03:32:40.992Z"
depth: 2
anchors: 5
child_links: 40
---

# ECM - Por que documentos com tabelas e imagens perdem a formatação com cópia controlada?

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Ao fazer a impressão de cópia controlada de um documento as tabelas e imagens que ele possui ficam desconfiguradas. Durante a visualização elas aparecem normalmente.

![](/download/attachments/268796914/image2016-11-4%2016%3A56%3A27.png?version=1&modificationDate=1478289540000&api=v2)

**Figura 1 - Documento desconfigurado na impressão de cópia controlada**

# Causa

A plataforma utiliza por padrão OpenOffice como ferramenta para a impressão de cópia controlada. Ele já está na instalação do produto padrão. 

O OpenOffice não é totalmente compatível com os documentos Microsoft Office, portanto é possível que alguns componentes ou formatação do documento não sejam exibidas corretamente no próprio OpenOffice e na impressão de cópia controlada. 

Para confirmar isso acesse o diretório **[diretório_instalação_plataforma]\OpenOffice\program. **Se o problema de formatação acontece com um arquivo **.DOC** ou **.DOCX**, execute o aplicativo **swriter.exe**. Se ocorre com um **.XLS** ou **.XLSX** execute o aplicativo **scalc.exe.**

Abra o documento com problema no OpenOffice e verifique como fica a formatação. Se ficar desconfigurada isso significa que o OpenOffice é que não está conseguindo manter o original e consequentemente a impressão também ficará assim.

![](/download/attachments/268796914/image2016-11-4%2016%3A57%3A4.png?version=1&modificationDate=1478289540000&api=v2)

**Figura 2 - Aplicativos do OpenOffice na instalação da plataforma**

****

![](/download/attachments/268796914/image2016-11-4%2016%3A57%3A40.png?version=1&modificationDate=1478289540000&api=v2)

**Figura 3 - Visualização do documento no OpenOffice**

****

****

**Figura 4 - Visualização do documento no Microsoft Office**

# Solução

A impressão pode feita ser utilizando o Microsoft Office no lugar do OpenOffice. Basta que você instale no servidor da plataforma o pacote do Microsoft Office e execute toda a configuração descrita na documentação [Configuração de serviços de componentes](/pages/viewpage.action?pageId=267788666).

A plataforma passará a utilizar o MS Office assim que ele for instalado no servidor. Se algum dia ele for desinstalado, a plataforma voltará a utilizar o OpenOffice.

Importante

Confira a [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade) para saber quais versões do MS Office são homologadas.


<!-- anchors: ECMPorquedocumentoscomtabelaseimagensperdemaformataçãocomcópiacontrolada?-Índice, ECMPorquedocumentoscomtabelaseimagensperdemaformataçãocomcópiacontrolada?-Plataforma, ECMPorquedocumentoscomtabelaseimagensperdemaformataçãocomcópiacontrolada?-Ocorrência, ECMPorquedocumentoscomtabelaseimagensperdemaformataçãocomcópiacontrolada?-Causa, ECMPorquedocumentoscomtabelaseimagensperdemaformataçãocomcópiacontrolada?-Solução -->
