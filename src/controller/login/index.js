
// 导入success fail函数
const {success,fail} = require('../../utils/response')

const {createToken} = require('../../service/jwt')
const {valid} = require('../../service/user')
async function login(ctx) {
    
        // 查询参数从 ctx.request.query
        // body参数从 ctx.request.body
        // ctx.body = success({
        //     body: ctx.request.body
        // }) 
        const {email,password} = ctx.request.body
        const isValid = await valid({email,password})
        if(isValid) {
            // 生成token
            const token = createToken({email,password})
            ctx.body = success({ token })
        } else {
            ctx.body = fail('用户名或密码错误')
        }
    
    
}
module.exports = login