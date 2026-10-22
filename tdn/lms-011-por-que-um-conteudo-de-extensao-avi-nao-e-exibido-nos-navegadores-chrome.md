---
title: "LMS 011 - Por que um conteúdo de extensão AVI não é exibido nos navegadores Chrome e Firefox?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235569706"
scraped_at: "2026-03-09T03:35:18.673Z"
depth: 2
anchors: 5
child_links: 69
---

# LMS 011 - Por que um conteúdo de extensão AVI não é exibido nos navegadores Chrome e Firefox?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Card:** LMS

# Ocorrência

Ao tentar assistir um conteúdo de extensão AVI (*Audio Video Interleaved*), seja na sua pré-visualização, em um treinamento ou em um item de tópico, a seguinte situação acontece nos navegadores:

- **Mozilla Firefox**: é exibida a mensagem: "Um *plugin* é necessário para exibição desse conteúdo".
- **Google Chrome**: é exibida a mensagem: "Este *plugin* não é compatível".

# Causa

Essa situação ocorre porque:

- **Mozilla Firefox**: o*plugin* Windows Media Player não está instalado ou está desativado.
- **Google Chrome**: a exibição desse tipo de conteúdo de extensão AVI utiliza *plugins* NPAPI, que eram suportados pelo navegador Chrome em versões anteriores. A partir da versão 45, o navegador Chrome removeu o suporte a esse tipo de recurso.

# Solução

Para solucionar a situação ocorrida, é necessário:

- **Mozilla Firefox**: seguir a documentação descrita na página de suporte: [Reproduzir arquivos Windows Media no Firefox usando o plugin Windows Media](https://support.mozilla.org/pt-BR/kb/reproduzir-arquivos-windows-media-no-firefox).Observação A própria documentação do Mozilla alerta para o fato de que a nova versão do navegador para Windows 64-bit **não** reconhece ou suporta o *plugin *Windows Media Player.
- **Google Chrome**: utilizar os navegadores Internet Explorer ou Mozilla Firefox (x86) – efetuando o procedimento citado acima.

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: LMS011PorqueumconteúdodeextensãoAVInãoéexibidonosnavegadoresChromeeFirefox?-Índice, LMS011PorqueumconteúdodeextensãoAVInãoéexibidonosnavegadoresChromeeFirefox?-Plataforma, LMS011PorqueumconteúdodeextensãoAVInãoéexibidonosnavegadoresChromeeFirefox?-Ocorrência, LMS011PorqueumconteúdodeextensãoAVInãoéexibidonosnavegadoresChromeeFirefox?-Causa, LMS011PorqueumconteúdodeextensãoAVInãoéexibidonosnavegadoresChromeeFirefox?-Solução -->
