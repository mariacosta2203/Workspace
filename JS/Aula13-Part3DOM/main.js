let paragrafo = document.querySelectorAll('p')
// paragrafo[0].style.color = 'blue'

for(let x = 0; x < paragrafo.length; x++) {
    paragrafo[x].style.color = 'purple'
}
console.log(paragrafo)

let j = document.querySelector('p.exemplo')
j.innerHTML = 'Foi alterado aqui o texto com as lagrimas dos alunos'

j.style.color = 'blue'

// fazendo em uma linha
let y = document.querySelector('#exemplo02').style.color = 'gray'