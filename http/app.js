var http = require('http');
var url = require('url');
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-type':'text/html'});
//   res.write('<h1> Node.js</h1>');
//   res.write('<p>helloworld!</p>');
// }).listen(3000);

// console.log('server listen port 3000');

http.createServer(function(req,res){
  var query = url.parse(req.url,true).query;
  res.writeHead(200,{'Content-type':'text/html'});
  res.write('<h1> Node.js</h1>');
  res.write('<p>hello!</p>'+'<p>'+query.name+'</p>');

}).listen(3000);

console.log('server listen port 3000');