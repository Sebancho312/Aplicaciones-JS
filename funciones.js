document.getElementById("Calculartotal").addEventListener("click" , function(){
    let precio=Number(document.getElementById("precio").value);
    let total=calcularTotal(precio);

    document.getElementById("total").innerHTML = "El total a pagar es: " + total;


});

function calcularIva(precio){
    return precio*0.15;
}
function calcularTotal(precio){
    return precio+calcularIva(precio);
}