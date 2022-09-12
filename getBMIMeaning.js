const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  let x = calculateBMI(weight,height)
  if(x < 18.5){
    return "Underweight"
  }
  else if(x >= 18.5 && x <= 24.9){
    return "Normal weight"
  }else{
    return "Overweight"
  }
}
module.exports = getBMIMeaning
