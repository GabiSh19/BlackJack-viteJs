
//Esta función permite obtener el valor de la carta: 

/**
 * Obtener el valor de la carta:
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( carta ) => {
    // puntos = 0;
    // const valor = carta.substring(0, carta.length - 1);
    // console.log(valor);
    // if (isNaN(valor)) {
        //     if (valor === 'A'){
            //         puntos = 11;            
            //     }else{
                //         puntos = 10;
                //     }
                // } else {
                    //     puntos = valor * 1
                    // }
                    // console.log({puntos});
                    // Lo anterior resumido sería lo siguiente:
                    
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
        : valor * 1;    
}