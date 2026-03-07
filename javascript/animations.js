const saberMais = document.getElementById("saberTexto");
const btnInvestigacao = document.getElementById("investigacaoBotao");
const slides  = document.querySelectorAll(".parceria-slide");
const dots = document.querySelectorAll(".parceria-dot");
const btnPrev = document.querySelector(".parceria-prev");
const btnNext = document.querySelector(".parceria-next");


let isShowMore = false

btnInvestigacao.addEventListener("click", () => {
    isShowMore = !isShowMore
    
    if (isShowMore){
        saberMais.style.display = "block";
        btnInvestigacao.textContent = "Fechar";
    } else{
        saberMais.style.display = "none";
        btnInvestigacao.textContent = "Saber Mais";
    }
});

// PARCERIAS

let slideAtual = 0;

function mostrarSlide(indice) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slideAtual = (indice + slides.length) % slides.length;

    slides[slideAtual].classList.add("active");
    dots[slideAtual].classList.add("active");
}

function proximoSlide() {
    mostrarSlide(slideAtual + 1);
}

function slideAnterior() {
    mostrarSlide(slideAtual - 1);
}

btnNext.addEventListener("click", proximoSlide);
btnPrev.addEventListener("click", slideAnterior);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        mostrarSlide(i);
    });
});
