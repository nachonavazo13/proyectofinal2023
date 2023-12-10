

function validar() {
    let nom = document.getElementById("nom");
    let tel = document.getElementById("tel");
    let msn = document.getElementById("msn");
    let error = false;
    document.getElementById("validar_nom").innerHTML ="&nbsp;";
    document.getElementById("validar_tel").innerHTML = "&nbsp;";
    document.getElementById("validar_msn").innerHTML = "&nbsp;";

    if (nom.value === "") {
        document.getElementById("validar_nom").innerHTML = "Debe completar campo obligatorio";
        error = true;
        clave.focus();
    }


    if (tel.value.length < 9 || tel.value.length > 9) {
        document.getElementById("validar_tel").innerHTML = "Son 9 digitos que debe ingresar";
        error = true;
        clave.focus();

    }

    if (msn.value <= 0) {
        document.getElementById("validar_msn").innerHTML = "Completar campo obligatorio";
        error = true;
        clave.focus();

    }

    if (error == false) {
        document.getElementById("nom").value = ""
        document.getElementById("validar_nom").innerHTML = "&nbsp;";
        document.getElementById("tel").value = ""
        document.getElementById("validar_tel").innerHTML = "&nbsp;";
        document.getElementById("msn").value = ""
        document.getElementById("validar_msn").innerHTML = "&nbsp;";
        alert('Datos enviados')
    }
    return !error

}


