var isPalindrome = function (x) {
  // if x is less than 0 it is negative, and in this case negative numbers will not be considered Palindromes
  if (x < 0) {
    return false;
  }
  // this var will store the reversed number
  let reversed_num = 0;
  // this will be used to iterate over the digits of x
  let temp = x;
  // while temp (x) is not equal to 0
  while (temp !== 0) {
    // in order to cut the last digit off of x, you must mod it by 10
    let digit = temp % 10;
    // add the last digit to the reversed number by multiplying reversed_num by 10 and adding the last digit
    reversed_num = reversed_num * 10 + digit;
    // then cuts off the last digit once its been used and repeats the process until temp is equal to 0
    temp = Math.floor(temp / 10);
  }
  // if reversed_num is equal to x, then it is a palindrome
  return reversed_num === x;
};
