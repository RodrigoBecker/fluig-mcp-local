---
title: "Licenciamento da plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Licenciamento+da+plataforma"
scraped_at: "2026-03-09T03:02:10.141Z"
depth: 1
anchors: 31
child_links: 69
---

# Licenciamento da plataforma

# Introdução

Milhares de pessoas já utilizam o TOTVS Fluig Plataforma no seu dia-a-dia e nesse artigo falamos mais sobre como é feito o licenciamento da plataforma, seja ele *on-premise* ou *cloud*. Esse documento procura esclarecer as principais dúvidas que recebemos de nossos novos clientes, entretanto ele não tem poder de contrato que deve ser observado na contratação da plataforma TOTVS Fluig. *

# Como funciona o licenciamento no TOTVS Fluig Plataforma

Basicamente, três componentes estão envolvidos no Licenciamento da plataforma TOTVS Fluig, conforme mostrado na figura abaixo:

![](/download/attachments/241698192/image.png?version=2&modificationDate=1591030062323&api=v2)

- **Gestão de Licenças:** É um site disponibilizado aos clientes TOTVS para manutenção das licenças cadastradas. Nesse site o cliente indica quais licenças serão utilizadas em cada ambiente. Este é o primeiro passo, e caso o cliente não faça esse elo (da licença contratada com o TOTVS ID do License Server em que a plataforma irá se conectar), a plataforma irá atuar em modo demonstração.Mais informações sobre esse ponto podem ser encontradas nas documentações da TOTVS a respeito de Licenciamento:[Como remanejar licenças do License Server Virtual](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005163151-RM-Frame-Como-remanejar-licen%C3%A7as-do-License-Server-Virtual) 
- [Modo demonstração](/pages/viewpage.action?pageId=224106571)

**License Server:** É um software instalado em um servidor dentro do cliente, que se conectará à Gestão de Licenças, utilizando o TOTVS ID gerado no passo anterior como chave para disponibilizar as licenças do cliente para os produtos TOTVS que ele for utilizar. Assim como a plataforma TOTVS Fluig, os demais produtos irão consultar este serviço para verificar se existem licenças disponíveis;
Mais detalhes em:

- [Servidor de Licenças (License Server)](https://tdn.totvs.com/pages/releaseview.action?pageId=142805338)  

**TOTVS Fluig Plataforma**: Por fim, a plataforma se comunica com o License Server através da porta 5555, buscando pelo slot 4012 que é o licenciamento específico para a plataforma. Para saber quantas licenças estão sendo consumidas na plataforma, consulte o item [Como obter a quantidade de licenças consumidas?](#Licenciamentodaplataforma-quantidade_licencas)
## Problemas no licenciamento

Além de inconsistências nos softwares citados acima ou nas configurações de cada um, o que pode causar problemas no licenciamento é a falha na disponibilidade de algum destes serviços, ou interrupções na comunicação, principalmente da plataforma TOTVS Fluig com o License Server através da porta 5555.

Softwares anti-vírus, proxy, firewall ou até mesmo instabilidade na rede são fatores que podem ocasionar a mensagem: "O servidor de licenças está indisponível." para os administradores da plataforma.

A plataforma oferece um recurso que pode restabelecer o licenciamento, disponível para o usuário **wcmadmin.**No Painel de controle, localizar o agrupador **WCM** e acionar a opção **Configurações do sistema.** Em Parâmetros da plataforma > Configuração da conexão com o License Server é possível encontrar um botão de teste de conexão, que irá restabelecer o licenciamento, sem a necessidade de reiniciar os serviços caso haja instabilidade.

# Perguntas e respostas

## Licenças

### Quantos recursos eu recebo ao adquirir a plataforma TOTVS Fluig?

A TOTVS usa o melhor da tecnologia e segurança para atender aos seus clientes. Ao escolher obter a plataforma completa, sua empresa recebe diversas soluções. Isso faz com que um projeto TOTVS Fluig siga a velocidade da empresa, iniciando pelos recursos que mais impactam no negócio, podendo ativar outros recursos conforme passa o tempo.

- Gestão de Processo - BPM e Workflow;
- Gestão de Documentos - ECM ou GED;
- Gestão de Portais - WCM;
- Rede Social Colaborativa - Social;
- Integrações Complexas entre Sistemas - SOAP e Rest;
- Geração de Indicadores - Fluig Analytics;
- Gestão de Acessos - TOTVS Identity.

### Como adquirir licenças para a plataforma?

A compra de novas licenças é feita junto ao seu ESN ou Gerente de Contas. Se você ainda não possui ou quer apenas aumentar a quantidade de licenças contratadas, entre em contato com o seu ESN ou Gerente de Contas para fazer a solicitação. Toda a negociação é feita diretamente com estes canais.

### Solicitei novas licenças, preciso fazer alguma configuração?

Caso já tenha realizado a configuração do servidor de licenças anteriormente, não é necessário realizar nenhum procedimento ao adquirir mais licenças. Caso queira revisar essas configurações, acesse a plataforma com o usuário **wcmadmin** e verifique o recurso [Configurações do sistema](/pages/viewpage.action?pageId=235597328) do **Painel de Controle.**

Tenha em mente que, conforme o uso da plataforma cresce em sua empresa, será necessário revisitar seu ambiente. Caso a instalação seja em *cloud*, será necessário atualizar esse serviço. Caso você tenha a plataforma instalada no seu ambiente, verifique o documento de [dimensionamento](/display/fluig/Dimensionamento) para rever suas configurações.

### O que são IDs? E quem são eles?

Toda pessoa identificada na plataforma TOTVS Fluig, conta como uma identidade (ID).

As pessoas que o cliente autoriza a utilizar a plataforma poderão acompanhar solicitações e realizar ações dentro da plataforma. Isso significa que os IDs do cliente serão funcionários, consultores, prestadores de serviços, parentes e agentes definidos pelo cliente ou qualquer outra pessoa que venha a ser identificada.

### Todo mundo que acessa a plataforma é um ID?

Caso a pessoa que acessará a plataforma não precise ser identificada e/ou não venha a acessar a plataforma se identificando, esta não será considerada um ID e não precisa ser licenciada.

Um exemplo disso são páginas públicas criadas dentro da plataforma, onde não é necessária a identificação. Como em uma página de fornecedores, criada para o mesmo obter mais informações sobre sua empresa e seus produtos.

![](https://lh4.googleusercontent.com/0xYx8ua7ue4AAumK43TBE852sJ-kvD3ytGSh7iFwmebIy6aISMDRGy1YNGRuJpE49VEpgxcS-6ylGtp8FEUpEGm_BpH2YOdx45Z7kfgyrJPfgN65yfHoYA8uBzCP_SGw8X0rHrK_)

**Diferentes tipos de acesso**

### Tenho páginas públicas. Preciso de mais IDs?

Na tabela de exemplo abaixo, demonstra-se que não importa a quantidade de pessoas acessando páginas públicas, o importante é identificar quantas pessoas diferentes terão acesso à plataforma.

Vale lembrar que se um mesmo usuário e senha for compartilhado com várias pessoas, essas pessoas contam como IDs necessários, apesar de utilizarem o mesmo login.

| Situação | Funcionários na Empresa | Pessoas com Login na plataforma | Pessoas em Páginas Públicas | IDs Necessários |
| --- | --- | --- | --- | --- |
| Situação | Funcionários na Empresa | Pessoas com Login na plataforma | Pessoas em Páginas Públicas | IDs Necessários |
| Momento 1 | 1.000 | 300 | 3.000 | 300 |
| Momento 2 | 1.500 | 300 | 4.000 | 300 |

### O preço do TOTVS Fluig Plataforma depende da quantidade de soluções?

As compras da plataforma estão sempre relacionadas ao número de IDs, independentemente da quantidade de recursos usados (por exemplo, WCM, ECM, BPM, etc.) que a empresa esteja usando.

### Vou precisar de mais IDs se acessar a plataforma em vários dispositivos?

A grande vantagem de oferecer aos clientes o modelo de licenciamento pela quantidade de IDs é que não importa quantos dispositivos o cliente possua: cada indivíduo é representado por apenas um ID. Deste modo, acessar os sistemas através de celulares, tablets e outros dispositivos não afeta a quantidade de IDs necessários.

### Posso ter usuários integradores na plataforma?

Em integrações com a plataforma TOTVS Fluig é possível a utilização de um usuário integrador, que abre a plataforma para acesso externo.

Entretanto, segue a regra de venda por IDs, onde as pessoas identificadas dentro da empresa é que contam no licenciamento. Por exemplo: a plataforma pode receber para um mesmo usuário e senha 5 diferentes fornecedores, que são identificados de forma diferente na plataforma. Nesse caso serão considerados 5 IDs necessários para realizar essa ação.

### Comprei o Intera da TOTVS. Tenho direito ao TOTVS Fluig Plataforma?

Existem diversas licenças de Intera e cada uma varia o que o cliente terá acesso. Consulte seu executivo de conta para conhecer detalhes de cada oferta.

### Sou cobrado duas vezes pelo TOTVS Identity e na plataforma TOTVS Fluig?

As Identidades (IDs) adquiridas para a plataforma seguem a mesma regra, independente de quais recursos estão sendo utilizados. Se o mesmo indivíduo está cadastrado no Identity, e ele também usa os outros recursos da plataforma, ele só é contado como uma identidade.

## Ambiente

### Preciso ter um Ambiente de Homologação?

É nossa recomendação que o cliente possua um ambiente de homologação para que todos os novos desenvolvimentos sejam avaliados nesse ambiente. Sugerimos também que ao receber as atualizações da plataforma o cliente realize neste ambiente os testes necessários para que tudo flua bem e que seus desenvolvimentos continuem funcionando normalmente na nova versão.

### Vou precisar de IDs diferentes para os dois ambientes (homologação/produção)?

O licenciamento é contado pelo número de pessoas identificadas na plataforma.

Se foram contratadas 300 licenças, por exemplo, pode-se identificar até 300 pessoas independente do ambiente (produção, homologação e desenvolvimento). Portanto, é necessário somente identificar o número total de pessoas que acessarão a plataforma.

Como a licença da plataforma é por IDs, em ambiente com alta disponibilidade que possuem uma arquitetura de balanceamento, a forma de licenciamento da plataforma permanecerá a mesma. Desta forma, apenas é necessário identificar quais são as pessoas que terão acesso a recursos restritos dentro da plataforma. Veja o exemplo abaixo:

| Servidores de aplicação | Pessoas identificadas na plataforma | Pessoas que acessam esse ambiente | IDs necessários para a empresa |
| --- | --- | --- | --- |
| Servidores de aplicação | Pessoas identificadas na plataforma | Pessoas que acessam esse ambiente | IDs necessários para a empresa |
| Servidor de Produção - Balanceamento 1 | 300 | Todas as pessoas identificadas,ou seja, de 1 a 300 | 300 |
| Servidor de Produção - Balanceamento 2 | As mesmas identificadas no Balanceamento 1 |  |  |
| Servidor de Produção - Balanceamento 3 | As mesmas identificadas no Balanceamento 1 |  |  |
| Servidor de Homologação | As mesmas identificadas no Balanceamento 1 |  |  |

### Como obter a quantidade de licenças consumidas?

Existem 3 métodos diferentes de consulta dos usuários ativos (que consomem licença): 

- [Tela de Usuários](#)
- [Através da API](#)
- [Através de Relatório](#)

 - Acessar a plataforma com um usuário administrador → **Painel de Controle** → agrupador**Pessoas** → **Usuários.**

 - Nesse caso será apresentada a quantidade de usuários ativos por empresa (caso tenha mais empresas, é necessário somar).

![](/download/attachments/241698192/Image%202.jpg?version=1&modificationDate=1605035929637&api=v2)

 - A partir da atualização 1.6.2 você pode consultar esta informação através de uma API pública da plataforma. Para isso, autentique-se com um**usuário administrador.**

 - Altere a URL da plataforma seguindo o modelo: **[protocolo]://[host fluig]/license/api/v1/licenses**

 - Confira no retorno a quantidade de usuários ativos, o total de licenças, quantas estão sobrando e quantas a plataforma está recebendo, conforme exemplo abaixo:

![](/download/attachments/241698192/API.png?version=1&modificationDate=1605036208177&api=v2)

Para obter mais informações sobre esta API acesse [protocolo]://[Host fluig]/license/swagger-ui/.

 - Para exibir a quantidade total de usuários ativos na empresa, faça download do [Relatório de Usuários](https://git.fluig.com/projects/SAMPLES/repos/relatorios/browse/ambient-reports) disponível na página [Modelos de Relatórios fluig](/pages/viewpage.action?pageId=212902689).

 - Publique o relatório na plataforma. Para isso, acesse a documentação [Desenvolvimento de Relatórios](https://tdn.totvs.com/pages/viewpage.action?pageId=74646056#DesenvolvimentodeRelatórios-PublicandoRelatórios) para publicar o relatório de forma simples e rápida.

 - Nele você pode filtrar por usuários ativos da plataforma obtendo o valor total.

 - Se a plataforma tiver mais de uma empresa, este procedimento terá de ser realizado em cada empresa, somando os resultados.

A verificação da quantidade total de licenças contratadas é realizada no **LS Monitor.**

Fluig ESB

### Possuir o Fluig ESB altera o meu dimensionamento na nuvem?

Vale notar que em ambientes na nuvem do Fluig (Cloud) nosso questionário padrão não inclui situações onde o ESB será utilizado, e terá que ser respondido um questionário específico do ESB para que possamos dimensionar.

### Preciso de IDs de ESB?

Para o licenciamento do Fluig ESB, deve também ser observado o número de pessoas identificadas que utilizarão o ESB.

Por exemplo: minha empresa usará o Fluig ESB para recolher integrações de 5 empresas diferentes. Para cada empresa deve existir um ID, portanto precisarei ter 5 IDs disponíveis para a integração.

## License Server

### Quando preciso do License Server? E pra que ele serve?

Quando a plataforma é instalada em um servidor do próprio cliente (*on-premise*), é necessário possuir o License Server, que libera o uso da plataforma de acordo com a licença adquirida. Quando a plataforma está na nossa nuvem (Cloud), já incluímos em nossa proposta de Cloud esse serviço com as licenças adquiridas.

O License Server deve apontar para todos os ambientes da plataforma para poder controlar se a sua empresa está habilitada a utilizar a plataforma. Saiba mais sobre o License Server [em nossa documentação](https://tdn.totvs.com/x/WgmDC).

### O que acontece se ocorrer um problema na conexão entre o License Server e a nuvem?

Caso aconteça qualquer problema na conexão entre o License Server e a nossa nuvem, ele ficará tentando por 15 dias antes de parar de liberar a plataforma TOTVS Fluig para os indivíduos identificados.

![](https://lh6.googleusercontent.com/arEr_NvLY_n9HU2DA5Pwp5KVUbRCVIsOIEYFAt5-rLKp6lkNbS_ASvWKh98QUpjZumEw9SVmhEHhKWobx8f21-b1RoYL62WnT4-emPVb_l6KrPYx3q4jxPHb3muOZGked6T-9kRF)

**Situação de falha com a comunicação com a nuvem**

### O que acontece se ocorrer um problema na conexão entre o License Server e a plataforma?

Se por acaso acontecer qualquer problema com o serviço entre o License Server e a plataforma, o cliente deve regularizar em 7 dias, antes que ocorra interrupção por falta de licença.

Por isso pedimos que nossos clientes fiquem atentos aos alertas que serão enviados, para evitar que o serviço seja interrompido e a sua produtividade possa continuar fluindo.

![](https://lh6.googleusercontent.com/zXVff9hoS1Z3blZy-MDO_QEI0O06GwyJFH59vNiiYT1sZlqn-q9ApqlCRU_Zip9YCZfB9kPxD5ZRcmHRKbwAWGnxwDLsbM5fvXuddUORanatmeKzRHZtjpXJmouUn666ObPEMkux)

**Situação de falha de comunicação com o License Server configurado**

### Consigo cadastrar mais pessoas que o contratado?

A plataforma impede o cadastro de novas pessoas quando o limite contratado de IDs é atingido. O License Server realiza travas para controlar a licença adquirida.

Observação

O controle de licenças considera os usuários ativos na plataforma e a criação ou ativação de usuários é bloqueada quando o limite de licenças é atingido. Porém, atualmente não é possível consultar os IDs ativos pelo monitor do License Server.

* Caso exista alguma divergência entre esse texto e o contrato, valerá o contrato assinado pelo cliente.


<!-- anchors: Licenciamentodaplataforma-Introdução, Licenciamentodaplataforma-ComofuncionaolicenciamentonoTOTVSFluigPlataforma, Licenciamentodaplataforma-Problemasnolicenciamento, Licenciamentodaplataforma-Perguntaserespostas, Licenciamentodaplataforma-Licenças, Licenciamentodaplataforma-QuantosrecursoseureceboaoadquiriraplataformaTOTVSFluig?, Licenciamentodaplataforma-Comoadquirirlicençasparaaplataforma?, Licenciamentodaplataforma-Soliciteinovaslicenças,precisofazeralgumaconfiguração?, Licenciamentodaplataforma-OquesãoIDs?Equemsãoeles?, Licenciamentodaplataforma-TodomundoqueacessaaplataformaéumID?, Licenciamentodaplataforma-Tenhopáginaspúblicas.PrecisodemaisIDs?, Licenciamentodaplataforma-OpreçodoTOTVSFluigPlataformadependedaquantidadedesoluções?, Licenciamentodaplataforma-VouprecisardemaisIDsseacessaraplataformaemváriosdispositivos?, Licenciamentodaplataforma-Possoterusuáriosintegradoresnaplataforma?, Licenciamentodaplataforma-CompreioInteradaTOTVS.TenhodireitoaoTOTVSFluigPlataforma?, Licenciamentodaplataforma-SoucobradoduasvezespeloTOTVSIdentityenaplataformaTOTVSFluig?, Licenciamentodaplataforma-Ambiente, Licenciamentodaplataforma-PrecisoterumAmbientedeHomologação?, Licenciamentodaplataforma-VouprecisardeIDsdiferentesparaosdoisambientes(homologação/produção)?, Licenciamentodaplataforma-Comoobteraquantidadedelicençasconsumidas?, ativos, ativos-1, ativos-2, ativos-3, Licenciamentodaplataforma-PossuiroFluigESBalteraomeudimensionamentonanuvem?, Licenciamentodaplataforma-PrecisodeIDsdeESB?, Licenciamentodaplataforma-LicenseServer, Licenciamentodaplataforma-QuandoprecisodoLicenseServer?Epraqueeleserve?, Licenciamentodaplataforma-OqueaconteceseocorrerumproblemanaconexãoentreoLicenseServereanuvem?, Licenciamentodaplataforma-OqueaconteceseocorrerumproblemanaconexãoentreoLicenseServereaplataforma?, Licenciamentodaplataforma-Consigocadastrarmaispessoasqueocontratado? -->
