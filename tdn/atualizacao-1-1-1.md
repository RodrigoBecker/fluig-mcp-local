---
title: "Atualização 1.1.1"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=107380843"
scraped_at: "2026-03-09T03:21:52.714Z"
depth: 2
anchors: 5
child_links: 36
---

# Atualização 1.1.1

Confira abaixo as novidades na atualização 1.1.1 do Fluig:

Atenção

Para ambientes que utilizam o Fluig Identity, é necessário informar o endereço do contexto que está sendo utilizado.

Para mais informações, **clique aqui**.

# Migração 

**Migração TOTVS | ECM e Fluig**

O processo de migração do TOTVS | ECM para o Fluig e o processo de atualização do Fluig 1.0 para o Fluig 1.1 foram otimizados, evitando inconsistências em formulários e configurações de segurança em algumas situações. 

# API

**Web service DocumentService**
Nesta atualização do Fluig, foi corrigido o método deleteDocument que em algumas situações não efetuava a exclusão da pasta informada na requisição HTTP.

****

**Recuperar link da tarefa workflow**
Com a atualização 1.1.1 do Fluig, é possível recuperar nos eventos de processos o link de uma tarefa workflow através da variável WDKTaskLink, e utilizá-la no envio de e-mails customizados. Para mais informações, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=73082818#CustomizaçãodeWorkflow-CustomizaçãodoProcesso).

**

**Validação de campos de formulário**
Ao utilizar o evento validateForm de um formulário, não era possível recuperar o valor dos campos na execução de uma atividade workflow.

**Zoom**
Nesta atualização, foram corrigidos as inconsistências que ocorriam ao utilizar o zoom no idioma espanhol. Para mais informações sobre como implementar o zoom, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#CustomizaçãodeDefiniçãodeFormulários-Zoom). 

# Fluig Studio

**Exportação de documentação de processos workflow**
Com a atualização 1.1.1 do Fluig, estão disponíveis novas opção para exportação de documentação, onde é possível selecionar quais elementos do diagrama serão exportados, e qual o formato (PDF ou DOC/RTF)

**

**Exportação de processos para o formato site**
Na exportação de processos, foi otimizado o suporte à codificação UTF-8 e ISO-8859-1.

# Administração

**Convite de usuários**
Nesta atualização, é possível convidar usuários efetuando o upload de um arquivo no formato CSV, quando o volume de usuários é alto, ou a relação de usuários é exportada de outro sistema legado.

**

**Envio de e-mail no formato HTML**
O suporte ao envio de e-mail em ambientes Linux foi melhorado, corrigindo inconsistências que impactavam no formato dos e-mails enviados.

**Envio de e-mail autenticação TLS**
Acesse [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=77299889) e veja como habilitar o envio de e-mail com *TLS* habilitado na atualização 1.1.1 do Flug.

**Edição de páginas**
Aplicado correções no widget “Editor HTML”, que apresentava instabilidade em algumas situações, impossibilitando sua edição.

**

**Resolução de Tela**
Dependendo da resolução utilizada, não era possível utilizar alguns recursos disponíveis no Fluig.

**Upload de vídeos**
Removido restrições que impossibilitavam o upload de vídeos maiores que 400MB.

# Identity

**Integração com o Identity**
Na atualização 1.1 do Fluig, a integração com o Identity foi compatibilizada com suas últimas atualizações, garantindo uma maior estabilidade nas integrações e segurança da informação (criação de comunidades, login/logout, etc).


<!-- anchors: Atualização1.1.1-Migração, Atualização1.1.1-API, Atualização1.1.1-FluigStudio, Atualização1.1.1-Administração, Atualização1.1.1-Identity -->
