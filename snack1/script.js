'use strict';
//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


//creo un array di oggetti 
const arrayBici = [
    {
        nome: 'mountain bike',
        peso: 5
    },
    {
        nome: 'smack smock',
        peso: 10
    },
    {
        nome: 'energy',
        peso: 13
    },
    {
        nome: 'ladra',
        peso: 22
    }
]
//dichiaro una variabile per confrontare gli oggetti
let biciPiuLeggera = arrayBici[0];

//ciclo for of che mi scorre l'array di oggetti e mi confronta se ci sono bici piu leggere 
for (const bicicletta of arrayBici) {
    if (bicicletta.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bicicletta
    };

}
console.log(`la bici più leggera è ${biciPiuLeggera.nome}`, biciPiuLeggera.peso + 'kg');