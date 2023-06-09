const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json', {
  foreignKeySuffix: '_id',
  "/shopping": "shopping",
  "/commodity": "Commodity",
  "/userShopping": "userShopping",
  "/laundry": "laundry"
});
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(middlewares);

server.use(cors({
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

server.options('*', cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  req.headers.withCredentials = true;  
  next();
});

// 添加以下程式碼段以將VerceI設置為代理服務器
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = createProxyMiddleware('/api', {
  target: 'https://json-server-7eqn8z735-renhonggit.vercel.app',
  changeOrigin: true,
});

server.use('/api', proxy);

server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});