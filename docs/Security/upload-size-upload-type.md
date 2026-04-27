---
title: Upload Size & Upload Type
sidebar_position: 2
---

# Upload Size & Upload Type — Improper Input Validation

**Upload Size & Upload Type** are two 2-star challenges from the OWASP Juice Shop in the *Improper Input Validation* category. Both were solved simultaneously with a single manipulated request.

## What is it about?

The application restricts file uploads to a maximum of 100 kB and only allows `.pdf` or `.zip` files. However, neither check is enforced server-side during actual request processing — both can therefore be fully bypassed through targeted manipulation with Burp Suite.

The underlying vulnerability is missing **server-side input validation** according to [OWASP A03:2021](https://owasp.org/Top10/A03_2021-Injection/).

## Tools Used

`Web Browser` `Burp Suite`

## Approach

First, a small `.txt` file was renamed to `.zip` and uploaded — with the request intercepted via Burp Suite. Two changes were then made to the intercepted request: the filename was changed back to `.txt` (→ solves Upload Type) and the file content was replaced with that of a file over 100 kB (→ solves Upload Size). A single forward completed both challenges at once.

## Video

A complete live demonstration — from preparing the test files to successfully bypassing both validations with a single manipulated request:

[▶ Improper Input Validation — Upload Size & Type · Full Walkthrough](https://go.screenpal.com/watch/cOevIRnTvHO)

## What I Learned

- Why **client-side validation alone is not a security measure** and must always be complemented by server-side validation
- How Burp Suite is used to deliberately manipulate HTTP requests
- That a simple file rename is enough to bypass file type checks when the server does not verify the MIME type itself
- How two independent vulnerabilities can be combined in a single attack

## Full Documentation

The detailed exploitation steps, payloads, and screenshots are documented in the GitHub repository:

[GitHub — OWASP Juice Shop Challenges](https://github.com/EnsslinAdrian/owasp-juice-shop/blob/feature/Improper_Input_Validation/UPLOAD_SIZE.md)