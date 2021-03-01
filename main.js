"user strict";

/* Metodos para manipulação de objetos DOM
document.getElementById('total').innerText = "SENAI";
document.querySelector("#total").innerText = "SENAI2";
*/

const distancia = document.getElementById("distancia");
const qtdpedagios = document.getElementById("pedagios");
const calcular = document.getElementById("calcular");
const pedagio = document.getElementById("pedagio");
const total = document.getElementById("total");

function teste() {
    valorPedagio = 9.40
    const resultado = Number(qtdpedagios.value) * valorPedagio;
    pedagio.innerText = resultado.toFixed(2)

    const valorPORKM = 6.00;
    const valorKM = Number(distancia.value) * valorPORKM + resultado ;
    total.innerText = valorKM.toFixed(2);
}

calcular.addEventListener("click", teste);
