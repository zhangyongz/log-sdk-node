const Koa = require('koa')
const InitManager = require('./core/init')
const cors = require('./middlewares/cors')

const app = new Koa()

app.use(cors)

InitManager.initCore(app)

app.listen(3000)
