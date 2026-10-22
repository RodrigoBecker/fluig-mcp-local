---
title: "Widget Analytics - API's"
url: "https://tdn.totvs.com/display/public/fluig/Widget+Analytics+-+API%27s"
scraped_at: "2026-03-09T04:55:40.935Z"
depth: 3
anchors: 0
child_links: 45
---

# Widget Analytics - API's

---

API's disponíveis para gerenciar as informações da URL de Dashboard do Fluig Analytics.

*Lembrando que uma página pode possuir uma ou mais instâncias de Widget de Analytics.*

| API consumida | Especificação |
| --- | --- |
| API consumida | Especificação |
| {FLUIG_URL}/portal/api/rest/wcm/iframe/analytics/url/{instanceId}onde instanceId, é o id da instância da widget de Analytics na página | Retorna a URL para renderizar o iframe da Dashboard do Fluig Analytics:A URL já retorna com o redirecionamento para o Identity, onde ocorrerá a validação, e também o parâmetro RelayState que indica o redirecionamento para o Fluig Analytics. |
| {FLUIG_URL}/portal/api/rest/wcm/iframe/analytics/save/{instanceId}onde instanceId, é o id da instância da widget de Analytics na página | Atualiza a URL para renderizar o iframe da Dashboard do Fluig Analytics:Essa API deve ser utilizada para atualizar a URL, caso ocorra uma alteração no id do projeto ou no id da Dashboard no Fluig Analytics. |
