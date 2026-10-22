---
title: "Configurar ambiente Linux para não utilizar o usuário root"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=454453183"
scraped_at: "2026-03-09T04:02:20.058Z"
depth: 2
anchors: 37
child_links: 85
---

# Configurar ambiente Linux para não utilizar o usuário root

# Objetivo

---

Abaixo é apresentado um guia sobre como alterar as permissões e scripts para executar a plataforma e os serviços com um **usuário fluig**.

Nota:

Por conta da instalação dos serviços, o **processo de instalação** do TOTVS Fluig **deve ser** feito utilizando o **usuário root** e deve ser feito um **primeiro start**também utilizando o **usuário root**.

Nota:

Estas alterações serão desfeitas após o processo de atualização.

# Instalação/atualização da plataforma

---

Proceda a instalação ou atualização conforme o processo padrão que exige o usuário **root**. Para conferir os passos necessários, acesse [Instalação da plataforma no Linux - Instalador](/pages/viewpage.action?pageId=257622802).

## Usuário

---

Siga o procedimento abaixo para criar o usuário fluig. Utilize o comando abaixo:

[?](#)

| `$ sudo useradd --system --shell /bin/false fluig` |
| --- |

Esse é um usuário de sistema, portanto não possuí senha ou interpretador de comando, logo não é possível realizar o login através dele. Porém se precisar realizar alguma atividade com o login fluig utilize o comando **sudo** no formato abaixo:

[?](#)

| `$ sudo -u fluig ` |
| --- |

## Limites do usuário

---

Como o usuário criado não é mais o administrador, são definidos automaticamente alguns limites de recursos, que precisam ser expandidos, para tal edite o arquivo **/etc/security/limits.conf** e insira as linhas abaixo:

[?](#)

| `fluig            hard    nofile          500000``fluig            soft    nofile          500000` |
| --- |

Lembrando que esse é um valor sugerido, em alguns casos o valor precisa ser aumentado, pois uma mensagem no *log* **"too many open files"** irá indicar que o valor limite de arquivos aberto não é suficiente.

## Scripts

---

Para a utilização do usuário adequado é necessário modificar os scripts de inicialização:

### Inicialização da plataforma

- Altere o arquivo **[diretório_instalação]/appserver/bin/service/wildfly.conf**, substitua o valor da variável **JBOSS_USER** por **fluig**, e.g:

[?](#)

| `JBOSS_USER=fluig` |
| --- |

Somente para a atualização Voyager (2.0) ou superiores:

- Se você utiliza a atualização**Voyager (2.0)**ou **superior** e o seu ambiente utiliza **systemd**, faça também o passo abaixo:Altere o arquivo **/etc/systemd/system/fluig.service** (ou dependendo **/etc/init.d/fluig**), substituindo o valor das variáveis **User** com valor **fluig**, e.g.:
[?](#)
| `User=fluig` |
| --- |
- Caso for instaldo o serviço fluig na porta abaixo de 1024 e sem proxy reverso, por exemplo na porta 80, precisa adicionar a variável **AmbientCapabilities**com o valor**CAP_NET_BIND_SERVICE** abaixo da variável **User:**
[?](#)
| `User=fluig``AmbientCapabilities=CAP_NET_BIND_SERVICE` |
| --- |
- Em seguida, execute este comando no terminal:
[?](#)
| `sudo systemctl daemon-reload` |
| --- |

### Inicialização do serviço de indexação

- Altere o arquivo **/etc/init.d/fluig_Indexer**, substitua o valor da variável RUNAS para **fluig**, e.g:

[?](#)

| `RUNAS="fluig"` |
| --- |

- No final do arquivo, substitua o bloco abaixo:

[?](#)

| `if [ -n "$RUNAS" ]; then````su -c "SOLR_INCLUDE=\"$SOLR_ENV\" \"$SOLR_INSTALL_DIR/bin/solr\" $SOLR_CMD" - "$RUNAS"``else````SOLR_INCLUDE="$SOLR_ENV" "$SOLR_INSTALL_DIR/bin/solr" $SOLR_CMD``fi` |
| --- |

- pela linha a seguir:

[?](#)

| `sudo -u "$RUNAS" SOLR_INCLUDE="$SOLR_ENV" "$SOLR_INSTALL_DIR/bin/solr" $SOLR_CMD` |
| --- |

- Altere o arquivo **[diretório_instalação]/solr/bin/solr**, substituindo a linha abaixo:

[?](#)

| `running=$(lsof -t -PniTCP:$SOLR_PORT -sTCP:LISTEN || :)``if [ -z "${running:-}" ]; then` |
| --- |

- pela linha a seguir:

[?](#)

| `running=$(get_info | grep "\"solr_home\":\"$SOLR_HOME\"" > /dev/null)``if [ "${running:-}" ]; then` |
| --- |

### Inicialização do serviço de Notificação em tempo Real

- Altere o arquivo **/etc/systemd/system/fluig_RealTime.service** (ou dependendo **/etc/init.d/fluig_RealTime**):

- [A partir da Voyager (2.0)](#)
- [Versões anteriores](#)

 - Substitua o valor da variável **User** por **fluig**, e.g.:

    [?](#)
| `User=fluig` |
| --- |

 - Caso for instalado o serviço fluig_RealTime na porta abaixo de 1024 e sem proxy reverso, por exemplo na porta 77, precisa adicionar a variável **AmbientCapabilities**com o valor**CAP_NET_BIND_SERVICE** abaixo da variável **User:**

    [?](#)
| `User=fluig``AmbientCapabilities=CAP_NET_BIND_SERVICE` |
| --- |

 - Em seguida, execute este comando no terminal:

    [?](#)
| `sudo systemctl daemon-reload` |
| --- |

 - Substitua a linha:

[?](#)

| `CNT=`ps -p $PID -o comm= | wc -l`` |
| --- |

 - pela linha abaixo:

[?](#)

| `CNT=`sudo -u fluig ps -p $PID -o comm= | wc -l`` |
| --- |

 - e substitua a linha:

[?](#)

| `nohup $NODE_HOME/bin/node /fluig/dev/node/bin/fluig.rt >> $LOG 2>&1 &` |
| --- |

 - pela linha abaixo:

[?](#)

| `sudo -u fluig nohup $NODE_HOME/bin/node /fluig/dev/node/bin/fluig.rt >> $LOG 2>&1 &` |
| --- |

# Permissões

---

Para que os serviços consigam acessar os arquivos é necessário que o usuário fluig tenha acesso nos seguintes locais:

- Instalação da plataforma (ex: **/opt/fluig/***)Mude o dono de forma recursiva (-R) para o usuário **fluig**
[?](#)
| `sudo chown -R fluig:fluig /opt/fluig``sudo chmod -R 755 /opt/fluig` |
| --- |

- Volume de dados (ex: **/opt/volume/***)Mude o dono de forma recursiva (-R) para o usuário **fluig**
[?](#)
| `sudo chown -R fluig:fluig /opt/fluig``sudo chmod -R 755 /opt/fluig` |
| --- |

# Executando serviços em portas protegidas

---

Alguns sistemas operacionais Linux impedem que um usuário sem permissões administrativas utilize portas abaixo de 1024, isso impede por exemplo que o **fluig** aceite conexões na porta 80 e 443.

Isso pode ser mitigado de 2 formas:

- Usar uma ferramenta para realizar a tarefa de redirecionar as requisições para o fluig, como um **proxy reverso** **(recomendado)**.
- Utilizar ferramentas de acordo com a distribuição, como por exemplo: **ufw** ou **firewall-cmd**ou**iptables**.**Ubuntu Server 16.04 a 24.04**Execute os comandos abaixo para liberar a porta 80 (fluig) e 7777 (fluig_RealTime):
[?](#)
| `sudo ufw allow 80/tcp``sudo ufw allow 7777/tcp` |
| --- |

**Oracle Linux 7.x a 8.7 e 9.5 / CentOS 7.0 a 7.5 / Red Hat Enterprise Linux 9.5**
- Execute os comandos abaixo para liberar a porta 80 (fluig) e 7777 (fluig_RealTime):
[?](#)
| `sudo firewall-cmd --permanent --add-port=80/tcp``sudo firewall-cmd --permanent --add-port=7777/tcp``sudo firewall-cmd --reload` `# Caso o serviço do firewalld esteja parado, execute:``sudo systemctl enable firewalld``sudo systemctl start firewalld` |
| --- |

**Oracle Linux 6.4 a 8.7 / CentOS 6.4 a 6.10 / Red Hat Enterprise Linux 6.4 a 8.7**

- Execute os comandos abaixo para liberar a porta 80 (fluig) e 7777 (fluig_RealTime):
[?](#)
| `sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT``sudo iptables -I INPUT -p tcp --dport 7777 -j ACCEPT``sudo service iptables save` |
| --- |


<!-- anchors: ConfigurarambienteLinuxparanãoutilizarousuárioroot-Objetivo, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Instalação/atualizaçãodaplataforma, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Usuário, highlighter_772499, highlighter_147180, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Limitesdousuário, highlighter_350649, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Scripts, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Inicializaçãodaplataforma, highlighter_171393, highlighter_320304, highlighter_19172, highlighter_265464, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Inicializaçãodoserviçodeindexação, highlighter_322211, highlighter_759662, highlighter_514473, highlighter_733132, highlighter_103228, ConfigurarambienteLinuxparanãoutilizarousuárioroot-InicializaçãodoserviçodeNotificaçãoemtempoReal, samples3, samples3-1, highlighter_368737, highlighter_746769, highlighter_429169, samples3-2, highlighter_644066, highlighter_691916, highlighter_973387, highlighter_154035, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Permissões, highlighter_408854, highlighter_108810, ConfigurarambienteLinuxparanãoutilizarousuárioroot-Executandoserviçosemportasprotegidas, highlighter_377134, highlighter_738826, highlighter_793959 -->
