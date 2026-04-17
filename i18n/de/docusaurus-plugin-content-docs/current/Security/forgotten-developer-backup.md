---
title: Forgotten Developer Backup
sidebar_position: 4
---

# Forgotten Developer Backup — Sensitive Data Exposure

**Forgotten Developer Backup** ist eine 4-Sterne-Challenge aus dem OWASP Juice Shop im Bereich *Sensitive Data Exposure*. Ziel war es, eine vergessene Backup-Datei eines Entwicklers herunterzuladen, auf die der Server den Zugriff eigentlich sperrt.

## Worum geht es?

Die Anwendung hostet ein öffentlich erreichbares `/ftp`-Verzeichnis, in dem neben regulären Dateien auch eine vergessene Backup-Kopie (`package-lock.json.bak`) liegt. Der Server beschränkt den Zugriff durch eine Dateitypprüfung — nur `.md` und `.pdf` sind erlaubt.

Diese Prüfung ist jedoch anfällig für **Null-Byte-Injection**: Durch doppeltes URL-Encoding eines Null-Bytes (`%2500`) glaubt der Server, die Anfrage ende auf `.md`, bricht die interne Verarbeitung des Dateinamens aber am Null-Byte ab und liefert die tatsächliche `.bak`-Datei aus.

Die Schwachstelle fällt unter [OWASP A02:2021 – Cryptographic Failures / Sensitive Data Exposure](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/).

## Verwendete Tools

`Webbrowser`

## Vorgehensweise

Beim Durchsuchen der Anwendung führte ein Link auf der „Über uns"-Seite zur URL `http://127.0.0.1:3000/ftp/legal.md` — damit war klar, dass ein `/ftp`-Verzeichnis existiert. Der direkte Aufruf zeigte alle dort liegenden Dateien. Die Datei `package-lock.json.bak` fiel sofort auf. Ein direkter Zugriff wurde mit 403 blockiert. Nach zwei fehlgeschlagenen Versuchen (`.md` anhängen → 404, rohes `%00` → 400 Bad Request) führte das doppelte URL-Encoding des Null-Bytes (`%2500`) zum Ziel — der Download war erfolgreich.

## Video

Eine vollständige Live-Demonstration — von der Entdeckung des FTP-Verzeichnisses bis zum erfolgreichen Download der gesperrten Backup-Datei via Null-Byte-Injection:

[▶ Sensitive Data Exposure — Forgotten Developer Backup · Full Walkthrough](https://somup.com/cOewjvVczzo)

## Was ich dabei gelernt habe

- Wie **Null-Byte-Injection** funktioniert und warum doppeltes URL-Encoding (`%2500`) serverseitige Dateitypprüfungen aushebeln kann
- Dass vergessene Backup-Dateien im Webroot eine reale Gefahr darstellen — sie sind schwer zu entdecken, aber leicht auszunutzen
- Warum Dateinamen und URLs vor jeder Validierung vollständig dekodiert und normalisiert werden müssen
- Dass aktiviertes Verzeichnis-Listing dem Angreifer die Arbeit massiv erleichtert

## Vollständige Dokumentation

Die detaillierten Exploitation Steps, Payloads und Screenshots sind im GitHub-Repository dokumentiert:

<!-- [GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/main/Sensitive_Data_Exposure/FORGOTTEN_DEVELOPER_BACKUP.md) -->
[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Sensitive_Data_Exposure/FORGOTTEN_DEVELOPER_BACKUP.md)