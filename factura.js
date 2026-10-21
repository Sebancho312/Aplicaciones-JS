
const nombre = document.getElementById("nombreCliente");
const cedula = document.getElementById("cedulaCliente");
const sexo = document.getElementById("sexoCliente");

const Producto = document.getElementById("Producto");
const Cantidad = document.getElementById("Cantidad");
const Precio = document.getElementById("Precio");

document.getElementById("btnAgregarProducto").addEventListener("click", agregarFila);

let subtotalGeneral = 0;

function agregarFila() {
    const filaNueva = document.createElement("tr");

    const cantV = parseInt(Cantidad.value);
    const cantP = parseFloat(Precio.value);

    const subTotal = calcularSubtotal(cantV, cantP);

    filaNueva.innerHTML = `
        <td>${Producto.value}</td>
        <td>${Cantidad.value}</td>
        <td>${Precio.value}</td>
        <td>${subTotal.toFixed(2)}</td>
    `;

    document.getElementById("detalleFactura").appendChild(filaNueva);

    subtotalGeneral += subTotal;

    let ivaGeneral = calcularIVA(subtotalGeneral);
    let totalGeneral = total(subtotalGeneral, ivaGeneral);

    document.getElementById("subtotalGeneral").innerHTML = subtotalGeneral;
    document.getElementById("ivaGeneral").innerHTML = ivaGeneral;
    document.getElementById("totalGeneral").innerHTML = totalGeneral;
}

function calcularSubtotal(Cantidad, Precio) {
    let resultado = Cantidad * Precio;
    return resultado;
}

function calcularIVA(Cantidad) {
    let iva = Cantidad * 0.15;
    return iva;
}

function total(resultado, iva) {
    let resultadoTotal = resultado + iva;
    return resultadoTotal;
}
