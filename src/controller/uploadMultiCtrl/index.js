const { success } = require('../../utils/response')

function uploadMultiCtrl(ctx) {
    // console.log(ctx.request.files.file.newFilename)
    // console.log(ctx.request.files)

    const result = []
    Object.keys(ctx.request.files).forEach(key =>{
        result.push(`http://localhost:3000/download/${ctx.request.files[key].newFilename}`) 
    })
    
    ctx.body = success({urls:result})
    // console.log(netUrl)
    
}

module.exports = uploadMultiCtrl