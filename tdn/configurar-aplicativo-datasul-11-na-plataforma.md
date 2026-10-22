---
title: "Configurar aplicativo Datasul 11 na plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Configurar+aplicativo+Datasul+11+na+plataforma"
scraped_at: "2026-03-09T03:10:15.523Z"
depth: 1
anchors: 8
child_links: 56
---

# Configurar aplicativo Datasul 11 na plataforma

# Índice

Atenção!

Devido a necessidade de execução de applets, este recurso não tem seu funcionamento como esperado. Os applets são uma tecnologia depreciada e por este motivo foram descontinuados pelos navegadores no geral.

### Configuração de Aplicativo Datasul 11 no TOTVS Fluig Plataforma

---

Para executar os programas do EMS é necessário configurar o Adapter e Aplicativo.

![](/download/attachments/74645637/image2013-9-11%2013%3A47%3A43.png?version=1&modificationDate=1378917992000&api=v2)

### Cadastrando o Adapter

---

Primeiro é necessário cadastrar um adapter que utilize o arquivo **Dtsul11Adapter.jar**. Para isso é somente necessário adicionar um novo adapter e no campo **Arquivo JAR** informar:

[?](#)

| `{$WDKPROTOCOL}://{$WDKHOST}:{$WDKPORT}/{$WDKWEBHOME}/utils/Dtsul11Adapter.jar` |
| --- |

A funcionalidade **Adapter** está disponível no menu **Painel de Controle**, agrupador **Desenvolvimento**.

![](/download/attachments/74645702/2-datasul11.png?version=1&modificationDate=1409253177000&api=v2)

### Cadastrando o aplicativo

---

Depois do adapter cadastrado é necessário criar o aplicativo que vai executar o Datasul 11.

Clicar em **Adicionar** e informe o código do aplicativo e descrição, selecione o adapter do Datasul 11 e no campo linha de comando informe qualquer caractere (no caso do exemplo abaixo foi informado um ponto final “.”), pois a tela valida se tem informação no campo *Linha Comando* e caso não tenha nada informado, ela não deixa o usuário adicionar o aplicativo.

![](/download/attachments/74645702/image2013-9-11%2015%3A16%3A24.png?version=1&modificationDate=1378923313000&api=v2)

No cadastro do aplicativo, também é necessário adicionar cinco parâmetros na tabela **Parâmetros**, para incluir um parâmetro basta clicar no botão **Adicionar**.

![](/download/attachments/74645702/image2013-9-11%2015%3A20%3A48.png?version=1&modificationDate=1378923577000&api=v2)

Os parâmetros cadastrados devem ser configurados conforme tabela a seguir:

| Parâmetro | Valor | Variável por Usuário | Formato Senha |
| --- | --- | --- | --- |
| host | Informar o nome do servidor ou IP | Não | Não |
| port | Informar a porta de comunicação com o servidor | Não | Não |
| user | Informar o código do usuário do Datasul 11. | Sim | Não |
| password | Informar a senha do usuário do Datasul 11. | Sim | Sim |
| dialect | Informar o dialeto para exibição das mensagens de erro. Valores possíveis: "PT" (Português), "EN" (Inglês), "ES" (Espanhol) | Opcional. Se não for informado, será assumido o dialeto padrão (PT) | Não |

Nota

Os parâmetros devem estar com o código exatamente como descrito na coluna **Parâmetro** da tabela acima, respeitando maiúsculas e minúsculas.

### Publicando um Aplicativo

---

Para configurar um programa do Datasul 11 será necessário publicar um novo aplicativo abaixo de uma pasta.

![](/download/attachments/74645637/image2013-9-11%2014%3A12%3A57.png?version=1&modificationDate=1378919506000&api=v2)

Deve ser selecionado o aplicativo EMS configurado anteriormente e no campo **Parâmetros** deve ser informado a constante **Program:** mais o caminho do programa Datasul que será executado.

**Exemplo:**

[?](#)

| `Program:cdp/cd0704.w` |
| --- |

![](/download/attachments/74645702/image2013-9-11%2015%3A30%3A26.png?version=1&modificationDate=1378924156000&api=v2)

 Publicando o aplicativo será criado o link na pasta selecionada e ao clicar será aberto o programa informado nos parâmetros do aplicativo.

### Configurando os parâmetros variáveis

---

Como alguns parâmetros são variáveis, cada usuário deve acessar as Preferências do Usuário e configurar estes parâmetros. 

Por exemplo o dialeto, caso o usuário seja argentino, provavelmente terá preferência pelo dialeto espanhol.

Assim como ele também poderá ter como preferência um determinado usuário no Datasul 11, conforme abaixo:

![](/download/attachments/74645702/image2013-9-11%2015%3A33%3A26.png?version=1&modificationDate=1378924335000&api=v2)


<!-- anchors: ConfiguraraplicativoDatasul11naplataforma-Índice, ConfiguraraplicativoDatasul11naplataforma-ConfiguraçãodeAplicativoDatasul11noTOTVSFluigPlataforma, ConfiguraraplicativoDatasul11naplataforma-CadastrandooAdapter, highlighter_140683, ConfiguraraplicativoDatasul11naplataforma-Cadastrandooaplicativo, ConfiguraraplicativoDatasul11naplataforma-PublicandoumAplicativo, highlighter_796895, ConfiguraraplicativoDatasul11naplataforma-Configurandoosparâmetrosvariáveis -->
