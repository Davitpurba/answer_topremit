// Davit Saputra Purba

const caseOne ="aabbccddeefghi";
const casetwo ="abcdefghhgfedecba";
const caseThree ="aabbc";

function isValidString(s) {
  const freq = {};
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  const counts = Object.values(freq);

  const uniqueCounts = [...new Set(counts)];
  if (uniqueCounts.length === 1) {
    return "YES";
  }

  if (uniqueCounts.length > 2) {
    return "NO";
  }

  const [a, b] = uniqueCounts;
  const countA = counts.filter(c => c === a).length;
  const countB = counts.filter(c => c === b).length;

  if ((a === 1 && countA === 1) || (b === 1 && countB === 1)) {
    return "YES";
  }

  if (Math.abs(a - b) === 1) {
    if ((countA === 1 && a > b) || (countB === 1 && b > a)) {
      return "YES";
    }
  }

  return "NO";
}
  
console.log(isValidString(caseOne));  
console.log(isValidString(casetwo)); 
console.log(isValidString(caseThree));
