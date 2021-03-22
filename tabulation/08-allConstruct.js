/**
 * Write a function that accepts a target string and an array of strings.
 * It should return a 2D array containing all of the ways that the string can be constructed by concatenating elements of the array. Each element of the 2D array should represent one combination that constructs the string
 * You may reuse elements of the words bank as many times as needed.
 * @param string
 * @param wordBank array of strings
 * @returns {array[]}
 */

const allConstruct = (string, wordBank, memo = {}) => {
    const table = Array(string.length + 1).fill(undefined).map(() => [])

    table[0] = [[]]

    for (let i = 0; i <= table.length; i++) {
        for (const word of wordBank) {
            if (string.slice(i, i + word.length) === word) {
                const newComb = table[i].map(sub => [ ...sub, word ])
                table[i + word.length].push(...newComb)
            }
        }
    }

    return table[string.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
//     ['ab', 'cd', 'ef],
//     ['ab', 'c', 'def'],
//     ['abc', 'def'],
//     ['abcd', 'ef'],
// ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// []
console.log(allConstruct('eeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
]))
// []
