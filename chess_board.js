// Davit Saputra Purba


const caseOne = [
    [2, 1],
    [3, 8],
    [4, 4],
    [6, 2],
    [7, 4],
  ]

const caseTwo = [
    [1, 3],
    [4, 9],
    [5, 2],
  ]


function countSafeTiles(rooks) {
  const attackedRows = new Set();
  const attackedCols = new Set();
  const occupied = new Set();

  for (const [r, c] of rooks) {
    if (r < 1 || r > 8 || c < 1 || c > 8) {
      return "X";
    }

    const key = `${r},${c}`;
    if (occupied.has(key)) {
      return "X";
    }
    occupied.add(key);
    attackedRows.add(r);
    attackedCols.add(c);
  }
  const safeRows = 8 - attackedRows.size;
  const safeCols = 8 - attackedCols.size;
  return safeRows * safeCols;
}

console.log(
  countSafeTiles(caseOne)
);
console.log(
  countSafeTiles(caseTwo)
);
