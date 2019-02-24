const express = require('express')
const app = express()
const _port = 4000

app.get('/jsonp', function (req, res) {
  const {callback, reqPort} = req.query
  let msg = `'我是${_port}端口, 收到${reqPort}端口的请求了...'`
  res.end(`${callback}(${msg})`)
})

app.listen(_port, () => {
  console.log(`${_port}端口的服务,启动起来了 ...`)
})
