var mysql = require('mysql');
const db = mysql.createPool({
    connectionLimit: 50,
    //기본10초 connectTimeout 
    host : '211.231.136.182',
    user : 'root',
    password : 'dk',
    database : 'local'
});

module.exports = db;