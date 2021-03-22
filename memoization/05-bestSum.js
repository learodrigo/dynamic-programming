/**
 * Write a function that takes in a target and array of numbers as arguments.
 * The function should return an array containing the shortest combination of numbers that add up to exactly the target.
 * If there's a tie, you should return any of them.
 * @param target
 * @param numbers
 * @param memo
 * @returns {number[]}
 */

const bestSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    let shortest = null

    for (const num of numbers) {
        const remainder  = target - num
        const remComb = bestSum(remainder, numbers, memo)

        if (remComb !== null) {
            const comb = [ ...remComb, num]
            if (shortest === null || comb.length < shortest.length) {
                shortest = comb
            }
        }
    }

    memo[target] = shortest
    return memo[target]
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]