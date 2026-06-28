## 2024-05-23 - Lazy Loading Above The Fold Images
**Learning:** Applying `loading="lazy"` to images that are immediately visible in the initial viewport (above the fold) is a minor performance anti-pattern, as it can slightly delay the Largest Contentful Paint (LCP) while the browser waits to calculate the layout before fetching them.
**Action:** Only apply `loading="lazy"` to images that are strictly below the fold, and keep above-the-fold images loading eagerly.
