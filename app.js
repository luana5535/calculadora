const prompt = require ('prompt-sync')()

let primNum = prompt('Digite o primeiro número:')
let operador = prompt('Escolha uma operação:')
let segNum = prompt('Escolha o segundo número:')

primNum = parseFloat(primNum)
segNum = parseFloat(segNum)

function calculadora(primNum, operador, segNum) {
    switch(operador) {

        case '+': 
        return primNum + segNum
        break

        case '-':
        return primNum - segNum
        break

        case '*':
        return primNum * segNum
        break

        case '/':
        return primNum / segNum
        break

        case '%':
        return  (primNum * segNum) / 100
        break

        default:
        console.log('Opção inválida')
        break
    }
}
if(isNaN(primNum) || isNaN(segNum)) {
    console.log('Digite apenas números')
}
else {
let resultado = calculadora(primNum, operador, segNum)
console.log(`O resultado da operação é ${resultado}`)
}
