---
title: "Guia de migração da plataforma do Windows para Linux"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1027816803"
scraped_at: "2026-03-09T03:46:16.790Z"
depth: 2
anchors: 44
child_links: 57
---

# Guia de migração da plataforma do Windows para Linux

Fique atento!

Esta página é válida a partir da **atualização 2.0** e **superiores**.

# Objetivo

---

O objetivo deste guia é apresentar os procedimentos recomentados para efetuar uma migração do TOTVS Fluig de um servidor Microsoft Windows para Linux.

# Preparação

---

- Defina previamente as configurações do ambiente para que sejam informados corretamente durante a fase de instalação e posteriores.EXEMPLOURL pública, servidor SMTP.

- RECOMENDADO: derrube todos os serviços do Fluig antes de começar a migração.

# Instalação

---

Atenção!

- Utilize, para o Linux, uma versão do Fluig igual a versão instalada no Microsoft Windows.

- Durante a execução do instalador, informe nas configurações do banco de dados o mesmo nome do banco sendo utilizado atualmente.

- Apenas execute a instalação, não inicie o Fluig.

Realize uma instalação em Linux seguindo os procedimentos de uma nova instalação conforme documentado em [Instalação da plataforma no Linux - Instalador](/pages/viewpage.action?pageId=257622802).

Em seguida, faça os ajustes necessários na instalação.

## Ajustes de ambiente

---

Realize os ajustes de ambientes necessários – configurações de memória do servidor, por exemplo – no arquivo **appserver/bin/standalone.conf**.

## Importação das configurações

---

Substitua o arquivo **appserver/standalone/configuration/standalone.xml** por uma cópia do mesmo arquivo encontrado na instalação do servidor Microsoft Windows.

# Ajustes no standalone.xml

---

Uma vez que o arquivo **appserver/standalone/configuration/standalone.xml** foi copiado a partir do servidor Windows, estará configurado com informações – nome do servidor, endereço IP do servidor, caminhos da instalação – apontando para o servidor Windows. Será necessário alterar para as configurações do novo servidor. Para isso, abra o arquivo **appserver/standalone/configuration/standalone.xml** em seu editor de texto simples favorito (vi, nano, etc) e faça as seguintes alterações:

Atenção!

- O Microsoft Windows comumente utiliza como separador de pastas o caracter **"\"**, enquanto que o Linux utiliza o caracter **"/"**. Portanto, é importante lembrar de, sempre que alterar partes de um caminho, substituir o **"\"** por **"/"** em todo o restante do caminho.

- Os exemplos utilizados a seguir usam como base as seguintes informações:Servidor antigo (Windows) → Endereço IP: **192.168.1.100**; hostname: **fluig-windows**; pasta de instalação: **C:\fluig**.
- Servidor novo (Linux) → Endereço IP: **192.168.2.50**; hostname: **fluig-linux**; pasta de instalação: **/opt/fluig**.

- [Endereço IP](#)
- [Hostname](#)
- [Caminhos](#)

 - Troque o endereço IP do servidor antigo (por exemplo: **192.168.1.100**) para o IP do servidor novo (por exemplo: **192.168.2.50**).

Exemplos de configurações comumente encontradas com o endereço IP (mas não limitado a apenas esses e nem sempre todos esses existem):

[?](#)

| `````````````````` |
| --- |

 - Troque o hostmane do servidor antigo (por exemplo: **fluig-windows**) para o hostname do servidor novo (por exemplo: **fluig-linux**).

Exemplos de configurações comumente encontradas com o hostname (mas não limitado a apenas esses e nem sempre todos esses existem):

[?](#)

| ```````````````` |
| --- |

 - Troque os caminhos do servidor antigo (por exemplo: **c:\fluig**)  para o caminho do servidor novo (por exemplo: **/opt/fluig**).

   Atenção! 

     Em servidores Microsoft Windows, o caminho pode aparecer na forma **C:\fluig**, **C:\\fluig** ou ainda **C:/fluig**. É importante procurar pelas três formas.

     - Não esqueça de trocar o "**\**" por "**/**".

Exemplos de configurações comumente encontradas com o caminho (mas não limitado a apenas esses e nem sempre todos esses existem):

[?](#)

| ```````````````````` |
| --- |

# Volume com os arquivos

---

Um dos principais motivadores de uma migração de um servidor Microsoft Windows para um servidor Linux, é a falta de confiabilidade do Microsoft Windows como servidor de arquivos. Portanto, é muito importante migrar o volume (arquivos) para um servidor Linux também.

Em ambientes onde haverá apenas um servidor do Fluig, o volume pode ser movido para o mesmo servidor Linux onde o Fluig será instalado, mantendo uma estrutura muito semelhante à instalação no servidor Windows.

Mas se o ambiente possuir (ou haver a intenção de possuir) mais de um servidor Fluig, é imprescindível que o volume esteja em algum servidor de arquivos que seja compartilhado (comumente via NFS).

Portanto:

- faça a cópia dos arquivos do volume atual (Windows) para o volume novo (Linux);

- monte um caminho (por exemplo: **/opt/volume**) apontando para o compartilhamento, em caso de uso de um servidor de arquivos dedicado.

## Aplicativos customizados

---

Se possuir aplicativos não padrão, sejam desenvolvidos por equipes internas, por terceiros ou mesmo baixado na *Store* oficial do Fluig, esses estarão na pasta própria.

Em uma instalação padrão, encontram-se na pasta "**appserver/apps**".

Esses aplicativos precisam ser disponibilizados manualmente para a nova instalação.

Em uma instalação padrão, com um único servidor Fluig, basta copiar o conteúdo da pasta *apps* do servidor atual (por exemplo: **C:\fluig\appserver\apps**) para a pasta *apps* do novo servidor (por exemplo: **/opt/fluig/appserver/apps**).

Já em uma instalação em que a pasta *apps* não esteja no local padrão, é necessário:

- copiar os aplicativos para uma localização acessível ao Fluig no novo servidor. Por exemplo, em um ambiente com um servidor de arquivos dedicado, poderia estar na pasta "**/opt/volume/apps**";

- ajustar a configuração que indica o caminho. Para isso, edite o arquivo **appserver/standalone/configuration.xml**, procure por algo como:
[?](#)
| `` |
| --- |

e substitua por algo como:
[?](#)
| `` |
| --- |

## Caminho customizado do volume

---

Se o volume está em um local diferente do local padrão da instalação (**FLUIG_DIR/repository**), é preciso configurar esse caminho.

Para isso, edite o arquivo **appserver/standalone/configuration.xml**, procure pela propriedade **java:global/wcm/globalDataDir**.

Será encontrado algo como:

[?](#)

| `` |
| --- |

Ajuste para algo como:

[?](#)

| `` |
| --- |

Nota:

É importante manter sufixo "**/wcmdir**".

# Banco de dados

---

O caminho da instalação também é salvo em alguns registros de algumas tabelas e, portanto, precisam ser ajustados também.

Para isso, conecte no banco de dados com algum cliente dele e execute alguns *updates*.

## Tabela FDN_TENANTDATA

---

Encontre os registros que precisam ser alterados na empresa "**0**" (dados globais), com um comando como este (a sintaxe está para o banco MySQL, é necessário ajustar de acordo com o banco):

[?](#)

| `select` `*``from` `fdn_tenantdata``where` `data_key``in` `(``'dirUpload'``,``'dirDefault'``,``'dirCustom'``)``and` `tenant_id = 0``order` `by` `tenantdata_id;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_14-51-18.png?version=1&modificationDate=1767030678390&api=v2)

Atualize os registros usando comandos semelhantes a esses:

[?](#)

| `update` `fdn_tenantdata``set` `data_value =``'/opt/volume/wcmdir/wcm/tenants/wcm'` `where` `tenant_id = 0``and` `data_key =``'dirDefault'``;``update` `fdn_tenantdata``set` `data_value =``'/opt/volume/wcmlocaldir/wcm/upload'` `where` `tenant_id = 0``and` `data_key =``'dirUpload'``;``update` `fdn_tenantdata``set` `data_value =``'/opt/volume/wcmlocaldir/wcm/custom'` `where` `tenant_id = 0``and` `data_key =``'dirCustom'``;` |
| --- |

Consulte os registros alterados para conferência:

[?](#)

| `select` `*``from` `fdn_tenantdata``where` `data_key``in` `(``'dirUpload'``,``'dirDefault'``,``'dirCustom'``)``and` `tenant_id = 0``order` `by` `tenantdata_id;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_14-58-57.png?version=1&modificationDate=1767031137147&api=v2)

A seguir, encontre os registros que precisam ser alterados na(s) empresa(s) criada(s), com um comando como esse:

[?](#)

| `select` `*``from` `fdn_tenantdata``where` `data_key``in` `(``'dirUpload'``,``'dirDefault'``,``'dirCustom'``,``'dirUploadConnect'``)``and` `tenant_id > 0``order` `by` `tenantdata_id;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_15-10-28.png?version=1&modificationDate=1767031828640&api=v2)

Atualize os registros usando comandos semelhantes a esses:

[?](#)

| `update` `fdn_tenantdata``set` `data_value =``'/opt/volume/1'` `where` `data_key =``'dirDefault'` `and` `tenant_id = 1234;``update` `fdn_tenantdata``set` `data_value =``'/opt/volume/1/upload'` `where` `data_key =``'dirUpload'` `and` `tenant_id = 1234;``update` `fdn_tenantdata``set` `data_value =``'/opt/volume/1/uploadConnect'` `where` `data_key =``'dirUploadConnect'` `and` `tenant_id = 1234;``update` `fdn_tenantdata``set` `data_value =``'/opt/volume/1/custom'` `where` `data_key =``'dirCustom'` `and` `tenant_id = 1234;` |
| --- |

Consulte os registros alterados para conferência:

[?](#)

| `select` `*``from` `fdn_tenantdata``where` `data_key``in` `(``'dirUpload'``,``'dirDefault'``,``'dirCustom'``)``and` `tenant_id = 0``order` `by` `tenantdata_id;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_15-19-19.png?version=1&modificationDate=1767032359787&api=v2)

Nota:

O exemplo acima pressupõe que há apenas uma empresa criada, com o TENANT_ID=1234. Se houver mais empresas, é preciso repetir os procedimentos para cada uma delas, tomando o cuidado de informar o caminho correto para o volume de cada uma.

Por segurança, é interessante verificar se existe (e consequentemente corrigir) mais algum registro apontando para o caminho antigo. Por exemplo, com um comando como esse:

[?](#)

| `select` `*``from` `fdn_tenantdata``where` `data_key``like` `'C:%'``;` |
| --- |

## Tabela FDN_PARAMGERAL

---

Encontre os registros que precisam ser alterados com um comando como este (a sintaxe está para o banco MySQL, é necessário ajustar de acordo com o banco).

### Analytics

---

Encontre e corrija o caminho onde são salvos os dados do Analytics:

[?](#)

| `select` `*``from` `fdn_paramgeral``where` `data_key =``'analytics.resources.folder'``;` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-35-51.png?version=1&modificationDate=1767033352017&api=v2)

[?](#)

| `update` `fdn_paramgeral``set` `data_value =``'/opt/volume/analytics/resources'` `where` `data_key =``'analytics.resources.folder'``;` `select` `*``from` `fdn_paramgeral``where` `data_key =``'analytics.resources.folder'``;` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-37-58.png?version=1&modificationDate=1767033478927&api=v2)

### Solr

---

Encontre e corrija o caminho da instalação do Solr:

[?](#)

| `select` `*``from` `fdn_paramgeral``where` `data_key =``'totvs/solrHome'``;` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-42-9.png?version=1&modificationDate=1767033729890&api=v2)

[?](#)

| `update` `fdn_paramgeral``set` `data_value =``'/opt/fluig/solr'` `where` `data_key =``'totvs/solrHome'``;` `select` `*``from` `fdn_paramgeral``where` `data_key =``'totvs/solrHome'``;` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-43-53.png?version=1&modificationDate=1767033833750&api=v2)

### Outras propriedades

---

Encontre e corrija o caminho em outras propriedades:

[?](#)

| `select` `*``from` `fdn_paramgeral``where` `data_key``in` `(``'fluig/themeFormDir'``,``'webdesk/OOoDir'``,``'wcm/icons'``,``'fluig/thumbnailDir'``);` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-46-47.png?version=1&modificationDate=1767034007600&api=v2)

[?](#)

| `update` `fdn_paramgeral``set` `data_value =``'/opt/fluig/temaFormulario'` `where` `data_key =``'fluig/themeFormDir'``;``update` `fdn_paramgeral``set` `data_value =``'/opt/fluig/OpenOffice'` `where` `data_key =``'webdesk/OOoDir'``;``update` `fdn_paramgeral``set` `data_value =``'/opt/fluig/icon'` `where` `data_key =``'wcm/icons'``;``update` `fdn_paramgeral``set` `data_value =``'/opt/fluig/thumbnail'` `where` `data_key =``'fluig/thumbnailDir'``;` `select` `*``from` `fdn_paramgeral``where` `data_key``in` `(``'fluig/themeFormDir'``,``'webdesk/OOoDir'``,``'wcm/icons'``,``'fluig/thumbnailDir'``);` |
| --- |

![](/download/attachments/1027816803/image-2025-12-29_15-50-18.png?version=1&modificationDate=1767034218667&api=v2)

Por segurança, é interessante verificar se existe (e consequentemente corrigir) mais algum registro apontando para o caminho antigo. Por exemplo, com um comando como esse:

[?](#)

| `select` `*``from` `fdn_paramgeral``where` `data_key``like` `'C:%'``;` |
| --- |

## Tabela FDN_VOLUMESITE

---

Encontre os registros que precisam ser alterados com um comando como este (a sintaxe está para o banco MySQL, é necessário ajustar de acordo com o banco):

[?](#)

| `select` `*``from` `fdn_volumesite;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_9-43-25.png?version=1&modificationDate=1767012205327&api=v2)

Importante observar a coluna **VOLUMESITE_ID**, pois ela contém a chave dos registros que precisam ser alterados.

Atualize os registros usando comandos semelhantes a esses:

[?](#)

| `update` `fdn_volumesite``set` `storage =``'/opt/volume/1'` `where` `volumesite_id = 1;` |
| --- |

Consulte os registros alterados para conferência:

[?](#)

| `select` `*``from` `fdn_volumesite;` |
| --- |

Retornará algo semelhante a isso:

![](/download/attachments/1027816803/image-2025-12-29_15-57-52.png?version=1&modificationDate=1767034672343&api=v2)

Importante!

As tabelas tratadas aqui são as tabelas padrão e registros padrão. Se possuir tabelas e/ou registros customizados que apontam para o volume, será necessário ajustar manualmente.


<!-- anchors: GuiademigraçãodaplataformadoWindowsparaLinux-Objetivo, GuiademigraçãodaplataformadoWindowsparaLinux-Preparação, GuiademigraçãodaplataformadoWindowsparaLinux-Instalação, GuiademigraçãodaplataformadoWindowsparaLinux-Ajustesdeambiente, GuiademigraçãodaplataformadoWindowsparaLinux-Importaçãodasconfigurações, GuiademigraçãodaplataformadoWindowsparaLinux-Ajustesnostandalone.xml, standalone, standalone-ip-address, highlighter_830350, standalone-hostname, highlighter_431847, standalone-path, highlighter_985391, GuiademigraçãodaplataformadoWindowsparaLinux-Volumecomosarquivos, GuiademigraçãodaplataformadoWindowsparaLinux-Aplicativoscustomizados, highlighter_194807, highlighter_649618, GuiademigraçãodaplataformadoWindowsparaLinux-Caminhocustomizadodovolume, highlighter_701532, highlighter_278014, GuiademigraçãodaplataformadoWindowsparaLinux-Bancodedados, GuiademigraçãodaplataformadoWindowsparaLinux-TabelaFDN_TENANTDATA, highlighter_852614, highlighter_835282, highlighter_451907, highlighter_244067, highlighter_108119, highlighter_645080, highlighter_759637, GuiademigraçãodaplataformadoWindowsparaLinux-TabelaFDN_PARAMGERAL, GuiademigraçãodaplataformadoWindowsparaLinux-Analytics, highlighter_992947, highlighter_409798, GuiademigraçãodaplataformadoWindowsparaLinux-Solr, highlighter_492728, highlighter_444340, GuiademigraçãodaplataformadoWindowsparaLinux-Outraspropriedades, highlighter_394666, highlighter_187895, highlighter_710101, GuiademigraçãodaplataformadoWindowsparaLinux-TabelaFDN_VOLUMESITE, highlighter_307667, highlighter_630664, highlighter_17571 -->
