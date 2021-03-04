var mysql = require('mysql');
const db = mysql.createPool({
    host : '211.231.136.182',
    user : 'root',
    password : 'dk',
    database : 'local'
    
});

module.exports = db;