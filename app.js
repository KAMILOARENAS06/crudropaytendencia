const express = require('express'),
    app = express();


//Definiendo Motod de Plantillas EJS
app.set('view engine', 'ejs')

//CAPTURA DE LOS DATOS DEL FRONT
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Importanto el enrutador
app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('Server Corriendo en el http://localhost:5000')
})

