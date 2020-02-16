/*
 * @Description: This file is made for
 * @Date: 2020-02-16 11:39:00
 * @LastEditTime: 2020-02-16 11:39:00
 * @Author: LeongD
 * @LastEditors: LeongD
 */

const express = require("express");
const router = require("./router/index");
// 创建 express 应用
const app = express();

app.use("/", router);

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address();
  console.log("Http Server is running on http://%s:%s", address, port);
});
