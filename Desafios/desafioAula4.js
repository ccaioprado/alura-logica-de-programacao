// Exercício 1
alert("Seja bem vindo!")

// Exercício 2
let nome = "Caio"

console.log(`Olá ${nome}`)


// Exercício 3
alert(`Olá ${nome}`)

// Exercício 4
let linguagem = prompt("Qual é a linguagem de programação que você mais gosta?")

console.log(linguagem)

// Exercício 5
let valor1 = 5
let valor2 = 10

let resultado = valor1 + valor2

console.log(`A soma de ${valor1} com ${valor2} é igual a ${resultado}`)


// Exercício 6
let resultadoMenos = valor1 - valor2

console.log(`A diferença de ${valor1} menos ${valor2} é ${resultadoMenos}`)

// Exercício 7
let idade = prompt("Digite sua idade: ")

if(idade >= 18){
    alert("Você é maior de idade")
}else{
    alert("Você ainda não é maior de idade")
}

// Exercício 8
let numero = prompt("Digite um número")

if(numero > 0){
    alert("O número é positivo")
}else{
    if(numero < 0){
        alert("O número é negativo")
    }else{
        alert("O número é igual a 0")
    }
}

// Exercício 9
let contador = 1

while(contador >= 10){
    console.log(`O número atual é ${contador}`)
    contador++
}

// Exercício 10
let nota = 9 

if(nota > 7){
    console.log("Você está aprovado")
}else{
    console.log("Você está reprovado")
}

// Exercício 11
let numeroRandon1 = parseInt(Math.random() * 5 + 1)
console.log(numeroRandon1)


// Exercício 12
let  numeroRandon2 = parseInt(Math.random() * 10 + 1)
console.log(numeroRandon2)

// Exercício 13
let numeroRandon3 = parseInt(Math.random() * 1000 + 1)
console.log(numeroRandon3)

