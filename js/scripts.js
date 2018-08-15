var numberCheck = function (binary) {
  var numberStr = binary.toString();
  if (!numberStr.match(/^[01]+$/)) {
    alert("Please enter a binary number");
  }
  else return conversion(binary);
}


var conversion = function(binary) {
  var result = 0;
  var reversedArr = binary.toString().split("").reverse();
  for (var i=0; i<reversedArr.length;i++) {
    result += reversedArr[i]*Math.pow(2,i);
  }
  return result;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#inputNumber").val());
    $("#result").empty();
    $("#result").append(numberCheck(inputNumber));
  })
});
