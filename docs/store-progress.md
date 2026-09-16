# VRT equipment store — implementation checkpoint

## Goal and decisions
Extend the existing GitHub Pages store with individual products, workplace packages, Penn Care product photography, Stripe payment options and shipping-aware ordering. Owner's name is **Zack**. Preserve current logo, red/black branding, courses, booking, check-in, analytics and working sticker payment link. No refurbished or OnSite AED listings.

## Implemented on codex/equipment-store
- 16 individual product cards with SKU, concise source-grounded details and retail prices or quote requests.
- Prices: kits $59/$79/$135; FRx $2,199; pads $85; CAT $35; dressings $11/$14; mask $10; QuikClot $45.
- Three quote-based packages: AED Setup, Small-Business Readiness, Workplace Response.
- Accessible category filters; responsive store-only stylesheet.
- Item-specific email inquiry links to valleyrescuetraining@outlook.com. Equipment checkout is NOT enabled yet.
- Existing sticker Stripe checkout retained.
- Conditional pay-over-time language without unverified provider logos or installment amounts.
- Pickup by arrangement; shipping confirmed before payment. No universal free shipping promise.

## Incomplete / launch checks
1. Images: four exact supplier image URLs are referenced for Basic/Intermediate/Advanced kits and FRx. They are provisional external URLs, not downloaded assets. Penn Care's browser page returned a security verification challenge; downloads returned HTTP 403. Obtain the source assets and store optimized local copies before launch. Other product photos remain to be sourced. Do not use inaccurate substitute photos.
2. Stripe: the user's visible app showed an authenticated dashboard, but the agent-controlled cloud browser remained at sign-in after verification. No Stripe account changes, payment links, financing-provider checks, or shipping configuration were made. The user entered a code in chat; it was not used or retained.
3. Execution environment disconnected before local implementation could run. Changes were instead committed through GitHub tools. No browser visual QA or functional runtime tests have run.
4. Confirm exact FRx bundle (child key and extra pads) and supplier accessory costs when Grayson replies. Accessory and bundle prices remain quote-only.
5. Before publication: run desktop/mobile visual QA, category filter and image-failure checks, verify email links/anchors, then merge through existing GitHub Pages workflow.
6. Replace inquiry CTAs with validated Stripe links only after fulfillment/shipping and product eligibility are configured. Retain quote flow for unresolved items.
7. Do not put supplier costs, private correspondence or account credentials into this public repository.

## Source pages
- Kits: https://www.penncare.net/product/kit-bleeding-control/
- FRx: https://www.penncare.net/product/aed-philips-heartstart-frx/
- Pads: https://www.penncare.net/product/defibrillator-electrode-philips-heartstart-frx-smart-pads-ii/
- CAT: https://www.penncare.net/product/tourniquet-cat-combat-application-tourniquet/
- Dressings: https://www.penncare.net/product/gauze-emergency-trauma-dressing-etd/
- Mask: https://www.penncare.net/product/cpr-mask-pocket-with-o2-port-valve/
- Gauze: https://www.penncare.net/product/hemostatic-gauze-quikclot-combat-z-fold/
- Cabinet: https://www.penncare.net/product/aed-cabinet-basic-surface-mounted-cabinet-for-philips-heartstart/
- Bracket: https://www.penncare.net/product/wall-mount-philips-heartstart-bracket/
- Sign: https://www.penncare.net/product/wall-sign-aed/
- First aid: https://www.penncare.net/product/first-aid-kit/ and https://www.penncare.net/product/first-aid-kit-3/
- Station: https://www.penncare.net/product/public-bleeding-control-station-8-pack-vacuum-sealed-clear-polycarbonate-case/

## Resume
Fetch codex/equipment-store (the local clone may predate remote commits). Review store/index.html, store/store.css and store/store.js. Complete checks above; the live main branch is unchanged.
