var removeElement = function (nums, val) {
  // initialize a counter to track how many times an instance of ~val~ occurs in the array
  let counter = 0;
  // run a for loop to iterate over the ~nums~ array
  for (let i = 0; i <= nums.length; i++) {
    // make a conditional to check if an instance of ~nums~ is equal to ~val~
    if (nums[i] === val) {
      // since all instances in ~nums~ will be numerical, if nums[i] is equal to ~val~ change it in the array to a letter
      nums[i] = "a";
      // add one to the counter
      counter++;
    }
  }
  // sort the array once the values have been changed to place all numerical values at the front of the array and all letters at the end
  nums.sort();
  // once the array has been sorted return the length of nums and subtract the counter from it
  return nums.length - counter;
};

// ALTERNATIVE - better runtime

var removeElement = function (nums, val) {
  // initialize a counter to track how many times an instance of ~val~ occurs in the array
  let counter = 0;
  // run a for loop to iterate over the ~nums~ array
  for (let i = 0; i < nums.length; i++) {
    // make a conditional to check if an instance of ~nums~ is NOT equal to ~val~
    if (nums[i] !== val) {
      // if nums[i] is not equal to val, replace nums[counter] with nums[i], counter increments every time the value of num[i] is not val so this will ensure that the values at the beginning of the array are not val
      nums[counter] = nums[i];
      // add one to the counter
      counter++;
    }
  }

  return counter;
};
