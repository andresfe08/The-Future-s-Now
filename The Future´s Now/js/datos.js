function cargarJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/Proyectos/The%20Future´s%20Now/json/data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var datos = JSON.parse(xhr.responseText);
            mostrarDatos(datos);
        }
    };
    xhr.send();
}

function mostrarDatos(datos) {
    var salida = "";
    for (var i = 0; i < datos.length; i++) {
        salida += "<article class='" + datos[i].seccion + "'><a href=''><div class='seccion-info'>";
        salida += "<img src='" + datos[i].imagen + "'>";
        salida += "<div class='text'>"
        salida += "<h2>" + datos[i].titulo + "</h2>";
        salida += "<h3>" + datos[i].subtitulo + "</h3>";
        salida += "</div>"
        salida += "</div></a></article>";
    }
    document.getElementById("contenido").innerHTML = salida;
}

window.onload = cargarJSON;