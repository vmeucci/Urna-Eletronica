// Variáveis para editar o conteúdo

let votoDecidido = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let numeros = document.querySelector('.d-1-3');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');

// Variáveis de ambiente

let etapaAtual = 0;
let numeroDigitado = '';

function iniciarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++){
        i === 0 ? numeroHtml += '<div class="numero pisca"></div>' : numeroHtml += '<div class="numero"></div>';
    }

    votoDecidido.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){

}

function clicou(n) {
    let eNumero = document.querySelector('.numero.pisca');
    if(eNumero !== null) {
        eNumero.innerHTML = n; 
        numeroDigitado = `${numeroDigitado}${n}`; 

        eNumero.classList.remove('pisca');
        eNumero.nextElementSibling !== null ? eNumero.nextElementSibling.classList.add('pisca') : atualizaInterface();
        
    }
}

function nulo() {
    
}

function corrige() {
    
}

function confirma() {
    
}

iniciarEtapa();