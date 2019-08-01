/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousDiceRoll, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {
    //1- get a random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //2- display the result
    var dice1DOM = document.querySelector('.dice-1');
    var dice2DOM = document.querySelector('.dice-2');
    dice1DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';
    dice2DOM.style.display = 'block';
    dice2DOM.src = 'dice-' + dice2 + '.png';
    // 3- update the round score only if rolled number is not a 1
    // if (dice === previousDiceRoll &&  previousDiceRoll === 6) {
    //   // next Player
    //   console.log(scores[activePlayer]);
    //   scores[activePlayer] = 0;
    //   document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //   nextPlayer();
    // } else
    if (dice1 !== 1 && dice2 !== 1){
      //add score
      roundScore += (dice1 + dice2);
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      // previousDiceRoll = dice
    } else {
     nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if( gamePlaying){
    // 1 - add current score to users global score
  scores[activePlayer] += roundScore;
  // 2 - Update the UI
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  // 3 - Check if the player won the game
  if(scores[activePlayer] >= winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    hideDice();
    gamePlaying = false;
  } else {
    nextPlayer();
  }
  }
})

function nextPlayer(){
  // next Player
  //we use ternary operator which is the same as using an if/else statement
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
  roundScore = 0;
  //the user active score should be set to 0 also in the user's interface
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  //toggle active class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  hideDice();
}


function hideDice(){
  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init)

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  winningScore = 100;
  hideDice();
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

// is better tu use IF input
if(!gamePlaying){
  document.querySelector('.input-number').addEventListener('change', function(){
  winningScore = this.value;
}
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row.
 After that, it's the next player's turn.
  (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score,
  so that they can change the predefined score of 100.
  (Hint: you can read that value with the .value property in JavaScript.
  This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now.
The player looses his current score when one of them is a 1.
(Hint: you will need CSS to position the second dice,
so take a look at the CSS code for the first one.)
*/












