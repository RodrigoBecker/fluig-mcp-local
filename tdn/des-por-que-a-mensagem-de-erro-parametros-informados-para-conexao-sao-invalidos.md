---
title: "DES - Por que a mensagem de erro \"Parâmetros informados para conexão são inválidos\"?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224113492"
scraped_at: "2026-03-09T03:31:33.152Z"
depth: 2
anchors: 4
child_links: 43
---

# DES - Por que a mensagem de erro "Parâmetros informados para conexão são inválidos"?

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Tenho a plataforma integrada ao TOTVS Identity e na criação do servidor Fluig no TOTVS Developer Studio ou Eclipse ocorre o erro "O servidor foi criado, mas ocorreu um erro ao tentar buscar informações. Após solucionado o problema, edite e grave novamente o servidor. Erro: Parâmetros informados para conexão são inválidos". 

Por que isso acontece e como corrigir?

# Solução

Quando a plataforma está integrada ao Identity, o login no TDS deve ser feito com o mesmo login utilizado no Identity. Isso acontece porque a autenticação é feita no Identity e somente depois na plataforma. 

No cadastro do seu servidor, altere o valor de usuário e senha e informe, respectivamente, o email e a senha utilizados no Identity e salve. 

Se algum dia você deixar de utilizar a plataforma integrada ao Identity, será preciso alterar o cadastro do servidor e então utilizar o login e a senha da plataforma para a conexão.


<!-- anchors: DESPorqueamensagemdeerro"Parâmetrosinformadosparaconexãosãoinválidos"?-Índice, DESPorqueamensagemdeerro"Parâmetrosinformadosparaconexãosãoinválidos"?-Plataforma, DESPorqueamensagemdeerro"Parâmetrosinformadosparaconexãosãoinválidos"?-Ocorrência, DESPorqueamensagemdeerro"Parâmetrosinformadosparaconexãosãoinválidos"?-Solução -->
