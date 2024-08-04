window.alert('Clik na lâmpada para quebra-la!')

const acendida = document.getElementById('parAcesa');

function lampadaAcesa() {
    const lampada = document.querySelector('.lampada');
    lampada.src = `src/imagens/lampada-acesa.png`;
    acendida.classList.add('parAcesa');
    acendida.innerHTML = 'A lâmpada foi ligada';
    apagada.classList.remove('parApagada');
    quebrada.classList.remove('brick');
    quebrada.innerHTML = '';
    apagada.innerHTML = '';
    parAcesaApagada.innerHTML = '';
    onOff.innerHTML = '';
    botaoLigar.src = 'src/imagens/botao-on.png';
}

const apagada = document.getElementById('parApagada')

function lampadaApagada() {
    const lampada = document.querySelector('.lampada');
    lampada.src = `src/imagens/lampada-apagada.png`;
    apagada.classList.add('parApagada');
    apagada.innerHTML = 'A lâmpada foi desligada';
    acendida.classList.remove('parAcesa');
    quebrada.classList.remove('brick');
    quebrada.innerHTML = '';
    acendida.innerHTML = '';
    parAcesaApagada.innerHTML = '';
    onOff.innerHTML = '';
    botaoLigar.src = 'src/imagens/botao-off.png';
}


const parAcesaApagada = document.getElementById('parAcesaApagada')
function acesaApagada() {
    acesa = !acesa;
    if (acesa) {
        quebrada.innerHTML = '';
        apagada.innerHTML = '';
        acendida.innerHTML = '';
        onOff.innerHTML = '';
        lampada.src = 'src/imagens/lampada-acesa.png';
        parAcesaApagada.classList.add('parAcesaApagada');
        parAcesaApagada.innerHTML = 'Lâmpada acesa';
        botaoLigar.src = 'src/imagens/botao-on.png';
    } else {
        quebrada.innerHTML = '';
        apagada.innerHTML = '';
        acendida.innerHTML = '';
        onOff.innerHTML = '';
        lampada.src = 'src/imagens/lampada-apagada.png';
        parAcesaApagada.classList.add('parAcesaApagada');
        parAcesaApagada.innerHTML = 'Lâmpada apagada'
        botaoLigar.src = 'src/imagens/botao-off.png';
    }
}

let acesa = false;

const lampada = document.querySelector('.lampada');

const quebrada = document.getElementById('quebrada');

function click() {
    acesa = !acesa;
    if (acesa) {
        lampada.src = 'src/imagens/lampada-acesa.png';
        botaoLigar.src = 'src/imagens/botao-on.png';
        quebrada.classList.add('brick');
        quebrada.innerHTML = 'Lâmpada restaurada';
        apagada.innerHTML = '';
        acendida.innerHTML = '';
        parAcesaApagada.innerHTML = '';
        onOff.innerHTML = '';
    } else {
        lampada.src = 'src/imagens/lampada-quebrada.png';
        botaoLigar.src = 'src/imagens/botao-off.png';
        quebrada.classList.add('brick');
        quebrada.innerHTML = `Lâmpada quebrada<br>com um click`;
        apagada.innerHTML = '';
        acendida.innerHTML = '';
        parAcesaApagada.innerHTML = '';
        onOff.innerHTML = '';
    }
}

lampada.addEventListener('click', click);

let botaoLigDesl = false;

const botaoLigar = document.getElementById('alternador-on-off');
const onOff = document.getElementById('onOff')

function botaoOnOff() {
    botaoLigDesl = !botaoLigDesl
    if (botaoLigDesl) {
        botaoLigar.src = 'src/imagens/botao-off.png';
        lampada.src = `src/imagens/lampada-apagada.png`;
        onOff.classList.add('onOff');
        onOff.innerHTML = 'Lâmpada desligada';
        acendida.innerHTML = '';
        parAcesaApagada.innerHTML = '';
        apagada.innerHTML = '';
        quebrada.innerHTML = '';
    } else {
        botaoLigar.src = 'src/imagens/botao-on.png';
        lampada.src = `src/imagens/lampada-acesa.png`;
        onOff.innerHTML = 'Lâmpada ligada'
        acendida.innerHTML = '';
        parAcesaApagada.innerHTML = '';
        apagada.innerHTML = '';
        quebrada.innerHTML = '';
    }
}