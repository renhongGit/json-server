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

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

server.use('/api', router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
