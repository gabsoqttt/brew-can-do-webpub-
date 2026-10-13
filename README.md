# BREW CAN DO

A fictional coffee catering business website, created as a final project for Web Publishing and Digital Advertising. The business, prices, customers and contact details are all fictional sample data.

**Live website:** https://gabsoqttt.github.io/brew-can-do-webpub-/index.html
**Repository:** https://github.com/gabsoqttt/brew-can-do-webpub-

## Pages
- Home, Features, Services, About Us, Contact Us
- Social Campaign (`social.html`), Email Marketing Mockup (`email-marketing.html`), Customer Data Demo (`customers.html`)

## Technologies
HTML5, CSS3, JavaScript, JSON (and an optional small Node.js server)

## How to Run Locally
The pages load JSON with `fetch()`, so use a local server, not `file://`.

1. **Python:** run `python -m http.server 8000` in the project folder, then open `http://localhost:8000/index.html`
2. **Node.js:** run `node server.js`, then open `http://localhost:3000`
3. **XAMPP:** copy the folder into `htdocs` and open `http://localhost/Webpub/`

## Data Integration
- `data/services.json` is loaded with a GET request on the Services page.
- `data/customers.json` is loaded with a GET request on the Customer Data Demo page (fictional records only).
- With `server.js` running, the same data is also available at `/api/services` and `/api/customers`.
- This is JSON data integration with GET only. It is not a full REST API, and there is no PHP backend.

## Limitations
- The contact form is validated in the browser only. It does not send any email.
- Prices, contact details and social media links are samples or placeholders.
- No real social media accounts exist for this fictional business.

## Credits
- Photos: (pintrest, google)
- Video: (Kávé összefoglaló - marketing videó)
- Fonts: Bowlby One SC, Poppins and Oswald (Google Fonts)
