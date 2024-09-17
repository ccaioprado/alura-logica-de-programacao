//  Exercício 1
 let diaDaSemana = prompt("Qual é o dia da semana?")

 if(diaDaSemana == "Sabado" || diaDaSemana == "Domingo"){
    alert("Bom fim de semana!")
 }

//  Exercício 2
 let numero = prompt("Digite um número")

 if(numero > 0){
    alert("Esse número é positivo")
 }else{
   if(numero == 0 ){
      alert("O número é 0")
   }else{
      alert("Esse número é negativo")
   }
 }

// Exericício 3

let pontos = prompt("Digite seus pontos: ")

if(pontos >= 100){
    alert("Parabens, você venceu!")
}


// Exercício 4

let saldo = 700

alert(`Seu saldo atual é de: ${saldo} reias`)



// Exercício 5

let nome = prompt("Digite seu nome: ")
alert(`Seja bem vindo ${nome}`)
