let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let h1Time = document.querySelector(".time");

document.querySelector(".pausar").style = "display:none";
document.querySelector(".retomar").style = "display:none";

// h1Time.innerHTML = "Seila";
// console.log(h1Time);

function iniciar() {
  // setInterval(tempo, 1000);
  document.querySelector(".iniciar").style = "Display:none";
  document.querySelector(".pausar").style = "display:block";
  timeCount = setInterval(tempo, 10);
}
function pausar() {
  clearInterval(timeCount);
  document.querySelector(".pausar").style = "display:none";
  document.querySelector(".retomar").style = "display:block";
}
function retomar() {
  timeCount = setInterval(tempo, 10);
  document.querySelector(".pausar").style = "display:block";
  document.querySelector(".retomar").style = "display:none";
}
function resetar() {
  clearInterval(timeCount);
  document.querySelector(".pausar").style = "display:none";
  document.querySelector(".iniciar").style = "display: block";
  document.querySelector(".retomar").style = "display:none";
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(timeCount);
  h1Time.innerHTML = ` ${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliseconds}`;
}

function tempo() {
  milliseconds++;
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  h1Time.innerHTML = ` ${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliseconds}`;
}
