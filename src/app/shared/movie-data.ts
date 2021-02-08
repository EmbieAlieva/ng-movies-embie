import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MovieData implements InMemoryDbService {

  createDb() {
    let movies = [
      {
        "id": 0,
        "title": "Doctor Who",
        "description": "Doctor Who es un programa de televisión que trata de las aventuras de un misterioso hombre conocido como el Doctor. El Doctor viaja a través del espacio y el tiempo en una nave llamada TARDIS, un acrónimo de \"Time And Relative Dimension In Space (Tiempo y relativa dimensión.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTaAySjEYU_FnsYiaE5TlcRgDmEMXcmI3MUQ&usqp=CAU",
        "type": "movie",
        "price": 24.99
      },
      {
        "id": 1,
        "title": "Sherlock",
        "description": "Sherlock se ha ganado el respeto del departamento de policía y trabaja junto a ellos como una especie de freelance que les asiste en diferentes investigaciones policiales. Por otro lado, el Dr. John Watson acaba de volver de la guerra de Afganistán y gracias a un amigo común comienza a compartir piso con Sherlock. Este le invitará a la escena de un crimen y así surgen sus grandes azañas...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyEXfa2U6QRD6ZDYtl6Oje1AOcbhlxtP79qg&usqp=CAU",
        "type": "movie",
        "price": 64.99
      },
      {
        "id": 2,
        "title": "Los Originales",
        "description": "The Originals es un spin off de Crónicas Vampíricas, exitosa serie basada en las novelas homónimas de la escritora L.J. Smith. Está centrada en los vampiros originales y tiene como principal protagonista a Klaus Mikaelson (Joseph Morgan, Crónicas vampíricas, Immortals). La historia comienza cuando Klaus tiene que irse de Mystic Falls para volver al barrio francés de Nueva Orleans, crisol sobrenatural, que él ayudó a construir siglos atrás. Es allí donde se reúne con su antiguo y diabólico pupilo Marcel.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3ykNqi-ET8JLrI0yAEpLuwf7eKPSsjsM_CA&usqp=CAU",
        "type": "serie",
        "price": 74.99
      },
      {
        "id": 3,
        "title": "El Guardespaldas",
        "description": "Frank Farmer es un guardaespaldas que no deja nada al azar y que jamás se ha permitido involucrarse emocionalmente con un cliente. Hasta que le encargan proteger a la cantante Rachel Marron y todo su autocontrol se tambalea.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilCPUN_OdrVDEscBqeRWHrZp0DgPz3LaRkQ&usqp=CAU",
        "type": "movie",
        "price": 84.99
      },
      {
        "id": 4,
        "title": "Grimm",
        "description": "Grimm Serie de televisión protagonizada por David Guintoli. Fantasía y misterio se entrelazan con un toque de intriga policial, que se desarrolla en el mundo actual pero en el cual los personajes de los Hermanos Grimms cobran vida..",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4EU2ETDHmH_SimaPdKnIKMneWrOQb8Wj2aw&usqp=CAU",
        "type": "serie",
        "price": 94.99
      },
      {
        "id": 5,
        "title": "Múltiple",
        "description": "Debido a un trauma de la infancia temprana, Kevin (James McAvoy) sufre trastorno de identidad disociativo (DID), más comúnmente conocido como trastorno de personalidad múltiple. Dentro de él conviven 23 identidades diferentes. El problema surge cuando algunas de las personalidades más problemáticas dentro de Kevin urden un plan con un propósito misterioso y nefasto.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUP9XHFcSDHqrU-ZUOyACArp1wCMUW_hVHzg&usqp=CAUe",
        "type": "película",
        "price": 54.99
      }
    ];
    return { movies: movies };
  }
}
