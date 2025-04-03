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

// Ciclo per eseguire le chiamate
const generateMails = () => {
    for (let i = 0; i < mailNumber; i++) {
        axios
            .get(endpoint)
            .then((response) => {
                /**
                 * La mail ottenuta dalla risposta dell'API.
                 * @type {string}
                 */
                const mail = response.data.response;

                mailArray.push(mail);

                mailList.innerHTML += `<li class="list-group-item">${mail}</li>`;
            });
    };
};

// seleziono il bottone
const button = document.getElementById('refresh-btn');
/**
 * function to refresh the list
 * 
 */
button.addEventListener('click', () => {
    mailList.innerHTML = '';
    generateMails();
});
generateMails();