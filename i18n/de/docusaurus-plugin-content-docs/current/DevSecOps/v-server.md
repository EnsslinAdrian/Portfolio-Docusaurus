---
title: V-Server Setup
sidebar_position: 1
---

# Secure V-Server Setup

Eine Schritt-für-Schritt Anleitung zur sicheren Einrichtung eines Linux V-Servers —
von der ersten SSH-Verbindung über gehärtete Authentifizierung bis hin zur
Nginx-Konfiguration und GitHub-Integration. Ideal als persönliche Referenz
für alle weiteren Server-Setups.

## Features

- **SSH Key Authentifizierung** — Passwort-Login dauerhaft deaktivieren
- **User Management** — Neuen Benutzer mit sudo-Rechten anlegen
- **Nginx** — Webserver installieren und eigene HTML-Seite hosten
- **Alias Shortcuts** — SSH-Verbindung per Kurzbefehl aufrufen
- **GitHub SSH Integration** — Repo direkt vom Server klonen

## Tech Stack

`Linux` `SSH` `Nginx` `Bash` `GitHub`

---

## 1. SSH Verbindung einrichten

### SSH Key erstellen
```bash
ssh-keygen -t ed25519
```

### Mit V-Server verbinden
```bash
ssh root@SERVER-IP
```

### Neuen Benutzer anlegen
```bash
adduser username
usermod -aG sudo username
mkdir -p /home/username/.ssh
chmod 700 /home/username/.ssh
chown -R username:username /home/username/.ssh
```

### SSH Key auf den Server kopieren

**Windows:**
```bash
type C:\Users\username\.ssh\id_ed25519.pub | ssh username@SERVER-IP "cat >> .ssh/authorized_keys"
```

**Linux/Mac:**
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@SERVER-IP
```

### Dateiberechtigungen setzen
```bash
sudo chown username:username /home/username/.ssh/authorized_keys
sudo chmod 600 /home/username/.ssh/authorized_keys
sudo chmod 700 /home/username/.ssh
```

### Passwort-Login deaktivieren
```bash
sudo nano /etc/ssh/sshd_config
```

`PasswordAuthentication yes` → `PasswordAuthentication no` (Zeile auskommentieren entfernen)
```bash
sudo systemctl restart ssh.service
```

:::warning
Ab jetzt ist nur noch SSH-Key-Login möglich. Sicherstellen dass der Key funktioniert
bevor die Session geschlossen wird.
:::

---

## 2. Nginx einrichten

### Installation
```bash
sudo apt update
sudo apt install nginx -y
systemctl status nginx
```

### IP-Adresse herausfinden
```bash
ifconfig
```
`eth0 inet` zeigt die Server-IP.

### Eigene HTML-Seite hosten
```bash
sudo mkdir /var/www/alternatives/
sudo touch /var/www/alternatives/alternate-index.html
sudo nano /etc/nginx/sites-enabled/alternatives
```

Nginx Konfiguration:
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

## 3. Alias Shortcuts anlegen
```bash
cd /home/username
sudo nano .bashrc
```

Alias definieren:
```bash
alias dal_connect='ssh -i ~/.ssh/id_ed25519 username@SERVER-IP'
```

Aktivieren:
```bash
. ~/.bashrc
dal_connect   # Verbindet sich jetzt direkt
```

---

## 4. GitHub SSH Integration
```bash
cat /home/username/.ssh/id_ed25519.pub
```

Kopierten Key auf GitHub eintragen:
**Settings → SSH and GPG Keys → New SSH Key**

---

## Was ich dabei gelernt habe

- **SSH Hardening** — Warum Passwort-Login auf Servern ein Sicherheitsrisiko ist und wie man ihn abschaltet
- **Linux User Management** — Benutzer, Gruppen und Dateiberechtigungen auf einem echten System
- **Nginx** — Webserver konfigurieren und mehrere Sites auf verschiedenen Ports betreiben
- **Bash Aliase** — Repetitive Befehle durch Shortcuts produktiver machen

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/V-Server-Konfiguration)