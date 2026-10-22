---
title: "Suporte a páginas e widgets no aplicativo Fluig mobile"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224108112"
scraped_at: "2026-03-09T04:12:15.355Z"
depth: 2
anchors: 10
child_links: 72
---

# Suporte a páginas e widgets no aplicativo Fluig mobile

# Índice

# Objetivo

O objetivo deste guia é detalhar o suporte à exibição e criação de widgets do TOTVS Fluig Plataforma no aplicativo Fluig mobile.  

# Widgets suportadas pelo Fluig mobile

Abaixo lista de widgets com compatibilidade para visualização no Fluig mobile:

|  | Documentos Populares |
| --- | --- |
| Veja quais são os documentos mais acessados. |  |
|  | Endereço Web |
| Acesse endereços web de forma fácil e rápida. Para que o widget Endereço Web renderize corretamente a URL solicitada, é necessário que o servidor de destino da URL aceite requisições do tipo cross-origin, ou seja, requisições realizadas por páginas web de domínios diferentes.Caso contrário, o seguinte erro será exibido no console do navegador: "Requisição cross-origin bloqueada: A política de mesma origem (Same Origin Policy) impede a leitura do recurso remoto em http://<URL_USADO_NA_WIDGET>. (Motivo: o cabeçalho CORS 'Access-Control-Allow-Origin' não está presente)". |  |
|  | Editor de conteúdo |
| Personalize páginas e comunidades com o conteúdo desejado. |  |
|  | Analytics |
| Visualize gráficos e Dashboards do Analytics de forma fácil e rápida. Se você está utilizando o Analytics pelo iOS, atente-se às recomendações desse item. |  |
|  | Aniversariantes |
| Visualize os aniversariantes do mês, com destaque para os aniversariantes do dia. Esse widget faz parte da solução Kit Intranet e pode ser obtido através deste link do diretório Git do Fluig e o procedimento de instalação está disponível no Portal do Desenvolvedor. |  |

# Habilitar widgets para visualização mobile 

Para que uma página esteja disponível no aplicativo mobile, deve existir pelo menos uma instância de Widget habilitada para o aplicativo mobile na página. Para isso será necessário:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acessar o modo de edição da página.

![](/download/attachments/224108112/image2018-7-23_16-45-14.png?version=1&modificationDate=1532375115000&api=v2)

 - Assinalar quais widgets da página serão apresentadas no aplicativo mobile, clicando no ícone **Habilitar no aplicativo mobile. **

    Este ícone só estará presente para widgets que possuam suporte ao aplicativo mobile 

  ![](/download/attachments/224108112/image2018-7-23_16-46-39.png?version=1&modificationDate=1532375200000&api=v2)

 - Publicar a nova versão da página.

![](/download/attachments/224108112/image2018-7-23_16-49-47.png?version=1&modificationDate=1532375388000&api=v2)

Atenção!

A renderização das páginas no aplicativo mobile apresentará apenas o conteúdo das widgets habilitadas sequencialmente. Isso significa que serão apresentadas as widgets uma embaixo da outra, conforme a ordenação dos slots: todas as widgets do slot a, depois b, depois c e assim sucessivamente.

![](/download/attachments/224108112/Visualizacao%20widgets%20mobile.png?version=1&modificationDate=1534430689000&api=v2)

**Visualização dos widgets no mobile      **

# Como visualizar widgets de comunidades através de dispositivos móveis

O Fluig Mobile trata os *widgets* incluídos em páginas de comunidades como **Conteúdo Adicional** da comunidade.

Para acessar esse conteúdo, basta tocar no botão **Visualizar conteúdo adicional** disponível na parte superior da *timeline* da comunidade ou na opção **Conteúdo adicional**, através do menu contextual.

Apenas as plataformas iOS e Android suportam widgets em comunidades (Conteúdo Adicional). Para obter maiores detalhes, acesse o [Guia de Utilização Fluig - Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624)[.](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624#GuiadeUtiliza%C3%A7%C3%A3ofluig-Mobile-Android)

# Analytics no Fluig Mobile

Para o funcionamento correto da widget de Analytics no Fluig Mobile versão iOS, devemos habilitar os *Cookies* de terceiros no dispositivo.

*Um Cookie é um arquivo de texto muito simples, cuja composição depende diretamente do conteúdo do endereço Web visitado. Por exemplo, a maioria do sites armazenam informações básica, como endereços IP e preferências sobre idiomas, cores, etc.*

Atenção

Para dispositivos IOS é **indispensável a utilização do protocolo HTTPS** para garantir o funcionamento esperado da widget Analytics. Em alguns browsers é necessária a utilização do protocolo HTTPS para que a mesma apresente o funcionamento correto.

Como habilitar cookies no iPhone ou iPad

1. e “**Privacidade e Segurança**”, garanta que as funções “**Impedir Rastreamento**” e “**Bloquear Todos os Cookies**” estejam desabilitadas.

****


<!-- anchors: SuporteapáginasewidgetsnoaplicativoFluigmobile-Índice, SuporteapáginasewidgetsnoaplicativoFluigmobile-Objetivo, SuporteapáginasewidgetsnoaplicativoFluigmobile-WidgetssuportadaspeloFluigmobile, SuporteapáginasewidgetsnoaplicativoFluigmobile-Habilitarwidgetsparavisualizaçãomobile, widgets, widgets-872616687, widgets-872616688, widgets-872616689, SuporteapáginasewidgetsnoaplicativoFluigmobile-Comovisualizarwidgetsdecomunidadesatravésdedispositivosmóveis, SuporteapáginasewidgetsnoaplicativoFluigmobile-AnalyticsnoFluigMobile -->
