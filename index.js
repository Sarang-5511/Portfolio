var topbutton=document.getElementById("totop");
window.onscroll=function(){
    if(document.body.scrollTop> 40 || document.documentElement.scrollTop > 40){
        topbutton.style.display="block";
    }
    else{
        topbutton.style.display="none";
    }
    
}
topbutton.addEventListener('click',Topup);
function Topup(){
    
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}