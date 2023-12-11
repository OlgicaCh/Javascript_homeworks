console.log("Working");

function calculateAmountATM() {
  let inputUser = prompt("Please enter your Amount");
  let amount = Number(inputUser);
  let isAmountInvalid = Number.isNaN(amount);
  let userAcount = 10000;
  let moneyLeft = userAcount - amount;
  if (amount > userAcount) console.log("You don't have enough money");
  else if (amount <= userAcount || moneyLeft)
    console.log("Please take your money " + "your balans is " + moneyLeft);
  else if (isAmountInvalid) console.log("Please enter valid amount");
  else console.log("Contact the Bank");
}

calculateAmountATM();
