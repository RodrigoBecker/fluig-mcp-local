---
title: "Identity | O que fazer em casos de problemas de validação com o reCaptcha?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=817640559"
scraped_at: "2026-03-09T04:33:12.634Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | O que fazer em casos de problemas de validação com o reCaptcha?

**Dúvida**

O que fazer em casos de problemas de validação com o reCaptcha?

**Solução**

O Identity utiliza um serviço terceiro para o recurso de Captcha, por isso não possuímos autonomia para customizações. As recomendações de contorno, com relação a problemas no reCaptcha, são:

**01.**Verificar se o navegador está atualizado, caso não esteja, sugerimos que realizem a atualização.

**02.**Caso o sistema operacional seja **Windows**:

- Na barra de pesquisa do Windows, buscar por**"Alterar configurações de proxy"**.

![](https://totvssuporte.zendesk.com/attachments/token/T9xWARQ9r0vqTkYvjL7ud4SRC/?name=image.png)

- Desmarcar as opções **"Detectar automaticamente"** e **"Usar um servidor proxy"**.

![](https://totvssuporte.zendesk.com/attachments/token/5pMnYDE9kbcRpEkpcsKvuEbJ7/?name=image.png)

**03.**Redefinir as configurações padrão do seu navegador. Caso utilize o **Google Chrome**, segue abaixo o passo a passo:

- *Configurações > Redefinir configurações > Restaurar configurações para os padrões originais > Redefinir configurações*.

![](https://totvssuporte.zendesk.com/attachments/token/6q91mvSDkeqCNuzbKARRpuYs8/?name=image.png)

O objetivo dessa ação é:

- Redefinir alguns atalhos e configurações do Google Chrome;
- Desativar extensões;
- Excluir cookies e outros dados temporários de sites.

Os favoritos, o histórico e as senhas salvas não serão afetados. As extensões podem gerar um excesso de requisições e ocasionar erros no reCaptcha.

**04.**Desinstalar as **VPNs**, pois algumas, enviam tráfegos que violam a legislação ou os Termos de Serviço dos Websites do Google, provocando bloqueio na autenticação do reCaptcha.

**05.** Acionar sua equipe interna ou provedor de internet e verificar se a rede utiliza **CGNAT**ou**NAT.**Quando essas configurações estão ativas, o IP é público e compartilhado com um grupo de empresas/usuários simultâneos, podendo haver limitações na quantidade de endereços.

No mais, orientamos a desativação do reCaptcha no menu de Segurança do Identity, com isto, o componente deixará de ser exibido em todas as tentativas de login. 

Por padrão, após 5 tentativas de login com erro, o reCaptcha é exibido. Em caso de ataques de força bruta, possuímos tratativas no Identity para bloqueio de IP, então, não é necessário ter o reCaptcha habilitado.

Saiba mais em [Segurança com captcha](/pages/viewpage.action?pageId=544183129).
