'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var resultado = parseInt(num,2)
  return resultado

}

function DecimalABinario(num) {
  // tu codigo aca
  var binary = "";
  while ( num ){
    binary = num % 2 + binary
    num = Math.floor ( num / 2 )
  }
  return binary
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}