
function convertToRoman(num) {
  var workNum=num;
  var newArr=[];
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  //var i=num;
  
  for (i=0; i<decimalValue.length; i++) {
    while (workNum >= decimalValue[i]) {
      newArr.push(romanNumeral[i]);
      workNum-= decimalValue[i];    
    }
  }  
  return newArr.join("");
}

convertToRoman(52);
