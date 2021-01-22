const Router = require('koa-router')
const qs = require('qs')
const { HttpException, sucess } = require('@core/http')
const { Customize } = require('@models/customize')

const router = new Router({
  prefix: '/v1'
})

router.get('/track', async (ctx, next) => {
  let query = qs.parse(ctx.querystring, {arrayFormat: 'brackets'})
  let eventName = query.event_name
  let params = query.params
  if (!eventName) {
    throw new HttpException({
      message: '请传必填字段'
    })
  }
  let data = {
    event_name: eventName,
    params: JSON.stringify(params)
  }
  await Customize.create(data)
  sucess(ctx, data)
})

module.exports = router
