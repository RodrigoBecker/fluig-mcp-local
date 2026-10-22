---
title: "Configuração do tempo de transação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258277613"
scraped_at: "2026-03-09T03:10:53.391Z"
depth: 1
anchors: 4
child_links: 54
---

# Configuração do tempo de transação

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

# Objetivo

---

O objetivo deste artigo é descrever o procedimento para alterar o tempo de transação padrão da plataforma.

# Transação

---

Uma transação é uma unidade de trabalho contendo uma ou mais operações compartilhando recursos e que possui propriedades ACID.

O acrônimo ACID corresponde em inglês à *atomicity*, *consistency*, *isolation* e *durability*. Cada propriedade corresponde:

- Atomicidade: uma transação é atômica, ou seja, toda a operação realizada pela transação deve ser efetivada ou nenhuma parte da operação deve ser efetivada;

- Consistência: quando uma transação é concluída, todo o sistema deve estar em uma condição estável e consistente;

- Isolamento: transações diferentes devem ser isoladas;

- Durabilidade: as operações realizadas por uma transação são persistentes após "comitadas". Depois de efetivada, as alterações realizadas pela transação não serão perdidas mesmo em caso de falha do servidor.

### Alterar o tempo de transação

---

A alteração do tempo de transação da plataforma TOTVS Fluig é feita:

- **a partir da atualização 2.0: **no arquivo **standalone.xml** ([diretório_instalação]/appserver/standalone/configuration/standalone.xml);

- **da atualização 1.6 até a 1.8.2**:****no arquivo **domain.xml** ([diretório_instalação]/appserver/domain/configuration/domain.xml).

[?](#)

| ```````````````````````````````` |
| --- |

O tempo de transação padrão da plataforma é de 300 segundos. Para alterar o tempo de transação, basta substituir o valor padrão e reiniciar o serviço do Fluig.

Importante!

O tempo de transação padrão deveria ser suficiente para a realização de uma transação convencional. Antes de aumentar o tempo de transação, verifique o fato que o levou a esta decisão.

Por exemplo, revise customizações ou integrações realizadas nos eventos de processos de *workflow*. Otimizações de customização podem reduzir o tempo necessário para realizar uma transação.


<!-- anchors: Configuraçãodotempodetransação-Objetivo, Configuraçãodotempodetransação-Transação, Configuraçãodotempodetransação-Alterarotempodetransação, highlighter_791000 -->
