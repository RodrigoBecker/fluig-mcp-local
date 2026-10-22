---
title: "Eventos de Componentes"
url: "https://tdn.totvs.com/display/public/fluig/Eventos+de+Componentes"
scraped_at: "2026-03-09T05:14:42.234Z"
depth: 3
anchors: 3
child_links: 49
---

# Eventos de Componentes

No desenvolvimento de um *widget* para o Fluig Plataforma é possível programar certas ações a serem executadas em tempo de instalação, ativação ou desativação.

Importante

Esses eventos estão disponíveis desde que se utilize a [Central de Componentes](https://tdn.totvs.com/display/HF/Central+de+componentes) disponível no agrupador **Aplicativos** do **Painel de controle** ou a [Exportação e Importação de Páginas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455771) disponível no agrupador **Personalização** do **Painel de controle**

Para que isso seja possível, é necessário criar uma classe em seu projeto Fluig que [implemente](https://docs.oracle.com/javase/tutorial/java/IandI/usinginterface.html) a classe "com.fluig.sdk.api.component.activation.ActivationListener". É necessário também inserir uma [annotation](https://docs.oracle.com/javase/tutorial/java/annotations/) de mapeamento, que depois deverá ser referenciada no arquivo [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info).

Veja abaixo um exemplo dessa classe:

**ActivationClass.java**

[?](#)

| `package` `com.fluig;` `import` `javax.ejb.Singleton;``import` `javax.ejb.TransactionAttribute;``import` `javax.ejb.TransactionAttributeType;` `import` `com.fluig.sdk.api.component.activation.ActivationEvent;``import` `com.fluig.sdk.api.component.activation.ActivationListener;` `@Singleton``(mappedName =``"activator/codigo_widget"``, name =``"activator/codigo_widget"``)``public` `class` `ActivationClass``implements` `ActivationListener {` ```/**````* @return nome do arquivo que será gerado e feito o deploy na central de componentes````* @throws Exception````*/````@Override````public` `String getArtifactFileName()``throws` `Exception {````return` `"nome-do-arquivo-gerado.war"``;````}` ```/**````* Evento chamado no momento da instalação (deploy) do artefato dentro da Central de Componentes.````* @param event````* @throws Exception````*/````@Override````public` `void` `install(ActivationEvent event)``throws` `Exception {` ```}` ```/**````* Evento chamado no momento da ativação do artefato dentro da Central de Componentes.````* @param event````* @throws Exception````*/````@Override````public` `void` `enable(ActivationEvent event)``throws` `Exception {` ```}` ```/**````* Evento chamado no momento da desativação do artefato dentro da Central de Componentes.````* @param event````* @throws Exception````*/````@Override````public` `void` `disable(ActivationEvent event)``throws` `Exception {` ```}` `}` |
| --- |

Em seguida, no arquivo [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) deve ser criada a propriedade "activation.class", cujo valor deve ser o mesmo da propriedade *"name"* da [annotation](https://docs.oracle.com/javase/tutorial/java/annotations/) da classe de ativação.

Para o exemplo dado acima a propriedade ficaria assim:

**application.info**

[?](#)

| `activation.class=activator``/codigo_widget` |
| --- |

Além disso, para que seu artefato seja corretamente gerado, é necessário adicionar algumas dependências ao seu projeto. Caso o seu projeto seja do tipo maven.

Utilize o código abaixo:

**pom.xml**

[?](#)

| `````````com.fluig````foundation-security-authentication-saml````provided````````````javax````javaee-api````provided````````````com.fluig````wcm-sdk-service````provided````````````com.fluig````wcm-common````provided````````````com.fluig````fluig-sdk-common````provided````````````com.fluig````fluig-sdk-api````provided````````````com.fluig````wcm-core````jar````````````com.fluig````ecm-ejb-api````jar````````````org.json````json````provided```````  `````````````org.apache.maven.plugins````maven-war-plugin````````false````````````org.slf4j, com.fluig.api, com.fluig.api.common````````````````````````net.alchim31.maven````yuicompressor-maven-plugin````````````````compress````````````````````false````true````-1````false````false````false````true````false``````````````` |
| --- |

Exemplo Completo

Para uma visão mais completa dessa técnica, é possível visualizar um dos *widgets* disponibilizados pela equipe do TOTVS Fluig Plataforma em nosso repositório de [samples](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse), como por exemplo o *widget* de [convênios.](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse/wcm/widget/kit_convenios)


<!-- anchors: highlighter_806090, highlighter_242909, highlighter_844461 -->
