const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('commodity.json', {
    foreignKeySuffix: '_id',
    "/shopping": "shopping",
    "/Commodity": "Commodity", // 更改此处
    "/userShopping": "userShopping",
    "/laundry": "laundry"
})
const middlewares = jsonServer.defaults()

// 引入 cors 模块
const cors = require('cors');

server.use(middlewares)

// 在路由之前使用 cors 中间件
server.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})