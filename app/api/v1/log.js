const Router = require('koa-router')

const router = new Router({
  prefix: '/v1'
})

router.get('/', async (ctx, next) => {
  ctx.body = {
    reCode: 200,
    result: {},
    reInfo: '操作成功'
  }
})

module.exports = router
