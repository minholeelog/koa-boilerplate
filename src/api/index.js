const Router = require('koa-router')
const { hello } = require('./index.ctrl')
const api = new Router()

api.get('/', hello)

module.exports = api
