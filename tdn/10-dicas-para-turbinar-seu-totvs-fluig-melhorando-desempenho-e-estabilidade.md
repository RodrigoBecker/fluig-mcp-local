---
title: "10 dicas para turbinar seu TOTVS Fluig melhorando desempenho e estabilidade"
url: "https://tdn.totvs.com/display/public/fluig/10+dicas+para+turbinar+seu+TOTVS+Fluig+melhorando+desempenho+e+estabilidade"
scraped_at: "2026-03-09T04:57:13.570Z"
depth: 3
anchors: 28
child_links: 36
---

# 10 dicas para turbinar seu TOTVS Fluig melhorando desempenho e estabilidade

## Palestrantes

        ![Palestrante 1 - Abner](https://i.postimg.cc/zf1NRPR9/1718311044257.jpg)

Abner Athayde

        ![Palestrante 2 - Vanat](https://i.postimg.cc/vBhGyLTC/1744228622366.jpg)

Rogério Carvalho

**Download da Apresentação:** [10 dicas para turbinar seu TOTVS Fluig melhorando desempenho e estabilidade](https://www.dropbox.com/scl/fi/e4ntnqccukqyf82hzhrh4/2025-10-dicas-para-turbinar-seu-TOTVS-Fluig-melhorando-desempenho-e-estabilidade.pdf?rlkey=j60abln5dnxhkz7z4ty4h8xnu&st=8btnt64g&dl=0)

# Objetivo

---

Nesta página, compilaremos alguns pontos importantes para otimizar a entrega do serviço Fluig, passando por dicas de infraestrutura e também revisando alguns pontos de Desenvolimentos.
Vamos revisar alguns fatores, parâmetros e diretrizes que podem transformar a jornada com o Fluig em uma viagem tranquila, minimizando imprevistos com ações simples e eficientes.

##  Algumas Configurações básicas costumam ficar esquecidas:

- ## Quantidade de Conexões do Fluig com o Banco de Dados (FluigDS, FluigDSRO e Customs)
Não existe uma configuração padrão para o número de conexões com o banco pois cada forma de uso da Plataforma pode demandar mais ou menos conexões, mas para sair da caixinha - ou sair das configurações padrão do instalador - pode-se ajustar inicialmente o **max-pool-size** para 300 em cada um dos Datasources.Para casos onde a demanda de uso é grande, pode ser necessário um ajuste fino nestes parâmetros, ou ainda considerar um crescimento horizontal da Infraestrutura. Falaremos sobre Load Balance mais à frente.O TOTVS Fluig por padrão tem configurados no arquivo domain.xml 3 Datasources para atender às diversas necessidades operacionais. Sendo eles **FluigDS**e **FluigDSRO** de uso exclusivo da Plataforma e **AppDS**que é voltado para uso em customizados. Abaixo um exemplo de configuração sugerida para estes Datasources:

**FluigDS - domain.xml**

[?](#)

| ```````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````10````300``...````` |
| --- |

**FluigDSRO - domain.xml**

[?](#)

| ```````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````5````300``...````` |
| --- |

**AppDS - domain.xml**

[?](#)

| `````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````5````300``...````` |
| --- |

           O arquivo domain.xml pode ser encontrado no seguinte caminho***: <diretório de instalação do Fluig>\appserver\domain\configuration\domain.xml.***A quantidade máxima de conexões pode ser ajustada no parâmetro **<max-pool-size>**.

Sempre realize um Backup do arquivo domain.xml antes de realizar alterações. 
As alterações serão aplicadas somente após a reinicialização da Plataforma.

- ## Adequação das Filas Assíncronas

Tal como no Banco de Dados, não existe uma configuração padrão para as Filas Assíncronas da Plataforma. Entretanto, alguns ajustes simples podem trazer uma melhor entrega do serviço sem um aumento considerável no consumo de recursos do servidor;
Abaixo, listo uma**sugestão**de parametrização que costuma atender a maioria dos casos de forma satisfatória:****

**Filas Assíncronas - domain.xml**

[?](#)

| ```````````````````````````````````````` |
| --- |

O arquivo domain.xml pode ser encontrado no seguinte caminho*: **<diretório de instalação do Fluig>\appserver\domain\configuration\domain.xml**.*Sempre realize um Backup do arquivo domain.xml antes de realizar alterações. 
As alterações serão aplicadas somente após a reinicialização da Plataforma.
****

- ## Ajuste de Memória (XMX, MetaSpace)

Por padrão. as configurações de memória que o instalador fornece são: 

size="2g" (memória inicial de consumo)

max-size="4g" (máximo a ser consumido)

Para um ambiente de desenvolvimento local, muitas vezes estes parâmetros são suficientes. Porém, para um ambiente de homologação ou produção, é necessário alterar esses valores. 

Esta alteração é feita no arquivo host.xml, que pode ser localizado em: **<diretório de instalação do Fluig>\appserver\domain\configuration\host.xml.**

Não é recomendado alterar a quantidade inicial (mínima) de memória alocada **(size="2g")**, pois a plataforma alocará memória de acordo com a necessidade sem que ultrapasse o valor máximo declarado em max-size, podendo retornar até o valor mínimo sempre que a demanda de uso da plataforma diminuir.

Portanto, na tag <heap> o parâmetro a ser ajustado é o 'max-size'.
Nos testes de performance realizados pela equipe de produto, o melhor valor para este parâmetro é **12g,** sendo que acima deste valor não há ganho real de performance. Falaremos mais sobre como ir além deste ponto no tópico seguinte 'Dimensionamento'.

Além disto, recomenda-se também ampliar o valor do parâmetro MaxMetaspaceSize, de 1024m (1g) para 2g, conforme exemplo abaixo:

**Ajuste de Memória - host.xml**

[?](#)

| ```````````````````````````...` |
| --- |

Esta parametrização sugerida faz um bom uso dos recursos de memória, sem desperdiçar ou alocar recursos que serão utilizadas de forma não otimizada.

É importante garantir que o servidor tenha memória suficiente para suportar esta configuração. 
Tenha em mente que o Sistema operacional também consome memória, então para o ajuste sugerido, deve haver pelo menos 18g de memória instalada no servidor (12g + 2g + 4g para o S.O.).
Na documentação [Modelo de dimensionamento](https://tdn.totvs.com/display/fluig/Modelo+de+dimensionamento) podem ser encontrados mais detalhes e recomendações sobre o assunto.

Sempre realize um Backup do arquivo host.xml antes de realizar alterações.
As alterações serão aplicadas somente após a reinicialização da Plataforma.

- # Limite de Arquivos do Linux e parametrizações que dependem do Sistema Operacional, como permissões e liberações de Firewall

A instalação do Fluig depende diretamente do comportamento de das parametrizações do S.O. e da Topologia de Rede em que esteja sendo executado, portanto alguns detalhes devem ser verificados, listamos alguns abaixo:

-Permissionamento no sistema de arquivos:
Garanta que o serviço Fluig seja Owner do diretório da instalação, bem como do Volume da plataforma;

-Liberação em Firewall:
Por se tratar de uma aplicação onLine, é imprescindível garantir que as portas e endereços envolvidos estejam com a correta liberação. Consulte [Portas e endereços](https://tdn.totvs.com/pages/viewpage.action?pageId=275591571) para mais detalhes;

-Caso o servidor seja Linux, recomendamos visitar a documentação de [Configurações sugeridas em ambientes Linux](https://tdn.totvs.com.br/pages/viewpage.action?pageId=242389225) para o perfeito funcionamento neste S.O.

# 2
        Dimensionamento

### Observar as demandas e responsabilidades atribuídas à Plataforma, e trabalhar com uma entrega coerente de disponibilidade de serviço

- ## Crescimento Horizontal x Vertical

Após atingir o limite de memória no ajuste das parametrizações padrão, que vimos no tópico anterior, o Crescimento da entrega de disponibilidade de serviço deve ser planejado de forma Horizontal.

Ou seja, se a demanda aumenta, ao invés de ultrapassar o limite recomendado de máximo de memória para o serviço Fluig devem ser disponibilizados mais servidores em paralelo, implementando o Balanceamento de Carga.

Para implementar da forma correta, recomendamos avaliar as documentações [Modelo de dimensionamento](https://tdn.totvs.com.br/display/fluig/Modelo+de+dimensionamento) e [Alta disponibilidade e Balanceamento de carga](https://tdn.totvs.com.br/display/fluig/Alta+disponibilidade+e+Balanceamento+de+carga), que trazem as diretrizes recomendadas para esta implementação.

- ## Demanda Uso x Quantidade de Nós (capacidade de processamento) 

A partir de 100 usuários acessando a plataforma em paralelo já é recomendada a implementação do Balanceamento de Carga com pelo menos dois Servidores Fluig. 
Mesmo com menos usuários, é uma boa prática projetar este crescimento, avaliando possíveis projetos futuros e pavimentando o caminho para que a implementação do Balanceamento seja realizada.

Além do Balanceamento de Carga, ferramentas como o Apache e NGinx podem atuar como um Proxy Reverso, atuando como uma camada extra de segurança, e ampliando a maturidade da sua topologia de rede.
Para mais dicas de segurança, visite também [Técnicas para dar mais segurança à sua plataforma TOTVS Fluig: 5 dicas práticas](https://tdn.totvs.com.br/pages/viewpage.action?pageId=847899962)

- ## Avaliar as Demandas de integração para adequar a entrega de disponibilidade

Muitas vezes observamos o acesso realizado por usuários físicos, mas desconsideramos que as integrações de entrada (ERP e sistemas terceiros) e integrações de saída (Datasets sincronizados, Chamadas de webservices, etc) também demandam recursos computacionais.
Sempre considere estas demandas ao realizar o dimensionamento da Plataforma, para evitar impactos aos usuários físicos e garantir uma entrega de qualidade no serviço da Plataforma.

# 3
Otimização dos Dados da Plataforma

### Ferramentas nativas do Fluig para uso rotineiro, e algumas dicas extras

- ## Limpeza de Notificações, Limpeza de Lixeira e Compactação de Solicitações

Algumas ações básicas podem ser feitas utilizando a ferramenta nativa embarcada na plataforma, e trazem vantagens para manutenção de dados a longo prazo;
Verifique **Plataforma ❙ Agendador de tarefas**e avalie como estão suas configurações de Limpeza de Notificações, limpeza de Lixeira e Compactação de Solicitações.

Estas ações visam otimizar dados das tabelas e expurgar informações que não precisam mais ocupar espaço em Banco de Dados. Mais detalhes sobre cada um dos tópicos podem ser encontrados na documentação oficial.

- ## Avaliar documentos  nunca acessados

**SQL - Documentos nunca acessados**

[?](#)

| `/* Anexos de processos nunca acessados */` `SELECT` `nr_versao, nr_documento, nm_arquivo_fisico, num_tam_arq_fisic``FROM` `documento d``WHERE` `nr_acessos = 0``AND` `tp_documento=7``OR` `(tp_documento=2``AND` `EXISTS(``SELECT` `ap.NR_DOCUMENTO``FROM` `anexo_proces ap``WHERE` `ap.NR_DOCUMENTO = d.NR_DOCUMENTO) )``ORDER` `BY` `num_tam_arq_fisic``DESC``, nr_documento``DESC` `/* Documentos que não são anexos de processos, nunca acessados */` `SELECT` `nr_versao, nr_documento, nm_arquivo_fisico, num_tam_arq_fisic``FROM` `documento d``WHERE` `nr_acessos = 0``AND` `tp_documento=2``AND` `not` `EXISTS(``SELECT` `ap.NR_DOCUMENTO``FROM` `anexo_proces ap``WHERE` `ap.NR_DOCUMENTO = d.NR_DOCUMENTO )``ORDER` `BY` `num_tam_arq_fisic``DESC``, nr_documento``DESC` |
| --- |

```
Nunca elimine informações diretamente das tabelas da plataforma.
```

Os documentos que forem identificados para eliminação devem ser eliminados através da Navegação de Documentos, ou das APIs Públicas de manutenção de Documentos.

- ## Avaliar documentos com validade expirada

**SQL - Documentos nunca acessados**

[?](#)

| `/* documentos com a data de expiração menor do que a data atual */``SELECT` `distinct``(nr_documento)``FROM` `documento``WHERE` `dt_expiracao |
| --- |

```
Nunca elimine informações diretamente das tabelas da plataforma.
```

Os documentos que forem identificados para eliminação devem ser eliminados através da Navegação de Documentos, ou das APIs Públicas de manutenção de Documentos.

- ## Expurgo da tabela fdn_accesslog

A tabela fdn_accesslog registra todas as tentativas de login com erro, com sucesso e logout da Plataforma.
Os dados desta tabela podem servir para auditoria de acesso, mas após extraídos relatórios e informações relevantes, as informações podem ser apagadas da tabela para diminuir o volume de dados do Banco de Dados.

**SQL - Documentos nunca acessados**

[?](#)

| `/*````log_type:``0 - LOGIN,``1 - LOGINERROR,``2 - LOGOUT` `access_date``Data``no` `formato``'YYYY-MM-DD HH:mm:ss'``*/``SELECT` `*``FROM` `fdn_accesslog` |
| --- |

Diferente de outras tabelas da plataforma, a tabela fdn_accesslog pode ter dados eliminados diretamente no banco de dados.

# 4
Chamadas de Serviço Padronizadas

### A interface de integração da Plataforma é completa e segura

- ## Sempre consumir APIs documentadas

Nas integrações com aplicações externas e APIs da Plataforma, é importante garantir que ocorram de forma segura e confiável.

As APIs documentadas são uma forma de 'contrato', onde a documentação da API garante que a assinatura seguirá coerente ao longo das atualizações das Plataformas. 

- ## Usar o Cadastro de Serviços como Interface de Integração 

O Cadastro de Serviços da Plataforma traz diversas vantagens, como por exemplo a rastreabilidade do número total de chamadas, bem como a diferenciação das chamadas com sucesso e as que retornaram erro, em cada API cadastrada.

Além disso, nas APIs configuradas é possível consultar um Log detalhado destas tentativas de integração.
Consulte a documentação [Plataforma ❙ Serviços](/pages/viewpage.action?pageId=243660796) para avaliar todas as funcionalidades.

![](/download/attachments/953006920/image-2024-6-16_22-47-28.png?version=1&modificationDate=1749646994800&api=v2)

- ## Tirar proveito da Modernização e Evolução constantes da interface da Plataforma

Utilizar as interfaces da Plataforma para implementar suas integrações garante que, caso surjam novas ferramentas, Melhorias e correções, você seja contemplado sem maiores esforços.

Uma recomendação é sempre complementar o seu desenvolvimento de integrações avaliando a performance de APIs fora do contexto da Plataforma, utilizando ferramentas como PostMan para observar o comportamento das APIs isoladamente.

# 5
Controles de logs

### Um dos Maiores Aliados do desenvolvedor

- ## Log de chamadas de Serviço - Request x Response

Tão importante quanto fazer um desenvolvimento bem feito, é ter um acompanhamento dessas chamadas. 
O Log das chamadas de Serviço é uma interface complementar ao Log Principal da plataforma, Nichado para rastrear as interações com algum serviço específico cadastrado na Plataforma.

- ## Log Principal - server.log

Tempos e Detalhes de execução de Serviços, Dataset e Eventos da Plataforma. Confira também [Plataforma ❙ Controle de log](https://tdn.totvs.com.br/pages/viewpage.action?pageId=236428687)

- ## Log Por Usuário

Log específico para as ações realizadas na Sessão de um usuário específico. Muito útil para isolar e avaliar comportamentos inesperados reportados por usuários da plataforma. Confira também [Controle de Log](https://tdn.totvs.com.br/display/fluig/Controle+de+Log)

- ## API de monitoramento de tempos de Execução

API com a listagem dos tempos médios em Milissegundos de execuções das APIs e ferramentas internas da Plataforma. 
Acessar a URL abaixo com um usuário Administrador:

[URL Flig]/api/public/wcm/chronos/meanTimes

![](/download/attachments/953006920/image-2024-6-16_23-35-54.png?version=1&modificationDate=1749646994907&api=v2)

# 6
Cuidados durante a construção de Processos

### Quando pequenos detalhes mudam tudo

# 6
Cuidados durante a construção de Processos

### Quando pequenos detalhes mudam tudo

# 7
Página Home

### Uma boa experiência na Plataforma inicia com um bom primeiro passo;
A página inicial deve ser leve, rápida e objetiva

- **Uma boa experiência na Plataforma inicia com um bom primeiro passo; A página inicial deve ser leve, rápida e objetiva**![](/download/attachments/953006920/homeGIF.gif?version=1&modificationDate=1749646994960&api=v2)**Todo usuário que acessa a plataforma passa pela página página Inicial.********Geralmente diversas vezes ao dia!**
- **Carregue recursos de forma assíncrona ou utilize Promises**Sempre que for possível, utilizar chamadas assíncronas para que a home não fique presa. O número de **threads para chamadas síncronas do Browser**é limitado, e se muitas chamadas síncronas forem realizadas em paralelo, isto ocasionará no congelamento da página.****Utilize chamadas assíncronas, ou Promises para realizar chamadas com menor impacto e realizar um carregamento de página mais fluído.
- **Imagens dimensionadas corretamente**Observe o tamanho dos seus Banners e widgets para que as imagens sejam geradas com o tamanho correto. Se seu Banner principal tem, por exemplo, 800 pixels de largura, não há necessidade de que a imagem tenha um tamanho maior do que isto, pois serão desperdiçados recursos computacionais do servidor, espaço no volume, largura de banda e processamento do Browser para redimensionar a imagem para o tamanho desejado.****
- **Otimize cada recurso utilizado**Assim como as imagens, é possível facilmente compactar recursos como JavaScript para que tenham o menor impacto possível no carregamento de páginas web.****Além disto, é importante avaliar se as chamadas de Datasets e recursos de outras fontes de dados estão otimizadas. As chamadas de Datasets do TOTVS Fluig possuem parâmetros como Fields e Constraints, para que sejam retornados somente os campos desejados,  e os registros já filtrados para que sejam trafegados somente os dados que se deseja utilizar em tela.**Consulte https://tdn.totvs.com.br/display/fluig/Acessando+Datasets e saiba mais.**
- **Abuse dos Datasets Sincronizados, evitando Integrações Síncronas em tempo de execução**Tanto na home quanto nas demais páginas da plataforma, quando for carregar dados de ERPs ou Plataformas externas, priorize a elaboração de Datasets Sincronizados, que podem realizar um cache local da informação para que as informações fiquem disponíveis em armazenamento do próprio TOTVS Fluig.A sincronização de Datasets tem como objetivo reduzir o número de acessos a serviços de dados fornecidos por produtos externos à plataforma TOTVS Fluig. É uma prática comum trazer dados de sistemas externos para complementar informações do formulário de um processo ou realizar validações em eventos com base nas informações retornadas por este dataset. Saiba mais em [https://tdn.totvs.com.br/pages/viewpage.action?pageId=212899013](https://tdn.totvs.com.br/pages/viewpage.action?pageId=212899013) 

# 8
Integração Assíncrona

### A Maioria das Integrações pode ocorrer enquanto o usuário se ocupa com outras tarefas

### Em um universo de plataformas cada vez mais integradas, é imprescindível entender quais integrações precisam ocorrer enquanto o usuário aguarda, e quais podem ser executadas enquanto o usuário realiza outra tarefa;

Integrações de negócio Geralmente podem ocorrer do lado do servidor, garantindo uma maior fluidez das atividades dos usuários em tela e liberando recursos computacionais;

Cada vez que um usuário aguarda uma integração em tela, também estão comprometidas as Threads do Browser e topologia de rede envolvida.

Destacamos alguns motivos para priorizar integrações assíncronas:

- Evita o bloqueio das operações do usuário![](/download/attachments/953006920/image-2024-7-3_14-47-5.png?version=1&modificationDate=1749646996487&api=v2)
- Múltiplas tentativas sem impacto direto para a operação
- Pode ser executada em horário de menor demanda, não competindo diretamente com os usuários.

Para evitar 

# 9
Datasets

### Boas práticas garantem que este grande aliado não se torne uma dor de cabeça

Na Implementação ou Consumo dos seus Datasets, considere:

- Trafegar somente o necessário - Observe o uso de Fields, SQLLimit e PKs nas chamadas
- Centralização para reaproveitamento - menos chamadas em tela
- Observar o tempo total de execução em sincronizações
- Cuidado com o agendamento e o intervalo de execução
- Captura e tratamento de erros (try / catch)
- Liberação de recursos de Integração (Stream, Connection, Statement, ResultSet)

# 10
Gestão do Banco de Dados

### Preocupações em tempo de Projeto, Ações de Rotina e manutenções básicas

Tarefas que podem ser realizadas pelo DBA de forma preventiva:

- Análise de eficiência dos Índices Padrão
- Manutenção de MetaListas - Criação de índices e otimização conforme uso das tabelas de formulário
- ‘Optimize tables’ em tabelas mais movimentadas
- Avaliação recorrente do comportamento do BD

# +
Bônus: Percepção de Lentidão

É importante saber diferenciar o que é lentidão do que são processos lentos;

Aproveite estas dicas para tirar do usuário a Percepção da Lentidão

Nem todo processo lento precisa prender o usuário

 ![](/download/attachments/953006920/dataset-compare-v3.gif?version=1&modificationDate=1749647084800&api=v2)


<!-- anchors: id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-AlgumasConfiguraçõesbásicascostumamficaresquecidas:, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-QuantidadedeConexõesdoFluigcomoBancodeDados(FluigDS,FluigDSROeCustoms), highlighter_945448, highlighter_178699, highlighter_471171, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-AdequaçãodasFilasAssíncronas, highlighter_62963, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-AjustedeMemória(XMX,MetaSpace), highlighter_234953, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-LimitedeArquivosdoLinuxeparametrizaçõesquedependemdoSistemaOperacional,comopermissõeseliberaçõesdeFirewall, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-CrescimentoHorizontalxVertical, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-DemandaUsoxQuantidadedeNós(capacidadedeprocessamento), id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-AvaliarasDemandasdeintegraçãoparaadequaraentregadedisponibilidade, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-LimpezadeNotificações,LimpezadeLixeiraeCompactaçãodeSolicitações, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-Avaliardocumentosnuncaacessados, highlighter_142470, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-Avaliardocumentoscomvalidadeexpirada, highlighter_389151, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-Expurgodatabelafdn_accesslog, highlighter_445235, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-SempreconsumirAPIsdocumentadas, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-UsaroCadastrodeServiçoscomoInterfacedeIntegração, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-TirarproveitodaModernizaçãoeEvoluçãoconstantesdainterfacedaPlataforma, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-LogdechamadasdeServiço-RequestxResponse, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-LogPrincipal-server.log, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-LogPorUsuário, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-APIdemonitoramentodetemposdeExecução, id-10dicasparaturbinarseuTOTVSFluigmelhorandodesempenhoeestabilidade-Emumuniversodeplataformascadavezmaisintegradas,éimprescindívelentenderquaisintegraçõesprecisamocorrerenquantoousuárioaguarda,equaispodemserexecutadasenquantoousuáriorealizaoutratarefa; -->
