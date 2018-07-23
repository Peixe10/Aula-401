let paragrafo = document.querySelector("p");
let paragrafos = document.querySelectorAll("p");
let button = document.querySelector("button");
let sonic = document.querySelector("#sonic");
let sonic2 = document.querySelector("#sonic2");

button.onclick = pintarAzul;
sonic.onclick = correr;
sonic2.onclick = correr;

function correr(){
    sonic.style.transform = "translateX(1000px) scale(0.1)";
}
function pintarAzul() {
    for (let p in paragrafos) {
        p.style.color = "blue"
    }
}