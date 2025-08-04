//CARRUSEL

let i = 0;

//ARREGLO DE IMÁGENES
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
  "assets/img/aclamada_18.jpg",
];

//ARREGLO DE OBJETOS CON DATOS DE LAS PELÍCULAS
let titulos = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    anio: "1972",
    elenco: "Marlon Brando, Al Pacino, James Caan...",
    genero: "Drama, Crímen",
    pais: "EE.UU",
  },
  {
    titulo: "El Señor de los Anillos - El Retorno del Rey",
    director: "Peter Jackson",
    anio: "2003",
    elenco: "Elijah Wood, Ian McKellen, Viggo Mortensen...",
    genero: "Aventura, Acción, Fantasia",
    pais: "Nueva Zelanda, EE.UU",
  },
  {
    titulo: "Más Allá del Olvido",
    director: "Hugo del Carril",
    anio: "1956",
    elenco: "Laura Hidalgo, Hugo del Carril, Gloria Ferrandiz...",
    genero: "Drama, Romance, Thriller",
    pais: "Argentina",
  },
  {
    titulo: "El viaje de Chihiro",
    director: "Hayao Miyazaki",
    anio: "2001",
    elenco: "Rumi Hiiragi, Miyu Irino, Mari Natsuki...",
    genero: "Animación, Fantasia, Familiar",
    pais: "Japón",
  },
  {
    titulo: "Cinema Paradiso",
    director: "Giuseppe Tornatore",
    anio: "1988",
    elenco: "Philippe Noiret, Salvatore Cascio, Jacques Perrin...",
    genero: "Drama, Romance",
    pais: "Italia",
  },
  {
    titulo: "GoodFellas",
    director: "Martin Scorsese",
    anio: "1990",
    elenco: "Robert De Niro, Ray Liotta, Joe Pesci...",
    genero: "Drama, Crímen",
    pais: "EE.UU",
  },
  {
    titulo: "Scarface",
    director: "Brian De Palma",
    anio: "1983",
    elenco: "Al Pacino, Michelle Pfeiffer, Steven Bauer...",
    genero: "Acción, Crímen, Drama",
    pais: "EE.UU",
  },
  {
    titulo: "Rescatando al Soldado Ryan",
    director: "Steven Spielberg",
    anio: "1998",
    elenco: "Tom Hanks, Matt Damon, Tom Sizemore...",
    genero: "Drama, Bélica, Acción",
    pais: "EE.UU",
  },
  {
    titulo: "El Laberinto del Fauno",
    director: "Guillermo del Toro",
    anio: "2006",
    elenco: "Ivana Baquero, Maribel Verdú, Doug Jones...",
    genero: "Fantasia, Drama",
    pais: "España, México",
  },
  {
    titulo: "El Secreto de sus Ojos",
    director: "Juan José Campanella",
    anio: "2009",
    elenco: "Ricardo Darín, Soledad Villamil, Guillermo Francella...",
    genero: "Misterio, Thriller, Drama",
    pais: "Argentina, España",
  },
  {
    titulo: "Parasite",
    director: "Bong Joon-ho",
    anio: "2019",
    elenco: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong...",
    genero: "Comedia, Thriller, Drama",
    pais: "Corea del Sur",
  },
  {
    titulo: "Mulholland Drive",
    director: "David Lynch",
    anio: "2001",
    elenco: "Naomi Watts, Laura Harring, Justin Theroux...",
    genero: "Thriller, Drama, Misterio",
    pais: "EE.UU",
  },
  {
    titulo: "El Caballero de la Noche",
    director: "Christopher Nolan",
    anio: "2008",
    elenco: "Christian Bale, Heath Ledger, Gary Oldman...",
    genero: "Drama, Acción, Crímen, Thriller",
    pais: "EE.UU, Reino Unido",
  },
  {
    titulo: "Gladiador",
    director: "Ridley Scott",
    anio: "2000",
    elenco: "Russell Crowe, Joaquin Phoenix, Connie Nielsen...",
    genero: "Acción, Drama, Aventura",
    pais: "Reino Unico, EE.UU",
  },
  {
    titulo: "El Exorcista",
    director: "William Friedkin",
    anio: "1973",
    elenco: "Jason Miller, Ellen Burstyn, Linda Blair...",
    genero: "Horror, Thriller, Drama",
    pais: "EE.UU",
  },
  {
    titulo: "Alien - El Octavo Pasajero",
    director: "Ridley Scott",
    anio: "1979",
    elenco: "Sigourney Weaver, Ian Holm, John Hurt...",
    genero: "Ciencia Ficción, Horror",
    pais: "EE.UU, Reino Unido",
  },
  {
    titulo: "Titanic",
    director: "James Cameron",
    anio: "1997",
    elenco: "Leonardo DiCaprio, Kate Winslet, Billy Zane...",
    genero: "Drama, Romance",
    pais: "EE.UU",
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anio: "1994",
    elenco: "John Travolta, Samuel L. Jackson, Uma Thurman..",
    genero: "Thriller, Crímen",
    pais: "EE.UU",
  },
  {
    titulo: "La Tumba de las Luciernagas",
    director: "Isao Takahata",
    anio: "1988",
    elenco: "Tsutomu Tatsumi, Ayano Shiraishi, Yoshiko Shinohara...",
    genero: "Animación, Drama, Bélica",
    pais: "Japón",
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
    <p><b>GÉNERO: </b>${titulos[i].genero}</p>
    <p><b>PAÍS: </b>${titulos[i].pais}</p>`;
}

//función del botón anterior
function anterior() {
  if (i > 0) {
    i--;
  } else {
    i = imagenes.length - 1;
  }
  cambiarImagen();
}

//función del botón siguiente
function siguiente() {
  if (i < imagenes.length - 1) {
    i++;
  } else {
    i = 0;
  }
  cambiarImagen();
}
