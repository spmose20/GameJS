const words = [
"Handplane","Chisel","Chip","Splinter","Saw",
];
const startGame = document.querySelector(".start");

const display = document.querySelector(".display");

const display2 = document.querySelector(".display2");

const display3 = document.querySelector(".display3");

const output  = document.querySelector(".display4");

const counter = document.querySelector(".display5")

const underscore = " _ ";

let underscores;

const getWords = document.querySelector(".start");
getWords.addEventListener('click', () => {
  const index = Math.floor(Math.random() * words.length);

  console.log(index);

  const item = words[index];

  display.innerText = item;

  console.log(item);

  underscores = underscore.repeat(item.length);

   output.innerHTML = underscores;

  return item;


})




const input = document.querySelectorAll(".Button")

input.forEach((item) => { 
  item.addEventListener('click',() => {

  if (display.innerHTML.toUpperCase
    ().includes(item.innerHTML)) {
    let testLetter = true;

      display2.innerText = item.innerHTML;

      const letterIndex = display.innerHTML.toUpperCase().indexOf(item.innerHTML);

      output.innerText= output.innerText.replace(Array.from(output.innerText.toUpperCase())[letterIndex], display.innerText[letterIndex].toUpperCase());
      console.log(output);

    
    return testLetter;
    
  }
  else {
    let testLetter = false;

    display3.innerText = item.innerHTML;

    counter.innerHTML = counter.innerHTML - 1 ;
    
    if (counter.innerHTML == 0)  {

      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    }

    
    return testLetter;
  }

})
})






  


