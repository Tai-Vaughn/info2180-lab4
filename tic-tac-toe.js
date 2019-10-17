setGameBoard= () => {
    var turn = true;
    var button = document.getElementsByClassName('btn');
    var divs = document.getElementById('board').querySelectorAll('div');

    for (var i = 0 ; i < divs.length; i++){
        divs[i].classList.add('square');
        divs[i].addEventListener('click',function() {
            if(turn){
                this.classList.add('X');
                this.textContent='X';
                turn = !turn;
            } else {
                this.classList.add('O');
                this.textContent='O';
                turn = !turn;
            }
            
        })

        divs[i].addEventListener('mouseover' , function () { this.classList.add('hover')})
        divs[i].addEventListener('mouseleave' , function (){ this.classList.remove('hover')})
    }
}

resetGame = () => {
    var button = document.getElementsByClassName('btn');
    var divs = document.getElementById('board').querySelectorAll('div');

    button[0].addEventListener('click', function() {
        for (var i = 0 ; i<divs.length ; i++){
            divs[i].className = 'square' ;
            divs[i].textContent = '';
        }
    })
}

playermoves = (item) => {
    var player1 = true;
    if (player1){
        item,this.textContent="X";
    }
}
window.onload = () => {   
 setGameBoard() 
 resetGame()
}
