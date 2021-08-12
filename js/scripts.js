// Business logic:
// let number1;
function convert(number1) {
  const result = (number1 * 9/5) + 32;
  return result;
}

function convert(number2) {
  const result = (number2 - 32) * 5/9;
  return result;
}


// function convertCtoF(num1){
// 	const result = (num1 * 9/5) + 32;
//   return result;
// }

// User interface logic:

$(document).ready(function() {
  $("form#convert").submit(function(event) {
   event.preventDefault();
    const number1 = parseInt($("#convert1").val());
    const result = convert(number1);
    $("#output").text(result);
  });
});


(32°F − 32) × 5/9 









// function convertCtoF(num1){
// 	const result = (num1 * 9/5) + 32;
//   return result;
// }

// const num1 = parseInt(prompt("Enter C temperature:"));
// const fResult = convertCtoF(num1);
// alert(fResult);


// function convertFtoC(num1){
// 	const result = (num1 - 32) * 5/9;
//   return result;
// }

// const num1 = parseInt(prompt("Enter F temperature:"));
// const fResult = convertFtoC(num1);
// alert(fResult);
