---
title: "Identity | Matriz de Portabilidade - TOTVS Identity"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Matriz+de+Portabilidade+-+TOTVS+Identity"
scraped_at: "2026-03-09T04:35:40.430Z"
depth: 3
anchors: 5
child_links: 30
---

# Identity | Matriz de Portabilidade - TOTVS Identity

# Falando de matriz de portabilidade - TOTVS Identity...

---
Na matriz de portabilidade são listados os requisitos necessários para a execução do Identity e aplicativos relacionados, como o SmartSync e Desktop SSO.

Fim do suporte ao Internet Explorer

Olá!

Para garantir a evolução contínua e as demandas de segurança do Identity, o suporte ao navegador Internet Explorer 11 **foi descontinuado** desde março de 2020.

A utilização do Internet Explorer 11 para o acesso às aplicações **não será bloqueada** pelo Identity, contudo esse navegador será desconsiderado nas rotinas de desenvolvimento e testes da ferramenta e eventuais falhas de compatibilidade não serão mais atendidas pela equipe de suporte e manutenção do Identity.

Conforme a [Matriz de Portabilidade](https://tdn.totvs.com/x/eDAxE) do Identity, os navegadores homologados para uso serão o **Mozilla Firefox** e o **Google Chrome**. A futura versão do Microsoft Edge [baseada em Chromium](https://www.microsoftedgeinsider.com/pt-br/), mesma tecnologia empregada pelo Chrome, também será suportada assim que liberada oficialmente pela Microsoft.

Recomendamos que seja realizada a migração dos usuários para um dos navegadores mais modernos suportados.

## Execução de aplicativos tipo Plugin

---

Os navegadores listados abaixo suportam a execução de aplicativos do tipo Plugin, através de uma extensão específica para cada navegador:

| Navegador | Versões |
| --- | --- |
| Navegador | Versões |
| Internet Explorer | 11 (Modo de compatibilidade com versões anteriores do IE não é suportado)Atenção O suporte ao Internet Explorer 11 foi descontinuado em Março/2020. |
| Mozilla Firefox | Última versão disponibilizada pelo fornecedor |
| Google Chrome | Última versão disponibilizada pelo fornecedor |

## SmartSync e Desktop SSO

---

Requisitos de *hardware* e sistema para implantação do SmartSync e Desktop SSO:

| Sistema Operacional | Windows Server 2012, 2016 ou 2019 |  |
| --- | --- | --- |
| Memória RAM | 4 GB |  |
| Processador | Arquitetura | 64 bits |
| Core | Mínimo 2 núcleos |  |
| Disco | Velocidade | 7200 RPM |
| Taxa de transferência | Mínimo 1GB/s |  |
| Espaço em disco | 40 GB |  |
| .NET Framework | 6 ou superior |  |
| Rede | O servidor em que o SmartSync está instalado deve, obrigatoriamente, ser capaz de acessar os domínios do Identity (*.fluigidentity.com e *.customerfi.com) para que a sincronização e a autenticação dos usuários do Active Directory sejam efetuadas.O cliente deve providenciar para que as devidas exceções sejam adicionadas ao proxy e firewall de sua rede. |  |

## Desktop Launcher e SSO Profile Generator

---

Requisitos de sistema para instalação do Desktop Launcher e Thick SSO Profile Generator:

| Sistema Operacional | Windows 7 ou superior |
| --- | --- |
| .NET Framework | 7.5 |

## Portas

---

- A integração do Identity com o SmartSync ocorre através da porta 5325. Mas é possível trocar a porta, para mais detalhes consulte a documentação [Identity | Novo SmartSync](/display/fluig/Identity+%7C+Novo+SmartSync).
- O SmartSync exige que a saída esteja liberada para [adsync.customerfi.com](http://adsync.customerfi.com/) pela porta 443 (em customerfi) e [adsync.fluigidentity.com](http://adsync.fluigidentity.com/) pela porta 443 (produção).


<!-- anchors: Identity|MatrizdePortabilidadeTOTVSIdentity-Falandodematrizdeportabilidade-TOTVSIdentity..., Identity|MatrizdePortabilidadeTOTVSIdentity-ExecuçãodeaplicativostipoPlugin, Identity|MatrizdePortabilidadeTOTVSIdentity-SmartSynceDesktopSSO, Identity|MatrizdePortabilidadeTOTVSIdentity-DesktopLaunchereSSOProfileGenerator, Identity|MatrizdePortabilidadeTOTVSIdentity-Portas -->
