---
title: "Leiaute Versão S-1.2 - Processo Trabalhista"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=795934077"
scraped_at: "2026-03-09T05:34:03.108Z"
depth: 4
anchors: 5
child_links: 123
---

# Leiaute Versão S-1.2 - Processo Trabalhista

**Eventos contemplados**

- [S-2500 – Processo Trabalhista](https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-S-1.1/index.html#evtProcTrab)
- [S-2501 – Informações dos Tributos Decorrentes de Processo Trabalhista](https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-S-1.1/index.html#evtContProc)
- [S-3500 – Exclusão de Eventos – Processo Trabalhista](https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-S-1.1/index.html#evtExcProcTrab)

**Premissas**

- Ter aplicado Pacote Correções e Dicionário Diferencial eSocial, disponível em nossa página centralizadora
- Registrar as informações decorrentes de processos trabalhistas, através do Cadastro de Processos (APTA100), no módulo SIGAGPE 
- Conforme definição do eSocial os eventos do Processo Trabalhista estão disponíveis apenas na versão S-1.2
- Necessário habilitação do serviço REST.
- Aplicar pacote Centralizador TAF
- Aplicar pacote Centralizador eSocial 

Importante!

- O Processo vinculado ao Cadastro de Processos do modulo SIGAGPE (APTA100)
- Não haverá validação com outros eventos do eSocial, por exemplo: Folha e SST.
- Não possui regra de negócio específica.
- Não possui integração com Folha, SST e Financeiro.
- Foi disponibilizado no TAF o cadastro desses eventos também, disponível para clientes TAF FULL.
- Preenchimento dos campos de acordo com o Leiaute do eSocial, para que os eventos não sejam rejeitados.

**Objetivo**

Permitir o cadastro do resultado do processo trabalhista que foi **concluído**a partir de 06/11/2023 em diante.

Espaço Legislação

A área [espaço legislação](https://espacolegislacao.totvs.com/) da TOTVS é destinada a apresentar todas as novidades e atualizações da legislação fiscal e tributária brasileira. Temos também um espaço no [YouTube](https://www.youtube.com/playlist?list=PLXa8l0dq5zRkxpHqPKL7ZVYHt3urJ9VeM) com os eventos realizados.

Aproveite e se [inscreva](https://rhinforma.totvs.com/) para receber os comunicados.

**Como Funciona**

- [Menu](#)
- [Cadastro do evento S-2500](#)
- [Cadastro do evento S-2501](#)
- [Evento S-3500](#)

Procedimento para Configuração:

1. No Configurador (SIGACFG) acesse Ambientes / Cadastro / Menu (CFGX013). Informe a nova opção de menu conforme instruções a seguir:

| Menu | SubMenu | Nome da Rotina | Programa | Módulo | Tipo |
| --- | --- | --- | --- | --- | --- |
| Menu | SubMenu | Nome da Rotina | Programa | Módulo | Tipo |
| Gestão de Pessoal | Atualizações\Processos Trabalhistas\Processos | Dados do eSocial | TAFA552D   | Gestão de Pessoal | Função Protheus |
| Gestão de Pessoal | Atualizações\Processos Trabalhistas\Processos | Eventos Processos Trabalhistas | GPEM038 | Gestão de Pessoal | Função Protheus |

** A rotina **APTA101** foi substituída pela rotina TAFA552D e não deve ser utilizada no menu.*

Ao clicar no menu Atualizações > Processos Trabalhistas > Processos > Dados eSocial será exibida a tela abaixo:

Apresentando os processos previamente cadastrados através do módulo SIGAGPE, cadastro de processos (APTA100)

![](/download/attachments/795934077/image2023-1-4_9-54-18.png?version=1&modificationDate=1697761714247&api=v2)

Importante

O botão Incluir Processos não deve ser utilizado 

Caso o botão seja selecionado, será apresentado a seguinte mensagem 

![](/download/attachments/795934077/image2023-1-4_10-10-45.png?version=1&modificationDate=1697761714650&api=v2)

A primeira tela é o Filtro, que exibe o processo que já teve o resultado incluído através da rotina (APTA100). Para buscar um Processo ou Trabalhador específico basta informar o número nos campos correspondentes e clicar na lupa (![](/download/attachments/795934077/image2023-1-3_18-17-30.png?version=1&modificationDate=1697761711910&api=v2)).

![](/download/attachments/795934077/image2023-1-3_18-9-13.png?version=1&modificationDate=1697761712317&api=v2)

Para manutenção dos dados do processo, selecionar a opção Editar conforme abaixo:

![](/download/attachments/795934077/image2023-1-4_10-46-27.png?version=1&modificationDate=1697761714850&api=v2)

**Aba Identificação do processo**

Esta aba permite a digitação dos grupos abaixo:

 - ideResp: Identificação do contribuinte, caso tenha havido imposição de responsabilidade indireta;

 - infoProcesso: Informações do processo judicial ou de demanda submetida à CCP ou ao NINTER;

 - dadosCompl: Informações complementares do processo ou da demanda;

 - infoProcJud: Informações complementares do processo judicial;

 - infoCCP: Informações complementares da demanda submetida à CCP ou ao NINTER.

![](/download/attachments/795934077/image2023-1-3_18-21-31.png?version=1&modificationDate=1697761711537&api=v2)

**Aba Identificação do trabalhador**

Esta aba permite a digitação dos grupos abaixo:

 - ideTrab: Informações do trabalhador.

![](/download/attachments/795934077/image-2023-12-14_8-1-6.png?version=1&modificationDate=1702551666767&api=v2)

**Aba Contrato de trabalho**

Esta aba permite a digitação dos grupos abaixo, após clicar em**+ Incluir contrato de trabalho**:

 - infoContr: Informações do contrato de trabalho;

   infoCompl: Informações complementares do contrato de trabalho;

     remuneracao: Informações da remuneração e periodicidade de pagamento.

     - infoVinc: Informações sobre o vínculo trabalhista;

     - duracao: Duração do contrato de trabalho;

     - observacoes: Observações do contrato de trabalho;

     - sucessaoVinc: Grupo de informações da sucessão de vínculo trabalhista/estatutário;

     - infoDeslig: Informações do desligamento

     - infoTerm: Informações de término de TSVE.

   mudCategAtiv: Informação do novo código de categoria e/ou da nova natureza da atividade.
   unicContr: Informações dos vínculos/contratos incorporados;
   ideEstab: Identificação do estabelecimento;

     - infoVlr: Informações dos períodos e valores;

     - abono: Identificação do(s) ano(s)-base em que houve indenização substitutiva de abono salarial (**novo**);

     - idePeriodo: Identificação do período ao qual se referem as bases de cálculo;

       baseCalculo: Bases de cálculo de contribuição previdenciária e FGTS;

         infoAgNocivo: Grau de exposição a agentes nocivos;

       infoFGTS: Informações referentes a bases de cálculo de FGTS para geração de guia;
       baseMudCateg: Bases de cálculo já declaradas em GFIP, no caso de reconhecimento de mudança de código de categoria.

![](/download/attachments/795934077/image2023-1-3_18-31-8.png?version=1&modificationDate=1697761711177&api=v2)

Para que o botão SALVAR fique habilitado é necessário que todos os campos obrigatórios sejam preenchidos em todas as abas exibidas. 

Quando um campo for obrigatório ele não exibirá a palavra (opcional) porém pelo leiaute do eSocial alguns campos são definidos como opcionais, no entanto passam a ser obrigatórios dependendo das informações digitadas em outros campos. Esta regra pode ser visualizada através da [documentação técnica disponibilizada pelo eSocial](https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-1.2/index.html/#evtProcTrab).

A geração do XML será executado através da rotina de Geração de Processos Trabalhistas (GPEM038) no módulo SIGAGPE:  [S-2500 Processo Trabalhista](https://tdn.totvs.com/x/oqphM)

Após a inclusão das informações no evento S-2500, deve incluir o S-2501, caso exista.

A primeira tela é o Filtro, que exibe o processo que já teve o tributo incluído através desta tela. Para buscar um Processo ou Mês/Ano de pagamento específico basta informar o número nos campos correspondentes e clicar na lupa (![](/download/attachments/795934077/image2023-1-3_18-17-30.png?version=1&modificationDate=1697761711910&api=v2)).

![](/download/attachments/795934077/image2023-1-3_19-43-20.png?version=1&modificationDate=1697761711723&api=v2)

Se for o primeiro cadastro, deve-se clicar no botão **+ Incluir tributo.**Na tela exibida, deve-se inserir o número do processo (cadastrado no S-2500) que terá a inclusão dos tributos, e clicar na lupa (![](/download/attachments/795934077/image2023-1-3_18-17-30.png?version=1&modificationDate=1697761711910&api=v2)) para que a relação de trabalhadores que estão no mesmo processo, caso exista mais de um, sejam exibidos:

![](/download/attachments/795934077/image2023-1-3_19-45-56.png?version=1&modificationDate=1697761711360&api=v2)

Esta área permite a visualização dos grupos abaixo:

 - ideProc: Identificação do processo;

 - ideTrab: Identificação do trabalhador.

O tributo, caso exista, deve ser informado por trabalhador, para isso basta clicar no **Editar** para que seja possível a inclusão dos grupos abaixo:

Esta aba permite a digitação dos grupos abaixo:

 - calcTrib: Identificação do período e da base de cálculo dos tributos;

   infoCRContrib: Informações das contribuições sociais.

 infoCRIRRF: Informações de IRRF.

   - infoIR: Informações complementares, vinculadas ao infoCRIRRF/tpCR, relacionadas a rendimentos tributáveis e a deduções e/ou isenções de acordo com a legislação aplicada ao imposto de renda (**novo**);

   - infoIRRA: Informações complementares de RRA (**novo**);

   - dedDepen: Dedução do rendimento tributável relativa a dependentes (**novo**);

   - penAlim: Informação dos beneficiários da pensão alimentícia (**novo**);

   - infoProcRet: Informações de processos relacionados a não retenção de tributos ou a depósitos judiciais (**novo**); 

     infoValores: Informações de valores relacionados a não retenção de tributos ou a depósitos judiciais (**novo**) ;

       dedSusp: Detalhamento das deduções com exigibilidade suspensa (**novo**)

         benefPen: Informação das deduções suspensas por dependentes e beneficiários da pensão alimentícia (**novo**) .

 infoIRComplem: Informações relacionadas à retenção na fonte, aos rendimentos tributáveis e não tributáveis, deduções e/ou isenções, etc., de acordo com a legislação aplicada ao imposto de renda (**novo**);

   - infoDep: Informações de dependentes não cadastrados pelo S-2200/S-2205/S-2300 (**novo**).

![](/download/attachments/795934077/image-2023-12-14_8-16-47.png?version=1&modificationDate=1702552607140&api=v2)

![](/download/attachments/795934077/image-2023-12-14_8-17-26.png?version=1&modificationDate=1702552646737&api=v2)

![](/download/attachments/795934077/image-2023-12-14_8-17-49.png?version=1&modificationDate=1702552669573&api=v2)

Para que o botão SALVAR fique habilitado é necessário que todos os campos obrigatórios sejam preenchidos em todas as abas exibidas. Quando um campo for obrigatório ele não exibirá a palavra (opcional). Porém, pelo leiaute do eSocial alguns campos são definidos como opcionais, porém passam a ser obrigatórios dependendo das informações digitadas em outros campos. Esta regra pode ser visualizada através da [documentação técnica disponibilizada pelo eSocial](https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-1.2/index.html/#evtContProc).

A geração do XML será executado através da rotina de Geração de Processos Trabalhistas (GPEM038) no módulo SIGAGPE:  [S-2501 Informações dos Tributos Decorrentes de Processo Trabalhista](https://tdn.totvs.com/x/K6thM)

[Regra da exclusão](https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/mos-s-1-1-retificada-em-02122022.pdf/), conforme definição do eSocial:

A exclusão de um evento S-2500 não pode ser efetuada se houver um evento S-2501 que faça referência a ele. Ou seja, para a exclusão do evento S-2500 deve-se excluir, primeiramente, o(s) evento(s) S-2501 a ele vinculado(s).

A geração do XML será executado através da rotina de Geração de Processos Trabalhistas (GPEM038) no módulo SIGAGPE:  [S-3500 - Exclusão de Eventos - Processos Trabalhistas](https://tdn.totvs.com/x/oathM)


<!-- anchors: ComoFunciona, ComoFunciona-Menu, ComoFunciona-EventoS2500, ComoFunciona-EventoS2501, ComoFunciona-EventoS3500 -->
