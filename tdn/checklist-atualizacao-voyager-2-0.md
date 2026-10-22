---
title: "Checklist atualização Voyager (2.0)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=963023914"
scraped_at: "2026-03-09T04:15:47.607Z"
depth: 3
anchors: 10
child_links: 29
---

# Checklist atualização Voyager (2.0)

# Objetivo

---

Procuramos nos antecipar a todas as situações para você não se deparar com nenhuma inconsistência, porém, podem haver alguns impactos na sua plataforma, requerendo atenção no momento da atualização.

O objetivo deste *check-list* é descrever quais itens são relevantes observar para que a atualização ocorra de forma tranquila em sua empresa.

# Itens do check-list

---

Veja a seguir os itens que merecem atenção antes de atualizar a sua plataforma para a Voyager (2.0).

- ### Atualização para a Voyager (2.0)

Para aplicar a **Voyager (2.0)**, é necessário que a sua plataforma esteja na **atualização 1.8.2**. Se o seu ambiente está em uma atualização inferior, primeiramente atualize-o para o pacote **mais recente**** da 1.8.2** **(no mínimo 1.8.2-260127****)** e, só depois, aplique a atualização **2.0**. Confira alguns *links* úteis: [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732), [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186), [Instalação e atualização](/pages/viewpage.action?pageId=144409653).

- ### Banco de dados MySQL

Se você utiliza o banco de dados **MySQL**, é **obrigatório** que ele esteja na versão **8.0** para aplicar a atualização **Voyager (2.0)** na sua plataforma. Se for necessário atualizar sua base de dados para a versão 8.0 do MySQL, recomendamos que consulte um especialista em banco de dados devido à complexidade dos procedimentos. Obtenha mais detalhes em: [Configuração de banco de dados MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464#Configura%C3%A7%C3%A3odebancodedadosMySQL-Passoapassoparaconfigura%C3%A7%C3%A3odoMySQL).

- ### Validação de TLS quando utilizado HTTPS

Verificar a versão do sistema operacional Windows Server. Se a versão for anterior à 2022, o protocolo **TLS 1.3** deve ser ajustado para **TLS 1.2**. Obtenha mais informações em [Falha de acesso no Fluig após configurar HTTPS](https://centraldeatendimento.totvs.com/hc/pt-br/articles/30560187505687--Fluig-Plataforma-CON-Falha-de-acesso-no-Fluig-ap%C3%B3s-configurar-HTTPS).

- ### Mudança do arquivo de configurações

A partir da atualização Voyager (2.0), o **arquivo de configurações** da plataforma deixa de ser o *domain.xml* e passa a ser o **standalone.xml**. Esse item é apenas informativo, não é necessário fazer nenhum procedimento, visto que a conversão das configurações para o *standalone.xml* será feita automaticamente ao atualizar a plataforma.

- ### Mudança de local do arquivo server.log

A partir da atualização Voyager (2.0), o arquivo **server.log** passa a ser armazenado em **[diretório_instalação]\appserver\standalone\log**. Esse item é apenas informativo, não é necessário fazer nenhum procedimento.

- ### Mudança de local das pastas temporárias

A partir da atualização Voyager (2.0), as pastas temporárias passam a ser armazenadas em **[diretório_instalação]\appserver\standalone**. Esse item é apenas informativo, não é necessário fazer nenhum procedimento.

- ### Recursos de Inteligência artificial (IA) e Net Promoter Score (NPS)

Para o correto funcionamento dos recursos que utilizam **Inteligência Artificial (IA)** e **Net Promoter Score (NPS)**, é necessário liberar o acesso **HTTPS** para o endereço [https://api-fluig.totvs.app](https://api-fluig.totvs.app) na sua infraestrutura de rede. Obtenha mais detalhes em: [Portas e endereços](/pages/viewpage.action?pageId=275591571).

- ### Principais mudanças de front-end para a Voyager (2.0)

Recomendamos a leitura do material [Principais mudanças de front-end - Fluig Voyager (2.0)](https://tdn.totvs.com/x/5oYuOg) que traz os impactos na plataforma com foco em modernização de bibliotecas, otimização de carregamento, reorganização de paths e introdução de novos recursos como classes helpers, variáveis CSS e modo escuro no tema responsivo.

Importante!

É recomendável realizar o ***backup*** do banco de dados e da instalação do TOTVS Fluig antes de aplicar a atualização.

Confira o guia [*Backup* da aplicação Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666031) e o [Guia de atualização do Fluig](/pages/viewpage.action?pageId=271666186) para mais detalhes.

Dica!

Consulte nossas documentações [Matriz de Portabilidade](https://tdn.totvs.com/x/_ApbB) e [Dimensionamento](https://tdn.totvs.com/x/9QpbB) para saber mais informações sobre os requisitos e desempenho do TOTVS Fluig.


<!-- anchors: ChecklistatualizaçãoVoyager(2.0)-Objetivo, ChecklistatualizaçãoVoyager(2.0)-Itensdocheck-list, ChecklistatualizaçãoVoyager(2.0)-AtualizaçãoparaaVoyager(2.0), ChecklistatualizaçãoVoyager(2.0)-BancodedadosMySQL, ChecklistatualizaçãoVoyager(2.0)-ValidaçãodeTLSquandoutilizadoHTTPS, ChecklistatualizaçãoVoyager(2.0)-Mudançadoarquivodeconfigurações, ChecklistatualizaçãoVoyager(2.0)-Mudançadelocaldoarquivoserver.log, ChecklistatualizaçãoVoyager(2.0)-Mudançadelocaldaspastastemporárias, ChecklistatualizaçãoVoyager(2.0)-RecursosdeInteligênciaartificial(IA)eNetPromoterScore(NPS), ChecklistatualizaçãoVoyager(2.0)-Principaismudançasdefront-endparaaVoyager(2.0) -->
