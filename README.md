# ACDI website mockup

**Live site: https://kes30033.github.io/ACDI-mockup-website/**

Review mockup of the public website for the Advanced Clinical Design Institute. Copy and imagery are pending Founder approval.

Plain HTML, CSS, and JavaScript with no build step.

## Edit on a computer

For people working on the site's code. To view the site, use the live link above.

```bash
python3 -m http.server 4173
```

This starts a private preview at `localhost:4173`, which only opens on the computer running it.

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
