'use strict';

// --------- PÁR EGYSZERŰ TÖMB METÓDUS ---------


const array0 = ['Ádám', 'Zsolt', 'Imre', 'Károly'];


// 1. length() - a tömb hossza
    console.log( '%c 1. length() - a tömb hossza', 'background: #7918D4; color: #ffffff' );

    const lengthOfArray = array0.length;
    console.log('A tömb hosszával tér vissza: ' + lengthOfArray);
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 2. join() - tömb elemeinek összefűzése stringbe, tetszőleges elválasztóval
    console.log( '%c 2. join() - tömb elemeinek összefűzése stringbe, tetszőleges elválasztóval', 'background: #7918D4; color: #ffffff' );

    const arrayToString = array0.join('-');
    console.log('A tömb stringbe fűzött elemeivel tér vissza, az általunk megadott elválasztóval: ' + arrayToString);
    console.log( '______________________________________' );
    console.log( '                                      ' );


// 3. forEach() - bejárja a tömb elemeit, hasonlóan a for ciklushoz, de annál hatékonyabb szintaxissal
    console.log( '%c 3. forEach() - bejárja a tömb elemeit, hasonlóan a for ciklushoz, de annál hatékonyabb szintaxissal', 'background: #7918D4; color: #ffffff' );
    
    console.log('Paramétere egy callback függvény, amely minden egyes tömb elemen lefut.');
    console.log('A callback függvény paraméterei maga a tömb adott eleme és annak indexe.');
    array0.forEach((arrayItem, indexOfItem) => {
        console.log('A tömb ' + indexOfItem + '. eleme: ' + arrayItem);
    });
    console.log( '______________________________________' );
    console.log( '                                      ' );