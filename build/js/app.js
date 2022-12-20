

document.addEventListener('DOMContentLoaded',   function(){
    iniciarapp();
})

function iniciarapp(){
    creargaleria();
    navegacionFija();
}  


function navegacionFija(){
    const barra=document.querySelector('.header');
    const sobrefestival=document.querySelector('.sobre-festival');
    const body=document.querySelector('body');  

    window.addEventListener('scroll',function (){
        if(sobrefestival.getBoundingClientRect().bottom<0){//posicion en la pantalla getbuondingclientreact
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo'); 
            body.classList.remove('body-scroll');
        }
    })

}
function creargaleria(){
    const galeria= document.querySelector('.galeria-imagenes'); //usando dom seleccionando la clase creada en html
    for(let i=1;i<=12;i++){
        const imagen=document.createElement('picture');
        imagen.innerHTML=` 
        <picture>
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img src="build/img/thumb/${i}.webp" alt="imagen-galeria">
         </picture>
        `;  

        imagen.onclick = function(){
            mostrarimagen(i);   
        }
        galeria.appendChild(imagen);
        
        
    }

  
}

function mostrarimagen(id){
        
    const imagen=document.createElement('picture');
    imagen.innerHTML=` 
    <picture>
    <source srcset="build/img/grande/${id}.webp" type="image/webpe">
    <img src="build/img/grande/${id}.webp" alt="imagen-galeria">
     </picture>
    `;    

    //crear el overlay con la imagen
    const overlay = document.createElement('DIV');//creando un div
    overlay.appendChild(imagen);//agregando la imagen a ese div
    overlay.classList.add('overlay'); //añadiendole una clase al div llamada overlay
    overlay.onclick=function(){
        const body= document.querySelector('body');//selecciona el body
    body.classList.remove('fijar-body');
    overlay.remove();//borrar overlay
    }

    // botton para cerrar modal u overlay
    const cerrarfoto= document.createElement('P');
    cerrarfoto.textContent='X';
    cerrarfoto.classList.add('btn-cerrar');
    cerrarfoto.onclick=function(){
    const body= document.querySelector('body');//selecciona el body
    body.classList.remove('fijar-body');
    overlay.remove();//borrar overlay
    };
    overlay.appendChild(cerrarfoto);
    
    //a{adirlo al html
    const body= document.querySelector('body');//selecciona el body
    body.appendChild(overlay);//añadiendo el overlay al body
    body.classList.add('fijar-body');


}