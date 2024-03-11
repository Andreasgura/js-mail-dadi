/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

let emailInput = document.getElementById(email);
let emailButton = document.getElementById(btnEmail);
let emailList = [];
let emailContact;
for(i=0; i<20; i++){
    emailList.push(`name.surname${getRndInteger(1, 100)}@gmail.com`)
};
console.log(emailList)