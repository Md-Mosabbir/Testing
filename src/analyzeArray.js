/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
function analyzeArray(...arr){

    const minimum = Math.min(...arr)
    const maximum = Math.max(...arr)
    const {length} = arr

    const avg = (...arr) =>{
        const sum = arr.reduce((collect, currentValue) => collect + currentValue, 0)
        const average = sum / arr.length
        // eslint-disable-next-line radix
        return parseInt(average)

    }
    return {
        average: avg(...arr),
        min: minimum,
        max: maximum,
        length

    }

}



module.exports = analyzeArray