---
title: "Protocolo fluig://"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240309710"
scraped_at: "2026-03-09T04:12:21.255Z"
depth: 2
anchors: 21
child_links: 70
---

# Protocolo fluig://

# Índice

# Objetivo

O objetivo deste guia é detalhar as formas de interação com o aplicativo Fluig mobile através do URL *scheme* "fluig://", bem como a utilização de outros *schemes* a partir do próprio aplicativo. Desta forma, é possível realizar a abertura de recursos do Fluig Plataforma em interface nativa do aplicativo e habilitar a utilização de outros serviços, por exemplo: em um formulário, por meio de geolocalização, realizar a abertura de um aplicativo de mapas.

Para mais informações, as documentações referentes a cada plataforma encontram-se nos seguintes *links*: [Apple](https://developer.apple.com/library/mac/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html), [Google](https://developer.android.com/guide/components/intents-common.html), [Microsoft](https://msdn.microsoft.com/pt-br/library/windows/apps/jj662937(v=vs.105).aspx).

Atenção

O uso de links não é recomendado dentro de um formulário workflow, pois ao acessá-los, o contexto de onde se está, é perdido, prejudicando o usuário.

# Definições Gerais

O Fluig mobile suporta a interceptação de determinadas URLs, que possibilitam ao usuário utilizar *links* pré-configurados para abrir recursos do aplicativo do Fluig. Ao tocar sobre estes *links* em outra aplicação instalada no dispositivo móvel, o usuário será redirecionado para o Fluig mobile.

Alguns dos recursos disponíveis são a abertura de processos, acesso às comunidades e perfis de usuários. Esses *links* podem ser utilizados tanto externamente, realizando a chamada via navegador e aplicativos de terceiros quanto internamente, no próprio Fluig mobile.

A seguir serão apresentado os *links* reconhecidos pelo aplicativo, através do URL*scheme* "fluig://".

- [Portal](#)
- [Outros exemplos](#)

No My Fluig é possível acessar recursos do aplicativo por meio de *links*. Para isso, basta compor um *link* em HTML incluindo o *scheme* "fluig://" no inicio do endereço. Por exemplo:

[?](#)

| `Link Mobile para o fluig Portal` |
| --- |

Dessa forma, ao tocar no link, o dispositivo móvel entenderá que ele deve ser aberto através do aplicativo My Fluig.

Aviso!

   - Caso o *link* configurado aponte para uma conta não configurada no Fluig mobile, o aplicativo será aberto na tela de cadastro.

   - Ao tocar no link configurado quando o dispositivo não tem o Fluig mobile instalado, nada ocorrerá.

  **Fique atento!**

No Fluig mobile é possível abrir links nativos via click de usuário e também via programação. Para os casos onde o usuário deseja abrir uma tela nativa utilizando um link para click é necessário fazer o uso do **href** configurando a url em questão utilizando o *scheme* “fluig://”. 
**Exemplo:** <a href="fluig://[http//suaempresa.com.br](https://http//suaempresa.com.br/)">Link Mobile para o fluig Portal</a>

Já para os casos onde o usuário deseja abrir uma tela nativa via programação, é necessário fazer o uso do **window.open** configurando a url em questão. 
**Exemplo:** window.open(fluig://http//suaempresa.com/portal/p/empresa/social/id-do-perfil)

Os dois modos de abertura de links funcionam com os links disponíveis na aba **Outros exemplos**.

![](/download/attachments/240309710/oie_transparent%20%2843%29.png?version=1&modificationDate=1586967699793&api=v2)![](/download/attachments/240309710/protocolo2.png?version=1&modificationDate=1469017447000&api=v2)

Abaixo estão listados exemplos dos *links* atualmente suportados para acesso externo no Fluig mobile, sendo que o endereço de cada página existente no Fluig pode ser copiado ao acessar a página em questão a partir do navegador *web*.

 - Comunidade: 

    [?](#)
| `Comunidade` |
| --- |

 - Perfil:

    [?](#)
| `Perfil` |
| --- |

 - Documento:

    [?](#)
| `Documento` |
| --- |

 - Processo:

    [?](#)
| `Processo` |
| --- |

 - Central de Tarefas:

    [?](#)
| `Central de Tarefas` |
| --- |

 - Conexões - Seguindo:

    [?](#)
| `Seguidores` |
| --- |

 - Conexões - Seguidores:

    [?](#)
| `Seguindo` |
| --- |

Aviso !

   - Estarão disponíveis para uso do protocolo fluig:// apenas os *links* de páginas informadas acima. O uso de outras URLs "fluig://" para páginas não suportadas pelo aplicativo irá direcionar o usuário para a tela inicial do Fluig mobile.

   - Todos os *links* listados acima estão disponíveis para iOS, Android e Windows Phone.

# Como abrir aplicativos externos pelo Fluig

Aplicativos nativos do sistema operacional, como Telefone e Email, possuem o seu próprio URL *scheme* ( "tel://" e "mailto://", respectivamente) e a partir desses *schemes* é possível executar ações dentro de um formulário ou *widget* para realizar ligações, enviar emails e outros recursos acionados ao tocar em um botão ou *link*. 

Assim como o Fluig mobile e aplicativos nativos do sistema, aplicativos de terceiros também possuem seu próprio *scheme* com recursos diferenciados. Portanto, também é possível iniciar estes aplicativos externos a partir de um formulário ou *widget* no Fluig mobile, desde que os aplicativos externos suportem os respectivos *schemes*. 

Em caso de dúvidas, é necessário consultar a documentação do aplicativo desejado, pois cada aplicativo tem suas particularidades.

## Telefone e Email  

Dispositivos móveis geralmente possuem aplicativos nativos de telefone e email pré-instalados e esses apps seguem um padrão de resposta ao serem iniciados por outros aplicativos através dos *schemes* "tel://" para o telefone e "mailto://" para o email. A partir do *scheme*, outros aplicativos podem invocá-los, passando informações relevantes e automatizando o processo de uma ligação ou envio de *email*. 

Em um dispositivo móvel que possua mais de um aplicativo de telefone ou *email* instalado, será possível escolher qual aplicativo será iniciado, não sendo obrigatório utilizar os aplicativos nativos.  

Em caso de dúvidas para utilização dos *schemes* e suporte a plataforma desejada, as seguintes documentações podem ser consultadas: [Apple](https://developer.apple.com/library/mac/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html), [Google](https://developer.android.com/guide/components/intents-common.html), [Microsoft](https://msdn.microsoft.com/pt-br/library/windows/apps/jj662937%28v=vs.105%29.aspx). 

- [Telefone](#)
- [Email](#)

A utilização do recurso de ligação telefônica em formulários é uma de muitas ferramentas disponíveis que tornam o seu formulário mais interativo, completo e eficaz. O recurso de ligação é acionado ao tocar no *link* de um número de telefone, como no exemplo abaixo.

Isso faz com que o Fluig mobile interprete a ação e abra o aplicativo de telefone do seu dispositivo, já informando o número de telefone cadastrado no formulário.

![](/download/attachments/240309710/tel.png?version=1&modificationDate=1472043917000&api=v2)![](/download/attachments/240309710/doc2.png?version=1&modificationDate=1474477985000&api=v2)

Para mais informações sobre essa implementação, faça o download do exemplo (**form-mobile-mail**) de implementação [clicando aqui.](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/form-mobile-mail)

Assim como o telefone, com o *scheme* "mailto://" é possível abrir o aplicativo de *email* que deseja e iniciar uma nova mensagem com os dados cadastrados nos campos de um formulário. Ao tocar no *link* de *email* do usuário, será executado um aplicativo de *email* instalado no dispositivo móvel para realização do envio de *email*, como na imagem abaixo.

![](/download/attachments/240309710/mail.png?version=1&modificationDate=1472043950000&api=v2)![](/download/attachments/240309710/doc.png?version=3&modificationDate=1474478197000&api=v2)

Para mais informações de como utilizar o *scheme* "mailto://", faça o download do exemplo (**form-mobile-tel**) de implementação [clicando aqui.](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/form-mobile-tel)

Aviso !

Para aplicativos de terceiros, deve-se consultar a documentação sobre a utilização de *scheme*s no *site* do desenvolvedor do aplicativo em questão.

# Geolocalização

O recurso de geolocalização permite obter a localização do usuário através da *internet* durante a abertura de um formulário, desde que esse formulário possua o recurso de geolocalização implementado e o usuário permita o acesso à sua localização. Esse recurso também pode ser utilizado em páginas e processos.

É possível criar formulários mais ricos e dinâmicos em conteúdo através da geolocalização do usuário que estiver acessando o formulário, permitindo por exemplo, tocar em um botão para abrir o aplicativo de navegação Waze.

Para saber como utilizar a geolocalização acesse a documentação: [Desenvolvimento de formulário mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573).

## Geolocalização com o aplicativo Waze

Com o My Fluig, você pode abrir outros aplicativos instalados no dispositivo e um deles é o Waze (aplicativo de navegação GPS). Isso torna possível repassar as coordenadas obtidas através de um formulário com geolocalização para o Waze realizar a navegação.

![](/download/attachments/240309710/geolocalizacao11.png?version=1&modificationDate=1468934700000&api=v2)![](/download/attachments/240309710/geolocalizacao12.png?version=1&modificationDate=1468934728000&api=v2)

Para mais recursos de implementação disponíveis pelo Waze, clique [aqui](https://www.waze.com/pt-BR/about/dev) e para um exemplo (**form-mobile-waze**) de implementação em formulários, [aqui.](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/form-mobile-waze)


<!-- anchors: Protocolofluig://-Índice, Protocolofluig://-Objetivo, Protocolofluig://-DefiniçõesGerais, 1, 1-00, highlighter_636038, 1-01, highlighter_755400, highlighter_901202, highlighter_36558, highlighter_744847, highlighter_511093, highlighter_996168, highlighter_338779, Protocolofluig://-ComoabriraplicativosexternospeloFluig, Protocolofluig://-TelefoneeEmail, 4, 4-41, 4-42, Protocolofluig://-Geolocalização, Protocolofluig://-GeolocalizaçãocomoaplicativoWaze -->
