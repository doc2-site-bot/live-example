# Demo with doc2.live

The demo shows how landing pages and blog-like pages can be created and rendered with the doc2.live service.

Powered by Web Components, the doc2.live service builts on top of the Web Platform so you can be assured to create fast Web Experiences that will last.

The demo showcases how the doc2.live service:
- Delivers HTML pages on the project subdomain <https://demo.doc2.live>
- Assembles and renders document and sheet fragments
- Modifies the server side rendered HTML
- Enhances HTML with client-side JavaScript and CSS hosted on GitHub pages
- Delivers server-side rendered [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) with [Shadom DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- Embeds youtube video as web component
- Renders sheet data with a given template
- Loads custom web fonts
- Integrates [Turnstile](https://developers.cloudflare.com/turnstile/), Cloudflare’s smart CAPTCHA alternative to submit data to a sheet

## Live demo

* <https://demo.doc2.live>

## Content source

The content is provided in Google Docs see Project: <https://drive.google.com/drive/folders/1n98BBrnbQW3Dzgq0Go6tyJOgk2l95Ee_>

## Getting Started

First, install the doc2 CLI with `npm i -g @doc2/cli`, then run the doc2.live dev server:

```
doc2 live --dev
```

Open <http://localhost:3000> with your browser to see the result. Modify the [scripts.js](scripts/scripts.js) or [styles.css](styles/styles.css) files then refresh the page to see the changes applied.

## How does it work ?

By default, doc2.live will assemble `head`, `header` and `footer` fragments of a published page. A custom [head.html](./head.html) can be provided to extend and link to other static files like a favicon, scripts and styles. 

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are loaded dynamically per page and the tag names are prefixed with `web-` see the [contact](./components/contact/contact.js) component as example.
The [contact.html](./components/contact/contact.html) template is used to defined [Declarative Shadow DOM](https://developer.chrome.com/en/articles/declarative-shadow-dom/), a new way to implement and use Shadow DOM directly in HTML.

Finally, The [ssr.json](./ssr.json) file allows to globally modify the html by setting custom properties to selected elements before it is returned to the client.

## Deployment

The static files are deployed via [GitHub Pages](https://pages.github.com/) e.g. <https://doc2-site-bot.github.io/live-example/styles/styles.css> and proxied as defined in <https://docs.google.com/document/d/1Uv08-QtKoQYFXk1vaXZZQFTbmH8pDv7ZImjHrfUvS7c>.

## Resources

To learn more, take a look at the following resources:

- [doc2.site docs](https://doc2.site/documentation) - learn about doc2.site and doc2.live features for authors and developers.
