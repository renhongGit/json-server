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

const cors = require('cors');

server.use(middlewares)

server.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'],
  credentials: true
}));

server.options('*', cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  req.headers.withCredentials = true;  // 添加这行代码
  next();
});

// 设置允许跨域请求的地址和方法
const corsOptions = {
  origin: 'http://localhost:8080',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'],
  credentials: true
}

// 使用中间件设置 CORS 头
server.use(cors(corsOptions));

// 允许预检请求的方法和头
server.options('*', cors(corsOptions));

// 设置请求的 CORS 头
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

server.listen(3000, () => {
  console.log('JSON Server is running')
})
