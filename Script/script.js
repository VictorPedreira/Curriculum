var isopen = false
const button = document.getElementById('imgemperfil');
const boxtagElement = document.getElementById('boxtag');
const resumoElement = document.getElementById('resumo');
var largura = window.innerWidth;


function box(){
    largura = window.innerWidth;
    if(largura <= 1100){
        if(isopen == false){
            boxtagElement.style.top = '95px';
            boxtagElement.style.display = 'flex';
            resumoElement.style.display = 'flex';
        } else{
            resumoElement.style.display = 'none';
            boxtagElement.style.display = 'none';
            boxtagElement.style.top = '0px';
        }
    } else {
        if (isopen == false){
            boxtagElement.style.right = '100px';
            boxtagElement.style.display = 'flex';
        }   else {
            boxtagElement.style.display = 'none';
            boxtagElement.style.right = '0px';
    
        }
    }
    
    isopen = !isopen;
}

button.addEventListener('click', box);
