---
title: Upload Size & Upload Type
sidebar_position: 2
---

# Upload Size & Upload Type — Improper Input Validation

**Upload Size & Upload Type** sind zwei 2-Sterne-Challenges aus dem OWASP Juice Shop im Bereich *Improper Input Validation*. Beide wurden mit einem einzigen manipulierten Request gleichzeitig gelöst.

## Worum geht es?

Die Anwendung beschränkt Datei-Uploads auf maximal 100 kB und erlaubt nur `.pdf`- oder `.zip`-Dateien. Beide Prüfungen finden jedoch nicht serverseitig beim tatsächlichen Verarbeiten des Requests statt — sie lassen sich daher durch gezielte Manipulation mit Burp Suite vollständig umgehen.

Die zugrundeliegende Schwachstelle ist fehlende **serverseitige Eingabevalidierung** gemäß [OWASP A03:2021](https://owasp.org/Top10/A03_2021-Injection/).

## Verwendete Tools

`Webbrowser` `Burp Suite`

## Vorgehensweise

Zuerst wurde eine kleine `.txt`-Datei als `.zip` umbenannt und hochgeladen — dabei wurde der Request mit Burp Suite abgefangen. Im abgefangenen Request wurden dann zwei Änderungen vorgenommen: der Dateiname wurde zurück auf `.txt` geändert (→ löst Upload Type) und der Dateiinhalt durch den einer Datei über 100 kB ersetzt (→ löst Upload Size). Mit einem einzigen Forward waren beide Challenges gleichzeitig abgeschlossen.

## Video

Eine vollständige Live-Demonstration — von der Vorbereitung der Testdateien bis zum erfolgreichen Bypass beider Validierungen mit einem einzigen manipulierten Request:

[▶ Improper Input Validation — Upload Size & Type · Full Walkthrough](https://go.screenpal.com/watch/cOevIRnTvHO)

## Was ich dabei gelernt habe

- Warum **clientseitige Validierung allein keine Sicherheitsmaßnahme ist** und immer serverseitig ergänzt werden muss
- Wie Burp Suite genutzt wird, um HTTP-Requests gezielt zu manipulieren
- Dass eine einfache Dateiumbenennung ausreicht, um Dateitypprüfungen zu umgehen, wenn der Server den MIME-Typ nicht selbst prüft
- Wie zwei unabhängige Schwachstellen in einem einzigen Angriff kombiniert werden können

## Vollständige Dokumentation

Die detaillierten Exploitation Steps, Payloads und Screenshots sind im GitHub-Repository dokumentiert:

{/* [GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/main/Improper_Input_Validation/UPLOAD_SIZE.md) */}
[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Improper_Input_Validation/UPLOAD_SIZE.md)