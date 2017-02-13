var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://www.google.com'},function (e) {
  console.log(e)
}).listen(35000); // See (†)

console.log("listening on port 35000")
