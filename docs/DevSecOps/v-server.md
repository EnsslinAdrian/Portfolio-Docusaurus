---
title: V-Server Setup
sidebar_position: 1
---

# Secure V-Server Setup

A step-by-step guide to securely setting up a Linux VPS —
from the first SSH connection through hardened authentication to
Nginx configuration and GitHub integration. Ideal as a personal reference
for all future server setups.

## Features

- **SSH Key Authentication** — Permanently disable password login
- **User Management** — Create a new user with sudo privileges
- **Nginx** — Install web server and host a custom HTML page
- **Alias Shortcuts** — Connect via SSH with a short command
- **GitHub SSH Integration** — Clone repos directly from the server

## Tech Stack

`Linux` `SSH` `Nginx` `Bash` `GitHub`

---

## 1. Set Up SSH Connection

### Generate SSH Key
```bash
ssh-keygen -t ed25519
```

### Connect to VPS
```bash
ssh root@SERVER-IP
```

### Create New User
```bash
adduser username
usermod -aG sudo username
mkdir -p /home/username/.ssh
chmod 700 /home/username/.ssh
chown -R username:username /home/username/.ssh
```

### Copy SSH Key to Server

**Windows:**
```bash
type C:\Users\username\.ssh\id_ed25519.pub | ssh username@SERVER-IP "cat >> .ssh/authorized_keys"
```

**Linux/Mac:**
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@SERVER-IP
```

### Set File Permissions
```bash
sudo chown username:username /home/username/.ssh/authorized_keys
sudo chmod 600 /home/username/.ssh/authorized_keys
sudo chmod 700 /home/username/.ssh
```

### Disable Password Login
```bash
sudo nano /etc/ssh/sshd_config
```

`PasswordAuthentication yes` → `PasswordAuthentication no` (remove comment from line)
```bash
sudo systemctl restart ssh.service
```

:::warning
From this point on, only SSH key login is possible. Make sure the key works
before closing the session.
:::

---

## 2. Set Up Nginx

### Installation
```bash
sudo apt update
sudo apt install nginx -y
systemctl status nginx
```

### Find IP Address
```bash
ifconfig
```
`eth0 inet` shows the server IP.

### Host a Custom HTML Page
```bash
sudo mkdir /var/www/alternatives/
sudo touch /var/www/alternatives/alternate-index.html
sudo nano /etc/nginx/sites-enabled/alternatives
```

Nginx configuration:
```nginx
server {
    listen 8081;
    listen [::]:8081;

    root /var/www/alternatives;
    index alternate-index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
```bash
sudo service nginx restart
```

---

## 3. Create Alias Shortcuts
```bash
cd /home/username
sudo nano .bashrc
```

Define alias:
```bash
alias dal_connect='ssh -i ~/.ssh/id_ed25519 username@SERVER-IP'
```

Activate:
```bash
. ~/.bashrc
dal_connect   # Now connects directly
```

---

## 4. GitHub SSH Integration
```bash
cat /home/username/.ssh/id_ed25519.pub
```

Add the copied key on GitHub:
**Settings → SSH and GPG Keys → New SSH Key**

---

## What I Learned

- **SSH Hardening** — Why password login on servers is a security risk and how to disable it
- **Linux User Management** — Users, groups and file permissions on a real system
- **Nginx** — Configuring a web server and running multiple sites on different ports
- **Bash Aliases** — Making repetitive commands more productive with shortcuts

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/V-Server-Konfiguration)
