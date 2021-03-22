/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You might only move down and right.
 * In how many ways can you travel to the goal on a grid with dim m * n?
 * @param m
 * @param n
 * @returns {number}
 */

const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill(undefined)
        .map(() => Array(n + 1).fill(0))

    table[1][1] = 1

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j]

            if (j + 1 <= n) table[i][j + 1] += current
            if (i + 1 <= m) table[i + 1][j] += current
        }
    }

    return table[m][n]
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(100, 100)) //asd