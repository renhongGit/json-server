const cors = require('cors');
const express = require('express');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('commodity.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // 设置 CORS 头
server.use(middlewares);

// 在 JSON Server 路由之前添加自定义的中间件
server.use((req, res, next) => {
  // 允许所有来源的访问
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的 HTTP 请求方法
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  // 允许的 HTTP 请求头部
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // 跨域请求会首先发送一个 OPTIONS 请求，这里给OPTIONS请求返回200状态码，以便浏览器继续进行
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
