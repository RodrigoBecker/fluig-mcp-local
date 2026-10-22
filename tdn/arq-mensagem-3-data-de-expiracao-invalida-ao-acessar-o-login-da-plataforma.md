---
title: "ARQ - Mensagem \"-3 Data de expiracao invalida\" ao acessar o login da plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=221550147"
scraped_at: "2026-03-04T03:37:18.870Z"
depth: 4
anchors: 5
child_links: 45
---

# ARQ - Mensagem "-3 Data de expiracao invalida" ao acessar o login da plataforma

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Ao acessar a página de login da plataforma é exibido o erro "**-3 Data de expiracao invalida**". Como resolver?

# Causas e soluções

| Causas | Soluções |
| --- | --- |
| Causas | Soluções |
| As licenças da plataforma estão vencidas. | A solução pode ser a atualização manual do licenciamento TOTVS.Clique no botão que fica no topo superior direito do LS (License Server Monitor).  Veja a imagemAo pressionar este botão, o sistema automaticamente irá se conectar à TOTVS e atualizar as licenças com base no contrato TOTVS. |
| A plataforma está apontando para um servidor de LS inválido ou desatualizado. | Altere nas configurações globais o hostname ou IP do License Server para apontar para o endereço correto (geralmente é o mesmo servidor onde é executado o License Server Monitor). |

Utilize esta opção sempre que realizar a distribuição, manutenção e ou aquisição de licenças junto a TOTVS. Esta opção irá acelerar o processo de atualização das licenças com base nas modificações que você realizou no Portal do Cliente. Caso não seja realizado, a atualização ocorrerá durante o horário preestabelecido pela TOTVS.

Atenção!

Se o seu ambiente está no Cloud da TOTVS, a equipe de Cloud deverá fazer essa configuração.

# Observações

Para maiores informações a respeito do LS acesse [este link](/display/framework/TOTVS+License+Server+Virtual).


<!-- anchors: ARQMensagem"3Datadeexpiracaoinvalida"aoacessarologindaplataforma-Índice, ARQMensagem"3Datadeexpiracaoinvalida"aoacessarologindaplataforma-Plataforma, ARQMensagem"3Datadeexpiracaoinvalida"aoacessarologindaplataforma-Ocorrência, ARQMensagem"3Datadeexpiracaoinvalida"aoacessarologindaplataforma-Causasesoluções, ARQMensagem"3Datadeexpiracaoinvalida"aoacessarologindaplataforma-Observações -->
