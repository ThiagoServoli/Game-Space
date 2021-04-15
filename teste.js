const p = document.getElementById('contador');

let contador = 0;
    
p.innerHTML = contador;


    
window.document.addEventListener('keyup', apertar );

    function apertar (event) {
    
        var tecla = event.keyCode
    
    if (tecla === 32){
        p.innerHTML = ++contador 
    } 

};