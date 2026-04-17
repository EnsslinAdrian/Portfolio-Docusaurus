---
title: Forgotten Developer Backup
sidebar_position: 4
---

# Forgotten Developer Backup — Sensitive Data Exposure

**Forgotten Developer Backup** is a 4-star challenge from the OWASP Juice Shop in the *Sensitive Data Exposure* category. The goal was to download a forgotten developer backup file that the server is supposed to block access to.

## What is it about?

The application hosts a publicly accessible `/ftp` directory containing not only regular files but also a forgotten backup copy (`package-lock.json.bak`). The server restricts access through a file type check — only `.md` and `.pdf` are allowed.

However, this check is vulnerable to **Null Byte Injection**: by double URL-encoding a null byte (`%2500`), the server believes the request ends with `.md`, but internally truncates the filename at the null byte and serves the actual `.bak` file.

The vulnerability falls under [OWASP A02:2021 – Cryptographic Failures / Sensitive Data Exposure](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/).

## Tools Used

`Web Browser`

## Approach

While browsing the application, a link on the "About Us" page led to the URL `http://127.0.0.1:3000/ftp/legal.md` — revealing that an `/ftp` directory existed. Accessing it directly listed all files stored there. The file `package-lock.json.bak` immediately stood out. A direct access attempt was blocked with a 403. After two failed attempts (appending `.md` → 404, raw `%00` → 400 Bad Request), double URL-encoding the null byte (`%2500`) worked — the download was successful.

## Video

A complete live demonstration — from discovering the FTP directory to successfully downloading the blocked backup file via Null Byte Injection:

[▶ Sensitive Data Exposure — Forgotten Developer Backup · Full Walkthrough](https://somup.com/cOewjvVczzo)

## What I Learned

- How **Null Byte Injection** works and why double URL-encoding (`%2500`) can bypass server-side file type checks
- That forgotten backup files in the webroot pose a real threat — they are hard to discover but easy to exploit
- Why filenames and URLs must be fully decoded and normalized before any validation
- That enabled directory listing significantly simplifies an attacker's work

## Full Documentation

The detailed exploitation steps, payloads, and screenshots are documented in the GitHub repository:

[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Sensitive_Data_Exposure/FORGOTTEN_DEVELOPER_BACKUP.md)