/**
 * Write a function that takes in a target and array of numbers as arguments.
 * The function should return an array containing the shortest combination of numbers that add up to exactly the target.
 * If there's a tie, you should return any of them.
 * @param target
 * @param numbers
 * @returns {number[]}
 */

const bestSum = (target, numbers) => {
    const table = Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const num of numbers) {
                const comb = [ ...table[i], num ]
                if (!table[i + num] || table[i + num].length > comb.length) {
                    table[i + num] = comb
                }
            }
        }
    }

    return table[target]
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(300, [1, 2, 5, 25])) // [25, 25, 25, 25]
console.log(bestSum(300, [25, 2, 1, 5])) // [25, 25, 25, 25]