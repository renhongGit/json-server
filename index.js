const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('commodity.json', {
    foreignKeySuffix: '_id',
    // 添加下面这一行代码
    "/shopping": "shopping",
    "/commodity":"Commodity",
    "/userShopping":"userShopping",
    "/laundry":"laundry"
})
const middlewares = jsonServer.defaults()

// 引入 cors 模块
const cors = require('cors');

server.use(middlewares)

// 在路由之前使用 cors 中间件
server.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  }));

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})