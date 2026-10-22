---
title: "APIs LMS"
url: "https://tdn.totvs.com/display/public/fluig/APIs+LMS"
scraped_at: "2026-03-09T03:03:35.816Z"
depth: 1
anchors: 7
child_links: 33
---

# APIs LMS

Importante!

A partir de **Abril de 2025**, o [suporte](https://totvscst.zendesk.com/hc/pt-br/#home) ofertado ao LMS será descontinuado. Não havendo mais evoluções após este período. O LMS não estará mais disponível para acesso nos ambientes a partir da **próxima release** do TOTVS Fluig Plataforma prevista para o primeiro semestre de 2025.

# Índice

# Objetivo

O objetivo deste guia é disponibilizar as APIs específicas do LMS da plataforma TOTVS Fluig para consulta.

Atenção!

Salientamos que essas APIs são válidas para uso, porém, estão em **processo de** **depreciação**.

# Visualizar as APIs

Para visualizar as APIs atuais do LMS efetue os seguintes passos:

- [Passo 1](#)
- [Passo 2](#)

O LMS possui duas versões de APIs e é possível visualizar a documentação de cada uma das versões na própria plataforma, acessando o endereço /lms/swagger/{versão}/swagger.json:

 - versão 1 → {meu_fluig}/lms/swagger/v1/swagger.json;

 - versão 2 → {meu_fluig}/lms/swagger/v2/swagger.json.

EXEMPLO:
https://minhaempresa.fluig.com/lms/swagger/v2/swagger.json

Ao acessar os endereços citados no passo anterior, será exibido na página um JSON da API no formato Swagger.

 - Copie o JSON para colar em um leitor de documentação Swagger *on-lin*e para uma melhor visualização da documentação da API.

 - Acesse o endereço [https://editor.swagger.io](https://editor.swagger.io/) e cole o JSON no editor para visualizar a documentação. Após colar o JSON no editor, pode ser que seja apresentado um *log* com erros de semântica da documentação. Nesse caso, basta clicar em "Hide" para esconde-los e visualizar a documentação das APIs.

![](/download/attachments/392500315/image2020-7-16_10-27-31.png?version=1&modificationDate=1594906051520&api=v2)

**À direita é exibido um modelo navegável da documentação onde é possível consultar os caminhos e modelos utilizados da API.**

 - Caso ainda não visualize, pode ser necessário remover as linhas iniciais que contenham comentários. Exemplo: 

  **Linhas a serem removidas**

[?](#)

| `// 20210910105755``// https://fluig.empresa.com/lms/swagger/v2/swagger.json` |
| --- |


<!-- anchors: APIsLMS-Índice, APIsLMS-Objetivo, APIsLMS-VisualizarasAPIs, samples, samples-1, samples-2, highlighter_222715 -->
