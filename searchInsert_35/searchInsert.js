// NON binary search option

var searchInsert = function (nums, target) {
  // if target is less than the first entry in the array, since its sorted, you know you can place target at index 0
  if (target < nums[0]) return 0;
  // loop over the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the current iteration of nums is equal to target then return the index that it is found at
    if (nums[i] === target) {
      return i;
    } else {
      // if its not then establish two variables, one that is equal to the current iteration, and one that is equal the value of the index after the current iteration, this is to look for if the current is less than the target and the one after the current is greater than the target. in this case you can conclude that the target would fall in the index in betweem the two, AKA i + 1
      let curr = nums[i];
      let next = nums[i + 1];
      // if the current index is less and the next index is greater return i + 1 since you know target would fall in between those two values
      if (curr < target && next > target) {
        return i + 1;
        // if next AKA i + 1 is undefined meaning youve reached the end of the array you can conclude that the target is greater than the last instance in the array so you can place it at the end of the array
      } else if (next === undefined) {
        return nums.length;
      }
    }
  }
};

// BINARY SEARCH

var searchInsert = function (nums, target) {
  // if the length of the array is zero, you know that the only index you could place the target is at the 0th index, so you can return zero
  if (nums.length === 0) {
    return 0;
  }
  // place a pointer at the beginning of the array and the end of the array, youre going to find the middle point and continue to shorten the array on every iteration based off of its pointers

  let left = 0;
  let right = nums.length - 1;
  // loop through the array until both pointers are equal to each other AKA pointing to the same index
  while (left <= right) {
    // find the mid point in between each of the current pointers, round to a whole number to make sure youre getting an accurate index value, does not matter if its .floor or .ceil
    let mid = Math.floor((left + right) / 2);
    // if the midpoint is the target, you got lucky and you can return the mid AKA the index of the target
    if (target === nums[mid]) {
      return mid;
    }
    // if the target is greater than the midpoint value of the array, then you can completely disregard everything to the left of the midpoint, since this is a sorted array **binary search only works on sorted arrays**
    if (target > nums[mid]) {
      // now that you know the target value must live on in between the midpoint and the right pointer (greater pointer) you now move the left pointer to one value greater than the midpoint to shorten any viable space of consideration in the array, since youve already checked to see if the target is equal to nums[mid]
      left = mid + 1;
      // if the target is less than nums[mid], than you disregard the right side of the array and only focus on the lesser values, from the left pointer to the midpoint
    } else if (target < nums[mid]) {
      // now you can move the right pointer to one less than the midpoint since you know target must live within that smaller range
      right = mid - 1;
    }
  }
  return left;
};
