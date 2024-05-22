import { pedirCarta } from "./";

/**
 *Turno de la computadora: tiene que hacer los puntos igual o superior al jugador
 * @param {Number} puntosMinimo puntos mínimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos  
 * @param {Array<String>} deck  
 */

export const turnoComputadora = (puntosMinimo, puntosHTML, deck = []) =>  {

    if( !puntosMinimo ) throw new Error ('Puntos mínimos son necesarios');
    if( !puntosHTML ) throw new Error ('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );
        // puntosComputadora += valorCarta (carta);
        // puntosJugadores[1].innerText = puntosComputadora;

        puntosComputadora = acumularPuntos(carta, contadorPuntosJugadores.length - 1 );
        crearCarta(carta, contadorPuntosJugadores.length - 1 );

        if ( puntosMinimo > 21 ){
            break;
        } 
    } while ( (puntosComputadora < puntosMinimo) && ( puntosMinimo <= 21 ));
    
    determinarGanador();
}
