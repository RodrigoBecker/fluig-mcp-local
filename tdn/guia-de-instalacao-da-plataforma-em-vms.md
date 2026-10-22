---
title: "Guia de Instalação da plataforma em VMs"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73075567"
scraped_at: "2026-03-09T03:45:42.909Z"
depth: 2
anchors: 8
child_links: 52
---

# Guia de Instalação da plataforma em VMs

# Índice

# Instalação do ambiente virtualizado para a plataforma

---

A instalação ou criação do ambiente virtualizado deve obedecer as diretrizes descritas neste capítulo para responder aos requisitos de execução da plataforma.

Orientação de segurança

Por motivos de segurança recomendamos que após a instalação da plataforma em ambientes Linux, seja retirado o usuário como root seguindo o processo na documentação [Configurar ambiente Linux para não utilizar o usuário root](https://tdn.totvs.com/x/v2cWGw).

### Diretrizes para VMWare vSphere

---

| VMWare vSphere |
| --- |
| VMWare vSphere |
| A versão homologada do VMWare vSphere para a plataforma está disponível na Matriz de Portabilidade. |
| Sempre utilizar discos do tipo Thick Provisioning Eager Zeroed para a máquina virtual. |

![](http://4.bp.blogspot.com/-WbPQk3yIG1c/VXS-W8DrpDI/AAAAAAAAAVg/QPdgu-ZtPmU/s1600/vstg-image044.png)

Atenção

A configuração acima é muito importante, pois caso o disco seja configurado como **Thick Provisioning** **Lazy** **Zeroed** ou **Thin Provision** a plataforma apresentará lentidão e vários recursos não irão responder conforme desejado.

**Observação: Muitas vezes é necessário recriar a VM por completo.**

### Diretrizes para Microsoft Hyper-V

---

| Microsoft Hyper-V |
| --- |
| Microsoft Hyper-V |
| A versão homologada do Microsoft Hyper-V para a plataforma está disponível na Matriz de Portabilidade. |
| Configurar o antivírus para ignorar os processos e diretórios do Hyper-V (configurações e diretórios de armazenamento das máquinas virtuais). |
| Evitar armazenar arquivos do sistema operacional nas mesmas unidades utilizadas para armazenamento de configurações e máquinas virtuais do Hyper-V. |
| Evitar a utilização em conjunta de máquinas virtuais que podem e que não podem utilizar os componentes do Integration Service. |
| Preferir utilizar unidades de armazenamento separadas para cada máquina virtual. |
| Sempre utilizar sistemas operacionais homologados para o Hyper-V (Linux homologados e Windows Server homologados) e homologados na Matriz de Portabilidade da plataforma. |
| Sempre utilizar máquinas virtuais de 2ª geração. |
| Sempre mudar a localização padrão de armazenamento de configurações e VHD das máquinas virtuais. |
| Sempre instalar o Integration Components nos sistemas operacionais homologados para o Hyper-V. |
| Sempre utilizar VHDs de tamanho fixos para a máquina virtual. |

### Procedimento para instalação da plataforma

---

Existem dois tipos de pacotes de instalação, cada um está relacionado a um tipo de sistema operacional, como podemos verificar na tabela abaixo:

| Pacote de Instalação |  |
| --- | --- |
| Fluig-Win64.zip | Deve ser utilizado em Sistemas Operacionais Windows® 64 bits. |
| Fluig-Linux64.zip | Deve ser utilizado em Sistemas Operacionais Linux® 64 bits. |

Após verificar o pacote de instalação adequado para o servidor, é possível iniciar a instalação. Para isto é necessário descompactar o zip e executar o arquivo:

- Fluig-Installer-64.exe, no caso de sistema operacional Windows®.
- Fluig-Installer-64.sh no caso de sistema operacional Linux®.

Atenção

Para instalar em sistemas operacionais Linux®, usando usuário diferente do root, é necessário dar permissão de execução no arquivo FLUIG-Installer-64.sh, para iniciar a instalação.

- A relação dos sistemas operacionais suportados pelo produto pode ser encontrada na [Matriz de portabilidade](https://tdn.totvs.com/x/_ApbB).
- O processo de instalação do produto está descrito no [Guia de Instalação da plataforma](https://tdn.totvs.com/x/zAJbDw).

### Topologia da Arquitetura

---

A  topologia para a instalação padrão da plataforma em ambiente virtualizado é apresentada na figura abaixo.

![](/download/attachments/73075567/topologia-padrao-dev.png?version=1&modificationDate=1414701545000&api=v2)

Onde: 

- Servidor Fluig: é o servidor onde são instalados os componentes de negócio.
- STORAGE/ Repositório de Arquivos: é o local onde será armazenado o conteúdo.
- Servidor de Dados: é o dicionário de dados do produto.
- Servidor de E-mail: responsável por enviar os e-mails referentes as notificações da plataforma.
- Servidor de Indexação: responsável por indexar o conteúdo da plataforma.
- Servidor Identity: responsável pela gestão na plataforma. 

### Dimensionamentos para ambiente de produção

---

Os itens abaixo descrevem o dimensionamento mínimo para a instalação do servidor de aplicação da plataforma considerando o ambiente virtualizado em modo de produção:

- Recursos para a VM    - 4 vCPU   - 16 GB Memória RAM   - 2 HD SAS 15k - 80 GB - RAID 1 
- Configuração da VM   - Usar “Memory Reservation”   - Usar “[Large Memory Pages](http://www.vmware.com/files/pdf/large_pg_performance.pdf)” no sistema operacional *****   - Usar área exclusiva de disco físico ou storage   - Configurar o adaptador de rede indicado para o sistema operacional a ser usado na VM **
- Parametrização Java Virtual Machine  - Xms=2g  - Xmx=6g  - XX:PermSize=1g  - XX:MaxPermSize=1g  - XX:+UseLargePages
- Link sugerido 3,5 Mb

| Atenção |
| --- |
| Atenção |
| * A configuração de “Large Memory Pages” é realizada no sistema operacional e pode ser encontrada em: https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/large_pg_performance.pdf |
| ** A configuração do adaptador de rede indicado para o sistema operacional da VM pode ser encontrada em: http://kb.vmware.com/selfservice/microsites/ |
| Importante: O dimensionamento é um processo contínuo e está diretamente relacionado ao número de usuários e as exigências de disponibilidade do ambiente. |

### Suporte Técnico

---

Ao acionar o suporte técnico ou criar chamado para situações envolvendo a instalação do produto em ambiente virtualizado, tenha as seguintes informações:

1. A configuração do host para a VM;
2. A porcentagem de utilização da CPU;
3. O nome e versão do sistema operacional;
4. Os parâmetros de inicialização da JVM do servidor de aplicação. Esta informação está disponível no arquivo host.xml em [diretório_instalação]/appserver/domain/configuration. 
5. O tipo de armazenamento configurado para VM, o número de iops/disk e hits/rg.


<!-- anchors: GuiadeInstalaçãodaplataformaemVMs-Índice, GuiadeInstalaçãodaplataformaemVMs-Instalaçãodoambientevirtualizadoparaaplataforma, GuiadeInstalaçãodaplataformaemVMs-DiretrizesparaVMWarevSphere, GuiadeInstalaçãodaplataformaemVMs-DiretrizesparaMicrosoftHyper-V, GuiadeInstalaçãodaplataformaemVMs-Procedimentoparainstalaçãodaplataforma, GuiadeInstalaçãodaplataformaemVMs-TopologiadaArquitetura, GuiadeInstalaçãodaplataformaemVMs-Dimensionamentosparaambientedeprodução, GuiadeInstalaçãodaplataformaemVMs-SuporteTécnico -->
