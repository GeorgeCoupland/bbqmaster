"use strict";

function Meat() {
    var self = this;
    self.meatElement = document.createElement("div");
    self.meatImageElement = document.createElement("img");

    self.meatImageElement.src = utils.getImage();
    self.meatElement.classList.add("uncooked-meat");
    self.meatElement.addEventListener("click", handleMeatClick);
    self.meatElement.appendChild(self.meatImageElement);
}