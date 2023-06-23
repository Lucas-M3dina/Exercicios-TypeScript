const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));

  console.log(1);
}



function calcularGanho(value : number) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;

    console.log(2);
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value);
    calcularGanho(Number(input.value));
    console.log(3);
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou);

  console.log(4);
}

console.log(input);