---
title: "5 dicas práticas para dar mais segurança ao TOTVS Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=953006932"
scraped_at: "2026-03-09T04:57:08.720Z"
depth: 3
anchors: 6
child_links: 52
---

# 5 dicas práticas para dar mais segurança ao TOTVS Fluig

## Palestrantes

        ![Palestrante 1 - Abner](https://i.postimg.cc/zf1NRPR9/1718311044257.jpg)

Abner Athayde

        ![Palestrante 2 - Vanat](https://i.postimg.cc/vBhGyLTC/1744228622366.jpg)

Rogério Carvalho

**Download da Apresentação:** [5 dicas práticas para dar mais segurança ao TOTVS Fluig](https://www.dropbox.com/scl/fi/snqwribo561s7p1ofykm8/2025-5-dicas-pr-ticas-para-dar-mais-seguran-a-ao-TOTVS-Fluig.pdf?rlkey=d7y8cyy3siqvu10sgipzt886o&st=7nz4tqwm&dl=0)

# Objetivo

---

Você encontrará nesta documentação 5 dicas práticas para aumentar a segurança da sua plataforma TOTVS Fluig. Além disso, são fornecidas orientações detalhadas e links para a configuração e boas práticas de cada técnica, ajudando a garantir a proteção e eficiência do seu ambiente Fluig.

# 2
HTTPS

### Segurança e Privacidade Online

---

Como evolução do HTTP como protocolo de transferência de hipertexto, o HTTPS (Hypertext Transfer Protocol Secure) adicionando uma camada crucial de segurança e autenticidade.

**Como funciona o HTTPS?**

Quando você acessa um site com HTTPS, o navegador e o servidor realizam um 'handshake' SSL/TLS. Durante esse processo, eles trocam chaves criptográficas e estabelecem uma conexão segura.Após essa conexão ser estabelecida, todos os dados transferidos entre o navegador e o servidor são criptografados, garantindo a privacidade e a integridade das informações.

**Documentação**

		- [Certificado HTTPS (SSL/TLS) Gratuito](/pages/viewpage.action?pageId=269422853)

		- [Configuração de níveis de segurança no HTTPS](/pages/viewpage.action?pageId=286516627)

		- [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893)

		- [Utilizando OpenSSL para configurar HTTPS](/display/fluig/Utilizando+OpenSSL+para+configurar+HTTPS)

# 3
Gestão de acessos e senhas

### Garantia de proteção, segurança e controle de acessos

---

**Acessos e Senhas**

Troque a senha do usuário **wcmadmin** regularmente. Se possível, incentive seus usuários a trocarem a senha com regularidade e **implemente a utilização de senhas fortes.**

Para um gerenciamento mais completo e seguro dos acessos, permissões e identidades, recomendamos implementar o **TOTVS Identity** integrado com o Fluig. 

Caso já possua um Active Directory, valide as credenciais dos usuários do **TOTVS Fluig diretamente no AD via protocolo LDAP**. Consulte o procedimento em: [Configuração de autenticação utilizando LDAP.](/pages/viewpage.action?pageId=257623389)

Você também pode utilizar os eventos [beforeCreateUser](/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-beforeCreateUser) e [beforeUpdateUser](/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-beforeUpdateUser) para criar regras de senhas fortes e [onLoginError](/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-onLoginError) para desenvolver sistema de bloqueios em caso de tentativa de invasão por força bruta. Mais informações em [Desenvolvimento de eventos.](/display/fluig/Desenvolvimento+de+Eventos)

**Gerenciar acesso aos documentos**

- **Crie uma organização lógica (Taxonomia):** Estruture documentos em categorias e subcategorias intuitivas.

- **Defina permissões específicas:** Atribua acessos conforme a necessidade de cada usuário ou grupo.

- **Use herança de permissões:** Simplifique a administração permitindo que permissões sejam herdadas.

- **Controle a aprovação de documentos:** Assegure que documentos sejam revisados antes de serem publicados.

- **Oriente sobre segurança:** Instrua usuários na definição correta de permissões.

- **Cuidado com a permissão TODOS:** Evite seu uso para proteger informações confidenciais.

- **Busca respeita acesso do usuário:** A busca exibe apenas documentos que o usuário tem permissão para ver.

**Gerenciamento de Permissões**

[Revise os recursos e suas opções de Permissão](/pages/viewpage.action?pageId=234455792), defina os papéis de usuário e administrador, atribuindo permissões específicas para usuários, papéis e grupos. Gerencie o acesso a recursos como funcionalidades sociais e de comunidades, documentos, processos, APIs, datasets internos, webservices, páginas, barra de pesquisa e ícone de notificações. Emita relatórios para revisar permissões e, se necessário, restaure as configurações padrão.

**Documentação**

		- [TOTVS Identity](/display/fluig/Identity)

		- [Configuração de autenticação do TOTVS Fluig utilizando LDAP](/pages/viewpage.action?pageId=257623389)

 		- [Desenvolvimento de Eventos Globais](/display/fluig/Desenvolvimento+de+Eventos)

  		- [Taxonomia de Documentos](/display/fluig/Taxonomia+de+Documentos)

      		- [Definir critérios de segurança para pasta ou para documento](/pages/viewpage.action?pageId=243008857)

	  [Permissões](/pages/viewpage.action?pageId=234455792)
	  [Como expor dados em ambientes públicos](/pages/viewpage.action?pageId=445656685)

# 4
Backup e criptografia

### Garantia e proteção de senha do banco de dados

---

Implemente backups regulares, importante recurso remediativo, siga as melhores práticas e crie cópias tanto da aplicação da plataforma, pasta de instalação, volume completo e a base de dados. Pode ser manual ou automatizado, dependendo do que acharem melhor. Siga as dicas da nossa documentação: [Backup da aplicação](/pages/viewpage.action?pageId=271666031).

- A melhor defesa contra a perda de dados.

- Reduza o risco de violações de dados e ransomware.

- Garanta a continuidade dos negócios em caso de incidentes.

**Encriptação de Senha do Banco:**

Aumente a segurança das suas informações. Evite o acesso não autorizado à base de dados através de dois passos simples de [Encriptação de senha do banco de dados](/pages/releaseview.action?pageId=454434362)

# 5
Atualização da Plataforma

### Manutenção e segurança em dia.

---

Agilize seu suporte e mantenha-se sempre atualizado, fique atento ao selo ![](/download/attachments/761497686/mandatory.png?version=1&modificationDate=1684244483687&api=v2) **Mandatory:******atualizações que possuem correções críticas emergenciais.

**Documentação**

	 	- [Atualização da plataforma](/pages/viewpage.action?pageId=73078235)

 	 	- [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186)

# +
Eventos de Auditoria

### Análise Detalhada de Atividades.

---

O recurso Eventos de Auditoria permite registrar alterações realizadas na plataforma em recursos específicos como Papel, Usuários, Grupos, Processos, Datasets, Documentos, entre outros. Acesse nossa [documentação para conhecer e saber como obter.](/display/fluig/Eventos+de+auditoria)

![](https://tdn.totvs.com/download/attachments/847899962/EventosAuditoria.png?version=1&modificationDate=1718645701876&api=v2)

# ...
Saiba mais!

---

Checklist para ter uma ambiente Seguro: [Boas práticas de segurança para o seu ambiente](/pages/viewpage.action?pageId=611010249)


<!-- anchors: HTTPS, GestaoDeAcessos, BackupCriptografia, AtualizacaoPlataforma, EventosAuditoria, SaibaMais -->
