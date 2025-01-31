/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
    passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
    passo 2 - dar um jeito de indentificar o clique do usuario na seta avancar 
    passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele 
    passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
    passo 3 - fazer aparecer o cartão anterior da lista
    passo 4 - buscar o cartão que esta selecionado e esconder 

*/
//OBJETIVO 1
//passo 1
const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//passo 2
btnAvancar.addEventListener("click", function() {

    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

//passo 4
    esconderCartaoSelecionado();

//passo 3
    cartaoAtual++;
    mostrarCartao();
})

//OBJETIVO 2
//passo 1
const btnvoltar = document.getElementById("btn-voltar");

//passo 2
btnvoltar.addEventListener("click", function (){

    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

//passo 4
esconderCartaoSelecionado();
//passo 3 
   cartaoAtual--;
   mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
