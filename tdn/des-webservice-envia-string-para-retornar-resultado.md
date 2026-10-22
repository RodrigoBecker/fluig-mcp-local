---
title: "DES - WebService envia String para retornar resultado"
url: "https://tdn.totvs.com/display/public/fluig/DES+-+WebService+envia+String+para+retornar+resultado"
scraped_at: "2026-03-09T03:31:11.941Z"
depth: 2
anchors: 5
child_links: 40
---

# DES - WebService envia String para retornar resultado

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Tipo de API:** Webservice

# Ocorrência

Método de webservice envia uma String que é preenchida e retorna do serviço, porém esse parâmetro, na criação do Web Service via Axis, espera um StringHolder ao invés de uma String comum.

# Causa

O Axis utiliza o StringHolder pra fazer a transmissão de valor na referência sem retorno.

# Solução

Enviar como parâmetro a String desejada encapsulada no objeto javax.xml.rpc.holders.StringHolder.

A API Axis está depreciada para uso.


<!-- anchors: DESWebServiceenviaStringpararetornarresultado-Índice, DESWebServiceenviaStringpararetornarresultado-Plataforma, DESWebServiceenviaStringpararetornarresultado-Ocorrência, DESWebServiceenviaStringpararetornarresultado-Causa, DESWebServiceenviaStringpararetornarresultado-Solução -->
