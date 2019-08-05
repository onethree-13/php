---
title: 'Shadowsocks server on Unbuntu 16.04'
date: 2018-02-09 20:49:22
updated: 2018-02-11 16:47:33
categories: tutorial
tags: [recovery only]
---

### Basic Usage

+ shell

```bash
# shadowsocks installation
$ apt-get update
$ apt-get install -y python-pip
$ pip install shadowsocks
$ ssserver -h # for help
#/usr/bin/ssserver for server
#/usr/bin/sslocal for local

#server command
$ ssserver -c /home/ubuntu/shadowsocks.json --workers 10 --pid-file /tmp/shadowsocks.pid --log-file /tmp/shadowsocks.log --user nobody -v -d start
```
<!-- more -->

+ shadowsocks.json

```json
# /home/ubuntu/shadowsocks.json
{
    "server":"212.64.20.90",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"ZZC",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

### Auto Start

+ shadowsocks.sh

```sh
#!/bin/bash
# /usr/local/bin/shadowsocks.sh

ssserver -c /home/ubuntu/shadowsocks.json --workers 10 --pid-file /tmp/shadowsocks.pid --log-file /tmp/shadowsocks.log --user nobody -v -d start
```

+ Shell

```bash
$ sudo nano /etc/rc.local
# Ubuntu 16.04 might not have this file, search for more tutorials
$ sudo chmod +x /etc/rc.local
```

+ rc.local

```sh
#!/bin/bash
# /etc/rc.local

sh /usr/local/bin/shadowsocks.sh
# ...

exit 0
```

### Reference

1. [使用shadowsocks轻松搭建翻墙环境教程](https://blog.phpgao.com/shadowsocks_on_linux.html)
2. [Shadowsocks](https://shadowsocks.org/en/download/servers.h)