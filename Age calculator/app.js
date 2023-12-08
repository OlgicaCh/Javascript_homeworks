console.log("work!");
function calculateAge(birthYear, currentYear) {
  let age = currentYear - birthYear;
  console.log("You are " + age + " years old ");
}

calculateAge(1977, 2023);
calculateAge(1975, 2023);
calculateAge(1991, 2023);

// dali samo so povikuvanje na funkcijata se izvrsuva ili
//posle sekoe povikuvanje treba console.log
