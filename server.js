const express = require('express');
const cors = require('cors');
const app = express();

// Puerto para subir el servidor
const serverPort = 8001;

// Setea las rutas de la API
const routes = {
	products: {
		get: '/api/products'
	}
};

// Uso de Cors para aceptar solicitudes de otros dominios
app.use(cors());

// Registra la ruta GET por defecto, enviando el JSON como retorno
app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/data/products.json');
});

app.use('*', function (req, res) {
    res.redirect(routes.products.get);
});

// Inicia el servidor y se informa al usuario
app.listen(serverPort);
console.log(`[products] API escuchando el puerto ${serverPort}.`);