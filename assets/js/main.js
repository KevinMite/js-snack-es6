// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [{
    name: 'Pinarello',
    peso: 10
},

{
    name: 'Bianchi',
    peso: 8
},

{
    name: 'Scott',
    peso:  11
}
];

let biciLeggera = bici [0]


bici.forEach( ( element, index, array )  => {
    if(element.peso < biciLeggera.peso ){
        biciLeggera = element

    }   
})
console.log( biciLeggera )

const{ name, peso } = biciLeggera

document.writeln(`La bici più leggera è ${ name }, il suo peso è ${ peso }`)
 


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [{
    nome: 'PSG',
    punti_fatti: 0,
    falli_subiti: 0
},

{
    nome: 'Ajax',
    punti_fatti: 0,
    falli_subiti: 0
},

{
    nome: 'Manchester City',
    punti_fatti: 0,
    falli_subiti: 0
},

{
    nome: 'Real Madrid',
    punti_fatti: 0,
    falli_subiti: 0
}
];

function numRand(){
    return Math.floor( Math.random() * 100) + 1
}

teams.forEach( (element) => {
    element.punti_fatti = numRand ()
    element.falli_subiti = numRand ()
})

console.log(teams)

let newArray = teams.map( (nome, falli_subiti) => {
    return {nome, falli_subiti}
})
console.log(newArray)



// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


