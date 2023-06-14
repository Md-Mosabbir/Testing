/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
function caesarCipher (str, num){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const lowerCaseStr = str.toLowerCase()
    let newStr = ''

    for (let i = 0; i < lowerCaseStr.length; i++) {
        const currentLetter = lowerCaseStr[i]
        if(currentLetter === '') {
            newStr += currentLetter
            continue

        }
        const currentIndex = alphabet.indexOf(currentLetter)
        const newIndex = currentIndex + num

        if (newIndex > 25) newIndex - 26
        if(newIndex < 0) newIndex + 26
        if (str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase()
        }
        else newStr += alphabet[newIndex]
    }
    return newStr
    
}





module.exports = caesarCipher