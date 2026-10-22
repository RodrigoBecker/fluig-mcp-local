---
title: "Identity"
url: "https://tdn.totvs.com/display/public/fluig/Identity"
scraped_at: "2026-03-09T03:11:36.230Z"
depth: 1
anchors: 6
child_links: 68
---

# Identity

# O que é TOTVS Identity?

O TOTVS Identity é o gerenciador de identidades. Sua missão é centralizar os acessos a múltiplos sistemas por meio de um login único para cada usuário, garantindo o controle e segurança às aplicações da empresa.

## Single Sign-On: uma senha para tudo

Múltiplos sistemas requerem múltiplas senhas. No dia-a-dia, fica difícil lembrar e garantir a segurança de todas elas. Resolva esse problema com o Identity: ao realizar o login, todas as suas aplicações estão liberadas para acesso facilmente.

## Gestão centralizada de acessos

Cada sistema da sua empresa tem um ambiente exclusivo para gerenciamento e permissionamento de usuários. Além disso, as movimentações de pessoas dentro da empresa podem transformar a manutenção da segurança e acessos às informações em uma dor de cabeça. O Identity permite o controle total, unificado e simplificado dessas atividades, garantindo tranquilidade à TI.

## Reset de senhas simplificado

Um dos maiores vilões da produtividade na gestão de sistemas é a [recuperação de senhas de usuários](https://tdn.totvs.com/pages/viewpage.action?pageId=224101578). Perdeu o acesso? Não tem problema! Com o Identity, o *reset* de senha é *self-service*, o que promove autonomia do usuário final e desafoga a equipe de TI.

![](/download/attachments/144409673/Id04.png?version=1&modificationDate=1509999502000&api=v2)

# Guia rápido

**Preciso de acesso à internet para usar o Identity?**

Sim. O Identity é uma ferramenta SAAS, portanto é essencial possuir acesso à internet para usá-lo.

**Qual o primeiro passo para começar a utilizar o Identity?**

Abrir um *ticket* para o Suporte TOTVS Fluig solicitando a criação dos ambientes de Produção e Homologação do Identity, conforme a documentação [Criação de conta no Identity](https://tdn.totvs.com/x/sAzMCg). Recomendamos que todas as configurações e testes sejam inicialmente realizados no ambiente de homologação e posteriormente replicados no ambiente de produção.

Fique ligado!

Os termos "empresa" e "contexto" serão usados de forma intercambiável ao longo desta documentação para descrever o espaço da sua companhia dentro do Identity.

**Após realizar o meu primeiro acesso como administrador do contexto, como faço a inclusão dos usuários?**

A inclusão de usuários no contexto pode ser feita de duas formas: através da criação manual ou importação dos usuários de um Active Directory.

**Quero importar meus usuários que já estão cadastrados no Active Directory (AD). Como faço isso?**

O primeiro passo é [vincular o diretório LDAP](https://tdn.totvs.com/x/W55UE), neste caso um Active Directory, ao seu contexto no Identity para obter o token que será utilizado em seguida na configuração do SmartSync. Basta informar um nome para o diretório e pronto, o token será gerado automaticamente.

**O que é SmartSync?**

[SmartSync](https://tdn.totvs.com/x/VIs0DQ) é um aplicativo *desktop* responsável pela conexão entre a empresa no Identity e o Active Directory. Procedimentos como a autenticação de acessos no Identity utilizando a senha do AD, importação de usuários e sincronização de alterações são realizados através do SmartSync.

**Já instalei o SmartSync. Preciso configurar alguma coisa nele?**

Sim, agora é a hora de informar os dados de conexão ao Active Directory e o token gerado anteriormente no seu contexto nas [configurações do SmartSync](https://tdn.totvs.com/pages/viewpage.action?pageId=286520624). Assim o aplicativo será capaz de obter os cadastros no AD e enviá-los para a sua empresa no Identity.

**O SmartSync está configurado e no ar, mas os usuários não aparecem no meu contexto...**

Os usuários não são imediatamente provisionados (ou seja, criados) no contexto do Identity após a importação do Active Directory. Para que seja realizado o provisionamento, os usuários importados precisam ser [aceitos pelo administrador do contexto](https://tdn.totvs.com/pages/viewpage.action?pageId=273989076). A partir do momento em que for aceito, o status do usuário é atualizado para Ativo na empresa.

**Como é feito o acesso a serviços externos, como o TOTVS Fluig Plataforma, pelo Identity?**

O acesso ao TOTVS Fluig Plataforma (ou qualquer outro serviço) pelo Identity ocorre através de [Identity | Aplicativos](/display/fluig/Identity+%7C+Aplicativos) (apps). O administrador pode utilizar os aplicativos disponibilizados por padrão pelo Identity ou criar novos apps de acordo com a sua necessidade. O TOTVS Fluig Plataforma, por exemplo, conta com um aplicativo específico.

**Como faço a integração entre o TOTVS Fluig Plataforma e o contexto do Identity?**

[Esta integração abrange dois passos](https://tdn.totvs.com/pages/viewpage.action?pageId=73080143): (1) configurar a URL de acesso ao TOTVS Fluig Plataforma no aplicativo do Identity e (2) configurar a URL do contexto no Identity no Painel de controle do wcmadmin no TOTVS Fluig Plataforma.

**E de que forma os usuários acessam o aplicativo Fluig?**

Uma vez integrados, basta [associar os usuários no Identity ao aplicativo Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=203763890) para que eles possam acessá-lo diretamente do [Launchpad](https://tdn.totvs.com/x/8ppUE), ou seja, a página que reúne todos os apps disponíveis no contexto. 

# Links úteis

- [Matriz de Portabilidade - TOTVS Identity](https://tdn.totvs.com/x/eDAxE)
- [Arquitetura](https://tdn.totvs.com/x/gDwMEQ), [Backups](https://tdn.totvs.com/x/k6XjHQ) e [Horário de funcionamento](https://tdn.totvs.com/x/77WVI) dos ambientes
- [Criação e desativação de conta no Identity](https://tdn.totvs.com/x/sAzMCg)
- [Aplicativos disponíveis](https://tdn.totvs.com/x/2ozCC)
- [Integração com o Active Directory](/pages/viewpage.action?pageId=146969024)
- [Recursos de segurança](/pages/viewpage.action?pageId=235592795)
- [Identity | Desenvolvedores](/display/fluig/Identity+%7C+Desenvolvedores)


<!-- anchors: Identity-OqueéTOTVSIdentity?, Identity-SingleSign-On:umasenhaparatudo, Identity-Gestãocentralizadadeacessos, Identity-Resetdesenhassimplificado, Identity-Guiarápido, Identity-Linksúteis -->
