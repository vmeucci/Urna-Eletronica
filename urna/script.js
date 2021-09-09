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
let votoNulo = false;
let votosAtuais = [];


// Funções

function iniciarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numeroDigitado = '';
    votoNulo = false;

    for (let i = 0; i < etapa.numeros; i++) {
        i === 0 ? numeroHtml += '<div class="numero pisca"></div>' : numeroHtml += '<div class="numero"></div>';
    }

    votoDecidido.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numeroDigitado) {
            return true;

        } else {

            return false;
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        votoDecidido.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';

        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {

                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;

            } else {

                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }

        }

        lateral.innerHTML = fotosHtml;

    } else {

        votoDecidido.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`;
    }
}

function clicou(n) {
    let eNumero = document.querySelector('.numero.pisca');
    if (eNumero !== null) {
        eNumero.innerHTML = n;
        numeroDigitado = `${numeroDigitado}${n}`;

        eNumero.classList.remove('pisca');
        eNumero.nextElementSibling !== null ? eNumero.nextElementSibling.classList.add('pisca') : atualizaInterface();

    }
}

function votoBranco() {
    numeroDigitado = '';
    votoNulo = true;

    votoDecidido.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';


}

function corrige() {
    iniciarEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if (votoBranco === true) {
        votoConfirmado = true;
        votosAtuais.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });

    } else if (numeroDigitado.length === etapa.numeros) {
        votoConfirmado = true;
        votosAtuais.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numeroDigitado
        });
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            iniciarEtapa();

        } else {

            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
            console.log(votosAtuais);

        }
    }

}

iniciarEtapa();