
/**
 * token结构
 * header.payload.signature
 * header: 给算法
 * payload: 用户自定义数据
 * signature: header.alg(header + payload + secret)
 */
// token create
// token 是有时限的
const Jwt = require('jsonwebtoken')
const Secret_Key = '1234sddas'

function createToken(payload) {
    const token = Jwt.sign({...payload,/* token有效期 */ exp: Math.floor(Date.now() / 1000) + (60 * 60*24)},Secret_Key)
    return token
}



// verify token 
function verifyToken(token) {
    try{
        const tokenData = Jwt.verify(token,Secret_Key)
        return tokenData
    } catch(err) {
        console.log(err)
        return false
    } 
} 

// 验证失败  token 刷新





module.exports = {
    createToken,
    verifyToken
}