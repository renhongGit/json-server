const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('commodity.json', {
    foreignKeySuffix: '_id',
    "/shopping": "shopping",
    "/commodity": "Commodity",
    "/userShopping": "userShopping",
    "/laundry": "laundry"
})
const middlewares = jsonServer.defaults()

const cors = require('cors');

server.use(middlewares)

server.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']
  }));

server.options('*', cors());

server.use('/api', router)


server.listen(3000, () => {
  console.log('JSON Server is running')
})