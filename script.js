
'use strict'
// Choices
const computerChoices = ['rock', 'paper', 'scissor']

// Elements
const move = document.querySelector('.move'); 
const movesLeftEl = document.querySelector('.movesleft')
const pCountEl = document.querySelector('.p-count')
const cCountEl = document.querySelector('.c-count')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')

// cCountEl.textContent 

// score
let pCount = 0 
let cCount = 0 
let movesLeft = 10
let playing = true
let player = ''
let won = false

const winner = function (){
	if(playing === true){
		// won is needed as a substitute for if(pcount < 5 && ccount < 5)
		// won = pCount < 5 && cCount < 5 ? false : true
		const computer = computerChoices[Math.trunc(Math.random()* 3)]
		console.log(computer) 
		movesLeft -= 1
		movesLeftEl.textContent = movesLeft
	
		if(player === computer){
			move.textContent = 'It is a tie!!!'
		} else if(player === 'rock'){
			pCount += computer === 'paper' ? 0 : 1
			cCount += computer === 'paper' ? 1 : 0
			pCountEl.textContent = pCount
			cCountEl.textContent = cCount
			move.textContent = computer === 'paper' ? 'computer wins this round' : 'player wins this round'
		} else if(player === 'paper'){
			pCount += computer === 'scissor' ? 0 : 1
			cCount += computer === 'scissor' ? 1 : 0
			pCountEl.textContent = pCount
			cCountEl.textContent = cCount
			move.textContent = computer === 'scissor' ? 'computer wins this round' : 'player wins this round'
		} else if(player === 'scissor'){
			pCount += computer === 'rock' ? 0 : 1
			cCount += computer === 'rock' ? 1 : 0
			pCountEl.textContent = pCount
			cCountEl.textContent = cCount
			move.textContent = computer === 'rock' ? 'computer wins this round' : 'player wins this round'
		}
	}
	

}

const gameWin = function(){
	pCountEl.textContent = pCount
	cCountEl.textContent = cCount
	move.textContent = pCount > cCount ? 'You win the game!!!!' : 'The computer won the game... You should be ashamed😑'
	playing = false
	
}

rockBtn.addEventListener('click', function(){
	player = 'rock'
	winner()
})

scissorBtn.addEventListener('click', function(){
	player = 'scissor'
	winner()
})

paperBtn.addEventListener('click', function(){
	player = 'paper'
	winner()
})

// needed to set conditions for when game is won
// if(won || movesLeft === 0){
//     if(pCount === cCount){
//  // This if statement will occur if the game ends in a tie
// 	   move.textContent = 'The game ends in a tie 😑'
// 	   playing = false
//     }else{	
//     won && pCount < cCount ? cCount+=1 : pCount +=1
// //  if the won variable was true and the player had more points than the computer, a point will be added to the player, if not, the computer gets the point 
//     console.log(pCount, cCount);
//     gameWin()	
// }
//  }