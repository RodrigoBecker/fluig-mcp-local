---
title: "FORM 007 - O que muda na navegação de formulários da 1.6.4 para 1.6.5?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=437261545"
scraped_at: "2026-03-09T03:33:16.069Z"
depth: 2
anchors: 9
child_links: 44
---

# FORM 007 - O que muda na navegação de formulários da 1.6.4 para 1.6.5?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.6.5 e superiores

Acompanhe a seguir os item que mudaram da release passada Waterdrop 1.6.4 para a release Liquid 1.6.5.

#### Navegação de documentos

---

A partir da release 1.6.5 Liquid, os forms não serão mais documentos do ECM, ou seja, não serão mais salvos dentro da navegação de documentos. Todos os Forms estarão centralizados na central de desenvolvimento de Forms (Forms) facilitando o acesso em um único lugar.

A navegação de documentos ainda guardará os antigos formulários construídos à partir da release Waterdrop 1.6.4. Contudo, estes formulários serão uma espécie de atalho para o nova central de desenvolvimento de Forms (Forms) e formulários criados em HTML legados serão mantidos na navegação de documentos. 

#### Novos componentes

---

Foram criados novos componentes para o desenvolvimento de formulários como o componente Busca usuário e Parágrafo rico (complementar a especificação dos componentes). Assim como melhoramos os componentes de Abas e Sessão, pois agora é possível modelar o conteúdo de abas e sessões através do arrastar e soltar de componentes (drag and drop) melhorando a experiência de usabilidade e praticidade ao modelar Forms.

#### Datasets gerados à partir de Forms

---

Nessa release não serão mais gerados datasets automaticamente ao se criar um Form. Em breve iremos liberar api's de acesso a dados que por sua vez poderão ser consumidos no gerador de Datasets liberado na release 1.6.2. Os datasets terão de ser criados manualmente e configurados conforme a necessidade pra que traga os valores para dentro do form corretamente. Para saber mais sobre como construir Datasets acesse nossa documentação oficial. 

#### Validações/Regras

---

Será possível criar um conjunto de validações de campos no Forms, será possível validar CPF e CNPJ válidos, E-mail, Datas e entre outras validações. Esse recurso ajuda muito quem precisa ter informações padronizadas no Forms pois pode-se estabelecer condições para que as validações sejam executadas, como a validação: Validar e-mail com conteúdo, onde é possível validar se o e-mail informado é válido além de validar se o e-mail atende a condição do conteúdo que foi pré-estabelecido na configuração da validação.

#### Form público

---

O Forms permitirá que pessoas fora da plataforma acessem os formulários criados com o recurso Definir formulário como público? Estes formulários poderão ser preenchidos por usuários que estejam fora da plataforma e que não possuem um usuário cadastrado. Basta acionar a opção Definir formulário como público e compartilhar a URL que gerá gerada e disponibilizada no recurso Compartilhar dentro da Central de desenvolvimento de Forms (Forms)

#### Integração

---

Também será possível executar uma integração ao se criar um registro de form. A funcionalidade é conveniente para as situações de formulários públicos onde se tem a necessidade de integrar o form à outros sistemas ou que precisem iniciar solicitações workflows automaticamente dentro da plataforma.

#### Banco de dados

---

Dentro das tabelas do banco de dados, os campos serão criados com o tipo seguindo o tipo de objeto escolhido para o form. Ou seja, objetos do tipo Data irão gerar um campo do tipo Date ou equivalente dentro do banco de dados escolhido.


<!-- anchors: FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Índice, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Plataforma, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Navegaçãodedocumentos, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Novoscomponentes, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-DatasetsgeradosàpartirdeForms, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Validações/Regras, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Formpúblico, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Integração, FORM007Oquemudananavegaçãodeformuláriosda1.6.4para1.6.5?-Bancodedados -->
