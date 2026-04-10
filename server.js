const express = require('express');
const path = require('path');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
// const dev = false;
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    cors({
      origin: '*',
    })
  )
  // server.use(express.static(path.join(__dirname, 'public')));
  server.use(express.static(path.join('./', 'public')));

  // server.all('/bp/*', async (req, res) => {
  //   try {
  //     if (req.method === 'GET' || req.method === 'POST') {
  //       await app.render(req, res, '/bp', req.params);
  //     } else {
  //       res.status(405).send('Method Not Allowed');
  //     }
  //   } catch (err) {
  //     console.error('Error handling request:', err);
  //     res.status(500).send('Internal Server Error');
  //   }
  // });

  server.all('*', async (req, res) => {
    try {
      await handle(req, res);
    } catch (err) {
      console.error('Error handling request:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
