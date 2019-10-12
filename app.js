const express = require('express');
const geoip = require('geoip-lite');
const ua = require('ua-parser-js');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(ua(req.headers["user-agent"]));
  res.render('hello', {
    headers: req.headers,
    ip: req.ip,
    deviceInfo: ua(req.headers["user-agent"])
  });
});
app.get('/hello', (req, res) => {
})

app.listen(3000);