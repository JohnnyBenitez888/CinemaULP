//CARRUSEL

let i = 0;
let imagenes = [
    "assets/img/aclamada_1.jpg",
    "assets/img/aclamada_2.jpg",
    "assets/img/aclamada_0.jpg",
    "assets/img/aclamada_3.jpg",
    "assets/img/aclamada_4.jpg",
    "assets/img/aclamada_5.jpg",
    "assets/img/aclamada_6.jpg",
    "assets/img/aclamada_7.jpg",
    "assets/img/aclamada_8.jpg",
    "assets/img/aclamada_9.jpg",
    "assets/img/aclamada_10.jpg",
    "assets/img/aclamada_11.jpg",
    "assets/img/aclamada_12.jpg",
    "assets/img/aclamada_13.jpg",
    "assets/img/aclamada_14.jpg",
    "assets/img/aclamada_15.jpg",
    "assets/img/aclamada_16.jpg",
    "assets/img/aclamada_17.jpg",
    "assets/img/aclamada_18.jpg",];

let titulos = [
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan...",
        genero: "Drama, Crímen"
    },
    {
        titulo: "El Señor de los Anillos - El Retorno del Rey",
        director: "Peter Jackson",
        anio: "2003",
        elenco: "Elijah Wood, Ian McKellen, Viggo Mortensen...",
        genero: "Aventura, Acción, Fantasia"
    },
    {
        titulo: "Más Allá del Olvido",
        director: "Hugo del Carril",
        anio: "1956",
        elenco: "Laura Hidalgo, Hugo del Carril, Gloria Ferrandiz",
        genero: "Drama, Romance, Thriller"
    },
    {
        titulo: "El viaje de Chihiro",
        director: "Hayao Miyazaki",
        anio: "2001",
        elenco: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
        genero: "Animación, Fantasia, Familiar"
    },
    {
        titulo: "Cinema Paradiso",
        director: "Giuseppe Tornatore",
        anio: "1988",
        elenco: "Philippe Noiret, Salvatore Cascio, Jacques Perrin",
        genero: "Drama, Romance"
    },
    {
        titulo: "GoodFellas",
        director: "Martin Scorsese",
        anio: "1990",
        elenco: "Robert De Niro, Ray Liotta, Joe Pesci",
        genero: "Drama, Crímen"
    },
    {
        titulo: "Scarface",
        director: "Brian De Palma",
        anio: "1983",
        elenco: "Al Pacino, Michelle Pfeiffer, Steven Bauer",
        genero: "Acción, Crímen, Drama"
    },
    {
        titulo: "Rescatando al Soldado Ryan",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "El Laberinto del Fauno",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "El Secreto de sus Ojos",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Parasite",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Mulholland Drive",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "El Caballero de la Noche",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Gladiador",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "El Exorcista",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Alien - El Octavo Pasajero",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Titanic",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Pulp Fiction",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "La Tumba de las Luciernagas",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
];

function cambiarImagen() {
    let img = document.getElementById("img-aclamada");
    img.src = imagenes[i];
    let info = document.getElementById("titulo-text");
    info.innerHTML = `<p><b>TÍTULO: </b>${titulos[i].titulo}</p>
    <p><b>DIRECTOR: </b>${titulos[i].director}</p>
    <p><b>AÑO: </b>${titulos[i].anio}</p>
    <p><b>ELENCO: </b>${titulos[i].elenco}</p>
    <p><b>GÉNERO: </b>${titulos[i].genero}</p>`;
}


function anterior() {
    if (i > 0) {
        i--;
    } else {
        i = imagenes.length - 1;
    }
    cambiarImagen();
}

function siguiente() {
    if (i < imagenes.length - 1) {
        i++;
    } else {
        i = 0;
    }
    cambiarImagen();
}

