const express = require('express');
const geoip = require('geoip-lite');
const ua = require('ua-parser-js');
const app = express();

app.get('/', (req, res) => {
  return res.json({
    headers: req.headers,
    ip: req.ip,
    deviceInfo: ua(req.headers["user-agent"])
  });
})

app.listen(3000);