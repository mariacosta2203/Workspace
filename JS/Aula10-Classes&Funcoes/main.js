// const celular = {
//     marca: `Apple`,
//     modelo: `Iphone 15 Pro Max`,
//     cor: `Rosa`,
//     memoria: `512gb`,
//     memoriaRam: `16gb`
// }



class celular{
    constructor(marca, modelo, cor, memoria, memoriaRam) { 
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.memoria = memoria;
        this.memoriaRam = memoriaRam;
        this.isDesligado = false
    }

    ligar(){
        console.log('Ligando o celular.........')
    }
    
    desligar(){
        if(this.isDesligado === true){
            return 'Desligando.............'
        }else{
            return 'Não vou desligar seu banana, catapimbas'
        }
    }

    pesquisa(){
        console.log('Pesquisando..............')
    }
    
}

var motorola = new celular('Rosa', 'Sansumg 2002', 56, '32', '2600g')
console.log(motorola)
// console.log(motorola.ligar())
console.log(motorola.desligar())


// console.log(motorola.cor)
// console.log(motorola.marca)
// console.log(motorola.modelo)
// console.log(motorola.memoria)
// console.log(motorola.memoriaRam)