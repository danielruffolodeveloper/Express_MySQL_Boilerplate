const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host            : dbConfig.database,
  port            : dbConfig.port,
  user            : dbConfig.user,
  password        : dbConfig.password,
  database        : dbConfig.database
});

module.exports = connection;