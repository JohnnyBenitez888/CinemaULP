/* function ocultar(){
    document.getElementById("oculto").style.display = "none";
} */



//Expresiones regulares
const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

function validateForm() {
    /* let sesion = document.getElementById("seccionOculta");
    sesion.style.display = "inline"; */
    //Mis datos
    let ltaErrores = document.getElementById("listaOculta");
    let pSaludo = document.getElementById("saludo");
    let btn = document.getElementById("btnRegistro");


    let f_nombre = document.getElementById("f_nombre");
    let nombre = f_nombre.value.trim();
    let f_apellido = document.getElementById("f_apellido");
    let apellido = f_apellido.value.trim();
    let f_email = document.getElementById("f_email");
    let email = f_email.value.trim();
    let f_password = document.getElementById("f_password");
    let password = f_password.value.trim();
    let f_pais = document.getElementById("f_pais");
    let pais = f_pais.value;
    let f_fecha = document.getElementById("f_fecha");
    let fecha = f_fecha.value;
    let f_tyc = document.getElementById("f_terminos");
    let tyc = f_tyc.Checked;//True o false
    let errores = [];
    let campo_error = null;

    let forma = document.getElementById("forma");

    ltaErrores.innerHTML = "";

    for (e of forma.querySelectorAll("input,select,div")) {
        e.classList.remove("error");
    }

    if (nombre == "") {
        errores.push("Falta el nombre");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }
    if (apellido == "") {
        errores.push("Falta el apellido");
        campo_error = f_apellido;
        f_apellido.classList.add("error");
    }
    if (email == "" && (!isEmail(email))) {
        errores.push("Email no válido");
        campo_error = f_email;
        f_email.classList.add("error");
    }
    if (password == "") {
        errores.push("Falta la contraseña");
        campo_error = f_password;
        f_password.classList.add("error");
    }
    if (pais == "") {
        errores.push("Falta el país");
        campo_error = f_pais;
        f_pais.classList.add("error");
    }
    if (!tyc) {
        errores.push("Debe aceptar los términos y condiciones");
        campo_error = f_tyc;
        f_tyc.parentNode.classList.add("error");
    }



    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            ltaErrores.appendChild(li);
        }
        if (campo_error != null) {
            campo_error.focus();
        }
        return false;
    }

    let mje = `Bienvenido ${nombre} ${apellido} a Cinema ULP`;
    pSaludo.innerHTML = mje;

    return false;
}

/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Hola Mundo";

document.getElementById("").appendChild(parrafo); */