let button = document.getElementsByTagName('button')[0];
let mes1 = document.getElementById('midtermMessage1');
let mes2 = document.getElementById('midtermMessage2');


function myfunc(name) {
    mes2.innerHTML =  mes1.textContent + (name);
}
button.addEventListener("click", myfunc('Maya Brenner-Letich'));



