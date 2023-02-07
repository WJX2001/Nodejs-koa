// 如果是类或者构造函数，首字母大写
const Koa = require('koa')
const KoaMount = require('koa-mount')
const KoaStatic = require('koa-static')
const {koaBody} = require('koa-body')
const path = require('path')
const KoaCors = require('@koa/cors')

const {router} = require('./src/router/index')


const STATIC_FILE_URL = path.join(__dirname,'./static')
const DOWNLOAD_URL = 'http://localhost:3000/download'

// 创建koa应用
const app = new Koa();

// 文件
const middleStaic = KoaStatic('./static', {
    setHeaders: function (resp) {
        // 设置http响应报文，key-value,报文的数据保存为附件
        resp.setHeader('content-disposition', 'attachment')
    }
})

// 网站
const mainStaic = KoaStatic('./website')



// 跨域问题
app.use(KoaCors())

// 1.开发一个静态文件服务器
app.use(KoaMount('/download', middleStaic))
app.use(mainStaic)
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: STATIC_FILE_URL  // 设置上传文件存放的位置
    }
}))
// koa-router接管路由
app.use(router.routes())
   .use(router.allowedMethods())




// 支持查询参数
// 支持body[form-data;x-www-urlencode;json;plain]
// app.use(async (ctx,next) => {
//     console.log(ctx.request.files.upload.newFilename)
//     ctx.body = {
//         method: ctx.request.method,
//         url:ctx.request.url,
//         param: ctx.request.query,
//         body: ctx.request.body,
//         fileUrl : `${ DOWNLOAD_URL}/${ctx.request.files.upload.newFilename}`

//     }
// })

 











// app.use(async(ctx,next) => {
//     console.log('1')
//     await next()
//     console.log('2')
// })

// app.use(async(ctx,next) => {
//     console.log('3')
//     await next()
//     console.log('4')
// })
// app.use(async(ctx,next) => {
//     console.log('5')
//     await next()
//     console.log('6')
// })

// 处理请求和响应
// 中间件函数

// const midldlefn = (ctx) => {
//     ctx.body = 'Hello World';
// }

// app.use(midldlefn)

// 官方写法
// app.use(async ctx => {
//     ctx.body = 'Hello World';
//   });

// 启动服务器，监听端口
app.listen(3000, 'localhost', () => {
    console.log('server is listening on http://localhost:3000')

})