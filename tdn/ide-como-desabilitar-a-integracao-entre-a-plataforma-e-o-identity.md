---
title: "IDE - Como desabilitar a integração entre a plataforma e o Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=205920468"
scraped_at: "2026-03-09T03:38:08.037Z"
depth: 2
anchors: 9
child_links: 47
---

# IDE - Como desabilitar a integração entre a plataforma e o Identity?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.5.0 ou superior

# Ocorrência

Como desabilitar a integração entre a plataforma (1.5 ou superior) e o Identity?

# Solução

Clientes cujo ambiente esteja hospedado no Cloud TOTVS, devem abrir um ticket solicitando a desativação da integração.

Já clientes on-premises devem seguir os procedimentos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acessar a plataforma com o usuário WCMADMIN, conforme detalhado na FAQ [IDE - Como acessar o wcmadmin com a plataforma integrada ao Identity?](/pages/viewpage.action?pageId=203767554).

 - Acessar a tela de **Plataforma ❙ Empresas**, localizada na seção WCM do Painel de Controle.

 - Na lista de empresas cadastradas, localizar a empresa na qual a integração com o Identity deve ser desabilitada

 - Marcar o *checkbox* disponível ao lado do código da empresa. A coluna Identity irá exibir o status Habilitado quando a integração estiver ativa.

 - Acionar **Editar**.

 - Na aba **Autenticação**, desmarcar a opção **Acessar com Identity**.

 - Acionar **Salvar**para concluir a alteração.

![](/download/attachments/205920468/Image%2012%2028%20004.png?version=1&modificationDate=1514480877000&api=v2)

Dica

Após a desabilitar a integração, a autenticação dos usuários passa a ocorrer diretamente na plataforma Fluig. Para entender como deve ser feito o login a partir dessa mudança, acesse [IDE - Como os usuários podem acessar a plataforma após a integração com o Identity ser desativada?](/pages/viewpage.action?pageId=198937319)


<!-- anchors: IDEComodesabilitaraintegraçãoentreaplataformaeoIdentity?-Índice, IDEComodesabilitaraintegraçãoentreaplataformaeoIdentity?-Plataforma, IDEComodesabilitaraintegraçãoentreaplataformaeoIdentity?-Ocorrência, IDEComodesabilitaraintegraçãoentreaplataformaeoIdentity?-Solução, desativar_identity, desativar_identity-872616687, desativar_identity-872616688, desativar_identity-872616689, desativar_identity-872616690 -->
