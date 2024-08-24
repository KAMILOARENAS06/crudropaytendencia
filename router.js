const express = require('express'),
    con = require('./database/db'),
    router = express.Router();

//OBTENER LOS REGISTROS DE LA BD
router.get('/', (req, res) => {

    con.query("SELECT * FROM ropaytendencia_db.usuario;", (error, results) =>{
        if(error){
            throw error
        }else{
            res.render('index', {results})
        }
    })
})

//CREAR REGISTROS EN LA BD
router.get('/create', (req, res) => {

    res.render('create')
})

//EDITAR REGISTROS EN LA BD
router.get('/edit/:id', (req, res) =>{

    const id = req.params.id
    con.query('SELECT * FROM ropaytendencia_db.usuario WHERE ID_USUARIO = ?;', [id], (error, results) =>{
        if(error){
            throw error
        }else{
            res.render('edit', {el: results[0]})
        }
    })
})

//ELIMINAR REGISTROS DE LA BD
router.get('/delete/:id', (req, res) => {

    const id = req.params.id
    con.query('DELETE FROM ropaytendencia_db.usuario WHERE ID_USUARIO = ?;', [id], (error, results) =>{
        if(error){
            throw error
        }else{
            res.redirect('/');
        }
    })
})

//INVOCANDO MÉTODOS PARA EL CRUD
const crud = require('./controlers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports = router;