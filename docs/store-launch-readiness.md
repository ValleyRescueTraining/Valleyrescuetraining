# Store pricing and checkout readiness — September 30, 2026

The ten previously unpriced products now have proposed retail prices on the store branch. Source: Penn Care / Grayson quote **#181609**, dated September 17, 2026, expiring October 17, 2026. These are supplier costs, not inventory commitments. Shipping was not specified in the quote; retail prices below exclude shipping and any applicable sales tax.

| Store item / SKU | Supplier cost | Store price | Gross margin before fees, freight, tax |
| --- | ---: | ---: | ---: |
| Philips Alarmed AED Cabinet / 03-37021 | $295.00 | $399 | 26.1% |
| Philips HeartStart Wall Bracket / 03-3701A | $85.00 | $115 | 26.1% |
| Triangular AED Wall Sign / 03-448520 | $9.55 | $15 | 36.3% |
| 25-Person First Aid Kit / 07-3313U | $30.00 | $45 | 33.3% |
| 50-Person First Aid Kit / 07-02611 | $85.00 | $125 | 32.0% |
| Public Bleeding Control Station / 07-5032AD | $1,175.00 | $1,499 | 21.6% |
| Philips Red AED Wall Sign / 03-406421 | $35.00 | $49 | 28.6% |
| AED-Equipped Facility Decal / 03-683818 | $2.00 | $5 | 60.0% |
| Individual Bleeding Control Wall Case / 14-512701 | $72.00 | $99 | 27.3% |
| Public-Access Bleeding Control 8-Pack / 07-526468 | $450.00 | $599 | 24.9% |

The first ten store prices were already matched to Penn Care quote #181246 and the existing Stripe live prices. No Stripe price or payment link was created for the ten new items yet.

## Before activating paid checkout

- Stripe account `Valley Rescue Training` is already in live mode as an individual with charges and payouts enabled (checked September 30). Do not request or store an SSN in the website or chat. Any identity update should happen in Stripe's secure Dashboard, and bankruptcy-related timing should be cleared with Dawn.
- Stripe Tax settings are `pending` because the head-office address is missing. There are **zero** tax registrations in Stripe. Verify actual state registrations with the tax authority and Dawn/CPA, then set head office, product tax codes, registrations, and tax-exclusive prices. Merely enabling automatic tax with zero registrations can produce $0 tax.
- Confirm supplier resale and fulfillment terms, product availability and lead times, exact contents for the two bleeding-control configurations, and freight/handling (especially the AED and large station). Establish shipping rates or a pickup-only policy and publish cancellation/returns and preorder terms before taking payment.
- Use Stripe-hosted Payment Links per item for the static GitHub Pages store initially; add editable quantities, shipping address/rates or pickup choices, and automatic tax after registration. Verify test checkout totals and order notifications before exposing live URLs. A true multi-item cart would require a server-side Checkout Session endpoint or a different storefront platform.
- LifeVac is not included in this pricing update. Do not take paid LifeVac preorders until the reseller/trainer agreement and stock, delivery timing, and refund terms are confirmed.

Until these gates are resolved, the existing email inquiry buttons remain in place rather than sending buyers to an incomplete payment flow.
