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
        genero: ""
    },
    {
        titulo: "El Señor de los Anillos - El Retorno del Rey",
        director: "Peter Jackson",
        anio: "2003",
        elenco: "Elijah Wood, Ian McKellen, Viggo Mortensen...",
        genero: ""
    },
    {
        titulo: "Más Allá del Olvido",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "El viaje de Chihiro",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Cinema Paradiso",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "GoodFellas",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
    },
    {
        titulo: "Scarface",
        director: "Francis Ford Coppola",
        anio: "1972",
        elenco: "Marlon Brando, Al Pacino, James Caan",
        genero: ""
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
    <p><b>ELENCO: </b>${titulos[i].elenco}</p>`;
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

