function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);   // o # seleciona um ID. o ponto antes do play, abre uma caixa de seleção de comandos do item selecionado

    // if (elemento != null && elemento.localName === 'audio') {    // != diferente, mas tbm posso não colocar nada, que já vai ser entendido assim: se elemento exikste...
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert ('Elemento não encontrado ou seletor inválido');
        // console.log('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');    // const listaDeTeclas - Isso é uma referência criada por mim, para facilitar o entendimento do código

//Exemplo com o WHILE (ENQUANTO) - precisou de uma variável externa para funcionar: contador

// let contador = 0;

// while(contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];    //o buttom tem 2 classe: tecla e tecla_pom, classlist[1] acessa o índice que identifica os instrumentos.    
//     //template string
//     const idAudio = `#som_${instrumento}`;

//     //console.log(idAudio);

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     }

//     contador = contador + 1;

//     //console.log(contador);

// }

//Exemplo com o FOR (PARA)

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    //o buttom tem 2 classe: tecla e tecla_pom, classlist[1] acessa o índice que identifica os instrumentos.    
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || 'Enter') {   // essas 2 barras em pé, significa OU
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}
