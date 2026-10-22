---
title: "Distribuição de Combustíveis e Lubrificantes - DCL"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=558244097"
scraped_at: "2026-03-09T05:29:33.592Z"
depth: 4
anchors: 13
child_links: 161
---

# Distribuição de Combustíveis e Lubrificantes - DCL

## 

## CONTEÚDO

1. **Visão Geral**
2. **Premissas**
3. **Embasamento**
4. **Roteiro de Instalação/Aplicação do Template**
5. **Ajustes Iniciais**
6. **Roteiro Operacional**
7. **Relatório de Log com Erros**
8. **Geração de Arquivo Texto**
9. **Programas******
10. **Menu**
11. **Tabela LX5 (Similar ao SX5)******
12. **Entidades**

****

## 01. VISÃO GERAL

O DCL visa atender um nicho de mercado que engloba os Distribuidores de Combustíveis e Lubrificantes que precisam enviar informações à ANP (Agência Nacional do Petróleo), conforme Resolução ANP Nº 17, de 31.08.2004 – DOU 01.09.2004 – Retificada DOU 12.11.2004.

Importante

A solução TOTVS DCL para o distribuidor de combustíveis e lubrificantes é um pacote customizado de Fábrica. Para mais informações, favor acionar o seu Executivo de Relacionamento TOTVS.

## 02. PREMISSAS

1. Utilização do sistema Protheus.
2. Os módulos Estoque e Custos (SIGAEST) e Faturamento (SIGAFAT) já devem estar em produção. Os Templates DCL (EST,FIS,VEI,DCP e SIMP) devem estar aplicados e devidamente parametrizados.
3. Os Tipos de Entrada e Saída (TES) devem ter sido cadastrados adequadamente pelos usuários, com supervisão dos responsáveis do setor fiscal, para tratamento das particularidades fiscais deste nicho de mercado, conforme legislação em vigor.
4. Os cadastros de Clientes, Fornecedores, Produtos e Tipos de Movimentação deverão ter sido previamente revisados e alterados, caso tenha sido considerado necessário, para que os campos referentes ao iSimp estejam valorizados corretamente.
5. O mês, para o qual será gerado o arquivo, já deverá ter tido o seu estoque fechado, previamente, no último dia do mês.

## 03. EMBASAMENTO

Toda a legislação relacionada está disponível no site da Agência Nacional de Petróleo [www.anp.gov.br](http://www.anp.gov.br).

## 04. ROTEIRO DE INSTALAÇÃO/APLICAÇÃO DO TEMPLATE

Considerações Iniciais:

1. Replicar o ambiente de produção para outro ambiente de testes.
2. Atualizar o ambiente de testes criado através do [https://suporte.totvs.com/home](https://suporte.totvs.com/home) (RPO, BIN, etc).
3. Processar a aplicação do Template no ambiente de teste.
4. Testar todas as funcionalidades utilizadas pelo cliente e as do Template aplicado, de maneira a identificar possíveis conflitos entre as customizações existentes e as funcionalidades do Template e do Protheus.

Observação

A atualização do ambiente de produção somente deverá ser feita após os procedimentos descritos acima e após cópia de segurança de todo ambiente atual. Isto possibilitará o retorno ao ambiente anterior em caso da ocorrência de eventuais problemas com o novo ambiente.

**Autorização de Uso de Template**
No caso de ser a primeira aplicação do template será necessário acionar o Executivo de relacionamento para solicitação.
Em seguida serão enviados os arquivos:

1. DCLDCP.LTP: Liberação do uso deste novo ambiente.
2. DCLSIMP.TPL: Arquivo a ser usado na aplicação do Template.
3. DCLSIMP.XNU: Opções do menu a ser inserido no menu do Faturamento (SIGAFAT).
4. Manual TPL DCLSIMP.DOC: Manual de instalação e operação deste Template.
5. No caso do DCL SIMP, a TOTVS manterá o controle de autorização de uso do sistema através do DCLDCP.LTP já presente no ambiente dos clientes.

**Cuidados na aplicação e/ou reaplicação do Template**

1. Ao aplicar o Arquivo DCLSIMP.TPL deve ser observado as ordens dos arquivos SX3 (Dicionário de Dados) e SX7 (Gatilhos) para não entrar em conflito com as possíveis ordens já criadas em customizações.
2. No caso de reaplicação do template todos os parâmetros do template devem ser verificados e ajustados. O arquivo de perguntas também sofrerá alterações. Este é um dos motivos que reforçam a necessidade do backup do ambiente para que os usuários tenham referência para re-parametrização do sistema.
3. O aplicador do template utiliza-se das regras do objeto de atualização de versão, o qual sobregrava qualquer campo com o conteúdo do default do mesmo, caso ele seja padrão do sistema e/ou template.

**Aplicação do Template**

1. Inserir o menu enviado nos menus dos usuários (SIGAFAT.MNU x DCLSIMP.MNU)
2. Protheus 11 - Salvar o arquivo DCLDCP.LTP no diretório \SIGAADV
3. Protheus 11 – Salvar o arquivo DCLDCP.LTP no diretório \P11\Protheus_Data\System
4. Baixar o arquivo DCLSIMP.TPL no diretório rdmake ou outro visualizável pelo Protheus11
5. Antes de aplicar o Template, em um ambiente SQL, execute o sistema para a criação e carga do SX5.
6. Abrir o Totvs Developer Studio 11.3 (TDS) 32 ou 64 bits, de acordo com o ambiente que será aplicado o template.
7. No Menu Principal selecionar a opção Projetos.
8. Acionar a opção Abrir Template (usar o arquivo DCLSIMP.TPL no diretório em que foi baixado).
9. Acionar a opção Aplicar Template.
10. Na tela que se abrirá neste momento, escolher em qual empresa será gerado o Template.

Observação

O processamento de aplicar o Template executará a aplicação automática dos patchs com os rdmakes e execblocks no repositório.
Este processamento também atualiza a base de dados e os arquivos de controle do sistema (SXs).

## 05. AJUSTES INICIAIS

Ajuste a ordem dos campos da nota fiscal de Entrada, como segue (Depois do TES e na sequência os campos abaixo):

1. D1_T_MASSA (Massa especifica do produto expressa em KG/M3)
2. D1_T_MODAL (Código SIMP da via de transporte)
3. D1_T_EMBAR (Código SIMP da Embarcação)
4. D1_DUTO (Código SIMP do Duto)
5. D1_T_SERVI (Caixa de seleção com os Serviços SIMP)
6. D1_T_VGLP (Código SIMP do Recipiente GLP)
7. D1_T_DI (Número da Declaração de Importação)
8. D1_T_LI (Número da Licença de Importação)

## 06. ROTEIRO OPERACIONAL

**Parâmetros**

- [Parâmetros DCL](/pages/viewpage.action?pageId=558249001)

**Cadastros**

Importar/atualizar as tabelas SIMP do site da ANP ou cadastrá-las/atualizá-las manualmente. O acesso aos cadastros SIMP pode ser feito pelo menu:

![](/download/attachments/558244097/imagem.PNG?version=1&modificationDate=1597091157067&api=v2)

| Cadastros/Movimentações | Objetivo |
| --- | --- |
| Cadastros/Movimentações | Objetivo |
| Agentes Regulados Informantes (ARI’s) | Informar dados, referentes ao iSIMP, que são pertinentes ao cadastro de ARI’s. |
| Instalações | Informar dados, referentes ao iSIMP, que são pertinentes as instalações dos ARI’s cadastradas na ANP |
| Produtos | Informar dados, referentes ao iSIMP, que são pertinentes ao cadastro de produtos. |
| Operações | Informar dados das operações ANP. |
| Modais (Via Transp.) | Informar código e descrição da Modalidade de Transporte. |
| Cadastro de Dutos | Cadastrar dados dos Dutos regulamentados ANP. |
| Embarcações | Cadastrar dados das embarcações, quando necessário. |
| Municípios | Informar código e nome do município, de acordo com a tabela fornecida pela ANP. |
| Ativ. Econômicas | Informar código e descrição das atividades econômicas, de acordo com a tabela fornecida pela ANP. |
| Países | Informar código e nome do país, de acordo com a tabela fornecida pela ANP. |
| Carac. Fis-Quim | Informar dados das características Físico-Químicas dos produtos, de acordo com a tabela fornecida pela ANP. |
| Método de Aferição | Informar código e descrição dos métodos de aferição utilizados para produzir os laudos de qualidades, de acordo com a tabela fornecida pela ANP. |
| Car.Fis-Quim. n Mens | Informar código e descrição das características físico-químicas não mensuráveis, de acordo com a tabela fornecida pela ANP. |
| Laudos de Qualidade | Informar características físico-químicas dos produtos presentes no laudo de qualidade, de acordo com a tabela fornecida pela ANP. |
| Recipiente GLP | Informar código e descrição dos recipientes GLP padrão ANP. |
| Unidades de Medida | Informar código e descrição das unidades de medidas padrão ANP. |
| Qualidade NF Saída | O usuário deverá selecionar no browse a nota fiscal de saída, que deseja complementar com os dados referentes ao laudo de qualidade de um ou mais itens da mesma.Após a seleção da nota fiscal será exibida a tela com o número e série da nota fiscal e seus respectivos itens.Nesse momento o usuário deverá complementar a Nota Fiscal de Saída com o número do laudo de qualidade do produto. |
| TES | Código de Operação ANP correspondente ao Tipo de Entrada e Saída. |
| TM | Código de Operação ANP correspondente ao Tipo de Movimentação. |
| Cliente | Preencher o campo Cód. ARI na pasta outros.Preencher o campo Cód.Mun.SIMP na pasta outros.Preencher o campo Atv Eco SIMP na pasta outros.Preencher o campo Cd Pais SIMP na pasta outros.Preencher o campo Cd Inst SIMP na pasta outros. |
| Fornecedor | Preencher o campo Cód. ARI na pasta outros.Preencher o campo Cód.Mun.SIMP na pasta outros.Preencher o campo Atv Eco SIMP na pasta outros.Preencher o campo Cd País SIMP na pasta outros.Preencher o campo Cd Inst SIMP na pasta outros. |
| Produto | Preencher o campo Cód. Pro.SIMP na pasta outros.Todo produto SIMP deverá, obrigatoriamente, ter a 2ª Unidade de Medida cadastrada como KG. Portanto, para os produtos SIMP será obrigatório o preenchimento dos campos: Seg. Un.Medi, Fator Conv. e Tipo de Conv. |
| Nota Fiscal de Entrada | Preencher o campo Modal Transp;Preencher o campo Massa Esp;Preencher o campo Cód. Embarc. caso o modal selecionado seja AQUAVIÁRIO;No caso de NF de Importação preencher os campos Num.Lic.Imp e Num.Dec.Imp;Preencher o campo Serviço SIMP caso o modal selecionado seja DUTOVIÁRIO;Preencher o campo Cód. Duto caso o modal selecionado seja DUTOVIÁRIO;Preencher campo Cód.Vas.GLP caso operação com GLP. |
| Pedido de Vendas | Preencher o campo Modal Transp;Preencher o campo Cód. Embarc. caso o modal selecionado seja AQUAVIÁRIO;Preencher o campo Serviço SIMP caso o modal selecionado seja DUTOVIÁRIO;Preencher campo Cód.Vas.GLP caso operação com GLP. |
| Movimentação Interna | Preencher o campo Massa Esp. |

Observação

Um dos campos obrigatórios do arquivo gerado para a ANP é a quantidade da unidade de medida padrão do produto em KG, por isso todo produto SIMP deverá ter os campos acima preenchidos e o campo Seg.Un.Medi o valor KG.

**Tabela IB – Arquivo SX5**
As chaves abaixo devem ser preenchidas nas 07 (Sete) primeiras posições, do campo X5_DESCRI.
Chave SB9ISI: Código utilizado pela operação de saldos iniciais, de acordo com a tabela de operações da ANP;
Chave SB9ISF: Código utilizado pela operação de saldos finais, de acordo com a tabela de operações da ANP;
Chave SB6ETS: Código utilizado para saldo em poder de terceiros, de acordo com a tabela de operações da ANP;
Chave SB6DTS: Código utilizado para o saldo de terceiros, de acordo com a tabela de operações da ANP.

Observação

Nos casos de movimentações internas utilizando os códigos padrões 499 ou 999, o usuário deverá cadastrar na tabela IB a sigla e o código i-SIMP referente ao tipo de movimentação interna realizada por ele. A sigla é padrão Microsiga. Exemplo: IRE4, caso a movimentação interna seja na forma de requisições e seja uma transferência. Para mais informações referentes a movimentações internas, pesquise o manual do sistema.

## 07. RELATÓRIO DE LOG COM ERROS

O Log de erros evidencia os seguintes tipos de inconsistência:

- Problemas cadastrais em geral;
- Inconsistências nos saldos iniciais e finais;

Observação

No relatório os erros serão explicitados com precisão e de forma clara, de acordo com o erro cadastral ou erro inconsistências nos saldos.

## 08. GERAÇÃO DE ARQUIVO TEXTO

Para que o arquivo .txt, que deverá ser enviado a ANP, seja gerado é necessário que o usuário selecione a opção Gerar Arquivo ANP, localizada no menu:
![](/download/attachments/558244097/imagem2.PNG?version=1&modificationDate=1597091574787&api=v2)

Em seguida será exibida a seguinte tela, com os parâmetros para a geração do arquivo.

| Parâmetro | Descrição |
| --- | --- |
| Parâmetro | Descrição |
| Mês | Mês de referência para pesquisa dos dados e geração dos arquivos. |
| Ano | Ano de referência para pesquisa dos dados e geração dos arquivos. |
| Path Gravação | Diretório no qual será gravado o arquivo gerado pela rotina e que posteriormente deverá ser enviando a ANP. |
| Reprocessa Arquivo | Caso o usuário queira gerar um novo arquivo, desconsiderando os dados processados anteriormente, deverá selecionar a opção Sim. Selecionando a opção Não será gerado um novo arquivo considerando somente os dados utilizados no processamento anterior. |
| Produto De | Código de produto que será considerado o inicio do range de pesquisa, para geração do arquivo .txt. |
| Produto Até | Código de produto que será considerado o término do range de pesquisa, para geração do arquivo .txt. |
| Poder de terceiros | Caso o usuário selecione a opção Sim serão considerados, para geração do arquivo .txt, os saldos em poder de terceiros e saldos de terceiros. |
| Filial De | Filial inicial do range de pesquisa, para geração do arquivo .txt. |
| Filial Até | Filial final do range de pesquisa, para geração do arquivo .txt. |

Após a confirmação dos parâmetros informados pelo usuário será gerado o arquivo .txt, cujo o nome será composto pelo Código do ARI + Mês + Ano.txt, no path informado para gravação.

Caso ocorra algum erro na geração do mesmo será exibido o relatório de log de erros, discriminado no tópico (Relatório de Log com Erros).

## 09. PROGRAMAS

| Programa | Descrição |
| --- | --- |
| Programa | Descrição |
| TSMPA001 | Cadastro de Modais i_SIMP ANP |
| TSMPA002 | Cadastro de Unidades de Medidas i-SIMP ANP |
| TSMPA003 | Cadastro de Métodos de Aferição i-SIMP ANP |
| TSMPA004 | Cadastro de Relação de Países i-SIMP ANP |
| TSMPA005 | Cadastro de Municípios i-SIMP ANP |
| TSMPA006 | Cadastro de Características Físico-Quimicas ñ Mensuráveis ANP |
| TSMPA007 | Cadastro de Vasilhames de GLP i-SIMP ANP |
| TSMPA008 | Cadastro de Atividades Econômicas i-SIMP ANP |
| TSMPA009 | Cadastro de Produtos ANP SIMP |
| TSMPA010 | Cadastro de Característica Fis-Quim. Do Produto |
| TSMPA011 | Cadastro de Operações ANP SIMP |
| TSMPA012 | Cadastro de Laudos de Qualidade |
| TSMPA013 | Atualização de Código de Laudo – Itens da NF de Saída. |
| TSMPA014 | Cadastro de Dutos |
| TSMPA015 | Cadastro de Embarcações |
| TSMPA016 | Cadastro de Agentes Regulados Informantes (ARI’s) |
| TSMPA017 | Cadastro de Instalações dos ARI’s |
| TSMPV001 | Validação do campo C5_T_EMBAR |
| TSMPV002 | Validação do campo C5_T_SERVI |
| TSMPV003 | Validação do campo LHY_CODIGO |
| TSMPV004 | Validação do campo LJ1_COD_SI |
| TSMPV005 | Validação do campo LI0_CODDUT |
| TSMPV006 | Validação do campo LHZ_CODIGO |
| TSMPV007 | Validação do campo LDY_CODIGO |
| TSMPV007 | Validação do campo LI1_CODIGO |
| TSMPR001 | Geração do arquivo Texto i-SIMP |

## 10. MENU

Todas as opções referentes ao iSimp (cadastros, geração do arquivo .TXT, etc) estarão no menu Template Dcl-Simp, localizado no arquivo DCLSIMP.xnu.

## 11. TABELA LX5 (SIMILAR AO SX5)

| Tabela | Descrição |
| --- | --- |
| Tabela | Descrição |
| 05 | Modal i-SIMP ANP |
| 07 | Atividades Econômicas i-SIMP ANP |
| 08 | Relação de Países ANP |
| 09 | Métodos de Aferição i-SIMP ANP |
| 10 | Características Físico-Quimicas ñ Mensuráveis ANP |
| 12 | Unidades de Medidas i-SIMP ANP |
| 13 | Vasilhames de GLP |

## 12. ENTIDADES

**SX2 – Paths**

| Tabela | Descrição |
| --- | --- |
| Tabela | Descrição |
| LDY | Cadastro de Municípios |
| LHW | Cadastro de Laudos de Car. Fis-Quim. do Produto |
| LHY | Código do Produto cadastrado na ANP |
| LHZ | Cadastro de Embarcações |
| LI0 | Cadastro de Dutos |
| LI1 | Características Físico-Químicas dos Produtos |
| LI2 | Arq Texto ANP |
| LJ1 | Cadastro de Operações SIMP |

**SXB – Consultas via F3**

| Tabela | Descrição |
| --- | --- |
| Tabela | Descrição |
| LDY | Cadastro de Municípios |
| LHW | Cadastro de Laudos de Car. Fis-Quim. do Produto |
| LHY | Código do Produto cadastrado na ANP |
| LHZ | Cadastro de Embarcações |
| LI0 | Cadastro de Dutos |
| LI1 | Características Físico-Químicas dos Produtos |
| LJ1 | Cadastro de Operações SIMP |

**SA1 – Cadastro de Clientes**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| A1_T_MUNSI | C | 6 | F3 da Tabela de Municípios LX5 (06) |
| A1_T_ATVSI | C | 6 | F3 da Tabela de Atividade Econômica LX5 (07) |
| A1_T_PAISI | C | 6 | F3 da Tabela de Países LX5 (08) |
| A1_T_CODSI | C | 10 | Campo para inclusão do código i-SIMP do cliente |
| A1_T_INST | C | 7 | Informa o código SIMP da instalação que esta sendo cadastrada. |

**SA2 – Cadastro de Fornecedores**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| A1_T_MUNSI | C | 6 | F3 da Tabela de Municípios LX5 (06) |
| A1_T_ATVSI | C | 6 | F3 da Tabela de Atividade Econômica LX5 (07) |
| A1_T_PAISI | C | 6 | F3 da Tabela de Países LX5 (08) |
| A1_T_CODSI | C | 10 | Campo para inclusão do código i-SIMP do cliente |
| A1_T_INST | C | 7 | Informa o código SIMP da instalação que esta sendo cadastrada. |

**SC5 – Cabeçalho do Pedido de Vendas**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| C5_T_MODAL | C | 2 | Alterado para selecionar Modal da Tabela 05 (LX5) - (Campo com dois gatilhos) |
| C5_T_EMBAR | C | 4 | F3 da Tabela de Embarcações LHZ - (Tem X3_WHEN) |
| C5_T_VGLP | C | 6 | F3 da Tabela de Vasilhames GLP 11 (LX5) |

**SB1 – Cadastro de Produtos**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| B1_CODSIMP | C | 10 | Alterado para selecionar Modal da Tabela 05 (LX5) - (Campo com dois gatilhos) |

**SD1 – Itens da Nota Fiscal de Entrada**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| D1_T_SERVI | C | 1 | Combo com os serviços i-SIMP |
| D1_DUTO | C | 6 | F3 da Tabela de Dutos - LI0 |
| D1_T_VGLP | C | 6 | F3 da Tabela de Vasilhames GLP 11 (LX5) |
| D1_T_LI | C | 10 | Número da Licença de Importação |
| D1_T_DI | C | 10 | Número da Declaração de Importação |
| D1_T_MODAL | C | 2 | Alterado para selecionar Modal da Tabela 05 (LX5) - (Campo com dois gatilhos) |
| D1_T_EMBAR | C | 4 | F3 da Tabela de Embarcações LHZ - (Tem X3_WHEN) |
| D1_T_MASSA | C | 8 | Massa especifica do produto expressa em KG/M3 considerando 1 (uma) atmosfera. |

**SD2 – Itens da Nota Fiscal de Saída**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| D2_T_GEROU | N | 1 | Informa se o registro foi informado ou não a ANP 1 - SIM (Informado) 2 ou Empty() - Não (não foi enviado) |
| D2_LAUDO | C | 10 | Nº do laudo de qualidade do produto (Carac. Fis-Quim) |

**SD3 – Movimentação Interna**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| D3_T_MASSA | N | 8 | Massa especifica do produto expressa em KG/M3 considerando 1 (uma) atmosfera. |

**SF4 – TES – Tipo de Entrada e Saída**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| F4_T_OPSIM | C | 7 | Código da Operação SIMP |

**SF5 – Tipos de Movimentação Interna**

| Campo | Tipo | Tamanho | Observação |
| --- | --- | --- | --- |
| Campo | Tipo | Tamanho | Observação |
| F5_T_OPSIM | C | 7 | Código da Operação SIMP |

**SX7 – Gatilhos**

| Domínio | Sequência | Contra-Domínio |
| --- | --- | --- |
| Domínio | Sequência | Contra-Domínio |
| C5_T_MODAL | 1 | C5_T_EMBAR |
| C5_T_MODAL | 2 | C5_T_SERV |
| D1_T_ MODAL | 1 | D1_DUTO |
| D1_T_ MODAL | 2 | D1_T_SERV |
| D1_T_ MODAL | 3 | D1_T_EMBAR |
| LHW_CODPRO | 1 | LHW_PRODUT |
| LHW_CODCAR | 1 | LHW_CARACT |
| LHW_CODCAR | 2 | LHW_UNMEDI |

**SIX – Índices**

| Arquivo | Chave | NickName |
| --- | --- | --- |
| Arquivo | Chave | NickName |
| SD2 | D2_FILIAL + D2_T_GEROU | D2SIMP1 |
| SD2 | D2_FILIAL + D2_DOC + D2_SERIE + D2_COD | D2SIMP2 |
| SD2 | D2_FILIAL + D2_LAUDO | DCL_SIMP12 |
| SB1 | B1_FILIAL + B1_CODSIMP | DCL_SIMP1 |
| SF4 | F4_FILIAL + F4_T_OPSIM | DCL_SIMP2 |
| SF5 | F5_FILIAL + F5_T_OPSIM | DCL_SIMP3 |
| SC5 | C5_FILIAL + C5_T_MODAL | DCL_SIMP4 |
| SC5 | C5_FILIAL + C5_T_EMBAR | DCL_SIMP7 |
| SC5 | C5_FILIAL + C5_T_VGLP | DCL_SIMP17 |
| SD1 | D1_FILIAL + D1_T_MODAL | DCL_SIMP5 |
| SD1 | D1_FILIAL + D1_DUTO | DCL_SIMP6 |
| SD1 | D1_FILIAL + D1_T_EMBAR | DCL_SIMP8 |
| SD1 | D1_FILIAL + D1_T_VGLP | DCL_SIMP18 |
| SA1 | A1_FILIAL + A1_T_MUNSI | DCL_SIMP9 |
| SA1 | A1_FILIAL + A1_T_PAISI | DCL_SIMP15 |
| SA1 | A1_FILIAL + A1_T_ATVSI | DCL_SIMP19 |
| SA1 | A1_FILIAL + A1_T_CODSI | DCL_SIMP21 |
| SA1 | A1_FILIAL + A1_T_INST | DCL_SIMP23 |
| SA2 | A2_FILIAL + A2_T_MUNSI | DCL_SIMP10 |
| SA2 | A2_FILIAL + A2_T_PAISI | DCL_SIMP16 |
| SA2 | A2_FILIAL + A2_T_ATVSI | DCL_SIMP20 |
| SA2 | A2_FILIAL + A2_T_CODSI | DCL_SIMP22 |
| SA2 | A2_FILIAL + A2_T_INST | DCL_SIMP24 |


<!-- anchors: DistribuiçãodeCombustíveiseLubrificantesDCL-CONTEÚDO, DistribuiçãodeCombustíveiseLubrificantesDCL-01.VISÃOGERAL, DistribuiçãodeCombustíveiseLubrificantesDCL-02.PREMISSAS, DistribuiçãodeCombustíveiseLubrificantesDCL-03.EMBASAMENTO, DistribuiçãodeCombustíveiseLubrificantesDCL-04.ROTEIRODEINSTALAÇÃO/APLICAÇÃODOTEMPLATE, DistribuiçãodeCombustíveiseLubrificantesDCL-05.AJUSTESINICIAIS, DistribuiçãodeCombustíveiseLubrificantesDCL-06.ROTEIROOPERACIONAL, DistribuiçãodeCombustíveiseLubrificantesDCL-07.RELATÓRIODELOGCOMERROS, DistribuiçãodeCombustíveiseLubrificantesDCL-08.GERAÇÃODEARQUIVOTEXTO, DistribuiçãodeCombustíveiseLubrificantesDCL-09.PROGRAMAS, DistribuiçãodeCombustíveiseLubrificantesDCL-10.MENU, DistribuiçãodeCombustíveiseLubrificantesDCL-11.TABELALX5(SIMILARAOSX5), DistribuiçãodeCombustíveiseLubrificantesDCL-12.ENTIDADES -->
