var removeDuplicates = function (nums) {
  let counter = 0;
  // establish a counter to start at zero -> this will be pointing to the first instance in nums array
  for (let i = 1; i < nums.length; i++) {
    // make a for loop, starting at 1 so that it is pointing to 1 index greater than counter will be to start with
    if (nums[counter] !== nums[i]) {
      // if nums[counter] and nums[i] are not equal, in this case nums[0] and nums[1], then they are not duplicates and nums[i] should be moved next to nums[counter] in the array
      counter++;
      // iterate counter one time so that we are keeping track of the current list of NON-duplicates AND so that can now assign a value to the next place in the nums array which will still be nums[counter] but now the place after the current counter which we know is a valid NON-dup
      nums[counter] = nums[i];
      // after iterating counter once, nums[counter] will be equal to nums[i] which we just established in the if statement is not a duplicate
    }
  }
  // we started at 0 because arrays are zero indexed so to reflect an accurate number of non duplicates in the array we add one to counter and return
  return counter + 1;
};
