let valorDeHora = document.querySelector("#valor-hora");    

let horasProjeto = document.querySelector("#horas-projeto");

 
function calcular() {
// total de horas do projeto

let valorTotalDeHoras = horasProjeto.valueAsNumber * valorDeHora.valueAsNumber;

resposta.textContent = "R$" + valorTotalDeHoras;


}