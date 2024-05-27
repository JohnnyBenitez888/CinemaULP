
//Expresiones regulares
const nombreApellido =  /^[a-zA-ZÀ-ÿ\s]{1,30}$/;
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;// Al menos 8 caracteres, una letra y un número


function validateForm() {
    //hacer aparecer mi seccion oculta
    let pantalla = document.getElementById("seccionOculta");
    pantalla.classList.remove('hidden');
    

    //Mis datos
    let ltaErrores = document.getElementById("listaOculta");
    let pSaludo = document.getElementById("saludo");
    let tituloh2 = document.getElementById("tituloh2");
    let btn = document.getElementById("btnOculto");

    //datos del form
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
    let tyc = f_tyc.checked;//True o false
    let errores = [];
    let campo_error = null;

    let forma = document.getElementById("seccionRegistrarse");

    ltaErrores.innerHTML = "";

    for (e of forma.querySelectorAll("input,select,div")) {
        e.classList.remove("error");
    }

    if (!nombreApellido.test(nombre)) {
        errores.push("El nombre debe tener entre 1 y 30 caracteres y solo puede contener letras y espacios.");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }
    if (!nombreApellido.test(apellido)) {
        errores.push("El apellido debe tener entre 1 y 30 caracteres y solo puede contener letras y espacios.");
        campo_error = f_apellido;
        f_apellido.classList.add("error");
    }
    if (!isEmail.test(email)) {
        errores.push("Email no válido");
        campo_error = f_email;
        f_email.classList.add("error");
    }
    if (!pass.test(password)) {
        errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.");
        campo_error = f_password;
        f_password.classList.add("error");
    }
    if (fecha == "") {
        errores.push("Falta la Fecha de Nacimiento");
        campo_error = f_fecha;
        f_fecha.classList.add("error");
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

    
    let titulo = "Bienvenido a Cinema ULP";
    tituloh2.innerHTML = titulo;
    let mje = `${nombre} ${apellido} ya sos parte de Cinema ULP, la proxima vez ingresa con tu email y contraseña que proporcionaste.`;
    pSaludo.innerHTML = mje;

    //Creamos un parrafo
    let p1 = document.createElement("p");
    p1.innerHTML = `Tu email es: ${email}`;
    p1.classList.add("saludo");
    pantalla.appendChild(p1);

    //creamos la imagen
    let img = document.createElement("img");
    img.classList.add("gif");
    img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExendscnJreXU3b3I4dDUyMmRiOG90eHVlYWRlbTQwNzI1cm52OHRvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vpeyWA3OWOhG/giphy.gif";
    pantalla.appendChild(img);

    //aparece el boton
    btn.classList.add("boton");
    btn.innerHTML = "Ir a la página principal";
    pantalla.appendChild(btn);
    
    //ocultar el form pero no funciona
    /* let pantalla2 = document.getElementById("seccionRegistrarse");
    pantalla2.style.display = none; */
    return false;
}

//funcion para el segundo boton que redirecciona a la pagina principal
function boton() {
    window.location.href = '../index.html';
}
