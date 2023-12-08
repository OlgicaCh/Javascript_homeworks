let numberOfPhones = 30;
let pricePerPhone = 119.95;
let taxRate = 5;
let percentageIndex = 100;
let persentage = taxRate / percentageIndex;
let amountWithoutTax = numberOfPhones * pricePerPhone;
let totalAmountWithTaxIncluded =
  amountWithoutTax + numberOfPhones * pricePerPhone * persentage;
console.log(totalAmountWithTaxIncluded);
