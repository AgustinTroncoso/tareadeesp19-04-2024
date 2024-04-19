document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.getElementById('monitochino');
    let posX1 = 0;
    let posY1 = 0;
    const paso = 10; // Tamaño del paso de movimiento
    const limiteMinX = 0;
    const limiteMaxX = window.innerWidth - imagen.offsetWidth;
    const limiteMinY = 0;
    const limiteMaxY = window.innerHeight - imagen.offsetHeight;


    
    const imagen2 = document.getElementById('homelo');
    let posX2 = 500;
    let posY2 = 0;
    // Función para mover la imagen
    function moverImagen(direccionX, direccionY,personaje) {

        let nuevaPosX = posX1 + direccionX * paso;
        let nuevaPosY = posY1 + direccionY * paso;

        // Verificar límites horizontales
        if (nuevaPosX < limiteMinX) {
            nuevaPosX = limiteMinX;
        } else if (nuevaPosX > limiteMaxX) {
            nuevaPosX = limiteMaxX;
        }

        // Verificar límites verticales
        if (nuevaPosY < limiteMinY) {
            nuevaPosY = limiteMinY;
        } else if (nuevaPosY > limiteMaxY) {
            nuevaPosY = limiteMaxY;
        }

        posX1 = nuevaPosX;
        posY1 = nuevaPosY;


            imagen.style.left = posX1 + 'px';
            imagen.style.top = posY1 + 'px';
        
        }
        function moverImagen1(direccionX, direccionY,) {

            let nuevaPosX = posX2 + direccionX * paso;
            let nuevaPosY = posY2 + direccionY * paso;
    
            // Verificar límites horizontales
            if (nuevaPosX < limiteMinX) {
                nuevaPosX = limiteMinX;
            } else if (nuevaPosX > limiteMaxX) {
                nuevaPosX = limiteMaxX;
            }
    
            // Verificar límites verticales
            if (nuevaPosY < limiteMinY) {
                nuevaPosY = limiteMinY;
            } else if (nuevaPosY > limiteMaxY) {
                nuevaPosY = limiteMaxY;
            }
    
            posX2 = nuevaPosX;
            posY2 = nuevaPosY;
    
    
                imagen2.style.left = posX2 + 'px';
                imagen2.style.top = posY2 + 'px';
            
            }
    

    // Detectar las teclas presionadas
    document.addEventListener('keydown', function(event) {
        const tecla = event.key.toLowerCase();
        switch (tecla) {
            case 'w':
                moverImagen(0, -1,1); // Arriba
                break;
            case 'a':
                moverImagen(-1, 0,1); // Izquierda
                break;
            case 's':
                moverImagen(0, 1,1); // Abajo
                break;
            case 'd':
                moverImagen(1, 0,1); // Derecha
                break;
            case 'i':
                moverImagen1(0, -1); // Arriba
                break;
            case 'j':
                moverImagen1(-1, 0); // Izquierda
                break;
            case 'k':
                moverImagen1(0, 1); // Abajo
                break;
            case 'l':
                moverImagen1(1, 0); // Derecha
                break;
            default:
                break;    
        }
    });


});