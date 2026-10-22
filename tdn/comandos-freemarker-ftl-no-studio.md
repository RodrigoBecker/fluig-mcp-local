---
title: "Comandos Freemarker (FTL) no Studio"
url: "https://tdn.totvs.com/display/public/fluig/Comandos+Freemarker+%28FTL%29+no+Studio"
scraped_at: "2026-03-09T03:05:32.076Z"
depth: 1
anchors: 3
child_links: 61
---

# Comandos Freemarker (FTL) no Studio

# Índice

# Objetivo

O objetivo deste guia é apresentar alguns comandos do Freemarker que podem ser utilizados no fluig Studio.

# Comandos

A seguir são apresentados os comandos e sua utilização:

| Comando | Descrição |
| --- | --- |
| Comando | Descrição |
| @wcm.header | Macro especial do fluig, insere o cabeçalho no layout. Veja mais em Biblioteca WCM. |
| @wcm.menu | Macro especial do fluig, insere o menu no layout. Veja mais em Biblioteca WCM. |
| @wcm.renderSlot | Macro especial do fluig, insere um slot no layout. Veja mais em Biblioteca WCM. |
| @wcm.footer | Macro especial do fluig, insere o rodapé no layout. Veja mais em Biblioteca WCM. |
| assign | Cria uma variável, ou substitui uma variável existente, veja mais em Assign. |
| attempt | Faz com que a página renderize, mesmo que uma parte da renderização falhe. Veja mais em Attempt. |
| break | Veja Switch ou List. |
| case | Veja Switch. |
| compress | Remove espaços em branco desnecessários. Veja mais em Compress. |
| default | Veja Switch. |
| else / elseif | Veja If. |
| function | Cria um método. Se o método não contém um retorno, então é retornada uma variável undefined. Veja mais em Function. |
| flush | Quando o Freemarker gera o output, geralmente ele guarda esse output gerado e envia para o client em um ou mais pedaços. Esse ato se chama fazer o flush. Normalmente ele ocorre automaticamente. Veja mais em Flush. |
| global if | Você pode utilizar as diretivas if, elseif e else para condicionalmente pular uma seção do template. As condições devem traduzir para um valor booleano, caso contrário, um erro irá interromper o processamento do template. Os elseif e else devem ocorrer dentro de um if (ou seja, entre as tags de inicio e fim do If). O if pode conter qualquer numero de elseif (incluindo 0) e, no final, opcionalmente, um else. Veja mais em If. |
| import | Importa uma biblioteca. Veja mais em Import e Criar uma biblioteca personalizada. |
| include | Inclui outro template Freemarker dentro do seu template. Veja mais em Include. |
| list | Processa uma seção de template para cada variável contida dentro de uma sequência. Veja mais em List. |
| local | Cria ou substitui uma variável local. Funciona apenas dentro de uma Macro ou Function. Veja mais em Local. |
| lt | Left Trim: ignora todos os espaços em branco precedentes na linha. Veja mais em LT. |
| macro | Cria uma variável de macro. Veja mais em Macro e Criar uma biblioteca personalizada. |
| nested | Executa o fragmento do template. Veja a diretiva Macro. |
| nt | No Trim: desabilita a remoção de espaços em branco na linha onde ele é utilizado. Ele também desabilita os efeitos de outras diretivas de trim. Veja mais em NT. |
| recover | Veja Attempt. O bloco de recover é executado no lugar do bloco attempt. Caso nenhum erro ocorra durante a execução do bloco attempt então o bloco recover é ignorado. |
| recurse | Percorre todos os nós filhos de um nó. Veja mais em Recurse. |
| return | Veja Macro e Function. |
| rt | Right Trim: ignora todos os espaços em branco procedentes na linha. Veja mais em RT. |
| stop | Interrompe o processo de renderização do template. Veja mais em Stop. |
| switch | Switch é utilizado para selecionar um fragmento do template dependendo do valor de uma expressão. Veja mais em Switch. |
| t | Trim: ignora os espaços em branco precedentes e procedentes na linha. Veja mais em T. |


<!-- anchors: ComandosFreemarker(FTL)noStudio-Índice, ComandosFreemarker(FTL)noStudio-Objetivo, ComandosFreemarker(FTL)noStudio-Comandos -->
