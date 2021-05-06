var altura;
var peso;
var imc;
function calcIMC() {
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    imc = (peso / (altura**2)).toPrecision(3);

    console.log(imc)
    
    alert(imc);
}


// calcIMC(1.60, 58);