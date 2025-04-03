// Elemento del DOM dove verranno inserite le mail.
const mailList = document.getElementById('mail-list');

// Array che contiene le mail ottenute dalla chiamata API.
const mailArray = [];
console.log(mailArray);

// Numero di mail da recuperare.
const mailNumber = 10;
console.log('numero mail:', mailNumber);

// Endpoint dell'API per il recupero di una mail casuale.
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';