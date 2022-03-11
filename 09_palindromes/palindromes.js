const palindromes = function (str) {
  const letters = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "");
  let pointer = 0;
  while (pointer < letters.length / 2) {
    if (letters.charAt(pointer) != letters.charAt(str.length - 1 - pointer)) {
      return false;
    }
    pointer++;
  }
  return true;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
