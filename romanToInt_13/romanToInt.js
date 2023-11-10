var romanToInt = function (s) {
  const key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = key[s[i]];
    let next = key[s[i + 1]];

    if (curr >= next || next === undefined) {
      num += curr;
    } else {
      num -= curr;
    }
  }
  return num;
};