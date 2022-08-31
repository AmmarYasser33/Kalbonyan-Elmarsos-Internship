/*
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const DolphinsAverage = (97 + 112 + 101) / 3;
const KoalasAverage = (109 + 95 + 106) / 3;
console.log(DolphinsAverage, KoalasAverage);

if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100)
  console.log("Dolphins Team win");
else if (DolphinsAverage < KoalasAverage && KoalasAverage >= 100)
  console.log("Koalas Team win");
else if (
  DolphinsAverage === KoalasAverage &&
  DolphinsAverage >= 100 &&
  KoalasAverage >= 100
)
  console.log("Both win");
else console.log("No one won");
