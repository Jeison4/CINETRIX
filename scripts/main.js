
var imagenes = ['images/principal/1366_2000.jpg', './images/principal/aventura.jpg', 'images/principal/drama.jpg', 'images/principal/galacticas.jpg', 'images/principal/infantiles.jpg', 'images/principal/terror.jpg'],
    cont= 0;

    function carrousel(contenedor){
        contenedor.addEventListener('click', e =>{
            let atras = contenedor.querySelector('.atras'),
                adelante = contenedor.querySelector('.adelante'),
                 img = contenedor.querySelector('.imag'),
                 tgt= e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont -- ;
                }else{
                    img.src = imagenes[imagenes.length - 1];
                    cont= imagenes.length - 1;
                }
            }else if(tgt==adelante){
                if(cont < imagenes.length - 1){
                    img.src= imagenes[cont + 1];
                    cont ++ ;
                }else{
                    img.src = imagenes[0];
                    cont =0;
                }
            }
           
        });
}
    document.addEventListener("DOMContentLoaded", () => {
        let contenedor = document.querySelector('.contenedor');

        carrousel(contenedor);
    })

    