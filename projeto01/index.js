const prompt = require('prompt-sync')();



console.log('// ================== A JORNADA DE NARUTO UZUMAKI ====================')

console.log('Naruto uzumaki é um ninja nascido na aldeia da folha que ficou orfão assim que nasceu, \n durante sua jornada ele faz grandes amigos e jura protege-los, tbm tem o sonho de ser hokage da aldeida da folha,\n mas para isso tem que treinar e se tornar forte suficiente, será que Naruto irá conseguir')



let sim = 0


let p1 = prompt('O Naruto se dedicou a treinar intensamente para se tornar mais forte? ').toLowerCase;
    if (p1 == 'sim') {
        sim ++
        console.log("Você marcou um ponto")        
}
else if(p1 == 'nao'){
  console.log('Que pena você não pontuou :( ')
}else if(p1 != 'sim' || p1 != 'nao'){
    console.log('Digite "sim" ou "nao"')
}

let p2 = prompt('O Naruto conseguiu dominar o Jutsu clone das sombras? ').toLowerCase;
    if(p2 == "sim"){
        sim ++
       console.log('Você marcou um ponto')
}else if(p2 == 'nao'){
    console.log('Você não pontuou')
}else if(p2 != 'sim' || p2 != 'nao'){
    console.log('Digite "sim" ou "nao"')
}

let p3 = prompt('O Naruto conseguiu salvar Sasuke Uchiha da escuridão? ').toLowerCase;
  if(p3 === 'sim'){
        sim ++
        console.log('Você marcou um ponto')
}else if(p3 === 'nao'){
    console.log('Dessa vez você não pontuou')
}else if(p3 != 'sim' || p3 != 'nao'){
    console.log('Digite "sim" ou "nao"')
    
}
let p4 = prompt('O Naruto foi vitorioso durante a guerra ninja ?').toLowerCase ;
    if(p4 == 'sim'){
        sim++
        console.log('Você marcou um ponto')
}else if(p4 === 'nao'){
    console.log('Dessa vez você não pontuou')
}else if(p4 != 'sim' || p4 != 'nao'){
    console.log('Digite "sim" ou "nao"')
    
}
let p5 = prompt('O Naruto conseguiu alcançar seu objetivo de ser Hokage da Aldeia da folha? ').toLowerCase;
    if(p5 == 'sim'){
        sim++
        console.log('Você marcou um ponto')
}else if(p5 === 'nao'){
    console.log(' você não pontuou')
}else if(p5 != 'sim' || p5 != 'nao'){
    console.log('Digite "sim" ou "nao"')  
}

//Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
//No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
//0 respostas Sim: Você falha miseravelmente.
//1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
//3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
//4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita./
//5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
 

console.log(`O total dos seus pontos foi  ${sim}`)


if(sim == 0 ){
    console.log('Naruto falhou miserávelmente');
}else if(sim == 1 || sim == 2){
    console.log('Naruto falhou, não se tornou um grande ninja');
}else if(sim == 3){
    console.log('Naruto chegou muito perto de alcaçar seus objetivos');
}else if(sim == 4){
    console.log('Depois de muito esforço Naruto consegue conquistar seu objetivo, porém, não de maneira perfeita');
}else if(sim == 5){
    console.log('Naruto triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações');
}