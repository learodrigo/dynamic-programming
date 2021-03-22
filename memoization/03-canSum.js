/**
 * Write a function that takes in a target and an array of numbers, and it should return a boolean indicating whether or not it is possible to generate the target using the numbers from the array.
 * You may use an element of the array as many times as needed.
 * You may assume that all input numbers are positive.
 * @param targetSum
 * @param numbers
 * @params memo
 * return boolean
 */

const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if (target < 0) return false

    for (let num of numbers) {
        const reminder = target - num

        if (canSum(reminder, numbers, memo)) {
            memo[target] = true
            return memo[target]
        }
    }

    memo[target] = false
    return memo[target]
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(7, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
