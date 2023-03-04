const {createHash} = require('crypto')
function getSha1(str) {
    const hashUtil = createHash('sha256')
    hashUtil.update(str)    // 用sha256进行加密
    return hashUtil.digest('hex')  
}

module.exports = {
    getSha1
}