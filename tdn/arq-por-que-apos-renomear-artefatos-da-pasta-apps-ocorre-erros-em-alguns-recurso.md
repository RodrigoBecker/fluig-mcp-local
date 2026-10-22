---
title: "ARQ - Por que após renomear artefatos da pasta apps ocorre erros em alguns recursos da plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223921996"
scraped_at: "2026-03-04T03:38:05.575Z"
depth: 4
anchors: 5
child_links: 61
---

# ARQ - Por que após renomear artefatos da pasta apps ocorre erros em alguns recursos da plataforma?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Alguns artefatos da pasta *apps*, localizado em [diretório_instalação]/appserver/apps, foram estava desatualizados, portanto novos artefatos atualizados foram incluídos, sendo que os antigos foram mantidos como backup nesta mesma pasta, porém foram renomeados. Após este procedimento, alguns recursos do sistema não funcionam mais. O devo fazer para que os recursos voltem a funcionar?

# Causa

Isto ocorre porque o servidor tentará realizar o *deploy* de qualquer arquivo '.war' ou '.ear' que estiver na pasta *apps*, portanto artefatos duplicados ou renomeados podem causar mal funcionamento do sistema.

# Solução

1. Parar os serviços do fluig;
2. Remover os artefatos antigos da pasta apps. Caso queira manter um backup dos artefatos, copie-os para outra pasta, fora deste diretório.
3. Iniciar os serviços do fluig na ordem correta.


<!-- anchors: ARQPorqueapósrenomearartefatosdapastaappsocorreerrosemalgunsrecursosdaplataforma?-Índice, ARQPorqueapósrenomearartefatosdapastaappsocorreerrosemalgunsrecursosdaplataforma?-Plataforma, ARQPorqueapósrenomearartefatosdapastaappsocorreerrosemalgunsrecursosdaplataforma?-Ocorrência, ARQPorqueapósrenomearartefatosdapastaappsocorreerrosemalgunsrecursosdaplataforma?-Causa, ARQPorqueapósrenomearartefatosdapastaappsocorreerrosemalgunsrecursosdaplataforma?-Solução -->
