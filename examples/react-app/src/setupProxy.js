const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {

  //Authentication

  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:8081', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );

}