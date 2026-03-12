/**
 * 
 */

//variaveis
const btnSaberMais = document.querySelectorAll(".saberTexto");
const btnInvestigacao = document.querySelectorAll('button[name="investigacaoBotao"]');
const slides  = document.querySelectorAll(".parceria-slide");
const dots = document.querySelectorAll(".parceria-dot");
const btnPrev = document.querySelector(".parceria-prev");
const btnNext = document.querySelector(".parceria-next");


let slideIndex = 1;
let slideTimer;


showSlides(slideIndex);


function plusSlides(n) {
  clearTimeout(slideTimer); 
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex"; 
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].className += " active";

  slideTimer = setTimeout(function() {
    plusSlides(1); 
  }, 5000); 
}

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