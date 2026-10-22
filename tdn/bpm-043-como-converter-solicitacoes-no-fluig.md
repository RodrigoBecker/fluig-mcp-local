---
title: "BPM 043 - Como converter solicitações no fluig?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240296678"
scraped_at: "2026-03-09T03:54:19.944Z"
depth: 2
anchors: 12
child_links: 133
---

# BPM 043 - Como converter solicitações no fluig?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** todas

# Descrição

A finalidade da conversão de processos é converter processo com versões mais antigas para versões mais novas. Isso é feito mapeando as atividades do processo mais antigo para atividades da versão mais recente. Assim, o processo antigo passa a contar com as configurações e atividades da versão mais nova com uma simples conversão.

Observação 1

Caso a solicitação esteja em uma atividade que permite retorno, ela não poderá retornar à atividade anterior após o processo de conversão da solicitação. Isso ocorre porque a conversão representa uma nova movimentação para o processo e portanto perderá a capacidade de retornar a atividade anterior, que pertence à versão antiga.

Observação 2

Caso a atividade com a versão antiga esteja com consenso configurado, só será permitido converter para uma nova versão, quando possuir atividades destino que também estejam com consenso configurado.

# Procedimentos

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Selecionar a funcionalidade **Converter Solicitações** no menu **Processos**. 

![](/download/attachments/240296678/1_1.png?version=2&modificationDate=1553516802367&api=v2)

 - Selecione o processo e a versão que receberá a conversão, em seguida, clique em **Avançar**.

    Só é possível converter versões que possuem solicitações abertas, como pode ser visto na coluna **Solicitações Abertas** na imagem abaixo.

![](/download/attachments/240296678/2.2.png?version=2&modificationDate=1553516900487&api=v2)

 - Selecione a **Versão Destino** para qual as solicitações de versão antiga serão convertidas, feito isso, será listado as atividades que poderão ser selecionadas como destino, faça o mapeamento e clique em **Avançar**.

    O mapeamento é feito para relacionar as atividades que são iguais ou semelhantes entre as duas versões do processo.

![](/download/attachments/240296678/3.3.png?version=2&modificationDate=1553517023473&api=v2)

 - Neste momento, as solicitações abertas que podem ser convertidas serão listadas para a seleção, em seguida, clique em **Avançar**.

![](/download/attachments/240296678/4.4.png?version=2&modificationDate=1553517079277&api=v2)

 - A página seguinte servirá para confirmar o mapeamento feito e as solicitações selecionadas que serão convertidas. Os dados estando corretos, clique em **Converter**.

![](/download/attachments/240296678/5.5.png?version=2&modificationDate=1553517251120&api=v2)

 - As solicitações serão convertidas, trazendo em tela o log do processo de conversão.

    O log exibirá:
    **INFO**: Informações com dados da solicitação.
    **WARN**: Mensagens de atenção que devem ser observados pelo usuário. Não impedem a conversão.
    **ERROR**: Retornará ao usuário, a mensagem do porque a solicitação não ter sido convertida.

![](/download/attachments/240296678/6.6.png?version=2&modificationDate=1553517292853&api=v2)

# Observações

Consulte a documentação sobre [Conversão de Solicitações](https://tdn.totvs.com/pages/viewpage.action?pageId=233763179) no Help Online fluig.


<!-- anchors: BPM043Comoconvertersolicitaçõesnofluig?-Índice, BPM043Comoconvertersolicitaçõesnofluig?-Plataforma, BPM043Comoconvertersolicitaçõesnofluig?-Descrição, BPM043Comoconvertersolicitaçõesnofluig?-Procedimentos, help, help-1, help-2, help-3, help-4, help-5, help-6, BPM043Comoconvertersolicitaçõesnofluig?-Observações -->
