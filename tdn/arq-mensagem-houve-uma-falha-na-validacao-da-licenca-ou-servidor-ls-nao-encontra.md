---
title: "ARQ - Mensagem \"Houve uma falha na validação da licença\" ou \"Servidor LS não encontrado\" ao acessar a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223920813"
scraped_at: "2026-03-04T03:37:22.688Z"
depth: 4
anchors: 5
child_links: 47
---

# ARQ - Mensagem "Houve uma falha na validação da licença" ou "Servidor LS não encontrado" ao acessar a plataforma

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

# Ocorrência

Ao acessar a plataforma ocorre o erro "Não foi possível verificar o licenciamento do Fluig! Servidor LS não encontrado." ou "Houve uma falha na validação da licença"?

![](/download/attachments/223920813/demo1.png?version=1&modificationDate=1500928411000&api=v2)

**Figura 1 - Mensagem de "Servidor LS não encontrado na versão 1.6.1 e superiores**

![](/download/attachments/223920813/houveUmaFalhaValidacaoLicenca.png?version=1&modificationDate=1452940054000&api=v2)

**Figura 2 - Mensagem "Houve uma falha na validação da licença" na tela de login na versão 1.6 ou anterior**

# Causa

Este erro pode ser causado por uma falha na comunicação entre a plataforma e o servidor de licenças.

# Solução

Verifique se o endereço e a porta de conexão com o servidor de licenças está configurado corretamente, conforme descrito em [ARQ - Como configurar o servidor de licenças](/pages/viewpage.action?pageId=208339548).

Confira também se o serviço do License Server está iniciado. Se não estiver, será necessários iniciá-lo e posteriormente iniciar os serviços da plataforma novamente.

Se por algum motivo o servidor de licença estiver indisponível, você pode escolher clicar em [Arquivo de Emergência](/pages/viewpage.action?pageId=275120345) como medida de contingência a partir da atualização 1.6.1.

Na atualização 1.6 ou anteriores consulte a documentação [Chave de Emergência.](/pages/viewpage.action?pageId=272703047)


<!-- anchors: ARQMensagem"Houveumafalhanavalidaçãodalicença"ou"ServidorLSnãoencontrado"aoacessaraplataforma-Índice, ARQMensagem"Houveumafalhanavalidaçãodalicença"ou"ServidorLSnãoencontrado"aoacessaraplataforma-Plataforma, ARQMensagem"Houveumafalhanavalidaçãodalicença"ou"ServidorLSnãoencontrado"aoacessaraplataforma-Ocorrência, ARQMensagem"Houveumafalhanavalidaçãodalicença"ou"ServidorLSnãoencontrado"aoacessaraplataforma-Causa, ARQMensagem"Houveumafalhanavalidaçãodalicença"ou"ServidorLSnãoencontrado"aoacessaraplataforma-Solução -->
