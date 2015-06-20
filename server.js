var Hapi = require('hapi');
var port = process.env.PORT || 8000;
var host = process.env.HOST || 'localhost';
var server = new Hapi.Server();
server.connection({ 
    host: host, 
    port: port,
	routes: { cors: true }
});

server.route({
    method: 'GET',
    path:'/product/{upc}', 
    handler: function (request, reply) {
       reply([{
             name: "Product 2",
             upc: encodeURIComponent(request.params.upc)
      }]);
    }
});

server.route({
    method: 'GET',
    path:'/coupon/{upc}', 
    handler: function (request, reply) {
       reply([{
             name: "Coupon 3",
             upc: encodeURIComponent(request.params.upc)
      }]);
    }
});


server.start(function() {
	console.log("Hapi server started @ " + server.info.uri);
});