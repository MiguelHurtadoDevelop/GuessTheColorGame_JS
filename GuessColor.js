
window.onload = function () {
    

    var solucion = crearColorAleatorio();
    document.getElementById('Titulo').innerHTML = solucion
    jugar("easy", solucion);

   const easy = document.getElementById('easy');
   const hard = document.getElementById('hard');
    const newColors = document.getElementById('cambiarColores');
    var dificultad = "easy";
    easy.addEventListener("click", function(){

        
        dificultad = "easy";
        jugar(dificultad, solucion);
    });

    hard.addEventListener("click", function(){
            
            
            dificultad = "hard";
            jugar(dificultad, solucion);
    });
    newColors.addEventListener("click", function(){
        
        jugar(dificultad, solucion);
    });

    
    


    

};


function jugar(nivel, solucion){
    
    header = document.querySelector('header');
    header.style.backgroundColor = "rgb(33, 41, 210)";
    solucion = crearColorAleatorio();
    document.getElementById('Titulo').innerHTML = solucion;

    if(nivel == "easy"){
        var numeroAleatorio = Math.floor(Math.random() * 3);

        var cuadrados = document.getElementsByClassName('cuadrado');
        for(var i = 0; i < cuadrados.length; i++){
            cuadrados[i].style.backgroundColor = crearColorAleatorio();
            if(i>2){
                cuadrados[i].style.display = "none";
            }

        }
        cuadrados[numeroAleatorio].style.backgroundColor = solucion;
         
    }

    if(nivel == "hard"){
        var numeroAleatorio = Math.floor(Math.random() * 6);

        var cuadrados = document.getElementsByClassName('cuadrado');
        for(var i = 0; i < cuadrados.length; i++){
            cuadrados[i].style.backgroundColor = crearColorAleatorio();
            if(i>2){
                cuadrados[i].style.display = "";
            }
        }

        cuadrados[numeroAleatorio].style.backgroundColor = solucion;
    }
    var vidas = 3;
    const container = document.getElementById('container');

    container.addEventListener("click", function(e){
        
        if(comprobarSolución(solucion, e.target.style.backgroundColor)){
            
            var cuadrados = document.getElementsByClassName('cuadrado');
            if(nivel == "easy"){
                for(var i = 0; i < cuadrados.length; i++){
                    cuadrados[i].style.backgroundColor = solucion;
                    if(i>2){
                        cuadrados[i].style.display = "none";
                    }
                    const header = document.querySelector('header');
                    header.style.backgroundColor = solucion;
                    const Titulo = document.getElementById('Titulo');
                    Titulo.innerHTML = "Has ganado";
                }
            }else if(nivel == "hard"){
                for(var i = 0; i < cuadrados.length; i++){
                    cuadrados[i].style.backgroundColor = solucion;
                    if(i>2){
                        cuadrados[i].style.display = "";
                    }
                    const header = document.querySelector('header');
                    header.style.backgroundColor = solucion;
                    const Titulo = document.getElementById('Titulo');
                    Titulo.innerHTML = "Has ganado";
                }
            }

        }else{
            
            vidas = vidas - 1;
            if(vidas == 0){
                var cuadrados = document.getElementsByClassName('cuadrado');
                if(nivel == "easy"){
                    for(var i = 0; i < cuadrados.length; i++){
                        cuadrados[i].style.backgroundColor = "rgb(255, 0, 0)";
                        if(i>2){
                            cuadrados[i].style.display = "none";
                        }
                        const header = document.querySelector('header');
                        header.style.backgroundColor = "rgb(255, 0, 0)";
                        const Titulo = document.getElementById('Titulo');
                        Titulo.innerHTML = "Has perdido";
                    }
                }else if(nivel == "hard"){
                    for(var i = 0; i < cuadrados.length; i++){
                        cuadrados[i].style.backgroundColor = "rgb(255, 0, 0)";
                        if(i>2){
                            cuadrados[i].style.display = "";
                        }
                        const header = document.querySelector('header');
                        header.style.backgroundColor = "rgb(255, 0, 0)";
                        const Titulo = document.getElementById('Titulo');
                        Titulo.innerHTML = "Has perdido";
                    }
                }
            }

        }
    });



}

function crearColorAleatorio(){
    var randomRGB = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    return randomRGB;
}

function comprobarSolución(solucion, respuesta){
    if (solucion == respuesta){
        return true;
    }
    else{
        return false;
    }
}
