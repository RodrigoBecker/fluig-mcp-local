---
title: "ARQ - Como resolver problema na autenticação via AD após queda de DNS secundário?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234607298"
scraped_at: "2026-03-04T03:37:34.267Z"
depth: 4
anchors: 4
child_links: 60
---

# ARQ - Como resolver problema na autenticação via AD após queda de DNS secundário?

# Índice

# Plataforma

**Produto:  **TOTVS Fluig Plataforma

**Ambiente:** Windows

# Ocorrência

Ao utilizar a autenticação da plataforma integrada com o Active Directory, estamos tendo um problema quando um DNS fica inacessível.

Na configuração do arquivo **standalone.xml** (a partir da atualização 2.0) ou **domain.xml** (da atualização 1.6 até 1.8.2), trecho *Authentication*, foram alteradas as informações para o nome do servidor do AD, que anteriormente apontavam para o endereço IP. A plataforma funciona normalmente, porém quando o DNS secundário fica fora, o acesso à plataforma é interrompido, informando que o usuário e senha são inválidos. Como fazer para que isso não aconteça?

# Solução

A partir do momento em que é configurada a autenticação via LDAP, a plataforma utilizará a senha do*Active Directory* para o acesso dos usuários. Contudo, só será possível realizar o login quando a conexão com o AD está disponível, do contrário será exibida mensagem de erro de usuário e senha inválidos.

Quando um DNS secundário cai, para a zona integrada ao *Active Directory*, é o mesmo que a queda de todo o DNS.

Você precisará configurar uma replicação de *Active Directory,* conforme observação da própria Microsoft em [Adicionando um servidor DNS secundário a uma zona](https://technet.microsoft.com/pt-br/library/cc816885(v=ws.10).aspx).


<!-- anchors: ARQComoresolverproblemanaautenticaçãoviaADapósquedadeDNSsecundário?-Índice, ARQComoresolverproblemanaautenticaçãoviaADapósquedadeDNSsecundário?-Plataforma, ARQComoresolverproblemanaautenticaçãoviaADapósquedadeDNSsecundário?-Ocorrência, ARQComoresolverproblemanaautenticaçãoviaADapósquedadeDNSsecundário?-Solução -->
