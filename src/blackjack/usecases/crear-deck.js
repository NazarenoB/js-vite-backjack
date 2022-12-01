import _ from "underscore";

// esto que sigue que esta comentado sirve para aggregar informacion, cuando ponemos el cursor sorbe el crearDeck de index.js
// figura toda esta info comentada y en verde que puede ayudar a otros desarrolladores o a nosotros mismos a saber para que es eso

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck=[];

    if ( !tiposDeCarta || tiposDeCarta.length === 0)
       throw new console.error('tiposDeCarta es Obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0)
       throw new console.error('tiposEspeciales es Obligatorio como un arreglo de string');

 
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );

    return deck;
}