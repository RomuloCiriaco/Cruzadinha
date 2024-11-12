var special_words = ['CPU', 'ULA', 'REGISTRADORES', 'RAM', 'ROM', 'EPROM', 'FLASH', 'MEMÓRIA DE MASSA', 'DMA', 'CS', 'ADRESS BUS', 'DATA BUS', 'I5', 'I7', 'DUAL CORE', 'QUAD CORE'];

var questions_list = [
    'O que é considerado o coração da máquina, que trabalha com batimentos cardíacos chamados clock??',
    'Na escola computacional, qual o professor de aritmética e matemática responsáveis do professor?',
    'Na sala de aula, quem auxilia o professor com memórias mais rápidas para fazer o seu trabalho de maneira mais eficiente, registrando a aula?',
    'Qual é a memoria que te auxilia a curto prazo em suas tarefas diarias em seu computador?',
    'Qual é a memoria que te auxilia de forma permanente em suas tarefas diarias em seu computador?',
    'E qual é a memoria que te auxilia de forma que voce pode apagar e armarzenar dados das tarefas diarias em seu computador?',
    'Qual é a memória não volátil que tem o apelido do herói mais rápido do universo?',
    'Sobre as memórias não voláteis, qual pode ser considerado a “memória pai”?',
    'Qual é a sigla sobre a tecnologia que permite que dispositivos de hardware, como placas de rede, placas de som e discos rígidos, acessem diretamente a memória RAM do computador?',
    'Qual é o dispositivo que auxilia na conectividade de microprocessadores e microcontroladores à placa de vídeo, placa de rede, RAM, etc?',
    'O que indica o local exato na memória onde um dado deve ser encontrado ou armazenado?',
    'E o que leva os dados da questão anterior até a memória?',
    'Qual processador foi lançado em 2009, da fabricante Intel Corporation com características como 4 núcleos e 4 threads, tecnologia Intel Turbo Boost, e implementação da arquitetura Nehalem, que prioriza desempenho e menos consumo de energia.',
    'Qual processador foi lançado em 2008, da fabricante Intel Corporation com características como 4 núcleos e 8 threads, tecnologia Intel Turbo Boost e Turbo Boost Max, e implementação da arquitetura Nehalem, que prioriza desempenho e menos consumo de energia.',    
    'O que representa um processador, por exemplo, como o i38100 da arquitetura Coffee Leak, em questão de núcles e threads?',
    'O que representa um processador, por exemplo, como o i510400 da arquitetura Comet Leak, em questão de núcles e threads?'
];

// barrinha





// barrinha
var filledCell = [4, 22, 40, 135, 136, 137, 61, 79, 97, 115, 133, 151, 169, 187,
     205, 223, 241, 259, 277, 61, 62, 63, 274, 292, 310, 238, 256, 274, 292, 310,
      118, 136, 154, 172, 190, 29, 47, 65, 83, 101, 119, 137, 155, 173, 191, 209,
       227, 245, 263, 281, 299, 205, 206, 207, 314, 315, 272, 273, 273, 274, 275, 276, 277,
        278, 279, 280, 281, 189, 22, 225, 243, 261, 279, 297, 315, 119, 120, 115,
     116, 39, 40, 41, 42, 43, 44, 45, 46, 47, 5, 23, 41, 59, 77, 95, 113, 131, 149];

var firstIndex= [2, 133, 59, 59, 272, 236, 116, 27, 203, 312, 270, 187, 117, 113, 37, 3];

var word = {

    word1: {
        letter: special_words[0].split(''),
        position: [4, 22, 40],
        write: function () {

            for (i in word.word1.letter) {
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`);

                findCell.innerHTML = word.word1.letter[i];
                console.log(word.word1.letter[i]);
            }
        }
    },
    word2: {
        letter: special_words[1].split(''),
        position: [135, 136, 137],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                console.log(word.word2.letter[i]);
            }

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [61, 79, 97, 115, 133, 151, 169, 187, 205, 223, 241, 259, 277],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];   
                console.log(word.word3.letter[i]);
            }
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [61, 62, 63],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [274, 292, 310],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [238, 256, 274, 292, 310],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [118, 136, 154, 172, 190],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [29, 47, 65, 83, 101, 119, 137, 155, 173, 191, 209, 227, 245, 263, 281, 299],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
        
        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [205, 206, 207, 314, 315],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [314, 315],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
        }
    },
    word11: {
        letter: special_words[10].split(''),
        position: [272, 273, 273, 274, 275, 276, 277,278, 279, 280, 281,281],
        write: function () {
            for (i in word.word11.letter) {
                var findCell = document.querySelector(`#cell_${word.word11.position[i]}`);

                findCell.innerHTML = word.word11.letter[i];
                console.log(word.word11.letter[i]);
            }
        }
    },
    word12: {
        letter: special_words[11].split(''),
        position: [189, 22, 225, 243, 261, 279, 297, 315, 119, 120],
        write: function () {
            for (i in word.word12.letter) {
                var findCell = document.querySelector(`#cell_${word.word12.position[i]}`);

                findCell.innerHTML = word.word12.letter[i];
                console.log(word.word12.letter[i]);
            }
        }
    },
    word13: {
        letter: special_words[12].split(''),
        position: [119,, 120],
        write: function () {
            for (i in word.word13.letter) {
                var findCell = document.querySelector(`#cell_${word.word13.position[i]}`);

                findCell.innerHTML = word.word13.letter[i];
                console.log(word.word13.letter[i]);
            }
        }
    },
    word14: {
        letter: special_words[13].split(''),
        position: [115, 116],
        write: function () {
            for (i in word.word14.letter) {
                var findCell = document.querySelector(`#cell_${word.word14.position[i]}`);

                findCell.innerHTML = word.word14.letter[i];
                console.log(word.word14.letter[i]);
            }
        }
    },
    word15: {
        letter: special_words[14].split(''),
        position: [39, 40, 41, 42, 43, 44, 45, 46, 47],
        write: function () {
            for (i in word.word15.letter) {
                var findCell = document.querySelector(`#cell_${word.word15.position[i]}`);

                findCell.innerHTML = word.word15.letter[i];
                console.log(word.word15.letter[i]);
            }
        }
    },
    word16: {
        letter: special_words[15].split(''),
        position: [5, 23, 41, 59, 77, 95, 113, 131, 149],
        write: function () {
            for (i in word.word16.letter) {
                var findCell = document.querySelector(`#cell_${word.word16.position[i]}`);

                findCell.innerHTML = word.word16.letter[i];
                console.log(word.word16.letter[i]);
            }
        }
    }
};

var widthTable = 18;
var heightTable = 18;


var cont_correctAnswer = 0;

function start() {
    cont_correctAnswer = 0;
    bt_start.style.display = 'none';
    bt_destroyGame.style.display = 'block';
    div_questions.style.display = 'block';
    div_respostas.style.display = 'block';
    div_information.innerHTML = '';
    renderGrid();
    gameSequence();

}

function destroyGrid() {
    bt_start.style.display = 'block';
    bt_destroyGame.style.display = 'none';
    div_questions.style.display = 'none';

    document.querySelector('#div_canvasCruzada').innerHTML = '';
    pontuation();
}

function gameSequence() {
    span_questionText.innerHTML = `<b>${cont_correctAnswer + 1}.</b> ${questions_list[cont_correctAnswer]}`;

    if (cont_correctAnswer == 1) {
        word.word1.write();
    }
    else if (cont_correctAnswer == 2) {
        word.word2.write();
    }
    else if (cont_correctAnswer == 3) {
        word.word3.write();
    }
    else if (cont_correctAnswer == 4) {
        word.word4.write();
    }
    else if (cont_correctAnswer == 5) {
        word.word5.write();
    }
    else if (cont_correctAnswer == 6) {
        word.word6.write();
    }
    else if (cont_correctAnswer == 7) {
        word.word7.write();
    }
    else if (cont_correctAnswer == 8) {
        word.word8.write();
    }
    else if (cont_correctAnswer == 9) {
        word.word9.write();
    }
    else if (cont_correctAnswer == 10) {
        word.word10.write();
    }
    else if (cont_correctAnswer == 11) {
        word.word11.write();
    }
    else if (cont_correctAnswer == 12) {
        word.word12.write();
    }
    else if (cont_correctAnswer == 13) {
        word.word13.write();
    }
    else if (cont_correctAnswer == 14) {
        word.word14.write();
    }
    else if (cont_correctAnswer == 15) {
        word.word15.write();
    }
    else if (cont_correctAnswer == 16) {
        word.word16.write();

        setTimeout(function () {
            destroyGrid();
        }, 3000);
    }


}


function pontuation() {
    div_information.style.display = 'block';

    div_information.innerHTML = '<h1 style="text-align: center;">Parabéns!!</h1><br><br><p style="text-align: center;">Você finalizou o jogo</p><br><br>';
}

function renderGrid() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>';

    // &nbsp its used to set null value to a cell
    var cellContent_tableGame = '&nbsp';
    var cell = 0;
    for (var row = 1; row <= heightTable; row++) {

        tableGame += `<tr id="row_${row}">`;

        for (var column = 1; column <= widthTable; column++ , cell++) {
            tableGame += `<td class="deadCell" id="cell_${cell}">` + '</td>';

        }
        tableGame += '</tr>';

    }
    tableGame += '</table>';

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame;

    paintCells();
}



function paintCells() {
    
    for (item in filledCell) {
        var paintCell = document.getElementById(`cell_${filledCell[item]}`);
        paintCell.removeAttribute('deadCell');
        paintCell.setAttribute('class', 'availableCell');
    }
    
    for(var initial= 0; initial < firstIndex.length; initial++){
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`);

        paintIndex_cell.innerHTML= `<span style="color: red; font-size:10px">${initial + 1}</span>`;

        if(initial== 2 ||initial== 3){
        paintIndex_cell.innerHTML= `<span style="color: red; font-size:10px">3_4</span>`;
        }
    }    
}

function verify() {
    var answer = input_answer.value;

    if (answer != '') {
        answer = answer.toUpperCase();
        if (answer == special_words[cont_correctAnswer]) {
            div_verifiedAnswer.classList.add('correctAnswer');
            div_verifiedAnswer.innerHTML = '<br>Resposta Correta!';
            cont_correctAnswer++;
        }
        else {
            div_verifiedAnswer.classList.add('wrongAnswer');
            div_verifiedAnswer.innerHTML = '<br>Resposta Incorreta, tente novamente';
        }
        setTimeout(function () {
            div_verifiedAnswer.style.display = 'block';
        }, 500);

        setTimeout(function () {
            div_verifiedAnswer.style.display = 'none';
        }, 3000);

        input_answer.value = '';
        gameSequence();
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}