# Site example with doc2.live

The demo showcases how the doc2.live service: 
- assembles project specific published content on the fly
- delivers HTML pages on project unique subdomains 
- enhances HTML with client-side JavaScript and CSS hosted on GitHub pages
- delivers server-side rendered web components

## Live demo

* <https://live-demo.doc2.live>

## Content source

The content is provided in Google Docs see Project: <https://drive.google.com/drive/folders/1n98BBrnbQW3Dzgq0Go6tyJOgk2l95Ee_>

## Getting Started

First, install the doc2 CLI with `npm i -g @doc2/cli`, then run the doc2.live dev server:

```
doc2 live --dev
```

Open <http://localhost:3000> with your browser to see the result. Modify the [index.js](./index.js) or [index.css](./index.css) files then refresh the page to see the changes applied.

## How does it work ?

By default, doc2.live will assemble `head`, `header` and `footer` fragments of a published page. A custom [head.html](./head.html) can be provided to extend and link to other static files like a favicon, scripts and styles.
The [index.json](./index.json) file allows to globally modify the html by setting custom properties to selected elements. 

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are loaded dynamically per page and the tag names are prefixed with `web-` see the [youtube](./components/youtube/youtube.js) component as example.
Similar to the `index.json` file, the [youtube.json](./components/youtube/youtube.json) allows to modify the web component html by setting custom properties to the selected elements.
Finally, the [youtube.html](./components/youtube/youtube.html) is used to defined [Declarative Shadow DOM](https://developer.chrome.com/en/articles/declarative-shadow-dom/), a new way to implement and use Shadow DOM directly in HTML. 

## Deployment

The static files are deployed via [GitHub Pages](https://pages.github.com/) e.g. <https://doc2-site-bot.github.io/live-example/index.css> and proxied as defined in <https://docs.google.com/document/d/1Uv08-QtKoQYFXk1vaXZZQFTbmH8pDv7ZImjHrfUvS7c>.

## Resources

To learn more, take a look at the following resources:

- [doc2.site docs](https://doc2.site/documentation) - learn about doc2.site and doc2.live features for authors and developers.
