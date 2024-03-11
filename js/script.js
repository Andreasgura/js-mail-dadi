/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
let firstScreen = document.querySelector('.vh-100');
let btGameOne = document.getElementById('btn-game-one');
let btGameTwo = document.getElementById('btn-game-two');
let GameOne = document.getElementById('game-one');
let GameTwo = document.getElementById('game-two');
btGameOne.addEventListener('click', function () {
    firstScreen.classList.add('d-none');
    GameOne.className = 'container';
    let emailButton = document.getElementById('btnemail');
    console.log(emailButton);
    let emailList = [];
    let trovata = false;
    for (let i = 0; i < 20; i++) {
        emailList.push(`name.surname${getRndInteger(1, 100)}@gmail.com`)
    };
    console.log(emailList)
    let emailResult = document.getElementById('emailresult')
    emailButton.addEventListener('click', function () {
        let emailInput = document.getElementById('email').value;

        for (let i = 0; i < emailList.length; i++)
            if (emailInput.toLowerCase() === emailList[i].toLowerCase()) {
                // console.log('email nel database')
                trovata = true;
            };
        if (trovata) {
            emailResult.innerText = `L\'email è presente nel nostro database`
        } else {
            emailResult.innerText = `Spiacenti, l\'email non è presente nel nostro database`
        };
    });
});