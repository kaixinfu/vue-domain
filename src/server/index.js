const express = require('express')
const app = express()
const _port = 4000

app.get('/jsonp', function (req, res) {
    res.send(`我是${_port}端口`)
})

const server = app.listen(_port, () => {
    console.log(`${_port}端口的服务,启动起来了 ...`)
})
