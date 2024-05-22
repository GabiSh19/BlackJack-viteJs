import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta } from './usecases';

// 2C = Two of Clubs 
// 2D = Two of Diamonds 
// 2H = Two of Hearts 
// 2S = Two of Spades

//Patrón Módulo: patrón de diseño más común en JS, compatible casi con cualquier versión. Permite encapsular y proteger el código. Función anónimo autoinvocada.
const miModulo = ( () => {

  'use strict';

  //Baraja
  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'], 
      especiales   = ['A', 'J', 'Q', 'K'];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;
  let contadorPuntosJugadores = [];

  //Referencias del HTML:
  const btnNuevo     = document.querySelector('#btnNuevo'), 
      btnPedir     = document.querySelector('#btnPedir'), 
      btnDetener   = document.querySelector('#btnDetener');

  const puntosJugadores = document.querySelectorAll('small'),
      divCartas = document.querySelectorAll('.divCartas');

  // Esta función inicializa el juego:
  const inicializarJuego = ( numJugadores = 2 ) => {

      deck = crearDeck(tipos, especiales);
      contadorPuntosJugadores = [];
      for ( let i = 0; i<numJugadores; i++ ){
          contadorPuntosJugadores.push(0)
      }

      puntosJugadores.forEach( elem => elem.innerText = 0 ); 
      divCartas.forEach( elem => elem.innerHTML = '' ); 

  }


  // Esta función es para calcular los puntos de cada jugador:
  // Turno: 0 = primer jugador y el último será la computadora.
  const acumularPuntos = (carta, turno) => {
      contadorPuntosJugadores[turno] += valorCarta( carta );
      puntosJugadores[turno].innerText = contadorPuntosJugadores[turno] 
      
      return contadorPuntosJugadores[turno];
  }

  //Esta función determina el ganador:
  const determinarGanador = () => {

    const [puntosMinimo, puntosComputadora] = contadorPuntosJugadores;

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimo ) {
            alert('Empate entre computadora y jugador');
        } 
        else if ( puntosMinimo > 21){
            alert('Computadora ha ganado el juego');
        }
        else if ( (puntosComputadora > 21) ) {
            alert('Jugador ha ganado el juego');
        }         
        else{
            alert('Computadora ha ganado el juego');
        }
    }, 100)
   }


  //______________________________________________________________________________

  //Eventos:

  btnPedir.addEventListener( 'click', () => {
      // inicializarJuego();

      const carta = pedirCarta( deck );
      // puntosJugador += valorCarta (carta);
      // puntosJugadores[0].innerText = puntosJugador;

      const puntosJugador = acumularPuntos( carta, 0 );

      crearCarta(carta, 0);
      
      if ( puntosJugador > 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, contadorPuntosJugadores[1], deck );
          
      } else if ( puntosJugador === 21 ){
          console.warn('21, genial');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(  puntosJugador, contadorPuntosJugadores[1], deck );

      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores, contadorPuntosJugadores[0], deck);
  })

  btnNuevo.addEventListener('click', () => {

      inicializarJuego();
      btnPedir.disabled = false;
      btnDetener.disabled = false;

  });

  return {

  }

})();

