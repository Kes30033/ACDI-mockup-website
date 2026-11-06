# ACDI website mockup

Review mockup of the public website for the Advanced Clinical Design Institute. Copy and imagery are pending Founder approval.

Plain HTML, CSS, and JavaScript with no build step.

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Pages

- `index.html`: home
- `institute.html`: mission, principles, leadership, growth approach
- `pathway.html`: the four tiers, credential, Fellowship
- `who-we-serve.html`: participants, sponsors, validators, partners, affiliates
- `get-involved.html`: interest form (not connected to a service yet)

## Before going live

- Remove `<meta name="robots" content="noindex">` from each page.
- Remove the review notice from each page's footer.
- Connect the interest form and add a privacy policy, since the form collects personal details.
- Add `og:image` and `og:url` tags once TheACDI.com is pointed at the site.
