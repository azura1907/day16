const divs = document.querySelectorAll('.column');

let isXturn = true;

function clickCol(event){
    // refer event ofject trên w3school
    if (isXturn){
        // alert ('X turn');
        console.log(event);
        
        event.target.classList.add('x-turn');
    }

    if (!isXturn){
        // alert('O turn');
        event.target.classList.add('o-turn');
    }

    isXturn = !isXturn;
}

divs.forEach(function(btn){
    btn.addEventListener('click', clickCol);
})

