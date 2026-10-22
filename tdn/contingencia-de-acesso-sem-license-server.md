---
title: "Contingência de Acesso sem License Server"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=221549968"
scraped_at: "2026-03-09T04:02:02.320Z"
depth: 2
anchors: 4
child_links: 81
---

# Contingência de Acesso sem License Server

# Índice

# Objetivo

---

O objetivo deste guia é mostrar como o TOTVS Fluig Plataforma permite a contingência de acesso à plataforma. Trata-se de um recurso para tolerância de 7 dias de acesso à plataforma quando servidor de licenças estiver inoperante. Dessa forma o cliente poderá utilizar a plataforma sem ser impactado durante os 7 dias a partir da primeira constatação de queda do servidor. O usuário administrador deve ser notificado da instabilidade e o responsável pela instalação do produto, dentro dos 7 dias deve ser acionado para solucionar o incidente.

# Pré-requisitos

---

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- Visão geral sobre a plataforma
- Visão geral sobre o [Licenciamento da plataforma](https://tdn.totvs.com/display/fluig/Licenciamento+fluig)

# Como funciona?

---

- O usuário final terá uma tolerância de 7 dias para acesso à plataforma, mesmo que o servidor de licenças esteja inoperante.
- Quando o Servidor de Licenças estiver inoperante, os usuários administradores serão notificados pela indisponibilidade via e-mail, alerta da plataforma e modal ao executar o login. Mensagens conforme imagens abaixo:

| Mensagens |
| --- |
| Mensagens |
| Modal ao efetuar o login - Mensagem de estabilização do Servidor de Licenças |
| Modal ao efetuar o login - Mensagem de instabilidade do Servidor de Licenças |
| E-mail de notificação de instabilização do Servidor de Licenças |
| E-mail de notificação de estabilização do Servidor de Licenças |
| Alertas na central de notificações |

- O recurso utilizado para manter e armazenar o estado de licenças é o cache da plataforma.
- Enquanto o servidor de licenças estiver inoperante, o usuário poderá utilizar os recursos da plataforma normalmente, inclusive aquelas que executam consultas diretas ao Servidor de Licenças.

Nota

Os controles das informações de acesso como expiração do acesso, usuários administradores já notificados pelo incidente, estado atual do servidor de licenças, ficam registrados por empresa e não por instalação da plataforma. Dessa forma uma instalação que possui mais de uma empresa cadastrada, terá controles de acesso e expirações específicas por empresa.

Pontos de Atenção

Caso o servidor de aplicação e de cache sofram queda, o estado das licenças no cache será perdido e o período de tolerância de acesso ao produto será apagado. Com isso será solicitada uma chave de acesso ou será permitido acesso pelo modo DEMO.

Caso o servidor de licenças não seja estabilizado em 7 dias após a primeira queda, o cliente visualizará mensagem de erro ao tentar se autenticar na plataforma e será direcionado para o modo DEMO ou para a chave de acesso.


<!-- anchors: ContingênciadeAcessosemLicenseServer-Índice, ContingênciadeAcessosemLicenseServer-Objetivo, ContingênciadeAcessosemLicenseServer-Pré-requisitos, ContingênciadeAcessosemLicenseServer-Comofunciona? -->
