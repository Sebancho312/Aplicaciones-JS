let num = Number(prompt("Ingresa el inicio: "))
let nume = Number(prompt("Ingrese el limite:"))


const resul = document.getElementById("resultado")
resul.innerHTML="";

const cuerpo=document.getElementById("cuerpoTabla")

for(num; num<= nume; num++){  
    for(let i=1; i<=10 ; i++){
        cuerpo.innerHTML+=(("<tr>"+"<td>" + num + "</td>" + "<td>" + i + "</td>" + "<td>" + (nume*i) + "</td>"+"</tr>"));
    }
}

document.getElementById("btnSumar").addEventListener("click", function(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);

    let suma=num1+num2;

    document.getElementById("resultadoSuma").innerHTML = "La suma es: "+ suma;
});