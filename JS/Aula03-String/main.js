var numero01 = 7;

var numero02 = 3;

console.log(`${numero01 + numero02}`)
console.log(numero01 + numero02)

console.clear()

const string01 = "Instituto da Oportunidade Social"
console.log(string01);
console.log("posicao 10" + string01.charAt(10))
console.log("posicao 11" + string01.charAt(11))

const string02 = "Instituto da Oportunidade Social"
console.log("Quantidade de caracteres: " + string02.length)

const string03 = "Instituto da Oportunidade Social"
console.log("Tudo em maiusculo: " + string03.toUpperCase())
console.log("Tudo em maiusculo: " + string03.toLowerCase())

console.clear()

const string04 = "Maria"
console.log(string04.substring(1, 4)) 

// console.clear()

var textoOriginal = "Eduarda"
var textoAlterado = "Maria"

let replacene = textoOriginal.replace("Eduarda", textoAlterado)

console.log("Texto original: " + textoOriginal)
console.log("Texto alterado: " + textoAlterado)

// console.clear()

var retirada = "          Viva à vida é uma festa       "
// console.log(retirada)
console.log(retirada.trim())
