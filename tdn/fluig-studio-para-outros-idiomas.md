---
title: "Fluig Studio para outros idiomas"
url: "https://tdn.totvs.com/display/public/fluig/Fluig+Studio+para+outros+idiomas"
scraped_at: "2026-03-09T03:05:28.076Z"
depth: 1
anchors: 9
child_links: 50
---

# Fluig Studio para outros idiomas

# Alterar idioma do fluig Studio 

O idioma padrão do fluig Studio é o Português. Contudo é possível ativar a tradução tanto para o Inglês como para o Espanhol.

### Configurar idioma

Siga o procedimento a seguir para alterar o idioma utilizado:

- [Primeiros passos](#)
- [Alternativa 1](#)
- [Alternativa 2](#)

 - No Studio, acesse menu **Help | Install new software**.![](http://tdn.totvs.com/download/attachments/24347981/ide500.png?version=1&modificationDate=1340371366000&api=v2)

   - *No campo **Work with:***, informe o endereço do projeto "Babel", que é o responsável pelo gerenciamento de internacionalização do Eclipse. Escolha o update site conforme sua versão do Eclipse no site [https://eclipse.org/babel/downloads.php](https://eclipse.org/babel/downloads.php) 

   - Localize o adicional **Babel Language Packs for eclipse**e expanda-o;

   - No item expandido, selecione os idiomas desejados;

   - Acione **Next**e prossiga com as instruções fornecidas;

   - Ao solicitar a reinicialização, ***não***o faça.

   - Encerre o *TOTVS | Developer Studio*;

Ainda não acabou

O procedimento de configuração ainda não acabou.

É possível prosseguir de duas maneiras diferentes, veja na sequência duas formas alternativas para prosseguir.

  - A primeira alternativa é alterando o arquivo*developerStudio.ini* (eclipse.ini para Eclipse Keppler) adicionando os parâmetros *Duser.language* e Duser.country, informe o idioma desejado:  

     **Espanhol**

     [?](#)
| `-Duser.language=es``-Duser.country=ES` |
| --- |

     **Inglês**

     [?](#)
| `-Duser.language=en``-Duser.country=US` |
| --- |

     **Português (Brasil)**

     [?](#)
| `-Duser.language=pt``-Duser.country=BR` |
| --- |

     Inicie o Studio normalmente.

 - A segunda alternativa é editar o atalho (conforme seu sistema operacional), acrescentando o parâmetro *-nl locale* (localização) na linha de comando;

![](http://tdn.totvs.com/download/attachments/24347981/ide501.png?version=1&modificationDate=1340372476000&api=v2)

**

 - *O parâmetro de inicialização nl*, necessita da informação *locale*, que indica qual o idioma a ser utilizado. Este valor é composto por uma ou mais siglas, que formam um código. O *TOTVS | Developer Studio*suporta os seguintes idiomas com seus respectivos códigos.

| Idioma | Exeplo de linha de comando |
| --- | --- |
| Português (Brasil) | eclipse.exe -nl pt_BR |
| Inglês | eclipse.exe -nl en_US |
| Espanhol | eclipse.exe -nl es_ES |

Inicie o Studio normalmente.

Observação

Alguns menus poderão ficar indisponíveis após a instalação do Eclipse Babel e do Plugin Fluig (Ex: Menu de Importação, Lista de perspectivas, Menu "novo"). Caso isso aconteça verifique a presença de pacotes RAP dentro dos plugins instalados em seu eclipse. Em alguns casos é necessário remover estes pacotes para que os menus voltem a funcionar no idioma em que a IDE esteja trabalhando . Abaixo segue um exemplo de um pacote rap que poderá causar este problema . Este pacote poderá vir junto com a instalação do plugin Babel.

![](/download/attachments/102269023/trad.png?version=1&modificationDate=1431632163000&api=v2)


<!-- anchors: FluigStudioparaoutrosidiomas-AlteraridiomadofluigStudio, FluigStudioparaoutrosidiomas-Configuraridioma, samples, samples-1, samples-2, highlighter_912427, highlighter_396216, highlighter_570302, samples-3 -->
