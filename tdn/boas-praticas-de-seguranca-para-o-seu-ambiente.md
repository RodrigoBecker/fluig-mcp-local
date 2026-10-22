---
title: "Boas práticas de segurança para o seu ambiente"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=611010249"
scraped_at: "2026-03-09T03:44:30.578Z"
depth: 2
anchors: 3
child_links: 38
---

# Boas práticas de segurança para o seu ambiente

Dica!

[Acesse aqui](https://tdn.totvs.com/x/6zUZE) e veja mais sobre os controles de **Segurança da plataforma**TOTVS Fluig.

# Objetivo

---

Reunimos nesse documento uma série de recomendações para trazer mais segurança ao seu ambiente do TOTVS Fluig Plataforma. Elencamos diversos artigos e dicas de segurança básicas que você pode aplicar para proteger seu ambiente.

É importante definir uma agenda para revisão destes itens periodicamente.

## Segurança nos padrões internacionais

---

O TOTVS Fluig passa por testes de segurança seguindo as principais metodologias internacionais. Ele faz parte do programa de Bug Bounty da TOTVS, que tem como principal objetivo identificar e corrigir potenciais vulnerabilidades em seu ambiente tecnológico de produtos, aderindo e seguindo as melhores práticas recomendadas pelo OWASP (Open Web Application Security Project), uma comunidade mundial dedicada a melhorar a segurança de software. Ao alinhar nossos processos com as diretrizes do OWASP, buscamos garantir a identificação e correção eficazes de potenciais vulnerabilidades em nossa plataforma, contribuindo para um ambiente digital mais seguro e resiliente.

Possuímos certificados e atestados de reconhecimento que demonstram nosso compromisso em seguir as práticas do mercado para processos de desenvolvimento seguro. Esses documentos evidenciam que nossas metodologias e procedimentos estão alinhados com os mais altos padrões de segurança, validados por auditorias internas e externas.

Os certificados e atestados, como os exemplificados abaixo, podem ser solicitados a qualquer momento por meio dos nossos canais de atendimento:

- [Certificado de conformidade em testes de segurança](/download/attachments/611010249/TISBD%20-%20Certificado%20de%20Conformidade%20em%20testes%20de%20seguran%C3%A7a_FLUIG.pdf.pdf?version=1&modificationDate=1738241078047&api=v2);

- [*Letter of attestation* - *Bounty program*](/download/attachments/611010249/Letter%20of%20attestation%20-%20Bounty%20program%20Fluig.pdf%20-%20254.706%20%C3%97%20297.039mm%20-%20Canva.pdf?version=1&modificationDate=1738241076453&api=v2).

# Checklist

---

      **Política de senha** 

Troque a senha do usuário **wcmadmin** regularmente. Se possível, incentive seus usuários a trocarem a senha com regularidade e implemente a utilização de senhas fortes.

Para um gerenciamento mais completo e seguro dos acessos, permissões e identidades, recomendamos implementar o [TOTVS Identity integrado com o Fluig](https://tdn.totvs.com/x/Tx1bB). Você também pode utilizar os eventos beforeCreateUser e beforeUpdateUser para criar regras de senhas fortes. Mais informações em [Desenvolvimento de eventos](https://tdn.totvs.com/pages/viewpage.action?pageId=75270416).

      **Login e matrícula dos usuários**

Não crie usuários com matrícula e login iguais. Não utilize dados pessoais, como o CPF, pois esses campos não podem ser anonimizados, alterados ou excluídos.

	**Verifique a segurança de APIs, Datasets e Webservices**

Você pode configurar permissões de acesso em APIs, Datasets e Webservices, conforme explica a documentação: [Recursos de permissão em APIs, datasets e webservices](https://tdn.totvs.com/x/pB2eI).

      **Não executar como root**

A inicialização dos serviços da plataforma em Servidor Linux não pode ser realizada com o usuário *root*, para isso deve configurar seu ambiente conforme é orientado na documentação: [Configurar ambiente Linux para não utilizar o usuário root](https://tdn.totvs.com/x/v2cWGw).

      **Não exponha o servidor de aplicação diretamente na internet**

O TOTVS Fluig Plataforma possui suporte a implementação de DMZ e sugerimos a implementação conforme explica a documentação: [Topologia DMZ](https://tdn.totvs.com/x/MZIbCQ).

      **Criptografar a senha do banco de dados e LDAP**

A senha do banco de dados deve ser criptografada no arquivo standalone.xml (a partir da 2.0) ou no domain.xml (1.6 até 1.8.2). Consulte o procedimento em: [Encriptação de senha do banco de dados](https://tdn.totvs.com/x/Oh4WGw).
O mesmo se aplica a senha do LDAP, quando configurado este tipo de autenticação. Consulte o procedimento em: [Configuração de autenticação utilizando LDAP](https://tdn.totvs.com/x/XQVbDw).

      **Protocolo HTTPS**

Configure a plataforma para utilizar o protocolo HTTPS e a opção *Flags "HttpOnly"* e *"Secure"* nos *cookies* será automaticamente habilitada. É importante mantê-la habilitada. Verifique também o nível de segurança habilitando as configurações da compatibilidade Moderna.
Para mais detalhes consulte [Configuração HTTPS da plataforma](https://tdn.totvs.com/x/vdMgFQ), [Configurações do sistema](https://tdn.totvs.com/x/EO4KDg) e [Configuração de níveis de segurança no HTTPS](https://tdn.totvs.com/x/k_UTEQ).

**oculto**

      **Configurações do servidor de aplicação**

Mantenha as configurações do Apache e Nginx atualizadas: [Título link](link).

      **Páginas públicas**

Não deixe exposto credenciais de acesso (chaves de autenticação, usuário e senha, etc) em páginas públicas. Veja como consultar serviços autenticados em página pública de forma segura: [Como expor dados em ambientes públicos](https://tdn.totvs.com/pages/viewpage.action?pageId=445656685).

      **Utilize IPs no arquivo standalone.xml (a partir da 2.0) ou no domain.xml (1.6 até 1.8.2)**

Sempre utilize o IP da rede interna no arquivo de configuração, de acordo com a atualização do Fluig que você utiliza. Isso evita chegar ao servidor, caso haja algum vazamento.

      **Arquivo robots.txt**

Configurar o arquivo robots.txt. A partir da **atualização 1.7.1-211207** a plataforma cria automaticamente o arquivo impedindo o rastreamento de arquivos do site. Para mais detalhes, consulte a documentação: [Como configurar o arquivo robots.txt](https://tdn.totvs.com/x/kObRJg).

      **Domínios de busca**

Remova as informações dos resultados da pesquisa, para saber mais acesse: [Remover informações do Google](https://developers.google.com/search/docs/advanced/crawling/remove-information?hl=pt-br).

* O Google é o mais comum, mas esse procedimento pode ser feito para outros buscadores.

      **Version**

Libere o acesso para **https://version.fluig.com**. O serviço de versionamento do Fluig notifica sobre novas versões disponíveis e atualizações de segurança.

      **Bloqueio de Clickjacking**

Mantenha habilitado o bloqueio de *Clickjacking* conforme orientado na documentação: [Configurações da plataforma](https://tdn.totvs.com/pages/releaseview.action?pageId=257623022#Configura%C3%A7%C3%B5esdaplataforma-BloqueiodeClickjacking).

      **Informações no cabeçalho dos balanceadores**

Avalie a configuração dos balanceadores de carga para que não enviem informações desnecessárias no cabeçalho conforme instruído  [nessa documentação](https://tdn.totvs.com/x/JVtVJQ).

      **Matriz de portabilidade**

Utilize as versões de software homologadas na [Matriz de portabilidade](https://tdn.totvs.com/x/_ApbB).

      **Execução de antivírus**

Para ambientes que necessitam utilizar antivírus, adicione a pasta de instalação do Fluig e o diretório de volume como exceções para que não interfiram nas funções de leitura/escrita.

      **SO e softwares atualizados**

Mantenha o Sistema Operacional atualizado, principalmente em relação aos patches de segurança. Desinstale softwares não essenciais e, na presença deles, mantenha-os atualizados.

      **Configuração padrão**

Altere as portas e as configurações padrão da plataforma.

      **CORS (Cross-origin Resource Sharing)**

Recomendamos a configuração do CORS (*Cross-origin Resource Sharing* ou Compartilhamento de Recursos de Origem Cruzada) que é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. Obtenha informações detalhadas em [*Cross-origin Resource Sharing*](https://tdn.totvs.com/x/PpUPJQ).

      **Acesso ao Servidor de indexação (Solr)**

Recomendamos que nunca deixe o Solr exposto à Internet ou a qualquer máquina da sua rede interna. Utilize o parâmetro **SOLR_IP_ALLOWLIST1** e defina quais IPs podem ter acesso ao Painel administrativo do Solr. Assim, o acesso fica restrito aos IPs listados. Obtenha mais informações em [Servidor de indexação em alta disponibilidade](https://tdn.totvs.com/x/pgRbDw).

**1** → Disponível apenas a partir da atualização **Crystal Mist (1.8.2)**.

**oculto**

      **Item modelo**

Recomendamos .... conforme a documentação [Título link](link). Para que o item seja apresentado, editar o Painel e remover o título "oculto"


<!-- anchors: Boaspráticasdesegurançaparaoseuambiente-Objetivo, Boaspráticasdesegurançaparaoseuambiente-Segurançanospadrõesinternacionais, Boaspráticasdesegurançaparaoseuambiente-Checklist -->
