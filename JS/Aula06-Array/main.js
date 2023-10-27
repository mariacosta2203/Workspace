var numeros = [54, 111, 58, 853, 17, 75, 30] //array unidimensional

console.log(numeros)
console.log(numeros[4])

// RETORNAR OUTRO VALOR
console.log("Antes: " + numeros)
numeros[4] = 'Yen'
console.log("Depois: " + numeros)

var matrix = [
    ["ICarly", 2011, 10],
    ["Os Feiticeiros de Waverly Place", 2007, 10],
    ["Doug", 1999, 8.5]
]

console.log(matrix)
console.log(matrix[0][2])
//                 L  C          L(LINHA) C(COLUNA)
console.log(matrix[2][1])

//RETORNAR OUTRO VALOR

console.log("Antes: " + matrix)
matrix[2][1] = '1800'
console.log("Depois: " + matrix)
console.clear()

var numArray = [3, 6 , 54, 24, 554, 35, 234]

console.log(numArray)
let receba = numArray.toString()

console.log(receba)

let testJoin = numArray.join(" $ ")
console.log(testJoin )
console.log(numArray.length)

let retirarValor = numArray.pop()
console.log(retirarValor)
console.log(numArray)

let informacaoNova = numArray.push("Kiwi")
console.log(numArray)
console.log(informacaoNova)

let retiraInicio = numArray.shift()
console.log(numArray)
console.log(retiraInicio)

let inseriNovo = numArray.unshift("Kiwi")
console.log(numArray)
delete numArray[2]



