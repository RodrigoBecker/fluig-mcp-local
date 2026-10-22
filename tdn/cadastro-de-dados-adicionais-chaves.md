---
title: "Cadastro de Dados Adicionais - Chaves"
url: "https://tdn.totvs.com/display/public/fluig/Cadastro+de+Dados+Adicionais+-+Chaves"
scraped_at: "2026-03-09T03:11:08.267Z"
depth: 1
anchors: 3
child_links: 60
---

# Cadastro de Dados Adicionais - Chaves

# Índice

# Objetivo

---

O objetivo deste guia é apresentar em uma única página as chaves padrões e as que poderão ser configuradas ou cadastradas nos Dados Adicionais em uma Empresa do TOTVS Fluig Plataforma. Esta página contempla apenas as principais chaves usadas para configuração, personalização e integração dos cards. Chaves relaciona as integrações com outros produtos e experiências de uso, devem ser tratadas diretamente com as equipes de atendimento (framework) responsáveis.

# Chaves

---

| Chave | Valor | Objetivo |
| --- | --- | --- |
| Chave | Valor | Objetivo |
| dirDefault  | <Diretório do volume> | Diretório onde fica salvo a pasta de Volume da plataforma. |
| defaultTheme | themeecmdefault | Tema que a plataforma está utilizando. |
| dirUpload | <Diretórios de upload no Volume> | Diretório onde está salvo a pasta de upload da plataforma. Os arquivos são salvos temporariamente até a finalização do upload, para posteriormente serem transferidos para a pasta public. |
| dirUploadConnect | <Diretórios de upload do fluig Connect no Volume> | Diretório onde está salvo a pasta de upload do fluig Connect. Os arquivos carregados através do fluig Connect são salvos temporariamente neste local até a finalização do upload, para posteriormente serem transferidos para a pasta public. |
| dirCustom | <Diretórios de Custom no Volume> | Pasta onde ficam salvos os templates de customização de formulários. |
| oldViewer | true ou false | Habilita (true) e desabilita (false) o visualizador antigo da plataforma. Restrito a poucas extensões de arquivos. |
| internalVisualizerServer | <IP ou URL de acesso> | Visualizador de documentos padrão da plataforma. Fluig Viewer executado em Cloud Amazon (URL de Acesso: https://api.accusoft.com.br). |
| social.accsses.control.default.group | DefaultGroup-1 | Grupo padrão onde são incluídos os usuários sem grupo definido no momento do cadastro. |
| analytics.gd.project.id | <Seu código de projeto retornado pelo suporte> | Integra o fluig Analytics com a GoodData. |
| analytics.gd.user | <E-mail que recebeu o convite do suporte> | Integra o fluig Analytics com a GoodData. |
| analytics.gd.pass | <Senha cadastrada após o convite> | Integra o fluig Analytics com a GoodData. |
| analytics.gd.active | true ou false | Integra o fluig Analytics com a GoodData. |
| chat.enabled | true ou false | Habilita (true) e desabilita (false) o chat da plataforma. |
| portalTitle | <Título desejado para as guias> | Personaliza o título das guias de navegação (abas) da plataforma. |
| startScreen | PROCESS:  Se você deseja que a tela inicial seja a inicialização de processos.SOCIAL: Se você deseja que a tela inicial seja a timeline.DOCUMENT: Se você deseja que a tela inicial seja a navegação de documentos.TASKS: Se você deseja que a tela inicial seja a central de tarefas.COMMUNITY:ALIAS_DA_COMUNIDADE: Se você deseja que a tela inicial seja uma comunidade, o parâmetro ALIAS_DA_COMUNIDADE deve ser preenchido e válido para direcionar para comunidade correta.PAGE:IDENTIFICADOR_UNICO: Se você deseja que a tela inicial seja uma página, o parâmetro IDENTIFICADOR_UNICO deve ser preenchido e válido para direcionar para página correta. | Personaliza a tela inicial do fluig Mobile. |
| realtime.enabled | true ou false | Habilitar/desabilita atualização automática da Timeline. |
| PUSHAPPKEY | <Inserir a informação recuperada no campo App key> | Habilitar uma notificação Push utilizando a solução da Urban Airship. |


<!-- anchors: CadastrodeDadosAdicionaisChaves-Índice, CadastrodeDadosAdicionaisChaves-Objetivo, CadastrodeDadosAdicionaisChaves-Chaves -->
