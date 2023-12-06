var plusOne = function(digits) {
    let pointer = digits.length - 1
    for(let i = pointer; i >= 0; i--) {
        if(digits[pointer] !== 9) {
            digits[pointer]++
            return digits
        }
        if(digits[pointer] === 9) {
            if(pointer === 0) {
                digits[pointer] = 1
                digits.push(0)
                return digits
            }
            digits[pointer] = 0
            pointer--
        }
    }
    digits[pointer - 1]++
    return digits
};