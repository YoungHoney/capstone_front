const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ancestor',
    createProxyMiddleware({
      target: 'http://3.39.127.44:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/1',
    createProxyMiddleware({
      target: 'http://3.39.127.44:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/2',
    createProxyMiddleware({
      target: 'http://3.39.127.44:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/3',
    createProxyMiddleware({
      target: 'http://3.39.127.44:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/4',
    createProxyMiddleware({
      target: 'http://3.39.127.44:8080',
      changeOrigin: true,
    })
  );
 
};
