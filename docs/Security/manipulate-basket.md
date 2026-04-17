---
title: Manipulate Basket
sidebar_position: 1
---

# Manipulate Basket — Broken Access Control

**Manipulate Basket** is a 3-star challenge from the OWASP Juice Shop in the *Broken Access Control* category. The goal was to add a product to another user's basket — without knowing their credentials.

## What is it about?

The application protects baskets through a server-side check of the `BasketId`. However, this check has a flaw: if two `BasketId` parameters are submitted in the request body, the server validates the first one (own ID → access granted) but uses the second one for the actual database operation — which is the ID of another user's basket.

This technique is called **HTTP Parameter Pollution** and is a classic Broken Access Control vulnerability according to [OWASP A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/).

## Tools Used

`Web Browser` `Burp Suite`

## Approach

The attack proceeded in three steps: First, a basket request was intercepted and analyzed using Burp Suite. Then an attempt was made to directly replace the `BasketId` — which the server correctly blocked. In the final step, the parameter was submitted twice, tricking the security mechanism and solving the challenge.

## Video

A complete live demonstration — from intercepting the request to successfully adding a product to another user's basket:

[▶ Broken Access Control — Manipulate Basket · Full Walkthrough](https://somup.com/cOfVQwVcBw5)

## What I Learned

- How **HTTP Parameter Pollution** works and why it is dangerous
- That access control must be enforced server-side not only for reads, but also for writes
- Why the server should never accept the `BasketId` from the client — it should be derived directly from the authenticated session
- The difference between **BOLA** (Broken Object Level Authorization) and classic authorization issues

## Full Documentation

The detailed exploitation steps, payloads, and screenshots are documented in the GitHub repository:

[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Broken_Access_Control/MANIPULATE_BASKET.md)