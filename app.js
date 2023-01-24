'use strict';

const tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// tömb hossza
const a = tomb.length;
console.log('tömb hossza: ' + a);

// string kimenet, paraméterként átadott elválasztóval
const arrayToString = tomb.join('-');
console.log('tömb elemei: ' + arrayToString);
console.log( '---------------------------------------' );



// --------- AZ EREDETI TÖMBÖT MÓDOSÍTÓ METÓDUSOK ---------




// 1. push() - elem(ek) beszúrása a tömb végére
    console.log( '%c 1. push() - elem(ek) beszúrása a tömb végére', 'background: #7918D4; color: #ffffff' );

    const array01 = ['Ádám', 'Zsolt'];
    console.log( 'Az eredeti ' + array01.length + ' elemű tömb: ' + array01 );

    // push()
    const insertElementsAtTheEndOfArray = array01.push('Imre', 'Károly');

    console.log( 'A metódus a tömb új hosszával tér vissza: ' + insertElementsAtTheEndOfArray );
    console.log( 'A tömb új értéke: ' + array01 );
    console.log( '---------------------------------------' );


// 2. pop() - a tömb utolsó elemének kiemelése
    console.log( '%c 2. pop() - a tömb utolsó elemének kiemelése', 'background: #7918D4; color: #ffffff' );

    const array02 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti ' + array02.length + ' elemű tömb: ' + array01 );

    // pop()
    const grabLastElementFromArray = array02.pop();

    console.log( 'A metódus a tömb végéről kiemelt elemmel tér vissza: ' + grabLastElementFromArray );
    console.log( 'A tömb új értéke: ' + array02 );
    console.log( '---------------------------------------' );


// 3. shift() - a tömb első elemének kiemelése
    console.log( '%c 3. shift() - a tömb első elemének kiemelése', 'background: #7918D4; color: #ffffff' );

    const array03 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti ' + array03.length + ' elemű tömb: ' + array03 );

    // shift()
    const grabFirstElementFromArray = array03.shift();

    console.log( 'A metódus a tömb elejéről kiemelt elemmel tér vissza: : ' + grabFirstElementFromArray );
    console.log( 'A tömb új értéke: ' + array03 );
    console.log( '---------------------------------------' );


// 4. unshift() - elem(ek) beszúrása a tömb elejére
    console.log( '%c 4. unshift() - elem(ek) beszúrása a tömb elejére', 'background: #7918D4; color: #ffffff' );

    const array04 = ['Ádám', 'Zsolt'];
    console.log( 'Az eredeti ' + array04.length + ' elemű tömb: ' + array04 );

    // unshift()
    const insertElementsAtTheBeginningOfArray = array04.unshift('Imre', 'Károly');

    console.log( 'A metódus a tömb új hosszával tér vissza: ' + insertElementsAtTheBeginningOfArray );
    console.log( 'A tömb új értéke: ' + array04 );
    console.log( '---------------------------------------' );
