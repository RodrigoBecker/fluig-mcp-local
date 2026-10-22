---
title: "BPM 085 - Como solucionar o erro gerado ao exportar projetos do Studio para fluig integrado com Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244742180"
scraped_at: "2026-03-09T03:57:15.516Z"
depth: 2
anchors: 8
child_links: 132
---

# BPM 085 - Como solucionar o erro gerado ao exportar projetos do Studio para fluig integrado com Identity?

# Índice

# Plataforma

**Produto:  **fluig Studio + fluig Identity

# Ocorrência

- [Ocorrência 1](#)
- [Ocorrência 2](#)

 - Ao efetuar a exportação de um projeto para o fluig que se encontra integrado ao Identity é exibida a mensagem de erro abaixo impedindo que a exportação seja concluída.

![](/download/attachments/244742180/PET.PNG?version=1&modificationDate=1471453054000&api=v2)

 - Já no ss_service.log do SmartSync é exibida a mensagem de que a autenticação ocorreu com sucesso.

![](/download/attachments/244742180/erroexport.PNG?version=1&modificationDate=1471453053000&api=v2)

 - Ao exportar um processo para o fluig é exibido o erro 'Read timed out': 

![](/download/attachments/244742180/ErroExportarDataset.png?version=1&modificationDate=1473788877000&api=v2)

# Causa

Quando um projeto é exportado do Studio para o fluig integrado com o Identity, o usuário cadastrado na conexão com o servidor sofre uma série de tentativas de autenticação com a senha do AD.

No SmartSync, é exibido que a autenticação ocorre com êxito, isto se deve porque apenas uma autenticação, de uma sequência, é realizada não efetuando as demais tentativas e assim o fluig Studio exibe o erro apresentado acima. 

# Solução

Para que este erro não ocorra, deve-se configurar a conexão do Studio com o servidor do fluig e senha pessoal do Identity, assim a autenticação não precisará passar pelo AD, melhorando a performance e evitando erros de autenticação.

Caso a senha pessoal tenha sido desabilitada pelo(s) administrador(es) da empresa no fluig Identity, é possível aumentar o tempo de espera de retorno do servidor (*timeout*) nas configurações do plugin fluig Studio, conforme demonstrado [nesta FAQ](/pages/viewpage.action?pageId=244425259). O tempo de espera padrão é de 10 segundos, mas esse valor pode ser incrementado conforme a necessidade da rede do cliente.


<!-- anchors: BPM085ComosolucionaroerrogeradoaoexportarprojetosdoStudioparafluigintegradocomIdentity?-Índice, BPM085ComosolucionaroerrogeradoaoexportarprojetosdoStudioparafluigintegradocomIdentity?-Plataforma, BPM085ComosolucionaroerrogeradoaoexportarprojetosdoStudioparafluigintegradocomIdentity?-Ocorrência, ocorrencia, ocorrencia--1652657560, ocorrencia--1652657559, BPM085ComosolucionaroerrogeradoaoexportarprojetosdoStudioparafluigintegradocomIdentity?-Causa, BPM085ComosolucionaroerrogeradoaoexportarprojetosdoStudioparafluigintegradocomIdentity?-Solução -->
