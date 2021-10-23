// comece a criar a sua função add na linha abaixo

function add(a, b){
    return a + b;
}
// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(a,b){
    return a * b;

}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x, n){
    return x ** n;
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(valor) {
 
    if(valor < 0) {

      return 'Valor deve ser maior ou igual a zero';
    
    } else if ( (valor == 0) || (valor == 1) ) {

      return 1;
     
    } else {

      var fator = 1;
      for( num = valor; num > 1; num--) {
        fator = fator * num;
      }
      return fator;
    } 

}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
