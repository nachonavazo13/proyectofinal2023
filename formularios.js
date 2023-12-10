

function validar() {
    let nom = document.getElementById("nombre");
    // let clave = document.getElementById("clave");
    let tel = document.getElementById("telefono");
    let msn = document.getElementById("mensaje_texto");
    let error = false;
    document.getElementById("validar_nombre").innerHTML = "&nbsp;";
    // document.getElementById("validar_clave").innerHTML = "&nbsp;";
    document.getElementById("validar_telefono").innerHTML = "&nbsp;";
    document.getElementById("validar_mensaje_texto").innerHTML = "&nbsp;";

    if (nom.value === "") {
        document.getElementById("validar_nombre").innerHTML = "Debe completar campo obligatorio";
        error = true;
        nom.focus();
    }

    // if (clave.value.length < 8 || clave.value.length > 8) {
    //     document.getElementById("validar_clave").innerHTML = "Debe completar el campo con 8 digitos";
    //     error = true;
    //     clave.focus();
    // }

    if (tel.value.length < 9 || tel.value.length > 9) {
        document.getElementById("validar_telefono").innerHTML = "Son 9 digitos que debe ingresar";
        error = true;
        tel.focus();

    }

    if (msn.value <= 0) {
        document.getElementById("validar_mensaje_texto").innerHTML = "Completar campo obligatorio";
        error = true;
        msn.focus();

    }

    if (error == false) {
        document.getElementById("nombre").value = ""
        document.getElementById("validar_nombre").innerHTML = "&nbsp;";
        // document.getElementById("clave").value = ""
        // document.getElementById("validar_clave").innerHTML = "&nbsp;";
        document.getElementById("telefono").value = ""
        document.getElementById("validar_telefono").innerHTML = "&nbsp;";
        document.getElementById("mensaje_texto").value = ""
        document.getElementById("validar_mensaje_texto").innerHTML = "&nbsp;";
        alert('Datos enviados')
    }
    return !error

}


