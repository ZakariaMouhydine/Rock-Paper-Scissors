// // app.js
'use strict'
// // Complete logic of game inside this function
// const game = () => {
// 	let playerScore = 0;
// 	let computerScore = 0;
// 	let moves = 0;


// 	// Function to
// 	const playGame = () => {
// 		const rockBtn = document.querySelector('.rock');
// 		const paperBtn = document.querySelector('.paper');
// 		const scissorBtn = document.querySelector('.scissor');
// 		const playerOptions = [rockBtn,paperBtn,scissorBtn];
// 		const computerOptions = ['rock','paper','scissors']
		
// 		// Function to start playing game
// 		playerOptions.forEach(option => {
// 			option.addEventListener('click',function(){

// 				const movesLeft = document.querySelector('.movesleft');
// 				moves++;
// 				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

// 				const choiceNumber = Math.floor(Math.random()*3);
// 				const computerChoice = computerOptions[choiceNumber];

// 				// Function to check who wins
// 				winner(this.innerText,computerChoice)
				
// 				// Calling gameOver function after 10 moves
// 				if(moves == 10){
// 					gameOver(playerOptions,movesLeft);
// 				}
// 			})
// 		})
		
// 	}

// 	// Function to decide winner
// 	const winner = (player,computer) => {
// 		const result = document.querySelector('.result');
// 		const playerScoreBoard = document.querySelector('.p-count');
// 		const computerScoreBoard = document.querySelector('.c-count');
// 		player = player.toLowerCase();
// 		computer = computer.toLowerCase();
// 		if(player === computer){
// 			result.textContent = 'Tie'
// 		}
// 		else if(player == 'rock'){
// 			if(computer == 'paper'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;

// 			}else{
// 				result.textContent = 'Player Won'
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if(player == 'scissors'){
// 			if(computer == 'rock'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			}else{
// 				result.textContent = 'Player Won';
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if(player == 'paper'){
// 			if(computer == 'scissors'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			}else{
// 				result.textContent = 'Player Won';
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 	}

// 	// Function to run when game is over
// 	const gameOver = (playerOptions,movesLeft) => {

// 		const chooseMove = document.querySelector('.move');
// 		const result = document.querySelector('.result');
// 		const reloadBtn = document.querySelector('.reload');

// 		playerOptions.forEach(option => {
// 			option.style.display = 'none';
// 		})

	
// 		chooseMove.innerText = 'Game Over!!'
// 		movesLeft.style.display = 'none';

// 		if(playerScore > computerScore){
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Won The Game'
// 			result.style.color = '#308D46';
// 		}
// 		else if(playerScore < computerScore){
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Lost The Game';
// 			result.style.color = 'red';
// 		}
// 		else{
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'Tie';
// 			result.style.color = 'grey'
// 		}
// 		reloadBtn.innerText = 'Restart';
// 		reloadBtn.style.display = 'flex'
// 		reloadBtn.addEventListener('click',() => {
// 			window.location.reload();
// 		})
// 	}


// 	// Calling playGame function inside game
// 	playGame();
	
// }

// // Calling the game function
// game();

/*
everyone has a score of 0

Player must enter rock paper or scissors
computer
*/

// const computerChoice = ['rock', 'paper', 'scissors']
// const random = Math.trunc(Math.random() * 3)
// const computer = computerChoice[random]
// let playing = true
// console.log(computer)


// // scores
// let playerScore = 0
// let computerScore = 0
// const rockBtn = document.querySelector('.rock');
// const paperBtn = document.querySelector('.paper');
// const scissorBtn = document.querySelector('.scissor');
// let player = ''





// const winner = function(){
// 	let player = prompt('Rock, paper or scissors')
// 	player = player.toLowerCase()
// 	if(player === computer){
// 		console.log('tie') 
// 	}else if(player === 'rock'){
// 		console.log(computer === 'paper' ? 'Computer wins' : 'You win')
// 		playerScore = computer === 'paper' ? playerScore + 0 : playerScore + 1
// 		console.log(playerScore)

// 	}
// }

// winner()


// rockBtn.addEventListener('click', function(){
// 	player = 'rock'
// 	if(playerScore<= 5 && computerScore <= 5)
// 	if(player === computer){

// 	}
// })

/*
function of program: 
computer must be able to pick rock paper or scissors:
array

computer point variable must be made
player point var must be made
every time a move is made move-1

logic:
player == rock, computer === paper computer wins
1+ 
*/ 

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

		
const winner = function (){
	if(playing === true){
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
			const zak = 'zak'
			console.log(zak);
			pCount += computer === 'rock' ? 0 : 1
			cCount += computer === 'rock' ? 1 : 0
			pCountEl.textContent = pCount
			cCountEl.textContent = cCount
			move.textContent = computer === 'rock' ? 'computer wins this round' : 'player wins this round'
		} 

		


	}
	// console.log(zak);

}

// console.log(zak);
const gameWin = function(){

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
