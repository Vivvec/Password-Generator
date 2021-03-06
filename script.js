// Assignment code here

//First prompt, Length
var length = Number(prompt("Please choose password length. Must be between 8 and 128 characters long."));

//Second prompt, Numeric
var numeric = prompt("Would you like to include numeric characters?");

//Third Uppercase
var uppercase = prompt("Would you like to include uppercase characters?");

//Fourth lowercase
var lowercase = prompt("Would you like to include lowercase characters?");

//Fifth special
var special = prompt("Would you like to include special characters?")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
