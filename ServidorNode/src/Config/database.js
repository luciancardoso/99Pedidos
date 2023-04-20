import mysql from "mysql"

// Conexão com o banco
const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    port: 3301,
    user: "root",
    password: "@du53nh4",
    database: "pedidos",
});

async function executeQuery(connection, query, parameters){
    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (err, result) => {  
            if(err) {
                return reject(err)
            } else {
                return resolve(result)
            }
        });
    });
}

export {db, executeQuery};