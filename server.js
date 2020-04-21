const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.rewriter({
    "/api/*": "/$1",
    "/reset": "/reset",
    "/orders/:number": "/orders?number=:number",
    "/refunds/:number": "/refunds?number=:number",
    "/faq/:type": "/faq?type=:type"
}));

server.use(middlewares);
server.use(router);

server.listen(port);