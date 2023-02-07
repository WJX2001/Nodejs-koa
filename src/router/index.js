const koaRouter = require('koa-router')
const loginCtrl = require('../controller/login/index')
const uploadCtrl = require('../controller/upload/index')
const router = new koaRouter({
        // 取出api前缀
        prefix: '/api'
});


// 写路由规则  这边写什么 客户端需要以这种方式请求
router.post('/login',loginCtrl)

// 上传文件
router.post('/upload',uploadCtrl)


module.exports = {
    router
}


