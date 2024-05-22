import _ from 'underscore';

// Esta función crea una nueva baraja en aleatorio:
/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Retorna un nuevo Deck de cartas.
 */

export const crearDeck  = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 )
        throw new Error (' TiposDeCarta es obligatorio como un arreglo de string ');

    if (!tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error (' tiposEspeciales es obligatorio como un arreglo de string ');

    let deck = [];

    for (let i=2; i <=10; i++){
        for (let tipo of tiposDeCarta){
            deck.push(i + tipo)  
        }
    }

    for (let especial of tiposEspeciales){
        for (let tipo of tiposDeCarta){
            deck.push(especial + tipo)
        }
    }
    
    //Esta baraja está en orden. Por lo que para que salga desordenado, 
    // usaremos una librería: underscore para revolver todas las cartas.
    
    return _.shuffle(deck)  ;
}  

// export default crearDeck; 