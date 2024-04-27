let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla')

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

listaDeTeclas[3].onclick = incrementarContador;

