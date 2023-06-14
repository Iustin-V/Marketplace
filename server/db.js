const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "marketplace1",
  port: 3306,
});

module.exports = db;
