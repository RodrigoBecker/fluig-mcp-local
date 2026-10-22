---
title: "IDE - Por que os campos da integração com o Identity estão em branco?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201732230"
scraped_at: "2026-03-09T03:38:13.246Z"
depth: 2
anchors: 5
child_links: 47
---

# IDE - Por que os campos da integração com o Identity estão em branco?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.5.0 ou superior

# Ocorrência

Após ativar a integração com o Identity em uma empresa, informar os dados de conexão (URL e Token) e salvar, ao retornar a essa mesma página as informações estão em branco.

![](/download/attachments/201732230/Capturar1.JPG?version=1&modificationDate=1442259837000&api=v2)

# Causa

A plataforma não consegue buscar as informações de integração com o Identity porque foi configurado em ambiente seguro (HTTPS), mas o campo URL do Portal não foi preenchido corretamente.

# Solução

Com o usuário wcmadmin, acessar **Painel de controle** → **WCM** → **Configurações do Sistema**, e ajustar o campo **URL do portal** para o endereço correto, certificando-se de que protocolo **HTTPS** foi informado.

Por exemplo: [https://fluig.empresa.com:8080/portal.](https://fluig.empresa.com:8080/portal.)

![](/download/attachments/201732230/Capturar.JPG?version=2&modificationDate=1442259657000&api=v2)

Recomenda-se verificar se as configurações HTTPS da plataforma estão corretas, conforme o documento [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893) . Caso o Apache seja utilizado, consultar a documentação [Plataforma em load balance com Apache mod_proxy em Linux](/display/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux).


<!-- anchors: IDEPorqueoscamposdaintegraçãocomoIdentityestãoembranco?-Índice, IDEPorqueoscamposdaintegraçãocomoIdentityestãoembranco?-Plataforma, IDEPorqueoscamposdaintegraçãocomoIdentityestãoembranco?-Ocorrência, IDEPorqueoscamposdaintegraçãocomoIdentityestãoembranco?-Causa, IDEPorqueoscamposdaintegraçãocomoIdentityestãoembranco?-Solução -->
