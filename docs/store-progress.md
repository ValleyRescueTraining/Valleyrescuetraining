# VRT equipment store — implementation checkpoint

## Goal
Finish the existing GitHub Pages store with individual products, workplace packages, supplier images, Stripe checkout, shipping and pickup. Owner: Zack. Preserve existing branding, training, booking, analytics and sticker checkout. No refurbished or OnSite AED listings.

## Completed
- Draft PR #13 on codex/equipment-store: 16 individual listings, three quote-based packages, responsive styling and accessible category filters.
- Fifteen optimized local product images. Three bleeding-kit images are supplier contents labels and are explicitly captioned. Cabinet image explains AED and case are separate.
- Verified local image paths and alt text; JavaScript syntax check passed.
- Stripe connection verified September 16, 2026. Created 16 equipment products; 10 have fixed USD prices. Six accessories/workplace items remain quote-only.
- Existing training and sticker products and payment links unchanged.
- Klarna available/enabled in default direct-account payment configuration. Affirm preference on but unavailable; capability inactive.
- No new equipment payment links created; equipment checkout remains pending.
- September 16: user explicitly requested immediate catalog publication. PR #13 merged as 0fb27e5bc33dd36200f61878c72b2e624c4b9618; GitHub Pages deployment initiated. Launch uses inquiry CTAs while registration, tax and shipping are finalized.

## Remaining
1. Confirm tax collection setup before enabling checkout. Do not enable automatic_tax without a confirmed active registration. Registration information must be confirmed with Zack.
2. Finalize shipping charges and free arranged pickup; avoid promising universal free shipping. Shipping currently quote-before-payment.
3. Create and verify equipment payment links, replace fixed-price inquiry buttons, preserve quote-based accessory/package ordering.
4. Add product image URLs in Stripe after the site assets are publicly available.
5. Confirm Pages deployment and complete rendered mobile/desktop verification when browser connection is available. Checkout verification remains required before enabling equipment payments.
6. Optional missing image: 4-inch trauma dressing (manufacturer 30-0031). Keep text-only until exact image is obtained.
7. Supplier follow-up: FRx child-key/extra-pads offer, accessory and bundle costs, lead times and approved product photo use.
8. Affirm is deferred at Zack's request; it is not a launch blocker. Confirm provider eligibility for added equipment sales before promoting provider-specific financing.

## Stripe catalog mapping
These are public-facing product/price identifiers, not credentials.

| Listing | Product | Default price |
| --- | --- | --- |
| basic | vrt_basic_05483201 | price_1UGNdvHwSDiI58t1XTiK47t9 |
| intermediate | vrt_intermediate_05483202 | price_1UGNewHwSDiI58t1UCvyPekj |
| advanced | vrt_advanced_05483203 | price_1UGNf4HwSDiI58t1TWli4l33 |
| frx | vrt_frx_033156C01 | price_1UGNfCHwSDiI58t1infZt2lc |
| pads | vrt_pads_0338811 | price_1UGNfIHwSDiI58t1JiQIZAap |
| cat | vrt_cat_02123023 | price_1UGNfOHwSDiI58t1mPCmpKy7 |
| etd4 | vrt_etd4_07402931 | price_1UGNfUHwSDiI58t1fJr8E71v |
| etd6 | vrt_etd6_07402932 | price_1UGNfbHwSDiI58t1t9SpgjlF |
| mask | vrt_mask_013167W | price_1UGNfiHwSDiI58t1a1EHtzB2 |
| gauze | vrt_gauze_0732740 | price_1UGNfoHwSDiI58t12Np01nHx |
| cabinet | vrt_cabinet_0337021 | Quote only |
| bracket | vrt_bracket_033701A | Quote only |
| sign | vrt_sign_03448520 | Quote only |
| firstaid25 | vrt_firstaid25_073313U | Quote only |
| firstaid50 | vrt_firstaid50_0702611 | Quote only |
| station | vrt_station_075032AD | Quote only |

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
Use Stripe connector directly; browser login is no longer required for supported account operations. Do not recreate the products above. Fetch remote branch before editing since local checkout may predate API commits. Do not store supplier costs, personal account details, credentials or private correspondence in this public repository.
