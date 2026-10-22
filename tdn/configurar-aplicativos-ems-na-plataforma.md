---
title: "Configurar aplicativos EMS na plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Configurar+aplicativos+EMS+na+plataforma"
scraped_at: "2026-03-09T03:10:07.853Z"
depth: 1
anchors: 13
child_links: 57
---

# Configurar aplicativos EMS na plataforma

# Índice

Atenção!

Devido a necessidade de execução de applets, este recurso não tem seu funcionamento como esperado. Os applets são uma tecnologia depreciada e por este motivo foram descontinuados pelos navegadores no geral.

### Configuração de Aplicativo EMS no TOTVS Fluig Plataforma

---

Para executar os programas do EMS é necessário configurar o Adapter e Aplicativo.

![](/download/attachments/74645637/image2013-9-11%2013%3A47%3A43.png?version=1&modificationDate=1378917992000&api=v2)

### Cadastrando o Adapter

---

Primeiro, é necessário cadastrar um adapter que utilize o arquivo emshradapter.jar. Para isso somente é necessário adicionar um novo adapter e no campo Arquivo JAR informar o trecho abaixo:  

[?](#)

| `{$WDKPROTOCOL}://{$WDKHOST}:{$WDKPORT}/{$WDKWEBHOME}/utils/emshradapter.jar` |
| --- |

A funcionalidade **Adapter** está disponível no menu **Painel de Controle**, no agrupador **Desenvolvimento**.

![](/download/attachments/74645637/2-ems.png?version=1&modificationDate=1409253224000&api=v2)

### Cadastrando o aplicativo

---

Depois do adapter cadastrado, é necessário criar o aplicativo que vai executar o EMS.

Clique em adicionar e informe o código do aplicativo e descrição, selecione o adapter do EMS e no campo linha de comando informe o trecho abaixo: 

[?](#)

| `{$PARAM_path_PROGRESS}\bin\prowin32.exe -pf {$PARAM_pf} -basekey ini -ininame {$PARAM_ininame} -p men\men906za.p` |
| --- |

![](/download/attachments/74645637/image2013-9-11%2013%3A55%3A28.png?version=1&modificationDate=1378918458000&api=v2)

Nota

Para bancos unificados deve-se criar um novo arquivo de alias, onde neste arquivo deverá ser alterado o comando RUN, informando o valor: **men/men906za.p**.

E na linha de comando do aplicativo deve ser informado o parâmetro **–p** com o caminho do novo arquivo de alias. **Exemplo abaixo:**

[?](#)

| `{$PARAM_path_PROGRESS}\bin\prowin32.exe –pf {$PARAM_pf} -basekey ini -ininame {$PARAM_ininame} –p f:\datasul\ems\alias.p` |
| --- |

No cadastro do aplicativo é necessário também adicionar sete parâmetros na tabela **Parâmetros**, para incluir um parâmetro basta clicar no botão **Adicionar**.

![](/download/attachments/74645637/image2013-9-11%2015%3A27%3A37.png?version=1&modificationDate=1378923986000&api=v2)

Os parâmetros cadastrados devem ser configurados conforme tabela a seguir:

| Parâmetro | Valor | Variável por Usuário | Formato Senha |
| --- | --- | --- | --- |
| company | 1 (Empresa do EMS, normalmente é 1) | Não | Não |
| ininame | Informar o caminho do arquivo INI utilizado no atalho do EMS. Ex: \\servidor\ems\scripts\progress.ini | Opcional. Se o caminho for o mesmo para todos os usuários não há necessidade de ser variável. | Não |
| password | Informar a senha do usuário do EMS | Sim | Sim |
| path_PROGRESS | Informar o caminho do diretório de instalação do Progress® na máquina do usuário. Exemplo: C:\dlc101b | Sim | Não |
| pf | Informar o caminho do arquivo PF utilizado no atalho do EMS. Ex: \\servidor\ems\scripts\ems.pf | Opcional. Se o caminho for o mesmo para todos os usuários não há necessidade de ser variável. | Não |
| product | Informar o produto que será executado (EMS2, EMS5 ou HR). Para o EMS2.04 usar EMS2. | Não | Não |
| user | Informar o usuário de acesso ao EMS | Sim | Não |

Nota

Os parâmetros devem estar com o código exatamente como descrito na coluna **Parâmetro** da tabela acima, respeitando **maiúsculas** e **minúsculas**.

Para garantir que a linha de comando está corretamente configurada, pode-se fazer um teste simples no Executar do Windows®. Substitua os parâmetros da linha de comando pelos valores reais e execute-o.

**Por exemplo, altere:**

**De:**

[?](#)

| `{$PARAM_path_PROGRESS}\bin\prowin32.exe -pf {$PARAM_pf} -basekey ini -ininame {$PARAM_ininame} -p men\men906za.p` |
| --- |

**Para:**

[?](#)

| `c:\dlc101b\bin\prowin32.exe -pf f:\ems\scripts\ems.pf  -basekey ini -ininame f:\ems\scripts\progress.ini -p men\men906za.p` |
| --- |

### Publicando um Aplicativo

---

Para configurar um programa do EMS será necessário publicar um novo aplicativo abaixo de uma pasta.

![](/download/attachments/74645637/image2013-9-11%2014%3A12%3A57.png?version=1&modificationDate=1378919506000&api=v2)

Deve ser selecionado o aplicativo EMS configurado anteriormente e no campo **Parâmetros** deve ser informado a constante **Program:** com o caminho do programa EMS que será executado.

**Exemplo:**

[?](#)

| `Program:btb/btb001aa.w` |
| --- |

![](/download/attachments/74645637/image2013-9-11%2014%3A14%3A34.png?version=1&modificationDate=1378919604000&api=v2)

 Publicado o aplicativo, será criado o link na pasta selecionada e ao clicar no link será aberto o programa informado nos parâmetros do aplicativo.

### Configurando os parâmetros variáveis

---

Como alguns parâmetros são variáveis, cada usuário deve acessar as **Preferências do Usuário** e configurar estes parâmetros. Por exemplo o caminho do Progress®, usuário e senha do EMS.

![](/download/attachments/74645637/image2013-9-11%2014%3A18%3A52.png?version=1&modificationDate=1378919861000&api=v2)

### Third Party Trademarks

---

JavaScript is a trademark of Oracle Corporation.

Microsoft and Windows are registered trademarks of Microsoft Corporation in the United States and/or other countries.

Java is a trademark of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.

Progress and OpenEdge are trademarks or registered trademarks of Progress Software Corporation or one of its subsidiaries or affiliates in the U.S. and other countries.

Any other third party trademarks are the property of their respective owners.


<!-- anchors: ConfiguraraplicativosEMSnaplataforma-Índice, ConfiguraraplicativosEMSnaplataforma-ConfiguraçãodeAplicativoEMSnoTOTVSFluigPlataforma, ConfiguraraplicativosEMSnaplataforma-CadastrandooAdapter, highlighter_175762, ConfiguraraplicativosEMSnaplataforma-Cadastrandooaplicativo, highlighter_120848, highlighter_60503, highlighter_124359, highlighter_128943, ConfiguraraplicativosEMSnaplataforma-PublicandoumAplicativo, highlighter_595776, ConfiguraraplicativosEMSnaplataforma-Configurandoosparâmetrosvariáveis, ConfiguraraplicativosEMSnaplataforma-ThirdPartyTrademarks -->
