// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//adding variables
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoises;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make the variable for upper case

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
}
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  passwordLength = prompt ("Please enter the number of characters for your new password! Between 8 and 128.");
  console.log("Password lenght " + passwordLength);

  if (!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password lenght " + passwordLength);

  } else {
    confirmLower = confirm ("Does the new password need to contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm ("Does the new password need to contain upper case letters?");
    console.log("Upper case " + upperCase);
    confirmNumber = confirm ("Does the new password need to contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm ("Does the new password need to contain special characters?");
    console.log("Special Characters " + confirmSpecial);

  };

  //if all answers "no"

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoises = alert("You must choose at least one criteria");

    // if all answers "yes"

  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoises = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoises);
  }

  // partial user choises
  // if chooses 3 "yes"

  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoises = lowerCase.concat(upperCase, numbers);
    console.log(userChoises);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoises = lowerCase.concat(upperCase, special);
    console.log=(userChoises);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoises = lowerCase.concat(numbers, special);
    console.log=(userChoises);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoises = upperCase.concat(numbers, special);
    console.log=(userChoises);
  }

  // if 2 selected "yes"

  else if (confirmLower && confirmUpper) {
    userChoises = lowerCase.concat(upperCase);
    console.log=(userChoises);
  }
  else if (confirmLower && confirmNumber) {
    userChoises = lowerCase.concat(numbers);
    console.log=(userChoises);
  }
  else if (confirmLower && confirmSpecial) {
    userChoises = lowerCase.concat(special);
    console.log=(userChoises);
  }
  else if (confirmUpper && confirmNumber) {
    userChoises = upperCase.concat(numbers);
    console.log=(userChoises);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoises = upperCase.concat(special);
    console.log=(userChoises);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoises = numbers.concat(special);
    console.log=(userChoises);
  }

  // if only 1 "yes"

  else if (confirmLower) {
    userChoises = lowerCase;
    console.log=(userChoises);
  }
  else if (confirmUpper) {
    userChoises = blankUpper.concat(upperCase)
    console.log=(userChoises);
  }
  else if (confirmNumber) {
    userChoises = numbers;
    console.log=(userChoises);
  }
  else if (confirmSpecial) {
    userChoises = special;
    console.log=(userChoises);
  }
























}