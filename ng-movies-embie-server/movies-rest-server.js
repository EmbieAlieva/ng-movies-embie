"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Movie = /** @class */ (function () {
    function Movie(id, title, description, image, type, price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.type = type;
        this.price = price;
    }
    return Movie;
}());
var movies = [
    new Movie(0, "Doctor Who", "Doctor Who es un programa de televisión que trata de las aventuras de un misterioso hombre conocido como el Doctor. El Doctor viaja a través del espacio y el tiempo en una nave llamada TARDIS, un acrónimo de \"Time And Relative Dimension In Space (Tiempo y relativa dimensión.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTaAySjEYU_FnsYiaE5TlcRgDmEMXcmI3MUQ&usqp=CAU", "movie", 24.99),
    new Movie(1, "Sherlock", "Sherlock se ha ganado el respeto del departamento de policía y trabaja junto a ellos como una especie de freelance que les asiste en diferentes investigaciones policiales. Por otro lado, el Dr. John Watson acaba de volver de la guerra de Afganistán y gracias a un amigo común comienza a compartir piso con Sherlock. Este le invitará a la escena de un crimen y así surgen sus grandes azañas...", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyEXfa2U6QRD6ZDYtl6Oje1AOcbhlxtP79qg&usqp=CAU", "movie", 64.99)
];
function getMovies() {
    return movies;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // udpate to match the
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/movies', bodyParser.json(), function (req, res) {
    var mNew = new Movie(movies.length + 1, req.body.title, req.body.description, req.body.image, req.body.type, req.body.price);
    movies.push(mNew);
    res.status(200).send({
        id: mNew.id,
        title: mNew.title,
        description: mNew.description,
        image: mNew.image,
        type: mNew.type,
        price: mNew.price
    });
});
app.get('/', function (req, res) {
    res.send('The URL of movies is http://localhost:8000/movies');
});
app.get('/movies', function (req, res) {
    res.json(getMovies());
});
function getMoviesById(movieId) {
    var m;
    m = movies.find(function (m) { return m.id == movieId; });
    return m;
}
app.get('/movies/:id', function (req, res) {
    res.json(getMoviesById(parseInt(req.params.id)));
});
function updateMoviesById(req, movieId) {
    var m;
    m = movies.find(function (m) { return m.id == movieId; });
    var index = movies.indexOf(m);
    m.title = req.body.title;
    m.description = req.body.description,
        m.image = req.body.image,
        m.type = req.body.type,
        m.price = req.body.price;
    movies[index] = m;
    return m;
}
app.put('/movies/:id', function (req, res) {
    res.json(updateMoviesById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE reques at /user');
});
function deleteMoviesByID(movieId) {
    var m;
    m = movies.find(function (m) { return m.id == movieId; });
    var index = movies.indexOf(m);
    delete movies[index];
    return m;
}
app.delete('/movies/:id', function (req, res) {
    res.json(deleteMoviesByID(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
