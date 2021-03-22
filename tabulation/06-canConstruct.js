/**
 * Write a function that accepts a string and an array of strings.
 * It should return a boolean indicating whether or not the given string can be constructed by concatenating elements of the array.
 * You may reuse elements of the array as many times as needed.
 * @param string
 * @param wordBank
 * @returns {boolean}
 */

const canConstruct = (string, wordBank) => {
    const table = Array(string.length + 1).fill(false)
    table[0] = true

    for (let i = 0; i <= table.length; i++) {
        if (table[i]) {
            for (const word of wordBank) {
                if (string.slice(i, i + word.length) === word) {
                    table[i + word.length] = true
                }
            }
        }
    }

    return table[string.length]
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