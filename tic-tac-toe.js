window.onload = () => {
   let divs = document.getElementById('board').
   querySelectorAll('div');
   for(var i = 0 ; i<= divs.length ; i++) {
    divs[i].classList.add('square');
   };
}