const {createToken,verifyToken} = require("./jwt.js")

const token = createToken({name:'wjx'})
console.log(token)


// const decode = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2p4IiwiZXhwIjoxNjc3OTM0MTE5LCJpYXQiOjE2Nzc4NDc3MTl9.yitBCFFHQoWJ3fvNI8M8DREEUcovHizGdoqhONopkhQ')

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2p4IiwiZXhwIjoxNjc4MDkzNTI4LCJpYXQiOjE2NzgwMDcxMjh9.JTlaoL9dovQXl1qx9vxdmBDqwsULeaMKZdJ8e0_KgXM


// if(!decode) {
//     console.log(decode)
// }







