const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.rewriter({
    "/api/*": "/$1",
    "/reset": "/reset",
    "/orders/?count=:number": "/orderlatest",
    "/orders": "/orders",
    "/orders/:number": "/ordersitems?number=:number",
    "/refunds/?count=:number": "/refundlates",
    "/refunds": "/refunds",
    "/refunds/:number": "/refunditems?number=:number",
    "/faq/:type": "/faq?type=:type",
    "/client/address": "/addresses",
    "/basket/info": "/client_basket",
    "/club/bonuses": "/account_bonuses",
    "/club/benefits": "/account_benefits"
}));

server.use(middlewares);
server.use(router);

server.listen(port);