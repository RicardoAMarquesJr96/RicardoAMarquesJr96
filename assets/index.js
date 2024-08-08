const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const dataDaVolta = "19-Aug-2024";

function countdown() {
    const diaDavolta = new Date(dataDaVolta);
    const diaAtual = new Date();


    const totalSegundos = (diaDavolta - diaAtual) /1000;


    const totalDias = Math.floor(totalSegundos / 3600 / 24);
    const totalHoras = Math.floor(totalSegundos / 3600) % 24;
    const totalMinutos = Math.floor(totalSegundos/ 60) % 60;
    const seconds = Math.floor(totalSegundos) % 60;


    dias.innerHTML = totalDias;
    horas.innerHTML = formatTime(totalHoras);
    minutos.innerHTML = formatTime(totalMinutos);
    segundos.innerHTML = formatTime(seconds);

        

};


function formatTime(time){
            return time < 10 ? `0${time}` : time;
        };


countdown();

setInterval(countdown, 1000);