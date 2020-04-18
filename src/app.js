const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// importar rutas
const customerRoutes = require('./routes/customer');

// configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares (Son funciones que se ejecutan antes de que vengan las peticiones de los usuarios)
app.use(morgan('dev')); // muestra mensajes por consola
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dbnode'
}, 'single'));

// rutas
app.use('/', customerRoutes);

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () =>{
console.log('Server on port 3000');
})