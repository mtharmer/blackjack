export default function scoreHelper(cards) {
  if (!cards || cards.length <= 0) {
    return 0;
  }

  var sum = 0;
  var altSum = 0;
  var score = cards.reduce((acc, cur) => acc + cur.value, sum);
  var altScore = cards.reduce((acc, cur) => acc + ((cur.alternate_value > 0) ? cur.alternate_value : cur.value), altSum)

  var usableScore;
  if (score == altScore && score <= 21) {
    usableScore = score;
  } else if (score > 21 && altScore <= 21) {
    usableScore = altScore;
  } else if (score <= 21 && altScore <= 21) {
    usableScore = Math.max(score, altScore);
  } else {
    usableScore = Math.min(score, altScore);
  }

  return usableScore;
}
