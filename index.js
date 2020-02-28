// CREAR SERVIDOR
const express = require('express');
const app = express();

// CONFIGURAR SERVIDOR

// Ejecutamos la función flecha cuando la app recibe una petición GET sobre la URL raíz
// GET http://localhost:3000
app.get('/', (req, res) => {
    res.send('Petición GET sobre localhost:3000');
});

// GET http://localhost:3000/json
// Crear la ruta para que se pueda entrar con esta ruta a nuestra aplicación y devuelva lo que haga la función
app.get('/json', (req, res) => {
    const personas = [
        { nombre: 'Antxon', apellido: 'Eguiguren' },
        { nombre: 'Julia', apellidos: 'Besada' }
    ];
    res.json(personas);
});

// POST http://localhost:3000/peticion/post
app.post('/peticion/post', (req, res) => {
    res.send('Respuesta de la petición POST');
});

// PATCH http://localhost:3000/about/editar
app.patch('/about/editar', (req, res) => {
    res.send('Respuesta al PATCH');
});

// PONER SERVIDOR A ESCUCHAR
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});