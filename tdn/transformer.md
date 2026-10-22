---
title: "Transformer"
url: "https://tdn.totvs.com/display/public/fluig/Transformer"
scraped_at: "2026-03-09T04:50:47.101Z"
depth: 3
anchors: 0
child_links: 69
---

# Transformer

A finalidade desse componente é converter um arquivo de XML para XML, de XML para Texto e XML para HTML.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Name | Inserir uma identificação para a configuração do componente. |
| Type | Selecionar o tipo de tecnologia a ser utilizada para a transformação.XSL: indica a utilização do padrão XSL para transformação de arquivos. Atualmente as opções disponíveis são de XML para Texto, XML para XML e XML para HTML.None: Não utilizar nenhum XSL para transformação. Esta opção é muito utilizada quando se deseja retirar caracteres especiais da mensagem. |
| File Name | Inserir o nome do arquivo de transformação. |
| Processor | Selecionar o tipo de processor que será utilizado para a transformação.Xalan: Suporta XSLT 1.0 para transformação.Saxon: Suporta XSLT 2.0 para transformação. |
| Remove special Characters | Quando selecionado, o Fluig ESB irá retirar todos os caracteres especiais que encontrar na mensagem, por exemplo, vogais acentuadas e “ç”. |
| Remove Line Break | Quando selecionado, o Fluig ESB irá retirar todas as quebras de linha que existirem na mensagem. |
