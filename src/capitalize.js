function capitalize(str) {
  const strToArr = str.split('')

  const capitalizeArray = strToArr.map((letter, index) => {
    if (index === 0){
      return letter.toUpperCase()
      

    }
      return letter.toLowerCase()
    
      
    
  })
  const arrTostr = capitalizeArray.join('')
  return arrTostr

  }

  
  module.exports = capitalize;