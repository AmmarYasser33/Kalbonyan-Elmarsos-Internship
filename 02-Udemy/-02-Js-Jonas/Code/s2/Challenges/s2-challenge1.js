/*
- Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
- Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (v1, v2, v3) => (v1 + v2 + v3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(dolScore, kolScore) {
  if (dolScore >= 2 * kolScore) {
    console.log(`Dolphins win (${dolScore} vs. ${kolScore})`);
  } else if (kolScore >= 2 * dolScore) {
    console.log(`Koalas win (${kolScore} vs. ${dolScore})`);
  } else {
    console.log("No team win");
  }
}
checkWinner(avgDolphins, avgKoalas);
