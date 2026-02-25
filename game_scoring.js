// Davit Saputra Purba


function calculateScore(input) {
  let score = 0;
  let winStreak = 0;

  for (const char of input) {
    if (!['W', 'D', 'L'].includes(char)) {
      return 'INVALID';
    }

    if (char === 'W') {
      score += 3;
      winStreak++;

      if (winStreak % 3 === 0) {
        score += 5;
      }
    } else if (char === 'D') {
      score += 1;
      winStreak = 0;
    } else if (char === 'L') {
      score += 0;
      winStreak = 0;
    }
  }

  return score;
}

const inputs = [
  "WDLWWDL",
  "LDLWWWLDWWW",
  "DLWWWWLLDWD",
  "WWWL DDLW",
  "WALD"
];

inputs.forEach(i => {
  console.log(calculateScore(i));
});
