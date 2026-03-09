/**
 * 
 */

//variaveis
const saberMais = document.querySelectorAll(".saberTexto");
const btnInvestigacao = document.querySelectorAll('button[name="investigacaoBotao"]');
const slides  = document.querySelectorAll(".parceria-slide");
const dots = document.querySelectorAll(".parceria-dot");
const btnPrev = document.querySelector(".parceria-prev");
const btnNext = document.querySelector(".parceria-next");


/**
 * 
 */

btnInvestigacao.forEach((btn) => {
    btn.addEventListener("click", function() {
        const contentor = this.closest('.investigacao-contentor');
        const saberMais = contentor.querySelector(".saberTexto");

        if (saberMais.style.display === "block") {
            saberMais.style.display = "none";
            this.textContent = "Saber Mais";
        } else {
            saberMais.style.display = "block";
            this.textContent = "Fechar";
        }
    });
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
