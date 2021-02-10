var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Movie {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public image: string,
        public type: string,
        public price: number,
    ) { }
}

const movies: Movie[] = [
    new Movie(
        0, 
        "Doctor Who",
        "Doctor Who es un programa de televisión que trata de las aventuras de un misterioso hombre conocido como el Doctor. El Doctor viaja a través del espacio y el tiempo en una nave llamada TARDIS, un acrónimo de \"Time And Relative Dimension In Space (Tiempo y relativa dimensión.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTaAySjEYU_FnsYiaE5TlcRgDmEMXcmI3MUQ&usqp=CAU",
        "movie", 24.99
    ),
   new Movie(
       1,
        "Sherlock",
        "Sherlock se ha ganado el respeto del departamento de policía y trabaja junto a ellos como una especie de freelance que les asiste en diferentes investigaciones policiales. Por otro lado, el Dr. John Watson acaba de volver de la guerra de Afganistán y gracias a un amigo común comienza a compartir piso con Sherlock. Este le invitará a la escena de un crimen y así surgen sus grandes azañas...",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyEXfa2U6QRD6ZDYtl6Oje1AOcbhlxtP79qg&usqp=CAU",
        "movie",
        64.99
    )
]


function getMovies(): any[] {
    return movies;
}

app.use(function (req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // udpate to match the
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(
    bodyParser.urlencoded({ extended:true })   
)

app.use(bodyParser.json())

app.post('/movies', bodyParser.json(), (req: any, res: any) => {
    let mNew = new Movie(
        movies.length + 1,
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.type,
        req.body.price
    );
    movies.push(mNew);
    res.status(200).send({
        id: mNew.id,
        title: mNew.title,
        description: mNew.description,
        image: mNew.image,
        type: mNew.type,
        price: mNew.price
    });
})

app.get('/', (req: any, res: any) => {
    res.send('The URL of movies is http://localhost:8000/movies');
});

app.get('/movies', (req: any, res: any) => {
    res.json(getMovies());
});

function getMoviesById(movieId: number): any {
    let m: any;
    m = movies.find(m => m.id == movieId);
    return m;
} 

app.get('/movies/:id', (req: any, res:any) => {
    res.json(getMoviesById(parseInt(req.params.id)));
});

function updateMoviesById(req: any, movieId: number): any {
    let m : any;
    m = movies.find(m => m.id == movieId);
    let index = movies.indexOf(m);

    m.title = req.body.title;
    m.description = req.body.description,
    m.image = req.body.image,
    m.type = req.body.type,
    m.price = req.body.price
    
    movies[index] = m;
    return m;
}

app.put('/movies/:id', function (req: any, res: any) {
    res.json(updateMoviesById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE reques at /user');
});

function deleteMoviesByID(movieId: number): any {
    let m: any;
    m = movies.find(m => m.id == movieId);
    let index = movies.indexOf(m);
    delete movies[index];
    return m;
}

app.delete('/movies/:id', function (req: any, res: any) {
    res.json(deleteMoviesByID(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});

const server = app.listen(8000, "localhost", () => {
    const { address, port } = server.address();

    console.log('Listening on %s %s',address, port); 
});
