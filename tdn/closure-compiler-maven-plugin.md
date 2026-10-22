---
title: "Closure Compiler Maven Plugin"
url: "https://tdn.totvs.com/display/public/fluig/Closure+Compiler+Maven+Plugin"
scraped_at: "2026-03-09T04:29:37.782Z"
depth: 3
anchors: 6
child_links: 50
---

# Closure Compiler Maven Plugin

## Introdução

Essa documentação tem como objetivo explicar como é feita a configuração do plugin [Closure compiler Maven Plugin](https://github.com/blutorange/closure-compiler-maven-plugin)

Hoje no Fluig plataforma utiliza-se o plugin YUI compressor para minificar arquivos CSS e JS. Porém o mesmo permanece inativo e sem atualização desde 2013 ficando um pouco ultrapassado e nos impossibilitando de utilizar novas tecnologias, como o ES6.

## Fim do YUI Compressor?

Não será possível remover completamente o YUI-Compressor de nosso produto pois o Closure Compiler não irá processar arquivos CSS, apenas JS. Sendo necessário a permanência do antigo para minificar a folha de estilo.

## Configurando o plugin

Os plugins são configurados nos pom.xml de cada projeto. Primeiramente devemos fazer com que o YUI-Compressor pare de minificar os arquivos JS, para isso na configuração já existente precisamos adicionar a seguinte tag dentro da configuração.

No exemplo estaremos utilizando a widget: [sample-component-widget](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/sample-component/sample-component-widget)

**Ignorando arquivos JS - YUI Compressor**

[?](#)

| `````…````````**/*.js````````…``` |
| --- |

Feito isso, podemos configurar o Closure Compiler. 

**Exemplo de configuração usada no pom: sample-component-widget**

[?](#)

| 123456789101112131415161718192021222324252627282930313233343536373839 | `````com.github.blutorange````closure-compiler-maven-plugin````2.21.0````````````default-minify````````minify````````generate-resources````````````````false````${project.basedir}/src````UTF-8````main/webapp/resources````resources````**/*.js````#{path}/#{basename}.#{extension}````**/${project.basedir}````**/*.min.js````**/*-min.js````SIMPLE_OPTIMIZATIONS````````OFF````OFF````OFF````OFF````OFF````````false````false````NO_TRANSPILE````false````true``````` |
| --- | --- |

A documentação do mesmo pode ser acessada aqui: [https://blutorange.github.io/closure-compiler-maven-plugin/minify-mojo.html](https://blutorange.github.io/closure-compiler-maven-plugin/minify-mojo.html)

Onde há a explicação de cada tag utilizada - abaixo estará a explicação de algumas configurações específicas.

- **ClosureCompilationLevel** - irá definir o quão avançada será a minificação - no nível **ADVANCED_OPTIMIZATIONS** é possível ter a ofuscação dos arquivos JS.
- **Excludes** - Utilizamos o excludes para excluir algum tipo de arquivo específico da compilação.
- **Skip** - Ignora a execução do plugin dentro do módulo declarado.

Atenção

Atualmente, caso o plugin não encontre um js dentro do source dir definido ele quebra. Por isso, em projetos onde o pom pai não possui arquivos a serem minificados, passamos o skip como true. Porém é necessário que em seus filhos haja a configuração:

[?](#)

| `````com.github.blutorange````closure-compiler-maven-plugin````````false``````` |
| --- |

Atenção

Hoje a minificação realizada nos arquivos javaScript pelo plugin pode ocasionar um conflito entre o template de string e o mecanismo de internacionalização i18n, podendo gerar inconsistências. Caso você não use internacionalização em seu JS, template string irá funcionar normalmente. Estamos trabalhando a fim de proporcionar uma solução em próximas versões.


<!-- anchors: ClosureCompilerMavenPlugin-Introdução, ClosureCompilerMavenPlugin-FimdoYUICompressor?, ClosureCompilerMavenPlugin-Configurandooplugin, highlighter_888960, highlighter_262950, highlighter_821685 -->
