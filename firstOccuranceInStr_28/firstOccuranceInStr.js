// native method solution: indexOf

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// native method solution: slice

var strStr = function (haystack, needle) {
    // define the length of the needle that you are searching for
    let len = needle.length;
    // if the length of haystack or needle is 0 then you can automatically return -1, declaring that needle does not exist in haystack
    if (!haystack.length || !len) {
        return -1
    }
    // for loop through haystack to check its individual characters in the string
    for (let i = 0; i < haystack.length; i++) {
        // if a substring, starting at index i, is equal to needle, return the index of i 
        if (haystack.slice(i, i + len) === needle)
            return i
    }
    // if not, return -1
    return -1
};