---
title: "BPM 020 - Como importar para o fluig um processo do ECM 3 (XML)?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224445861"
scraped_at: "2026-03-09T03:34:24.973Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 020 - Como importar para o fluig um processo do ECM 3 (XML)?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

No ECM 3.00 havia um processo padrão para registro de não conformidade chamado 'RNC Registro de Não Conformidade'.

Por que não tem esse processo padrão no fluig também?

# Solução

No fluig é possível importar os processos modelados no ECM.

1. Publique o formulário do RNC do ECM 3 no fluig
2. Acesse o ECM 3 > Processos > Exportação de processos
3. Exporte o processo para um arquivo XML
4. Crie um projeto no TDS, acesse *workflow* > *diagrams*
5. Escolha a opção Importar > Importar Processo > Avançar
6. Selecione ECM 3.1, faça o upload do arquivo XML e clique em Concluir
7. Acesse as Propriedades do diagrama.
8. Na aba Formulário, defina o formulário do RNC
9. Exporte o processo para o servidor fluig.


<!-- anchors: BPM020ComoimportarparaofluigumprocessodoECM3(XML)?-Índice, BPM020ComoimportarparaofluigumprocessodoECM3(XML)?-Plataforma, BPM020ComoimportarparaofluigumprocessodoECM3(XML)?-Ocorrência, BPM020ComoimportarparaofluigumprocessodoECM3(XML)?-Solução -->
