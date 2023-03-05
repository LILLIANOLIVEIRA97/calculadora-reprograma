let ganhoPorMes = document.querySelector("#ganho-mes");

let horasPorDia = document.querySelector("#horas-dia");


function calcularValorHora() {
// total de horas de trabalhou por mes

    let qtdTotalDeHoras = horasPorDia.valueAsNumber * 22;

    let valorDeHora = (ganhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

    resposta.textContent = "R$ " + valorDeHora;


}
