# Site example with doc2.live

The demo showcases how the doc2.live service: 
- assembles project specific published content on the fly
- delivers HTML pages on project unique subdomains 
- enhances HTML with client-side JavaScript and CSS hosted on GitHub pages

## Live demo

* <https://bda43ee8-922b-48e1-b284-9c55670e08f8.doc2.live>

## Content source

The content is provided in Google Docs see Project: <https://drive.google.com/drive/folders/1n98BBrnbQW3Dzgq0Go6tyJOgk2l95Ee_>

## Getting Started

First, run the development [server](./server.js):

```
npm run dev
```

Open <http://localhost:3000> with your browser to see the result. Modify the [main.js](./main.js) or [main.css](./main.css) files then refresh the page to see the changes applied.

## How does it work ?

By default, doc2.live will assemble `head`, `header` and `footer` fragments of a published page. A custom [head.html](./head.html) can be provided to extend and link to other static files like a favicon, scripts and styles.

Custom components script and styles are loaded dynamically per page and the tag names are prefixed with `web-` to allow them to be defined as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) see the [youtube](./components/youtube/) component as example. 

## Deployment

The static files are deployed via [GitHub Pages](https://pages.github.com/) e.g. <https://doc2-site-bot.github.io/live-example/main.css> and proxied as defined in <https://docs.google.com/document/d/1Uv08-QtKoQYFXk1vaXZZQFTbmH8pDv7ZImjHrfUvS7c>.

## Resources

To learn more, take a look at the following resources:

- [doc2.site docs](https://doc2.site/documentation) - learn about doc2.site and doc2.live features for authors and developers.