
// 导入success fail函数
const {success,fail} = require('../../utils/response')
const {userInfo} = require('../../../database/index')
const {createToken} = require('../../service/jwt')
function login(ctx) {
    
        // 查询参数从 ctx.request.query
        // body参数从 ctx.request.body
        // ctx.body = success({
        //     body: ctx.request.body
        // }) 
        const {username,password} = ctx.request.body
        const {username: duser,password:dpass} = userInfo.idwjx
        // const duser = userInfo.idwjx.username
        // const dpass = userInfo.idwjx.password
    
        if(username === duser && password===dpass) {
            // 生成token
            const token = createToken({username,password})
            ctx.body = success({ token })
        } else {
            ctx.body = fail('用户名或密码错误')
        }
    
    
}
module.exports = login