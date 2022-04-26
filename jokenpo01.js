const prompt = require("prompt-sync")();




let vitJogador = 0;
let vitCpu = 0;
let play;
do {


    let jokenpo = ["Pedra", "Papel", "Tesoura"];

    let partidas = +prompt('BEM-VINDO AO JOKENPÔ, digite o número de partidas que deseja jogar: ');
    for (let i = 0; i < partidas; i++) {

        let Jogador = +prompt("Escolha: \n Pedra:0 \n Papel:1 \n Tesoura:2 \n");

        while (Jogador != 0 && Jogador != 1 && Jogador != 2) {
            console.log('Escolha inválida, digite novamente')
            Jogador = +prompt("Escolha: \n Pedra:0 \n Papel:1 \n Tesoura:2 \n");
        }

        let escolhaJogador = jokenpo[Jogador];

        console.log(`A escolha do jogador foi:${escolhaJogador}`);

        let cpu = Math.floor(Math.random() * 3);

        let escolhaCpu = jokenpo[cpu];

        console.log(`A escolha da CPU foi: ${escolhaCpu}`);

        if (escolhaJogador == "Pedra" && escolhaCpu == "Tesoura") {
            console.log("Jogador venceu");
            vitJogador++
        } else if (escolhaJogador == "Tesoura" && escolhaCpu == "Papel") {
            console.log("Jogador venceu");
            vitJogador++
        } else if (escolhaJogador == "Papel" && escolhaCpu == "Pedra") {
            console.log("Jogador venceu");
            vitJogador++
        } else if (escolhaJogador == undefined) {
            console.log("Resultado inválido");

        } else if (escolhaCpu == "Pedra" && escolhaJogador == "Tesoura") {
            console.log("CPU venceu");
            vitCpu++
        } else if (escolhaCpu == "Tesoura" && escolhaJogador == "Papel") {
            console.log("CPU venceu");
            vitCpu++
        } else if (escolhaCpu == "Papel" && escolhaJogador == "Pedra") {
            console.log("CPU venceu");
            vitCpu++
        } else {
            console.log("Empate");
        }

    }

    if (vitJogador > vitCpu) {
        console.log(`O jogador venceu com ${vitJogador} pontos, CPU marcou apenas ${vitCpu}`)
    } else if (vitCpu > vitJogador) {
        console.log(`A CPU venceu com ${vitCpu} pontos, jogador marcou apenas ${vitJogador}`)
    } else {
        console.log('O jogador e a CPU empataram')
    }

    play = prompt("Continuar jogando?(s/n): ").toLowerCase();
    while (play != "s" && play != "n") {
        console.log()
        console.log('Responda apenas com "s" ou "n"')

        play = prompt("Deseja continuar?(s/n): ").toLowerCase();
    }
    if (play == "s") {
        continue;
    } else if (play == "n") {
        console.log()
        console.log("Foi bom jogar com você volte sempre! :)");
        break;
    }

}

while (play == "s");
