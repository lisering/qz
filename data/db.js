const mysql = require('mysql');

//创建数据库链接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'state'
});
//链接数据库
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('数据库链接成功!');
});

module.exports = db;