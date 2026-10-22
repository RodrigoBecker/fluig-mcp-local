---
title: "BPM 028 - Por que a imagem do diagrama do processo não foi atualizada ao exportar uma nova versão?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235326727"
scraped_at: "2026-03-09T03:53:14.657Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 028 - Por que a imagem do diagrama do processo não foi atualizada ao exportar uma nova versão?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** todas

# Ocorrência

Exportamos uma nova versão do processo mas a imagem do diagrama não foi atualizada. Verificamos que a solicitação está seguindo o novo fluxo, somente a imagem ficou desatualizada.

Imagem do diagrama exibida na inicialização de uma nova solicitação:

![](/download/attachments/235326727/image2016-4-7%2018%3A16%3A48.png?version=1&modificationDate=1460060735000&api=v2)

Imagem do diagrama exibida no editor de processos:

![](/download/attachments/235326727/image2016-4-7%2018%3A18%3A33.png?version=1&modificationDate=1460060736000&api=v2)

# Causa

Acreditamos que este problema ocorreu devido ao *lock* de arquivos na *workspace* utilizada. Apenas para entendimento, quando é feita a exportação de um processo para o fluig, são criados alguns arquivos na pasta *.resources* no diretório [workspace] \ [projeto] \ workflow.

A cada nova exportação, o plugin do fluig recria estes arquivos para enviá-los atualizados ao servidor. Já tivemos relatos de problemas onde ocorreu bloqueio dos arquivos (*lock*) pelo próprio sistema operacional ou aplicações terceiras, não permitindo a atualização. Assim, o arquivo desatualizado é enviado ao servidor fluig, gerando inconsistências semelhantes à esta que foi reportada acima.

# Solução

Para solucionar esta inconsistência, acesse a pasta*.resources* e busque por todos os arquivos (.xml, .png, .svg, etc.) cujo o nome seja o código do processo e faça a remoção.

Por fim, faça uma nova exportação do processo e verifique se o problema foi solucionado.


<!-- anchors: BPM028Porqueaimagemdodiagramadoprocessonãofoiatualizadaaoexportarumanovaversão?-Índice, BPM028Porqueaimagemdodiagramadoprocessonãofoiatualizadaaoexportarumanovaversão?-Plataforma, BPM028Porqueaimagemdodiagramadoprocessonãofoiatualizadaaoexportarumanovaversão?-Ocorrência, BPM028Porqueaimagemdodiagramadoprocessonãofoiatualizadaaoexportarumanovaversão?-Causa, BPM028Porqueaimagemdodiagramadoprocessonãofoiatualizadaaoexportarumanovaversão?-Solução -->
