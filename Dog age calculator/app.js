console.log("working");
//convert dogage in dogyears
/*function calculateDogAge(dogAge) {
  let dogYears = 7 * dogAge;
  console.log("Your dog is " + dogYears + " years old in dog years");
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(5);

//convert dogyears in human age

function calculateDogAgeInHumanYears(dogAge) {
  let humanYears = dogAge / 7;
  console.log("Your dog is " + humanYears + " years old in human year!");
}

calculateDogAgeInHumanYears(21);
calculateDogAgeInHumanYears(49);
calculateDogAgeInHumanYears(14);*/

function calculateDogAge(years, input) {
  {
    let dogYears = years * 7;
    if (input === "dogAge")
      console.log("Your dog is " + dogYears + " years old in dog years");
  }
  {
    let humanYears = years / 7;
    if (input === "humanyears")
      console.log("Your dog is " + humanYears + " years old in human year!");
  }
}
calculateDogAge(14, "dogAge");
calculateDogAge(14, "humanyears");
