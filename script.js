let botao = document.querySelector("button");

//Exercicios do Eric

/* Exercícios Javascript

-Exercício 2
Escreva um programa que calcule e mostre a tabuada (numero * 1, numero * 2, ..., até numero * 10)
de um número qualquer, digitado pelo usuário.

-Exercício 3 DESAFIO
Defina um Array numérico desordenado de 10 posições. Depois, ordene o Array  em ordem crescente e
apresente os elementos ordenados. Utilizar um dos algoritmos de ordenação apresentado nos projetos.

-Exercício 4
Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o
candidato João, do Partido da Esperança. Os eleitores votam nos candidatos pelo número do
partido. Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1.
Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.
Faça um programa que simule uma urna eletrônica. Para cada eleitor, deve ser lido o número do
seu título e em seguida o eleitor poderá digitar o seu voto. A eleição é encerrada quando um
valor negativo (menor do que 0) para o título do eleitor é digitado. Informe quantos votos cada
candidato teve e qual deles ganhou a eleição.
DICA: Pode usar 'do..while' para repetir a votação até que o número digitado seja menor que 0.

-Exercício 5
Faça um programa que peça ao usuário uma temperatura em Fahrenheit, converta-a para
graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para
Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.*/

/*-Exercício 1
Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.*/

function ex1(){
    
    var num1 = parseInt(prompt("Digite um numero"));
    var num2 = parseInt(prompt("Digite outro numero"));
    
    if ((num1 + num2) >= 100){
        alert(num1 + num2);
    }
    else{
        alert("A soma dos numeros é menor que 100 ");
    }
    
}

/*Exercício 2
Escreva um programa que calcule e mostre a tabuada (numero * 1, numero * 2, ..., até numero * 10) de um número qualquer, digitado pelo usuário.*/

function ex2(){
    
    var num = parseInt(prompt("Digite um número para calcular a tabuada"));
    var resultado = "";
    
    for(var i=1;i<=10;i++){
        resultado = resultado + (num * i) + "\n"
    }
    alert("A tabuada do " + num + " é: \n" + resultado)
}

/*Exercício 3 DESAFIO: Defina um Array numérico desordenado de 10 posições. Depois, ordene o Array  em ordem crescente e apresente os elementos ordenados. Utilizar um dos algoritmos de ordenação apresentado nos projetos.*/

/*NÃO TERMINEI O EX3*/

function ex3(){

    var lista = [1,2,3,4,5]
    
    // var lista = [4,1,2,3,5];
    var i = 0;
    var j = 1;
    
    While 

    if (lista[j] < lista[i]){
        
        var banco = lista[j];
        
        lista[i]=lista[j]
        lista[j]=banco
        i = 0
        j = 1
        
    }
    else{ 
        i = i + 1;
        j = j + 1;    
    }
    
}

// --------------------- ATIVIDADES AULA 401 ----------------------------

let paragrafo = document.querySelector("p");
let paragrafos = document.querySelectorAll("p");
let botao = document.querySelector("button");
let sonic = document.querySelector("#sonic");

botao.onclick = pintarAzul;
sonic.onclick = correr;

//onmouseenter
//onmouseleave
//onmouseover
//onkeydown
//onblur

function pintarAzul(){
    for(let p of paragrafos){
        p.style.color = "blue";
    }
}

function correr(){
    sonic.style.transform = "translateX(1000px) scale(0.1)";
}

// ------------------- Aula da Tarde -------------------

