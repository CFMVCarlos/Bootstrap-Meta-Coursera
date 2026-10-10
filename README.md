<div align="center">

# 🍽️ Little Lemon - Our Menu

A responsive restaurant menu web page built with semantic HTML5 and Bootstrap 5, showcasing responsive grid design, utility classes, and card components.

[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![Playwright Tests](https://img.shields.io/badge/tested%20with-Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Meta Certification](https://img.shields.io/badge/Meta%20Front--End%20Developer-Coursera-0081FB?logo=meta&logoColor=white)](https://www.coursera.org/professional-certificates/meta-front-end-developer)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

---

<p align="center">
  <img src="screenshot.png" alt="Little Lemon Menu Preview" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</p>

---

</div>

## 📖 Overview

This project is part of the **Meta Front-End Developer Professional Certificate** on Coursera. It demonstrates how to create clean, responsive layouts using **pure Bootstrap 5** utilities and components, including modern navigation, category accordions, dish showcase cards, responsive pricing tables, and image loading optimizations.

---

## ✨ Features

- **🧭 Responsive Navigation Bar:** Sticky navbar with brand logo, quick navigation links, and online order CTA.
- **📱 Responsive Grid Layout:** Adapts seamlessly across mobile, tablet, and desktop viewports using Bootstrap's 12-column grid system (`col-12`, `col-md-6`, `col-lg-5`, `col-lg`).
- **🎴 Dish Showcase Cards:** Clean Bootstrap cards highlighting popular dishes (`Fried Calamari`, `Falafel`, `Pasta Salad`, `Bruschetta Rustica`) with descriptions, badges, and prices.
- **📂 Interactive Category Accordion:** Pure Bootstrap collapsible accordion featuring Entrées & Mains and Desserts & Beverages without custom scripts.
- **⚡ Image Performance Optimizations:** Native lazy-loading (`loading="lazy"`), asynchronous image decoding (`decoding="async"`), and LCP prioritization (`fetchpriority="high"`).
- **📊 Responsive Pricing Table:** Formatted item-and-price breakdown with hover states and dietary disclaimer.
- **🛡️ Content Security Policy (CSP):** Configured `<meta>` security policy restricting external asset sources to trusted CDNs.
- **🧪 E2E Test Suite:** Fully verified with automated Playwright end-to-end tests.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document structure.
- **Bootstrap 5.3.3:** Responsive grid, flexbox utilities, cards, tables, and alert components.
- **Playwright:** End-to-end browser testing.

---

## 🚀 Quickstart

### View in Browser
Simply open `index.html` directly in your browser:
```bash
# On Linux / WSL
xdg-open index.html

# On macOS
open index.html
```

### Run Automated Tests
```bash
# Install dependencies
npm install

# Run Playwright E2E test suite
npm test
```

---

## 📂 Project Structure

```text
Bootstrap-Meta-Coursera/
├── tests/
│   └── index.spec.js     # Playwright E2E tests validating layout & content
├── bruschetta.jpg        # Dish asset (Bruschetta Rustica)
├── calamari.jpg          # Dish asset (Fried Calamari)
├── falafel.jpg           # Dish asset (Falafel)
├── salad.jpg             # Dish asset (Pasta Salad)
├── screenshot.png        # Full-page layout preview
├── index.html            # Main responsive web page
├── package.json          # Node dependencies & test scripts
└── README.md             # Project documentation
```

---

## 👤 Author

- **Carlos Valente** – [GitHub (@CFMVCarlos)](https://github.com/CFMVCarlos)
- Meta Front-End Developer Specialization on [Coursera](https://www.coursera.org/).