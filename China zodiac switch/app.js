console.log("Works");

/* SWITCH Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig*/

let inputUser = prompt("Please enter your Birthyear");
let Birthyear = Number(inputUser);
let isBrthdayInvalid = Number.isNaN(Birthyear);
let reminder = (Birthyear - 4) % 12;

switch (reminder) {
  case 0:
    console.log("Your Chinese zodiac is Rat");
    break;
  case 1:
    console.log("Your Chinese zodiac is Ox");
    break;
  case 2:
    console.log("Your Chinese zodiac is Tiger");
    break;
  case 3:
    console.log("Your Chinese zodiac is Rabbit");
    break;
  case 4:
    console.log("Your Chinese zodiac is Dragon");
    break;
  case 5:
    console.log("Your Chinese zodiac is Snake");
    break;
  case 6:
    console.log("Your Chinese zodiac is Horse");
    break;
  case 7:
    console.log("Your Chinese zodiac is Goat");
    break;
  case 8:
    console.log("Your Chinese zodiac is Monkey");
    break;
  case 9:
    console.log("Your Chinese zodiac is Rooster");
    break;
  case 10:
    console.log("Your Chinese zodiac is Dog");
    break;
  case 11:
    console.log("Your Chinese zodiac is Pig");
  default:
    console.log("Please input a valid number");
}
