document.addEventListener('DOMContentLoaded', function() {
    const imagen1 = document.getElementById('jorge');
    let posX1 = 0;
    let posY1 = 300;
    let direccionX1 = 0;
    let direccionY1 = 0;

    const imagen2 = document.getElementById('juan');
    let posX2 = 300;
    let posY2 = 300;
    let direccionX2 = 0;
    let direccionY2 = 0;

    const paso = 10; // Tamaño del paso de movimiento
    const limiteMinX = 0;
    const limiteMaxX = container.clientWidth - imagen1.offsetWidth;
    const limiteMinY = 0;
    const limiteMaxY = container.clientHeight - imagen1.offsetHeight;

    // Función para mover las imágenes
    function moverImagenes() {
        // Mover la primera imagen
        let nuevaPosX1 = posX1 + direccionX1 * paso;
        let nuevaPosY1 = posY1 + direccionY1 * paso;

        // Verificar límites horizontales para la primera imagen
        if (nuevaPosX1 < limiteMinX) {
            nuevaPosX1 = limiteMinX;
        } else if (nuevaPosX1 > limiteMaxX) {
            nuevaPosX1 = limiteMaxX;
        }

        // Verificar límites verticales para la primera imagen
        if (nuevaPosY1 < limiteMinY) {
            nuevaPosY1 = limiteMinY;
        } else if (nuevaPosY1 > limiteMaxY) {
            nuevaPosY1 = limiteMaxY;
        }

        posX1 = nuevaPosX1;
        posY1 = nuevaPosY1;

        imagen1.style.left = posX1 + 'px';
        imagen1.style.top = posY1 + 'px';

        // Mover la segunda imagen
        let nuevaPosX2 = posX2 + direccionX2 * paso;
        let nuevaPosY2 = posY2 + direccionY2 * paso;

        // Verificar límites horizontales para la segunda imagen
        if (nuevaPosX2 < limiteMinX) {
            nuevaPosX2 = limiteMinX;
        } else if (nuevaPosX2 > limiteMaxX) {
            nuevaPosX2 = limiteMaxX;
        }

        // Verificar límites verticales para la segunda imagen
        if (nuevaPosY2 < limiteMinY) {
            nuevaPosY2 = limiteMinY;
        } else if (nuevaPosY2 > limiteMaxY) {
            nuevaPosY2 = limiteMaxY;
        }

        posX2 = nuevaPosX2;
        posY2 = nuevaPosY2;

        imagen2.style.left = posX2 + 'px';
        imagen2.style.top = posY2 + 'px';
    }

    // Detectar las teclas presionadas
    document.addEventListener('keydown', function(event) {
        const tecla = event.key.toLowerCase();
        switch (tecla) {
            case 'w':
                direccionY1 = -1; // Arriba para la primera imagen
                break;
            case 'a':
                direccionX1 = -1; // Izquierda para la primera imagen
                break;
            case 's':
                direccionY1 = 1; // Abajo para la primera imagen
                break;
            case 'd':
                direccionX1 = 1; // Derecha para la primera imagen
                break;
            case 'i':
                direccionY2 = -1; // Arriba para la segunda imagen
                break;
            case 'j':
                direccionX2 = -1; // Izquierda para la segunda imagen
                break;
            case 'k':
                direccionY2 = 1; // Abajo para la segunda imagen
                break;
            case 'l':
                direccionX2 = 1; // Derecha para la segunda imagen
                break;
            default:
                break;    
        }
    });

    // Detectar las teclas liberadas
    document.addEventListener('keyup', function(event) {
        const tecla = event.key.toLowerCase();
        switch (tecla) {
            case 'w':
            case 's':
                direccionY1 = 0; // Detener movimiento vertical para la primera imagen
                break;
            case 'a':
            case 'd':
                direccionX1 = 0; // Detener movimiento horizontal para la primera imagen
                break;
            case 'i':
            case 'k':
                direccionY2 = 0; // Detener movimiento vertical para la segunda imagen
                break;
            case 'j':
            case 'l':
                direccionX2 = 0; // Detener movimiento horizontal para la segunda imagen
                break;
            default:
                break;    
        }
    });

    // Actualizar la posición de las imágenes en intervalos regulares
    setInterval(moverImagenes, 50);
});