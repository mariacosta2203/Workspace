function somaNumeros(num1 =0, num2 =0, num3 =0){
    return num1 + num2 + num3
}

let x = somaNumeros(4, 5, 7)
console.log(x)

let soma = somaNumeros(10, 7, 3)
console.log("Essa é a variável soma: " + soma)

console.clear()



function imparPar(num){
    if(num % 2 == 0){
        return `O número ${num} é par`
    }else if(num % 2 == 1){
        return `O número ${num} é impar`
    }else{
        return `Não consegui identificar se é impar ou par`
    }
}

let recebePrimeiroNumero = imparPar(5)
console.log(recebePrimeiroNumero)

let recebeSegundoNumero = imparPar(5.75)
console.log(recebeSegundoNumero)

var contexto = 5.75 % 2;
console.log(contexto)

console.clear()

const celular = {
    marca: `Apple`,
    modelo: `Iphone 15 Pro Max`,
    cor: `Rosa`,
    memoria: `512gb`,
    memoriaRam: `16gb`
}

console.log(celular)

 console.clear()

 // Eventos
console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};

const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
    };
