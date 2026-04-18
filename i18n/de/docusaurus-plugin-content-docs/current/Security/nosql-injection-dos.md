---
title: NoSQL DoS
sidebar_position: 3
---

# NoSQL DoS — Injection

**NoSQL DoS** ist eine 4-Sterne-Challenge aus dem OWASP Juice Shop im Bereich *Injection*. Ziel war es, den Server durch eine injizierte NoSQL-Payload gezielt zum Einfrieren zu bringen — ein Denial-of-Service durch fehlende Eingabevalidierung.

## Worum geht es?

Die Anwendung übergibt Benutzereingaben ungefiltert an eine MongoDB-Datenbank. MongoDB unterstützt JavaScript-Ausdrücke in bestimmten Query-Operatoren — darunter auch `sleep()`. Wird diese Funktion über eine manipulierte URL injiziert und nicht bereinigt, führt die Datenbank sie direkt aus und blockiert den Server für alle Nutzer.

Die Schwachstelle ist klassische **NoSQL-Injection** gemäß [OWASP A03:2021](https://owasp.org/Top10/A03_2021-Injection/).

## Verwendete Tools

`Webbrowser` `Burp Suite`

## Vorgehensweise

Als Einstiegspunkt wurden Produktbewertungen identifiziert, da dort Benutzereingaben direkt an die Datenbank weitergegeben werden. Erste Versuche, den Payload im JSON-Body zu platzieren, schlugen fehl. Erst die direkte Injektion in die URL — die Produkt-ID im Pfad wurde durch `sleep(20000)` ersetzt — ließ den Server für 20 Sekunden einfrieren. Der Server war danach nicht mehr erreichbar, die Challenge war gelöst.

## Video

Eine vollständige Live-Demonstration — von der Identifikation der Angriffsfläche bis zum erfolgreichen DoS über die manipulierte URL:

[▶ NoSQL Injection — DoS (Sleep) · Full Walkthrough](https://somup.com/cOfV6fVcBag)

## Was ich dabei gelernt habe

- Wie **NoSQL-Injection** funktioniert und warum MongoDB-JavaScript-Ausdrücke eine reale Angriffsfläche darstellen
- Warum es wichtig ist, Eingaben nicht nur im Request-Body, sondern auch in URL-Parametern und Pfadsegmenten zu validieren
- Den Unterschied zwischen einem fehlgeschlagenen Body-Injection-Versuch und einem erfolgreichen URL-basierten Angriff
- Wie ein einziger ungefiltert verarbeiteter Parameter einen kompletten Dienst für alle Nutzer lahmlegen kann

## Vollständige Dokumentation

Die detaillierten Exploitation Steps, Payloads und Screenshots sind im GitHub-Repository dokumentiert:

{/* [GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/main/Injection/NOSQL_DOS.md) */}
[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Injection/NOSQL_DOS.md)