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
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});


server.start(function() {
	console.log("Hapi server started @ " + server.info.uri);
});