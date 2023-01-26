'use strict';

// --------- AZ EREDETI TÖMBÖT MÓDOSÍTÓ METÓDUSOK ---------


// 1. push() - elem(ek) beszúrása a tömb végére
    console.log( '%c 1. push() - elem(ek) beszúrása a tömb végére', 'background: #7918D4; color: #ffffff' );

    const array01 = ['Ádám', 'Zsolt'];
    console.log( 'Az eredeti ' + array01.length + ' elemű tömb: ' + array01 );

    // push()
    const insertElementsAtTheEndOfArray = array01.push('Imre', 'Károly');

    console.log( 'A metódus a tömb új hosszával tér vissza: ' + insertElementsAtTheEndOfArray );
    console.log( 'A tömb új értéke: ' + array01 );
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 2. pop() - a tömb utolsó elemének kiemelése
    console.log( '%c 2. pop() - a tömb utolsó elemének kiemelése', 'background: #7918D4; color: #ffffff' );

    const array02 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti ' + array02.length + ' elemű tömb: ' + array01 );

    // pop()
    const grabLastElementFromArray = array02.pop();

    console.log( 'A metódus a tömb végéről kiemelt elemmel tér vissza: ' + grabLastElementFromArray );
    console.log( 'A tömb új értéke: ' + array02 );
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 3. shift() - a tömb első elemének kiemelése
    console.log( '%c 3. shift() - a tömb első elemének kiemelése', 'background: #7918D4; color: #ffffff' );

    const array03 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti ' + array03.length + ' elemű tömb: ' + array03 );

    // shift()
    const grabFirstElementFromArray = array03.shift();

    console.log( 'A metódus a tömb elejéről kiemelt elemmel tér vissza: : ' + grabFirstElementFromArray );
    console.log( 'A tömb új értéke: ' + array03 );
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 4. unshift() - elem(ek) beszúrása a tömb elejére
    console.log( '%c 4. unshift() - elem(ek) beszúrása a tömb elejére', 'background: #7918D4; color: #ffffff' );

    const array04 = ['Ádám', 'Zsolt'];
    console.log( 'Az eredeti ' + array04.length + ' elemű tömb: ' + array04 );

    // unshift()
    const insertElementsAtTheBeginningOfArray = array04.unshift('Imre', 'Károly');

    console.log( 'A metódus a tömb új hosszával tér vissza: ' + insertElementsAtTheBeginningOfArray );
    console.log( 'A tömb új értéke: ' + array04 );
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 5. slice() - visszatér a tömb azon elemeivel, amelyek az átadott induló és záró index közé esnek
    console.log( '%c 5. slice() - visszatér a tömb azon elemeivel, amelyek az átadott induló és záró index közé esnek', 'background: #7918D4; color: #ffffff' );

    const array05 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti tömb: ' + array05 );

    // slice()
    const sliceResult = array05.slice(2);
    console.log( '%c array07.slice(2) visszatér az alábbival: ' + sliceResult , 'font-weight: bold; background: #ffffff; color: #000000');

    const sliceResult2 = array05.slice(1, 3);
    console.log( '%c array07.slice(1, 3) visszatér az alábbival: ' + sliceResult2 , 'font-weight: bold; background: #ffffff; color: #000000');

    console.log( 'A tömb új értéke: ' + array05 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 6. splice() - újként egy adott pozícióba beszúrni, vagy egy adott indexű elem helyére beszúrni képes
    console.log( '%c 6. splice() - újként egy adott pozícióba beszúrni, vagy egy adott indexű elem helyére beszúrni képes', 'background: #7918D4; color: #ffffff' );

    const array06 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti tömb: ' + array06 );

    const spliceResult = array06.splice(1, 0, 'Eszter');
    console.log( '%c array06.splice(1, 0, "Eszter") visszatér az alábbival: ' + spliceResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'A tömb új értéke: ' + array06 );

    const array07 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];
    console.log( 'Az eredeti tömb: ' + array07 );

    const spliceResult2 = array07.splice(2, 1, 'Eszter');
    console.log( '%c array06.splice(2, 1, "Eszter") visszatér az alábbival: ' + spliceResult2 , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'A tömb új értéke: ' + array07 );

    console.log( '______________________________________' );
    console.log( '                                      ' );