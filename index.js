// Sección: Declaración de variables
let cards = []
let dinero
let hayBlackjack = false
let sigueJugando = false
let age = 22
let sum = 0
let message = ""
let messageEl
let sumEl
let player = {
    name: "Diego",
    dinero: 145
}

cardEl = document.getElementById("cards-el")
sumEl = document.getElementById("sum-el")
messageEl = document.getElementById("message-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.dinero

// Función para generar un número aleatorio entre 2 y 11
function generarNumeroAleatorio() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    } 
    else if(randomNumber > 10){
        return 10
    }
    else {
        return randomNumber
    }
}

function empezarPartida() {
    sigueJugando = true
    let firstCard = generarNumeroAleatorio()
    let secondCard = generarNumeroAleatorio()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderizarPartida()
}

// Función para empezar el juego
function renderizarPartida() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hayBlackjack = true
        message = "Wohoo! You've got Blackjack!!"
    } else {
        sigueJugando = false
        message = "You're out of the game!!"

    }
    // Sección: Mostrar mensaje
    messageEl.textContent = message
} 

// Funcion para pedir una nueva carta
function nuevaCarta() {
    if (sigueJugando === true && hayBlackjack === false) {
        let newCard = generarNumeroAleatorio()
        sum += newCard
        cards.push(newCard)
        renderizarPartida()
    }
}
