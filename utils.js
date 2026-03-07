const  scrollbutton= document.querySelector(".scroll-to-top"); 

const  refreshbuttonVisibility = () =>{
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

document.addEventListener("scroll",(e)=> {
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