---
title: 'Nginx on Ubuntu 16.04'
date: 2018-02-09 22:55:47
updated: 2018-02-11 16:46:38
categories: tutorial
tags: [recovery only]
---

### Basic Usage

**Installation: **`$ apt-get install nginx`

**Start: **`$ nginx` 
**Restart: **`$ nginx -s reload`

<!-- more -->

### Domain Name Deployment

**Configuration file location: **`$ nginx -t`

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

**Configuration file syntax: ** 

```conf
# /etc/nginx/sites-enabled/example.com.conf
server {
	listen 80;
	listen [::]:80;

	server_name example.com;

	root /var/www/example.com;
	index index.html;

	location / {
		try_files $uri $uri/ =404;
	}
```

### HTTPS Configuration

```bash
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install python-certbot-nginx 
$ sudo certbot --authenticator standalone --installer nginx --pre-hook "nginx -s stop" --post-hook "nginx"
```

### Automating renewal

The Certbot packages on your system come with a cron job that will renew your certificates automatically before they expire. Since Let's Encrypt certificates last for 90 days, it's highly advisable to take advantage of this feature. You can test automatic renewal for your certificates by running this command:

```
$ sudo certbot renew --dry-run
```

### Reference

1. [ubuntu16.04下nginx的基础配置教程](https://segmentfault.com/a/1190000009514737)
2. [CertBot](https://certbot.eff.org/#ubuntuxenial-nginx)