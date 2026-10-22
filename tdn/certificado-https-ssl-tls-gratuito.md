---
title: "Certificado HTTPS (SSL/TLS) Gratuito"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269422853"
scraped_at: "2026-03-09T04:09:53.566Z"
depth: 2
anchors: 8
child_links: 82
---

# Certificado HTTPS (SSL/TLS) Gratuito

# Índice

# Objetivo

---

O objetivo deste artigo é apresentar uma forma de obter o certificado HTTPS gratuito. A **Let’s Encrypt** ([https://letsencrypt.org](https://letsencrypt.org)) é uma autoridade certificadora aberta, gratuita e automática. São membros da Linux Foundation e foram criados com o intuito de trazer mais segurança e privacidade à internet. Entre os principais apoiadores hoje destacam-se Cisco, Akamai, Google, Facebook, Mozilla, HP e outros destes porte.

O certificado é **válido por 60 dias**, porém a renovação pode e deve ser **automatizada**.

## Como Funciona

---

A Let's Encrypt utiliza um protocolo denominado ACME (*Automatic Certificate Management Environment*). Em resumo, se baseia num conjunto de pedidos ou desafios para o servidor *web* que contém o certificado. A validação do domínio é realizada com base nas respostas e garantida pelo uso de um par de chaves. Para tanto é necessário um cliente ACME no servidor que será consultado pela autoridade certificadora (AC). Para mais informações [clique aqui](https://github.com/ietf-wg-acme/acme/).

Após isto, para as solicitações de renovação e revogação dos certificados, basta o servidor enviar mensagens de gerenciamento de certificado e assiná-las com o par de chaves válido. Para obter um certificado, o *client* gera um PKCS e envia à Let’s Encrypt solicitando a emissão de um certificado para o(s) domínio(s), utilizando a chave pública informada.

## Como utilizar

---

A Let's Encrypt possui uma lista de dezenas de clientes e APIs para automatizar a geração, configuração e renovação dos certificados.

Abaixo iremos demonstrar um deles em ambiente Linux CentOS e utilizando o cliente Certbot, que é recomendado pela Let’s Encrypt. Para outros sistemas operacionais ou aplicações, consulte o site da [Certbot](https://certbot.eff.org/) ou o guia da [Let's Encrypt](https://letsencrypt.org/getting-started/).

Não é necessário nenhum cadastro prévio.

### Em ambiente Linux (CentOS ou derivados) + Apache

**Instalação Certbot:**

[?](#)

| `wget https:``//dl``.eff.org``/certbot-auto``chmod` `a+x certbot-auto``$ .``/certbot-auto` |
| --- |

**Usando em modo webroot:**

[?](#)

| `certbot certonly --webroot -w``/var/www/example/` `-d www.example.com -d example.com` |
| --- |

**Renovando o certificado:**

Adicionar o comando ao crontab para ser executado semanalmente.

[?](#)

| `certbot renew --pre-hook``"service httpd stop"` `--post-hook``"service httpd start"` |
| --- |

**Saiba Mais**
Em caso de dúvidas, mais informações podem ser encontradas em:

- **Let’s Encrypt: https://letsencrypt.org/**
- **CertBot** (Cliente recomendado): **https://certbot.eff.org/ **
- [Configuração HTTPS da plataforma](https://tdn.totvs.com/x/vdMgFQ)


<!-- anchors: CertificadoHTTPS(SSL/TLS)Gratuito-Índice, CertificadoHTTPS(SSL/TLS)Gratuito-Objetivo, CertificadoHTTPS(SSL/TLS)Gratuito-ComoFunciona, CertificadoHTTPS(SSL/TLS)Gratuito-Comoutilizar, CertificadoHTTPS(SSL/TLS)Gratuito-EmambienteLinux(CentOSouderivados)+Apache, highlighter_530682, highlighter_872021, highlighter_229857 -->
