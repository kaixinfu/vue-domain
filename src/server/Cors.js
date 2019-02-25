let express = require('express')
let app = express()
var bodyParser = require('body-parser')
const _port = 5000
let whitList = ['http://localhost:8080']
app.use(function (req, res, next) {
  console.log('use', req.headers)
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
      res.end() // OPTIONS请求不做任何处理
    }
  }
  next()
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({type: 'application/*+json'}))
app.post('/corsPost', function (req, res) {
  let msg = `'我是${_port}端口, 收到${JSON.parse(Object.keys(req.body)[0]).reqPort}端口的请求了...'`
  res.end(msg)
})
app.get('/corsGet', function (req, res) {
  const {reqPort} = req.query
  let msg = `'我是${_port}端口, 收到${reqPort}端口的请求了...'`
  res.end(msg)
})
app.use(express.static(__dirname))
app.listen(_port, () => {
  console.log(`${_port}端口的服务,启动起来了 ...`)
})
