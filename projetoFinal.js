// # Importando prompt
const prompt = require('prompt-sync')();


let jogo = {


    horas: 8,
    dia: 1,
    periodo: 'Manhã',

    passarTempo: function (horas) {
        this.horas += horas
        if (this.horas >= 24) {
            this.horas -= 24;
            this.dia++
        }

        if (this.horas >= 19) {
            this.periodo = 'Noite'
        } else if (this.horas >= 12) {
            this.periodo = 'Tarde'
        } else if (this.horas >= 6) {
            this.periodo = 'Manhã'
        } else {
            this.periodo = 'Madrugada'

        }

    },

    saude: 10,
    mantimentos: 5,
    energia: 10,


    status: function () {
        console.log(`Status de ${usuario}: \n
        Saúde: ${this.saude} 
        Mantimentos: ${this.mantimentos}
        Energia: ${this.energia} \n
        Periodo:${this.periodo}
        Hora:${this.horas}hrs
        Dia:${this.dia}`)
    },
    aumentarSaude: function (quantidade) {
        this.saude = this.saude + quantidade
    },

    diminuirSaude: function (quantidade) {
        this.saude = this.saude - quantidade
    },

    aumentarMantimentos: function (quantidade) {
        this.mantimentos = this.mantimentos + quantidade
    },

    diminuirMantimentos: function (quantidade) {
        this.mantimentos = this.mantimentos - quantidade
    },
    aumentarEnergia: function (quantidade) {
        this.energia = this.energia + quantidade
    },
    diminuirEnergia: function (quantidade) {
        this.energia = this.energia - quantidade
    },
    atualizarStatus: function () {
        this.saude = 10
        this.energia = 10
        this.mantimentos = 5

    }

}


prompt("Bem-Vindo ao ULTIMATE ZOMBIE <PRESSIONE ENTER>");

let usuario = prompt("digite seu nome: ")


console.log('')

console.log(`Olá ${usuario}, uma nova ameaça consumiu o planeta `);
console.log("A empresa de desenvolvimento bioquímico UMBRELA CORPORATION produzindo armas químicas proibidas no MUNDO, ");
console.log("acidentalmente por um erro humano deixa se alastrar um vírus altamente contagioso, que transforma seres humanos em");
console.log("verdadeiros mortos vivos comedores de carne");
console.log("Os países estão entrando em colapso, os governos caindo,o Canadá é um dos ultimos países ainda de pé, todos estão indo para a fronteira");
console.log('o prazo é de apenas 3 dias para todos os sobreviventes não infectados atravessarem para area segura você tem uma semana..');
console.log("LUTE PARA SOBREVIVER!");

console.log('');

jogo.status()

console.log('');


do {


    console.log();
    console.log(`Estamos no ${jogo.dia}° dia`)
    console.log("")
    console.log(`${usuario}, os zumbis já chegaram na sua cidade, então você decide..`)
    console.log('(1)Fugir')
    console.log('(2)Matar zumbis')
    console.log('(3)Buscar um lugar seguro')
    let escolha1 = prompt('Escolha sua opção e tecle ENTER: ');
    while (escolha1 != 1 && escolha1 != 2 && escolha1 != 3) {
        console.clear()
        console.log('Comando inválido, escolha uma das alternativas: ');
        console.log(`${usuario}, os zumbis já chegaram na sua cidade, então você decide..`)
        console.log('(1)Fugir')
        console.log('(2)Matar zumbis')
        console.log('(3)Buscar um lugar seguro')
        escolha1 = prompt('Escolha sua opção e tecle ENTER');
    }
    if (escolha1 == 1) {
        console.clear()
        console.log('Você fugiu da horda de zumbis');
        jogo.diminuirSaude(1)
        jogo.diminuirEnergia(1)
        jogo.passarTempo(6)
    }
    if (escolha1 == 2) {
        console.clear()
        console.log('Você matou todos os zumbis ao seu redor');
        jogo.diminuirEnergia(1)
        jogo.diminuirSaude(1)
        jogo.passarTempo(8)
    }
    if (escolha1 == 3) {
        console.clear()
        console.log('Você buscou um lugar seguro assim que soube dos mortos vivos');
        jogo.diminuirEnergia(1)
        jogo.passarTempo(7)
    }
    // # Invocando método do objeto
    jogo.status();

    console.log('Você está á caminho da fronteira e avista uma cidade ao norte, quer seguir para cidade? ');
    console.log('(1)Sim');
    console.log('(2)Não');

    // # Prompt
    let escolha2 = prompt('Escolha sua opção e tecle <ENTER> ');
    // # Enquanto escolha for != de 1 ou 2 = loop infinito
    while (escolha2 != 1 && escolha2 != 2) {
        console.clear()
        console.log('Você está á caminho da fronteira e avista uma cidade ao norte, quer seguir para cidade? ');
        console.log('(1)Sim');
        console.log('(2)Não');
        // # Escolha if
        escolha2 = prompt('Escolha sua opção e tecle <ENTER> ')
    }
    if (escolha2 == 1) {
        console.clear()
        console.log('A cidade está abandonada, você encontrou mantimentos');
        jogo.aumentarMantimentos(3)
        jogo.diminuirEnergia(1)
        jogo.passarTempo(4)
        console.log('Você irá passar a noite na cidade ?');
        console.log('(1)Sim');
        console.log('(2)Não');

        // # Noite na cidade
        let escolhaAlternativa1 = prompt('Escolha sua opção e tecle <ENTER> ');
        if (escolhaAlternativa1 == '1') {
            console.clear()
            jogo.passarTempo(12)
            jogo.aumentarEnergia(jogo.energia == 10)
            jogo.diminuirMantimentos(1)
            console.log('Você reestabeleceu suas energias');

            // # Apartir daqui tem que rolar o resto do código

            jogo.status()
        }
        // # se usuario escolher 2
        if (escolhaAlternativa1 == '2') {
            jogo.diminuirSaude(4)
            jogo.aumentarEnergia(1)
            jogo.passarTempo(12)
            console.clear()
            console.log('Você seguiu caminho a noite pela floresta e caiu numa armadilha para urso');
            console.log('');
            console.log('!!DANO CRÍTICO!! ');

            jogo.status();


            // # Apartir daqui tem que rolar o resto do código

        }

        console.log('Seguindo viagem..');
        console.log('Você percebe que caminhar até seu destino levará muitos dias');
        console.log('Então decide conseguir um meio de transporte');
        console.log('Onde você irá á procura?');
        console.log('(1)Aos arredores de uma cidade');
        console.log('(2)No campo, em alguma fazendo próxima');

        // # Ir ao campo ou aos arredores da cidade
        let escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
        while (escolha3 != 1 && escolha3 != 2) {
            console.log('(1)Aos arredores de uma cidade');
            console.log('(2)No campo, em alguma fazendo próxima')
            escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
        }

        // # Arredores da cidade  = Aparece a pick-up
        if (escolha3 == 1) {
            console.clear()
            jogo.passarTempo(7)
            jogo.diminuirEnergia(1)
            jogo.diminuirMantimentos(1)
            console.log('Você encontrou uma PICK-UP, porém ela precisa de uns reparos');
            console.log(`dia:${jogo.dia}`);
            console.log(`Horário:${jogo.horas}hrs`);
            console.log('');
            console.log('*REPARANDO PICK-UP*')
            console.log('');
            jogo.passarTempo(3)
            console.log(`dia:${jogo.dia}`);
            console.log(`Horário:${jogo.horas}hrs`);
            prompt('Para continuar pressione ENTER ')
        }
        // # Se a escolha for 2, vai achar a fazenda
        if (escolha3 == 2) {
            console.clear()
            jogo.passarTempo(9)
            jogo.diminuirEnergia(1)
            jogo.aumentarMantimentos(2)
            jogo.aumentarSaude(1)
            jogo.aumentarEnergia(2)
            console.log('Depois de caminhar bastante você encontra uma fazenda no horizonte');
            console.log('Você entra no celeiro e encontra um cavalo que agora será seu transporte até a fronteira');
            console.log('Ainda na fazenda você acha mantimentos e aproveita para descansar')
        }
        // # Método do objeto pra mostrar o status
        jogo.status();

        console.log('');
        console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
        console.log('Então você tem duas escolhas');
        console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
        console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
        let escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
        while (escolhaFinal != 1 && escolhaFinal != 2) {
            console.clear()
            console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
            console.log('Então você tem duas escolhas');
            console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
            console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
            escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
        } if (escolhaFinal == 1) {
            let aleatoriedade = Math.floor(Math.random() * 2)
            if (aleatoriedade == 0) {
                console.clear()
                console.log('Você quase morreu mas ainda conseguiu passar pela fronteira a tempo');
                jogo.passarTempo(28)
            } else if (aleatoriedade == 1) {
                console.clear()
                console.log('Você não chegou a tempo e uma horda de mortos-vivos te atacou, você não sobreviveu');
                jogo.passarTempo(34)
            }

        } else if (escolhaFinal == 2) {
            console.clear()
            jogo.diminuirEnergia(3)
            jogo.diminuirSaude(2)
            jogo.passarTempo(26)
            console.log('Você teve coragem e matou vários zumbis que estavam no seu caminho');
            console.log('E ainda sim conseguiu passar pelas fronteiras do Canadá');


            console.log('');

            console.log('Por seus atos de bravura e sobrevivência, no Canadá você foi selecionado para trabalhar para o governo contra a praga dos mortos-vivos');

            console.log('');

            let departamento = ['Militar', 'Científico', 'Serviço Secreto']

            for (let i = 0; i < departamento.length; i++) {
                const escolhaDep = departamento[i];
                console.log(`Departamento:${escolhaDep}`);

            }

        }

    }
    // # Caso usuário não queira ir pra cidade
    if (escolha2 == '2') {
        console.clear()
        console.log('Você desviou da cidade e no caminho encontrou outros sobreviventes');
        jogo.passarTempo(6)
        jogo.diminuirEnergia(2)

        console.log('Deseja continuar continuar viagem com esse grupo? ');
        console.log('(1)Sim');
        console.log('(2)Não');

        // # Validação
        let escolhaAlternativa2 = prompt('Escolha sua opção e tecle <ENTER> ');
        while (escolhaAlternativa2 != 1 && escolhaAlternativa2 != 2) {

            escolhaAlternativa2 = prompt('Escolha sua opção e tecle <ENTER> ');
        }

        if (escolhaAlternativa2 == '1') {
            console.clear()
            jogo.passarTempo(8);
            jogo.diminuirMantimentos(jogo.mantimentos);
            jogo.diminuirEnergia(1);
            console.log('Eram ladrões, levaram todos seus mantimentos e te deixaram preso em uma árvore');
            console.log('você perde muito tempo tentando se soltar');

            jogo.status()

            console.log('');
            console.log('Seguindo viagem..');
            console.log('Você percebe que caminhar até seu destino levará muitos dias');
            console.log('Então decide conseguir um meio de transporte');
            console.log('Onde você irá á procura?');
            console.log('(1)Aos arredores de uma cidade');
            console.log('(2)No campo, em alguma fazendo próxima');

            // # Ir ao campo ou aos arredores da cidade
            let escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
            while (escolha3 != 1 && escolha3 != 2) {
                console.log('(1)Aos arredores de uma cidade');
                console.log('(2)No campo, em alguma fazendo próxima')
                escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
            }

            // # Arredores da cidade  = Aparece a pick-up
            if (escolha3 == 1) {
                console.clear()
                jogo.passarTempo(7)
                jogo.diminuirEnergia(1)
                jogo.diminuirMantimentos(1)
                console.log('Você encontrou uma PICK-UP, porém ela precisa de uns reparos');
                console.log(`dia:${jogo.dia}`);
                console.log(`Horário:${jogo.horas}hrs`);
                console.log('');
                console.log('*REPARANDO PICK-UP*')
                console.log('');
                jogo.passarTempo(3)
                console.log(`dia:${jogo.dia}`);
                console.log(`Horário:${jogo.horas}hrs`);
                prompt('Para continuar pressione ENTER ')
            }
            // # Se a escolha for 2, vai achar a fazenda
            if (escolha3 == 2) {
                console.clear()
                jogo.passarTempo(9)
                jogo.diminuirEnergia(1)
                jogo.aumentarMantimentos(3)
                jogo.aumentarSaude(1)
                jogo.aumentarEnergia(5)
                console.log('Depois de caminhar bastante você encontra uma fazenda no horizonte');
                console.log('Você entra no celeiro e encontra um cavalo que agora será seu transporte até a fronteira');
                console.log('Ainda na fazenda você acha mantimentos e aproveita para descansar')
            }


            console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
            console.log('Então você tem duas escolhas');
            console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
            console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
            let escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
            while (escolhaFinal != 1 && escolhaFinal != 2) {
                console.clear()
                console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
                console.log('Então você tem duas escolhas');
                console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
                console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
                escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
            } if (escolhaFinal == 1) {
                let aleatoriedade = Math.floor(Math.random() * 2)
                if (aleatoriedade == 0) {
                    console.clear()
                    console.log('Você quase morreu mas ainda conseguiu passar pela fronteira a tempo');
                    jogo.passarTempo(28)
                } else if (aleatoriedade == 1) {
                    console.clear()
                    console.log('Você não chegou a tempo e uma horda de mortos-vivos te atacou, você não sobreviveu');
                    jogo.passarTempo(34)
                }
            } else if (escolhaFinal == 2) {
                console.clear()
                jogo.diminuirEnergia(1)
                jogo.diminuirMantimentos(1)
                jogo.diminuirSaude(2)
                jogo.passarTempo(26)
                console.log('Você teve coragem e matou vários zumbis que estavam no seu caminho');
                console.log('E ainda sim conseguiu passar pelas fronteiras do Canadá');

                console.log('');

                console.log('Por seus atos de bravura e sobrevivência, no Canadá você foi selecionado para trabalhar para o governo contra a praga dos mortos-vivos');

                console.log('');

                let departamento = ['Militar', 'Científico', 'Serviço Secreto']

                for (let i = 0; i < departamento.length; i++) {
                    const escolhaDep = departamento[i];
                    console.log(`Departamento:${escolhaDep}`);

                }

            }

            // # Método do objeto pra mostrar o status
            jogo.status();
        }
        if (escolhaAlternativa2 == '2') {
            console.clear()
            jogo.passarTempo(9)
            jogo.diminuirEnergia(3)
            console.log('Você continua o caminho rumo a fronteira');

            // # Historia continua
            console.log('');
            console.log('Seguindo viagem..');
            console.log('Você percebe que caminhar até seu destino levará muitos dias');
            console.log('Então decide conseguir um meio de transporte');
            console.log('Onde você irá á procurar?');
            console.log('(1)Aos arredores de uma cidade');
            console.log('(2)No campo, em alguma fazenda próxima');

            // # Ir ao campo ou aos arredores da cidade
            let escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
            while (escolha3 != 1 && escolha3 != 2) {
                console.log('(1)Aos arredores de uma cidade');
                console.log('(2)No campo, em alguma fazenda próxima')
                escolha3 = prompt('Escolha sua opção e tecle <ENTER>  ')
            }

            // # Arredores da cidade = Aparece a pick-up
            if (escolha3 == 1) {
                console.clear()
                jogo.passarTempo(7)
                jogo.diminuirEnergia(1)
                jogo.diminuirMantimentos(1)
                console.log('Você encontrou uma PICK-UP, porém ela precisa de uns reparos');
                console.log(`dia:${jogo.dia}`);
                console.log(`Horário:${jogo.horas}hrs`);
                console.log('');
                console.log('*REPARANDO PICK-UP*')
                console.log('');
                jogo.passarTempo(3)
                console.log(`dia:${jogo.dia}`);
                console.log(`Horário:${jogo.horas}hrs`);
                prompt('Para continuar pressione ENTER ')
            }
            // # Se a escolha for 2, vai achar a fazenda
            if (escolha3 == 2) {
                console.clear()
                jogo.passarTempo(9)
                jogo.diminuirEnergia(1)
                jogo.aumentarMantimentos(3)
                jogo.aumentarSaude(1)
                jogo.aumentarEnergia(2)
                console.log('Depois de caminhar bastante você encontra uma fazenda no horizonte');
                console.log('Você entra no celeiro e encontra um cavalo que agora será seu transporte até a fronteira');
                console.log('Ainda na fazenda você acha mantimentos e aproveita para descansar')

            }

            jogo.status();

            console.log('');
            console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
            console.log('Então você tem duas escolhas');
            console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
            console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
            let escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
            while (escolhaFinal != 1 && escolhaFinal != 2) {
                console.clear()
                console.log('Você tem pouco mais de um dia para chegar a fronteira do Canadá');
                console.log('Então você tem duas escolhas');
                console.log('(1)Ir pelo caminho do deserto e perde mais tempo, porém seria mais seguro');
                console.log('(2)Ir pelo centro da cidade em que surgiu o paciente 0 dessa infecção mundial');
                escolhaFinal = prompt('Escolha sua opção e tecle ENTER  ')
            } if (escolhaFinal == 1) {
                let aleatoriedade = Math.floor(Math.random() * 2)
                if (aleatoriedade == 0) {
                    console.clear()
                    console.log('Você quase morreu mas ainda conseguiu passar pela fronteira a tempo');
                    jogo.passarTempo(28)
                } else if (aleatoriedade == 1) {
                    console.clear()
                    console.log('Você não chegou a tempo e uma horda de mortos-vivos te atacou, você não sobreviveu');
                    jogo.passarTempo(34)
                }
            } else if (escolhaFinal == 2) {
                console.clear()
                jogo.diminuirEnergia(1)
                jogo.diminuirSaude(1)
                jogo.passarTempo(26)
                console.log('Você teve coragem e matou vários zumbis que estavam no seu caminho');
                console.log('E ainda sim conseguiu passar pelas fronteiras do Canadá');


                console.log('');

                console.log('Por seus atos de bravura e sobrevivência, no Canadá você foi selecionado para trabalhar para o governo contra a praga dos mortos-vivos');

                console.log('');

                let departamento = ['Militar', 'Científico', 'Serviço Secreto']

                for (let i = 0; i < departamento.length; i++) {
                    const escolhaDep = departamento[i];
                    console.log(`Departamento:${escolhaDep}`);

                }

            }
            // # Método do objeto pra mostrar o status
            jogo.status();

        }


    }

} while (jogo.saude == 0);






