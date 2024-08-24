//Creando conexion a la BD
const mysql = require('mysql'),
    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'ropaytendencia_db'
    });
    
con.connect((err) => {
    if(err){
        console.error(`Error en la conexión con la base de datos: ${err}`);
        return
    }
    console.log('Conexión a la BD con Éxito')
});

module.exports = con;