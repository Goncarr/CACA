const saberMais = document.getElementById("saberTexto");
const btnInvestigacao = document.getElementById("investigacaoBotao")

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


btnInvestigacao.addEventListener("")