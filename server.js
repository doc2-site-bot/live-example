import express from 'express';
import proxy from 'express-http-proxy';
import brotli from 'brotli';
import fs from 'node:fs';

const project = 'bda43ee8-922b-48e1-b284-9c55670e08f8';
const app = express();
const head = fs.readFileSync('./head.html', 'utf-8');

app.use(express.static('.'))
app.use(
  '/',
  proxy(`https://dev--${project}.doc2.live`, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
      if (String(proxyRes.headers['content-type']).includes('text/html')) {
        const html = new TextDecoder().decode(brotli.decompress(proxyResData));

        return html.replace('</head>', `${head}</head>`);
      }
      return proxyResData;
    },
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
      if (String(headers['content-type']).includes('text/html')) {
        delete headers['content-encoding'];
      }

      if (String(headers['location']).endsWith('doc2.live/404')); {
        headers['location'] = 'http://localhost:3000/404'
      }

      return headers;
    }
  })
);
app.listen(3000);

console.log('Running http://localhost:3000')