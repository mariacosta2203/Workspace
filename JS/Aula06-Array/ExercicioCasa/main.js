let licaoUnidimensional = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]

let tranformandoPrimeiro = licaoUnidimensional.toString()
let retornandoJoin = licaoUnidimensional.join(" / ")
let inserindoComeco = licaoUnidimensional.unshift("IOS")

console.log(licaoUnidimensional)
console.log(licaoUnidimensional.length)
console.log(licaoUnidimensional[6])
console.log(tranformandoPrimeiro)
console.log(retornandoJoin)
console.log(inserindoComeco)

// console.clear()

let licaoBidimensional = [ ["HTML", 1993, "CSS", 1996], 
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995],
]

let inserindoInformacao = licaoBidimensional.push("pipoca")
console.log(inserindoInformacao)

console.log(licaoBidimensional)
console.log(licaoBidimensional.length)
console.log(licaoBidimensional[2][1])

licaoBidimensional[1][2] = "JavaScript"
console.log(licaoBidimensional)
delete licaoBidimensional[2][2]








