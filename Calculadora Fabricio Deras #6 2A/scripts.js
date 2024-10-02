    function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}

function suma(){
    let numero1 = +document.getElementById('num1').value; //el signo + hace que no lo tome como texto
    let numero2 = +document.getElementById('num2').value; 
    mostrarResultado(numero1 + numero2); //acá se determina la función matemática que se realizará
}

function resta(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 - numero2);
}

function multi(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 * numero2);
}

function division(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 / numero2);
}

function potencia(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function raiz(){
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(Math.sqrt(numero2));
}

function ce(){
   let display = document.getElementById('display').value = ' '; // al no ponerle nada hara que se elimine lo que estaba mostrando
   let num1 = document.getElementById('num1').value = ' ';
   let num2 = document.getElementById('num2').value = ' ';
}
