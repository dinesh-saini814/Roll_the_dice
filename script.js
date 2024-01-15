let images = [
  "/assets/dice-01.png",
  "/assets/dice-02.png",
  "/assets/dice-03.png",
  "/assets/dice-04.png",
  "/assets/dice-05.png",
  "/assets/dice-06.png",
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);

    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    console.log(dieOneValue, dieTwoValue);
    document.querySelector("#total").innerHTML =
      "Your roll is " + (dieOneValue + dieTwoValue + 2);
    console.log(dieOneValue + dieTwoValue + 2);
  }, 1000);
}
roll();
