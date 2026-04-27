---
title: NoSQL DoS
sidebar_position: 3
---

# NoSQL DoS — Injection

**NoSQL DoS** is a 4-star challenge from the OWASP Juice Shop in the *Injection* category. The goal was to deliberately freeze the server through an injected NoSQL payload — a Denial-of-Service caused by missing input validation.

## What is it about?

The application passes user input unfiltered to a MongoDB database. MongoDB supports JavaScript expressions in certain query operators — including `sleep()`. If this function is injected via a manipulated URL and not sanitized, the database executes it directly and blocks the server for all users.

The vulnerability is classic **NoSQL Injection** according to [OWASP A03:2021](https://owasp.org/Top10/A03_2021-Injection/).

## Tools Used

`Web Browser` `Burp Suite`

## Approach

Product reviews were identified as an entry point, since user input there is passed directly to the database. Initial attempts to place the payload in the JSON body failed. Only the direct injection into the URL — replacing the product ID in the path with `sleep(20000)` — caused the server to freeze for 20 seconds. The server was no longer reachable afterwards, and the challenge was solved.

## Video

A complete live demonstration — from identifying the attack surface to successfully causing a DoS via the manipulated URL:

[▶ NoSQL Injection — DoS (Sleep) · Full Walkthrough](https://somup.com/cOfV6fVcBag)

## What I Learned

- How **NoSQL Injection** works and why MongoDB JavaScript expressions represent a real attack surface
- Why it is important to validate input not only in the request body, but also in URL parameters and path segments
- The difference between a failed body injection attempt and a successful URL-based attack
- How a single unfiltered parameter can take down an entire service for all users

## Full Documentation

The detailed exploitation steps, payloads, and screenshots are documented in the GitHub repository:

[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Injection/NOSQL_DOS.md)