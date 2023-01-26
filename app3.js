'use strict';

// --------- AZ EREDETI TÖMBÖT NEM MÓDOSÍTÓ METÓDUSOK ---------


// 1. find() - visszatér az első olyan elemmel, amely megfelel a feltételnek
    console.log( '%c 1. find() - visszatér az első olyan elemmel, amely megfelel a feltételnek', 'background: #7918D4; color: #ffffff' );

    const array01 = [1, 6, 13, 5, 14, 4, 35];
    console.log( 'Az eredeti tömb: ' + array01 );

    // find()
    const findResult = array01.find( item => item > 12 );
    console.log( '%cVisszatér az alábbival: ' + findResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ' + array01 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 2. filter() - visszatér az összes olyan elemmel, amely megfelel a feltételnek
    console.log( '%c 2, filter() - visszatér az összes olyan elemmel, amely megfelel a feltételnek', 'background: #7918D4; color: #ffffff' );

    const array02 = [1, 6, 13, 5, 14, 4, 35];
    console.log( 'Az eredeti tömb: ' + array02 );

    // filter()
    const filterResult = array02.filter( item => item > 12 );
    console.log( '%cVisszatér az alábbival: ' + filterResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ' + array02 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 3. includes() - megvizsgálja, hogy talál-e az átadott értékkel megegyező elemet
    console.log( '%c 3. includes() - megvizsgálja, hogy talál-e az átadott értékkel megegyező elemet', 'background: #7918D4; color: #ffffff' );

    const array03 = [1, 6, 13, 5, 14, 4, 35];
    console.log( 'Az eredeti tömb: ' + array03 );

    // includes()
    const includesResult = array03.includes( 5 );
    console.log( '%cVisszatér az alábbival: ' + includesResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ' + array03 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 4. some() - megvizsgálja, hogy talál-e a feltételnek megfelelő egyezést
    console.log( '%c 4. some() - megvizsgálja, hogy talál-e a feltételnek megfelelő egyezést', 'background: #7918D4; color: #ffffff' );

    const array04 = [1, 6, 13, 5, 14, 4, 35];
    console.log( 'Az eredeti tömb: ' + array04 );

    // some()
    const someResult = array04.some( item => item > 12 );
    console.log( '%cVisszatér az alábbival: ' + someResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ' + array04 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 5. map() - paramétere egy callback függvény, amely egy új tömböt eredményez, melynek elemei a callback műveleti eredményeiből tevődnek
    console.log( '%c 5. map() - paramétere egy callback függvény, amely egy új tömböt eredményez, melynek elemei a callback műveleti eredményeiből tevődnek', 'background: #7918D4; color: #ffffff' );

    const array05 = [1, 6, 13, 5, 14, 4, 35];
    console.log( 'Az eredeti tömb: ' + array05 );

    // map()
    const mapResult = array05.map( item => item * 10 );
    console.log( '%cVisszatér az alábbival: ' + mapResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ' + array05 );

    console.log( '______________________________________' );
    console.log( '                                      ' );


// 6. flat() - kilapít egy többdimenziós tömböt
    console.log( '%c 6. flat() - kilapít egy többdimenziós tömböt', 'background: #7918D4; color: #ffffff' );

    const array06 = [   1,
                        2,
                        3, 
                        4, 
                        [1, 2, 3, 4 ]
                    ];
    console.table( 'Az eredeti tömb: ');
    console.table(array06);

    // flat()
    const flatResult = array06.flat();
    console.log( '%cVisszatér az alábbival: ' + flatResult , 'font-weight: bold; background: #ffffff; color: #000000');
    console.log( 'Az eredeti tömb érintetlen maradt: ');
    console.table(array06);

    console.log( '______________________________________' );
    console.log( '                                      ' );