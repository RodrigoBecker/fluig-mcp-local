---
title: "Utilizando o protocolo FTP na plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Utilizando+o+protocolo+FTP+na+plataforma"
scraped_at: "2026-03-09T03:10:23.092Z"
depth: 1
anchors: 10
child_links: 54
---

# Utilizando o protocolo FTP na plataforma

Atenção

Esta página é destinada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

# Índice

# Objetivo

---

O objetivo deste guia é facilitar a compreensão quanto a utilização do protocolo FTP para publicação de documentos no TOTVS Fluig Plataforma.

# Procedimentos para utilização de protocolo FTP

---

Acompanhe o passo a passo a seguir: 

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acessar a plataforma com o usuário wcmadmin →**Painel de Controle** → aba **WCM** →**Configurações do Sistema** → aba **Parâmetros da Plataforma**:

   - Clique em **OFF** para Habilitar servidor FTP:

![](/download/attachments/258277580/Image%205.jpg?version=1&modificationDate=1511987199000&api=v2)

[Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=257623022) e saiba mais sobre as configurações da plataforma

 - Altere o valor da **Porta do FTP** que será utilizado para o protocolo FTP. Por padrão a plataforma utiliza o valor 21. 

 - Também pode ser configurado uma faixa de portas conforme descrito abaixo:

   **Faixa de Portas do FTP:**Faixa de portas utilizadas pelo FTP para publicação e publicação em pastas privadas.

   - **Faixa de portas FTP para pastas privadas:**Definir a faixa de portas usadas para a comunicação de FTP passivo.

   - **Porta FTP para pastas privadas:**Porta utilizada pelo FTP para publicação em pastas privadas.

![](/download/attachments/258277580/Image%207.jpg?version=1&modificationDate=1511987319000&api=v2)

 - Clique em **Salvar**.

 - Será necessário reiniciar os serviços do fluig.

 - Acesse o protocolo FTP a partir da ferramenta de sua preferência. Neste exemplo foi utilizado o software FileZilla.

 1. **Host:** informe o endereço do servidor, sem a porta de conexão HTTP. Exemplo: *localhost.*

   2. **Username:** informe o *login* do usuário do fluig. 

   3. **Password:** informe a senha do usuário do fluig.

   4. **Port:** informe a porta configurada no item 2.

![](/download/attachments/258277580/image2014-2-5%2010%3A25%3A43.png?version=1&modificationDate=1474482960000&api=v2)

 - Utilizando o protocolo FTP, faça upload do arquivo desejado para o servidor.

![](/download/attachments/258277580/image2014-2-5%2010%3A26%3A11.png?version=1&modificationDate=1474482960000&api=v2) 

 - Após realizar o *upload* para o servidor, o arquivo estará disponível no servidor no diretório de *upload* do usuário, aguardando ser publicado.

![](/download/attachments/258277580/image2016-10-19%2016%3A44%3A34.png?version=1&modificationDate=1476906298000&api=v2)

# Configurando portas passivas no FTP

---

Quando existir a necessidade de restringir as portas para a transferência dos arquivos, basta logar com o usuário **wcmadmin** e alterar o campo **Faixa de portas FTP para pastas privadas** em **Painel de Controle** → aba **WCM** →**Configurações do Sistema** → aba **Parâmetros da Plataforma:**

****

No valor, é possível passar uma porta, um grupo de portas ou um intervalo de portas.

**Exemplo:**

| Valor | Descrição |
| --- | --- |
| Valor | Descrição |
| 0 | Qualquer porta disponível é utilizada como a porta passiva. |
| 123 | A porta 123 será usada como a porta passiva. |
| 123,133 | As portas 123 e 133 serão utilizadas como a porta passiva. |
| 123-125 | Qualquer porta de um intervalo de 123-125 será utilizada como a porta passiva. |
| 123-125, 127, 129-130 | Qualquer porta de um intervalo de 123-125, a porta 127 ou no intervalo de 129-130 será utilizada como a porta passiva. |


<!-- anchors: UtilizandooprotocoloFTPnaplataforma-Índice, UtilizandooprotocoloFTPnaplataforma-Objetivo, UtilizandooprotocoloFTPnaplataforma-ProcedimentosparautilizaçãodeprotocoloFTP, 1, 1-1, 1-2, 1-3, 1-4, 1-5, UtilizandooprotocoloFTPnaplataforma-ConfigurandoportaspassivasnoFTP -->
