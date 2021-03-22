/**
 * Write a function that accepts a target string and an array of strings.
 * It should return a 2D array containing all of the ways that the string can be constructed by concatenating elements of the array. Each element of the 2D array should represent one combination that constructs the string
 * You may reuse elements of the words bank as many times as needed.
 * @param string
 * @param wordBank array of strings
 * @param memo
 * @returns {array[]}
 */

const allConstruct = (string, wordBank, memo = {}) => {
    if (string in memo) return memo[string]
    if (string === '') return [[]]

    const result = []

    for (const word of wordBank) {
        if (string.indexOf(word) === 0) {
            const suffix = string.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const stringWays = suffixWays.map(way => [ word, ...way ])
            result.push(...stringWays)
        }
    }

    memo[string] = result
    return memo[string]
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
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
]))
// []