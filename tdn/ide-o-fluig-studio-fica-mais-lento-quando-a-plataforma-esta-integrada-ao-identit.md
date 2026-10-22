---
title: "IDE - O Fluig Studio fica mais lento quando a plataforma está integrada ao Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=344469076"
scraped_at: "2026-03-09T03:38:31.143Z"
depth: 2
anchors: 5
child_links: 46
---

# IDE - O Fluig Studio fica mais lento quando a plataforma está integrada ao Identity?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

# Ocorrência

Após integrar a plataforma ao Identity, ao utilizar o Studio notamos que há uma demora maior na exportação e importação de artefatos. Por qual motivo isso acontece?

# Causa

Ao cadastrar o servidor da plataforma Fluig no Studio, o cliente optou por utilizar a senha do Active Directory ao invés da senha pessoal do Identity. Quando isso ocorre, o Fluig Studio envia as credenciais do usuário para o Identity, que confirma a validade com o Active Directory (através do SmartSync) e então realiza a autenticação na plataforma. Ao final desse processo, se as credenciais estiverem corretas, a importação/exportação de artefatos é iniciada.

A velocidade desse procedimento pode variar dependendo das condições de rede, infraestrutura e internet dos servidores em que o Studio, o SmartSync e a plataforma Fluig estão instalados.

# Solução

Utilizar a [senha pessoal](https://tdn.totvs.com/pages/viewpage.action?pageId=274828593) do administrador no cadastro do servidor no Fluig Studio. Dessa forma, é eliminado a consulta ao Active Directory, subtraindo uma fonte de lentidão em potencial.


<!-- anchors: IDEOFluigStudioficamaislentoquandoaplataformaestáintegradaaoIdentity?-Índice, IDEOFluigStudioficamaislentoquandoaplataformaestáintegradaaoIdentity?-Plataforma, IDEOFluigStudioficamaislentoquandoaplataformaestáintegradaaoIdentity?-Ocorrência, IDEOFluigStudioficamaislentoquandoaplataformaestáintegradaaoIdentity?-Causa, IDEOFluigStudioficamaislentoquandoaplataformaestáintegradaaoIdentity?-Solução -->
