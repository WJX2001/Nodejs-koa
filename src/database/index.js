const Mysql = require('mysql2/promise');

let connection = null

async function query(sql) {

    // 确保就连接一次
    if(!connection) {
        connection = await Mysql.createConnection({
            host: '121.5.160.216',
            user: 'root',
            database: 'user',
            password: '123456'
          });
    } 
    

    //   const result = await connection.ping();
    //   console.log(result)
    const result = await connection.execute(sql)
    return result
      
}
// query('select * from grade').then(data => {
//     console.log(data)
// })
// query()

module.exports = {
    query,
    escape: Mysql.escape
    
}

