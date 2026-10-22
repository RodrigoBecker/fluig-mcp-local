---
title: "Como aumentar o limite de upload da plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Como+aumentar+o+limite+de+upload+da+plataforma"
scraped_at: "2026-03-09T04:02:29.909Z"
depth: 2
anchors: 16
child_links: 82
---

# Como aumentar o limite de upload da plataforma

# Objetivo

---

Este guia mostra como aumentar o limite máximo de *upload* no TOTVS Fluig Plataforma.

# Como aumentar o limite de upload da plataforma

---

Para aumentar o limite de *upload*, siga os passos abaixo:

Atenção!

A realização deste procedimento pode causar problemas de performance na plataforma. Recomendamos que seja realizado em ambiente de **homologação antes de configurar em produção**.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Pare os serviços do Fluig.

 - **A partir da atualização 2.0**:Localize o arquivo **standalone.xml**, que está disponível em **[diretório_instalação]/appserver/standalone/configuration**, e abra em um editor de texto utilizando um usuário com permissões de administrador.

 - **Para atualizações 1.6.5 até 1.8.2**:Localize o arquivo **domain.xml**, que está disponível em **[diretório_instalação]/appserver/domain/configuration**, e abra em um editor de texto utilizando um usuário com permissões de administrador.

 - No arquivo correspondente à atualização do Fluig que você utiliza (standalone.xml ou domain.xml), procure pela tag **http-listener** e o seu atributo **max-post-size**. Altere o valor para "2147483648" para permitir até 2GB de *upload*.

[?](#)

| `````````````` |
| --- |

 - Se você possuir HTTPS na plataforma, precisará editar também o valor do parâmetro**https-listener max-post-size**. Se você não tiver HTTPS na plataforma, só existirá o primeiro parâmetro.

  **Exemplo:**

[?](#)

| ```` |
| --- |

 - Salve e inicie os serviços do Fluig na ordem correta.

 - Tente publicar o arquivo em seguida.

Importante!

Ao alterar o limite padrão de *upload* na configuração do serviço Fluig acima do valor padrão, a performance para todos os usuários da plataforma poderá ser afetada durante o *upload* de arquivos com tamanho superior ao limite padrão.

# Escolhendo o valor correto

---

## Unidade de medida

Uma boa prática para determinar o novo valor da propriedade **max-post-size** em bytes, é utilizar um a potência de base 2 (Ex.: 210, 220, 230, ...), **conforme norma IEC 80000-13 : 2008**. Isto se deve ao fato de que todos os dispositivos de armazenamento são projetados para guardar um volume de dados, sendo este um número múltiplo de dois, justamente por causa da natureza binária do bit, embora comercialmente seja utilizado o sistema internacional (Ex.: 101, 102, 103, ...).

Segue abaixo alguns exemplos de valores baseados nesta lógica:

| Tabela 1 - Valores de armazenamento conforme norma IEC 80000-13 : 2008 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Potência de base 2 | gibibyte (GiB) | mebibyte (MiB) | quibibyte (KiB) | Bytes | bits |
| ​20 | 0 | ​0 | 0 | ​0 | ​1 |
| 21 | 0 | 0 | 0 | 0 | 2 |
| 23 | 0 | 0 | 0 | 1 | 8 |
| 210 | 0 | 0 | 1 | 1024 | 8192 |
| 220 | 0 | 0 | 1024 | 1048576 | 8388608 |
| 230 | 1 | 1024 | 1048576 | 1073741824 | 8589934592 |
| 231 | 2 | 2048 | 2097152 | 2147483648 | 17179869184 |

| Tabela 2 - Múltiplos do Byte |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tabela 2 - Múltiplos do Byte |  |  |  |  |  |  |  |
| Prefixo binário (IEC) |  | Prefixo do
                    SI |  |  |  |  |  |
| Nome | Símbolo | Múltiplo |  | Nome | Símbolo | Múltiplo |  |
| byte | B | 20 |  | byte | B | 100 |  |
| kibibyte | KiB | 210 |  | kilobyte | kB | 103 |  |
| mebibyte | MiB | 220 |  | megabyte | MB | 106 |  |
| gibibyte | GiB | 230 |  | gigabyte | GB | 109 |  |
| tebibyte | TiB | 240 |  | terabyte | TB | 1012 |  |
| pebibyte | PiB | 250 |  | petabyte | PB | 1015 |  |
| exbibyte | EiB | 260 |  | exabyte | EB | 1018 |  |
| zebibyte | ZiB | 270 |  | zettabyte | ZB | 1021 |  |
| yobibyte | YiB | 280 |  | yottabyte | YB | 1024 |  |

## Fórmula

Sabendo que o valor padrão de um 1 GigaBytes é 1073741824 bytes, então pode-se utilizar este valor como constante para multiplicarmos a capacidade.

A fórmula abaixo permite o cálculo rápido e simples do novo valor para o limite de upload desejado para o ambiente da plataforma.

**Vbytes = vGB * 1073741824**

Onde:

**Vbytes** → o novo valor a ser definido no arquivo de configuração standalone.xml (a partir da 2.0) ou domain.xml (1.6 até 1.8.2), no campo max-post-size.

**vGB** → valor em GigaBytes ao qual pretende-se aumentar a capacidade de upload do ambiente.

**1073741824** → valor de 1GB em bytes, utilizado como constante ou referência.

### Exemplos

Preciso aumentar de 1GB para 2GB a capacidade de upload;

Vbytes = 2 * 1073741824

Vbytes = 2147483648

logo ***max-post-size="2147483648"***

Preciso aumentar de 1GB para 5GB a capacidade de upload;

Vbytes = 5 * 1073741824

Vbytes = 5368709120

logo ***max-post-size="5368709120"***

Fique atento!

Esta documentação é válida a partir da **atualização 1.6.5 - Liquid**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.

# Artigos relacionados

---

- [Parâmetros](/pages/viewpage.action?pageId=234455426)


<!-- anchors: Comoaumentarolimitedeuploaddaplataforma-Objetivo, Comoaumentarolimitedeuploaddaplataforma-Comoaumentarolimitedeuploaddaplataforma, 1, 1-1, 1-2, 1-3, highlighter_312620, 1-4, highlighter_404212, 1-5, 1-6, Comoaumentarolimitedeuploaddaplataforma-Escolhendoovalorcorreto, Comoaumentarolimitedeuploaddaplataforma-Unidadedemedida, Comoaumentarolimitedeuploaddaplataforma-Fórmula, Comoaumentarolimitedeuploaddaplataforma-Exemplos, Comoaumentarolimitedeuploaddaplataforma-Artigosrelacionados -->
