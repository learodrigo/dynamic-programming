/**
 * Write a function that accepts a target string and an array of strings.
 * It should return the number of ways the string can be constructed by concatenating elements from the words bank
 * You may reuse elements of the words bank as many times as needed.
 * @param string
 * @param wordBank array of strings
 * @returns {number}
 */

const countConstruct = (string, wordBank) => {
    const table = Array(string.length + 1).fill(0)
    table[0] = 1

    for (let i = 0; i <= table.length; i++) {
        if (table[i]) {
            for (const word of wordBank) {
                if (string.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }

    return table[string.length]
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
