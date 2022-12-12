"use strict";

var words = ["Handplane", "Chisel", "Chip", "Splinter", "Saw"];
var startGame = document.querySelector(".start");
var display = document.querySelector(".display");
var display2 = document.querySelector(".display2");
var display3 = document.querySelector(".display3");
var output = document.querySelector(".display4");
var counter = document.querySelector(".display5");
var underscore = " _ ";
var underscores;
var getWords = document.querySelector(".start");
getWords.addEventListener('click', function () {
  var index = Math.floor(Math.random() * words.length);
  console.log(index);
  var item = words[index];
  display.innerText = item;
  console.log(item);
  underscores = underscore.repeat(item.length);
  output.innerHTML = underscores;
  return item;
});
var input = document.querySelectorAll(".Button");
input.forEach(function (item) {
  item.addEventListener('click', function () {
    if (display.innerHTML.toUpperCase().includes(item.innerHTML)) {
      var testLetter = true;
      display2.innerText = item.innerHTML;
      var letterIndex = display.innerHTML.toUpperCase().indexOf(item.innerHTML);
      output.innerText = output.innerText.replace(Array.from(output.innerText.toUpperCase())[letterIndex], display.innerText[letterIndex].toUpperCase());
      console.log(output);
      return testLetter;
    } else {
      var _testLetter = false;
      display3.innerText = item.innerHTML;
      counter.innerHTML = counter.innerHTML - 1;

      if (counter.innerHTML == 0) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }

      return _testLetter;
    }
  });
});