const hashTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const checkInHashTable = (char, sum) => {
  for (let item in hashTable) {
    if (char == item) {
      if (sum < hashTable[item]) {
        sum = hashTable[item] - sum;
      } else {
        sum += hashTable[item];
      }
    }
  }
  return sum;
};

const calculate = (str) => {
  let sum = 0;
  let prev = null;
  for (let i = 0; i < str.length; i++) {
    i > 0 ? (prev = str[i - 1]) : null;
    sum = checkInHashTable(str[i], sum, prev);
  }
  return sum;
};

console.log(calculate("LVIII"));
