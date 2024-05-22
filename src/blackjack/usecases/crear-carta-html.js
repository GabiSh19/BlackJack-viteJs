/**
 * Esta función crea imágenes y las agrega en el div correspondiete:
 * @param {String} carta 
 *  
 */
export const crearCarta = (carta, turno) => {

      
    const imgCartas = document.createElement('img');
        imgCartas.src = `./assets/cartas/${ carta }.png`;
        imgCartas.classList.add('carta');
        divCartas[turno].append(imgCartas);
}