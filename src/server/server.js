import koa from 'koa';
import staticFolder from 'koa-static-folder';
import React from 'react';
import pkg from 'root/package.json';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddlevare from 'webpack-hot-middleware';
import webpackDevConfig from 'webpackPath/config.dev';
const compiler = webpack(webpackDevConfig);
const hotMiddleware = webpackHotMiddlevare(compiler);

import configureStore from '../configureStore';
import App from '../containers/App';

const app = koa();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(staticFolder('./dist'));

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Example app</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `;
}



function* handleRender(req, res) {
  const initialState = { counter: 0 };
  const store = configureStore(initialState);
  const html = renderToString(<Provider store={store}><App /></Provider>);
  const finalState = store.getState();

  this.body = renderFullPage(html, finalState);
}

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true
}));
app.use(function* (next) {
  yield hotMiddleware.bind(null, this.req, this.res);
  yield next;
});
app.use(handleRender);

app.listen(port, host, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${pkg.name} is listening on http://${host}:${port}`);
  }
});
