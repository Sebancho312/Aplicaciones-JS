let nombre = prompt("Ingrese su nombre:");
let edad = Number(prompt("Ingrese su edad:"));
let mensaje = "";

// Lógica de acceso
if (edad >= 18 && edad<=25) {
    mensaje = "Bienvenido estudiante " + nombre + ", tienes acceso a la disco hasta las 22:00PM.";
} 
if (edad>=26 && edad<=35){
    mensaje = "Bienvenido oficinista " + nombre + ", tienes acceso a la disco hasta las 00:00AM.";
}
if (edad > 35 && edad < 45 ) {
    mensaje = "Bienvenido señor " + nombre + ", tienes acceso a la disco hasta las 02:00AM.";
} 
else; {
    mensaje = "Bienvenido vip " + nombre + ", no tiene limite de hora de salida.";
} 

// Mostrar en consola
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Mensaje: " + mensaje);

// Asignar los valores a los inputs del HTML (sin espacios extra)
const nombreControl = document.getElementById("nombre");
if (nombre) {
    nombreControl.value = nombre;
}

const edadControl = document.getElementById("edad");
if (edad) {
    edadControl.value = edad;
}

// Asignar el mensaje de bienvenida/rechazo al textarea
const mensajeControl = document.getElementById("mensaje");
mensajeControl.value = mensaje;