## 2024-05-27 - [Static Site Content Security Policy]
**Vulnerability:** Missing Content-Security-Policy header/meta tag.
**Learning:** Static HTML sites without a backend can still benefit from a basic CSP to prevent Cross-Site Scripting (XSS) via injected resources.
**Prevention:** Include a basic CSP meta tag that restricts default sources to `'self'` and explicitly allows needed CDNs for styles/scripts.
