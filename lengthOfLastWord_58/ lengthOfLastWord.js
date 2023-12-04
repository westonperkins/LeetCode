var lengthOfLastWord = function (s) {
  // console.log(s.trim()) <-- this method with cut the whitespace out of a string from the front and back, eliminating the spaces at the beginning or the end of a string making the algo much easier, the following function doesn't use .trim()
  let pointer = s.length - 1;
  while (s[pointer] === " ") {
    pointer--;
  }
  let len = 0;
  for (let i = pointer; i >= 0; i--) {
    if (s[i] !== " ") {
      len++;
    } else {
      return len;
    }
  }
  return len;
};
