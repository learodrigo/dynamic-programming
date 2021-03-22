/**
 * Write a function that takes in a target and an array of numbers as arguments, it should return an array containing any combination of elements that add up to exactly that target. If there is no combination, null. If there are multiple combinations, you may return any single one.
 * @param target
 * @param numbers
 * @param memo
 * @returns {number[]}
 */

const howSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    for (const num of numbers) {
        const reminder = target - num
        const res = howSum(reminder, numbers, memo)

        if (res !== null) {
            memo[target] = [ ...res, num ]
            return memo[target]
        }
    }

    memo[target] = null
    return memo[target]
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(3000, [7, 14])) // null