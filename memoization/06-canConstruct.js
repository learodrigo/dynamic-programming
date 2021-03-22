/**
 * Write a function that accepts a string and an array of strings.
 * It should return a boolean indicating whether or not the given string can be constructed by concatenating elements of the array.
 * You may reuse elements of the array as many times as needed.
 * @param string
 * @param wordBank
 * @param memo
 * @returns {boolean}
 */

const canConstruct = (string, wordBank, memo = {}) => {
    if (string in memo) return memo[string]
    if (string === '') return true;

    for (const word of wordBank) {
        if (string.indexOf(word) === 0) {
            const suffix = string.slice(word.length)

            if (canConstruct(suffix, wordBank, memo)) {
                memo[string] = true
                return memo[string]
            }
        }
    }

    memo[string] = false
    return memo[string]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])) // false