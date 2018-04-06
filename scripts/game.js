'use strict'

function Game() {
    var self = this;
    self.meatStorage = [];
    self.meatDone = [];
    self.selectedMeat = null;
    self.meatGrid = [null, null, null, null]
    self.audio = new Audio("./chickensiz.wav");
    self.callback = null;
}

Game.prototype.onEnded = function(cb) {
    var self = this;
    self.callback = cb;
}

Game.prototype.getMeat = function(rawMeatArea) {
    var self = this;
    if (self.meatStorage.length >= 5) {
        return;
    }
    var meatElement = document.createElement("div");
    var meatImageElement = document.createElement("img");
    meatImageElement.src = utils.getImage()
    meatElement.classList.add("uncooked-meat");
    meatElement.addEventListener("click", handleMeatClick)
    self.meatStorage.push(meatElement);
    meatElement.appendChild(meatImageElement);
    rawMeatArea.appendChild(meatElement);


    function handleMeatClick(event) {
        self.selectMeat(event.path[1]);
        event.stopPropagation()
    }
}

Game.prototype.selectMeat = function(meat) {
    var self = this;
    self.selectedMeat = meat;
};

Game.prototype.addToGrill = function(grillElement) {
    var self = this;
    if (self.selectedMeat) {
        self.selectedMeat.remove();
        grillElement.appendChild(self.selectedMeat)
        self.selectedMeat = null
        self.startTimers(grillElement)
        self.audio.play();
    }
}

Game.prototype.startTimers = function(grillElement) {
    var self = this;
    console.log(grillElement);
    setTimeout('timeOutOne()', 1000)
    setTimeout('timeOutCooked()', 8000)
    setTimeout('timeOutBurned()', 10000)
}

function timeOutOne() {
    console.log('timeOutOne')
}

function timeOutCooked() {
    console.log('timeOutCooked()')
}

function timeOutBurned() {
    console.log('timeOutBurned()')

}



Game.prototype.removeMeat = function() {
    var self = this;

    if (self.selectedMeat) {
        //self.meatStorage.splice()
        self.selectedMeat.remove();
        self.selectedMeat = null;
    }
}

Game.prototype.meatIsCooked = function(meatDoneArea) {
    var self = this;
    if (self.selectedMeat && self.meatDone.length <= 5) {
        var meatPosition = self.meatStorage.indexOf(self.selectedMeat);
        self.meatStorage.splice(meatPosition, 1);
        if (self.meatStorage.length === 0) {
            self.audio.pause();
        }
        self.meatDone.push(self.selectedMeat)
        self.selectedMeat.remove()
        meatDoneArea.appendChild(self.selectedMeat);
        self.selectedMeat = null

        if (self.meatDone.length === 5) {
            self.callback()
        }

    }


}



/*game constructor
function Game(parentElement) {
  var self = this;
  self.turn = 0;
  self.numAnswers = 3;

  /*-dom elements-
  self.parentElement = parentElement;
  self.gameScreenElement = null;

  self.playerHealthElement = null;
  self.pirateHealthElement = null;
}*/

/*build function that contructs de html with it's elements
Game.prototype.build = function() {
  var self = this;
  self.utils = new Utils();
  self.gameScreenElement = self.utils.creatHtml(`<div class="div-display">
    <div class="fight">
      <div class = "score">
        <div class="guybrush">
          <h3 class="player">Guybrush</h3>
          <p class="player-health"></p>
          <p class="player-damage">OUCH!</p>
        </div>
        <div class="pirate">
          <h3>Pirate</h3>
          <p class="pirate-health"></p>
          <p class="pirate-damage">OUCH!</p>
        </div>
      </div>
    </div>
    <div class="insult-panel">
      <div class="pirate-insult">
       <p class="insult-line"></p>
      </div>
      <div class="comeback">
        <ul class="comeback-list">
        </ul>
      </div>
    </div>
  </div>`);

  self.playerHealthElement = self.gameScreenElement.querySelector(".player-health");
  self.pirateHealthElement = self.gameScreenElement.querySelector(".pirate-health");
}*/