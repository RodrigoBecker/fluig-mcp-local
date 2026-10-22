# fluig-mcp-local v0.2

Servidor MCP local que dá ao Claude o contexto do Fluig: seus processos, a documentação TDN, as regras oficiais da
TOTVS e um lint. Assim ele gera código com IDs, campos e APIs reais, em vez de inventar.

| Pasta | Conteúdo |
|---|---|
| `data/fluig.json` | Processos, formulários e datasets (mock, escritos à mão) |
| `tdn/` | 1.859 páginas da documentação oficial TDN |
| `vendor/fluig-agent-skills/` | Pacote oficial TOTVS: 16 skills + `context/`, `examples/`, `docs/` (não editar) |
| `skills/` | Skills do time: `fluig-dev` e `fluig-scaffolding-workflow-event` |
| `src/` | Código do servidor e do lint |

## Início rápido

Requisito: Node.js 18+.

```bash
# 1. Instalar (já compila)
cd /caminho/fluig-mcp-local
npm install

# 2. Registrar no Claude Code
claude mcp add --scope user fluig-mcp-local -- node /caminho/fluig-mcp-local/dist/index.js
```

3. Abra o `claude` e digite `/mcp`: deve aparecer **fluig-mcp-local · connected** (se não, use **Reconnect**).
4. Teste: *"Mostre as atividades do processo SolicitacaoCompra"*.

Pronto: agora é só conversar em português. O Claude consulta o MCP sozinho.

**Claude Desktop:** adicione em `claude_desktop_config.json` e reinicie o app:
```json
{ "mcpServers": { "fluig-mcp-local": { "command": "node", "args": ["/caminho/fluig-mcp-local/dist/index.js"] } } }
```

## Exemplos de uso
```
Quais colaboradores ativos são de COMPRAS ou TI?
Como uso hAPI.setCardValue? Busque no TDN
No SolicitacaoCompra, compras acima de 20 mil exigem justificativa com 50+ caracteres
Revise este evento: <cole o código>
```
Para regras de processo, o Claude (skill `fluig-dev`) escreve uma spec, **espera sua aprovação**, gera o código e
roda o lint. As skills também aparecem como prompts: digite `/` e procure `fluig`.

## Usar com os seus processos
1. No seu projeto, crie um `fluig-mock.json` no formato de `data/fluig.json`, com os **IDs reais** das atividades:
   ```json
   {
     "datasets":  { "colleague": { "type": "INTERNAL", "description": "Usuários", "columns": ["colleagueName"], "rows": [] } },
     "processes": { "SolicitacaoFerias": { "description": "Férias", "version": 1, "form": "frm_ferias", "events": [],
                    "activities": [{ "id": 4, "name": "Início", "type": "start" }, { "id": 5, "name": "Aprovação do Gestor", "type": "task" }] } },
     "forms":     { "frm_ferias": { "process": "SolicitacaoFerias", "fields": [{ "name": "qtdDias", "type": "number", "required": true }] } }
   }
   ```
2. Registre o MCP no projeto apontando para esse arquivo:
   ```bash
   claude mcp add --scope project fluig-mcp-local -e FLUIG_MOCK_DATA="$PWD/fluig-mock.json" \
     -- node /caminho/fluig-mcp-local/dist/index.js
   ```
3. Abra o `claude` nessa pasta e peça a regra. Quando o diagrama mudar, atualize o JSON e reconecte em `/mcp`.

## Problemas comuns
| Sintoma | Solução |
|---|---|
| `/mcp` mostra *failed* / `Connection closed` | Falta `dist/`: rode `npm install` (ou `npm run build`) e use **Reconnect** |
| Mudanças no código não aparecem | `npm run build` e **Reconnect** em `/mcp` |
| Quer testar sem o Claude | `npm run inspect` abre o MCP Inspector no navegador |
