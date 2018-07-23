/* Variáveis podem ser tipo: var, let, const. É melhor utilizar o let, pois você não precisa se preocupar em ter variáveis com um so bloco de função. Por exemplo no "var" a variável é global, já no let a variável é exclusiva para aquele período. Se digitar ela em outra function ou while, por exemplo, ela não funcionará.

for (let indice in numeros){
    let valor = numeros[indice];
    console.log(valor);
}

for(let valor for numeros)*/



//primeiro percorre o vetor todo para encontrar o menor numero
//não foi utilizado o bobble sort, mas sim o inserction sort. 

/*
let numeros = [10,4,8,15,3];

let posicao = 0;

for (let i=0;i<numeros.length;i++){
    let posicaoMenor = numeros[0];
    //encontrar o menor numero da lista
    if(numeros[i]<numeros[posicaoMenor]){
        posicaoMenor = i;
    }
    
    let 
}*/

/*MUDAR COR QUANDO CLICA NO BOTAO*/

let botao = document.querySelector('button');

function mudarCorDeFundo(){
    document.body.style.backgroundColor = 'green';
}

botao.addEventListener('click', mudarCorDeFundo);

/*CLICAR NO SONIC E ELE CORRER*/

let sonic = document.querySelector('#sonic');

sonic.addEventListener('click',andar);

function andar(){
    sonic.style.transform = 'translateX(1000px) scale(0.1)';
    setTimeout(mudarCorDeFundo, 3500)
}