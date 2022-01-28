const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const api = require('./api')
const PORT = process.env.PORT || 4000
const app = new Koa()

const router = new Router()
router.use('/api', api.routes())

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () =>
  console.log(`✅ Server Listening on: http://localhost:${PORT}`)
)
