// Davit Saputra Purba

const caseOne = [2, 6, 4, 1, 5, 3]
const caseTwo = [3, 2, 4, 5, 1, 6]


function minimumBribes(queue) {
  let bribes = 0;

  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];
    if (current - (i + 1) > 2) {
      return "too chaotic";
    }

    for (let j = Math.max(0, current - 2); j < i; j++) {
      if (queue[j] > current) {
        bribes++;
      }
    }
  }

  return bribes;
}


console.log(minimumBribes(caseOne))
console.log(minimumBribes(caseTwo))
