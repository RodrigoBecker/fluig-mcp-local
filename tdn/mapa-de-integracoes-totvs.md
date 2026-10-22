---
title: "Mapa de Integrações TOTVS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73083721"
scraped_at: "2026-03-09T04:57:25.759Z"
depth: 3
anchors: 1
child_links: 59
---

# Mapa de Integrações TOTVS

| Painel de Integração com Fluig | Linha Microsiga Protheus | RM | Datasul | Logix |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Versão/Release | Documentação | Versão/Release | Documentação | Versão/Release | Documentação | Versão/Release | Documentação |  |  |
| GED | Publicação de Relatórios no Fluig ECM | TOTVS 11 | http://tdn.totvs.com.br/pages/viewpage.action?pageId=6814295 | TOTVS 11.80 | http://wikihelp.totvs.com.br/WikiHelp/CON3/INT.linhaRMxByYouECM.aspx | TOTVS 11.5.10 | http://tdn.totvs.com/display/SDKV1/Central+de+Documentos | TOTVS 12 | http://tdn.totvs.com.br/pages/viewpage.action?pageId=39682542 |
| Publicação de documentos pelo ERP | TOTVS 11 | 1) Disponível no HelpOnLine do produto, na seção Padrão de Operação (http://www.totvs.com/mktfiles/tdiportais/helponlineprotheus/portuguese/padrao_de_operacao.htm) 2) A parametrização é feita pela rotina do configurador 'Wizard do Ged'/CFGXGED (http://www.totvs.com/mktfiles/tdiportais/helponlineprotheus/portuguese/sigacfg.htm) | TOTVS 11.20 | http://tdn.totvs.com/pages/viewpage.action?pageId=4816710 | TOTVS 11.5.10 | 1) Publicação de documentos pelo ECM ( http://tdn.totvs.com/pages/viewpage.action?pageId=81789095 ) 2) Parametrização da integração entre ERP e ECM ( http://tdn.totvs.com/pages/viewpage.action?pageId=35750187 ) | TOTVS 12 | 1) Publicação de documentos pelo ECM (http://tdn.totvs.com/pages/viewpage.action?pageId=108660019) 2) Parametrização da integração do ERP com o ECM (http://tdn.totvs.com/pages/viewpage.action?pageId=108659933) |  |
| Publicação de documentos pelo ECM com visibilidade no ERP | TOTVS 11 | Disponível através da especificação externalDocumentnId do documento ECM e da inclusão na pasta correlata da Rotina do ERP. O ERP necessita que o externalDocumentnId tenha o seu conteudo preenchido com a PrimaryKey da tabela | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789100 | TOTVS 12 | Disponível através do Visualizador de Relatórios do Logix, a partir da inclusão dos documentos na pasta correlata da empresa. |  |  |
| WorkFlow | A partir de um evento no ERP, interagir com um workflow (iniciar, movimentar, finalizar, atualizar dados do formulário) | TOTVS 11 | 1) Disponível no HelpOnLine do módulo Configurador - Rotina 'Regras de WorkFlow' / CFGA110 (http://www.totvs.com/mktfiles/tdiportais/helponlineprotheus/portuguese/sigacfg.htm) | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789205 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108660253 |  |
| Wizard de geração automática de formulários do ERP | TOTVS 11 | 1) Disponível no HelpOnLine do módulo Configurador - Rotina 'Wizard do WorkFlow' / CFGXWF (http://www.totvs.com/mktfiles/tdiportais/helponlineprotheus/portuguese/sigacfg.htm) | Não disponível | Não disponível | Não disponível |  |  |  |  |
| A partir do ECM permitir a chamada de uma rotina do ERP | TOTVS 11 | http://tdn.totvs.com/display/fluig/3.0+Como+invocar+uma+rotina+do+Microsiga+Protheus | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789185 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108660633 |  |  |
| A integração do ERP com o Formulário do ECM tem a capacidade de popular os dados do formulário | TOTVS 11 | http://tdn.totvs.com/display/fluig/Linha+Microsiga+Protheus | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789205 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108660318 |  |  |
| A integração do ERP com o formulário do ECM permite o uso de LookUp/Consulta em campos chaves do formulário | RoadMap |  | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789187 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108661003 |  |  |
| A integração do ERP com o formulário do ECM permite a validação das regras de negócio (BO) | TOTVS 11 | http://tdn.totvs.com/display/fluig/Linha+Microsiga+Protheus | RoadMap | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789185 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108660633 |  |  |
| A integração do ERP com o formulário do ECM permite a atualização, exclusão ou inclusão de uma transação no ERP | TOTVS 10 | http://tdn.totvs.com/display/fluig/Linha+Microsiga+Protheus | Todos os objetos de negócio CRUD estão disponíveis, mais informação  em:
http://wikihelp.totvs.com.br/WikiHelp/CON3/INT.comunicacaoWebServices.aspx
http://wikihelp.totvs.com.br/WikiHelp/CON3/INT.comunicacaoWebServicesTBC.aspx
http://tdn.totvs.com/download/attachments/143655277/DataServer+para+WebServices.rar | TOTVS 11.5.10 | http://tdn.totvs.com/pages/viewpage.action?pageId=81789185 | TOTVS 12 | http://tdn.totvs.com/pages/viewpage.action?pageId=108660633 |  |  |


<!-- anchors: panel1 -->
