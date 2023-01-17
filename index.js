let miPrompt1;
let miPrompt2;

miPrompt1 = prompt('Ingrese un número del 1 al 50');

if (miPrompt1 === null || miPrompt1 > 50 || miPrompt1 < 1 || miPrompt1 === '' || miPrompt1 === NaN) {
    miPrompt1 = prompt('Ingrese un número válido');
}
miPrompt2 = prompt('Ahora ingrese otro número del 1 al 50');

if (miPrompt2 == null || miPrompt2 > 50 || miPrompt2 < 1 || miPrompt2 === '' || miPrompt2 === NaN) {
    miPrompt2 = prompt('Ingrese un número válido');
}

let n1 = parseInt(miPrompt1, 10);
console.log(n1)
let n2 = parseInt(miPrompt2, 10);
console.log(n2)

//SUMA

function sum(n1, n2) {
    return n1 + n2
}

let result = sum(n1, n2);
console.log(sum(n1, n2));

//PRIMOS
// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++) {
//         if (number % factor === 0)
//             return false
//     }
//     return true
// }

// console.log(isPrime(n1), isPrime(n2))

// function printPrimos(n1, n2){
    
//         let resultPrimos = '';
//         let primo1, primo2;

//     if(!isPrime(n1) && !isPrime(n2)){
//         resultPrimos += 'Ninguno es primo'
//     }else if(isPrime(n1) && isPrime(n2)){
//         resultPrimos += 'Ambos son primos'
//     }
    
//     primo1 = isPrime(n1) ? `${n1} es primo` : `${n1} no es primo`; 
//     primo2 = isPrime(n2) ? `${n2} es primo` : `${n2} no es primo`;

//     if (resultPrimos === ''){
//         resultPrimos += `${primo1} y ${primo2}`;
    
//     }
//     return resultPrimos;
// }

// console.log(printPrimos(n1, n2))
// let primos = printPrimos(n1,n2);


//PARES

function showPares(){
    
    let resultPares = '';

    function parImpar(number) {
        if (number % 2 === 0) {
            return `${number} es par`
        }
        return `${number} es impar`
    }

    function printImpares(limit){
        for (let i = `${n2}`; i >= limit; i--){
            if (!(i % 2 === 0))
            console.log(i)
            return i
        }   
    }

    function printPares(limit){
        for (let i = `${n1}`; i <= limit; i++){
            if (i % 2 === 0)
            console.log(i)
            return i
        }   
    }


    if ((n1) < (n2)){
        resultPares += printPares(n2)
    }else if ((n1) > (n2)){
        resultPares += printImpares(n1)
    }else if((n1) === (n2)){
        resultPares += parImpar(n1)
    }else{
        resultPares += `${parImpar(n1)} y ${parImpar(n2)}`
    }

    console.log(resultPares)
    return resultPares;
}

console.log(showPares(n1, n2));
let pares = showPares(n1,n2);



alert(`La suma de ambos números es ${result} \n.\n${pares}`);

// la suma es:
// el n1 es primo y el n2 no es primo
// el n1 es par y 45 es impar 
// (numeros asc o desc)




