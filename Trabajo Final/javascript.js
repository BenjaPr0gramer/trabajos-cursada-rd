let edad = prompt("Ingrese su edad");
if (edad >= 18) {
    alert("Bienvenido a PowerPC")
} else {
    alert("Advertencia va salir del sitio")
    window.location.href = "https://www.google.com.ar";
}
/* Intento de boton para ejecutar la función
function envioGratis(){
    let ubicacion = document.getElementById.toString("location");
    switch (ubicacion) {
        case "san nicolas":
            alert("Tienes envio gratis");
            break;
        default:
            alert("Esa localidad esta lejos");
            break;
    }
}

envioGratis(); */