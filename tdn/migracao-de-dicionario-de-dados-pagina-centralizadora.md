---
title: "Migração de Dicionário de Dados - página centralizadora"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=773509913"
scraped_at: "2026-03-09T05:33:54.493Z"
depth: 4
anchors: 0
child_links: 124
---

# Migração de Dicionário de Dados - página centralizadora

**Objetivo**

Roteiro (framework) para o Cliente executar a migração de dicionário de dados para o banco de dados.

**Procedimento para execução**

Antes de executar o compatibilizador **MPSYSTODB**é imprescindível:

- Realizar o backup do banco de dados do produto em que será executado o compatibilizador;
- Realizar o backup da pasta de dados e dicionários \TOTVS 12\Microsiga\Protheus_Data (a indicação desta pasta refere-se à instalação padrão do Protheus 12. Se na sua instalação foram utilizadas pastas diferentes, deve-se adequar este caminho ao seu cenário);
- Essa rotina deve ser executada em modo exclusivo, ou seja, nenhum usuário deve estar utilizando o sistema.

**Seguir os procedimentos abaixo:**

1 - Utilizando a ferramenta **TOTVS CodeAnalysis**, faça a verificação e correção de todas as customizações do seu ambiente. Após a correção de todos os bugs (comprovando Zero Bugs), tire um print screen da tela final. 

2 - Abra um ticket pelo Portal do Cliente para a equipe de Suporte do Framework Protheus. Neste ticket, anexe a print screen da tela do CodeAnalysis, e envie também o **TOTVS ID do License Server Virtual** que será utilizado neste ambiente.

3 - Aguarde o contato do Suporte Framework, informando o Token de Migração. Token distintos para **Produção e Homologação.**

4 - Em posse do Token, abra o SmartClient, e no Programa Inicial digite **MPSYSTODB**

5 - Clique em OK para continuar.

6 - Após a confirmação será exibida uma tela com informações sobre o procedimento que será executado. Leia e clique em Avançar.

7 - Ao avançar será solicitado Usuário, Senha e Token para migração. O usuário e senha obrigatoriamente deve ser do Administrador. Insira o Token fornecido pelo Suporte Framework e clique em Avançar.

8 - Será executada uma verificação para analisar se todos os pré-requisitos da migração são atendidos, caso algum deles não seja, deve-se encerrar o processo, corrigir o problema e executar o compatibilizador novamente. Nesse momento também são listados os menus padrões que não foram encontrados no diretório System do ambiente e que portanto não serão migrados, caso algum desses menus deva ser migrado, encerre o processo, coloque o arquivo no diretório System e inicie o compatibilizador novamente. Se todos os itens estiverem válidos, clique em Avançar.

9 - Agora é necessário **validar o e-mail do Administrador.** Essa etapa é importante pois depois da migração, caso o usuário administrador esqueça a senha, somente será possível recuperar a mesma utilizando esse e-mail. Preencha o e-mail (caso o usuário Administrador já tenha um e-mail cadastrado, será apresentado o mesmo, sendo possível trocar esse endereço caso seja necessário), o SMTP, o login e a senha que serão usados pelo servidor para enviar o e-mail. Depois disso clique em Avançar.

10 - Será enviado um e-mail com um código para o endereço informado anteriormente. Aguarde o recebimento e preencha a caixa Chave de Segurança com o código recebido. Clique em Avançar.

11 - É mostrada uma lista com todos os itens que serão migrados para o SGBD. Clique em Iniciar.

12 - Aguarde o fim da migração, isso pode demorar algumas horas. Clique em **Finalizar**.

**Links úteis:**

Migração do Dicionário de Dados para o Banco de Dados

[https://tdn.totvs.com/pages/releaseview.action?pageId=360450442](https://tdn.totvs.com/pages/releaseview.action?pageId=360450442)

TOTVS CodeAnalysis

[https://tdn.totvs.com/display/public/framework/TOTVS+CodeAnalysis](https://tdn.totvs.com/display/public/framework/TOTVS+CodeAnalysis)

HOW TO do processo de migração, seguindo a documentação da TOTVS:

[https://www.youtube.com/watch?v=nF791RvsbMs](https://www.youtube.com/watch?v=nF791RvsbMs)

Dúvidas contatar: [hub.plataformas@totvs.com.br](mailto:hub.plataformas@totvs.com.br)
