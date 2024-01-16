/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/
// - fare 3 classi per la dimensione celle con nuovo calc .box-easy .box-medium . box-hard
let playBtn = document.getElementById('playBtn')
let gridHTML = document.getElementById('grid')
let difficultySelection = document.getElementById('difficulty')

gridHTML.innerHTML = "<h2>Scegli una difficoltà e comincia a giocare!"


function generateGrid(number, name) {
    for (let i = 1; i <= number; i++) {
        let box = document.createElement('div')

        box.classList.add('box', name)

        box.innerHTML = `<span>${[i]}</span>`

        box.addEventListener('click', function () {
            this.classList.toggle('box-active')
            console.log(`Cella numero: ${[i]}`)
        })

        gridHTML.append(box)
    }
}

playBtn.addEventListener('click', function () {

    gridHTML.innerHTML = ""

    let difficultyValue = difficultySelection.value

    if (difficultyValue === 'easy') {
        return generateGrid(100, 'box-easy')
    } else if (difficultyValue === 'medium') {
        return generateGrid(81, 'box-medium')
    } else {
        return generateGrid(49, 'box-hard')
    }
})