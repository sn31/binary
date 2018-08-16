var numberCheck = function (binary, base) {
  var numberStr = binary.toString();
  if (!numberStr.match(/^[01]+$/) && base.isNumeric) {
    alert("Please enter a binary number");
  }
  else return conversionBtoD(binary);
}


var conversionBtoD = function (binary) {
  var result = 0;
  var reversedArr = binary.toString().split("").reverse();
  for (var i = 0; i < reversedArr.length; i++) {
    result += reversedArr[i] * Math.pow(2, i);
  }
  return result;
}

var conversionDtoB = function (decimal, base) {
  var result = "";
  var remainder = 0;
  var exp = 0;
  while (decimal > 0) {
    remainder = decimal % base;
    result += remainder.toString();
    decimal = Math.floor(decimal / base);
    exp++;
  }
  return result.split("").reverse().join("");
}

$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault();
    var inputNumber = parseInt($("#inputNumber").val());
    var inputBase = parseInt($("#inputBase").val());
    if (inputBase !== "") {
      $("#result").empty();
      $("#result").append(conversionDtoB(numberCheck(inputNumber, inputBase), inputBase));
      console.log(numberCheck(inputNumber, inputBase));
      console.log(conversionDtoB(numberCheck(inputNumber, inputBase), inputBase));
    }
    else {
      $("#result").empty();
      $("#result").append(numberCheck(inputNumber, inputBase));
    }

  })
});
