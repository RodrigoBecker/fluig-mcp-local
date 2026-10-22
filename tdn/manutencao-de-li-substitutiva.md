---
title: "Manutenção de LI Substitutiva"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235573324"
scraped_at: "2026-03-09T05:28:06.027Z"
depth: 4
anchors: 1
child_links: 192
---

# Manutenção de LI Substitutiva

# Manutenção de LI Substitutiva

A funcionalidade de LI Substitutiva permite que o usuário reutilize as informações de uma LI registrada e cancelada anteriormente. Para incluir um processo novo, é necessário preencher as informações da LI e vincular novamente o PO cadastrado, e com isso, será carregado as informações da antiga LI. Preencha o campo "Substitutiva" (W4_LISUBST) na pasta Dados da LI presente na rotina Manutenção de PLI, com o número da LI anterior. Este campo é apenas informativo para o sistema, permitindo apenas realizar um controle interno.

**Procedimentos de Utilização **

**Pré-Requisitos:**

- Possuir uma Solicitação de Importação e um PO com item anuente;
- Possuir uma PLI cadastrada;
- Possuir uma LI cadastrada e registrada; 
- Realizar o estorno do processo de LI anteriormente cadastrada.

**Sequência 01 - Inclusão da LI Substitutiva:**

1. No Easy Import Control (SIGAEIC), acesse Atualizações/ Licença de Importação/ Manutenção PLI.
2. Clique em Incluir.
3. Preencha as informações obrigatórias.
4. Na pasta Dados da LI, preencha o campo "Substitutiva" (W4_LISUBST) com o número da LI estornada anteriormente.
5. Clique em Confirmar.
6. Selecione a opção PO e clique em Ok.
7. Informe o número do PO e clique em Confirmar.
8. Selecione o item do processo e clique em Confirmar até salvar.

**Sequência 02 - Geração do Relatório LI Substitutiva:**

1. No Easy Import Control (SIGAEIC), acesse Atualizações/ Licença de Importação/ Manutenção PLI.
2. Selecione o processo e em Ações Relacionadas clique em Substitutivas.
3. Neste momento será apresentado o relatório com as informações da LI cancelada.

**Sequência 03 - Integração Siscomex Web:**

1. No Easy Import Control (SIGAEIC), acesse Atualizações/ Int. Siscomex Web.
2. Selecione a opção "Gerados" da pasta Licença de Importação.
3. Em Ações clique em Gerar Arquivo, selecione o processo e clique em Confirmar.
4. Clique em Envio.
5. Veja que o lote sera gerado com sucesso.
6. Clique em Visualizar Registro e note que o campo LI Substitutiva foi preenchido.


<!-- anchors: ManutençãodeLISubstitutiva-ManutençãodeLISubstitutiva -->
