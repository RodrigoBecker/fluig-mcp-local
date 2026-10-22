---
title: "Integração NCM - Infoconsult"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=453289361"
scraped_at: "2026-03-09T05:28:02.033Z"
depth: 4
anchors: 2
child_links: 192
---

# Integração NCM - Infoconsult

# Integração NCM - Infoconsult

O  aplicativo  Convertec  é  uma  solução  da  InfoConsult  que  permite  a  atualização  da  NCM  com  informações  da  Substituição Tributária.

A  integração  deste  arquivo  no  Easy  Import  Control(SIGAEIC)  permite  a  atualização  as  seguintes  informações  em  NCMs  já cadastradas no sistema e sendo NCMs válidas:

- Alíquota do II, IPI, PIS/PASEP e COFINS.

**APLICATIVO COVERTEC**

A  Infoconsult  utiliza  o  sistema  Convertec  para  exportar  as  informações  da  TEC  (NCMs,  Alíquotas,  Naladi).  O  sistema  gera  um arquivo  texto  o  TEC.txt,que será  utilizado  pelo  Easy  Import  Control  (SIGAEIC)  para  integrar  e  atualizar  a  base  de  dados  das NCMs

**Importante**

O arquivo gerado pelo Convertec deverá permanecer com o seu nome original **TEC.txt**, qualquer alteração em seu nome faz com que o módulo Importação(SIGAEIC) não reconheça o arquivo e impeça a integração.

**Exemplo de como exportar um arquivo do Convertec:**

1. Acesse o aplicativo Convertec.
2. Na pasta TEC,selecione Opções Marcadas e preencha as informações que deseja importar e clique em Carregar. Atenção para os campos **"Limitador de Linhas"**, **"Separador entre campos"** e **"Tamanho da descrição".******![](/download/attachments/453289361/image2019-1-29_16-38-29.png?version=1&modificationDate=1548790709737&api=v2)**Importante: **O Easy Import Control somente integra as informações de II, IPI, PIS e COFINS. As demais informações não serão consideradas.
3. O sistema gerará arquivo TEC.txt com os dados das NCMs solicitadas. Segue exemplo:

![](/download/attachments/453289361/image2019-1-29_16-42-3.png?version=1&modificationDate=1548790923860&api=v2)

****

**Procedimento para Utilização**

**Sequência 01 – Configuração:**

Para realizar a integração do arquivo gerado pelo aplicativo Convertec para o Easy Import Control (SIGAEIC), é necessário realizar as seguintes configurações no sistema.

**Configuração da tabela CE:**

1. No **Configurador (SIGACFG)**, acesse **Ambiente\ Cadastros\ Tabelas.**
2. Clique em **Pesquisar** e pesquise a tabela **CE**.
3. Serão apresentados todos os cadastros da tabela **CE**.
4. Clique em **Editar.**
5. Será apresentada a tela **Tabela dos Paths das máquinas**, clique em **Itens** e selecione a chave **A1INFO** e na coluna **Descrição** preencha o caminho que será gravado o arquivo gerado pelo aplicativo com as atualizações.**Observação:**É obrigatório informar a \ no final do caminho onde ficará o arquivo****texto, a falta desse caractere impedirá a integração do arquivo.
6. Em seguida, clique em OK para gravar a alteração.

**Sequência 02 – Integração NCM:**

Depois da geração do arquivo texto, é necessário salvá-lo no diretório pré-configurado para que o módulo Importação realize a leitura dos dados e atualize o cadastro de NCM.

1. No Easy Import Control (SIGAEIC), acesse Atualizações\Tabelas\Integração NCM (EASYTEC).
2. Em Programa usado para recuperação, selecione a opção TEC da Infoconsult.
3. Logo depois, em Dados Importação, informe a máquina utilizada e a NCM desejada.

| Campo | Descrição | Conteúdo |
| --- | --- | --- |
| Campo | Descrição | Conteúdo |
| Máquina | Informe o número da máquina que se deseja utilizar. | A1 |
| Desde NCM | Informe a partir de qual NCM se deseja integrar. | 0101.1010 |
| Até NCM | Informe até qual NCM se deseja integrar. | 9999.99.09 |

4. Em seguida, pressione o botão OK.

5. Logo depois, será apresentada a mensagem Confirmar o processamento?. Clique em Sim.

6. O sistema realizará uma leitura no arquivo texto gerado.

7. Em seguida, inicializará a atualização das alíquotas no sistema.

8. Ao término das atualizações, o sistema apresentará uma tela com log da integração.

**Importante**

O arquivo texto gerado pela TEC da Infoconsult **SEMPRE** deverá ter o nome TEC.txt, caso o arquivo seja alterado para outro nome, o sistema apresentará a mensagem:

"**Arquivo TEC.txt não encontrado.** **Por favor, verifique as configurações de diretório e do software da InfoConsult."**

# Integração NCM - Interface Web

O aplicativo “Interface WEB” é uma solução da Aduaneiras que permite a atualização TEC (Tarifa Externa Comum) e de NCM com informações da Substituição Tributária. 

Este aplicativo faz o acesso ao banco de dados Oracle da Aduaneiras via conexão de internet, efetuando as consultas e transferências de dados atualizados e gravando essas informações em um arquivo que será lido pelo módulo de importação.

A integração deste arquivo no Easy Import Control (SIGAEIC) permite a atualização as seguintes informações em N.C.M.s já cadastradas no sistema:

- Informação do “Ex”;
- Alíquotas do II, IPI, PIS/PASEP, COFINS.

**CONFIGURAÇÃO**

Para realizar a integração do arquivo gerado pelo aplicativo Interface Web para o Easy Import Control (SIGAEIC) é necessário realizar as seguintes configurações no sistema.

**Configuração da tabela CE:**

1. No módulo **Configurador (SIGACFG)** acesse **Ambiente\Cadastros\Tabelas**.
2. Clique em **Pesquisar** e pesquise a tabela **CE.**
3. Serão apresentados todos os cadastros da tabela **CE**.
4. Clique em **Editar.**
5. Será apresentada a tela **Tabela dos Paths das maquinas** clique em **Itens,** selecione a chave **A1TECW** e na coluna **Descricao** preencha o caminho que se encontra o aplicativo da Aduaneiras – INTERFWEB.EXE.

**Importante:**

Deve-se informar somente o caminho (Exemplo: C:\Arquivodeprogramas\Aduaneiras\Interfweb) em que se encontra o executável, pois o nome do aplicativo é chamado pelo programa.

**Configuração do parâmetro:** 

1. No módulo **Configurador (SIGACFG)** acesse **Ambiente\Cadastros\Parametros.**
2. Clique em **Pesquisar** e digite o parâmetro **MV_TIPOADU.** 

Neste parâmetro deverá ser informado o tipo de integração desejada conforme as opções abaixo.

| Parâmetro | Descrição | Tipo |
| --- | --- | --- |
| Parâmetro | Descrição | Tipo |
| MV_TIPOADU | Tipo de Integração com o Interface WEB.1 - Ato Legal2 - Naladi3 - Geral | N |

****

**APLICATIVO INTERFWEB**

O aplicativo poderá importar três tipos de arquivos. Para o grupo TEC, as informações exportadas serão salvas no arquivo-texto nas seguintes condições:

1-  Ato Legal à Arquivo de retorno Interfato.txt

2-  Naladi à Arquivo de retorno InterfNaladi.txt

3-  Geral à Arquivo de retorno Interf.txt

**Importante:**As informações importadas dependerão das opções da Interface Web****adquiridas pelo usuário.

**Exemplo de como importar um arquivo no Interface Web.**

1. Acesse o aplicativo **InterfWeb**.
2. Na pasta **Processo** selecione as informações que deseja importar

![](/download/attachments/453289361/image2019-1-29_16-56-59.png?version=1&modificationDate=1548791820303&api=v2)

3. Na pasta **Configuração** selecione o formato do arquivo que será importado, a separação do campo e texto.

****

4. Após configurar as opções desejadas, clique no botão **Iniciar** para o início da importação das informações.Durante todo o processo de importação, a barra de progresso será atualizada mostrando o percentual e o número de registros importados.

**Importante:** 

O Easy Import Control (SIGAEIC) só integra os arquivos gerados pela opção “Delimitado”, os demais arquivos não realizam a integração.

**Exemplo – Como realizar a integração da NCM:**

1. No **Easy Import Control (SIGAEIC),** acesse as opções **Atualizações\ Tabelas\****Integração NCM.**
2. Em **Programa usado para recuperação** selecione a opção **Aduaneiras**
3. Logo após em **Dados Importação** informe a máquina utilizada e o intervalo de NCM desejado.

| Campo | Descrição | Conteúdo |
| --- | --- | --- |
| Campo | Descrição | Conteúdo |
| Maquina | Informe o número da máquina que se deseja utilizar | A1 |
| Desde NCM | Informe a partir de qual NCM se deseja integrar | 0101.10.10 |
| Até NCM | Informe até qual NCM se deseja integrar | 9999.99.99 |

4. Em seguida, pressione o botão **OK**.

5. Será apresentada a mensagem **Confirma o processamento?**, clique em **Sim**

6. O sistema realizará a leitura das N.C.M.s par atualizar as alíquotas.

7. Ao término será apresentada a tela de log da atualização.

8. Ao confirmar a tela, será exibida a mensagem **Deseja Recuperar novamente as ****NCM’s não recuperadas?.**

9. Caso queira recuperar novamente as NCM´s clique na opção **Sim**, caso contrário clique na opção **Não.**

****


<!-- anchors: IntegraçãoNCMInfoconsult-IntegraçãoNCM-Infoconsult, IntegraçãoNCMInfoconsult-IntegraçãoNCM-InterfaceWeb -->
