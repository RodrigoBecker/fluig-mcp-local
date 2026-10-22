---
title: "TOTVS SMART NIP - Importação e cadastro de NIPS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=641852675"
scraped_at: "2026-03-09T05:30:02.283Z"
depth: 4
anchors: 2
child_links: 164
---

# TOTVS SMART NIP - Importação e cadastro de NIPS

O Legal Data é um conjunto de serviços que proveem ao módulo SIGAJURI a busca e importação automática de publicações, andamentos, distribuições e Índices de correção monetária, facilitando o dia a dia de um escritório e/ou departamento jurídico.

- **Configuração da solução para busca de NIPS via Webservice TOTVS:**

## Guia passo a passo

1. **Configuração da solução para busca de NIPS via Webservice TOTVS: ****No módulo Configurador (SIGACFG) acesse Base de Dados/Dicionario/Base de Dados/Parâmetros e crie\configure os parâmetros conforme as especificações abaixo:****MV_JINDUSR = " Teste"**  (Indicar o usuário recebido da TOTVS ao contratar o serviço de NIPS)
2. **MV_JINDPSW = "Teste" ** (Indicar a senha recebido da TOTVS ao contratar o serviço de NIPS)

No Configurador (SIGACFG), acesse Ambientes / Schedule / Schedule (CFGA010) e cadastre o novo agendamento para receber as NIPS, conforme instruções a seguir:

1. Clique em Agente >  Cadastro e clique no botão incluir.![](https://tdn.totvs.com/download/attachments/431675067/image2018-11-1_16-38-36.png?version=1&modificationDate=1541104716887&api=v2)
2. Informe um nome para o Agent, o IP, a porta, o ambiente e a empresa de onde do AppServer onde o serviço deverá rodar. e o nº de threads com "1" e confirme![](/download/attachments/641852675/image2021-9-27_10-0-34.png?version=1&modificationDate=1632749875330&api=v2)
3. Clique em Agendamentos > Cadastro e clique no botão incluir.![](https://tdn.totvs.com/download/attachments/431675067/image2018-11-1_16-48-4.png?version=1&modificationDate=1541105284443&api=v2)
4.  Informe no campo Rotina = JURA298("T1","D MG 01 ","000000")Onde "T1" = Empresa, **"D MG 01 "** = Filial e "000000" = UsuárioO campo Empresa/Filial = Empresa e Filial que fara a busca das NIPS e o módulo como **76 - Gestão Jurídica**
5. Clique no Botão Recorrência e Informe o intervalo desejado (recomendado 1:00 hora), o nº de execuções que poderão ocorrer no mesmo dia (24 x 01:00 hora = 24 horas do dia),  sem data de término e descartar tarefas atrasadas.![](/download/attachments/641852675/image2021-9-27_10-8-0.png?version=1&modificationDate=1632749875207&api=v2)
6. Clique em Schedule e inicie os serviços Task Managere e Queue Manager.![](https://tdn.totvs.com/download/attachments/431675067/image2018-11-1_17-12-10.png?version=1&modificationDate=1541106730137&api=v2)
7. Clique em Agent e inicie o Agente que criamos.![](/download/attachments/641852675/image2021-9-27_10-31-35.png?version=1&modificationDate=1632749875163&api=v2)
8. Clique em Agendamentos > Cadastros e então selecione o agendamentos que acabamos de criar e clique em Executar Agora.![](/download/attachments/641852675/image2021-9-27_10-32-48.png?version=1&modificationDate=1632749875050&api=v2)
9. À partir deste momento, o sistema fará a busca automática das NIPS e suas atualizações que poderão ser visualizadas e importadas na Rotina de Andamentos (JURA100)
## Artigos relacionados
[DJURDEP-314 DT Disponibilização dos serviços do LegalData](/pages/viewpage.action?pageId=274310068)[Andamentos - JURA100 - Gestão Jurídica - P12](/pages/viewpage.action?pageId=243632191)[DT_JURJUR002_13_Andamentos_Automáticos](/pages/viewpage.action?pageId=244738583)[DT_PCREQ_7560_Cadastro_Rápido](/pages/viewpage.action?pageId=240978052)[Distribuições - JURA219 - Gestão Jurídica - P12](/pages/viewpage.action?pageId=286021332)


<!-- anchors: TOTVSSMARTNIPImportaçãoecadastrodeNIPS-Guiapassoapasso, TOTVSSMARTNIPImportaçãoecadastrodeNIPS-Artigosrelacionados -->
