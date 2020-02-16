/*
 * @Description: This file is made for
 * @Date: 2020-02-16 11:34:57
 * @LastEditTime: 2020-02-16 11:34:57
 * @Author: LeongD
 * @LastEditors: LeongD
 */
const express = require("express");

const router = express.Router();

router.get("/info", function(req, res, next) {
  res.json("user info...");
});

module.exports = router;
