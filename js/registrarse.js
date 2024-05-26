/* function ocultar(){
    document.getElementById("oculto").style.display = "none";
} */

//Mis datos
let f_nombre = document.getElementById("nombre");
let nombre = f_nombre.value.trim();
let f_apellido = document.getElementById("apellido");
let apellido = f_apellido.value.trim();
let f_mail = document.getElementById("email");
let email = f_mail.value.trim();
let f_contra = document.getElementById("password");
let contra = f_contra.value.trim();
let f_pais = document.getElementById("pais");
let pais = f_pais.value;
let f_fecha = document.getElementById("fechaNacimiento");
let fecha = f_fecha.value;
let f_tyc = document.getElementById("terminos");
let tyc = f_tyc.Checked;//True o false
let errores = [];
let campo_error = null;

//Expresiones regulares
const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

function validateForm() {
    let sesion = document.getElementById("seccionOculta");
    sesion.style.display = "inline";


}

/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Hola Mundo";

document.getElementById("").appendChild(parrafo); */