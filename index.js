let n1, n2;

function getNumbers(){
    n1 = parseInt(prompt('Ingrese un número del 1 al 50'))
    n1 = validation(n1);
    n2 = parseInt(prompt('Ahora ingrese otro número del 1 al 50'));
    n2 = validation(n2);
    
    console.log(n1, n2)
    
}

function validation(number){

    if (number === null || number > 50 || number < 1 || number === ' ' || number === isNaN) {
        number = prompt('Ingrese un número válido');
        return number
    }
    return number
}

//SUMA

function sum(n1, n2) {
    return n1 + n2
}

//let result = sum(n1, n2);
console.log(sum(n1, n2))

//PRIMOS

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            return false
    }
    return true
}

console.log(isPrime(n1), isPrime(n2))


function printPrimos(n1, n2) {

    let resultPrimos = '';
    let primo1, primo2;

    if (!isPrime(n1) && !isPrime(n2)) {
        resultPrimos += 'Ninguno es primo'
    } else if (isPrime(n1) && isPrime(n2)) {
        resultPrimos += 'Ambos son primos'
    } else if (isPrime(n1) === isPrime(n2)) {
        resultPrimos += `${primo1}`
    }

    primo1 = isPrime(n1) ? `${n1} es primo` : `${n1} no es primo`;
    primo2 = isPrime(n2) ? `${n2} es primo` : `${n2} no es primo`;

    if (resultPrimos === '') {
        resultPrimos += `${primo1} y ${primo2}`;

    }
    return resultPrimos;
}

console.log(printPrimos(n1, n2))
//let primos = printPrimos(n1, n2);


//PARES

function parImpar(number) {
    if (number % 2 === 0) {
        return true
    }
    return false
}

function printPares(n1, n2) {

    let resultPares = '';
    let par1, par2;

    if (!parImpar(n1) && !parImpar(n2)) {
        resultPares += 'Ninguno es par'
    } else if (parImpar(n1) &&parImpar(n2)) {
        resultPares += 'Ambos son pares'
    } else if (parImpar(n1) ===parImpar(n2)) {
        resultPares += `${par1}`
    }

    par1 = parImpar(n1) ? `${n1} es par` : `${n1} no es par`;
    par2 = parImpar(n2) ? `${n2} es par` : `${n2} no es par`;

    if (resultPares === '') {
        resultPares += `${par1} y ${par2}`;

    }
    return resultPares;
}

console.log(printPares(n1, n2));
//let pares = printPares(n1, n2);

function showArray() {

    let arrayPares = [];

    function printImpares(limit) {
        for (let i = `${n1}`; i >= limit; i--) {
            if (i % 2 === 1) {
                console.log(i)
                arrayPares.push(' ' + i)
            }
        }
    }

    function printPares(limit) {
        for (let i = `${n1}`; i <= limit; i++) {
            if (i % 2 === 0) {
                console.log(i)
                arrayPares.push(' ' + i)
            }
        }
    }

    if ((n1) < (n2)) {
        printPares(n2)
    } else if ((n1) > (n2)) {
        printImpares(n2)
    } else if ((n1) === (n2)) {
        arrayPares += n1;
    }

    return arrayPares

}

console.log(showArray(n1, n2));
//let array = showArray(n1, n2);

function finalResult(){
    getNumbers()

    let result = sum(n1, n2);
    let primos = printPrimos(n1, n2);
    let pares = printPares(n1, n2);
    let array = showArray(n1, n2);

    alert(`La suma de ambos números es ${result} \n${primos}.\n${pares}\n${array}`);

}

const btn = document.getElementById('button');
btn.addEventListener('click', finalResult)


