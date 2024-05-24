//CARRUSEL

let i = 0;
let imagenes = [
    "assets/img/aclamada_1.jpg",
 "assets/img/aclamada_2.jpg", 
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

 function cambiarImagen(){
    let img = document.getElementById("img-aclamada");
    img.src = imagenes[i];
 }

 function anterior(){
    if(i>0){
        i--;
    }else{
        i = imagenes.length - 1;
    }
    cambiarImagen();
 }

 function siguiente(){
    if(i<imagenes.length -1){
        i++;
    }else{
        i = 0;
    }
    cambiarImagen();
 }

 