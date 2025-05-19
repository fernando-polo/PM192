// b) Convierte esta función tradicional a una arrow function que haga exactamente lo mismo:
// function cuadrado(numero){
//     return numero + numero
// }

// console.log(cuadrado(20))

const cuadrado = numero => {
    return numero * numero
}

console.log(cuadrado(20))
console.log(cuadrado(35))
console.log(cuadrado(30))