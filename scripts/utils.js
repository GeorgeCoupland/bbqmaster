'use strict';

var utils = {};

utils.createHtml = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}

utils.getImage = function() {
    var string = ["./chicken-leg-svgrepo-com.png", "./beef-steak-svgrepo-com.png", "./sausageforgame.png"];
    return string[Math.floor(Math.random() * 3)];
    //return './chicken-leg-svgrepo-com.png'
}

/*function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];
}

function main() {
  var mainContentElement = document.getElementById("main-content");

  // -- TITLE SCREEN

  var titleScreenElement;
  var startButtonElement;

  function handleStartClick() {
    destroyTitleScreen();
    buildGameScreen();
  }

  function buildTitleScreen() {
    titleScreenElement = createHtml(`<div class="title-screen">
      <h1>Up or Down</h1>
      <button>start game</button>
      <div class="instructions">
        <p>guess if the next number is higher or lower</p>
        <p>3 seconds per turn</p>
        <p>if you don't guess you suck</p>
      </div>
    </div>`);
    mainContentElement.appendChild(titleScreenElement);
    startButtonElement = titleScreenElement.querySelector("button");
    startButtonElement.addEventListener("click", handleStartClick);
  }

  function destroyTitleScreen() {
    titleScreenElement.remove();
    startButtonElement.removeEventListener("click", handleStartClick);
  }

  // -- GAME SCREEN

  var gameScreenElement;
  // var upButtonElement;
  // var downButtonElement;

  function gameEnded() {
    destroyGameScreen();
    buildGameOverScreen();
  }

  function buildGameScreen() {
    gameScreenElement = createHtml(`<div class="game-screen">
      <div class="header">
        <p class="turn">
          <span class="label">turn:</span>
          <span class="value">1/20</span>
        </p>
        <p class="time">
          <span class="label">time:</span>
          <span class="value">3</span>
        </p>
        <p class="score">
          <span class="label">score:</span>
          <span class="value">50</span>
        </p>
      </div>
      <div class="main">
        <div class="number">7</div>
        <div class="actions">
          <button>UP</button>
          <button>DOWN</button>
        </div>
        <div class="question">?</div>
      </div>
      <div class="footer">
        <h2>you suck!</h2>
      </div>
    </div>`);
    mainContentElement.appendChild(gameScreenElement);
    window.setTimeout(gameEnded, 1000);
  }

  function destroyGameScreen() {
    gameScreenElement.remove();
  }

  // -- GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildGameScreen();
  }

  function buildGameOverScreen() {
    gameOverScreenElement = createHtml(`<div class="game-over-screen">
      <h1>Score: 55</h1>
      <button>restart game</button>
    </div>`);
    mainContentElement.appendChild(gameOverScreenElement);
    restartGameButtonElement = gameOverScreenElement.querySelector("button");
    restartGameButtonElement.addEventListener("click", handleRestartClick);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    restartGameButtonElement.removeEventListener("click", handleRestartClick);
  }

  // -- start the app

  buildTitleScreen();
}

window.addEventListener("load", main);*/