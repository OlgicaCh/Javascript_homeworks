console.log("hello");

//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
//Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

//0 - Rat
//1 - Ox
//2 - Tiger
//3 - Rabbit
//4 - Dragon
//5 - Snake
//6 - Horse
//7 - Goat
//8 - Monkey
//9 - Rooster
//10 - Dog
//11 - Pig
let inputUser = prompt("Please enter your Birthyear");
let Birthyear = Number(inputUser);
let isBrthdayInvalid = Number.isNaN(Birthyear);
let reminder = (Birthyear - 4) % 12;

if (reminder === 0) {
  console.log("Rat");
} else if (reminder === 1) {
  console.log("Ox");
} else if (reminder === 2) {
  console.log("Tiger");
} else if (reminder === 3) {
  console.log("Rabbit");
} else if (reminder === 4) {
  console.log("Dragon");
} else if (reminder === 5) {
  console.log("Snake");
} else if (reminder === 6) {
  console.log("Horse");
} else if (reminder === 7) {
  console.log("Goat");
} else if (reminder === 8) {
  console.log("Monkey");
} else if (reminder === 9) {
  console.log("Rooster");
} else if (reminder === 10) {
  console.log("DogS");
} else if (reminder === 11) {
  console.log("Pig");
} else {
  console.log("China zodiac");
}
