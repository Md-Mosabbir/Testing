function reverseString(str) {
    const strToArr = str.split('')

    const reversed = strToArr.reverse()

    return reversed.join('')


}

module.exports = reverseString;