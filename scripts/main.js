'use strict';

function main() {

    var mainContentElement = document.getElementById('main-content');

    //-----Title-Screen

    var titleScreenElement;
    var startButtonElement;

    function buildTitleScreen() {
        titleScreenElement = utils.createHtml(`<div><h1>BBQ Warrior</h1>
        <h3>Don't Let Them Burn!</h3>
        <button class="btn" id="start-game">Start Game</button></div>`);
        mainContentElement.appendChild(titleScreenElement);
        startButtonElement = titleScreenElement.querySelector('button');
        startButtonElement.addEventListener('click', handleStartClick);
    }

    function handleStartClick() {
        destroyTitleScreen();
        buildGameScreen();

    }

    function destroyTitleScreen() {
        titleScreenElement.remove();
        startButtonElement.removeEventListener("click", handleStartClick);
    }

    //-------Game-Screen

    var gameScreenElement;

    function gameEnded() {
        destroyGameScreen();
        buildGameOverScreen();
    }

    function buildGameScreen() {
        gameScreenElement = utils.createHtml(`<div class="game-screen">
            <div class="grill"></div>
            <div class="action">
            <button class="btn get">Get</button>
            <button class="btn done">Done</button>
            </div>

        </div>`);
        mainContentElement.appendChild(gameScreenElement);
        startGame();
    }

    function startGame() {
        var game = new Game
        var buttonGetElement = document.querySelector('.action .get')
        var buttonDoneElement = document.querySelector('.action .done')
        buttonGetElement.addEventListener("click", handleGetClick)
        buttonDoneElement.addEventListener("click", handleDoneClick)
    }

    function destroyGameScreen() {
        gameScreenElement.remove();
    }

    //-------Game-Over-Screen

    var gameOverScreenElement
    var restartGameButtonElement

    function handleRestartClick() {
        destroyGameOverScreen();
        buildTitleScreen();
    }

    function buildGameOverScreen() {
        gameOverScreenElement = utils.createHtml(`<div class="game-over-screen"><h1>You Let Them Burrrrn!</h1>
      <button class="btn" id="restart-game">Restart Game</button>
      </div>`);
        mainContentElement.appendChild(gameOverScreenElement);
        restartGameButtonElement = gameOverScreenElement.querySelector("button");
        restartGameButtonElement.addEventListener("click", handleRestartClick);
    }

    function destroyGameOverScreen() {
        gameOverScreenElement.remove()
        restartGameButtonElement.removeEventListener("click", handleRestartClick)
    }

    buildTitleScreen()
}

window.onload = main;


// $.each(foodList, function(i) {
//   //Loop the array
//   var menuString =
//     '<div class="food"><p>My name is: ' +
//     foodList[i].name +
//     '</p><p>My cooking time is: ' +
//     foodList[i].cookingTime +
//     '</p><button id="place-button" class="btn" onclick="selectGrillFood(' +
//     foodList[i] +
//     ')"+>Select</button>' +
//     '<button id="done-button" class="btn">Done</button></div>';
//   //You can get the prop of array with arr[i].Name
//   $('#Menu').append(menuString);
//   //alert(templateString)
// });

// var sausage = new Food('Sausage', 5000);
// var chicken = new Food('Chicken', 10000);
// var porkChop = new Food('Pork Chop', 5000);
// var butifarra = new Food('Butifarra', 7000);
// var steak = new Food('Steak', 10000);

// var foodList = [sausage, chicken, porkChop, butifarra, steak];

// function selectGrillFood(food) {
//   alert(food.name);
// }