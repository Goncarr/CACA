const nomeEl = document.getElementById("nome");
const mensagemEl = document.getElementById("mensagem");
const emailEl = document.getElementById("email");
const falhaEL = document.querySelector(".envio-erro");
const sucessoEL = document.querySelector(".envio-sucesso");
const  scrollbutton= document.querySelector(".scroll-to-top"); 
const saberMais = document.getElementById("saberTexto");
const btnInvestigacao = document.getElementById("investigacaoBotao")

let isShowMore = false;

/**
 * 
 * @param {*} ms 
 * @returns 
 */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Verifica se o email tem um inicio e fim 
 * @param {*} email 
 * @returns None
 */
function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

/**
 * 
 */
async function sendEmail(){
    if (nomeEl.value == ""){
        falhaEL.innerHTML = "Erro: Nome inválido";
        falhaEL.style.display= "flex";
        await sleep(3000)
        falhaEL.style.display= "none";
    }
    else if (emailEl.value == "" || !validateEmail(emailEl.value)){
        falhaEL.innerHTML = "Erro: Email vazio ou inválido";
        falhaEL.style.display= "flex";
        await sleep(3000)
        falhaEL.style.display= "none";
    }
    else if (mensagemEl.value == ""){
        falhaEL.innerHTML = "Erro: Mensagem vazia";
        falhaEL.style.display= "flex";
        await sleep(3000)
        falhaEL.style.display= "none";
    }
    else{
        sucessoEL.style.display= "flex";
        await sleep(3000)
        sucessoEL.style.display= "none";
    }
}

const  refreshbuttonVisibility = ()=>{
    if(document.documentElement.scrollTop <= 150){
        scrollbutton.style.display="none";
    }else{
        scrollbutton.style.display="block";
    }
};

refreshbuttonVisibility();
 
scrollbutton.addEventListener("click",() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    

});

scrollbutton.addEventListener("scroll",(e)=> {
    refreshbuttonVisibility();
});

btnInvestigacao.addEventListener("click", () => {
    isShowMore = !isShowMore
    
    if (isShowMore){
        saberMais.style.display = "block";
        btnInvestigacao.textContent = "Read Less"
    } else{
        saberMais.style.display = "none";
        btnInvestigacao.textContent = "Saber Mais"
    }
});