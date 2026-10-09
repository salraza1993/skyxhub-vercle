const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Redirect Azure domain to main domain
  server.use((req, res, next) => {
    if (req.headers.host === 'skyxhub.azurewebsites.net') {
      return res.redirect(301, 'https://skyxhub.com' + req.url);
    }
    next();
  });

  // Let Next.js handle everything else
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
