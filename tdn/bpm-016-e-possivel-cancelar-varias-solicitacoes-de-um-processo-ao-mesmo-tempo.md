---
title: "BPM 016 - É possível cancelar várias solicitações de um processo ao mesmo tempo?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223909515"
scraped_at: "2026-03-09T03:34:35.644Z"
depth: 2
anchors: 4
child_links: 134
---

# BPM 016 - É possível cancelar várias solicitações de um processo ao mesmo tempo?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

É possível cancelar várias solicitações de um processo ao mesmo tempo?

# Solução

Através do sistema é possível cancelar mais de uma solicitação ao mesmo tempo, utilizando a rotina de [Cancelamento em Bloco](https://tdn.totvs.com/pages/viewpage.action?pageId=233763398#Minhassolicita%C3%A7%C3%B5es-Cancelarsolicita%C3%A7%C3%B5esembloco). Após as solicitações terem sido canceladas, é possível também eliminar várias ao mesmo tempo.

Temos também a alternativa de utilização de um *web service* capaz de realizar cancelamentos em massa.

É possível utilizar o método cancelInstance do *web service* WorkflowEngineService para o cancelamento de solicitações. Neste método é necessário retornar o número da solicitação e a matrícula de um usuário que tenha permissão de cancelamento da solicitação.

Desta forma, o ideal seria desenvolver uma rotina que faça a consulta destas solicitações **antes** da rotina de cancelamento. Esta consulta pode ser feita via dataset. Para obter mais informações, acesse a documentação de *web services* em [Utilização de *Webservices*](/pages/viewpage.action?pageId=73084007), e de datasets em [Desenvolvimento de Datasets](/display/fluig/Desenvolvimento+de+Datasets)[.](https://tdn.totvs.com/x/eitbB)

[Os parâmetros do método cancelInstance são:](https://tdn.totvs.com/x/eitbB)

**user:** *login* do colaborador
**password:** senha do colaborador
**companyId:** código da empresa
**processInstanceId:** número da solicitação
**userId:** matrícula do usuário
**cancelText:** comentários do cancelamento

Os parâmetros*user* e *password* referem-se a um usuário e senha de administrador, não necessita ser o usuário que tenha permissão de cancelamento. Já userID precisa ser a matrícula de um usuário com permissão de cancelamento da solicitação.


<!-- anchors: BPM016Épossívelcancelarváriassolicitaçõesdeumprocessoaomesmotempo?-Índice, BPM016Épossívelcancelarváriassolicitaçõesdeumprocessoaomesmotempo?-Plataforma, BPM016Épossívelcancelarváriassolicitaçõesdeumprocessoaomesmotempo?-Ocorrência, BPM016Épossívelcancelarváriassolicitaçõesdeumprocessoaomesmotempo?-Solução -->
