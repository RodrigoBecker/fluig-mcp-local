---
title: "FORM 009 - Como adicionar validações nos campos de um Form?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=439708952"
scraped_at: "2026-03-09T03:33:37.517Z"
depth: 2
anchors: 3
child_links: 38
---

# FORM 009 - Como adicionar validações nos campos de um Form?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.6.4 ou superiores.

Abaixo você acompanha o passo a passo sobre como adicionar validações no seu Form. Um recurso que irá auxiliar na padronização dos registros do seu Form.

Validações são conjuntos de regras que servem para auxiliar no momento da inserção do registro do formulário em forms que precisam ter seus registros padronizados. Funcionam como uma espécie de condição onde ao inserir um valor de registro que não atende à validação imposta no form, não será possível salvar este registro por não atender a validação.

Uma mensagem será apresentada informando ao usuário que o valor inserido não atende a condição imposta, sendo necessário a adequação do registro à condição da validação para que atenda a regra e o registro possa ser salvo corretamente.

As validações podem ser adicionadas aos componentes do tipo Texto, Numérico e Data que possuem validações específicas para cada um deles.

Não podem ser adicionadas validações aos componentes citados abaixo:

- Escolha única
- Múltipla escolha
- Lista
- Lista suspensa
- Avaliação
- Texto rico

Alguns exemplos de como a validação funciona:

- **CPF:** a validação de CPF confere se no momento de informar um CPF, o número do mesmo é válido. Não permitindo que possa ser informado um CPF inválido.

- **E-mail:** a validação de E-mail confere se ao informar um e-mail este valor esteja correto, não permitindo falhas como a falta de caracteres ou formatação errada do e-mail. 

Confira o passo a passo para adicionar validações ao form.

### Adicionar validação ao Form

---

Atenção

A validação só é executada se no campo em que for adicionada, for inserido um valor. Caso o campo com a validação não seja preenchido e não tenha sido marcado como obrigatório, a validação não será executada porém será possível salvar o registro de formulário em questão. A menos que o campo tenha sido marcado como obrigatório neste caso, não será possível salvar o registro sem antes preencher o campo obrigatório com a validação inserida.

**01.** Com o form aberto, inserir um componente que contenha validação e acionar ![](/download/attachments/439708952/editar.png?version=1&modificationDate=1544206984077&api=v2), logo depois acionar a aba do componente **Validações**.

**02.** Escolher entre as validações apresentadas.

**03.** Configurar a validação. Algumas validações que possuem verificação de conteúdo, pedem para selecionar o Valor que pode ser tanto Fixo quanto Campo, ou seja, o valor fixo é aquele que é inserido no campo Valor e que somente será atendida a validação, se no momento do registro aquele o valor inserido for igual ao valor fixo inserido na validação. Já o valor selecionado como Campo será validado conforme o campo a ser escolhido na validação. 

![](/download/attachments/439708952/Adicionar%20Valida%C3%A7%C3%A3o.png?version=2&modificationDate=1544212106660&api=v2)

**04.** Após configurar a validação, ela é apresentada na aba de validações do Forms.


<!-- anchors: FORM009ComoadicionarvalidaçõesnoscamposdeumForm?-Índice, FORM009ComoadicionarvalidaçõesnoscamposdeumForm?-Plataforma, FORM009ComoadicionarvalidaçõesnoscamposdeumForm?-AdicionarvalidaçãoaoForm -->
