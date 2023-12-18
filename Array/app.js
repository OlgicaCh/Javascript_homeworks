console.log("Working");

//------Array------//

//-- HOMEWORK  1--//

/*function tellStory([name, mood, activity]) {
  let createStory = `This is ${name}. ${name} is a nice person. Today she is ${mood}. She is ${activity} all day. The end.`;

  return createStory;
}

let story = tellStory(["Olgica", "happy", "sweaming in the pool"]);
console.log(story);*/

//  HOMEWORK  2--//

/*function sumNumberArray(numArray) {
  let result = 0;

  for (let num of numArray) {
    result += num;
  }

  return `The sum of numbers in array is ${result}`;
}

let sum = sumNumberArray([1, 2, 3, 4, 5]);
console.log(sum);*/

//--HOMEWORK  3--//

/*function stringArray() {
  let string = ["Hello", "there", "sudents", "of", "SEDC", "!"];

  return string;
}
let sentence = stringArray();
console.log(sentence.join(" "));
 
Ova join e od google, inaku bez ova makite na sizif gi vidov :)

*/

//--HOMEWORK  4--//

/*for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + "number is even");
  } else {
    console.log(i + "number is odd");
  }
}*/

// --HOMEWORK 5--//

/*function calculateMaxMinAndSum(numbers) {
  let minimum = numbers[0];
  let maximum = numbers[0];

  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    } else if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  let sum = minimum + maximum;
  return ` Min is ${minimum} max is ${maximum} and sum is ${sum}`;
}

let numbersArray = [3, 5, 6, 8, 11];
let result = calculateMaxMinAndSum(numbersArray);
console.log(result);*/

// BONUS 5 //

/*function calculateMaxMinAndSum(numbers) {
  let minimum = numbers[0];
  let maximum = numbers[0];

  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    } else if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  let sum = minimum + maximum;
  return ` Min is ${minimum} max is ${maximum} and sum is ${sum}`;
}

let numbersArray = ["ole", 1, true, null];
let result = calculateMaxMinAndSum(numbersArray);
console.log(result);

Neznam dali vaka e tocno
*/

// --HOMEWORK 6--//

/*function combinationOfNames(firstName, lastName) {
  let fullNames = [];
  for (let i = 0; i < firstName.length; i++) {
    let numberValue = i + 1;
    let fullName = `${numberValue}. ${firstName[i]} ${lastName[i]}`;

    fullNames.push(fullName);
  }

  return fullNames;
}
let firstName = ["Olgica", "Stevan"];
let lastName = ["Chuchkova", "Tuturevski"];
let result = combinationOfNames(firstName, lastName);

console.log(result);*/
