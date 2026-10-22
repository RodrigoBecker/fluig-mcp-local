---
title: "Identity | Bean Validations"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Bean+Validations"
scraped_at: "2026-03-09T05:14:02.637Z"
depth: 3
anchors: 15
child_links: 29
---

# Identity | Bean Validations

A API Bean Validations permite incluir anotações no código que dizem como os campos serão validados pela aplicação.

Abaixo temos um exemplo de algumas anotações básicas existentes na API:

**Validações Básicas**

[?](#)

| 123456789101112131415161718192021 | `public` `class` `User {````@NotNull` `@Email````private` `String email;` ```public` `String getEmail() {````return` `email;````}` ```public` `void` `setEmail(String email) {````this``.email = email;````}``}` `@ValidateParams``public` `class` `UserService {` ```public` `void` `createUser(``@Email` `String email,````@NotNull` `String name) {````...````}``}` |
| --- | --- |

Junto com a estrutura desenvolvida no Identity, tais anotações são validadas automaticamente quando a classe ou o método possui a anotação **@ValidateParams**.

Para isso, as anotações de validação devem ser colocadas na classe de **Implementação** e também nas I**nterfaces** onde os métodos são definidos.

**A anotação @ValidateParams deve ser colocada somente na implementação**.

- [ServiceInterface](#)
- [ServiceImpl](#)

[?](#)

| 123 | `public` `class` `ServiceInterface {````public` `void` `createUser(``@Email` `String email,``@NotNull` `String name);``}` |
| --- | --- |

[?](#)

| 123456 | `@ValidateParams``public` `class` `ServiceImpl {````public` `void` `createUser(``@Email` `String email,``@NotNull` `String name){````//...````}``}` |
| --- | --- |

### Agrupamento de Validações

É possível agrupar validações em uma mesma validação personalizada, conforme exemplo abaixo, que faz várias validações em um único parâmetro.:

**Multiplas Validações**

[?](#)

| 1234567 | `@ValidateParams``public` `class` `CarService {` ```public` `void` `findCar(``@NotNull` `@NotBlank` `@NotEmpty` `@Pattern``(regex=``"[A-Z]{3}\d{4}"``) String plate) {````...````}``}` |
| --- | --- |

Para simplificar, poderíamos criar uma validação personalizada, combinando todas essas validações em uma única validação (@Plate)

**Validações Agrupadas**

[?](#)

| 1234567 | `@ValidateParams``public` `class` `CarService {` ```public` `void` `findCar(``@Plate` `String plate) {````...````}``}` |
| --- | --- |

Para isso, é necessário criar uma anotação nova, seguindo alguns padrões.

**Validação Customizada**

[?](#)

| 1234567891011121314151617181920212223242526 | `// agrupamento das validações utilizadas``@NotNull``@NotEmpty``@NotBlank``@Pattern``(regex=``"[A-Z]{3}\d{4}"``)``` `// Elementos onde essa anotação pode ser colocada``@Target``({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.PARAMETER})``@Retention``(RetentionPolicy.RUNTIME)``` `// Anotação que indica que esta é uma anotação de validação``@Constraint``(validatedBy = {})`  `// Anotação que indica que todas as anotações agrupadas serão tratadas como uma unica violação``@ReportAsSingleViolation``public` `@interface` `Plate {````// Identificação da mensagem a ser exibida````String message()``default` `"{com.totvs.custom.validation.plate.message}"``;` ```// Permite definir grupos com outras anotações````Class[] groups()``default` `{};` ```// Área para inclusão de dados genéricos````Class[] payload()``default` `{};``}` |
| --- | --- |

É possível também criar validadores customizados para as anotações.

Seguindo o exemplo acima, poderíamos incluir uma verificação no Detran, para verificar se a placa é realmente válida, para isso, é necessário escrever código para realizar essa consulta.

Com algumas modificações, é possível incluir um validador customizado para essa tarefa:

- [Plate](#)
- [DetranValidator](#)

  **@Plate**

[?](#)

| 1234567891011121314151617 | `@NotNull``@NotEmpty``@NotBlank``@Pattern``(regex=``"[A-Z]{3}\d{4}"``)``@Target``({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.PARAMETER})``@Retention``(RetentionPolicy.RUNTIME)` `// Classe que irá fazer a validação no Detran``@Constraint``(validatedBy = DetranValidator.``class``)``@ReportAsSingleViolation``public` `@interface` `Plate{````String message()``default` `"{com.totvs.custom.validation.plate.message}"``;` ```Class[] groups()``default` `{};` ```Class[] payload()``default` `{};``}` |
| --- | --- |

  **DetranValidator**

[?](#)

| 123456789101112131415161718192021 | `public` `class` `DetranValidator``implements` `ConstraintValidator {` ```private` `CaseMode caseMode;` ```@Override````public` `void` `initialize(CheckCase constraintAnnotation) {````this``.caseMode = constraintAnnotation.value();````}` ```@Override````public` `boolean` `isValid(String object, ConstraintValidatorContext constraintContext) {````var validDetran = pesquisaDetran();``// logica de pesquisa no detran````if` `( validDetran ) {````return` `true``;````}````return` `false``;````}``}`  ``  |
| --- | --- |


<!-- anchors: highlighter_137155, serviceImplementation, serviceImplementation--843856348, highlighter_419693, serviceImplementation--260840875, highlighter_119668, Identity|BeanValidations-AgrupamentodeValidações, highlighter_476944, highlighter_241122, highlighter_205401, customValidator, customValidator-77196022, highlighter_745378, customValidator-314957158, highlighter_202520 -->
