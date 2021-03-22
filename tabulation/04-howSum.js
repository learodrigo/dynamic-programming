/**
 * Write a function that takes in a target and an array of numbers as arguments.
 * It should return an array containing any combination of elements that add up to exactly that target.
 * If there is no combination, null.
 * If there are multiple combinations, you may return any single one.
 * @param target: int
 * @param numbers: array
 * @returns {null | []}
 */

const howSum = (target, numbers) => {
    const table = Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num ]
            }
        }
    }

    return table[target]
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(3000, [7, 14])) // null