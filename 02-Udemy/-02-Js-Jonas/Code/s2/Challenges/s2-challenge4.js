bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i];
  const tip = calcTip(bill);
  tips.push(tip);
  totals.push(tip + bill);
}
console.log(tips);
console.log(totals);

//Bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    sum += arr[ind];
  }
  avg = sum / arr.length;
  return avg;
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(calcAverage(numbers));
console.log(calcAverage(totals));
