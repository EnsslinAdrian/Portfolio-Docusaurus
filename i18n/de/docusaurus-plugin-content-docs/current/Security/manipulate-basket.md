---
title: Manipulate Basket
sidebar_position: 1
---

# Manipulate Basket — Broken Access Control

**Manipulate Basket** ist eine 3-Sterne-Challenge aus dem OWASP Juice Shop im Bereich *Broken Access Control*. Ziel war es, ein Produkt in den Warenkorb eines anderen Benutzers zu legen — ohne dessen Zugangsdaten zu kennen.

## Worum geht es?

Die Anwendung schützt Warenkörbe über eine serverseitige Prüfung der `BasketId`. Diese Prüfung hat jedoch eine Schwachstelle: Werden zwei `BasketId`-Parameter im Request-Body übergeben, prüft der Server den ersten (eigene ID → Zugriff erlaubt), verwendet für die eigentliche Datenbankoperation aber den zweiten — die ID eines fremden Warenkorbs.

Diese Technik nennt sich **HTTP Parameter Pollution** und zählt zu den klassischen Broken Access Control-Schwachstellen gemäß [OWASP A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/).

## Verwendete Tools

`Webbrowser` `Burp Suite`

## Vorgehensweise

Der Angriff lief in drei Schritten ab: Zuerst wurde ein eigener Warenkorb-Request mit Burp Suite abgefangen und analysiert. Dann wurde versucht, die `BasketId` direkt zu ersetzen — was der Server korrekt blockierte. Im letzten Schritt wurde der Parameter doppelt übergeben, was den Sicherheitsmechanismus ausgetrickst und die Challenge gelöst hat.

## Video

Eine vollständige Live-Demonstration — vom Abfangen des Requests bis zum erfolgreichen Hinzufügen eines Produkts in einen fremden Warenkorb:

[▶ Broken Access Control — Manipulate Basket · Full Walkthrough](https://somup.com/cOfVQwVcBw5)

## Was ich dabei gelernt habe

- Wie **HTTP Parameter Pollution** funktioniert und warum sie gefährlich ist
- Dass Zugriffskontrolle nicht nur beim Lesen, sondern auch beim Schreiben serverseitig erzwungen werden muss
- Warum der Server die `BasketId` niemals vom Client entgegennehmen sollte — sondern direkt aus der authentifizierten Session ableiten sollte
- Den Unterschied zwischen **BOLA** (Broken Object Level Authorization) und klassischen Rechteproblemen

## Vollständige Dokumentation

Die detaillierten Exploitation Steps, Payloads und Screenshots sind im GitHub-Repository dokumentiert:

{/* [GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/main/Broken_Access_Control/MANIPULATE_BASKET.md) */}
[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Broken_Access_Control/MANIPULATE_BASKET.md)