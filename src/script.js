///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
let resultado;

function Calculadora(num1, num2, operador){
  if(operador == '+' || operador == '-' || operador == '*' || operador == '/'){
    resultado = eval(num1 + (operador) + num2)
   } else if(operador = 'e'){
  visor.value = eval(num1 ** num2)
    }
      if(resultado == undefined || visor.value > 1000000){
        resultado === 'ERRO'
      }
          return resultado
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}