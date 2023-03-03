const {fail} = require('../utils/response')
const {verifyToken} = require('../service/jwt')
const WhiteList = [
    'api/login',
    '/',
    'download'
]

async function jwtMiddle(ctx,next) {
    
    const url = ctx.request.url.split('?')[0]
    console.log(url)
    if(WhiteList.includes(url)) {
        await next();
    }  else {
        // TODO: 验证token是否合法
        if (verifyToken(ctx.request.header.token)) {
            await next();
        } else {
            ctx.body = fail('token失效，请重新获取 ')
        }
    }
    // console.log(ctx.request.header)
    
    //TODO:逻辑
    
}

module.exports = {
    jwtMiddle
}