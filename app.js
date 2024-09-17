alert("Boas vindas ao jogo do número secreto!")
let numeroMaximo = 500;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)

console.log(numeroSecreto)

let chute
let tentativas = 0 

while(chute != numeroSecreto){
    chute  = prompt(`Escolha um número de 1 a ${numeroMaximo}`)

    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor do que ${chute}`)
        }else{
            alert(`O número secreto é maior do que ${chute}`)
        } 
    } 
    tentativas++ 
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"

alert(`Isso ai! você acertou o número secreto(${numeroSecreto}) com ${tentativas} ${palavraTentativa}`)
