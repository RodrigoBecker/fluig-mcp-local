---
title: "Solicitação e exemplos de dimensionamento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244429371"
scraped_at: "2026-03-09T04:53:57.733Z"
depth: 3
anchors: 9
child_links: 46
---

# Solicitação e exemplos de dimensionamento

Atenção

O dimensionamento deve ser solicitado pelo cliente aos Canais e parceiros Fluig.

Se necessário, a demanda será encaminhada ao time**Cloud Projetos Técnicos** através do [cloud.projetostecnicos@totvs.com.br](mailto:cloud.projetostecnicos@totvs.com.br) e/ou ao time**TOTVS Infra Services**através do [TIS.COMERCIAL@totvs.com.br](mailto:TIS.COMERCIAL@totvs.com.br).

Caso o dimensionamento (*sizing*) esteja diferente dos modelos listados na documentação [Modelos P, M e G do Fluig](https://tdn.totvs.com/x/lFQ4IQ) e/ou não seja elaborado pelos times mencionados acima, não será homologado pelo Fluig, estando fora dos requisitos e do escopo de atendimento do Suporte Fluig.

Preencha [a planilha de dimensionamento clicando aqui](/download/attachments/244429371/2015-11-25-Dimensionamento-Fluig.xlsx?version=1&modificationDate=1489690602000&api=v2), entre em contato com o seu ESN -**Executivo de Soluções de Negócio** - para buscar orientações de como proceder com essa situação e solicite uma proposta.

# Índice

# Objetivo

---

O objetivo deste guia é ilustrar os exemplos de sizing para utilização no Fluig.

# Solicitação de sizing

---

No processo de solicitação de sizing, há um formulário com uma série de questões que devem ser respondidas sobre a utilização do Fluig no cliente. As respostas devem ser aproximadas a experiência que o cliente terá sobre a utilização da plataforma.

Observação

Clientes Fluig devem contatar os parceiros e canais Fluig para solicitar o sizing para ambientes.

Na sequência o canal irá tomar as seguintes ações de contato:

- Para Fluig em execução na Nuvem TOTVS deve-se contatar o**time de Projetos Cloud** para que seu sizing seja homologado.
- Para Fluig  em execução em servidores próprios, deve-se contatar o**time de Infra Services TOTVS**, assim você terá todo o apoio através de reuniões de entendimento, visitas técnicas quando necessárias, modelos de sizing, dentre outros serviços. 

### Informações para elaborar dimensionamento

---

- **Quantidade de usuários conectados simultaneamente**Por padrão de mercado, a quantidade de usuários conectados ao mesmo tempo é um valor entre 10% e 30% do total de usuários cadastrados em base.Ou seja, se você tem 1000 usuários cadastrados você terá entre 100 e 300 usuários conectados simultaneamente.
- **Quantidade de documentos publicados na implantação**
- **Quantidade de documentos versionados mensalmente**
- **Tamanho médio dos arquivos publicados (em Kbytes)**Esta métrica está diretamente relacionada ao espaço em disco que será sugerido para o cliente. Sugerimos utilizar o repositório de documentos em um Storage com discos SAS de 15k em RAID-1**.**
- **Quantidade de processos workflow que será aberta mensalmente**Esta métrica está relacionada ao poder de processamento das máquinas onde estarão as instâncias de Fluig. Quanto mais processos abertos mais máquinas serão necessárias.

### Disponibilidade do ambiente

---

Acompanhe os cenários abaixo considerando a criticidade de disponibilidade do ambiente.

- [Alta disponibilidade](#)
- [Média disponibilidade](#)
- [Baixa disponibilidade](#)

 - Quando um ambiente é de alta disponibilidade, estamos falando que este é um ambiente crítico e não pode ficar fora do ar. Para que a disponibilidade seja garantida todas as máquinas envolvidas em um ambiente de alta disponibilidade devem possuir redundância de pelo menos 1 máquina. Estas trabalharam de maneira conjunta dividindo o processamento.Caso uma máquina cair a máquina que ainda está no ar assumirá todo o processamento. Além de redundância esses ambientes devem ter plano de backup diário. Projetos que demandam este tipo de ambiente são os de maior custo para o cliente.

![](/download/attachments/244429371/alta.png?version=1&modificationDate=1469559866000&api=v2)

  - Quando um ambiente é de média disponibilidade, estamos falando de um ambiente no qual impacta a operação do cliente. Ou seja, se o ambiente ficar fora do ar no período de expediente do cliente esta queda causará impacto em sua operação. Este ambiente é distribuído para minimizar os pontos de falha. Este é um modelo que apresenta custo médio para o cliente por não ter redundância entre as máquinas, comparado ao modelo de alta disponibilidade.

![](/download/attachments/244429371/Media%20-%20Ambiente%20Produ%C3%A7%C3%A3o.png?version=1&modificationDate=1469559867000&api=v2) 

 - Quando um ambiente é de baixa disponibilidade estamos falando de um ambiente no qual não impacta diretamente na operação do cliente, ou seja, se o ambiente ficar fora durante alguns minutos no horário de expediente do cliente esta queda não impactará em sua operação. Este modelo é o de menor custo para o cliente, entretanto é o mais vulnerável.

![](/download/attachments/244429371/Baixa%20-%20Ambiente%20Produ%C3%A7%C3%A3o.png?version=1&modificationDate=1469559866000&api=v2)


<!-- anchors: Solicitaçãoeexemplosdedimensionamento-Índice, Solicitaçãoeexemplosdedimensionamento-Objetivo, Solicitaçãoeexemplosdedimensionamento-Solicitaçãodesizing, Solicitaçãoeexemplosdedimensionamento-Informaçõesparaelaborardimensionamento, Solicitaçãoeexemplosdedimensionamento-Disponibilidadedoambiente, samples, samples-1, samples-2, samples-3 -->
