/**
 * Esta función permite tomar una carta:
 * @param {Array<String>} deckPorDefecto Recibe un arreglo de String
 * @returns {String} Retorna la carta del deck
 */

export const pedirCarta = ( deckPorDefecto ) => {

    if (deckPorDefecto.length === 0 || !deckPorDefecto){
        throw new Error ('No hay cartas en la baraja');
    }

    return deckPorDefecto.pop();    
}