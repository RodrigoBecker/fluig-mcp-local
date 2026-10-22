---
title: "CON - Por que ocorre erro (Usuário sem Permissão) na consulta de WebService de Dataset?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198955678"
scraped_at: "2026-03-09T03:30:35.930Z"
depth: 2
anchors: 5
child_links: 36
---

# CON - Por que ocorre erro (Usuário sem Permissão) na consulta de WebService de Dataset?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Tipo de API:** Web service

# Ocorrência

Por que ao utilizar o método getDataset do WebService ECMDatasetService, retorna a mensagem: "Usuário sem permissão para consultar esse dataset."

# Causa

Usuário não tem permissão para acessar o formulário relacionado a este dataset.

# Solução

Para que um dataset seja consultado via WebService é necessário que o usuário utilizado tenha permissão no formulário. Para isso, com um usuário administrador (ou que tenha permissão de acesso ao formulário), deve-se acessar a pasta onde o formulário está armazenado, editar as propriedades e [adicionar permissão de leitura](https://tdn.totvs.com/x/WQV8Dg) para o usuário utilizado no WebService.

A partir da atualização **Essential 1.7.0-200714**, a plataforma passa a ter oferecer o controle de permissões para datasets, webservices e APIs. Para mais detalhes, consulte a documentação de [Plataforma ❙ Recursos de permissão em APIs, datasets e webservices](/pages/viewpage.action?pageId=547233188).


<!-- anchors: CONPorqueocorreerro(UsuáriosemPermissão)naconsultadeWebServicedeDataset?-Índice, CONPorqueocorreerro(UsuáriosemPermissão)naconsultadeWebServicedeDataset?-Plataforma, CONPorqueocorreerro(UsuáriosemPermissão)naconsultadeWebServicedeDataset?-Ocorrência, CONPorqueocorreerro(UsuáriosemPermissão)naconsultadeWebServicedeDataset?-Causa, CONPorqueocorreerro(UsuáriosemPermissão)naconsultadeWebServicedeDataset?-Solução -->
