/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/
// - fare 3 classi per la dimensione celle con nuovo calc .box-easy .box-medium . box-hard
let playBtn = document.getElementById('playBtn')
let gridHTML = document.getElementById('grid')

for (let i = 0; i < 100; i++) {
    let box = document.createElement('div')
    
    box.classList.add('box')

    gridHTML.append(box)
}