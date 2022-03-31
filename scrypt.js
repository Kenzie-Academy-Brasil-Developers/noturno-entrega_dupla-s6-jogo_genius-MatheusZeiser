const body = document.getElementById("body");
const startArea = document.getElementById("centerArea");
const colorButtons = document.getElementById("colorButtons");
const game = document.getElementById("game")
const startText = document.getElementById("startText")


const startButton = document.createElement("button");
startButton.setAttribute('id', 'startButton');
startArea.appendChild(startButton);

const redButton = document.createElement("button");
redButton.setAttribute('id', '1');
redButton.setAttribute('class', 'button red');
colorButtons.appendChild(redButton);
const blueButton = document.createElement("button");
blueButton.setAttribute('id', '2');
blueButton.setAttribute('class', 'button blue');
colorButtons.appendChild(blueButton);

const yellowButton = document.createElement("button");
yellowButton.setAttribute('id', '3');
yellowButton.setAttribute('class', 'button yellow');
colorButtons.appendChild(yellowButton);

const greenButton = document.createElement("button");
greenButton.setAttribute('id', '4');
greenButton.setAttribute('class', 'button green');
colorButtons.appendChild(greenButton);

const playAgain = document.createElement("button");
playAgain.innerText = "Try Again";
playAgain.setAttribute('class', 'playAgain Hidden');
body.appendChild(playAgain);

const divGameOver = document.createElement("div");
divGameOver.innerText = "GAME OVER";
divGameOver.setAttribute("class", "gameOver Hidden");
game.appendChild(divGameOver);

const divYouWin = document.createElement("div");
divYouWin.innerText = "YOU WIN!!";
divYouWin.setAttribute("class", 'youWin Hidden');
game.appendChild(divYouWin);

const feitoPor = document.createElement("footer");
feitoPor.innerText = "Criado por Yuri Jácome && Matheus Zeiser"
feitoPor.classList.add("feitoPor");
body.appendChild(feitoPor);

let sequenciaCores = [];
let sequenciaClique = [];
let round = 1;
let pontos = 0;

function RandomColor() {
    sequenciaCores.push(Math.floor(4 * Math.random() + 1));
};
function acenderCor(number = 0) {
    let i = number;

    if (sequenciaCores[i] === 1) {
        acendeRed();
    }

    else if (sequenciaCores[i] === 2) {
        acendeBlue();
    }

    else if (sequenciaCores[i] === 3) {
        acendeYellow();
    }

    else if (sequenciaCores[i] === 4) {
        acendeGreen();
    }
    i++;

    setTimeout(() => {
        if (i < sequenciaCores.length) {
            acenderCor(i);
        }
    }, 750);
};
function acendeRed() {
    redButton.classList.add('selected');

    setTimeout(() => {
        redButton.classList.remove('selected');
    }, 500);
}
function acendeBlue() {

    blueButton.classList.add('selected');

    setTimeout(() => {
        blueButton.classList.remove('selected');
    }, 500);
}
function acendeYellow() {

    yellowButton.classList.add('selected');

    setTimeout(() => {
        yellowButton.classList.remove('selected');
    }, 500);
}
function acendeGreen() {

    greenButton.classList.add('selected');

    setTimeout(() => {
        greenButton.classList.remove('selected');
    }, 500);
}
function verificarpontos() {

    if (JSON.stringify(sequenciaClique) === JSON.stringify(sequenciaCores)) {

        setTimeout(() => {
            startText.innerText = "Acertou mizeravi";
        }, 1000);

        pontos++;
        pontuacao.innerText = pontos;
        
        if(pontos === 5){
            ganhouGame();
        }
        else{
            setTimeout(()=>{
            newRound();
        }, 2000)}
        
    }
    else{
        verificaErro();
    }
}
function ganhouGame(){
    hiddenGame();
    divYouWin.classList.remove("Hidden");
    playAgain.classList.remove("Hidden");
}
function verificaErro(){
    for (i = 0; i < sequenciaClique.length; i++) {
        if (sequenciaCores.length > 0) {
            if (sequenciaClique[i] !== sequenciaCores[i]) {
                startButton.disabled = true;
                hiddenGame();
            }
        }
    }
}
function hiddenGame(){
        startArea.classList.add("Hidden");                
        colorButtons.classList.add("Hidden") 
        game.classList.add("perdeu");
        playAgain.classList.remove("Hidden");
        divGameOver.classList.remove("Hidden");
}
function resetgame() {

    sequenciaCores = [];
    round = 1;
    pontos = 0;
    pontuacao.innerText = pontos;

    startText.innerText = "Starting New Game";

    newRound();

}
startButton.addEventListener("click", newRound = () => {
    sequenciaClique = [];
    RandomColor();

    setTimeout(() => {
        startText.innerText = "Round " + round;
    }, 750);

    setTimeout(() => {
        acenderCor();
    }, 2000);
})
redButton.addEventListener("click", () => {

    setTimeout(() => {
        redButton.classList.add('selected');
    }, 0);

    setTimeout(() => {
        redButton.classList.remove('selected');
    }, 400);

    sequenciaClique.push(1);
    verificarpontos();

    if (sequenciaClique.length === sequenciaCores.length) { round++ }

});
blueButton.addEventListener("click", () => {

    setTimeout(() => {
        blueButton.classList.add('selected');
    }, 0);

    setTimeout(() => {
        blueButton.classList.remove('selected');
    }, 400);

    sequenciaClique.push(2);
    verificarpontos();

    if (sequenciaClique.length === sequenciaCores.length) { round++ }
});
yellowButton.addEventListener("click", () => {

    setTimeout(() => {
        yellowButton.classList.add('selected');
    }, 0);

    setTimeout(() => {
        yellowButton.classList.remove('selected');
    }, 400);

    sequenciaClique.push(3);
    verificarpontos();

    if (sequenciaClique.length === sequenciaCores.length) { round++ }
});
greenButton.addEventListener("click", () => {

    setTimeout(() => {
        greenButton.classList.add('selected');
    }, 0);

    setTimeout(() => {
        greenButton.classList.remove('selected');
    }, 400);

    sequenciaClique.push(4);
    verificarpontos();

    if (sequenciaClique.length === sequenciaCores.length) { round++; }
});
playAgain.addEventListener("click", () => {
    resetgame();
    playAgain.classList.add("Hidden");
    divGameOver.classList.add("Hidden");
    startArea.classList.remove("Hidden");   
    colorButtons.classList.remove("Hidden");
    game.classList.remove("perdeu");
    divYouWin.classList.add("Hidden");

    startButton.disabled = true;
});

