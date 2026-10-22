---
title: "Matriz de Portabilidade Fluig ESB"
url: "https://tdn.totvs.com/display/public/fluig/Matriz+de+Portabilidade+Fluig+ESB"
scraped_at: "2026-03-09T03:24:14.338Z"
depth: 2
anchors: 1
child_links: 19
---

# Matriz de Portabilidade Fluig ESB

Na matriz de portabilidade você encontra os requisitos necessários para a execução do Fluig ESB, como por exemplo, sistema operacional e navegadores.

A matriz é atualizada constantemente na tabela abaixo: 

| ### TOTVS Fluig Plataforma |  |  |  |  |
| --- | --- | --- | --- | --- |
| SERVIDOR | Categoria | Produto | Versão |  |
| SGBD | SQL SERVER | 2008 - Saiba mais9 |  |  |
| 2012 |  |  |  |  |
| 2014 |  |  |  |  |
| 2016 |  |  |  |  |
| MYSQL | 5.5 |  |  |  |
| 5.6 |  |  |  |  |
| 5.7 |  |  |  |  |
| ORACLE | 12C ou inferior |  |  |  |
| MIDDLEWARE  | Sistemas Operacionais 5   | Windows Server 2012 ³ |  |  |
| Windows Server 2012 R2 ³ |  |  |  |  |
| Windows Server 2016 |  |  |  |  |
| Linux Red Hat Enterprise 6.4 ou superior |  |  |  |  |
| CentOS 6.4 ou superior ¹ |  |  |  |  |
| Linux Oracle 6.4 ou superior |  |  |  |  |
| LOAD BALANCER | Apache | 2.4.12 |  |  |
| Big IP | Firmware versão 10 |  |  |  |
| Appliance LTM 1300 |  |  |  |  |
| VIRTUALIZAÇÃO | VMWare | VMware vSphere 5.0 ou superior |  |  |
| Hyper-V | Hyper-V em Microsoft Windows Server 2012 R2 |  |  |  |
| CLIENTEDESKTOP | BROWSER | GOOGLE CHROME (32bits) | 47.0.X ou superior |  |
| FIREFOX (32bits) | 43.0.X ou superior |  |  |  |
| SAFARI | - |  |  |  |
| INTERNET EXPLORER (32bits) | IE 11 6 |  |  |  |
| MICROSOFT EDGE | AVL |  |  |  |
| Resolução | Minimo: 1024x768 |  |  |  |
| Método de entrada | Mouse e Teclado |  |  |  |
| RUNTIME | Oracle JAVA | Java 8 |  |  |
| PDF | 1.7 ou inferior |  |  |  |
| MS OFFICE | 2007 ou superior 4 |  |  |  |
| CLIENTEMOBILE  | BROWSERS | iOS - Safari | iOS 6 ou superior |  |
| Android - (Chrome e webkit) | Android 4.0.3 ou superior |  |  |  |
| Windows Phone - IE | Windows Phone 8.0 ou 8.1 |  |  |  |
| Windows Mobile - EDGE | Windows 10 Mobile |  |  |  |
| APP NATIVO 8 | iOS | iOS 9 ou superior 7 |  |  |
| Android | Android 4.0.3 ou superior |  |  |  |
| Windows Phone | Windows Phone 8.0 ou 8.1 |  |  |  |
| Windows Mobile | Windows 10 Mobile |  |  |  |
| TRADUÇÃO | País | Idioma |  |  |
| Estados Unidos | Inglês |  |  |  |
| Brasil | Português |  |  |  |
| Estándar | Espanhol |  |  |  |
| Legenda: |  |  |  |  |
| - HOMOLOGADOPassou por nossos testes e suportamos essa configuração em nosso atendimento. |  |  |  |  |
| - EM  ANÁLISEA homologação deste item está em roadmap e está condicionada a análise, portanto não há uma previsão de homologação para os itens nesta situação. |  |  |  |  |
| - NÃO HOMOLOGADOO item foi avaliado e não é homologado para a plataforma. |  |  |  |  |
| * A instalação da plataforma deve ser realizada em sistemas operacionais 64 bits. |  |  |  |  |

****

**1:** Versão homologada apenas para a plataforma Fluig. Para saber quais versões são homologadas para o Fluig Viewer acesse a [Matriz de Portabilidade do Fluig Viewer](https://tdn.totvs.com/x/8af5Cw).

**2:**Não está homologado o uso da arquitetura ORACLE EXADATA DATABASE MACHINE.
****

**3:** Para o Sistema Operacional Windows é necessário a instalação do **Microsoft .NET Framework 4.0** e **Internet Information Services (IIS)**. O procedimento de instalação está disponível no [Instalação fluig (Instalador) - Windows](#).

****

**4:** Para utilização do Conversor Customizado é necessário o **Microsoft Office 2010** ou superior.

**5:** Os sistemas operacionais descritos na matriz de portabilidade em SERVIDOR também estão homologados para o servidor do ESB.

**6:**Em 12/01/2016 a Microsoft deixou de suportar os navegadores IE 8, 9 e 10 no seu suporte básico, e com isso a plataforma Fluig também não dará suporte a estas versões.

**7:**Recomendamos manter o dispositivo na última versão disponível do iOS, dessa forma ele contará com todas as correções disponibilizadas pela fabricante.

****

**8:**O aplicativo Fluig Mobile para cada plataforma móvel (iOS, Android e Windows Phone) pode ter recursos diferentes, visto que uma pode ser uma evolução diferente da outra. Na documentação de [Recursos do Fluig Mobile](https://tdn.totvs.com/x/fIYtCw) estão os recursos disponíveis nos aplicativos para cada plataforma.

****

**9: **O Banco de Dados SQL Server 2008 só é suportado pelo ESB até a versão 12.3.5 (passando pelos ciclos de testes necessários), pois a Microsoft não disponibiliza mais atualizações e canais de suporte para este produto. A partir desta versão será necessário atualizar para o banco de dados SQL Server 2012 ou superior.

Observação: O plugin Fluig Studio está homologado apenas para os sistemas operacionais Windows e Linux.


<!-- anchors: MatrizdePortabilidadeFluigESB-TOTVSFluigPlataforma -->
