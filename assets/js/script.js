// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//adding variables


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
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var passwordLength;

  passwordLength = prompt ("Please enter the number of characters for your new password! Between 8 and 128.");
  while (passwordLength !== parseInt(passwordLength, 10).toString()) {
    alert ("You can only use whole numbers!");
    passwordLength = prompt ("Enter number");
    }

  if (!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    while (passwordLength !== parseInt(passwordLength, 10).toString()) {
      alert("You can only use numbers!");
      passwordLength = prompt("Enter number");
        }

  } else {
    confirmLower = confirm ("Does the new password need to contain lower case letters?");
    confirmUpper = confirm ("Does the new password need to contain upper case letters?");
    confirmNumber = confirm ("Does the new password need to contain numbers?");
    confirmSpecial = confirm ("Does the new password need to contain special characters?");
  };

  //if all answers "no"

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose at least one criteria");
    return generatePassword();

    // if all answers "yes"

  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
  }

  // partial user Choices
  // if chooses 3 "yes"

  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
  }

  // if 2 selected "yes"

  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
  }

  // if only 1 "yes"

  else if (confirmLower) {
    userChoices = lowerCase;
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase)
  }
  else if (confirmNumber) {
    userChoices = numbers;
  }
  else if (confirmSpecial) {
    userChoices = special;
  };

  var passwordBlank = [];

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

// final password

var password = passwordBlank.join("");
console.log=("Your new password is: " + password);
return password;

}