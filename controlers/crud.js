const con = require('../database/db.js');


//INSERTAR DATOS
exports.save = (req, res) =>{
    const nombre = req.body.user,
        td = req.body.td,
        documento = req.body.documento,
        contacto = req.body.contacto,
        direccion = req.body.direccion,
        email = req.body.email,
        password = req.body.password

    //console.log(nombre, td, documento, contacto, direccion, email, password)

    con.query('INSERT INTO ropaytendencia_db.usuario SET ?', 
        {NOMBRE_USUARIO:nombre, TIPO_IDENTIFICACION:td, NUMERO_IDENTIFICACION:documento, NUMERO_CONTACTO:contacto, 
            DIRECCION:direccion, CORREO_ELECTRONICO:email, CONTRASENA:password}, (error, results) =>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/')
            }
    })
}


//ACTUALIZAR DATOS
exports.update = (req, res) =>{
    const id = req.body.id,
        nombre = req.body.user,
        td = req.body.td,
        documento = req.body.documento,
        contacto = req.body.contacto,
        direccion = req.body.direccion,
        email = req.body.email,
        password = req.body.password

    console.log(id, nombre, td, documento, contacto, direccion, email, password)

    con.query('UPDATE ropaytendencia_db.usuario SET ? WHERE ID_USUARIO = ?;', [{NOMBRE_USUARIO:nombre, TIPO_IDENTIFICACION:td, 
        NUMERO_IDENTIFICACION:documento, NUMERO_CONTACTO:contacto, DIRECCION:direccion, CORREO_ELECTRONICO:email, 
        CONTRASENA:password}, id]),
        (error, results) => {
            if(error){
                console.log(error)
            }else{
                res.redirect('https://www.google.com')
            }
        }
}
