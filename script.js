// Assignment code here
var length = prompt("Please choose password length. Must be between 8 and 128 characters long.");

if (length != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
  console.log(length);
}


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
