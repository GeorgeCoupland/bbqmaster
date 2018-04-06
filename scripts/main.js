'use strict';

function main() {

    var mainContentElement = document.getElementById('main-content');

    //-----Title-Screen

    var titleScreenElement;
    var startButtonElement;


    function buildTitleScreen() {
        titleScreenElement = utils.createHtml(`<div class="splashscreen"><h1>BBQ Warrior</h1>
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
    var game;
    var buttonGetElement;
    var buttonDoneElement;
    var grillGrid;
    var meatDoneArea;

    function gameEnded() {
        destroyGameScreen();
        buildGameOverScreen();
    }
    //<img src="./bbqphoto.jpg" />;
    function buildGameScreen() {
        gameScreenElement = utils.createHtml(`<div class="game-screen">
            <div class="cooking-area">
                <div class="raw-meat border">Raw Meat</div>
            <div class="grill border">
            <div class="row">
                <div class="grid 1 border"></div>
                <div class="grid 2 border"></div>
            </div>
            <div class="row">
                <div class="grid 3 border"></div>
                <div class="grid 4 border"></div>
            </div>
            
            </div>
            <div class="cooked-meat border">Cooked Meat</div>
            </div>
            <div class="action">
            <button class="btn get">Get</button>
            <button class="btn done">Done</button>
            </div>

        </div>`);
        mainContentElement.appendChild(gameScreenElement);
        startGame();
    }

    function startGame() {
        game = new Game();
        game.onEnded(gameEnded);
        buttonGetElement = document.querySelector('.action .get')
        buttonDoneElement = document.querySelector('.action .done')
        buttonGetElement.addEventListener("click", handleGetClick)
        buttonDoneElement.addEventListener("click", handleDoneClick)

        grillGrid = document.querySelectorAll(".row div");
        grillGrid.forEach(function(element) {
            element.addEventListener("click", handleGridClick);
        });

        meatDoneArea = document.querySelector(".cooked-meat");
        meatDoneArea.addEventListener("click", handleMeatDoneClick);
    }

    function handleGetClick() {
        var rawMeatArea = document.querySelector(".raw-meat");
        game.getMeat(rawMeatArea);
    }

    function handleDoneClick() {
        game.removeMeat()
    }

    function handleGridClick(event) {
        game.addToGrill(event.target)
    }

    function handleMeatDoneClick() {
        game.meatIsCooked(meatDoneArea)

    }

    function destroyGameScreen() {
        gameScreenElement.remove();
        buttonGetElement.removeEventListener("click", handleGetClick);
        buttonDoneElement.removeEventListener("click", handleDoneClick);
        grillGrid.forEach(function(element) {
            element.removeEventListener("click", handleGridClick);
        });
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
//     '</p><button id="place-button" class="btn" onclick="selectFood(' +
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

// function selectFood(food) {
//   alert(food.name);
// }