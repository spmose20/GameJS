"use strict";

var words = ["Handplane", "Chisel", "Chip", "Splinter", "Saw"];
var startGame = document.querySelector(".start"); // const display = document.querySelectorAll(".display");

var getWords = document.querySelector(".start");
getWords.addEventListener('click', function (word) {
  var index = Math.floor(Math.random() * word.length);
  var item = word[index];
  return item;
});
var inPlay = {
  item: item
};
inPlay.document.querySelector(".start");
var input = document.querySelector(".button");
input.addEventListener('click', function (enterLetter) {
  var keyStrike = enterLetter.target.innerText;
  var results = getWords(words);
  console.log(results);

  var vetLetters = function vetLetters(letter) {
    if (results.includes(letter)) {
      var testLetter = true;
      return testLetter;
    } else {
      var _testLetter = false;
      return _testLetter;
    }
  };
});
var result = vetLetters(keyStrike);
console.log(result);