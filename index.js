const cors = require('cors');
const express = require('express');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('commodity.json');
const middlewares = jsonServer.defaults();

// 设置 CORS 头，允许所有来源访问
server.use(cors({
  origin: '*',
}));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});