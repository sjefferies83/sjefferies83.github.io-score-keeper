//Gets Player 1 Button
var p1Button = document.getElementById("p1Button");
//Gets Player 2 Button
var p2Button = document.getElementById("p2Button");
//Gets Reset Button
var resetButton = document.getElementById("reset");
//Gets Player 1 Display Span
var p1Display = document.getElementById("p1Display");
//Gets player 2 Dispaly Span
var p2Display = document.getElementById("p2Display");
//Gets Value Of Number Input
var numInput = document.querySelector("input");
//Gets Span Where Winning Value Is Displayed
var winningScoreDisplay = document.querySelector("p span");
//Sets Player 1 Score
var p1Score = 0;
//Sets Player 2 Score
var p2Score = 0;
//Sets GameOver To False
var gameOver = false;
//Sets Winning Value
var winningScore = 5;

//Sets Event Listen On All Buttons And Input
p1Button.addEventListener("click", p1Logic);
p2Button.addEventListener("click", p2Logic);
resetButton.addEventListener("click", resetLogic);
numInput.addEventListener("change", targetSet);

//Player 1 Button
function p1Logic(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.remove("pDisplay");
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
};

//Player 2 Button
function p2Logic(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.remove("pDisplay");
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
};

//Reset Button
function resetLogic(){

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.classList.add("pDisplay");
	p2Display.classList.add("pDisplay");
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;
	gameOver = false;

};

//Set Winning Target
function targetSet(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	resetLogic();
}
