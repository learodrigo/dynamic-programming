/**
 * Write a function that takes in a number as an argument.
 * It should return the n-th number of the Fibonacci sequence.
 * The 0th number of the sequence is 0
 * The 1st number of the sequence is 1
 * To generate the next number of the sequence, we sum the previous one.
 * @param n
 * @returns {number}
 */
const fib = (n) => {
    const table = Array(n + 1).fill(0)
    table[1] = 1

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }

    return table[n]
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(500)) // 12586269025
