function add(num1, num2) {
    return num1 + num2;
}
add(3, 5);
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

function multiply(num1, num2) {
    let resultado = 0;

    for (let contador = 0; contador < num2; contador++) {
        resultado = add(resultado, num1)
    }
    return resultado
}
multiply(4, 6);

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(x, n) {
    let resultado = x
    for (let contador = 1; contador < n; contador++) {
        resultado = multiply(resultado, x)
    }
    return resultado;
}
power(3, 4)

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(number) {
    let resultado = 1;
    for (let contador = number; contador > 1; contador--) {
        resultado = multiply(resultado, contador)
    }
    return resultado;
}

factorial(5)

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(n) {
    let resultado = 0;
    let numbFib = [];
    numbFib.push(0, 1, 1);

    for (let contador = 3; contador <= n; contador++) {
        let num1 = contador - 2
        let num2 = contador - 1
        let pos1 = numbFib[num1]
        let pos2 = numbFib[num2]

        resultado = add(pos1, pos2)
        numbFib.push(resultado)

    }
    return numbFib[n]
}
fibonacci(7)

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
