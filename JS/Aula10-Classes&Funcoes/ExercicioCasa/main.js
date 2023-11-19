class contaBancaria{
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
           this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança(){
       const desconto = (this.salario * 1.5)/100
       const resultado = this.salario - desconto
       return `O salário novo é: ${resultado}`
    }
    
    contaCorrente(){
        const desconto = (this.salario * 3.6)/100
        const resultado = this.salario - desconto;
        return `O salário novo é: ${resultado}`
    }

    contaEstudante(){
        const desconto = (this.salario * 1.2)/100
        const resultado = this.salario - desconto
        return `O salário novo é: ${resultado}`
    }
}

const aluno0 = new contaBancaria('Maria', '18', 3780, 'Feminino', '156', '45689', 'contaEstudante')
const aluno1 = new contaBancaria('Isis', '15', 1000, 'Feminino', '670', '123456', 'contaCorrente');
const aluno2 = new contaBancaria('Tatitana', '34', 1200, 'Feminino', '560', '654321', 'contaPoupança');

console.log(aluno0)
console.log(aluno0.contaEstudante())

