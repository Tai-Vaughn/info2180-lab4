
setGameBoard= () => {
    var turn = true;
    var button = document.getElementsByClassName('btn');
    var divs = document.getElementById('board').querySelectorAll('div');

    button[0].addEventListener('click', function() {
        for (var i = 0 ; i<divs.length ; i++){
            divs[i].className = "square"
            divs[i].textContent = ""
        }
    })
    for (var i = 0 ; i < divs.length; i++){
        divs[i].className = 'square';
        divs[i].addEventListener('click',function() {
            if(turn){
                this.className = 'square X'
                this.textContent="X"
                turn = !turn
            } else {
                this.className = 'square O'
                this.textContent="O"
                turn = !turn
            }
            
        })
    }
}

resetGame = () => {
    
    button.addEventListener('click',)
}

playermoves = (item) => {
    var player1 = true;
    if (player1){
        item,this.textContent="X";
    }
}
window.onload = () => {   
 setGameBoard() 
}
