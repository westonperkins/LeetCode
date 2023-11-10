var isValid = function (s) {
  // create a hashMap associating opening brackets to their cooresponding closing bracket
  const hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // make a stack to keep track of unclosed parenthesis, closed parenthesis should be removed from the stack
  let stack = [];
  // loop over array of strings
  for (let i in s) {
    // if the current string youre iterating over is in the hashMap AKA its an opening parenthesis, then push it to the stack
    if (s[i] in hashMap) {
      stack.push(s[i]);
    } else {
      // if the current string in the loop is not in the hashMap AKA a CLOSING parenthesis, then you check to see if the top of the stack is its cooresponding OPENING parenthesis, if it is, it is popped off the stack, if it is not you can return false
      let top = stack.pop();
      if (hashMap[top] !== s[i]) {
        return false;
      }
    }
  }
  // if the stack is empty you can conclude that the array had valid opening and closing parenthesis and you can return true
  return stack.length === 0;
};
