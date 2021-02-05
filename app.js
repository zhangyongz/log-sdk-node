require('module-alias/register')
const Koa = require('koa')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const cors = require('./middlewares/cors')
require('@models/customize')

const app = new Koa()

app.use(catchError)
app.use(cors)
app.proxy = true

InitManager.initCore(app)

app.listen(3001)
