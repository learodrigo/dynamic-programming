/**
 * Write a function that accepts a target string and an array of strings.
 * It should return the number of ways the string can be constructed by concatenating elements from the words bank
 * You may reuse elements of the words bank as many times as needed.
 * @param string
 * @param wordBank array of strings
 * @param memo
 * @returns {number}
 */

const countConstruct = (string, wordBank, memo = {}) => {
    if (string in memo) return memo[string]
    if (string === '') return 1

    let counter = 0

    for (const word of wordBank) {
        if (string.indexOf(word) === 0) {
            const numWays = countConstruct(string.slice(word.length), wordBank, memo)
            counter += numWays
        }
    }

    memo[string] = counter
    return memo[string]
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])) // 0
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])) // 104856226964
