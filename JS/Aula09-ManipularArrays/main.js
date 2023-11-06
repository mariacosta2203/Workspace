const frutas = ['apple', 'orange', 'cherry'];

frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
}

console.clear();

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);

console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

console.clear();

const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});

console.log(filtroIdade);

console.clear();
const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];
console.log(
meuArray.find((fruta) => {
return fruta.nome === 'cerejas';
})
);  

