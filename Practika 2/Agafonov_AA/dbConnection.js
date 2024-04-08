const mysql = require("mysql2");

const db_connection = mysql

    .createConnection({
        host: "localhost", // имя хоста
        user: "root", // имя пользователя
        database: "agafonov_pe11b", // имя базы данных
        password: "", // пароль от базы данных
    })

    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;