var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]
        if (difference in map) {
            return [map[difference], i]
        }
        else {
            map[nums[i]] = i
        }
    }
};