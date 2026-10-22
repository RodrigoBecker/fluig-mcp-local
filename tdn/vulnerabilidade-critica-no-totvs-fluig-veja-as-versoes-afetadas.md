---
title: "Vulnerabilidade crítica no TOTVS Fluig - Veja as versões afetadas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=935625367"
scraped_at: "2026-03-09T03:27:38.581Z"
depth: 2
anchors: 4
child_links: 9
---

# Vulnerabilidade crítica no TOTVS Fluig - Veja as versões afetadas

---

Identificamos uma **vulnerabilidade crítica** no TOTVS Fluig Plataforma, essa vulnerabilidade afetou algumas releases que serão listadas abaixo: É de **extrema importância** que a atualização seja aplicada o quanto antes para garantir a **segurança e estabilidade** do sistema.

**Verifique as releases afetadas**

Verifique se a release do produto que você utiliza está entre as versões afetadas, na tabela abaixo:

| Release | De | Até |
| --- | --- | --- |
| Release | De | Até |
| Crystal Lake | 1.7.1 (primeira) | 1.7.1-240116 |
| Mist | 1.8.0-220525 | 1.8.0-240312 |
| Silver Mist | 1.8.1-230420 | 1.8.1-240709 |
| Crystal Mist | Nenhuma | Nenhuma |

**Releases corrigidas**

- A partir da 1.7.1-240723
- A partir da 1.8.0-240723
- A partir da 1.8.1-240716
- 1.8.2 (todas as versões já estão corrigidas, **não é necessário atualizar**)

## Como corrigir?

---

Para garantir a segurança do ambiente, solicitamos que, com **máxima urgência**, um dos métodos abaixo seja executado: 

- [Método 1 - Atualização completa da plataforma (mais seguro e recomendado)](#)
- [Método 2 - Atualização apenas do componente Style Guide (mais rápido)](#)

Recomendamos sempre utilizar a **release mais recente** do instalador, disponível no **Portal do Cliente TOTVS**.

Sabemos que atualizações completas podem exigir janelas de homologação. Por isso, como alternativa, é possível atualizar para a release corrigida mais recente compatível com a sua release atual (veja a lista acima). Faça o download no **Portal do Cliente TOTVS** também.

Consulte o passo a passo detalhado sobre o Guia de atualização da plataforma na**documentação oficial.**

Isolando o componente afetado e pode ser aplicado apenas essa atualização, seguindo os passos abaixo:

**01.** Faça o download do artefato .war correspondente pelo link: **Entre em contato com o time de suporte para obter o artefato .war**.

**02.** Copie o arquivo .war para o diretório system dentro da instalação do Fluig. O caminho depende do sistema operacional:

 - **Windows:**C:\<caminho_instalacao>\appserver\system

 - **Linux:**/<caminho_instalacao>/appserver/system

**03.** Após a cópia, o arquivo será detectado automaticamente e o **hot deploy** será realizado, ou seja, não necessita reiniciar o serviço Fluig.

Importante

   - Verifique as permissões do diretório antes de copiar o arquivo. Em alguns casos, pode ser necessário realizar essa ação como **administrador/root** para garantir o acesso adequado.

   - Caso possua **balanceamento de carga** (múltiplos servidores), será necessário executar o procedimento de cópia para todos os servidores.

Precisa de ajuda?

Caso enfrente qualquer dificuldade durante o processo de atualização, **não hesite em entrar em contato com nosso suporte técnico**. Estamos à disposição para auxiliá-lo!


<!-- anchors: VulnerabilidadecríticanoTOTVSFluigVejaasversõesafetadas-Comocorrigir?, 1, 1-1, 1-2 -->
