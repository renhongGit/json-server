const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json', {
  foreignKeySuffix: '_id',
  "/shopping": "shopping",
  "/commodity": "Commodity",
  "/userShopping": "userShopping",
  "/laundry": "laundry"
})
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
  "/api/*": "/$1",
}));

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
