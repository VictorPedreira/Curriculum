const buttonbars = document.getElementById('buttonbars');
const buttonx = document.getElementById('buttonx');
const infosElement = document.getElementById('infoabout');
var isopen = false;

function sidebar() {
    if (isopen == false){
        infosElement.style.display = 'flex';
    } 
    isopen = !isopen;
}

function closeside(){
    if (isopen == true){
        infosElement.style.display = 'none';
    }
    isopen = !isopen;
}

buttonbars.addEventListener('click', sidebar);
buttonx.addEventListener('click', closeside);