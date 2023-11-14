let odioNaoVai = document.getElementsByClassName('b_12')
for(let t = 0; t <= odioNaoVai.length; t++) {
    odioNaoVai[t].style.backgroundColor = '#BFBFBF';
    odioNaoVai[t].style.border = 'solid 2px #D9BC66';
    odioNaoVai[t].style.padding = '5rem';
    odioNaoVai[t].style.margin = '7rem';
}



const podeSer = () => {
    var botoes = prompt('Por favor insira o seu nome: ');
    var span = document.getElementById('spanBotao')
    console.log(botoes)
    span.innerHTML = `Olá ${botoes} Bem-vindo a nossa academia`
}

